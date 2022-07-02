Aeotec Garage Door Controller 
====================================



-   **The module**



![module](images/aeotec.garagedoorcontroller/module.jpg)



-   **The Jeedom visual**



![vuedefaut1](images/aeotec.garagedoorcontroller/vuedefaut1.jpg)



Summary 
------



Easily plugged into your door's existing motor, controller
garage door sensor enhances it with a suite of security sensors and
safety. The garage door controller does more than just
control your garage door, it also allows you to check
its state. Whether operated by motor or manually, the detector
intelligent that comes with the garage door controller knows if the door
is open or closed, and can alert you when what is happening does not
should not.



Functions 
---------



-   Control and monitor your garage door remotely.

-   Module that simply installs on the engine of your
    current gate.

-   Local door control via integrated button.

-   Sends open/close alerts to Z-Wave controller.

-   Audible and visual open/close alerts.

-   Adjustable alarm sound volume (105 dB max)

-   USB port to load your own MP3 sounds.

-   Integrated status LED on the button.

-   Part of the Gen5 line from Aeon Labs.

-   Security of radio communication via AES-128 encryption.

-   Integrates the Z-Wave 500 series chip.

-   250% faster communication compared to peripherals
    Standard Z-Wave.

-   Z-Wave message repeater.

-   Antenna optimization, range 300 meters.



Technical characteristics 
---------------------------



-   Mod type : 500 Series Z-Wave+ Receiver and Transmitter

-   Feed : Actuator : 5 VDC (adapter supplied) Sensor : Pile
    Lithium 3V 800mA CR2

-   Standby consumption : 1W

-   Alarm consumption : 2W

-   Max volume : 105dB

-   Supported audio formats : mp3 and WMV at the frequency of 320Kbps

-   Frequency : 868.42Mhz

-   Transmission distance : 300m in open field

-   Operating temperature : -20°C to 50°C

-   Operating humidity : 80%

-   Certifications: FCC, UL, CE, ROHS



Module data 
-----------------



-   Mark : Aeotec

-   Last name : Garage Door Controller (ZW062)

-   Manufacturer ID : 134

-   Type Product : 3

-   Product ID : 62



Configuration 
-------------



To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).



> **Important**
>
> To put this module in inclusion mode, press the button
> Z-Wave, in accordance with its paper documentation.



![inclusion](images/aeotec.garagedoorcontroller/inclusion.jpg)



Once included you should get this :



![Plugin Zwave](images/aeotec.garagedoorcontroller/information.jpg)



### Orders 



Once the module is recognized, the commands associated with the module will be
disponibles.



![Orders](images/aeotec.garagedoorcontroller/commandes.jpg)



Here is the list of commands :



-   Open/Close : Open, close or stop the garage door.

-   Position : Current garage door position.

-   Volume : Current speaker volume.

-   Temperature : Zone temperature, no automatic lift.

-   Sabotage : Tamper status in text.



### Module Setup 



Then if you want to configure the module according to
of your installation, you must go through the button
"Configuration" of the Jeedom OpenZwave plugin.



![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)



You will arrive on this page (after clicking on the tab
Settings)



![Config1](images/aeotec.garagedoorcontroller/config1.jpg)

![Config1](images/aeotec.garagedoorcontroller/config2.jpg)



Parameter details :



-   34: Allows to start the calibration of the opening time of the
    the door.

-   41: Allows you to reset the sabotage status by selecting "Relieve
    the alarm state"

-   80: on Hail

-   255 : allows you to reset the factory configuration



### Groups 



This module has two association groups. The first "Lifeline" is
indispensable.



![Groupe](images/aeotec.garagedoorcontroller/groupe.jpg)



Good to know 
------------



### Specificities 

Garage door open time calibration:

-   1 : The garage door must be fully closed.

-   2 : Activate parameter 34 on "Do calibration".

-   3 : Start door opening

-   4 : Wait for the door to be completely open.

-   5 : Start closing the door

Calibration is complete

-   Parameter 34 will be updated to "Normal".

-   Parameter 35 will be updated with the calculated opening time.



Tamper Reset:

-   1 : The sensor must be properly fixed.

-   2 : Activate parameter 41 on "Relieve the alarm state".

-   3 : Refresh Settings.

Calibration is complete

-   Parameter 41 will be updated with "Sensor is not removed".



FAQs. 
------





**@nechry**
