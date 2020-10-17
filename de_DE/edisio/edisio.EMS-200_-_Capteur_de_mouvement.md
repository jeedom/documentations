# Edisio EMS 200

**Das Modul**

![ems200.module](images/ems200/ems200.module.jpg)

## Zusammenfassung

Der Bewegungssensor befindet sich beispielsweise in einem Flur, Wohnzimmer oder einer Garage Ihres Hauses und erkennt eine Anwesenheit. Die Zustandsänderung erfolgt sofort.

Dank seines weiten Betrachtungswinkels und seiner Reichweite sichert es einen weiten Umfang. Die integrierte LED-Anzeige signalisiert jede Zustandsänderung.

## Fonctions

-   Erkennt Bewegungen auch bei völliger Dunkelheit
-   Hochkompakt
-   Signal wird sofort nach Erkennung übertragen
-   Selbstschutz beim Ziehen
-   Benutzerfreundlichkeit und Installation
-   Wandmontage mit Schrauben oder doppelseitig
-   Informationen zum Batteriestand

## Technische Eigenschaften

-   Modultyp : Edisio Sender
-   Essen : 3VDC (Lithiumbatterie ER14250)
-   Frequenz : 868,3 MHz
-   Betriebstemperatur : 0 ° C + 45 ° C
-   Geltungsbereich im freien Feld : 100M
-   Erfassungsbereich : 6M
-   Maße : 25x79x19mm
-   Stärke des Schutzes : IP20
-   Verwenden : Drinnen

## Moduldaten

-   Kennzeichen : Edisio Smart Home
-   Familienname, Nachname : EMS-200

## Allgemeine Konfiguration

Informationen zum Konfigurieren des Edisio-Plugins und zum Zuordnen eines Moduls zu Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Damit Jeedom Ihre Sendermodule automatisch erstellt, vergessen Sie nicht, die Option in der Plugin-Konfiguration zu aktivieren.

> **Trinkgeld**
>
> Die Platzierung wird in einer Höhe von 150 cm und nahe der gewünschten Filztemperatur empfohlen.

### Taste "E"

Sie finden die Schaltfläche "E", die die Zuordnungstaste des Temperatursensors ist.

![ems200.bouton e](images/ems200/ems200.bouton-e.jpg)

### Erkennung

Der Sensor erkennt die geringste Bewegung innerhalb eines Radius von ca. 6 m

![ems200.detection](images/ems200/ems200.detection.jpg)

### Timer einstellen

Standardmäßig ist der Timer deaktiviert. Dieser Parameter wird verwendet, um die Verzögerung zu konfigurieren :

![ems200.minuterie](images/ems200/ems200.minuterie.jpg)

## Assoziation des Sensors mit Jeedom

Die Zuordnung des Bewegungssensors ist kinderleicht. Drücken Sie einfach die Taste "E" unter dem Sensor. Dies wird von Jeedom automatisch erkannt. Sie müssen nur zum Edisio-Plugin gehen. Sie können es dann in ein Objekt einfügen, ihm einen Namen geben und speichern.

Sobald Sie Ihre Ausrüstung gepaart haben, sollten Sie diese erhalten :

![ems200.general](images/ems200/ems200.general.jpg)

> **Trinkgeld**
>
> Denken Sie daran, Ihre Ausrüstung in einem Objekt zu platzieren, damit das Widget im Dashboard angezeigt wird.

### Commandes

Sobald Ihre Ausrüstung erstellt wurde, sollten Sie die dem Modul zugeordneten Befehle erhalten :

![Aufträge](images/ems200/ems200.commande.jpg)

Hier ist die Liste der Befehle :

-   Gegenwart : Dies ist der Befehl, der angibt, ob eine Anwesenheit erkannt wird
-   Schlagzeug : Zeigt den Batteriestatus an

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, stehen verschiedene Informationen zur Verfügung :

![Aufträge](images/ems200/ems200.informations.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte zwischen Jeedom und dem Modul aufgezeichnete Kommunikation an
-   Schlagzeug : Zeigt den Batteriestatus der Batteriemodule an
-   Status : Gibt den Status des Moduls zurück
