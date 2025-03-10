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
            wenn ($deamon_info['status'] == 'ok') {
                break;
            }
            sleep(1);
            $i++;
        }
        wenn ($i >= 30) {
            log::add(__CLASS__, 'error', __('Daemon konnte nicht gestartet werden, prüfen Sie das Protokoll', __FILE__), 'unableStartDeamon');
            gibt false zurück;
        }
        message::entferneAlle(__CLASS__, 'unableStartDeamon');
        gibt true zurück;
    }


Bearbeiten Sie nur die Zeilen mit einem Kommentar, der Rest sollte unverändert bleiben.

Beachten Sie, dass wir zunächst den Daemon stoppen, um den Neustart zu verwalten.
Anschließend prüfen wir mit der Methode `deamon_info()` ob der Daemon überhaupt gestartet werden kann und generieren in der Variable `$cmd` die Kommandozeile um unseren Daemon zu starten, hier mit python3. Beachten Sie die Verwendung der Funktion „System“::getCmdPython3(__CLASS__)` gibt den Pfad zu Python3 zurück, um dies zu verwenden und damit mit Debian 12 kompatibel zu sein, wenn Ihre Abhängigkeiten vom Kernel installiert werden.

#### Deamon_stop-Funktion()

Mit dieser Methode wird der Daemon gestoppt: wir holen die PID des Daemons ab, die in der "pid_file" geschrieben wurde und senden den Systemkill an den Prozess.

php
    öffentliche statische Funktion damon_stop() {
        $pid_file = jeedom::) . '/deamon.pid'; // ne pas modifier
        )) {
            $p = intval(trim(file_get_contents($pid_file)));
            system::töten($pid);
        }
        system::töten('templated.py'); // Name des zu ändernden Daemons
        sleep(1);
    }


Hier angekommen haben Sie den Dämon in der Info erklärt.json und implementierte die 3 Methoden, die der Jeedom-Kern benötigt, um Ihren Daemon zu starten und zu stoppen sowie seinen Status anzuzeigen. Voraussetzungen sind gegeben.

### Kommunikation zwischen dem Daemon und dem PHP-Code

Es bleibt die Verwaltung der Kommunikation vom und zum Daemon. Im Python-Code haben wir bereits gesehen, wie es geschafft wurde: zur Erinnerung die Methoden `listen()` und `read_socket()`, die auf einem Socket lauschen, und die Methode `send_change_immediate()`, um eine JSON-Nutzlast an den PHP-Code zu senden.

Es ist daher notwendig, das Äquivalent auf der PHP-Seite zu verwalten.

#### Sende dem Dämon eine Nachricht

Diese Funktion existiert nicht im Kern und ist nicht Standard für alle Jeedom-Plugins, sie ist auch nicht obligatorisch.
Dies ist die Funktion, die ich selbst (@Mips) in jedem meiner Plugins verwende, die über einen Daemon verfügen. Ich füge sie hier ein und Sie machen damit, was Sie wollen-)

Es erhält daher ein Array von Werten als Parameter und ist dafür verantwortlich, es an den Daemon-Socket zu senden, der dieses Array daher in der Methode „read_socket()“ lesen kann, die wir zuvor gesehen haben.

php
    öffentliche statische Funktion sendToDaemon($params) {
        $deamon_info = self::deamon_info();
        wenn ($deamon_info['status'] != 'ok') {
            throw new Exception("Daemon nicht gestartet");
        }
        $params['apikey'] = jeedom::getApiKey(__CLASS__);
        $payLoad = json_encode($params);
        $socket = socket_create(AF_INET, SOCK_STREAM, 0);
        socket_connect($socket, '127.0.0.1', Konfiguration::nachSchlüssel('socketport', __CLASS__, '55009')); //Standardport Ihres Plugins, der geändert werden soll
        socket_write($socket, $payLoad, strlen($payLoad));
        : Socket_close($socket);
    }


Was in das Array „$params“ gelangt und wie Sie diese Daten in Ihrem Daemon verwenden, bleibt Ihnen überlassen und hängt von der Funktion Ihres Plugins ab.

Zur Erinnerung: Diese Tabelle wird daher in der Methode „read_socket()“ abgerufen. Python-Code-Auszug:

python
        '] != _apikey:
             : " ))
            return
        try:
            '
        :
             : '))


Wir können deutlich den vom PHP-Code hinzugefügten Schlüssel „apikey“ sehen, der vom Python-Code in der Tabelle „message“ gelesen wird"

#### Erhalte eine Nachricht vom Dämon

Dazu müssen wir unserem Plugin eine Datei im Ordner `./core/php/` hinzufügen. Gemäß Konvention nennen wir diese Datei „jee[pluginId].php“. `/plugins/[pluginId]/core/php/jee[pluginId].php` ist daher der Pfad, der als Callback-URL in der Methode `deamon_start()` verwendet wird

Hier ist der grundlegende Inhalt, den Sie in diese Datei kopieren/einfügen können:

php
<?php

 {
    require_once dirname(__FILE__) . "/../../../../core/php/core.inc.php";

    Wenn (!jeedom::apiAccess(init('apikey'), 'template')) { //ersetze template durch deine Plugin-ID
        echo __('Sie sind nicht berechtigt, diese Aktion auszuführen', __FILE__);
        die();
    }
    wenn (init('test') != '') {
        echo "OK";
        die();
    }
    $result = json_decode(file_get_contents("php://input"), true);
    Wenn (!is_array($ergebnis)) {
        die();
    }

    wenn (isset($result['key1'])) {
        // etwas tun
    } sonstwenn (isset($result['key2'])) {
        // etwas anderes machen
    }  {
        log::add('Vorlage', 'Fehler', 'unbekannte Nachricht vom Daemon empfangen'); //ersetze template durch die ID deines Plugins
    }
} catch (Ausnahme $e) {
    log::hinzufügen('Vorlage', 'Fehler', displayException($e)); //ersetze template durch die ID deines Plugins
}


Der Code beginnt mit der Überprüfung, ob der API-Schlüssel korrekt ist:

php
    Wenn (!jeedom::apiAccess(init('apikey'), 'template')) { //ersetze template durch deine Plugin-ID
        echo __('Sie sind nicht berechtigt, diese Aktion auszuführen', __FILE__);
        die();
    }


Der erste Test dient als Testmethode beim Starten des Daemons (siehe call `jeedom_com.test()` im Daemon-Code):

php
    wenn (init('test') != '') {
        echo "OK";
        die();
    }


und schließlich laden wir die Nutzlast, die wir in der Tabelle `$result` dekodieren:

php
    $result = json_decode(file_get_contents("php://input"), true);
    Wenn (!is_array($ergebnis)) {
        die();
    }


Dann liegt es an Ihnen, die Tabelle zu lesen und die Aktionen in Ihrem Plugin entsprechend auszuführen, Beispiel:

php
    wenn (isset($result['key1'])) {
        // etwas tun
    } sonstwenn (isset($result['key2'])) {
        // etwas anderes machen
    }  {
        log::add('Vorlage', 'Fehler', 'unbekannte Nachricht vom Daemon empfangen'); //ersetze template durch die ID deines Plugins
    }


Der Python-Code zum Senden der Nachricht sieht folgendermaßen aus:

python
jeedom_com.send_change_immediate({'key1' : 'Wert1‘, ‚Schlüssel2' : 'value2' })


Voila, Sie haben einen voll funktionsfähigen Daemon und können zwischen Ihrem Daemon und Ihrem PHP-Code hin und her kommunizieren. Der schwierigste Teil kommt noch: Coden Sie die Daemon-Logik.

## Die Abhängigkeiten

Wenn wir einen Daemon schreiben, benötigen wir sehr oft zusätzlich zu unseren eigenen Klassen externe Bibliotheken.

Unter Debian verwenden wir normalerweise das Tool apt, um die erforderlichen Pakete zu installieren, und für Python3 verwenden wir pip3.

Und um dies zu bewältigen, wird im Jeedom-Kern wieder alles bereitgestellt, um uns über zwei verschiedene Methoden zu helfen:

1. Die Verfahrensmethode.
   Diese Methode war die einzige Methode, die mit Versionen von Jeedom vor 4.2 möglich war
1. Die Methode per Konfigurations-JSON-Datei.
   Diese Methode erschien mit Version 4.2 des Jeedom-Kerns.

Beide Methoden können in einem einzigen Plugin implementiert werden.

- Wenn beide Methoden in einem Plugin implementiert sind:
  - Der Kern vor 4.2 wird die prozedurale Methode verwenden.
  - Der Kern 4.2 und folgende verwenden die JSON-Konfigurationsdateimethode.
- Wenn nur die prozedurale Methode in einem Plugin implementiert ist:
  - Alle Kerne verwenden diese Methode.
- Wenn nur die JSON-Konfigurationsdateimethode in einem Plugin implementiert ist.
  - Das Plugin ist nicht mit Core-Versionen vor 4.2 kompatibel

Beide Methoden haben ihre Vor- und Nachteile. Es liegt an Ihnen, entsprechend Ihrer Situation zu wählen.

### Deklaration in plugin_info/info.json

In beiden Fällen müssen Sie Ihre `info.json`-Datei anpassen.
Gleiches Beispiel wie bei der Daemon-Deklaration, Sie müssen die Eigenschaft `hasDependency` hinzufügen und den Wert `true` zuweisen:

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
        $ = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::) . '/dependance';
        ::) . '/dependance')) {
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
