# Enedis Linky plugin

# Description

Plugin allowing the recovery of electricity consumption data from smart meters *(linky for example)* by questioning the [customer account **Enedis**](https://mon-compte.enedis.fr/auth/XUI/#login/&realm=/enedis&forward=true){:target = "\_ blank"}.

>**Important**
>
>The plugin was completely rewritten in February 2021 to use **the official Enedis Data-Connect API**. If you used the plugin before, we invite you to create a new equipment or to delete all the controls of a previous equipment.

It is possible to access data from **consumption**, of **production** or to the 2 types of measurement directly in a device.

5 data are reported for each type of measurement :
- the **hourly consumption** per half hour *(in kW)*.
>*Otherwise called "load curve", this data returns the power demanded / injected on average over half an hour.*

- the **daily consumption** *(in kWh)*.
- the **monthly consumption** *(in kWh)*.
- the **annual consumption** *(in kWh)*.
- the **max power** *(in kVA)*.

>**INFORMATION**  
>    
>As the data is not made available in real time, the plugin retrieves the electricity consumption data from the day before each day.

# Configuration

## Plugin configuration

The plugin **Enedis Linky** does not require specific configuration and should only be activated after installation.

As long as the plugin has not retrieved all of the data from the day before, it continues to poll the servers every hour between 5 a.m. and 8 p.m., otherwise calls are suspended until the next day.

In order not to overload the Enedis servers, calls are made at a random minute which can be viewed or modified on the plugin configuration page.

## Equipment configuration

To access the different equipment **Enedis Linky**, go to the menu **Plugins → Energy → Enedis Linky**.

>**INFORMATION**
>    
>The button **+ Add** allows you to add a new meter / PDL.

If you haven't already done so, start by authorizing the sharing of Enedis data with Jeedom by clicking on the button **Link Enedis with Jeedom : I access my Enedis customer area** :      

![Lien espace-client Enedis](./images/link_enedis.png)

You are then redirected to this page on which you must inform **your login details for the Jeedom market** then click on the button **Validate** :      

![Authentification compte Market Jeedom](./images/Auth_Jeedom.png)

Redirection to the Enedis consent page on which it is necessary **check the box** and click on **Validate** :     

![Autorisation Enedis](./images/Auth_Enedis.png)

Once the data sharing is validated, this page is displayed :     

![Succès](./images/Auth_Enedis_success.png)

>**Important**
>    
>If you are unable to access any of these pages, disable the browser ad blocker.

Once the data sharing has been authorized, all that remains is to inform **the identification number of the Delivery Point** concerned *(PDL)* and the **type of measurement** to get back.

When saving the equipment for the first time, the plugin will automatically create the necessary commands and integrate the histories available on the Enedis website up to 3 years back.

>**TRICK**
>
>If for one reason or another the plugin was unable to retrieve the histories when creating the orders, it will suffice to delete the orders and then save the equipment to generate the orders and their history again.

>**INFORMATION**
>
>Hourly consumption data is retrieved over the last 7 days at most.

# Widget template

The plugin offers the possibility of displaying consumption and / or production data in a widget template imitating the appearance of a meter *Linky*. The click on the button "**- \| +**" allows to switch from consumption to production for those who have access to 2 types of measures.

![Widget template](./images/enedis_screenshot1.png)

To activate this option, just check the box **Widget template** on the general page of the equipment concerned. Once the box is checked, an option allows you to select the background color of the widget *(163, 204, 40 by default)*.

>**INFORMATION**
>     
>The widget template will be displayed on both desktop and mobile versions.

>**TRICK**
>     
>In desktop version, the information displayed on the widget adapts in size when resizing the tile.
