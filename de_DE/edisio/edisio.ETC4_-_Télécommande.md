# Edisio ETC4

**Das Modul**

![module](images/etc4/module.jpg)

**Das Jeedom-Visual**

![vue default](images/etc4/vue_default.jpg)

## Zusammenfassung

Die 4-Kanal e-Trendy Mini-Fernbedienung ist einfach, robust und stilvoll, sie wurde geschaffen, um zu gefallen. Es lässt sich einfach an Empfänger anschließen und kann Ihre Ein/Aus- und dimmbaren Lichter, Motoren, Jalousien, Rollläden, Tore und Garagentore steuern. Es hat zwei Programmiermodi.

Darüber hinaus ist die Interaktion mit anderen Protokollen möglich, es kann mit Empfängern der Marke Edisio, mit Jeedom, aber auch mit jedem Z-Wave-Empfänger in Ihrem Netzwerk interagieren.

## Funktionen 

-   Art der Verwendung : Start/Stopp, Öffnen/Stopp/Schließen, Dimmer, Motorisierung, Jalousien, Rollläden, Tore, Garagentore
-   2 Programmiermodi
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

-   Mod-Typ : Edisio-Sender
-   Einspeisung : 3VDC (Lithiumbatterie CR2430)
-   Kanäle : 4
-   Frequenz : 868,3MHz
-   Betriebstemperatur : -10 °C +50 °C
-   Maße : 52 x 28 x 12 mm
-   Stärke des Schutzes : IP40

## Moduldaten

-   Markieren : Edisio Smart Home
-   Nachname : ETC4

## Allgemeine Einrichtung

So konfigurieren Sie das Edisio-Plugin und verknüpfen ein Modul mit Jeedom,
verweise darauf
[Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Denken Sie daran, damit Jeedom Ihre Sendermodule automatisch erstellt
> die Option in der Konfiguration des Plugins nicht aktivieren.

### Die Trends

Steuern und zentralisieren Sie Ihre Ein/Aus-Leuchten und Dimmer, Öffnungen, Motoren auf derselben Taste oder auf 2 separaten Tasten. E-Trendy Fernbedienungen haben 2 Betriebsmodi, MODE 1 und MODE 2 :

-   MODUS 1 : 1-Touch-Steuerung : Ein/Aus, Auf/Zu, Dimmen+/Dimmen-, Impuls
-   MODUS 2 : 2-Tasten-Steuerung :
    -   AUF-Tasten: Stop, Close, Dimm-, Impuls
    -   Untere Tasten: Ein, Öffnen, Dimmen+, Impuls

## Betriebsdiagramm

Abhängig davon, ob Ihr Sender im „1-Tasten“- oder „2-Tasten“-Modus konfiguriert ist, funktioniert die Fernbedienung wie folgt :

![diagramme](images/etc4/diagramme.jpg)

## Modus ändern

-   MODUS 1 :
    -   Halten Sie die Taste „C4“ gedrückt"
    -   Drücken Sie die Taste „C1“ 1x, während Sie die Taste „C4“ weiterhin gedrückt halten, die LED blinkt 1 Mal

![mode1](images/etc4/mode1.jpg)

-   MODUS 2 :
    -   Halten Sie die Taste „C4“ gedrückt"
    -   Drücken Sie 2x die Taste „C1“ und halten Sie weiterhin die Taste „C4“, die LED blinkt 2 Mal

![mode2](images/etc4/mode2.jpg)

## Zuordnung der Fernbedienung zu Jeedom

Die Zuordnung eines Edisio-Senders erfolgt einfach und automatisch. Drücken Sie einfach jede Taste, die Sie in Ihrem Jeedom haben möchten.

Sobald Ihre Ausrüstung verknüpft ist, sollten Sie diese erhalten :

![asso equip](images/etc4/asso_equip.jpg)

### Commandes

Sobald Ihre Ausrüstung erstellt ist, sollten Sie die mit dem Modul verknüpften Befehle erhalten :

![Aufträge](images/etc4/commandes.jpg)

Hier ist die Liste der Befehle :

-   bt01 : Dies ist der Befehl, mit dem Sie mit Taste 1 interagieren können
-   bt02 : Dies ist der Befehl, mit dem Sie mit Taste 2 interagieren können
-   bt03 : Dies ist der Befehl, mit dem Sie mit Taste 3 interagieren können
-   bt04 : Dies ist der Befehl, mit dem Sie mit Taste 4 interagieren können
-   Batterie : Zeigt den Batteriestatus an

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, sind verschiedene Informationen verfügbar :

![Aufträge](images/etc4/infos.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte aufgezeichnete Kommunikation zwischen Jeedom und dem Mikromodul an
-   Batterie : Zeigt den Batteriestatus für batteriebetriebene Module an
-   Status : Gibt den Status des Moduls zurück

### Utilisation

Sobald Ihre Fernbedienung konfiguriert ist, können Sie mit dem Jeedom Scenario-Plugin mit Ihrer Fernbedienung auf Jeedom interagieren.

> **Notiz**
>
> Jede Taste hat eine binäre Statusrückmeldung.

## Häufig gestellte Fragen.

**So löschen Sie die Zuordnung eines Schlüssels zu einem Empfänger ?**

Drücken Sie das „R“ am Empfänger für 5 Sekunden, ein einzelner Piepton signalisiert den aktivierten Deprogrammiermodus. Drücken Sie zum Löschen die Taste „C“. Wiederholen Sie diesen Vorgang für alle zu löschenden Schlüssel.
