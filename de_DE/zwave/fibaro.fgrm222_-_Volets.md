# Fibaro FGRM-222 "Rollladen"

**Das Modul**

![module](images/fibaro.fgrm222/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/fibaro.fgrm222/vuedefaut1.jpg)

## Zusammenfassung

Mit dem Mikromodul FGRM-222 können Sie motorisierte Rollläden mit elektronischen Stopps, Jalousien oder sogar Garagentore mit dem Z-Wave-Protokoll steuern, während Sie Ihren vorhandenen Schalter behalten. So können Sie den angeschlossenen Motor über den vorhandenen Schalter, einen Z-Wave-Sender oder direkt über die Taste am Mikromodul bedienen.

Darüber hinaus ist dieses Mikromodul in der Lage, den momentanen (W) und kumulativen (KWh) Stromverbrauch der angeschlossenen Geräte zu übertragen.

Zur Einbindung dieses Moduls in Ihr Netzwerk wird ein Z-Wave Controller (Fernbedienung, Dongle etc.) benötigt, wenn Sie bereits über ein bestehendes Netzwerk verfügen.

Jedes Z-Wave-Modul arbeitet als drahtloser Repeater mit den anderen Modulen, um eine vollständige Abdeckung Ihres Hauses zu gewährleisten.

Notiz : Dieses Modul benötigt zum Betrieb den Neutralleiter.

## Fonctions

-   Steuern Sie Ihre Jalousien oder Rollläden aus der Ferne
-   Kompatibel mit BSO und Jalousien mit Lamellenpositionierung
-   Wird hinter einem vorhandenen Switch installiert
-   Heben/Senken-Funktion und Positionierung
-   Kompatibel mit Motoren mit mechanischem oder elektronischem Stopp
-   Messung des momentanen und kumulativen Verbrauchs
-   Drahtloses Update mit der Fibaro Home Center 2 Box
-   Z-Wave-Netzwerkabdeckungstestfunktion
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Empfänger
-   Einspeisung : 230V, 50Hz
-   Energieverbrauch : &lt; 0,8W
-   Verdrahtung : 3 Adern, Neutralleiter erforderlich
-   Tragfähigkeit : 1000W
-   Frequenz : 868,42 MHz
-   Signalstärke : 1mW
-   Übertragungsdistanz : 50m Freifeld, 30m drinnen
-   Dimensions: 17 x 42 x 37 mm
-   Betriebstemperatur : 0-40 °C
-   Temperatur begrenzen : 105°C
-   Normen : LVD (2006/95/EG), EMV (2004/10B/EG), R&TTE (1999/5/EG))

## Moduldaten

-   Markieren : Fibar-Gruppe
-   Nachname : Fibaro FGRM-222
-   Hersteller-ID : 271
-   Geben Sie Produkt ein : 769
-   Produkt ID : 4097

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie die Inklusionstaste gemäß der Papierdokumentation dreimal drücken.

![inclusion](images/fibaro.fgrm222/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgrm222/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/fibaro.fgrm222/commandes.jpg)

![Aufträge](images/fibaro.fgrm222/commandes2.jpg)

Hier ist die Liste der Befehle :

-   Bundesland : Dies ist der Befehl, der Ihnen die Position Ihres Rollladens mitteilt
-   Positionierung : Dies ist der Befehl, mit dem Sie den Öffnungsprozentsatz definieren können
-   Hoch : Dies ist der Befehl, mit dem Sie den Verschluss vollständig öffnen können
-   Runter : Dies ist der Befehl, mit dem Sie den Verschluss vollständig schließen können
-   Aktualisierung : Dies ist der Befehl, mit dem Sie die Position des Rollladens erneut anfordern können
-   Mächtig : Befehl zum Abrufen des Verbrauchs des Moduls
-   Verbrauch : Befehl zum Ermitteln der vom Modul verbrauchten Momentanleistung
-   PAUSE : Befehl zum Stoppen der Rollladenbewegung
-   BSO STOPPEN : Befehl zum Stoppen der Bewegung (im verstellbaren Lamellenmodus)
-   Neigung : Ermöglicht das Wenden der Lamellen (verstellbarer Lamellenmodus))
-   Abfall : Ermöglicht das Ablehnen der Lamellen (einstellbarer Lamellenmodus))
-   Nicht : Ermöglicht es Ihnen, den Schritt für einen Druck auf Decline oder Incline zu definieren

### Modul-Setup

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/fibaro.fgrm222/config1.jpg)

![Config2](images/fibaro.fgrm222/config2.jpg)

![Config3](images/fibaro.fgrm222/config3.jpg)

![Config4](images/fibaro.fgrm222/config4.jpg)

Parameterdetails :

-   1: ermöglicht Ihnen, das Modul zu blockieren (um einen Verschluss einzufrieren) (im Falle des Drückens eines Schalters)
-   2: dasselbe, aber für zwave-Befehle
-   3: Art von Berichten (klassisch oder fibar)
-   10: Funktionsweise (Jalousie, Rollladen etc.))
-   12: Dauer einer kompletten Umdrehung (im Jalousiemodus)
-   13: können Sie wählen, wann die Lamellen in ihre vorherige Position zurückkehren sollen
-   14: ermöglicht die Auswahl des Schaltertyps
-   17: können Sie wählen, wie lange nach dem in 18 definierten Limit der Verschluss stoppt
-   18: Sicherheitsleistung für den Motor
-   22: NA
-   29: ermöglicht Ihnen, den Verschluss zu kalibrieren
-   30 bis 35: ermöglicht es, das Verhalten des Moduls vor den verschiedenen zwave-Alarmen zu definieren
-   40: Leistungsdelta zum Auslösen einer Rückkopplung (auch außerhalb des in 42)
-   42: Feedback-Zeitraum
-   43: Energiedelta zum Auslösen einer Rückkopplung (auch außerhalb des in 42)
-   44: können Sie wählen, ob der Verbrauch und die Leistung den des Moduls selbst berücksichtigen müssen oder nicht
-   50: ermöglicht es Ihnen zu wählen, ob das Modul die Informationen an die verknüpften Knoten im Szenenmodus oder im Verknüpfungsmodus senden soll

### Groupes

Dieses Modul hat 3 Assoziationsgruppen, nur die dritte ist wesentlich.

![Groupe](images/fibaro.fgrm222/groupe.jpg)

## Gut zu wissen

### Reset

![Config5](images/fibaro.fgrm222/config5.jpg)

Sie können Ihren Verbrauchszähler zurücksetzen, indem Sie auf diese Schaltfläche klicken, die auf der Registerkarte System verfügbar ist.

### Important

> **Wichtig**
>
> Damit die Statusrückmeldung in Jeedom funktioniert, muss die Kalibrierung des Geräts erzwungen werden (Parameter 29 auf „Ja“) und die Positionierung muss aktiv sein (Parameter 10 auf die Werte „Active Direct“, „Active Venetian“ oder „Tür aktivieren").


## Wakeup

Keine Vorstellung von Aufwachen bei diesem Modul.
