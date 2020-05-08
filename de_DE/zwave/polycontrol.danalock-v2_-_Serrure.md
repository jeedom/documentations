Danalock V2 BTZE 
================

\.

-   **Das Modul**

\.

![module](images/polycontrol.danalock/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/polycontrol.danalock/vuedefaut1.jpg)

\.

Zusammenfassung 
------

 

**Sichern Sie Ihr Zuhause mit dem elektronischen Schloss Z-Wave von
Poly-Control !**


 ! 
.

. 
.


. 
. 
. 
. 
.. 



.

****


.

****



.

 ****


. ,


rentré.

****


. 

die Batterie. .

.

****

. 
. 

.

****

,
. 


.

****



. .
\.

Funktionen 
---------

\.

-   Steuern Sie Ihre Haustür aus der Ferne

-   

-   

-   

-   

-   ,
    

-   

-   

-    : 
    

-   

-   Einfach zu installieren

-   

-   
    .

\.

Technische Daten 
---------------------------

\.

-   Essen : 

-    : V2

-    : 

-    : 

-   Abmessungen : 

-   Gewicht : 363g

\.

Moduldaten 
-----------------

\.

-   Machen Sie : Poly-Control

-   Nachname : Danalock V2 BTZE

-   Hersteller ID : 010e

-   Produkttyp : 1

-   Produkt-ID : 1

\.

Konfiguration 
-------------

\.

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[Dokumentation](https://jeedom.fr/doc/documentation/plugins/openzwave/de_DE/openzwave.html).

\.

> **Important**
>
> ..

\.


 : 
"

![inclusion securise jeedom


\.

 : "
"

![inclusion securise jeedom


\.

> **Important**
>
> 
> . 
> .

![inclusion](images/polycontrol.danalock/inclusion.jpg)

![inclusion1](images/polycontrol.danalock/inclusion1.jpg)

![inclusion2](images/polycontrol.danalock/inclusion2.jpg)


".

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/polycontrol.danalock/information.jpg)

\.

### Bestellungen 

\.

Sobald das Modul erkannt wurde, lauten die dem Modul zugeordneten Befehle
disponibles.

\.

![Bestellungen](images/polycontrol.danalock/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Status : Es ist der Befehl, der die letzte Aktion ausführt
    ausgeführt (öffnen / schließen)

-   Öffnen : Es ist der Befehl, der das Schloss öffnet

-   Schließen : Es ist der Befehl, der das Schließen des Schlosses ermöglicht

-   Batterie : Es ist der Batteriebefehl

\.

### Konfiguration des Moduls 

\.

> **Warning**
>
> Obwohl dieses Modul im Akkubetrieb ist, verwendet es die Flirs-Technologie.
> Dies bedeutet, dass er keine Vorstellung davon hat, aufzuwachen und zu erwachen. Er
> Konfigurationsänderungen werden nahezu in Echtzeit wiederhergestellt
> als Sektormodul.

\.

Wenn Sie das Modul entsprechend Ihrer Konfiguration konfigurieren möchten
Installation müssen Sie über die Schaltfläche "Konfiguration" der
Jeedom OpenZwave Plugin.

\.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\.

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\.

![Config1](images/polycontrol.danalock/bouton_configuration.jpg)

\.

Parameterdetails :

\.

-   1 :  : 
    
    verrouillé

-   2 : 
    

-   3 : 
    

-   4 : 

-   5 : Automatische Sperre 0-60 Wie viele Sekunden ab dem Moment
    Das Schloss wurde entsperrt, um es automatisch zu schließen
    wieder. Wenn 0, ist es deaktiviert.

-   6 : Sperrsignal deaktivieren oder aktivieren oder
    Entsperren (0 = Deaktivieren, 1 = Aktivieren.)

-   7 : Batterietyp : Stellen Sie den Batterietyp ein
    versorgt das Gerät mit Strom.

-   8 : Batteriealarm : Wenn der Akkuladestand niedriger ist
    Bei diesem Wert informiert das Gerät den Benutzer mit einem Signal
    Ton nach dem Verriegeln oder Entriegeln.

-   9 : Turn & Go 0 = Turn & Go off, 1 = Turn & Go On. Latch & Go
    dreht den Griff automatisch, wenn
    manuell bedienen.

-   10 : Brake & GoBack 0 = Deaktiviert. 1⇒15 Sekunden zum Bremsen. Wann
    Dann werden die Feststellbremsen für x Sekunden verwendet
    gehe 75 Grad zurück. Entwickelt für spezielle Türen
    ohne Hebel. (Nur beim Entsperren).

-   11 : Async 0 = Async aus, 1 = Async ein. Wenn Async aktiviert ist, wird die
    Die Sperre wird automatisch kalibriert, wenn sie bereits entsperrt ist und
    Wird wieder entriegelt (wird für Türschlösser verwendet
    spezielle Tür).

-   12 : Betriebsbericht

\.

### Gruppen 

\.

Dieses Modul hat nur eine Zuordnungsgruppe.

\.

![Groupe](images/polycontrol.danalock/groupe.jpg)

\.

Gut zu wissen 
------------

\.

### Besonderheiten 

\.

> **Tip**
>
> Obwohl dieses Modul im Akkubetrieb ist, verwendet es die Flirs-Technologie.
> Dies bedeutet, dass er keine Vorstellung davon hat, aufzuwachen und zu erwachen. Er
> Konfigurationsänderungen werden nahezu in Echtzeit wiederhergestellt
> als Sektormodul.

\.

> **Tip**
>
> Dieses Modul gibt seinen Status zurück, wenn Sie das Schloss von Hand bedienen
> Der Status wird aktualisiert. \.

### Alternative visuelle 

\.

![vuewidget](images/polycontrol.danalock/vuewidget.jpg)

\.

Aufwachen 
------

\.

Für dieses Modul gibt es kein Konzept zum Aufwecken.

\.

Faq. 
------

\.

Keine Vorstellung von Aufwachen in diesem Modul; Lesen Sie den Abschnitt Besonderheiten.

\.

**@noumea**
