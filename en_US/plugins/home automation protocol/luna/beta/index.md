# Luna-plugin

# Attention concern of Luna flashing

We got feedback on a flashing error of some Lunas. (only those shipped before 2023)
We are sorry for this and have informed our Domadoo reseller.

If you manage to connect to your Jeedom, please launch the Luna plugin (Plugins/Home automation gateway/luna) and go to : 
  - Recovery module update
Then do the recovery in :
  - Recovery (Reset Factory)
This will update your Box completely.

If you do not have access to your box, please leave the box's reset button pressed for more than 10 seconds; when the latter is released, the box should flash; let it finish the process. Jeedom should become operational again. You can do the above procedure for a complete update.

If it doesn't blink : 
 - Please contact Domadoo via the following link; the Domadoo team will provide you with a return label and send you a correctly flashed Luna :
https://www.domadoo.fr/rma

# Coming soon : Hotspot

> The luna plugin allows you to connect from your luna to a Wifi network (with or without a password).

To do this, go to the luna plugin, then select the Luna equipment. Here you can activate and then select the wifi you want (2.4Ghz and 5Ghz), then type the password and save.

For the moment, the plugin only takes into account access with DHCP.

> Recovery module update

The update brings the latest image into place on the Luna; it will use this image during a recovery (reset button on the box or recovery button on the plugin).
Click on the recovery button; the Luna will download the latest version of its image and restart, the green LEDs on the Luna box will flash. 
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via http://jeedomluna.local; the recovery software will be up to date.

> Recovery (Reset Factory)

During a factory reset the box is restored to factory configuration according to the updated image via the button given above. WARNING : you must make a backup of your box before this operation because you will lose the data of your box (except backup on the SD).

> LED

You can via the select type command change the color and animation of the led (can be turned off).

> Batterie

You can, via two feedbacks, have the battery percentage as well as the type of power supply of your box. (charging, decharging, Full etc…).

> SD

Allows the management (formatting) of the micro-SD card that you can add to the box, as well as the transfer to this SD card of Jeedom backups.

> Power and Reset buttons

- Reset : less than 1 seconds reboot force box.
- Reset : more than 10 seconds Reset Factory of the box.
- Food : more than 10 seconds shutdown of the fox force with shutdown of the battery (you must have removed the power supply to do so)

> Hotspot (ALPHA))

In the Wifi part of the plugin you can check the Hotspot box which will allow you to create a wifi access point on your Box luna. (DNS and IP forwarding (bridge between ethernet and wifi) functional on it).
