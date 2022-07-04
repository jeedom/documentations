# Edisio EMS200

**Das Modul**

![ems200.module](images/ems200/ems200.module.jpg)

## Zusammenfassung

Zum Beispiel in einem Flur, Wohnzimmer oder der Garage Ihres Hauses platziert, erkennt der Bewegungssensor eine Anwesenheit, die Zustandsänderung erfolgt augenblicklich.

Dank seines weiten Sichtwinkels und seiner Reichweite ermöglicht es die Sicherung eines großen Umkreises. Eingebaute LED-Anzeige signalisiert alle Statusänderungen.

## Fonctions

-   Erkennt Bewegungen auch bei völliger Dunkelheit
-   Hochkompakt
-   Signal wird sofort nach Erkennung übertragen
-   Ausziehbarer Selbstschutz
-   Benutzerfreundlichkeit und Installation
-   Wandmontage durch Schrauben oder beidseitig
-   Informationen zum Batteriestand

## Technische Eigenschaften

-   Mod-Typ : Edisio-Sender
-   Einspeisung : 3VDC (Lithiumbatterie ER14250)
-   Frequenz : 868,3MHz
-   Betriebstemperatur : 0 °C +45 °C
-   Reichweite in offenen Feldern : 100M
-   Erfassungsbereich : 6M
-   Maße : 25 x 79 x 19 mm
-   Stärke des Schutzes : IP20
-   Verwenden : Drinnen

## Moduldaten

-   Markieren : Edisio Smart Home
-   Nachname : EMS-200

## Allgemeine Einrichtung

Informationen zum Konfigurieren des Edisio-Plug-ins und zum Zuordnen eines Moduls zu Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Damit Jeedom Ihre Sendermodule automatisch erstellt, vergessen Sie nicht, die Option in der Plugin-Konfiguration zu aktivieren.

> **Tipp**
>
> Die Platzierung wird in einer Höhe von 150 cm und in der Nähe der gewünschten gefühlten Temperatur empfohlen.

### "E"-Taste"

Sie finden die Taste „E“, die die Taste zum Koppeln des Temperatursensors ist.

![ems200.bouton e](images/ems200/ems200.bouton-e.jpg)

### Erkennung

Der Sensor erkennt die kleinste Bewegung in einem Umkreis von ca. 6m

![ems200.detection](images/ems200/ems200.detection.jpg)

### Timer-Einstellung

Standardmäßig ist der Timer deaktiviert. Mit diesem Parameter wird die Verzögerung konfiguriert :

![ems200.minuterie](images/ems200/ems200.minuterie.jpg)

## Assoziation des Sensors mit Jeedom

Die Zuordnung des Bewegungssensors ist kinderleicht. Drücken Sie einfach die Taste „E“, die sich unter dem Sensor befindet. Dies wird von Jeedom automatisch erkannt. Alles, was Sie tun müssen, ist zum Edisio-Plugin zu gehen. Sie können es dann in einem Objekt platzieren, ihm einen Namen geben und speichern.

Sobald Ihre Ausrüstung verbunden ist, sollten Sie dies erhalten :

![ems200.general](images/ems200/ems200.general.jpg)

> **Tipp**
>
> Denken Sie daran, Ihre Ausrüstung in einem Objekt zu platzieren, damit das Widget auf dem Dashboard angezeigt wird.

### Commandes

Sobald Ihre Ausrüstung erstellt ist, sollten Sie die mit dem Modul verknüpften Befehle erhalten :

![Aufträge](images/ems200/ems200.commande.jpg)

Hier ist die Liste der Befehle :

-   Gegenwart : Dies ist der Befehl, der anzeigt, ob eine Anwesenheit erkannt wird
-   Batterie : Zeigt den Batteriestatus an

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, sind verschiedene Informationen verfügbar :

![Aufträge](images/ems200/ems200.informations.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte aufgezeichnete Kommunikation zwischen Jeedom und dem Modul an
-   Batterie : Zeigt den Batteriestatus der Batteriemodule an
-   Status : Gibt den Status des Moduls zurück
