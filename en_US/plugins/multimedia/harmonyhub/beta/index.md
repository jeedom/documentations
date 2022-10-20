# Harmony Hub plugin

This plugin allows you to control and recover all the devices associated with one or more Harmony Hub.

After having retrieved all the information relating to these devices, the plugin will be able to automatically create all the associated commands for full control from Jeedom.

# Configuration

Like any Jeedom plugin, the plugin **Harmony Hub** must be activated after installation.

## Plugin configuration

The plugin uses dependencies that must be installed first by clicking on the button **Revive**.

Once the dependencies are installed, you can enter the IP address on which the Harmony Hub can be reached.

>**TRICK**
>
>The plugin is able to interact with several hubs at the same time. To do so, you must indicate the IP address of each hub separated by the symbol `|``.

Then click on the button **Configuration files** to generate *(or update)* the file (s) containing all the information on the devices associated with each Harmony hub.

## Equipment configuration

To access the different equipment, go to the menu **Plugins → Multimedia → Harmony Hub**.

>**INFORMATION**
>
>The + Add button allows you to add a new Harmony Hub device.

For each device, we find the usual general parameters as well as 2 drop-down menus allowing, for one, to select the hub concerned by the device and for the other to choose the type of device among :

- **Activities** : Equipment bringing together all your activities as well as
    general power off and information on current activity.

- **One of your devices** : Equipment bringing together all
    commands for a given device.

Once selected, just click on the button **Save** to automatically generate the list of corresponding commands :    

![harmonyhub screenshot4](../images/harmonyhub_commands.jpg)

# Commandes

The commands are not visible by default, they are
however all available via scenario, virtual, etc

If you want to display them on your dashboard, just reorganize them into
drag & drop and tick the box **Display**. You can then, playing with newlines, specific widgets or icons
proposed, create a remote control pseduo :

![harmonyhub screenshot5](../images/harmonyhub_screenshot5.jpg)
![harmonyhub screenshot6](../images/harmonyhub_screenshot6.jpg)

# Important information

Since 19-02-2019 it is necessary **activate a developer option** in the Harmony app.

See this Logitech link :
<https://community.logitech.com/s/question/0D55A00008OsX3CSAV/update-to-accessing-harmony-hubs-local-api-via-xmpp>
