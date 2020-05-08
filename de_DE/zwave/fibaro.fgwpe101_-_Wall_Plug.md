Fibaro FGRWPE-101 "Wandstecker" 
=============================

\.

-   **Das Modul**

\.

![module](images/fibaro.fgwpe101/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/fibaro.fgwpe101/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

Der Fibaro Wall Plug ist ein universeller Empfänger-Sockel-Sender unter
Form eines Adapters zum Anschließen an eine Steckdose des Netzwerks
elektrisch, kompatibel mit Z-Wave Standard. Es ermöglicht Ihnen zu verwalten
jedes Gerät mit einer maximalen Leistung von 2,5 kW, während
Integration der Funktionalität zur Messung der Wirkleistung des Stroms und
Energieverbrauch von Geräten. Dieses Modul ist mit einem ausgestattet
Lichtring mit LEDs, die den Status und den Verbrauch anzeigen
von Energie von jedem angeschlossenen Gerät. Der Fibaro Wall Plug kann sein
gesteuert durch einen Knopf an seinem Gehäuse oder von einem beliebigen
Z-Wave Standard kompatibler Controller

\.

Funktionen 
---------

\.

-   Wird von einem Controller gesteuert, der mit dem Z-Wave-Standard kompatibel ist.

-   Mikrochip-Steuerung.

-   Ausführungselement: Relais.

-   Messung der Wirkleistung von Strom und elektrischer Energie
    des Empfängers.

\.

Technische Daten 
---------------------------

\.

-   Modultyp : Z-Wave Empfänger

-   Versorgung : 230 V, 50 Hz

-   Stromverbrauch : bis zu 0,8W

-   Maximale Belastung : 2.5kW

-   Frequenz : 868,42 MHz EU

-   Übertragungsentfernung : 50 m freies Feld, 30 m drinnen

-   Dimensions: 17 x 42 x 37 mm

-   Betriebstemperatur : 0-40 ° C.

-   Temperatur begrenzen : 105°C

-   Standards : LVD (2006/95 / WE), EMC (2004/108 / EC), R & TTE (1999/5 / WE)

\.

Moduldaten 
-----------------

\.

-   Machen Sie : Fibar Group

-   Name : Wandstecker FGWPE-101

-   Hersteller ID : 271

-   Produkttyp : 1536

-   Produkt-ID : 4096

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
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Taste dreimal
> Einschlussknopf gemäß seiner Papierdokumentation.

\.

![inclusion](images/fibaro.fgwpe101/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/fibaro.fgwpe101/information.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
disponibles.

\.

![Befehle](images/fibaro.fgwpe101/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Zustand : Es ist der Befehl, mit dem der Status des
    prise

-   Ein : Dies ist der Befehl, der die Steckdose einschaltet

-   Aus : Es ist der Befehl, der es ermöglicht, den Fang zu löschen

-   Macht : Dies ist der Befehl, der die momentane Leistung erhöht
    verbraucht

-   Verbrauch : Es ist die Bestellung, die den Gesamtverbrauch angibt

\.

Beachten Sie, dass im Dashboard die Befehle ON / OFF / STATUS zusammengefasst sind
in einer Taste.

\.

### Konfiguration des Moduls 

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

![Config1](images/fibaro.fgwpe101/config1.jpg)

![Config2](images/fibaro.fgwpe101/config2.jpg)

![Config3](images/fibaro.fgwpe101/config3.jpg)

![Config4](images/fibaro.fgwpe101/config4.jpg)

\.

Parameterdetails :

\.

-   1: ermöglicht das Blockieren des Moduls in immer EIN

-   16: Ermöglicht es Ihnen, sich den letzten Zustand im Falle eines Stromausfalls zu merken
    courant

-   34: Mit dieser Option können Sie die Art des Alarms im Zwave-Netzwerk auswählen
    muss reagieren

-   35: Hier können Sie festlegen, wie die Steckdose auf Alarme reagiert

-   39: Legt die Dauer des Alarms fest

-   40: definiert, wie stark die Leistung variieren muss
    erhöhen (in%)

-   42: wie im Standardmodus (bis zu 5 Mal pro Schritt definiert in
    Parameter 43)

-   43: Leistungsanstiegsintervall

-   45: Verbrauchsanstiegsintervall (in kWh 10 = 0,1 kWh)

-   47: Intervall in Sekunden für die unabhängige Berichterstattung von Informationen
    einer Variation

-   49: Berücksichtigen Sie den Verbrauch des Moduls selbst in der
    valeurs

-   50: Mindestwert von Parameter 52

-   51: Maximalwert von Parameter 52 verwendet

-   52: Maßnahmen, die ergriffen werden müssen, wenn die Leistung die in definierten Grenzen überschreitet
    Parameter 50 und 51

-   60: Strom, ab dem der Stecker lila blinkt

-   61: Farbe, wenn der Stecker an ist

-   62: Farbe bei ausgeschaltetem Stecker

-   63: Farbe, wenn ein Zwave-Alarm erkannt wird

-   70: Sicherheitsenergie (der Stecker wird unterbrochen, wenn die Stromversorgung unterbrochen wird
    wird diese Schwelle erreichen)

\.

### Gruppen 

\.

Dieses Modul hat 3 Assoziationsgruppen, nur die dritte ist
indispensable.

\.

![Groupe](images/fibaro.fgwpe101/groupe.jpg)

\.

Gut zu wissen 
------------

\.

### Zurücksetzen 

\.

![Config5](images/fibaro.fgwpe101/config5.jpg)

\.

Sie können Ihre Verbrauchsanzeige zurücksetzen, indem Sie auf klicken
auf dieser Schaltfläche auf der Registerkarte System verfügbar. Du musst wählen
PressButton.

\.

### Alternative visuelle 

\.

![vuewidget](images/fibaro.fgwpe101/vuewidget.jpg)

\.

Aufwachen 
------

\.

Keine Vorstellung von Aufwecken auf diesem Modul.

\.

Faq. 
------

\.

Lesen Sie den Abschnitt Zurücksetzen in diesem Dokument.

\.

**@sarakha63**
