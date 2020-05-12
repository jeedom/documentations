# Phone Market plugin

Plugin for sending SMS and making calls with automatic messages from Jeedom.

> **Important**
>
> This plugin goes through the market so it is a cloud service that requires an internet connection to function.

> **Tip**
>
> The plugin works on a credit system, 1 SMS = 1 credit for France otherwise 2 credits, 1 call = 2 credits for France otherwise 4 credits. You can check your credit [here](http://market.jeedom.fr/index.php?v=d&p=profils&tab=sms). In case of low credits (less than 5), an email will be sent to you.

> **Important**
>
> Text messages are limited to 140 characters and calls to 450 characters.

# Plugin configuration 

After downloading the plugin, you just need to activate it, there is no configuration at this level.

![phonemarket1](./images/phonemarket1.PNG)

# Equipment configuration 

The configuration of Phonemarket equipment is accessible from the plugin menu :

![phonemarket2](./images/phonemarket2.PNG)

This is what the Phonemarket plugin page looks like (here with 1 device already) :

![phonemarket3](./images/phonemarket3.PNG)

Once you click on one of them, you get :

![phonemarket4](./images/phonemarket4.PNG)

Here you find all the configuration of your equipment :

-   **Name de l'équipement Phonemarket** : name of your Phonemarket equipment,
-   **Parent object** : indicates the parent object to which the equipment belongs,
-   **Activate** : makes your equipment active,
-   **Visible** : makes your equipment visible on the dashboard.

Below you find the list of orders :

-   **Name** : the name displayed on the dashboard,
-   **Type** : type of order (calls or sms),
-   **Number** : telephone number to be called or to whom an SMS should be sent (depending on the type),
-   **Test** : Used to test the command,
-   **Delete** (sign -) : allows to delete the command.
