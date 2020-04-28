-   **Das Modul**

![ets200.module](images/ets200/ets200.module.jpg)

-   **Das Jeedom Visual**

![ets200.vue defaut](images/ets200/ets200.vue-defaut.jpg)

Zusammenfassung 
======

In einem Raum erhöht sich die gewünschte Raumtemperatur
automatisch. Darüber hinaus mit einem EMR-2000-Empfänger verbunden oder
EDR-B4 (4 Ausgänge) Sie haben einen angeschlossenen und steuerbaren Thermostat
von überall auf der Welt über das Internet.

Das Signal wird erst gesendet, nachdem ein Unterschied in festgestellt wurde
o, 5 ° C oder 1 ° C Temperatur oder alle 5 Minuten. Außerdem der Sensor
ist kompakt und diskret.

Die integrierte LED-Anzeige signalisiert jede Zustandsänderung.

Funktionen 
=========

-   Drahtloser batteriebetriebener Temperatursensor

-   Ultrakompakt

-   Signal wird während einer Zunahme oder Abnahme sofort übertragen
    Temperatur

-   Benutzerfreundlichkeit und Installation

-   Wandmontage durch Schrauben oder doppelseitig

-   Informationen zum Batteriestand

Technische Daten 
===========================

-   Modultyp : Edisio Sender

-   Verwendung : Drinnen

-   Versorgung : 3VDC (Lithiumbatterie ER14250)

-    : Bis zu 3 Jahre

-   Frequenz : 

-   Betriebstemperatur : 0 ° C + 45 ° C.

-   Reichweite im freien Feld : 

-   Abmessungen : 

-   Schutzart : 

Moduldaten 
=================

-   Machen Sie : 

-   Name : 

Allgemeine Konfiguration 
======================

So konfigurieren Sie das Edisio-Plugin und ordnen Jeedom ein Modul zu,
beziehen sich darauf
[Dokumentation](https://www.jeedom.fr/doc/Dokumentation/plugins/edisio/de_DE/edisio.html).

> **Wichtig**
>
> Denken Sie daran, dass Jeedom Ihre Sendermodule automatisch erstellt
> Aktivieren Sie die Option in der Plugin-Konfiguration nicht.

> **Spitze**
>
> Die Platzierung wird in einer Höhe von 150 cm und in der Nähe empfohlen
> die gewünschte Temperatur.

"E" -Taste" 
----------

Sie finden unter der Schaltfläche "E" die Zuordnungsschaltfläche der
Temperatursensor.

![ets200.bouton e](images/ets200/ets200.bouton-e.jpg)

Temperaturdelta einstellen 
-------------------------------

Standardmäßig ist das Temperaturdelta auf 1 ° C (+/- 10%) programmiert, um
Akkulaufzeit optimieren. Sie haben die Möglichkeit dazu
Stellen Sie diesen Parameter ein:

![ets200.delta](images/ets200/ets200.delta.jpg)

Assoziation des Sensors mit Jeedom 
===============================

Die Kombination des Temperatursensors ist ein Kinderspiel. Es ist genug
Drücken Sie die Taste "E" unter dem Sensor. Dieser wird
automatisch erkannt. Platziere es in einem Objekt, gib ihm einen Namen und
Speichern.

![ets200.association](images/ets200/ets200.association.jpg)

Sobald Sie Ihre zugehörige Ausrüstung haben, sollten Sie diese erhalten :

![ets200.general](images/ets200/ets200.general.jpg)

Befehle 
---------

Sobald Ihre Ausrüstung erstellt ist, sollten Sie die Bestellungen erhalten
mit dem Modul verbunden :

![Befehle](images/ets200/ets200.commandes.jpg)

Hier ist die Liste der Befehle :

-   Temperatur : Es ist der Befehl, der die gelesene Temperatur anzeigt

-   Batterie : Zeigt den Batteriestatus an

Information 
------------

Sobald Ihre Ausrüstung mit Jeedom verbunden ist, werden verschiedene Informationen angezeigt
verfügbar :

![Befehle](images/ets200/ets200.informations.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde

-   Kommunikation : Zeigt die letzte zwischen aufgezeichnete Kommunikation an
    Jeedom und das Mikromodul

-   Batterie : Zeigt den Batteriestatus der Batteriemodule an

-   STATUS : Gibt den STATUS des Moduls zurück

**@Jamsta**
