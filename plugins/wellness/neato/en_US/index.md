# Neato plugin

# Description

This plugin allows you to obtain the status information of your NeatoBotvac Connected vacuum cleaner and to control it.

# Configuration

# Installation / Creation

In order to use the plugin, you must download, install and activate it like any Jeedom plugin.

After that you will need to enter your Neato account *(email and password)*.

Once saved, your Neato will be automatically detected and added to your Jeedom.

Go to the Plugins → Comfort menu to access it.

# Commands

    -   **Alert** : message if an error is in progress (brush blocked, dust container full, etc).
    -   **Stop** : Stop robot.
    -   **State code** : State technical code.
    -   **Start eco house** : start eco cleaning.
    -   **Start turbo house** : Start turbo cleaning.
    -   **Loading** : In charge or not.
    -   **State** : Status message (ready to clean, cleaning, paused, etc).
    -   **Pause** : Pause the robot.
    -   **Programming** : Used to find out if programming is in progress (neato programming).
    -   **Refresh** : Allows you to refresh the information.
    -   **Resume** : resume cleaning *(if paused)*.
    -   **Base return** : return to start *(if paused)*.
    -   **On dock** : Lets you know if the robot is on the dock or not.

All these commands are available via scenarios and on the dashboard.

## How are the news refreshed

The information is updated once every 15 minutes and after each action performed from Jeedom. You can refresh them on demand via scenario with the refresh command, or via the dahsboard by clicking on the double arrows.

# FAQ

>**I get the error "Could not find robot_serial for specified vendor_name"** :
>
> You must click on the "Save" button in the configuration of the plugin (Plugins -> Plugins management) so that it relaunches the detection procedure of your robot vacuum cleaner.

>**The cleaning command does not work, the robot goes out and comes back to its base or it does not respect the limitations (card)** :
>
>On some robot models it is absolutely necessary to define a map / navigation plan, you will find the information [here](https://support.neatorobotics.com/hc/fr/articles/360009513113-Comment-cr%C3%A9er-un-plan-d-%C3%A9tage-).
