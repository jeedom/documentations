# Fibaro Motion Sensor - FGMS-001

**The module**

![module](images/fibaro.fgms001/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/fibaro.fgms001/vuedefaut1.jpg)

## Summary

The Fibaro motion detector is a Z-Wave multifunction detector. In addition to motion detection, this device measures temperature and light intensity. This detector also includes an integrated accelerometer to detect any attempt to tamper with the device.

The Fibaro motion sensor is battery powered and designed to be quickly and easily installed on any surface. LED indicator signals movement, temperature level, operating mode and can be used to see if the device is in the Z-Wave network.

The motion sensor can be used for lighting scenes and surveillance and/or security systems.

## Fonctions

-   Wireless motion detector
-   Detects motion using a passive infrared sensor
-   Temperature measurement
-   Light intensity measurement
-   Burglary and theft protection
-   Motion and temperature alerts indicated by flashing LED
-   Earthquake detection mode
-   Button to include/exclude the detector
-   Low battery detection
-   Very small, reduced dimensions
-   Easy to install on a wall or any other surface

## Technical characteristics

-   Mod type : Z-Wave transmitter
-   Feed : Battery CR123A 3.6VDC
-   Recommended height for installation : 2,4m
-   Measured temperature range : -20°C to 100°C
-   Measurement accuracy : 0,5°C
-   Brightness measurement range : 0-32000 LUX
-   Frequency : 868.42Mhz
-   Transmission distance : 50m open field, 30m indoors
-   Dimensions: 4.4cm in diameter
-   Operating temperature : 0-40°C
-   Certificates : LVD 2006/95/WE EMC 2004/108/WE R&TTE 1999/5/WE RoHS II

## Module data

-   Mark : Fibar Group
-   Last name : Fibaro FGMS-001 \[Motion Sensor\]
-   Manufacturer ID : 271
-   Type Product : 2048
-   Product ID : 4097

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press the inclusion button 3 times, in accordance with its paper documentation.

![inclusion](images/fibaro.fgms001/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/fibaro.fgms001/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/fibaro.fgms001/commandes.jpg)

Here is the list of commands :

-   Presence : this is the command that will report a presence detection
-   Temperature : this is the command that allows you to raise the temperature
-   Brightness : this is the command that allows you to increase the brightness
-   Sabotage : this is the sabotage command (it is triggered in the event of vibration)
-   Battery : this is the battery command

### Module configuration

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/fibaro.fgms001/config1.jpg)

![Config2](images/fibaro.fgms001/config2.jpg)

![Config3](images/fibaro.fgms001/config3.jpg)

![Config3](images/fibaro.fgms001/config4.jpg)

Parameter details :

-   Wakeup : this is the module wake-up interval (recommended value 7200)
-   1: adjusts the sensitivity of the presence sensor
-   2: allows you to adjust the inertia of the presence sensor
-   3: not recommended to change this parameter
-   4: not recommended to change this parameter
-   6: time after which the sensor will send the signal "no more movement" (recommended value 30)
-   8: allows you to activate the night / day mode or both (recommended value : still active)
-   9: allows you to set the threshold for switching to night mode (useful if you have changed parameter 8)
-   12: to modify only if you know why you are doing it (association with a module for example)
-   14: idem
-   16: idem
-   20: sensitivity of the gyroscopic sensor (recommended value 15)
-   22: time after which the sensor will send the signal "no more sabotage" (recommended value 30)
-   24: allows to say how the sabotage is notified (IMPORTANT : recommended value : Sensor tamper notified at SensorAlarm command class/ Cancellation is notified after the time defined in parameter 22 )
-   26: edit only if you know why you're doing it
-   40: allows you to say how much the brightness value must be modified to be sent (recommended value 50)
-   42: allows you to give a minimum duration between two successive transmissions even if the luminosity has not changed (recommended value 3600)
-   60: allows you to say how much the temperature value must be modified to be sent (recommended value 2 i.e. 0.2 degrees)
-   62: used to give the frequency of temperature measurements (recommended value 900)
-   64: allows you to give a minimum duration between two successive transmissions even if the temperature has not changed (recommended value 2700)
-   66: allows you to adjust the temperature
-   80: allows you to choose the color of the LED when there is motion detection (see deactivating it)
-   81: allows you to adjust the brightness of the led
-   82: allows you to set the minimum brightness threshold to set the led to 1% (linked to parameter 81)
-   83: allows you to set the maximum brightness threshold to set the led to 100% (linked to parameter 81)
-   86: temperature below which the led will light up blue (linked to parameter 81)
-   87: temperature above which the led will light up red (linked to parameter 81)
-   89: allows the LED to flash blue/white/red in the event of sabotage

### Groupes

This module has three association groups, only the third is essential.

![Groupe](images/fibaro.fgms001/groupe.jpg)

## Good to know

### Specificities

> **Tip**
>
> This module is very capricious on wakeups and very poorly configured from the factory. It is essential to wake it up well after inclusion (several times are better than once), to configure it well according to your wishes, and to wake it up well so that the config is taken into account.

### Alternative visual

![vuewidget](images/fibaro.fgms001/vuewidget.jpg)

## Wakeup

To wake up this module there is only one way to proceed :

-   press the inclusion button 3 times (the light turns blue). Even if the light turns on, it may be necessary to do so several times in a row (2 or 3)

## FAQs.

This module wakes up by pressing its include button 3 times.

This module is very capricious. It is advisable to make the inclusion as close as possible to your box and to repeat it several times.

This module is a battery-powered module, the new configuration will be taken into account at the next wakeup.

## Important Note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
