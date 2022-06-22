# Everspring Miniplug Ein/Aus – AN180-6

**Das Modul**

![module](images/everspring.AN180-6/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/everspring.AN180-6/vuedefaut1.jpg)

## Zusammenfassung

Die Mini-Ein/Aus-Steckdose wurde entwickelt, um das Ein- und Ausschalten von Lichtern und elektrischen Geräten in Ihrem Zuhause zu steuern. Mit einer Spannung von 220 - 240 V kann diese Steckdose eine Last von bis zu 1500 W (Widerstand), 800 W (Glühlampe), 200 W (Motor, Leuchtstoff, LED) unterstützen).

Der Mini On/Off Plug ist ein Z-Wave™-fähiges Gerät, das mit allen Z-Wave™-fähigen Netzwerken funktionieren soll. Es kann über eine Fernbedienung, PC-Software oder einen beliebigen Z-Wave-Controller in Ihrem Netzwerk gesteuert werden.

## Fonctions

-   Steuern Sie eine Lampe oder ein Gerät aus der Ferne
-   Plug-Modul zur direkten Integration zwischen einer Steckdose und der zu steuernden Last
-   ON/OFF-Funktion zur Steuerung von Lampen oder Geräten (kein Dimmen)
-   Lokale Verbrauchersteuerung über integrierten Taster
-   Z-Wave Plus-Technologie
-   Reduzierte Abmessungen, um fast unbemerkt zu bleiben
-   Status-LED am integrierten Taster
-   Z-Wave-Repeater-Funktion

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Empfänger
-   Einspeisung : 230V, 50Hz
-   Verbrauch : 0,6 W
-   Maximale Kraft : Ohmsche Last : 1500 W, Glühlampe : 800 W, Kompaktleuchtstofflampe : 200W, LED-Leuchtmittel (nicht dimmbar) 200W
-   Frequenz : 868,42 MHz
-   Zielfernrohr : bis 70 m im Freien, bis 30 m im Innenbereich
-   Affichage: LED auf der Taste
-   Maße : Länge (inkl. Stecker) : 74mm Durchmesser : 52mm

## Moduldaten

-   Markieren : Everspring
-   Nachname : Ministecker Ein/Aus
-   Hersteller-ID : 96
-   Geben Sie Produkt ein : 4
-   Produkt ID : 7

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie gemäß seiner Papierdokumentation dreimal auf seine Taste drücken. Es ist wichtig zu beachten, dass dieses Modul direkt in die Einbeziehung geht, wenn es zu keinem Netzwerk gehört und mit Strom versorgt wird

![inclusion](images/everspring.AN180-6/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/everspring.AN180-6/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die den Modulen zugeordneten Befehle verfügbar.

![Aufträge](images/everspring.AN180-6/commandes.jpg)

Hier ist die Liste der Befehle :

-   Bundesland : Dies ist der Befehl, mit dem Sie den Status der Steckdose erfahren können (Ein/Aus)
-   Wir : Dies ist der Befehl, mit dem Sie die Steckdose einschalten können
-   Aus : Dies ist der Befehl, mit dem Sie die Steckdose ausschalten können

Beachten Sie, dass auf dem Dashboard die Status-, EIN/AUS-Informationen auf demselben Symbol zu finden sind.

### Modulkonfiguration

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/everspring.AN180-6/config1.jpg)

Parameterdetails :

-   1 : Dieser Parameter definiert den Statuswertbefehl, es ist nicht ratsam, diesen Wert zu ändern.
-   2 : Dieser Parameter definiert die Verzögerung für das Senden der Statusänderung an Gruppe 1 (Wert zwischen 3 und 25 Sekunden)
-   3 : Mit diesem Parameter wird festgelegt, ob die Steckdose ihren Status (EIN oder AUS) nach einer Spannungswiederkehr wieder einnimmt.

### Groupes

Dieses Modul hat 2 Assoziationsgruppen.

![Groupe](images/everspring.AN180-6/groupe.jpg)

> **Wichtig**
>
> Zumindest sollte Jeedom in Gruppe 1 landen

## Gut zu wissen

### Besonderheiten

-   Statusrückmeldungen können nicht unter 3 Sekunden konfiguriert werden.

## Wakeup

Kein Weckkonzept für dieses Modul.
