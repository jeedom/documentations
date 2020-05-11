D-Link DCH-Z110 - "3 in 1 Opening" 
====================================

\

-   **The module**

\

![module](images/dlink.dchz110/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/dlink.dchz110/vuedefaut1.jpg)

\

Summary 
------

\

The DCH-Z110 detector offers 3 different functions : detection
opening, temperature sensor and light detector. It is
consists of two parts : a detector and a magnet. They are designed
to be placed on a door or window with the magnet fixed on the
opening part and the detector on the fixed part.

Opening the door or window will keep the magnet away from
detector, which will trigger the detector which will send a Z-Wave signal
alarm, if the system is armed (this signal can be used by a
siren or by a home automation box for example). The sensor can also
be used for automatic lighting control, depending on the
brightness level. For example, the sensor will send a signal to
Z-Wave switch to turn on the light when the door opens
and the room is dark.

The detector will also raise the brightness and the temperature, i.e
in the event of a significant change, and each time the opening / closing
is detected. A Z-Wave controller (remote control, dongle…?) Is
necessary in order to integrate this detector into your network if you have
already an existing network.

\

Functions 
---------

\

-   3 in 1 detector: Aperture, temperature, light

-   Optimized antenna range

-   Use for home automation or security applications

-   Button to include / exclude the detector

-   Autoprotection

-   Low battery indication

-   Small, discreet and aesthetic

-   Ease of use and installation

\

Technical characteristics 
---------------------------

\

Official site :
<http://www.dlink.com/-/media/Consumer_Products/DCH/DCH%20Z110/Datasheet/DCH_Z110_Datasheet_FR.pdf>

Other technical link :
<http://www.kafkas.gr/uploads/Pdf/182732/DCH-Z120_183010381_01_Z02.PDF>

![caracteristiques
techniques](images / dlink.dchz110 / caracteristiques_techniques.jpg)

\

Module data 
-----------------

\

-   Mark : D-Link

-   Model : DCH-Z110 Door and window opening detector
    mydlink ™ Home

-   Maker : FIBARO System

-   Manufacturer ID : 264 \ [0x0108 \]

-   Product Type : 2 \ [0x0002 \]

-   Product ID : 14 \ [0x000e \]

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
> Do not install the module on the window / door before having it
> correctly configured, and pay attention to the alignment of
> the magnet during tests on a flat surface and during installation.
> (Use shims if necessary) To put this module in mode
> inclusion it is necessary to press 3 times on the association button in 1.5
> second, according to its documentation. (constant red flashing
> in association mode)

\

![config inclusion](images/dlink.dchz110/config-inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/dlink.dchz110/apres_inclusion.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
disponibles.

\

![Commands](images/dlink.dchz110/commandes.jpg)

\

Here is the list of commands :

\

-   Opening : it is the command which will raise a detection
    d'ouverture

-   Temperature : it is the command which allows to go up the
    Temperature

-   Brightness : it is the command which makes it possible to raise the brightness

-   Sabotage : this is the sabotage command (it is triggered in
    tearing out)

-   Drums : it's the battery command

\

### Configuration of the module 

\

> **IMPORTANT**
>
> During a first inclusion, or a modification, save then
> always wake up the module by pressing the association button.
> It should flash red and change status.

\

Then it is necessary to configure the module in
depending on your installation. This requires going through the button
"Configuration "of Jeedom's OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
Settings)

\

![Config1](images/dlink.dchz110/config1.jpg)

![Config2](images/dlink.dchz110/config2.jpg)

\

Parameter details :

\

-   2: allows to adjust the signal sent to the modules in the group
    association 2

-   4: adjusts the brightness level from which the
    signal defined in parameter 2 will be sent to the modules associated with the
    group 2

-   5: operating mode (see the
    manufacturer documentation)

-   6: multi-sensor operating mode (see the
    manufacturer documentation). Recommended value : 7

-   7: personalized multi-sensor operating mode (see
    on the manufacturer's documentation). Recommended value : 20 (for
    have functional opening)

-   9: allows to define after how long the OFF signal will be
    sent to modules associated with group 2

-   10: allows you to define the duration between two battery reports (one
    unit = parameter 20)

-   11: allows you to define the duration between two self-opening reports
    (one unit = parameter 20)

-   12: allows you to define the duration between two auto
    brightness (one unit = parameter 20). Recommended value : 6

-   13: allows you to define the duration between two auto
    temperature (one unit = parameter 20). Recommended value : 2

-   20: duration of an interval for parameters 10 to 13. Value
    recommended : 10

-   21: temperature variation value in ° F to trigger a
    rapport

-   22: value in% of variation of brightness to trigger
    a report. Recommended value : 10

\

### Groups 

\

This module has two association groups, only the first is
indispensable.

\

![Groupe](images/dlink.dchz110/groupe.jpg)

\

Good to know 
------------

Association / Notification possible with other modules (example: Mermaid
DCH-Z510 chime notification on door / window opening)

\

Alternative visual 
-----------------

\

![Groupe](images/dlink.dchz110/autre_visuel_jeedom.jpg)

\

Wakeup 
------

\

To wake up this module there is only one way :

-   Release the association button and press it again

-   Lower the wake-up interval in the module configuration / system
    (in seconds)

\

Faq. 
------

\

This module wakes up by pressing its association button.

\

This module is a battery module, the new configuration will be
taken into account at the next wakeup. (association button for
force, hence the interest of not installing the module before its
good configuration)

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

