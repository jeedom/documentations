Nimbus 
======

Description 
-----------

This plugin allows to control and have all the info of his or her
Nimbus.

![nimbus screenshot1](./images/nimbus_screenshot1.jpg) ![nimbus
screenshot2] (../ images / nimbus_screenshot2.jpg) ![nimbus
screenshot3] (../ images / nimbus_screenshot3.jpg)

Setup 
-------------

### Jeedom plugin configuration : 

at. Installation / Creation


In order to use the plugin, you need to download, install and
activate it like any Jeedom plugin.

After that you will need to enter your credentials (wink + account
api):


![config plugin](./images/config_plugin.jpg)



Go to the plugins / Communication menu, **you will find the
nimbus plugin :**

You will arrive on the page which will list your equipment (you can
have several nimbus) and which will allow you to create them


![nimbus screenshot4](./images/nimbus_screenshot4.jpg)


**Click on the Add button :**

You will then arrive on the configuration page of your nimbus :

![config nimbus](./images/config_nimbus.jpg)

On this page you will find several sections :


-   **Main**


In this section you will find all jeedom configurations. AT
know the name of your equipment, the object you want
associate it, the category (preferably multimedia), if you want
the equipment is active or not, and finally if you want it to be
visible on the dashboard.

-   **Setup**

This section is useful if and only if you have several
nimbus. You will need to enter the equipment number (1, 2 or 3 by
example). You can leave this field blank if you have only one
nimbus which will surely be your case.


-   **Design**

This section will allow you to customize the display of your nimbus
on Dashboard. You can choose among several funds. You
can also choose the color of the needle and the color of the text.


![nimbus screenshot6](./images/nimbus_screenshot6.jpg)

-   **Information**

![infonimb](./images/infonimb.jpg)


This section will fill in itself when you save your
equipment. You will find realtives information in your nimbus
(serial number, mac address, name, id)

-   **Commands**

You have nothing to do in this section. Orders will be created
automatically.

-   Refresh: button to refresh the widget if necessary

-   Screen 1 : Information displayed on screen 1

-   Screen 2 : Information displayed on screen 2

-   Screen 3 : Information displayed on screen 3

-   Screen 4 : Information displayed on the screen 4

-   Position 1 : Information regarding the position of the
    screen 1

-   Position 2 : Information regarding the position of the
    screen 2

-   Position 3 : Information regarding the position of the
    screen 3

-   Position 4 : Information regarding the position of the
    screen 4

-   Screen Action 1 : Action command allowing in a scenario of
    choose the position and / or the text of the screen 1

-   Screen Action 2 : Action command allowing in a scenario of
    choose the position and / or the text of the screen 2

-   Screen Action 3 : Action command allowing in a scenario of
    choose the position and / or the text of the screen 3

-   Screen Action 4 : Action command allowing in a scenario of
    choose the position and / or the text of the screen 1

-   Screen Action All : Action command allowing in a scenario of
    choose the position and / or the text of all screens

-   Phrasing Screen Action : Action command allowing in a scenario of
    choose the position and / or the text of all the screens (a sentence of
    Maximum 4 words split on the 4 screens)

-   Demo : Action to launch a technical demo on your
    nimbus

…

Information 
----------------

### Information on the dashboard : 

![nimbus screenshot1](./images/nimbus_screenshot1.jpg)

The widget is divided into 4 dials representing the 4 dials of your
nimbus.

-   The needle indicates the position of the screen needle
    correspondent of your nimbus

-   The text is the text displayed on your nimbus. This text is
    clickable to get to this screen :


![nimbus screenshot5](./images/nimbus_screenshot5.jpg)


This screen allows you to manually change the text, the position of
the needle or both. It lets you see when you change the value
already displayed.

…

The actions 
-----------

### Actions accessible via scenario : 

Several actions are accessible via scenario :

![commandes](./images/commandes.jpg)

The Demo action is independent and launches the technical demo.

All the other actions work in the same way on the principle.

**This is a message command which allows you to pass two parameters:**

-   Title : a number between 0 and 360 corresponding to the position of
    the needle

-   Message : the message to display

**The two are separable that means you can :**

-   Send a position by leaving the message field empty or by
    leaving * message*

-   Send a message leaving the title field blank or leaving
    *title*

-   Send a position and a message by filling in both

**There is one order per screen, one order all, one order
Phrasing :**

-   Screen : allows to act on the corresponding screen

-   All : lets do the same on all screens

-   Phrasing : special command which will split the message into 4 words
    which will be displayed on each screen (if a word exceeds 8
    characters it will be cut if the sentence is more than 4 words
    will be cut)

![Scenario](./images/Scenario.jpg)


![Scenario2](./images/Scenario2.jpg)


![Scenario3](./images/Scenario3.jpg)


**HOW CAN I PERMANENTLY SHOW INFORMATION FROM MY
Automation**

If you want to continuously display information from your home automation.
Create a scheduled scenario every 5 minutes (for example).

![Scenario4](./images/Scenario4.jpg)

In this example you just have to replace what is between hook
by your orders. And every 5 minutes your screens will be updated
with the right values

…

Faq 
---

The system retrieves information every hour. You can
click on the Refresh command to refresh manually.

Make sure you have created the config file by saving your info in
the general config of the plugin.
