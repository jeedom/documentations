# Dämonen & Sucht

## Introduction

In dem [Lernprogramm](/de_DE/dev/tutorial_plugin) und die [Dokumentation](/de_DE/dev/plugin_template) Sie haben gelernt, wie Sie Ihr erstes Plugin mit relativ einfachen Aktionen programmieren, die vom Benutzer über einen Aktionsbefehl oder eine vom Kern geplante Aufgabe (die crons).
Das Plugin ist dann in der Lage, pünktlich Informationen abzurufen (z. B. per http-Anfrage) oder alle möglichen Operationen auszuführen, sofern dies in PHP codiert werden kann.

Es wird vorkommen, dass Sie mehr als das brauchen, einige Beispiele ohne Anspruch auf Vollständigkeit:

- Verwenden Sie Systemressourcen, zum Beispiel USB-Stick oder andere Hardware (Bluetooth...)
- eine Verbindung mit einem entfernten System aufrechterhalten (im lokalen Netzwerk oder im Internet, aber nicht jeedom)
- Prozesse im Hintergrund aktiv halten, was bei PHP-Code nicht der Fall ist, der nur während der Ausführung der http-Anforderung "lebt"
- Echtzeitverarbeitung durchführen

Dafür verwenden wir meistens einen "Dämon"".
Keine Panik, im Kern von Jeedom ist bereits alles geplant, um uns dabei zu helfen, diesen Dämon an Ort und Stelle zu bringen, und wir werden es hier detailliert beschreiben.

## Dateistruktur eines Dämons

Der Code und/oder die ausführbare Datei Ihres Daemons muss sich natürlich in der Baumstruktur Ihres Plugins befinden und muss daher während der Installation eines Plugins mit dem Archiv eingeschlossen und geliefert werden.
Es gibt keine feste Regel für den genauen Speicherort Ihres Daemons, es ist jedoch üblich, ihn im ` zu platzieren./resources/ aus dem Plugin.

Im Vorlagen-Plugin finden Sie die Grundlagen zur Implementierung eines Daemons in Python, und dies ist das Beispiel, das wir in dieser Dokumentation verwenden werden. Es steht Ihnen jedoch frei, Ihren Daemon in der Sprache Ihrer Wahl zu entwickeln, vorausgesetzt, dass er ausgeführt werden kann [Plattformen, die von Jeedom unterstützt werden](/de_DE/compatibility/).
Die meisten Jeedom-Plugin-Daemons befinden sich in Python oder nodeJs, aber es gibt auch einige in .netCore und sicherlich auch andere Technologien.

Sie werden auch einige nützliche Methoden für einen nodeJs-Daemon finden, die möglicherweise in einer zukünftigen Version dieser Dokumentation detailliert beschrieben werden. Im Moment lade ich Sie ein, die Community-Entwickler zu konsultieren, um sich mit anderen Entwicklern in allem, was mit NodeJs zu tun hat, abzustimmen, hauptsächlich in Bezug auf die zu verwendende Version.

Vorlagenverzeichnisstruktur:

![image](images/daemon_struct.png)

### der Python-Daemon

Im Template-Plug-in hieß das Daemon-Verzeichnis „demond“, und der Daemon selbst heißt „demond.py“.
Diese Namen sind willkürlich, Sie können sie frei ändern.
Die Konvention besteht darin, die Plugin-ID gefolgt vom Buchstaben „d“ zu nehmen. Was zum Beispiel für das Plugin `blea` das Verzeichnis `./resources/blead/` die unter anderem die Datei `blead.py“, wobei diese Datei der Ausgangspunkt des Daemons ist.

> **TIPPS**
>
> Zögern Sie nicht, sich von offiziellen Plugins mit Daemon inspirieren zu lassen, um die Details zu verstehen, wie z. B. Blea, Openzwave oder SMS.

### das Jeedom-Paket für einen Python-Daemon

Jeedom stellt mit dem Vorlagen-Plugin ein Python-Paket bereit, das die grundlegenden Klassen und Methoden bietet, die für die Verwaltung des Daemons und die Kommunikation zwischen dem Daemon und dem PHP-Code Ihres Plugins nützlich sind.
Diese Klassen befinden sich im Verzeichnis `./resources/demond/jeedom/jeedom.py` (sichtbar in der Aufnahme oben).
Um zu beginnen, müssen Sie die Implementierungsdetails dieser Klassen und Methoden nicht kennen, daher erhalten Sie hier nur eine Zusammenfassung ihrer Aufgaben.

#### Klasse jeedom_utils()

Diese Klasse ist eine Reihe nützlicher statischer Methoden wie `convert_log_level`, um den von jeedom erhaltenen Loglevel in einen Loglevel der Klasse python `logging` oder `find_tty_usb` umzuwandeln, um eine Liste von Geräten auf dem System zurückzugeben.
Wir werden sie hier nicht alle detailliert beschreiben, der Name jeder der Methoden ist ziemlich eindeutig, Sie werden sie entdecken, indem Sie in den Code eintauchen.

#### Klasse jeedom_serial()

Diese Klasse kapselt das Lesen und Schreiben auf einem Gerät.
Auch hier werden wir die Klasse nicht im Detail beschreiben, die Methoden sprechen für sich selbst, wissen Sie einfach, dass sie existiert, wenn Sie sie brauchen.

> **Aufmerksamkeit**
>
> Wenn Ihr Daemon diese Art von Aktion nicht ausführen muss, müssen Sie daran denken, diese Klasse nicht zu verwenden oder zu importieren, da das Python-Paket „serial“ nicht standardmäßig installiert ist und Ihr Daemon in diesem Fall nicht gestartet wird (Problem wurde mehrfach gesehen Mal in der Gemeinschaft). Wir werden darauf bei der Verwaltung von Abhängigkeiten zurückkommen.

#### Klasse jeedom_socket() & jeedom_socket_handler()

Sie werden die Klasse `jeedom_socket_handler()` nicht direkt verwenden, sie ist nur für `jeedom_socket()`.
Der Zweck von `jeedom_socket()` besteht darin, eine Abwärtskommunikation bereitzustellen (von Ihrem PHP-Code zum Daemon).
Wenn Ihr Plugin eine Anweisung an Ihren Daemon senden muss, kann es dies über diesen Socket tun, Sie werden später in dieser Dokumentation ein Beispiel sehen.

Die Klasse öffnet also einen TCP-Socket und lauscht. Wenn eine Nachricht empfangen wird, wird sie in eine Warteschlange gestellt, die später von Ihrem Daemon gelesen wird. Wir werden darauf zurückkommen.

Auch hier sind Sie nicht verpflichtet, diesen Mechanismus zu verwenden, es steht Ihnen frei, etwas anderes zu erstellen (Server http zum Beispiel), aber es ist das, was von Jeedom grundlegend bereitgestellt wird, es ist leicht und es funktioniert sehr gut.

#### Klasse jeedom_com()

Dies stellt die Aufwärtskommunikation vom Daemon zu Ihrem PHP-Code sicher.
Sie werden am Anfang im Wesentlichen `send_change_immediate()` verwenden, was es Ihnen daher ermöglicht, eine json-Payload über eine http-Anfrage an jeedom zu senden. Es ist sehr einfach und effektiv, wir werden später ein Beispiel sehen.

### Python-Dämonskelett

Jetzt, da wir die Umgebung kennen, können wir uns den Teil ansehen, der uns am meisten interessiert: der Daemon und was wir codieren müssen.

Wir werden uns daher das von Jeedom vorgeschlagene Skelett eines Dämons im Detail ansehen, öffnen Sie die Datei `demond.py` und wir beginnen mit den letzten Zeilen, die eigentlich der Anfang des Programms sind:

```python
_log_level = "Fehler"
_socket_port = 55009 # zu ändern
_socket_host = 'lokaler Host'
_device = 'selbst'
_pidfile = '/tmp/demond.pid'
_API-Schlüssel = ''
_zurückrufen = ''

für arg in sys.argv:
    if arg.startswith("--loglevel="):
        temp, _log_level = arg aufgeteilt("=")
    elif arg.startswith("--socketport="):
        temp, _socket_port = arg aufgeteilt("=")
    elif arg.startswith("--sockethost="):
        temp, _socket_host = arg aufgeteilt("=")
    elif arg.startswith("--pidfile="):
        temp, _pidfile = arg.split("=")
    elif arg.startswith("--apikey="):
        temp, _apikey=arg.split("=")
    elif arg.startswith("--device="):
        temp, _device = arg.split("=")

_socket_port = int(_socket_port)

jeedom_utils.set_log_level(_log_level)

Logging.info('Anfrage starten')
Logging.info('Loglevel : '+str(_log_level))
Logging.info('Socket-Port : '+str(_socket_port))
Logging.info('Socket-Host : '+str(_socket_host))
Logging.info('PID-Datei : '+str(_pidfile))
Logging.info('Apikey : '+str(_apikey))
Logging.info('Gerät : '+str(_device))

signal.signal(signal.SIGINT, Handler)
signal.signal(signal.SIGTERM, Handler)

try:
    jeedom_utils.write_pid(str(_pidfile))
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle)
    wenn nicht jeedom_com.test():
        Logging.error('Probleme bei der Netzwerkkommunikation. Bitte korrigieren Sie Ihre Jeedom-Netzwerkkonfiguration.')
        shutdown()
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host)
    listen()
außer Ausnahme wie z:
    Logging.error('Schwerwiegender Fehler : '+str(z))
    shutdown()
```

Einige Variableninitialisierungen:

```python
_log_level = "error" # die standardmäßige Protokollebene im Textformat, wie von Jeedom gesendet
_socket_port = 55009 # Der Port, den Ihr Daemon standardmäßig verwendet, um Jeedoms Listening-Socket zu öffnen, muss geändert werden.
_socket_host = 'localhost' # die Schnittstelle, auf der der Socket geöffnet werden soll, a priori nicht ändern.
_device = 'auto' # ist nutzlos, wenn Sie kein Hardwaregerät verwenden
_pidfile = '/tmp/demond.pid' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas; nom du démon à modifier comme expliqué ci-dessus;
_apikey = '' # apikey zur Authentifizierung der Kommunikation zwischen Jeedom und Ihrem Daemon
_zurückrufen = '' ## die Rückruf-URL, um Benachrichtigungen an Jeedom (und an Ihren PHP-Code) zu senden)
```

> **Aufmerksamkeit**
>
> Sie müssen vorsichtig sein, wenn Sie den Port auswählen, den Sie für Ihren Socket verwenden werden. Dies ist ein möglicher Verbesserungspunkt unter Jeedom, da es keinen Mechanismus gibt, um Kollisionen zu vermeiden: Wenn also ein anderes Plugin denselben Port wie Sie verwendet, wird dies offensichtlich ein Problem verursachen. Im Moment besteht die einzige Methode, um eine Auswahl zu treffen, darin, unter den vorhandenen Plugins nach den bereits verwendeten Ports zu suchen und sich zwischen Entwicklern und Communitys abzustimmen (es gibt bereits offene Themen dazu). Außerdem ist es wichtig, diesen Benutzer in Ihrer Plugin-Konfiguration konfigurierbar zu lassen, damit die Portnummer geändert werden kann, falls ein solcher Konflikt auftreten sollte.

Dann rufen wir die auf der Befehlszeile empfangenen Argumente ab, diese Befehlszeile wird von Ihrem PHP-Code generiert, wir werden darauf zurückkommen.
Es liegt an Ihnen, das zu löschen, was nicht nützlich ist (wie das Geräteargument) oder andere hinzuzufügen, wie z. B. einen Benutzer/pswd, wenn Ihr Daemon eine Verbindung zu einem entfernten System herstellen muss.

```python
für arg in sys.argv:
    if arg.startswith("--loglevel="):
        temp, _log_level = arg aufgeteilt("=")
    elif arg.startswith("--socketport="):
        temp, _socket_port = arg aufgeteilt("=")
    elif arg.startswith("--sockethost="):
        temp, _socket_host = arg aufgeteilt("=")
    elif arg.startswith("--pidfile="):
        temp, _pidfile = arg.split("=")
    elif arg.startswith("--apikey="):
        temp, _apikey=arg.split("=")
    elif arg.startswith("--device="):
        temp, _device = arg.split("=")
```

Dann gibt es ein paar Protokollzeilen und diese beiden Zeilen, klassisch in Python, die einfach die Methode aufzeichnen, die aufgerufen werden soll, falls diese beiden Interrupt-Signale empfangen werden, wodurch der Daemon gestoppt werden kann:

```python
signal.signal(signal.SIGINT, Handler)
signal.signal(signal.SIGTERM, Handler)
```

und die `handler`-Methode, die etwas höher im Daemon definiert ist:

```python
def handler(signum=Keine, frame=Keine):
    Logging.debug("Signal %i abgefangen, wird beendet..." % int(signum))
    shutdown()
```

die nur ein Protokoll hinzufügt und die unten definierte Methode `shutdown()` aufruft:

```python
def Herunterfahren():
    Logging.debug("Herunterfahren")
    Logging.debug("PID-Datei entfernen " + str(_pidfile))
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
    Logging.debug("Verlassen 0")
    sys.stdout.flush()
    os._exit(0)
```

In dieser Methode müssen Sie den Code schreiben, der im Falle des Herunterfahrens des Daemons ausgeführt werden soll, um beispielsweise das Remote-System abzumelden und die offenen Verbindungen ordnungsgemäß zu schließen.

> **Aufmerksamkeit**
>
> Sie müssen diese Methode anpassen und den in Ihrem Fall nicht benötigten Code entfernen, insbesondere das try/except auf `jeedom_serial.close()`, wenn Sie diese Klasse nicht verwenden.

Wenn wir zurück zum Anfang des Daemons gehen, ist hier die kommentierte Fortsetzung:

```python
try:
    jeedom_utils.write_pid(str(_pidfile)) # schreibt die PID-Datei, die der Jeedom-Kern überwacht, um festzustellen, ob der Daemon läuft
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle) # Erstellung des jeedom_com-Objekts
    wenn nicht jeedom_com.test(): #Testen Sie zuerst, ob die Rückruf-URL korrekt ist
        Logging.error('Probleme bei der Netzwerkkommunikation. Bitte korrigieren Sie Ihre Jeedom-Netzwerkkonfiguration.')
        shutdown()
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host) # Wir deklarieren den Socket, um Befehle von jeedom zu erhalten
    listen() # und wir hören zu
außer Ausnahme wie z:
    Logging.error('Schwerwiegender Fehler : '+str(z))
    shutdown()
```

Die am Anfang der Datei definierte `listen()`-Methode:

```python
auf jeden Fall hören():
    jeedom_socket.open()
    try:
        während 1:
            time.sleep(0.5)
            read_socket()
    außer KeyboardInterrupt:
        shutdown()
```

Hier gibt es nichts zu ändern, wir können sehen, dass der Socket offen ist und dann jede halbe Sekunde eine Endlosschleife, um den Socket zu lesen

Die `read_socket()`-Methode

```python
def read_socket():
    globale JEEDOM_SOCKET_MESSAGE
    wenn nicht JEEDOM_SOCKET_MESSAGE.leer():
        Logging.debug("Nachricht im Socket JEEDOM_SOCKET_MESSAGE empfangen")
        Nachricht = json.loads(jeedom_utils.stripped(JEEDOM_SOCKET_MESSAGE.get()))
        if message['apikey'] != _apikey:
            Logging.error("Ungültiger API-Schlüssel vom Socket : " + str(nachricht))
            return
        try:
            print 'gelesen'
        außer Ausnahme, z:
            Logging.error('Befehl an Dämon senden Fehler : '+str(z))
```

Die `JEEDOM_SOCKET_MESSAGE`-Variable ist eine Python-`Warteschlange()`, die von der `jeedom_socket()`-Klasse unterstützt wird, wie zuvor gesehen.

Wenn die Warteschlange nicht leer ist, laden wir den json und prüfen, ob der mit der Nachricht erhaltene API-Schlüssel mit dem übereinstimmt, der beim Starten des Daemons (`_apikey`) erhalten wurde. Dann können wir die Nachricht lesen und unsere Aktionen in try/ ausführen. außer:

```python
        try:
            print 'gelesen'
        außer Ausnahme, z:
            Logging.error('Befehl an Dämon senden Fehler : '+str(z))
```

Anstelle von `print 'read'` liegt es also an Ihnen, die relevanten Elemente der Nachricht zu lesen, die Ihr Plugin gesendet haben wird, und die Aktionen auszulösen oder Ihre Klassen oder Methoden aufzurufen, die für Ihr Plugin spezifisch sind.

Von hier aus haben Sie einen Daemon, der ausgeführt werden kann, auch wenn er noch nichts tut (das ist Ihre Aufgabe).

## Anpassung des PHP-Codes des Plugins

Es ist sehr gut, einen Daemon zu haben und seine Struktur zu verstehen, aber es fehlen ein paar Schlüsselelemente, damit Ihr Plugin (PHP-Code) diesen Daemon steuern kann und damit der Kern auch darüber informiert wird, dass er existiert.

### plugin_info/info.json

In der Infodatei.json Ihres Plugins müssen Sie die Eigenschaft „hasOwnDeamon“ hinzufügen und den Wert „true“ zuweisen, Beispiel:

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

Wir werden später die Verwendung von `hasDependency` und `maxDependancyInstallTime` sehen.

### Verwalten des Daemons in Ihrer eqLogic-Klasse

In der eqLogic-Klasse Ihres Plugins gibt es einige Methoden, die für eine gute Verwaltung des Daemons implementiert werden müssen.

#### Deamon_info-Funktion()

Die Funktion `deamon_info()` wird vom Core aufgerufen, wenn der folgende Frame auf der Konfigurationsseite Ihres Plugins angezeigt wird, sie muss vorhanden sein:

![image](images/daemon_info.png)

Normalerweise sieht es so aus, das zurückgegebene Array und die in diesem Array verwendeten Schlüssel sind offensichtlich wichtig.
Sie können den folgenden Code unverändert kopieren/einfügen und den Code am Ende der Funktion anpassen, um die für Ihr Plugin erforderliche Konfiguration zu überprüfen.

```php
    öffentliche statische Funktion deamon_info() {
        $Rückkehr = array();
        $return['log'] = __CLASS__;
        $return['state'] = 'nok';
        $pid_file = jeedom::getTmpOrdner(__CLASS__) . '/deamon.pid';
        if (file_exists($pid_file)) {
            if (@posix_getsid(trim(file_get_contents($pid_file)))) {
                $return['state'] = 'ok';
            } anders {
                Shell_exec (system::getCmdSudo() . 'rm -rf ' . $pid_file . ' 2>&1 > /dev/null');
            }
        }
        $return['launchable'] = 'ok';
        $user = config::byKey('user', __CLASS__); // exemple si votre démon à besoin de la config user,
        $pswd = config::byKey('password', __CLASS__); // password,
        $clientId = config::byKey('clientId', __CLASS__); // et clientId
        wenn ($user == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le nom d\'utilisateur n\'est pas configuré', __FILE__);
        } sonst ($pswd == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le mot de passe n\'est pas configuré', __FILE__);
        } elseif ($clientId == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('La clé d\'application n\'est pas configurée', __FILE__);
        }
        Rückgabe $Rückgabe;
    }
```

> **Aufmerksamkeit**
>
> Im Beispiel ist kein Tippfehler, die Methode heißt `deamon_info()` und nicht `daemon_info`, der Fehler liegt im Kern.

Die Taste „state“ entspricht offensichtlich dem auf dem Bildschirm angezeigten Status, wir können oben lesen, dass wir das Vorhandensein unserer „pid_file“ testen, um herauszufinden, ob der Daemon läuft oder nicht.

Der `launchable` Key entspricht der Spalte "Configuration" im Framework und somit kann man prüfen, ob die Konfiguration vollständig und korrekt ist, um den Daemon starten zu können. `launchable_message` zeigt dem Benutzer im Falle von "NOK"

#### Deamon_start-Funktion()

Die Funktion `deamon_start()` ist, wie der Name schon sagt, die Methode, die vom Kern aufgerufen wird, um Ihren Daemon zu starten.
Sie können den folgenden Code unverändert kopieren/einfügen und die angezeigten Zeilen ändern.

```php
    öffentliche statische Funktion deamon_start() {
        self::Dämon_Stop();
        $deamon_info = self::deamon_info();
        if ($deamon_info['startbar'] != 'ok') {
            throw new Exception(__('Bitte Konfiguration prüfen', __FILE__));
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = 'python3 ' . $path . '/demond.py'; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'proto:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --pIch würde ' . jeedom::getTmpOrdner(__CLASS__) . '/deamon.pid'; // et on précise le chemin vers le pIch würde file (ne pas modifier)
        log::add(__CLASS__, 'info', 'Daemon wird gestartet');
        $result = exec($cmd . ' >> ' . log::getPathToLog('template_daemon') . ' 2>&1 &'); // 'template_daemon' est le nom du Protokoll pour votre démon, vous devez nommer votre Protokoll en commençant par le pluginIch würde pour que le fichier apparaisse dans la page de config
        $i = 0;
        während ($i < 20) {
            $deamon_info = self::deamon_info();
            if ($deamon_info['state'] == 'ok') {
                break;
            }
            sleep(1);
            $i++;
        }
        wenn ($i >= 30) {
            log::add(__CLASS__, 'error', __('Daemon kann nicht gestartet werden, Protokoll prüfen', __FILE__), 'unableStartDeamon');
            falsch zurückgeben;
        }
        message::removeAll(__CLASS__, 'unableStartDeamon');
        gib true zurück;
    }
```

Ändern Sie nur die Zeilen mit einem Kommentar, der Rest muss unverändert bleiben.

Beachten Sie, dass wir damit beginnen, den Daemon zu stoppen, um den Neustart zu verwalten.
Dann prüfen wir mit der Methode `deamon_info()`, ob der Daemon tatsächlich gestartet werden kann und generieren in der Variable `$cmd` die Kommandozeile zum Starten unseres Daemons, hier mit python3

#### Deamon_stop-Funktion()

Diese Methode wird verwendet, um den Daemon zu stoppen: Wir rufen die PID des Daemons ab, die in die "pid_file" geschrieben wurde, und senden den Systemkill an den Prozess.

```php
    öffentliche statische Funktion deamon_stop() {
        $pid_file = jeedom::getTmpOrdner(__CLASS__) . '/deamon.pid'; // ne pas modifier
        if (file_exists($pid_file)) {
            $pIch würde = intval(trim(file_get_contents($pid_file)));
            system::kill($pid);
        }
        system::kill('template.py'); // Name des zu ändernden Daemons
        sleep(1);
    }
```

Hier angekommen hast du den Dämon in der Info erklärt.json und implementierte die 3 Methoden, die für den Kern von Jeedom erforderlich sind, um Ihren Daemon zu starten und zu stoppen sowie seinen Status anzuzeigen. Voraussetzungen sind vorhanden.

### Kommunikation zwischen Daemon und PHP-Code

Es bleibt, die Kommunikation von und zu dem Daemon zu verwalten. Im Python-Code haben wir bereits gesehen, wie es gehandhabt wurde: Zur Erinnerung die Methoden `listen()` und `read_socket()`, die auf einen Socket lauschen, und die Methode `send_change_immediate()`, um eine json-Nutzlast an den PHP-Code zu senden.

Daher ist es notwendig, das Äquivalent auf der PHP-Seite zu verwalten.

#### Senden Sie eine Nachricht an den Daemon

Diese Funktion existiert nicht im Core und ist nicht bei allen Jeedom-Plugins Standard, sie ist auch nicht zwingend erforderlich.
Dies ist die Funktion, die ich selbst verwende (@Mips) in jedem meiner Plugins, die einen Daemon haben, ich füge ihn hier ein und du machst damit, was du willst;-)

Es erhält daher ein Array von Werten als Parameter und kümmert sich darum, es an den Socket des Daemons zu senden, der dieses Array daher in der Methode `read_socket()` lesen kann, die wir zuvor gesehen haben.

```php
    öffentliche statische Funktion sendToDaemon($params) {
        $deamon_info = self::deamon_info();
        if ($deamon_info['state'] != 'ok') {
            throw new Exception("Daemon nicht gestartet");
        }
        $params['apikey'] = jeedom::getApiKey(__CLASS__);
        $payLoad = json_encode($params);
        $socket = socket_create(AF_INET, SOCK_STREAM, 0);
        socket_connect($socket, '127.0.0.1', Konfig::byKey('socketport', __CLASS__, '55009')); //Standardport Ihres zu ändernden Plugins
        socket_write($socket, $payLoad, strlen($payLoad));
        socket_close($socket);
    }
```

Was im Array „$params“ steht und wie Sie diese Daten in Ihrem Daemon verwenden, liegt ganz bei Ihnen, je nachdem, was Ihr Plugin macht.

Zur Erinnerung: Dieses Array wird daher in der Methode `read_socket()` abgerufen; Python-Code-Snippet:

```python
        if message['apikey'] != _apikey:
            Logging.error("Ungültiger API-Schlüssel vom Socket : " + str(nachricht))
            return
        try:
            print 'gelesen'
        außer Ausnahme, z:
            Logging.error('Befehl an Dämon senden Fehler : '+str(z))
```

Wir können deutlich den vom PHP-Code hinzugefügten „apikey“-Schlüssel sehen, der vom Python-Code in der „message“-Tabelle gelesen wird"

#### Empfangen Sie eine Nachricht vom Daemon

Dazu müssen wir unserem Plugin eine Datei im Ordner „./core/php/“ hinzufügen. Konventionell nennen wir diese Datei `jee[pluginId].php`. `/plugins/[pluginId]/core/php/jee[pluginId].php` wird daher der Pfad sein, der als Callback-URL in der Methode `deamon_start()` verwendet werden soll

Hier ist der grundlegende Inhalt, den Sie kopieren/in diese Datei einfügen können:

```php
<?php

Versuchen {
    require_once dirname(__FILE__) . "/../../../../core/php/core.inc.php";

    wenn (!jeedom::apiAccess(init('apikey'), 'template')) { //Vorlage durch Ihre Plugin-ID ersetzen
        echo __('Sie sind nicht berechtigt, diese Aktion auszuführen', __FILE__);
        die();
    }
    if (init('test') != '') {
        Echo 'OK';
        die();
    }
    $result = json_decode(file_get_contents("php://input"), true);
    wenn (!is_array($ergebnis)) {
        die();
    }

    if (isset($result['key1'])) {
        // etwas tun
    } elseif (isset($result['key2'])) {
        // mach etwas anderes
    } anders {
        log::add('template', 'error', 'unbekannte Nachricht vom Daemon erhalten'); // Vorlage durch Ihre Plugin-ID ersetzen
    }
} catch (Ausnahme $e) {
    log::add('template', 'error', displayException($e)); // Vorlage durch Ihre Plugin-ID ersetzen
}
```

Der Code beginnt mit der Validierung, dass der API-Schlüssel korrekt ist:

```php
    wenn (!jeedom::apiAccess(init('apikey'), 'template')) { //Vorlage durch Ihre Plugin-ID ersetzen
        echo __('Sie sind nicht berechtigt, diese Aktion auszuführen', __FILE__);
        die();
    }
```

Der erste Test dient als Testmethode beim Starten des Daemons (siehe Aufruf `jeedom_com.test()` im Daemon-Code):

```php
    if (init('test') != '') {
        Echo 'OK';
        die();
    }
```

und schließlich laden wir die Payload, die wir dekodieren, in das Array `$result`:

```php
    $result = json_decode(file_get_contents("php://input"), true);
    wenn (!is_array($ergebnis)) {
        die();
    }
```

Dann liegt es an Ihnen, die Tabelle zu lesen und die Aktionen in Ihrem Plugin entsprechend auszuführen, z:

```php
    if (isset($result['key1'])) {
        // etwas tun
    } elseif (isset($result['key2'])) {
        // mach etwas anderes
    } anders {
        log::add('template', 'error', 'unbekannte Nachricht vom Daemon erhalten'); // Vorlage durch Ihre Plugin-ID ersetzen
    }
```

Der Python-Code zum Senden der Nachricht sieht folgendermaßen aus:

```python
jeedom_com.send_change_immediate({'key1' : 'Wert1', 'Schlüssel2' : 'value2' })
```

Voila, Sie haben einen voll funktionsfähigen Daemon und können zwischen Ihrem Daemon und Ihrem PHP-Code hin und her kommunizieren, der schwierigste Teil ist noch zu erledigen: Code-Daemon-Logik.

## Abhängigkeiten

Wenn wir einen Daemon schreiben, benötigen wir zusätzlich zu unseren eigenen Klassen sehr oft externe Bibliotheken.

Unter Debian verwenden wir normalerweise das apt-Tool, um die erforderlichen Pakete zu installieren, und für Python verwenden wir pip.

Und um dies zu bewältigen, ist im Kern von Jeedom wieder einmal alles geplant, um uns zu helfen. Es gibt 3 Voraussetzungen, die wir gleich erläutern werden.

### Deklaration in plugin_info/info.json

Gleiches Beispiel wie bei der Deklaration des Daemons, es muss die Eigenschaft `hasDependency` hinzugefügt und der Wert `true` zugewiesen werden:

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

Die Eigenschaft „maxDependancyInstallTime“ ist die Zeit in Minuten, nach der der Kern die Installation als nicht erfolgreich betrachtet. In diesem Fall wird der Auto-Modus des Daemons deaktiviert und eine Nachricht im Benachrichtigungscenter angezeigt. Wenn diese Eigenschaft nicht definiert ist, beträgt die Standardverzögerung 30 Minuten.

> **TIPPS**
>
> Das Installationsskript wird nicht unterbrochen, sodass es erfolgreich abgeschlossen werden kann. Dies ist nur die Verzögerung, nach der der Kern nicht mehr wartet und Fortschritt anzeigt.

### Abhängigkeiten installieren

In Ihrer eqLogic-Klasse müssen Sie diese Funktion hinzufügen, falls sie nicht vorhanden ist. Sie können es unverändert kopieren/einfügen, ohne etwas zu ändern

```php
    öffentliche statische Funktiondependency_install() {
        log::entfernen (__CLASS__.'_update');
        return array('script' => dirname(__FILE__) . '/../../resources/install_#stype#.Sch ' . jeedom::getTmpOrdner(__CLASS__) . '/dependency', 'log' => log::getPathToLog(__CLASS__.'_update'));
    }
```

Diese Funktion beginnt mit dem Löschen des Protokolls der vorherigen Installation, falls vorhanden, und gibt dann den auszuführenden Skriptbefehl und den Speicherort des Protokolls an den Kern zurück.

Beachten Sie, dass die zurückgegebene Skriptdatei „install_“ heißt#stype#.sch`. In der Tat, `#stype#` wird je nach System, auf dem Jeedom installiert ist, dynamisch durch den Kern mit dem zu verwendenden Paketverwaltungstool ersetzt. Also `#stype#` wird auf einem Debian-System durch `apt` ersetzt.
Dies ermöglicht es, Abhängigkeitsinstallationsskripte für mehrere Systeme anzubieten und daher etwas anderes als Debian/apt zu unterstützen, was das absolute Minimum und das einzige ist, das wir hier verwalten werden.

Das erste Argument: `jeedom::getTmpOrdner(__CLASS__) . '/dependency'' ist die Datei, die verwendet wird, um den Fortschritt der Installation zu verfolgen (der Prozentsatz, der während der Installation auf dem Bildschirm angezeigt wird).

Das war es für den PHP-Teil, jetzt müssen Sie das Skript in `./resources/install_apt erstellen.sh` und natürlich hängt der Inhalt des Skripts von Ihrem Plugin und den Paketen ab, die Sie installieren möchten.

Hier ist ein Beispiel für ein ziemlich einfaches Skript von einem meiner Plugins, aber Sie können es viel vollständiger und fortgeschrittener machen:

```bash
PROGRESS_FILE=/tmp/jeedom/template/dependency #Ersetzen Sie die Vorlage durch Ihre Plugin-ID

wenn [ ! -z$1 ]; dann
    PROGRESS_FILE=$1
fi
Berühren Sie ${PROGRESS_FILE}
echo 0 > ${PROGRESS_FILE}
Echo "*************************************"
Echo "*   Starten Sie die Installation von Abhängigkeiten  *"
Echo "*************************************"
echo $(datum)
echo 5 > ${PROGRESS_FILE}
apt-get-clean
echo 10 > ${PROGRESS_FILE}
apt-get update
echo 20 > ${PROGRESS_FILE}

Echo "*****************************"
echo "Module mit apt-get installieren"
Echo "*****************************"
apt-get install -y python3 python3-requests python3-pip python3-voluptuous python3-bs4
echo 60 > ${PROGRESS_FILE}

Echo "*************************************"
echo "Installieren Sie die erforderlichen Python-Bibliotheken"
Echo "*************************************"
python3 -m pip installiere "aiohttp"
echo 80 > ${PROGRESS_FILE}

echo 100 > ${PROGRESS_FILE}
echo $(datum)
Echo "***************************"
Echo "*      Installation beendet      *"
Echo "***************************"
rm ${PROGRESS_FILE}
```

Wir werden ein paar Zeilen detailliert:

Wir beginnen damit, den Standardspeicherort der Fortschrittsdatei zu definieren, falls wir den vorherigen Schritt nicht korrekt ausgeführt haben...
Und wir verwenden das erste empfangene Argument als Ort, weil wir den vorherigen Schritt richtig gemacht haben;-).

```bash
PROGRESS_FILE=/tmp/jeedom/template/dependency #Ersetzen Sie die Vorlage durch Ihre Plugin-ID

wenn [ ! -z$1 ]; dann
    PROGRESS_FILE=$1
fi
```

Die Zeilen vom Typ `echo 60 > ${PROGRESS_FILE}` werden offensichtlich verwendet, um den Fortschritt zurückzugeben: Um den Benutzer zu beruhigen, setzen wir es regelmäßig, bis wir 100 erreichen (normalerweise stressen sie sich, wenn es 100 überschreitet, also vermeiden wir es).

Einige Hinweise:

- Führen Sie kein `apt-get upgrade` durch! Sie wissen nicht, was sich auf der Maschine befindet, und es liegt nicht an Ihnen, alles zu aktualisieren.
- Verwenden Sie nicht „apt“, sondern „apt-get“. `apt` ist für den interaktiven Gebrauch gemacht und dies erzeugt eine Warnung.
- Fügen Sie bei Bedarf das Flag „-y“ hinzu, um die Eingabeaufforderungen zu bestätigen. Andernfalls stoppt das Skript mit einer Anfrage wie „Möchten Sie fortfahren [j/n]“ und der Benutzer wird blockiert.
- Bevorzugen Sie die Syntax `python3 -m pip install ...` anstelle von `pip3 install ...`, um Python-Pakete zu installieren, da die zweite Syntax Probleme verursacht, wenn `pip3` (oder `pip`, wenn Sie Python v2 verwenden) dies nicht tut bezieht sich nicht auf dieselbe Version wie python3: wenn zum Beispiel python3 auf Version 3 zeigt.7 und Pip3 zeigt auf 3.9 oder schlechter 2.7; Sie wissen nicht, was auf dem System getan wurde, und Sie sind vor solchen Problemen auf dem Computer des Benutzers nicht sicher, es gibt Dutzende von Fällen, die in der Community aufgeführt sind.

> **Aufmerksamkeit**
>
> Es ist sehr wichtig, alle notwendigen Pakete zu installieren und besonders auf diejenigen zu achten, die sehr oft bereits installiert sind ... aber nicht immer. Es gibt häufig Probleme mit den Paketen `python3-requests`, `python3-pip` und/oder `serial`. Diese sind auf einem Basis-Debian nicht vorinstalliert, sondern sehr oft bereits von einem anderen Plugin installiert ... es sei denn, Ihr Plugin ist das erste und in diesem Fall startet Ihr Daemon nicht. Es kommt öfter vor als man denkt.

### Kennen Sie den Status

![image](images/dependencies_info.png)

Es ist daher unsere PHP-Funktion `dependancy_install()`, die vom Kern aufgerufen wird und die es ermöglicht, unser Skript `./resources/install_apt.sh`, wenn der Benutzer auf die Schaltfläche "Neu starten" klickt, oder automatisch vom Kern, wenn er feststellt, dass die Abhängigkeiten entweder nicht installiert oder nicht auf dem neuesten Stand sind.

Aber woher kennt der Kern den Status und wie zeigt er ihn im obigen Frame an? Dank der `dependancy_info()`-Funktion, die wir in unsere eqLogic-Klasse hinzufügen müssen.

Hier ist ein Beispiel, von dem Sie die Mehrheit nehmen können:

```php
    öffentliche statische Funktiondependency_info() {
        $Rückkehr = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::getTmpOrdner(__CLASS__) . '/dependency';
        if (file_exists(jeedom::getTmpOrdner(__CLASS__) . '/dependency')) {
            $return['state'] = 'in_progress';
        } anders {
            if (exec(system::getCmdSudo() . system::get('cmd_check') . '-Ec "python3\-Anfragen|python3\-wollüstig|python3\-bs4"') < 3) { // Paketliste und Gesamtzahl anpassen
                $return['state'] = 'nok';
            } elseif (exec(system::getCmdSudo() . 'Pip3-Liste | grep -Ewc "aiohttp"') < 1) { // Paketliste und Summe anpassen
                $return['state'] = 'nok';
            } anders {
                $return['state'] = 'ok';
            }
        }
        Rückgabe $Rückgabe;
    }
```

In diesem Beispiel testen wir das Vorhandensein von apt-Paketen: `system::getCmdSudo() . system::get('cmd_check') . '-Ec "python3\-Anfragen|python3\-wollüstig|python3\-bs4"'`. Hier wollen wir `python3-requests`, `python3-voluptuous` und `python3-bs4` und daher muss der Befehl 3 zurückgeben, daher der Vergleich: `< 3`.

Gleiches gilt für Python-Pakete: `pip3-Liste | grep -Ewc "aiohttp"'`. Das Vorhandensein von „aiohttp“ wird validiert, nur ein Paket, also vergleichen wir: `< 1`;

Es ist also sehr einfach: Die Liste der Pakete und die Gesamtzahl sind die einzigen Elemente, die Sie ändern müssen, wenn Sie nur über diese Art der Überprüfung verfügen. Andernfalls ist es einfach, die anderen relevanten Tests in Ihrem Fall hinzuzufügen.
