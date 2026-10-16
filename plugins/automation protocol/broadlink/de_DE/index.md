# Broadlink-Plugin

Plugin zur Anbindung von Jeedom an Broadlink-Geräte.

# Plugin Konfiguration

Nachdem Sie das Plugin installiert haben, müssen Sie es aktivieren und sicherstellen, dass die Abhängigkeiten korrekt installiert sind.

>**WICHTIG**
>
>Es wird davon abgeraten, den internen Socket-Port zu ändern.

# Einbeziehung der Ausrüstung

Gehen Sie zum Menü „Plugins“ => „Hausautomationsprotokoll“ => „Broadlink“. Klicken Sie auf der Seite auf die Schaltfläche „INCLUSION“. Logischerweise werden alle Broadlink-Produkte in Ihrem Netzwerk erkannt.

# Gerätekonfiguration

Wählen Sie eines Ihrer Geräte aus. Bei Infrarot-Geräten erscheint oben die Schaltfläche „Befehl einlernen“. Klicken Sie einfach darauf – Sie haben dann 5 Sekunden Zeit, um Ihrem Broadlink einen Infrarot- oder 433-Befehl beizubringen. Anschließend bestätigt das Plugin den erfolgreichen Abschluss des Vorgangs und erstellt den entsprechenden Befehl, den Sie nur noch benennen müssen.

>**INFORMATION**
>
>Um zu vermeiden, dass das Gerät Signale aus der Umgebung *(z. B. die Fernbedienung eines Nachbarn oder Ähnliches)* einlernt, stellt sich der Broadlink im Lernmodus ABSICHTLICH auf eine sehr niedrige Empfangsempfindlichkeit ein. Man muss sich daher SEHR nah am Broadlink befinden, um einen Befehl einzulernen, insbesondere wenn es sich um einen 433-MHz-Befehl handelt.

# Synchronize

Auf der Registerkarte „Befehle“ eines Geräts finden Sie die Schaltfläche „Synchronisieren“. Wenn Sie mehrere Broadlink-Geräte besitzen, können Sie die gelernten Befehle von einem Broadlink-Gerät auf ein anderes übertragen.

>**INFORMATION**
>
>Das funktioniert von einem RM-Pro zu einem Mini oder umgekehrt.

Sie können auswählen, welche Befehle übertragen werden sollen und an welche Broadlink-Geräte Sie diese übertragen möchten. (Der Name des Befehls bleibt dabei natürlich erhalten (Fernseher einschalten, Ventilator ausschalten usw.)

>**INFORMATION**
>
>Wenn Sie Ihr Gerät manuell hinzufügen, weil es nicht automatisch erkannt wurde, müssen Sie die MAC-Adresse in umgekehrter Reihenfolge in Kleinbuchstaben und ohne Doppelpunkte angeben *(Beispiel: AA:BB:CC:DD:EE wird zu eeddccbbaa)*.

# Häufig gestellte Fragen

## Erfassung von Funkbefehlen

(Stand: Mai 2021)

So speichern Sie RF-Befehle mit der Broadlink-App und dem Broadlink-Jeedom-Plugin:

Installieren Sie die offizielle Broadlink-App und fügen Sie anschließend Ihr Broadlink-Gateway hinzu (ich habe gelesen, dass man den Vorgang beenden sollte, sobald das Gateway zum WLAN-Netzwerk hinzugefügt wurde, und auf keinen Fall weitermachen sollte – meine Methode funktioniert jedoch, wenn man den Vorgang bis zum Ende durchführt!). Anschließend können Sie Ihre Geräte hinzufügen, um sie mit der App zu testen.

Bevor Sie zum Jeedom-Plugin wechseln, müssen Sie die Nutzung des Gateways in der App freischalten. Ich habe nämlich ziemlich lange gebraucht, um das herauszufinden – es war unmöglich, dem Plugin die RF-Befehle beizubringen… Wählen Sie in der App Ihr Gateway aus, tippen Sie dann oben rechts auf „…“ und deaktivieren Sie „Gerät sperren“. So können Sie die App und das Plugin gleichzeitig nutzen.

Im Plugin erfolgt das Hinzufügen des Gateways über die Schaltfläche „Inclusion-Modus“ (siehe Plugin-Dokumentation für die Registerkarte „Geräte“). Registerkarte „Befehle“: Sie können auf „Erweiterten RF-Befehl lernen“ klicken, um zu überprüfen, ob die LED des Gateways tatsächlich rot leuchtet, das Einlernen funktioniert jedoch nicht.

So geht’s:

- Zuerst den Lernvorgang über die App starten
- Geräte auswählen
- Tippen Sie oben rechts auf „…“ und wählen Sie anschließend „Tasten neu einlernen“
- Tippen Sie auf „Start Learning“ und anschließend auf „Learn Simple RF Code“
- Drücken Sie die Taste, die neu programmiert werden soll, und anschließend „OK“.
- Geben Sie die Frequenz der Fernbedienung ein (bei mir 433,92)
- Sie haben 30 Sekunden Zeit, um auf „Erweiterte RF-Befehlsfunktion lernen“ (Jeedom-Plugin) zu klicken und anschließend die Taste auf der Fernbedienung zu drücken (mehrmals, bis die Erkennung erfolgt).
- Erkennung in der App bestätigen

Normalerweise sollte nun ein neuer Befehl in Jeedom erschienen sein (es funktioniert nicht unbedingt auf Anhieb, aber halten Sie sich bitte ohne Eile an diese Reihenfolge).
Achtung: Wenn Sie den Befehl umbenennen, müssen Sie die letzten 10 Zeichen beibehalten, die auch im Befehl enthalten sind, da der Befehl sonst nicht funktioniert. (Je nach Version)

Denken Sie daran, eine Sicherungskopie zu erstellen!
