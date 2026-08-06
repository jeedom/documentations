# 2N

#Description

Plugin for 2N intercoms.



# Prerequisites

 - Find out the ip address of your 2N intercom,
 - Have the camera plugin installed,
 - Have created a user account via the interface of your 2N intercom.



# Installation

After downloading the plugin, you must first activate it, like any Jeedom plugin.
We must start the demon : check that the daemon is in OK.



# Configuration

For a new 2N device, you must connect to the 2N interface, accessible via the latter's ip address (to find out the IP of your device, you can install the 2N Network Scanner software, which will detect 2N devices. present on your network

By default, the username and password of your 2N device are : admin, 2n.

Once connected to the interface, you will need:


Activate the options to access the API services :
![config](../images/2nAPI.png)


Create an account with rights for API services :
![config](../images/2nUser.png)


Configure the switches on your device :
![config](../images/2nSwitch.png)


Create a user to assign your access codes to the intercom :
![config](../images/2nUsers.png)


Configure user :
![config](../images/2nConfigUser.png)




Once this is done, you can create your equipment in Jeedom with the password and the username of the 2n account configured with API rights (see above).
In the drop-down menus, choose the modules installed or not on your intercom : Camera, Fingerprint reader, Anti-tearing module.


![config](../images/2nCrea.png)




You can create directly without going through the interface of your 2N, a code per Switch available depending on your device, in Superuser Code.
You can separate the codes with a comma to assign multiple codes per Switch
>**IMPORTANT**
>
> Codes must be numeric

You can also change the type of signal when an invalid card is passed in front of the reader (Simple Beep, Beep + Light, or None).

![config](../images/2nSuperUser.png)



Assign it a parent and make it visible and active.

If you have a camera on your equipment, a camera object will be created via the Camera plugin; you will have to configure it to make it appear on your dashboard.



>**IMPORTANT**
>
> You must restart the daemon after creating an equipment, to assign it an Identifier for API requests.
> ![config](../images/2nDemon.png)




# Dashboard commands and information


State :

- By default, the switch states are linked to their action commands; clicking on the switch activates the switch (we will see the switch icon change color).
- The state of the switches goes back to those available on your device (from 1 to 4).


- Call gives you the communication status if you receive a call from another 2n device (coming, received etc).

- Tear-off indicates whether a tearing has occurred (for models equipped with the Anti-tearing module).

- Bluetooth_tel_mobile signals the authentication of the Bluetooth reader.


- Noise signals increased detection of noise level.

- Card reader : displays the number of the configured RFID card.


- Entry code : displays the code entered on your intercom.


- last_button pressed : shows the last one pressed on your intercom.

- Footprint : displays the ID of the registered person (for equipment equipped with the fingerprint module).



- Door_state indicates a problem with the door status.

- Motion, reports motion detection via a camera (for models equipped with camera only).

- Unauthorized_opening, signals an unauthorized door opening (for models equipped with digital input only and a start button).
- Open_long, indicates a door opening too long or a failure to close the door within the allotted time (for models equipped with digital input only).



Orders :

- Switch_ state (switch id) : allows you to turn on or off the Switch whose id corresponds and to have a status feedback from your switch.





Additional information :

Activate the logs in Debug mode to have more information on the events detected by your intercom
