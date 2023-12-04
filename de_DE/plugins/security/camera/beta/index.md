# Kamera-Plugin

# Description

Plugin zum Erstellen und Verwalten von WLAN-Kameras (Anzeige und Aufzeichnung).

# Plugin Konfiguration

Nach der Installation des Plugins müssen Sie es nur noch aktivieren. Einige Parameter müssen in der Plugin-Konfiguration eingegeben werden :

-   **Pfad aufzeichnen** : Gibt den Pfad an, in dem Jeedom die von Ihren Kameras aufgenommenen Bilder speichern soll (es wird nicht empfohlen, sie zu berühren). Wenn sich Ihr Pfad nicht im Jeedom-Installationspfad befindet, können Sie die Erfassungen in Jeedom nicht anzeigen.
-   **Maximale Größe des Aufnahmeordners (MB)** : Gibt die maximale Größe an, die für den Ordner autorisiert ist, in dem die Fänge gespeichert sind (es wird nicht empfohlen, ihn zu berühren). Wenn diese Quote erreicht ist, löscht Jeedom die ältesten Fänge.
-   **Das Kamera-Plugin muss auf Interaktionen reagieren** : Schlüsselwörter / Phrasen, auf die das Plugin über Jeedom-Interaktionen reagiert.
-   **Platte** : Mit dieser Option können Sie das Bedienfeld anzeigen (Startmenü → Kamera) und alle Ihre Kameras anzeigen (siehe unten)). Vergessen Sie nicht, das Panel in der Konfiguration des Plugins zu aktivieren, um später darauf zugreifen zu können.

## Compatibilité

Sie finden [Hier](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=camera) die Liste der Module, die mit dem Plugin kompatibel sind

# Gerätekonfiguration

## Equipement

Hier haben Sie die wichtigsten Informationen Ihrer Kamera :

-   **Name der Kameraausrüstung** : Name Ihrer Kameraausrüstung.
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.
-   **Aktivieren** : macht Ihre Ausrüstung aktiv.
-   **Sichtbar** : macht es auf dem Dashboard sichtbar.
-   **IP** : die lokale IP-Adresse Ihrer Kamera.
-   **Hafen** : der Anschluss, an den die Kamera angeschlossen werden soll.
-   **Protokolle** : das Kommunikationsprotokoll Ihrer Kamera (http oder https).
-   **Benutzername** : Benutzername, um sich bei der Kamera anzumelden (falls erforderlich)). Bitte beachten Sie, dass das Plugin keine Sonderzeichen unterstützt (Sie müssen sich daher auf Zahlen, Klein- / Großbuchstaben beschränken).
-   **Passwort** : Passwort für die Verbindung zur Kamera (falls erforderlich)).Bitte beachten Sie, dass das Plugin für einige Kameras einen url_encode für den Benutzernamen und das Passwort erfordert, dies jedoch bei anderen zu Problemen führen kann. Wenn Sie ein Problem haben, versuchen Sie es ohne Sonderzeichen (beschränken Sie sich auf Zahlen, Klein-/Großbuchstaben).
-   **Snapshot-URL** : Kamera-Snapshot-URL. Ändern Sie je nach Kamera. Achten Sie darauf, dass Sie keine Flow-URL unter die Strafe des Absturzes von Jeedom stellen. Sie können die Tags \ hinzufügen#username\# und \#password\#, Diese werden bei Verwendung dieses Befehls automatisch durch den Benutzernamen und das Kennwort ersetzt.
-   **Feed-URL** : Typ Kamera Video Stream URL ``rtsp://#username#:#password#@#ip#:554/videoMain`` (Beispiel für Foscam-Kameras).
-   **RTSP-Stream-Stream** : Wenn Sie sich im Videostream-Modus befinden (Stream-URL ausgefüllt), können Sie die Kamera als Videostream anstelle von Frame für Frame sehen. Bitte beachten Sie, dass diese Option viele Ressourcen verbraucht und das erste Bild sehr schnell ankommt.
-   **Vorschau** : ermöglicht Ihnen zu sehen, ob jeedom den Videostream wiederherstellt (denken Sie daran, vor dem Testen zu speichern, um zu sehen, ob Ihre Änderungen funktionieren)
-   **Videostream-Option** : Wenn Sie sich im Video-Stream-Modus befinden (Stream-URL ausgefüllt), können Sie hier zusätzliche Parameter an ffmpeg und avconv übergeben (für Experten reserviert))
-   **Modell** : ermöglicht die Auswahl des Kameramodells. Achtung : Wenn Sie dies ändern, werden Ihre Konfigurationseinstellungen überschrieben.

ONVIF-Einstellungen :
-   **ONVIF-Port** : der für onvif verwendete Port
-   **Profil-Token** : Token, der zum Starten von Befehlen durch onvif verwendet wird
-   **X-, Y- und Z-Geschwindigkeiten** : PTZ-Bewegungsgeschwindigkeit (zwischen 0 und 1))
-   **Verzögerung vor Stoppbefehl (in ms))** : Zeit bis zum PTZ-Stoppbefehl

> **Notiz**
>
> Sie können finden [Hier](https://www.ispyconnect.com/cameras) Konfiguration für viele Kameras und daher in der Lage sein, Ihre Kamera selbst in Jeedom zu integrieren, wenn es nicht in der Liste ist

## Image

In diesem Teil können Sie die Bildqualität konfigurieren. In der Tat verringert Jeedom die Größe des Bildes oder der Komprimierung, bevor es an Ihren Browser gesendet wird. Dies verbessert die Fließfähigkeit der Bilder (weil sie heller sind). In diesem Teil können Sie auch die Anzahl der anzuzeigenden Bilder pro Sekunde konfigurieren. Alle Einstellungen sind in verfügbar : Handy / Desktop und Miniatur / Normal.

-   **Erfrischung (s)** : Verzögerung in Sekunden zwischen der Anzeige von 2 Bildern (hier können Sie Zahlen unter 1 eingeben).
-   **Kompression (%)** : Je niedriger es ist, desto weniger wird das Bild komprimiert. Bei 100% wird keine Komprimierung durchgeführt.
-   **Größe (% - 0 : automatique)** : Je höher der Prozentsatz, desto näher sind wir der Originalgröße des Bildes. Bei 100% findet keine Größenänderung des Bildes statt.

> **Notiz**
>
> Wenn Sie eine Komprimierung von 0% und eine Größe von 100% festlegen, berührt Jeedom das Bild im normalen Modus nicht. Dies gilt nicht im Miniaturmodus mit einer maximalen Bildgröße von 360 Pixel.

## Capture

-   **Maximale Dauer einer Aufnahme** : maximale Aufnahmedauer.
-   **Mach immer ein Video** : zwingt Jeedom, vor der Aufnahme immer Videoaufnahmen zu konvertieren.
-   **Anzahl der Bilder pro Sekunde des Videos** : Anzahl der Bilder pro Sekunde von Videos.
-   **Löschen Sie alle Kameraaufnahmen** : Löschen Sie alle Aufnahmen und Aufzeichnungen von der Kamera.

## Alimentation

-   **EIN-Befehl** : Steuerung der Kameraleistung.
-   **AUS-Befehl** : Steuerung zum Abschalten der Kamera.

## Commandes

-   **Identifikation** Befehl (Verwendung mit Befehlen vom Typ Info, um beispielsweise Kamerabewegungsinformationen über die API an Jeedom zu senden, siehe unten)
-   **Name** des Befehls mit der Möglichkeit, stattdessen ein Symbol einzufügen (um es zu löschen, müssen Sie auf das betreffende Symbol doppelklicken)
-   **Typ** und Befehlssubtyp
-   **Petition** an die Kamera senden, um eine Aktion auszuführen (in den Nachtmodus, ptz usw. wechseln).). Sie können die Tags \ verwenden#username\# und \#password\#, Diese werden bei Verwendung dieses Befehls automatisch durch den Benutzernamen und das Kennwort ersetzt
-   **Befehl stoppen** : Bei PTZ-Kameras gibt es häufig einen Befehl, der die Bewegung stoppt. Hier muss er angegeben werden
-   **Anzeige** : Ermöglicht die Anzeige der Reihenfolge oder nicht im Dashboard
-   **Erweiterte Konfiguration (kleine gekerbte Räder)** : Zeigt die erweiterte Konfiguration des Befehls an (Protokollierungsmethode, Widget usw.).)
-   Test : Wird zum Testen des Befehls verwendet
-   **Löschen (unterschreiben -)** : ermöglicht das Löschen des Befehls

# Das Widget

Wir finden hier das Bild der Kamera, die in der Konfiguration definierten Befehle, den Befehl zum Aufnehmen einer Aufnahme, den Befehl zum Starten mehrerer Bildaufnahmen und den Befehl zum Durchsuchen dieser Aufnahmen.

> **TIPP**
>
> Auf dem Dashboard und im Bedienfeld kann die Größe des Widgets geändert werden, um es an Ihre Anforderungen anzupassen.

Klicken Sie auf das Bild, um es in einem Fenster und in einem größeren Format anzuzeigen.

Wenn Sie auf den letzten Befehl klicken, um die Aufnahmen zu durchsuchen, werden diese angezeigt.

Hier finden Sie alle Fänge nach Tag und dann nach Datum, die Sie für jeden von ihnen können :

-   Sehen Sie es größer, indem Sie auf das Bild klicken
-   Laden Sie es herunter
-   lösche es

In Mobile ist das Widget etwas anders : Wenn Sie auf das Bild der Kamera klicken, wird dieses mit den möglichen Befehlen vergrößert.

# Die Paneele

Das Kamera-Plugin bietet auch ein Bedienfeld, mit dem Sie alle Ihre Kameras gleichzeitig sehen können. Der Zugriff erfolgt über Home → Kamera.

> **Notiz**
>
> Um es zu haben, müssen Sie es auf der Plugin-Konfigurationsseite aktivieren.

Es ist natürlich auch für Handys per Plugin → Kamera erhältlich.

# Speichern und Capture senden

Dieser etwas spezifische Befehl ermöglicht das Senden eines Captures nach dem Aufnehmen (kompatibel mit dem Slack-Plugin, Mail und Transfer)).

Die Konfiguration ist recht einfach. Sie rufen die Aktion des Sendens der Erfassung (&quot;Aufzeichnung&quot; genannt) in einem Szenario auf. Im Titelteil übergeben Sie die Optionen.

Standardmäßig geben Sie einfach die gewünschte Anzahl von Aufnahmen in das Feld "Anzahl der Aufnahmen oder Optionen" ein. Sie können jedoch weitere Optionen auswählen (siehe Details unten). Erweiterte Optionen für Aufnahmen"). Im Nachrichtenteil müssen Sie nur die Reihenfolge des Plugins (derzeit locker, E-Mail oder Übertragung) eingeben, das die Captures sendet. Sie können mehrere durch &amp;&amp; getrennte setzen.

## Erweiterte Aufnahmeoptionen

-   ``nbSnap`` : Anzahl der Aufnahmen, falls nicht angegeben, werden die Aufnahmen gemacht, bis Sie aufgefordert werden, die Aufnahme zu beenden oder die Kamera anzuhalten
-   ``delay`` : Verzögerung zwischen 2 Aufnahmen, wenn nicht angegeben, beträgt die Verzögerung 1s
-   ``wait`` : Wartezeit vor Fangbeginn, falls nicht anders angegeben, erfolgt kein Versand
-   ``sendPacket`` : Anzahl der Fänge, die das Senden eines Fangpakets auslösen. Wenn nicht angegeben, werden die Fänge erst am Ende gesendet
-   ``movie=1`` : Nach Abschluss der Aufnahme werden die Bilder in Videos konvertiert
-   ``sendFirstSnap=1`` : Senden Sie die erste Aufnahme der Aufnahme

> **Beispiele**
>
> nbSnap = 3 delay = 5 ==> 3 Aufnahmen im Abstand von 5 Sekunden senden (Senden über das Szenario ausgelöst) movie = 1 sendFirstSnap = 1 Video aufnehmen, bis der Befehl "Aufnahme beenden" in das Szenario eingefügt wird. Der Film wird auf Ihrem Jeedom gespeichert.

# Senden Sie die Bewegungserkennung an Jeedom

Wenn Sie eine Kamera mit Bewegungserkennung haben und diese an Jeedom senden möchten, ist dies die URL, die Sie auf Ihre Kamera setzen müssen :

``https://#IP_JEEDOM#/core/api/jeeApi.php?apikey=#APIKEY_CAMERA#&plugin=camera&type=event&id=#CMD_ID#&value=#VALUE#``

Natürlich vor dem Erstellen eines Info-Befehls auf Ihrer Kamera

# FAQ

>**Wo sind die Aufzeichnungen? ?**
>
>Die Datensätze werden standardmäßig in Plugins / camera / data / records / gefunden*ID\_CAM*, Seien Sie vorsichtig, dies kann variieren, wenn Sie Jeedom gebeten haben, sie an anderer Stelle zu speichern.

>**Abhängigkeiten lassen sich nicht nieder ?**
>
>In ssh oder in der Administration -&gt; OS / DB -&gt; System tun : ``dpkg --configure -a``.

>**Unter welchen Bedingungen muss meine Kamera Jeedom-kompatibel sein (sofern sie nicht in der Kompatibilitätsliste enthalten ist?) ?**
>
> Die einzige Bedingung ist, dass die Kamera eine URL hat, die ein Bild zurücksendet (also ein Bild, kein Videostream).
