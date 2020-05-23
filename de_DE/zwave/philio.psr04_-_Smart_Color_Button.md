# Philio Smart Color Button

**Das Modul**

![module](images/philio.psr04/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/philio.psr04/vuedefaut1.jpg)

## Zusammenfassung

Dieser einzigartige Designschalter bietet mehrere Funktionen. Sie können damit das Licht ein-, ausschalten oder dimmen, die Position Ihrer Rollläden anpassen, die Thermostattemperatur einstellen oder es als Timer verwenden.

Sobald der Philio PSR04-Switch in Ihrem Z-Wave-Netzwerk enthalten ist, muss er den Geräten zugeordnet sein, die Sie steuern möchten. Es kann nur durch direkte Zuordnung zu Peripheriegeräten funktionieren und keine Szenen starten, die in Ihrem Z-Wave-Hausautomationscontroller erstellt wurden.

Als Dimmer verwendet, hat es das gleiche Verhalten wie ein herkömmlicher Dimmer. Drehen Sie den Knopf nach rechts, um das Licht zu erhöhen, und nach links, um es zu verringern.

Darüber hinaus können Sie diesen Schalter dank seiner magnetischen Unterstützung leicht an der Stelle Ihrer Wahl bewegen und positionieren. Dank seines wasserdichten Designs kann es an einem Ort mit hoher Luftfeuchtigkeit wie einem Badezimmer installiert werden.

Es verwendet den neuesten Chip der Z-Wave 500-Serie, der eine 50% ige Erhöhung der Funkreichweite und eine 250% schnellere Kommunikationsgeschwindigkeit im Vergleich zu früheren Z-Wave-Produkten sowie einen geringeren Stromverbrauch bietet größere Autonomie ermöglichen.

## Funktionen

-   Multifunktionsschalter
-   Z-Wave + Technologie
-   )
-   Integrierte Timerfunktion
-   Etanche
-   Passt sich jedem Dekorationsstil an
-   Wiederaufladbarer Akku
-   Sehr geringer Energieverbrauch
-   )
-   Magnethalter
-   RGBW-Anzeige-LED
-   Einfach zu installieren

## Technische Daten

-   Versorgung : Lithium Polymer 3 Batterie.7 V, 220 mA v Akkulaufzeit : 6 Monate für 2 Stunden aufladen
-   Standby-Verbrauch : 18µA
-   Verbrauch in Betrieb : 45mA
-   Frequenz : 868.42 MHz
-   Übertragungsentfernung : 100 m draußen, 40 m drinnen
-   Abmessungen : Unterstützung : 71,16 x 10,94 mm (Durchmesser x Dicke) Taste : 59,99 x 14,89 mm (Durchmesser x Dicke) Unterstützung + Knopf : 71,16 x 17,22 mm (Diametrex-Dicke) Zertifizierungen : EN 301 489-1, EN 301 489-3 EN 300 220-1, EN 300 220-2 EN62479, EN60950 FCC Teil 15 B, FCC Teil 15 C

## Moduldaten

-   Machen Sie : Philio
-   Name : PSR04 Smart Color Button
-   Hersteller ID : 316
-   Produkttyp : 9
-   Produkt-ID : 34

## Konfiguration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, bringen Sie es in die niedrige Position (Einschluss) und drücken Sie die Taste gemäß der Papierdokumentation.

![inclusion](images/philio.psr04/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/philio.psr04/information.jpg)

### Befehle

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/philio.psr04/commandes.jpg)

Hier ist die Liste der Befehle :

-   Zustand : Es ist der Befehl, der die Position der Taste von 0 auf 100% erhöht
-   Batterie : Es ist der Befehl, der den Batteriestatus des Moduls meldet

### Konfiguration du module

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer unmittelbar nach der Aufnahme auf.

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Parameter geklickt haben)

![Config1](images/philio.psr04/config1.jpg)

Parameterdetails :

-   1: )
-   2 : )
-   10 : Zeitintervall für den Batterieaufstieg
-   25 : Hiermit können Sie festlegen, ob das Modul seine Position nach der Drehung automatisch sendet (1s Verzögerung) oder ob die Taste gedrückt werden muss, um das Senden zu bestätigen
-   26 : )

### Gruppen

Dieses Modul hat zwei Assoziationsgruppen, die erste ist die einzige wesentliche. Die zweite erlaubt es, die Position zu Jeedom zu erhöhen

![Groupe](images/philio.psr04/groupe.jpg)

## Gut zu wissen

### Besonderheiten

Gehen Sie wie folgt vor, um dieses Modul als Fernbedienung zu verwenden :

-   Fügen Sie den Controller in Gruppe 2 hinzu

In der Tat ist diese Art von Modul nicht dafür ausgelegt, direkt mit einer Box zu interagieren, sondern direkt mit anderen Modulen. )

## Aufwachen

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Stellen Sie das Modul in die niedrige Position und drücken Sie die Taste

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
