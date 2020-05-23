# Fibaro RGVB Controler - FGRGB-101

-   **The module**

![module](images/fibaro.fgrgb101/module.jpg)

-   **The Jeedom visual**

![Visuel jeedom](images/fibaro.fgrgb101/Visuel_jeedom.png)

## Summary

The Z-Wave Fibaro FGRGB-101 micromodule can be used to control low-voltage 12 / 24V lights (halogen or LED), a RGB or RGB + white LED strip, or even to connect analog probes using the 0- standard. 10V.

-   4 analog inputs 0 to 10V to connect to many compatible sensors, potentiometers, pushbuttons (monostable) or switches (bistable).
-   4 dimmer outputs (PWM) to control :
-   \* i.e. 1 channel of RGB + White LED (RGBW) 12 / 24V
-   \* or 4 channels of white LEDs 12 / 24V
-   \* or 4 channels of 12 / 24V halogen lamps (144W 12V / 288W 24V max.)
-   \* or 12 / 24V fans.
-   Requires separate 12 / 24V power supply.
-   Global or instantaneous or cumulative consumption measurement.
-   Repeater function (router) to extend the Z-Wave network.

## Fonctions

-   Control low voltage 12 / 24V lights (halogen or LED)
-   Installs behind an existing switch
-   Previously programmed light simulation
-   ON / OFF and Variation function
-   Small, discreet and aesthetic
-   Ease of use and installation

## Technical characteristics

-   Food : 12 V or 24 V DC
-   Maximum output power :
-   \* 12A in total (addition of all channels),
-   \* 6A max. per channel
-   Maximum power with halogen lamps :
-   \* 12V - 144W total (all channels),
-   \* 24V - 288W total (all channels)
-   PWM modulation frequency : 244 Hz
-   Consumption : 0,3W
-   Radio protocol : Z-Wave at 868.4 MHz (EU)
-   Z-Wave transmit power : 1mW
-   Operating temperature : 0 - 40 C
-   For installation in boxes : Ø≥50 mm
-   Dimensions : 42 x 37 x 17 mm
-   European standards : EMC 2004/108 / EC R & TTE 199/5 / WE
-   This module requires a Z-Wave controller to operate.

## Module data

-   Mark : Fibar Group
-   Name : Fibaro FGRGB-101 RGBW
-   Manufacturer ID : 271
-   Product Type : 2304
-   Product ID : 4096

## Configuration

To configure the OpenZwave plugin and know how to put Jeedom in inclusion, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **IMPORTANT**
>
> To put this module in inclusion mode, press the inclusion button 3 times, according to its paper documentation.

![vue bp inclusion](images/fibaro.fgrgb101/vue_bp_inclusion.png)

Once included you should get this :

![Plugin Zwave](images/fibaro.fgrgb101/configuration.png)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Commands](images/fibaro.fgrgb101/commande_1.png)

![Commands](images/fibaro.fgrgb101/commande_2.png)

Here is the list of commands :

-   Color : It is the command which allows to adjust the color code to display
-   Fireplace : This is the command that simulates a fireplace atmosphere
-   Thunderstorm : This is the command that simulates a Storm atmosphere
-   Dawn : It is the command that simulates an Aude atmosphere (progressive sunrise)
-   Fading : This is the command that simulates the entire color spectrum
-   RBB : This is the command that simulates a cop atmosphere
-   White cold : This is the command that simulates having a cool white color, if the color strip allows it. (this command is not visible by default)
-   White hot : This is the command that simulates having a warm white color, if the color strip allows it. (this command is not visible by default)
-   We : This is the command that turns on the banner on the last color chosen before
-   Off : This is the command that turns off the banner
-   Intensity : It is the control which allows to adjust the light intensity

Note that on the dashboard all the information is found on the same icon

### Configuration of the module

You can configure the module according to your installation. To do this, go through the "Configuration" button of Jeedom's OpenZwave plugin.

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

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
> For the moment, the default configuration of jeedom does not allow this, but a specific configuration can be considered.

### Alternative visual

![Alternative visual](images/fibaro.fgrgb101/Visuel_alternatif.png)

## Wakeup

No notion of wakeup on this module.
