Philio Smart Farbknopf 
=========================

\.

-   **Das Modul**

\.

![Modul](images/philio.psr04/Modul.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/philio.psr04/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

Dieser einzigartige Designschalter bietet mehrere Funktionen. Sie
kann es verwenden, um die Beleuchtung ein-, auszuschalten oder zu dimmen, anzupassen
die Position Ihrer Fensterläden, stellen Sie die Temperatur des Thermostats ein oder
Verwenden Sie es als Timer.

Sobald der Philio PSR04-Switch in Ihrem Z-Wave-Netzwerk enthalten ist
muss den Geräten zugeordnet sein, die Sie steuern möchten.
Es kann nur in direkter Verbindung mit betrieben werden
Geräte und kann keine in Ihrem Controller erstellten Szenen starten
Z-Wave Hausautomation.

Als Laufwerk verwendet, hat es das gleiche Verhalten wie ein Laufwerk
traditionell. Drehen Sie den Knopf nach rechts, um die zu erhöhen
Licht und nach links, um es zu verringern.

Außerdem können Sie diesen Schalter leicht bewegen und positionieren
am Ort Ihrer Wahl dank seiner magnetischen Unterstützung. Seine Konzeption
wasserdicht ermöglicht die Installation an Orten mit hoher Luftfeuchtigkeit wie z
Badezimmer.

Es verwendet den neuesten Chip der Z-Wave 500-Serie und sorgt so für eine Steigerung
50% Funkreichweite und 250% schnellere Kommunikationsgeschwindigkeit
schnell im Vergleich zu früheren Z-Wave-Produkten sowie ein Plus
Niedriger Energieverbrauch für mehr Autonomie.

\.

Funktionen 
---------

\.

-   Multifunktionsschalter

-   Z-Wave + Technologie

-   EIN / AUS und Dimmfunktion (Beleuchtung oder Fensterläden)

-   Integrierte Timerfunktion

-   Wasserdicht

-   Passt sich jedem Dekorationsstil an

-   Wiederaufladbarer Akku

-   Sehr geringer Energieverbrauch

-   Lange Akkulaufzeit (6 Monate pro Ladung)

-   Magnethalter

-   RGBW-Anzeige-LED

-   Einfach zu installieren

\.

Technische Daten 
---------------------------

\.

-   Versorgung : Lithium Polymer 3 Batterie.7 V, 220 mA v
    die Batterie : 6 Monate für 2 Stunden aufladen

-   Standby-Verbrauch : 18 uA

-   Verbrauch in Betrieb : 45mA

-   Frequenz : 868.42 MHz

-   Übertragungsentfernung : 100 m draußen, 40 m drinnen

-   Abmessungen :

Unterstützung : 71,16 x 10,94 mm (Durchmesser x Dicke) Taste : 59,99 x 14,89
mm (Durchmesser x Dicke) Unterstützung + Taste : 71,16 x 17,22 mm (Durchmesser
x Dicke) \ * Zertifizierungen :

EN 301 489-1, EN 301 489-3 EN 300 220-1, EN 300 220-2 EN62479, EN60950
FCC Teil 15 B, FCC Teil 15 C.

\.

Moduldaten 
-----------------

\.

-   Machen Sie : Philio

-   Name : PSR04 Smart Color Button

-   Hersteller ID : 316

-   Produkttyp : 9

-   Produkt-ID : 34

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
> Um dieses Modul in den Einschlussmodus zu versetzen, bringen Sie es in Position
> niedrig (Einschluss) und drücken Sie die Taste entsprechend seiner
> Papierdokumentation.

\.

![inclusion](images/philio.psr04/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/philio.psr04/information.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
verfügbar.

\.

![Befehle](images/philio.psr04/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Zustand : Es ist der Befehl, der die Tastenposition von 0 auf 0 verschiebt
    100%

-   Batterie : Dies ist der Befehl, der den Batteriestatus des
    Modul

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

![Config1](images/philio.psr04/config1.jpg)

\.

Parameterdetails :

\.

-   1: definiert die unterste Grenze (Position vollständig links)

-   2 : definiert das höchste Terminal (Position ganz rechts)

-   10 : Zeitintervall für den Batterieaufstieg

-   25 : ermöglicht zu definieren, ob das Modul seine Position sendet
    automatisch nach Drehung (1s Verzögerung) oder wenn es notwendig ist zu drücken
    auf die Schaltfläche, um das Senden zu bestätigen

-   26 : Aktiviert das Senden einer Szene oder nicht, wenn die zentrale Taste gedrückt wird
    (Parameter in Jeedom nicht berücksichtigt)

\.

### Gruppen 

\.

Dieses Modul hat zwei Zuordnungsgruppen, die erste ist die einzige
wesentlich. Die zweite erlaubt es, die Position zu Jeedom zu erhöhen

\.

![Groupe](images/philio.psr04/groupe.jpg)

\.

Gut zu wissen 
------------

\.

### Besonderheiten 

Gehen Sie wie folgt vor, um dieses Modul als Fernbedienung zu verwenden :

-   Fügen Sie den Controller in Gruppe 2 hinzu

In der Tat ist diese Art von Modul nicht dafür ausgelegt, direkt zu interagieren
mit einer Box aber direkt mit anderen Modulen. Jedoch in
Durch Hinzufügen von Jeedom zu Gruppe 2 kann die Position des erhalten werden
Schaltfläche und verwenden Sie es daher, um ein Szenario zu steuern (setzen Sie a
Volumen zum Beispiel)

Aufwachen 
------

\.

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Stellen Sie das Modul in die niedrige Position und drücken Sie die Taste

\.

Faq. 
------

\.

\.

Dieses Modul ist ein Batteriemodul, die neue Konfiguration wird nicht sein
Berücksichtigen Sie dies, wenn Sie das Modul aufwecken.

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
