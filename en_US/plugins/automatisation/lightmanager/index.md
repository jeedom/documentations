# Light Manager)

## Description

This plugin allows you to turn on or off the light according to the presence of a person and the exterior light. It is able to manage the delay following the absence of movement. It also manages the concept of debryage so as not to turn off the light too early if you have turned it on manually and there is no movement.

## Configuration

The plugin has no specific configuration

## Equipement

### General

This is where you define the name of the equipment, whether it is active or not, the visibility...

### Light

Here you have to give the command to turn on the light, to turn it off and to know the status. This plugin only works with lights having binary status feedback (on or off).

### Mouvement

There you define your motion detectors, you can have as many as you want.

### Luminosité

You put your light sensor and the threshold to turn on the light. It is possible to put several. In this case, if one of the detectors falls below the threshold value then the light will turn on during movement.

>**NOTE**
>
>You can also ask the plugin to retrieve the minimum value of the brightness over the last X minutes, be careful in this case it is absolutely necessary that the brightness control is logged.

### Temporisation

Here you can :

- Set the switch-off delay when there is no more movement
- Activate or not the disengagement if the light is not in the expected state (someone turned it on)
- The time before the plugin takes over the management of light 

For the last 2 parameters, the case is quite simple : someone turns on the light passes in front of the detector then leaves, after XX seconds the detector returns the information that there is no one there, then after 1 minute (in my case) the plugin should turn off the light. With the disengagement, the plugin will do nothing and wait 5 minutes before resuming automatic management and turning off the light. </p>
