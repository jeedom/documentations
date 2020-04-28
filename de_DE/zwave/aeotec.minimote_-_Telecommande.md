Aeotec Minimote 
===============

\.

-   **Das Modul**

\.

![module](images/aeotec.minimote/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/aeotec.minimote/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

Dieser Aeon Labs Mini-Controller ist mit einer Vielzahl von kompatibel
Z-Wave-Module wie Schalter, Dimmer,
Bewegung, Schalter für Jalousien ... So können Sie bei bestellen
Entfernen Sie Ihre Lichter, Geräte oder Rollläden. Damit
Fernbedienung können Sie auch ein- / ausschließen
Ihr Z-Wave-Netzwerk und verknüpfen Sie Szenen mit den Schaltflächen auf dem
Fernbedienung. Eine Schiebeklappe verbirgt die Knöpfe für
Konfigurieren Sie das Z-Wave-Netzwerk.

\.

Funktionen 
---------

\.

-   Z-Wave-Netzwerkkonfiguration (Einschluss / Ausschluss von Modulen)

-   Ermöglicht die Steuerung von bis zu 4 Szenen

-   8 Tasten : 4 für Szenen, 4 für Netzwerkeinstellungen

-   Start / Stopp- und Dimmfunktionen

-   ALL ON / ALL OFF-Funktion

-   Interner Akku über USB

-   Firmware-Update über USB

\.

Technische Daten 
---------------------------

\.

-   Modultyp : Z-Wave-Controller

-   Farbe : Weiß

-   Versorgung : interner Akku über USB

-   Anzeigen: Blaue und rote LED

-   Frequenz : 868,42 MHz

-   Geltungsbereich : bis zu 30 m

-   Abmessungen : 0.8 cm x 3.3 cm x 9,3 cm

-   Betriebstemperatur : -35 bis +85 ° C.

\.

Moduldaten 
-----------------

\.

-   Machen Sie : Aeotec

-   Name : Minimote

-   Hersteller ID : 134

-   Produkttyp : 1

-   Produkt-ID : 3

\.

Konfiguration 
-------------

\.

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[Dokumentation](https://jeedom.fr/doc/Dokumentation/plugins/openzwave/de_DE/openzwave.html).

\.

> **Wichtig**
>
> Drücken Sie die Taste, um dieses Modul in den Einschlussmodus zu versetzen
> LERNEN Sie gemäß seiner Papierdokumentation.

\.

![inclusion](images/aeotec.minimote/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/aeotec.minimote/information.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
verfügbar.

\.

![Befehle](images/aeotec.minimote/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Tasten : Es ist der Befehl, der den Knopf nach oben drückt

1 : Taste 1 kurz drücken

2 : Taste 1 lange drücken

3 : Taste 2 kurz drücken

4 : Taste 2 lange drücken

5 : Taste 3 kurz drücken

6 : Taste 3 lange drücken

7 : Taste 4 kurz drücken

8 : Taste 4 lange drücken

\.

### Konfiguration des Moduls 

\.

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer gleich danach auf
> Einbeziehung.

\.

Dann, wenn Sie das Modul entsprechend konfigurieren möchten
Ihrer Installation müssen Sie durch die Schaltfläche gehen
"Konfiguration "des OpenZwave-Plugins von Jeedom.

\.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\.

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\.

![Config1](images/aeotec.minimote/config1.jpg)

\.

Parameterdetails :

\.

-   241: Betriebsart Taste 1 (standardmäßig verlassen)

-   242: Betriebsart Taste 2 (standardmäßig verlassen)

-   243: Betriebsart Taste 3 (standardmäßig verlassen)

-   244: Betriebsart Taste 4 (standardmäßig verlassen)

-   250: Betriebsart der Fernbedienung (unbedingt verlassen
    Szene für Fernbedienung)

\.

### Gruppen 

\.

Dieses Modul hat vier Zuordnungsgruppen, keine ist erforderlich
um es als Fernbedienung in Jeedom zu verwenden.

\.

![Groupe](images/aeotec.minimote/groupe.jpg)

\.

Gut zu wissen 
------------

\.

### Besonderheiten 

Aufwachen 
------

\.

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Halten Sie die LEARN-Taste 3 Sekunden lang gedrückt

\.

Faq. 
------

\.

Dieses Modul wird aktiviert, indem Sie die LEARN-Taste 3 Sekunden lang gedrückt halten.

\.

Dieses Modul ist ein Batteriemodul, die neue Konfiguration wird nicht sein
Berücksichtigen Sie dies, wenn Sie die Fernbedienung aktivieren.

\.

Wichtiger Hinweis 
---------------

\.

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung
> der Konfiguration, nach einer Änderung des Aufweckens, nach a
> Änderung der Assoziationsgruppen

\.

**@sarakha63**
