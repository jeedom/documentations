# Jeedom-Kommandozeilen-Update

Wir werden hier sehen, wie man manuell aktualisiert

## Voraussetzungen

-   wissen, wie man sich in SSH mit Jeedom verbindet
-   die SSH-Kennungen kennen (siehe Installationsdokumentation)
-   Internetzugang von der Jeedom-Box haben

> **Wichtig**
>
> Denken Sie daran, vor jedem manuellen Update ein Backup zu erstellen und zu exportieren.

## Herunterladen und entpacken

In SSH tun :

````
sudo su -
cd /root
wget https://github.com/jeedom/core/archive/master.zip
unzip master.zip
cp -R core-master/* /var/www/html
cp -R core-master/.[^.]* /var/www/html
````

## Aktualisieren

Immer in SSH:

````
sudo su -
php /var/www/html/install/update.php mode=force
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

> **Wichtig**
>
> Wenn Ihre Jeedom-Installation etwas alt ist, müssen Sie alle ersetzen ``/var/www/html`` durch ``/usr/share/nginx/www/jeedom``
