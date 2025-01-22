# Documentation du Plugin BacnetManager

>**IMPORTANT**
>
>Le plugin BacnetManager n'est pas compatible avec le plugin officiel Jeedom Bacnet. Une seule instance Bacnet peut être créée sur une box Jeedom.


# <span style="color: #95C12A;">Description</span>

Le plugin BacnetManager permet de créer un équipement Bacnet sur votre Jeedom, ainsi que ses commandes d'information (« Infos Jeedom »), afin qu'il soit visible sur le réseau par un superviseur Bacnet. Il permet également d'associer des commandes d'action (« Actions Jeedom ») provenant d'autres plugins, pour piloter Jeedom via Bacnet lorsque des écritures sont détectées sur ces points Bacnet.




# <span style="color: #95C12A;">Configuration du plugin</span>

Après avoir téléchargé le plugin, commencez par l'activer depuis la gestion des plugins Jeedom.

![config](../images/BacnetManagerConfig.png)

Ensuite, lancez l'installation des dépendances, même si elles apparaissent comme « OK ».

![dependances](../images/BacnetManagerDep.png)

Enfin, démarrez le démon depuis la page de configuration.

![demon](../images/BacnetManagerDemon.png)


Port socket interne : Ne modifiez pas ce champ dans la section « Configuration ».

![socket](../images/BacnetManagerConfig.png)


Cron : Configurez la fréquence du cron, qui permettra de lire les valeurs des points Bacnet pour détecter d'éventuelles écritures externes.




# <span style="color: #95C12A;">Fonctionnement du plugin</span>




>**Pré-requis**
>
>Réseau : Vos équipements Bacnet doivent être sur le même réseau que votre Jeedom pour être détectés.


#### <u>Création de l'équipement jeeBacnetManager</u>

Par défaut, un équipement nommé jeeBacnetManager est créé. Cet équipement représente le « serveur Bacnet » qui sera visible par votre superviseur Bacnet.

You can configure its deviceId in the plugin configuration

![menu](../images/BacnetManagerConfig.png)

#### <u>Ajout de commandes Jeedom au jeeBacnetManager</u>



Cliquez sur Ajouter Commandes au Serveur.

![accueil](../images/BacnetManagerAccueil.png)

Une fenêtre modale s'ouvre, listant toutes les commandes de type « Infos » présentes dans les différents plugins de votre Jeedom.

![accueil](../images/BacnetManagerModale.png)
>**IMPORTANT**
>
>Les équipements doivent être actifs pour que leurs commandes soient détectées.
>Évitez d'utiliser des espaces dans les noms des commandes.


>**FACULTATIF**
>
>Remplissez le champ « Nom de point Bacnet » (facultatif). Si ce champ est vide, le nom de la commande Jeedom sera utilisé comme nom du point Bacnet.

Sélectionnez les commandes souhaitées, puis validez.

Après validation, quittez la fenêtre et cliquez sur Cmds Jeed Server pour afficher la liste des commandes ajoutées.


#### <u>Points Bacnet créés</u>
Cette modale va s'afficher :

![accueil](../images/BacnetManagerConfigCmds.png)

Pour chaque commande ajoutée, deux points Bacnet sont créés :

- Commande « info » : Mise à jour via le cron pour le monitoring.

- Commande « Write » : Utilisée pour détecter les écritures depuis un équipement Bacnet. Si une écriture est détectée, la commande d'action associée est exécutée.

#### <u>Paramétrage des Commandes</u>
 

1. **Action Command Selection** : Select an Action command depending on the chosen plugin.
2. **Initial Value** : Set an initial value to initialize the Bacnet point for the first time.
3. **Use Bacnet Value** : Check this option to use Bacnet value. If this option is not checked, you must fill in the "Value to send to action" field".


#### <u>Mise à jour des valeurs</u>

Configurez la fréquence du cron dans la configuration du plugin pour actualiser les valeurs.

![accueil](../images/BacnetManagerConfig.png)
When the cron runs, the system will check if there has been a change of value on the Bacnet point (write). At that point it will send either that Bacnet value or the value entered in "Send to Action" to the configured Action command.

Une fois toutes les commandes configurées, on envoie toutes ces commandes sur le device Bacnet, en cliquant sur Envoyer au Serveur



# Import/Export the jeeBacnetManager (coming soon)):


![accueil](../images/BacnetManagerAccueil.png)

To prevent needs, 2 options are provided : 


- Export device :

By clicking on this button, it will download a Json file containing the configuration of the device as well as its commands.


- Import device :

By clicking on this button, you can import the jeeBacnetManager configuration json file that you would have downloaded, to use the commands that were configured in this one

# ANNEXE:

# List of BACnet Engineering Units)

| Engineering units               |
|---------------------------------|
| ampereSeconds                   |
| ampereSquareHours               |
| ampereSquareMeters              |
| amperes                         |
| amperesPerMeter                 |
| amperesPerSquareMeter           |
| bars                            |
| becquerels                      |
| btus                            |
| btusPerHour                     |
| btusPerPound                    |
| tusPerPoundDryAir               |
| candles                        |
| candelasPerSquareMeter          |
| centimeters                     |
| centimetersOfMercury            |
| centimetersOfWater              |
| cubicFeet                       |
| cubicFeetPerDay                 |
| cubicFeetPerHour                |
| cubicFeetPerMinute              |
| cubicFeetPerSecond              |
| cubicMeters                     |
| cubicMetersPerDay               |
| cubicMetersPerHour              |
| cubicMetersPerMinute            |
| cubicMetersPerSecond            |
| currency1                       |
| currency10                      |
| currency2                       |
| currency3                       |
| currency4                       |
| currency5                       |
| currency6                       |
| currency7                       |
| currency8                       |
| currency9                       |
| cyclesPerHour                   |
| cyclesPerMinute                 |
| days                            |
| decibels                        |
| decibelsA                       |
| decibelsMillivolt               |
| decibelsVolt                    |
| degreeDaysCelsius               |
| degreeDaysFahrenheit            |
| degreesAngular                  |
| degrees Celsius                  |
| degrees CelsiusPerHour           |
| degrees CelsiusPerMinute         |
| degreesFahrenheit               |
| degreesFahrenheitPerHour        |
| degreesFahrenheitPerMinute      |
| degreesKelvin                   |
| degreesKelvinPerHour            |
| degreesKelvinPerMinute          |
| degreesPhase                    |
| deltaDegreesFahrenheit          |
| deltaDegreesKelvin              |
| farads                          |
| feet                            |
| feetPerMinute                   |
| feetPerSecond                   |
| footCandles                     |
| grams                           |
| gramsOfWaterPerKilogramDryAir   |
| gramsPerCubicCentimeter         |
| gramsPerCubicMeter              |
| gramsPerGram                    |
| gramsPerKilogram                |
| gramsPerLiter                   |
| gramsPerMilliliter              |
| gramsPerMinute                  |
| gramsPerSecond                  |
| gramsPerSquareMeter             |
| gray                            |
| hectopascals                    |
| henrys                          |
| hertz                           |
| horsepower                      |
| hours                           |
| hundredthsSeconds               |
| imperialGallons                 |
| imperialGallonsPerMinute        |
| inches                          |
| inchesOfMercury                 |
| inchesOfWater                   |
| jouleseconds                    |
| joules                          |
| joulesPerCubicMeter             |
| joulesPerDegreeKelvin           |
| joulesPerHours                  |
| joulesPerKilogramDegreeKelvin   |
| joulesPerKilogramDryAir         |
| kiloBtus                        |
| kiloBtusPerHour                 |
| kilobecquerels                  |
| kilograms                       |
| kilogramsPerCubicMeter          |
| kilogramsPerHour                |
| kilogramsPerKilogram            |
| kilogramsPerMinute              |
| kilogramsPerSecond              |
| kilohertz                       |
| kilohms                         |
| kilojoules                      |
| kilojoulesPerDegreeKelvin       |
| kilojoulesPerKilogram           |
| kilojoulesPerKilogramDryAir     |
| kilometers                      |
| kilometersPerHour               |
| kilopascals                     |
| kilovoltAmpereHours             |
| kilovoltAmpereHoursReactive     |
| kilovoltAmperes                 |
| kilovoltAmperesReactive         |
| kilovolts                       |
| kilowatt hours                   |
| kilowattHoursPerSquareFoot      |
| kilowattHoursPerSquareMeter     |
| kilowattHoursReactive           |
| kilowatts                       |
| liters                          |
| litersPerHour                   |
| litersPerMinute                 |
| litersPerSecond                 |
| lumens                          |
| luxuries                           |
| megaBtus                        |
| megabecquerels                  |
| megahertz                       |
| megajoules                      |
| megajoulesPerDegreeKelvin       |
| megajoulesPerKilogramDryAir     |
| megajoulesPerSquareFoot         |
| megajoulesPerSquareMeter        |
| megaAVoltAmpereHours             |
| megaVoltAmpereHoursReactive     |
| megaAVoltAmperes                 |
| megaAVoltAmperesReactive         |
| megaVolts                       |
| megawatt hours                   |
| megawattHoursReactive           |
| megawatts                       |
| megohms                         |
| meters                          |
| metersPerHour                   |
| metersPerMinute                 |
| metersPerSecond                 |
| metersPerSecondPerSecond        |
| microSiemens                    |
| microgramsPerCubicMeter         |
| microgramsPerLiter              |
| microgray                       |
| micrometers                     |
| microsieverts                   |
| microsievertsPerHour            |
| milesPerHour                    |
| milliamperes                    |
| millibars                       |
| milligrams                      |
| milligramsPerCubicMeter         |
| milligramsPerGram               |
| milligramsPerKilogram           |
| milligramsPerLiter              |
| milligray                       |
| milliliters                     |
| millilitersPerSecond            |
| millimeters                     |
| millimetersOfMercury            |
| millimetersOfWater              |
| millimetersPerMinute            |
| millimetersPerSecond            |
| milliohms                       |
| milliseconds                    |
| millisiemens                    |
| millisieverts                   |
| millivolts                      |
| milliwatts                      |
| minutes                         |
| minutesPerDegreeKelvin          |
| months                          |
| nanogramsPerCubicMeter          |
| nephelometricTurbidityUnit      |
| newton                          |
| newtonmeters                    |
| newtonSeconds                   |
| newtonsPerMeter                 |
| noUnitsohmMeterPerSquareMeter   |
| ohmMeters                       |
| ohms                            |
| pH                              |
| partsPerBillion                 |
| partsPerMillion                 |
| pascalSeconds                   |
| pascals                         |
| per hour                         |
| perMille                        |
| perMinute                       |
| perSecond                       |
| percent                         |
| percentObscurationPerFoot       |
| percentObscurationPerMeter      |
| percentPerSecond                |
| percentRelativeHumidity         |
| poundsForcePerSquareInch        |
| poundsMass                      |
| poundsMassPerHour               |
| poundsMassPerMinute             |
| poundsMassPerSecond             |
| powerFactor                     |
| psiPerDegreeFahrenheit          |
| radians                         |
| radiansPerSecond                |
| revolutionsPerMinute            |
| seconds                         |
| siemens                         |
| siemensPerMeter                 |
| sieverts                        |
| squareCentimeters               |
| squareFeet                      |
| squareInches                    |
| squareMeters                    |
| squareMetersPerNewton           |
| teslas                          |
| thermals                          |
| yourHours                        |
| tones                            |
| tonsPerHour                     |
| tonsRefrigeration               |
| usGallons                       |
| usGallonsPerHour                |
| usGallonsPerMinute              |
| voltAmpereHours                 |
| voltAmpereHoursReactive         |
| voltAmperes                     |
| voltAmperesReactive             |
| volts                           |
| voltsPerDegreeKelvin            |
| voltsPerMeter                   |
| voltsSquareHours                |
| wattHours                       |
| wattHoursPerCubicMeter          |
| wattHoursReactive               |
| watts                           |
| wattsPerMeterPerDegreeKelvin    |
| wattsPerSquareFoot              |
| wattsPerSquareMeter             |
| wattsPerSquareMeterDegreeKelvin |
| webers                          |
| weeks                           |
| years                           |



