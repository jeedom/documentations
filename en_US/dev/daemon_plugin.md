# Demons & Addictions

## Introduction

In the [tutorial](/en_US/dev/tutorial_plugin) and the [documentation](/en_US/dev/plugin_template) You have learned how to code your first plugin with relatively simple actions triggered by the user via an action command or by a task scheduled by the core (cron jobs)).
The plugin is then able to retrieve information on an ad-hoc basis (for example, via an HTTP request) or perform all sorts of operations, provided that this can be coded in PHP.

There will be times when you need more than that; here are a few examples, though this list is not exhaustive:

- use system resources, for example USB drive or other hardware (Bluetooth)...)
- maintain a connection with a remote system (on a local network or on the internet, but not Jeedom))
- keeping processes active in the background, which is not the case for PHP code which only "lives" during the execution of the HTTP request
- perform real-time processing

For this, most of the time a "daemon" is used".
Don't panic, everything is already included in the Jeedom core to help us set up this daemon, and we'll explain it in detail here.

## Daemon file structure

The code and/or executable of your daemon must obviously be located in your plugin's directory structure and must therefore be included and delivered with the archive during plugin installation.
There is no strict rule on the exact location of your daemon, however the convention is to place it in the subdirectory `./resources/` of the plugin.

In the plugin template you will find the basics for implementing a daemon in Python, and this is the example we will use in this documentation. However, you are free to develop your daemon in the language of your choice, provided it can be executed on the [platforms supported by Jeedom](/en_US/compatibility/).
Most Jeedom plugin daemons are written in Python or Node.js, but some also exist in .netCore and certainly other technologies.

You will also find some useful methods for a Node.js daemon, which may be detailed in a future version of this documentation. For now, I suggest you consult the community developers to align yourself with other developers on everything related to Node.js, especially the version to use.

Template directory structure:

![image](images/daemon_struct.png)

### the python demon

In the plugin template, the daemon directory was named `demond`, and the daemon itself is named `demond.py`.
These names are arbitrary; feel free to change them.
The convention is to use the plugin ID followed by the letter 'd'. This results, for example, in the directory `blea` for the plugin./resources/blead/` which contains, among other things, the file `blead.`py`, this file being the starting point of the daemon.

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
):
    ))
    shutdown()


:

python
():
    ")
    ))
    try:
        )
    except:
        pass
    try:
        ()
    except:
        pass
    try:
        ()
    except:
        pass
    ")
    ()
    )


.

> ****
>
> ..

:

python
try:
    
    
    (): #
        . .')
        shutdown()
    
    
:
     : '))
    shutdown()


:

python
():
    ()
    try:
        :
            )
            ()
    :
        shutdown()






python
():
    
    ():
        ")
        ()))
        '] != _apikey:
             : " ))
            return
        try:
            '
        :
             : '))


.

:

python
        try:
            '
        :
             : '))


.

).

## 

.

### 

.:

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


.

### 

.

#### ()

:

![image](images/daemon_info.png)

.
.

php
    () {
        $ = array();
        $return['log'] = __CLASS__;
        $return['state'] = 'nok';
        $pid_file = jeedom::) . '/deamon.pid';
        )) {
            )))) {
                $return['state'] = 'ok';
            }  {
                ::getCmdSudo() . ' ' . $pid_file . ' 
            }
        }
        $return['launchable'] = 'ok';
        $user = config::byKey('user', __CLASS__); // exemple si votre démon à besoin de la config user,
        $pswd = config::byKey('password', __CLASS__); // password,
        $clientId = config::byKey('clientId', __CLASS__); // et clientId
         == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le nom d\'utilisateur n\'est pas configuré', __FILE__);
        }  == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le mot de passe n\'est pas configuré', __FILE__);
        }  == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('La clé d\'application n\'est pas configurée', __FILE__);
        }
        
    }


> ****
>
> .

.

. "

#### ()

.
.

php
    () {
        self::
        $deamon_info = self::deamon_info();
        '] != 'ok') {
            
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = system::) . " {$path}/demond.py"; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'http:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --p ' . jeedom::) . '/deamon.pid'; // et on précise le chemin vers le p file (ne pas modifier)
        log::
        $result = exec($cmd . ' >> ' . log::getPathToLog('template_daemon') . ' 2>&1 &'); // 'template_daemon' est le nom du  pour votre démon, vous devez nommer votre  en commençant par le plugin pour que le fichier apparaisse dans la page de config
        $i = 0;
        ) {
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
        )) {
            $p = intval(trim(file_get_contents($pid_file)));
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
        '] != _apikey:
             : " ))
            return
        try:
            '
        :
             : '))


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
        
    }  {
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
        
    }  {
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
> Je vous invite également à consulter cette documentation qui offre une alternative: <https://github.com/Mips2648/dependance.lib/blob/master/pyenv.md>

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
        $ = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::) . '/dependance';
        ::) . '/dependance')) {
            $return['state'] = 'in_progress';
        }  {
            ::getCmdSudo() . system::') . '-Ec "python3\-requests|python3-voluptuous|python3\-bs4"') < 3) { // adapt the package list and the total
                $return['state'] = 'nok';
            } ::getCmdSudo() . 'pip3 list | grep -Ewc "aiohttp"') < 1) { // adapt the package list and the total
                $return['state'] = 'nok';
            }  {
                $return['state'] = 'ok';
            }
        }
        
    }


: `system::getCmdSudo() . system::') . '-Ec "python3\-requests|python3-voluptuous|python3\-bs4"'`. : .

: `pip3 list | grep -Ewc "aiohttp"'`. : 

> ****
>
> .

: .
