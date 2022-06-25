# Fibaro-Dimmer - FGD-211

**Das Modul**

![module](images/fibaro.fgd211/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/fibaro.fgd211/vuedefaut1.jpg)

## Zusammenfassung

Mit dem Dimmer-Mikromodul FGD-211 können Sie eine Lampe oder Deckenleuchte über das Z-Wave-Protokoll fernsteuern, während Sie Ihren vorhandenen Schalter behalten.

Sie können also die angeschlossene Lampe bedienen und ihre Intensität über den vorhandenen Schalter, einen Z-Wave-Sender oder direkt über die Taste am Mikromodul variieren. Es ist mit jedem Lampentyp kompatibel, der das Dimmen unterstützt (Glühlampen, Kompaktleuchtstofflampen, LED usw.)). Das Fibaro-Dimmer-Mikromodul ist ein Technologiekonzentrat, es erkennt automatisch die Art der angeschlossenen Last und ist gegen Überspannungen geschützt.

Bei Leuchtstofflampen, die kein Dimmen unterstützen, fungiert das Modul dann automatisch als Schaltmodul (nur EIN/AUS).

Es kann im 2-Draht-Modus (ohne Neutralleiter) verwendet werden, wodurch ein vorhandener Schalter ersetzt wird, oder dreiadrig mit einer herkömmlichen Modulstromversorgung (Phase + Neutralleiter)).

Für Lampen mit sehr geringem Verbrauch (z. B. LED-Lampe) können Sie die FGB-001-Last (Bypass) verwenden, die den korrekten Betrieb des Moduls ermöglicht. Ein Z-Wave-Controller (Fernbedienung, Dongle etc.) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits über ein bestehendes Netzwerk verfügen. Jedes Z-Wave-Modul arbeitet als drahtloser Repeater mit den anderen Modulen, um eine vollständige Abdeckung Ihres Hauses zu gewährleisten.

## Fonctions

-   Steuern Sie die Beleuchtung aus der Ferne
-   Wird hinter einem vorhandenen Switch installiert
-   EIN/AUS- und Dimmfunktion
-   Verwendung im 2-Draht-Modus (Nullleiter nicht erforderlich)
-   Automatische Lasterkennung
-   Geschützt gegen Überlastung
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Empfänger
-   Einspeisung : 230V, 50Hz
-   Verdrahtung : neutral nicht notwendig
-   Tragfähigkeit : 25-500W (ohmsche Last) oder 1.5A (induktive Last)
-   Kompatibler Lampentyp (dimmbar) : Glühlampe, Fluocompact, Halogen (230 VAC und 12 VDC mit elektronischem Transformator), LED
-   Kompatibler Lampentyp (nicht dimmbar) : Kompaktleuchtstoff, LED
-   Sicherung : 2,5A
-   Frequenz : 868,42 MHz
-   Übertragungsdistanz : 50m Freifeld, 30m drinnen
-   Dimensions: 15 x 42 x 36 mm
-   Betriebstemperatur : 0-40 °C
-   Temperatur begrenzen : 105°C
-   Normen : EN 55015 und EN 60669-2-1

## Moduldaten

-   Markieren : Fibar-Gruppe
-   Nachname : Fibaro FGMS-001 \[Bewegungssensor\]
-   Hersteller-ID : 271
-   Geben Sie Produkt ein : 256
-   Produkt ID : 4106

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie die Inklusionstaste gemäß der Papierdokumentation dreimal drücken.

![inclusion](images/fibaro.fgd211/inclusion.jpg)

> **Tipp**
>
> Wenn Sie Ihr Modul bereits in die Wand integriert haben, können Sie es durch viele Umläufe auf dem Schalter oder viele Betätigungen, wenn Sie einen Druckknopfschalter haben, integrieren.

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgd211/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/fibaro.fgd211/commandes.jpg)

Hier ist die Liste der Befehle :

-   Intensität : Dies ist der Regler, mit dem Sie die Intensität des Lichts einstellen können
-   Wir : Dies ist der Befehl, der das Licht einschaltet
-   Aus : Dies ist der Befehl, der das Licht ausschaltet
-   Bundesland : Dies ist der Befehl, mit dem Sie den Status des Lichts erfahren können

Beachten Sie, dass auf dem Dashboard alle Informationen auf demselben Symbol zu finden sind

### Modulkonfiguration

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/fibaro.fgd211/config1.jpg)

![Config2](images/fibaro.fgd211/config2.jpg)

![Config3](images/fibaro.fgd211/config3.jpg)

Parameterdetails :

-   1: ALLE EIN / ALLE AUS-Funktionen : Wird nur verwendet, wenn Sie das FGD-211 mit einem anderen Modul verknüpft haben
-   6: Nehmen wir an, wie Informationen an die Assoziationsgruppe 1 gesendet werden
-   7: ermöglicht es, den Status des zugeordneten Moduls zu prüfen oder nicht, bevor ein Befehl gesendet wird
-   8: ermöglicht es Ihnen, den Prozentsatz der Variation zu definieren (auto)
-   9: Dauer der Variation zwischen den beiden Extremen (manuell)
-   10: Dauer der Variation zwischen den beiden Extremen (auto)
-   11: ermöglicht es Ihnen, den Prozentsatz der Variation zu definieren (manuell)
-   12: ermöglicht es Ihnen, die maximal zulässige Stufe zu definieren
-   13: ermöglicht es Ihnen, das zulässige Mindestniveau zu definieren
-   14: WICHTIGE EINSTELLUNG : ermöglicht Ihnen die Wahl zwischen einem BISTABILEN oder MONOSTABLEN Schalter (Druckknopf)
-   15: aktiviert die Option, die Helligkeit bei Doppeldruck (oder hin und her bei bistabil) auf Maximum zu stellen)
-   16: Option zum Aktivieren des Speicherns des letzten Zustands
-   17: können Sie zwischen dem Hin- und Her-Modus und dem Fernbedienungsmodus wählen
-   18: ermöglicht die Synchronisation des Dimmlevels mit den anderen zugeordneten Dimmern
-   19: Betriebsart des bistabilen Schalters (Invertierung oder nicht)
-   20: ermöglicht Ihnen beispielsweise die Einstellung des Mindestpegels für dimmbare LED-Lampen
-   30: ermöglicht es Ihnen, den Betriebsmodus des Moduls beim Empfang eines ausgestrahlten Alarmsignals festzulegen
-   39: Alarmdauer definiert in Parameter 30
-   41: ermöglicht Ihnen, die Szenenaktivierungsfunktion zu aktivieren oder nicht

### Groupes

Dieses Modul hat drei Assoziationsgruppen, nur die dritte ist wesentlich.

![Groupe](images/fibaro.fgd211/groupe.jpg)

## Gut zu wissen

### Besonderheiten

> **Kaution**
>
> Der wichtigste Parameter der Konfiguration ist die 14. Ermöglicht die Auswahl des verwendeten Schaltertyps. Standardmäßig ist der Typ auf monostabil eingestellt.

Wenn Sie das Modul ausschließen/einschließen möchten, ohne Ihren Schalter zu zerlegen, können Sie Ihren Schalter mehrmals drücken (oder bei einem bistabilen Schalter hin und her gehen)

### Alternative Optik

![vuewidget](images/fibaro.fgd211/vuewidget.jpg)

## Wakeup

Keine Vorstellung von Aufwachen bei diesem Modul.

## Häufig gestellte Fragen.

Nein. Dieses Modul kann durch mehrmaliges Drücken des Schalters ein- oder ausgeschlossen werden.
