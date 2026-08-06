# Counting plugin

This plugin allows you to have a quick and simple overview of your energy expenses.

It manages water, gas and electricity only and will provide you with a graph of expenditure / consumption items.It also gives you the trend and the variations compared to the previous period (you can have in Period the Day, the week, the month or the year)

> **Important**
>
> Do not forget to activate the panel (desktop and mobile) of the plugin in the configuration of it

# Configuration

The configuration of the plugin is very simple it will ask you just the living space (heated) of your accommodation (for the calculation of DPE)

# Equipements

You can make as much counting equipment as you want :

* Type :  Water, Gas or Electricity.
* Snapshot : command giving the instantaneous consumption (attention the plugin is not able to calculate the daily consumption from the instantaneous)
* Consumption : order giving the daily consumption (so it must return at 0 at 00h00)
* Cost : order giving the daily cost (so it must return at 0 at 00:00) in €
* Add to total : indicates to add to the total consumption of this type of energy
* This is my heating energy : to tick to perform the calculation of DPE on this energy (note that if your heating energy is gas consumption must be in m3 for calculations of DPE)
* Enter values : allows to manually enter its consumption over a period
