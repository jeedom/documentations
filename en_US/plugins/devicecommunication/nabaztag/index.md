Plugin to order the Nabaztag.

Setup 
=============

Equipment configuration 
=============================

Once the plugin is installed and activated from the Market, you access the
Nabaztag plugin page by :

![nabaztag1](../images/nabaztag1.png)

Here you find all your Nabaztag equipment :

![nabaztag2](../images/nabaztag2.png)

> **Tip**
>
> As in many places on Jeedom, place the mouse on the far left
> brings up a quick access menu (you can
> from your profile always leave it visible).

Once an equipment is selected you get :

![nabaztag3](../images/nabaztag3.png)

Here you find all the configuration of your equipment :

-   **Name of the Nabaztag equipment** : name of your Nabaztag equipment

-   **Parent object** : indicates the parent object to which belongs
    equipment

-   **Category** : equipment categories (it may belong to
    multiple categories)

-   **Activate** : makes your equipment active

-   **Visible** : makes it visible on the dashboard

-   **Address (openjabnab.fr or @IP)** : openjabnab or IP address (DNS)
    your openjabnab if you self-host it

-   **MAC address** : your rabbit's mac address (see below)

-   **API Token Purple** : API token (see below)

Below you find the list of orders :

-   the name displayed on the dashboard

-   Pin up : allows to display the data on the dashboard

-   advanced configuration (small notched wheels) : Displays
    the advanced configuration of the command (method
    history, widget…)

-   Test : Used to test the command

The list of commands is as follows :

-   **Standing** : Wakes up the rabbit

-   **Restart** : Restart the rabbit

-   **Sleep** : Lets tell the rabbit to go to bed

-   **Air quality** : Gives air quality (requires
    activation of the corresponding plugin in openjabnab)

-   **Ephemeris** : Give ephemeris (requires activation of
    corresponding plugin in openjabnab)

-   **Talking clock** : Gives the time (requires activation of the
    corresponding plugin in openjabnab)

-   **Weather** : Gives weather (requires plugin activation
    correspondent in openjabnab)

-   **Saying** : Give a saying (requires plugin activation
    correspondent in openjabnab)

-   **Left ear** : Allows you to choose the position of the ear
    left (16 positions possible)

-   **Right ear** : Allows you to choose the position of the ear
    right (16 positions possible)

-   **Speak** : Lets say a sentence to the rabbit

Retrieve max address and token 
===================================

Go to the website [openjabnab] (http://openjabnab.fr/ojn_admin/index.php)
then log into your account :

![nabaztag4](../images/nabaztag4.png)

Click on rabbit :

![nabaztag5](../images/nabaztag5.png)

Then click on API :

![nabaztag6](../images/nabaztag6.png)

Here activate the purple and public API and get the mac address as well as
the purple API key to put it in the configuration of your rabbit
on Jeedom

Widget 
======

Here is the widget obtained after creation of the equipment :

![nabaztag7](../images/nabaztag7.png)

Changelog detailed :
<https://github.com/jeedom/plugin-nabaztag/commits/stable>
