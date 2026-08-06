Presentation
============

This plugin allows you to manage GCE Ecodevice cards.

Initially, this plugin was created to connect GCE Ecodevices.

Data visible on the Dashboard :
-----------------------------------

-   '''Tele-information counters '''

![ecodevice screenshot2](../images/ecodevice_screenshot2.jpg)

-   '''pulse counters'''

![ecodevice screenshot3](../images/ecodevice_screenshot3.jpg)

Refresh rate
-----------------------------

The plugin updates this data in 2 ways :

Data is retrieved by the plugin every minute for everyone
the counters. It is not possible to have a higher frequency.

For flow rates, instantaneous consumption and Apparent Power a
collection is done by a daemon according to the configured frequency
plugin level. Please note, a large decrease generates a large
overloading your jeedom server.

Installation / Setup
========================

We will now configure a device. To do so, click
on '' 'Plugins / Home automation protocol / Eco-device'''.

Then click on the button at the top left "'' 'Add a
équipement'''".

Then enter the name of the equipment (ex. Ecodevice 1).

Then define :

-   '''Parent object'''

-   '''Category '' '(optional)

-   '''Activate '' '(check, otherwise the equipment will not be usable)

-   '''Visible '' '(optional if you don't want to make it visible on
    the dashboard)

-   '''IP adress'''

-   '''Port'''

-   '''Compte'''

-   '''Password'''

![ecodevice screenshot1](../images/ecodevice_screenshot1.jpg)

You will find all the elements of the card in the menu at
left by clicking on the icon.

Here is the counter configuration page. As long as the counter type
is not defined, orders are not created.

![ecodevice screenshot4](../images/ecodevice_screenshot4.jpg)

Here is the configuration page for a tele-information input. As long as the
contract type is not defined, orders are not created.

![ecodevice screenshot5](../images/ecodevice_screenshot5.jpg)

FAQ
===

In the left menu, click on the following icon to have
access : ![the](../images/acces_sous_indicateur.jpg)

By default it is every minute. It is possible to configure
manually push on the ecodevice. For debits, consumption
instantaneous and apparent power can be collected more
frequently depending on the demon.

Click on the icon to the left of the card name in the list of
gauche.

To calculate the fuel flow in one hour of operation,
know the marking of your fuel nozzle. For that, you
find the information in [the doc
suivant](http://fr.cd.danfoss.com/PCMPDF/DKBDPD060A204.pdf).

The value given is in USgal / Hour with the correspondence in Kg / H.

For the density of the fuel, we can take 820Kg / m³ and a pressure of 7
bar.

So if you have a nozzle marked 0.65S : 2.67 kg / h (depending on
Danfoss table). 2.67x0.82 = 2.1894 liters per hour. This gives a
"approximate" indication of your consumption.

Yes, it was not written by me, but has the merit of existing.
Thanks to the editor.
<http://blog.domadoo.fr/guides/jeedom-guide-dutilisation-plugin-ecodevice/>
