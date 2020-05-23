# Philio PSP01

**Das Modul**

![module](images/philio.psp01/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/philio.psp01/vuedefaut1.jpg)

## Zusammenfassung

Der PSP01-Detektor bietet 3 verschiedene Funktionen : Bewegungserkennung, Temperatursensor und Lichtsensor.

Dieser Detektor kann zur Sicherheit oder zur Automatisierung verwendet werden. Wenn der Detektor Sicherheitsvorrichtungen zugeordnet ist, dient er als Alarmauslöser, indem Änderungen der Infrarotstrahlung erfasst werden. Wenn sich eine Person innerhalb des Sichtfelds des Detektors bewegt, wird ein Funksignal gesendet, das einen Alarm auslöst, um Eindringlinge abzuhalten.

Der Detektor kann auch in Kombination mit einem Z-Wave-Controller für die Hausautomation verwendet werden, um sowohl Änderungen der Infrarotstrahlung (Anwesenheit) als auch Änderungen der Helligkeit zu erfassen. So können wir ein Licht auslösen, wenn wir Bewegungen im Dunkeln erfassen.

Der Detektor erhöht auch die Helligkeit und die Temperatur, d. H. Im Falle einer signifikanten Änderung und jedes Mal, wenn eine Bewegung erfasst wird. Ein Z-Wave-Controller (Fernbedienung, Dongle…) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits über ein vorhandenes Netzwerk verfügen.

## Funktionen

-   3 in 1 Detektor: Bewegung, Temperatur, Licht
-   )
-   Verwendet das Z-Wave 6.02 SDK
-   Optimierte Antennenreichweite
-   Verwendung für Hausautomations- oder Sicherheitsanwendungen
-   Taste zum Ein- / Ausschließen des Detektors
-   Autoprotection
-   Anzeige für niedrigen Batteriestand
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Daten

-   Modultyp : Z-Wave Sender
-   Versorgung : 1 CR123A 3V Batterie
-   Akkulaufzeit : 2 Jahre
-   Frequenz : 868.42 MHz
-   Übertragungsentfernung : 30m drinnen
-   Temperatursensor : -10 bis 70 ° C.
-   Helligkeitssensor : 0 bis 500 Lux
-   PIR-Erfassungswinkel : 90 °
-   PIR-Erfassungsbereich : 8 bis 10 m
-   Abmessungen : 28 x 96 x 23 mm
-   Gewicht : 39g
-   Betriebstemperatur : -10 bis 40 ° C.
-   Betriebsfeuchtigkeit : 85% rF max
-   CE-Norm : EN300 220-1
-   Z-Wave-Zertifizierung : ZC08-13050003

## Moduldaten

-   Machen Sie : Philio Technology Corporation
-   Name : Philio PSP01
-   Hersteller ID : 316
-   Produkttyp : 2
-   Produkt-ID : 2

## Konfiguration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Einschlusstaste gemäß der Papierdokumentation dreimal.

![inclusion](images/philio.psp01/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/philio.psp01/information.jpg)

### Befehle

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/philio.psp01/commandes.jpg)

Hier ist die Liste der Befehle :

-   Präsenz : Es ist der Befehl, der eine Anwesenheitserkennung erkennt
-   Öffnung : Es ist der Befehl, der eine Öffnungserkennung auslöst
-   Temperatur : Es ist der Befehl, der es ermöglicht, die Temperatur zu erhöhen
-   Helligkeit : Es ist der Befehl, der es ermöglicht, die Helligkeit zu erhöhen
-   Sabotage : Dies ist der Sabotagebefehl (er wird im Falle eines Reißens ausgelöst)
-   Batterie : Es ist der Batteriebefehl

Alle Module des Bereichs haben die gleichen IDs. Es liegt an Ihnen, die Module anzuzeigen, die Ihrem Modul entsprechen.

### Konfiguration du module

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer unmittelbar nach der Aufnahme auf.

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/philio.psp01/config1.jpg)

![Config2](images/philio.psp01/config2.jpg)

Parameterdetails :

-   2: Legt das an die Module in Zuordnungsgruppe 2 gesendete Signal fest
-   3: Stellt die Empfindlichkeit des Anwesenheitssensors ein (0 : deaktiviert 99: )
-   4: Stellt die Helligkeitsstufe ein, ab der das in Parameter 2 definierte Signal an die der Gruppe 2 zugeordneten Module gesendet wird
-   5: Betriebsmodus (nicht empfohlen, um ihn zu ändern : )
-   6: Multisensor-Betriebsmodus (nicht zum Ändern empfohlen : )
-   9: Hiermit können Sie festlegen, nach welcher Zeit das AUS-Signal an die der Gruppe 2 zugeordneten Module gesendet werden soll
-   10: )
-   12: )
-   13: )

### Gruppen

Dieses Modul hat zwei Zuordnungsgruppen, nur die erste ist wesentlich.

![Groupe](images/philio.psp01/groupe.jpg)

## Gut zu wissen

### Besonderheiten

> **Spitze**
>
> Dieses Modul hat eine Besonderheit: Es enthält keinen Bericht, der auf Abweichungen basiert, sondern nur auf der Dauer. Es sendet alle Informationen zu jeder Erkennung. Es sendet auch das Anwesenheitserkennungssignal mehrmals hintereinander. Es ist daher ratsam, das Kontrollkästchen "Ereignis bei Änderung" zu aktivieren, wenn Sie diesen Befehl als Szenarioauslöser verwenden.

## Aufwachen

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Lassen Sie die Sabotage-Taste los und drücken Sie sie erneut

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
