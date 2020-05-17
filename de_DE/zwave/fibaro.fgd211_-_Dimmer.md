# Fibaro Dimmer - REA-211

**Das Modul**

![module](images/fibaro.fgd211/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/fibaro.fgd211/vuedefaut1.jpg)

## Zusammenfassung

Mit dem Dimmermodul FGD-211 können Sie eine Lampe oder Deckenleuchte mithilfe des Z-Wave-Protokolls fernsteuern, während Sie Ihren vorhandenen Schalter beibehalten.

Sie können daher die angeschlossene Lampe aktivieren und ihre Intensität mit dem vorhandenen Schalter, einem Z-Wave-Sender oder direkt über die Taste am Mikromodul variieren. Es ist mit allen Arten von Lampen kompatibel, die Variationen unterstützen (Glühlampen, Fluo-Compact, LED, ...). Das Fibaro-Dimmermodul ist ein technologisches Konzentrat, erkennt automatisch die Art der angeschlossenen Last und ist gegen Überspannungen geschützt.

Bei Leuchtstofflampen, die kein Dimmen unterstützen, fungiert das Modul automatisch als Schaltmodul (nur EIN / AUS).

Es kann im 2-Draht-Modus (ohne Neutralleiter) verwendet werden, um einen vorhandenen Schalter zu ersetzen, oder im Dreileiter-Modus durch eine herkömmliche Modulversorgung (Phase + Neutralleiter).

Für Lampen mit sehr geringem Verbrauch (z. B. LED-Lampe) können Sie die Last (Bypass) FGB-001 verwenden, die einen korrekten Betrieb des Moduls ermöglicht. Ein Z-Wave-Controller (Fernbedienung, Dongle…) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits über ein vorhandenes Netzwerk verfügen. Jedes Z-Wave-Modul funktioniert wie ein drahtloser Repeater mit den anderen Modulen, um eine vollständige Abdeckung Ihres Hauses zu gewährleisten.

## Funktionen

-   Fernbeleuchtung
-   Wird hinter einem vorhandenen Switch installiert
-   EIN / AUS und Variationsfunktion
-   Verwendung im 2-Draht-Modus (Neutralleiter nicht erforderlich)
-   Automatische Lasterkennung
-   Geschützt gegen Überlastung
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Daten

-   Modultyp : Z-Wave Empfänger
-   Versorgung : 230 V, 50 Hz
-   Verkabelung : Neutral nicht erforderlich
-   Maximale Belastung : 25-500W (ohmsche Last) oder 1.5A (induktive Last)
-   Kompatibler Lampentyp (dimmbar) : Glühlampe, Kompaktleuchtstofflampe, Halogen (230 VAC und 12 VDC mit elektronischem Transformator), LED
-   Kompatibler Lampentyp (nicht dimmbar) : Kompaktleuchtstoff, LED
-   Sicherung : 2.5A
-   Frequenz : 868,42 MHz
-   Übertragungsentfernung : 50 m freies Feld, 30 m drinnen
-   Dimensions: 15 x 42 x 36 mm
-   Betriebstemperatur : 0-40 ° C
-   Temperatur begrenzen : 105°C
-   Standards : EN 55015 und EN 60669-2-1

## Moduldaten

-   Machen Sie : Fibar Group
-   Name : Fibaro FGMS-001 \ [Bewegungssensor \]
-   Hersteller ID : 271
-   Produkttyp : 256
-   Produkt-ID : 4106

## Konfiguration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Einschlusstaste gemäß der Papierdokumentation dreimal.

![inclusion](images/fibaro.fgd211/inclusion.jpg)

> **Spitze**
>
> Wenn Sie Ihr Modul bereits an der Wand integriert haben, können Sie es einschließen, indem Sie viele Rundfahrten am Schalter ausführen oder viele Druckvorgänge ausführen, wenn Sie einen Druckknopfschalter haben.

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgd211/information.jpg)

### Befehle

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/fibaro.fgd211/commandes.jpg)

Hier ist die Liste der Befehle :

-   Intensität : Es ist die Steuerung, mit der die Intensität des Lichts eingestellt werden kann
-   Ein : Es ist die Steuerung, die das Licht einschaltet
-   Aus : Es ist der Befehl, der das Licht ausschaltet
-   Zustand : Es ist der Befehl, mit dem der Status des Lichts ermittelt werden kann

Beachten Sie, dass sich im Dashboard alle Informationen auf demselben Symbol befinden

### Konfiguration du module

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Gehen Sie dazu auf die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/fibaro.fgd211/config1.jpg)

![Config2](images/fibaro.fgd211/config2.jpg)

![Config3](images/fibaro.fgd211/config3.jpg)

Parameterdetails :

-   1: ALL ON / ALL OFF-Funktionen : Wird nur verwendet, wenn Sie die REA-211 einem anderen Modul zugeordnet haben
-   6: Angenommen, Informationen werden an die Zuordnungsgruppe 1 gesendet
-   7: Ermöglicht das Überprüfen oder Nicht-Überprüfen des Status des zugeordneten Moduls vor dem Senden einer Bestellung
-   8: ermöglicht die Definition des Prozentsatzes der Variation (auto)
-   9: Dauer der Variation zwischen den beiden Extremen (manuell)
-   10: Dauer der Variation zwischen den beiden Extremen (auto)
-   11: ermöglicht die Definition des Prozentsatzes der Abweichung (manuell)
-   12: ermöglicht die Definition der maximal autorisierten Ebene
-   13: ermöglicht das Definieren der autorisierten Mindeststufe
-   14: WICHTIGE EINSTELLUNG : ermöglicht die Auswahl zwischen dem Schalter BISTABLE oder MONOSTABLE (Druckknopf)
-   15: Aktiviert die Option, mit der die Helligkeit bei doppeltem Drücken auf Maximum eingestellt werden kann (oder bei bistabil zurückkehren)
-   16: Option zum Aktivieren der Speicherung des letzten Status
-   17: ermöglicht die Auswahl zwischen dem Hin- und Her-Modus und dem Fernbedienungsmodus
-   18: ermöglicht die Synchronisation des Variationsniveaus mit den anderen zugeordneten Variatoren
-   19: Betriebsart des bistabilen Schalters (Umkehren oder nicht)
-   20: ermöglicht beispielsweise die Einstellung des Mindestpegels für dimmbare LEDS-Lampen
-   30: definiert den Betriebsmodus des Moduls beim Empfang eines Rundfunkalarmsignals
-   39: Alarmdauer definiert in Parameter 30
-   41: Ermöglicht das Aktivieren oder Nicht-Aktivieren der Szenenaktivierungsfunktion

### Gruppen

Dieses Modul hat drei Assoziationsgruppen, nur die dritte ist wesentlich.

![Groupe](images/fibaro.fgd211/groupe.jpg)

## Gut zu wissen

### Besonderheiten

> **Kaution**
>
> Der wichtigste Parameter der Konfiguration ist 14. Hier können Sie den verwendeten Schaltertyp auswählen. Standardmäßig ist der Typ auf monostabil eingestellt.

Wenn Sie das Modul ausschließen / einschließen möchten, ohne den Schalter zu zerlegen, können Sie den Schalter mehrmals drücken (oder bei einem bistabilen Schalter hin und her gehen)

### Alternative visuelle

![vuewidget](images/fibaro.fgd211/vuewidget.jpg)

## Aufwachen

Keine Vorstellung von Aufwecken auf diesem Modul.

## Faq.

Nein, nein. Dieses Modul kann durch mehrmaliges Drücken des Schalters ein- oder ausgeschlossen werden.
