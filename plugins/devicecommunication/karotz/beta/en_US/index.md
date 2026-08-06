# Karotz plugin

This plugin allows you to control your Karotz (running under [OpenKarotz](http://www.openkarotz.org/)). This goes from his belly LED, to his ears through sounds, speech synthesis and many others.

# Setup 

## Jeedom plugin configuration : 

**Installation / Creation**

In order to use the plugin, you must download, install and activate it like any Jeedom plugin.

Go to the Plugins / Communication menu, you will find the Karotz plugin.

You will arrive on the page which will list your equipment (you can have several Karotz) and which will allow you to create some.

Click on the Add button :

You will then arrive on the configuration page of your karotz.

**Commands**

You have nothing to do in this section. Orders will be created automatically.

-   Refresh: button to refresh the widget if necessary
-   Flashing Off : allows to stop the flashing of the led
-   Flashing On : activates the flashing of the led
-   Stop sound : stop a music or a sound in progress
-   Sleep : lets the rabbit sleep
-   Standing : Wakes up the rabbit
-   Standing Silent : allows to wake up the rabbit in silent mode
-   Clock : allows launching the rabbit clock mode
-   Mood : allows the rabbit to tell the selected mood
-   Mood No: allows the rabbit to say the mood indicated by its number
-   Random mood : allows the rabbit to say a random mood
-   Random Ear : allows you to move your ears randomly
-   Ear RàZ : allows to return the ears to the initial position
-   Ears Positions : adjusts the precise position of both ears
-   Sound of karotz (name) : allows to launch a Karotz sound (beep for example) by indicating its name
-   Karotz sound : allows you to launch a Karotz sound (beep for example) by selecting its name in a list
-   His url : allows you to read a URL to the Karotz (radio station for example)
-   Squeezebox on : allows you to activate the Karotz squeezebox mode
-   Squeezebox off : allows to deactivate the Karotz squeezebox mode
-   Sleeping : allows you to know if the Karotz is asleep (if not it is awake)
-   Color Status : allows to have the color currently on the belly of the Karotz
-   TTS : allows the rabbit to speak by choosing the voice and the message (by default the message is cached)
-   TTS without cache : allows to make the rabbit speak by choosing the voice and the message (the message is not cached)
-   Pulse speed : adjusts the speed of the flashing
-   % of space occupied : lets you know the% of disk used on the rabbit
-   Free space : value in MB of free space on the rabbit
-   Restart : allows you to reboot the rabbit
-   Set time : allows you to automatically reset the rabbit to the time (useful for changing the time)
-   Volume level : indicates in% the volume level
-   Volume : allows you to choose the volume level in% (recommended max 50%, risk of distortion above)
-   Volume + : increases volume level by 5%
-   Volume- : decreases the volume level by 5%
-   Picture : allows to take a photo by the rabbit
-   Photos delete : allows you to delete all the photos taken by the rabbit (frees up disk space)
-   Photos refresh listing : allows updating the list of preserved photos
-   Photos listing : list of photos kept
-   Photos download : allows you to download (by ftp) the photos stored on the disk (they are not deleted)

All these commands are available via the scenarios.

## TTS command 

The TTS command can have several options separated by & :

-   voice : the voice number
-   nocache : do not use the cache

Example :

``voice=3&nocache=1``

# FAQ 

>**How often is the information refreshed**
>
>The system retrieves the information every 30 minutes or after a request to change the rabbit's color or state. You can click the Refresh command to refresh manually.
