# Fibaro FGRWPE-101 "Wandstecker"

**Das Modul**

![module](images/fibaro.fgwpe101/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/fibaro.fgwpe101/vuedefaut1.jpg)

## Zusammenfassung

. . . 

## Fonctions

-   Wird von einem Controller gesteuert, der mit dem Z-Wave-Standard kompatibel ist.
-   Mikrochip-Steuerung.
-   Ausführungselement: Relais.
-   .

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
-   Standards : LVD (2006/95 / WE), EMC (2004/108 / EC), R & TTE (1999/5 / WE)

## Moduldaten

-   Machen Sie : Fibar Group
-   Name : Wandstecker FGWPE-101
-   Hersteller ID : 271
-   Produkttyp : 1536
-   Produkt-ID : 4096

## Configuration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Einschlusstaste gemäß der Papierdokumentation dreimal.

![inclusion](images/fibaro.fgwpe101/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgwpe101/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/fibaro.fgwpe101/commandes.jpg)

Hier ist die Liste der Befehle :

-   Zustand : Es ist der Befehl, mit dem der Status des Sockets ermittelt werden kann
-   Ein : Dies ist der Befehl, der die Steckdose einschaltet
-   Aus : Es ist der Befehl, der es ermöglicht, den Fang zu löschen
-   Macht : 
-   Verbrauch : Es ist die Bestellung, die den Gesamtverbrauch angibt

.

### Konfiguration des Moduls

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/fibaro.fgwpe101/config1.jpg)

![Config2](images/fibaro.fgwpe101/config2.jpg)

![Config3](images/fibaro.fgwpe101/config3.jpg)

![Config4](images/fibaro.fgwpe101/config4.jpg)

Parameterdetails :

-   1: ermöglicht das Blockieren des Moduls in immer EIN
-   16: 
-   34: 
-   35: Hier können Sie festlegen, wie die Steckdose auf Alarme reagiert
-   39: Legt die Dauer des Alarms fest
-   40: 
-   42: 
-   43: Leistungsanstiegsintervall
-   45: Verbrauchsanstiegsintervall (in kWh 10 = 0,1 kWh)
-   47: 
-   49: 
-   50: Mindestwert von Parameter 52
-   51: Maximalwert von Parameter 52 verwendet
-   52: 
-   60: Strom, ab dem der Stecker lila blinkt
-   61: Farbe, wenn der Stecker an ist
-   62: Farbe bei ausgeschaltetem Stecker
-   63: Farbe, wenn ein Zwave-Alarm erkannt wird
-   70: 

### Groupes

.

![Groupe](images/fibaro.fgwpe101/groupe.jpg)

## Gut zu wissen

### Reset

![Config5](images/fibaro.fgwpe101/config5.jpg)

. .

## Wakeup

Keine Vorstellung von Aufwecken auf diesem Modul.
