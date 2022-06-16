# Ediso ETS 200

**Das Modul**

![ets200.module](images/ets200/ets200.module.jpg)

**Das Jeedom-Visual**

![ets200.vue defaut](images/ets200/ets200.vue-defaut.jpg)

## Zusammenfassung

In einem Raum platziert, steigt die gewünschte Raumtemperatur automatisch an. Darüber hinaus haben Sie in Verbindung mit einem Empfänger vom Typ EMR-2000 oder EDR-B4 (4 Ausgänge) einen Thermostat, der von überall auf der Welt über das Internet angeschlossen und gesteuert werden kann.

Das Signal wird erst nach Erkennen einer Temperaturdifferenz von 0,5°C oder 1°C oder alle 5 Minuten gesendet. Außerdem ist der Sensor kompakt und diskret.

Die integrierte LED-Anzeige signalisiert jede Statusänderung.

## Fonctions

-   Batteriebetriebener drahtloser Temperatursensor
-   Hochkompakt
-   Sofortiges Signal bei Temperaturanstieg oder -abfall
-   Benutzerfreundlichkeit und Installation
-   Wandmontage durch Schrauben oder beidseitig
-   Informationen zum Batteriestand

## Technische Eigenschaften

-   Mod-Typ : Edisio-Sender
-   Verwenden : Drinnen
-   Einspeisung : 3VDC (Lithiumbatterie ER14250)
-   Autonomie : Bis zu 3 Jahre
-   Frequenz : 868,3MHz
-   Betriebstemperatur : 0 °C +45 °C
-   Reichweite in offenen Feldern : 100M
-   Maße : 25 x 79 x 19 mm
-   Stärke des Schutzes : IP20

## Moduldaten

-   Markieren : Edisio Smart Home
-   Nachname : ETS-200

## Allgemeine Einrichtung

Informationen zum Konfigurieren des Edisio-Plug-ins und zum Zuordnen eines Moduls zu Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Damit Jeedom Ihre Sendermodule automatisch erstellt, vergessen Sie nicht, die Option in der Plugin-Konfiguration zu aktivieren.

> **Tipp**
>
> Die Platzierung wird in einer Höhe von 150 cm und in der Nähe der gewünschten gefühlten Temperatur empfohlen.

### "E"-Taste"

Unten finden Sie die Taste „E“, die die Zuordnungstaste des Temperatursensors ist.

![ets200.bouton e](images/ets200/ets200.bouton-e.jpg)

### Einstellen des Temperaturdeltas

Standardmäßig ist das Temperaturdelta auf 1 °C (+/-10 %) programmiert, um die Batterielebensdauer zu optimieren. Sie haben die Möglichkeit, diesen Parameter anzupassen:

![ets200.delta](images/ets200/ets200.delta.jpg)

## Assoziation des Sensors mit Jeedom

Die Zuordnung des Temperatursensors ist kinderleicht. Drücken Sie einfach die Taste „E“, die sich unter dem Sensor befindet. Dies wird automatisch erkannt. Platzieren Sie es in einem Objekt, geben Sie ihm einen Namen und speichern Sie es.

![ets200.association](images/ets200/ets200.association.jpg)

Sobald Ihre Ausrüstung verknüpft ist, sollten Sie diese erhalten :

![ets200.general](images/ets200/ets200.general.jpg)

### Commandes

Sobald Ihre Ausrüstung erstellt ist, sollten Sie die mit dem Modul verknüpften Befehle erhalten :

![Aufträge](images/ets200/ets200.commandes.jpg)

Hier ist die Liste der Befehle :

-   Temperatur : Dies ist der Befehl, der die gelesene Temperatur anzeigt
-   Batterie : Zeigt den Batteriestatus an

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, sind verschiedene Informationen verfügbar :

![Aufträge](images/ets200/ets200.informations.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte aufgezeichnete Kommunikation zwischen Jeedom und dem Mikromodul an
-   Batterie : Zeigt den Batteriestatus der Batteriemodule an
-   Status : Gibt den Status des Moduls zurück
