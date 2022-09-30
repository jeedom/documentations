# Broadlink

Plugin zur Anbindung an Broadlink-Geräte

# Plugin Konfiguration

Nach der Installation des Plugins muss es aktiviert werden und die korrekte Installation von Abhängigkeiten sicherstellen.

> **Wichtig**
>
> Es wird nicht empfohlen, den Port zu ändern

# Einbeziehung der Ausrüstung

Gehen Sie zum Plugins-Menü => Hausautomatisierungsprotokoll => Broadlink. Sobald Sie auf der Seite sind, klicken Sie auf INCLUSION MODE. Logischerweise werden alle Broadlink-Produkte in Ihrem Netzwerk erkannt.

# Gerätekonfiguration

Wählen Sie eines Ihrer Geräte aus. Wenn es sich um Infrarotprodukte handelt, wird oben eine Befehlsschaltfläche „Lernen“ angezeigt. Klicken Sie einfach darauf, dann haben Sie 5 Sekunden Zeit, um einen Infrarotbefehl oder 433 zu Ihrem Broadlink zu lernen. Anschließend bestätigt das Plugin den Erfolg der Operation und erstellt den zugehörigen Befehl, den Sie nur noch benennen müssen.

> **Spitze**
>
> Um nicht zu lernen, was aus der Umgebung kommen könnte (Fernbedienung von einem Nachbarn oder anderem), versetzt sich der Broadlink im Lernmodus FREIWILLIG in einen sehr niedrigen Empfangspegel, Sie müssen sich daher SEHR nahe am Broadlink befinden, um einen Befehl zu lernen, insbesondere wenn Es ist ein 433-MHz-Befehl.

# Synchroniser

Auf der Registerkarte Befehle einer Ausrüstung finden Sie die Schaltfläche Synchronisieren. Wenn Sie mehrere Broadlinks haben, können Sie die von einem Broadlink gelernten Befehle auf einen anderen übertragen.

> **Spitze**
>
> Es funktioniert von einem RM-Pro zu einem Mini oder umgekehrt.

Sie können die zu übertragenden Aufträge sowie die Broadlinks auswählen, an die Sie sie übertragen möchten. (Der Name des Befehls wird natürlich umgewandelt (TV ON, Fan off, etc.)

> **Spitze**
>
> Wenn Sie Ihr Gerät manuell hinzugefügt haben, weil es nicht automatisch erkannt wurde. Die einzugebende MAC ist die umgekehrte MAC-Adresse in Zweierpaketen in Kleinbuchstaben ohne die : Beispiel AA:BB:CC:DD:EE wird zu eeddccbbaa
