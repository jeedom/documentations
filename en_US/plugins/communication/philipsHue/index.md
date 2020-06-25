# Philips Hue plugin

Plugin to integrate into the Philips Hue ecosystem (can manage up to 2 bridges simultaneously).

# Plugin configuration

After downloading the plugin, you will need to enter the IP address of your hue bridge (s).

# Equipment configuration

> **NOTE**
>
> You will always have "All lamps" equipment which actually corresponds to group 0 which exists all the time

Here you find all the configuration of your equipment :

-   **Hue equipment name** : name of your Hue equipment,
-   **Parent object** : indicates the parent object to which the equipment belongs,
-   **Category** : equipment categories (it can belong to several categories),
-   **Activate** : makes your equipment active,
-   **Visible** : makes your equipment visible on the dashboard,
-   **Bridge** : indicates the bridge to which the lamp is connected
-   **Always on** : tell jeedom to never mark the lamp as unreachable

Below you find the list of orders :

-   **Name** : the name displayed on the dashboard,
-   **Advanced configuration** : displays the command's advanced configuration window,
-   **Options** : allows you to display or hide certain commands and / or log them
-   **Test** : Used to test the command

# Group 0 (All lamps)

Group 0 is a bit special because it cannot be deleted or modified, it necessarily drives all the lamps and it is also it that carries the scenes.

Indeed you can make "scenes" on Philips Hue. These must absolutely be done from the mobile application (impossible to do them in Jeedom). And following the addition of a scene you must absolutely synchronize Jeedom with the correct one (by simply saving the configuration of the plugin)

# Tansition

Command a little particular which must be used in a scenario, it makes it possible to say the transition between the current state and the next command must duration X seconds.

For example in the morning you may want to simulate the sunrise in 3 minutes. In your scenario you therefore just have to call the transition command and in parameter set 180, then call the color command towards the desired color.

# Animation

The animations are transition sequences, currently there are :

-   sunrise : to simulate a sunrise. It can take as a parameter :
    -   duration : to define the duration, by default 720s, ex for 5min you have to put : duration=300
-   sunset : to simulate a sunset. It can take as a parameter :
    -   duration : to define the duration, by default 720s, ex for 5min you have to put : duration=300

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

> **I have the impression that there is a difference in certain color between what I ask and the color of the bulb.**
>
> It seems that the color grid of the bulbs has an offset, we are looking for how to correct

> **What is the refresh rate ?**
>
> The system retrieves information every 2s.

> **My equipment (lamp / switch ....) is not recognized by the plugin, how to do ?**
>
> It is necessary :
> - write us the equipment you want to add with photo and possibilities of it - send us the log debug of synchronization with the bridge while contacting us with a support request
