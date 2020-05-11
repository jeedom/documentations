Fibaro Motion Sensor - FGMS-001 
===============================

\

-   **The module**

\

![module](images/fibaro.fgms001/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/fibaro.fgms001/vuedefaut1.jpg)

\

Summary 
------

\

The Fibaro motion detector is a Z-Wave multifunction detector.
In addition to motion detection, this device measures the
temperature and light intensity. This detector also includes a
built-in accelerometer to detect any attempt to alter the
dispositif.

The Fibaro motion detector is battery powered and designed
to be installed quickly and easily on any
area. LED indicator signals movement, temperature level,
the operating mode and can be used to see if the device
is in the Z-Wave network.

Motion detector can be used for lighting scenes
and surveillance and / or security systems.

\

Functions 
---------

\

-   Wireless motion detector

-   Detects movement using a passive infrared sensor

-   Temperature measurement

-   Light intensity measurement

-   Burglary and theft protection

-   Motion and temperature alerts signaled by flashing
    LED diode

-   Earthquake detection mode

-   Button to include / exclude the detector

-   Low battery detection

-   Very small, reduced dimensions

-   Easy installation on a wall or any other surface

\

Technical characteristics 
---------------------------

\

-   Type of module : Z-Wave transmitter

-   Food : CR123A 3,6VDC battery

-   Recommended height for installation : 2,4m

-   Measured temperature range : -20 ° C to 100 ° C

-   Measurement accuracy : 0,5°C

-   Brightness measurement range : 0-32000 LUX

-   Frequency : 868.42 Mhz

-   Transmission distance : 50m free field, 30m indoors

-   Dimensions: 4.4 cm in diameter

-   Operating temperature : 0-40 ° C

-   Certifications : LVD 2006/95 / WE EMC 2004/108 / WE R & TTE 1999/5 / WE RoHS
    II

\

Module data 
-----------------

\

-   Mark : Fibar Group

-   Name : Fibaro FGMS-001 \ [Motion Sensor \]

-   Manufacturer ID : 271

-   Product Type : 2048

-   Product ID : 4097

\

Setup 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[Documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/en_US/openzwave.html).

\

> **IMPORTANT**
>
> To put this module in inclusion mode, press the button 3 times
> inclusion button, according to its paper documentation.

\

![inclusion](images/fibaro.fgms001/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/fibaro.fgms001/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
disponibles.

\

![Commands](images/fibaro.fgms001/commandes.jpg)

\

Here is the list of commands :

\

-   Presence : it is the command which will detect a presence detection

-   Temperature : it is the command which allows to go up the
    Temperature

-   Brightness : it is the command which makes it possible to raise the brightness

-   Sabotage : this is the sabotage command (it is triggered in case
    vibration)

-   Drums : it's the battery command

\

### Configuration of the module 

\

> **IMPORTANT**
>
> During a first inclusion always wake up the module just after
> inclusion.

\

Then if you want to configure the module according to
of your installation, you have to go through the button
"Configuration "of Jeedom's OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
Settings)

\

![Config1](images/fibaro.fgms001/config1.jpg)

![Config2](images/fibaro.fgms001/config2.jpg)

![Config3](images/fibaro.fgms001/config3.jpg)

![Config3](images/fibaro.fgms001/config4.jpg)

\

Parameter details :

\

-   Wakeup : this is the module's wake-up interval (value
    7200 recommended)

-   1: adjusts the sensitivity of the presence sensor

-   2: adjusts the inertia of the presence sensor

-   3: not recommended to change this setting

-   4: not recommended to change this setting

-   6: time after which the sensor will send the signal "more than
    movement "(recommended value 30)

-   8: activates night / day mode or both (value
    recommended : always active)

-   9: allows you to adjust the threshold for switching to night mode (useful if you
    have changed parameter 8)

-   12: to change only if you know why you are doing it
    (association with a module for example)

-   14: idem

-   16: idem

-   20: sensitivity of the gyro sensor (recommended value 15)

-   22: time after which the sensor will send the signal "more than
    sabotage "(recommended value 30)

-   24: lets you tell how the sabotage is notified (IMPORTANT :
    recommended value : Tamper sensor notified to SensorAlarm
    command class / Cancellation is notified after the time defined in
    parameter 22)

-   26: to change only if you know why you are doing it

-   40: lets say how much the value of
    brightness to be sent (recommended value 50)

-   42: allows to give a minimum duration between two successive sendings
    even if the brightness has not changed (recommended value 3600)

-   60: lets say how much the value of
    temperature to be sent (recommended value 2 or 0.2 degrees)

-   62: gives the frequency of temperature measurements (value
    recommended 900)

-   64: allows to give a minimum duration between two successive sendings
    even if the temperature has not changed (recommended value 2700)

-   66: allows to adjust the temperature

-   80: allows to choose the color of the led when there is detection of
    movement (see to deactivate)

-   81: allows to adjust the brightness of the led

-   82: adjusts the minimum brightness threshold to set the
    1% led (linked to parameter 81)

-   83: adjusts the maximum brightness threshold to set the
    100% led (linked to parameter 81)

-   86: temperature below which the LED will light blue
    (linked to parameter 81)

-   87: temperature above which the LED will light red
    (linked to parameter 81)

-   89: allows the LED to flash in blue / white / red in case of
    sabotage

\

### Groups 

\

This module has three association groups, only the third is
indispensable.

\

![Groupe](images/fibaro.fgms001/groupe.jpg)

\

Good to know 
------------

\

### Specificities 

\

> **Tip**
>
> This module is very finicky on wakeup and very badly configured
> factory. It is essential to wake it up well after inclusion
> (several times are better than one), to configure it according to your
> wishes, and to wake it up well so that the config is taken into account
> Account.

\

### Alternative visual 

\

![vuewidget](images/fibaro.fgms001/vuewidget.jpg)

\

Wakeup 
------

\

To wake up this module there is only one way :

-   press the inclusion button 3 times (the light comes on
    in blue). Even if the light comes on, it may be necessary to
    do it several times in a row (2 or 3)

\

Faq. 
------

\

This module wakes up by pressing 3 times on its inclusion button.

\

This module is very finicky. It is advisable to include
closer to your box and pick it up several times.

\

This module is a battery module, the new configuration will be
taken into account at the next wakeup.

\

Important note 
---------------

\

> **IMPORTANT**
>
> You have to wake up the module : after its inclusion, after a change
> of the configuration, after a change of wakeup, after a
> change of association groups

\

**@sarakha63**
