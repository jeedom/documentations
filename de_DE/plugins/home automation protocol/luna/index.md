# Luna-Plugin

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

# Demnächst : Hotspot

> Mit dem Luna-Plugin können Sie sich von Ihrem Luna aus mit einem WLAN-Netzwerk verbinden (mit oder ohne Passwort).

Gehen Sie dazu zum Luna-Plugin und wählen Sie dann die Luna-Ausrüstung aus. Hier können Sie das gewünschte WLAN aktivieren und anschließend auswählen (2.4 GHz und 5 GHz), geben Sie dann das Passwort ein und speichern Sie es.

Im Moment berücksichtigt das Plugin nur Zugriffe mit DHCP.

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

> Power- und Reset-Tasten

- Zurücksetzen : weniger als 1 sekunde reboot force box.
- Zurücksetzen : mehr als 10 Sekunden Reset Factory der Box.
- Essen : mehr als 10 Sekunden Shutdown des Fox Force mit Shutdown des Akkus (dazu müssen Sie das Netzteil entfernt haben)

> Hotspot (ALPHA))

Im WLAN-Teil des Plugins können Sie das Kontrollkästchen Hotspot aktivieren, mit dem Sie einen WLAN-Zugangspunkt auf Ihrer Box Luna erstellen können. (DNS- und IP-Weiterleitung (Brücke zwischen Ethernet und WLAN) funktionieren darauf).
