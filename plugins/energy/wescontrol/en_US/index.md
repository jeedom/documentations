# WES Control plugin

This plugin will allow you to take control of your [**CartElectronic WES energy server**](https://www.cartelectronic.fr/content/8-serveur-wes){:target = "\_ blank"} and recover all the data instantly in Jeedom.

![Visuel Wes](../images/wes.png)

>**IMPORTANT**
>
>This material being in constant evolution, the plugin in stable version offers full compatibility with Wes servers with firmware lower than `V0.84A10` and the beta version with firmware greater than or equal to `V0.84A10`.

>
>The team is already working on the integration of the currently unsupported Wes extensions such as the 8 relay or modbus extension and will do its best to develop the plugin in this direction as soon as possible.

# General configuration

## Plugin configuration

Like any Jeedom plugin, the plugin **Wes control** must be activated after installation.

The plugin **Wes control** uses its own daemon in order to stay in constant contact with the Wes server. You can check the status on the plugin configuration page.

>**INFORMATION**
>
>It is not necessary to worry about the state of the daemon as soon as the plugin is activated because the creation of the 1st Wes server equipment will automatically configure and start the daemon.

The plugin does not require any particular configuration but offers a field allowing to choose the delay in seconds between 2 interrogations of the Wes server. *(30 seconds by default)*

>**IMPORTANT**
>
>If you decrease this value and experience system sluggishness or instability, revert to the default value *(30)*.

## Configuration of the Wes server equipment

To access the different equipment **Wes control**, go to the menu **Plugins → Energy → Wes Control**.

![Accueil du plugin](../images/wescontrol_navigate.png)

>**INFORMATION**
>
>The button **+ Add** allows you to add a new Wes server.

After having created your Wes server equipment, click on it to access the access configuration as well as the equipment / functionalities management.

Fill in the general information of the equipment then indicate whether you have optional equipment connected to the Wes such as a screen or a 9-volt power supply for measuring the mains voltage by checking the corresponding boxes.

Then, fill in the access information to the Wes server in HTTP in order to be able to communicate with him :
- **Wes's IP** : IP address on which the Wes server can be reached.
- **Port of the Wes** *(facultatif)* : port on which the Wes server can be reached *(80 by default)*.
- **HTTP ID** : identifier used to communicate in HTTP with the Wes server.
- **HTTP password** : password used to communicate in HTTP with the Wes server.

The plugin **Wes control** includes a file specially designed for Jeedom and allowing access to more data than those normally available by default. It is necessary to establish an FTP connection with the Wes server to transfer this file, the following fields must therefore be completed as well :
- **FTP ID** : identifier used to communicate in FTP with the Wes server.
- **FTP password** : password used to communicate in FTP with the Wes server.
- **Jeedom CGX file** : check the box to use the Jeedom CGX file.
- **Send CG fileX** : Once the FTP connection information has been entered, click on this button to immediately transfer the file to the Wes.

>**INFORMATION**
>
>Connection information to the Wes server can be viewed from the Wes internet interface in the menu **Configuration → Secure access**.

## Equipment / functionality management

The part **Equipment management** will allow you to select the features of the Wes to activate / deactivate.

Each **box checked** will result in **automatic creation of the corresponding equipment**, and conversely, **each box unchecked** will result in **automatic deletion of the corresponding equipment** :

![Equipment management](../images/wescontrol_generalManage.png)

# Equipment / functional configuration

Back to the plugin's general page **Wes control**, previously activated devices are grouped by server and sorted in accordion menus classified by type of functionality.

The search field allows immediate visualization of the required equipment. On the right, the cross-shaped icon cancels the search, the open folder unfolds all the menus and the closed folder folds the whole.

![Navigation dans les équipements](../images/wescontrol_screenshot1.png)

>**TRICK**
>
>It is possible to reorganize each menu in the list by remaining clicked on it while positioning it at the desired location.

As usual, clicking on an item of equipment takes you to its configuration page, allowing you to enter general information and view the list of orders.

## Optional equipment parameters

Some devices have additional configuration parameters that must be entered when activating them.

These parameters can be the type of measurement to be taken for current clamps *(consumption or production)* or the electric subscription formula concerning teleinfo for example.

Others may relate to the selection of a specific type of hardware in order to customize the illustrative images of the equipment such as the type of pulse meter *(water, gas, gas)* or the type of current clamp used *(20 Amps or 100 Amps)* among others.

## WES interface

On each equipment page (including the Wes server equipment) there is, at the top right, a blue button named **Wes interface** which allows you to open the web interface of the Wes server in a new tab of your browser.

Depending on the type of equipment you are on, you will be automatically redirected to the interface page corresponding to this feature.

# Upcoming developments

The team is already working on the integration of the currently unsupported Wes extensions such as the 8 relay or modbus extension and will do its best to develop the plugin in this direction as soon as possible.
