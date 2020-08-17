# Enedis Linky plugin

Plugin allowing the recovery of consumption of the communicating meter *linky* by querying the customer account *Enedis*. As the data is not made available in real time, the plugin retrieves the electricity consumption data from the day before each day.

4 types of consumption data are accessible :
- the **drawn power** per half hour *(in kW)*.
- the **daily consumption** *(in kWh)*.
- the **monthly consumption** *(in kWh)*.
- the **annual consumption** *(in kWh)*.

>**Important**      
>Il est nécessaire d'être en possession d'un compte-client Enedis : https://mon-compte-client.enedis.fr/.

# Configuration

## Plugin configuration

The plugin **Enedis Linky** does not require any specific configuration and should only be activated after installation.

The data is checked every hour between 4 a.m. and 10 p.m. and updated only if not available in Jeedom.

## Equipment configuration

To access the different equipment **Enedis Linky**, go to the menu **Plugins → Energy → Enedis Linky**.

> **To know**    
> The button **+ Add** allows you to add a new account **Enedis Linky**.

On the equipment page, fill in the'**Login** as well as the **Password** of your customer account *Enedis* then click on the button **Save**.

The plugin will then check the correct connection to the site *Enedis* and retrieve and insert in history :
- **drawn power** : the 48 values of the day before *(1 value per half hour)*,
- **daily consumption** : the last 30 days,
- **monthly consumption** : the last 12 months,
- **annual consumption** : the last 3 years.

>**NOTE**     
>Data is only added if it is available on your customer account *Enedis*.
