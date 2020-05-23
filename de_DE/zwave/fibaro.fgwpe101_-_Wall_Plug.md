# Fibaro FGRWPE-101 "Wandstecker"

**Das Modul**

![module](images/fibaro.fgwpe101/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/fibaro.fgwpe101/vuedefaut1.jpg)

## Zusammenfassung

Der Fibaro-Wandstecker ist ein universeller Empfänger-Sockel-Sender in Form eines Adapters zum Anschließen an eine Wandsteckdose im Stromnetz, der mit dem Z-Wave-Standard kompatibel ist. Sie können jedes Gerät mit einer maximalen Leistung von 2,5 kW verwalten und gleichzeitig die Funktionalität zur Messung der Wirkleistung des Stroms und des Energieverbrauchs der Geräte integrieren. Dieses Modul ist mit einem Lichtring mit LEDs ausgestattet, die den Status und den Energieverbrauch aller angeschlossenen Geräte anzeigen. Der Fibaro-Wandstecker kann über einen Knopf am Gehäuse oder über einen beliebigen Controller gesteuert werden, der mit dem Z-Wave-Standard kompatibel ist

## Funktionen

-   Wird von einem Controller gesteuert, der mit dem Z-Wave-Standard kompatibel ist.
-   Mikrochip-Steuerung.
-   Ausführungselement: Relais.
-   Messung der Wirkleistung von Strom und elektrischer Energie des Empfängers.

## Technische Daten

-   Modultyp : Z-Wave Empfänger
-   Versorgung : 230 V, 50 Hz
-   Stromverbrauch : bis zu 0,8W
-   Maximale Belastung : 2,5 kW
-   Frequenz : 868,42 MHz EU
-   Übertragungsentfernung : 50 m freies Feld, 30 m drinnen
-   Dimensions: 17 x 42 x 37 mm
-   Betriebstemperatur : 0-40 ° C
-   Temperatur begrenzen : 105°C
-   Standards : )

## Moduldaten

-   Machen Sie : Fibar Group
-   Name : Wandstecker FGWPE-101
-   Hersteller ID : 271
-   Produkttyp : 1536
-   Produkt-ID : 4096

## Konfiguration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Einschlusstaste gemäß der Papierdokumentation dreimal.

![inclusion](images/fibaro.fgwpe101/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgwpe101/information.jpg)

### Befehle

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/fibaro.fgwpe101/commandes.jpg)

Hier ist die Liste der Befehle :

-   Zustand : Es ist der Befehl, mit dem der Status des Sockets ermittelt werden kann
-   Ein : Dies ist der Befehl, der die Steckdose einschaltet
-   Aus : Es ist der Befehl, der es ermöglicht, den Fang zu löschen
-   Macht : Es ist der Befehl, der die momentan verbrauchte Energie aufruft
-   Verbrauch : Es ist die Bestellung, die den Gesamtverbrauch angibt

Beachten Sie, dass die Befehle ON / OFF / STATUS im Dashboard in einer einzigen Schaltfläche zusammengefasst sind.

### Konfiguration du module

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Parameter geklickt haben)

![Config1](images/fibaro.fgwpe101/config1.jpg)

![Config2](images/fibaro.fgwpe101/config2.jpg)

![Config3](images/fibaro.fgwpe101/config3.jpg)

![Config4](images/fibaro.fgwpe101/config4.jpg)

Parameterdetails :

-   1: ermöglicht das Blockieren des Moduls in immer EIN
-   16: Mit dieser Option können Sie sich bei einem Stromausfall den letzten Status merken
-   34: Hier können Sie auswählen, auf welche Art von Zwave-Netzwerkalarm der Socket reagieren soll
-   35: Hier können Sie festlegen, wie die Steckdose auf Alarme reagiert
-   39: Legt die Dauer des Alarms fest
-   40: )
-   42: )
-   43: Leistungsanstiegsintervall
-   45: )
-   47: Intervall in Sekunden für die Meldung von Informationen unabhängig von einer Abweichung
-   49: Berücksichtigen Sie den Verbrauch des Moduls selbst in den Werten
-   50: Mindestwert von Parameter 52
-   51: Maximalwert von Parameter 52 verwendet
-   52: Maßnahme, die zu ergreifen ist, wenn die Leistung die in den Parametern 50 und 51 definierten Grenzen verlässt
-   60: Strom, ab dem der Stecker lila blinkt
-   61: Farbe, wenn der Stecker an ist
-   62: Farbe bei ausgeschaltetem Stecker
-   63: Farbe, wenn ein Zwave-Alarm erkannt wird
-   70: )

### Gruppen

Dieses Modul hat 3 Assoziationsgruppen, nur die dritte ist wesentlich.

![Groupe](images/fibaro.fgwpe101/groupe.jpg)

## Gut zu wissen

### Zurücksetzen

![Config5](images/fibaro.fgwpe101/config5.jpg)

Sie können Ihren Verbrauchszähler zurücksetzen, indem Sie auf diese Schaltfläche auf der Registerkarte System klicken. Wählen Sie PressButton.

## Aufwachen

Keine Vorstellung von Aufwecken auf diesem Modul.
