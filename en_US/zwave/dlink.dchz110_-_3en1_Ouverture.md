# "

**The module**

![module](images/dlink.dchz110/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/dlink.dchz110/vuedefaut1.jpg)

## Summary

 : opening detection, temperature sensor and brightness detector. It consists of two parts : a detector and a magnet. They are designed to be placed on a door or window with the magnet fixed on the part that opens and the detector on the fixed part.

Opening the door or window will move the magnet away from the detector, which will trigger the detector which will send a Z-Wave alarm signal, if the system is armed (this signal can be operated by a siren or by a home automation box for example). The sensor can also be used for automatic lighting control, depending on the light level. For example, the sensor will send a signal to the Z-Wave switch to turn on the light when the door opens and the room is dark.

The detector will also raise the brightness and the temperature, either in the event of a significant change, and each time the opening/closing is detected. .

## Fonctions

-   3 in 1 detector: Aperture, temperature, light
-   Optimized antenna range
-   
-   Button to include/exclude the detector
-   Autoprotection
-   Low battery indication
-   Small, discreet and aesthetic
-   Ease of use and installation

## Technical characteristics

 [](http://www.dlink.com/-/media/Consumer_Products/DCH/DCH%20Z110/Datasheet/DCH_Z110_Datasheet_FR.pdf)

 [](http://www.kafkas.gr/uploads/Pdf/182732/DCH-Z120_183010381_01_Z02.PDF)

![caracteristiques techniques](images/dlink.dchz110/caracteristiques_techniques.jpg)

## Module data

-   Mark : D-Link
-    : 
-    : 
-   Manufacturer ID : ]
-   Type Product : ]
-   Product ID : ]

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> . (.. ()

![config inclusion](images/dlink.dchz110/config-inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/dlink.dchz110/apres_inclusion.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/dlink.dchz110/commandes.jpg)

Here is the list of commands :

-   Opening : this is the command that will report an opening detection
-   Temperature : this is the command that allows you to raise the temperature
-   Brightness : this is the command that allows you to increase the brightness
-   Sabotage : this is the sabotage command (it is triggered in the event of tearing)
-   Battery : this is the battery command

### Module Setup

> **Important**
>
> . .

Then it is necessary to configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/dlink.dchz110/config1.jpg)

![Config2](images/dlink.dchz110/config2.jpg)

Parameter details :

-   2: adjusts the signal sent to the modules in association group 2
-   4: allows you to adjust the level of brightness from which the signal defined in parameter 2 will be sent to the modules associated with group 2
-   5: )
-   6: ).  : 7
-   7: ).  : )
-   9: allows you to define after how long the OFF signal will be sent to the modules associated with group 2
-   10: allows you to define the duration between two battery reports (one unit = parameter 20)
-   11: allows you to define the duration between two auto opening ratios (one unit = parameter 20)
-   12: ).  : 6
-   13: ).  : 2
-   20: .  : 10
-   21: variation value in °F of temperature to trigger a report
-   22: .  : 10

### Groupes

This module has two association groups, only the first is essential.

![Groupe](images/dlink.dchz110/groupe.jpg)

## Good to know

: )

## Wakeup

To wake up this module there is only one way to proceed :

-   
-   )

## .

.

. ()

## Important note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
