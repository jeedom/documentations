# Luna-plugin

# Coming soon : Hotspot

> The luna plugin allows you to connect from your luna to a Wifi network (with or without a password).

To do this, go to the luna plugin, then select the Luna equipment. Here you can activate and then select the wifi you want (2.4Ghz and 5Ghz), then type the password and save.

For the moment, the plugin only takes into account access with DHCP.

> Recovery module update

La mise à jour permet de mettre la dernière image en place sur le la Luna, celle-ci utilisera cette image lors d'un recovery (bouton reset de la box ou bouton recovery sur le plugin) Cliquer sur le bouton recovery, La luna téléchargera la dernière version de son image et reboutera, les leds vertes dessus celle-ci vont clignoter une fois fixe vous pourrez y accéder de nouveau via son adresse ip ou via http://jeedomluna.local, the recovery software will be up to date.

> Recovery (Reset Factory)

During a factory reset the box is restored to factory configuration according to the updated image via the button given above. ATTENTION you must make a backup of your box before this operation because you will lose everything during this phase. (except backup on SD).

> LED

You can via the select type command change the color and animation of the led (can be turned off).

> Batterie

You can via two feedbacks with the battery percentage as well as the type of power supply of your box. (charging, decharging, Full etc…).

> SD

Allows the management (formatting) of the micro-SD card that you can add to the box. as well as the transfer to this SD card of Jeedom backups.

> Hotspot (ALPHA))

in the Wifi part of the plugin you can check the Hotspot box which will allow you to create a wifi access point on your Box luna. (DNS and IP forwarding (bridge between ethernet and wifi) functional on it).