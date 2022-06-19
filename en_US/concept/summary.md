# Abstracts

## Discovery of summaries

Jeedom offers a very simple and clear way to display the situation of different components of your home, in order to immediately see how many lights are on, shutters open, alarm status, temperature, etc.

The summaries are displayed in the form of small icons in the Jeedom bar at the top, and on each object (Dashboard and Synthesis). On click, they allow you to directly see the equipment included in the summary on which you clicked to act on it if necessary.

A distinction must be made between two types of summaries :

- The overall summary : This is the set of summary icons displayed in the bar of Jeedom.
- The object summaries : Each object has its own summary, displayed on the summary in the object, and on the Dashboard to the right of the object name.

![Discovery of summaries](images/summary-intro.gif)

The global summary is not directly parameterized. It is a concentrate of the summaries of the other objects. For example, if one light is on in the kitchen and two in the living room, the overall summary will show three lights on. Of course, all this can be configured, as we will see below.

The summaries are therefore configured on each object, in the tab ... Summary !

> Remarque
>
> This documentation was written and illustrated on a Core v4.2. Some options may therefore vary depending on your version.

## General configuration of summaries

Before seeing the configuration on an object, to be able to configure a summary it must exist.

Go into **Settings → System → Configuration** then on the tab **Summaries**.

{% include lightbox.html src="images/summary-admin.jpg" data="settings" title="Configuring summaries" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Here you have the list of all the summaries that you will be able to configure on each object. Here we can configure the summaries *Presence* (if you look closely, you see in the global summary that there is a person at home), *Alert*, *Movement*, *Heater* etc. Et bien sûr, vous pouvez supprimer et ajouter des types de résumé ici, afin de les avoir à disposition ensuite sur les objets.

Rest assured, several things on this preview have been configured, but by default Jeedom has a list of summaries with standard parameters.

Let's walk through what we're going to define here:

- **Key** : It is a value that must be unique in this list, which serves as a reference for the Core.
- **Last name** : The name (type) of the summary, which you will find in the object parameters.
- **Calculation** : The type of calculation used for the displayed value. The sum for states, the average for e.g. temperatures, humidity, or the text value.
- **Icon** : The summary icon, displayed on the object and optionally in the global summary.
- **Icon if null** : Summary icon if its value is 0. Allows you to specify a different icon such as shutter closed, light off, or different color, etc.
- **Unity** : Summary unit, which will be displayed to the right of the value.
- **Hide number** : Never displays the summary value (the number to the right of the icon).
- **Hide number if zero** : Allows you to hide the summary value, only if it is 0. We can thus wish to have the open pane icon with their number, and the closed pane icon without the number when all the panes are closed.
- **Counting method** : If you count binary data then you have to put this value to binary, example if you count the number of lamps lit but you just have the value of the dimmer (0 to 100), then you have to put binary, like that Jeedom will consider that if the value is greater than 1, then the lamp is on.
- **If zero** : Show summary even when its value is 0.
- **Ignore if** : Ignore a command for this summary if it has not had an update for x minutes.
- **Link to a virtual** : Launches the creation of a virtual device with commands corresponding to the values in the summary.
- **Delete summary** : The last button, on the far right, allows you to delete the summary.

>**NOTE**
>
>To remove an icon, just double click on it

For example here :

- If we look at the animation at the top of the page, the 3rd summary, corresponding to **Movement** indicates in red that there is *1* movement. On the preview above, we see it's the green circle icon, with no numbers. Indeed, if you look at its line, the green icon is configured as **Icon if null** and the value is not displayed because **Hide number if zero** is checked. Similarly, the summary *Gate* is in green, without a number, while the summary *Light* is in yellow, with the number of lights on.

> Tip
>
> You can also change the order in which the summaries are displayed by moving a line up or down with the mouse.


## Configuring object summaries

Once the list of summaries is available in Jeedom configuration, we can therefore use them on each object.

In **Tools → Objects**, here on the subject Salon :

{% include lightbox.html src="images/summary-object-1.jpg" data="settings" title="Summary objet" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Here we have two parts :

### Configuring summaries

The columns of the table present each type of summary available in configuration as seen above. For each summary, three options :

- **Go up in the global summary** : It is here that you choose, for each summary, if that of this object must be taken into account in the global summary. For example, here the summary *Shutter* of the Show is checked, so it goes up in the global summary. If we look in the overall summary, in the 6 open sections displayed, there are those of the Salon ! Conversely, if we look at the summary *TempExt* (16.1°C in the global summary), it is unchecked, because I only want to report the temperature of the Garden object in the global summary.
- **Hide on desktop** : To not display this summary next to the object name on the Dashboard.
- **Hide in mobile** : To not display this summary next to the object name in mobile.

### Abstract orders

Each tab represents a type of summary defined in the Jeedom configuration. Click on **Add an order** so that it is taken into account in the summary. You have the choice to select the command of any Jeedom equipment, even if it does not have this object as a parent.

Here we see the three panes present in the summary of this object. And *Shutter* being activated in the global summary, they will be counted in this one too.

### Summary tab by equipment

This page allows you to select summary orders in another way : it displays all the equipment having the object as a parent. On each equipment, by clicking on it, the list of info commands of the equipment is presented, with on the right the means to assign this command to one or more summaries of the object.

If one or more summaries are already defined, the selector appears in orange, with the types of summaries checked on the right.

## Summaries and virtual

Abstracts maintain with the [Virtual plug-in](https://market.jeedom.com/index.php?v=d&p=market_display&id=21) an ambiguous relationship, not always easy to understand, but nevertheless very powerful, especially since Core v4.2 and actions on summary ! Still there ? We continue ...

Normally, you should now have created some summaries on your objects, and therefore have several infos on your objects and in the global summary, like your open shutters, your lights etc.

These summaries are extremely practical to have an overall and visual state of the accommodation very quickly, and on click to be able to act on it by displaying the equipment of a summary. But if we continue the reasoning, that means that this info exists... And that we could appreciate using it in a scenario !

Indeed, since my summary knows that I have 3 lights on, why not be able to test in a scenario IF a light is on ? Or even trigger the scenario when a light comes on ? See even turning off all the lights in the Salon with a single action ? Well all this is possible by linking a Virtual to a summary !

Go into **Settings → System → Configuration** then on the tab **Summaries**.

On the line *Light*, on the far right, click the button **Create virtual**.

Now go into **Plugins → Programming → Virtual**

For each object with commands in the summary *Light*, you now have a new Virtual named *Summary* with object as parent. You also have a new Virtual *Overall summary* without parent object, corresponding to Jeedom's global summary.

By opening the Show Virtual and going to the tab **Orders**, here is what we find :

{% include lightbox.html src="images/summary-virtual.jpg" data="settings" title="Virtuel résumé" imgstyle="width:auto;display: block;margin: 0 auto;" %}

- An order **Information** *Light* : This has the information of the number of lights on. In the Salon, since we are on the Virtual of the Salon summary.
- An order **Stock** *Light Button On* : By triggering this action, we will turn on all the commands in the summary **Light**, here from the Salon object.
- An order **Stock** *Light Button Off Light* : By triggering this action, we will turn off all the commands in the summary **Light**, here from the Salon object.
etc.

You should have understood the principle ! We now have, for each summary for which we have linked a Virtual, the corresponding info and actions available for each object, and for the global summary !

So we can now use it like any info or action of real equipment, in a scenario !

For instance :

- A trigger `#[None][Global Summary][Movement]# > 0` which will trigger a scenario as soon as a movement is detected in the dwelling.
- An IF expression `#[Salon][Summary][Light]# > 0 ` which will test if a light is on in the Salon.
- An action `#[Salon][Summary][Shutter Shutter Button Slider]#` with value 0 which will close all the shutters of the Salon.

### Digest Actions

As seen previously, Summary Virtuals not only have the *information* summaries, but also *stock* available on the different equipment configured in summary. These actions are of course accessible in the scenario, but also through the interface, from the summary icons here and there !

For example, if you created the summary Virtuals for the summary *Light*, you can Ctrl+Click on the icon of this summary. A popup will then appear with the different actions, allowing you, for example, to turn off all the lights in the house at once !

{% include lightbox.html src="images/summary-virtual-actions.jpg" data="settings" title="Digest Actions" imgstyle="width:auto;display: block;margin: 0 auto;" %}


As we have seen, the summaries represent a vast subject, which it is not always very easy to grasp at the beginning of the life of a Jeedomian, but which it is good to know !
