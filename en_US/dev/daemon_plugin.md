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
        $pid_file = jeedom::getTmpFolder(__CLASS__) . '/deamon.pid';
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
        $cmd = system::getCmdPython3(__CLASS__) . " {$path}/demond.py"; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'http:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --p ' . jeedom::getTmpFolder(__CLASS__) . '/deamon.pid'; // et on précise le chemin vers le p file (ne pas modifier)
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
        $pid_file = jeedom::getTmpFolder(__CLASS__) . '/deamon.pid'; // ne pas modifier
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


The `maxDependancyInstallTime` property is the time in minutes after which the core will consider the installation unsuccessful.
 In this case, the daemon's auto mode will be disabled and a message will be posted in the notification center.
 If this property is not defined, the default timeout will be 30 minutes.

> ****
>
> The installation script will not be interrupted, so it may eventually complete successfully. This is simply the timeout after which the core stops waiting and no longer displays progress.

### The JSON configuration file method

#### Created the plugin_info/packages.json file

The syntax of this file is described here. See also
[the launch article on the blog](https://blog.jeedom.com/6170-introduction-jeedom-4-2-installation-de-dependance/).

This file may contain either of the following sections:

##### pre-install: the path to a script to run before installation

Example :

json
{
  "pre-install" : {
    "script" : "plugins/[pluginID]/resources/post-install.sh"
  }


##### post-install

This could be the path to a script to run after installation, or the action of restarting Apache.
Example :

json
{
  "post-install" : {
    "restart_apache" : true,
    "script" : "plugins/[pluginID]/resources/post-install.sh"
  }


##### apt: Debian dependencies

Exemple

json
{
  "apt" : {
    "libav-tools" : {"alternative" : ["ffmpeg"]},
    "ffmpeg" : {"alternative" : ["libav-tools"]},
    "python-pil" : {},
    "php-gd" : {}
  }
}


For each package, you can specify `version` to fix a version, `alternative` if available,
 `optional` if it's optional, `reinstall` to force reinstallation of the package, `remark` to add a free-form comment.

##### pip3: Python3 dependencies

Exemple:

json
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


> *Hint*
>
> Starting with Jeedom version 4.4.9, the core can manage the installation of Python 3 dependencies under Debian 12. The outbuildings will be installed in a *venv* (virtual environment)
> You need to adapt your plugin accordingly and no longer hardcode the path to `python3` but use `system`::getCmdPython3(__CLASS__)` instead.
> Exemple: `$cmd = system::getCmdPython3(__CLASS__) . " {$path}/demond.py";`

##### npm: dependencies for NodeJS

For NodeJS, the dependencies are in a separate `packages` file.json` in a format specific to it,
If it's located in the `/resources` directory, for example, this is the file that will be referenced in the Jeedom directory:

json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    "plugins/dyson/resources/dysond"  : {}
  }
}


##### composer: to install another PHP dependency

No example available; the syntax is similar to other packages, with the keyword `composer`.

##### Dependencies on another plugin

If a plugin requires the installation of another plugin, this is also possible with the following syntax;
The plugin must be free, or already purchased :

json
{
    "plugin":{
        "mqtt2": {}
    }
}


### The procedural method

There are 2 prerequisites that we will detail right away.

#### Installation of dependencies

In your eqLogic class you must add this function if it does not already exist. You can copy/paste this as is without changing anything

php
    public static function dependancy_install() {
        log::remove(__CLASS__ . '_update');
        return array('script' => dirname(__FILE__) . '/../../resources/install_#stype#.sh ' . jeedom::getTmpFolder(__CLASS__) . '/dependance', 'log' => log::getPathToLog(__CLASS__ . '_update'));
    }


This function begins by deleting the log from the previous installation if one existed, and then it returns to the core the script command to execute and the log's location.

Note that the returned script file is named `install_`#stype#.sh`. Indeed, `#stype#` will be dynamically replaced by the core using the package management tool appropriate for the system on which Jeedom is installed. So `#stype#` will be replaced by `apt` on a Debian system.
This allows us to offer dependency installation scripts for multiple systems, and therefore to support something other than Debian/apt, which is the bare minimum and the only one we will manage here.

The first argument: `jeedom::getTmpFolder(__CLASS__) . '`/dependency` is the file used to track the installation progress (the percentage that appears on the screen during installation)).

That's all for the PHP part; now you need to create the script in `./resources/install_apt`.sh` and obviously the script's content will depend on your plugin and the packages you want to install.

Here's a fairly simple script example from one of my plugins, but you can create much more complete and sophisticated ones:

> ****
>
> Starting with Debian 12, it is mandatory to install Python packages in a virtual environment; therefore, this example script will no longer work as is. You will need to adapt it accordingly.
>
> Je vous invite également à consulter cette  qui offre une alternative: <https://github.com/Mips2648/dependance.lib/blob/master/pyenv.md>

bash
PROGRESS_FILE=/tmp/jeedom/template/dependance #replace template with your plugin ID

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
PROGRESS_FILE=/tmp/jeedom/template/dependance #replace template with your plugin ID

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
        $return['progress_file'] = jeedom::getTmpFolder(__CLASS__) . '/dependance';
        ::getTmpFolder(__CLASS__) . '/dependance')) {
            $return['state'] = 'in_progress';
        }  {
            ::getCmdSudo() . system::') . '-||
                $return['state'] = 'nok';
            } ::getCmdSudo() . ' | 
                $return['state'] = 'nok';
            }  {
                $return['state'] = 'ok';
            }
        }
        
    }


: `system::getCmdSudo() . system::') . '-||. : .

:  | . : 

> ****
>
> .

: .
