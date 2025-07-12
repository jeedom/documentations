# 

## Introduction

 [](/en_US/dev/tutorial_plugin)  [](/en_US/dev/plugin_template) ).
.

:

- ...)
- )
- 
- 

".
.

## 

.
..

 [](/en_US/compatibility/).
 ..

. .

:

![image](images/daemon_struct.png)

### 

.
.
. ...

> ****
>
> .

### 

.
.).
.

#### ()

.
.

#### ()

.
.

> ****
>
> ). .

#### ()

.
).
.

. .

.

#### ()

.
. .

### 

: .

.:

python
"

'
'
'
 = ''
 = ''

:
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")

)

)

')
 : '))
 : '))
 : '))
 : '))
 : '))
 : '))

)
)

try:
    ))
    )
    ():
        . .')
        shutdown()
    )
    listen()
:
     : '))
    shutdown()


:

python

.
.

' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas; nom du démon à modifier comme expliqué ci-dessus;

 = '' ## )


> ****
>
> : . ). .

.
.

python
:
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")


:

python
)
)


:

python
def handler(signum=None, frame=None):
    logging.debug("Signal %i caught, exiting..." % int(signum))
    shutdown()


which only adds a log and calls the `shutdown()` method defined just below:

python
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


This is the method where you should write the code to be executed in case of daemon shutdown, for example to logout the remote system and cleanly close open connections.

> ****
>
> You need to adapt this method and remove the code that is not necessary in your case, notably the try/except on `jeedom_serial.close()` if you are not using this class.

If we return to the start of the daemon, here is the commented continuation:

python
try:
    jeedom_utils.write_pid(str(_pidfile)) # writes the pidfile that the jeedom core will monitor to determine if the daemon is started
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle) # creation of the jeedom_com object
    (): #first test to verify that the callback url is correct
        . .')
        shutdown()
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host) # we declare the socket to receive orders from jeedom
    listen() # and we listen
:
     : '))
    shutdown()


The `listen()` method defined at the beginning of the file:

python
def listen():
    jeedom_socket.open()
    try:
        while 1:
            time.sleep(0.5)
            read_socket()
    except KeyboardInterrupt:
        shutdown()


Nothing to change here, we can see that the socket is open and then an infinite loop to read the socket every half second

The `read_socket()` method

python
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
            logging.error('Send command to daemon error : '))


The `JEEDOM_SOCKET_MESSAGE` variable is a python `queue()` fed by the `jeedom_socket()` class as seen previously.

If the queue is not empty, we load the json and check that the api key received with the message matches the one received when starting the daemon (`_apikey`) then we can read the message and do our actions in the try/except:

python
        try:
            print 'read'
        except Exception, e:
            logging.error('Send command to daemon error : '))


So instead of `print 'read'` it's up to you to read the relevant elements of the message that your plugin will have sent and to trigger the actions or to call your classes or methods specific to your plugin.

From here you have a daemon that can be run even if it doesn't do anything yet (that's your job).

## Adapting the plugin's php code

Having a daemon and understanding its structure is great, but there are a few key elements missing so that your plugin (php code) can control this daemon and so that the core is also informed that it exists.

### plugin_info/info.json

In the info file.json of your plugin, you must add the property `hasOwnDeamon` and assign the value `true`, example:

json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 10,
    ...
}


We will see the use of `hasDependency` and `maxDependancyInstallTime` later.

### Managing the daemon in your eqLogic class

In the eqLogic class of your plugin there are some methods to implement for the proper management of the daemon.

#### Daemon_info function()

The `deamon_info()` function will be called by the core when displaying the following frame in your plugin's configuration page, it must exist:

![image](images/daemon_info.png)

Typically it will look like this, the returned array and the keys used in that array are obviously important.
You can copy/paste the code below as is and adapt the code at the end of the function to check the configuration needed for your plugin.

php
    public static function deamon_info() {
        $return = array();
        $return['log'] = __CLASS__;
        $return['state'] = 'nok';
        $pid_file = jeedom::) . '/deamon.pid';
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


> ****
>
> There is no typo in the example, the method is named `deamon_info()` and not `daemon_info`, the error is in the core.

The `state` key obviously corresponds to the status displayed on the screen, we can read above that we are testing the presence of our "pid_file" to know if the daemon is running or not.

The `launchable` key corresponds to the "Configuration" column in the frame and we can therefore check if the configuration is complete and correct to be able to start the daemon. `launchable_message` allows you to display a message to the user in case of "NOK"

#### Daemon_start function()

The `deamon_start()` function is, as its name suggests, the method that will be called by the core to start your daemon.
You can copy/paste the code below as is and modify the indicated lines.

php
    public static function deamon_start() {
        self::deamon_stop();
        $deamon_info = self::deamon_info();
        if ($deamon_info['launchable'] != 'ok') {
            throw new Exception(__('Please check the configuration', __FILE__));
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = system::) . " {$path}/demond.py"; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'http:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --pid ' . jeedom::) . '/deamon.pid'; // et on précise le chemin vers le pid file (ne pas modifier)
        log::add(__CLASS__, 'info', 'Daemon launch');
        $result = exec($cmd . ' >> ' . log::getPathToLog('template_daemon') . ' 2>&1 &'); // 'template_daemon' est le nom du log pour votre démon, vous devez nommer votre log en commençant par le pluginid pour que le fichier apparaisse dans la page de config
        $i = 0;
        while ($i < 20) {
            $deamon_info = self::deamon_info();
            ') {
                break;
            }
            sleep(1);
            $i++;
        }
        ) {
            log::
            
        }
        message::
        
    }


.

.
. ::.

#### ()

: .

php
    () {
        $pid_file = jeedom::) . '/deamon.pid'; // ne pas modifier
        if (file_exists($pid_file)) {
            $pid = intval(trim(file_get_contents($pid_file)));
            system::
        }
        system::
        sleep(1);
    }


.. .

### 

. : .

.

#### 

.
-)

.

php
    ) {
        $deamon_info = self::deamon_info();
        '] != 'ok') {
            
        }
        $params['apikey'] = jeedom::getApiKey(__CLASS__);
        $payLoad = json_encode($params);
        $socket = socket_create(AF_INET, SOCK_STREAM, 0);
        .::
        
        
    }


.

:

python
        if message['apikey'] != _apikey:
            logging.error("Invalid apikey from socket : " + str(message))
            return
        try:
            print 'read'
        except Exception, e:
            logging.error('Send command to daemon error : '))


"

#### 

. ].

:

php
<?php

 {
    

     (!jeedom::
        
        die();
    }
    ') != '') {
        
        die();
    }
    $result = json_decode(file_get_contents("php://input"), true);
     (!)) {
        die();
    }

    '])) {
        
    } '])) {
        
    } else {
        log::
    }
} ) {
    log::
}


:

php
     (!jeedom::
        
        die();
    }


.):

php
    ') != '') {
        
        die();
    }


:

php
    $result = json_decode(file_get_contents("php://input"), true);
     (!)) {
        die();
    }


:

php
    '])) {
        
    } '])) {
        
    } else {
        log::
    }


:

python
' : '' : 'value2' })


: .

## 

.

.

:

.
   
.
   ..

.

- :
  - ..
  - ..
- :
  - .
- .
  - 

. .

### 

.
:

json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 30,
    ...
}


.
 .
 .

> ****
>
> . .

### 

#### 

. 
[](https://blog.jeedom.com/6170-introduction-jeedom-4-2-installation-de-dependance/).

:

##### pre-install: 

 :

json
{
  "pre-install" : {
    "script" : ""
  }


##### post-install

.
 :

json
{
  "post-install" : {
    "" : true,
    "script" : ""
  }


##### apt: 

Exemple

json
{
  "apt" : {
    "libav-tools" : {"alternative" : "]},
    "ffmpeg" : {"alternative" : "]},
    "python-pil" : {},
    "php-gd" : {}
  }
}


,
 .

##### pip3: 

Exemple:

json
{
  "apt" : {
    "" : {},
    "" : {},
    "" : {}
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


> **
>
> ..  ** ()
> ::.
> Exemple: ::) . " {$path}/demond.py";`

##### npm: 

.,
:

json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    ""  : {}
  }
}


##### composer: 

.

##### 


 :

json
{
    "plugin":{
        "mqtt2": {}
    }
}


### 

.

#### 

. 

php
    () {
        log::
        #stype#. ' . jeedom::) . '::
    }


.

#stype#.#stype#. #stype#.
.

: `jeedom::) . ').

..

:

> ****
>
> .
>
> Je vous invite également à consulter cette  qui offre une alternative: <https://github.com/Mips2648/dependance.lib/blob/master/pyenv.md>

bash


 ! -
    
fi
}
}
 "*************************************"
 "*     *"
 "*************************************"
)
}

}

}

 "*****************************"
"
 "*****************************"

}

 "*************************************"
"
 "*************************************"
"
}

}
)
 "***************************"
 "*            *"
 "***************************"
}


:

...
-).

bash


 ! -
    
fi


: ).

:

- ! .
- . .
- .
- : ....

> ****
>
> . . . .

#### 

![image](images/dependencies_info.png)

..

? .

:

php
    () {
        $return = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::) . '/dependance';
        ::) . '/dependance')) {
            $return['state'] = 'in_progress';
        } else {
            ::getCmdSudo() . system::') . '-||
                $return['state'] = 'nok';
            } ::getCmdSudo() . ' | 
                $return['state'] = 'nok';
            } else {
                $return['state'] = 'ok';
            }
        }
        return $return;
    }


: `system::getCmdSudo() . system::') . '-||. : .

:  | . : 

> ****
>
> .

: .
