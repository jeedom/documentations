# Edisio ETC4

**Das Modul**

![module](images/etc4/module.jpg)

**Das Jeedom Visual**

![vue default](images/etc4/vue_default.jpg)

## Zusammenfassung

Die 4-Kanal-Mini-Fernbedienung e-Trendy ist einfach, robust und konstruiert. Es ist einfach an Empfänger anzuschließen und kann Ihre Ein / Aus- und dimmbare Beleuchtung, Motoren, Jalousien, Rollläden, Tore und Garagentore steuern. Es gibt zwei Programmiermodi.

Darüber hinaus ist die Interaktion mit anderen Protokollen möglich. Sie kann mit Empfängern der Marke Edisio, mit Jeedom, aber auch mit jedem Z-Wave-Empfänger in Ihrem Netzwerk interagieren.

## Funktionen 

-   Art der Verwendung : Start / Stopp, Öffnen / Stopp / Schließen, Variator, Motorisierung, Jalousien, Rollläden, Tore, Garagentore
-   2 Programmiermodi
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

-   Modultyp : Edisio Sender
-   Essen : 3VDC (Lithiumbatterie CR2430)
-   Kanäle : 4
-   Frequenz : 868,3 MHz
-   Betriebstemperatur : -10 ° C + 50 ° C
-   Maße : 52 x 28 x 12 mm
-   Stärke des Schutzes : IP40

## Moduldaten

-   Kennzeichen : Edisio Smart Home
-   Familienname, Nachname : ETC4

## Allgemeine Konfiguration

So konfigurieren Sie das Edisio-Plugin und ordnen Jeedom ein Modul zu,
beziehen sich darauf
[Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Vergessen Sie, damit Jeedom Ihre Sendermodule automatisch erstellt
> nein Aktivieren Sie die Option in der Plugin-Konfiguration.

### Die Trends

Steuern und zentralisieren Sie Ihre Ein / Aus-Beleuchtung und Dimmer, Türen, Motoren auf derselben Taste oder auf 2 separaten Tasten. E-Trendy-Fernbedienungen verfügen über zwei Betriebsarten: MODE 1 und MODE 2 :

-   MODUS 1 : 1-Tasten-Steuerung : Ein / Aus, Öffnen / Schließen, Variation + / Variation-, Puls
-   MODUS 2 : 2-Tasten-Steuerung :
    -   UP-Tasten: Stop, Close, Variation-, Pulse
    -   Untere Tasten: Ein, Öffnen, Variation +, Puls

## Betriebsdiagramm

Je nachdem, ob Ihr Sender im Modus "1-Taste" oder "2-Taste" konfiguriert ist, funktioniert die Fernbedienung folgendermaßen :

![diagramme](images/etc4/diagramme.jpg)

## Modus wechseln

-   MODUS 1 :
    -   Halten Sie die Taste "C4" gedrückt"
    -   Drücken Sie die Taste "C1" einmal und halten Sie dabei immer die Taste "C4" gedrückt. Die LED blinkt einmal

![mode1](images/etc4/mode1.jpg)

-   MODUS 2 :
    -   Halten Sie die Taste "C4" gedrückt"
    -   Drücken Sie zweimal die Taste "C1" und halten Sie dabei immer die Taste "C4" gedrückt. Die LED blinkt zweimal

![mode2](images/etc4/mode2.jpg)

## Assoziation der Fernbedienung mit Jeedom

Die Zuordnung eines Edisio-Senders erfolgt einfach und automatisch. Sie müssen nur jede Taste drücken, die Sie in Ihrem Jeedom haben möchten.

Sobald Ihre zugehörige Ausrüstung, sollten Sie diese erhalten :

![asso equip](images/etc4/asso_equip.jpg)

### Commandes

Sobald Ihre Ausrüstung erstellt wurde, sollten Sie die dem Modul zugeordneten Befehle erhalten :

![Aufträge](images/etc4/commandes.jpg)

Hier ist die Liste der Befehle :

-   bt01 : Mit diesem Befehl können Sie mit Schaltfläche 1 interagieren
-   bt02 : Dies ist der Befehl, mit dem Sie mit Schaltfläche 2 interagieren können
-   bt03 : Dies ist der Befehl, mit dem Sie mit Schaltfläche 3 interagieren können
-   bt04 : Dies ist der Befehl, mit dem Sie mit Schaltfläche 4 interagieren können
-   Schlagzeug : Zeigt den Batteriestatus an

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, stehen verschiedene Informationen zur Verfügung :

![Aufträge](images/etc4/infos.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte zwischen Jeedom und dem Mikromodul aufgezeichnete Kommunikation an
-   Schlagzeug : Zeigt den Batteriestatus für Batteriemodule an
-   Status : Gibt den Status des Moduls zurück

### Utilisation

Sobald Ihre Fernbedienung konfiguriert ist, können Sie mit dem Jeedom Scenario-Plugin mit Ihrer Fernbedienung auf Jeedom interagieren.

> **Hinweis**
>
> Jeder Schlüssel hat eine binäre Statusrückgabe.

## FAQ.

**So löschen Sie die Zuordnung einer Schaltfläche zu einem Empfänger ?**

Drücken Sie 5 Sekunden lang auf das "R" des Empfängers. Ein einfacher Piepton signalisiert den aktivierten Deprogrammierungsmodus. Drücken Sie zum Löschen die Taste "C". Wiederholen Sie diesen Vorgang für alle zu löschenden Schlüssel.
