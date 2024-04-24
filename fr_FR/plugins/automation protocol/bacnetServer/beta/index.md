# BacnetServer

#Description

Le plugin Bacnet permet de créer un equipement Bacnet de votre Jeedom pour etre vu sur le réseau



# Configuration du plugin

Après téléchargement du plugin, il faut tout d’abord activer celui-ci, comme tout plugin Jeedom :

![config](../images/BacnetServerConfig.png)

Ensuite, il faut lancer l’installation des dépendances (même si elles apparaissent OK) :

![dependances](../images/BacnetServerDep.png)

Enfin, il faut démarrer le démon :

![demon](../images/BacneServerDemon.png)


Rien n’est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/BacnetServerConfig.png)


Dans ce même onglet, il vous faut choisir la valeur du Cron pour l'actualisation de vos équipements.




# Comment fonctionne le plugin ?




>**IMPORTANT**
>
>Vos équipements BACNET doivent se trouver sur le même réseau que votre Jeedom pour être détectés par celle-ci.


Par défaut, un équipement jeeBacnetServer est créé; c'est cet équipement 'bacnet' qui sera vu par votre supervisuer Bacnet sur le réseau

Vous pouvez configurer son deviceId dans la configuration du plugin

![menu](../images/BacnetServerConfig.png)


Pour ajouter des commandes Jeedom à votre jeeBacnetServer, cliquez sur Ajouter Commandes au Serveur :

![accueil](../images/BacnetServerAccueil.png)


Une modale va s'ouvrir, où apparaitra tous les commandes de type Infos présentes dans les differents plugin de votre jeedom.


>**IMPORTANT**
>
>Vos équipements doivent etre Actifs pour que les commandes soient détectées sur cette modale.


Vous devez ajouter l'**unité Bacnet (Engineering units)** que vous desirez injecté dans l'instance Bacnet. Attention, il faut absolument avoir la meme syntaxe que les unités disponible dans la liste des unités, disponible en **Annexe en bas de cette documentation.**

Vous devez egalement nommer la commande, en remplissant le champ prevu a cet effet. 
Ne pas mettre d'espace dans le nom de la commande

![syntaxCmds](../images/BacnetServersyntax.png)

Il vous suffit de chercher celles que vous desirez, et de Valider.


![accueil](../images/BacnetServerModale.png)


Le device bacnet avec l'instanceId que vous avez choisi va étre créer, et apparaitre sur votre réseau.


Pour mettre à jour les valeurs, vous devez configurer le cron dans la configuration du plugin.

![accueil](../images/BacnetServerConfig.png)



Pour supprimer des commandes du Serveur, il faut se rendre dans les commandes de l'équipement, et simplement Supprimer celles que vous desirez puis sauvegarder.



Vous pouvez également supprimer le device du réseau, ainsi que ses points bacnet en cliquant sur Supprimer le jeeBacnetServer.


![accueil](../images/BacnetServerReinit.png)




# Configuration des Commandes :


Pour changer l'unité des points bacnet, et les voir apparaitre sur le réseau, il vous faut rentrer l'unité dans le champ prévu à cet effet sur les commandes.

Sur le réseau bacnet, les instances des points reprendront les noms des commandes precisés dans le champ sur la modale des Ajouts de commandes.



Une fonction de postCalcul est également prevue : 
si vous choissisez de remplir ce postCalcul, alors la valeur injecté dans le deviceBacnet aura pris la valeur initale à remonter avec le calcul precisé

Vous pouvez par exemple :

#value# * 10


Cela prendra la valeur initiale de la commande a remontée, puis la multipliera par 10 avant de la mettre a jour dans l'instance jeeServer

Exemple :

![accueil](../images/BacnetServerPost.png)



>**IMPORTANT**
>
>Vous retrouverez l'ensemble des commandes existantes sur le jeeServer sur l'ecran du plugin, en cliquant sur Cmds JeeServer


![accueil](../images/BacnetServerAccueil.png)

![cmdExist](../images/BacnetServerCmdsExit.png)


# Importer/Exporter le jeeBacnetServer :


![accueil](../images/BacnetServerAccueil.png)

Pour prevenir les besoins, 2 options sont prévues : 


- Exporter le device :

En cliquant sur ce bouton, cela va télécharger un fichier Json reprenant la configuration du device ainsi que ses commandes.


- Importer le device :

En cliquant sur ce bouton, vous pouvez importer le ficher json de configuration du jeeBacnetServer que vous auriez télécharger, pour reprendre les commandes qui étaient configurées dans celui ci

# ANNEXE:

# Liste des BACnet Engineering Units (Unités Bacnet)

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
| candelas                        |
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
| degreesCelsius                  |
| degreesCelsiusPerHour           |
| degreesCelsiusPerMinute         |
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
| jouleSeconds                    |
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
| kilowattHours                   |
| kilowattHoursPerSquareFoot      |
| kilowattHoursPerSquareMeter     |
| kilowattHoursReactive           |
| kilowatts                       |
| liters                          |
| litersPerHour                   |
| litersPerMinute                 |
| litersPerSecond                 |
| lumens                          |
| luxes                           |
| megaBtus                        |
| megabecquerels                  |
| megahertz                       |
| megajoules                      |
| megajoulesPerDegreeKelvin       |
| megajoulesPerKilogramDryAir     |
| megajoulesPerSquareFoot         |
| megajoulesPerSquareMeter        |
| megAVoltAmpereHours             |
| megAVoltAmpereHoursReactive     |
| megAVoltAmperes                 |
| megAVoltAmperesReactive         |
| megAVolts                       |
| megawattHours                   |
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
| newtonMeters                    |
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
| perHour                         |
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
| therms                          |
| tonHours                        |
| tons                            |
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
