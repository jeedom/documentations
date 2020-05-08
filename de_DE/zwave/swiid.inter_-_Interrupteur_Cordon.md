Swiid Switch - Swiidinter 
===============================

\.

-   **Das Modul**

\.

![module](images/swiid.inter/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/swiid.inter/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

SwiidInter ist der erste Kabelschalter in der Umgebung
Z-Wave-Heimautomation, die klein und diskret genug ist
vergleichbar mit einem normalen Kabelschalter.

Es kann wie jedes manuell verwendet werden
gewöhnlicher und entfernter Kabelschalter über Controller
Z-Wave.

Der SwiidInter-Schalter bietet auch Zuordnungsmöglichkeiten
und das in beide Richtungen. Somit kann es automatisch von a aktiviert werden
andere Z-Wave-Geräte im selben Netzwerk, z
Präsenzmelder ausgelöst. Umgekehrt mit Unterstützung
kurz oder mit einem langen Druck kann es zwei separate Gruppen von steuern
Zugeordnete Z-Wave-Geräte : zum Beispiel jeder
andere Lichter in dem Raum, in dem sich Ihr Schalter befindet
SwiidInter.

Der SwiidInter-Switch wird genau wie ein Switch installiert
an gewöhnlicher Schnur : Es ist also eine schnelle und einfache Installation
erfordert keine speziellen Werkzeuge. Es muss dann konfiguriert werden zu
In ein Z-Wave "Netzwerk" zu integrieren, kann dieses Netzwerk so einfach sein
Nur eine Fernbedienung, die Ihren SwiidInter-Schalter steuert
distance.

\.

Funktionen 
---------

\.

-   Kabelschalter beide manuell verwendbar
    (kurzes Drücken) und per Fernfunk (Z-Wave)

-   Verwenden Sie anstelle eines Standard-Kabelschalters
    eine Nachttisch-, Tisch- oder Schreibtischlampe

-   EIN / AUS-Funktion

-   Aktivierung eines Hausautomationsszenarios bei langer Druckmaschine
    (Z-Wave-Assoziation)

-   Abmessungen vergleichbar mit einem normalen Kabelschalter

-   Wird wie ein gewöhnlicher Kabelschalter installiert

-   Geeignet für alle Arten von Lampen

\.

Technische Daten 
---------------------------

\.

-   Modultyp : Z-Wave Empfänger

-   Farbe: : noire

-   Alimentation: 230 V ± 10% - 50 Hz

-   Maximale Leistung : 660W

-   Verbrauch : &lt; 0,08W

-   Schutzindex: IP20

-   Funkprotokoll: Z-Wave® (SDK 4.55)

-   Radiofrequenz : 868,42 MHz (EU)

-   Dist. transmission: Bis zu 30 m in Innenräumen (abhängig von den Materialien)

-   Temp. Funktionieren : 0 - 40 ° C.

-   Ein / Aus-Anzeige : Blaue LEDs

-   Abmessungen : 84 x 32 x 29 mm

-   EU-Standards : EN 61058-2-1:2011 EN 55015

\.

Moduldaten 
-----------------

\.

-   Machen Sie : Swiid

-   Nachname : Swiidinter

-   Hersteller ID : 358

-   Produkttyp : 256

-   Produkt-ID : 256

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
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Taste
> auf der Rückseite gemäß der Papierdokumentation

\.

![inclusion](images/swiid.inter/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/swiid.inter/information.jpg)

\.

### Bestellungen 

\.

Sobald das Modul erkannt wurde, lauten die dem Modul zugeordneten Befehle
disponibles.

\.

![Bestellungen](images/swiid.inter/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Staat : Es ist der Befehl, mit dem der Status des
    Licht

-   EIN : Es ist die Steuerung, die das Licht einschaltet

-   AUS : Es ist der Befehl, der das Licht ausschaltet

\.

Beachten Sie, dass sich im Dashboard alle Informationen auf derselben befinden
icone

\.

### Konfiguration des Moduls 

\.

Sie können das Modul entsprechend Ihrer Konfiguration konfigurieren
Installation. Gehen Sie dazu auf die Schaltfläche "Konfiguration" der
Jeedom OpenZwave Plugin.

\.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\.

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\.

![Config1](images/swiid.inter/config1.jpg)

\.

Parameterdetails :

\.

Mit diesem Parameter können Sie das Verhalten auswählen, wenn Sie das verknüpfen
swiidinter zu einem anderen Modul wechseln (lange drücken)

\.

-   Inaktiv : hat keine Auswirkung auf andere Lichter

-   Nur AUS : wird nur wirksam sein, um andere auszuschalten
    Lichter

-   NUR NUR : wird nur wirksam sein, um die anderen einzuschalten
    Lichter

-   EIN und AUS (vollständig) : wird effektiv sein, um die ein- und auszuschalten
    andere Lichter

\.

### Gruppen 

\.

Dieses Modul hat zwei Zuordnungsgruppen.

\.

![Groupe](images/swiid.inter/groupe.jpg)

\.

> **Important**
>
> Für einen optimalen Betrieb Ihres Moduls. Jeedom muss
> mindestens mit Gruppe 2 verbunden sein.

\.

Verbinde dich mit einem anderen Licht 
----------------------------

\.

Den Swiidinter mit einem anderen Licht verbinden und davon profitieren können
Wenn Sie ein anderes Licht einschalten, fügen Sie es einfach der Gruppe hinzu
der Assoziation 1 über den oben genannten Bildschirm.

\.

Gut zu wissen 
------------

\.

### Alternative visuelle 

\.

![vuewidget](images/swiid.inter/vuewidget.jpg)

\.

Wach auf 
-------

\.

Keine Vorstellung von Aufwecken auf diesem Modul.

\.

Faq. 
------

\.

Haben Sie die beiden Module kombiniert und das Teil richtig konfiguriert?
spezifisch.

\.

Nein, nein. Das Modul erlaubt es nicht.

\.

**@sarakha63**
