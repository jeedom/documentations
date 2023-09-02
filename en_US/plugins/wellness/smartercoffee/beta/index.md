# Smartcoffee plugin

# Description

This plugin allows you to manage your Smarter coffee makers (only V1, not the ifttt compatible version).

# Plugin configuration

After installing the plugin, just activate it. If the outbuildings are OK, enter the ip of your coffee maker and save. Logically the equipment will create itself.

# Equipment configuration

The configuration of Smarter Coffee equipment is accessible from the plugins menu then Comfort. You will find here :

-   a button to display the configuration of the plugin
-   a button that gives you an overview of all your equipment
-   finally below you find the list of your equipment

By clicking on one of your equipment you arrive on the configuration page of your equipment including 2 tabs, equipment and controls.

-   **Equipment tab** :
-   **Name of equipment** : name of your equipment.
-   **Parent object** : indicates the parent object to which the equipment belongs.
-   **Category** : to select the equipment category.
-   **Activate** : makes your equipment active.
-   **Visible** : makes it visible on the dashboard.
-   **Orders Tab** :
    -  Here you will find all the commands (some being dedicated only to the scenario).

#  For the command Run personal mode for scenario :

The force field must contain a value from 1 to 3 which corresponds to the force The other field when it needs  :
- Number of cups (1-12);
- ``g`` for grains or ``f`` for filter;
- heating time

>**Example**
> ``12;f;30``
