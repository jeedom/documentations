# Energy plugin

Plugin allowing you to display a global graph of home energy (water, gas, electricity, electrical production).

It also displays a dashboard showing the performance of a solar panel system, consumption (water, gas and electricity) as well as details of electricity consumption of certain equipment (of course requires having a module to measure it)

For those who have solar power, it can also show you the production forecast according to the characteristics of your installation (to be filled in)

Please note the plugin does not and will not do any cost calculation (this is not and will not be its purpose)

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
>Depending on your orders, you may need to adapt the unit on the order configuration page of the energy equipment you have created

## Details

For electricity it is possible to indicate consumers in the details tab, it can either be a power type command (it must then be logged), or a consumption type command. If it is absolute consumption (no reset at midnight) there is nothing more to do, if it is consumption per day (reset at midnight) then the box must be checked at the end line "Consumption per day (if Wh or kWh)"

# Panel

To view the histories, production forecasts and other things, you have to think carefully on the plugin configuration page (Plugins -> plugin management) to activate the panel (on desktop and/or mobile) then refresh the page (F5). Then in home you will find the plugin panel.
