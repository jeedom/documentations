# Edisio ETS 200

**Das Modul**

![ets200.module](images/ets200/ets200.module.jpg)

**Das Jeedom Visual**

![ets200.vue defaut](images/ets200/ets200.vue-defaut.jpg)

## Zusammenfassung

In einem Raum platziert, steigt die gewünschte Raumtemperatur automatisch an. In Verbindung mit einem Empfänger vom Typ EMR-2000 oder EDR-B4 (4 Ausgänge) ist außerdem ein Thermostat angeschlossen, der von überall auf der Welt über das Internet gesteuert werden kann.

Das Signal wird erst gesendet, nachdem eine Temperaturdifferenz von 0,5 ° C oder 1 ° C oder alle 5 Minuten festgestellt wurde. Darüber hinaus ist der Sensor kompakt und diskret.

Die integrierte LED-Anzeige signalisiert jede Zustandsänderung.

## Fonctions

-   Batteriebetriebener drahtloser Temperatursensor
-   Hochkompakt
-   Signal wird sofort übertragen, wenn die Temperatur steigt oder fällt
-   Benutzerfreundlichkeit und Installation
-   Wandmontage mit Schrauben oder doppelseitig
-   Informationen zum Batteriestand

## Technische Eigenschaften

-   Modultyp : Edisio Sender
-   Verwenden : Drinnen
-   Essen : 3VDC (Lithiumbatterie ER14250)
-   Autonomie : Bis zu 3 Jahre
-   Frequenz : 868,3 MHz
-   Betriebstemperatur : 0 ° C + 45 ° C
-   Geltungsbereich im freien Feld : 100M
-   Maße : 25x79x19mm
-   Stärke des Schutzes : IP20

## Moduldaten

-   Kennzeichen : Edisio Smart Home
-   Familienname, Nachname : ETS-200

## Allgemeine Konfiguration

Informationen zum Konfigurieren des Edisio-Plugins und zum Zuordnen eines Moduls zu Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Damit Jeedom Ihre Sendermodule automatisch erstellt, vergessen Sie nicht, die Option in der Plugin-Konfiguration zu aktivieren.

> **Trinkgeld**
>
> Die Platzierung wird in einer Höhe von 150 cm und nahe der gewünschten Filztemperatur empfohlen.

### Taste "E"

Unterhalb der Schaltfläche "E" befindet sich die Zuordnungstaste des Temperatursensors.

![ets200.bouton e](images/ets200/ets200.bouton-e.jpg)

### Einstellen des Temperaturdeltas

Standardmäßig ist das Temperaturdelta auf 1 ° C (+/- 10%) programmiert, um die Batterielebensdauer zu optimieren. Sie haben die Möglichkeit, diesen Parameter anzupassen:

![ets200.delta](images/ets200/ets200.delta.jpg)

## Assoziation des Sensors mit Jeedom

Die Zuordnung des Temperatursensors ist ein Kinderspiel. Drücken Sie einfach die Taste "E" unter dem Sensor. Dies wird automatisch erkannt. Platzieren Sie es in einem Objekt, geben Sie ihm einen Namen und speichern Sie es.

![ets200.association](images/ets200/ets200.association.jpg)

Sobald Ihre zugehörige Ausrüstung, sollten Sie diese erhalten :

![ets200.general](images/ets200/ets200.general.jpg)

### Commandes

Sobald Ihre Ausrüstung erstellt wurde, sollten Sie die dem Modul zugeordneten Befehle erhalten :

![Aufträge](images/ets200/ets200.commandes.jpg)

Hier ist die Liste der Befehle :

-   Temperatur : Dies ist der Befehl, der die gemessene Temperatur angibt
-   Schlagzeug : Zeigt den Batteriestatus an

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, stehen verschiedene Informationen zur Verfügung :

![Aufträge](images/ets200/ets200.informations.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte zwischen Jeedom und dem Mikromodul aufgezeichnete Kommunikation an
-   Schlagzeug : Zeigt den Batteriestatus der Batteriemodule an
-   Status : Gibt den Status des Moduls zurück
