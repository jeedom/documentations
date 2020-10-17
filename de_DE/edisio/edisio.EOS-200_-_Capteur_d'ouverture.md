# Edisio EOS 200

**Das Modul**

![eos200.module](images/eos200/eos200.module.jpg)

**Das Jeedom Visual**

![eos200.vue defaut](images/eos200/eos200.vue-defaut.jpg)

## Zusammenfassung

Dieser kompakte und diskrete Sensor befindet sich an einer Tür, einem Fenster, einem Garagentor, einer Schublade und allen Öffnungen und ermöglicht es Ihnen, den Öffnungs- oder Schließzustand des letzteren zu erkennen.

Je nach Status steuert der Sensor das Ein- und Ausschalten Ihrer Lichter, das Schließen oder Öffnen der Rollläden oder sogar das Auslösen eines Alarms über ein Szenario.

Das Signal wird nur gesendet, wenn der Sensor von seinem Magnetelement getrennt ist. Die integrierte LED-Anzeige signalisiert alle Statusänderungen. Niedriger Batteriestand durch 3 akustische "Pieptöne" am Empfänger

## Fonctions

-   Batteriebetriebener drahtloser Magnetsensor
-   Erkennt Öffnungen / Verschlüsse
-   Hochkompakt
-   Einfache und kostenlose Installation
-   Signal wird sofort beim Öffnen / Schließen übertragen
-   Selbstschutz beim Ziehen
-   Informationen zum Batteriestand
-   Wandmontage mit Schrauben oder doppelseitigem Klebeband

## Technische Eigenschaften

-   Modultyp : Edisio Sender
-   Essen : 3VDC (Lithiumbatterie ER14250)
-   Frequenz : 868,3 MHz
-   Betriebstemperatur : 0 ° C + 45 ° C
-   Geltungsbereich im freien Feld : 100M
-   Maße : 25x79x19mm
-   Stärke des Schutzes : IP20
-   Verwenden : Drinnen

## Moduldaten

-   Kennzeichen : Edisio Smart Home
-   Familienname, Nachname : EOS-200

## Allgemeine Konfiguration

Informationen zum Konfigurieren des Edisio-Plugins und zum Zuordnen eines Moduls zu Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Damit Jeedom Ihre Sendermodule automatisch erstellt, vergessen Sie nicht, die Option in der Plugin-Konfiguration zu aktivieren.

### Taste "E"

Unterhalb der Schaltfläche "E" befindet sich die Zuordnungstaste des Temperatursensors.

![eos200.bouton e](images/eos200/eos200.bouton-e.jpg)

### Configuration

Standardmäßig ist der Sensor als NEIN (normalerweise offen) konfiguriert)

![eos200.nf no](images/eos200/eos200.nf-no.jpg)

> **Hinweis**
>
> Sie müssen daher Ihren Sensor konfigurieren, wenn Sie ein Widget mit geschlossener Tür haben möchten.

![eos200.mode](images/eos200/eos200.mode.jpg)

## Assoziation des Sensors mit Jeedom

Das Koppeln des Bewegungssensors ist kinderleicht. Drücken Sie einfach die Taste "E" unter dem Sensor. Dies wird von Jeedom automatisch erkannt. Sie müssen nur zum Edisio-Plugin gehen. Sie können es dann in ein Objekt einfügen, ihm einen Namen geben und speichern.

Sobald Sie Ihre Ausrüstung gepaart haben, sollten Sie diese erhalten :

![eos200.general](images/eos200/eos200.general.jpg)

> **Trinkgeld**
>
> Denken Sie daran, Ihre Ausrüstung in einem Objekt zu platzieren, damit das Widget im Dashboard angezeigt wird.

### Aufträge 

Sobald Ihre Ausrüstung erstellt wurde, sollten Sie die dem Modul zugeordneten Befehle erhalten :

![Aufträge](images/eos200/eos200.commandes.jpg)

Hier ist die Liste der Befehle :

-   Tür : Dies ist der Befehl, der angibt, ob die Tür geöffnet oder geschlossen ist
-   Schlagzeug : Zeigt den Batteriestatus an

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, stehen verschiedene Informationen zur Verfügung :

![Aufträge](images/eos200/eos200.informations.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte zwischen Jeedom und dem Modul aufgezeichnete Kommunikation an
-   Schlagzeug : Zeigt den Batteriestatus der Batteriemodule an
-   Status : Gibt den Status des Moduls zurück

## Alternative visuelle

![eos200.vue alternative](images/eos200/eos200.vue-alternative.jpg)
