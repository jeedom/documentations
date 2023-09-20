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
> First of all you must update the firmware of your key (especially for EZSP, popp key in particular) otherwise the demon cannot work you must refer to the manufacturer's documentation.

In addition, the plugin is equipped with many tools allowing :

- there **mods update** in OTA,
- visualization of nodes and **network graph**,
- the management of **groups**,
- the support of **binding**,
- the care of **Touch link**

>**VERY IMPORTANT**
>
> Due to the waltz of firmware / hardware on the manufacturer side and possible bugs in their firmware (without necessarily having the possibility of updating it from Jeedom because most manufacturers do not communicate them), it is possible that a module marked compatible only partially (a button that does not work, or no difference between the up and down button, no rise in CO2 or a module sensor...). Unfortunately, we cannot warn you in advance in the list because : 
>- we don't necessarily have the module in question, many modules are added by user feedback
>- from one week to another the module may have changed (new hardware, new firmware or even a new module that has not changed its name)
>Under no circumstances can Jeedom be held responsible in the event of a missing function (or even a module not working) when it is indicated as compatible, we are subject to the changes imposed by the manufacturer like you

# Configuration

## Plugin Setup

**Jeezigbee plugin** uses dependencies that must be installed first (depending on your system, this may take several hours)). 

The plugin uses the MQTT protocol to chat with Jeedom; it is therefore necessary to have the MQTT manager plugin installed and correctly configured (in practice, if this is not the case, Jeedom should do everything on its own).

Once the dependencies are installed, you can configure a Zigbee controller by entering **controller type, controller port**, then (re)start the daemon.    

>**IMPORTANT**
>
> There are 2 modes for the plugin : local, everything is on your Jeedom, this is the recommended mode. For advanced users, it is possible to use remote mode; in this case Jeedom does not manage Zigbee2mqtt, it must be installed by you (usually on a docker on jeedom or on another machine). Attention in remote mode it is necessary that Mqtt manager and Zigbee2mqtt are connected to the same brocker mqtt (mosquitto)

>**IMPORTANT**
>
> During the first use if you are in local mode it is ABSOLUTELY necessary to launch the dependencies (even if ok). Note that to update zigbee2mqtt just run the dependencies, you can see the new versions of zigbee2mqtt [here](https://github.com/Koenkk/zigbee2mqtt/tags)

To go to Zigbee2MQTT from the JEEZIGBEE plugin (for example to force the deletion of a module the module) you must go to the configuration of the Jeezgibee plugin then in the Configuration part, click on Interface z2m "Here" you will open the page of Zigbee2MQTT, once in the module you will be asked for the identifier which is on the configuration page of Jeezigbee.

Attention this is only possible if you are in local installation of zigbee2mqtt.

## Compatibilité

You can find [here](https://www.zigbee2mqtt.io/supported-devices/) the list of modules compatible with the plugin

>**IMPORTANT**
>
>For the moment the plugin does autoconfiguration, that is to say that it does not contain any specific configuration for a given module, it retrieves the information from zigbee2mqtt to automatically generate the commands. This implies that any zigbee2mqtt compatible module should work immediately with the plugin. On the other hand, this has the consequence of generating a lot of commands which are not always all useful. We are in the process of adding a specific configuration system for certain modules and thus improving the commands and presentation of these

## Equipment configuration

### Include a Zigbee module

Inclusion is the most complex part in Zigbee. Although simple, the operation often has to be repeated several times to achieve. On the Jeedom plugin side it's easy, just click on the button **Include mode** after which you have 3 minutes to include the equipment.

The inclusion procedure is specific to each module. Please refer to the manufacturer's documentation to achieve it.

>**TRICK**
>
>Don't forget to reset *(reset)* of the module before any inclusion. It is also necessary to think, the time of the inclusion, to keep the module awake (be careful not to keep it awake too much and to launch a reset without doing it on purpose)

As usual, you can give your equipment a name, give it a category or a parent object and activate it or make it visible.

Other more specific parameters are also accessible :

- **Identification** : unique device identifier. Even during a re-inclusion or if you change the type of Zigbee controller.
- **Z2m Controller** : allows you to select the Zigbee controller in communication with the equipment (for the moment the plugin does not support multiple controllers)

The part **Information** allows to see the model of the equipment. There is also the visual of the equipment and access to the configuration of the module

In the tab **Orders**, we find, as usual, the commands allowing to interact with the module.

### Module configuration

This is an important window you will find here : 

- Information : contains all useful information about your module (model, manufacturer, status, power supply, OTA, description, endpoints....)
- Configuration : contains the configuration parameters of your module, if there are any (often there are none so it is empty)
- Binding : You will find here the existing binding (link) (in general you always have a line to link your module to your coordinator). You can also add a binding (link) between two modules, be careful to wake up the modules on battery when binging. Important the binding depends on the manufacturers (and not on the plugin), some manufacturers do not support direct binding and it is absolutely necessary to have a group, there are also incompatibilities between manufacturers (unfortunately we cannot list them)
- Reporting : if the module supports it, you can configure here the frequency of sending information from the module to the coordinator (Jeedom therefore)
- Raw information : is just for support, you will be asked if you have a problem with a module

### Module not recognized

If the module is not recognized by the plugin (no command) you have to look [here](https://www.zigbee2mqtt.io/supported-devices/), if it is supported then you have to contact Jeedom support (or write on the community) to see why. If your module is not in the list of modules supported by zigbee2mqtt then you have to wait for it to be added.

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

This is where you find all the advanced configurations of Zigbee2mqtt, be careful it's a list generated from Zigbee2mqtt (hence the fact that everything is in English)

## Network graph

The network graph provides an overview of the Zigbee network and the quality of communications with the different modules. Remember to launch an update from time to time (it takes about ten minutes and can slow down your zigbee network), once the update is done, you must close the window **Zigbee networks** and reopen it.

>**IMPORTANT**
>
>The network graph is for reference only and may not be exact (especially on battery modules which do not often or sometimes not return their routing at all))

## Optimize the network

To optimize the reliability of your Zigbee network, **it is more than recommended to have at least 3 router modules permanently powered and to avoid disconnecting them**. Indeed, during our tests we noticed a marked improvement in the reliability and resilience of the Zigbee network when adding router modules. It is also advisable to include them first, otherwise you will have to wait 24 to 48 hours for the "end-device" *(non-router modules)* discover them.

Another important point, it is possible, during the removal of a router module, that part of the "end-device" *(non-router modules)* is lost for a more or less long time *(in ten hours or more)* or even permanently and you have to re-include them.
Unfortunately this is due to the way the manufacturer has planned the integration of its equipment within a Zigbee network and therefore cannot be corrected by the plugin which does not manage the routing part.

Finally, and even if it may seem obvious to some, we remind you that Zigbee gateways in Wifi or remote are by definition less reliable than USB gateways. The Jeedom team therefore advises the use of a Zigbee gateway in USB.  

# External converter

Zigbee2mqtt allows you to add external converters (to support modules not officially supported). To add an external converter, simply in the plugin configuration (Plugin -> Plugin management -> Jeezigbee) click on the "Edit" button at the converter line and drop/edit your converter in the folder that jeedom gives you. watch.

>**IMPORTANT**
>
>The support does not cover the creation/use part of external converters.

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
>- You already have a lot of modules and have exceeded the limit of the number of live modules (31 in general). You have to try by adding router nodes (be careful there is no clear standard on router nodes so there are incompatibilities between manufacturers...)
>- You are on Conbee : try unplugging the key for 2 minutes, putting it back in and restarting the daemon; it's a disease known to the Conbee keys (even under deconz), it takes a cold reboot for the inclusion to work again
>- You have an SSD plugged into USB3, try plugging it into a USB2 port

>**I don't have as many commands as buttons on my remote**
>
>On my remote control I have for example 2 buttons but in the list of Jeedom commands I only have one command !!! It's normal; the command in jeedom takes a different value depending on the physical button pressed. The easiest way to see it is to go to "Advanced configuration" (top right) then "Logs" (top right too) and press the buttons on the remote control to see the different values of the commands.

>**I don't have the image of my module**
>
>Nothing serious, it does not mean that it is not usable or recognized, the image is just for illustration. If you really want it, you have to contact support to see why you don't have it (usually it's due to a non-standard character in the module model name)

>**Change the PAN_ID and Network Key**
>
>Once the change has been made in the jeedom interface or in zigbee2mqtt, you must stop the daemon, delete the coordinator_backup file.json (it is in `/var/www/html/plugins/z2m/data`), restart the daemon.

>**I got the error `Error: Reset error: Error: {"sequence":-1} after 10000ms` and an ELELABS key or an Atlas box**
>
>You must update the firmware of your zigbee key, to do this in the configuration of the jeezigbee plugin click on update firmware and fill in the different fields in the window then validate. Be careful not to do this on a luna box, it breaks the zigbee key.
