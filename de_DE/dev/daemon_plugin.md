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

> **TIPP**
>
> Zögern Sie nicht, sich von offiziellen Plugins mit Daemon inspirieren zu lassen, um die Details zu verstehen, wie z. B. Blea, OpenZwave oder SMS.

### das Jeedom-Paket für einen Python-Daemon

Jeedom stellt mit dem Template-Plugin ein Python-Paket bereit, das die grundlegenden Klassen und Methoden bietet, die für die Verwaltung des Daemons und die Kommunikation zwischen dem Daemon und dem PHP-Code Ihres Plugins nützlich sind.
Diese Klassen befinden sich im Verzeichnis `./resources/demond/jeedom/jeedom.py` (im Screenshot oben sichtbar).
Um zu beginnen, müssen Sie die Implementierungsdetails dieser Klassen und Methoden nicht kennen, daher erhalten Sie hier nur eine Zusammenfassung dessen, was sie ermöglichen.

#### Klasse jeedom_utils()

Diese Klasse ist eine Reihe nützlicher statischer Methoden wie „convert_log_level“, um den von jeedom empfangenen Protokolllevel in einen Protokolllevel der Python-Klasse „logging“ umzuwandeln, oder „find_tty_usb“, um eine Liste der Geräte im System zurückzugeben.
Wir werden sie hier nicht alle im Detail beschreiben, der Name jeder Methode ist ziemlich eindeutig, Sie werden sie entdecken, indem Sie in den Code eintauchen.

#### Klasse jeedom_serial()

Diese Klasse kapselt das Lesen und Schreiben auf ein Gerät.
Auch hier werden wir nicht näher auf die Klasse eingehen, die Methoden sprechen für sich selbst. Sie müssen nur wissen, dass sie existiert, wenn Sie sie brauchen.

> **Aufmerksamkeit**
>
> Wenn Ihr Daemon diese Art von Aktion nicht ausführen muss, müssen Sie daran denken, diese Klasse nicht zu verwenden oder zu importieren, da das Python-Paket „serial“ nicht standardmäßig installiert ist und in diesem Fall Ihr Daemon nicht gestartet wird (Problem, das mehrmals in der Community gesehen wurde)). Wir werden im Abhängigkeitsmanagement darauf zurückkommen.

#### Klasse jeedom_socket() & jeedom_socket_handler()

Sie werden die Klasse `jeedom_socket_handler()` nicht direkt verwenden, sie wird nur für `jeedom_socket()` verwendet.
Der Zweck von `jeedom_socket()` besteht darin, die Abwärtskommunikation (von Ihrem PHP-Code zum Daemon) sicherzustellen).
Wenn Ihr Plugin eine Anweisung an Ihren Daemon senden muss, kann es dies über diesen Socket tun. Ein Beispiel finden Sie weiter unten in dieser Dokumentation.

Die Klasse öffnet also einen TCP-Socket und lauscht. Wenn eine Nachricht empfangen wird, wird sie in eine Warteschlange gestellt, die später von Ihrem Daemon gelesen wird. Wir werden darauf zurückkommen.

Auch hier sind Sie nicht verpflichtet, diesen Mechanismus zu verwenden. Sie können gerne etwas anderes erstellen (z. B. einen HTTP-Server). Dies ist jedoch das, was Jeedom bereitstellt. Es ist leicht und funktioniert sehr gut.

#### Klasse jeedom_com()

Dies stellt die Uplink-Kommunikation vom Daemon zu Ihrem PHP-Code sicher.
Sie werden im Wesentlichen zu Beginn `send_change_immediate()` verwenden, was Ihnen ermöglicht, eine JSON-Nutzlast über eine HTTP-Anfrage an Jeedom zu senden. Es ist sehr einfach und effektiv, wir werden später ein Beispiel sehen.

### Python-Dämonenskelett

Nachdem wir nun die Umgebung kennen, können wir uns dem Teil widmen, der uns am meisten interessiert: der Dämon und was wir codieren müssen.

Wir werden uns daher das Skelett eines Dämons im Detail ansehen, wie es von Jeedom vorgeschlagen wird. Öffnen Sie die Datei `demond.py` und wir beginnen mit den letzten Zeilen, die eigentlich den Anfang des Programms darstellen:

```python
_log_level = "Fehler"
_socket_port = 55009 # ändern
_socket_host = 'lokaler Host'
_device = 'auto'
_pidfile = '/tmp/demond.pid'
_apikey = ''
_Rückruf = ''

für arg in sys.argv:
    wenn arg.startswith("--loglevel="):
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
        temp, _Gerät = arg.split("=")

_socket_port = int(_socket_port)

jeedom_utils.set_log_level(_log_level)

logging.info('Demond starten')
logging.info('Protokollebene : '+str(_log_level))
logging.info('Socket-Port : '+str(_socket_port))
logging.info('Socket-Host : '+str(_socket_host))
logging.info('PID-Datei : '+str(_pidfile))
logging.info('Apikey : '+str(_apikey))
logging.info('Gerät : '+str(_device))

signal.signal(signal.SIGINT, Handler)
signal.signal(signal.SIGTERM, Handler)

try:
    jeedom_utils.write_pid(str(_pidfile))
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle)
    wenn nicht jeedom_com.test():
        logging.error('Netzwerkkommunikationsprobleme. Bitte korrigieren Sie Ihre Jeedom-Netzwerkkonfiguration.')
        shutdown()
    jeedom_socket = jeedom_socket(Port=_Socket_Port,Adresse=_Socket_Host)
    listen()
außer Ausnahme als e:
    logging.error('Schwerwiegender Fehler : '+str(e))
    shutdown()
```

Einige Variableninitialisierungen:

```python
_log_level = "error" # die Standardprotokollebene im Textformat, wie von Jeedom gesendet
_socket_port = 55009 # der Port, den Ihr Daemon standardmäßig verwendet, um den Jeedom-Listening-Socket zu öffnen, der geändert werden soll.
_socket_host = 'localhost' # die Schnittstelle, auf der der Socket geöffnet werden soll, darf wahrscheinlich nicht geändert werden.
_device = 'auto' # ist nutzlos, wenn Sie kein Hardwaregerät verwenden
_pidfile = '/tmp/demond.pid' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas; nom du démon à modifier comme expliqué ci-dessus;
_apikey = '' # apikey zur Authentifizierung der Kommunikation zwischen Jeedom und Ihrem Daemon
_Rückruf = '' ## die Rückruf-URL zum Senden von Benachrichtigungen an Jeedom (und an Ihren PHP-Code)
```

> **Aufmerksamkeit**
>
> Sie müssen bei der Auswahl des Ports, den Sie für Ihren Socket verwenden möchten, vorsichtig sein. Dies ist ein möglicher Verbesserungspunkt unter Jeedom, da kein Mechanismus zur Vermeidung von Kollisionen vorhanden ist: Wenn also ein anderes Plugin denselben Port wie Sie verwendet, stellt dies offensichtlich ein Problem dar. Die einzige Möglichkeit, Ihre Auswahl zu treffen, besteht derzeit darin, unter den vorhandenen Plugins nach den bereits verwendeten Ports zu suchen und eine Abstimmung zwischen Entwickler und Community durchzuführen (zu diesem Thema gibt es bereits offene Themen)). Darüber hinaus ist es wichtig, dies in der Konfiguration Ihres Plugins benutzerkonfigurierbar zu lassen, damit die Portnummer geändert werden kann, falls ein solcher Konflikt auftreten sollte.

Dann rufen wir die in der Befehlszeile empfangenen Argumente ab. Diese Befehlszeile wird von Ihrem PHP-Code generiert. Wir werden darauf zurückkommen.
Es liegt an Ihnen, das zu entfernen, was nicht nützlich ist (wie das Geräteargument) oder andere hinzuzufügen, wie z. B. einen Benutzer/Passwort, wenn Ihr Daemon eine Verbindung zu einem Remote-System herstellen muss.

```python
für arg in sys.argv:
    wenn arg.startswith("--loglevel="):
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
        temp, _Gerät = arg.split("=")
```

Dann gibt es einige Protokollzeilen und diese beiden Zeilen, klassisch in Python, die einfach die aufzurufende Methode aufzeichnen, wenn diese beiden Interrupt-Signale empfangen werden, wodurch der Daemon gestoppt werden kann:

```python
signal.signal(signal.SIGINT, Handler)
signal.signal(signal.SIGTERM, Handler)
```

und die `handler`-Methode, die etwas weiter oben im Daemon definiert ist:

```python
def handler(signum=None, frame=None):
    logging.debug("Signal %i abgefangen, wird beendet..." % int(signum))
    shutdown()
```

fügt lediglich ein Protokoll hinzu und ruft die unten definierte Methode `shutdown()` auf:

```python
definitiv heruntergefahren():
    logging.debug("Herunterfahren")
    logging.debug("PID-Datei entfernen " + str(_pidfile))
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
    logging.debug("Beenden 0")
    sys.stdout.flush()
    os._exit(0)
```

Dies ist die Methode, bei der Sie den Code schreiben sollten, der im Falle des Herunterfahrens des Daemons ausgeführt werden soll, beispielsweise um das Remote-System abzumelden und offene Verbindungen sauber zu schließen.

> **Aufmerksamkeit**
>
> Sie müssen diese Methode anpassen und den Code entfernen, der in Ihrem Fall nicht erforderlich ist, insbesondere das Try/Except auf `jeedom_serial.close()`, wenn Sie diese Klasse nicht verwenden.

Wenn wir zum Anfang des Daemons zurückkehren, ist hier die kommentierte Fortsetzung:

```python
try:
    jeedom_utils.write_pid(str(_pidfile)) # schreibt die Pid-Datei, die der Jeedom-Kern überwacht, um festzustellen, ob der Daemon gestartet wird
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle) # Erstellung des jeedom_com-Objekts
    wenn nicht jeedom_com.test(): #erster Test, um zu überprüfen, ob die Rückruf-URL korrekt ist
        logging.error('Netzwerkkommunikationsprobleme. Bitte korrigieren Sie Ihre Jeedom-Netzwerkkonfiguration.')
        shutdown()
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host) # wir deklarieren den Socket, um Befehle von jeedom zu empfangen
    listen() # und wir hören zu
außer Ausnahme als e:
    logging.error('Schwerwiegender Fehler : '+str(e))
    shutdown()
```

Die am Anfang der Datei definierte Methode `listen()`:

```python
auf jeden Fall zuhören():
    jeedom_socket.open()
    try:
        während 1:
            Zeit.Schlaf(0.5)
            Lesesocket()
    außer KeyboardInterrupt:
        shutdown()
```

Hier gibt es nichts zu ändern. Wir können sehen, dass der Socket geöffnet ist und dann eine Endlosschleife, um den Socket jede halbe Sekunde zu lesen

Die Methode `read_socket()`

```python
def read_socket():
    globale JEEDOM_SOCKET_MESSAGE
    wenn nicht JEEDOM_SOCKET_MESSAGE.empty():
        logging.debug("Nachricht im Socket JEEDOM_SOCKET_MESSAGE empfangen")
        message = json.loads(jeedom_utils.stripped(JEEDOM_SOCKET_MESSAGE.get()))
        if message['apikey'] != _apikey:
            logging.error("Ungültiger API-Schlüssel vom Socket : " + str(Nachricht))
            return
        try:
            drucken 'lesen'
        außer Ausnahme, e:
            logging.error('Befehl an Daemon senden Fehler : '+str(e))
```

Die Variable `JEEDOM_SOCKET_MESSAGE` ist eine Python-`queue()`, die von der Klasse `jeedom_socket()` gespeist wird, wie zuvor gesehen.

Wenn die Warteschlange nicht leer ist, laden wir das JSON und prüfen, ob der mit der Nachricht empfangene API-Schlüssel mit dem übereinstimmt, der beim Starten des Daemons empfangen wurde (`_apikey`). Dann können wir die Nachricht lesen und unsere Aktionen im Try/Except-Modus ausführen:

```python
        try:
            drucken 'lesen'
        außer Ausnahme, e:
            logging.error('Befehl an Daemon senden Fehler : '+str(e))
```

Anstatt also „print 'read'“ zu verwenden, liegt es an Ihnen, die relevanten Elemente der Nachricht zu lesen, die Ihr Plugin gesendet hat, und die Aktionen auszulösen oder Ihre für Ihr Plugin spezifischen Klassen oder Methoden aufzurufen.

Von hier aus haben Sie einen Daemon, der ausgeführt werden kann, auch wenn er noch nichts tut (das ist Ihre Aufgabe).

## Anpassen des PHP-Codes des Plugins

Einen Daemon zu haben und seine Struktur zu verstehen ist großartig, aber es fehlen einige Schlüsselelemente, damit Ihr Plugin (PHP-Code) diesen Daemon steuern kann und damit der Kern auch über seine Existenz informiert wird.

### plugin_info/info.json

In der Infodatei.json Ihres Plugins müssen Sie die Eigenschaft `hasOwnDeamon` hinzufügen und den Wert `true` zuweisen, Beispiel:

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

Wir werden die Verwendung von „hasDependency“ und „maxDependancyInstallTime“ später sehen.

### Verwalten des Daemons in Ihrer eqLogic-Klasse

In der eqLogic-Klasse Ihres Plugins gibt es einige Methoden, die für die ordnungsgemäße Verwaltung des Daemons implementiert werden müssen.

#### Daemon_info-Funktion()

Die Funktion `deamon_info()` wird vom Kernel aufgerufen, wenn der folgende Frame auf der Konfigurationsseite Ihres Plugins angezeigt wird. Sie muss vorhanden sein:

![image](images/daemon_info.png)

Normalerweise sieht es so aus. Das zurückgegebene Array und die in diesem Array verwendeten Schlüssel sind offensichtlich wichtig.
Sie können den folgenden Code so kopieren/einfügen und den Code am Ende der Funktion anpassen, um die für Ihr Plugin erforderliche Konfiguration zu überprüfen.

```php
    öffentliche statische Funktion deamon_info() {
        $zurückkehren = array();
        $return['log'] = __CLASS__;
        $return['state'] = 'nok';
        $pid_file = jeedom::) . '/deamon.pid';
        wenn (Datei_existiert($pid_file)) {
            wenn (@posix_getsid(trim(file_get_contents($pid_file)))) {
                $return['state'] = 'ok';
            } anders {
                shell_exec(system::getCmdSudo() . 'rm -rf ' . $pid_file . ' 2>&1 > /dev/null');
            }
        }
        $return['launchable'] = 'ok';
        $user = config::byKey('user', __CLASS__); // exemple si votre démon à besoin de la config user,
        $pswd = config::byKey('password', __CLASS__); // password,
        $clientId = config::byKey('clientId', __CLASS__); // et clientId
        wenn ($Benutzer == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le nom d\'utilisateur n\'est pas configuré', __FILE__);
        } sonst wenn ($pswd == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le mot de passe n\'est pas configuré', __FILE__);
        } sonst wenn ($clientId == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('La clé d\'application n\'est pas configurée', __FILE__);
        }
        zurückgeben $return;
    }
```

> **Aufmerksamkeit**
>
> Im Beispiel ist kein Tippfehler, die Methode heißt `deamon_info()` und nicht `daemon_info`, der Fehler liegt im Kern.

Der Schlüssel `state` entspricht offensichtlich dem auf dem Bildschirm angezeigten Status. Wir können oben lesen, dass wir das Vorhandensein unserer "pid_file" testen, um zu wissen, ob der Daemon läuft oder nicht.

Der Schlüssel `launchable` entspricht der Spalte "Konfiguration" im Rahmen und wir können daher überprüfen, ob die Konfiguration vollständig und korrekt ist, um den Daemon starten zu können. `launchable_message` ermöglicht es Ihnen, dem Benutzer im Falle von "NOK" eine Nachricht anzuzeigen"

#### Daemon_start-Funktion()

Die Funktion `deamon_start()` ist, wie der Name schon sagt, die Methode, die vom Kernel aufgerufen wird, um Ihren Daemon zu starten.
Sie können den folgenden Code so kopieren/einfügen, wie er ist, und die angegebenen Zeilen ändern.

```php
    öffentliche statische Funktion deamon_start() {
        self::daamon_stop();
        $deamon_info = self::deamon_info();
        wenn ($deamon_info['startbar'] != 'ok') {
            throw new Exception(__('Bitte überprüfen Sie die Konfiguration', __FILE__));
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = system::) . " {$path}/demond.py"; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'http:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --pAusweis ' . jeedom::) . '/deamon.pid'; // et on précise le chemin vers le pAusweis file (ne pas modifier)
        log::add(__CLASS__, 'info', 'Daemon starten');
        $result = exec($cmd . ' >> ' . log::getPathToLog('template_daemon') . ' 2>&1 &'); // 'template_daemon' est le nom du Protokoll pour votre démon, vous devez nommer votre Protokoll en commençant par le pluginAusweis pour que le fichier apparaisse dans la page de config
        $i = 0;
        während ($i < 20) {
            $deamon_info = self::deamon_info();
            wenn ($deamon_info['state'] == 'ok') {
                break;
            }
            sleep(1);
            $i++;
        }
        wenn ($i >= 30) {
            log::add(__CLASS__, 'error', __('Daemon konnte nicht gestartet werden, Protokoll prüfen', __FILE__), 'unableStartDeamon');
            gibt false zurück;
        }
        message::removeAll(__CLASS__, 'unableStartDeamon');
        gibt true zurück;
    }
```

Bearbeiten Sie nur die Zeilen mit einem Kommentar, der Rest sollte unverändert bleiben.

Beachten Sie, dass wir zunächst den Daemon stoppen, um den Neustart zu verwalten.
Anschließend prüfen wir mit der Methode `deamon_info()`, ob der Daemon überhaupt gestartet werden kann und generieren in der Variable `$cmd` die Kommandozeile zum Starten unseres Daemons, hier mit python3. Beachten Sie die Verwendung der Funktion „System“::getCmdPython3(__CLASS__)` gibt den Pfad zu Python3 zurück, um dies zu verwenden, um mit Debian 12 kompatibel zu sein, wenn Ihre Abhängigkeiten vom Kernel installiert werden.

#### Daemon_stop-Funktion()

Diese Methode wird verwendet, um den Daemon zu stoppen: Wir rufen die PID des Daemons ab, die in der "pid_file" geschrieben wurde, und senden den Systemkill an den Prozess.

```php
    öffentliche statische Funktion deamon_stop() {
        $pid_file = jeedom::) . '/deamon.pid'; // ne pas modifier
        wenn (Datei_existiert($pid_file)) {
            $pAusweis = intval(trim(file_get_contents($pid_file)));
            system::töten($pid);
        }
        system::kill('templated.py'); // Name des zu ändernden Daemons
        sleep(1);
    }
```

Hier angekommen, erklärte der Dämon in der Info.json und implementierte die 3 Methoden, die der Jeedom-Kern benötigt, um Ihren Daemon zu starten und zu stoppen sowie seinen Status anzuzeigen. Die Voraussetzungen sind gegeben.

### Kommunikation zwischen dem Daemon und dem PHP-Code

Es bleibt die Verwaltung der Kommunikation vom und zum Daemon. Im Python-Code haben wir bereits gesehen, wie es verwaltet wurde: Zur Erinnerung: die Methoden `listen()` und `read_socket()`, die auf einem Socket lauschen, und die Methode `send_change_immediate()`, um eine JSON-Nutzlast an den PHP-Code zu senden.

Sie müssen also das Äquivalent auf der PHP-Seite verwalten.

#### Sende eine Nachricht an den Dämon

Diese Funktion ist nicht im Kern vorhanden und weder Standard für alle Jeedom-Plugins noch ist sie obligatorisch.
Dies ist die Funktion, die ich selbst (@Mips) in jedem meiner Plugins verwende, die einen Daemon haben. Ich habe sie hier für Sie eingefügt und Sie können damit machen, was Sie wollen-)

Es erhält daher ein Array von Werten als Parameter und ist dafür verantwortlich, es an den Socket des Daemons zu senden, der dieses Array dann in der Methode „read_socket()“ lesen kann, die wir zuvor gesehen haben.

```php
    öffentliche statische Funktion sendToDaemon($params) {
        $deamon_info = self::deamon_info();
        wenn ($deamon_info['state'] != 'ok') {
            throw new Exception("Der Daemon wurde nicht gestartet");
        }
        $params['apikey'] = jeedom::getApiKey(__CLASS__);
        $payLoad = json_encode($params);
        $socket = socket_create(AF_INET, SOCK_STREAM, 0);
        socket_connect($socket, '127.0.0.1', Konfiguration::byKey('socketport', __CLASS__, '55009')); //Standardport Ihres Plugins, der geändert werden soll
        socket_write($socket, $payLoad, strlen($payLoad));
        socket_close($socket);
    }
```

Was in das `$params`-Array kommt und wie Sie diese Daten in Ihrem Daemon verwenden, bleibt Ihnen überlassen. Es hängt davon ab, was Ihr Plugin macht.

Zur Erinnerung: Diese Tabelle wird daher in der Methode `read_socket()` abgerufen; Auszug aus dem Python-Code:

```python
        if message['apikey'] != _apikey:
            logging.error("Ungültiger API-Schlüssel vom Socket : " + str(Nachricht))
            return
        try:
            drucken 'lesen'
        außer Ausnahme, e:
            logging.error('Befehl an Daemon senden Fehler : '+str(e))
```

Wir können deutlich den vom PHP-Code hinzugefügten Schlüssel "apikey" sehen, der vom Python-Code in der Tabelle "message" gelesen wird"

#### Empfangen einer Nachricht vom Daemon

Dazu müssen wir unserem Plugin im Ordner `./core/php/` eine Datei hinzufügen. Konventionell nennen wir diese Datei `jee[pluginId].php`. `/plugins/[pluginId]/core/php/jee[pluginId].php` ist daher der Pfad, der als Rückruf-URL in der Methode `deamon_start()` verwendet wird

Hier ist der grundlegende Inhalt, den Sie in diese Datei kopieren/einfügen können:

```php
<?php

versuchen {
    require_once Verzeichnisname(__FILE__) . "/../../../../core/php/core.inc.php";

    Wenn (!jeedom::apiAccess(init('apikey'), 'template')) { //ersetze template durch die ID deines Plugins
        echo __('Sie sind nicht berechtigt, diese Aktion auszuführen', __FILE__);
        die();
    }
    wenn (init('test') != '') {
        echo 'OK';
        die();
    }
    $result = json_decode(file_get_contents("php://input"), true);
    Wenn (!is_array($ergebnis)) {
        die();
    }

    wenn (isset($result['key1'])) {
        // etwas tun
    } sonst wenn (isset($result['key2'])) {
        // etwas anderes tun
    } anders {
        log::add('template', 'error', 'unknown message received from daemon'); //ersetze template durch die ID deines Plugins
    }
} catch (Ausnahme $e) {
    log::add('template', 'error', displayException($e)); //ersetze template durch die ID deines Plugins
}
```

Der Code beginnt mit der Überprüfung, ob der API-Schlüssel korrekt ist:

```php
    Wenn (!jeedom::apiAccess(init('apikey'), 'template')) { //ersetze template durch die ID deines Plugins
        echo __('Sie sind nicht berechtigt, diese Aktion auszuführen', __FILE__);
        die();
    }
```

Der erste Test dient als Testmethode beim Starten des Daemons (siehe Aufruf `jeedom_com.test()` im Daemon-Code):

```php
    wenn (init('test') != '') {
        echo 'OK';
        die();
    }
```

und schließlich laden wir die Nutzlast, die wir dekodieren, in die Tabelle „$result“:

```php
    $result = json_decode(file_get_contents("php://input"), true);
    Wenn (!is_array($ergebnis)) {
        die();
    }
```

Dann liegt es an Ihnen, die Tabelle zu lesen und die Aktionen in Ihrem Plugin entsprechend auszuführen, zum Beispiel:

```php
    wenn (isset($result['key1'])) {
        // etwas tun
    } sonst wenn (isset($result['key2'])) {
        // etwas anderes tun
    } anders {
        log::add('template', 'error', 'unknown message received from daemon'); //ersetze template durch die ID deines Plugins
    }
```

Der Python-Code zum Senden der Nachricht sieht folgendermaßen aus:

```python
jeedom_com.send_change_immediate({'key1' : 'Wert1‘, ‚Schlüssel2‘' : 'value2' })
```

Da haben Sie es, Sie haben einen voll funktionsfähigen Daemon und können zwischen Ihrem Daemon und Ihrem PHP-Code hin und her kommunizieren. Der schwierigste Teil kommt noch: Code der Daemon-Logik.

## Die Abhängigkeiten

Beim Schreiben eines Daemons benötigen wir neben unseren eigenen Klassen sehr oft auch externe Bibliotheken.

Unter Debian verwenden wir normalerweise das Tool apt, um die erforderlichen Pakete zu installieren, und für Python3 verwenden wir pip3.

Und um dies zu bewältigen, ist im Jeedom-Kern wieder alles vorhanden, was uns über zwei verschiedene Methoden hilft:

1. Die Verfahrensmethode.
   Diese Methode war die einzige Methode, die mit Versionen von Jeedom vor 4.2 möglich war
1. Die Konfigurationsmethode der JSON-Datei.
   Diese Methode erschien mit Version 4.2 des Jeedom-Kerns.

Beide Methoden können im selben Plugin implementiert werden.

- Wenn beide Methoden in einem Plugin implementiert sind:
  - Der Kern vor 4.2 wird die Prozedurmethode verwenden.
  - Der Kern 4.2 und höher verwenden die JSON-Konfigurationsdateimethode.
- Wenn nur die prozedurale Methode in einem Plugin implementiert ist:
  - Alle Kerne verwenden diese Methode.
- Wenn nur die JSON-Konfigurationsdateimethode in einem Plugin implementiert ist.
  - Das Plugin ist nicht mit Core-Versionen vor 4.2 kompatibel

Beide Methoden haben ihre Vor- und Nachteile. Es liegt an Ihnen, entsprechend Ihrer Situation zu wählen.

### Deklaration in plugin_info/info.json

In beiden Fällen müssen Sie Ihre `info.json`-Datei anpassen.
Dasselbe Beispiel wie bei der Daemon-Deklaration, Sie müssen die Eigenschaft „hasDependency“ hinzufügen und den Wert „true“ zuweisen:

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

.
 .
 .

> **TIPP**
>
> . .

### 

#### 

. 
[](https://blog.jeedom.com/6170-introduction-jeedom-4-2-installation-de-dependance/).

:

##### pre-install: 

Beispiel :

```json
{
  "pre-install" : {
    "script" : ""
  }
```

##### post-install

.
Beispiel :

```json
{
  "post-install" : {
    "" : true,
    "script" : ""
  }
```

##### apt: 

Exemple

```json
{
  "apt" : {
    "libav-tools" : {"alternative" : "]},
    "ffmpeg" : {"alternative" : "]},
    "python-pil" : {},
    "php-gd" : {}
  }
}
```

,
 .

##### pip3: 

Exemple:

```json
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
```

> **
>
> ..  ** ()
> ::.
> Exemple: ::) . " {$path}/demond.py";`

##### npm: 

.,
:

```json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    ""  : {}
  }
}
```

##### composer: 

.

##### 


 :

```json
{
    "plugin":{
        "mqtt2": {}
    }
}
```

### 

.

#### 

. 

```php
    () {
        log::
        #stype#. ' . jeedom::) . '::
    }
```

.

#stype#.#stype#. #stype#.
.

: `jeedom::) . ').

..

:

> **Aufmerksamkeit**
>
> .
>
> Je vous invite également à consulter cette  qui offre une alternative: <https://github.com/Mips2648/dependance.lib/blob/master/pyenv.md>

```bash


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
```

:

...
-).

```bash


 ! -
    
fi
```

: ).

:

- ! .
- . .
- .
- : ....

> **Aufmerksamkeit**
>
> . . . .

#### 

![image](images/dependencies_info.png)

..

? .

:

```php
    () {
        $zurückkehren = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::) . '/dependance';
        ::) . '/dependance')) {
            $return['state'] = 'in_progress';
        } anders {
            ::getCmdSudo() . system::') . '-||
                $return['state'] = 'nok';
            } ::getCmdSudo() . ' | 
                $return['state'] = 'nok';
            } anders {
                $return['state'] = 'ok';
            }
        }
        zurückgeben $return;
    }
```

: `system::getCmdSudo() . system::') . '-||. : .

:  | . : 

> **Aufmerksamkeit**
>
> .

: .
