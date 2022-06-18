# 

**Das Modul**

![module](images/philio.psp01/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/philio.psp01/vuedefaut1.jpg)

## Zusammenfassung

 : .

Dieser Detektor kann für die Sicherheit oder für die Automatisierung verwendet werden. . .

. .

. Ein Z-Wave-Controller (Fernbedienung, Dongle etc.) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits über ein bestehendes Netzwerk verfügen.

## Fonctions

-   3 in 1 Detektor: 
-   Verwendet den neuesten Chip der Z-Wave 400-Serie, um Mehrkanalbetrieb und höhere Datenraten (9,6/40/100 kbps) zu unterstützen)
-   Verwendet Z-Wave-SDK 6.02
-   Optimierte Antennenreichweite
-   
-   Schaltfläche zum Einschließen/Ausschließen des Detektors
-   Autoprotection
-   Anzeige für schwache Batterie
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Sender
-   Einspeisung : 1x 3V CR123A Batterie
-   Lebensdauer der Batterie : 2 Jahre
-   Frequenz : 868.42MHz
-   Übertragungsdistanz : 30m drinnen
-   Temperatursensor : -10 bis 70 °C
-   Lichtsensor : 0 bis 500 Lux
-   PIR-Erfassungswinkel : 90°
-   PIR-Erfassungsbereich : 8 bis 10m
-   Maße : 28 x 96 x 23 mm
-   Gewicht : 39g
-   Betriebstemperatur : -10 bis 40 °C
-   Betriebsfeuchtigkeit : 85 % relative Luftfeuchtigkeit max
-   CE-Norm : EN300 220-1
-   Z-Wave-zertifiziert : ZC08-13050003

## Moduldaten

-   Markieren : Philio Technology Corporation
-   Nachname : 
-   Hersteller-ID : 316
-   Geben Sie Produkt ein : 2
-   Produkt ID : 2

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie die Inklusionstaste gemäß der Papierdokumentation dreimal drücken.

![inclusion](images/philio.psp01/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/philio.psp01/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/philio.psp01/commandes.jpg)

Hier ist die Liste der Befehle :

-   Gegenwart : Dies ist der Befehl, der eine Anwesenheitserkennung meldet
-   Öffnung : Dies ist der Befehl, der eine Öffnungserkennung meldet
-   Temperatur : Dies ist der Befehl, mit dem Sie die Temperatur erhöhen können
-   Helligkeit : Dies ist der Befehl, mit dem Sie die Helligkeit erhöhen können
-   Sabotage : das ist der Sabotagebefehl (wird bei Reißen ausgelöst)
-   Batterie : Dies ist der Batteriebefehl

.

### Modulkonfiguration

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/philio.psp01/config1.jpg)

![Config2](images/philio.psp01/config2.jpg)

Parameterdetails :

-   2: passt das an die Module der Assoziationsgruppe 2 gesendete Signal an
-   3: stellt die Empfindlichkeit des Anwesenheitssensors ein (0 : deaktiviert 99: maximale Empfindlichkeit)
-   4: ermöglicht die Einstellung der Helligkeitsstufe, ab der das in Parameter 2 definierte Signal an die der Gruppe 2 zugeordneten Module gesendet wird
-   5:  : )
-   6:  : )
-   9: können Sie festlegen, nach welcher Zeit das AUS-Signal an die Module gesendet wird, die der Gruppe 2 zugeordnet sind
-   10: )
-   12: )
-   13: )

### Groupes

Dieses Modul hat zwei Assoziationsgruppen, nur die erste ist wesentlich.

![Groupe](images/philio.psp01/groupe.jpg)

## Gut zu wissen

### Besonderheiten

> **Tipp**
>
> . . .

## Wakeup

Um dieses Modul aufzuwecken, gibt es nur eine Vorgehensweise :

-   Lassen Sie die Sabotagetaste los und drücken Sie sie erneut

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
