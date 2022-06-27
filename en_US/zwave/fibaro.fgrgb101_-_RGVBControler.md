# Fibaro RGB Controller - FGRGB-101

-   **The module**

![module](images/fibaro.fgrgb101/module.jpg)

-   **The Jeedom visual**

![Visuel jeedom](images/fibaro.fgrgb101/Visuel_jeedom.png)

## Summary

The Z-Wave Fibaro FGRGB-101 micromodule can be used to control low voltage 12/24V lighting (halogen or LED), an RGB or RGB+white LED strip or even to connect analog probes using the 0- 10V.

-   4 analog inputs 0 to 10V to connect to many compatible sensors, potentiometers, pushbuttons (monostables) or switches (bistables).
-   4 dimmer outputs (PWM) to control :
-   \* i.e. 1 RGB + White (RGBW) 12/24V LED channel
-   \* or 4 channels of 12/24V white LEDs
-   \* or 4 channels of 12/24V halogen lamps (144W 12V / 288W 24V max.)
-   \* or 12/24V fans.
-   Requires separate 12/24V power supply.
-   Instantaneous or cumulative global or channel consumption measurement.
-   Repeater (router) function to extend the Z-Wave network.

## Fonctions

-   Control low voltage 12/24V lighting (halogen or LED))
-   Installs behind an existing switch
-   Previously programmed light simulation
-   ON/OFF and Dimming function
-   Small, discreet and aesthetic
-   Ease of use and installation

## Technical characteristics

-   Feed : 12 V or 24 V DC
-   Maximum output power :
-   \* 12A in total (addition of all channels),
-   \* 6A max. per channel
-   Maximum power with halogen lamps :
-   \* 12V - 144W total (all channels),
-   \* 24V - 288W total (all channels)
-   PWM modulation frequency : 244Hz
-   Consumption : 0,3W
-   Radio protocol : Z-Wave at 868.4 MHz (US)
-   Z-Wave transmit power : 1mW
-   Operating temperature : 0 - 40C
-   For installation in boxes : Ø≥50mm
-   Dimensions : 42 x 37 x 17mm
-   European Standards : EMC 2004/108/EC R&TTE 199/5/WE
-   This module requires a Z-Wave controller to operate.

## Module data

-   Mark : Fibar Group
-   Last name : Fibaro FGRGB-101 RGBW
-   Manufacturer ID : 271
-   Type Product : 2304
-   Product ID : 4096

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press the inclusion button 3 times, in accordance with its paper documentation.

![vue bp inclusion](images/fibaro.fgrgb101/vue_bp_inclusion.png)

Once included you should get this :

![Plugin Zwave](images/fibaro.fgrgb101/configuration.png)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/fibaro.fgrgb101/commande_1.png)

![Orders](images/fibaro.fgrgb101/commande_2.png)

Here is the list of commands :

-   Color : This is the command that allows you to set the color code to display
-   Chimney : This is the command that allows you to simulate a fireplace atmosphere
-   Thunderstorm : This is the command that allows you to simulate a Storm atmosphere
-   Dawn : This is the command that allows you to simulate an aude atmosphere (progressive sunrise)
-   Fading : This is the command that simulates the entire color spectrum
-   RBB : This is the command that simulates a cop atmosphere
-   White cold : This is the command that allows you to simulate having a typical cold white color, if the color band allows it. (this command is not visible by default)
-   White hot : This is the command that allows you to simulate having a typical warm white color, if the color band allows it. (this command is not visible by default)
-   We : This is the command that allows you to light the banner on the last color chosen before
-   Off : This is the command that allows you to turn off the banner
-   Intensity : This is the control that allows you to adjust the light intensity

Note that on the dashboard all the information is found on the same icon

### Module configuration

You can configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/fibaro.fgrgb101/parametres.png)

Parameter details :

Please refer to the previous screenshot, the parameters being translated into French.

### Groupes

This module has five association groups, only the fifth is essential.

![Groupe](images/fibaro.fgrgb101/groupes.png)

## Good to know

### Specificities

Use of 0-10V sensors.

> **Bail**
>
> For now, jeedom's default configuration does not allow it, but a specific configuration can be considered.

### Alternative visual

![Alternative visual](images/fibaro.fgrgb101/Visuel_alternatif.png)

## Wakeup

No concept of wakeup on this module.
