Nodon Switch - Wandschalter 
================================

\.

-   **Das Modul**

\.

![module](images/nodon.wallswitch/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/nodon.wallswitch/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

Der NodOn® Wandschalter kann jeden direkt steuern
Z-Wave®- oder Z-Wave Plus®-kompatibles Gerät wie Stecker
NodOn® Smart oder Triggerszenen über eine Zentrale
kompatible Hausautomation.

Der Schalter verfügt über eine Montageplatte zur einfachen Montage
im Haus: mit den Schrauben eines vertieften Topfes von
an die Wand schrauben oder einfach mit Klebstoff kleben
doppelseitig auf der Rückseite der Platte.

\.

Funktionen 
---------

\.

-   Steuerung allein oder mit einem Hausautomationssystem

-   Einfach zu montieren und zu demontieren

-   Angenehmes Gefühl der Unterstützung

-   Drahtlos

-   2 Jahre Batterie

\.

Technische Daten 
---------------------------

\.

-   Versorgung : CR2032 Batterie - Autonomie 1,5 - 2 Jahre

-   4 Tasten

-   Wandmontage mit doppelseitigem Kleber (im Lieferumfang enthalten) oder Schrauben (nicht im Lieferumfang enthalten)

-   Betriebstemperatur : 0 ° C bis 40 ° C

-   Höhe : 2000m

-   Z-Wave®-Funkprotokoll : 868.4MHz - 500 Series - Z-Wave kompatibel
    Plus® SDK 06.51.06

-   Geltungsbereich : 40 m drinnen / 70 m draußen

-   Abmessungen : 80 \*80 \*15mm

-   2 Jahre Garantie

-   EN 60950-1:2006 + A11:2009 + A1:2010 + A12:2011 + A2:2013

-   EN 300 220-2 V2.4.1

-   EN301 489-1 V1.9.2

-   EN301 489-3 V1.6.1

-   EN 62479:2010

\.

Moduldaten 
-----------------

\.

-   Machen Sie : Nodon

-   Name : CWS-3-1-01 Wandschalter

-   Hersteller ID : 357

-   Produkttyp : 2

-   Produkt-ID : 3

\.

Konfiguration 
-------------

\.

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[Dokumentation](https://jeedom.fr/doc/documentation/plugins/openzwave/de_DE/openzwave.html).

\.

> **Wichtig**
>
> Drücken Sie die beiden Tasten, um dieses Modul in den Einschlussmodus zu versetzen
> Taste (1 und 2) drücken, bis das Licht rosa wird, dann drücken
> Taste 1 gemäß der Papierdokumentation.

\.

![inclusion](images/nodon.wallswitch/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/nodon.wallswitch/information.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die den Modulen zugeordneten Befehle ausgeführt
disponibles.

\.

![Befehle](images/nodon.wallswitch/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Tasten : Es ist der Befehl, der den Knopf nach oben drückt

+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| Tasten        | Unterstützung          | Lange drücken     | Entspannung    | Doppelte Unterstützung   |
+ =============== + =============== + ================ = + =============== + ================= +
| **1**          | 10             | 12             | 11             | 13             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **2**          | 20             | 22             | 21             | 23             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **3**          | 30             | 32             | 31             | 33             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **4**          | 40             | 42             | 41             | 43             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +

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

![Config1](images/nodon.wallswitch/config1.jpg)

\.

Parameterdetails :

\.

-   1-2 : Ermöglicht die Auswahl des Profils der Schaltflächen bei Verwendung in
    zentral (für den Einsatz in Jeedom nicht erforderlich)

-   3 : Wichtiger Parameter, um zu sagen, ob der Schalter funktionieren soll
    im Szenen- oder zentralen Szenenmodus (Szene absolut einstellen)

-   4-7 : Wählen Sie die Tastenbetriebsart (falls vorhanden)
    Gruppenverbände)

-   8 : Hier können Sie den Betriebsmodus der LED auswählen

### Gruppen 

\.

Dieses Modul hat 7 Zuordnungsgruppen.

\.

![Groupe](images/nodon.wallswitch/groupe.jpg)

![Groupe](images/nodon.wallswitch/groupe2.jpg)

\.

-   Gruppe 1 - Rettungsleine : Diese Gruppe wird im Allgemeinen für verwendet
    Übertragen Sie Informationen vom Smart Plug zum Hauptcontroller
    des Netzwerks.

-   Gruppe 2 bis 5 - Die Geräte in diesen Gruppen werden von der gesteuert
    entsprechende Schaltfläche entsprechend MONO-Profil

-   Gruppe 6 bis 7 - Die Geräte in diesen Gruppen werden von der gesteuert
    entsprechende Schaltfläche entsprechend DUO-Profil

\.

> **Wichtig**
>
> Jeedom sollte mindestens in Gruppe 1 landen

Gut zu wissen 
------------

\.

### Besonderheiten 

\.

-   Dieses Modul kann bei der Aufnahme schwierig sein. Zögern Sie nicht
    1 oder 2 mal nach der Aufnahme aufwachen. Und überprüfen Sie die
    Assoziationsgruppe.

\.

Aufwachen 
------

\.

Um dieses Modul zu aktivieren, drücken Sie einfach eine dieser Tasten

\.

Faq. 
------

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
