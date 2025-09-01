# Bacnet

## Description

. .

## Plugin configuration

 :

![config](../images/BacnetConfig.png)

Then, you have to start the installation of dependencies (even if they appear OK) :

![dependances](../images/BacnetDep.png)

Finally, we must start the demon :

![demon](../images/BacnetDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/BacnetSocket.png)

In this same tab, you must choose the Cron value for updating your equipment.

## 

### 

>**IMPORTANT**
>
>.

Rendez-vous dans le menu « Plugins → Protocole domotique → Bacnet » :



. 
. 
.

) : 

Following the scan, a table with all the inputs / outputs of your equipment will be displayed.

.

.

-
Cliquez ensuite sur votre équipement créé, puis cochez « Activer » et « Visible » pour le voir apparaître sur votre dashboard.

. 
.

### 

)

" :


.)
)




.

### 

). .

" :




)


.

## The orders

Rendez-vous dans l'onglet « Commandes » de la page de configuration du nouvel équipement Bacnet.

Ici vous pouvez masquer et rendre visibles les différentes commandes de type « action » et « info » disponibles (les commandes de type « info » peuvent également être historisées) :

![cmdVisible](../images/BacnetVisible.png)

All the equipment created will have 2 commands by default : une commande info « Connexion Bacnet » et une commande action « Refresh », qui serviront à voir l'état de la connexion Bacnet sur votre dashboard, et à rafraîchir les valeurs de vos commandes.

![cmdBase](../images/BacnetCmdBase.png)

## )

.

" :

.  :


.)




).

>****
>
>.

>**IMPORTANT**
>
>Regarding writing: for security, the Bacnet protocol provides by default a writing system with priority levels on the inputs / outputs of its equipment.
There are 16 priority levels (the lowest level taking priority over all others)). Your equipment may be programmed in such a way that the write function developed in this plugin does not take priority over the logic programming of the equipment / system by default.
For Output type I / O, the plugin is configured with priority 8 writing (Manual Operator).
More info on the subject :

https://store.chipkin.com/articles/bacnet-why-doesnt-the-present-value-change

.
You should know that the PresentValues of the inputs / outputs type: Analog Output, Binary Output and Multistate Output are always controllable.
. It is at the sole discretion of the manufacturer. .

When creating the chosen write-type orders, an associated action order will also be created, by default not visible on the dashboard.
By clicking on it, it resets the write priority table of an input / output to the default.
It will have a name with << resetPrioritesEcriture >>
".

## List on Command Action (for MultiStateValue)

) : now, if you choose a multiState, the command will be of type Slider by default, but you can list it in the list of equipment commands; a new Value List field will appear;
 : for example 1-4-5-8
When saving the equipment, this will put these values in the list of the order on the Dashboard
.

## Write priority

A Handle with care

A Write Priority field is available on each order created

As per the documentation :

In BACnet, object to which we can write often provide what is called the priorityArray. This array contains 16 levels to which we can write (1 being the highest priority).

Typical usage of priority is :

1 Manual-Life Safety 2 Automatic-Life Safety 3 Available 4 Available 5 Critical Equipment Control 6 Minimum On/Off 7 Available 8 Manual Operator (Override) 9 Available 10 Available (Typical Control from a Supervisor) 11 Available 12 Available 13 Available 14 Available 15 Available (Schedule) 16 Available



If no value entered on a write command, by default the value will be set to 8.

## 

 :
- 
- 
- 
- Schedule
- Calendar
- Device

 :
- )


.

## 

 :



)


.
