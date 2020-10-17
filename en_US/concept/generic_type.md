# Generic Type

Generic type is a very important concept in Jeedom used by many plugins. This is what generally allows Jeedom to know what the equipment is doing and how to do it.

## Principle 

The principle is very simple it is a property of an order. There are many and we add more often. For example, you have "Button Light On", by putting this property on the Jeedom "Switch on" command, you will understand that it is a light and that to switch it on you have to execute this command.

For example, it is widely used in Alexa Smarthome or Google Smarthome plugins, it allows you to know what type of equipment to send to Alexa or Google Home and when a request is made to know how to respond.

Most of the time the generic type are automatically set when configuring your module (inclusion in Z-wave for example). But there may be times when you need to reconfigure them.

## Configure either the generic type 

It's very simple you have to go to the advanced configuration of the command then the configuration tab and you have a "Generic type"

How to go to the advanced configuration of an order :

- On the configuration page of your equipment, command tab by double clicking on the command line or on the button with the 3 small notched wheels
- From the advanced configuration of the equipment you have the list of orders and the 3 small notched wheels at the end of the line 
- From Analysis -> Home automation summary, you search or unfold until you find your order then you click on it or click on the toothed wheel at the end of the line

Here you know everything, do not hesitate to try to put for each order the generic type that corresponds to this will allow the plugin to better understand what your equipment does
