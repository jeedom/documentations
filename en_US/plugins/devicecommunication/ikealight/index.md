# IkeaLight plugin

The IkeaLight plugin makes it possible to establish a link with the Ikea Tradfri gateway. You can control your lights and get real-time status feedback.

# Configuration

## Plugin configuration

After downloading the plugin you must activate it and enter the IP of your gateway as well as the key available on the gateway label (the "Security code").

## Compatibilité

You can find [here](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=ikealight) the list of modules compatible with the plugin

## Bulb detection

To scan Ikea equipment, just start the daemon once the dependencies have been correctly installed.     
The bulbs raised by the gateway and which are recognized by Jeedom will be automatically integrated.     

If a bulb does not go back, please put the plugin in ``Debug``, to relaunch the discovery and provide us with the log so that we can add the missing bulbs. (Remember to specify the model of your bulb as well as its characteristics in the ticket : is it dimmable, is it variable in white, is it variable in color). The plugin will also bring you the blinds sockets

**Once discovered each bulb will have :**

-   The corresponding actions
-   The corresponding info

>**Symfonisk**
>
>Symfonisk connected speakers are not managed by this plugin but by the Sonos plugin.
