# Wes plugin

Plugin allowing to use the WES server of CartElectronics, in order to follow in particular its energy consumption.

# Configuration of the Wes

After installing the plugin, you just need to activate it :

![mobile1](../images/configuration.png)

**Configuration**

To configure the plugin, you must first add the WES.

To add a wes : **Plugins** → **Domotic protocol** → **Wes** → **Add**

![mobile2](../images/ajouter.png)

Here are the parameters to enter :

-   **Name of your WES** : Name of the Wes which will be displayed
-   **Activate** : Activation of the Wes
-   **Wes IP** : inform the WES access ip
-   **Wes File** : you have to put "general" if it's a wes configuration.
-   **Port of Wes** : leave blank if you have not changed this in the WES configuration.
-   **Wes account** : put the login of the Wes account (originally it is "Admin").
-   **Wes password** : put the password of the Wes account (originally it is "wes").

> **Tip**
>
> If you want to change this information you must first go to the WES interface to modify it.

![mobile3](../images/wesGlobal.png)

After saving, you will get a multitude of modules: you just need to activate the ones you want.

![mobile4](../images/wesGlobalView.png)

> **Tip**
>
> The grayed modules are not monitored by the plugin, they must be activated for that.

# WES relay configuration

After initialization of the WES Plugin, you can click on the key (see below)).

![mobile5](../images/wesGlobalRelais.png)

By clicking on this key a modal window is displayed: select the desired relays and buttons, then validate. Scenarios will be created automatically on the WES in order to receive real-time feedback from buttons and relays (for other feedback, go to the general plugin settings.)

![mobile6](../images/wesGlobalView.png)
