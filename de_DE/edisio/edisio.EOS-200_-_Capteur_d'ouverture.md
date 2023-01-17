# Edisio EOS 200

**Das Modul**

![eos200.module](images/eos200/eos200.module.jpg)

**Das Jeedom Visual**

![eos200.vue defaut](images/eos200/eos200.vue-defaut.jpg)

## Zusammenfassung

Dieser kompakte und diskrete Sensor befindet sich an einer Tür, einem Fenster, einem Garagentor, einer Schublade und allen Öffnungen und ermöglicht es Ihnen, den Öffnungs- oder Schließzustand des letzteren zu erkennen.

Je nach Status steuert der Sensor das Ein- und Ausschalten Ihrer Lichter, das Schließen oder Öffnen der Rollläden oder sogar das Auslösen eines Alarms über ein Szenario.

Das Signal wird nur gesendet, wenn der Sensor von seinem Magnetelement getrennt ist. Die integrierte LED-Anzeige signalisiert Statusänderungen. Niedriger Batteriestand durch 3 akustische "Pieptöne" am Empfänger

## Fonctions

-   Drahtloser Magnetsensor mit Batterien
-   Erkennt Öffnungen / Verschlüsse
-   Ultrakompakt
-   Einfache und kostenlose Installation
-   Signal wird sofort beim Öffnen / Schließen übertragen
-   Selbstschutz gegen Anheben
-   Informationen zum Batteriestand
-   Wandmontage mit Schrauben oder doppelseitigem Klebeband

## Technische Daten

-   Modultyp : Edisio Sender
-   Versorgung : 3VDC (Lithiumbatterie ER14250)
-   Frequenz : 868,3 MHz
-   Betriebstemperatur : 0 ° C + 45 ° C
-   Reichweite im freien Feld : 100M
-   Abmessungen : 25x79x19mm
-   Schutzart : IP20
-   Verwendung : Drinnen

## Moduldaten

-   Machen Sie : Edisio Smart Home
-   Name : EOS-200

## Allgemeine Konfiguration

Informationen zum Konfigurieren des Edisio-Plugins und zum Zuordnen eines Moduls zu Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Vergessen Sie nicht, die Option in der Plugin-Konfiguration zu aktivieren, damit Jeedom Ihre Sendermodule automatisch erstellt.

### "E" -Taste"

Unter der Schaltfläche "E" befindet sich die Zuordnungstaste des Temperatursensors.

![eos200.bouton e](images/eos200/eos200.bouton-e.jpg)

### Configuration

Standardmäßig ist der Sensor in NO (normalerweise offen) konfiguriert)

![eos200.nf no](images/eos200/eos200.nf-no.jpg)

> **Notiz**
>
> Sie müssen daher Ihren Sensor konfigurieren, wenn Sie ein Widget mit geschlossener Tür haben möchten.

![eos200.mode](images/eos200/eos200.mode.jpg)

## Assoziation des Sensors mit Jeedom

Das Koppeln des Bewegungssensors ist einfach. Drücken Sie einfach die Taste "E" unter dem Sensor. Dies wird von Jeedom automatisch erkannt. Gehen Sie einfach zum Edisio-Plugin. Sie können es in ein Objekt einfügen, ihm einen Namen geben und es speichern.

Sobald Ihre Ausrüstung gekoppelt ist, sollten Sie diese erhalten :

![eos200.general](images/eos200/eos200.general.jpg)

> **Spitze**
>
> Denken Sie daran, Ihre Ausrüstung in einem Objekt zu platzieren, damit das Widget im Dashboard angezeigt wird.

### Befehle 

Sobald Ihre Ausrüstung erstellt ist, sollten Sie die mit dem Modul verknüpften Befehle erhalten :

![Befehle](images/eos200/eos200.commandes.jpg)

Hier ist die Liste der Befehle :

-   Tür : Dies ist der Befehl, der angibt, ob die Tür geöffnet oder geschlossen ist
-   Batterie : Zeigt den Batteriestatus an

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, stehen verschiedene Informationen zur Verfügung :

![Befehle](images/eos200/eos200.informations.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte zwischen Jeedom und dem Modul aufgezeichnete Kommunikation an
-   Batterie : Zeigt den Batteriestatus der Batteriemodule an
-   STATUS : Gibt den Status des Moduls zurück

## Alternative visuelle

![eos200.vue alternative](images/eos200/eos200.vue-alternative.jpg)
