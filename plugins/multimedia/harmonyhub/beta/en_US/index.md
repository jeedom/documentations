# Harmony Hub plugin

This plugin allows you to control and retrieve all devices associated with one or more Harmony Hubs.

After gathering all the information about these devices, the plugin will be able to automatically create all the associated commands for full control from Jeedom.

# Setup

Like any Jeedom plugin, the **Harmony Hub** plugin must be enabled after installation.

## Plugin configuration

The plugin uses dependencies that must be installed first by clicking the **Reload** button.

Once the dependencies are installed, you can enter the IP address where the Harmony Hub can be reached.

>**TIP**
>
>The plugin can communicate with multiple hubs at the same time. To do this, you’ll need to specify the IP address of each hub, separated by the symbol `|`.

Save the configuration and start the daemon.

## Equipment configuration

To access the various devices, go to the **Plugins → Multimedia → Harmony Hub** menu.

If the plugin is configured correctly, all your devices will have been automatically created along with their commands.

For each device, you'll find the usual general settings as well as a drop-down menu that lets you choose the device's icon. This configuration is optional and does not affect the plugin's behavior in any way.

# Important information

Check to see if you need to **enable the developer option** in the Harmony app.

See this link from Logitech:
<https://community.logitech.com/s/question/0D55A00008OsX3CSAV/update-to-accessing-harmony-hubs-local-api-via-xmpp>
