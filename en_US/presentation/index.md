# Presentation

Jeedom is an open-source and *cloudless* home automation solution (without server in the cloud). It works without subscription, which guarantees the functioning of your home automation without internet, as well as the security of your data.. It is also extremely open, multi-protocol, customizable, and highly scalable.

Jeedom offers a core, the Core, embedding the structure and the central functions.

Different [Plugins](https://market.jeedom.com) can then propose new functions.

The Core includes:

## Dashboard / Summary

*Equipment, including actuators or sensors, is organized by objects. Objects can, for example, represent physical parts*.

![Synthèse](images/doc-presentation-synthese.jpg)

![Dashboard](images/doc-presentation-dashboard.jpg)

## Historical

*All the information can be saved (temperature curve, consumption, door openings, etc.), and accessible in Analysis → History or from the Dashboard tiles.*

![Page Historique](images/doc-presentation-historique.jpg)

## Scenarios

*Scenarios allow you to automate all or part of your equipment. They are built with different blocks. Conditional blocks (If Then, Otherwise), actions, programming (IN x minutes or A hhmm), loop, comment, or php code. All blocks are nestable into each other, offering endless possibilities.*

![Page Scénario](images/doc-presentation-scenario.jpg)

## Interactions

*The interaction system in Jeedom allows you to perform actions from text or voice commands.*

![Page Interaction](images/doc-presentation-interaction.jpg)

## Update center

*The update center allows you to update all of Jeedom's functionality, including the core software and its Plugins. Other extension management functions are available (delete, reinstall, check, etc.).*

![Page Sauvegarde](images/doc-presentation-update.jpg)


# Market

Around this core are Plugins, which can be of all kinds :

-   Home automation protocol (Z-Wave, RFXcom, EnOcean…),
-   IP protocol (KNX, xPL…),
-   Communicating object (Nest, Netatmo…),
-   High level (alarm, thermostat ...),
-   Interface (widget),
-   Organization (calendar, Google calendar),
-   Development (script).

These Plugins can be installed from the Market and allow you to extend the possibilities of Jeedom.

![Page Market](images/doc-presentation-market.jpg)

Jeedom allows any plugin to chat with another on a standardized basis. This allows for example to use the thermostat or alarm Plugins with any home automation protocol or even an IP plugin or communicating object ...

