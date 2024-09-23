# Demons & dependencies

## Introduction

In the [tutorial](/en_US/dev/tutorial_plugin) and the [documentation](/en_US/dev/plugin_template) you learned how to code your first plugin with relatively simple actions triggered by the user via an action command or by a task scheduled by the core (the crons).
The plugin is then able to occasionally fetch information (for example via http request) or to do all kinds of operations as long as it can be coded in PHP.

It will happen that you need more than that, a few examples without being exhaustive:

- use system resources, for example usb key or other hardware (bluetooth...)
- maintain a connection with a remote system (in a local network or on the internet but not jeedom)
- keep processes active in the background, which is not the case with PHP code which only "lives" during the execution of the http request
- do real-time processing

For this, most of the time we use a "daemon".
Don't panic, everything is already planned in the jeedom core to help us put this demon in place and we will detail that here.

## File structure of a daemon

The code and / or the executable of your daemon must obviously be in the tree structure of your plugin and must therefore be included and delivered with the archive when installing a plugin.
There is no strict rule on the exact location of your daemon, however convention is to place it in the `subdirectory./ resources / `of the plugin.

In the plugin template you will find the basics to implement a daemon in python and this is the example we will use in this documentation however you are free to develop your daemon in the language of your choice provided that it can be executed on [platforms supported by Jeedom](/en_US/compatibility/).
Most Jeedom plugin daemons are in python or nodeJs but there are also some in .netCore and certainly other techs.

You will also find some useful methods for a nodeJs daemon which may be detailed in a future version of this documentation. For now I invite you to consult the community dev to align yourself with the other developers on everything related to NodeJs, mainly on the version to use.

Template directory structure:

![image](images/daemon_struct.png)

### the python demon

In the template plugin, the daemon directory has been named `demond`, and the daemon itself is called` demond.py`.
These names are arbitrary, you are free to change them.
The convention is to take the plugin ID followed by the letter ´d´. This gives for example for the plugin `blea` the directory`./ resources / blead / `which contains among other things the file` blead.py`, this file being the starting point of the daemon.

> **TIP**
>
> Do not hesitate to take inspiration from official plugins with daemon to understand the details, such as blea, openzwave or sms.

### the jeedom package for a python daemon

Jeedom provides with the plugin template a python package offering the basic classes and methods useful for the management of the daemon and the communication between the daemon and the php code of your plugin.
These classes can be found in the `./resources/demond/jeedom/jeedom/directory.py` (visible in the screenshot above).
To get started you don't need to know the implementation details of these classes and methods so here you will just have a summary of what they allow.

#### class jeedom_utils()

This class is a set of useful static methods such as `convert_log_level` to convert the loglevel received from jeedom to a log level of the python class` logging` or `find_tty_usb` to return a list of device on the system.
We will not detail them all here, the name of each of the methods is quite explicit, you will discover them by immersing yourself in the code.

#### class jeedom_serial()

This class encapsulates reading and writing to a device.
Again we will not detail the class, the methods speak for themselves, just know that it exists if you need it.

> **Warning**
>
> If your daemon does not need to do this type of action, you will have to remember not to use or import this class because the `serial` python package is not installed by default and in this case your daemon will not start (problem seen several times on community). We will come back to this in the management of dependencies.

#### class jeedom_socket () & jeedom_socket_handler()

You will not use the `jeedom_socket_handler ()` class directly, it is only for `jeedom_socket ()`.
The purpose of `jeedom_socket ()` is to ensure downward communication (from your php code to the daemon).
When your plugin has to send an instruction to your daemon it will be able to do it via this socket, you will see an example later in this documentation.

So the class opens a tcp socket and listens. When a message is received it is put in a queue which will be read later by your daemon, we will come back to it.

Again, you do not have to use this mechanism, you are free to create something else (http server for example) but this is what is provided by Jeedom as a base, it is light and it works very well.

#### class jeedom_com()

This ensures the upstream communication, from the daemon to your php code.
You will mainly use `send_change_immediate ()` at the beginning which therefore allows sending a json payload to jeedom via an http request. It's very simple and effective, we'll see an example later.

### Python demon skeleton

Now that we know the environment, we can look at the part that interests us the most: the demon and what we will have to code.

We will therefore look in detail at the skeleton of a demon as proposed by Jeedom, open the file `demond.py` and we will start with the last lines which are in fact the start of the program:

`` ``python
_log_level = "error"
_socket_port = 55009 # to modify
_socket_host = 'localhost'
_device = 'auto'
_pidfile = '/tmp/demond.pid'
_apikey = ''
_callback = ''

for arg in sys.argv:
    if arg.startswith ("- loglevel="):
        temp, _log_level = arg.split("=")
    elif arg.startswith ("- socketport="):
        temp, _socket_port = arg.split("=")
    elif arg.startswith ("- sockethost="):
        temp, _socket_host = arg.split("=")
    elif arg.startswith ("- pidfile="):
        temp, _pidfile = arg.split("=")
    elif arg.startswith ("- apikey="):
        temp, _apikey = arg.split("=")
    elif arg.startswith ("- device="):
        temp, _device = arg.split("=")

_socket_port = int (_socket_port)

jeedom_utils.set_log_level (_log_level)

logging.info ('Start demond')
logging.info ('Log level : '+ str (_log_level))
logging.info ('Socket port : '+ str (_socket_port))
logging.info ('Socket host : '+ str (_socket_host))
logging.info ('PID file : '+ str (_pidfile))
logging.info ('Apikey : '+ str (_apikey))
logging.info ('Device : '+ str (_device))

signal.signal (signal.SIGINT, handler)
signal.signal (signal.SIGTERM, handler)

try:
    jeedom_utils.write_pid (str (_pidfile))
    jeedom_com = jeedom_com (apikey = _apikey, url = _callback, cycle = _cycle)
    if not jeedom_com.test():
        logging.error ('Network communication issues. Please fix your Jeedom network configuration.')
        shutdown()
    jeedom_socket = jeedom_socket (port = _socket_port, address = _socket_host)
    listen()
except Exception as e:
    logging.error ('Fatal error : '+ str (e))
    shutdown()
`` ``

Some variable initializations:

`` ``python
_log_level = "error" # the default log level, in text format as sent by Jeedom
_socket_port = 55009 # the port that your daemon will use by default to open the Jeedom listening socket, to be modified.
_socket_host = 'localhost' # the interface on which to open the socket, a priori do not change.
_device = 'auto' # is useless if you are not using a hardware device
_pidfile = '/tmp/demond.pid' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas; nom du démon à modifier comme expliqué ci-dessus;
_apikey = '' # apikey to authenticate the communication between Jeedom and your demon
_callback = '' ## the callback url to send notifications to Jeedom (and your php code)
`` ``

> **Warning**
>
> You have to be careful when choosing the port you are going to use for your socket, this is a possible point of improvement under jeedom, because there is no mechanism in place to avoid collisions: so if another plugin uses the same port as you this will obviously be a problem. For the moment the only method to make your choice is to search among the existing plugins for the ports already used and to align between dev on community (there are already open subjects on this subject)). In addition it is important to leave this configurable by the user in the configuration of your plugin so that the port number can be modified if such a conflict should occur.

Then we get the arguments received from the command line, this command line will be generated by your php code, we will come back to it.
It's up to you to remove what is not useful (such as the device argument) or add others such as a user / pswd if your daemon must connect to a remote system.

`` ``python
for arg in sys.argv:
    if arg.startswith ("- loglevel="):
        temp, _log_level = arg.split("=")
    elif arg.startswith ("- socketport="):
        temp, _socket_port = arg.split("=")
    elif arg.startswith ("- sockethost="):
        temp, _socket_host = arg.split("=")
    elif arg.startswith ("- pidfile="):
        temp, _pidfile = arg.split("=")
    elif arg.startswith ("- apikey="):
        temp, _apikey = arg.split("=")
    elif arg.startswith ("- device="):
        temp, _device = arg.split("=")
`` ``

Then there are a few log lines and these two lines, classic in python, which simply record the method to call in the event that these two interrupt signals are received, which will stop the daemon:

`` ``python
signal.signal (signal.SIGINT, handler)
signal.signal (signal.SIGTERM, handler)
`` ``

and the `handler` method which is defined a little higher in the daemon:

`` ``python
def handler (signum = None, frame = None):
    logging.debug ("Signal% i caught, exiting ..."% int (signum))
    shutdown()
`` ``

which only adds a log and calls the `shutdown ()` method defined just below:

`` ``python
def shutdown():
    logging.debug ("Shutdown")
    logging.debug ("Removing PID file" + str (_pidfile))
    try:
        os.remove (_pidfile)
    except:
        pass
    try:
        jeedom_socket.close()
    except:
        pass
    try:
        jeedom_serial.close()
    except:
        pass
    logging.debug ("Exit 0")
    sys.stdout.flush()
    os._exit (0)
`` ``

It is in this method that you must write the code to be executed in the event of shutdown of the daemon, for example logout of the remote system and cleanly close open connections.

> **Warning**
>
> you must adapt this method and remove the code which is not necessary in your case, in particular the try / except on `jeedom_serial.close () `if you don't use this class.

If we go back to starting the daemon, here is the commented continuation:

`` ``python
try:
    jeedom_utils.write_pid (str (_pidfile)) # write the pidfile that the jeedom core will monitor to determine if the daemon is started
    jeedom_com = jeedom_com (apikey = _apikey, url = _callback, cycle = _cycle) # creation of the jeedom_com object
    if not jeedom_com.test(): #first test to verify that the callback url is correct
        logging.error ('Network communication issues. Please fix your Jeedom network configuration.')
        shutdown()
    jeedom_socket = jeedom_socket (port = _socket_port, address = _socket_host) # we declare the socket to receive orders from jeedom
    listen () # and we listen
except Exception as e:
    logging.error ('Fatal error : '+ str (e))
    shutdown()
`` ``

The `listen ()` method defined at the beginning of the file:

`` ``python
def listen():
    jeedom_socket.open()
    try:
        while 1:
            time.sleep (0.5)
            read_socket()
    except KeyboardInterrupt:
        shutdown()
`` ``

Nothing to modify here, we can see that the socket is open and then an infinite loop to read the socket every half a second

The `read_socket ()` method

`` ``python
def read_socket():
    global JEEDOM_SOCKET_MESSAGE
    if not JEEDOM_SOCKET_MESSAGE.empty():
        logging.debug ("Message received in socket JEEDOM_SOCKET_MESSAGE")
        message = json.loads (jeedom_utils.stripped (JEEDOM_SOCKET_MESSAGE.get()))
        if message ['apikey'] != _apikey:
            logging.error ("Invalid apikey from socket : " + str (message))
            return
        try:
            print 'read'
        except Exception, e:
            logging.error ('Send command to demon error : '+ str (e))
`` ``

The `JEEDOM_SOCKET_MESSAGE` variable is a python` queue () `fed by the` jeedom_socket () `class as seen previously.

If the queue is not empty, we load the json and we check that the api key received with the message corresponds to the one received when starting the daemon (`_apikey`) then we can read the message and do our actions in the try / except:

`` ``python
        try:
            print 'read'
        except Exception, e:
            logging.error ('Send command to demon error : '+ str (e))
`` ``

So instead of the `` print 'read' 'it's up to you to read the relevant elements of the message that your plugin will have sent and to trigger the actions or call your classes or methods specific to your plugin.

From here on you have a demon that can be executed even if it doesn't do anything yet (that's your job).

## Adaptation of the php code of the plugin

Having a daemon and understanding its structure is very good, but a few key elements are missing so that your plugin (php code) can control this daemon and so that the core is also informed that it exists.

### plugin_info / info.json

In the info file.json of your plugin, you must add the `hasOwnDeamon` property and assign the value` true`, example:

`` ``json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 10,
    ...
}
`` ``

We will see later the use of `hasDependency` and` maxDependancyInstallTime`.

### Managing the daemon in your eqLogic class

In the eqLogic class of your plugin there are some methods to implement for the proper management of the daemon.

#### Deamon_info function()

The `deamon_info()` function will be called by the core when displaying the following frame in your plugin's configuration page, it must exist:

![image](images/daemon_info.png)

Typically it will look like this, the returned array and the keys used in this array are obviously important.
You can copy / paste the code below as it is and adapt the code at the end of the function to check the necessary configuration for your plugin.

`` ``php
    public static function deamon_info() {
        $return = array();
        $return['log'] = __CLASS__;
        $return['state'] = 'nok';
        $pid_file = jeedom::getTmpFolder (__ CLASS__) . '/deamon.pid';
        if (file_exists ($ pid_file)) {
            if (@posix_getsid (trim (file_get_contents ($ pid_file)))) {
                $return['state'] = 'ok';
            } else {
                shell_exec (system::getCmdSudo() . 'rm -rf ' . $pid_file . ' 2> & 1> / dev / null ');
            }
        }
        $return['launchable'] = 'ok';
        $user = config::byKey('user', __CLASS__); // exemple si votre démon à besoin de la config user,
        $pswd = config::byKey('password', __CLASS__); // password,
        $clientId = config::byKey('clientId', __CLASS__); // et clientId
        if ($ user == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le nom d\'utilisateur n\'est pas configuré', __FILE__);
        } elseif ($ pswd == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le mot de passe n\'est pas configuré', __FILE__);
        } elseif ($ clientId == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('La clé d\'application n\'est pas configurée', __FILE__);
        }
        return $ return;
    }
`` ``

> **Warning**
>
> There is no typo in the example, the method is named `deamon_info ()` and not `daemon_info`, the error is in the core.

The `state` key obviously corresponds to the status displayed on the screen, we can read above that we are testing the presence of our "pid_file" to know if the daemon is running or not.

The `launchable` key corresponds to the" Configuration "column in the frame and we can therefore check if the configuration is complete and correct to be able to start the daemon. `launchable_message` allows to display a message to the user in case of" NOK"

#### Deamon_start function()

The `deamon_start ()` function is, as its name suggests, the method that will be called by the core to start your daemon.
You can copy / paste the code below as is and modify the lines indicated.

`` ``php
    public static function deamon_start() {
        self::deamon_stop ();
        $deamon_info = self::deamon_info();
        if ($ deamon_info ['launchable'] != 'ok') {
            throw new Exception (__ ('Please check the configuration', __FILE__));
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = system::getCmdPython3(__CLASS__) . " {$path}/demond.py"; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'http:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --pid ' . jeedom::getTmpFolder (__ CLASS__) . '/deamon.pid'; // et on précise le chemin vers le pid file (ne pas modifier)
        log::add (__ CLASS__, 'info', 'Launch daemon');
        $result = exec($cmd . ' >> ' . log::getPathToLog('template_daemon') . ' 2>&1 &'); // 'template_daemon' est le nom du log pour votre démon, vous devez nommer votre log en commençant par le pluginid pour que le fichier apparaisse dans la page de config
        $i = 0;
        while ($ i <20) {
            $deamon_info = self::deamon_info();
            if ($ deamon_info ['state'] == 'ok') {
                break;
            }
            sleep(1);
            $i++;
        }
        if ($ i> = 30) {
            log::add (__ CLASS__, 'error', __ ('Unable to start daemon, check log', __FILE__), 'unableStartDeamon');
            return false;
        }
        message::removeAll (__ CLASS__, 'unableStartDeamon');
        return true;
    }
`` ``

Only modify the lines with a comment, the rest must remain unchanged.

Note that we start by stopping the daemon, this to manage the restart.
Then we check if the daemon can actually be started with the `deamon_info ()` method and we generate the command line in the variable `$ cmd` to start our daemon, here with python3. Note the use of the `system` function::getCmdPython3(__CLASS__)` which will return the path to python3 to use this to be compatible with Debian 12 if your dependencies are installed by the core.

#### Deamon_stop function()

This method will be used to stop the daemon: we get the pid of the daemon, which was written in the "pid_file" and we send the system kill to the process.

`` ``php
    public static function deamon_stop() {
        $pid_file = jeedom::getTmpFolder (__ CLASS__) . '/deamon.pid'; // ne pas modifier
        if (file_exists ($ pid_file)) {
            $pid = intval(trim(file_get_contents($pid_file)));
            system::kill ($ pid);
        }
        system::kill ('templated.py'); // name of the daemon to modify
        sleep(1);
    }
`` ``

Arrived here you declared the demon in the info.json and implemented the 3 methods necessary for the Jeedom core to start and stop your daemon as well as display its status. The prerequisites are in place.

### Communication between the daemon and the PHP code

It remains to manage the communication from and to the daemon. In the python code we have already seen how it was handled: as a reminder the `listen ()` and `read_socket ()` method which listens on a socket and the `send_change_immediate ()` method to send a json payload to the php code.

It is therefore necessary to manage the equivalent on the PHP side.

#### Send a message to the daemon

This function does not exist in the core and is not standard for all Jeedom plugins, it is not mandatory either.
This is the function I use (@Mips) in each of my plugins having a daemon, I put it here for you and you do what you want with it;-)

It therefore receives an array of values as a parameter and is responsible for sending it to the socket of the daemon which will therefore be able to read this array in the `read_socket ()` method that we saw previously.

`` ``php
    public static function sendToDaemon ($ params) {
        $deamon_info = self::deamon_info();
        if ($ deamon_info ['state'] != 'ok') {
            throw new Exception ("The daemon is not started");
        }
        $params['apikey'] = jeedom::getApiKey(__CLASS__);
        $payLoad = json_encode($params);
        $socket = socket_create(AF_INET, SOCK_STREAM, 0);
        socket_connect ($ socket, '127.0.0.1 ', config::byKey ('socketport', __CLASS__, '55009')); // default port of your plugin to modify
        socket_write ($ socket, $ payLoad, strlen ($ payLoad));
        socket_close ($ socket);
    }
`` ``

What is in the `$ params` array and how you use that data in your daemon is up to you, it depends on what your plugin is doing.

As a reminder, this array will therefore be retrieved in the `read_socket ()` method; python code snippet:

`` ``python
        if message ['apikey'] != _apikey:
            logging.error ("Invalid apikey from socket : " + str (message))
            return
        try:
            print 'read'
        except Exception, e:
            logging.error ('Send command to demon error : '+ str (e))
`` ``

We can see the "apikey" key added by the php code which will be read by the python code in the "message" array"

#### Receive a message from the daemon

To do this we must add a file to our plugin in the `. / Core / php /` folder. By convention, we will name this file `jee [pluginId] .php`. `/ plugins / [pluginId] / core / php / jee [pluginId].php` will therefore be the path to use as callback url in the `deamon_start ()` method

Here is the basic content that you can copy / paste into this file:

`` ``php
<?php

try {
    require_once dirname (__ FILE__). "/../../../../core/php/core.inc.php";

    yew (!jeedom::apiAccess (init ('apikey'), 'template')) {// replace template with your plugin id
        echo __ ('You are not authorized to perform this action', __FILE__);
        die();
    }
    if (init ('test') != '') {
        echo 'OK';
        die();
    }
    $result = json_decode(file_get_contents("php://input"), true);
    yew (!is_array ($ result)) {
        die();
    }

    if (isset ($ result ['key1'])) {
        // do something
    } elseif (isset ($ result ['key2'])) {
        // do something else
    } else {
        log::add ('template', 'error', 'unknown message received from daemon'); // replace template with the id of your plugin
    }
} catch (Exception $ e) {
    log::add ('template', 'error', displayException ($ e)); // replace template with the id of your plugin
}
`` ``

The code starts by validating that the apikey is correct:

`` ``php
    yew (!jeedom::apiAccess (init ('apikey'), 'template')) {// replace template with your plugin id
        echo __ ('You are not authorized to perform this action', __FILE__);
        die();
    }
`` ``

The first test is used as a test method when starting the daemon (see call `jeedom_com.test () `in the daemon code):

`` ``php
    if (init ('test') != '') {
        echo 'OK';
        die();
    }
`` ``

and finally we load the payload that we decode in the array `$ result`:

`` ``php
    $result = json_decode(file_get_contents("php://input"), true);
    yew (!is_array ($ result)) {
        die();
    }
`` ``

Then it's up to you to read the table and perform the actions in your plugin accordingly, example:

`` ``php
    if (isset ($ result ['key1'])) {
        // do something
    } elseif (isset ($ result ['key2'])) {
        // do something else
    } else {
        log::add ('template', 'error', 'unknown message received from daemon'); // replace template with the id of your plugin
    }
`` ``

The python code to send the message will look like this:

`` ``python
jeedom_com.send_change_immediate ({'key1' : 'value1 ',' key2' : 'value2' })
`` ``

Voila, you have a fully functional daemon and you can communicate back and forth between your daemon and your php code, The hard part remains to be done: code demon logic.

## Dependencies

When we are going to write a daemon, we will very often need external libraries in addition to our own classes.

On Debian, typically, we will use the apt tool to install the necessary packages and for python3, we will use pip3.

And to manage this, once again, everything is planned in Jeedom's core to help us via two distinct methods:

1. The procedural method.
   This method was the only method possible with versions of jeedom prior to 4.2
1. The configuration json file method.
   This method appeared with version 4.2 of the core of Jeedom.

Both methods can be implemented in a single plugin.

- If both methods are implemented in a plugin:
  - Cores before 4.2 will use the procedural method.
  - Core 4.2 and later will use the per json config file method.
- If only the procedural method is implemented in a plugin:
  - All cores will use this method.
- If only the json config file method is implemented in a plugin.
  - The plugin will not be compatible with core versions prior to 4.2

Both methods have their advantages and disadvantages. It's up to you to choose according to your situation.

### Declaration in plugin_info / info.json

In both cases, you need to adapt your `info.json` file.
Same example as for the declaration of the daemon, you must add the `hasDependency` property and assign the value` true`:

`` ``json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 30,
    ...
}
`` ``

The `maxDependancyInstallTime` property is the delay in minutes after which the core will consider that the installation was unsuccessful.
 In this case, the auto mode of the daemon will be disabled and a message will be posted in the notification center.
 If this property is not defined, the default time will be 30min.

> **TIP**
>
> The installation script will not be interrupted so it may end up successfully completing. This is only the time after which the core no longer waits and no longer displays progress.

### The json configuration file method

#### Creation of the plugin_info/packages.json file

The syntax of this file is described here. See as well
[the launch article on the blog](https://blog.jeedom.com/6170-introduction-jeedom-4-2-installation-de-dependance/).

This file may contain any of the following sections:

##### pre-install: the path to a script to run before installation

Example :

`` ``json
{
  "pre-install" : {
    "script" : "plugins/[pluginID]/resources/post-install.sh"
  }
`` ``

##### post-install

This can be the path to a script to run after installation, or the restart apache action.
Example :

`` ``json
{
  "post-install" : {
    "restart_apache" : true,
    "script" : "plugins/[pluginID]/resources/post-install.sh"
  }
`` ``

##### apt: Debian dependencies

Exemple

`` ``json
{
  "apt" : {
    "libav-tools" : {"alternative" : ["ffmpeg"]},
    "ffmpeg" : {"alternative" : ["libav-tools"]},
    "python-pil" : {},
    "php-gd" : {}
  }
}
`` ``

For each package, we can specify `version` to set a version, `alternative` if available,
 `optional` if it is optional, `reinstall` to force the re-installation of the package, `remark` to add a free comment.

##### pip3: Python3 dependencies

Exemple:

`` ``json
{
  "apt" : {
    "python3-pyudev" : {},
    "python3-requests" : {},
    "python3-dev" : {}
  },
  "pip3" : {
    "wheel" : {},
    "pyserial" : {},
    "tornado" : {},
    "zigpy" : {"reinstall" : true},
    "zha-quirks" : {"reinstall" : true},
    "zigpy-znp" : {"reinstall" : true},
    "zigpy-xbee" : {"reinstall" : true},
    "zigpy-deconz" : {"reinstall" : true},
    "zigpy-zigate" : {"reinstall" : true},
    "zigpy-cc" : {"reinstall" : true},
    "bellows" : {"reinstall" : true}
  }
}
`` ``

> *Hint*
>
> From Jeedom version 4.4.9, the core can handle installing python3 dependencies under Debian 12. The dependencies will be installed in a *friday* (virtual environment)
> You should adapt your plugin accordingly and no longer hardcode the path to `python3` but use `system::getCmdPython3(__CLASS__)` instead.
> Exemple: `$cmd = system::getCmdPython3(__CLASS__) . " {$path}/demond.py";`

##### npm: dependencies for NodeJS

For NodeJS the dependencies are in another `packages' file.json` in its own format,
placed in the `/resources` directory for example, it is this file which will be indicated in that of Jeedom:

`` ``json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    "plugins/dyson/resources/dysond"  : {}
  }
}
`` ``

##### composer: to install another PHP dependency

no example at hand; the syntax is similar to other packages, with the `compose` keyword.

##### Dependencies on another plugin

If a plugin requires the installation of another plugin, this is also possible with the following syntax;
the plugin must be free, or already purchased :

`` ``json
{
    "plugin":{
        "mqtt2": {}
    }
}
`` ``

### The procedural method

There are 2 prerequisites that we will detail right away.

#### Installing dependencies

In your eqLogic class you must add this function if it does not exist. You can copy / paste it as is without modifying anything

`` ``php
    public static function dependancy_install() {
        log::remove (__ CLASS__. '_update');
        return array ('script' => dirname (__ FILE__). '/../../resources/install_#stype#.sh ' . jeedom::getTmpFolder (__ CLASS__) . '/dependance', 'log' => log::getPathToLog (__ CLASS__. '_update'));
    }
`` ``

This function starts by deleting the log of the previous installation if it existed and then it will return to the core the script command to be executed and the location of the log.

Note that the returned script file is named `install_#stype#.sh`. Indeed, `#stype#`will be dynamically replaced by the core with the package management tool to be used depending on the system on which Jeedom is installed. So `#stype#`will be replaced by` apt` on a Debian system.
This makes it possible to offer dependency installation scripts for several systems and therefore to support something other than Debian / apt which is the strict minimum and the only one that we will manage here.

The first argument: `jeedom::getTmpFolder (__ CLASS__) . '/dependance'` is the file used to track the progress of the installation (the percentage that appears on the screen during installation).

That's all for the php part, now you have to create the script in `./resources/install_apt.sh` and obviously the content of the script will depend on your plugin and the packages you want to install.

Here is an example of a fairly simple script from one of my plugins but you can make it much more complete and advanced:

> **Warning**
>
> Starting with Debian 12, it is mandatory to install python packages in a virtual environment, so this example script will no longer work as is, it is up to you to adapt it accordingly.
>
> Je vous invite également à consulter cette documentation qui offre une alternative: <https://github.com/Mips2648/dependance.lib/blob/master/pyenv.md>

`` ``bash
PROGRESS_FILE=/tmp/jeedom/template/dependance #replace template with the ID of your plugin

if [ ! -z $ 1]; then
    PROGRESS_FILE = $ 1
fi
touch $ {PROGRESS_FILE}
echo 0> $ {PROGRESS_FILE}
echo "*************************************"
echo "*   Launch install of dependencies  *"
echo "*************************************"
echo $ (date)
echo 5> $ {PROGRESS_FILE}
apt-get clean
echo 10> $ {PROGRESS_FILE}
apt-get update
echo 20> $ {PROGRESS_FILE}

echo "*****************************"
echo "Install modules using apt-get"
echo "*****************************"
apt-get install -y python3 python3-requests python3-pip python3-voluptuous python3-bs4
echo 60> $ {PROGRESS_FILE}

echo "*************************************"
echo "Install the required python libraries"
echo "*************************************"
python3 -m pip install "aiohttp"
echo 80> $ {PROGRESS_FILE}

echo 100> $ {PROGRESS_FILE}
echo $ (date)
echo "***************************"
echo "*      Install ended      *"
echo "***************************"
rm $ {PROGRESS_FILE}
`` ``

We will detail a few lines:

We start by defining the default location of the progress file in case we have not performed the previous step correctly...
And we use the first argument received as a location because we did the previous step correctly;-).

`` ``bash
PROGRESS_FILE=/tmp/jeedom/template/dependance #replace template with the ID of your plugin

if [ ! -z $ 1]; then
    PROGRESS_FILE = $ 1
fi
`` ``

The lines of the type `echo 60> $ {PROGRESS_FILE}` are obviously used to return the progress: to reassure the user we put it regularly until reaching 100 (usually they stress when it exceeds 100 so we avoid).

A few tips:

- Don't do an `apt-get upgrade`! You don't know what's on the machine and it's not your job to update everything.
- Don't use `apt` but` apt-get`. `apt` is made for interactive use and it will generate a warning.
- Add the `-y` flag when necessary to confirm the prompts otherwise the script will stop with a request like` Do you want to continue [y / n] `and the user will be blocked.
- Prefer the syntax `python3 -m pip install ...` rather than `pip3 install ...` to install python packages because the second will cause problems if `pip3` (or` pip` if you are using python v2) n ' is not related to the same version as python3: if for example python3 points to version 3.7 and pip3 points to 3.9 or worse the 2.7; You do not know what has been done on the system and you are not safe from such problem on the user's machine, there are dozens of cases listed on community.

> **Warning**
>
> It is very important to install all the necessary packages and to pay special attention to those which are very often already installed ... but not always. There are frequently problems with the `python3-requests`,` python3-pip` and / or `serial` packages. These are not pre-installed on a basic debian but very often already installed by another plugin ... unless your plugin is the first and in this case your daemon will not start. It happens more often than you might think.

#### Know the status

![image](images/dependencies_info.png)

It is therefore our php function `dependancy_install ()` which will be called by the core and which will allow to launch our script `./resources/install_apt.sh` when the user clicks on the "Relaunch" button or automatically by the core when it detects that the dependencies are either not installed or not up to date.

But how does the core know the status and how does it display it in the frame above? Thanks to the `dependancy_info ()` function that we have to add in our eqLogic class.

Here is an example of which you can use the majority:

`` ``php
    public static function dependancy_info() {
        $return = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::getTmpFolder (__ CLASS__) . '/dependance';
        if (file_exists (jeedom::getTmpFolder (__ CLASS__) . '/dependance')) {
            $return['state'] = 'in_progress';
        } else {
            if (exec (system::getCmdSudo() . system::get ('cmd_check') . '-Ec "python3 \ -requests|python3 \ -voluptuous|python3 \ -bs4 "') <3) {// adapt the list of packages and the total
                $return['state'] = 'nok';
            } elseif (exec (system::getCmdSudo() . 'pip3 list | grep -Ewc "aiohttp" ') <1) {// adapt the list of packages and the total
                $return['state'] = 'nok';
            } else {
                $return['state'] = 'ok';
            }
        }
        return $ return;
    }
`` ``

In this example we test the presence of apt packages: `system::getCmdSudo() . system::get ('cmd_check') . '-Ec "python3 \ -requests|python3 \ -voluptuous|python3 \ -bs4 "'`. Here we want `python3-requests`,` python3-voluptuous` and `python3-bs4` and therefore the command must return 3 hence the comparison: `<3`.

Same thing for python packages: `pip3 list | grep -Ewc "aiohttp" '`. The presence of `aiohttp` is validated, only one package so we compare: `<1`;

> **Warning**
>
> Starting with Debian 12, it is mandatory to install python packages in a virtual environment, so this command will no longer work as is, it is up to you to adapt it accordingly.

So it's very simple: the list of packages and the total are the only elements that you must modify if you only have this type of verification otherwise it will be easy to add the other relevant tests in your case.
