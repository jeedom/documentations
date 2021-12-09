# Fashion Plugin

Plugin to manage different modes of an apartment / house / room, but also atmospheres.

## Plugin configuration

After downloading the plugin, you just need to activate it, there is no configuration at this level.

## Equipment configuration

The configuration of the mode equipment is accessible from the plugin menu then organization :

Here you find all the configuration of your equipment :

- **Mode equipment name** : name of your equipment Mode,
- **Parent object** : indicates the parent object to which the equipment belongs,
- **Activate** : makes your equipment active,
- **Visible** : makes your equipment visible on the dashboard,
- **Category** : equipment categories (it can belong to several categories).
- **Add mode** : button to add a new mode

Below you will find the list of modes, by clicking on it you will be able to choose the actions to be performed when entering and / or exiting this mode.

>**Important**
>
>Be careful when renaming a mode, it is essential to review the scenarios / equipment that used the old name to switch them to the new one.

## Equipment creation

- Click on *Add*
- Give a name
- Select l'*Parent object*
- Activate the
- Select tab *Modes* to add the modes (see [the examples](#exemples))

## Exemples

### Shutter Mode

Example of a device without input or output action on the modes. Equipment of this type can be useful as a trigger for a scenario or to condition actions in a scenario.

![Mode volet](../images/mode_volet.png)

### Presence mode

Example of a device with actions defined when changing mode.

In this equipment, we will create 3 modes from the tab *Modes* equipment:

- Present
- Absent
- Vacances

![Mode présence](../images/mode_presence_mode.png)

When switching to the mode *Present*, we want the alarm to be deactivated and the heating to switch to comfort mode (2 input actions).

![Mode présence action entrée](../images/mode_presence_entree.png)

When exiting the mode *Present* to switch to mode *Absent* or *Vacation*, we want the alarm to activate (1 output action).

![Mode présence action sortie](../images/mode_presence_sortie.png)

For modes *Absent* and *Vacation*, we are just going to create on each of these modes 1 input action to manage the heating (Eco for the *Absent*, Frost protection for the mode *Vacation*).

![Mode absent vacances](../images/mode_presence_absent_vacances.png)

#### Fonctionnement

- When we go out of mode *Present* in fashion *Absent*, the alarm is activated (action to exit *Present*) and the heating switches to eco (mode entry action *Absent*).  
- When we go out of mode *Present* in fashion *Vacation*, the alarm is activated (action to exit *Present*) and the heating switches to frost protection (entry action of the *Vacation*).
- When we go out of mode *Absent* in fashion *Present*, the alarm is deactivated (entry action of the *Present*) and the heating switches to comfort (entry of mode *Present*).
- When we go out of mode *Absent* in fashion *Vacation*, the heating goes into frost protection (entry action of the *Vacation*).
- When we go out of mode *Vacation* in fashion *Present*, the alarm is deactivated (entry action of the *Present*) and the heating switches to comfort (entry of mode *Present*).
- When we go out of mode *Vacation* in fashion *Absent*, the heating switches to eco (entry action of the *Absent*).

### Presence mode twice

We modify the previous example slightly to illustrate the filtering on actions.

![Filtre](../images/mode_presence_filtre.png)

To do this, the alarm will no longer be activated when exiting the mode *Present* but on the entry of modes *Absent* and *Vacation*. After modification we get that :

![Present](../images/mode_presence_bis_present.png)
![Absent](../images/mode_presence_bis_absent.png)
![Vacation](../images/mode_presence_bis_vacances.png)

Note : on the modes *Absent* and *Vacation*, the alarm is only activated if you come from the mode *Present*. If we go from *Absent* at *Vacation* (and vice versa), the alarm is already activated, so there is no need to redo the action.

#### Operation bis

- When we go out of mode *Present* in fashion *Absent*, the alarm is activated (mode entry action *Absent*) and the heating switches to eco (mode entry action *Absent*).  
- When we go out of mode *Present* in fashion *Vacation*, the alarm is activated (mode entry action *Vacation*) and the heating switches to frost protection (entry action of the *Vacation*).
- When we go out of mode *Absent* in fashion *Present*, the alarm is deactivated (entry action of the *Present*) and the heating switches to comfort (entry of mode *Present*).
- When we go out of mode *Absent* in fashion *Vacation*, the heating goes into frost protection (entry action of the *Vacation*). The alarm is not activated.
- When we go out of mode *Vacation* in fashion *Present*, the alarm is deactivated (entry action of the *Present*) and the heating switches to comfort (entry of mode *Present*).
- When we go out of mode *Vacation* in fashion *Absent*, the heating switches to eco (entry action of the *Absent*).  The alarm is not activated.
