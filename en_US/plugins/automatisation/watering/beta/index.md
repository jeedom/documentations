# Watering)

>**IMPORTANT**
>
>This plugin is not "user friendly", it is complex to learn and will take a long time to achieve a satisfactory result

## Description

The principle of the plugin is as follows, the need for watering depends on :

- the plant : managed with variable flow sprinkler heads to balance the watering according to the plants
- the sun that there was
- the temperature he did
- the rain it fell

We arrive at a watering percentage formula : (C1 * Sunshine + C2 * Temperature - C3 * Rain) + C4. This is the not user friendly side of the plugin because it cannot find the coefficients for you, so you have to go there little by little.

You can see [here](https://blog.jeedom.com/5529-gestion-de-larrosage/) an example of using the plugin.

## Configuration

The plugin has no specific configuration

## Equipement

### General

This is where you define the name of the equipment, whether it is active or not, the visibility...

### Arrosage

Here the commands to start watering, cut it and see the status.

### Capteurs

Here you give the exterior light sensor (with the threshold above which it is considered that it is sunny), the temperature and rain sensor (which gives the rain of the last 24 hours).

### Configuration

Here you have : 

- the watering launch cron (which can be multiple)
- the basic duration of watering
- the no watering limit if it rained more than XX mm
- the watering limit if the average temperature has not exceeded a certain threshold
- a free no-watering condition (this is where I base myself on the soil moisture sensor)
- a no-watering limit if there has not been more than XX min of sunshine
- this is a bit special : on peut spécifier au plugin « si l'arrosage se fait après une certaine heure, prendre les données sur XX heures au lieu de la journée en cours ». For example, this is useful if we water in the morning in order to take the data from the day before instead of the one since 00:00 (which would not make sense because there is not too much sun at night).

Finally, comes the complicated part of the coefficients. Here two columns : one for the calculation in normal time, and one for the calculation if we take the last XX hours (so the case where it is watered in the morning). Clearly, I don't have too much advice to give you on this, it's really a refinement little by little.

## Panel

If you activate the panel in the configuration of jeedom then you can have a page which gives you the current status of the equipment which manages the watering as well as a graph giving you the number of hours of sun, the quantity of rain and watering time.

## Widget

We see the last watering duration, the sunshine time, the amount of rain, the last watering percentage practiced, the next estimated watering duration and the status. You can also prohibit watering for the current day, stop watering, start it in forced mode or start it according to the calculation at time T.