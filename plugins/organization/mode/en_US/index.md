# Fashion Plugin

The plug-in **Fashion** will allow you to create modes to easily manage different features *(housing, alarm, presence, etc...)* and perform actions automatically when switching between modes.

# Configuration

This plugin does not require any special configuration and simply needs to be activated after installation.

## Equipment configuration

To access the various equipment **Fashion**, you have to go to the menu **Plugins → Organization → Fashion**.

>**INFORMATION**
>
>The + Add button allows you to add a new equipment **Fashion**.

Click on a device **Fashion** to access its management page. The first tab gives access to the equipment configuration options :

- **Equipment name** : Mode equipment name.
- **Parent object** : Indicates the parent object to which the equipment belongs.
- **Category** : Allows you to choose the category of the equipment.
- **Options** :
    - **Activate** : Allows you to make the equipment active.
    - **Visible** : Makes equipment visible.

- **Lock command** : Checkbox to show lock command on widget.

The second tab will allow us to define the different modes of the equipment as well as the associated actions if necessary :

- **Add mode** : Click the button to create a new mode in the equipment.

Below, you find the list of existing modes :

![Modes](../images/mode_screenshot1.png)

Click on the line of a mode to deploy its configuration and access the management of entry/exit actions. The execution of these actions can be conditioned by the mode from which one arrives *(previous mode)* for entry actions or by the mode you are going to *(next mode)* for exit actions (see [the examples](#Exemples)).

>**INFORMATION**
>
>Click on the name of the mode to change it. Attention, in case of modification of the name of a mode, it will be necessary to review all the scenarios/equipment which referred to it under its old name.

# Commandes

The list of orders can be consulted by clicking on the button **Advanced Setup** of a piece of equipment **Fashion**. Each mode created in a device will generate the corresponding action command in addition to the existing commands :

- **Locking** :
    - **Lock/Unlock** : Allows you to lock the thermostat to prevent any mode change.
    - **Unlock** : Unlocks the thermostat.
>The box **Lock command** must be checked for this command to be displayed on the widget.

- **Fashion** : Current Mode.
- **Previous mode** : Previous mode *(command not visible by default)*.
- **Back to previous mode** : Allows you to return to the previously active mode.
- **Go to next mode** : Allows you to go to the next mode in the list.

# Exemples

## Pane Modes

Example of equipment without entry or exit actions on the modes. Equipment of this type can be useful as a trigger for a scenario or to condition actions in a scenario :

![Fashion volet](../images/mode_volet.png)

## Presence Modes

Example of equipment with actions defined when changing modes. In this equipment we will create 3 modes from the tab **Modes** equipment :

- **Present**
- **Absent**
- **Vacation**

![Fashion présence](../images/mode_presence_mode.png)

When switching to the mode **Present**, we want the alarm to be deactivated and the heating to switch to *Comfort (2 input actions)* :

![Fashion présence action entrée](../images/mode_presence_entree.png)

When exiting the mode **Present** to switch to mode **Absent** or **Vacation**, we want the alarm to activate *(1 exit action)* :

![Fashion présence action sortie](../images/mode_presence_sortie.png)

About the modes **Absent** and **Vacation**, we will just create on each 1 input action to manage the heating, *Eco-friendly* for fashion **Absent** and *Frost protection* for fashion **Vacation** :

![Fashion absent vacances](../images/mode_presence_absent_vacances.png)

### Operation Presence

- When we go out of mode **Present** in fashion **Absent**, the alarm is activated (action to exit **Present**) and the heating switches to *Eco-friendly* (mode entry action **Absent**).  
- When we go out of mode **Present** in fashion **Vacation**, the alarm is activated (action to exit **Present**) and the heating switches to *Frost protection* (mode entry action **Vacation**).
- When we go out of mode **Absent** in fashion **Present**, the alarm is deactivated (entry action of the **Present**) and the heating switches to *Comfort* (mode entry action **Present**).
- When we go out of mode **Absent** in fashion **Vacation**, heating switches to *Frost protection* (mode entry action **Vacation**).
- When we go out of mode **Vacation** in fashion **Present**, the alarm is deactivated (entry action of the **Present**) and the heating switches to *Comfort* (mode entry action **Present**).
- When we go out of mode **Vacation** in fashion **Absent**, heating switches to *Eco-friendly* (mode entry action **Absent**).

## Modes Presence bis

We modify the previous example slightly to illustrate the filtering on actions :

![Filtre](../images/mode_presence_filtre.png)

To do this, the alarm will no longer be activated when exiting the mode **Present** but on the entry of modes **Absent** and **Vacation**. After modification we get the following result :

![Present](../images/mode_presence_bis_present.png)
![Absent](../images/mode_presence_bis_absent.png)
![Vacation](../images/mode_presence_bis_vacances.png)

>**INFORMATION**
>
>on the modes **Absent** and **Vacation**, the alarm is only activated if you come from the mode **Present**. If we go from **Absent** at **Vacation** *(Or vice versa)*, the alarm is already activated, so there is no need to redo the action.

### Operation Presence bis

- When we go out of mode **Present** in fashion **Absent**, the alarm is activated (mode entry action **Absent**) and the heating switches to *Eco-friendly* (mode entry action **Absent**).  
- When we go out of mode **Present** in fashion **Vacation**, the alarm is activated (mode entry action **Vacation**) and the heating switches to *Frost protection* (mode entry action **Vacation**).
- When we go out of mode **Absent** in fashion **Present**, the alarm is deactivated (entry action of the **Present**) and the heating switches to *Comfort* (mode entry action **Present**).
- When we go out of mode **Absent** in fashion **Vacation**, heating switches to *Frost protection* (mode entry action **Vacation**). The alarm is not activated.
- When we go out of mode **Vacation** in fashion **Present**, the alarm is deactivated (entry action of the **Present**) and the heating switches to *Comfort* (mode entry action **Present**).
- When we go out of mode **Vacation** in fashion **Absent**, heating switches to *Eco-friendly* (mode entry action **Absent**). The alarm is not activated.
