# Fibaro FGSD-002 "Rauchsensor 2"

**Das Modul**

![module](images/fibaro.fgsd102/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/fibaro.fgsd102/vuedefaut1.jpg)

## Zusammenfassung

Dieser Rauchmelder mit glatten Linien, einer polierten Oberfläche und einer geringen Größe ermöglicht es Ihnen, mit mehrfarbigen RGB-LEDs und einer eingebauten Sirene vor einer Bedrohung gewarnt zu werden. Das große Format des Rasters ermöglicht es, kleinste Rauchmengen zu erkennen, um eine schnelle Reaktion zu erzielen. Es wird leicht seinen Platz in Ihrem Zuhause finden, um die Sicherheit der ganzen Familie zu gewährleisten.

Der Rauchmelder Fibaro FGSD-002 ist ein autonomer Rauchmelder (DAAF), der der Norm EN 14604 entspricht:2005. Obwohl es autonom ist, kommuniziert es auch dank der Z-Wave Plus-Technologie.

Einige Materialien brennen ohne zu rauchen. Aus diesem Grund haben sich die Fibaro-Ingenieure entschieden, einen zusätzlichen Schutz in Form eines Temperatursensors in ihren Rauchmelder einzubauen. Wenn die Rauchmenge nicht ausreicht, um den Alarm auszulösen, kann das Gerät dennoch eine Bedrohung erkennen, indem es eine durch das Feuer verursachte schnelle Temperaturänderung erkennt. Eine schnelle Temperaturänderung oder ein Anstieg auf bis zu 54°C reicht aus, damit der Rauchmelder eine Bedrohung erkennt und den Hausbewohnern signalisiert. Nur diese Art von Rauchsensor bietet eine hohe Effizienz, unabhängig davon, was gerade brennt.

## Fonctions

-   Z-Wave-Rauchmelder
-   Batteriebetrieben
-   Einstellbare Sensorempfindlichkeit (3 Stufen)
-   Schutz vor Sabotage
-   Alarm wird durch Ton, LED-Licht und Z-Wave-Signal signalisiert
-   Branderkennung durch Lufttemperaturmessung
-   Automatischer Effizienztest, alle 5 Sekunden durchgeführt
-   Integrierter Z-Wave-Netzwerkabdeckungstester
-   Entspricht EN 14604:2005
-   Z-Wave Plus-kompatibel
-   Sehr einfache Installation - einfach an einem Ort installieren, an dem Brandgefahr besteht

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Sender
-   Einspeisung : 3V CR123A Lithiumbatterie
-   Lebensdauer der Batterie : 3 Jahre
-   Frequenz : 868,42MHz
-   Übertragungsdistanz : 50m Freifeld, 30m drinnen
-   Maße : 65 x 28 mm (Durchmesser x Höhe)
-   Betriebstemperatur : 0-55°C
-   Betriebsfeuchtigkeit : 0 % - 93 %
-   Temperaturmessbereich : -20 bis 100 °C
-   Empfindlichkeit gegenüber Rauch : 1. Stufe - 1,20 +/- 0,5 % obs/m; 2. Stufe - 1,80 +/- 0,5 % obs/m; 3. Stufe - 2,80 +/- 0,5 % obs/m
-   Lautstärke: 85dB bei 3m
-   Meßgenauigkeit : 0,5°C (in einem Bereich von 0 bis 55°C)
-   Normen : EMV 2004/108/EC und R&TTE 199/5/WE
-   Zertifikate : EN 14604:2005

## Moduldaten

-   Markieren : Fibar-Gruppe
-   Nachname : Fibaro Rauchsensor FGSD-002
-   Hersteller-ID : 271
-   Geben Sie Produkt ein : 3074
-   Produkt ID : 4098

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, drücken Sie gemäß seiner Papierdokumentation dreimal die zentrale Inklusionstaste.

![inclusion](images/fibaro.fgsd102/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgsd102/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/fibaro.fgsd102/commandes.jpg)

Hier ist die Liste der Befehle :

-   Dämpfe : das ist der Alarmbefehl des Moduls (für Rauch, Hitze)
-   Temperatur : Dies ist der Temperaturmessbefehl
-   Sabotage : das ist der Sabotagebefehl. Es signalisiert das Öffnen der Box
-   Testalarm : Dies ist der Befehl, der die Tatsache meldet, dass sich das Modul im Testmodus befindet
-   Hitzealarm : Dies ist der Befehl, der einen Hitzealarm auslöst (noch nicht zuverlässig)
-   Batterie : Dies ist der Batteriebefehl

### Modul-Setup

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Dann ist es notwendig, das Modul entsprechend Ihrer Installation zu konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/fibaro.fgsd102/config1.jpg)

![Config2](images/fibaro.fgsd102/config2.jpg)

Parameterdetails :

-   Wach auf : das ist das Weckintervall des Moduls (empfohlener Wert 21600)
-   1: können Sie die Empfindlichkeit der Raucherkennung einstellen
-   2: ermöglicht es Ihnen, die Benachrichtigungen auszuwählen, die an Jeedom gesendet werden (advice : toutes)
-   3: können Sie auswählen, welche Benachrichtigungen von einer visuellen Anzeige begleitet werden
-   4: können Sie auswählen, welche Benachrichtigungen von einer akustischen Anzeige begleitet werden (in allen Fällen wird das Modul bei Hitze- und Feuererkennung einen Ton ertönen lassen)
-   10: Ändern Sie diese Einstellung nur, wenn Sie wissen, was Sie tun
-   11: idem
-   12: idem
-   13: ermöglicht es, andere zwave-Module zu benachrichtigen (deaktivieren, es sei denn, Sie wissen, warum Sie es aktivieren)
-   20: Zeit zwischen zwei Temperaturverhältnissen
-   21: Temperaturdifferenz, von der, auch wenn die oben genannte Dauer nicht erreicht wird, die Temperatur an Jeedom gesendet wird
-   30: Hitzealarm-Auslösetemperatur
-   31: Berichtsintervall für Temperaturspitzen
-   32: Signalintervall bei Zwave-Verlust

### Groupes

Für den optimalen Betrieb Ihres Moduls. Jeedom muss mindestens den Gruppen 1, 4 und 5 zugeordnet werden:

![Groupe](images/fibaro.fgsd102/groupe.jpg)

## Gut zu wissen

### Besonderheiten

## Wakeup

Um dieses Modul aufzuwecken, drücken Sie dreimal die mittlere Taste

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
