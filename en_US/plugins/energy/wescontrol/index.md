# WES Control plugin

This plugin will allow you to take control of your [**CartElectronic WES Energy Server**](https://www.cartelectronic.fr/content/8-serveur-wes){:target="\_blank"} and retrieve all the data instantly in Jeedom.

![Wes Visual](../images/wes.png)

>**IMPORTANT**
>
>The plugin is compatible with Wes servers running firmware `V0.84A10` minimum. For earlier versions, there is [the less-than-V0.84A10 branch](https://github.com/jeedom/plugin-wescontrol/tree/less-than-V0.84A10) can be installed from GitHub.

>
>The team is already working on integrating Wes extensions that are currently unsupported, such as the 8-relay or Modbus extensions, and will do its best to update the plugin accordingly as soon as possible.

# General configuration

## Plugin configuration

Like any Jeedom plugin, the **Wes Control** plugin must be enabled after installation.

The **Wes Control** plugin uses its own daemon to maintain constant communication with the Wes server. You can check its status on the plugin's configuration page.

>**INFORMATION**
>
>You don't need to worry about the daemon's status once the plugin is activated, because creating the first Wes server device will automatically configure and start the daemon.

The plugin does not require any special configuration but provides a field where you can select the interval in seconds between two queries to the Wes server. *(30 seconds by default)*

>**IMPORTANT**
>
>If you lower this value and notice that the system is running slowly or becoming unstable, revert to the default value *(30)*.

## Configuration of the Wes server equipment

To access the various **Wes Control** devices, go to the **Plugins → Energy → Wes Control** menu.

![Plugin Home Page](../images/wescontrol_navigate.png)

>**INFORMATION**
>
>The **+ Add** button lets you add a new Wes server.

After creating your Wes server device, click on it to access the access settings and device/feature management.

Enter the general information about the device, then indicate whether you have any optional equipment connected to the Wes—such as a display or a 9-volt power supply for measuring line voltage—by checking the corresponding boxes.

Next, enter the HTTP access credentials for the Wes server so you can communicate with it:
- **Wes IP**: the IP address at which the Wes server can be reached.
- **Wes Port** *(optional)*: the port on which the Wes server is accessible *(80 by default)*.
- **HTTP ID**: an identifier used to communicate with the Wes server via HTTP.
- **HTTP Password**: The password used to communicate with the Wes server via HTTP.

The **Wes Control** plugin includes a file specifically designed for Jeedom that provides access to more data than is normally available by default. You must establish an FTP connection with the Wes server to upload this file; therefore, the following fields must also be filled out:
- **FTP username**: the username used to communicate with the Wes server via FTP.
- **FTP password**: the password used to connect to the Wes server via FTP.
- **Jeedom CGX File**: Check the box to use the Jeedom CGX file.
- **Upload CGX File**: Once you have entered your FTP login information, click this button to immediately upload the file to the web.

>**INFORMATION**
>
>The Wes server login credentials can be viewed from the Wes web interface under the **Configuration → Secure Access** menu.

## Equipment / functionality management

The **Device Management** section allows you to select which Wes features to enable or disable.

Each **checked box** will result in the **automatic creation of the corresponding device**, and conversely, **each unchecked box** will result in the **automatic deletion of the corresponding device**:

![Equipment management](../images/wescontrol_generalManage.png)

# Equipment / functional configuration

Back on the **Wes Control** plugin's main page, the devices previously enabled are grouped by server and organized into accordion menus sorted by feature type.

The search field allows you to immediately view the equipment you're looking for. On the right, the cross icon cancels the search, the open folder icon expands all menus, and the closed folder icon collapses them all.

![Browse Devices](../images/wescontrol_screenshot1.png)

>**TIP**
>
>You can rearrange each menu in the list by holding down the mouse button and dragging it to the desired location.

As usual, clicking on a device takes you to its configuration page, where you can enter general information and view the list of commands.

## Optional equipment parameters

Some devices have additional configuration settings that you'll need to enter when activating them.

These settings may include the type of measurement to be recorded for current clamps *(consumption or generation)* or the electricity service plan regarding remote data collection, for example.

Others may involve selecting a specific type of equipment in order to customize the illustrative images of the devices, such as the type of pulse meter *(water, gas, Gazpar)* or the type of current clamp used *(20 amps or 100 amps)*, among other things.

## WES interface

On each device page (including the Wes server page), there is a blue button labeled **Wes Interface** in the upper-right corner that opens the Wes server's web interface in a new tab in your browser.

Depending on the type of device you are using, you will be automatically redirected to the interface page corresponding to this feature.

# Upcoming developments

The team is already working on integrating currently unsupported Wes extensions, such as the 8-relay or Modbus extensions, and will do its best to update the plugin accordingly as soon as possible.
