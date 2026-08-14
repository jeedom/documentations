# Abstracts

## Browse Abstracts

Jeedom offers a very simple and clear way to view the status of various components in your home, so you can immediately see how many lights are on, which shutters are open, the status of the alarm, the temperature, and more.

Summaries are displayed as small icons in the Jeedom bar at the top and on each object (Dashboard and Summary). When you click on them, you can directly view the devices included in the summary you clicked on and take action on them if necessary.

There are two types of summaries:

- Overall Summary: This is the set of summary icons displayed in the Jeedom bar.
- Object summaries: Each object has its own summary displayed in the object overview and on the Dashboard to the right of the object's name.

![Browse Abstracts](../images/summary-intro.gif)

The overall summary cannot be configured directly. It is a compilation of the summaries from other objects. For example, if one light is on in the kitchen and two are on in the living room, the overall summary will show three lights on. Of course, all of this is configurable, as we’ll see below.

Summaries are configured for each object in the... Summary tab!

> Note
>
> This documentation was written and illustrated using Core v4.2. Therefore, some options may vary depending on your version.

## General Summary Settings

Before you can view the settings for an object, the object must exist in order to configure a summary.

Go to **Settings → System → Configuration**, then click the **Summary** tab.

{% include lightbox.html src="../images/summary-admin.jpg" data="settings" title="Configuration des résumés" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Here is a list of all the summaries you can configure for each object. Here, you can configure the *Presence* alerts (if you look closely, you’ll see in the overall summary that someone is home), *Alert*, *Motion*, *Heating*, etc. And of course, you can delete and add alert types here so they’ll be available for use on the objects later.

Don't worry—several items in this overview have been configured, but by default, Jeedom includes a list of summaries with standard settings.

Let's go over what we're going to define here:

- **Key**: This is a value that must be unique within this list and serves as a reference for the Core.
- **Name**: The name (type) of the summary, which you'll find in the object settings.
- **Calculation**: The type of calculation used for the displayed value. The sum for status reports, the average for temperatures and humidity levels, for example, or a text value.
- **Icon**: The summary icon, displayed on the object and possibly in the overall summary.
- **Icon if null**: Summary icon if its value is 0. Allows you to specify a different icon, such as a closed shutter, a light that is off, or a different color, etc.
- **Unit**: The unit shown in the summary, which will appear to the right of the value.
- **Hide the count**: Never display the summary value (the number to the right of the icon).
- **Hide the number if zero**: Hides the summary value only if it is 0. For example, you might want to display the "shutters open" icon with the number of open shutters, and the "shutters closed" icon without the number when all shutters are closed.
- **Counting Method**: If you are counting binary data, you must set this value to binary. Example: If you are counting the number of lights that are on but only have the dimmer value (0 to 100), you must set it to binary. This way, Jeedom will consider that if the value is greater than 1, the light is on.
- **If null**: Display the summary even when its value is 0.
- **Ignore if**: Ignore a command for this summary if it hasn't been updated in x minutes.
- **Link to a virtual device**: Starts the creation of a virtual device with commands corresponding to the values in the summary.
- **Delete summary**: The last button, on the far right, lets you delete the summary.

>**NOTE**
>
>To remove an icon, simply double-click it

For example, here:

- If we look at the animation at the top of the page, the third summary, labeled **Movement**, shows in red that there is *1* movement. In the preview above, we see that this is the green circle icon, without a number. In fact, if you look at its row, the green icon is configured as **Icon if zero**, and the value isn’t displayed because **Hide number if zero** is checked. Similarly, the *Port* summary is green, with no number, while the *Light* summary is yellow, showing the number of lights that are on.

> Advice
>
> You can also change the order in which the summaries are displayed by dragging a row up or down with your mouse.


## Configuring Object Summaries

Once the list of summaries is available in the Jeedom configuration, we can use them on each object.

In **Tools → Objects**, here on the Living Room object:

{% include lightbox.html src="../images/summary-object-1.jpg" data="settings" title="Résumé objet" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Here, we have two parts:

### Configuring Summaries

The columns in the table show each type of summary available in the configuration, as shown above. For each summary, there are three options:

- **Include in the global summary**: This is where you choose, for each summary, whether this object’s summary should be included in the global summary. For example, here, the *Shutter* summary for the Living Room is checked, so it’s included in the global summary. If you look at the global summary, among the 6 open panels displayed, you’ll see the ones from the Living Room! Conversely, if you look at the *TempExt* summary (16.1°C in the global summary), it’s unchecked because I only want to include the temperature from the Garden object in the global summary.
- **Hide on desktop**: To prevent this summary from appearing next to the object's name on the Dashboard.
- **Hide on mobile**: To prevent this summary from appearing next to the object's name on mobile devices.

### Summary Commands

Each tab represents a summary type defined in the Jeedom configuration. Click **Add Command** to include it in the summary. You can select a command from any Jeedom device, even if it is not a child of this object.

Here, we see the three sections included in this object's summary. And since *Section* is enabled in the overall summary, they will be included in that summary as well.

### Summary by Device tab

This page allows you to select summary commands in a different way: it displays all devices that have the object as their parent. When you click on each device, a list of the device’s info commands appears, with an option on the right to assign that command to one or more summaries of the object.

If at least one summary has already been defined, the selector appears in orange, with the summary types checked on the right.

## Abstracts and Virtual Events

The summaries are related to the [Virtual plugin](https://market.jeedom.com/index.php?v=d&p=market_display&id=21) An ambiguous concept—not always easy to grasp, but nevertheless very powerful, especially since Core v4.2 and summary actions! Still here? Let’s continue...

Normally, by now you should have created a few summaries for your objects and should therefore have various pieces of information about them in the overall summary, such as whether your shutters are open, your lights, etc.

These summaries are extremely handy for getting a quick, visual overview of the home and, with a single click, taking action by viewing the devices listed in a summary. But if we take this reasoning further, it means that this information exists... And that we could really benefit from using it in a scenario!

After all, since my summary knows that I have 3 lights on, why not be able to check in a scenario whether a light is on? Or even trigger the scenario when a light turns on? Or even turn off all the lights in the living room with a single action? Well, all of this is possible by linking a Virtual to a summary!

Go to **Settings → System → Configuration**, then click the **Summary** tab.

On the *Light* line, all the way to the right, click the **Create Virtual** button.

Now, go to **Plugins → Scheduling → Virtual**

For each object with commands in the *Lighting* summary, you now have a new Virtual named *Summary* with that object as its parent. You also have a new Virtual named *Global Summary* with no parent object, corresponding to Jeedom’s global summary.

When you open the Virtual Showroom and go to the **Commands** tab, here's what you'll find:

{% include lightbox.html src="../images/summary-virtual.jpg" data="settings" title="Virtuel résumé" imgstyle="width:auto;display: block;margin: 0 auto;" %}

- An **Info** *Light* command: This command displays the number of lights currently on in the Living Room, since we are viewing the Living Room summary in the Virtual Tour.
- An **Action** command *Light Button On*: When this action is triggered, it will turn on all the commands in the **Light** summary, in this case for the Living Room object.
- An **Action** command called *Light Button Off*: When this action is triggered, it will turn off all commands in the **Light** summary, in this case for the Living Room object.
etc.

You should get the idea by now! We now have the corresponding information and actions available for each object, as well as for the overall summary—for every summary to which we’ve linked a Virtual!

So now we can use it just like any other piece of information or action from a real device in a scenario!

For example:

- A trigger `#[None][Global Summary][Mouvement]# > 0` that will trigger a scenario as soon as motion is detected in the home.
- An IF statement `#[Salon][Summary][Lumière]# > 0 ` that will check whether a light is on in the living room.
- An action `#[Salon][Summary][Volet Shutter Button Slider]#` with a value of 0, which will close all the shutters in the living room.

### Actions on summaries

As mentioned earlier, Summary Virtuals contain not only the *info* from the summaries, but also the *actions* available for the various devices configured in the summary. These actions are, of course, accessible in scenarios, but also through the interface, via the summary icons scattered throughout!

For example, if you’ve created virtual groups for the *Light* group, you can Ctrl+click on that group’s icon. A pop-up will then appear with various actions that let you, for example, turn off all the lights in the house at once!

{% include lightbox.html src="../images/summary-virtual-actions.jpg" data="settings" title="Actions sur résumés" imgstyle="width:auto;display: block;margin: 0 auto;" %}

As we’ve seen, summaries are a broad topic—one that isn’t always easy to grasp when you’re just starting out as a Jeedom user, but it’s definitely worth learning about!
