# Neato plugin

This plugin allows you to have the status info of your NeatoBotvac Connected vacuum cleaner and to control it

# Configuration

# Installation / Creation

In order to use the plugin, you must download, install and activate it like any Jeedom plugin.

After that you will need to enter your Neato account

Once saved your Neato will be automatically detected and added to your Jeedom

Go to the plugins / wellness menu to find it.

# Commands

    -   Alert : message if an error is in progress (brush blocked, full dust bin, etc.)
    -   Stop : Stop robot
    -   State code : State technical code
    -   Start eco house : start eco cleaning
    -   Start turbo house : Start turbo cleaning
    -   Loading : In charge or not
    -   State : Status message (ready to clean, during cleaning, paused, etc.)
    -   Pause : Pause the robot
    -   Programming : Used to find out if a programming is in progress (neato programming)
    -   Refresh : Refresh info
    -   Resume : resume cleaning (if paused)
    -   Base return : return to departure (if on break)
    -   On dock : Lets you know if the robot is on the dock or not

All these commands are available via scenarios and via the dashboard


## How are the news refreshed

The information is refreshed once every 15 minutes and after each action performed from Jeedom. You can refresh them on demand via scenario with the refresh command, or via the dash with the double arrows

# Faq

>**I get the error "Could not find robot_serial for specified vendor_name"**
>
> It is necessary in the configuration of the plugin (Plugins -> Management Plugins) to save so that it redoes the detection of your robot vacuum cleaner

>**The cleaning command does not work, the robot leaves and returns to its base or it does not respect the limitations (map)**
>
>On certain robot model it is absolutely necessary to define a navigation map / paln, you will find [here](https://support.neatorobotics.com/hc/fr/articles/360009513113-Comment-cr%C3%A9er-un-plan-d-%C3%A9tage-) to do it
