# Fibaro Öffnungsdetektor - FGK-101

**Das Modul**

![module](images/fibaro.fgk101-DS18B20/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/fibaro.fgk101-DS18B20/vuedefaut1.jpg)

# Zusammenfassung

Dieser batteriebetriebene, Z-Wave-kompatible Detektor verfügt über einen Reed-Sensor, einen magnetisch betriebenen Näherungsschalter, der das Öffnen einer Tür oder eines Fensters erkennt, wenn die beiden Elemente weit voneinander entfernt sind.

Das Gerät besteht aus einem Teil mit einem Magneten (dem beweglichen Teil), das an der Tür oder dem Fenster befestigt wird, und der Haupteinheit, die mit Schrauben oder Klebstoff am festen Teil des Fensters/der Tür befestigt wird. Wenn sich die beiden Parteien nicht mehr gegenüberstehen, wird automatisch ein Z-Wave-Funksignal gesendet.

Zusätzlich verfügt dieser Detektor über einen analogen Eingang zum Anschluss eines 1-Wire DS18B20 Temperaturfühlers. Dieser Detektor hat auch einen kabelgebundenen Eingang, sodass er als universeller Sender verwendet werden kann : Lassen Sie seinen Magnetkontakt beiseite und verbinden Sie seine Schraubeingänge mit einem beliebigen Melder (normalerweise geschlossen) Ihrer Wahl, z. B. einem Rauch-, Gas- oder Kohlenmonoxidmelder usw.

Ein Z-Wave-Controller (Fernbedienung, Dongle etc.) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits über ein bestehendes Netzwerk verfügen.

## Fonctions

-   Öffnungsmelder
-   Schaltfläche zum Einschließen/Ausschließen des Detektors
-   Erkennung schwacher Batterie
-   Manipulationsschutz
-   1 potentialfreier bedrahteter Eingang
-   1 analoger Eingang 1-Wire (zum Anschluss eines DS18B20 Temperatursensors)
-   Sehr kleine, reduzierte Abmessungen
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Sender
-   Farbe : Weiß (FGK-101/102/103/104/105/106/107 je nach Farbe)
-   Einspeisung : Batterie ER14250 (1/2AA) 3,6V
-   Frequenz : 868,42 MHz
-   Übertragungsdistanz : 50m Freifeld, 30m drinnen
-   Dimensions: 76 x 17 x 19 mm
-   Betriebstemperatur : 0-40 °C

## Moduldaten

-   Markieren : Fibar-Gruppe
-   Nachname : Fibaro FGK-101 mit Temperatursonde (DS18B20)
-   Hersteller-ID : 271
-   Geben Sie Produkt ein : 1792
-   Produkt ID : 4096

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie die Inklusionstaste gemäß der Papierdokumentation dreimal drücken.

![inclusion](images/fibaro.fgk101-DS18B20/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgk101-DS18B20/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/fibaro.fgk101-DS18B20/commandes.jpg)

Hier ist die Liste der Befehle :

-   Bundesland : Dies ist der Befehl, der den offenen oder geschlossenen Zustand des Moduls meldet
-   Batterie : Dies ist der Befehl, mit dem Sie den Status der Batterie melden können

Sie können diese Befehle nach Belieben ein- oder ausblenden.

### Modulkonfiguration

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/fibaro.fgk101-DS18B20/config1.jpg)

![Config2](images/fibaro.fgk101-DS18B20/config2.jpg)

Parameterdetails :

-   Wach auf : das ist das Weckintervall des Moduls (empfohlener Wert 7200)
-   1: ermöglicht die Einstellung der Verzögerung für die Aufhebung des Alarms des IN-Eingangs (Trockenkontakt)
-   2: können Sie wählen, ob zum Beispiel die blaue LED beim Öffnen und Schließen Ihrer Tür blinken soll
-   3: wird verwendet, um den Kontakttyp zu definieren, der an die Klemmleiste angeschlossen ist (IN)
-   5: Es wird nicht empfohlen, diese Einstellung zu ändern, es sei denn, Sie wissen warum (legt den Signaltyp fest, der an die Assoziationsgruppe 1 gesendet wird)
-   7: Wert an Assoziationsgruppe 1 gesendet
-   9: ermöglicht das Senden des Abbruchsignals zwischen dem IN-Eingang und der Assoziationsgruppe 1 einzustellen
-   12: können Sie die Empfindlichkeit gegenüber Temperaturänderungen einstellen (wenn eine 1-Leiter-Sonde an das Modul angeschlossen ist)
-   13: ermöglicht das Senden von Temperatur- und Sabotagesignalen im Broadcast-Modus einzustellen
-   14: ermöglicht Ihnen, die Szenenaktivierungsfunktion zu aktivieren

### Groupes

Dieses Modul hat drei Assoziationsgruppen, nur die dritte ist wesentlich.

![Groupe](images/fibaro.fgk101-DS18B20/groupe.jpg)

## Gut zu wissen

### Besonderheiten

> **Tipp**
>
> Dieses Modul ist beim Aufwecken sehr launisch und erfordert eine sehr enge Nähe zum Controller, wenn es enthalten ist

### Alternative Optik

![vuewidget](images/fibaro.fgk101-DS18B20/vuewidget.jpg)

## Wakeup

Um dieses Modul aufzuwecken, gibt es nur eine Vorgehensweise :

-   Drücken Sie die Inklusionstaste 3/4 mal. Es kann notwendig sein, dies mehrmals hintereinander zu tun (2 oder 3)

## Häufig gestellte Fragen.

Dieses Modul wird durch dreimaliges Drücken einer der Sabotagetasten aktiviert. Aber die andere Sabotagetaste muss gedrückt werden.

Dieses Modul hat eine sehr geringe Reichweite. Es ist ratsam, die Aufnahme so nah wie möglich an Ihrer Box vorzunehmen.

Dieses Modul ist ein batteriebetriebenes Modul, die neue Konfiguration wird beim nächsten Wakeup berücksichtigt.

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
