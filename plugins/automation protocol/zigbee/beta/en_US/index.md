# Zigbee plugin

**The Zigbee plugin for Jeedom** builds on the excellent work done around **the open-source Zigpy library** to offer a **general compatibility with different Zigbee hardware**. It allows communication with the following Zigbee controllers :

-	**deCONZ (Conbee key/Conbee 2/Raspbee/Raspbee 2)** : Tested and validated by the Jeedom team. *(It is not necessary to install the deCONZ application)*
-	**EZSP (Silicon Labs)** : Tested, validated and recommended by the Jeedom team (pay attention to the Sonoff key which does not seem to work very well).
-	**XBee** : Not tested by the Jeedom team.
-	**Zigate** : Not tested by the team.
-	**ZNP (Texas Instruments)** : Not tested by the team.

>**Important**
>
> First of all you have to update the firmware of your key (especially for EZSP, popp key in particular) otherwise the daemon cannot work. For the Popp key the update is directly managed from the plugin for the other type of key it is necessary to refer to the manufacturer's documentation.

In addition, the plugin is equipped with many tools allowing :

- taking charge of **several controllers at the same time**,
- the **backup and restore** a controller,
- the **Firmware update** a controller,
- the **update of modules** in OTA,
- visualization of nodes and **network graph**,
- management of **groups**,
- the management of **Binding**,
- taking charge of **Touchlink**,
- or even to integrate its own configurations for the most seasoned...

>**VERY IMPORTANT**
>
> Due to the waltz of firmware / hardware on the manufacturer's side and possible bugs in their firmware (without necessarily having the possibility of updating it from Jeedom because most of the manufacturers do not communicate them) it is possible that a module marked compatible does not either only partially (a button that does not work, or no difference between the up button and not, no CO2 rise or a sensor of the module...). Unfortunately, we cannot warn you in advance in the list because : 
>- we do not necessarily have the module in question, many modules are added by user feedback
>- from one week to another the module may have changed (new hardware, new firmware or even new module which has not changed its name)
>Under no circumstances can Jeedom be held responsible in the event of a missing function (or even a module that does not work) when it is indicated as compatible, as you do, we are subject to the changes imposed by the manufacturer

# Configuration

## Plugin configuration

**The Zigbee plugin** uses dependencies that will need to be installed first. Once the dependencies are installed, you can configure one or more Zigbee controllers by entering **the type of controller, the controller port and the channel to use**, then (re) start the daemon.     

![Configuration contrôleur Zigbee](../images/zigbee_controllerConfig.png)

>**Important**
>
>Any change of channel will require a restart of the daemon. A change of channel may also require the re-inclusion of certain modules.

## Compatibilité

You can find [here](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=zigbee) the list of modules compatible with the plugin

### Zigpy advanced configuration

>**Reserved for experts !**

It is possible to set up specific parameters for the Zigbee subsystem *(Zigpy)*. This part is strictly reserved for experts, which is why the Jeedom team does not provide the list of possible parameters *(there are hundreds of them depending on the type of controller)*.

The input field accepts code in `json` format of this type :

````````
{
    "ezsp": {
        "CONFIG_ADDRESS_TABLE_SIZE": "16"
    }
}
````````

>**Important**
>
>Any support request will be automatically refused if this field is filled in.

## Equipment configuration

### Inclusion of a Zigbee module

Inclusion is the most complex part of Zigbee. Although simple, the operation is often repeated several times to achieve. Jeedom plugin side it's easy, just click on the button **Inclusion mode** after which you have 3 minutes to include the equipment.

The inclusion procedure is specific to each module. Please refer to the manufacturer's documentation to achieve it.

>**TRICK**
>
>Do not forget to do a reset *(reset)* of the module before any inclusion.

### Setting up a Zigbee module

Once included, Jeedom is supposed to automatically recognize the module and create the corresponding commands. If this is not the case, refer to the following paragraph : **Module not recognized**.

>**Important**
>
>Due to a bug in some firmware *(Ikea, Sonoff, etc)*, it is sometimes necessary to choose the type of module directly from the list **Equipment** then save so that the orders are created correctly.

On the actions (top right) you can activate **Auto-discovery of information commands**, once activated jeedom will automatically create an order for any information reported by the module for 3min. It allows for example on a remote control which is not yet recognized by Jeedom to automatically create the information commands corresponding to the pressing of the buttons (to be done during the 3min therefore)

As usual, you can give your equipment a name, enter a category or a parent object and activate or make it visible.

Other more specific parameters are also accessible :

- **Identification** : unique identifier of the equipment. Even during a re-inclusion or if you change the type of Zigbee controller.
- **Zigbee controller** : used to select the Zigbee controller in communication with the equipment.
- **Communication control** : allows you to select the mode of checking good communication between the controller and the module.
- **Ignore execution confirmation** : check the box to ignore the correct execution of the command. This allows you to regain control more quickly but does not guarantee that the order is well placed.
- **Allow queuing** : check the box to allow queuing of orders. This allows the command to be re-executed in the event that the order has not been taken into account by the module.
- **Auto-refresh (cron)** : allows to force the update of attributes, it is not recommended to put anything here, a bad value and you saturate all your zigbee networks...

The part **Information** allows manual selection of manufacturer and equipment. There is also the visual of the equipment as well as two buttons allowing the **regeneration of orders** or access to options **Module configuration**.

In the tab **Orders**, we find, as usual, the commands allowing to interact with the module.

### Module not recognized

If your module is included but not automatically recognized by Jeedom *(no orders created)*, so you have to ask the Jeedom team to add it.

>**INFORMATION**
>
>The Jeedom team reserves the right to refuse any integration request. It is always preferable to opt for equipment whose compatibility is already confirmed.

To request the addition of new equipment, it is necessary to provide the following elements :

- **the exact model** of the module with a link to the purchase site and a representative image on a transparent background (`png`),
- On the equipment page, click on the blue button **Module configuration** then tab **Raw information**. Copy the content to transmit it to the Jeedom team,
- Put the daemon in `debug` from the plugin configuration page and restart it. Perform actions on the equipment *(if it is a temperature sensor, vary the temperature, if it is a valve, vary the setpoint, etc...)* and send the `zigbee` log *(not `zigbeed`)*.

>**Important**
>
>Before any request to add a module, check that your plugin is up to date and that the module is not already in the list. It sometimes happens that the automatic recognition does not work (because the module does not give its identification in time) and that it is necessary to manually indicate to Jeedom the type of module

>**INFORMATION**
>
>Any incomplete request will be refused without a response from the Jeedom team.

### Operation of controls
>**Reserved for experts !**

We explain below how the commands work in the plugin for the most advanced users :

- ````attributes::ENDPOINT::CLUSTER_TYPE::CLUSTER::ATTRIBUT::VALUE```` allows you to write the value of an attribute *(be careful not all attributes can be changed)* with :
  - ````ENDPOINT```` : endpoint number,
  - ````CLUSTER_TYPE```` : cluster type *(IN \| OUT)*,
  - ````CLUSTER```` : cluster number,
  - ````ATTRIBUT```` : attribute number,
  - ````VALUE```` : value to write.

**Example** : ````attributes::1::in::513::18::#slider#*100```` will write attribute to endpoint `1`, incoming cluster (````in````) `513`, attribute` 18` with the value of the ````slider*100````.

- ````ENDPOINT::CLUSTER:COMMAND::PARAMS```` allows you to run a server command with :
  - ````ENDPOINT```` : endpoint number,
  - ````CLUSTER```` : cluster name,
  - ````COMMAND```` : Name of the command,
  - ````PARAMS```` parameter in the correct order separated by `::``.

**Example** : ````1::on_off::on````, execute the command ````on```` on the endpoint `1` of the cluster ````on_off```` without parameters.        
**Example** : ````1::level::move_to_level::#slider#::0````, execute the command ````move_to_level```` on the endpoint `1` of the cluster ````level```` With parameters ````#slider#```` and ````0````.

# Outils

Different tools offering better interactivity with its Zigbee network are accessible from the plugin configuration page :

![Tools contrôleur Zigbee](../images/zigbee_controllerTools.png)

>**Important**
>
> On EZSP type keys *(Elelabs)*, it is only possible to carry out a single backup restore in all and for all during the entire life of the key.

The backup does not contain the list of modules but only the basic information of the Zigbee network. It is therefore not necessary to perform it regularly, a single backup is often sufficient because this information does not change during the life of the controller.

>**INFORMATION**
>
>Zigbee daemons are stopped during the backup or restore process.

## Updating the controller firmware

It is possible to update the firmware of the Zigbee controller from Jeedom *(currently only applies to Elelabs controllers)*. The firmware being essential in Zigbee because it manages the routing among other things, it is important to update it.

>**INFORMATION**
>
>Zigbee daemons are stopped during a firmware update.

## Updating OTA modules

OTA updates *(Over-The-Air)* are the firmware updates of the modules. The process can take a certain time (several hours depending on the number of modules) but allows better reliability of the Zigbee network in general. To be able to update a module, the manufacturer must communicate its firmware :

- Regarding **Ikea** and **The advance**, the firmwares are directly made available online where the plugin will retrieve them.
- For others (see [here](https://github.com/Koenkk/zigbee-OTA/tree/master/images)), the manufacturer informally provides an update in some cases.
- For all others, it is not possible to update the module from the plugin.

In order to benefit from OTA updates, you must check the corresponding box on the plugin configuration page then save. You must then click on the button **Update module files** to retrieve the latest updated files and finally restart the Zigbee daemon.

Updates are carried out automatically in the event of availability or if the module requests it. It is possible to force the update of a module from the tab **Actions** from the module configuration window on the device page.

Unfortunately, there is no simple indicator to follow the progress of the update, the only solution is to refer to the `zigbeed_X` logs in debug and look for the term` OTA`. You will be able to see this type of log when a module updates :

````````
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA query_next_image handler for 'IKEA of Sweden TRADFRI control outlet': field_control=1, manufacture_id=4476, image_type=4353, current_file_version=536974883, hardware_version=60
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA image version: 537011747, size: 204222. Update needed: True
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA image_block handler for 'IKEA of Sweden TRADFRI control outlet': field_control=0, manufacturer_id=4476, image_type=4353, file_version=537011747, file_offset=0, max_data_size=63, request_node_addr=Noneblock_request_delay=None
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA upgrade progress: 0.0
````````

# Touchlink / Lightlink

**Touchlink** *(or Lightlink)* is a particular function of Zigbee which allows the controller to send management orders to a module on condition of being very close to it *(less than 50 centimeters)*. This is useful, for example, to reset bulbs that do not have a physical button.

This function is available on Zigbee type bulbs **Philips Hue, Ikea, Osram, Icasa and many more...** The principle is very simple, to be able to associate this type of module with a Zigbee network, you must first perform a reset. When restarting, the module will automatically try to associate with the first available Zigbee network.

## Reset in Touchlink

As often in Zigbee, difficulties can arise during the reset or association process. Several methods are available to you to achieve this :

- **Quickly perform 5 or 6 on / off cycles** *(on / off)*. The bulb should flash at the end of the procedure to indicate the correct recognition.
- **Use a zigbee remote control**, and :
  - **for Philips Hue remote controls**, simultaneously press the ON and OFF buttons for 5 to 10 seconds near the powered bulb *(sometimes you have to turn off / turn on the bulb just before on some models)*,
  - **for Ikea remotes**, press the reset button" *(next to the battery)* for 5 to 10 seconds near the powered bulb *(sometimes you have to turn off / turn on the bulb just before on some models)*.
- About the **Philips Hue bulbs**, you can also include them on Hue Bridge and then remove them from it.

# Greenpower

Greenpower technology is supported by the plugin (zigpy patch which does not support it natively yet...).

>**Important**
>
>For the moment, Greenpower only works with EZSP type keys (Elelabs, popp...). Deconz support will come later

To add a Greenpower module 2 possibilities :

- switch to inclusion mode, press a button on the module. Please note that this corresponds to an unsecured addition (anyone who intercepts the frame of the module can send it back to your Jeedom)
- read the module's QRcode and copy the string in the "Commissioning" part of Jeedom. This corresponds to a secure addition (the encryption key and in the QRcode)


>**Important**
>
>By default the switches are on channel 11. It is absolutely necessary to have the key and the switch on the same channel. I let you consult the documentation to change the channel of the switches (I personally find the handling not easy, the slightest error forces you to start all over again, in general it takes me a good hour)

# Group management

A group can be related to a kind of virtual remote control allowing the controller to act on several modules in order to make them perform the same actions simultaneously.

The procedure is simple : create a new group and add or delete member devices within it.

# Binding

The binding makes it possible to link modules directly to each other without the orders passing through the controller. The link is made from a cluster *(enter exit)* to the same cluster of another module. The link must always be made from the control (remote control type) to the actuator.

You will find the binding management elements, if it is supported by your module, in the tab **INFORMATION** from the module configuration window.

![Binding Zigbee](../images/zigbee_binding.png)

Some modules are not compatible with the binding and others *(such as Ikea modules)* only support the binding of the command to a group, it is therefore necessary to start by creating a new group in which the actuator must be placed.

>**Important**
>
>When setting up (or removing) a binding, the source module (remote control for example) must absolutely be awakened so that it takes into account the binding information

# Zigbee Networks

The constitution of a good quality Zigbee network is greatly helped by the tools made available in the plugin. Go to the general page of the plugin listing all the equipment and click on the button **Zigbee Networks** to access various information and actions around the Zigbee network as well as the representative graphic thereof.

## Network graph

The network graph provides an overview of the Zigbee network and the quality of communications with the different modules.

>**INFORMATION**
>
>The Zigbee network graph is indicative and is based on the neighbors that the modules declare. This does not necessarily represent the real routing but the possible routes.

## Optimizing the network

To optimize the reliability of your Zigbee network, **it is more than recommended to have at least 3 router modules permanently powered and to avoid unplugging them**. Indeed, during our tests we noticed a clear improvement in the reliability and resilience of the Zigbee network when adding router modules. It is also advisable to include them first, otherwise you will have to wait 24 to 48 hours for the "end-devices" *(non-router modules)* discover them.

Another important point, it is possible, when removing a router module, that part of the "end-device" *(non-router modules)* either lost for a longer or shorter time *(in ten hours or more)* or even definitely and you have to re-include them.
Unfortunately this is due to the way in which the manufacturer has planned the integration of its equipment within a Zigbee network and therefore cannot be corrected by the plugin which does not manage the routing part.

Finally, and even if it may seem obvious to some, we remind you that Zigbee gateways in Wifi or remote are by definition less reliable than USB gateways. The Jeedom team therefore recommends the use of a Zigbee gateway in USB.  

# Zigbee key change

If for a given demon (1,2 or 3) you change the Zigbee key then you must delete the data at the level of the demon ("Delete data button"). This does not delete Jeedom's equipment, it just empties the demon's Zigbee database. Please note this operation is irreversible

# FAQ

>**LQI or RSSI is N / A**
>
>Values are normally emptied after restarting the zigbee daemon. You have to wait for the module to communicate again for the values to be entered.

>**I have inclusion issues or errors in the type logs ````TXStatus.MAC_CHANNEL_ACCESS_FAILURE````**
>
>You should try to remove or change the USB extension if you are using one or install one if you are not using one.

>**I have errors ````can not send to device```` or ````send error```` or ````Message send failure````**
>
>This is usually due to a routing issue. the routing is more or less fixed in Zigbee but not symmetrical, a module can use a different route to respond than the one used to talk to it. Often the electric shutdown *(removing batteries for example)* and turn on the power *(or replacement of batteries)* is enough to solve the problem. It can also be corrected by :
>- putting or replacing the USB extension,
>- using another USB port (especially the USB ports on Raspberry Pi which seem to be having difficulty),
>- putting a powered usb hub,
>- moving the key to avoid interference *(the Zigbee is very sensitive to interference, in particular because it uses the same frequency as the wifi)*.

>**I have weird errors on battery modules or inclusion issues**
>
>We noticed that a good part of the problems of the modules on battery are due to the batteries or possibly problems of resetting the modules to zero before inclusion. Even if these appear to be new, it is advisable to test with new batteries to rule out this hypothesis.

>**I have concerns updating the values of the equipment**
>
> 2 possibilities :
> - it is a ZLL module *(see the configuration of the Jeedom equipment which indicates whether it is ZHA or ZLL)*. In this case you absolutely need a "Refresh" command so that you or Jeedom force the update of the values. If this command does not exist in the equipment, you must contact Jeedom support to have it added in the next stable version. Once out, click on the button **Recreate commands** without deletion.
> -	the module is in ZHA, so it's a concern of inclusion. In the tab **Action** of the module configuration, there is a button **Reset module** allowing to force post-inclusion actions. Care must be taken to keep the module awake if it is on battery.

>**My module drains its batteries very quickly**
>
>Check that you are on an up-to-date firmware on your zigbee key. In 90% of cases, excessive battery consumption comes from the firmware of the key which has a problem.

>**I cannot include new modules**
>
>Several possibilities for this :
>- You already have a lot of mods and have exceeded the limit of the number of live mods (31 in general). You must either put another Zigbee key (the plugin manages up to 3) or try adding router nodes (be careful there is no clear standard on router nodes so there are incompatibilities between manufacturers...)
>- You are under Conbee : try to unplug the key for 2 minutes, put it back and restart the daemon, it's a known disease of the Conbee key (even under deconz) or you need a cold reboot for the inclusion to work
>- You have an SSD plugged into USB3, try plugging it into a USB2 port

>**I see "No cluster ID" errors in the logs XXXXX"**
>
>This is an incomplete inclusion, you have to remove the module from the zigbee networks (using the zigbee networks button => Nodes), reset the module then re-include it, being careful to keep it awake during all the processes of the 'inclusion

>**My motion sensor / opening / switch command always remains at 1**
>
>It is common in zigbee mode the module sends the value one during an action (movement, opening, pressing the button) but does not return 0 when it is finished (end of movement for example). You can set up a status return to 0 after 1min (for example) in the configuration of the equipment command tab then on the command line in question.

>**I don't have as many commands as buttons on my remote**
>
>On my remote control I have for example 2 buttons but in the list of Jeedom commands I only have 1 command !!! It's normal the command in jeedom takes a different value depending on the physical button pressed. The easiest way to see it is to go to "Advanced configuration" (top right) then "Logs" (top right too) and press the buttons on the remote control to see the different values of the commands.

>**I have a standard error "base.timeout" when starting the daemon on an EZSP type key**
>
>It is possible that the key is blocked in bootloader mode, to get out of it you can go to the configuration of the plugin then click on "Update the firmware", select your type of key (on Smart/Atlas it is Elelabs/Popp ), in Zigbee port select your port and in firmware select "Correction bootloader"
> Important : this manipulation should only be done with Elelabs, Jeedom Atlas or Jeedom Smart type keys. On any other key you must contact the manufacturer to give you the procedure.

>**I can't install dependencies**
>
>This may come from a problem with the version of pip3, to correct it you have to go to the Jeedom configuration, OS / DB tab then launch the OS console and do : `sudo pip3 install --upgrade pip` then restart the installation of dependencies. If that doesn't work you can try to do `sudo apt remove -y python3-openssl;sudo pip3 install --upgrade pip` and restart the installation of dependencies.
