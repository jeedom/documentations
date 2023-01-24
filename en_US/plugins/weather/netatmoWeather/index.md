# Netatmo Weather plugin

Plugin to retrieve information from weather stations Netatmo.

# Plugin configuration

Once the plugin is installed, you need to enter your Netatmo connection information :

![netatmoWeather2](./images/netatmoWeather2.png)

-   **Client ID** : your client ID (see configuration section)
-   **Client secret** : your secret client (see configuration section)
-   **Username** : username of your netatmo account
-   **Password** : password for your Netatmo account
-   **Synchronize** : allows you to synchronize Jeedom with your Netamo account to automatically discover your Netamo equipment. To do after saving the previous parameters.

# Retrieving connection information

Pour intégrer votre station, vous devez posséder un client\_id et unclient\_secret généré sur le site <http://dev.netatmo.com>.

Pour créer un compte > https://auth.netatmo.com/fr-fr/access/signup?next_url=https%3A%2F%2Fdev.netatmo.com%2Fbusiness-showcase

Once on click on start :

![netatmoWeather10](./images/netatmoWeather10.png)

Then on "create an app"

![netatmoWeather11](./images/netatmoWeather11.png)

Identify yourself, with your email and password

![netatmoWeather12](./images/netatmoWeather12.png)

Fill in the "Name" and "Description" fields (whatever you put it doesn't matter) :

![netatmoWeather13](./images/netatmoWeather13.png)

Then at the very bottom of the page check the box "I accept the terms of use" then click on "Create"

![netatmoWeather14](./images/netatmoWeather14.png)

Retrieve the "Client id" and "Client secret" information and copy them in the configuration part of the plugin in Jeedom (see previous chapter)

![netatmoWeather15](./images/netatmoWeather15.png)

> **Important**
>
> Please note that the callback url must be "None" otherwise it will not work.

# Equipment configuration

The configuration of Netatmo equipment is accessible from the menuplugin :

![netatmoWeather3](./images/netatmoWeather3.png)

This is what the Netatmo plugin page looks like (here with already 2 equipment) :

![netatmoWeather4](./images/netatmoWeather4.png)

> **Tip**
>
> As in many places on Jeedom, placing the mouse to the far left brings up a quick access menu (you can from your profile always leave it visible).

Once you click on a piece of equipment you get :

![netatmoWeather5](./images/netatmoWeather5.png)

Here you find all the configuration of your equipment :

-   **Name of the Netatmo device** : name of your Netatmo equipment
-   **Parent object** : indicates the parent object to which the equipment belongs
-   **Activate** : makes your equipment active
-   **Visible** : makes it visible on the dashboard
-   **Login** : unique equipment identifier
-   **Type** : type of your equipment (station, indoor probe, outdoor probe)

Below you find the list of orders :

-   the name displayed on the dashboard
-   Historize : allows to historize the data
-   Advanced configuration (small notched wheels) : displays the advanced configuration of the command (logging method, widget, etc.))
-   Test : Used to test the command

# Widget

Here is the standard widget for a station on the dashboard :

![netatmoWeather6](./images/netatmoWeather6.png)

And on mobile :

![netatmoWeather7](./images/netatmoWeather7.png)

# FAQ

>**What is the refresh rate ?**
>
>The system retrieves information every 15 min.

>**I have my probes but no value that goes back**
>
>It happens when there is a problem listed update on modules or Netatmo. The easiest way is to Add / Remove a module and to follow the process it will force an update of everything and should correct the problem.
