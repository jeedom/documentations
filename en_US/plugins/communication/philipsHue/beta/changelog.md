# Changelog Philips Hue

# Changelog plugin Philips Hue

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text

# 02/28/2024

- Better handling of cases where two scenes have the same name
- Added missing image for modules

# 02/10/2024

- Bugfix

# 02/07/2024

- Fixed a bug that changed the configuration of controls for rooms, lamp groups and zones during synchronization

# 01/25/2024

- Improved transition management

# 01/24/2024

- Fixed a bug which in certain cases could cause duplicate events to occur.

# 01/19/2024

- Workaround to correct the brightness bug when switching on Hue apiv2

# 01/17/2024

- Resumption of the previous brightness during an on
- Added transitions to grouped zones, rooms and lights
- Complete overhaul of order creation : no need to have a configuration so that your lamp has the right controls, everything comes from the bridge
- Added alert command
- Important : for those who have sockets it is possible that you have a synchronization error, you must therefore delete the status command on the sockets and restart the synchronization

# 01/16/2024

- Added HUE product illustrations (LTV001, LTA011, LTA009, 5047431P6, 929003479601)

# 01/15/2024

- Improved transition management
- LTC002 (Hue Ambiance Ceiling)

# 01/10/2024

- Support for scenes on zones

# 01/08/2024

- Complete rewrite of the plugin to use the hue 2.0 api
- Requires resynchronization to walk
- WARNING : For the sensors the commands change completely so you have to review your scenarios
- Important : certain commands will no longer be available with this new version, including alerts, the rainbow and animations
- Important : Scenes are now of type action other, so there is a command not scene
- VERY IMPORTANT : Only the v2 bridge is compatible, if you are on the v1 bridge then you should definitely not update because Philips Hue has not ported the v2 API to the v1 bridge.


# 04/10/2021

- Adding module
- Bugfix

# 06/16/2021

- Fix adaptive_light to adaptive_lighting

# 06/07/2021

- Adding an adaptive_light animation
- Fixed a problem with the discovery of scenes on the 2nd Hue bridge

# 03/15/2021

- Addition of the Hue White Bulb A67 E27 1600lm
- Optimizations and bug fixes
- Modernization of the interface
- Image optimization
- Added new hue Dimmer Switch
- Addition of the smart plug (on / off only no status feedback for the moment)

# 12/11/2020

- Correction of a CPU overload fault when deactivating a sensor (the daemon must be restarted following the update to apply the correction)

# 06/25/2020

- Support for multiple bridges (2 at the moment)

# 05/11/2020

- Addition of an order to know if the bulb is reachable or not

# 01/02/2020

- Added image for generic bulbs

# 10/10/2019

- Correction of resetting the lamp state to 0 when it is turned back on

# 09/23/2019

- Bugfix
- Optimisations

# 08/01/2019

- Support for Feller EDIZIOdue colore
- Improved synchronization logs

# 04/24/2019

- Add a button to delete an order
- Correction of the configurations for the Ikea bulbs (be careful, they must be removed from jeedom and redo a synchronization)

# 04/20/2019

- Support for SML002
- Support for status feedback from OSRAM SMART sockets (attention requires a new inclusion)

# 01/17/2019

- Addition of LTC016 lamp
- Add a synchronization button on the equipment management page

# 01/16/2019

- Added configuration of generic color and non-color lights
- Support for Niko 4 buttons
- Bug fix

# 01/15/2019

- Documentation update
- Correction of a bug on the state of the buttons when restarting the bridge
- Adding Hue lightstrip outdoor

# 10/16/2018

- Correction of a bug on the presence inversion for the motion sensor (for those already created, it will be necessary to check the inversion box on the line of the Presence command)

# 10/12/2018

- Fixed a bug on the status of parts (on / off) if there is no colored lamp in it
- Addition RB 145
- Addition LPT003

# 07/09/2018

- Adding the living white plug

# 06/27/2018

- Bug fixes (thanks @ mixman68)

# 05/31/2018

-	LTC001 (Hue ambiance ceiling)

# 04/14/2018

- Correction of the time of the sensor values
- FLOALT panel WS 30x90
- TRADFRI bulb E14 WS opal 400lm
-	TRADFRI E27 WS opal 980lm
-	TRADFRI E27 color 600lm

# 02/23/2018

-	TRADFRI bulb E27 W opal 1000lm
-	TRADFRI bulb GU10 WS 400lm
-	TRADFRI bulb E27 opal 1000lm

# 01/21/2018

- Switch to the new documentation system
- Addition of model MWB001
- Adding the ltw010 model
- Addition of the OSRAM model
- Addition of the TRADFRI bulb GU10 W 400lm model

# 11/20/2017

- Addition of model LCT015

# 03/28/2017

- Addition of sunrise and sunset animations (be careful all
    lamps are not necessarily compatible)

# 01/21/2017

- Hue motion support
- Hue tap support
- Correction of scenes
- Color shift correction
- Adding module images
- Support for more modules
- Addition of color temperature management
