# Swiid Switch - Swiidinter

**Das Modul**

![module](images/swiid.inter/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/swiid.inter/vuedefaut1.jpg)

Zusammenfassung
------

SwiidInter ist der erste Kabelschalter in der Z-Wave-Hausautomationsumgebung, der klein und diskret genug ist, um mit einem normalen Kabelschalter vergleichbar zu sein.

Es kann sowohl manuell wie ein gewöhnlicher Kabelschalter als auch remote über einen Z-Wave-Controller verwendet werden.

Der SwiidInter-Schalter bietet auch bidirektionale Zuordnungsmöglichkeiten. Somit kann es automatisch von einem anderen Z-Wave-Gerät im selben Netzwerk aktiviert werden, z. B. durch Auslösen eines Präsenzmelders. Umgekehrt kann es mit einem kurzen oder einem langen Druck zwei separate Gruppen von damit verbundenen Z-Wave-Geräten steuern : Zum Beispiel alle anderen Lichter in dem Raum, in dem sich Ihr SwiidInter-Schalter befindet.

Der SwiidInter-Schalter wird genau wie ein gewöhnlicher Kabelschalter installiert : Es handelt sich daher um eine einfache und schnelle Installation, für die kein spezielles Werkzeug erforderlich ist. Es muss dann für die Integration in ein Z-Wave- "Netzwerk" konfiguriert werden. Dieses Netzwerk kann so einfach sein wie eine einzelne Fernbedienung, die Ihren SwiidInter-Switch fernsteuert.

Fonctions
---------

-   Schalten Sie das Kabel ein, das sowohl manuell (kurzes Drücken) als auch per Funkfernbedienung (Z-Wave) verwendet werden kann
-   Verwendung als Ersatz für einen Standard-Kabelschalter an einer Nachttisch-, Tisch- oder Schreibtischlampe
-   EIN / AUS-Funktion
-   Aktivierung eines Hausautomationsszenarios bei langem Drücken (Z-Wave-Assoziation)
-   Abmessungen vergleichbar mit einem normalen Kabelschalter
-   Wird wie ein gewöhnlicher Kabelschalter installiert
-   Geeignet für alle Arten von Lampen

Technische Daten
---------------------------

-   Modultyp : Z-Wave Empfänger
-   Farbe : noire
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

Moduldaten
-----------------

-   Machen Sie : Swiid
-   Name : Swiidinter
-   Hersteller ID : 358
-   Produkttyp : 256
-   Produkt-ID : 256

Configuration
-------------

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Taste auf der Rückseite gemäß der Papierdokumentation

![inclusion](images/swiid.inter/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/swiid.inter/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/swiid.inter/commandes.jpg)

Hier ist die Liste der Befehle :

-   Zustand : Es ist der Befehl, mit dem der Status des Lichts ermittelt werden kann
-   Ein : Es ist die Steuerung, die das Licht einschaltet
-   Aus : Es ist der Befehl, der das Licht ausschaltet

Beachten Sie, dass sich im Dashboard alle Informationen auf demselben Symbol befinden

### Konfiguration des Moduls

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Gehen Sie dazu auf die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/swiid.inter/config1.jpg)

Parameterdetails :

Mit diesem Parameter können Sie das Verhalten auswählen, wenn Sie den Swiidinter einem anderen Modul zuordnen (langes Drücken)

-   Inaktiv : hat keine Auswirkung auf andere Lichter
-   Nur AUS : wird nur wirksam, um andere Lichter auszuschalten
-   NUR NUR : wird nur wirksam, um die anderen Lichter einzuschalten
-   EIN und AUS (vollständig) : wird effektiv sein, um andere Lichter ein- und auszuschalten

### Groupes

Dieses Modul hat zwei Zuordnungsgruppen.

![Groupe](images/swiid.inter/groupe.jpg)

> **Wichtig**
>
> Für einen optimalen Betrieb Ihres Moduls. Jeedom muss mindestens der Gruppe 2 zugeordnet sein.

Verbinde dich mit einem anderen Licht
----------------------------

Um den Swiidinter mit einem anderen Licht zu verknüpfen und von der Beleuchtung eines anderen Lichts zu profitieren, fügen Sie es einfach über den oben genannten Bildschirm der Zuordnungsgruppe 1 hinzu.

Wach auf
-------

Keine Vorstellung von Aufwecken auf diesem Modul.
