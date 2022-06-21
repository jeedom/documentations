# Sicheres SRT 323" Thermostat"

**Das Modul**

![module](images/secure.srt323/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/secure.srt323/vuedefaut1.jpg)

## Zusammenfassung

Der SRT323 ist ein batteriebetriebener Wandthermostat. Es verfügt über einen Drehknopf, mit dem der Benutzer die eingestellte Temperatur im Raum einstellen kann. Dieser Thermostat enthält ein Laststeuerungsrelais. Es ist daher nicht erforderlich, einen Stellantrieb in der Nähe des Heizkessels zu installieren.

Durch den Vergleich der Solltemperatur mit der tatsächlich gemessenen Temperatur entscheidet der Thermostat, den Kessel zu betreiben. Darüber hinaus enthält dieser Thermostat einen TPI-Algorithmus (zeitproportionales Integral), der eine Optimierung und genauere Anpassung der Temperatur Ihrer Umgebung ermöglicht.

Der Thermostat kann die eingestellte Temperatur von einem anderen Z-Wave-Controller empfangen und kann auch als Temperatursensor verwendet werden. Der Thermostat selbst hat keinen eingebauten Timer, führt aber Z-Wave-Befehle und lokale Befehle aus.

Es kann als direkter Ersatz für vorhandene Thermostate verwendet werden, ohne dass Änderungen an der Verkabelung vorgenommen werden müssen. Der TPI-Algorithmus ermöglicht es, das Ein- und Ausschalten des Boilers zu optimieren, um die eingestellte Temperatur bestmöglich zu halten, ohne sie zu „überschießen“. Es hat sich gezeigt, dass TPI-Regler im Vergleich zu herkömmlichen Heizungsreglern erhebliche Energieeinsparungen ermöglichen.

Der SRT323 ist ein idealer Partner für die Verwendung mit einem Home-Automation-Gateway, mit dem Sie Ihr Heizsystem fernsteuern können. Sie müssen sich keine Sorgen mehr machen, nach Hause in ein kaltes Haus zu kommen, solange Sie ein Smartphone, Tablet oder einen PC zur Hand haben und mit dem Internet verbunden sind.

## Fonctions

-   Thermostat für den Hausgebrauch
-   Ersetzt einen vorhandenen Thermostat
-   Drahtlose Z-Wave-Technologie
-   Hintergrundbeleuchteter LCD-Bildschirm
-   Einfach zu verwenden
-   Kompatibel mit anderen Z-Wave-Produkten
-   Ein Knopf

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Controller
-   Integrierter TPI-Algorithmus
-   Relai: 3(1)A 230V Wechselstrom
-   Einstellbarer Temperaturbereich: 5 °C bis 30 °C
-   Einspeisung : 2x AAA (LR3) Batterien)
-   Lebensdauer der Batterie : 2 Jahre
-   Frequenz : 868,42 MHz
-   Zielfernrohr : bis zu 50 m im Freifeld
-   Schutzzeichen : IP30
-   Betriebstemperatur : 0 °C bis 40 °C
-   Maße : 86 x 86 x 36,25 mm

## Moduldaten

-   Markieren : Horstmann
-   Nachname : SRT 323 Elektronischer Raumthermostat und Temperatur
-   Hersteller-ID : 89
-   Geben Sie Produkt ein : 1
-   Produkt ID : 4

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie den Schalter 1 in die Position ON bringen, dann mit der Radanzeige L und das Rad drücken, gemäß seiner Papierdokumentation.

![inclusion](images/secure.srt323/inclusion.jpg)

> **Wichtig**
>
> Dieses Modul ist launisch bei der Aufnahme. Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf. Belassen Sie dazu den Schalter 1 in der Position ON, drehen Sie dann den Drehregler auf Position „n“ und drücken Sie die Taste. Zur Sicherheit nach 10 Sekunden ein zweites Mal drücken. Wenn Sie fertig sind, klicken Sie auf die Schaltfläche Synchronisieren (sichtbar in der Expertenansicht) neben den Schaltflächen Einschließen/Ausschließen. Klicken Sie dann auf der Seite Ihres Moduls oben rechts auf die Lupe.

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/secure.srt323/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/secure.srt323/commandes.jpg)

Hier ist die Liste der Befehle :

-   Temperatur : Dies ist der Temperaturmessbefehl
-   SollwertStatus : es ist der Befehl, der die aktuelle Anweisung gibt
-   Befehl : Dies ist der Befehl, der den Sollwert anpasst
-   Heizzustand : Dies ist der Befehl, der Ihnen mitteilt, ob sich der Thermostat im Heizmodus befindet oder nicht
-   Batterie : Dies ist der Batteriebefehl

### Modul-Setup

Dann ist es notwendig, das Modul entsprechend Ihrer Installation zu konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.
![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/secure.srt323/config1.jpg)

Parameterdetails :

-   1: ermöglicht die Aktivierung oder Deaktivierung des internen Temperatursensors
-   2: ermöglicht die Auswahl der Temperatureinheit
-   3: ermöglicht es Ihnen, den Temperaturänderungspegel für das Modul zu definieren, um ihn zu erhöhen (pro Einheit von 0,1 °C)

### Groupes

Für einen optimalen Betrieb Ihres Moduls muss Jeedom den 5 Gruppen zugeordnet werden
![Groupe](images/secure.srt323/groupe.jpg)

## Gut zu wissen

### Besonderheiten

> **Wichtig**
>
> Dieses Modul ist batteriebetrieben. Beachten Sie daher, dass eine Änderung des Sollwerts nur beim Aufwachen berücksichtigt wird. Standardmäßig erfolgt das Aufwachen bei 86400 Sekunden. Es wird dringend empfohlen, sie auf etwa 10 Minuten zu reduzieren. Somit wird eine Sollwertänderung spätestens nach 10 Minuten vom Modul berücksichtigt

## Wakeup

Um dieses Modul aufzuwecken, müssen Sie Schalter 1 in die Position ON bringen und
mit dem rad wähle n und drücke auf das rad.

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
