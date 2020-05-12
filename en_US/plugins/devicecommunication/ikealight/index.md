# IkeaLight plugin

The IkeaLight plugin makes it possible to establish a link with the Ikea Tradfri gateway. You can control your lights and get real-time status feedback.

# Configuration

## Plugin configuration

After downloading the plugin you need to activate it and enter the IP of your gateway as well as the key available on the gateway label (the "Security code").

## Bulb detection

To scan Ikea equipment, just launch (once the dependencies started) the daemon. The bulbs reassembled by the gateway and which are recognized by Jeedom will be automatically created. If a bulb does not come up please put the Debug plugin to relaunch the discovery and provide us with the log so that we can add the missing bulbs. (Remember to specify your bulb and its characteristics in the ticket : is it dimmable, is it variable in white, is it variable in color). The plugin will also bring you the blinds sockets

**Once discovered each bulb will have :**

-   The corresponding actions
-   The corresponding info

>**Symfonisk**
>
>Symfonisk connected speakers are not managed by this plugin but by the Sonos plugin
