# Nut Plugin

This plugin allows you to retrieve information from a NUT server (Network UPS Tools)

## Plugin configuration

After downloading the plugin, you just have to activate it and install the dependencies by clicking on "Relaunch"

## Equipment configuration

The configuration of NUT equipment is accessible from the plugin menu :

![nut2](./images/nut2.PNG)

This is what the NUT plugin page looks like (here with already 1 device) :

![nut3](./images/nut3.PNG)

Once you click on one of them, you get :

![nut4](./images/nut4.PNG)

Here you find all the configuration of your equipment :

- **Equipment name** : name of your NUT equipment,
- **Parent object** : indicates the parent object to which the equipment belongs,
- **Category** : category of your NUT equipment
- **Activate** : makes your equipment active,
- **Visible** : makes your equipment visible on the dashboard,
- **Nut Ip address** : The IP address of the NUT server
- **Username** : NUT server username (leave blank if there is none)
- **Password** : NUT server password (leave blank if there is none)
- **UPS Id** : UPS Id

> **Ratings**
>
> A NUT server can manage several UPSs, it is then the UPS ID which lets Jeedom know which UPS the equipment is referring to
>
> If you do not know the ID of your UPS (s) leave the field empty then register the equipment, Jeedom will automatically fill in the ID field of the UPS and create as much equipment as you have UPS on your NUT server.
>
> If your NUT server is on a Synology NAS, the username is' monuser ', the password' secret 'and the ID' ups'. Although leaving the area empty the plugin fills it in most cases.

## Configuring commands

In the second tab you find the list of orders, the plugin will create most of the orders automatically according to the information received from the NUT server.

> **Important**
>
> The commands created can be different depending on the installation, it depends on what the NUT server sends back

If your UPS returns information that is not (yet) supported by the plugin, you can manually add an order to your equipment.

- Click on the button *Add an order*
- Enter a name
- Choose the subtype (Numeric, binary or other)
- In the field *Setup* you must enter the name of the value as returned by the NUT server, the information is visible in the log in DEBUG mode.

> **Important**
>
> Do not modify the configuration of the commands created automatically by the plugin.
