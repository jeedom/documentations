# bacnetManager

# Description

Mit dem Bacnet-Plugin können Sie Bacnet-Geräte für Ihren Jeedom sowie dessen Jeedom-Befehle erstellen, die von einem Bacnet-Supervisor im Netzwerk gesehen werden können



# Plugin-Setup

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es wie jedes Jeedom-Plugin zunächst aktivieren :

![config](./images/bacnetManagerConfig.png)

Anschließend müssen Sie mit der Installation der Abhängigkeiten beginnen (auch wenn diese in Ordnung erscheinen)) :

![dependances](./images/bacnetManagerDep.png)

Abschließend müssen Sie den Daemon starten :

![demon](./images/bacnetManagerDemon.png)


Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](./images/bacnetManagerConfig.png)


Auf derselben Registerkarte müssen Sie den Cron-Wert für die Aktualisierung Ihrer Ausrüstung auswählen.




# So funktioniert das Plugin ?




>**WICHTIG**
>
>Ihre BACNET-Geräte müssen sich im selben Netzwerk wie Ihr Jeedom befinden, damit sie von ihm erkannt werden.


Standardmäßig wird ein jeebacnetManager-Gerät erstellt; Es ist dieses „Bacnet“-Gerät, das von Ihrem Bacnet-Supervisor im Netzwerk gesehen wird

Sie können seine Geräte-ID in der Plugin-Konfiguration konfigurieren

![menu](./images/bacnetManagerConfig.png)


Um Jeedom-Befehle zu Ihrem jeebacnetManager hinzuzufügen, klicken Sie auf Befehle zum Server hinzufügen :

![accueil](./images/bacnetManagerAccueil.png)


Es öffnet sich ein Modal, in dem alle Befehle vom Typ „Info“ angezeigt werden, die in den verschiedenen Plugins Ihres Jeedoms vorhanden sind.


>**WICHTIG**
>
>Damit in diesem Modus Befehle erkannt werden, muss Ihr Gerät aktiv sein.


Sie müssen außerdem die Bestellung benennen, indem Sie das dafür vorgesehene Feld ausfüllen. 
Fügen Sie im Befehlsnamen kein Leerzeichen ein

![syntaxCmds](./images/bacnetManagersyntax.png)

Alles, was Sie tun müssen, ist, nach den gewünschten Dateien zu suchen und diese zu validieren.


![accueil](./images/bacnetManagerModale.png)


Das Bacnet-Gerät mit der von Ihnen gewählten Instanz-ID wird erstellt und in Ihrem Netzwerk angezeigt.


Um die Werte zu aktualisieren, müssen Sie den Cron in der Plugin-Konfiguration konfigurieren.

![accueil](./images/bacnetManagerConfig.png)



Um Bestellungen vom Server zu löschen, müssen Sie zu den Ausrüstungsbestellungen gehen und einfach die gewünschten löschen und dann speichern.



Sie können das Gerät sowie seine Bacnet-Punkte auch aus dem Netzwerk löschen, indem Sie auf JeebacnetManager löschen klicken.


![accueil](./images/bacnetManagerReinit.png)




# Bestellungen konfigurieren :


Um die Einheit der Bacnet-Punkte zu ändern und sie im Netzwerk anzuzeigen, müssen Sie die Einheit im dafür vorgesehenen Auswahlmenü der Bedienelemente auswählen.
Jeedom-Befehle vom Typ „String“ müssen keine Einheiten auswählen.


Im Bacnet-Netzwerk übernehmen die Punktinstanzen die Namen der Befehle, die im Feld im Modal „Befehle hinzufügen“ angegeben sind.



Eine PostCalculation-Funktion ist ebenfalls verfügbar : 
Wenn Sie sich dafür entscheiden, diese Post-Berechnung abzuschließen, hat der in das DeviceBacnet eingegebene Wert den Anfangswert angenommen, der mit der angegebenen Berechnung zurückgegeben werden soll

Das können Sie zum Beispiel :

#value# * 10


Dadurch wird der Anfangswert des ausgelösten Befehls übernommen und dann mit 10 multipliziert, bevor er in der jeeServer-Instanz aktualisiert wird

Beispiel :

![accueil](./images/bacnetManagerPost.png)



>**WICHTIG**
>
>Sie finden alle vorhandenen Befehle auf dem jeeServer auf dem Plugin-Bildschirm, indem Sie auf Cmds JeeServer klicken


![accueil](./images/bacnetManagerAccueil.png)

![cmdExist](./images/bacnetManagerCmdsExit.png)


# JeebacnetManager importieren/exportieren (in Kürze erhältlich)):


![accueil](./images/bacnetManagerAccueil.png)

Um dem Bedarf vorzubeugen, sind 2 Optionen geplant : 


- Gerät exportieren :

Durch Klicken auf diese Schaltfläche wird eine JSON-Datei heruntergeladen, die die Konfiguration des Geräts sowie seine Befehle enthält.


- Gerät importieren :

Durch Klicken auf diese Schaltfläche können Sie die heruntergeladene jeebacnetManager-Konfigurations-JSON-Datei importieren, um die darin konfigurierten Befehle zu verwenden

# ANNEXE:

# Liste der BACnet-Engineering-Einheiten)

| Technische Einheiten               |
|---------------------------------|
| Amperesekunden                   |
| AmpereQuadratstunden               |
| AmpereQuadratmeter              |
| Ampere                         |
| AmpereProMeter                 |
| AmpereProQuadratmeter           |
| Barren                            |
| Becquerel                      |
| BTUS                            |
| btusPerHour                     |
| btusPerPound                    |
| tusPerPoundDryAir               |
| Candela                        |
| CandelaPerQuadratmeter          |
| Zentimeter                     |
| ZentimeterMerkur            |
| ZentimeterWasser              |
| Kubikfuß                       |
| Kubikfuß pro Tag                 |
| Kubikfuß pro Stunde                |
| Kubikfuß pro Minute              |
| KubikfußPerSekunde              |
| Kubikmeter                     |
| Kubikmeter pro Tag               |
| Kubikmeter pro Stunde              |
| Kubikmeter pro Minute            |
| Kubikmeter pro Sekunde            |
| Währung1                       |
| Währung10                      |
| Währung2                       |
| Währung3                       |
| Währung4                       |
| Währung5                       |
| Währung6                       |
| Währung7                       |
| Währung8                       |
| Währung9                       |
| Zyklen pro Stunde                   |
| Zyklen pro Minute                 |
| Tage                            |
| Dezibel                        |
| DezibelA                       |
| DezibelMillivolt               |
| DezibelVolt                    |
| GradTageCelsius               |
| GradTageFahrenheit            |
| GradWinkel                  |
| Grad Celsius                  |
| Grad Celsius pro Stunde           |
| Grad Celsius pro Minute         |
| GradFahrenheit               |
| Grad Fahrenheit pro Stunde        |
| GradFahrenheitPerMinute      |
| GradKelvin                   |
| Grad Kelvin pro Stunde            |
| GradKelvinPerMinute          |
| GradPhase                    |
| deltaGradFahrenheit          |
| deltaGradKelvin              |
| Farad                          |
| Füße                            |
| Fuß pro Minute                   |
| Füße pro Sekunde                   |
| Fußkerzen                     |
| Gramm                           |
| Gramm Wasser pro Kilogramm Trockenluft   |
| Gramm pro Kubikzentimeter         |
| Gramm pro Kubikmeter              |
| GrammPerGram                    |
| Gramm pro Kilogramm                |
| Gramm pro Liter                   |
| GrammProMilliliter              |
| Gramm pro Minute                  |
| Gramm pro Sekunde                  |
| GrammProQuadratmeter             |
| grau                            |
| Hektopascal                    |
| Henrys                          |
| Hertz                           |
| PS                      |
| Std.                           |
| HundertstelSekunden               |
| imperialGallonen                 |
| imperialGallonsPerMinute        |
| Zoll                          |
| ZollOfMercury                 |
| ZollWasser                   |
| JouleSekunden                    |
| Joule                          |
| Joule pro Kubikmeter             |
| Joule pro Grad Kelvin           |
| Joule pro Stunde                  |
| JouleProKilogrammGradKelvin   |
| Joule pro Kilogramm Trockenluft         |
| KiloBtus                        |
| KiloBtusPerHour                 |
| Kilobecquerel                  |
| Kilogramm                       |
| Kilogramm pro Kubikmeter          |
| Kilogramm pro Stunde                |
| KilogrammProKilogramm            |
| Kilogramm pro Minute              |
| Kilogramm pro Sekunde              |
| Kilohertz                       |
| Kiloohm                         |
| Kilojoule                      |
| Kilojoule pro Grad Kelvin       |
| Kilojoule pro Kilogramm           |
| Kilojoule pro Kilogramm Trockenluft     |
| Kilometer                      |
| Kilometer pro Stunde               |
| Kilopascal                     |
| KilovoltAmpereStunden             |
| KilovoltAmpereStundenReaktiv     |
| KilovoltAmpere                 |
| KilovoltAmpereReaktiv         |
| Kilovolt                       |
| Kilowattstunden                   |
| Kilowattstunden pro Quadratfuß      |
| Kilowattstunden pro Quadratmeter     |
| KilowattstundenReaktiv           |
| Kilowatt                       |
| Liter                          |
| Liter pro Stunde                   |
| LiterPerMinute                 |
| LiterPerSecond                 |
| Lumen                          |
| Luxus                           |
| megaBtus                        |
| Megabecquerel                  |
| Megahertz                       |
| Megajoule                      |
| Megajoule pro Grad Kelvin       |
| Megajoule pro Kilogramm Trockenluft     |
| Megajoule pro Quadratfuß         |
| Megajoule pro Quadratmeter        |
| megaAVoltAmpereStunden             |
| megaAVoltAmpereHoursReactive     |
| MegaAVoltAmpere                 |
| MegaVoltAmperesReactive         |
| MegaAVolts                       |
| Megawattstunden                   |
| MegawattstundenReaktiv           |
| Megawatt                       |
| Megaohm                         |
| Meter                          |
| Meter pro Stunde                   |
| MeterPerMinute                 |
| MeterPerSekunde                 |
| MeterPerSecondPerSecond        |
| microSiemens                    |
| Mikrogramm pro Kubikmeter         |
| Mikrogramm pro Liter              |
| mikrograu                       |
| Mikrometer                     |
| Mikrosievert                   |
| Mikrosievert pro Stunde            |
| Meilen pro Stunde                    |
| Milliampere                    |
| Millibar                       |
| Milligramm                      |
| Milligramm pro Kubikmeter         |
| Milligramm pro Gramm               |
| Milligramm pro Kilogramm           |
| Milligramm pro Liter              |
| Milligray                       |
| Milliliter                     |
| Milliliter pro Sekunde            |
| Millimeter                     |
| MillimeterMerkur            |
| MillimeterWasser              |
| MillimeterProMinute            |
| Millimeter pro Sekunde            |
| Milliohm                       |
| Millisekunden                    |
| Millisiemens                    |
| Millisievert                   |
| Millivolt                      |
| Milliwatt                      |
| Minuten                         |
| Minuten pro Grad Kelvin          |
| Monate                          |
| Nanogramm pro Kubikmeter          |
| nephelometrische Trübungseinheit      |
| Newton                          |
| NewtonMeter                    |
| NewtonSekunden                   |
| Newton pro Meter                 |
| neinUnitsohmMeterPerSquareMeter   |
| Ohmmeter                       |
| Ohm                            |
| pH-Wert                              |
| partsPerBillion                 |
| Anteile pro Million                 |
| pascalSekunden                   |
| Pascal                         |
| pro Stunde                         |
| Promille                        |
| proMinute                       |
| proSekunde                       |
| Prozent                         |
| ProzentObscurationPerFoot       |
| ProzentObscurationPerMeter      |
| ProzentPerSekunde                |
| ProzentRelativeLuftfeuchtigkeit         |
| PfundKraftPerQuadratZoll        |
| PfundMasse                      |
| PfundMassePerStunde               |
| PfundMassePerMinute             |
| PfundMassePerSekunde             |
| Leistungsfaktor                     |
| psiPerDegreeFahrenheit          |
| Bogenmaß                         |
| BogenmaßPerSekunde                |
| Umdrehungen pro Minute            |
| Sekunden                         |
| Siemens                         |
| SiemensPerMeter                 |
| Sieverts                        |
| Quadratzentimeter               |
| Quadratfuß                      |
| Quadratzoll                    |
| Quadratmeter                    |
| Quadratmeter pro Newton           |
| Tesla                          |
| Thermal-                          |
| Ihre Stunden                        |
| Töne                            |
| Töne pro Stunde                     |
| TöneKühlung               |
| usGallonen                       |
| usGallonen pro Stunde                |
| usGallonsPerMinute              |
| VoltAmpereStunden                 |
| VoltAmpereStundenReaktiv         |
| VoltAmpere                     |
| VoltAmpereReaktiv             |
| Volt                           |
| VoltProGradKelvin            |
| Volt pro Meter                   |
| VoltQuadratStunden                |
| Wattstunden                       |
| Wattstunden pro Kubikmeter          |
| wattHoursReactive               |
| Watt                           |
| Watt pro Meter pro Grad Kelvin    |
| Watt pro Quadratfuß              |
| Watt pro Quadratmeter             |
| Watt pro Quadratmeter Grad Kelvin |
| webers                          |
| Wochen                           |
| Jahre                           |




### Plugin-Setup

#### Erweiterter Modus

Durch die Aktivierung des **Erweiterter Modus**, Der konfigurierte Cron ruft die Werte von Jeedom-Befehlen nicht mehr ab, um sie auf dem Server zu aktualisieren. Stattdessen prüft es, ob ein Schreibvorgang auf dem Server stattgefunden hat, und führt die Aktionsbefehle der verschiedenen Plugins aus, die mit dem auf dem Bacnet-Punkt geschriebenen Wert oder dem bereitgestellten Wert konfiguriert sind (siehe das CmdsJeeServer-Modal)).

#### Bestelleinstellungen

Wie üblich ist es nach der Konfiguration der Befehle vom Typ Info erforderlich, zum Modal zu wechseln **CmdsJeeServer** zum Konfigurieren und Senden von Befehlen an den Server.

1. **Auswahl der Befehlsaktion** : Wählen Sie einen Aktionsbefehl basierend auf dem ausgewählten Plugin aus.
2. **Anfangswert** : Legen Sie einen Anfangswert fest, um den Bacnet-Punkt zum ersten Mal zu initialisieren.
3. **Verwenden Sie den Bacnet-Wert** : Aktivieren Sie diese Option, um den Bacnet-Wert zu verwenden. Wenn diese Option nicht aktiviert ist, müssen Sie das Feld „An die Aktion zu sendender Wert“ ausfüllen".

Beim Ausführen des Crons prüft das System, ob am Bacnet-Punkt eine Wertänderung stattgefunden hat (Schreiben)). An diesem Punkt sendet es entweder diesen Bacnet-Wert oder den unter „An Aktion senden“ eingegebenen Wert an den Parameterized Action-Befehl.