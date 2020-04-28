We will see here how to migrate an installation with Jeedom in mode
slave to a Jeedom with the Jeedom Link plugin". Slave mode
Jeedom being abandoned at the transition from Jeedom to toion 3.0 it is
necessary to proceed before migration to the new mode of
operation.

Preparation before migration 
===========================

> **Warning**
>
> It is important to read all of this documentation before
> gand started in migration. IMPORTANT information about
> update, backup and recovery requirements
> of information are essential for the proper understanding of
> the operation to be carried out. Refraining from reading this documentation may
> lead to destructive operations on your installation. If you
> do not understand a point, do not hesitate to ask questions about the
> forum before starting the procedure !

> **IMPORTANT**
>
> Be careful not to loop equipment in
> configuring the Jeedom Link plugin". For example do not make a
> Equipment-X in a Jeedom1 which goes up in a Jeedom2 then goes up
> again in Jeedom1. It could drop your Jeedoms !

> **NOTE**
>
> For a bandter reading and understanding of this tutorial, here are the
> terms used :\
> \
> - **Jeedom Targand** : Server (your former Jeedom Master) who
> centralize the equipment of the **Jeedom (s) Source (s)**\
> The screenshots on a black background correspond to the **Jeedom Targand**.\
> \
> - **Jeedom Source** : Server (your former Jeedom Slave (s))
> which puts your equipment back on the **Jeedom Targand**.\
> \
> - The notions of **Jeedom Master** and **Jeedom Slave** are not anymore
> news. The new synchronization operating mode
> of equipment bandween several Jeedoms can be bidirectional. A
> Jeedom server can be now **Source** and **Targand** while
> the old mode only allowed the rise of equipment
> **the Slave** to **the master**. With the new mode it is also
> possible to have multiple **Jeedom Targands** for the same **Jeedom
> Source**. Communication bandween Jeedoms can now also
> be done remotely via the internand (Jeedom DNS or other). \
> \

![jeelink.migration9](images/jeelink.migration9.png)

Configuration Updates and Verification 
------------------------------------------------

-   Update the **Jeedom Master** to the latest toion (even if
    no update is offered to you).

-   Update plugins of **Jeedom Master** to the last
    available toions.

-   Check in the Health page that the internal nandwork configuration of the
    **Jeedom Master** is OK (And external if your **Jeedoms Sources**
    will be distant).

Gathering useful information 
-------------------------------------

Depending on the plugins installed on your **Jeedom Slave**, It is
necessary to randrieve the following information :

### Zwave plugin 

-   In the health page of the Zwave plugin on the **Jeedom Master**, Select
    your **Slave** from the drop down menu and make a screenshot,
    this in order to have a list of the equipment that comes
    of it.

-   NOTE for each piece of equipment coming from **the Slave** : the object
    parent, name, ID (Node), model.

-   Recover Zwcfg file : *Plugins ⇒ Management of Plugins ⇒
    Z-wave *. Click on the red button * Zwcfg * and copy the content
    in a text file on your computer.

### RFXcom plugin 

-   NOTE for each piece of equipment coming from **the Slave** : the object
    parent, name, ID (Logical), Type, Model.

> **NOTE**
>
> A non-exhaustive sheand of information to note for migration
> is available [here](images / MemoMigration.xls)

Preventive backups 
-----------------------

-   Make a backup
    Jeedom](https://jeedom.github.io/documentation/core/en_US/doc-core-backup.html)
    of your **Jeedom Master** and your **Jeedom Slave (s)**
    and recover it (s) on your PC / NAS….

-   Make a backup
    SD / Disc](https://jeedom.github.io/documentation/howto/en_US/doc-howto-sau Backupe.comment_faire.html#_sau Backupe_restauration_de_la_carte_microsd)
    of your **Jeedom Master** and your **Jeedom Slave (s)**
    and recover them on your PC / NAS….

Migration 
=========

> **NOTE**
>
> Do not delande old equipment from
> **the Slave** sure **the master**.

Install and activate the "Jeedom Link" plugin on the **Jeedom Targand** (former Master). 
-------------------------------------------------------------------------------------

On your **Jeedom Targand**, *Plugins ⇒ Management of plugins* :

![jeelink.migration1](images/jeelink.migration1.png)

Installation of **Jeedom Source** : 
-----------------------------------

> **NOTE**
>
> if you have an additional Raspberry Pi and another card
> SD, you can migrate one protocol after another by
> installing a new **Jeedom Source** in parallel without having to
> touch your **Jeedom Slave** existing. By obviously moving
> as the possible controllers from one to the other.

> **Warning**
>
> If you are using your existing RaspberryPi, please be certain
> to have followed the backup chapter of this documentation.

> **NOTE**
>
> if you are using the existing Raspberry Pi which is currently a
> **Jeedom Slave**, we advise you to use a card
> New SD / microSD. This will allow you to backtrack
> easily if needed.

-   Install a new Jeedom on a new SD card (Land it be
    to put in your **Jeedom Slave** existing or for a
    new Raspberry Pi) by following the [documentation
    installation](https://jeedom.github.io/documentation/installation/en_US/doc-installation.html).

-   Update the **Jeedom Source** to the latest toion (even if
    no update is offered to you).

-   Check in the Health page that the internal nandwork configuration (and
    external if necessary) **Jeedom Source** is OK.

Jeedom Source Configuration 
------------------------------

-   Change the password of the admin user or / and configure a
    New user.

-   Configure your Jeedom Markand account (* Configuration ⇒ Updates
    and files ⇒ "Markand" tab *). Click on test after
    saved, to validate the entry of your identifiers
    Jeedom Markand).

-   Installation and activation of the "Jeedom Link" plugin on the new
    **Jeedom Source**.

![jeelink.migration2](images/jeelink.migration2.png)

-   Installation and activation of plugins you want to use.
    (It is advisable to do them one by one, checking each time
    once dependencies and possible demons are OK).

-   Recreate the tree of objects (just the ones that will
    be useful) of **Jeedom Targand** (Old Master) on your new
    **Jeedom Source** (Former Slave).

Configuration of equipment on the **Jeedom Source** 
------------------------------------------------------

To send equipment present on the **Jeedom Source**
to the **Jeedom Targand** via the "Jeedom Link" plugin, it is necessary
that it is already operational on your new **Jeedom
Source**.

> **NOTE**
>
> Remember to deactivate command logging
> info of each piece of equipment on the **Jeedom Source** to
> to save the SD card of it (Historization will be done on the
> **Jeedom Targand**).

> **NOTE**
>
> You can also gradually assign the equipment to
> objects recreated on the **Jeedom Source** so that they are later
> automatically put in the correct object on the **Jeedom Targand** during
> the declaration in the Jeedom Link plugin". In case of duplicate name
> with equipment already present in the objects of the **Jeedom Targand**,
> the plugin will add "remote XXXX" to the name of the equipment.

### Zwave plugin : 

-   Click on the "Synchronize" button to randrieve the modules
    associated with your controller. (They are kept in memory
    of it)

-   Replace the file * Zwcfg* : *Plugins ⇒ Management of Plugins ⇒
    Z-wave *. Click on the red button * Zwcfg * and paste the content of the
    text file previously created on your computer. *Save
    changes*.

-   Rename your modules and place them in the desired objects within you
    helping with your migration memo.

### RFXcom plugin : 

#### Probes, sensors, dandectors,… : 

-   Switch the plugin to inclusion mode.

-   Repeat the inclusion until you have all your equipment
    this guy.

-   Rename your equipment and place it in the desired objects by
    helping you with your migration memo.

#### Actuators, sockands,…. : 

-   Add new equipment.

-   Define name, ID, parent object, equipment type and
    model using your migration memo.

-   Repeat for all your equipment of this type.

Configuration of the "Jeedom Link plugin" 
-------------------------------------

The "Jeedom Link" plugin installed on the **Jeedom Source** will allow the
equipment on the **Jeedom Targand** (Your old Master).

> **NOTE**
>
> Reminder, for a bandter reading and understanding of this tutorial :\
> \
> The screenshots on a black background correspond to the **Jeedom Targand**.\
> \
> The screenshots on a white background correspond to **Jeedom Source**.\

On the **Jeedom Source**,
[Configuring](https://jeedom.github.io/documentation/plugins/jeelink/en_US/jeelink)
the "Jeedom Link" plugin by specifying :

-   The name of **Jeedom Targand**.

-   The IP address or DNS name of the **Jeedom Targand**.

-   The API key of **Jeedom Targand**.

And save the configuration.

![jeelink.migration3](images/jeelink.migration3.png)

In the * Assignment * tab, add the equipment you want
go up to the **Jeedom Targand**.

![jeelink.migration4](images/jeelink.migration4.png)

Click on * Add equipment * Select object and equipment
to add :

![jeelink.migration5](images/jeelink.migration5.png)

After refreshing the page * My JeeLinks * of **Jeedom Targand**, You
must note the automatic creation of the equipment :

![jeelink.migration6](images/jeelink.migration6.png)

Like all Jeedom equipment, you can activate / deactivate and display
or not the equipment, its controls,… or change the category :

![jeelink.migration7](images/jeelink.migration7.png)

In the * Orders * tab, you access all the paramanders of the
equipment controls :

![jeelink.migration8](images/jeelink.migration8.png)

Historical recovery 
----------------------------

> **NOTE**
>
> To do on **Jeedom Targand** (Former Master) for each order
> old equipment info **Slave** which we want to recover
> the history.

-   Go to the configuration of the command (* Toothed wheel at
    right*).

-   Go to the tab * Advanced Configuration*.

-   Click on the button * Copy the history of this order to a
    other order*.

-   Find the corresponding order for the new JeeLink equipment
    correspondent and validate.

Replacement of old slave equipment in Scenarios / virtual /… 
----------------------------------------------------------------------------

> **NOTE**
>
> To do on **Jeedom Targand** (Former Master) for each order
> info / action of old equipment **Slave** which we want
> replace occurrences in scenarios / virtual /….

-   Go to the configuration of the command (* Toothed wheel at
    right*).

-   Go to the * Information tab*.

-   Click on the button * Replace this command with the command*.

-   Find the corresponding order for the new JeeLink equipment
    correspondent and validate.

Randrieving advanced display configurations for commands 
------------------------------------------------------------------

> **NOTE**
>
> To do on **Jeedom Targand** (Former Master) for each order
> info / action of old equipment **Slave** which we want
> randrieve advanced display sandtings.

-   Go to the configuration of the command (* Toothed wheel at
    right*).

-   Click on the button * apply to*.

-   Find and select the corresponding command for the new
    corresponding JeeLink equipment and validate.

Copy of advanced command configurations 
-------------------------------------------------

> **NOTE**
>
> To do on **Jeedom Targand** (Former Master) for each order
> info / action of old equipment **Slave** which we want
> randrieve the advanced configuration.

-   No easy solution at this level, you will have to have two
    open tabs / windows on your browser.

-   Open orders for old equipment **Slave** in one
    (Jeedom Targand) tab.

-   Open jeeLink equipment controls in the other tab
    (Jeedom Targand).

-   And copy the desired paramanders by hand.

> **NOTE**
>
> In order to avoid repeating the same order several times, the
> operations 2.6 → 2.9 can be performed consecutively on the same
> order before proceeding to the next.

> **Warning**
>
> Interactions on the **Jeedom Targand** cannot be launched
> through equipment of a **Jeedom Source** transferred via the
> Jeedom Link plugin".

Household on the **Jeedom Targand** 
==============================

> **NOTE**
>
> After confirming with certainty that your
> equipment / scenarios / interactions / virtual /…. work
> correctly with the new jeelink system you can do the
> housework.

-   Remove residual equipment from the old **Jeedom Slave**.

-   Disable and remove plugins that are no longer useful to you
    (The ones you only had equipment on the Slave).

-   In the "Jeedom Link" plugin, rename the equipment that
    could have a name ending with "remote XXXX".

-   In the Jeedom Nandwork page, delande the old one **Jeedom Slave**.


