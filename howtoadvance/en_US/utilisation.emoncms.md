# Using EmonCMS

EmonCMS is a PHP application for energy monitoring (Emon: Energy Monitor)

Regarding data sharing between Jeedom and EmonCMS (in either direction), you’ll find instructions on how to set it up in this documentation.

A brief guide to installing emoncms is also available (this installation is not currently supported natively in Jeedom)

EmonCMS can be installed alongside Jeedom or elsewhere. You can even use the emoncms.org instance

# Send a value from Jeedom to EmonCMS

To send a value from Jeedom to EmonCMS, the simplest solution—since it’s available natively—is to use the push URL for a piece of information

In Jeedom, you can access the advanced settings by clicking the gear icon on the right.

Next, under "Advanced Settings," you'll find the last setting, "Push URL." Enter the EmonCMS API address for the feed you want to populate.

The push URL is in the following format:

``https://serveur/emoncms/input/post.json?json={power:\#value\#}&apikey=xxx``

With the following settings:

-   id: the feed ID found on emoncms
-   apikey: the read&write API key for emoncms
-   value: You must leave *value* so that Jeedom sends the value of the information
-   power: this needs to be changed to

# Notifications to Jeedom or data retrieval from Jeedom

To retrieve data from emoncms in Jeedom, there are two options:

-   The first method is to create a data point using the script plugin in Jeedom and use the feed’s API URL. This method requires retrieving the value regularly or via a scenario, for example, and is generally not useful because the data originates from ``jeedom_setting`` : ``https://serveur/emoncms/feed/value.json?id=1&apikey=xxx``
-   The second option is to use the emoncms Event plugin to trigger an action based on certain conditions. This method could be useful if you have data that is calculated or directly retrieved by emoncms (for example, OpenBEM). The advantage is that notifications are sent only when necessary; however, the Event plugin does not support push notifications, so you’ll need to use MQTT to connect to Jeedom.

# EmonCMS Installation Guide

The installation is described on this GitHub page [here](https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md)

Please note that some plugins appear to be obsolete with the latest version of EmonCMS (v9 as of late 2015)

If you install them, there are issues with the menus. In any case, you should only need the following:

````
git clone https://github.com/emoncms/event.git # C’est lui qui pourra permettre de créer des réactions sur évènement dans emoncms pour notifier Jeedom
git clone https://github.com/emoncms/openbem.git # C’est un plugin pour faire un suivi des consommations énergétiques de la maison
git clone https://github.com/emoncms/energy.git
git clone https://github.com/emoncms/report.git
git clone https://github.com/elyobelyob/mqtt.git
````

# Nginx Configuration

Here is an example configuration for Nginx. For Apache, no special configuration is needed—just a standard directory.

````
location /emoncms {
       alias /var/www/emoncms/;
       index index.php;
        try_files = $uri $uri/ @missing;

   location ~ [^/]\.php(/|$) {
           fastcgi_split_path_info ^(.+?\.php)(/.*)$;
           fastcgi_pass unix:/var/run/php5-fpm.sock;
           fastcgi_index index.php;
           include fastcgi_params;
           fastcgi_param   REMOTE_USER   $remote_user;
           fastcgi_param  PATH_INFO $fastcgi_path_info;
           fastcgi_param SCRIPT_FILENAME /var/www/emoncms/index.php;
       }

}

location @missing {
        rewrite ^/emoncms/(.*)$ /emoncms/index.php?q=$1&$args last;
}
````
