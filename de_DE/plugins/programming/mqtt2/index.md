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

Um mit der Konfiguration des Plugins zu beginnen, muss aus den drei möglichen Optionen der Verbindungsmodus zum Broker ausgewählt werden :

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
  > Im lokalen Modus ist die Authentifizierung obligatorisch. Nach dem Hinzufügen muss Jeedom neu gestartet werden, damit dies wirksam wird.

- **Jeedom-Wurzelthema** : Stammsubjekt, um einen Befehl an Jeedom zu senden oder an den es Ereignisse zurückgibt. Achtung, es ist nur möglich, maximal 1 oder 2 Ebenen zu setzen.

- **Übertragen Sie alle Ereignisse** : Aktivieren Sie das Kontrollkästchen, um alle Jeedom-Befehlsereignisse auf MQTT zu senden.

- **Beitragsvorlage** : Formatierung der Veröffentlichung von Jeedom-Events * (mögliche Tags : ``#value#`, `#humanName#`, `#unit#`, `#name#`, `#type#`, `#subtype#``)*.

- **Abonnenten-Plugins** : Liste der Plug-ins, die das MQTT-Manager-Plug-in abonniert haben, in der Form „plugin(topic)“.

## Gerätekonfiguration

Es ist möglich, MQTT-Equipment direkt im Plugin zu erstellen.

Sie müssen das Wurzelthema des Geräts angeben *(„Testen“ zum Beispiel)*, Achten Sie darauf, dass das Stammthema je nach Befehlstyp nicht mehr als zwei Ebenen haben kann (exe „Ebene1/Ebene2“) :

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

Das Plugin kann verschiedene Modultypen automatisch erkennen. Dazu müssen Sie nur die automatische Erkennung auf der Hauptseite des Plugins autorisieren und den Dämon neu starten.

>**WICHTIG**
>
>Für Module vom Typ Tasmota ist es absolut notwendig, dass die vollständige Topic-Konfiguration `%topic%/%prefix%/` ist


# Übertragen Sie Informationen zwischen zwei Jeedoms per MQTT

Dank des Plugins ist es möglich, Befehle zwischen zwei Jeedom zu übertragen (dieses System soll Jeelink ersetzen). Hier erfahren Sie, wie Sie es konfigurieren : 

- **Auf der Jeedom-Quelle, die Sie benötigen** :
  - Konfigurieren Sie in der Konfiguration des MQTT-Manager-Plugins das Feld „Jeedom-Stammthema“. Standardmäßig ist es Jeedom. Es wird empfohlen, einen eindeutigen Wert pro Jeedom einzugeben (z. B : jeedom_salon)
  - Dann können Sie entweder das Kontrollkästchen „Alle Ereignisse übertragen“ aktivieren (immer noch in der Konfiguration des MQTT-Manager-Plugins). Dies wird nicht unbedingt empfohlen, da dadurch die gesamte Ausrüstung an den Ziel-Jeedom gesendet wird. Am besten gehen Sie zu dem Gerät, das Sie übertragen möchten, in der erweiterten Konfiguration des Geräts (Schaltfläche oben rechts auf der Gerätekonfigurationsseite) und setzen Sie dann unter „Zusätzliche Informationen“ den Haken bei „MQTT-Gerät übertragen“"
- **Auf dem Ziel Jeedom ist es notwendig** : 
  - Ohne das MQTT-Manager-Plugin zu konfigurieren, konfigurieren Sie das Feld „Linked Jeedom Topic“, indem Sie den Wert „Jeedom Root Topic“ des Quell-Jeedoms festlegen. Sie können mehrere Jeedom-Quellen angeben, indem Sie sie mit trennen ,. Seien Sie vorsichtig, hier müssen Sie sehr vorsichtig sein, Sie sollten auf keinen Fall dasselbe für „Jeedom-Root-Thema“ auf Jeedoms haben. Dieses Feld ist die eindeutige Kennung des Jeedoms, daher ist es unbedingt erforderlich, unterschiedliche Werte zu haben.
  - Aktivieren Sie im Plugin -> Programmierung -> Mqtt-Manager die automatische Erkennung (standardmäßig inaktiv))

Dann müssen Sie nur noch in der Plugin-Konfiguration zum Jeedom zurückkehren und „Erkennung senden“ ausführen"

>**WICHTIG**
>
>Bei dieser Konfiguration wird davon ausgegangen, dass die Jeedoms mit derselben Brocker-Mücke verbunden sind. Sollte Ihnen dies nicht möglich sein, müssen Sie anschließend einen der beiden Mosquitos so konfigurieren, dass er die Werte der gewünschten Themen an einen anderen Mosquito sendet (siehe nächstes Kapitel))

>**WICHTIG**
>
>Wenn Sie den Wert des Felds „Veröffentlichungsvorlage“ (standardmäßig leer) ändern, erstellt die automatische Erkennung nicht die richtigen Bestellungen. In diesem Fall müssen Sie die Konfiguration anpassen


# Verknüpft zwei verschiedene Mücken 

Es ist möglich, Themen zwischen mehreren Moskitos zu verknüpfen. Hier ist die Konfiguration zum Hinzufügen in Moskitos. Die Konfiguration muss nur an einem der Brocker-Mücken vorgenommen werden :

````````
connection #NOM_CONNEXION#
address #REMOTE_ADDRESS#:#REMOTE_PORT#
topic # both 0 #LOCAL_TOPIC#/ #REMOTE_TOPIC#/
cleansession true
notifications false
remote_clientid #REMOTE_CLIENT_ID#
remote_username #REMOTE_USERNAME#
remote_password #REMOTE_PASSWORD#
local_username #LOCAL_USERNAME#
local_password #LOCAL_PASSWORD#
start_type automatic
try_private true
bridge_insecure true
bridge_tls_version tlsv1.3
````````

Beispiel: Sie möchten Geräte von jeedom_2 an jeedom_1 senden, indem Sie haben : 
- jeedom_1 : 
  - IP : 192.168.1.45
  - Wurzelthema : jeedom_1
  - verwandtes Thema : jeedom_2
  - Authentifizierung : jeedom:password_1
- jeedom_2
  - Wurzelthema : jeedom_1
  - Authentifizierung : jeedom:password_2

Hier ist die Konfiguration, die in jeedom_2 (Mosquito-Parameter) hinzugefügt werden muss) : 

````````
connection jeedom_1
address 192.168.1.45:1883
topic # both 0 jeedom_2/ jeedom_2/
cleansession true
notifications false
remote_clientid jeedom_2
remote_username jeedom
remote_password password_1
local_username jeedom
local_password password_2
start_type automatic
try_private true
bridge_insecure true
bridge_tls_version tlsv1.3
````````

>**NOTIZ**
>
> - ``#NOM_CONNEXION#`` : kann alles sein, was du willst, und es spielt keine Rolle. Sie können zum Beispiel „name_jeedom_source-name_jeedom_target“ ausführen
> - ``#REMOTE_CLIENT_ID#`` : spielt auch keine Rolle, Sie müssen nur eine eindeutige Zeichenfolge einfügen
> - ``#LOCAL_TOPIC#`` : Der Name des lokalen Themas lautet häufig „Jeedom-Stammthema“ des lokalen Jeedoms
> - ``#REMOTE_TOPIC#`` : Der Name des lokalen Themas ist häufig das „Jeedom-Stammthema“ des entfernten Jeedoms

>**WICHTIG**
>
> In jeedom sind die Identifikatoren („Benutzername“ und „Passwort“) auf der Plugin-Konfigurationsseite unter „Authentifizierung“ in der Form „Benutzername“ verfügbar:``password``

# FAQ

>**Nach einem Update der Systempakete (apt) oder einem unbeaufsichtigten Upgrade funktioniert nichts mehr**
>
>Durch das Aktualisieren des Mosquito-Pakets wird die Servicedatei auf die Standardeinstellungen zurückgesetzt, sodass Mosquito nicht mehr auf die richtige Konfigurationsdatei verweist. Um dies zu beheben, ist es sehr einfach, die Installation von Mosquito auf der Plugin-Konfigurationsseite neu zu starten.
