# Dämonen und Süchte

## Introduction

Im [Tutorial](/de_DE/dev/tutorial_plugin) und die [Dokumentation](/de_DE/dev/plugin_template) Sie haben gelernt, wie Sie Ihr erstes Plugin mit relativ einfachen Aktionen programmieren, die vom Benutzer über einen Aktionsbefehl oder durch eine vom Kern geplante Aufgabe (Crons) ausgelöst werden).
Das Plugin ist dann in der Lage, gelegentlich Informationen abzurufen (z. B. per http-Anfrage) oder alle möglichen Operationen auszuführen, sofern dies in PHP codiert werden kann.

Es wird vorkommen, dass Sie mehr als das brauchen, ein paar Beispiele, ohne Anspruch auf Vollständigkeit:

- Verwenden Sie Systemressourcen, zum Beispiel einen USB-Stick oder andere Hardware (Bluetooth)...)
- eine Verbindung mit einem Remote-System aufrechterhalten (in einem lokalen Netzwerk oder im Internet, aber nicht jeedom))
- Halten Sie Prozesse im Hintergrund aktiv, was bei PHP-Code nicht der Fall ist, der nur während der Ausführung der http-Anfrage „lebt“
- Führen Sie eine Echtzeitverarbeitung durch

Meistens verwenden wir hierfür einen „Daemon“".
Keine Panik, im Kern von Jeedom ist bereits alles geplant, um uns dabei zu helfen, diesen Dämon in die Schranken zu weisen, und wir werden es hier detailliert beschreiben.

## Daemon-Dateistruktur

Der Code und/oder die ausführbare Datei Ihres Daemons muss sich natürlich im Baum Ihres Plugins befinden und muss daher bei der Installation eines Plugins mit dem Archiv eingebunden und mitgeliefert werden.
Es gibt keine strenge Regel für den genauen Speicherort Ihres Daemons, die Konvention schreibt jedoch vor, dass Sie ihn im Unterverzeichnis „ platzieren./resources/` des Plugins.

Im Vorlagen-Plugin finden Sie die Grundlagen für die Implementierung eines Daemons in Python und dies ist das Beispiel, das wir in dieser Dokumentation verwenden werden. Es steht Ihnen jedoch frei, Ihren Daemon in der Sprache Ihrer Wahl zu entwickeln, vorausgesetzt, dass er darauf ausgeführt werden kann [Von Jeedom unterstützte Plattformen](/de_DE/compatibility/).
Die meisten Jeedom-Plugin-Daemons sind in Python oder NodeJs, aber es gibt auch einige in .netCore und sicherlich auch andere Technologien.

Sie finden auch einige nützliche Methoden für einen NodeJs-Daemon, die möglicherweise in einer zukünftigen Version dieser Dokumentation detailliert beschrieben werden. Vorerst lade ich Sie ein, den Community-Entwickler zu konsultieren, um sich mit anderen Entwicklern über alles rund um NodeJs auszutauschen, vor allem über die zu verwendende Version.

Struktur des Vorlagenverzeichnisses:

![image](images/daemon_struct.png)

### der Python-Dämon

Im Vorlagen-Plugin hieß das Daemon-Verzeichnis „demond“ und der Daemon selbst heißt „demond.py“.
Diese Namen sind willkürlich, es steht Ihnen frei, sie zu ändern.
Die Konvention besteht darin, die Plugin-ID gefolgt vom Buchstaben „d“ zu verwenden. Das gibt zum Beispiel für das Plugin „blea“ das Verzeichnis „./resources/blead/`, das unter anderem die Datei „blead.py`, wobei diese Datei der Ausgangspunkt des Daemons ist.

> **TIPP**
>
> Zögern Sie nicht, sich von offiziellen Plugins mit Daemon inspirieren zu lassen, um die Details zu verstehen, wie z. B. Blea, Openzwave oder SMS.

### das Jeedom-Paket für einen Python-Daemon

Jeedom stellt mit dem Template-Plugin ein Python-Paket bereit, das grundlegende Klassen und Methoden bietet, die für die Verwaltung des Daemons und die Kommunikation zwischen dem Daemon und dem PHP-Code Ihres Plugins nützlich sind.
Diese Klassen befinden sich im Verzeichnis „./resources/demond/jeedom/jeedom.py` (sichtbar im Screenshot oben).
Um zu beginnen, müssen Sie die Implementierungsdetails dieser Klassen und Methoden nicht kennen. Hier erhalten Sie lediglich eine Zusammenfassung dessen, was sie ermöglichen.

#### Klasse jeedom_utils()

Diese Klasse besteht aus einer Reihe nützlicher statischer Methoden wie „convert_log_level“, um die von jeedom empfangene Protokollebene in eine Protokollebene der Python-Klasse „logging“ umzuwandeln, oder „find_tty_usb“, um eine Liste der Geräte auf dem System zurückzugeben.
Wir werden sie hier nicht alle detailliert beschreiben, der Name jeder Methode ist ziemlich explizit, Sie werden sie entdecken, indem Sie in den Code eintauchen.

#### Klasse jeedom_serial()

Diese Klasse kapselt das Lesen und Schreiben auf einem Gerät.
Auch hier werden wir nicht im Detail auf die Klasse eingehen, die Methoden sprechen für sich, wissen Sie einfach, dass sie existiert, wenn Sie sie brauchen.

> **Aufmerksamkeit**
>
> Wenn Ihr Daemon diese Art von Aktion nicht ausführen muss, sollten Sie erwägen, diese Klasse nicht zu verwenden oder zu importieren, da das „serielle“ Python-Paket nicht standardmäßig installiert ist und Ihr Daemon in diesem Fall nicht startet (Problem, das in der Community mehrmals aufgetreten ist)). Wir werden im Abschnitt Abhängigkeitsmanagement darauf zurückkommen.

#### Klasse jeedom_socket() & jeedom_socket_handler()

Sie werden die Klasse „jeedom_socket_handler()“ nicht direkt verwenden, sie wird nur für „jeedom_socket()“ verwendet.
Der Zweck von „jeedom_socket()“ besteht darin, die Abwärtskommunikation (von Ihrem PHP-Code zum Daemon) sicherzustellen).
Wenn Ihr Plugin eine Anweisung an Ihren Daemon senden muss, kann es dies über diesen Socket tun. Ein Beispiel finden Sie später in dieser Dokumentation.

Die Klasse öffnet also einen TCP-Socket und lauscht. Wenn eine Nachricht empfangen wird, wird sie in eine Warteschlange gestellt, die später von Ihrem Daemon gelesen wird. Darauf kommen wir noch zurück.

Auch hier sind Sie nicht verpflichtet, diesen Mechanismus zu verwenden, es steht Ihnen frei, etwas anderes zu erstellen (z. B. einen http-Server), aber das wird von Jeedom bereitgestellt, es ist leicht und funktioniert sehr gut.

#### Klasse jeedom_com()

Dies stellt die Upstream-Kommunikation vom Daemon bis zu Ihrem PHP-Code sicher.
Sie werden am Anfang im Wesentlichen „send_change_immediate()“ verwenden, was es Ihnen ermöglicht, eine JSON-Nutzlast über eine http-Anfrage an jeedom zu senden. Es ist sehr einfach und effektiv, wir werden später ein Beispiel sehen.

### Skelett der Dämonenpython

Da wir nun die Umgebung kennen, können wir uns den Teil ansehen, der uns am meisten interessiert: der Dämon und was wir kodieren müssen.

Wir werden uns daher das von Jeedom vorgeschlagene Skelett eines Dämons im Detail ansehen und die „Dämonendatei“ öffnen.py` und wir beginnen mit den letzten Zeilen, die eigentlich den Anfang des Programms darstellen:

„python
_log_level = "Fehler"
_socket_port = 55009 # zum Ändern
_socket_host = 'localhost'
_device = 'auto'
_pidfile = '/tmp/demond.pid'
_apikey = ''
_Rückruf = ''

für arg in sys.argv:
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
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host)
    listen()
außer Ausnahme wie e:
    logging.error('Schwerwiegender Fehler : '+str(z))
    shutdown()
„

Einige Variableninitialisierungen:

„python
_log_level = „error“ # die Standardprotokollstufe im Textformat, wie von Jeedom gesendet
_socket_port = 55009 # der Port, den Ihr Daemon standardmäßig verwendet, um den Jeedom-Listening-Socket zu öffnen und zu ändern.
_socket_host = 'localhost' # die Schnittstelle, auf der der Socket geöffnet werden soll, a priori nicht ändern.
_device = 'auto' # ist nutzlos, wenn Sie kein Hardwaregerät verwenden
_pidfile = '/tmp/demond.pid' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas; nom du démon à modifier comme expliqué ci-dessus;
_apikey = '' # apikey zur Authentifizierung der Kommunikation zwischen Jeedom und Ihrem Daemon
_Rückruf = '' ## die Rückruf-URL zum Senden von Benachrichtigungen an Jeedom (und an Ihren PHP-Code))
„

> **Aufmerksamkeit**
>
> Sie müssen bei der Auswahl des Ports, den Sie für Ihren Socket verwenden möchten, vorsichtig sein. Dies ist ein möglicher Verbesserungspunkt unter jeedom, da kein Mechanismus vorhanden ist, um Kollisionen zu vermeiden: Wenn also ein anderes Plugin denselben Port wie Sie verwendet, stellt dies offensichtlich ein Problem dar. Im Moment besteht die einzige Möglichkeit, Ihre Wahl zu treffen, darin, in den vorhandenen Plugins nach den bereits verwendeten Ports zu suchen und sich zwischen Entwickler und Community abzustimmen (es gibt bereits offene Themen zu diesem Thema)). Darüber hinaus ist es wichtig, dass dies in der Konfiguration Ihres Plugins vom Benutzer konfigurierbar bleibt, damit die Portnummer geändert werden kann, falls ein solcher Konflikt auftreten sollte.

Dann rufen wir die in der Befehlszeile empfangenen Argumente ab. Diese Befehlszeile wird von Ihrem PHP-Code generiert und wir werden darauf zurückkommen.
Es liegt an Ihnen, das zu entfernen, was nicht nützlich ist (z. B. das Geräteargument), oder andere hinzuzufügen, z. B. einen Benutzer/pswd, wenn Ihr Daemon eine Verbindung zu einem Remote-System herstellen muss.

„python
für arg in sys.argv:
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
„

Dann gibt es noch ein paar Protokollzeilen und diese beiden klassischen Zeilen in Python, die einfach die aufzurufende Methode aufzeichnen, falls diese beiden Interrupt-Signale empfangen werden, wodurch der Daemon gestoppt werden kann:

„python
signal.signal(signal.SIGINT, Handler)
signal.signal(signal.SIGTERM, Handler)
„

und die „Handler“-Methode, die etwas weiter oben im Daemon definiert ist:

„python
def handler(signum=None, frame=None):
    logging.debug("Signal %i abgefangen, wird beendet..." % int(signum))
    shutdown()
„

Dadurch wird nur ein Protokoll hinzugefügt und die unten definierte Methode „shutdown()“ aufgerufen:

„python
auf jeden Fall herunterfahren():
    logging.debug("Herunterfahren")
    logging.debug("PID-Datei wird entfernt" + str(_pidfile))
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
„

Bei dieser Methode müssen Sie den Code schreiben, der im Falle eines Herunterfahrens des Daemons ausgeführt werden soll, z. B. sich vom Remote-System abmelden und offene Verbindungen ordnungsgemäß schließen.

> **Aufmerksamkeit**
>
> Sie müssen diese Methode anpassen und den Code entfernen, der in Ihrem Fall nicht erforderlich ist, insbesondere das try/exclusive auf „jeedom_serial“.close()`, wenn Sie diese Klasse nicht verwenden.

Wenn wir zum Starten des Daemons zurückkehren, wird hier der Rest kommentiert:

„python
try:
    jeedom_utils.write_pid(str(_pidfile)) # schreibt die PID-Datei, die der Jeedom-Kern überwacht, um festzustellen, ob der Daemon gestartet ist
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle) # Erstellung des jeedom_com-Objekts
    wenn nicht jeedom_com.test(): #Erster Test, um zu überprüfen, ob die Rückruf-URL korrekt ist
        logging.error('Netzwerkkommunikationsprobleme. Bitte korrigieren Sie Ihre Jeedom-Netzwerkkonfiguration.')
        shutdown()
    jeedom_socket = jeedom_socket(port=_socket_port, address=_socket_host) # Wir deklarieren den Socket, um Befehle von jeedom zu empfangen
    listen() # und wir hören zu
außer Ausnahme wie e:
    logging.error('Schwerwiegender Fehler : '+str(z))
    shutdown()
„

Die am Anfang der Datei definierte Methode „listen()“:

„python
Hör auf jeden Fall zu():
    jeedom_socket.open()
    try:
        während 1:
            time.sleep(0.5)
            read_socket()
    außer KeyboardInterrupt:
        shutdown()
„

Hier gibt es nichts zu ändern, wir können sehen, dass der Socket offen ist, und dann eine Endlosschleife, um den Socket jede halbe Sekunde zu lesen

Die Methode „read_socket()“

„python
def read_socket():
    globale JEEDOM_SOCKET_MESSAGE
    wenn nicht JEEDOM_SOCKET_MESSAGE.empty():
        logging.debug("Nachricht im Socket JEEDOM_SOCKET_MESSAGE empfangen")
        message = json.loads(jeedom_utils.stripped(JEEDOM_SOCKET_MESSAGE.get()))
        if message['apikey'] != _apikey:
            logging.error("Ungültiger APIkey vom Socket : " + str(Nachricht))
            return
        try:
            Drucken Sie „lesen“'
        außer Ausnahme, z:
            logging.error('Fehler beim Senden des Befehls an den Daemon : '+str(z))
„

Die Variable „JEEDOM_SOCKET_MESSAGE“ ist eine Python-„queue()“, die von der Klasse „jeedom_socket()“ unterstützt wird, wie zuvor gesehen.

Wenn die Warteschlange nicht leer ist, laden wir den JSON und prüfen, ob der mit der Nachricht empfangene API-Schlüssel dem beim Starten des Daemons empfangenen API-Schlüssel (`_apikey`) entspricht. Anschließend können wir die Nachricht lesen und unsere Aktionen im Try/Except ausführen:

„python
        try:
            Drucken Sie „lesen“'
        außer Ausnahme, z:
            logging.error('Fehler beim Senden des Befehls an den Daemon : '+str(z))
„

Anstelle von „print ‚read‘“ liegt es also an Ihnen, die relevanten Elemente der Nachricht zu lesen, die Ihr Plugin gesendet hat, und die Aktionen auszulösen oder Ihre für Ihr Plugin spezifischen Klassen oder Methoden aufzurufen.

Von hier aus haben Sie einen Daemon, der ausgeführt werden kann, auch wenn er noch nichts tut (das ist Ihre Aufgabe)).

## Anpassen des PHP-Codes des Plugins

Einen Daemon zu haben und seine Struktur zu verstehen ist sehr gut, aber es fehlen einige Schlüsselelemente, damit Ihr Plugin (PHP-Code) diesen Daemon steuern kann und damit der Kern auch darüber informiert wird, dass er existiert.

### plugin_info/info.json

In der Infodatei.json Ihres Plugins müssen Sie die Eigenschaft „hasOwnDeamon“ hinzufügen und den Wert „true“ zuweisen, Beispiel:

„json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 10,
    ...
}
„

Wir werden die Verwendung von „hasDependency“ und „maxDependancyInstallTime“ später sehen.

### Verwalten des Daemons in Ihrer eqLogic-Klasse

In der eqLogic-Klasse Ihres Plugins müssen einige Methoden für die ordnungsgemäße Verwaltung des Daemons implementiert werden.

#### Deamon_info-Funktion()

Die Funktion „deamon_info()“ wird vom Kern aufgerufen, wenn der folgende Frame auf der Konfigurationsseite Ihres Plugins angezeigt wird. Er muss vorhanden sein:

![image](images/daemon_info.png)

Normalerweise sieht es so aus: Das zurückgegebene Array und die in diesem Array verwendeten Schlüssel sind offensichtlich wichtig.
Sie können den folgenden Code unverändert kopieren/einfügen und den Code am Ende der Funktion anpassen, um die für Ihr Plugin erforderliche Konfiguration zu überprüfen.

„php
    öffentliche statische Funktion deamon_info() {
        $zurückkehren = array();
        $return['log'] = __CLASS__;
        $return['state'] = 'nok';
        $pid_file = jeedom::getTmpFolder(__CLASS__) . '/deamon.pid';
        if (file_exists($pid_file)) {
            if (@posix_getsid(trim(file_get_contents($pid_file)))) {
                $return['state'] = 'ok';
            } anders {
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
„

> **Aufmerksamkeit**
>
> Im Beispiel gibt es keinen Tippfehler, die Methode heißt „deamon_info()“ und nicht „daemon_info“, der Fehler liegt im Kern.

Der Schlüssel „state“ entspricht offensichtlich dem auf dem Bildschirm angezeigten Status. Wir können oben lesen, dass wir das Vorhandensein unserer „pid_file“ testen, um festzustellen, ob der Daemon ausgeführt wird oder nicht.

Der Schlüssel „launchable“ entspricht der Spalte „Configuration“ im Frame und wir können daher überprüfen, ob die Konfiguration vollständig und korrekt ist, um den Daemon starten zu können. Mit „launchable_message“ können Sie dem Benutzer im Falle von „NOK“ eine Nachricht anzeigen"

#### Deamon_start-Funktion()

Die Funktion „deamon_start()“ ist, wie der Name schon sagt, die Methode, die vom Kern aufgerufen wird, um Ihren Daemon zu starten.
Sie können den folgenden Code unverändert kopieren/einfügen und die angegebenen Zeilen ändern.

„php
    öffentliche statische Funktion deamon_start() {
        self::deamon_stop();
        $deamon_info = self::deamon_info();
        if ($deamon_info['launchable'] != 'ok') {
            throw new Exception(__('Bitte überprüfen Sie die Konfiguration', __FILE__));
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = system::getCmdPython3(__CLASS__) . " {$path}/demond.py"; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'http:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --pAusweis ' . jeedom::getTmpFolder(__CLASS__) . '/deamon.pid'; // et on précise le chemin vers le pAusweis file (ne pas modifier)
        log::add(__CLASS__, 'info', 'Daemon launch');
        $result = exec($cmd . ' >> ' . log::getPathToLog('template_daemon') . ' 2>&1 &'); // 'template_daemon' est le nom du Protokoll pour votre démon, vous devez nommer votre Protokoll en commençant par le pluginAusweis pour que le fichier apparaisse dans la page de config
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
            log::add(__CLASS__, 'error', __('Der Daemon konnte nicht gestartet werden, überprüfen Sie das Protokoll', __FILE__), 'unableStartDeamon');
            return false;
        }
        message::removeAll(__CLASS__, 'unableStartDeamon');
        return true;
    }
„

Ändern Sie nur die Zeilen mit einem Kommentar, der Rest muss unverändert bleiben.

Beachten Sie, dass wir zunächst den Daemon stoppen, um den Neustart zu verwalten.
Dann prüfen wir, ob der Daemon tatsächlich mit der Methode „deamon_info()“ gestartet werden kann und generieren in der Variablen „$cmd“ die Befehlszeile, um unseren Daemon zu starten, hier mit Python3. Beachten Sie die Verwendung der Systemfunktion::getCmdPython3(__CLASS__)`, das den Pfad zu Python3 zurückgibt, um dies zu verwenden, um mit Debian 12 kompatibel zu sein, wenn Ihre Abhängigkeiten vom Kern installiert werden.

#### Deamon_stop-Funktion()

Diese Methode wird verwendet, um den Daemon zu stoppen: Wir rufen die PID des Daemons ab, die in die „pid_file“ geschrieben wurde, und senden den Systemkill an den Prozess.

„php
    öffentliche statische Funktion deamon_stop() {
        $pid_file = jeedom::getTmpFolder(__CLASS__) . '/deamon.pid'; // ne pas modifier
        if (file_exists($pid_file)) {
            $pAusweis = intval(trim(file_get_contents($pid_file)));
            system::kill($pid);
        }
        system::kill('template.py'); // Name des zu ändernden Daemons
        sleep(1);
    }
„

Hier angekommen hast du den Dämon in der Info erklärt.json und implementierte die drei erforderlichen Methoden, damit der Jeedom-Kern Ihren Daemon starten und stoppen sowie seinen Status anzeigen kann. Die Voraussetzungen sind vorhanden.

### Kommunikation zwischen Daemon und PHP-Code

Es bleibt die Kommunikation zum und vom Daemon zu verwalten. Im Python-Code haben wir bereits gesehen, wie das gehandhabt wird: Zur Erinnerung: die Methoden „listen()“ und „read_socket()“, die einen Socket abhören, und die Methode „send_change_immediate()“, um eine JSON-Nutzlast an den PHP-Code zu senden.

Daher ist es notwendig, das Äquivalent auf der PHP-Seite zu verwalten.

#### Senden Sie eine Nachricht an den Dämon

Diese Funktion existiert nicht im Core und ist nicht Standard für alle Jeedom-Plugins, sie ist auch nicht zwingend erforderlich.
Dies ist die Funktion, die ich (@Mips) in jedem meiner Plugins verwende, die über einen Daemon verfügen. Ich füge sie hier ein und Sie können damit machen, was Sie wollen;-)

Es empfängt daher ein Array von Werten als Parameter und ist dafür verantwortlich, es an den Socket des Daemons zu senden, der dieses Array daher in der zuvor gesehenen Methode „read_socket()“ lesen kann.

„php
    öffentliche statische Funktion sendToDaemon($params) {
        $deamon_info = self::deamon_info();
        if ($deamon_info['state'] != 'ok') {
            throw new Exception("Der Daemon ist nicht gestartet");
        }
        $params['apikey'] = jeedom::getApiKey(__CLASS__);
        $payLoad = json_encode($params);
        $socket = socket_create(AF_INET, SOCK_STREAM, 0);
        socket_connect($socket, '127.0.0.1', Konfig::byKey('socketport', __CLASS__, '55009')); //Standardport Ihres zu ändernden Plugins
        socket_write($socket, $payLoad, strlen($payLoad));
        socket_close($socket);
    }
„

Was sich im Array „$params“ befindet und wie Sie diese Daten in Ihrem Daemon verwenden, liegt bei Ihnen, es hängt davon ab, was Ihr Plugin tut.

Zur Erinnerung: Dieses Array wird daher in der Methode „read_socket()“ abgerufen; Ausschnitt aus Python-Code:

„python
        if message['apikey'] != _apikey:
            logging.error("Ungültiger APIkey vom Socket : " + str(Nachricht))
            return
        try:
            Drucken Sie „lesen“'
        außer Ausnahme, z:
            logging.error('Fehler beim Senden des Befehls an den Daemon : '+str(z))
„

Wir können deutlich den vom PHP-Code hinzugefügten „apikey“-Schlüssel sehen, der vom Python-Code in der „message“-Tabelle gelesen wird"

#### Erhalten Sie eine Nachricht vom Dämon

Dazu müssen wir unserem Plugin eine Datei im Ordner „./core/php/“ hinzufügen. Konventionell nennen wir diese Datei „jee[pluginId].php“. `/plugins/[pluginId]/core/php/jee[pluginId].php wird daher der Pfad sein, der als Rückruf-URL in der Methode „deamon_start()“ verwendet wird

Hier ist der grundlegende Inhalt, den Sie kopieren/in diese Datei einfügen können:

„php
<?php

versuchen {
    require_once dirname(__FILE__) . "/../../../../core/php/core.inc.php";

    Wenn (!jeedom::apiAccess(init('apikey'), 'template')) { //ersetzen Sie die Vorlage durch die ID Ihres Plugins
        echo __('Sie sind nicht berechtigt, diese Aktion auszuführen', __FILE__);
        die();
    }
    if (init('test') != '') {
        echo 'OK';
        die();
    }
    $result = json_decode(file_get_contents("php://input"), true);
    Wenn (!is_array($result)) {
        die();
    }

    if (isset($result['key1'])) {
        // etwas tun
    } elseif (isset($result['key2'])) {
        // etwas anderes machen
    } anders {
        log::add('template', 'error', 'unbekannte Nachricht vom Daemon empfangen'); // Ersetzen Sie die Vorlage durch die ID Ihres Plugins
    }
} Catch (Ausnahme $e) {
    log::add('template', 'error', displayException($e)); // Ersetzen Sie die Vorlage durch die ID Ihres Plugins
}
„

Der Code beginnt mit der Überprüfung, ob der API-Schlüssel korrekt ist:

„php
    Wenn (!jeedom::apiAccess(init('apikey'), 'template')) { //ersetzen Sie die Vorlage durch die ID Ihres Plugins
        echo __('Sie sind nicht berechtigt, diese Aktion auszuführen', __FILE__);
        die();
    }
„

Der erste Test dient als Testmethode beim Starten des Daemons (siehe Aufruf von „jeedom_com.test()` im Daemon-Code):

„php
    if (init('test') != '') {
        echo 'OK';
        die();
    }
„

und schließlich laden wir die Nutzlast, die wir dekodieren, in die Tabelle „$result“:

„php
    $result = json_decode(file_get_contents("php://input"), true);
    Wenn (!is_array($result)) {
        die();
    }
„

Dann liegt es an Ihnen, die Tabelle zu lesen und die Aktionen in Ihrem Plugin entsprechend auszuführen, Beispiel:

„php
    if (isset($result['key1'])) {
        // etwas tun
    } elseif (isset($result['key2'])) {
        // etwas anderes machen
    } anders {
        log::add('template', 'error', 'unbekannte Nachricht vom Daemon empfangen'); // Ersetzen Sie die Vorlage durch die ID Ihres Plugins
    }
„

Der Python-Code zum Senden der Nachricht sieht folgendermaßen aus:

„python
jeedom_com.send_change_immediate({'key1' : 'value1', 'key2' : 'value2' })
„

Voila, Sie haben einen voll funktionsfähigen Daemon und können in beide Richtungen zwischen Ihrem Daemon und Ihrem PHP-Code kommunizieren. Der schwierigste Teil bleibt noch zu erledigen: Code-Daemon-Logik.

## Abhängigkeiten

Wenn wir einen Daemon schreiben, benötigen wir neben unseren eigenen Klassen sehr oft auch externe Bibliotheken.

Unter Debian verwenden wir normalerweise die apt-Tools, um die erforderlichen Pakete zu installieren, und für Python3 verwenden wir pip3.

Und um dies zu bewältigen, ist im Kern von Jeedom wiederum alles geplant, um uns mit zwei unterschiedlichen Methoden zu helfen:

1. Die Verfahrensmethode.
   Diese Methode war die einzig mögliche Methode mit Jeedom-Versionen vor 4.2
1. Die Konfigurations-JSON-Dateimethode.
   Diese Methode erschien mit Version 4.2 aus dem Kern von Jeedom.

Beide Methoden können im selben Plugin implementiert werden.

- Wenn beide Methoden in einem Plugin implementiert sind:
  - Kerne vor 4.2 wird die Verfahrensmethode verwenden.
  - Kern 4s.2 und höher verwenden die JSON-Konfigurationsdateimethode.
- Wenn nur die Prozedurmethode in einem Plugin implementiert ist:
  - Alle Kerne verwenden diese Methode.
- Wenn nur die JSON-Konfigurationsdateimethode in einem Plugin implementiert ist.
  - Das Plugin ist nicht mit Kernversionen vor 4.2 kompatibel

Beide Methoden haben ihre Vor- und Nachteile. Es liegt an Ihnen, entsprechend Ihrer Situation zu wählen.

### Deklaration inplugin_info/info.json

In beiden Fällen müssen Sie Ihre Datei „info.json“ anpassen.
Gleiches Beispiel wie für die Daemon-Deklaration, Sie müssen die Eigenschaft „hasDependency“ hinzufügen und den Wert „true“ zuweisen:

„json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 30,
    ...
}
„

Die Eigenschaft „maxDependancyInstallTime“ ist die Zeit in Minuten, nach der der Kern davon ausgeht, dass die Installation nicht erfolgreich war.
 In diesem Fall wird der automatische Modus des Daemons deaktiviert und eine Nachricht im Benachrichtigungscenter veröffentlicht.
 Wenn diese Eigenschaft nicht definiert ist, beträgt die Standardverzögerung 30 Minuten.

> **TIPP**
>
> Das Installationsskript wird nicht unterbrochen, sodass es möglicherweise erfolgreich abgeschlossen wird. Dies ist nur die Zeit, nach der der Kern nicht mehr wartet und keinen Fortschritt mehr anzeigt.

### Die JSON-Konfigurationsdateimethode

#### Erstellung der Dateien „plugin_info/packages.json“

Die Syntax dieser Datei wird hier beschrieben. Siehe auch
[Der Startartikel im Blog](https://blog.jeedom.com/6170-introduction-jeedom-4-2-installation-de-dependance/).

Diese Datei kann einen der folgenden Abschnitte enthalten:

##### pre-install: Der Pfad zu einem Skript, das vor der Installation ausgeführt werden soll

Beispiel :

„json
{
  "pre-install" : {
    "script" : "plugins/[pluginID]/resources/post-install.sh"
  }
„

##### post-install

Dies kann der Pfad zu einem Skript sein, das nach der Installation ausgeführt werden soll, oder die Aktion „Apache neu starten“.
Beispiel :

„json
{
  "post-install" : {
    "restart_apache" : true,
    "script" : "plugins/[pluginID]/resources/post-install.sh"
  }
„

##### apt: Debian-Abhängigkeiten

Exemple

„json
{
  "apt" : {
    "libav-tools" : {"alternative" : ["ffmpeg"]},
    "ffmpeg" : {"alternative" : ["libav-tools"]},
    "python-pil" : {},
    "php-gd" : {}
  }
}
„

Für jedes Paket können wir „Version“ angeben, um eine Version festzulegen, „Alternative“, falls verfügbar,
 „optional“, wenn es optional ist, „reinstall“, um die Neuinstallation des Pakets zu erzwingen, „remark“, um einen kostenlosen Kommentar hinzuzufügen.

##### pip3: Python3-Abhängigkeiten

Exemple:

„json
{
  "apt" : {
    "python3-pyudev" : {},
    "Python3-Anfragen" : {},
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
„

> *Hinweis*
>
> Ab Jeedom-Version 4.4.9, Core kann die Installation von Python3-Abhängigkeiten unter Debian 12 bewältigen. Die Nebengebäude werden in einem installiert *friv* (virtuelle Umgebung)
> Sie sollten Ihr Plugin entsprechend anpassen und den Pfad nicht mehr zu „python3“ fest codieren, sondern „system::getCmdPython3(__CLASS__)` stattdessen.
> Exemple: `$cmd = system::getCmdPython3(__CLASS__) . " {$path}/demond.py";`

##### npm: Abhängigkeiten für NodeJS

Für NodeJS befinden sich die Abhängigkeiten in einer anderen „Pakete“-Datei.json` in einem eigenen Format,
Wenn sie beispielsweise im Verzeichnis „/resources“ abgelegt wird, wird diese Datei in der von Jeedom angezeigt:

„json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    "Plugins/dyson/resources/dysond"  : {}
  }
}
„

##### composer: um eine weitere PHP-Abhängigkeit zu installieren

kein Beispiel vorhanden; Die Syntax ist ähnlich wie bei anderen Paketen, mit dem Schlüsselwort „compose“.

##### Abhängigkeiten von einem anderen Plugin

Wenn ein Plugin die Installation eines anderen Plugins erfordert, ist dies auch mit der folgenden Syntax möglich;
Das Plugin muss kostenlos oder bereits gekauft sein :

„json
{
    "plugin":{
        "mqtt2": {}
    }
}
„

### Die Verfahrensmethode

Es gibt zwei Voraussetzungen, auf die wir gleich näher eingehen.

#### Abhängigkeiten installieren

In Ihrer eqLogic-Klasse müssen Sie diese Funktion hinzufügen, falls sie nicht vorhanden ist. Sie können diese unverändert kopieren/einfügen, ohne etwas zu ändern

„php
    öffentliche statische Funktion dependency_install() {
        log::entfernen(__CLASS__ . '_update');
        return array('script' => dirname(__FILE__) . '/../../resources/install_#stype#.sh ' . jeedom::getTmpFolder(__CLASS__) . '/dependence', 'log' => log::getPathToLog(__CLASS__ . '_update'));
    }
„

Diese Funktion löscht zunächst das Protokoll der vorherigen Installation, falls vorhanden, und gibt dann den auszuführenden Skriptbefehl und den Speicherort des Protokolls an den Kern zurück.

Beachten Sie, dass die zurückgegebene Skriptdatei den Namen „install_“ trägt#stype#.sch`. Tatsächlich: „#stype#` wird dynamisch durch den Kern mit dem zu verwendenden Paketverwaltungstool ersetzt, abhängig vom System, auf dem Jeedom installiert ist. Also `#stype#` wird auf einem Debian-System durch `apt` ersetzt.
Dadurch ist es möglich, Abhängigkeitsinstallationsskripte für mehrere Systeme anzubieten und somit etwas anderes als Debian/apt zu unterstützen, was das absolute Minimum ist und das einzige, das wir hier behandeln werden.

Das erste Argument: `jeedom::getTmpFolder(__CLASS__) . '„/dependence“ ist die Datei, die zur Überwachung des Installationsfortschritts verwendet wird (der Prozentsatz, der während der Installation auf dem Bildschirm angezeigt wird)).

Das ist alles für den PHP-Teil, jetzt müssen Sie das Skript in „./resources/install_apt“ erstellen.sh` und natürlich hängt der Inhalt des Skripts von Ihrem Plugin und den Paketen ab, die Sie installieren möchten.

Hier ist ein Beispiel für ein recht einfaches Skript aus einem meiner Plugins, aber Sie können es viel vollständiger und komplexer gestalten:

> **Aufmerksamkeit**
>
> Ab Debian 12 ist es zwingend erforderlich, die Python-Pakete in einer virtuellen Umgebung zu installieren, dieses Beispielskript funktioniert daher nicht mehr so wie es ist, es liegt an Ihnen, es entsprechend anzupassen.
>
> Je vous invite également à consulter cette Dokumentation qui offre une alternative: <https://github.com/Mips2648/dependance.lib/blob/master/pyenv.md>

„bash
PROGRESS_FILE=/tmp/jeedom/template/dependence #ersetzen Sie die Vorlage durch Ihre Plugin-ID

Wenn [ ! -z $1 ]; Dann
    PROGRESS_FILE=$1
fi
Berühren Sie ${PROGRESS_FILE}
echo 0 > ${PROGRESS_FILE}
Echo "*************************************"
Echo "*   Starten Sie die Installation der Abhängigkeiten  *"
Echo "*************************************"
echo $(Datum)
echo 5 > ${PROGRESS_FILE}
apt-get clean
echo 10 > ${PROGRESS_FILE}
apt-get-Update
echo 20 > ${PROGRESS_FILE}

Echo "*****************************"
echo „Module mit apt-get installieren"
Echo "*****************************"
apt-get install -y python3 python3-requests python3-pip python3-voluptuous python3-bs4
echo 60 > ${PROGRESS_FILE}

Echo "*************************************"
echo „Installieren Sie die erforderlichen Python-Bibliotheken"
Echo "*************************************"
python3 -m pip install „aiohttp"
echo 80 > ${PROGRESS_FILE}

echo 100 > ${PROGRESS_FILE}
echo $(Datum)
Echo "***************************"
Echo "*      Installation beendet      *"
Echo "***************************"
rm ${PROGRESS_FILE}
„

Wir werden einige Zeilen detailliert beschreiben:

Wir beginnen mit der Definition des Standardspeicherorts der Fortschrittsdatei für den Fall, dass wir den vorherigen Schritt nicht korrekt ausgeführt haben...
Und wir verwenden das erste erhaltene Argument als Standort, da wir den vorherigen Schritt korrekt ausgeführt haben;-).

„bash
PROGRESS_FILE=/tmp/jeedom/template/dependence #ersetzen Sie die Vorlage durch Ihre Plugin-ID

Wenn [ ! -z $1 ]; Dann
    PROGRESS_FILE=$1
fi
„

Zeilen wie „echo 60 > ${PROGRESS_FILE}“ werden offensichtlich verwendet, um den Fortschritt zurückzugeben: Um den Benutzer zu beruhigen, fügen wir es regelmäßig hinzu, bis wir 100 erreichen (normalerweise werden sie gestresst, wenn es 100 überschreitet, also vermeiden wir es)).

Ein paar Ratschläge:

- Führen Sie kein „apt-get upgrade“ durch! Sie wissen nicht, was sich auf der Maschine befindet, und es ist nicht Ihre Aufgabe, alles zu aktualisieren.
- Verwenden Sie nicht „apt“, sondern „apt-get“. „apt“ ist für die interaktive Nutzung gedacht und generiert eine Warnung.
- Fügen Sie bei Bedarf das Flag „-y“ hinzu, um die Eingabeaufforderungen zu bestätigen. Andernfalls stoppt das Skript mit einer Anfrage wie „Möchten Sie fortfahren [j/n]“ und der Benutzer wird blockiert.
- Bevorzugen Sie die Syntax „python3 -m pip install ...“ anstelle von „pip3 install ...“, um Python-Pakete zu installieren, da letztere Probleme verursachen, wenn „pip3“ (oder „pip“, wenn Sie Python v2 verwenden) dies nicht tut bezieht sich nicht auf dieselbe Version wie Python3: wenn zum Beispiel Python3 auf Version 3 zeigt.7 und pip3 zeigt auf 3.9 oder schlechter 2.7; Sie wissen nicht, was auf dem System gemacht wurde, und Sie sind nicht immun gegen ein solches Problem auf dem Computer des Benutzers. In der Community sind Dutzende Fälle aufgeführt.

> **Aufmerksamkeit**
>
> Es ist sehr wichtig, alle notwendigen Pakete zu installieren und besonders auf diejenigen zu achten, die sehr oft bereits installiert sind ... aber nicht immer. Es gibt häufig Probleme mit den Paketen „python3-requests“, „python3-pip“ und/oder „serial“. Diese sind auf einem Basis-Debian nicht vorinstalliert, sondern sehr oft bereits von einem anderen Plugin installiert ... es sei denn, Ihr Plugin ist das erste und in diesem Fall startet Ihr Daemon nicht. Es kommt häufiger vor, als Sie vielleicht denken.

#### Kennen Sie den Status

![image](images/dependencies_info.png)

Es ist daher unsere PHP-Funktion „dependancy_install()“, die vom Kern aufgerufen wird und unser Skript „./resources/install_apt“ startet.sh`, wenn der Benutzer auf die Schaltfläche „Neu starten“ klickt, oder automatisch vom Kern, wenn er erkennt, dass die Abhängigkeiten entweder nicht installiert oder nicht aktuell sind.

Aber woher kennt der Kern den Status und wie zeigt er ihn im obigen Frame an?? Dank der Funktion „dependancy_info()“, die wir in unserer eqLogic-Klasse hinzufügen müssen.

Hier ist ein Beispiel, von dem Sie die Mehrheit übernehmen können:

„php
    öffentliche statische Funktion dependency_info() {
        $zurückkehren = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::getTmpFolder(__CLASS__) . '/dependance';
        if (file_exists(jeedom::getTmpFolder(__CLASS__) . '/dependance')) {
            $return['state'] = 'in_progress';
        } anders {
            if (exec(system::getCmdSudo() . system::get('cmd_check') . '-Ec "python3\-requests|python3\-voluptuous|python3\-bs4"') < 3) { // Passen Sie die Liste der Pakete und die Gesamtsumme an
                $return['state'] = 'nok';
            } elseif (exec(system::getCmdSudo() . 'pip3-Liste | grep -Ewc "aiohttp"') < 1) { // die Liste der Pakete und die Gesamtsumme anpassen
                $return['state'] = 'nok';
            } anders {
                $return['state'] = 'ok';
            }
        }
        return $return;
    }
„

In diesem Beispiel testen wir, ob apt-Pakete vorhanden sind: `system::getCmdSudo() . system::get('cmd_check') . '-Ec "python3\-requests|python3\-voluptuous|python3\-bs4"'`. Hier wollen wir „python3-requests“, „python3-voluptuous“ und „python3-bs4“ und daher muss der Befehl 3 zurückgeben, daher der Vergleich: „< 3“..

Das Gleiche gilt für Python-Pakete: `pip3-Liste | grep -Ewc "aiohttp"''. Das Vorhandensein von „aiohttp“ wird validiert, nur ein Paket, also vergleichen wir: `< 1`;

> **Aufmerksamkeit**
>
> Ab Debian 12 ist es zwingend erforderlich, die Python-Pakete in einer virtuellen Umgebung zu installieren, dieser Befehl funktioniert daher nicht mehr so wie er ist, es liegt an Ihnen, ihn entsprechend anzupassen.

Es ist also ganz einfach: Die Liste der Pakete und die Gesamtsumme sind die einzigen Elemente, die Sie ändern müssen, wenn Sie nur über diese Art der Überprüfung verfügen. Andernfalls können Sie in Ihrem Fall problemlos die anderen relevanten Tests hinzufügen.
