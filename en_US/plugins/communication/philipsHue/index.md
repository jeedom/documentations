# Philips Hue plugin

# Description

This plugin will allow you to integrate your Philips Hue ecosystem into Jeedom. The plugin offers the possibility to drive up to 2 Philips Hue bridges simultaneously.

# Configuration

## Plugin configuration

Like any Jeedom plugin, the plugin **Philips Hue** must be activated after installation.

Once the plugin is activated, you will need to enter the IP address at which your Philips Hue bridge can be reached.

>**TRICK**
>
>You can enter up to 2 Philips Hue bridges that will be able to communicate with Jeedom simultaneously.

The plugin **Philips Hue** uses its own daemon in order to stay in constant contact with the Philips Hue bridge (s). You can check the status on the plugin configuration page.

>**INFORMATION**
>    
>It is normally not necessary to start the daemon manually, it is automatically managed by the plugin.

## Equipment configuration

To access the different equipment **Philips Hue**, go to the menu **Plugins → Communication → Philips Hue**.

>**INFORMATION**
>    
>The button **+ Add** allows you to add new Philips Hue equipment.

By clicking on an item of equipment already created in the list, you are directed to its configuration page :

- **Equipment name** : name of your Hue equipment.
- **Parent object** : indicates the parent object to which the equipment belongs.
- **Category** : equipment categories (it can belong to several categories).
- **Activate** : allows to make the equipment active.
- **Visible** : makes the equipment visible on the dashboard.

- **Model** : enter the model of your Philips Hue equipment.
- **Bridge** : indicates the bridge on which the equipment is connected.
- **Always on** : tells Jeedom to never mark the lamp as unreachable.

>**TO KNOW**
>
>There will always be a device named "All lamps" which corresponds to group 0 which exists in all cases.

By clicking on the second tab, we find the list of orders :

- **Name** : the name displayed on the dashboard.
- **Icon** : allows you to assign an icon to the command.
- **Options** : allows you to display or hide certain commands and / or to log their values.
- **Settings** : allows to define optional parameters on the info / numeric commands.
- **Advanced configuration** *(toothed wheel)* : displays the command's advanced configuration window.
- **Test** : Used to test the command.
- **Button -** : allows you to delete the command.


# Group 0 (All lamps)

Group 0 cannot be deleted or modified. He necessarily controls all the lights and it is also he who carries the scenes.

Indeed you can make "scenes" with the Philips Hue. These must absolutely be done from the mobile application (impossible to do from Jeedom). After adding a scene you must absolutely synchronize Jeedom with the bridge *(simply by saving the plugin configuration)*.

# Transition

A little peculiar command that is designed to be used in a scenario. It allows to define the duration in seconds of the transition between the current state and the next command.

For example in the morning you may want to simulate the sunrise in 3 minutes. In your scenario you just have to call the transition command with ``180`` in parameter then call the color command to the desired color.

# Animation

The animations are transition sequences, currently there are :

- **sunrise** : allows you to simulate a sunrise. It can take as a parameter :
    - **duration** : set duration, default 720s. For 5 minutes it will be necessary to indicate ``duration=300``.
- **sunset** : to simulate a sunset. It can take as a parameter :
    - **duration** : set duration, default 720s. For 5 minutes it will be necessary to indicate ``duration=300``.

# Remote control button

Here is the list of codes for the buttons :

- 1002 for the On button
- 2002 for the increase button
- 3002 for the minimize button
- 4002 for the off button

The same with XXX0 for the key pressed, XXX1 for the key held and XXX2 for the key released.

Here are the sequences for the On button for example :

- Short press : When pressed we go to 1000 and when we release we go to 1002
- Long press : During the press we pass on 1000, during the press we pass on 1001, when we release we pass on 1002

# FAQ

> **I have the impression that there is a difference on certain colors between what I ask for and the color of the bulb.**
>
> It looks like the color grid of the bulbs has an offset, we are looking for how to correct.

> **What is the refresh rate ?**
>
> The system retrieves information every 2s.

> **My equipment (lamp, switch, etc ...) is not recognized by the plugin, how to do ?**
>
> It is necessary :
> - describe the equipment you want us to add with photos and its possibilities and send us the debug log of the synchronization with the bridge, all by contacting us with a support request

>**I added the historization of an order but it does not work**
>
>For performance issues, you must restart the Philips Hue daemon for it to take this change into account.
