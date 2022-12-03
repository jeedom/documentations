# Nut Plugin

This plugin allows you to retrieve information from a NUT server (Network UPS Tools)

# Plugin configuration 

After downloading the plugin, just activate it and then click on "Install / Update"

![nut](./images/nut.PNG)

# Equipment configuration 

The configuration of NUT equipment is accessible from the plugin menu :

![nut2](./images/nut2.PNG)

This is what the NUT plugin page looks like (here with already 1 device) :

![nut3](./images/nut3.PNG)

Once you click on one of them, you get :

![nut4](./images/nut4.PNG)

Here you find all the configuration of your equipment :

-   **Inverter equipment name** : name of your NUT equipment,
-   **Parent object** : indicates the parent object to which the equipment belongs,
-   **Activate** : makes your equipment active,
-   **Visible** : makes your equipment visible on the dashboard,
-   **Category** : category of your NUT equipment
-   **Nut Ip address** : The IP address of the NUT server
-   **Username** : NUT server username (leave blank if there is none)
-   **Password** : NUT server password (leave blank if there is none)
-   **UPS Id** : UPS Id

> **NOTE**
>
> A NUT server can manage several UPSs, it is then the UPS ID which lets Jeedom know which UPS the equipment is referring to

> **Tip**
>
> If you do not know the ID of your UPS (s) leave the field empty then register the equipment, Jeedom will automatically fill in the ID field of the UPS and create as much equipment as you have UPS on your NUT server.

Below you find the list of orders :

-   **Name** : the name displayed on the dashboard,
-   **Show** : allows to display the data on the dashboard
-   **Test** : Used to test the command,

> **Important**
>
> The commands created can be different depending on the installation, it depends on what the NUT server sends back

> **Tip**
>
> If your NUT server is on a Synology NAS, the username is' monuser ', the password' secret 'and the ID' ups'. Although leaving the area empty the plugin fills it in most cases.
