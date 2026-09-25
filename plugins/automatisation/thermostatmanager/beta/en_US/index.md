# Thermostat management plugin

## Description

This plugin allows you to manage the thermostat in a room depending on the presence or absence of a person, the mode (day / night for example) and the window (s) / door (s) open (s))

## Configuration

The plugin has no specific configuration

## Equipement

### General

You have here (except equipment name, active / inactive, visible / invisible...) : 

- "Do nothing automatically if" : if ever the house is in summer mode * or if the house is in absent mode (so no one is present) or if we are outside working hours then no control from the plugin (since the office also serves as a bedroom is more comfortable at night)
- "Take back control after (min), put nothing on forever" : tells the plugin to take back control of the room thermostat after 30min if someone has touched it

### Thermostat

Here you indicate the command for action and status of the thermostat

### Mouvement

Here we will define the notion of presence in a room. This is done using a simple presence sensor but we wanted to avoid the rise in setpoints if we only go through the room. So we have parameters to specify what a presence is, the setpoint temperature to set and the delay before returning to the previous value. For example, if there has been a presence more than 70% of the time for the last 5 minutes, then set the setpoint to 20.5 and then if there is no one there for 10min then reset the setpoint to the original value

### Ouverture

You indicate here your opening as well as the different parameters
- time before setpoint change during an opening
- instruction to put
- delay before return to the previous setpoint following closure

### Commande

Here you will just be able to create mode commands before the setpoint depending on the mode