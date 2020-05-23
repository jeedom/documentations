# Fibaro-Bewegungssensor - FGMS-001

**Das Modul**

![module](images/fibaro.fgms001zw5/module.jpg)

 **Das Jeedom Visual**

![vuedefaut1](images/fibaro.fgms001zw5/vuedefaut1.jpg)

## Zusammenfassung

Der Fibaro-Bewegungsmelder ist ein Z-Wave-Multifunktionsdetektor. Zusätzlich zur Bewegungserkennung misst dieses Gerät Temperatur und Lichtintensität. Dieser Detektor verfügt außerdem über einen eingebauten Beschleunigungsmesser, um Manipulationsversuche am Gerät zu erkennen.

Der Fibaro-Bewegungsmelder ist batteriebetrieben und so konzipiert, dass er schnell und einfach auf jeder Oberfläche installiert werden kann. Die LED-Anzeige signalisiert Bewegung, Temperaturniveau und Betriebsmodus und kann verwendet werden, um festzustellen, ob sich das Gerät im Z-Wave-Netzwerk befindet.

Der Bewegungsmelder kann zur Beleuchtung von Szenen und Überwachungs- und / oder Sicherheitssystemen verwendet werden.

## Funktionen

-   Drahtloser Bewegungsmelder
-   Erkennt Bewegungen mithilfe eines passiven Infrarotsensors
-   Temperaturmessung
-   Lichtintensitätsmessung
-   Seismische Intensitätsmessung
-   Einbruch- und Diebstahlschutz
-   Bewegungs- und Temperaturalarme, die durch blinkende LED signalisiert werden
-   Taste zum Ein- / Ausschließen des Detektors
-   Erkennung schwacher Batterie
-   Sehr kleine, reduzierte Abmessungen
-   Einfache Installation an einer Wand oder einer anderen Oberfläche

## Technische Daten

-   Modultyp : Z-Wave + Sender
-   Versorgung : CR123A 3,6VDC Batterie
-   Empfohlene Höhe für die Installation : 2,4m
-   Gemessener Temperaturbereich : -20 ° C bis 100 ° C
-   Messgenauigkeit : 0,5°C
-   Helligkeitsmessbereich : 0-32000 LUX
-   Frequenz : 868,42 MHz
-   Übertragungsentfernung : 50 m freies Feld, 30 m drinnen
-   Dimensions: 4,4 cm Durchmesser
-   Betriebstemperatur : 0-40 ° C
-   Zertifizierungen : LVD 2006/95 / WE EMC 2004/108 / WE R & TTE 1999/5 / WE RoHS II

## Moduldaten

-   Machen Sie : Fibar Group
-   Name : Fibaro FGMS-001-ZW5 \ [Bewegungssensor \]
-   Hersteller ID : 271
-   Produkttyp : 2048
-   Produkt-ID : 4097

## Konfiguration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Einschlusstaste gemäß der Papierdokumentation dreimal.

![inclusion](images/fibaro.fgms001zw5/inclusion.jpg)

Nach dem Einfügen müssen Sie die zwave + -Konfiguration über die Dropdown-Liste anwenden. Sie sollten diese erhalten :

![Plugin Zwave](images/fibaro.fgms001zw5/information.jpg)

### Befehle

Sie müssen einmal auf die Lupe klicken, um die Modulbefehle abzurufen. Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/fibaro.fgms001zw5/commandes.jpg)

Hier ist die Liste der Befehle :

-   Präsenz : Es ist der Befehl, der eine Anwesenheitserkennung erkennt
-   Temperatur : Es ist der Befehl, der es ermöglicht, die Temperatur zu erhöhen
-   Helligkeit : Es ist der Befehl, der es ermöglicht, die Helligkeit zu erhöhen
-   Seismisch : es ist der Befehl, der es ermöglicht, die seismische Intensität zu erhöhen
-   Sabotage : )
-   Batterie : Es ist der Batteriebefehl

### Konfiguration du module

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer unmittelbar nach der Aufnahme auf.

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Parameter geklickt haben)

![Config1](images/fibaro.fgms001zw5/config1.jpg)

![Config2](images/fibaro.fgms001zw5/config2.jpg)

![Config3](images/fibaro.fgms001zw5/config3.jpg)

![Config3](images/fibaro.fgms001zw5/config4.jpg)

Parameterdetails :

-   Aufwachen : )
-   1: Stellt die Empfindlichkeit des Anwesenheitssensors ein
-   2: Stellt die Trägheit des Anwesenheitssensors ein
-   3: Es wird nicht empfohlen, diese Einstellung zu ändern
-   4: Es wird nicht empfohlen, diese Einstellung zu ändern
-   6: )
-   8: Aktiviert den Nacht- / Tag-Modus oder beides (empfohlener Wert : )
-   9: )
-   12: )
-   14: idem
-   16: idem
-   20: )
-   22: )
-   24: Hier erfahren Sie, wie die Sabotage gemeldet wird (WICHTIG : empfohlener Wert :  )
-   26: nur zu ändern, wenn Sie wissen, warum Sie es tun
-   40: )
-   42: )
-   60: Ermöglicht die Angabe, um wie viel der Temperaturwert geändert werden muss, um gesendet zu werden (empfohlener Wert 2 oder 0).)
-   62: )
-   64: )
-   66: ermöglicht die Einstellung der Temperatur
-   80: )
-   81: ermöglicht die Einstellung der Helligkeit der LED
-   82: )
-   83: )
-   86: )
-   87: )
-   89: Ermöglicht es der LED, im Falle einer Sabotage blau / weiß / rot zu blinken

### Gruppen

![Groupe](images/fibaro.fgms001zw5/groupe.jpg)

> **Spitze**
>
> Dieses Modul hat fünf Zuordnungsgruppen. Fügen Sie den Controller auf 1, 4 und 5 hinzu und entfernen Sie die 3.

Die Namen der Gruppen in der Z-Wave + -Version lauten wie folgt:

-   1 : Lifeline, Modulstatus-Feedback. Der primäre Controller sollte dieser Gruppe hinzugefügt werden.
-   2 : Bewegung, Bewegungssensor.
-   3 : Manipulation, Sabotagealarm.
-   4 : Bewegung BC, Bewegungssensor. Der Zweck dieser Gruppe besteht darin, die Abwärtskompatibilität mit Controllern sicherzustellen, die das Z-Wave + -Protokoll nicht unterstützen.
-   5 : Tamper BC, Sabotagealarm. Der Zweck dieser Gruppe besteht darin, die Abwärtskompatibilität mit Controllern sicherzustellen, die das Z-Wave + -Protokoll nicht unterstützen.

## Gut zu wissen

### Besonderheiten

> **Spitze**
>
> Dieses Modul ist beim Aufwecken sehr pingelig und ab Werk sehr schlecht konfiguriert. Es ist wichtig, es nach dem Einfügen gut aufzuwecken (mehrmals besser als eins), es nach Ihren Wünschen zu konfigurieren und es gut aufzuwecken, damit die Konfiguration berücksichtigt wird.

### Alternative visuelle

![vuewidget](images/fibaro.fgms001zw5/vuewidget.jpg)

## Aufwachen

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   ). )

## Faq.

Dieses Modul wird durch dreimaliges Drücken der Einschlusstaste aktiviert.

Dieses Modul ist sehr pingelig. Es ist ratsam, den Einschluss so nah wie möglich an Ihrer Box zu machen und ihn mehrmals zu wiederholen.

Dieses Modul ist ein Batteriemodul, die neue Konfiguration wird beim nächsten Aufwecken berücksichtigt.

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
