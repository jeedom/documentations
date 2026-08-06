# Counting plugin

This plugin allows you to have a quick and easy overview of your energy costs.

It manages water, gas and electricity and will provide you with a graph of expenditure / consumption items. It also gives you the trend and the variations compared to the previous period (you can have in Period the Day, the week, the month or the year).

> **Important**
>
> Do not forget to activate the panels (desktop and mobile) of the plugin in the configuration of this one.

# Configuration

The configuration of the plugin is very simple, it will just ask you for the living area (heated) of your home (for the calculation of DPE).

# Equipements

You can make as many counting equipments as you want :

* **Type** :  Water, Gas or Electricity.
* **Snapshot** : command giving the instantaneous consumption (attention the plugin is not able to calculate the daily consumption from the instantaneous).
* **Consumption** : command giving the daily consumption *(must return to 0 to 00:00)*.
* **Cost** : order giving the daily cost in € *(must return to 0 to 00:00)*.
* **Outside temperature** : control giving the exterior temperature of the accommodation. Allows you to optimize your home's energy performance calculations.
* **Add to total** : indicates to add to the total consumption of this type of energy.
* **This is my heating energy** : check the box to calculate the DPE on this energy (note that if your heating energy is gas, the consumption must be in m3 for the DPE calculations).
* **Enter values** : allows to manually enter its consumption over a period.
