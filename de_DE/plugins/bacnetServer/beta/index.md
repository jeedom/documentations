# BacnetServer

#Description

Mit dem Bacnet-Plugin können Sie eine Bacnet-Ausrüstung Ihres Jeedom erstellen, die im Netzwerk angezeigt wird



# Plugin-Setup

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es wie jedes Jeedom-Plugin zuerst aktivieren :

![config](./images/BacnetServerConfig.png)

Dann müssen Sie die Installation der Abhängigkeiten starten (auch wenn sie OK erscheinen) :

![dependances](./images/BacnetServerDep.png)

Starten Sie abschließend den Daemon :

![demon](./images/BacneServerDemon.png)


Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](./images/BacnetServerConfig.png)


Auf derselben Registerkarte müssen Sie den Cron-Wert zum Aktualisieren Ihrer Ausrüstung auswählen.




# Wie das Plugin funktioniert ?




>**WICHTIG**
>
>Ihr BACNET-Gerät muss sich im selben Netzwerk wie Ihr Jeedom befinden, um von ihm erkannt zu werden.


Standardmäßig wird ein jeeBacnetServer-Gerät erstellt; Es ist dieses „Bacnet“-Gerät, das von Ihrem Bacnet-Supervisor im Netzwerk gesehen wird

Sie können seine Geräte-ID in der Plugin-Konfiguration konfigurieren

![menu](./images/BacnetServerConfig.png)


Um Jeedom-Befehle zu Ihrem jeeBacnetServer hinzuzufügen, klicken Sie auf Befehle zum Server hinzufügen :

![accueil](./images/BacnetServerAccueil.png)


Es öffnet sich ein Modal, in dem alle Info-Typ-Befehle erscheinen, die in den verschiedenen Plugins Ihres Jeedoms vorhanden sind.


>**WICHTIG**
>
>Ihre Ausrüstung muss aktiv sein, damit Befehle auf diesem Modal erkannt werden.



Alles, was Sie tun müssen, ist, nach den gewünschten zu suchen und zu validieren.


![accueil](./images/BacnetServerModale.png)


Das Bacnet-Gerät mit der von Ihnen gewählten Instanz-ID wird erstellt und in Ihrem Netzwerk angezeigt.


Um die Werte zu aktualisieren, müssen Sie den Cron in der Plugin-Konfiguration konfigurieren.

![accueil](./images/BacnetServerConfig.png)



Um Befehle vom Server zu löschen, müssen Sie zu den Befehlen des Geräts gehen und einfach die gewünschten löschen und dann speichern.




Sie können das Gerät sowie seine Bacnet-Punkte auch aus dem Netzwerk löschen, indem Sie auf Delete the jeeBacnetServer klicken.


![accueil](./images/BacnetServerReinit.png)




# Bestellungen einrichten :


Um die Einheit der Bacnet-Punkte zu ändern und sie im Netzwerk erscheinen zu sehen, müssen Sie die Einheit in das dafür vorgesehene Feld auf den Bestellungen eingeben.

Im bacnet-Netzwerk übernehmen die Instanzen der Punkte die IDs der ursprünglichen Bestellungen

Wenn Sie einen Befehl mit der ID 5320 auswählen, wird ein Alias für diesen Befehl im jeeBacnetServer vom Typ (Namecommand_jeeBacnet) : 
in Ihrem Netzwerk, wird es in Ihrem Bacnet-Gerät wie folgt angezeigt : InitialCommandName(Analog_Input:5320)



Eine Nachkalkulationsfunktion ist ebenfalls vorhanden : 
Wenn Sie sich dafür entscheiden, diesen postCalcul auszufüllen, hat der in das DeviceBacnet eingegebene Wert den Anfangswert angenommen, der mit der Berechnung hochgeladen werden soll 

Die verschiedenen Möglichkeiten : 

/, -, *, +

Beispiel :

![accueil](./images/BacnetServerPostCalcul.png)





>**WICHTIG**
>
>Die Einheiten müssen den Bacnet-Standards entsprechen, sonst erscheint ein Fehler auf dem Plugin.
Hier finden Sie die Liste der möglichen zu konfigurierenden Einheiten :

https://store.chipkin.com/articles/bacnet-engineering-units-enumerations-




# Importieren/Exportieren Sie den jeeBacnetServer :


![accueil](./images/BacnetServerAccueil.png)

Um Bedarf zu vermeiden, stehen 2 Optionen zur Verfügung : 


- Gerät exportieren :

Durch Klicken auf diese Schaltfläche wird eine JSON-Datei heruntergeladen, die die Konfiguration des Geräts sowie seine Befehle enthält.


- Gerät importieren :

Durch Klicken auf diese Schaltfläche können Sie die jeeBacnetServer-Konfigurations-json-Datei importieren, die Sie heruntergeladen hätten, um die darin konfigurierten Befehle zu verwenden