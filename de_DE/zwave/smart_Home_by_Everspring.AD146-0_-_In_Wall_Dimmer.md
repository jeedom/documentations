SmartHome von Everspring  - AD146-0 
================================================

\.

-   **Das Modul**

\.

![module](images/smarthomebyeverspring.AD146-0/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/smarthomebyeverspring.AD146-0/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

Dieses Wanddimmer-Mikromodul von SmartHome Europe von
Everspring dient zur Steuerung des Ein- und Ausschaltens
Leuchten und elektrische Geräte in Ihrem Haus. Er kann
bieten auch eine Dimmerfunktion, die nur ist
kompatibel mit Glühbirnen. Bei einer Spannung von 230V kann dieses Modul

.



.




.

\.

Funktionen 
---------

\.

-   

-   Wird hinter einem vorhandenen Switch installiert

-   

-   

-   Sehr kleine, reduzierte Abmessungen

-   

-   Z-Wave Plus-Technologie

-   

-   Verwendung im 2-Draht-Modus (Neutralleiter nicht erforderlich)

-   

-   

-   Z-Wave-Repeater-Funktion

\.

Technische Daten 
---------------------------

\.

-   Modultyp : Z-Wave Empfänger

-   Versorgung : 230 V, 50 Hz

-   Verbrauch : 

-   Maximale Leistung :

-   Widerstandslast : 

-    : 

-    : 

-   Frequenz : 868,42 MHz

-   Geltungsbereich : bis zu 70 m im Freien, bis zu 30 m in Gebäuden

-   Anzeigen: LED auf der Taste

-   Abmessungen : 

\.

Moduldaten 
-----------------

\.

-   Machen Sie : 

-   Name : 

-   Hersteller ID : 96

-   Produkttyp : 3

-   Produkt-ID : 2

\.

Konfiguration 
-------------

\.

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/de_DE/openzwave.html).

\.

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie dreimal auf das Modul
> Knopf, entsprechend seiner Papierdokumentation. Es ist wichtig zu
> Beachten Sie, dass dieses Modul direkt in die Aufnahme geht, wenn
> gehört zu keinem Netzwerk und wird mit Strom versorgt

\.

![inclusion](images/smarthomebyeverspring.AD146-0/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/smarthomebyeverspring.AD146-0/information.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
verfügbar.

\.

![Befehle](images/smarthomebyeverspring.AD146-0/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Intensität : Dies ist der Befehl zum Einstellen der Intensität des
    Licht

-   Ein : Es ist die Steuerung, die das Licht einschaltet

-   Aus : 

-   Zustand : Es ist der Befehl, mit dem der Status des
    Licht

\.


.

\.

### Konfiguration des Moduls 

\.

Sie können das Modul entsprechend Ihrer Konfiguration konfigurieren
Installation. Dies erfordert das Durchlaufen der Schaltfläche "Konfiguration" des
Jeedom OpenZwave Plugin.

\.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\.

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\.

![Config1](images/smarthomebyeverspring.AD146-0/config1.jpg)

\.

Parameterdetails :

\.

-   1 : Dieser Parameter definiert den Statuswertbefehl, dies ist jedoch nicht der Fall
    empfohlen, diesen Wert zu ändern.

-   2 : 
    Gruppe 1 (Wert zwischen 3 und 25 Sekunden)

-   3 : 
    .

-   4 : 
    

-   5 : 
    

### Gruppen 

\.

Dieses Modul hat 2 Zuordnungsgruppen.

\.

![Groupe](images/smarthomebyeverspring.AD146-0/groupe.jpg)

\.

> **Wichtig**
>
> Jeedom sollte mindestens in Gruppe 1 landen

Gut zu wissen 
------------

\.

### Besonderheiten 

\.

-   Die Statusrückmeldung kann nicht unter 3 konfiguriert werden
    Sekunden. \.

### Alternative visuelle 

\.

![vuewidget](images//smarthomebyeverspring.AD146-0/vuewidget.jpg)

\.

Aufwachen 
------

\.

.

\.

Faq. 
------

\.

Ja, es ist Parameter 2 und kann nicht unter 3 eingestellt werden
Sekunden.

\.

Nein, nein. Dieses Modul kann durch mehrmaliges Drücken ein- oder ausgeschlossen werden
auf dem Schalter.

\.

**@sarakha63**
