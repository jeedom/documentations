-   **Das Modul**

![module](images/etc4/module.jpg)

-   **Das Jeedom Visual**

![vue default](images/etc4/vue_default.jpg)

Zusammenfassung 
======

Die 4-Kanal-Mini-Fernbedienung e-Trendy ist einfach, robust und elegant,
es wurde geschaffen, um zu gefallen. Es lässt sich leicht an Empfänger anschließen und
kann Ihre Ein / Aus und dimmbaren Lichter, Motorisierungen steuern,
Jalousien, Fensterläden, Tore, Garagentore. Es hat zwei Modi von
Programmierung.

Darüber hinaus ist eine Interaktion mit anderen Protokollen möglich
interagieren mit den Rezeptoren der Marke Edisio, mit Jeedom, aber
auch von jedem Z-Wave-Empfänger in Ihrem Netzwerk.

Funktionen 
=========

-   Art der Verwendung : Ein / Aus, Öffnen / Stoppen / Schließen, Dimmer,
    Motorisierung, Jalousien, Rollläden, Tore, Garagentore

-   2 Programmiermodi

-   Klein, diskret und ästhetisch

-   Benutzerfreundlichkeit und Installation

Technische Daten 
===========================

-   Modultyp : Edisio Sender

-   Versorgung : 3VDC (Lithiumbatterie CR2430)

-   Kanäle : 4

-   Frequenz : 868,3 MHz

-   Betriebstemperatur : -10 ° C + 50 ° C

-   Abmessungen : 52 x 28 x 12 mm

-   Schutzart : IP40

Moduldaten 
=================

-   Machen Sie : Edisio Smart Home

-   Name : ETC4

Allgemeine Konfiguration 
======================

So konfigurieren Sie das Edisio-Plugin und ordnen Jeedom ein Modul zu,
beziehen sich darauf
[Dokumentation](https://www.jeedom.fr/doc/Dokumentation/plugins/edisio/de_DE/edisio.html).

> **Wichtig**
>
> Denken Sie daran, dass Jeedom Ihre Sendermodule automatisch erstellt
> Aktivieren Sie die Option in der Plugin-Konfiguration nicht.

Mode 
---------

Steuern und zentralisieren Sie Ihre Ein / Aus-Lichter und Dimmer,
Öffnung, Motoren, auf derselben Taste oder auf 2 separaten Tasten. Die
e-Trendy-Fernbedienungen verfügen über zwei Betriebsarten: MODE 1 und MODE 2
:

-   MODUS 1 : 1-Tasten-Steuerung : Ein / Aus, Öffnen / Schließen,
    Variation + / Variation-, Impuls

-   MODUS 2 : Steuerung auf 2 Tasten :

    -   UP-Tasten: Stop, Close, Variation-, Impulse

    -   Untere Tasten: Gehen, Öffnen, Variation +, Puls

Funktionsplan 
===========================

Abhängig davon, ob Ihr Sender im Modus "1 Taste" oder "2" konfiguriert ist
Tasten ", so funktioniert die Fernbedienung :

![diagramme](images/etc4/diagramme.jpg)

Modus wechseln 
===============

-   MODUS 1 :

    -   Halten Sie die Taste "C4" gedrückt"

    -   Drücken Sie die Taste "C1" 1x und halten Sie die Taste gedrückt
        "C4 "blinkt die LED 1 Mal

![mode1](images/etc4/mode1.jpg)

-   MODUS 2 :

    -   Halten Sie die Taste "C4" gedrückt"

    -   Drücken Sie die Taste "C1" zweimal und halten Sie die Taste gedrückt
        "C4 "blinkt die LED zweimal

![mode2](images/etc4/mode2.jpg)

Assoziation der Fernbedienung mit Jeedom 
=======================================

Die Zuordnung eines Edisio-Senders ist einfach und
automatisch. Sie müssen nur jede Taste drücken
möchte in deinem Jeedom haben.

Sobald Sie Ihre zugehörige Ausrüstung haben, sollten Sie diese erhalten :

![asso equip](images/etc4/asso_equip.jpg)

Befehle 
---------

Sobald Ihre Ausrüstung erstellt ist, sollten Sie die Bestellungen erhalten
mit dem Modul verbunden :

![Befehle](images/etc4/commandes.jpg)

Hier ist die Liste der Befehle :

-   bt01 : Mit diesem Befehl können Sie mit Schaltfläche 1 interagieren

-   bt02 : Es ist der Befehl, der die Interaktion mit Schaltfläche 2 ermöglicht

-   bt03 : Es ist der Befehl, der die Interaktion mit der Schaltfläche 3 ermöglicht

-   bt04 : Mit diesem Befehl können Sie mit Schaltfläche 4 interagieren

-   Batterie : Zeigt den Batteriestatus an

Information 
------------

Sobald Ihre Ausrüstung mit Jeedom verbunden ist, werden verschiedene Informationen angezeigt
verfügbar :

![Befehle](images/etc4/infos.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde

-   Kommunikation : Zeigt die letzte zwischen aufgezeichnete Kommunikation an
    Jeedom und das Mikromodul

-   Batterie : Zeigt den Batteriestatus für Batteriemodule an

-   STATUS : Gibt den Status des Moduls zurück

Verwendung 
-----------

Sobald Ihre Fernbedienung konfiguriert ist, können Sie mit der
Das Jeedom-Szenario-Plugin interagiert mit Ihrer Fernbedienung auf Jeedom.

> **Notiz**
>
> Jeder Schlüssel zu einem Binärstatus gibt zurück.

Faq. 
======

So löschen Sie die Zuordnung eines Schlüssels zu einem Empfänger ?

:   Drücken Sie 5 Sekunden auf das "R" des Empfängers, ein einfacher Piepton signalisiert
    Deprogrammiermodus aktiviert. Drücken Sie zum Löschen die Taste "C".
    Wiederholen Sie diesen Vorgang für alle zu löschenden Tasten.

**@Jamsta**
