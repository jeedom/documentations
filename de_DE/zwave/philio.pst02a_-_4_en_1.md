# Philio PST02 A - 4 in 1

**Das Modul**

![module](images/philio.pst02a/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/philio.pst02a/vuedefaut1.jpg)

## Zusammenfassung

Der ZIP-PSM02-EU Detektor bietet 4 verschiedene Funktionen : Bewegungserkennung, Öffnungserkennung, Temperatursensor und Lichtsensor. Es besteht aus zwei Teilen : ein Detektor und ein Magnet. Sie sind so konzipiert, dass sie an einer Tür oder einem Fenster angebracht werden können, wobei der Magnet auf dem zu öffnenden Teil und der Detektor auf dem festen Teil befestigt ist.

Durch das Öffnen der Tür oder des Fensters wird der Magnet vom Melder wegbewegt, wodurch der Melder ausgelöst wird, der ein Z-Wave-Alarmsignal sendet, wenn das System scharfgeschaltet ist (dieses Signal kann von einer Sirene oder einer Hausautomationsbox betrieben werden). Beispiel). Dieser Detektor kann für die Sicherheit oder für die Automatisierung verwendet werden. In Verbindung mit Sicherheitsgeräten dient der Melder als Alarmauslöser, indem er Änderungen der Infrarotstrahlung oder Tür-/Fensteröffnungen erkennt. Bewegt sich eine Person im Sichtfeld des Melders oder öffnet eine Tür/ein Fenster, wird ein Funksignal gesendet, das einen Alarm auslöst, um Eindringlinge abzuschrecken.

Der Melder kann auch in Verbindung mit einem Z-Wave-Controller für Heimautomatisierungszwecke verwendet werden, wobei er sowohl Änderungen der Infrarotstrahlung (Anwesenheit) oder das Öffnen von Türen/Fenstern als auch Änderungen des Helligkeitsniveaus erkennt. So kann die Beleuchtung bei Bewegungserkennung oder Türöffnung im Dunkeln ausgelöst werden.

Der Melder erhöht auch die Helligkeit und die Temperatur, entweder im Falle einer signifikanten Änderung und jedes Mal, wenn eine Bewegung oder ein Öffnen/Schließen erkannt wird. Ein Z-Wave-Controller (Fernbedienung, Dongle etc.) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits über ein bestehendes Netzwerk verfügen.

## Fonctions

-   4 in 1 Detektor: Bewegung, Öffnung, Temperatur, Licht
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
-   Maße :
  -   Detektor : 28 x 96 x 23 mm
  -   Magnet : 10 x 50 x 12 mm
-   Gewicht : 52g
-   Betriebstemperatur : -10 bis 40 °C
-   Betriebsfeuchtigkeit : 85 % relative Luftfeuchtigkeit max
-   CE-Norm : EN300 220-1
-   Z-Wave-zertifiziert : ZC08-13050003

## Moduldaten

-   Markieren : Philio Technology Corporation
-   Nachname : PST02-A 4-in-1-Multisensor
-   Hersteller-ID : 316
-   Geben Sie Produkt ein : 2
-   Produkt ID : 12

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie die Inklusionstaste gemäß der Papierdokumentation dreimal drücken.

![inclusion](images/philio.pst02a/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/philio.pst02a/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/philio.pst02a/commandes.jpg)

Hier ist die Liste der Befehle :

-   Gegenwart : Dies ist der Befehl, der eine Anwesenheitserkennung meldet
-   Öffnung : Dies ist der Befehl, der eine Öffnungserkennung meldet
-   Temperatur : Dies ist der Befehl, mit dem Sie die Temperatur erhöhen können
-   Helligkeit : Dies ist der Befehl, mit dem Sie die Helligkeit erhöhen können
-   Sabotage : das ist der Sabotagebefehl (wird bei Reißen ausgelöst)
-   Batterie : Dies ist der Batteriebefehl

### Modulkonfiguration

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/philio.pst02a/config1.jpg)

![Config2](images/philio.pst02a/config2.jpg)

![Config3](images/philio.pst02a/config3.jpg)

Parameterdetails :

-   2: passt das an die Module der Assoziationsgruppe 2 gesendete Signal an
-   3: stellt die Empfindlichkeit des Anwesenheitssensors ein (0 : deaktiviert 99: maximale Empfindlichkeit)
-   4: ermöglicht die Einstellung der Helligkeitsstufe, ab der das in Parameter 2 definierte Signal an die der Gruppe 2 zugeordneten Module gesendet wird
-   5: Betriebsmodus (siehe Herstellerdokumentation) Empfohlener Wert : 8
-   6: Multisensor-Betriebsart (siehe Herstellerdokumentation) Empfohlener Wert : 4
-   7: personalisierter Betriebsmodus des Multisensors (siehe Dokumentation des Herstellers) Empfohlener Wert : 6 (um die Präsenz auf OFF zurückzustellen)
-   8: ermöglicht es Ihnen, die Dauer der Bewegungserkennung in Schritten von 8 Sekunden festzulegen
-   9: können Sie festlegen, nach welcher Zeit das AUS-Signal an die Module gesendet wird, die der Gruppe 2 zugeordnet sind
-   10: können Sie die Dauer zwischen zwei Batterieberichten definieren (eine Einheit = Parameter 20)
-   11: ermöglicht es Ihnen, die Dauer zwischen zwei automatischen Öffnungsverhältnissen zu definieren (eine Einheit = Parameter 20)
-   12: ermöglicht die Definition der Dauer zwischen zwei automatischen Helligkeitsberichten (eine Einheit = Parameter 20) Empfohlener Wert : 3
-   13: dient zur Definition der Dauer zwischen zwei automatischen Temperaturmeldungen (eine Einheit = Parameter 20) Empfohlener Wert : 2
-   20: Dauer eines Intervalls für Parameter 10 bis 13 Empfohlener Wert : 10
-   21: Abweichungswert in °F der Temperatur, um einen Bericht auszulösen
-   22: Wert in % der Helligkeitsänderung, um einen Bericht auszulösen. Empfohlener Wert : 10

### Groupes

Dieses Modul hat zwei Assoziationsgruppen, nur die erste ist wesentlich.

![Groupe](images/philio.pst02a/groupe.jpg)

## Wakeup

Um dieses Modul aufzuwecken, gibt es nur eine Vorgehensweise :

-   Lassen Sie die Sabotagetaste los und drücken Sie sie erneut

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
