# Changelog IPX 800 v4

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text

# 

- Fixed an issue with sending the stop command for roller shutters
- 

# 08/26/2024

- EnOcean roller shutter support
- Possibility of configuring the communication port with the IP (default 80)
- Support for custom equipment images (Jeedom 4.5)

# 01/08/2024

- ATTENTION !!!!!! Change in behavior on the shutters, reversal of direction, the plugin no longer indicates the % closing but the % opening
- Checking the ipx return code during a command and if there is an error Jeedom will retry the command 150ms later
- Preparing for jeedom 4.4

# 02/07/2022

- Update for Jeedom 4.2

# 25/10/2021

- Adding a template
- PulseUP and pulseDOWN support for BSO blade management

# 07/06/2020

- Correction of a bug on reading the value of the 0-10v extension

# 05/09/2020

- Added support for 0-10v extension
- Optimisation

# 12/30/2019

- Thermostat bug fix
- Correction of an error in the event url to give to the ipx800

# 09/18/2019

- Optimisations

# 08/14/2019

- Bug fix on templates
- Compatible with php 7.3

# 06/13/2019

- Addition of an automatic daily backup system for ipx800v4
- PWM support in single color only
- Suppression of the restarting of the daemon at each change on the equipment (it is now necessary when you modify an equipment to restart the daemon manually)

# 04/24/2018

-	Support for THL 9 to 14 probes

# 03/19/2018

-   Number correction for enOcean Analog sensors

# 03/05/2018

- 	Adding the X-dimmer (don't forget to configure the check plugin G for x-dimmer requests)

#  02/18/2018

-	Addition of option on requests to the ipx800 (possibility of selecting the type of request to reduce the load)

-   Improved enOcean support

-   Correction of bugs on the recovery of information from
    extensions

-   Addition of VR extension

-   Optimization of synchronization with the ipx800

-   Support for THL modules

-   Addition of a template engine for order generation
