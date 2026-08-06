# DynDNS plugin

This plugin allows you to update a dynamic DNS service (dyndns, noip, duckdns,)

# Plugin configuration 

After downloading the plugin, you just need to activate it, there is no configuration at this level.

![dyndns](../images/dyndns.PNG)

# Equipment configuration 

The configuration of Dyndns equipment is accessible from the plugin menu :

![dyndns2](../images/dyndns2.PNG)

This is what the Dyndns plugin page looks like (here with already 1 device) :

![dyndns3](../images/dyndns3.PNG)

Once you click on one of them, you get :

![dyndns4](../images/dyndns4.PNG)

Here you find all the configuration of your equipment :

-   **Name of Dyndns Equipment** : name of your DynDns equipment,
-   **Parent object** : indicates the parent object to which the equipment belongs,
-   **Category** : equipment categories (it can belong to several categories),
-   **Activate** : makes your equipment active,
-   **Visible** : makes your equipment visible on the dashboard,
-   **Service** : The name of the service used (dyndns.org, noip.com)
-   **Hostname** : full name of the DNS to update (e.g. toto.ddns.net)
-   **Username** : username on the service in question
-   **Password** : password on the service in question
-   **Token** : token used for duckdns
-   **IPv6** : Your **Service** supports IPv6. Select if you want to update your entry **Hostname** AAAA type.

Below you find the list of orders :

-   **Name** : the name displayed on the dashboard,
-   **Show** : allows to display the data on the dashboard,
-   **Test** : Used to test the command

> **NOTE**
>
> Jeedom will check the external ip every 15 minutes, if it has changed then the DNS will be updated

> **Important**
>
> The plugin provides a command to force the update. Be careful not to abuse it because you can be temporarily banned from the DNS service

> **NOTE**
>
> If you use OVH, be careful the username is in the world form.com-identifier while the domain is in the form my-dynHost.mmondomaine.com

> **IPv6**
>
> You must have configured in your **Service** an AAAA-type DNS entry for your **Hostname**.
> All **Service** do not support or provide information for IPv6.