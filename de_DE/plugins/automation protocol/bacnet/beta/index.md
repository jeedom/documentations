# Bacnet

#Description

Mit dem Bacnet-Plugin können Sie Informationen von Ihrem Bacnet / IP-Gerät abrufen und von Ihrem Jeedom aus damit interagieren.



# Plugin-Konfiguration

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es zuerst aktivieren, wie jedes Jeedom-Plugin :

![config](../images/BacnetConfig.png)

Dann müssen Sie die Installation der Abhängigkeiten starten (auch wenn sie OK erscheinen) :

![dependances](../images/BacnetDep.png)

Schließlich müssen wir den Dämon starten :

![demon](../images/BacnetDemon.png)


Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/BacnetSocket.png)


Auf derselben Registerkarte müssen Sie den Cron-Wert zum Aktualisieren Ihrer Ausrüstung auswählen.




# So deklarieren Sie ein neues Bacnet-Gerät in Jeedom




>**WICHTIG**
>
>Ihr BACNET-Gerät muss sich im selben Netzwerk wie Ihr Jeedom befinden, um von diesem erkannt zu werden.


Rendez-vous dans le menu « Plugins → Energie → Bacnet » :

![menu](../images/BacnetMenu.png)


Sie gelangen auf die nächste Seite:

![accueil](../images/BacnetAccueil.png)


Vous devez donc cliquer sur l'option « Nouvel équipement / Création commandes » :

Ein automatischer Scan Ihres Netzwerks wird gestartet, um die darin vorhandenen Bacnet-Geräte zu erkennen.
Es kann ungefähr zwanzig Sekunden dauern.

Nach dem Scan wird eine Tabelle mit allen Ein-/Ausgängen Ihrer Geräte angezeigt.

Das Tabellenmenü, in dem Sie nach Spalten suchen können :

![indextab](../images/BacnetIndexTab.png)


Ein Beispiel für die Erkennung von Bacnet-Geräten :

![tableau](../images/BacnetTableau.png)

Je nach Gerätehersteller sind einige Werte nicht verfügbar; 

Sie müssen lediglich die zu erstellenden Aufträge auswählen, indem Sie eine der Optionen nach Ihrer Wahl aktivieren (Befehlstyp Info oder Typ Aktion):

![check](../images/BacnetCheck.png)


Bestätigen Sie, aktualisieren Sie die Seite und die entsprechende Ausrüstung wurde in Ihrem Jeedom erstellt. Standardmäßig wird es mit der vom Hersteller bereitgestellten DeviceID Ihres Bacnet-Geräts benannt (Sie können es umbenennen )

![equip](../images/BacnetEquip.png)

 Cliquez ensuite sur votre équipement créé, puis cocher « Activer » et « Visible » pour le voir apparaitre sur votre dashboard.

Um später Befehle zu einem vorhandenen Gerät hinzuzufügen, müssen Sie den vorherigen Vorgang wiederholen : « Nouvel équipement / Création commandes » , et sélectionnez les commandes que vous désirez.



# Die Bestellungen


Rendez-vous dans l'onglet « Commandes » de la page de configuration du nouvel équipement Bacnet.

Ici vous pouvez masquer et rendre visibles les différentes commandes de type « action » et « info » disponibles (les commandes de type « info » peuvent également être historisées) :

![cmdVisible](../images/BacnetVisible.png)

Alle erstellten Geräte haben standardmäßig 2 Befehle commands : une commande info « Connexion Bacnet » et une commande action « Refresh » , qui serviront à voir l'état de la connexion Bacnet sur votre dashboard, et à rafraichir les valeurs de vos commandes.

![cmdBase](../images/BacnetCmdBase.png)





>**WICHTIG**
>
>Zum Schreiben: Aus Sicherheitsgründen bietet das Bacnet-Protokoll standardmäßig ein Schreibsystem mit Prioritätsstufen für die Ein-/Ausgänge seiner Geräte.
Es gibt 16 Prioritätsstufen (die niedrigste hat Vorrang vor allen anderen)). Ihr Gerät kann so programmiert werden, dass die in diesem Plugin entwickelte Schreibfunktion standardmäßig keinen Vorrang vor der logischen Programmierung des Geräts / Systems hat.
Für Ausgabetyp I / O ist das Plugin mit Schreibpriorität 8 konfiguriert (Manual Operator).
Mehr Infos zum Thema :

https://store.chipkin.com/articles/bacnet-why-doesnt-the-present-value-change

Für einen Schreibvorgang auf einem Bacnet-Gerät erweitern wir auf den PresentValue des entsprechenden Ein-/Ausgangs.
Sie sollten wissen, dass die PresentValues der Ein-/Ausgänge Typ: Analogausgang, Binärausgang und Multistate-Ausgang sind immer steuerbar.
Die Ein-/Ausgänge von AnalogValue, BinaryValue oder MultistateValue können bestellt werden, wenn der Hersteller diese Funktion implementiert hat. Es liegt im alleinigen Ermessen des Herstellers. Bitte schauen Sie in Ihrer Gerätedokumentation nach, um mehr darüber zu erfahren.




Beim Erstellen der ausgewählten Schreibaufträge wird auch ein zugehöriger Aktionsauftrag erstellt, der standardmäßig nicht auf dem Dashboard sichtbar ist.
Durch Anklicken wird die Schreibprioritätstabelle eines Ein-/Ausgangs auf den Standard zurückgesetzt. 
Es hat einen Namen mit << resetPrioritesEcriture >>
Um diesen Befehl auf Ihrem Dashboard sichtbar zu machen, gehen Sie zu den Befehlen Ihres Geräts und aktivieren Sie das "Zeigen""
