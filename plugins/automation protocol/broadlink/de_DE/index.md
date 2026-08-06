# Broadlink-Plugin

Plugin zur Verbindung von Jeedom mit Broadlink-Geräten.

# Plugin Konfiguration

Nach der Installation des Plugins muss es aktiviert werden und die korrekte Installation von Abhängigkeiten sicherstellen.

>**Wichtig**
>
>Es wird nicht empfohlen, den internen Socket-Port zu ändern.

# Einbeziehung der Ausrüstung

Gehen Sie zum Plugins-Menü => Hausautomatisierungsprotokoll => Broadlink. Klicken Sie auf der Seite auf die Schaltfläche INCLUDE. Logischerweise werden alle Broadlink-Produkte in Ihrem Netzwerk erkannt.

# Gerätekonfiguration

Wählen Sie eines Ihrer Geräte aus. Wenn es sich um Infrarotprodukte handelt, wird oben eine Befehlsschaltfläche „Lernen“ angezeigt. Klicken Sie einfach darauf, dann haben Sie 5 Sekunden Zeit, um einen Infrarotbefehl oder 433 zu Ihrem Broadlink zu lernen. Anschließend bestätigt das Plugin den Erfolg der Operation und erstellt den zugehörigen Befehl, den Sie nur noch benennen müssen.

>**INFORMATION**
>
>Um nicht zu lernen, was aus der Umgebung kommen könnte *(Fernbedienung von einem Nachbarn oder anderen)*, Der Broadlink im Lernmodus geht FREIWILLIG auf einen sehr niedrigen Empfangspegel, daher müssen Sie SEHR nahe am Broadlink sein, um einen Befehl zu lernen, insbesondere wenn es sich um einen 433-MHz-Befehl handelt.

# Synchroniser

Auf der Registerkarte Befehle einer Ausrüstung finden Sie die Schaltfläche Synchronisieren. Wenn Sie mehrere Broadlinks haben, können Sie die von einem Broadlink gelernten Befehle auf einen anderen übertragen.

>**INFORMATION**
>
>Es funktioniert von einem RM-Pro zu einem Mini oder umgekehrt.

Sie können die zu übertragenden Aufträge sowie die Broadlinks auswählen, an die Sie sie übertragen möchten. (Der Name des Befehls wird natürlich umgewandelt (TV ON, Fan off, etc.)

>**INFORMATION**
>
>Wenn Sie Ihr Gerät manuell hinzufügen, weil es nicht automatisch erkannt wird. Die einzugebende MAC-Adresse ist die umgekehrte MAC-Adresse pro Zweierpaket in Kleinbuchstaben ohne Doppelpunkte *(Beispiel AA:BB:CC:DD:EE wird zu eeddccbbaa)*.
