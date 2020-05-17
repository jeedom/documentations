# Philio PST02 C - 3 in 1 Öffnung

**Das Modul**

![module](images/philio.pst02c/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/philio.pst02c/vuedefaut1.jpg)

## Zusammenfassung

Der ZIP-PSM01-Detektor bietet 3 verschiedene Funktionen : Öffnungserkennung, Temperatursensor und Lichtdetektor. Es besteht aus zwei Teilen : ein Detektor und ein Magnet. Sie können an einer Tür oder einem Fenster angebracht werden, wobei der Magnet am Öffnungsteil und der Detektor am Festteil befestigt sind.

Durch Öffnen der Tür oder des Fensters wird der Magnet vom Detektor wegbewegt, wodurch der Detektor ausgelöst wird, der ein Z-Wave-Alarmsignal sendet, wenn das System scharfgeschaltet ist (dieses Signal kann von einer Sirene oder von einem gesteuert werden) Hausautomationsbox zum Beispiel). Der Sensor kann je nach Helligkeitsstufe auch zur automatischen Lichtsteuerung verwendet werden. Beispielsweise sendet der Sensor ein Signal an den Z-Wave-Schalter, um das Licht einzuschalten, wenn sich die Tür öffnet und der Raum dunkel ist.

Der Detektor erhöht auch die Helligkeit und die Temperatur, d. H. Im Falle einer signifikanten Änderung, und jedes Mal, wenn das Öffnen / Schließen erfasst wird.

Ein Z-Wave-Controller (Fernbedienung, Dongle…) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits über ein vorhandenes Netzwerk verfügen.

## Funktionen

-   3 in 1 Detektor: Blende, Temperatur, Licht
-   Übernimmt den aktuellen Chip der Z-Wave 400series, um Mehrkanalbetrieb und höheren Datendurchsatz (9,6 / 40 / 100kbps) zu unterstützen
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
-   Akkulaufzeit : 3 Jahre (für 14 Fahrten pro Tag)
-   Frequenz : 868.42 MHz
-   Übertragungsentfernung : 30m drinnen
-   Temperatursensor : -10 bis 70 ° C.
-   Helligkeitssensor : 0 bis 500 Lux
-   Abmessungen :
  -   Detektor : 28 x 96 x 23 mm
  -   Magnet : 10 x 50 x 12 mm
-   Gewicht : 52g
-   Betriebstemperatur : -10 bis 40 ° C.
-   Betriebsfeuchtigkeit : 85% rF max
-   CE-Norm : EN300 220-1
-   Z-Wave-Zertifizierung : ZC08-13050003

## Moduldaten

-   Machen Sie : Philio Technology Corporation
-   Name : PST02-C Tür / Fenster 3 in 1 Sensor
-   Hersteller ID : 316
-   Produkttyp : 2
-   Produkt-ID : 14

## Konfiguration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Einschlusstaste gemäß der Papierdokumentation dreimal.

![inclusion](images/philio.pst02c/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/philio.pst02c/information.jpg)

### Befehle

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/philio.pst02c/commandes.jpg)

Hier ist die Liste der Befehle :

-   Öffnung : Es ist der Befehl, der eine Öffnungserkennung auslöst
-   Temperatur : Es ist der Befehl, der es ermöglicht, die Temperatur zu erhöhen
-   Helligkeit : Es ist der Befehl, der es ermöglicht, die Helligkeit zu erhöhen
-   Batterie : Es ist der Batteriebefehl

### Konfiguration du module

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer unmittelbar nach der Aufnahme auf.

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/philio.pst02c/config1.jpg)

![Config2](images/philio.pst02c/config2.jpg)

![Config3](images/philio.pst02c/config3.jpg)

Parameterdetails :

-   2: Legt das an die Module in Zuordnungsgruppe 2 gesendete Signal fest
-   4: Stellt die Helligkeitsstufe ein, ab der das in Parameter 2 definierte Signal an die der Gruppe 2 zugeordneten Module gesendet wird
-   5: Betriebsart (siehe Herstellerdokumentation) Empfohlener Wert : 8
-   6: Multisensor-Betriebsmodus (siehe Herstellerdokumentation) Empfohlener Wert : 4
-   7: personalisierte Betriebsart des Multisensors (siehe Herstellerdokumentation) Empfohlener Wert : 20 (um die funktionale Öffnung zu haben)
-   9: Hiermit können Sie festlegen, nach welcher Zeit das AUS-Signal an die der Gruppe 2 zugeordneten Module gesendet werden soll
-   10: wird verwendet, um die Dauer zwischen zwei Batterieberichten zu definieren (eine Einheit = Parameter 20)
-   11: Mit dieser Option können Sie die Dauer zwischen zwei automatischen Eröffnungsberichten definieren (eine Einheit = Parameter 20)
-   12: Mit dieser Option können Sie die Dauer zwischen zwei automatischen Helligkeitsberichten definieren (eine Einheit = Parameter 20). Empfohlener Wert : 3
-   13: Ermöglicht die Definition der Zeit zwischen zwei automatischen Temperaturberichten (eine Einheit = Parameter 20). Empfohlener Wert : 2
-   20: Dauer eines Intervalls für die Parameter 10 bis 13 Empfohlener Wert : 10
-   21: Temperaturänderungswert in ° F, um einen Bericht auszulösen
-   22: Wert in% der Helligkeitsschwankung zum Auslösen eines Berichts Empfohlener Wert : 10

### Gruppen

Dieses Modul hat zwei Zuordnungsgruppen, nur die erste ist wesentlich.

![Groupe](images/philio.pst02c/groupe.jpg)

## Aufwachen

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Lassen Sie die Sabotage-Taste los und drücken Sie sie erneut

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
