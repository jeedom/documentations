# Philips Hue plugin

# Description

This plugin will allow you to integrate your Philips Hue ecosystem into Jeedom. The plugin offers the possibility to drive up to 2 Philips Hue bridges simultaneously.

# Configuration

## Plugin configuration

Like any Jeedom plugin, the plugin **Philips Hue** must be activated after installation.

Once the plugin is activated, you will need to enter the IP address at which your Philips Hue bridge can be reached. Normally the plugin should ask you to press the bridge button during the first synchronization.

>**TRICK**
>
>You can enter up to 2 Philips Hue bridges that will be able to communicate with Jeedom simultaneously.

The plugin **Philips Hue** uses its own daemon in order to stay in constant contact with the Philips Hue bridge (s). You can check the status on the plugin configuration page.


## Compatibilité

All modules compatible with the Hue bridge are compatible with the Jeedom plugin. 

## Equipment configuration

To access the different equipment **Philips Hue**, go to the menu **Plugins → Communication → Philips Hue**.

# Transition

A little peculiar command that is designed to be used in a scenario. It allows to define the duration in seconds of the transition between the current state and the next command.

For example in the morning you may want to simulate the sunrise in 3 minutes. In your scenario you just have to call the transition command with ``180`` in parameter then call the color command to the desired color.
