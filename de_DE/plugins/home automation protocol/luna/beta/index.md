# Luna-Plugin

# seit 27.03.2023 neues Image Jeedom Luna (bekannt als V2)

Sie können ein Update ohne Verlust der Sicherung usw. durchführen, indem Sie auf "Wiederherstellungsmodul aktualisieren" klicken". Dadurch wird Ihr Jeedom Luna neu gestartet, Ihre Konfigurationen gehen jedoch nicht verloren. Dadurch werden Änderungen am Wiederherstellungs- und Bootmodul der Box vorgenommen, die eine bessere Stabilität der Box ermöglichen.

# Aufmerksamkeitssorge von Luna blinkt

Wir haben Feedback zu einem Fehler beim Flashen bestimmter Jeedom Luna-Boxen erhalten. (nur diejenigen, die vor 2023 ausgeliefert wurden)
Wir bedauern dies und haben unseren Domadoo-Reseller informiert.

Wenn Sie es schaffen, sich mit Ihrem Jeedom zu verbinden, starten Sie bitte das Luna-Plugin (Plugins/Home automation gateway/luna) und gehen Sie zu :

- Aktualisierung des Wiederherstellungsmoduls
Führen Sie dann die Wiederherstellung durch :
- Wiederherstellung (Reset Factory)
Dadurch wird Ihre Box vollständig aktualisiert.

Sollten Sie keinen Zugriff auf Ihre Box haben, halten Sie bitte den Reset-Knopf an der Box länger als 10 Sekunden gedrückt; Wenn dieser losgelassen wird, sollte die Box blinken.
Lassen Sie sie den Vorgang abschließen. Jeedom soll wieder operativ werden. Sie können das obige Verfahren für eine vollständige Aktualisierung durchführen.

Wenn es nicht blinkt :

- Bitte kontaktieren Sie Domadoo über den folgenden Link; Das Domadoo-Team stellt Ihnen ein Rücksendeetikett zur Verfügung und sendet Ihnen eine korrekt geflashte Luna zu :
<https://www.domadoo.fr/rma>

# Die Funktionen des Luna-Plugins

> USB-Fix

In der Luna-Plugin-Version vom 05.02.2023 wurde der Zigbee-Port behoben, Sie müssen den ttyUSBLUNA-Zigbee-Port verwenden.
Bei externen USBs wird dies auch automatisch mit dem Namen und/oder der Seriennummer behoben.

> Aktualisierung des Wiederherstellungsmoduls

Das Update bringt das neueste Image auf die Luna; Es wird dieses Image während einer Wiederherstellung verwenden (Reset-Taste auf der Box oder Wiederherstellungstaste auf dem Plugin).
Klicken Sie auf die Schaltfläche „Wiederherstellung“. Das Luna lädt die neueste Version seines Images herunter und startet neu. Die grünen LEDs am Luna-Gehäuse blinken.
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via <http://jeedomluna.lokal>; Die Wiederherstellungssoftware ist auf dem neuesten Stand.

> Wiederherstellung (Reset Factory)

Bei einem Werksreset wird die Box gemäß dem aktualisierten Image über die oben angegebene Schaltfläche auf die Werkskonfiguration zurückgesetzt.
WARNUNG : Sie müssen vor diesem Vorgang ein Backup Ihrer Box erstellen, da sonst die Daten Ihrer Box verloren gehen (mit Ausnahme des Backups auf der SD-Karte)).

> LED

Sie können über den Befehl Typ auswählen die Farbe und Animation der LED ändern (kann ausgeschaltet werden).

> Batterie

Der Akku wird bei der Installation/Aktualisierung des Plugins aktiviert: Wenn Sie möchten, können Sie es deaktivieren, indem Sie auf den Befehl „Batterie ausschalten“ klicken
Über zwei Rückmeldungen können Sie den Batteriestand sowie die Art der Stromversorgung Ihrer Box abrufen. („Laden“, „Entladen“, „Voll“ usw).

> SD

Ermöglicht die Verwaltung (Formatierung) der Micro-SD-Karte, die Sie der Box hinzufügen können, sowie die Übertragung von Jeedom-Backups auf diese SD-Karte.

> Power- und Reset-Tasten (v1) Luna-Plugin nicht auf dem neuesten Stand

- Zurücksetzen : weniger als 1 Sekunde für einen erzwungenen Neustart der Box.
- Zurücksetzen : mehr als 10 Sekunden für einen Werksreset der Box.
- Essen : mehr als 10 Sekunden für eine Zwangsabschaltung des Fox mit Batterieabschaltung (hierfür muss man vorher das Netzteil entfernen)).

> Power- und Reset-Tasten (v2 neues image)

- Reset-Knopf : weniger als 1 Sekunde für einen Hardware-Neustart der Luna-Box.

- Power-Taste : Es dauert zwischen 1 und 4 Sekunden, bis sich der Akku aus- oder einschaltet (orange = aus, grün = ein)).
- Power-Taste : zwischen 5 und 9 Sekunden Neustart der Box (blau blinkend beim Loslassen)).
- Power-Taste : Es dauert zwischen 10 und 20 Sekunden, bis die Box stoppt (orange blinkend beim Loslassen)).
- Power-Taste : mehr als 30 Sekunden, um die Box auf die Werkseinstellungen zurückzusetzen (rotes Blinken beim Loslassen)).

> Lora (nur für Jeedom Luna-Boxen, die mit dem Jeedom Lora-Modul verkauft werden)

- Automatische Erkennung des Moduls und Start des Paketweiterleiters auf dem lokalen Host des Jeedom. Verwenden Sie das LNS-Plugin, um die Anwendung zu installieren. Es muss nichts über das Luna-Plugin erledigt werden, alles läuft automatisch ab.
- Möglichkeit, es im LTE-Teil zu deaktivieren

> Hotspot

Im WLAN-Teil des Plugins können Sie das Kontrollkästchen „Hotspot“ aktivieren, um einen WLAN-Zugangspunkt auf Ihrer Luna Box zu erstellen. Sie können den DHCP-Modus aktivieren, der Clients, die sich über den Access Point mit Ihrer Box verbinden, automatisch eine IP-Adresse zuweist. Für den IP-Adressteil von DHCP finden Sie hier ein Beispiel : wenn Sie 192.168.4 wählen.1 lauten die IP-Adressen Ihres DHCP-Servers entsprechend der Subnetzmaske (255.255.255.0), im Bereich 192.168.4.2 bis 192.168.4.254.

> Legen Sie eine IP fest

- Sie können auf der Ethernet- oder WLAN-Seite des Luna-Plugins die IP-Adressen festlegen. Um das Ethernet einzustellen, müssen Sie zunächst über eine aktivierte WLAN-Verbindung verfügen.

> Priorisieren Sie Verbindungen

Auf der Startseite des Plugins können Sie die Verbindungen priorisieren, sodass die Box bei fehlender Verbindung von Ethernet auf WLAN umschaltet oder umgekehrt.

> Mit dem Luna-Plugin können Sie sich von Ihrem Luna aus mit einem WLAN-Netzwerk verbinden (mit oder ohne Passwort).

Gehen Sie dazu zum Luna-Plugin und wählen Sie dann die Luna-Ausrüstung aus. Hier können Sie das gewünschte WLAN aktivieren und anschließend auswählen (2.4 GHz und 5 GHz), geben Sie dann das Passwort ein und speichern Sie es.

> 4G (nur kompatibel mit Jeedom Luna 4G-Boxen)

Automatische Erkennung von 4G in der Box. Bitte gehen Sie das Luna-Plugin durch und klicken Sie auf „LTE-Modul erkennen“. Fordern Sie auf der LTE-Seite des Luna-Plugins PIN-Code und APN an.
Wenn 4G erkannt wird, wird im Hintergrund ein Verbindungsmodul gestartet, das bei Bedarf automatisch von Ethernet oder WLAN auf 4G umschaltet.
Die Einstellungen werden auf der LTE-Seite des Plugins vorgenommen.

/!\ Attention Le plugin SMS ne fonctionne pas en meme temps que la 4G sur la Luna 4G./!\
/!\ Achtung, Sie benötigen APNs vom Typ IPv4 (bouygue : ebouygtel.com, Orange : orange, kostenlos : frei). /!\

> Onglet Avancé

L'onglet avancé est à manipuler avec précaution.

Il permet :
 - de modifier le mot de passe root
 - de changer la conservation des logs système afin de réduire l'espace utilisé par les logs
 - activer / désactiver le factory reset via l'appui long sur le bouton (+ de 30 secondes)
 - activer / désactiver la supervision de la connectivité internet afin de prioriser l'ordre suivant : Ethernet -> Wifi -> LTE
 - programmer le redémarrage de la box (de façon unique ou récurrente)

# FAQ

>**Ich habe ein Luna 4G, aber die Registerkarte „LTE“ wird nicht angezeigt**
>
>Auf der Registerkarte „Allgemein“ gibt es Verwaltungsoptionen. Klicken Sie auf Plugin-Konfiguration neu starten

![adminTools](../images/adminTools.png)


