# MQTT-Manager-Plugin

## Description

Das Plugin **MQTT-Manager** ermöglicht es Ihnen, Jeedom mit einem bestehenden MQTT-Broker zu verbinden oder einen lokal oder unter Docker mithilfe des Plugins zu installieren **Docker-Verwaltung**.

Dieses Plugin ist in der Lage, mehrere Funktionen zu kombinieren :

- Als Basis für andere Plugins für alles rund um MQTT dienen.

- Dienen Sie im "eigenständigen" Modus, indem Sie Aktions-/Infobefehle zum Senden/Empfangen von Nachrichten auf MQTT erstellen.

- Steuern Sie Jeedom von einem anderen MQTT-Gerät aus *(Geknotet zum Beispiel)*. Das Plugin kann sowohl Befehle steuern als auch alle Jeedom-Ereignisse auf MQTT erneut übertragen.

# Configuration

Nach der Installation und Aktivierung des Plugins sollte die Installation von Abhängigkeiten beginnen, es sei denn, die automatische Verwaltung wurde zuvor deaktiviert. In diesem Fall müssen Sie auf die Schaltfläche klicken **Beleben** um diese Installationsphase einzuleiten.

## Plugin-Setup

Um die Konfiguration des Plugins zu starten, muss der Verbindungsmodus zum Broker unter den 3 möglichen Optionen ausgewählt werden :

- **Lokaler Makler** : Der Mosquitto-Broker wird direkt auf dem Rechner installiert, der Jeedom hostet *(Standardmodus)*.

- **Lokaler Docker-Broker** : Der Mosquitto-Broker wird mithilfe des offiziellen Plugins automatisch in einem Docker-Container installiert und konfiguriert **Docker-Verwaltung**.

  >**INFORMATION**
  >
  >In diesem Modus kann die Installation mehrere Minuten dauern.

- **Remote-Broker** : Im Falle der Nutzung eines bereits bestehenden Brokers reicht es aus, dessen Adresse einzutragen *(Beispiel : ``mqtt://192.168.1.10:1883‘)*.

Sobald der Mosquitto-Broker installiert ist *(im Bedarfsfall)*, Sie können mit der Konfiguration fortfahren :

- **Authentifizierung**: Sie können Benutzer / Passwort für die Verbindung angeben :

  - Im lokalen Modus können Sie einen `Benutzernamen eingeben:password' pro Zeile, jedes Paar von Identifikatoren hat gültigen Zugriff auf den Broker. Wenn es keine Kennung gibt, erstellt Jeedom automatisch eine.

  - Im Standalone-Modus reicht es aus, in der ersten Zeile die Kennung des Paares ` anzugeben:Passwort` für Jeedom (Beispiel : Wenn der Benutzername „jeedom“ und das Passwort „mqtt“ lautet, müssen Sie „jeedom“ eingeben:mqtt``).

  >**WICHTIG**
  >
  >Im lokalen Modus ist die Authentifizierung obligatorisch. Nach dem Zusatz ist es außerdem erforderlich, jeedom neu zu starten, damit es berücksichtigt wird.

- **Jeedom-Wurzelthema** : Stammthema, um einen Befehl an Jeedom zu senden oder auf dem es die Ereignisse sendet. Achtung, es ist nur möglich, maximal 1 oder 2 Ebenen zu setzen.

- **Übertragen Sie alle Ereignisse** : Aktivieren Sie das Kontrollkästchen, um alle Jeedom-Befehlsereignisse auf MQTT zu senden.

- **Beitragsvorlage** : Formatierung der Veröffentlichung von Jeedom-Events * (mögliche Tags : ``#value#`, `#humanName#`, `#unit#`, `#name#`, `#type#`, `#subtype#``)*.

- **Abonnenten-Plugins** : Liste der Plug-ins, die das MQTT-Manager-Plug-in abonniert haben, in der Form „plugin(topic)“.

## Gerätekonfiguration

Es ist möglich, MQTT-Equipment direkt im Plugin zu erstellen.

Sie müssen das Wurzelthema des Geräts angeben *(„Testen“ zum Beispiel)*, dann nach Art der Befehle :

- **Info-Befehle** : Geben Sie einfach das vollständige Thema an.
  >Wenn Sie beispielsweise „toto/1“ eingeben, werden alle Nachrichten zum Thema „test/toto/1“ automatisch auf den betreffenden Befehl geschrieben. Das System kann Felder vom Typ json verwalten, in diesem Fall müssen Sie `toto/1/key1` oder `toto/1/key1/key2` eingeben, um eine Ebene nach unten zu gehen.

- **Aktionsbefehle** : Geben Sie einfach das Thema und die Nachricht an.
  >Wenn Sie beispielsweise „toto/2“ mit der Nachricht „plop“ eingeben, wird bei jedem Klick auf den Befehl die Nachricht „plop“ an das Thema „test/toto/2“ gesendet.

  >**INFORMATION**
  >
  >In Befehlen vom Aktionstyp können Sie die Tags ` verwenden#slider#`, `#color#`, `#message#` oder `#select#`, die beim Ausführen des Befehls automatisch durch ihren Wert ersetzt werden *(nach seiner Unterart)*. Wenn die Nachricht andererseits vom Typ „json“ ist, müssen Sie ihr das Präfix „json“ hinzufügen::``.

>**WICHTIG**
>
>Das `jeedom`-Topic ist reserviert (dies kann in der Konfiguration geändert werden), daher sollte nichts anderes als Befehle zum Ansteuern von jeedom darauf gesendet werden


# Jeedom über MQTT

Es ist möglich, Jeedom über MQTT zu steuern. Hier sind die verschiedenen möglichen Themen unter der Annahme, dass das Hauptthema „jeedom“ ist *(anzupassen, wenn Sie die Standardkonfiguration geändert haben)* :

- `jeedom / cmd / set /#cmd_id#`` : ermöglicht es Ihnen, den Befehl mit der ID ` auszuführen#cmd_id#`. Sie können die Parameter in der Nachricht beispielsweise je nach Untertyp des Befehls als `json`-Felder übergeben:
  - **Defekt** : keine Parameter.
  - **Mauszeiger** : `{Schieberegler : 50}`.
  - **Botschaft** : `{Titel : "Hallo "Nachricht : "Hallo, wie geht es dir ?"}``.
  - **Farbe** : `{Farbe : "#96c927"}``.
  - **Auflistung** : `{wählen : 1}`.
  - **Info-Befehle** : Sie können direkt einen Wert senden oder auch ein Aktualisierungsdatum angeben *(facultatif)* `{Wert : "Kuckuck", Datum/Uhrzeit : "2021-12-12 10:30:00" }`.

- `jeedom / cmd / get /#cmd_id#`` : Fordern Sie den Wert des Befehls mit der ID ` an#cmd_id#`. Jeedom gibt `jeedom/cmd/value/ zurück#cmd_id#`mit dem Befehlswert in der Nachricht.

- `jeedom / cmd / event /#cmd_id#`` : Ereignis auf Befehl mit der ID `#cmd_id#` mit einer `json`-Nachricht, die verschiedene Informationen enthält, einschließlich des Werts des Befehls.

# Deinstallieren Sie den Mosquitto-Broker

2 mögliche Optionen zum Deinstallieren des Mosquitto-Brokers, der lokal auf dem Computer vorhanden ist :

- **Broker unter Docker** : Verwenden Sie zuerst den Befehl **Löschen** `mqtt2_mosquitto` Ausrüstung aus dem Plugin **Docker-Verwaltung** *(Plugins > Programmierung > Docker-Verwaltung)*. Anschließend können Sie diese gesamte Ausstattung löschen.

- **Lokaler Makler** : Sie müssen dann die rote Taste verwenden **Moskito deinstallieren** von der allgemeinen Konfigurationsseite des Plugins.


# Selbstfindung)

Das Plugin kann verschiedene Arten von Modulen automatisch erkennen. Dazu müssen Sie nur die automatische Erkennung auf der Hauptseite des Plugins autorisieren und den Dämon neu starten.

>**WICHTIG**
>
>Für Module vom Typ Tasmota ist es absolut notwendig, dass die vollständige Topic-Konfiguration `%topic%/%prefix%/` ist

# FAQ

>**Nach einem Update der Systempakete (apt) oder einem unbeaufsichtigten Upgrade funktioniert nichts mehr**
>
>Durch das Aktualisieren des Mosquito-Pakets wird die Servicedatei auf die Standardeinstellungen zurückgesetzt, sodass Mosquito nicht mehr auf die richtige Konfigurationsdatei verweist. Um dies zu beheben, ist es sehr einfach, die Installation von Mosquito auf der Plugin-Konfigurationsseite neu zu starten.
