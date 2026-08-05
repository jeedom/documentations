# The summaries

## Discovery of summaries

Jeedom offers a very simple and clear way to display the situation of different components of your home, so you can immediately see how many lights are on, which shutters are open, the alarm status, the temperature, etc.

Summaries are displayed as small icons in the Jeedom bar at the top and on each object (Dashboard and Synthesis). On click, they allow you to directly see the equipment included in the summary on which you clicked to act on it if necessary.

We must distinguish two types of summary :

- The overall summary : This is the set of summary icons displayed in the Jeedom bar.
- Subject summaries : Each object has its own summary displayed on the summary in the object and on the Dashboard to the right of the object name.

![Discovery of summaries](images/summary-intro.gif)

The global summary cannot be set directly. It is a concentrate of summaries of other objects. For example, if one light is on in the kitchen and two in the living room, the overall summary will show three lights on. Of course, all this is configurable, as we will see below.

The summaries are therefore configured on each object, in the tab... Summary !

> Remarque
>
> This documentation was written and illustrated on a Core v4.2. Some options may therefore vary depending on your version.

## General Summaries Configuration

Before seeing the configuration on an object, to be able to configure a summary, there must be.

Go to **Settings → System → Configuration** then on the tab **Summaries**.

{% include lightbox.html src="images/summary-admin.jpg" data="settings" title="Configuring summaries" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Here you have the list of all the summaries that you will be able to configure on each object. Here we can configure the summaries *Presence* (if you look closely, you see in the overall summary that there is a person at home), *Alert*, *Movement*, *Heating* etc. Et bien sûr, vous pouvez supprimer et ajouter des types de résumé ici afin de les avoir à disposition ensuite sur les objets.

Rest assured, several things on this preview have been configured, but by default Jeedom has a list of summaries with standard parameters.

Let's go through what we will define here:

- **Key** : It is a value that must be unique in this list, which serves as a reference for the Core.
- **Name** : The name (type) of the summary, which you will find in the object parameters.
- **Calculation** : The type of calculation used for the displayed value. The sum for states, the average for e.g. temperatures, humidities or the text value.
- **Icon** : The summary icon, displayed on the object and possibly in the overall summary.
- **If null icon** : Summary icon if its value is 0. Allows you to specify a different icon such as a closed shutter, a light off or a different color, etc.
- **Unity** : Unit of the summary, which will be displayed to the right of the value.
- **Hide number** : Never displays the summary value (the number to the right of the icon).
- **Hide number if zero** : Allows you to hide the summary value, only if it is 0. We can thus wish to have the open shutter icon with their number of open shutters and the closed shutter icon without the number when all the shutters are closed.
- **Counting method** : If you are counting a binary data then you have to set this value to binary. Example : if you count the number of lights on but you only have the value of the dimmer (0 to 100), then you have to put binary, like this Jeedom will consider that if the value is greater than 1, then the lamp is on.
- **If no** : Show summary even when its value is 0.
- **Ignore if** : Ignore an order for this summary if it has not been updated for x minutes.
- **Link to a virtual** : Starts the creation of a virtual device with commands corresponding to the values of the summary.
- **Delete summary** : The last button, on the far right, allows you to delete the summary.

>**NOTE**
>
>To delete an icon, simply double-click on it

For example here :

- If we look at the animation at the beginning of the page, the 3rd summary, corresponding to **Movement**, indicates in red that there is *1* movement. On the preview above, we see that it is the icon of the green circle, without number. Indeed, if you look at its line, the green icon is configured as **If null icon** and the value is not displayed because **Hide number if zero** is checked. Likewise, the summary *Door* is in green, without a number, while the summary *Light* is yellow, with the number of lights on.

> Conseil
>
> You can also change the order in which the summaries are displayed by dragging a line up or down with the mouse.


## Configuring object summaries

Once the list of summaries is available in Jeedom configuration, we can therefore use them on each object.

In **Tools → Objects**, here on the object Salon :

{% include lightbox.html src="images/summary-object-1.jpg" data="settings" title="Abstract objet" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Here we have two parts :

### Configuring summaries

The columns in the table show each type of summary available in configuration as seen above. For each summary, three options :

- **Go up in the global summary** : This is where you choose, for each summary, whether that of this object should be taken into account in the overall summary. For example, here, the summary *Shutter* du Salon is checked, so it goes up in the global summary. If we look in the overall summary, in the 6 open panes displayed, there are those of the Show ! Conversely, if we look at the summary *TempExt* (16.1 ° C in the global summary), it is unchecked, because I only want to return the temperature of the Garden object in the global summary.
- **Hide in desktop** : To not display this summary next to the name of the object on the Dashboard.
- **Hide on mobile** : To not display this summary next to the name of the object in mobile.

### Summaries orders

Each tab represents a type of summary defined in the Jeedom configuration. Click on **Add an order** so that it is taken into account in the summary. You have the choice to select the command of any Jeedom equipment, even if it does not have this object as a parent.

Here we see the three components present in the summary of this object. And *Shutter* being activated in the global summary, they will be counted in this one too.

### Summary tab by device

This page allows you to select the summary orders in another way : it displays all the devices having the object as parent. On each device, by clicking on it, the list of device info commands is presented, with on the right the means of assigning this command to one or more summaries of the object.

If at least one summary is already defined, the selector appears in orange, with the summary types checked on the right.

## Summaries and virtual

The summaries maintain with the [Virtual plugin](https://market.jeedom.com/index.php?v=d&p=market_display&id=21) an ambiguous relationship, not always easy to understand, but nevertheless very powerful, especially since Core v4.2 and actions on summary ! Still there ? We continue...

Normally, you should now have created some summaries on your objects and therefore have several infos on your objects and in the global summary, like your open shutters, your lights etc.

These summaries are extremely practical for having an overall and visual status of the accommodation very quickly and being able to act on it by displaying the equipment of a summary at the click of a button. But if we continue the reasoning, it means that this information exists... And that we could appreciate using it in a scenario !

Indeed, since my summary knows that I have 3 lights on, why not be able to test in a scenario IF a light is on? ? Or even trigger the scenario when a light comes on ? Even turn off all the lights in the living room with a single action ? Well all this is possible by linking a Virtual to a summary !

Go to **Settings → System → Configuration** then on the tab **Summaries**.

On the line *Light*, on the far right, click on the button **Create virtual**.

Now go to **Plugins → Programming → Virtual**

For each object with commands in the summary *Light*, you now have a new Virtual named *Abstract* with the parent object. You also have a new Virtual *Overall summary* without parent object, corresponding to the global summary of Jeedom.

By opening the Virtual Show and going to the tab **Orders**, here is what we find :

{% include lightbox.html src="images/summary-virtual.jpg" data="settings" title="Virtuel résumé" imgstyle="width:auto;display: block;margin: 0 auto;" %}

- An order **Info** *Light* : This one has the information of the number of lights on in the Living Room, since we are on the Virtual of the Living Room summary.
- An order **Action** *Light Button On Light* : By triggering this action, we will turn on all the summary commands **Light**, here of the Salon object.
- An order **Action** *Light Button Off Light* : By triggering this action, we will turn off all the summary commands **Light**, here of the Salon object.
etc.

You should have understood the principle ! We now have the corresponding info and actions available for each object, and for the global summary, for each summary for which we have linked a Virtual !

So now we can use it like any info or action of real equipment, in a scenario !

For example :

- A trigger#[None][Global Summary][Movement]# > 0` which will trigger a scenario as soon as movement is detected in the accommodation.
- An IF expression#[Salon][Summary][Light]# > 0 `which will test if a light is on in the Living room.
- An action `#[Salon][Summary][Shutter Shutter Button Slider]#`with value 0 which will close all the shutters of the Show.

### Actions on summaries

As seen previously, Summary Virtuals not only have the *Info* summaries, but also *Action* available on the various devices configured in summary. These actions are of course accessible in the scenario, but also through the interface, from the summary icons here and there !

For example, if you created the Summary Virtuals for the summary *Light*, you can do a Ctrl + Click on the icon of this summary. A pop-up will then appear with the different actions allowing you, for example, to turn off all the lights in the house at once !

{% include lightbox.html src="images/summary-virtual-actions.jpg" data="settings" title="Actions on summaries" imgstyle="width:auto;display: block;margin: 0 auto;" %}

As we have seen, the summaries represent a vast subject, which it is not always very easy to understand at the beginning of a Jeedomian's life, but which it is good to know !
