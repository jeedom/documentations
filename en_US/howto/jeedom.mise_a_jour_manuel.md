# Jeedom command line update

We will see how to manually update your Jeedom *(if you can no longer access the interface for example)*

## Prerequisites

-   know how to connect in SSH to Jeedom
-   know ssh credentials *(see installation documentation)*
-   have Internet access from the Jeedom box

> **IMPORTANT**
>
> Remember to export the most recent functional Jeedom backup outside the box before any manual update.

## Download and unzip

In SSH, do :

```bash
knew -
cd /root
wget https://github.com/jeedom/core/archive/V4-stable.zip
unzip V4-stable.zip
cp -R core-4-stable/* /var/www/html
cp -R core-4-stable/.[^.]* /var/www/html
```

## Update

Still in SSH:

```bash
knew -
php /var/www/html/install/update.phpmode=strength
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
```

> **IMPORTANT**
>
> If your Jeedom installation is a bit old, you must replace all ``/var/www/html`` by ``/usr/share/nginx/www/jeedom``
