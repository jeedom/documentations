# RFXcom plugin

Plugin to use an RFXcom key with Jeedom. This plugin works both locally and remotely (with the Jeedom Link plugin)

The RFXcom plugin allows you to communicate with all the peripherals compatible with the RFXCOM USB module. Among these peripherals are the following brands : Oregon, LaCross, Chacon, X10, DI-O, Blyss, etc.

# Plugin configuration

After installing the plugin, you just need to activate it and set the port to auto, after saving the daemon should launch. The plugin is already configured by default; you don't have to do anything more. However you can modify this configuration. Here is the detail of the parameters :

-   **Dependencies** : this part gives you the status of the dependencies, if they are not OK you can either launch them by hand or wait 5 min, Jeedom will launch them by itself.
-   **Daemon** : this part gives you the status of the demon, if it is not OK you can either launch it by hand or wait 5min, Jeedom will launch it by itself.
-   **Setup** : This part allows you to configure the general parameters of the plugin.
    -   *Ban the following IDs* : allows to give a list of RFXcom identifiers to Jeedom so that it does not create the corresponding equipment. Identifiers must be separated by spaces. Example : "1356AD87 DB54AF".
-   **Daemon** : daemon configuration settings.
    -   *RFXcom port* : the USB port to which your RFXcom interface is connected.
        > **Tip**
        >
        > If you do not know which USB port is used, you can simply indicate "Auto". But be careful, some modules may conflict with auto discovery (teleinfo type) and automatic selection will not work.

    -   *Communication speed* : communication speed of
        RFXcom port.

        > **Tip**
        >
        > Leave at default unless using an older controller model.

    -   \_Internal socket port (dangerous modification : allows to modify the internal communication port of the daemon.
        > **Important**
        >
        > Change only if you know what you are doing.

-   *Protocols* : allows you to select the active protocols of the RFXcom interface.

    > **Important**
    >
    > Do not activate them all, some being incompatible with each other, here is the compatibility matrix :

To launch the daemon in debug it is enough at the level of the configuration of the logs of the plugin to put in debug, to save and to restart the daemon.

> **Important**
>
> In this mode, the demon is very talkative. Once the debug is finished, don't forget to click on "Restart" to exit the debug mode !!

# Equipment configuration

RFXcom equipment configuration is accessible from the plugins menu then home automation protocol. You will find here :

-   a button to manually create an equipment
-   a button to switch to inclusion mode
-   a button to display the configuration of the plugin
-   a button that gives you the health status of all your RFXcom equipment
-   finally below you find the list of your equipment

By clicking on one of your equipment you arrive on the configuration page of your equipment including 2 tabs, equipment and controls.

-   **Equipment tab** :
-   **Name of the RFXcom device** : name of your RFXcom equipment
-   **ID** : the ID of your probe (to be changed only with full knowledge of the facts))
-   **Activate** : makes your equipment active
-   **Visible** : makes it visible on the dashboard
-   **Parent object** : indicates the parent object to which the equipment belongs
-   **Category** : equipment categories (it can belong to several categories)
-   **Do not check battery** : tells Jeedom not to alert you if the equipment sends a low battery frame (some modules do not handle this info correctly and generate false alerts)
-   **Maximum time allowed between 2 messages (min)** : the maximum time allowed between 2 messages before Jeedom declares the equipment as a timeout".
-   **Recover ID (battery change)** : the RFXcom has the particularity of changing the ID of the probe when changing the battery, Jeedom offers an assistant to facilitate the operation. You have to :
    -   change the battery of your probe
    -   wait for its creation of Jeedom and go to the new probe created
    -   press the button "Recover ID (change of battery))"
    -   On the window, in the drop-down menu choose the old probe,
    -   Valider
-   **Equipment** : allows you to define the model of your equipment (to be configured only for manual creation of equipment, in automatic Jeedom configures this field alone)
-   **Creation** : gives you the date of creation of the equipment
-   **Communication** : gives you the date of last communication with the equipment (can be empty in the case of a socket for example)
-   **Drums** : equipment battery level
-   **Status** : equipment status (can be timeout for example)
-   **Orders Tab** :
  -   the name displayed on the dashboard
  -   type and subtype
  -   the information key if it is an info, or the hexadecimal code to send when it is an action. The configurations allow these fields to be filled in automatically (you have to create the equipment, choose the configuration then save)
  -   The group allows easy management for equipment supporting the notion of group. This replaces the tag \#GROUP\# in the hexadecimal chain when executing the command
  -   "Status feedback value "and" Duration before status feedback" : allows to indicate to Jeedom that after a change on the information its value must return to Y, X min after the change. Example : in the case of a presence detector which emits only during a presence detection, it is useful to set for example 0 in value and 4 in duration, so that 4 min after a detection of movement (and s' there has been no news since) Jeedom resets the value of the information to 0 (no more movement detected)
  -   Historize : allows to historize the data
  -   Show : allows to display the data on the dashboard
  -   Event : in the case of RFXcom this box must always be checked because you cannot interrogate an RFXcom module
  -   Unit : data unit (can be empty)
  -   min / max : data bounds (may be empty)
  -   Advanced configuration (small notched wheels) : displays the advanced configuration of the command (logging method, widget, etc.))
  -   Test : Used to test the command
  -   Delete (sign -) : allows to delete the command

# Operation on RFXcom equipment

At the top of your equipment configuration page, you have 3 buttons that allow you to perform certain options :

-   Duplicate : duplicates equipment
-   Advanced configuration : same principle as for the commands, it allows an advanced configuration of the equipment
-   Delete : Remove your equipment
-   Save : Backs up your equipment and any changes made

# Inclusion of RFXcom equipment

Adding RFXcom equipment is very simple, you just have to go into inclusion mode and wait for the equipment to send a message, when this is the case Jeedom will tell you that it has included new equipment and will create it automatically.

## Compatibilité

You can find [here](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=rfxcom) the list of modules compatible with the plugin

# Add an outlet

This operating mode is valid for sockets, light receivers, etc. Go to the "Plugins" menu then "Home automation protocol" and finally "RFXcom".

Click on "Add" to add a module, name your module and click on "Okay"".

Select "Plug - Fault" in "Equipment", then click on "Save".

-   Go to the "Orders" tab"
-   Put your module / socket in learning mode. (Click on the learning button on your module / socket. Some sockets do not have a button, just unplug the plug, then plug it back in and for the first 3 seconds after plugging in the plug is in learning mode).
-   Click on "Test" an order.
-   If the connection went well, you can click on "Save", otherwise you can repeat this step.

Your module / socket is now connected with JEEDOM, remember to activate it and make it visible to see it appear on the Dashboard.

# Add a somfy store

Since the release of the new RFXcom RFXtrx433E module, it is now possible to control its Somfy RTS devices (RFY / RFU) from Jeedom. (Who supports this module via the RFXcom plugin)

Pour ajouter un nouveau périphérique, se rendre dans le menu Plugins &gt; Protocole Domotique &gt; RFXcom

Click the + Add button and give a name to your device. Ex : « Veranda shutter ».

Se rendre sur le nouveau Périphérique créé et dans le menu déroulant Equipement, choisir « 0x1A : somfy RTS Velux » pour un Velux ou « 0x1A : somfy RTS Moteur » pour tout les autres types d'actionneur RTS , en profiter pour lui définir un objet parent et une catégorie si vous le souhaitez et cliquer sur Enregistrer.

The commands useful for managing the roller shutter are automatically generated. It only remains to pair the shutter with this Jeedom device. To do this, press the pairing button on the remote control of the shutter you wish to control for 2 to 3 seconds, until the shutter makes a slight return trip.

Once the shutter has signified that it is awaiting an order for pairing, click on the Test button corresponding to the Program command in Jeedom.

To validate the learning of the new command, the shutter will then make a short return trip.

Afin de tester tout de suite, vous pouvez cliquer sur les boutons Test correspondants aux commandes « Monter, Descendre, Stop ». Le bouton « My » correspond à la commande Stop.

Activate and make visible the device with the corresponding check boxes in order to be able to view and use it in the dashboard.

You can now order your Somfy RTS component with Jeedom.

# FAQ

>**Simulate / recognize a Chinese rfxcom remote control (undecoded).**
>
>   **Programming of Chinese code remote controls in Jeedom**
>
>At the RFXCom plugin → Management of RFXCom protocols :
>
>-   Do NOT check Undecoded
>-   Check Lightning4
>
>To retrieve the codes from the remote control : Put the log level in debug mode and restart the daemon. Then in analysis -> log then rfxcom retrieve the IDs by pressing the
>Remote control keys that look like Message : 0913004C410A24015970, Subtype = ARC, Id = 400A24… Example "Messages"
>a 4-button remote control : 0913006D410A21015E70 0913006E410A22015970 0913006F410A24015970 09130070410A28015970
>
>To simulate a press on the command (emission), you must choose a type of equipment "Lightning4 (13) Default". Then add an Action / Fault type command and put the value "Message" in Logicial ID (of type0913006D410A21015E70). The test button allows you to check the correct operation.
>
>For reception, it is imperative to use the auto command generated by Jeedom (one per key) with the value Id = 400A24 in the ID field at the top left, while selecting a type of equipment "Lightning4 (13) Default". It is the "Pulse" info which is received each time the remote control is pressed, and therefore makes it possible to trigger events in Jeedom.

>**Chinese relay box ak-rk01-12 piloted from Jeedom**
>
>For relay control from Jeedom live : put the jumper in position 1-2 (red LED side and 3 terminal blocks) to activate the Latch mode with separate ON and OFF command. At Jeedom, create an ON command with a value 09130038410B20015C70 (what is important is the chain in the middle 410B20 for ON and 410B21 for OFF. It is possible to vary the codes with the first 4 letters 410B, but keep the ends in 20 and 21 for the ON and OFF commands. You can also set the jumper to 2-3 and use only the first command to reverse the ON / OFF state each time the command is sent

>**I don't see the rfxcom USB port**
>
>Make sure you don't have brltty to install (`sudo apt-get remove brltty` to remove it)


>**After a few hours / days I no longer have any updates to my probes, a revival of the demon corrects**
>
>Check your USB cable (a bad USB cable often causes this kind of problem, it should not be too long either), also check your power supply, a USB hub is strongly recommended

>**I have a message telling me that the port does not exist**
>
>Check that the port is correctly configured and that the configuration is saved (it must be saved otherwise the modification is not taken into account).

>**My probes are not seen**
>
>Make sure you have checked the box for automatic creation of equipment. Check that the demon is launched. It is also possible to restart the debug daemon to see if it receives the messages from the probes. Also check that the correct protocols are activated (be careful not to activate too many, otherwise it will not work either).

>**When starting in debug mode I get the message : "can not bind socket address "or" Cannot assign requested address"**
>
>This is probably due to a wrong IP address configured in the General / administration / Configuration menu, "Network configuration" section, then "Internal access" and URL or IP address.

>**The demon refuses to start**
>
>Try to start the daemon in debug mode to see the error.

>**Why the association of a socket is more complex on Jeedom than on other home automation solutions ?**
>
>On other home automation solutions it is often enough just to click on the buttons on the remote control to be able to control the socket that the remote control controls, why this is not the case with Jeedom ?
>
>Jeedom dissociates the remote control from the socket, with the previous method your buttons must control the socket, and if you break the association between the socket and the remote control the home automation solution can no longer control the socket.
>
>Under Jeedom it's different : the association is more complex but it is no longer necessary for the remote control to have X buttons monopolized by the control of the socket. These buttons can be used to control an outlet group mixing several technologies (Z-Wwave, Enocean and RFXcom for example).

>**My DIO plug does not want to associate with Jeedom**
>
>This usually happens when the internal memory of the outlet is full. To clear the memory of the DIO / Chacon sockets (they do not accept more than 3 different codes) under Jeedom, you must create a "reset" command with the value 0B110006 \#ID\#09030070 At this time, the red led flashes twice, and the socket can accept a new association with Jeedom.

>**The battery of my probes does not go up correctly**
>
>Check that you have a battery order with logicalId "battery" on your equipment

>**I have the error [Errno 5] Input / output error**
>
>This error is unfortunately hardware (communication problem with RFXcom). Often this is due to a problem with the power supply or the USB cable, so you can try changing the USB cable and / or going through a powered USB hub

>**I can not recognize some sensor despite the activation of the correct protocol**
>
> Check that the firmware is up to date. Then if it's still not good you have to test with rfxmng

>**I have the error Timeout waiting status**
>
> This usually happens in 2 cases :
>- Your RFXCOM module is not up to date, see [here](http://www.rfxcom.com/epages/78165469.sf/nl_NL/?ObjectPath=/Shops/78165469/Categories/Downloads)
>- You took the RFXCOM plugin while you have an RFPLAYER, so you must take the RFPLAYER plugin

>**I have problems reassembling the sensors and the only solution is to restart everything**
>
> With the help of windows and the rfxmanager it is necessary to harden in the rfxcom the activation or not of the different protocols
