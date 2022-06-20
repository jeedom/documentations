# Swiid-Schalter - Swiidinter

**Das Modul**

![module](images/swiid.inter/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/swiid.inter/vuedefaut1.jpg)

## Zusammenfassung

SwiidInter ist der erste On-Cord-Schalter in der Z-Wave-Heimautomatisierungsumgebung, der klein und diskret genug ist, um mit einem gewöhnlichen On-Cord-Schalter vergleichbar zu sein.

Es kann sowohl manuell wie jeder normale kabelgebundene Schalter als auch ferngesteuert über einen Z-Wave-Controller bedient werden.

Der SwiidInter-Switch bietet auch bidirektionale Zuordnungsmöglichkeiten. So kann es automatisch von einem anderen Z-Wave-Gerät im selben Netzwerk aktiviert werden, beispielsweise durch das Auslösen eines Präsenzmelders. Umgekehrt kann es durch kurzes oder langes Drücken zwei separate Gruppen von Z-Wave-Geräten steuern, die ihm zugeordnet wurden : zum Beispiel alle anderen Lichter in dem Raum, in dem sich Ihr SwiidInter-Schalter befindet.

Der SwiidInter-Schalter lässt sich wie ein normaler Kabelschalter installieren : Es ist daher eine einfache und schnelle Installation, die keine Spezialwerkzeuge erfordert. Es muss dann für die Integration in ein Z-Wave-„Netzwerk“ konfiguriert werden, dieses Netzwerk kann so einfach sein wie eine einzelne Fernbedienung, die Ihren SwiidInter-Switch fernsteuert.

## Fonctions

-   Kabelschalter sowohl manuell (kurzer Druck) als auch per Funk (Z-Wave)
-   Verwenden Sie es als Ersatz für einen Standard-Schnurschalter an einer Nachttisch-, Tisch- oder Schreibtischlampe
-   EIN/AUS-Funktion
-   Aktivierung eines Home-Automation-Szenarios bei langem Drücken (Z-Wave-Assoziation)
-   Abmessungen vergleichbar mit einem gewöhnlichen Schnurschalter
-   Lässt sich wie ein normaler Kabelschalter installieren
-   Geeignet für alle Arten von Lampenkolben

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Empfänger
-   Farbe : noire
-   Alimentation: 230 V ± 10 % - 50 Hz
-   Maximale Leistung : 660W
-   Verbrauch : &lt; 0,08W
-   Schutzzeichen: IP20
-   Funkprotokoll: Z-Wave® (SDK 4.55)
-   Radiofrequenz : 868,42 MHz (USA)
-   Dist. transmission: Bis zu 30 m im Innenbereich (je nach Material)
-   Temp. Funktion : 0 – 40 °C
-   Anzeige ein/aus : Blaue LEDs
-   Maße : 84 x 32 x 29 mm
-   EU-Normen : EN 61058-2-1:2011EN55015

## Moduldaten

-   Markieren : Swiid
-   Nachname : Swiidinter
-   Hersteller-ID : 358
-   Geben Sie Produkt ein : 256
-   Produkt ID : 256

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie gemäß seiner Papierdokumentation die Taste auf der Rückseite drücken

![inclusion](images/swiid.inter/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/swiid.inter/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/swiid.inter/commandes.jpg)

Hier ist die Liste der Befehle :

-   Bundesland : Dies ist der Befehl, der Sie über den Status des Lichts informiert
-   WIR : Dies ist der Befehl, der das Licht einschaltet
-   AUS : Dies ist der Befehl, der das Licht ausschaltet

Beachten Sie, dass auf dem Dashboard alle Informationen auf demselben Symbol zu finden sind

### Modul-Setup

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/swiid.inter/config1.jpg)

Parameterdetails :

Mit diesem Parameter können Sie das Verhalten auswählen, wenn Sie den Swiidinter mit einem anderen Modul verknüpfen (langes Drücken)

-   Leerlauf : hat keinen Einfluss auf andere Lichter
-   Nur AUS : wird nur wirksam, um die anderen Lichter auszuschalten
-   Nur an : wird nur wirksam, um die anderen Lichter einzuschalten
-   EIN und AUS (voll) : wird effektiv sein, um die anderen Lichter ein- und auszuschalten

### Groupes

Dieses Modul hat zwei Assoziationsgruppen.

![Groupe](images/swiid.inter/groupe.jpg)

> **Wichtig**
>
> Für den optimalen Betrieb Ihres Moduls. Jeedom muss mindestens der Gruppe 2 zugeordnet werden.

## Verbinden Sie sich mit einem anderen Licht

Um den Swiidinter mit einem anderen Licht zu verknüpfen und vom Einschalten eines anderen Lichts profitieren zu können, fügen Sie es einfach über den oben genannten Bildschirm zur Zuordnungsgruppe 1 hinzu.

## Wach auf

Kein Weckkonzept für dieses Modul.
