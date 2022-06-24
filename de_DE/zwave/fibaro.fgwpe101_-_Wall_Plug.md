# Fibaro FGRWPE-101 "Wanddübel"

**Das Modul**

![module](images/fibaro.fgwpe101/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/fibaro.fgwpe101/vuedefaut1.jpg)

## Zusammenfassung

Der Fibaro Wall Plug ist ein universeller Empfänger-Steckdosen-Sender in Form eines Adapters zum Einstecken in eine Wandsteckdose des Stromnetzes, kompatibel mit dem Z-Wave-Standard. Es ermöglicht die Verwaltung jedes Geräts mit einer maximalen Leistung von 2,5 kW und integriert die Funktionalität zur Messung der Wirkleistung des Stroms und des Energieverbrauchs der Geräte. Dieses Modul ist mit einem Leuchtring mit LEDs ausgestattet, die den Status und den Energieverbrauch aller angeschlossenen Geräte anzeigen. Der Wall Plug Fibaro kann über eine Taste auf seinem Gehäuse oder von jedem mit dem Z-Wave-Standard kompatiblen Controller gesteuert werden

## Fonctions

-   Gesteuert von einem Controller, der mit dem Z-Wave-Standard kompatibel ist.
-   Mikrochip-Steuerung.
-   Ausführungselement: Relais.
-   Wirkleistungsmessung von Strom und elektrischer Energie des Empfängers.

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Empfänger
-   Einspeisung : 230V, 50Hz
-   Energieverbrauch : bis zu 0,8 W
-   Tragfähigkeit : 2,5kW
-   Frequenz : 868,42 MHz EU
-   Übertragungsdistanz : 50m Freifeld, 30m drinnen
-   Dimensions: 17 x 42 x 37 mm
-   Betriebstemperatur : 0-40 °C
-   Temperatur begrenzen : 105°C
-   Normen : LVD (2006/95/WE), EMV (2004/108/EG), R&TTE (1999/5/WE)

## Moduldaten

-   Markieren : Fibar-Gruppe
-   Nachname : Dübel FGWPE-101
-   Hersteller-ID : 271
-   Geben Sie Produkt ein : 1536
-   Produkt ID : 4096

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie die Inklusionstaste gemäß der Papierdokumentation dreimal drücken.

![inclusion](images/fibaro.fgwpe101/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgwpe101/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/fibaro.fgwpe101/commandes.jpg)

Hier ist die Liste der Befehle :

-   Bundesland : Dies ist der Befehl, der Sie über den Status des Sockets informiert
-   Wir : Dies ist der Befehl, mit dem Sie die Steckdose einschalten können
-   Aus : Dies ist der Befehl, mit dem Sie die Steckdose ausschalten können
-   Mächtig : Dies ist der Befehl, der die momentan verbrauchte Leistung meldet
-   Verbrauch : Es ist der Befehl, der den Gesamtverbrauch zurückgibt

Beachten Sie, dass die EIN/AUS/STATUS-Befehle auf dem Dashboard in einer einzigen Schaltfläche zusammengefasst sind.

### Modul-Setup

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/fibaro.fgwpe101/config1.jpg)

![Config2](images/fibaro.fgwpe101/config2.jpg)

![Config3](images/fibaro.fgwpe101/config3.jpg)

![Config4](images/fibaro.fgwpe101/config4.jpg)

Parameterdetails :

-   1: ermöglicht das Blockieren des Moduls in immer EIN
-   16: ermöglicht es Ihnen, sich bei einem Stromausfall an den letzten Zustand zu erinnern
-   34: können Sie auswählen, auf welche Art von Zwave-Netzwerkalarm die Steckdose reagieren soll
-   35: können Sie einstellen, wie die Steckdose auf Alarme reagieren soll
-   39: können Sie die Dauer des Alarms einstellen
-   40: ermöglicht Ihnen festzulegen, um wie viel die Leistung variieren muss, um erhöht zu werden (in %)
-   42: gleich, aber im Standardmodus (bis zu 5 Mal pro Schritt definiert in Parameter 43)
-   43: Ramp-up-Intervall
-   45: Verbrauchssteigerungsintervall (in kWh 10=0,1 kWh)
-   47: Intervall in Sekunden zum Melden von Informationen unabhängig von einer Abweichung
-   49: den Verbrauch des Moduls selbst in den Werten berücksichtigen
-   50: von Parameter 52 verwendeter Mindestwert
-   51: maximaler Wert, der von Parameter 52 verwendet wird
-   52: zu ergreifende Maßnahme, wenn die Leistung die in den Parametern 50 und 51 definierten Grenzen verlässt
-   60: Spannung, bei deren Überschreitung die Steckdose violett blinkt
-   61: Farbe, wenn der Stecker eingeschaltet ist
-   62: Farbe bei abgezogenem Stecker
-   63: Farbe, wenn ein Zwave-Alarm erkannt wird
-   70: Sicherheitsleistung (die Steckdose wird abgeschaltet, wenn die Leistung diesen Schwellenwert erreicht)

### Groupes

Dieses Modul hat 3 Assoziationsgruppen, nur die dritte ist wesentlich.

![Groupe](images/fibaro.fgwpe101/groupe.jpg)

## Gut zu wissen

### Reset

![Config5](images/fibaro.fgwpe101/config5.jpg)

Sie können Ihren Verbrauchszähler zurücksetzen, indem Sie auf diese Schaltfläche klicken, die auf der Registerkarte System verfügbar ist. Sie müssen PressButton auswählen.

## Wakeup

Keine Vorstellung von Aufwachen bei diesem Modul.
