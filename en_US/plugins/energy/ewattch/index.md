# Ewattch plugin 

This plugin allows you to establish and retrieve information from the Ewattch supervisor.

# Plugin configuration 

After downloading the plugin you need to activate it, you then have access to the basic configuration of the plugin :

![ewattch1](./images/ewattch1.PNG)

Here you find the basic configuration :

-   **IP du superviseur** : Supervisor's IP on the network
-   **Synchronize** : Synchronize the list of equipment on the supervisor with Jeedom

# Equipment configuration 

The configuration of Ewattch equipment is accessible from the Plugins menu :

![ewattch2](./images/ewattch2.PNG)

This is what the Ewattch plugin page looks like (here with some equipment already) :

![ewattch3](./images/ewattch3.PNG)

Once you click on one of them, you get :

![ewattch4](./images/ewattch4.PNG)

Here you find all the configuration of your equipment :

-   **Name of equipment** : name of your Ewattch equipment,
-   **Parent object** : indicates the parent object to which the equipment belongs,
-   **Activate** : makes your equipment active,
-   **Visible** : makes it visible on the dashboard,
-   **Category** : equipment categories (it can belong to several categories),
-   **ID** : Logical ID of the equipment in the supervisor (it is recommended not to touch it),
-   **IP** : Supervisor's IP (for information only).

Below, you will find the configuration of the equipment :

-   the name displayed on the dashboard,
-   the subtype,
-   Logical ID of the order in the supervisor (it is recommended not to touch it),
-   Historize : allows to historize the data,
-   Show : allows to display the data on the dashboard,
-   Unit : data unit (can be empty),
-   min / max : data bounds (may be empty),
-   advanced configuration (small notched wheels) : displays the advanced configuration of the command (logging method, widget, etc.),
-   Test : Used to test the command,
-   delete (sign -) : allows to delete the command.


