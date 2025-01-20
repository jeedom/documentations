# Demons & Addictions

## Introduction

In the [tutorial](/en_US/dev/tutorial_plugin) and the [documentation](/en_US/dev/plugin_template) you have learned how to code your first plugin with relatively simple actions triggered by the user via an action command or by a task scheduled by the core (crons).
The plugin is then able to occasionally fetch information (for example via http request) or to perform all sorts of operations as long as it can be coded in PHP.

There will be times when you need more than that, a few examples without being exhaustive:

- use system resources, for example USB key or other hardware (Bluetooth...)
- maintain a connection with a remote system (on a local network or on the internet but not jeedom)
- keep processes active in the background which is not the case for PHP code which only "lives" during the execution of the http request
- do real-time processing

For this, most of the time we use a "demon".
Don't panic, everything is already planned in the core of jeedom to help us set up this daemon and we will detail this here.

## Daemon File Structure

The code and/or executable of your daemon must obviously be located in the tree structure of your plugin and must therefore be included and delivered with the archive when installing a plugin.
There is no hard and fast rule on where exactly to place your daemon, however the convention is to place it in the ` subdirectory./resources/` of the plugin.

In the plugin template you will find the basics to implement a daemon in python and this is the example that we will use in this documentation however you are free to develop your daemon in the language of your choice provided that it can be executed on the [platforms supported by Jeedom](/en_US/compatibility/).
Most of the Jeedom plugin daemons are in python or nodeJs but there are also some in .netCore and certainly other technologies.

You will also find some useful methods for a nodeJs daemon which may be detailed in a future version of this documentation. For now I invite you to consult the dev community to align yourself with other developers on everything concerning NodeJs, mainly on the version to use.

Template Directory Structure:

![image](images/daemon_struct.png)

### the python demon

In the plugin template, the daemon directory was named `demond`, and the daemon itself is named `demond.py`.
These names are arbitrary, you are free to change them.
The convention is to take the plugin ID followed by the letter ´d´. Which gives for example for the plugin `blea` the directory `./resources/blead/` which contains among other things the `blead' file.py`, this file being the starting point of the daemon.

> **TIP**
>
> Feel free to take inspiration from official plugins with daemon to understand the details, such as blea, openzwave or sms.

### the jeedom package for a python daemon

Jeedom provides with the template plugin a python package offering the basic classes and methods useful for managing the daemon and the communication between the daemon and the php code of your plugin.
These classes are located in the directory `./resources/demond/jeedom/jeedom.py` (visible in the screenshot above).
To get started you don't need to know the implementation details of these classes and methods so here you will just have a summary of what they allow.

#### class jeedom_utils()

This class is a set of useful static methods such as `convert_log_level` to convert the loglevel received from jeedom into a log level of the python class `logging` or `find_tty_usb` to return a list of devices on the system.
We are not going to detail them all here, the name of each of the methods is quite explicit, you will discover them by diving into the code.

#### class jeedom_serial()

This class encapsulates reading and writing to a device.
Again we are not going to detail the class, the methods speak for themselves, just know that it exists if you need it.

> **Attention**
>
> If your daemon does not need to do this type of action, you should remember not to use or import this class because the python `serial` package is not installed by default and in this case your daemon will not start (problem seen several times on community). We will come back to this in dependency management.

#### class jeedom_socket() & jeedom_socket_handler()

You will not use the `jeedom_socket_handler()` class directly, it is only used for `jeedom_socket()`.
The purpose of `jeedom_socket()` is to ensure downward communication (from your php code to the daemon).
When your plugin needs to send an instruction to your daemon it can do it via this socket, you will see an example later in this documentation.

So the class opens a tcp socket and listens. When a message is received it is put in a queue which will be read later by your daemon, we will come back to this.

Again, you are not obliged to use this mechanism, you are free to create something else (http server for example) but this is what is provided as standard by Jeedom, it is light and it works very well.

#### class jeedom_com()

This ensures the upward communication, from the daemon to your php code.
You will essentially use `send_change_immediate()` at the beginning which therefore allows you to send a json payload to jeedom via an http request. It's very simple and effective, we'll see an example later.

### Python Demon Skeleton

Now that we know the environment, we can look at the part that interests us most: the demon and what we will have to code.

We will therefore look in detail at the skeleton of a demon as proposed by Jeedom, open the file `demond.py` and we will start with the last lines which are in fact the beginning of the program:

```python
_log_level = "error"
_socket_port = 55009 # to modify
_socket_host = 'localhost'
_device = 'auto'
_pidfile = '/tmp/demond.pid'
_apikey = ''
_callback = ''

for arg in sys.argv:
    if arg.startswith("--loglevel="):
        temp, _log_level = arg.split("=")
    elif arg.startswith("--socketport="):
        temp, _socket_port = arg.split("=")
    elif arg.startswith("--sockethost="):
        temp, _socket_host = arg.split("=")
    elif arg.startswith("--pidfile="):
        temp, _pidfile = arg.split("=")
    elif arg.startswith("--apikey="):
        temp, _apikey = arg.split("=")
    elif arg.startswith("--device="):
        temp, _device = arg.split("=")

_socket_port = int(_socket_port)

jeedom_utils.set_log_level(_log_level)

logging.info('Start demond')
logging.info('Log level : '+str(_log_level))
logging.info('Socket port : '+str(_socket_port))
logging.info('Socket host : '+str(_socket_host))
logging.info('PID file : '+str(_pidfile))
logging.info('Apikey : '+str(_apikey))
logging.info('Device : '+str(_device))

signal.signal(signal.SIGINT, handler)
signal.signal(signal.SIGTERM, handler)

try:
    jeedom_utils.write_pid(str(_pidfile))
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle)
    if not jeedom_com.test():
        logging.error('Network communication issues. Please fix your Jeedom network configuration.')
        shutdown()
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host)
    listen()
except Exception as e:
    logging.error('Fatal error : '+str(e))
    shutdown()
```

Some variable initializations:

```python
_log_level = "error" # the default log level, in text format as sent by Jeedom
_socket_port = 55009 # the port that your daemon will use by default to open the Jeedom listening socket, to be modified.
_socket_host = 'localhost' # the interface on which to open the socket, probably do not change.
_device = 'auto' # is useless if you are not using a hardware device
_pidfile = '/tmp/demond.pid' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas; nom du démon à modifier comme expliqué ci-dessus;
_apikey = '' # apikey to authenticate the communication between Jeedom and your daemon
_callback = '' ## the callback url to send notifications to Jeedom (and to your php code)
```

> **Attention**
>
> You have to be careful when choosing the port you are going to use for your socket, this is a possible point of improvement under jeedom, because there is no mechanism in place to avoid collisions: so if another plugin uses the same port as you this will obviously cause a problem. For now the only method to make your choice is to search among the existing plugins for the ports already used and to align between dev and community (there are already open topics on this subject). Also it is important to leave this user configurable in your plugin configuration so that the port number can be changed if such a conflict should occur.

Then we retrieve the arguments received on the command line, this command line will be generated by your php code, we will come back to it.
It's up to you to remove what is not useful (like the device argument) or to add others such as a user/pswd if your daemon must connect to a remote system.

```python
for arg in sys.argv:
    if arg.startswith("--loglevel="):
        temp, _log_level = arg.split("=")
    elif arg.startswith("--socketport="):
        temp, _socket_port = arg.split("=")
    elif arg.startswith("--sockethost="):
        temp, _socket_host = arg.split("=")
    elif arg.startswith("--pidfile="):
        temp, _pidfile = arg.split("=")
    elif arg.startswith("--apikey="):
        temp, _apikey = arg.split("=")
    elif arg.startswith("--device="):
        temp, _device = arg.split("=")
```

Then there are some log lines and these two lines, classic in python, which simply record the method to call in the case where these two interrupt signals are received, which will allow the daemon to be stopped:

```python
signal.signal(signal.SIGINT, handler)
signal.signal(signal.SIGTERM, handler)
```

and the `handler` method which is defined a little higher in the daemon:

```python
def handler(signum=None, frame=None):
    logging.debug("Signal %i caught, exiting..." % int(signum))
    shutdown()
```

which only adds a log and calls the `shutdown()` method defined just below:

```python
def shutdown():
    logging.debug("Shutdown")
    logging.debug("Removing PID file " + str(_pidfile))
    try:
        os.remove(_pidfile)
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
    logging.debug("Exit 0")
    sys.stdout.flush()
    os._exit(0)
```

This is the method where you should write the code to be executed in case of daemon shutdown, for example to logout the remote system and cleanly close open connections.

> **Attention**
>
> you need to adapt this method and remove the code that is not necessary in your case, notably the try/except on `jeedom_serial.close()` if you are not using this class.

If we go back to the start of the daemon, here is the commented continuation:

```python
try:
    jeedom_utils.write_pid(str(_pidfile)) # writes the pidfile that the jeedom core will monitor to determine if the daemon is started
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle) # creation of the jeedom_com object
    if not jeedom_com.test(): #first test to verify that the callback url is correct
        logging.error('Network communication issues. Please fix your Jeedom network configuration.')
        shutdown()
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host) # we declare the socket to receive orders from jeedom
    listen() # and we listen
except Exception as e:
    logging.error('Fatal error : '+str(e))
    shutdown()
```

The `listen()` method defined at the beginning of the file:

```python
def listen():
    jeedom_socket.open()
    try:
        while 1:
            time.sleep(0.5)
            read_socket()
    except KeyboardInterrupt:
        shutdown()
```

Nothing to change here, we can see that the socket is open and then an infinite loop to read the socket every half second

The `read_socket()` method

```python
def read_socket():
    global JEEDOM_SOCKET_MESSAGE
    if not JEEDOM_SOCKET_MESSAGE.empty():
        logging.debug("Message received in socket JEEDOM_SOCKET_MESSAGE")
        message = json.loads(jeedom_utils.stripped(JEEDOM_SOCKET_MESSAGE.get()))
        if message['apikey'] != _apikey:
            logging.error("Invalid apikey from socket : " + str(message))
            return
        try:
            print 'read'
        except Exception, e:
            logging.error('Send command to daemon error : '+str(e))
```

The `JEEDOM_SOCKET_MESSAGE` variable is a python `queue()` powered by the `jeedom_socket()` class as seen previously.

If the queue is not empty, we load the json and check that the api key received with the message matches the one received when starting the daemon (`_apikey`) then we can read the message and do our actions in the try/except:

```python
        try:
            print 'read'
        except Exception, e:
            logging.error('Send command to daemon error : '+str(e))
```

So instead of `print 'read'` it's up to you to read the relevant elements of the message that your plugin will have sent and to trigger the actions or to call your classes or methods specific to your plugin.

From here you have a daemon that can be run even if it doesn't do anything yet (that's your job)).

## Adapting the plugin's php code

Having a daemon and understanding its structure is great, but there are some key elements missing so that your plugin (php code) can control this daemon and so that the core is also informed that it exists.

### plugin_info/info.json

In the info file.json of your plugin, you must add the property `hasOwnDeamon` and assign the value `true`, example:

```json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 10,
    ...
}
```

We will see the use of `hasDependency` and `maxDependancyInstallTime` later.

### Managing the daemon in your eqLogic class

In the eqLogic class of your plugin there are some methods to implement for the proper management of the daemon.

#### Deamon_info function()

The `deamon_info()` function will be called by the core when displaying the following frame in your plugin's configuration page, it must exist:

![image](images/daemon_info.png)

Typically it will look like this, the array returned and the keys used in that array are obviously important.
You can copy/paste the code below as is and adapt the code at the end of the function to check the configuration needed for your plugin.

```php
    public static function deamon_info() {
        $return = array();
        $return['log'] = __CLASS__;
        $return['state'] = 'nok';
        $pid_file = jeedom::getTmpFolder(__CLASS__) . '/deamon.pid';
        if (file_exists($pid_file)) {
            if (@posix_getsid(trim(file_get_contents($pid_file)))) {
                $return['state'] = 'ok';
            } else {
                shell_exec(system::getCmdSudo() . 'rm -rf ' . $pid_file . ' 2>&1 > /dev/null');
            }
        }
        $return['launchable'] = 'ok';
        $user = config::byKey('user', __CLASS__); // exemple si votre démon à besoin de la config user,
        $pswd = config::byKey('password', __CLASS__); // password,
        $clientId = config::byKey('clientId', __CLASS__); // et clientId
        if ($user == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le nom d\'utilisateur n\'est pas configuré', __FILE__);
        } elseif ($pswd == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le mot de passe n\'est pas configuré', __FILE__);
        } elseif ($clientId == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('La clé d\'application n\'est pas configurée', __FILE__);
        }
        return $return;
    }
```

> **Attention**
>
> There is no typo in the example, the method is named `deamon_info()` and not `daemon_info`, the error is in the core.

The `state` key obviously corresponds to the status displayed on the screen, we can read above that we are testing the presence of our "pid_file" to know if the daemon is running or not.

The `launchable` key corresponds to the "Configuration" column in the frame and so we can check if the configuration is complete and correct to be able to start the daemon. `launchable_message` allows to display a message to the user in case of "NOK"

#### Damon_start function()

The `deamon_start()` function is as its name suggests the method that will be called by the core to start your daemon.
You can copy/paste the code below as is and modify the indicated lines.

```php
    public static function deamon_start() {
        self::deamon_stop();
        $deamon_info = self::deamon_info();
        if ($deamon_info['launchable'] != 'ok') {
            throw new Exception(__('Please check the configuration', __FILE__));
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = system::getCmdPython3(__CLASS__) . " {$path}/demond.py"; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'http:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --pid ' . jeedom::getTmpFolder(__CLASS__) . '/deamon.pid'; // et on précise le chemin vers le pid file (ne pas modifier)
        log::add(__CLASS__, 'info', 'Daemon launch');
        $result = exec($cmd . ' >> ' . log::getPathToLog('template_daemon') . ' 2>&1 &'); // 'template_daemon' est le nom du log pour votre démon, vous devez nommer votre log en commençant par le pluginid pour que le fichier apparaisse dans la page de config
        $i = 0;
        while ($i < 20) {
            $deamon_info = self::deamon_info();
            if ($deamon_info['state'] == 'ok') {
                break;
            }
            sleep(1);
            $i++;
        }
        if ($i >= 30) {
            log::add(__CLASS__, 'error', __('Unable to start daemon, check log', __FILE__), 'unableStartDeamon');
            return false;
        }
        message::removeAll(__CLASS__, 'unableStartDeamon');
        return true;
    }
```

Only edit the lines with a comment, the rest should remain unchanged.

Note that we start by stopping the daemon, this is to manage the restart.
Then we check if the daemon can actually be started with the `deamon_info()` method and we generate the command line in the `$cmd` variable to start our daemon, here with python3. Note the use of the `system` function::getCmdPython3(__CLASS__)` which will return the path to python3 to use this to be compatible with Debian 12 if your dependencies are installed by the core.

#### Deamon_stop function()

This method will be used to stop the daemon: we retrieve the pid of the daemon, which was written in the "pid_file" and we send the system kill to the process.

```php
    public static function deamon_stop() {
        $pid_file = jeedom::getTmpFolder(__CLASS__) . '/deamon.pid'; // ne pas modifier
        if (file_exists($pid_file)) {
            $pid = intval(trim(file_get_contents($pid_file)));
            system::kill($pid);
        }
        system::kill('templated.py'); // name of the daemon to modify
        sleep(1);
    }
```

Arrived here you declared the demon in the info.json and implemented the 3 methods needed for the Jeedom core to start and stop your daemon as well as display its status. Prerequisites are in place.

### Communication between the daemon and the PHP code

It remains to manage the communication from and to the daemon. In the python code we have already seen how it was managed: as a reminder the `listen()` and `read_socket()` methods which listen on a socket and the `send_change_immediate()` method to send a json payload to the php code.

It is therefore necessary to manage the equivalent on the PHP side.

#### Send a message to the demon

This function does not exist in the core and is not standard for all Jeedom plugins, it is not mandatory either.
This is the function that I use myself (@Mips) in each of my plugins that have a daemon, I put it here and you can do what you want with it;-)

It therefore receives an array of values as a parameter and is responsible for sending it to the daemon socket which can therefore read this array in the `read_socket()` method that we saw previously.

```php
    public static function sendToDaemon($params) {
        $deamon_info = self::deamon_info();
        if ($deamon_info['state'] != 'ok') {
            throw new Exception("Daemon not started");
        }
        $params['apikey'] = jeedom::getApiKey(__CLASS__);
        $payLoad = json_encode($params);
        $socket = socket_create(AF_INET, SOCK_STREAM, 0);
        socket_connect($socket, '127.0.0.1', config::byKey('socketport', __CLASS__, '55009')); //default port of your plugin to modify
        socket_write($socket, $payLoad, strlen($payLoad));
        socket_close($socket);
    }
```

What goes into the `$params` array and how you use that data in your daemon is up to you, it depends on what your plugin does.

As a reminder, this table will therefore be retrieved in the `read_socket()` method; extract from the python code:

```python
        if message['apikey'] != _apikey:
            logging.error("Invalid apikey from socket : " + str(message))
            return
        try:
            print 'read'
        except Exception, e:
            logging.error('Send command to daemon error : '+str(e))
```

We can clearly see the "apikey" key added by the php code which will be read by the python code in the "message" table"

#### Receive a message from the demon

To do this we need to add a file to our plugin in the `./core/php/` folder. By convention, we will name this file `jee[pluginId].php`. `/plugins/[pluginId]/core/php/jee[pluginId].php` will therefore be the path to use as the callback url in the `deamon_start()` method

Here is the basic content that you can copy/paste into this file:

```php
<?php

try {
    require_once dirname(__FILE__) . "/../../../../core/php/core.inc.php";

    if (!jeedom::apiAccess(init('apikey'), 'template')) { //replace template with your plugin id
        echo __('You are not authorized to perform this action', __FILE__);
        die();
    }
    if (init('test') != '') {
        echo 'OK';
        die();
    }
    $result = json_decode(file_get_contents("php://input"), true);
    if (!is_array($result)) {
        die();
    }

    if (isset($result['key1'])) {
        // do something
    } elseif (isset($result['key2'])) {
        // do something else
    } else {
        log::add('template', 'error', 'unknown message received from daemon'); //replace template with the id of your plugin
    }
} catch (Exception $e) {
    log::add('template', 'error', displayException($e)); //replace template with your plugin id
}
```

The code starts by validating that the apikey is correct:

```php
    if (!jeedom::apiAccess(init('apikey'), 'template')) { //replace template with your plugin id
        echo __('You are not authorized to perform this action', __FILE__);
        die();
    }
```

The first test serves as a test method when starting the daemon (see call `jeedom_com.test()` in the daemon code):

```php
    if (init('test') != '') {
        echo 'OK';
        die();
    }
```

and finally we load the payload that we decode in the `$result` table:

```php
    $result = json_decode(file_get_contents("php://input"), true);
    if (!is_array($result)) {
        die();
    }
```

Then it's up to you to read the table and perform the actions in your plugin accordingly, example:

```php
    if (isset($result['key1'])) {
        // do something
    } elseif (isset($result['key2'])) {
        // do something else
    } else {
        log::add('template', 'error', 'unknown message received from daemon'); //replace template with the id of your plugin
    }
```

The python code to send the message will look like this:

```python
jeedom_com.send_change_immediate({'key1' : 'value1', 'key2' : 'value2' })
```

Voila, you have a fully functional daemon and you can communicate back and forth between your daemon and your php code, The hardest part is yet to come: code the daemon logic.

## The dependencies

When we are going to write a daemon, we will very often need external libraries in addition to our own classes.

On Debian, typically, we will use the apt tool to install the necessary packages and for python3, we will use pip3.

And to manage this, once again, everything is provided in the core of Jeedom to help us via two distinct methods:

1. The procedural method.
   This method was the only method possible with versions of jeedom prior to 4.2
1. The method by configuration json file.
   This method appeared with version 4.2 of the Jeedom core.

Both methods can be implemented in a single plugin.

- If both methods are implemented in a plugin:
  - The core before 4.2 will use the procedural method.
  - The core 4.2 and following will use the json configuration file method.
- If only the procedural method is implemented in a plugin:
  - All cores will use this method.
- If only the json configuration file method is implemented in a plugin.
  - The plugin will not be compatible with core versions prior to 4.2

Both methods have their advantages and disadvantages. It's up to you to choose according to your situation.

### Declaration in plugin_info/info.json

In both cases, you need to adapt your `info.json` file.
Same example as for the daemon declaration, you have to add the property `hasDependency` and assign the value `true`:

```json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 30,
    ...
}
```

The `maxDependancyInstallTime` property is the time in minutes after which the core will consider the installation to have failed.
 In this case, the daemon's auto mode will be disabled and a message will be posted in the notification center.
 If this property is not set, the default timeout will be 30min.

> **TIP**
>
> The installation script will not be interrupted so it may eventually complete successfully. This is just the timeout after which the core no longer waits and displays progress.

### The json configuration file method

#### Creating the plugin_info/packages.json file

The syntax of this file is described here. See also
[the launch article on the blog](https://blog.jeedom.com/6170-introduction-jeedom-4-2-installation-de-dependance/).

This file may contain any of the following sections:

##### pre-install: the path to a script to run before installation

Example :

```json
{
  "pre-install" : {
    "script" : "plugins/[pluginID]/resources/post-install.sh"
  }
```

##### post-install

This could be the path to a script to run after installation, or the restart apache action.
Example :

```json
{
  "post-install" : {
    "restart_apache" : true,
    "script" : "plugins/[pluginID]/resources/post-install.sh"
  }
```

##### apt: Debian dependencies

Exemple

```json
{
  "apt" : {
    "libav-tools" : {"alternative" : ["ffmpeg"]},
    "ffmpeg" : {"alternative" : ["libav-tools"]},
    "python-pil" : {},
    "php-gd" : {}
  }
}
```

For each package, one can specify `version` to set a version, `alternative` if available,
 `optional` if it is optional, `reinstall` to force the re-installation of the package, `remark` to add a free comment.

##### pip3: Python3 dependencies

Exemple:

```json
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
```

> *Hint*
>
> From Jeedom version 4.4.9, the core can handle installing python3 dependencies under Debian 12. The outbuildings will be installed in a *friday* (virtual environment)
> You should adapt your plugin accordingly and no longer hardcode the path to `python3` but use `system::getCmdPython3(__CLASS__)` instead.
> Exemple: `$cmd = system::getCmdPython3(__CLASS__) . " {$path}/demond.py";`

##### npm: dependencies for NodeJS

For NodeJS the dependencies are in another `packages` file.json` in its own format,
placed in the `/resources` directory for example, it is this file which will be indicated in that of Jeedom:

```json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    "plugins/dyson/resources/dysond"  : {}
  }
}
```

##### composer: to install another PHP dependency

no example at hand; syntax is similar to other packages, with the `composer` keyword.

##### Dependencies on another plugin

If a plugin requires the installation of another plugin, this is also possible with the following syntax;
The plugin must be free, or already purchased :

```json
{
    "plugin":{
        "mqtt2": {}
    }
}
```

### The procedural method

There are 2 prerequisites that we will detail right away.

#### Installing dependencies

In your eqLogic class you must add this function if it does not exist. You can copy/paste this one as is without changing anything

```php
    public static function dependency_install() {
        log::remove(__CLASS__ . '_update');
        return array('script' => dirname(__FILE__) . '/../../resources/install_#stype#.sh ' . jeedom::getTmpFolder(__CLASS__) . '/dependance', 'log' => log::getPathToLog(__CLASS__ . '_update'));
    }
```

This function starts by deleting the log of the previous installation if it existed and then it will return to the core the script command to execute and the location of the log.

Note that the returned script file is named `install_#stype#.sh`. Indeed, `#stype#` will be dynamically replaced by the core with the package management tool to be used depending on the system on which Jeedom is installed. So `#stype#` will be replaced by `apt` on a Debian system.
This allows us to offer dependency installation scripts for several systems and therefore to support something other than Debian/apt which is the bare minimum and the only one we will manage here.

The first argument: `jeedom::getTmpFolder(__CLASS__) . '/dependance'` is the file used to track the progress of the installation (the percentage that appears on the screen during installation).

That's all for the php part, now you have to create the script in `./resources/install_apt.sh` and obviously the content of the script will depend on your plugin and the packages you want to install.

Here is an example of a fairly simple script from one of my plugins, but you can make much more complete and advanced ones:

> **Attention**
>
> Starting with Debian 12, it is mandatory to install python packages in a virtual environment, so this example script will no longer work as is, it is up to you to adapt it accordingly.
>
> Je vous invite également à consulter cette documentation qui offre une alternative: <https://github.com/Mips2648/dependance.lib/blob/master/pyenv.md>

```bash
PROGRESS_FILE=/tmp/jeedom/template/dependance #replace template with the ID of your plugin

if [ ! -z $1 ]; then
    PROGRESS_FILE=$1
fi
touch ${PROGRESS_FILE}
echo 0 > ${PROGRESS_FILE}
echo "*************************************"
echo "*   Launch install of dependencies  *"
echo "*************************************"
echo $(date)
echo 5 > ${PROGRESS_FILE}
apt-get clean
echo 10 > ${PROGRESS_FILE}
apt-get update
echo 20 > ${PROGRESS_FILE}

echo "*****************************"
echo "Install modules using apt-get"
echo "*****************************"
apt-get install -y python3 python3-requests python3-pip python3-voluptuous python3-bs4
echo 60 > ${PROGRESS_FILE}

echo "*************************************"
echo "Install the required python libraries"
echo "*************************************"
python3 -m pip install "aiohttp"
echo 80 > ${PROGRESS_FILE}

echo 100 > ${PROGRESS_FILE}
echo $(date)
echo "***************************"
echo "*      Install ended      *"
echo "***************************"
rm ${PROGRESS_FILE}
```

We will detail a few lines:

We start by defining the default location of the progress file in case we did not perform the previous step correctly...
And we use the first argument received as the location because we did the previous step correctly;-).

```bash
PROGRESS_FILE=/tmp/jeedom/template/dependance #replace template with the ID of your plugin

if [ ! -z $1 ]; then
    PROGRESS_FILE=$1
fi
```

Lines like `echo 60 > ${PROGRESS_FILE}` are obviously used to return the progress: to reassure the user we put some regularly until reaching 100 (usually they stress when it exceeds 100 so we avoid it).

Some advice:

- Do not do `apt-get upgrade`! You don't know what's on the machine and it's not your job to update everything.
- Don't use `apt` but `apt-get`. `apt` is meant for interactive use and will generate a warning.
- Add the `-y` flag when needed to confirm the prompts otherwise the script will stop with a request like `Do you want to continue [y/n]` and the user will be blocked.
- Prefer the syntax `python3 -m pip install ...` rather than `pip3 install ...` to install python packages as the latter will cause problems if `pip3` (or `pip` if you are using python v2) is not linked to the same version as python3: if for example python3 points to version 3.7 and pip3 points to 3.9 or worse 2.7; You don't know what has been done on the system and you are not safe from such a problem on the user's machine, there are dozens of cases listed on community.

> **Attention**
>
> It is very important to install all the necessary packages and pay special attention to those that are very often already installed... but not always. There are frequent problems with the `python3-requests`, `python3-pip` and/or `serial` packages. These are not pre-installed on a base Debian but very often already installed by another plugin... unless your plugin is the first and in this case your daemon will not start. It happens more often than you might think.

#### Know the status

![image](images/dependencies_info.png)

So it is our php function `dependancy_install()` which will be called by the core and which will allow to launch our script `./resources/install_apt.sh` when the user clicks the "Relaunch" button or automatically by the core when it detects that the dependencies are either not installed or not up to date.

But how does the core know the status and how does it display it in the frame above? Thanks to the `dependancy_info()` function that we must add in our eqLogic class.

Here is an example that you can take most of:

```php
    public static function dependency_info() {
        $return = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::getTmpFolder(__CLASS__) . '/dependance';
        if (file_exists(jeedom::getTmpFolder(__CLASS__) . '/dependance')) {
            $return['state'] = 'in_progress';
        } else {
            if (exec(system::getCmdSudo() . system::get('cmd_check') . '-Ec "python3\-requests|python3\-voluptuous|python3\-bs4"') < 3) { // adapt the list of packages and the total
                $return['state'] = 'nok';
            } elseif (exec(system::getCmdSudo() . 'pip3 list | grep -Ewc "aiohttp"') < 1) { // adapt the list of packages and the total
                $return['state'] = 'nok';
            } else {
                $return['state'] = 'ok';
            }
        }
        return $return;
    }
```

In this example we test the presence of apt packages: `system::getCmdSudo() . system::get('cmd_check') . '-Ec "python3\-requests|python3\-voluptuous|python3\-bs4"'`. Here we want `python3-requests`, `python3-voluptuous` and `python3-bs4` and so the command should return 3 hence the comparison: `< 3`.

Same thing for python packages: `pip3 list | grep -Ewc "aiohttp"'`. The presence of `aiohttp` is validated, only one packet so we compare: `< 1`;

> **Attention**
>
> Starting with Debian 12, it is mandatory to install python packages in a virtual environment, so this command will no longer work as is, it is up to you to adapt it accordingly.

So it's very simple: the list of packages and the total are the only elements that you need to modify if you only have this type of verification otherwise it will be easy to add the other tests relevant in your case.
