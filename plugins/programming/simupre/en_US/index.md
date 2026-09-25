# Presence simulation plugin

This plugin allows you to easily simulate a presence in the house when you are absent in a credible way (time and random duration of events)

You can find [here](https://blog.jeedom.com/4266-simulation-de-presence/) an article showing an example configuration of the plugin

# Plugins configuration

Nothing special here just to install and activate the plugin

# Configuration of simulations

You will find in the first tab all the configuration of your equipment :

- Name of equipment : name of your Simulation equipment,
- Parent object : indicates the parent object to which the equipment belongs,
- Activate : makes your equipment active,
- Visible : makes your equipment visible on the dashboard.

Then you have two other parameters to configure :

- Latitude and longitude of your house, which allows the plugin to locally calculate the sunrise and sunset times

In the second tab you will find the configuration of the simulations :

- they have a name (to find them more easily)
- a launch condition, if the condition is false then the simulation will not be done (if you do not put anything then the configuration will necessarily launch). This condition is evaluated at the time of launching the simulation (and not at the time of programming)
- input actions : are done when launching the simulation
- output actions (optional) : are done at the end of the simulation
- start times and durations :
  - the start time can be fixed between 2 terminals (between 18:30 and 19:30 for example, the plugin will choose a random time between the two terminals each day)
  - the start time can be relative to sunrise (for example from -20, for 20 minutes before to 30, for 30 minutes after, or 6:00 and 30min to have something that starts between 6h00 and 30min after sunrise)
  - the start time can be relative to sunset (for example from -10, for 10 minutes before to 15, for 15 minutes after)
- a duration or an end hour
  - if it is a duration you just have to put 20 in minimum and 40 in maximum for a random duration between 20 and 40 min
  - for a fixed end time between 7:05 p.m. and 7:35 p.m. you must set 19:05 in min and 19:35 max
- Repetition : allows you to repeat X times the start / end action over the period (note that the period must be greater than 2 min, you cannot do 5 repetitions on a simulation of duration 5 min for example). Important it is recommended not to put more than 5 in repetion, beyond the system may not execute them

>**NOTE**
>
> The format for the hours is as follows hh:mm, for 12:30 p.m. so put 12:30

>**NOTE**
>
> You must fill in all the fields correctly otherwise the plugin will not be able to calculate your simulation and will do anything.

>**Important**
>
> The plugin displays the forecast hours of the simulation for the next period (if you have several you will not see as the following)

>**Important**
>
> The plugin works on 24 hour cycles from 00:00 to 23:59, programming cannot take place in the current cycle. In summary, all programming will begin the next day.
