# MyhomeSCS 

Plugin for using the F454 gateway

# Setup 

The MyHomeSCS plugin allows you to communicate with all of Legrand's MyHomeSCS devices via the F454 gateway

>**Be careful**
>
>In order to use the plugin, it is necessary to deactivate the authentication of the MyHome gateway and to authorize the IP address of JEEDOM in the whitelist of the gateway.

After having downloaded it from the Market, it will be necessary to configure the ip and the ports used to connect to the F454 gateway. Internal socket port : 55005 is the default port used by the MyHomeSCS daemon. It is better to avoid changing it without knowing how the daemon works.

![myhomescs1](../images/myhomescs1.png)

Once configured, you access the MyHomeSCS plugin page.

On the left, the list of MyHomeSCS modules, and in the center the General, Information and Orders tabs.

![myhomescs2](../images/myhomescs2.png)

The menu on the left presents all of the MyHomeSCS modules detected and / or configured on its home automation installation. For the moment the plugin detects Legrand modules, but does not recognize them automatically. Once Jeedom has detected the new module, it will create it, but without assigning it a command. For that, it will be necessary either to choose a module in the drop-down list completely on the right (if the module exists in the database), or to create the commands one by one.

The "Add equipment" button allows you to add specific MyHomeSCS equipment, generally for tests or orders of the "Management" or "Special" type".

![myhomescs3](../images/myhomescs3.png)

When you switch to Expert mode, you have access to other options : Command type, unit, communication type, raw frame.

The type field allows you to choose between an action type command or an info type command, the type of action or info (Action, cursor, message, etc.) and the action (ON, OFF, etc.). The unit field is used to enter the unit used for the command or for status feedback. The communication field allows you to choose the type of communication (Multicast, Unicast or Broadcast). The LogicalID or raw command field is used to name the info or to fill in the "raw" frame".

![myhomescs4](../images/myhomescs4.png)

The Information tab specifies the type of equipment.

![myhomescs6](../images/myhomescs6.png)

The general tab allows you to choose the name of the equipment, its destination in the tree structure of its home automation, the category of the module (in Legrand jargon : WHO), the possibility of making the module inactive in Jeedom, or of making the module visible or invisible in the interface.

![myhomescs7](../images/myhomescs7.png)

The Orders tab details all the commands (some elements are only available in expert mode).

These commands are automatically filled if you choose the module type in the "Equipment" field". The useful parameters are Log, Display (the command), Event (used to force the request for information on the module).

![myhomescs8](../images/myhomescs8.png)

In a next version and with everyone's help, we could imagine that the modules are recognized automatically

## List of modules tested 

- Roller shutters : F401
- DALI : F429
- Dimmer : F418
- 4x switch : F411
- Motion detector : 0 672 26

## Add equipment 

Most equipment is added to the MyHomeSCS plugin as soon as it is detected

Once the module created in the plugin, two solutions are available to you.

Either the module exists in the drop-down menu : Equipment and there it is enough to choose it, then to make save so that the orders are automatically added.

Either the module does not exist (yet) in the plugin and then you will have to create the commands one by one.

Info commands are necessary to retrieve the state of the equipment. Example for light modules, a "button" info is created and allows to know the status of the module button (ON or OFF for example). This info is used in particular to manage widgets or is used to trigger scenarios

Actions commands allow you to perform actions on the equipment. Depending on the category of equipment, you will have different choices.

Legrand frames are oriented around 3 variables and are in the form (for a frame of the BUS-COMMAND type) \*WHO \*WHAT \* WHERE \#\#

The WHO corresponds to the category (light, automation, etc). If in the raw frame you enter \#WHO\\\#, this will be replaced by the equipment category ID.

WHAT corresponds to the action ID. If you enter \#WHAT\\\#, this variable will be replaced by the corresponding code of the chosen command.

Finally, the WHERE corresponds to the concatenation of the communication mode (unicast, multicast, broadcast), of the ID.UNIT and media (* 9 for Zigbee). In my plugin, you can type \\\#WHERE* qui sera remplacé par le code correspondant au type de communication choisi et vous pouvez saisir \#IDUNIT \# which will be replaced by the UNIT corresponding to the last 4 digits of the module's mac address converts to decimal followed by the ID on two digits.

Basically, it gives ``\*\#WHO\\\#\\\*\#WHAT\\\#\*\#WHERE\\\#\#IDUNIT\\\#\#\#``

Apart from these variables, you can enter the raw frame directly, for example : ``\*2\*2\*\#121301\#9\#\#``

To know all types of frames, WHO, WHAT, WHERE value, types of communication or media codes, you can refer to the Legrand document : Open Web Net Zigbee

Once you have created all the orders for your equipment, it is possible to create a "Equipment" file in JSON format. For this, you can take inspiration from existing modules.

Then you can share it with the community (thanks to the function : Send a configuration). This will add automatic commands for the next users of the MyHomeSCS plugin.

Thank you.

# FAQ 

Try to start it in debug mode to see the error

Wait a minute to see if the problem persists, if it does
In SSH do : "sudo rm /tmp/myhomescscmd.pid"

This means that the deamon is started but that Jeedom cannot
stop it. You can either restart the whole system, or in ssh
do "killall -9 myhomescs.py"

Make sure you have checked the box for automatic creation of
equipment, check that the deamon is running. You can
also restart it in debug to see if it receives messages from
your equipment
