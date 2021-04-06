# Zigbee plugin

The Zigbee plugin allows you to communicate with most existing Zigbee equipment. It is based on the (super) Zigpy project which is compatible with the following zigbee keys :

- Deconz. Tested and validated by the Jeedom team. There is no need to have Deconz installed
- EZSP (key based on a Silicon Labs chupset). Under test by the Jeedom team
- X-bee. Not tested by the Jeedom team
- Zigate. Not tested by the team, marked in experimental at Zigpy
- ZNP (Texas Instrument, Z-stack 3.X.X). Not tested by the team, marked in experimental at Zigpy
- CC (Texas Instrument, Z-stack 1.2.X). Not tested by the team, marked in experimental at Zigpy

# Plugin configuration

After installing the plugin, you just have to install the dependencies, select your type of key, the port (be careful only the type of deconz key supports the port in auto) and start the daemon. You can also choose the channel for the zigbee.

>**Important**
>
>Any change of channel necessarily requires a restart of the daemon. A change of channel may also require reinclusion of certain modulus

## Backup / restore 

It is possible on EZSP type keys (Elelabs for example) and ZNP to make a backup of this one to restore it on another key.

>**Important**
>
> On EZXP type keys (Elelabs) it is only possible to make a single backup restore in all and for the life of the key !!!!

The backup does not contain the list of modules but only the basic information of the zigbee network, so it is not necessary to do it often, only one is enough because it does not move during the life of the key.

>**Important**
>
> During a backup or a restore the zigbee daemon (s) are stopped

## Firmware update 

It is possible from Jeedom to update the firmware of the Zigbee key (only for Elelabs for the moment). The firmware is really very important in zigbee (it is he who manages the routing for example) it is important to update it.

>**Important**
>
> During a firmware update the zigbee daemon (s) are stopped

## Zigpy specific parameters (reserved for experts !!!!)

It is possible to set up specific parameters for the zigbee sub-system (zigpy). This part is really reserved for experts and Jeedom does not provide a list of possible parameters (there are hundreds which depend on the type of key). The field takes as input from the json example : 

````
{
    "ezsp": {
        "CONFIG_ADDRESS_TABLE_SIZE": "16"
    }
}
````

>**Important**
>
>During ANY support request if there is a configuration above, the support request will be automatically refused


# Module inclusion

Inclusion is the hardest part in Zigbee. Although simple, the operation is often done several times. On the plugin side, it's easy, just click on the "Include mode" button, once done you have 3 minutes to include your equipment.

Equipment side changes depending on the module, it is necessary to refer to the documentation of this one each time.

>**Important**
>
>Do not forget to do a reset of the module before any inclusion

# Equipement

Once included Jeedom must automatically recognize your module (if this is not the case see next chapter) and therefore create the commands that go well. Note that due to a bug in certain firmware (Ikea, Sonoff ...) it is sometimes necessary to choose the type of module directly in the "Equipment" list then to save to have the correct commands.

You have in the equipment tab the following parameters :

- **Zigbee equipment name** : name of your Zigbee equipment
- **ID** : unique identifiers of the equipment, even during a reinclusion (or even if you change the type of zigbee key)
- **Activate**
- **Visible**
- **Parent object**
- **Office**
- **Category**
- **Do not wait for the return of execution of orders (faster but less reliable)** : do not wait for the key validation to say that the command has been executed. It makes the hand faster but does not guarantee that everything went well

In the command tab you will find the commands of your module (if it has been recognized)

## Order for experts

For the experts here is how the controls work :

- ``attributes::ENDPOINT::CLUSTER_TYPE::CLUSTER::ATTRIBUT::VALUE``, allows you to write the value of an attribute (be careful not all attributes can be changed) with :
  - ``ENDPOINT`` : endpoint number
  - ``CLUSTER_TYPE`` : cluster type (IN or OUT)
  - ``CLUSTER`` : cluster number
  - ``ATTRIBUT`` : attribute number
  - ``VALUE`` : value to write
Example : ``attributes::1::in::513::18::#slider#*100``, here we will write the attribute in endpoint 1, incoming cluster (``in``) 513, attribute 18 with the value of the ``slider*10``
- ``ENDPOINT::CLUSTER:COMMAND::PARAMS``, allows to execute a server command, with :
  - ``ENDPOINT`` : endpoint number
  - ``CLUSTER`` : cluster name
  - ``COMMAND`` : Name of the command
  - ``PARAMS`` parameter in the correct order separated by ::
Example : ``1::on_off::on``, here we execute the command ``on`` on endpoint 1 of the cluster ``on_off`` without parameters
Example : ``1::level::move_to_level::#slider#::0``, here we execute the command ``move_to_level`` on endpoint 1 of the cluster ``level`` With parameters ``#slider#`` and ``0``

# My module is not recognized

If your module is not recognized by jeedom (no command) but included then you must ask the Jeedom team to add it.

>**Important**
>
>The Jeedom team reserves the right to refuse any integration request it is always better to take an already compatible module

For this, you must provide the following elements (any incomplete request will be refused without a response from the Jeedom team) :

- Give the exact model of your module (with a link to the sales page)
- On the equipment page, click on configuration then tab "Raw information" and send the content to the Jeedom team
- Put the daemon in debug (and restart it), make actions on the equipment (if it is a temperature sensor, vary the temperature for example, if it is a valve, vary the setpoint ...) and send the zigbee debug log (be careful to take the zigbee and not the zigbeed)

# Touchlink

Touchlink or Lightlink is a special part of the Zigbee which allows you to send management orders to a module if you are very close to it (50cm). It is used for example to make a reset on the bulbs that do not have a button.

This therefore concerns all that is Zigbee bulbs type Philips Hue, Ikea, Osram, Icasa ... and so on. The principle is very simple to be able to associate this type of module with a zigbee network, you must first do a reset. Then when restarting the module will automatically try to associate with the first open Zigbee network it finds.

## Reset in Touchlink

This is the complicated part (as always in Zigbee the hardest is the reset / association). Several methods :

- Do the on / off 5 or 6 times quickly, the bulb normally flashes quickly at the end to signal that it is good (rarely works)
- Use a zigbee remote control and
  - press at the same time the ON and OFF button for 5 to 10 seconds near the powered bulb (beware of certain bulbs, you sometimes have to turn off / on the bulb just before) for Philips hue remote controls
  - press the reset button (next to the battery) for 5 to 10 seconds near the powered bulb (beware of certain bulbs, you sometimes have to turn the bulb off / on just before) for Ikea remote controls
- For the hue bulbs you can also include them on the hue bridge then remove them from it

# OTA update 

OTA updates are module firmware updates, it takes a very very long time (several hours) but allows you to have less worries in general. To be able to update a module, the manufacturer must communicate the firmware : 

- For Ikea and Ledavance no worries it is provided online directly by Ikea, the plugin will pick it up directly from them 
- For others (see [here](https://github.com/Koenkk/zigbee-OTA/tree/master/images)) the manufacturer sometimes unofficially provides an update 
- For all the others there is no possibility to update the module by the plugin 

To activate OTA updates, just check the box in the plugin configuration then save then click on the button to update the OTA files. Then just restart the zigbee demon (s).

The updates are launched if there is one and after that the module asks if there is one (you can force this in the action tab on the configuration of the module / node). Unfortunately, there is no simple indicator to see the progress of the update, the only solution is to go to the zigbee_X logs (if the log is debugged) and look for ota and you can see if a module updates itself with logs of the type : 

````
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA query_next_image handler for 'IKEA of Sweden TRADFRI control outlet': field_control=1, manufacture_id=4476, image_type=4353, current_file_version=536974883, hardware_version=60
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA image version: 537011747, size: 204222. Update needed: True
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA image_block handler for 'IKEA of Sweden TRADFRI control outlet': field_control=0, manufacturer_id=4476, image_type=4353, file_version=537011747, file_offset=0, max_data_size=63, request_node_addr=Noneblock_request_delay=None
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA upgrade progress: 0.0

 ````

# Advice to make zigbee networks more reliable 

To have a reliable zigbee network, it is more than recommended to have at least 3 router modules permanently powered and to avoid unplugging them. Indeed during our tests we noticed a big improvement in the reliability and resilience of the zigbee networks when adding a router module. It is also advisable to include them first (otherwise it will take between 24 to 48 hours for the end device [non-router module] to find out).

Another important point it is possible during the removal of a router module that part of the end device [non-router module] is lost for a longer or shorter time (ten hours or more), or even definitively and that you have to reinclude them. Unfortunately the Jeedom team can't do anything about it, it's specific to the end device [non-router module] depending on how the manufacturer configured it (and not the Jeedom plugin which absolutely does not take care of the routing part)

>**NOTE**
>
> The graph of the Zigbee networks is for information only and is based on the neighbors that the modules declare to have, so it is not necessarily the real routing but the possible routings.

Another important point: zigbee gateways on wifi are less reliable than zigbee gateaways on USB, it's obvious but we prefer to remind you here it is therefore strongly recommended to use USB gateways.
 

# FAQ

>**LQI or RSSI is N / A
>
>It is normally following a restart of the Zigbee networks the values are emptied, it is necessary to wait for the module to recomunique so that the values return

>**I have inclusion issues or errors in the type logs ``TXStatus.MAC_CHANNEL_ACCESS_FAILURE``**
>
>Try to remove the USB extension if you have one or change it or put one in if you don't have one

>**I have "can not send to device" or "send error" or "Message send failure" errors"**
>
>Unfortunately it is very complicated to correct, it is usually due to a routing problem (the routing is more or less fixed in zigbee and not symmetrical : the module can use a different route to answer you than the one used to talk to it). Often the electrical shutdown (removing the batteries for example) and resetting the current (or replacing the batteries) is enough to resolve the problem.

>**I have weird errors on stacked modules or inclusion issues**
>
>We noticed that a good part of the zigbee problems on battery modules are due to the batteries (or problems of resetting the modules before inclusion). Even if it seems new, it is advisable to test with others to be sure.

>**I have concerns updating the values of the equipment**
>
> There are 2 possible cases :
> - it is an "old module" in ZLL (see configuration of the Jeedom equipment indicates whether it is ZHA or ZLL), in this case you absolutely need a "Refresh" command for you or Jeedom to force an update values. If you don't have it then you have to contact support so that it can be added to the next stable version. Once exited you will have to click on "recreate orders" without deleting
> - the module is in ZHA, so it's a concern of inclusion  : in the action tab of the equipment configuration you have a reset button to force post inclusion actions, remember to keep the module awake if it is on battery.
