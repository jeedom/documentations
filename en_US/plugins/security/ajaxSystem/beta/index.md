# Ajax System

## Configuration

>**IMPORTANT**
>
>To have a real-time feedback, it is ABSOLUTELY necessary that your Jeedom be accessible from the outside (external access URL used)

The configuration of the plugin is very simple and takes place in 2 steps : 

- setting up the link between your jeedom and your alarm
- addition of an email sharing for reporting events  

>**IMPORTANT**
>
>An important point Ajax does not raise a global alert when an alarm is triggered but does raise the status on the detector which triggered the alarm (events command)

>**IMPORTANT**
>
>The daemon is only used for the SIA part. If you deactivate it, you will still have information coming back from the cloud. You can therefore deactivate it if you do not use the SIA part

## Compatibilité

You can find [here](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=ajaxSystem) the list of modules compatible with the plugin

### Link configuration 

To set up the link between your Jeedom and your Ajax alarm, go to "Plugin" -> "Plugin management" -> "Ajax System" then click on "Connect", you enter your Ajax identifiers and click on "Validate".

>**IMPORTANT**
>
>If you have a professional account, you shouldn't use it here, you absolutely have to use a simple user account

>**NOTE**
>
> Jeedom absolutely does not save your Ajax credentials : they are just one used for the first request to Ajax and have the access token and the refresh token. The refresh token makes it possible to recover a new access token which has a lifespan of only a few hours.

>**NOTE**
>
> Once the link is made all the requests go through our cloud but at no time does the cloud store your access token, so it is not possible with only the jeedom cloud to act on your alarm. For any action on this, you absolutely need the combination of your Jeedom's access token and a key known only to our cloud 

### Configuration of event reporting

From the Ajax application, go to the hub then in settings (small cogwheel at the top right) go to user and add the user : ajax@jeedom.com

>**NOTE**
>
>The invitation remains and will always remain pending, this is normal

## Equipment 

Once the configuration is on "Plugin" -> "Plugin management" -> "Ajax System" you just have to synchronize, Jeedom will automatically create all Ajax equipment linked to your Ajax account. 

### Movement detector

Small specificity for the motion detector, it does not go up to the detection of movement permanently. In fact, it only goes up when the alarm is active and by the event command

### Opening detector

For him no worries, you have real-time status of window / door open / closed information.

## SIA

>**IMPORTANT**
>
> This feature is currently not compatible with RPIs, and does not seem to work correctly with Debian 11 (which is currently not officially compatible with jeedom because too many plugins do not support it)

It is also possible to connect the Ajax alarm to Jeedom by the SIA protocol, which has the advantage of being local (no cloud) but which can only receive information (no alarm control possible).

>**IMPORTANT**
>
> If you are in python <3.8 (Debian 10), or if you get the `ImportError: cannot import name 'CommunicationsProtocol' from 'pysiaalarm' you must go to "Settings" -> "System" -> "Configuration" then "OS / DB" tab then in "System Tools" click on "Open" in front of "System Administration". And do the command `sudo pip3 install pysiaalarm == 3.0.0b9`

## Configuring the AIS

The configuration of the SIA is quite simple, in "Plugin" -> "Plugin management" -> "Ajax Systems", you will have : 
- wearing the SIA daemon
- the SIA account
- the SIA encryption key

You must then go to the Ajax Systeme application (from your phone), go to "Devices" then click on the hub, go to its configuration (cogwheel at the top right), go to "Monitoring center "and fill in the information : 

- port (the one in Jeedom)
- SIA account (same in Jeedom)
- encryption key (idem)
- ip : put the local ip of Jeedom

You can also change the service test frequency from 1min to 24h (to reduce the load on your Jeedom).

Normally if all is well you should see the "Central Station" change to "Connected"

>**IMPORTANT**
>
> Certain information is only returned if the AIS is configured

# FAQ

>**MQTT Setup**
>
>In the configuration of the plugin you have the possibility to pass for the SIA part in mqtt, there is voluntarily no explanation of how because the implementation is relatively complex. The option is there to meet a customer need only.
