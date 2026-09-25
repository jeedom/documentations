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

Save the configuration and Start the daemon.

## Equipment configuration

To access the different equipment, go to the menu **Plugins → Multimedia → Harmony Hub**.

If the plugin configuration is correct, all your equipment will have been created automatically with their commands.

For each piece of equipment we find the usual general parameters as well as a drop-down menu allowing us to choose the device icon. This configuration is optional and does not influence the behavior of the plugin in any way.

# Important information

Check if you need to **enable developer option** in the Harmony app.

See this Logitech link :
<https://community.logitech.com/s/question/0D55A00008OsX3CSAV/update-to-accessing-harmony-hubs-local-api-via-xmpp>
