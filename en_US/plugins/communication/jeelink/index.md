# Jeelink plugin 

Plugin used to link 2 Jeedoms

# Principle of operation 

The plugin *Jeedom Link* (also called jeelink) allows the ascent of one or more equipment (s) from one Jeedom to another.

![jeelink1](./images/jeelink1.png)

> **Important**
>
> The plugin must be installed on all Jeedoms, Source and Target.

> **Tip**
>
> For a good understanding, it is important to understand the following few terms : **Jeedom Source** : Jeedom server on which the equipment to be reassembled on the **Jeedom Target** **Jeedom Target** : Jeedom server which will receive the equipment reassembled by the) **Jeedom (s) Source (s))** The **Jeedom Target** centralize this equipment and that of all) **Jeedom (s) Source (s))** configured).**Assignment** : configuration performed on the **Jeedom Source** to include the equipment that will be reassembled on the **Jeedom Target**

> **NOTE**
>
> For a better reading and understanding of this tutorial : The screenshots on a black background correspond to the **Jeedom Target**.The screenshots on a white background correspond to **Jeedom Source**.\

# Plugin configuration 

After installation, you just need to activate the plugin. This does not require any specific configuration.

# Configuration of target jeedoms 

From the **Jeedom Source**, once on the plugin page (by going to Plugin management → Communication → Jeedom link), you just have to click on "Configure the target Jeedoms".

A window will appear and from there you can configure or add **Jeedom (s) Target (s))**.

To add a **Jeedom Target**, just give :

-   The name of **Jeedom Target**.
-   The IP address or DNS name of the **Jeedom Target**.
-   The API key of **Jeedom Target**.
-   Indicate whether the communication is internal or external (used for feedback, from **Jeedom Source** to the **Jeedom Target**). And save the configuration.

![jeelink2](./images/jeelink2.png)

> **Important**
>
> It is necessary **ABSOLUTELY** the network configurations of all Jeedoms (Source and Target) are OK otherwise the plugin will not work.

# Equipment allocation 

After performing the configuration of the **Jeedom Target** On your **Jeedom Source**, you have to go to the tab *Assignment* to specify the equipment to be transmitted to **Jeedom Target**. All equipment orders will be automatically created and configured on the **Jeedom Target**.

In the tab *Assignment*, add the equipment you want to go back to the **Jeedom Target**.

![jeelink3](./images/jeelink3.png)

Click on *Add equipment* Select the object and equipment to add :

![jeelink5](./images/jeelink5.png)

> **Tip**
>
> Be careful : plugins with a specific widget will not have it on the **Jeedom Target** (camera, network plugin…).

> **Important**
>
> The deletion of the equipment on the configuration page of the **Target Jeedoms** does not automatically delete it on the **Jeedom Source**, this is voluntary and not a bug (it is a security).

# "My jeelinks" equipment" 

After refreshing the page *My jeelinks* from **Jeedom Target**, you should see the automatic creation of the equipment :

![jeelink4](./images/jeelink4.png)

Like all Jeedom equipment, you can activate / deactivate and display or not the equipment, its controls,… or change the category. But also

![jeelink6](./images/jeelink6.png)

In the tab *Commands*, you access all the parameters of the equipment controls :

![jeelink7](./images/jeelink7.png)

# Modifying the Jeedom Source of a JeeLink 

The following 3 parameters allow you to change the Jeedom Source, for example when replacing a Jeedom without losing data (history for example). For that, you just have to put the new address and API key of the Jeedom Source and to change the identifiers of the equipment and the commands (you will find them in the advanced configuration of these by clicking on the toothed wheel).

-   Jeedom Source address;
-   Jeedom Source API key;
-   Source equipment and order IDs.

# Old Slave Mode Migration

A tutorial is available, [here](https://jeedom.github.io/documentation/howto/en_US/jeelink.migration.html) specifying the procedure to follow to migrate a Jeedom Slave to the new Jeedom Link operating mode.

# FAQ 

>**When deleting equipment on the source jeedom these are not deleted from the target jeedom**
>
>This is normally the source / target synchronization only creates creation, never deletion
