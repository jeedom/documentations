# Fibaro Öffnungsdetektor - FGK-101

**Das Modul**

![module](images/fibaro.fgk101-DS18B20/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/fibaro.fgk101-DS18B20/vuedefaut1.jpg)

# Zusammenfassung

Dieser batteriebetriebene und Z-Wave-kompatible Detektor verfügt über einen Reed-Sensor, einen Näherungsschalter mit Magnetbetrieb, der das Öffnen einer Tür oder eines Fensters erkennt, wenn die beiden Elemente entfernt sind.

Das Gerät besteht aus einem Teil mit einem Magneten (dem mobilen Teil), der an der Tür oder dem Fenster befestigt ist, sowie der Haupteinheit, die mit Schrauben oder Klebstoff am festen Teil des Fensters / der Tür positioniert ist. Wenn sich die beiden Teile nicht mehr gegenüberliegen, wird automatisch ein Z-Wave-Funksignal gesendet.

Darüber hinaus verfügt dieser Detektor über einen Analogeingang zum Anschließen eines 1-Draht-DS18B20-Temperaturfühlers. Dieser Detektor verfügt auch über einen verdrahteten Eingang, sodass er als Universalsender verwendet werden kann : Lassen Sie den Magnetkontakt beiseite und schließen Sie die Schraubeneingänge an einen Detektor (normalerweise geschlossen) Ihrer Wahl an, z. B. einen Rauch-, Gas- oder Kohlenmonoxiddetektor usw.

Ein Z-Wave-Controller (Fernbedienung, Dongle…) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits über ein vorhandenes Netzwerk verfügen.

## Fonctions

-   Detektor öffnen
-   Taste zum Ein- / Ausschließen des Detektors
-   Erkennung schwacher Batterie
-   Manipulationsschutz
-   1 Potentialfreier verdrahteter Eingang
-   1 analoger 1-Draht-Eingang (zum Anschließen eines DS18B20-Temperaturfühlers)
-   Sehr kleine, reduzierte Abmessungen
-   Benutzerfreundlichkeit und Installation

## Technische Daten

-   Modultyp : Z-Wave Sender
-   Farbe : Weiß (FGK-101/102/103/104/105/106/107 je nach Farbe)
-   Versorgung : ER14250 (1 / 2AA) 3,6-V-Batterie
-   Frequenz : 868,42 MHz
-   Übertragungsentfernung : 50 m freies Feld, 30 m drinnen
-   Dimensions: 76 x 17 x 19 mm
-   Betriebstemperatur : 0-40 ° C

## Moduldaten

-   Machen Sie : Fibar Group
-   Name : Fibaro FGK-101 mit Temperaturfühler (DS18B20)
-   Hersteller ID : 271
-   Produkttyp : 1792
-   Produkt-ID : 4096

## Configuration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Einschlusstaste gemäß der Papierdokumentation dreimal.

![inclusion](images/fibaro.fgk101-DS18B20/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgk101-DS18B20/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/fibaro.fgk101-DS18B20/commandes.jpg)

Hier ist die Liste der Befehle :

-   Zustand : Es ist der Befehl, der den offenen oder geschlossenen Zustand des Moduls auslöst
-   Batterie : Dies ist der Befehl, mit dem der Batteriezustand wiederhergestellt werden kann

Sie können diese Befehle nach Belieben ein- oder ausblenden.

### Konfiguration des Moduls

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer unmittelbar nach der Aufnahme auf.

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/fibaro.fgk101-DS18B20/config1.jpg)

![Config2](images/fibaro.fgk101-DS18B20/config2.jpg)

Parameterdetails :

-   Aufwachen : Dies ist das Modul-Aufweckintervall (empfohlener Wert 7200)
-   1: Legt die Verzögerung für das Aufheben des IN-Eingangsalarms (Trockenkontakt) fest)
-   2: Hier können Sie auswählen, ob die blaue LED beispielsweise beim Öffnen und Schließen Ihrer Tür blinken soll
-   3: wird verwendet, um den Kontakttyp zu definieren, der an die Klemmenleiste (IN) angeschlossen ist)
-   5: Es wird nicht empfohlen, diesen Parameter zu ändern, es sei denn, Sie wissen warum (definiert den Signaltyp, der an die Zuordnungsgruppe 1 gesendet wird)
-   7: Wert an Assoziationsgruppe 1 gesendet
-   9: Mit dieser Option können Sie das Senden des Löschsignals zwischen dem IN-Eingang und der Zuordnungsgruppe 1 einstellen
-   12: Ermöglicht die Einstellung der Empfindlichkeit gegenüber Temperaturänderungen (wenn eine 1-Draht-Sonde an das Modul angeschlossen ist)
-   13: Ermöglicht das Einstellen des Broadcast-Modus für das Senden von Temperatursignalen und das Puffern
-   14: Aktiviert die Szenenaktivierungsfunktion

### Groupes

Dieses Modul hat drei Assoziationsgruppen, nur die dritte ist wesentlich.

![Groupe](images/fibaro.fgk101-DS18B20/groupe.jpg)

## Gut zu wissen

### Besonderheiten

> **Spitze**
>
> Dieses Modul ist beim Aufwecken sehr pingelig und erfordert eine sehr enge Nähe zum Controller, wenn es enthalten ist

### Alternative visuelle

![vuewidget](images/fibaro.fgk101-DS18B20/vuewidget.jpg)

## Wakeup

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Drücken Sie die Einschlusstaste 3/4 Mal. Dies kann mehrmals hintereinander erforderlich sein (2 oder 3))

## Faq.

Dieses Modul wird durch dreimaliges Drücken einer der Manipulationstasten aktiviert. Die andere Sabotage-Taste muss jedoch gedrückt werden.

Dieses Modul hat eine sehr geringe Reichweite. Es ist ratsam, so nah wie möglich an Ihrer Box zu sein.

Dieses Modul ist ein Batteriemodul, die neue Konfiguration wird beim nächsten Aufwecken berücksichtigt.

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
