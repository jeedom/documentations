" 
====================================

\.

-   **Das Modul**

\.

![module](images/dlink.dchz110/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/dlink.dchz110/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

 : 
. Es ist
 : . 

.




. 

Helligkeitsstufe. Beispielsweise sendet der Sensor ein Signal an
Z-Wave-Schalter zum Einschalten des Lichts beim Öffnen der Tür
und der Raum ist dunkel.

Der Detektor erhöht auch die Helligkeit und die Temperatur, d.h.
im Falle einer wesentlichen Änderung und jedes Mal das Öffnen / Schließen
erkannt wird. 

.

\.

Funktionen 
---------

\.

-   3 in 1 Detektor: Blende, Temperatur, Licht

-   Optimierte Antennenreichweite

-   

-   Taste zum Ein- / Ausschließen des Detektors

-   Selbstschutz

-   Anzeige für niedrigen Batteriestand

-   Klein, diskret und ästhetisch

-   Benutzerfreundlichkeit und Installation

\.

Technische Daten 
---------------------------

\.

 :
<http://www.dlink.com/-/media/Consumer_Products/DCH/DCH%20Z110/Datasheet/DCH_Z110_Datasheet_FR.pdf>

 :
<http://www.kafkas.gr/uploads/Pdf/182732/DCH-Z120_183010381_01_Z02.PDF>

![caracteristiques


\.

Moduldaten 
-----------------

\.

-   Machen Sie : 

-   Modell : 
    

-   Hersteller : 

-   Hersteller ID : ]

-   Produkttyp : ]

-   Produkt-ID : ]

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
> 
> 
> .
> 
> 
> . 
> 

\.

![config inclusion](images/dlink.dchz110/config-inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/dlink.dchz110/apres_inclusion.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
verfügbar.

\.

![Befehle](images/dlink.dchz110/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Öffnung : Es ist der Befehl, der eine Erkennung auslöst
    Öffnung

-   Temperatur : es ist der Befehl, der es erlaubt, die
    Temperatur

-   Helligkeit : Es ist der Befehl, der es ermöglicht, die Helligkeit zu erhöhen

-   Sabotage : 
    

-   Batterie : Es ist der Batteriebefehl

\.

### Konfiguration des Moduls 

\.

> **Wichtig**
>
> 
> .
> .

\.

Dann muss das Modul in konfiguriert werden
abhängig von Ihrer Installation. Dies erfordert das Durchgehen der Schaltfläche
"Konfiguration "des OpenZwave-Plugins von Jeedom.

\.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\.

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\.

![Config1](images/dlink.dchz110/config1.jpg)

![Config2](images/dlink.dchz110/config2.jpg)

\.

Parameterdetails :

\.

-   2: Ermöglicht das Anpassen des an die Module in der Gruppe gesendeten Signals
    Verein 2

-   4: Stellt die Helligkeitsstufe ein, ab der die
    Das in Parameter 2 definierte Signal wird an die Module gesendet, die dem zugeordnet sind
    Gruppe 2

-   5: Betriebsart (siehe die
    

-   6: Multisensor-Betriebsart (siehe
    .  : 7

-   7: 
    .  : 20 (für
    

-   9: Ermöglicht die Festlegung, wie lange das AUS-Signal dauern soll
    wird an Module gesendet, die der Gruppe 2 zugeordnet sind

-   10: Mit dieser Option können Sie die Dauer zwischen zwei Batterieberichten definieren (einer
    Einheit = Parameter 20)

-   11: Mit dieser Option können Sie die Dauer zwischen zwei sich selbst öffnenden Berichten definieren
    (eine Einheit = Parameter 20)

-   12: Hier können Sie die Dauer zwischen zwei Auto definieren
    .  : 6

-   13: Hier können Sie die Dauer zwischen zwei Auto definieren
    .  : 2

-   20: 
    empfohlen : 10

-   21: Temperaturänderungswert in ° F zum Auslösen von a
    Bericht

-   22: 
    .  : 10

\.

### Gruppen 

\.

Dieses Modul hat zwei Zuordnungsgruppen, nur die erste
wesentlich.

\.

![Groupe](images/dlink.dchz110/groupe.jpg)

\.

Gut zu wissen 
------------

: Meerjungfrau


\.

Alternative visuelle 
-----------------

\.

![Groupe](images/dlink.dchz110/autre_visuel_jeedom.jpg)

\.

Aufwachen 
------

\.

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   

-   
    (in Sekunden)

\.

Faq. 
------

\.

Dieses Modul wird durch Drücken der Zuordnungstaste aktiviert.

\.

Dieses Modul ist ein Batteriemodul, die neue Konfiguration wird sein
beim nächsten Aufwachen berücksichtigt. (Zuordnungstaste für
Kraft, daher das Interesse, das Modul nicht vor seiner zu installieren
gute Konfiguration)

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

