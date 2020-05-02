-   **Das Modul**

![eos200.module](images/eos200/eos200.module.jpg)

-   **Das Jeedom Visual**

![eos200.vue defaut](images/eos200/eos200.vue-defaut.jpg)

Zusammenfassung 
======

Platziert an einer Tür, einem Fenster, einem Garagentor, einer Schublade, allen Öffnungen
Mit dem kompakten und diskreten Sensor können Sie den Zustand erkennen
Öffnen oder Schließen des letzteren.

Je nach Zustand steuert der Sensor die Zündung oder das Erlöschen Ihres
Lichter, Schließen oder Öffnen der Fensterläden oder der
Alarm durch ein Szenario ausgelöst.

Das Signal wird nur an die Trennung des Schallsensors gesendet
magnetisches Element. Die integrierte LED-Anzeige signalisiert Änderungen
Zustand. Niedriger Batteriestand durch 3 akustische "Pieptöne" am
Empfänger

Funktionen 
=========

-   Drahtloser Magnetsensor mit Batterien

-   Erkennt Öffnungen / Verschlüsse

-   Ultrakompakt

-   Einfache und kostenlose Installation

-   Signal wird sofort beim Öffnen / Schließen übertragen

-   Selbstschutz gegen Anheben

-   Informationen zum Batteriestand

-   Wandmontage mit Schrauben oder doppelseitigem Klebeband

Technische Daten 
===========================

-   Modultyp : Edisio Sender

-   Versorgung : 3VDC (Lithiumbatterie ER14250)

-   Frequenz : 868,3 MHz

-   Betriebstemperatur : 0 ° C + 45 ° C.

-   Reichweite im freien Feld : 100M

-   Abmessungen : 25x79x19mm

-   Schutzart : IP20

-   Verwendung : Drinnen

Moduldaten 
=================

-   Machen Sie : Edisio Smart Home

-   Name : EOS-200

Allgemeine Konfiguration 
======================

So konfigurieren Sie das Edisio-Plugin und ordnen Jeedom ein Modul zu,
beziehen sich darauf
[Dokumentation](https://www.jeedom.fr/doc/documentation/plugins/edisio/de_DE/edisio.html).

> **Important**
>
> Denken Sie daran, dass Jeedom Ihre Sendermodule automatisch erstellt
> Aktivieren Sie die Option in der Plugin-Konfiguration nicht.

"E" -Taste" 
----------

Sie finden unter der Schaltfläche "E" die Zuordnungsschaltfläche der
Temperatursensor.

![eos200.bouton e](images/eos200/eos200.bouton-e.jpg)

Konfiguration 
-------------

Standardmäßig ist der Sensor in NO (normalerweise offen) konfiguriert.

![eos200.nf no](images/eos200/eos200.nf-no.jpg)

> **Note**
>
> Sie müssen daher Ihren Sensor konfigurieren, wenn Sie einen haben möchten
> Widget mit geschlossener Tür, wenn sie geschlossen ist.

![eos200.mode](images/eos200/eos200.mode.jpg)

Assoziation des Sensors mit Jeedom 
===============================

Das Koppeln des Bewegungssensors ist einfach. Er
Drücken Sie einfach die Taste "E" unter dem Sensor. Dieser wird
automatisch von Jeedom erkannt. Geh einfach zum
Edisio Plugin. Sie können es dann in ein Objekt einfügen und ihm ein geben
benennen und speichern.

Sobald Ihre Ausrüstung gekoppelt ist, sollten Sie diese erhalten :

![eos200.general](images/eos200/eos200.general.jpg)

> **Tip**
>
> Denken Sie daran, das Widget zu platzieren, damit es im Dashboard angezeigt wird
> Ihre Ausrüstung in einem Objekt.

Befehle 
---------

Sobald Ihre Ausrüstung erstellt ist, sollten Sie die Bestellungen erhalten
mit dem Modul verbunden :

![Befehle](images/eos200/eos200.commandes.jpg)

Hier ist die Liste der Befehle :

-   Tür : Es ist der Befehl, der angibt, ob die Tür offen ist oder
    geschlossen

-   Batterie : Zeigt den Batteriestatus an

Information 
------------

Sobald Ihre Ausrüstung mit Jeedom verbunden ist, werden verschiedene Informationen angezeigt
verfügbar :

![Befehle](images/eos200/eos200.informations.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde

-   Kommunikation : Zeigt die letzte zwischen aufgezeichnete Kommunikation an
    Jeedom und das Modul

-   Batterie : Zeigt den Batteriestatus der Batteriemodule an

-   STATUS : Gibt den STATUS des Moduls zurück

Alternative visuelle 
=================

![eos200.vue alternative](images/eos200/eos200.vue-alternative.jpg)

Faq. 
======

So steuern Sie einen Z-Wave-Empfänger?

:   Mit dem Jeedom Scenario Plugin.

Wie kann ich das gleiche Bild haben ?

:   Mit dem Jeedom Widgets Plugin.

**@Jamsta**
