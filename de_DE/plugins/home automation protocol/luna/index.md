# Luna-Plugin

# seit 27.03.2023 neues Bild Jeedom Luna
Sie können ein Update ohne Verlust der Sicherung usw. durchführen, indem Sie auf "Wiederherstellungsmodul aktualisieren" klicken". Dadurch wird Ihr jeedom Luna neu gestartet, aber Sie werden Ihre Konfiguration nicht verlieren. Dadurch werden Änderungen im Wiederherstellungs- und Boot-Modul der Box vorgenommen, die eine bessere Stabilität dieses Moduls ermöglichen.

# Aufmerksamkeitssorge von Luna blinkt

Wir haben Feedback zu einem Flashing-Fehler einiger Lunas erhalten. (nur diejenigen, die vor 2023 ausgeliefert wurden)
Wir bedauern dies und haben unseren Domadoo-Reseller informiert.

Wenn Sie es schaffen, sich mit Ihrem Jeedom zu verbinden, starten Sie bitte das Luna-Plugin (Plugins/Home automation gateway/luna) und gehen Sie zu : 
  - Aktualisierung des Wiederherstellungsmoduls
Führen Sie dann die Wiederherstellung durch :
  - Wiederherstellung (Reset Factory)
Dadurch wird Ihre Box vollständig aktualisiert.

Wenn Sie keinen Zugriff auf Ihre Box haben, lassen Sie bitte die Reset-Taste der Box länger als 10 Sekunden gedrückt; Wenn letzteres losgelassen wird, sollte das Kästchen blinken; lassen Sie es den Vorgang beenden. Jeedom soll wieder operativ werden. Sie können das obige Verfahren für eine vollständige Aktualisierung durchführen.

Wenn es nicht blinkt : 
 - Bitte kontaktieren Sie Domadoo über den folgenden Link; Das Domadoo-Team stellt Ihnen ein Rücksendeetikett zur Verfügung und sendet Ihnen eine korrekt geflashte Luna zu :
https://www.domadoo.fr/rma

# Die Funktionen des Luna-Plugins :

> USB behoben

Im Luna-Plugin vom 02.05.2023 wurde das Zigbee behoben, Sie müssen den ttyUSBLUNA-Zigbee-Port verwenden. bei externem usb wird dies auch automatisch mit dem namen und/oder der seriennummer festgelegt.

> Aktualisierung des Wiederherstellungsmoduls

Das Update bringt das neueste Image auf die Luna; Es wird dieses Image während einer Wiederherstellung verwenden (Reset-Taste auf der Box oder Wiederherstellungstaste auf dem Plugin).
Klicken Sie auf die Wiederherstellungsschaltfläche; die Luna lädt die neueste Version ihres Images herunter und startet neu, die grünen LEDs auf der Luna-Box blinken. 
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via http://jeedomluna.lokal; Die Wiederherstellungssoftware ist auf dem neuesten Stand.

> Wiederherstellung (Reset Factory)

Bei einem Werksreset wird die Box gemäß dem aktualisierten Image über die oben angegebene Schaltfläche auf die Werkskonfiguration zurückgesetzt. WARNUNG : Sie müssen vor diesem Vorgang eine Sicherungskopie Ihrer Box erstellen, da Sie die Daten Ihrer Box verlieren (außer Sicherung auf der SD).

> LED

Sie können über den Befehl Typ auswählen die Farbe und Animation der LED ändern (kann ausgeschaltet werden).

> Batterie

Sie können über zwei Rückmeldungen den Batterieprozentsatz sowie die Art der Stromversorgung Ihrer Box abrufen. (Laden, Entladen, Voll etc…).

> SD

Ermöglicht die Verwaltung (Formatierung) der Micro-SD-Karte, die Sie der Box hinzufügen können, sowie die Übertragung von Jeedom-Backups auf diese SD-Karte.

> Die Power- und Reset-Tasten (v1)

- Zurücksetzen : weniger als 1 sekunde reboot force box.
- Zurücksetzen : mehr als 10 Sekunden Reset Factory der Box.
- Essen : mehr als 10 Sekunden Shutdown des Fox Force mit Shutdown des Akkus (dazu müssen Sie das Netzteil entfernt haben)

> Power- und Reset-Tasten (v2 neues image)

- Zurücksetzen : harter Neustart des Luna
- Essen : mehr als 5 Sekunden Akku abgeschaltet oder eingeschaltet (Orange > Aus, Grün Ein)
- Essen : mehr als 15 Sekunden Neustart der Box. (blauer Blitz beim Loslassen)
- Essen : mehr als 40 Sekunden Stop der Box. (Oranges Blinken beim Loslassen)
- Essen : mehr als 60 Sekunden Werksreset der Box. (Roter Blitz beim Loslassen)

> Lora (nur für luna verkauft bei mir Lodule lora von Jeedom)

- Automatische Erkennung des Moduls und Start des Paketweiterleiters auf dem lokalen Host des Jeedom. Verwenden Sie das LNS-Plugin, um die Anwendung zu installieren. (es muss nichts vom Luna-Plugin getan werden, alles ist automatisch)

# Demnächst : Hotspot, 4G (für Luna 4G), LORA (für Luna Lora)

> Hotspot (ALPHA))

Im WLAN-Teil des Plugins können Sie das Kontrollkästchen Hotspot aktivieren, mit dem Sie einen WLAN-Zugangspunkt auf Ihrer Box Luna erstellen können. (DNS- und IP-Weiterleitung (Brücke zwischen Ethernet und WLAN) funktionieren darauf).

> Mit dem Luna-Plugin können Sie sich von Ihrem Luna aus mit einem WLAN-Netzwerk verbinden (mit oder ohne Passwort).

Gehen Sie dazu zum Luna-Plugin und wählen Sie dann die Luna-Ausrüstung aus. Hier können Sie das gewünschte WLAN aktivieren und anschließend auswählen (2.4 GHz und 5 GHz), geben Sie dann das Passwort ein und speichern Sie es.

Im Moment berücksichtigt das Plugin nur Zugriffe mit DHCP.

> 4G (nur kompatibel mit Luna 4G)

Automatische Erkennung von 4G in der Box. Bitte gehen Sie durch das Plugin, um auf „LTE-Modul erkennen“ zu klicken. Wenn Sie die Parameter im Konfigurationsteil nicht sehen, fordern Sie PIN-Code und APN in der Konfiguration des Luna-Plugins an.
Wenn 4G den Start eines Verbindungsmoduls im Hintergrund erkennt, das bei Bedarf automatisch von Ethernet auf 4G umschaltet (Ping auf 8.8.8.8) funktioniert das SMS-Plugin gleichzeitig mit 4G auf dem Luna 4G.
Die Einstellungen werden in der Konfiguration des Plugins vorgenommen.
