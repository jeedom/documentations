# Philio PSP01

**Das Modul**

![module](images/philio.psp01/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/philio.psp01/vuedefaut1.jpg)

## Zusammenfassung

Der PSP01 Detektor bietet 3 verschiedene Funktionen : Bewegungserkennung, Temperatursensor und Lichtsensor.

Dieser Detektor kann für die Sicherheit oder für die Automatisierung verwendet werden. Wenn der Detektor mit Sicherheitsgeräten verbunden ist, dient er als Alarmauslöser, indem er Änderungen der Infrarotstrahlungspegel erkennt. Bewegt sich eine Person im Sichtfeld des Melders, wird ein Funksignal gesendet, das einen Alarm auslöst, um Eindringlinge abzuschrecken.

Der Detektor kann auch in Verbindung mit einem Z-Wave-Controller für Heimautomatisierungszwecke verwendet werden und sowohl Änderungen der Infrarotstrahlung (Anwesenheit) als auch Änderungen der Lichtstärke erkennen. So kann die Beleuchtung ausgelöst werden, wenn im Dunkeln eine Bewegung erkannt wird.

Der Melder erhöht auch die Helligkeit und die Temperatur, entweder bei einer signifikanten Änderung oder bei jeder erkannten Bewegung. Ein Z-Wave-Controller (Fernbedienung, Dongle usw.) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits über ein bestehendes Netzwerk verfügen.

## Fonctions

-   3 in 1 Detektor: Bewegung, Temperatur, Licht
-   Verwendet den neuesten Chip der Z-Wave 400-Serie, um Mehrkanalbetrieb und höhere Datenraten (9,6/40/100 kbps) zu unterstützen)
-   Verwendet Z-Wave-SDK 6.02
-   Optimierte Antennenreichweite
-   Verwendung für Heimautomatisierungs- oder Sicherheitsanwendungen
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
-   Nachname : Philio PSP01
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

Da alle Module der Reihe die gleichen IDs haben, liegt es an Ihnen, diejenigen anzuzeigen, die Ihrem Modul entsprechen.

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
-   5: Betriebsmodus (es wird nicht empfohlen, ihn zu ändern : siehe Herstellerdokumentation)
-   6: Arbeitsweise des Multisensors (keine Änderung empfohlen : siehe Herstellerdokumentation)
-   9: können Sie festlegen, nach welcher Zeit das AUS-Signal an die Module gesendet wird, die der Gruppe 2 zugeordnet sind
-   10: können Sie die Dauer zwischen zwei Batterieberichten festlegen (eine Einheit = 30 Minuten)
-   12: können Sie die Dauer zwischen zwei Helligkeitsberichten definieren (eine Einheit = 30 Minuten)
-   13: können Sie die Dauer zwischen zwei Temperaturberichten festlegen (eine Einheit = 30 Minuten)

### Groupes

Dieses Modul hat zwei Assoziationsgruppen, nur die erste ist wesentlich.

![Groupe](images/philio.psp01/groupe.jpg)

## Gut zu wissen

### Besonderheiten

> **Tipp**
>
> Dieses Modul hat eine Besonderheit, da es keinen Bericht basierend auf Variationen hat, sondern nur auf der Dauer, es sendet alle seine Informationen bei jeder Erkennung. Es sendet auch das Anwesenheitserkennungssignal mehrmals danach. Es empfiehlt sich daher, bei Anwesenheit das Häkchen bei „Ereignis bei Änderung“ zu setzen, wenn Sie diesen Befehl als Szenarioauslöser verwenden.

## Wakeup

Um dieses Modul aufzuwecken, gibt es nur eine Vorgehensweise :

-   Lassen Sie die Sabotagetaste los und drücken Sie sie erneut

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
