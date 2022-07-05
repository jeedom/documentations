# Edisio EOS200

**Das Modul**

![eos200.module](images/eos200/eos200.module.jpg)

**Das Jeedom-Visual**

![eos200.vue defaut](images/eos200/eos200.vue-defaut.jpg)

## Zusammenfassung

Dieser kompakte und diskrete Sensor wird an einer Tür, einem Fenster, einem Garagentor, einer Schublade oder allen Öffnungen angebracht und ermöglicht es Ihnen, den Öffnungs- oder Schließstatus der letzteren zu ermitteln.

Je nach Zustand steuert der Sensor das Ein- oder Ausschalten Ihrer Beleuchtung, das Schließen oder Öffnen der Rollläden oder sogar das Auslösen eines Alarms über ein Szenario.

Das Signal wird nur bis zur Trennung des Sensors von seinem Magnetelement gesendet. Integrierte LED-Anzeige signalisiert Statusänderungen. Niedriger Batteriestand wird durch 3 hörbare "Pieps" am Empfänger signalisiert

## Fonctions

-   Batteriebetriebener drahtloser Magnetsensor
-   Erkennt Öffnungen/Schließungen
-   Hochkompakt
-   Einfache und kostenlose Installation
-   Unverzögert übertragenes Signal während einer Öffnung/Schließung
-   Ausziehbarer Selbstschutz
-   Informationen zum Batteriestand
-   Wandmontage durch Schrauben oder doppelseitiges Klebeband

## Technische Eigenschaften

-   Mod-Typ : Edisio-Sender
-   Einspeisung : 3VDC (Lithiumbatterie ER14250)
-   Frequenz : 868,3MHz
-   Betriebstemperatur : 0 °C +45 °C
-   Reichweite in offenen Feldern : 100M
-   Maße : 25 x 79 x 19 mm
-   Stärke des Schutzes : IP20
-   Verwenden : Drinnen

## Moduldaten

-   Markieren : Edisio Smart Home
-   Nachname : EOS-200

## Allgemeine Einrichtung

Informationen zum Konfigurieren des Edisio-Plug-ins und zum Zuordnen eines Moduls zu Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Damit Jeedom Ihre Sendermodule automatisch erstellt, vergessen Sie nicht, die Option in der Plugin-Konfiguration zu aktivieren.

### "E"-Taste"

Unten finden Sie die Taste „E“, die die Zuordnungstaste des Temperatursensors ist.

![eos200.bouton e](images/eos200/eos200.bouton-e.jpg)

### Configuration

Standardmäßig ist der Sensor auf NO (Normally Open) konfiguriert)

![eos200.nf no](images/eos200/eos200.nf-no.jpg)

> **Notiz**
>
> Sie müssen daher Ihren Sensor konfigurieren, wenn Sie ein Widget mit geschlossener Tür haben möchten, wenn es geschlossen ist.

![eos200.mode](images/eos200/eos200.mode.jpg)

## Assoziation des Sensors mit Jeedom

Das Koppeln des Bewegungssensors ist kinderleicht. Drücken Sie einfach die Taste „E“, die sich unter dem Sensor befindet. Dies wird von Jeedom automatisch erkannt. Alles, was Sie tun müssen, ist zum Edisio-Plugin zu gehen. Sie können es dann in einem Objekt platzieren, ihm einen Namen geben und speichern.

Sobald Ihre Ausrüstung verbunden ist, sollten Sie dies erhalten :

![eos200.general](images/eos200/eos200.general.jpg)

> **Tipp**
>
> Denken Sie daran, Ihre Ausrüstung in einem Objekt zu platzieren, damit das Widget auf dem Dashboard angezeigt wird.

### Aufträge 

Sobald Ihre Ausrüstung erstellt ist, sollten Sie die mit dem Modul verknüpften Befehle erhalten :

![Aufträge](images/eos200/eos200.commandes.jpg)

Hier ist die Liste der Befehle :

-   Tor : Dies ist der Befehl, der anzeigt, ob die Tür geöffnet oder geschlossen ist
-   Batterie : Zeigt den Batteriestatus an

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, sind verschiedene Informationen verfügbar :

![Aufträge](images/eos200/eos200.informations.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte aufgezeichnete Kommunikation zwischen Jeedom und dem Modul an
-   Batterie : Zeigt den Batteriestatus der Batteriemodule an
-   Status : Gibt den Status des Moduls zurück

## Alternative Optik

![eos200.vue alternative](images/eos200/eos200.vue-alternative.jpg)
