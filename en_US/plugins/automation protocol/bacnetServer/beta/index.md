# BacnetServer

#Description

The Bacnet plugin allows you to create a Bacnet equipment of your Jeedom to be seen on the network



# Plugin Setup

After downloading the plugin, you must first activate it, like any Jeedom plugin :

![config](../images/BacnetServerConfig.png)

Then, you have to start the installation of the dependencies (even if they appear OK) :

![dependances](../images/BacnetServerDep.png)

Finally, start the daemon :

![demon](../images/BacneServerDemon.png)


Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/BacnetServerConfig.png)


In this same tab, you must choose the Cron value for updating your equipment.




# How the plugin works ?




>**IMPORTANT**
>
>Your BACNET equipment must be on the same network as your Jeedom to be detected by it.


By default, a jeeBacnetServer device is created; it is this 'bacnet' device that will be seen by your Bacnet supervisor on the network

You can configure its deviceId in the plugin configuration

![menu](../images/BacnetServerConfig.png)


To add Jeedom commands to your jeeBacnetServer, click Add Commands to Server :

![accueil](../images/BacnetServerAccueil.png)


A modal will open, where all the Info type commands present in the different plugins of your jeedom will appear.


>**IMPORTANT**
>
>Your equipment must be Active for commands to be detected on this modal.


You must add the Bacnet unit you want injected into the Bacnet instance. Attention, it is absolutely necessary to have the same syntax as the units available in the list of units, available by clicking on View List Units
You must also name the order, by filling in the field provided for this purpose. 
Do not put spaces in the command name

![syntaxUnites](../images/BacnetServerList.png)

![syntaxCmds](../images/BacnetServersyntax.png)

All you have to do is search for the ones you want, and Validate.


![accueil](../images/BacnetServerModale.png)


The bacnet device with the instanceId you have chosen will be created, and appear on your network.


To update the values you need to configure the cron in the plugin configuration.

![accueil](../images/BacnetServerConfig.png)



To delete commands from the Server, you must go to the commands of the equipment, and simply Delete the ones you want then save.



You can also delete the device from the network, as well as its bacnet points by clicking on Delete the jeeBacnetServer.


![accueil](../images/BacnetServerReinit.png)




# Orders Setup :


To change the unit of bacnet points, and see them appear on the network, you must enter the unit in the field provided for this purpose on the orders.

On the bacnet network, the instances of the points will use the names of the commands specified in the field on the Additions of commands modal.



A postcalculation function is also provided : 
if you choose to fill in this postCalcul, then the value injected into the deviceBacnet will have taken the initial value to be uploaded with the specified calculation

You can for example :

#value# * 10


This will take the initial value of the command uploaded, then multiply it by 10 before updating it in the jeeServer instance

Example :

![accueil](../images/BacnetServerPost.png)



>**IMPORTANT**
>
>You will find all the existing commands on the jeeServer on the plugin screen, by clicking on Cmds JeeServer


![accueil](../images/BacnetServerAccueil.png)

![cmdExist](../images/BacnetServerCmdsExit.png)


# Import/Export the jeeBacnetServer :


![accueil](../images/BacnetServerAccueil.png)

To prevent needs, 2 options are provided : 


- Export device :

By clicking on this button, it will download a Json file containing the configuration of the device as well as its commands.


- Import device :

By clicking on this button, you can import the jeeBacnetServer configuration json file that you would have downloaded, to use the commands that were configured in this one