# Jeezigbee plugin

>**IMPORTANT**
>
>Documentation in progress, do not hesitate to come back to see from time to time to learn more about this plugin


**The Jeezigbee plugin for Jeedom** is based on the excellent work done around **the zigbee2mqtt open-source library** to offer a **generalized compatibility with different Zigbee hardware**. It allows communication with the following Zigbee controllers :

-	**deCONZ (Conbee key/Conbee 2/Raspbee/Raspbee 2)** : Tested and validated by the Jeedom team. *(It is not necessary to install the deCONZ app)*
-	**EZSP (Silicon Labs)** : Tested, validated
-	**XBee** : Not tested by Jeedom team.
-	**Zigate** : Not tested by the team.
-	**ZNP (Texas Instruments)** : Tested, validated

>**IMPORTANT**
>
> First of all you must update the firmware of your key (especially for EZSP, popp key in particular) otherwise the demon cannot work you must refer to the manufacturer's documentation. Do not hesitate to consult the official Zigbee2MQTT page to find the firmware available for your key [here](https://www.zigbee2mqtt.io/guide/adapters/)

In addition, the plugin is equipped with many tools allowing :

- there **mods update** in OTA,
- visualization of nodes and **network graph**,
- the management of **groups**,
- the support of **binding**,
- the care of **Touch link**

>**VERY IMPORTANT**
>
> Due to the waltz of firmware/hardware on the manufacturer's side and possible bugs in their firmware (without necessarily having the possibility of updating it from Jeedom because most manufacturers do not communicate them), it is possible that a module marked compatible only partially (a button that does not work, or no difference between the up and down button, no CO2 rise or a module sensor...). Unfortunately, we cannot warn you in advance in the list because :
>- we don't necessarily have the module in question, many modules are added by user feedback
>- from one week to another the module may have changed (new hardware, new firmware or even a new module that has not changed its name)
>Under no circumstances can Jeedom be held responsible in the event of missing function(s) (or even a module not working) even though it is indicated as compatible, like you we are subject to the changes imposed by the manufacturer(s). (s)

# Configuration

## Plugin Setup

**Jeezigbee plugin** uses dependencies that must be installed first (depending on your system, this may take several hours)).

The plugin uses the MQTT protocol to chat with Jeedom; it is therefore necessary to have the MQTT manager plugin installed and correctly configured (in practice, if this is not the case, Jeedom should do everything on its own).

Once the dependencies are installed, you can configure a Zigbee controller by entering **controller type, controller port**, then (re)start the daemon.

You can in the plugin configuration :

- Choose the version of Zigbee2MQTT by simply putting the version number in the field provided for (the button next to this field allows you to see the available versions). Then just save then restart the dependencies
- The plugin also tells you if you have (at least) the version recommended by jeedom, it is not obligatory but recommended to be in this version or higher
- You can change the listening port of the Zigbee2MQTT interface (it is not recommended to touch this unless you know what you are doing)
- It is possible for EZSP Elelabs controllers to update the firmware

>**IMPORTANT**
>
> There are 2 modes for the plugin : local, everything is on your Jeedom, this is the recommended mode. For advanced users, it is possible to use remote mode; in this case Jeedom does not manage Zigbee2mqtt, it must be installed by you (usually on a docker on jeedom or on another machine). Be careful in remote mode, Mqtt manager and Zigbee2MQTT must be connected to the same mqtt broker (mosquitto)

>**IMPORTANT**
>
> During the first use if you are in local mode it is ABSOLUTELY necessary to launch the dependencies (even if ok). Note that to update Zigbee2MQTT you just need to launch the dependencies, you can see the new versions of Zigbee2MQTT [here](https://github.com/Koenkk/zigbee2mqtt/tags)

To go to Zigbee2MQTT from the Jeezigbee plugin (for example to force the deletion of a module) you must go to the configuration of the Jeezgibee plugin then in the "Configuration" section, click on Interface z2m "Here" you will open the Zigbee2MQTT web interface, once in the module you will be asked for the identifier found on the Jeezigbee configuration page.

Attention this is only possible if you are in local installation of zigbee2mqtt.

## Compatibilité

You can find [here](https://www.zigbee2mqtt.io/supported-devices/) the list of modules compatible with the plugin

>**IMPORTANT**
>
>For the moment the plugin does autoconfiguration, that is to say that it does not contain any specific configuration for a given module, it retrieves the information from zigbee2mqtt to automatically generate the commands. This implies that any zigbee2mqtt compatible module should work immediately with the plugin. On the other hand, this has the consequence of generating a lot of commands which are not always all useful. We are in the process of adding a specific configuration system for certain modules and thus improving the commands and their presentation

## Equipment configuration

### Include a Zigbee module

Inclusion is the most complex part in Zigbee. Although simple, the operation often has to be repeated several times to achieve. On the Jeedom plugin side it's easy, just click on the button **Include mode** after which you have 3 minutes to include the equipment.

The inclusion procedure is specific to each module. Please refer to the manufacturer's documentation to achieve it.

>**TRICK**
>
>Don't forget to reset *(reset)* of the module before any inclusion. You also have to think carefully, during inclusion, about keeping the module awake (be careful not to keep it awake too much and to launch a reset without doing it on purpose))

As usual, you can give your equipment a name, give it a category or a parent object and activate it or make it visible.

Other more specific parameters are also accessible :

- **Identification** : unique device identifier. Even during a re-inclusion or if you change the type of Zigbee controller.
- **Z2m Controller** : allows you to select the Zigbee controller in communication with the equipment (for the moment the plugin does not support multiple controllers)
- **Self-refresh (cron)** : allows you to add a cron which requests the updating of the equipment values (be careful, nothing guarantees that the module will really update them, it must support it)
- **Do not allow messages if the equipment has not been seen for more than (s))** : each zigbee device has a "last communication" date (last seen) in rare cases it is possible that Zigbee2MQTT sends messages from the device even if it is no longer there (no longer connected or no battery left). In this case to avoid "false" updating of the commands it is possible to say "if the last communication from the equipment is older than X seconds then ignore the updates of the values". Please note, this option is reserved for advanced users.

The part **Information** allows to see the model of the equipment. We also find the visual of the equipment (non-modifiable because it comes from zigbee2mqtt) and access to the configuration of the module

In the tab **Orders**, we find, as usual, the commands allowing to interact with the module.

### Module configuration

This is an important window that you will find here :

- Information : contains all the useful information about your module (model, manufacturer, status, power supply, OTA, description, endpoints....)
- Configuration : contains the configuration parameters of your module, if there are any (often there are none so it is empty)
- Binding : Here you will find the existing binding (in general you always have a line to link your module to your coordinator). You can also add a binding (link) between two modules, be careful to wake up the modules on battery when binging. Important the binding depends on the manufacturers (and not on the plugin), some manufacturers do not support direct binding and it is absolutely necessary to have a group, there are also incompatibilities between manufacturers (unfortunately we cannot list them)
- Reporting : if the module supports it, you can configure here the frequency of sending information from the module to the coordinator (Jeedom therefore)
- Raw information : is just for support, you will be asked if you have a problem with a module

### Module not recognized

If the module is not recognized by the plugin (no command) you have to look [here](https://www.zigbee2mqtt.io/supported-devices/), if it is supported then you have to contact Jeedom support (or write on the community) to see why. If your module is not in the list of modules supported by Zigbee2MQTT then you have to wait for it to be added.

>**INFORMATION**
>
>The Jeedom team reserves the right to refuse any integration request. It is always better to opt for equipment whose compatibility is already confirmed.

## OTA mods update

OTA updates *(Over-The-Air)* are the firmware updates of the modules. The process can take some time (several hours depending on the number of modules) but allows better reliability of the Zigbee network in general. To be able to update a module, the manufacturer must communicate its firmware :

- Re **Ikea** And **Ledavance**, the firmwares are directly made available online where the plugin will retrieve them.
- For others (see [here](https://github.com/Koenkk/zigbee-OTA/tree/master/images)), the manufacturer unofficially provides an update in some cases.
- For all others, it is not possible to update the module from the plugin.

You can from the module configuration request a firmware verification as well as launch the OTA update.

# Greenpower

Greenpower technology is normally supported by the plugin; it is being qualified by Jeedom SAS

# Zigbee networks

The constitution of a good quality Zigbee network is greatly helped by the tools made available in the plugin. Go to the general page of the plugin listing all the equipment and click on the button **Zigbee networks** to access various information and actions around the Zigbee network as well as the representative graph of it.

## Configuration

This is where you find all the advanced configurations of Zigbee2MQTT, be careful this is a list generated from Zigbee2MQTT (hence the fact that everything is in English)

## Network graph

The network graph provides an overview of the Zigbee network and the quality of communications with the different modules. Remember to launch an update from time to time (it takes about ten minutes and can slow down your zigbee network), once the update is done, you must close the window **Zigbee networks** and reopen it.

>**IMPORTANT**
>
>The network graph is there for information purposes only and may not be exact (particularly on battery modules which do not often or even sometimes not report their routing)

## Optimize the network

To optimize the reliability of your Zigbee network, **it is more than recommended to have at least 3 router modules permanently powered and to avoid disconnecting them**. Indeed, during our tests we noticed a marked improvement in the reliability and resilience of the Zigbee network when adding router modules. It is also advisable to include them first, otherwise you will have to wait 24 to 48 hours for the "end-device" *(non-router modules)* discover them.

Another important point, it is possible, during the removal of a router module, that part of the "end-device" *(non-router modules)* is lost for a more or less long time *(in ten hours or more)* or even permanently and you have to re-include them.
Unfortunately this is due to the way the manufacturer has planned the integration of its hardware within a Zigbee network and therefore cannot be corrected by the plugin which does not manage the routing part.

Finally, and even if it may seem obvious to some, we remind you that Zigbee gateways in Wifi or remote are by definition less reliable than USB gateways. The Jeedom team therefore advises the use of a Zigbee gateway in USB.

# Groupe

It is possible in jeedom to create groups of zigbee equipment. The groups can contain everything and anything, it is not possible for jeedom to manage the orders in these, so it is up to you to add them. For this, nothing could be simpler, just click on the button to add a command, give it a name and take the logical ID, type and subtype of one of the devices in the group which contains the desired command. Note that Jeedom manages both action and info type commands in groups.

# External converter

Zigbee2mqtt allows you to add external converters (to support modules not officially supported). To add an external converter, simply in the plugin configuration (Plugin -> Plugin management -> Jeezigbee) click on the "Edit" button at the converter line and drop/edit your converter in the folder that jeedom gives you. watch.

>**IMPORTANT**
>
>Support does not cover the creation/use of external converters part.

# Specific commands

## IR control

The case of modules sending IR codes is a bit specific because there is no predefined list of IR codes so you have to find the IR command yourself then in jeedom add a command with logical ID : `ir_code_to_send::YOUR IR CODE

## Custom order

This part is more for advanced users who would like to add specific commands. Everything happens in the logical id of the command :
- action : `json::{"temperature":25}` to send `{"temperature":25}` on the `set` topic of the equipment, to send a command on a subtopic you just have to put `/arm_mode` in subtopic and `json for example::{"mode":"arming_stay"}` in logical id to send `{"mode":"arming_stay"}` on `set/arm_mode`
- information : `temperature` to retrieve the `temperature` field from the equipment json or `temperature`::min` to retrieve the `min` subfield of the equipment `temperature` table

>**NOTE**
>
> For action type commands you can use ` tags#slider#`, `#message#`, `#title#` or `#select#` depending on the subtype of the command to pass a parameter

# Sonoff E flash key

## Automatic website 

On this site with Chrome (Edge should also work) you can by plugging your USB key into your PC flash the key automatically with the latest firmware :

[Silabs Firmware Flasher](https://darkxst.github.io/silabs-firmware-builder/)

## Command line mode with firmware selection

This method allows you to flash the key under Linux with the firmware of your choice :



```
apt install -y python3-pip python3.11-venv
python3 -m venv flash
flash/bin/pip3 install universal-silabs-flasher
cd flash/
bin/universal-silabs-flasher --device /dev/ttyUSB0 --bootloader-reset sonoff probe
bin/universal-silabs-flasher --device /dev/ttyUSB0 --bootloader-reset sonoff flash --firmware ../ncp-uart-sw_EZNet7.4.3_V1.0.0.gbl
bin/universal-silabs-flasher --device /dev/ttyUSB0 --bootloader-reset sonoff probe
```

List of [firmwares](https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E). 

Be careful to put the correct gbl file name when flashing.

# FAQ

[Link](https://www.zigbee2mqtt.io/guide/installation/20_zigbee2mqtt-fails-to-start.html) to the Zigbee2mqtt FAQ

>**I have a lot of information messages (blue) at the bottom right and I don't understand anything**
>
>We are currently sorting out the messages useful or not that Zigbee2mqtt returns; but by default we prefer to display all.

>**I have weird errors on modules on batteries or problems with inclusion**
>
>We have noticed that a good part of the problems of the modules on battery are due to the batteries or possibly problems of resetting the modules before inclusion. Even if these seem new, it is advisable to test with new batteries to rule out this hypothesis.

>**My module drains its batteries very quickly**
>
>Check that you are on an up-to-date firmware on your zigbee key. In 90% of cases excessive battery consumption comes from the firmware which has a problem.

>**I can't include new modules**
>
>Several possibilities for this :
>- You already have a lot of modules and have exceeded the limit on the number of live modules (usually 31). You must try by adding router nodes (be careful there is no clear standard on router nodes so there are incompatibilities between manufacturers...)
>- You are on Conbee : try unplugging the key for 2 minutes, putting it back in and restarting the daemon; it's a known disease of Conbee keys (even under deconz), you need a "cold reboot" for the inclusion to work again
>- You have an SSD plugged into USB3, try plugging it into a USB2 port

>**I don't have as many commands as buttons on my remote control**
>
>On my remote control I have for example 2 buttons but in the list of Jeedom commands I only have one command !!! It's normal; the command in jeedom takes a different value depending on the physical button pressed. The easiest way to see it is to go to "Advanced configuration" (top right) then "Logs" (also top right) and press the buttons on the remote control to see the different command values.

>**I don't have the image of my module**
>
>Nothing serious, that doesn't mean it can't be used or recognized, the image just serves as an illustration. If you really want it, you have to contact support so they can see why you don't have it (usually it's due to a non-standard character in the module model name)

>**Change the PAN_ID and Network Key**
>
>Once the change has been made in the jeedom interface or in zigbee2mqtt, you must stop the daemon, delete the coordinator_backup file.json (it is in `/var/www/html/plugins/z2m/data`), restart the daemon.

>**I got the error `Error: Reset error: Error: {"sequence":-1} after 10000ms` and an ELELABS key or an Atlas box**
>
>You must update the firmware of your zigbee key, to do this in the configuration of the jeezigbee plugin click on update firmware and fill in the different fields in the window then validate. Be careful not to do this on a luna box, it breaks the zigbee key. If the update does not work, you should then try to do a "Bootloader Correction".

>**My equipment is not recognized**
>
>If your equipment is not recognized it is because it is not yet supported by the Zigbee2mqtt library. It is possible to create a converter for your equipment. You must refer to the document [Support for new devices](https://www.zigbee2mqtt.io/advanced/support-new-devices/01_support_new_devices.html) and also for Tuya hardware. [Supports new TuYa devices](https://www.zigbee2mqtt.io/advanced/support-new-devices/02_support_new_tuya_devices.html).
>
>In any case, we must open a way out [github here](https://github.com/Koenkk/zigbee2mqtt/issues)
>
>Once the converter is created, you will have to put it in the plugin to test it.
>1) From the Jeedom file editor,
>- Create a folder with the brand name of your equipment in plugin/z2m/core/converters>
>- Enter this folder
>- Create a file named Equipment reference brand.js For the example we will use Tuya_TZE204_81yrt3lo.js
>- In this file, paste the elements of the converter.
>- Save and close the file.
>
>2) Restart the plugin daemon

>**SONOFF model P key: Flashing and fixing the “unknown record type 3” issue**
>
>An explanation of flashing the key was proposed on the forum. If you have the error "unkown record type3", it is necessary to convert your file .hex to .bin as explained in the tutorial. Thanks to JeedGeek for the explanation [here](https://community.jeedom.com/t/flasher-sa-cle-usb-zigbee-sonoff-p-avec-lutilitaire-ti-sous-windows/109453)

>**I have an error when updating firmware on Luna**
>
>You must deactivate the plugin daemon (Plugin -> Plugin management -> Jeezigbee then Automatic management -> deactivate), restart the luna (Settings -> System -> Restart). Once the box has restarted, you must restart the firmware update. Please note this may take up to 10 minutes. Don't forget once the update is done to reactivate automatic daemon management.

>**I get the error "Refusing to start because configuration is not valid, found the following errors: devices/0xXXXXXXXXXXXXXXXX/homeassistant must be object,null"**
>
>This is a bug in zigbee2mqtt. You have to go to the jeedom configuration tab os/db then file editor. There you have to go to plugins/z2m/data and open the configuration.yaml file. In this file search for the homeassistant line and delete it then restart the daemon.

>**I get the error "Configuration is not consistent with adapter backup"**
>
>You have to go to the Jeedom configuration then OS/DB then file editor. Then go to plugins/z2m/data and delete the coordinator_backup.json file

>**I get the error "Refusing to start because configuration is not valid, found the following errors: 0850|- device_options must be object"**
>
> Il faut aller dans la configuration de jeedom onglet os/db cliquer sur l'editeur de fichier, ensuite dedans aller dans le dossier `plugins/z2m/data`, ouvrir le fichier configuration.yml (ou configuration.yaml) et supprimer la ligne qui contient device_options puis relancer le demon
