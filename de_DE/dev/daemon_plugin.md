# 

## Introduction

 [](/de_DE/dev/tutorial_plugin)  [](/de_DE/dev/plugin_template) ).
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

 [](/de_DE/compatibility/).
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


Die Eigenschaft `maxDependancyInstallTime` gibt die Zeit in Minuten an, nach deren Ablauf das System die Installation als fehlgeschlagen betrachtet.
 In diesem Fall wird der Automatikmodus des Daemons deaktiviert und eine Meldung im Benachrichtigungscenter angezeigt.
 Wenn diese Eigenschaft nicht definiert ist, beträgt das Standard-Timeout 30 Minuten.

> ****
>
> Das Installationsskript wird nicht unterbrochen, sodass es möglicherweise schließlich erfolgreich abgeschlossen wird. Dies ist lediglich die Zeitüberschreitung, nach der der Kern das Warten beendet und keinen Fortschritt mehr anzeigt.

### Die JSON-Konfigurationsdateimethode

#### Die Datei plugin_info/packages.json wurde erstellt

Die Syntax dieser Datei wird hier beschrieben. Siehe auch
[der Einführungsartikel im Blog](https://blog.jeedom.com/6170-introduction-jeedom-4-2-installation-de-dependance/).

Diese Datei kann einen der folgenden Abschnitte enthalten:

##### pre-install: der Pfad zu einem Skript, das vor der Installation ausgeführt werden soll

Beispiel :

json
{
  "pre-install" : {
    "script" : "plugins/[pluginID]/resources/post-install.sh"
  }


##### post-install

Dies könnte der Pfad zu einem Skript sein, das nach der Installation ausgeführt werden soll, oder die Aktion zum Neustart von Apache.
Beispiel :

json
{
  "post-install" : {
    "Apache neu starten" : true,
    "script" : "plugins/[pluginID]/resources/post-install.sh"
  }


##### apt: Debian-Abhängigkeiten

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


Für jedes Paket können Sie `version` angeben, um eine bestimmte Version festzulegen, oder `alternative`, falls verfügbar,
 `optional`, falls optional, `reinstall` zum Erzwingen der Neuinstallation des Pakets, `remark` zum Hinzufügen eines frei formulierten Kommentars.

##### pip3: Python3-Abhängigkeiten

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


> *Hinweis*
>
> Ab Jeedom Version 4.4.9. Der Kern kann die Installation von Python 3-Abhängigkeiten unter Debian 12 verwalten. Die Nebengebäude werden in einem *venv* (virtuelle Umgebung)
> Sie müssen Ihr Plugin entsprechend anpassen und den Pfad zu `python3` nicht mehr fest codieren, sondern `system` verwenden::getCmdPmdPython3(__CLASS__)` stattdessen.
> Exemple: `$cmd = system::getCmdPython3(__CLASS__) . " {$path}/demond.py";`

##### npm: Abhängigkeiten für NodeJS

Bei NodeJS befinden sich die Abhängigkeiten in einer separaten `packages`-Datei.json` in einem dafür spezifischen Format,
Befindet sie sich beispielsweise im Verzeichnis `/resources`, so ist dies die Datei, auf die im Jeedom-Verzeichnis verwiesen wird:

json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    "plugins/dyson/resources/dysond"  : {}
  }
}


##### composer: eine weitere PHP-Abhängigkeit installieren

Es ist kein Beispiel verfügbar; die Syntax ähnelt der anderer Pakete und verwendet das Schlüsselwort `composer`.

##### Abhängigkeiten von einem anderen Plugin

Falls ein Plugin die Installation eines anderen Plugins erfordert, ist dies auch mit folgender Syntax möglich:
Das Plugin muss kostenlos oder bereits erworben sein :

json
{
    "plugin":{
        "mqtt2": {}
    }
}


### Das Verfahrensverfahren

Es gibt zwei Voraussetzungen, die wir gleich im Detail erläutern werden.

#### Installation der Abhängigkeiten

In Ihrer eqLogic-Klasse müssen Sie diese Funktion hinzufügen, falls sie noch nicht existiert. Sie können dies unverändert kopieren und einfügen

php
    public static function dependency_install() {
        log::remove(__CLASS__ . '_update');
        return array('script' => dirname(__FILE__) . '/../../resources/install_#stype#.sh ' . jeedom::getTmpFolder(__CLASS__) . '/dependance', 'log' => log::getPathToLog(__CLASS__ . '_update'));
    }


Diese Funktion löscht zunächst das Protokoll der vorherigen Installation, falls vorhanden, und gibt dann den auszuführenden Skriptbefehl sowie den Speicherort des Protokolls an den Kern zurück.

Beachten Sie, dass die zurückgegebene Skriptdatei den Namen `install_` trägt#stype#.sh`. In der Tat, `#stype#` wird dynamisch durch den Kern mithilfe des für das System, auf dem Jeedom installiert ist, geeigneten Paketverwaltungstools ersetzt. So `#stype#` wird auf einem Debian-System durch `apt` ersetzt.
Dies ermöglicht es uns, Abhängigkeitsinstallationsskripte für mehrere Systeme anzubieten und somit auch andere Systeme als Debian/apt zu unterstützen, welches das absolute Minimum darstellt und das einzige ist, das wir hier verwalten werden.

Das erste Argument: `jeedom::getTmpFolder(__CLASS__) . 'Die Datei `/dependency` dient dazu, den Installationsfortschritt zu verfolgen (die Prozentzahl, die während der Installation auf dem Bildschirm angezeigt wird)).

Das war alles zum PHP-Teil; jetzt müssen Sie das Skript in `./resources/install_apt` erstellen.sh` und natürlich hängt der Inhalt des Skripts von Ihrem Plugin und den Paketen ab, die Sie installieren möchten.

Hier ist ein recht einfaches Skriptbeispiel aus einem meiner Plugins, aber Sie können auch viel umfassendere und ausgefeiltere Skripte erstellen:

> ****
>
> Ab Debian 12 ist die Installation von Python-Paketen in einer virtuellen Umgebung zwingend erforderlich; daher funktioniert dieses Beispielskript nicht mehr ohne Anpassungen.
>
> Je vous invite également à consulter cette  qui offre une alternative: <https://github.com/Mips2648/dependance.lib/blob/master/pyenv.md>

bash
PROGRESS_FILE=/tmp/jeedom/template/dependance #Ersetzen Sie template durch Ihre Plugin-ID

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
PROGRESS_FILE=/tmp/jeedom/template/dependance #Ersetzen Sie template durch Ihre Plugin-ID

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
