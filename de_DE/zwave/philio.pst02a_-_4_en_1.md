# Philio PST02 A - 4 in 1

**Das Modul**

![module](images/philio.pst02a/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/philio.pst02a/vuedefaut1.jpg)

## Zusammenfassung

Der Detektor ZIP-PSM02-EU bietet 4 verschiedene Funktionen : Bewegungserkennung, Blendenerkennung, Temperatursensor und Lichtsensor. Es besteht aus zwei Teilen : ein Detektor und ein Magnet. Sie können an einer Tür oder einem Fenster angebracht werden, wobei der Magnet am Öffnungsteil und der Detektor am Festteil befestigt sind.

Durch Öffnen der Tür oder des Fensters wird der Magnet vom Detektor wegbewegt, wodurch der Detektor ausgelöst wird, der ein Z-Wave-Alarmsignal sendet, wenn das System scharfgeschaltet ist (dieses Signal kann von einer Sirene oder von einem gesteuert werden) Hausautomationsbox zum Beispiel). Dieser Detektor kann zur Sicherheit oder zur Automatisierung verwendet werden. Wenn der Detektor Sicherheitsvorrichtungen zugeordnet ist, dient er als Alarmauslöser, indem Änderungen der Infrarotstrahlung oder der Tür- / Fensteröffnung erkannt werden. Wenn sich eine Person im Sichtfeld des Detektors bewegt oder eine Tür / ein Fenster öffnet, wird ein Funksignal gesendet, das einen Alarm auslöst, um Eindringlinge abzuhalten.

Der Detektor kann auch in Kombination mit einem Z-Wave-Controller für die Hausautomation verwendet werden, um sowohl Änderungen der Infrarotstrahlung (Anwesenheit) oder der Tür- / Fensteröffnungsniveaus als auch Änderungen des Niveaus von zu erfassen Helligkeit. Somit können wir ein Licht auslösen, wenn eine Bewegung oder ein Öffnen der Tür im Dunkeln festgestellt wird.

Der Detektor erhöht auch die Helligkeit und die Temperatur, entweder im Falle einer signifikanten Änderung und jedes Mal, wenn eine Bewegung oder ein Öffnen / Schließen erkannt wird. Ein Z-Wave-Controller (Fernbedienung, Dongle…) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits über ein vorhandenes Netzwerk verfügen.

## Fonctions

-   4 in 1 Detektor: Bewegung, Blende, Temperatur, Licht
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
-   Akkulaufzeit : 2 Jahre
-   Frequenz : 868.42 MHz
-   Übertragungsentfernung : 30m drinnen
-   Temperatursensor : -10 bis 70 ° C.
-   Helligkeitssensor : 0 bis 500 Lux
-   PIR-Erfassungswinkel : 90 °
-   PIR-Erfassungsbereich : 8 bis 10 m
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
-   Name : PST02-A 4-in-1-Multisensor
-   Hersteller ID : 316
-   Produkttyp : 2
-   Produkt-ID : 12

## Configuration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Einschlusstaste gemäß der Papierdokumentation dreimal.

![inclusion](images/philio.pst02a/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/philio.pst02a/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/philio.pst02a/commandes.jpg)

Hier ist die Liste der Befehle :

-   Präsenz : Es ist der Befehl, der eine Anwesenheitserkennung erkennt
-   Öffnung : Es ist der Befehl, der eine Öffnungserkennung auslöst
-   Temperatur : Es ist der Befehl, der es ermöglicht, die Temperatur zu erhöhen
-   Helligkeit : Es ist der Befehl, der es ermöglicht, die Helligkeit zu erhöhen
-   Sabotage : Dies ist der Sabotagebefehl (er wird im Falle eines Reißens ausgelöst)
-   Batterie : Es ist der Batteriebefehl

### Konfiguration des Moduls

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer unmittelbar nach der Aufnahme auf.

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/philio.pst02a/config1.jpg)

![Config2](images/philio.pst02a/config2.jpg)

![Config3](images/philio.pst02a/config3.jpg)

Parameterdetails :

-   2: Legt das an die Module in Zuordnungsgruppe 2 gesendete Signal fest
-   3: Stellt die Empfindlichkeit des Anwesenheitssensors ein (0 : deaktiviert 99: maximale Empfindlichkeit)
-   4: Stellt die Helligkeitsstufe ein, ab der das in Parameter 2 definierte Signal an die der Gruppe 2 zugeordneten Module gesendet wird
-   5: Betriebsart (siehe Herstellerdokumentation) Empfohlener Wert : 8
-   6: Multisensor-Betriebsmodus (siehe Herstellerdokumentation) Empfohlener Wert : 4
-   7: personalisierte Betriebsart des Multisensors (siehe Herstellerdokumentation) Empfohlener Wert : 6 (um von der Anwesenheit zu AUS zurückzukehren)
-   8: Ermöglicht die Definition der Dauer in Schritten von 8 Sekunden für die Bewegungserkennung
-   9: Hiermit können Sie festlegen, nach welcher Zeit das AUS-Signal an die der Gruppe 2 zugeordneten Module gesendet werden soll
-   10: wird verwendet, um die Dauer zwischen zwei Batterieberichten zu definieren (eine Einheit = Parameter 20)
-   11: Mit dieser Option können Sie die Dauer zwischen zwei automatischen Eröffnungsberichten definieren (eine Einheit = Parameter 20)
-   12: Mit dieser Option können Sie die Dauer zwischen zwei automatischen Helligkeitsberichten definieren (eine Einheit = Parameter 20). Empfohlener Wert : 3
-   13: Ermöglicht die Definition der Zeit zwischen zwei automatischen Temperaturberichten (eine Einheit = Parameter 20). Empfohlener Wert : 2
-   20: Dauer eines Intervalls für die Parameter 10 bis 13 Empfohlener Wert : 10
-   21: Temperaturänderungswert in ° F, um einen Bericht auszulösen
-   22: Wert in% der Helligkeitsschwankung zum Auslösen eines Berichts Empfohlener Wert : 10

### Groupes

Dieses Modul hat zwei Zuordnungsgruppen, nur die erste ist wesentlich.

![Groupe](images/philio.pst02a/groupe.jpg)

## Wakeup

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Lassen Sie die Sabotage-Taste los und drücken Sie sie erneut

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
