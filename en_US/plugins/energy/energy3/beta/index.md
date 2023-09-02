# Energy plugin

Plugin allowing to display a global graph of the energies of the house (water, gas, electricity, electricity production).

It also displays a dashboard showing the performance of a solar panel system, the consumption (water, gas and electricity) as well as the details of the electricity consumption of certain equipment (needs of course to have a module to measure it)

For those who have solar power, it can also show you the production forecast according to the characteristics of your installation (to be filled in)

Please note that the plugin does not and will not calculate any cost (it is not and will not be its purpose)

To work, it requires that you have modules that upload this information :

## Gaz

- Consumption day
- Instant consumption

## Eau

- Consumption day
- Instant consumption

## Electricité

- Consumption day
- Instant consumption

If you have solar panels you need more : 

- Grid electricity import
- Grid electricity export
- Production day
- Net power

>**IMPORTANT**
>
>Depending on your commands, you may need to adapt the unit on the command configuration page for the energy equipment you have created

## Details

For electricity it is possible to indicate consumers in the details tab, it can either be a power type command (it must then be logged), or a consumption type command. If it is absolute consumption (no reset at midnight) there is nothing more to do, if it is consumption per day (reset at midnight) then the box must be checked at the end line "Consumption per day (if Wh or kWh)"

# Panel

To view the histories, production forecast and other, you have to remember on the plugin configuration page (plugin -> plugin management) to activate the panel (on desktop and/or mobile) then refresh the page (f5). Then in home you will find the panel of the plugin.