# bacnetManager

# Description

The Bacnet plugin allows you to create a Bacnet device for your Jeedom, as well as its Jeedom commands, to be seen on the network by a Bacnet supervisor



# Plugin Configuration

After downloading the plugin, you must first activate it, like any Jeedom plugin :

![config](./images/bacnetManagerConfig.png)

Then you have to launch the installation of the dependencies (even if they appear OK) :

![dependances](./images/bacnetManagerDep.png)

Finally, you need to start the daemon :

![demon](./images/bacnetManagerDemon.png)


Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](./images/bacnetManagerConfig.png)


In this same tab, you must choose the Cron value for updating your equipment.




# How the plugin works ?




>**IMPORTANT**
>
>Your BACNET equipment must be on the same network as your Jeedom to be detected by it.


By default, a jeebacnetManager device is created; it is this 'bacnet' device that will be seen by your Bacnet supervisor on the network

You can configure its deviceId in the plugin configuration

![menu](./images/bacnetManagerConfig.png)


To add Jeedom commands to your jeebacnetManager, click on Add Commands to Server :

![accueil](./images/bacnetManagerAccueil.png)


A modal will open, where all the Info type commands present in the different plugins of your jeedom will appear.


>**IMPORTANT**
>
>Your equipment must be Active for orders to be detected on this modal.


You must also name the order, by filling in the field provided for this purpose. 
Do not put spaces in the command name

![syntaxCmds](./images/bacnetManagersyntax.png)

You just have to search for the ones you want, and Validate.


![accueil](./images/bacnetManagerModale.png)


The bacnet device with the instanceId you chose will be created, and appear on your network.


To update the values you need to configure the cron in the plugin configuration.

![accueil](./images/bacnetManagerConfig.png)



To delete orders from the Server, you must go to the equipment orders, and simply Delete the ones you want then save.



You can also remove the device from the network, along with its bacnet points by clicking on Remove jeebacnetManager.


![accueil](./images/bacnetManagerReinit.png)




# Command Configuration :


To change the unit of bacnet points, and see them appear on the network, you must choose the unit in the Select menu provided for this purpose on the controls.
Jeedom commands of type 'string' do not have to select units.


On the bacnet network, the instances of the points will take the names of the commands specified in the field on the Add commands modal.



A postCalculation function is also planned : 
if you choose to fill this postCalcul, then the value injected into the deviceBacnet will have taken the initial value to be returned with the specified calculation

For example, you can :

#value# * 10


This will take the initial value of the command to be raised, then multiply it by 10 before updating it in the jeeServer instance

Example :

![accueil](./images/bacnetManagerPost.png)



>**IMPORTANT**
>
>You will find all the existing commands on the jeeServer on the plugin screen, by clicking on Cmds JeeServer


![accueil](./images/bacnetManagerAccueil.png)

![cmdExist](./images/bacnetManagerCmdsExit.png)


# Import/Export jeebacnetManager (coming soon)):


![accueil](./images/bacnetManagerAccueil.png)

To prevent needs, 2 options are provided : 


- Export device :

Clicking on this button will download a Json file containing the device configuration and its commands.


- Import device :

By clicking on this button, you can import the jeebacnetManager configuration json file that you have downloaded, to take the commands that were configured in it

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
| megaVoltAmpereHours             |
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




### Plugin Configuration

#### Advanced Mode

By activating the **Advanced Mode**, the configured cron will no longer retrieve the values of the Jeedom commands to update them on the server. Instead, it will check if a write has taken place on the server and will execute the Actions commands of the various plugins configured with the value written on the Bacnet point or the value entered (see the CmdsJeeServer modal).

#### Command Settings

As usual, after setting the Info type commands, it is necessary to go to the modal **CmdsJeeServer** to configure and send commands to the server.

1. **Action Command Selection** : Select an Action command depending on the chosen plugin.
2. **Initial Value** : Set an initial value to initialize the Bacnet point for the first time.
3. **Use Bacnet Value** : Check this option to use Bacnet value. If this option is not checked, you must fill in the "Value to send to action" field".

When the cron runs, the system will check if there has been a change of value on the Bacnet point (write). At that point it will send either that Bacnet value or the value entered in "Send to Action" to the configured Action command.