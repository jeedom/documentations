# Load shedding plugin 

![delestage](./images/delestage_screenshot1.png)

# Description 

Plugin allowing to manage the electrical load shedding. The plugin manages 3 types of load shedding :

-   Smart shedding".
-   Hierarchical load shedding.
-   Cascade-cyclic load shedding.

# Operation 

## Smart load shedding. 

Smart load shedding requires the Thermostat plugin to operate.

The plugin classifies the thermostats according to their actual temperatures according to the set temperatures.

Shedding will therefore take priority over the parts with the smallest deviation. The gene for the occupants will be less important.

![intelligent](./images/smart.png)

## Hierarchical load shedding 

Load shedding is carried out in hierarchical mode on the x actuators.
The actuator 1 will be relieved in priority then the 2, 3…

The actuators will be reset in the reverse order of load shedding

![hierarchique](./images/hierarchique.png)

### Cascadocyclic load shedding 

Load shedding is performed in rotary mode on the actuators defined for the cyclic mode, then if the power is still greater than the threshold, in hierarchical mode on the others.

![cascadocyclique](./images/cascadocyclique.png)

# Setup 

## General configuration 

Here are the parameters to configure on the plugin :

-   Type of load shedding : intelligent, hierarchical or cascadocyclic
-   Type of counter : Instantaneous power or instantaneous amperage
-   Counter : select here the command which returns either the power or the amperage (in this case it will be necessary to configure the network voltage)
-   Threshold in Watts : Threshold from which deletion will be triggered

![configuration générale](./images/configuration_generale.png)

### Additional actions 

It is possible to define additional actions in addition to load shedding actions.

It is, for example, possible to send an sms to warn of the beginning and the end of load shedding.

![Actions complémentaires](./images/actions_complementaires.png)

### Advanced configuration 

The following parameters can be set:

-   Network voltage in Volts (220V by default)
-   Delay before reactivation in mins (5 mins by default) : delay before which the equipment will not reactivate (in order to avoid overly repetitive on / off)
-   Minimum time between readings in s (10s by default) : time required between 2 statements

![Setup avancée](./images/configuration_avancee.png)

# FAQ 

For now only the official thermostat plugin is managed by intelligent load shedding. It is however possible to use the other 2 load shedding modes with the other thermostats.

# Troubleshoting 

Be careful to activate the "Auto" mode on the widget in order to activate load shedding.
