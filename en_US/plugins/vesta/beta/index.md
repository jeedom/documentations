# Vesta-Plugin

#Description

Plugin to manage your Vesta central



# Plugin Setup

After downloading the plugin, you must first activate it, like any Jeedom plugin :

![config](./images/vestaActiv.png)

Then, you have to start the installation of the dependencies (even if they appear OK) :

![dependances](./images/vestaDep.png)

Finally, start the daemon :

![demon](./images/vestaDemon.png)

You can modify the port of the listening socket for Events coming from the central

![socket](./images/vestaConfig.png)







# Use of the plug-in


IMPORTANT :

To receive Events from your central, you must configure the panel of the latter. 
On the latter, accessible via the local IP of the central on your browser, you must go to Systeme Setting, then Report


And modify the following url :

![urlpanel](./images/vestapanel.png)

Replace the ip with the local ip of your jeedom, and the port with the one you configured in the plugin

Choose a group different from the other reporting urls

Remember to set Essential, and No Retry

Sauvegardez

![essential](./images/vestapanel2.png)






In your plugin, once the configuration has been completed, you simply have to click on Synchronize to automatically create the equipment corresponding to the Partitions and Zones created in the webInterface of your control unit

The equipment (sensor, IR detector etc..) configured and assigned to the zones in the web interface, will have commands automatically created in the corresponding zones.