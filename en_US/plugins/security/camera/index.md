# Camera plugin

# Description

Plugin to create and manage wifi cameras (display and recording).

# Plugin configuration

After installing the plugin, you just need to activate it. Some parameters must be entered in the plugin configuration :

-   **Record path** : indicates the path where Jeedom should store the images it captures from your cameras (it is not recommended to touch it). If your path is not in the Jeedom installation path then you will not be able to view the captures in Jeedom.
-   **Maximum recording folder size (MB)** : indicates the maximum size authorized for the folder where the catches are saved (it is not recommended to touch it). If this quota is reached Jeedom will delete the oldest catches.
-   **The camera plugin must react to interactions** : keywords / phrases to which the plugin will react via Jeedom interactions.
-   **Panel** : allows you to display the panel (Home Menu → Camera) and to have a view of all your cameras (see below). Do not forget to activate the panel in the configuration of the plugin to access it later.


# Equipment configuration

## Equipement

Here you have the main information of your camera :

-   **Camera equipment name** : name of your camera equipment.
-   **Parent object** : indicates the parent object to which the equipment belongs.
-   **Activate** : makes your equipment active.
-   **Visible** : makes it visible on the dashboard.
-   **IP** : the local IP address of your camera.
-   **Port** : the port for which to attach the camera.
-   **Protocol** : the communication protocol of your camera (http or https).
-   **Username** : username to log in to the camera (if required). Please note the plugin does not support special characters (you must therefore limit yourself to numbers, lowercase / uppercase letters).
-   **Password** : password to connect to the camera (if necessary).Please note the plugin does not support special characters (you must therefore limit yourself to numbers, lowercase / uppercase letters).
-   **Snapshot URL** : Camera snapshot URL. Change depending on the cameras. Be careful not to put a flow url under penalty of crashing Jeedom. You can add the tags \#username\# and \#password\#, which will be automatically replaced by the username and password when using this command.
-   **Feed URL** : type camera video stream url ``rtsp://#username#:#password#@#ip#:554/videoMain`` (example for Foscam cameras).
-   **Model** : allows to choose the camera model. Be careful : if you change it will overwrite your configuration settings.

## Image

This part allows you to configure the image quality. Indeed Jeedom decreases the size of the image or the compress before sending it to your browser. This improves the fluidity of the images (because they are lighter). It is also in this part that you can configure the number of frames per second to display. All settings are available in : mobile / desktop and miniature / normal.

-   **Refreshment (s)** : delay in seconds between the display of 2 images (here you can put numbers less than 1).
-   **Compression (%)** : the lower it is the less the image is compressed, at 100% no compression is done.
-   **Size (% - 0 : automatique)** : the higher the% the closer we are to the original size of the image. At 100% no resizing of the image takes place.

> **NOTE**
>
> If you put a compression of 0% and a size of 100%, Jeedom will not touch the image in normal mode. This is not valid in miniature mode where there is a maximum image size of 360px.

## Capture

-   **Maximum duration of a recording** : maximum duration of recordings.
-   **Always make a video** : forces Jeedom to always convert video recordings before recording.
-   **Number of frames per second of the video** : number of frames per second of videos.
-   **Motion detection threshold (0-100)** : motion detection threshold (it is advisable to set 2). The higher the value, the higher the sensitivity.
-   **Delete all camera captures** : delete all captures and recordings from the camera.

## Alimentation

-   **ON command** : Camera power control.
-   **OFF command** : Control to cut off the power to the camera.

## Commandes

-   **ID** command (use with info type commands for example to send camera movement information to Jeedom via the API, see below)
-   **Name** of the command with the possibility of putting an icon instead (to delete it you must double-click on the icon in question)
-   **Type** and command subtype
-   **Request** to send to the camera to do an action (switch to night mode, ptz, etc.). You can use the tags \#username\# and \#password\#, which will be automatically replaced by the username and password when using this command
-   **Stop command** : for PTZ cameras, there is often a command that stops the movement, this is where it must be specified
-   **Show** : allows to display the order or not on the dashboard
-   **Advanced configuration (small notched wheels)** : displays the advanced configuration of the command (logging method, widget, etc.)
-   Test : Used to test the command
-   **Delete (sign -)** : allows to delete the command

# The widget

We find on this one the image of the camera, the commands defined in the configuration, the command to take a capture, the command to start taking multiple image captures and the command to browse these captures.

> **TRICK**
>
> On the dashboard and the panel it is possible to resize the widget to adapt it to your needs.

Click on the image to display it in a window and in a larger format.

Clicking on the last command to browse the captures will show you these.

You will find here all the catches organized by day then by date, you can for each of them :

-   see it bigger by clicking on the image
-   download it
-   delete it

In mobile the widget is a little different : if you click on the image of the camera you get this one in bigger with the possible commands.

# The panels

The camera plugin also provides a panel that allows you to see all your cameras at once, it is accessible by Home → Camera.

> **NOTE**
>
> To have it you have to activate it on the plugin configuration page.

It is of course also available in mobile by Plugin → Camera.

# Save and send capture

This command, a little specific, allows after taking a capture to send it (compatible with the plugin slack, mail and transfer).

The configuration is quite simple you call the action of sending of capture (called &quot;Recording&quot;) in a scenario. In the title part you pass the options.

By default, just put the number of captures you want in the "number of captures or options" field, but you can go further with options (see details below "advanced options of captures"). In the message part, you just have to fill in the order of the plugin (currently slack, email or transfer) which sends the captures. You can put several separated by &amp;&amp;.

## Advanced capture options

-   ``nbSnap`` : number of captures, if not specified then the captures are made until a request to stop recording or stop the camera
-   ``delay`` : delay between 2 captures, if not specified then the delay is 1s
-   ``wait`` : waiting time before starting to catch, if not specified then no shipment is made
-   ``sendPacket`` : number of catches triggering the sending of a catch packet, if not specified then the catches will only be sent at the end
-   ``movie=1`` : after recording is finished, images are converted to video
-   ``sendFirstSnap=1`` : send the first capture of the recording

> **Examples**
>
> nbSnap = 3 delay = 5 ==> send 3 captures made at 5 second intervals (send triggered via the scenario) movie = 1 sendFirstSnap = 1 record a video until the command "Stop Recording" to insert in the scenario. The movie will be stored on your Jeedom.

# Send motion detection to Jeedom

If you have a camera that has motion detection and you want to transmit it to Jeedom this is the url to put on your camera :

``http://#IP_JEEDOM#/core/api/jeeApi.php?apikey=#APIKEY#&type=camera&id=#ID#&value=#value#``

Obviously, before creating an info type command on your camera

# FAQ

>**Where are the records ?**
>
>The records are found by default in plugins / camera / data / records /*ID\_CAM*, be careful this may vary if you asked Jeedom to save them elsewhere.

>**Addictions fail to settle ?**
>
>In ssh or in administration -&gt; OS / DB -&gt; System do : ``dpkg --configure -a``.

>**What are the conditions for my camera to be Jeedom compatible (if it is not in the compatibility list) ?**
>
> The only condition is that the camera has an url which sends back an image (well an image not a video stream).
