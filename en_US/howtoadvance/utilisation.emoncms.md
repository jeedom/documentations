# Using emoncms

EmonCMS is a PHP energy monitoring application (Emon : Energy Monitor)

Regarding data sharing between Jeedom and EmonCMS (one way or the other), you will find in this documentation the means to implement it.

A brief memo to install emoncms is also available (this installation is currently not offered natively in Jeedom)

EmonCMS can be installed next to Jeedom or elsewhere. You can even use the emoncms.org instance

# Send a value from Jeedom to EmonCMS

To send a value from Jeedom to EmonCMS, the simplest solution since it is available natively is to use the Push URL of a piece of information

In Jeedom, you can access the advanced parameters by clicking on the toothed wheel on the right.

Then in "Advanced configuration", we find the last Push URL parameter, it must be filled with the EmonCMS API address for the feed we want to fill

The url of push is of the form :

``https://serveur/emoncms/input/post.json?json={power:\#value\#}&apikey=xxx``

With parameters :

-   Id : the feed id found on emoncms
-   apikey : the api key of read & write for emoncms
-   value : we must leave *value* so that Jeedom sends the value of the info
-   power : to modify for

# Notification to Jeedom or recovery from Jeedom

To take a data from emoncms in Jeedom, there are two possibilities :

-   The first is to create an info via the script plugin in Jeedom and use the API URL of the feed. This method requires recovering the value regularly or via scenario for example and normally not useful because the data has its source in ``jeedom_setting`` : ``https://serveur/emoncms/feed/value.json?id=1&apikey=xxx``
-   The second possibility is to use the emoncms Event plugin to trigger an action on certain conditions. This method could be useful if we have a data which is calculated or directly retrieved by emoncms (for example OpenBEM) With the advantage of notifying only when necessary, on the other hand the event plugin does not allow pushing and you will have to go through MQTT for the Jeedom connection

# Memo for EmonCMS installation

Installation is described on this github page [here](https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md)

Note that some plugins seem obsolete with the latest EmonCMS version (v9 at the end of 2015)

If we install them, there are problems with the menus. Anyway, we only need a priori to :

````
git clone https://github.com/emoncms/event.git # C'est lui qui pourra permettre de créer des réactions sur évènement dans emoncms pour notifier Jeedom
git clone https://github.com/emoncms/openbem.git # C'est un plugin pour faire un suivi des consommations énergétiques de la maison
git clone https://github.com/emoncms/energy.git
git clone https://github.com/emoncms/report.git
git clone https://github.com/elyobelyob/mqtt.git
````

# Nginx configuration

Here is an example configuration for Nginx. For Apache there is no need for a specific conf classic directory

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
