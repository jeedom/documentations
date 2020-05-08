Aeotec Garage door controller 
====================================

\

-   **The module**

\

![module](images/aeotec.garagedoorcontroller/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/aeotec.garagedoorcontroller/vuedefaut1.jpg)

\

Summary 
------

\

Easily connected to the existing door motor, the controller
garage door enhances it with a suite of security sensors and
safety. The garage door controller does not only allow
control your garage door it also allows you to check
its state. Whether used by the engine or manually, the detector
smart comes with the garage door controller knows if the door
is open or closed, and can alert you when what's going on doesn't
should not.

\

Functions 
---------

\

-   Control and monitor your garage door remotely.

-   Module easily installed on the engine of your
    current door.

-   Local door control via integrated button.

-   Sends open / close alerts to the Z-Wave controller.

-   Audible and visual opening / closing alerts.

-   Adjustable alarm volume (105 dB max)

-   USB port for charging your own MP3 sounds.

-   Integrated status LED on the button.

-   Part of the Gen5 range from Aeon Labs.

-   Security of radio communication via AES-128 encryption.

-   Integrates the Z-Wave 500 series chip.

-   250% faster communication compared to peripherals
    Z-Wave standard.

-   Z-Wave message repeater.

-   Optimization of the antenna, range 300 meters.

\

Technical characteristics 
---------------------------

\

-   Type of module : Z-Wave + 500 series receiver and transmitter

-   Food : Actuator : 5 VDC (adapter supplied) Sensor : Pile
    Lithium 3V 800mA CR2

-   Standby consumption : 1W

-   Alarm consumption : 2W

-   Maximum volume : 105 dB

-   Supported audio formats : mp3 and WMV at the frequency of 320Kbps

-   Frequency : 868.42 Mhz

-   Transmission distance : 300m in open field

-   Operating temperature : -20 ° C to 50 ° C

-   Operating humidity : 80%

-   Certifications: FCC, UL, CE, ROHS

\

Module data 
-----------------

\

-   Mark : Aeotec

-   Name : Garage Door Controller (ZW062)

-   Manufacturer ID : 134

-   Product Type : 3

-   Product ID : 62

\

Setup 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[Documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/en_US/openzwave.html).

\

> **Important**
>
> To put this module in inclusion mode, press the button
> Z-Wave, in accordance with its paper documentation.

\

![inclusion](images/aeotec.garagedoorcontroller/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/aeotec.garagedoorcontroller/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
disponibles.

\

![Commands](images/aeotec.garagedoorcontroller/commandes.jpg)

\

Here is the list of commands :

\

-   Open / Close : Open, close or stop the garage door.

-   Position : Current garage door position.

-   Volume : Current speaker volume.

-   Temperature : Zone temperature, no automatic ascent.

-   Sabotage : Text sabotage status.

\

### Configuration of the module 

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

![Config1](images/aeotec.garagedoorcontroller/config1.jpg)

![Config1](images/aeotec.garagedoorcontroller/config2.jpg)

\

Parameter details :

\

-   34: Allows you to start the calibration of the opening time of
    the door.

-   41: Allows you to reset the sabotage status by selecting "Relieve
    the alarm state"

-   80: on Hail

-   255 : allows resetting the factory configuration

\

### Groups 

\

This module has two association groups. The first "Lifeline" is
indispensable.

\

![Groupe](images/aeotec.garagedoorcontroller/groupe.jpg)

\

Good to know 
------------

\

### Specificities 

Garage door opening time calibration:

-   1 : Garage door must be fully closed.

-   2 : Activate parameter 34 on "Do calibration".

-   3 : Start the door opening

-   4 : Wait until the door is fully open.

-   5 : Start closing the door

The calibration is completed

-   Parameter 34 will be updated to "Normal".

-   Parameter 35 will be updated with the calculated opening time.

\

Sabotage reset:

-   1 : The sensor must be properly attached.

-   2 : Activate parameter 41 on "Relieve the alarm state".

-   3 : Update settings.

The calibration is completed

-   Parameter 41 will be updated with "Sensor is not removed".

\

Faq. 
------

\

\

**@nechry**
