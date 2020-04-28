EmonCMS is a PHP energy monitoring application (Emon :
Energy Monitor)

Regarding data sharing between Jeedom and EmonCMS (in
one way or the other), you will find in this documentation the means
to implement it.

A brief memo to install emoncms is also available (this
installation is not currently offered natively in Jeedom)

EmonCMS can be installed next to Jeedom or elsewhere. You can
even use the emoncms.org instance

Send a value from Jeedom to EmonCMS 
=========================================

To send a value from Jeedom to EmonCMS, the simplest solution
since it is available natively is to use the Push URL of a
Information

In Jeedom, you can access the advanced settings by clicking on the
toothed wheel on the right.

Then in "Advanced configuration", we find the last parameter
Push URL, it must be filled with the EmonCMS API address for the feed
we want to fill

The url of push is of the form :

[https://serveur/emoncms/input/post.json?json={power:\#value\#}&apikey=xxx](https://serveur/emoncms/input/post.json?json={power:#value#}&apikey=xxx)

With parameters :

-   Id : the feed Id found on emoncms

-   apikey : the api key of read & write for emoncms

-   value : you must leave * value * for Jeedom to send the
    value of info

-   power : to modify for

Notification to Jeedom or recovery from Jeedom 
======================================================

To take a data from emoncms in Jeedom, there are two possibilities
:

-   The first is to create an info via the script plugin in Jeedom
    and use the API URL of the feed. This method requires recovering
    the value regularly or via scenario for example and normally
    not useful because the data has its source in jeedom \ _setting

        https://serveur/emoncms/feed/value.json?Id=1&apikey=xxx

-   The second possibility is to use the emoncms Event plugin
    to trigger an action on certain conditions. This method
    could be useful if we have a data that is calculated or
    directly retrieved by emoncms (for example OpenBEM) With
    the advantage of notifying only when necessary, however the plugin
    event does not allow you to push and you will have to go through MQTT
    for Jeedom connection

Memo for EmonCMS installation 
================================

Installation is described on this github page :

<https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md>

Note that some plugins seem obsolete with the latest version
EmonCMS (v9 at the end of 2015)

If we install them, there are problems with the menus. Anyway,
we only need a priori :

git clone <https://github.com/emoncms/event.git> (He's the one who can
allow to create reactions on event in emoncms for
notify Jeedom)

git clone <https://github.com/emoncms/openbem.git> (This is a plugin for
monitor the energy consumption of the house)

git clone <https://github.com/emoncms/energy.git>

git clone <https://github.com/emoncms/report.git>

git clone <https://github.com/elyobelyob/mqtt.git>

 
===================

. 


     {
           
           
            

       .php (/|$) {
               ?
               :
               
               
               
               
               
           }

    }

     {
            .*?
    }
