# Fibaro FGFS-101 "Hochwassersensor"

**Das Modul**

![module](images/fibaro.fgfs101/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/fibaro.fgfs101/vuedefaut1.jpg)

## Zusammenfassung

Der Sensor FGFS-101 ist kompakt und verfügt über eine Vielzahl von Funktionen. Mit seiner hochmodernen und präzisen Technologie warnt Sie der Fibaro Flood Sensor vor einer drohenden Überschwemmung oder einem schnellen Anstieg oder Abfall der Temperatur.

Es ist mit einem Neigungssensor ausgestattet, der sofort eine Warnung an das Z-Wave-Netzwerk sendet, wenn der Detektor bewegt oder gestohlen wird (gibt die Neigungs- oder Bewegungsinformationen an den Z-Wave-Controller zurück)).

Dieser universelle Überschwemmungs- und Temperaturmelder kann mit einer Batterie oder einer externen 12- oder 24-VDC-Stromversorgung betrieben werden. Bei Anschluss an eine externe Stromquelle dient die Batterie als Notstromquelle.

Dank seines Temperatursensors können Sie die Temperatur Ihres Bodens kontrollieren. Es ist wasserdicht, bei Überschwemmungen schwimmt es auf der Wasseroberfläche.

Es hat auch einen Sirenenalarm, der ertönen kann, wenn etwas schief geht. Sie können den Trockenkontaktausgang an ein vorhandenes Alarmsystem anschließen. Eine Front-LED zur Überprüfung des Status des FGFS-101.

Dieser Sensor enthält einen Z-Wave-Netzwerk-Reichweitentester, der Sie während der Installation von der ordnungsgemäßen Funktion des Sensors überzeugt.

## Fonctions

-   Überschwemmungsmelder (Anwesenheit von Wasser über Kontakte)
-   Temperaturdetektor
-   Neigungssensor
-   Akustischer und optischer Alarm
-   Z-Wave-Reichweitentester
-   Z-Wave-Repeater ?? (siehe Abschnitt „Gut zu wissen")

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Sender
-   Modul kann extern versorgt werden : 12 – 24 VDC
-   Batterietyp : CR123A
-   Lebensdauer der Batterie : 2 Jahre
-   Verbrauch bei externer Stromversorgung : 0,4W
-   Maximal unterstützter Strom am Ausgang (ALARM NC, TAMP NC) :25mA
-   Maximal unterstützte Ausgangsspannung : 40V (AC oder DC)
-   Frequenz : 868,42MHz
-   Übertragungsdistanz : 50m Freifeld, 30m drinnen
-   Maße : 72 x 28 mm (Durchmesser x Höhe)
-   Betriebstemperatur : 0-40°C (-20°C bis 70°C bei externer Stromversorgung)
-   Temperaturmessbereich : -20 bis 100 °C
-   Meßgenauigkeit : 0,5°C (in einem Bereich von 0 bis 40°C)
-   Normen : EMV 2004/108/EC und R&TTE 199/5/WE

## Moduldaten

-   Markieren : Fibar-Gruppe
-   Modell : FGFS101 Hochwassersensor
-   Hersteller : FIBARO-System
-   Hersteller-ID : 271
-   Geben Sie Produkt ein : 2816
-   Produkt ID : 4097

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie gemäß seiner Papierdokumentation (der schwarzen Registerkarte).

![Vue interieur](images/fibaro.fgfs101/Vue_interieur.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgfs101/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/fibaro.fgfs101/commandes.jpg)

Hier ist die Liste der Befehle :

-   Leck : Dies ist der Alarmbefehl des Moduls (bei Vorhandensein von Wasser, Überschwemmung usw)
-   Temperatur : Dies ist der Temperaturmessbefehl
-   Sabotage : das ist der Sabotagebefehl. Es signalisiert das Öffnen der Box
-   Batterie : Dies ist der Batteriebefehl

### Modulkonfiguration

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Dann ist es notwendig, das Modul entsprechend Ihrer Installation zu konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/fibaro.fgfs101/config1.jpg)

![Config2](images/fibaro.fgfs101/config2.jpg)

Parameterdetails :

-   Wach auf : das ist das Weckintervall des Moduls (empfohlener Wert 21600)
-   1\. Alarmlöschverzögerung nach Hochwassererkennung : valeur de 0 à 3600 s (0 par défaut/ dès qu‘il n'y a plus de détection il s'arrête instantanément)
-   2\. Wahl des Alarmtyps. Wert :
  - 0 : Akustischer und optischer Alarm deaktiviert
  - 1 : Akustischer Alarm aus und visueller Alarm an
  - 2 : Akustischer Alarm ein und visueller Alarm aus
  - 3 : Akustischer und visueller Alarm aktiviert.
-   10\. Verzögerungszeit zwischen zwei Temperaturmessungen : von 1 bis 65535 s (300 standardmäßig). Achten Sie darauf, einen Transferwert nicht zu nahe zu setzen, da sonst die Batterie des Moduls mit voller Geschwindigkeit schmilzt ! (1800 wird empfohlen)
-   12\. Temperaturunterschied zwischen zwei Berichten : von 1 bis 1000 (standardmäßig 50 = 0,5°). In Übereinstimmung mit Parameter 10 ist es auch möglich, den Bericht der Temperaturen entsprechend der Änderung der letzteren zu verwalten.
-   50\. Niedrigtemperaturalarm einstellen : von -10000 bis + 10000 (standardmäßig 1500 = 15 °C) Wird verwendet, um einen Alarm auszulösen, wenn die Temperatur unter einen bestimmten Schwellenwert fällt.
-   51.Einstellen des Hochtemperaturalarms : von -10000 bis + 10000 (standardmäßig 3500 = 35 °C) Wird verwendet, um einen Alarm auszulösen, wenn die Temperatur einen bestimmten Schwellenwert überschreitet.
-   73\. Temperaturkompensiert : von -10000 bis + 10000 (standardmäßig 0 = 0 °C) Wird verwendet, um einen Offset zwischen der Sensortemperatur und der tatsächlichen Temperatur zu definieren
-   75\. Einstellen der Weckdauer : von 0 bis 65535 s (standardmäßig 0, Der Alarm stoppt, sobald er keinen Fehler mehr feststellt.)

### Groupes

Für den optimalen Betrieb Ihres Moduls. Jeedom muss mindestens den Gruppen 1, 4 und 5 zugeordnet werden:

![Groupe](images/fibaro.fgfs101/groupe.jpg)

## Gut zu wissen

Von außen mit Strom versorgt, kann dieses Modul als Z-Wave-Repeater fungieren (Informationen derzeit nicht bestätigt)

Verdrahtung für eine externe Stromversorgung.

![Alim Exterieur](images/fibaro.fgfs101/Alim_Exterieur.jpg)

## Wakeup

Um dieses Modul aufzuwecken, drücken Sie dreimal die mittlere Taste

## Häufig gestellte Fragen.

Dieses Modul wird durch dreimaliges Drücken seiner Include-Taste aktiviert.

Dieses Modul ist standardmäßig ein Batteriemodul, die neue Konfiguration wird beim nächsten Wakeup berücksichtigt.

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen


Nutzungsdetails [hier](http://blog.domadoo.fr/2014/12/18/jeedom-guide-dutilisation-du-detecteur-dinondation-fibaro-fgfs-001/)
Fibaro-Dokumentation [Englisch](http://www.fibaro.com/manuals/en/FGFS-101-Flood-Sensor/FGFS-101-Flood-Sensor-en-2.1-2.3.pdf)
