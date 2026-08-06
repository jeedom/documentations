# Click Link plugin

This plugin allows the management of links and events directly on the Jeedom interface. You can, for example, create a command that opens a modal (dialog window) with a view containing your cameras. This allows when someone rings your doorbell to display the entrance camera on your Jeedom.

# Plugin configuration

After downloading the plugin, just activate it, there is no configuration at this level.

![clink1](../images/clink1.PNG)

# Equipment configuration

The configuration of Clink equipment is accessible from the menu **Plugins** :

![clink2](../images/clink2.PNG)

This is what the plugin page looks like **Clink** (already with 1 equipment) :

![clink3](../images/clink3.PNG)

Once you click on one of them, you get :

![clink4](../images/clink4.PNG)

Here you find all the configuration of your equipment :

-   **Clink equipment name** : Clink equipment name.
-   **Parent object** : indicates the parent object to which the equipment belongs.
-   **Activate** : makes your equipment active.
-   **Visible** : makes your equipment visible on the dashboard.

Below you find the list of orders :

-   **Name** : the name displayed on the dashboard,
-   **Fashion** : the display mode of the element (in a modal, in a new window or in the current window)

   > **NOTE**
   >
   > In mobile "new window" and "current window" do the same thing : open link in current window.

-   **Type** : type of element to open (view, design, panel or URL).
-   **Name** : option depending on the item selected to open.
-   **User filter** : allows to filter to open the element only if it is this user who is connected.

-   **Page filter** : allows you to filter to open the element only if you are on the page mentioned.

    > **NOTE**
    >
    > In mobile version this option does nothing

-   **Interface filter** : allows to filter to open the element only in mobile / desktop version or on both.
-   **Show** : allows to display the data on the dashboard.
-   **Test** : Used to test the command.
-   **Delete** (sign -) : allows to delete the command.

> **Important**
>
> It is important not to open the same view on itself, ditto for the designs !

> **Important**
>
> In mobile the opening of a URL cannot be done in a modal as for the designs.

> **Important**
>
> Not all URLs can be opened in modal, it depends on the site *(Ex : google.fr cannot be opened in a modal)*. Attention also if you are in https, it is absolutely necessary that the site to open in modal is in https.
