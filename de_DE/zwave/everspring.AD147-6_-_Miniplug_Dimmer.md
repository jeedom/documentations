# Everspring Miniplug-Dimmer - AD147-6

 **Das Modul**

![module](images/everspring.AD147-6/module.jpg)

 **Das Jeedom-Visual**

![vuedefaut1](images/everspring.AD147-6/vuedefaut1.jpg)

## Zusammenfassung

Der Mini Dimmer Plug wurde entwickelt, um das Ein- und Ausschalten von Lichtern und elektrischen Geräten in Ihrem Zuhause zu steuern. Es ermöglicht auch eine Dimmfunktion, die nur mit Glühbirnen kompatibel ist. Mit einer Spannung von 220 - 240 V kann diese Dimmersteckdose eine Last von 6 W bis 250 W unterstützen.

Der Dimmer Mini Plug ist ein Z-Wave™-fähiges Gerät, das mit allen Z-Wave™-fähigen Netzwerken funktionieren soll. Es kann über eine Fernbedienung, PC-Software oder einen beliebigen Z-Wave-Controller in Ihrem Netzwerk gesteuert werden.

## Fonctions

-   Steuern Sie eine Lampe aus der Ferne
-   Plug-Modul zur direkten Integration zwischen einer Steckdose und der zu steuernden Last
-   ON / OFF- und Dimmer-Funktion zur Steuerung von Lampen
-   Lokale Verbrauchersteuerung über integrierten Taster
-   Z-Wave Plus-Technologie
-   Reduzierte Abmessungen, um fast unbemerkt zu bleiben
-   Status-LED am integrierten Taster
-   Z-Wave-Repeater-Funktion

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Empfänger
-   Einspeisung : 230V, 50Hz
-   Verbrauch : 0,6 W
-   Maximale Kraft : Ohmsche Last : 250W, Glühlampe : 250W, LED-Leuchtmittel (nicht dimmbar) : 6W
-   Frequenz : 868,42 MHz
-   Zielfernrohr : bis 70 m im Freien, bis 30 m im Innenbereich
-   Affichage: LED auf der Taste
-   Maße : Länge (inkl. Stecker) : 74mm Durchmesser : 52mm

## Moduldaten

-   Markieren : Everspring
-   Nachname : Dimmer Ministecker
-   Hersteller-ID : 96
-   Geben Sie Produkt ein : 3
-   Produkt ID : 3

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie seine Taste gemäß seiner Papierdokumentation dreimal drücken. Es ist wichtig zu beachten, dass dieses Modul direkt in die Einbeziehung geht, wenn es zu keinem Netzwerk gehört und mit Strom versorgt wird

![inclusion](images/everspring.AD147-6/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/everspring.AD147-6/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/everspring.AD147-6/commandes.jpg)

Hier ist die Liste der Befehle :

-   Intensität : Dies ist der Regler, um die Intensität des Haltens einzustellen
-   Wir : Dies ist der Befehl, mit dem Sie die Steckdose einschalten können
-   Aus : Dies ist der Befehl, mit dem Sie die Steckdose ausschalten können
-   Bundesland : Dies ist der Befehl, mit dem Sie den Status des Sockets erfahren können

Beachten Sie, dass auf dem Dashboard die Informationen zu Status, EIN/AUS und Intensität auf demselben Symbol zu finden sind.

### Modul-Setup

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/everspring.AD147-6/config1.jpg)

Parameterdetails :

-   1 : Dieser Parameter definiert den Statuswertbefehl, es ist nicht ratsam, diesen Wert zu ändern.
-   2 : Dieser Parameter definiert die Verzögerung für das Senden der Statusänderung an Gruppe 1 (Wert zwischen 3 und 25 Sekunden)
-   3 : Mit diesem Parameter wird festgelegt, ob die Steckdose ihren Status (EIN oder AUS) nach einer Spannungswiederkehr wieder einnimmt.
-   4 : Mit diesem Parameter wird festgelegt, ob die Steckdose im Dimmmodus oder im Ein/Aus-Modus betrieben wird

### Groupes

Dieses Modul hat 2 Assoziationsgruppen.
![Groupe](images/everspring.AD147-6/groupe.jpg)

> **Wichtig**
>
> Zumindest sollte Jeedom in Gruppe 1 landen

## Gut zu wissen

### Besonderheiten

-   Statusrückmeldungen können nicht unter 3 Sekunden konfiguriert werden.

## Wakeup

Keine Vorstellung von Aufwachen bei diesem Modul.
