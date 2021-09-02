# Bestway plugin

Plugin allowing to control the Bestway Lazy Spa Milan through Jeedom.

It automatically manages filtration and its duration according to the water temperature

## Configuration 

Just put your Bestway credentials

## Compatibilité

You can find [here](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=bestway) the list of modules compatible with the plugin

## Automatic filtration

If you check the automatic filtration management box then the plugin will itself calculate at the start of each hour the filtration time required according to the average water temperature over the previous hour (based on on the formula filtration time in hours = water temperature / 2)