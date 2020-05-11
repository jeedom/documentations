D-Link DCH-Z110 - "3 in 1 Öffnung" 
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

Der Detektor DCH-Z110 bietet 3 verschiedene Funktionen : Erkennung
Öffnung, Temperatursensor und Lichtdetektor. Es ist
besteht aus zwei Teilen : ein Detektor und ein Magnet. Sie sind entworfen
an einer Tür oder einem Fenster mit dem Magneten an der Tür anbringen
Öffnungsteil und Detektor am festen Teil.

Durch Öffnen der Tür oder des Fensters wird der Magnet ferngehalten
Detektor, der den Detektor auslöst, der ein Z-Wave-Signal sendet
Alarm, wenn das System scharfgeschaltet ist (dieses Signal kann von a verwendet werden
Sirene oder von einer Hausautomationsbox zum Beispiel). Der Sensor kann auch
für die automatische Lichtsteuerung verwendet werden, abhängig von der
Helligkeitsstufe. Beispielsweise sendet der Sensor ein Signal an
Z-Wave-Schalter zum Einschalten des Lichts beim Öffnen der Tür
und der Raum ist dunkel.

Der Detektor erhöht auch die Helligkeit und die Temperatur, d.h
im Falle einer wesentlichen Änderung und jedes Mal das Öffnen / Schließen
erkannt wird. Ein Z-Wave-Controller (Fernbedienung, Dongle…?) Ist
notwendig, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie haben
bereits ein bestehendes Netzwerk.

\.

Funktionen 
---------

\.

-   3 in 1 Detektor: Blende, Temperatur, Licht

-   Optimierte Antennenreichweite

-   Verwendung für Hausautomations- oder Sicherheitsanwendungen

-   Taste zum Ein- / Ausschließen des Detektors

-   Autoprotection

-   Anzeige für niedrigen Batteriestand

-   Klein, diskret und ästhetisch

-   Benutzerfreundlichkeit und Installation

\.

Technische Daten 
---------------------------

\.

Offizielle Seite :
<http://www.dlink.com/-/media/Consumer_Products/DCH/DCH%20Z110/Datasheet/DCH_Z110_Datasheet_FR.pdf>

Anderer technischer Link :
<http://www.kafkas.gr/uploads/Pdf/182732/DCH-Z120_183010381_01_Z02.PDF>

![caracteristiques
Techniken](images / dlink.dchz110 / caracteristiques_techniques.jpg)

\.

Moduldaten 
-----------------

\.

-   Machen Sie : D-Link

-   Modell : DCH-Z110 Tür- und Fensteröffnungsdetektor
    mydlink ™ Home

-   Hersteller : FIBARO-System

-   Hersteller ID : 264 \ [0x0108 \]

-   Produkttyp : 2 \ [0x0002 \]

-   Produkt-ID : 14 \ [0x000e \]

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
> Installieren Sie das Modul nicht am Fenster / an der Tür, bevor Sie es haben
> richtig konfiguriert, und achten Sie auf die Ausrichtung von
> der Magnet bei Tests auf einer ebenen Fläche und während der Installation.
> (Verwenden Sie ggf. Unterlegscheiben.) Um dieses Modul in den Modus zu versetzen
> Aufnahme ist es notwendig, dreimal auf die Assoziationstaste in 1.5 zu drücken
> zweitens gemäß seiner Dokumentation. (konstant rot blinkend
> im Assoziationsmodus)

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
disponibles.

\.

![Befehle](images/dlink.dchz110/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Öffnung : Es ist der Befehl, der eine Erkennung auslöst
    d'ouverture

-   Temperatur : es ist der Befehl, der es erlaubt, die
    Temperatur

-   Helligkeit : Es ist der Befehl, der es ermöglicht, die Helligkeit zu erhöhen

-   Sabotage : Dies ist der Sabotagebefehl (er wird ausgelöst in
    herausreißen)

-   Batterie : Es ist der Batteriebefehl

\.

### Konfiguration des Moduls 

\.

> **Wichtig**
>
> Speichern Sie dann während einer ersten Aufnahme oder Änderung
> Wecken Sie das Modul immer durch Drücken der Zuordnungstaste auf.
> Es sollte rot blinken und den Status ändern.

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
    Herstellerdokumentation)

-   6: Multisensor-Betriebsart (siehe
    Herstellerdokumentation). Empfohlener Wert : 7

-   7: personalisierte Multisensor-Betriebsart (siehe
    auf der Dokumentation des Herstellers). Empfohlener Wert : 20 (für
    funktionale Öffnung haben)

-   9: Ermöglicht die Festlegung, wie lange das AUS-Signal dauern soll
    wird an Module gesendet, die der Gruppe 2 zugeordnet sind

-   10: Mit dieser Option können Sie die Dauer zwischen zwei Batterieberichten definieren (einer
    Einheit = Parameter 20)

-   11: Mit dieser Option können Sie die Dauer zwischen zwei sich selbst öffnenden Berichten definieren
    (eine Einheit = Parameter 20)

-   12: Hier können Sie die Dauer zwischen zwei Auto definieren
    Helligkeit (eine Einheit = Parameter 20). Empfohlener Wert : 6

-   13: Hier können Sie die Dauer zwischen zwei Auto definieren
    Temperatur (eine Einheit = Parameter 20). Empfohlener Wert : 2

-   20: Dauer eines Intervalls für die Parameter 10 bis 13. Wert
    empfohlen : 10

-   21: Temperaturänderungswert in ° F zum Auslösen von a
    rapport

-   22: Wert in% der auszulösenden Helligkeitsänderung
    ein Bericht. Empfohlener Wert : 10

\.

### Gruppen 

\.

Dieses Modul hat zwei Zuordnungsgruppen, nur die erste
indispensable.

\.

![Groupe](images/dlink.dchz110/groupe.jpg)

\.

Gut zu wissen 
------------

Zuordnung / Benachrichtigung mit anderen Modulen möglich (Beispiel: Meerjungfrau
DCH-Z510 Glockenspielbenachrichtigung beim Öffnen von Tür / Fenster)

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

-   Lassen Sie die Zuordnungstaste los und drücken Sie sie erneut

-   Verringern Sie das Aufweckintervall in der Modulkonfiguration / im System
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

