# Edisio EMS 200

**Das Modul**

![ems200.module](images/ems200/ems200.module.jpg)

## Zusammenfassung

In einem Korridor, dem Wohnzimmer, der Garage Ihres Hauses zum Beispiel, erkennt der Bewegungssensor eine Präsenz, die Zustandsänderung erfolgt augenblicklich.

Dank seines weiten Betrachtungswinkels und seiner Reichweite ist es möglich, einen großen Umfang zu sichern. Die integrierte LED-Anzeige signalisiert jede Zustandsänderung.

## Fonctions

-   Erkennt Bewegungen auch bei völliger Dunkelheit
-   Ultrakompakt
-   Signal wird sofort nach Erkennung übertragen
-   Selbstschutz gegen Anheben
-   Benutzerfreundlichkeit und Installation
-   Wandmontage durch Schrauben oder doppelseitig
-   Informationen zum Batteriestand

## Technische Daten

-   Modultyp : Edisio Sender
-   Versorgung : 3VDC (Lithiumbatterie ER14250)
-   Frequenz : 868,3 MHz
-   Betriebstemperatur : 0 ° C + 45 ° C
-   Reichweite im freien Feld : 100M
-   Erfassungsbereich : 6M
-   Abmessungen : 25x79x19mm
-   Schutzart : IP20
-   Verwendung : Drinnen

## Moduldaten

-   Machen Sie : Edisio Smart Home
-   Name : EMS-200

## Allgemeine Konfiguration

Informationen zum Konfigurieren des Edisio-Plugins und zum Zuordnen eines Moduls zu Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Vergessen Sie nicht, die Option in der Plugin-Konfiguration zu aktivieren, damit Jeedom Ihre Sendermodule automatisch erstellt.

> **Spitze**
>
> Die Platzierung wird in einer Höhe von 150 cm und nahe der gewünschten Filztemperatur empfohlen.

### "E" -Taste"

Sie finden die Schaltfläche "E", die die Zuordnungstaste des Temperatursensors ist.

![ems200.bouton e](images/ems200/ems200.bouton-e.jpg)

### Erkennung

Der Sensor erkennt die geringste Bewegung innerhalb eines Radius von ca. 6 m

![ems200.detection](images/ems200/ems200.detection.jpg)

### Timer-Einstellung

Standardmäßig ist der Timer deaktiviert. Dieser Parameter wird verwendet, um die Verzögerung zu konfigurieren :

![ems200.minuterie](images/ems200/ems200.minuterie.jpg)

## Assoziation des Sensors mit Jeedom

Die Zuordnung des Bewegungssensors ist kinderleicht. Drücken Sie einfach die Taste "E" unter dem Sensor. Dies wird von Jeedom automatisch erkannt. Gehen Sie einfach zum Edisio-Plugin. Sie können es in ein Objekt einfügen, ihm einen Namen geben und es speichern.

Sobald Ihre Ausrüstung gekoppelt ist, sollten Sie diese erhalten :

![ems200.general](images/ems200/ems200.general.jpg)

> **Spitze**
>
> Denken Sie daran, Ihre Ausrüstung in einem Objekt zu platzieren, damit das Widget im Dashboard angezeigt wird.

### Commandes

Sobald Ihre Ausrüstung erstellt ist, sollten Sie die mit dem Modul verknüpften Befehle erhalten :

![Befehle](images/ems200/ems200.commande.jpg)

Hier ist die Liste der Befehle :

-   Präsenz : Dies ist der Befehl, der angibt, ob eine Anwesenheit erkannt wird
-   Batterie : Zeigt den Batteriestatus an

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, stehen verschiedene Informationen zur Verfügung :

![Befehle](images/ems200/ems200.informations.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte zwischen Jeedom und dem Modul aufgezeichnete Kommunikation an
-   Batterie : Zeigt den Batteriestatus der Batteriemodule an
-   STATUS : Gibt den Status des Moduls zurück
