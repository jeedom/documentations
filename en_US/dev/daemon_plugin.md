# Demons & Addictions

## Introduction

In the [tutorial](/en_US/dev/tutorial_plugin) and the [documentation](/en_US/dev/plugin_template) you learned how to code your first plugin with relatively simple actions triggered by the user via an action command or by a task scheduled by the core (the crons).
The plugin is then able to punctually fetch information (for example via http request) or to do all kinds of operations as long as it can be coded in PHP.

It will happen that you need more than that, some examples without being exhaustive:

- use system resources, for example usb key or other hardware (bluetooth...)
- maintain a connection with a remote system (in local network or on the internet but not jeedom)
- keep processes active in the background which is not the case with PHP code which "lives" only during the execution of the http request
- do real-time processing

For this, most of the time we use a "demon".
Do not panic, everything is already planned in the core of jeedom to help us put this demon in place and we will detail it here.

## File structure of a daemon

The code and/or the executable of your daemon must obviously be in the tree structure of your plugin and must therefore be included and delivered with the archive during the installation of a plugin.
There is no hard and fast rule on the exact location of your daemon, however convention is to place it in the `./resources/ from the plugin.

In the template plugin you will find the basics to implement a daemon in python and this is the example that we will use in this documentation, however you are free to develop your daemon in the language of your choice provided that it can be executed on [platforms supported by Jeedom](/en_US/compatibility/).
Most Jeedom plugin daemons are in python or nodeJs but there are also some in .netCore and certainly other technologies.

You will also find some useful methods for a nodeJs daemon which may be detailed in a future version of this documentation. For now I invite you to consult the community dev to align yourself with other developers on everything related to NodeJs, mainly on the version to use.

Template directory structure:

![image](images/daemon_struct.png)

### the python daemon

In the template plugin, the daemon directory was named `demond`, and the daemon itself is named `demond.py`.
These names are arbitrary, you are free to change them.
The convention is to take the plugin ID followed by the letter ´d´. Which gives for example for the plugin `blea` the directory `./resources/blead/` which contains among other things the file `blead.py`, this file being the starting point of the daemon.

> **TIPS**
>
> Do not hesitate to take inspiration from official plugins with daemon to understand the details, such as blea, openzwave or sms.

### the jeedom package for a python daemon

Jeedom provides with the template plugin a python package offering the basic classes and methods useful for managing the daemon and communication between the daemon and the php code of your plugin.
These classes are in the directory `./resources/demond/jeedom/jeedom.py` (visible in the capture above).
To get started you don't need to know the implementation details of these classes and methods so here you will just have a summary of what they do.

#### class jeedom_utils()

This class is a set of useful static methods such as `convert_log_level` to convert the loglevel received from jeedom into a log level of the class python `logging` or `find_tty_usb` to return a list of devices on the system.
We are not going to detail them all here, the name of each of the methods is quite explicit, you will discover them by immersing yourself in the code.

#### class jeedom_serial()

This class encapsulates reading and writing to a device.
Again we are not going to detail the class, the methods speak for themselves, just know that it exists if you need it.

> **Attention**
>
> If your daemon does not need to do this type of action, you will have to remember not to use or import this class because the `serial` python package is not installed by default and in this case your daemon will not start (problem seen several times on community). We will come back to this in the management of dependencies.

#### class jeedom_socket() & jeedom_socket_handler()

You will not use the `jeedom_socket_handler()` class directly, it is only for `jeedom_socket()`.
The purpose of `jeedom_socket()` is to provide downward communication (from your php code to the daemon).
When your plugin needs to send an instruction to your daemon it can do so via this socket, you will see an example later in this documentation.

So the class opens a tcp socket and listens. When a message is received it is put in a queue which will be read later by your daemon, we will come back to it.

Again, you are not obliged to use this mechanism, you are free to create something else (server http for example) but it is what is provided basic by Jeedom, it is light and it works very well.

#### class jeedom_com()

This ensures the upward communication, from the daemon to your php code.
You will essentially use `send_change_immediate()` at the beginning which therefore allows you to send a json payload to jeedom via an http request. It's very simple and effective, we'll see an example later.

### Python Demon Skeleton

Now that we know the environment, we can look at the part that interests us the most: the daemon and what we will have to code.

We will therefore look in detail at the skeleton of a demon as proposed by Jeedom, open the file `demond.py` and we will start with the last lines which are in fact the beginning of the program:

```python
_log_level = "error"
_socket_port = 55009 # to modify
_socket_host = 'localhost'
_device = 'self'
_pidfile = '/tmp/demond.pid'
_apikey = ''
_callback = ''

for arg in sys.argv:
    if arg.startswith("--loglevel="):
        temp, _log_level = arg. split("=")
    elif arg.startswith("--socketport="):
        temp, _socket_port = arg. split("=")
    elif arg.startswith("--sockethost="):
        temp, _socket_host = arg. split("=")
    elif arg.startswith("--pidfile="):
        temp, _pidfile = arg. split("=")
    elif arg.startswith("--apikey="):
        temp, _apikey=arg.split("=")
    elif arg.startswith("--device="):
        temp, _device = arg. split("=")

_socket_port = int(_socket_port)

jeedom_utils.set_log_level(_log_level)

logging.info('Start request')
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
_socket_port = 55009 # the port that your daemon will use by default to open Jeedom's listening socket, to be modified.
_socket_host = 'localhost' # the interface on which to open the socket, a priori do not change.
_device = 'auto' # is useless if you are not using a hardware device
_pidfile = '/tmp/demond.pid' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas; nom du démon à modifier comme expliqué ci-dessus;
_apikey = '' # apikey to authenticate the communication between Jeedom and your daemon
_callback = '' ## the callback url to send notifications to Jeedom (and to your php code)
```

> **Attention**
>
> You have to be careful when choosing the port you are going to use for your socket, this is a possible point of improvement under jeedom, because there is no mechanism in place to avoid collisions: so if another plugin uses the same port as you it will obviously cause a problem. For the moment the only method to make a choice is to search among the existing plugins for the ports already used and to align yourself between dev on community (there are already open topics about this). Also it is important to leave this user configurable in your plugin configuration so that the port number can be changed if such a conflict should occur.

Then we retrieve the arguments received on the command line, this command line will be generated by your php code, we will come back to it.
It's up to you to delete what is not useful (like the device argument) or add others such as a user/pswd if your daemon must connect to a remote system.

```python
for arg in sys.argv:
    if arg.startswith("--loglevel="):
        temp, _log_level = arg. split("=")
    elif arg.startswith("--socketport="):
        temp, _socket_port = arg. split("=")
    elif arg.startswith("--sockethost="):
        temp, _socket_host = arg. split("=")
    elif arg.startswith("--pidfile="):
        temp, _pidfile = arg. split("=")
    elif arg.startswith("--apikey="):
        temp, _apikey=arg.split("=")
    elif arg.startswith("--device="):
        temp, _device = arg. split("=")
```

Then there are a few lines of log and these two lines, classic in python, which simply record the method to call in the event that these two interrupt signals are received, which will stop the daemon:

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

It is in this method that you must write the code to be executed in the event of shutdown of the daemon, for example to logout the remote system and properly close the open connections.

> **Attention**
>
> you must adapt this method and remove the code which is not necessary in your case, in particular the try/except on `jeedom_serial.close()` if you don't use this class.

If we go back to the start of the daemon, here is the commented continuation:

```python
try:
    jeedom_utils.write_pid(str(_pidfile)) # writes the pidfile that the jeedom core will monitor to determine if the daemon is running
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle) # creation of jeedom_com object
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

Nothing to modify here, we can see that the socket is open and then an infinite loop to read the socket every half second

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
            logging.error('Send command to demon error : '+str(e))
```

The `JEEDOM_SOCKET_MESSAGE` variable is a python `queue()` powered by the `jeedom_socket()` class as seen previously.

If the queue is not empty, we load the json and we check that the api key received with the message corresponds to the one received when starting the daemon (`_apikey`) then we can read the message and do our actions in the try/except:

```python
        try:
            print 'read'
        except Exception, e:
            logging.error('Send command to demon error : '+str(e))
```

So instead of `print 'read'` it's up to you to read the relevant elements of the message that your plugin will have sent and to trigger the actions or to call your classes or methods specific to your plugin.

From here you have a daemon that can be run even if it's not doing anything yet (that's your job).

## Adaptation of the php code of the plugin

Having a daemon and understanding its structure is very good but some key elements are missing so that your plugin (php code) can control this daemon and so that the core is also informed that it exists.

### plugin_info/info.json

In the info file.json of your plugin, you must add the `hasOwnDeamon` property and assign the value `true`, example:

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

We will see later the use of `hasDependency` and `maxDependancyInstallTime`.

### Managing the daemon in your eqLogic class

In the eqLogic class of your plugin there are some methods to implement for the good management of the daemon.

#### Deamon_info function()

The `deamon_info()` function will be called by the core when displaying the following frame in the configuration page of your plugin, it must exist:

![image](images/daemon_info.png)

Typically it will look like this, the array returned and the keys used in that array are obviously important.
You can copy/paste the code below as it is and adapt the code at the end of the function to check the configuration needed for your plugin.

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
> There is no typo in the example, the method is called `deamon_info()` and not `daemon_info`, the error is in the core.

The `state` key obviously corresponds to the status displayed on the screen, we can read above that we are testing the presence of our "pid_file" to find out if the daemon is running or not.

The `launchable` key corresponds to the "Configuration" column in the framework and therefore one can check if the configuration is complete and correct to be able to start the daemon. `launchable_message` displays a message to the user in case of "NOK"

#### Deamon_start function()

The `deamon_start()` function is, as its name suggests, the method that will be called by the core to start your daemon.
You can copy/paste the code below as it is and modify the lines indicated.

```php
    public static function deamon_start() {
        self::deamon_stop();
        $deamon_info = self::deamon_info();
        if ($deamon_info['launchable'] != 'ok') {
            throw new Exception(__('Please check configuration', __FILE__));
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = 'python3 ' . $path . '/demond.py'; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'proto:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --pid ' . jeedom::getTmpFolder(__CLASS__) . '/deamon.pid'; // et on précise le chemin vers le pid file (ne pas modifier)
        log::add(__CLASS__, 'info', 'Starting daemon');
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

Modify only the lines with a comment, the rest must remain unchanged.

Note that we start by stopping the daemon, this to manage the restart.
Then we check if the daemon can actually be started with the `deamon_info()` method and we generate the command line in the `$cmd` variable to start our daemon, here with python3

#### Deamon_stop function()

This method will be used to stop the daemon: we retrieve the pid of the daemon, which was written in the "pid_file" and we send the system kill to the process.

```php
    public static function deamon_stop() {
        $pid_file = jeedom::getTmpFolder(__CLASS__) . '/deamon.pid'; // ne pas modifier
        if (file_exists($pid_file)) {
            $pid = intval(trim(file_get_contents($pid_file)));
            system::kill($pid);
        }
        system::kill('template.py'); // name of the daemon to modify
        sleep(1);
    }
```

Arrived here you declared the demon in the info.json and implemented the 3 methods necessary for Jeedom's core to start and stop your daemon as well as display its status. Prerequisites are in place.

### Communication between daemon and PHP code

It remains to manage the communication from and to the daemon. In the python code we have already seen how it was handled: as a reminder the `listen()` and `read_socket()` method which listens on a socket and the `send_change_immediate()` method to send a json payload to the php code.

It is therefore necessary to manage the equivalent on the PHP side.

#### Send a message to the daemon

This function does not exist in the core and is not standard for all Jeedom plugins, it is not mandatory either.
This is the function that I use myself (@Mips) in each of my plugins having a daemon, I put it here and you do what you want with it;-)

It therefore receives an array of values as a parameter and takes care of sending it to the socket of the daemon, which can therefore read this array in the `read_socket()` method that we saw previously.

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

What's in the `$params` array and how you use that data in your daemon is up to you, depending on what your plugin does.

As a reminder, this array will therefore be retrieved in the `read_socket()` method; python code snippet:

```python
        if message['apikey'] != _apikey:
            logging.error("Invalid apikey from socket : " + str(message))
            return
        try:
            print 'read'
        except Exception, e:
            logging.error('Send command to demon error : '+str(e))
```

We can clearly see the "apikey" key added by the php code which will be read by the python code in the "message" table"

#### Receive a message from the daemon

To do this, we must add a file to our plugin in the `./core/php/` folder. By convention, we will name this file `jee[pluginId].php`. `/plugins/[pluginId]/core/php/jee[pluginId].php` will therefore be the path to use as the callback url in the `deamon_start()` method

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
        log::add('template', 'error', 'unknown message received from daemon'); //replace template with your plugin id
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

The first test serves as a test method when starting the daemon (see call `jeedom_com.test()` in daemon code):

```php
    if (init('test') != '') {
        echo 'OK';
        die();
    }
```

and finally we load the payload that we decode in the array `$result`:

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
        log::add('template', 'error', 'unknown message received from daemon'); //replace template with your plugin id
    }
```

The python code to send the message will look like this:

```python
jeedom_com.send_change_immediate({'key1' : 'value1', 'key2' : 'value2' })
```

Voila, you have a fully functional daemon and you can communicate back and forth between your daemon and your php code, the hardest part is still to be done: code daemon logic.

## Dependencies

When we are going to write a daemon, we will very often need external libraries in addition to our own classes.

Under debian, typically, we will use the apt tool to install the necessary packages and for python, we will use pip.

And to manage this, once again, everything is planned in Jeedom's core to help us. There are 3 prerequisites that we will detail right away.

### Declaration in plugin_info/info.json

Same example as for the declaration of the daemon, it is necessary to add the property `hasDependency` and assign the value `true`:

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

The `maxDependancyInstallTime` property is the time in minutes after which the core will consider the installation unsuccessful. In this case, the daemon's auto mode will be disabled and a message will be posted in the notification center. If this property is not defined, the default delay will be 30min.

> **TIPS**
>
> The install script will not be interrupted so it may end up successfully. This is only the delay after which the core no longer waits and shows progress.

### Installing dependencies

In your eqLogic class you must add this function if it does not exist. You can copy/paste it as is without modifying anything

```php
    public static function dependency_install() {
        log::remove(__CLASS__.'_update');
        return array('script' => dirname(__FILE__) . '/../../resources/install_#stype#.sh ' . jeedom::getTmpFolder(__CLASS__) . '/dependency', 'log' => log::getPathToLog(__CLASS__.'_update'));
    }
```

This function starts by deleting the log of the previous installation if it existed and then it will return to the core the script command to execute and the location of the log.

Note that the returned script file is named `install_#stype#.sh`. Indeed, `#stype#` will be dynamically replaced by the core with the package management tool to be used depending on the system on which Jeedom is installed. So `#stype#` will be replaced by `apt` on a Debian system.
This makes it possible to offer dependency installation scripts for several systems and therefore to support something other than Debian/apt which is the bare minimum and the only one that we will manage here.

The first argument: `jeedom::getTmpFolder(__CLASS__) . '/dependency'` is the file used to track the progress of the installation (the percentage that appears on the screen during the installation).

That's it for the php part, now you have to create the script in `./resources/install_apt.sh` and obviously the content of the script will depend on your plugin and the packages you want to install.

Here is an example of a fairly simple script from one of my plugins, but you can make it much more complete and advanced:

```bash
PROGRESS_FILE=/tmp/jeedom/template/dependency #replace template with your plugin ID

if [ ! -z$1 ]; then
    PROGRESS_FILE=$1
fi
touch ${PROGRESS_FILE}
echo 0 > ${PROGRESS_FILE}
echo "*************************************"
echo "*   Launch install of dependencies  *"
echo "*************************************"
echo $(date)
echo 5 > ${PROGRESS_FILE}
apt-get-clean
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
echo "*      Install completed      *"
echo "***************************"
rm ${PROGRESS_FILE}
```

We will detail a few lines:

We start by defining the default location of the progress file in case we did not perform the previous step correctly...
And we use the first received argument as the location because we did the previous step correctly;-).

```bash
PROGRESS_FILE=/tmp/jeedom/template/dependency #replace template with your plugin ID

if [ ! -z$1 ]; then
    PROGRESS_FILE=$1
fi
```

The lines of the type `echo 60 > ${PROGRESS_FILE}` are obviously used to return the progress: to reassure the user, we put it regularly until we reach 100 (usually they stress when it exceeds 100 so we avoid).

Some tips:

- Don't do `apt-get upgrade`! You don't know what's on the machine and it's not up to you to update everything.
- Do not use `apt` but `apt-get`. `apt` is made for interactive use and this will generate a warning.
- Add the `-y` flag when necessary to confirm the prompts otherwise the script will stop with a request like `Do you want to continue [y/n]` and the user will be blocked.
- Prefer the `python3 -m pip install ...` syntax rather than `pip3 install ...` to install python packages because the second will cause problems if `pip3` (or `pip` if you are using python v2) does not is not related to the same version as python3: if for example python3 points to version 3.7 and pip3 points to 3.9 or worse 2.7; You do not know what has been done on the system and you are not safe from such problem on the user's machine, there are dozens of cases listed on community.

> **Attention**
>
> It is very important to install all the necessary packages and to pay particular attention to those which are very often already installed ... but not always. There are frequent problems with the `python3-requests`, `python3-pip` and/or `serial` packages. These are not pre-installed on a basic debian but very often already installed by another plugin... unless your plugin is the first one and in this case your daemon will not start. It happens more often than you might think.

### Know the status

![image](images/dependencies_info.png)

It is therefore our php function `dependancy_install()` which will be called by the core and which will make it possible to launch our script `./resources/install_apt.sh` when the user clicks the "Relaunch" button or automatically by the core when it detects that the dependencies are either not installed or not up to date.

But how does the core know the status and how does it display it in the above frame? Thanks to the `dependancy_info()` function that we must add in our eqLogic class.

Here is an example from which you can take the majority:

```php
    public static function dependency_info() {
        $return = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::getTmpFolder(__CLASS__) . '/dependency';
        if (file_exists(jeedom::getTmpFolder(__CLASS__) . '/dependency')) {
            $return['state'] = 'in_progress';
        } else {
            if (exec(system::getCmdSudo() . system::get('cmd_check') . '-Ec "python3\-requests|python3\-voluptuous|python3\-bs4"') < 3) { // adapt the list of packages and the total
                $return['state'] = 'nok';
            } elseif (exec(system::getCmdSudo() . 'pip3 list | grep -Ewc "aiohttp"') < 1) { // adapt package list and total
                $return['state'] = 'nok';
            } else {
                $return['state'] = 'ok';
            }
        }
        return $return;
    }
```

In this example we test the presence of apt packages: `system::getCmdSudo() . system::get('cmd_check') . '-Ec "python3\-requests|python3\-voluptuous|python3\-bs4"'`. Here we want `python3-requests`, `python3-voluptuous` and `python3-bs4` and therefore the command must return 3 hence the comparison: `< 3`.

Same for python packages: `pip3 list | grep -Ewc "aiohttp"'`. The presence of `aiohttp` is validated, only one package so we compare: `< 1`;

So it's very simple: the list of packages and the total are the only elements that you must modify if you only have this type of verification otherwise it will be easy to add the other relevant tests in your case.
