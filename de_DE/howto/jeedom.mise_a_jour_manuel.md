# Jeedom Kommandozeilen-Update

Wir werden sehen, wie Sie Ihr Jeedom manuell aktualisieren können *(wenn Sie zum Beispiel nicht mehr auf die Schnittstelle zugreifen können)*

## Voraussetzungen

-   weiß, wie man in SSH eine Verbindung zu Jeedom herstellt
-   SSH-Anmeldeinformationen kennen *(siehe Installationsdokumentation)*
-   haben Internetzugang von der Jeedom Box

> **Wichtig**
>
> Denken Sie daran, vor jedem manuellen Update das neueste funktionsfähige Jeedom-Backup außerhalb der Box zu exportieren.

## Herunterladen und entpacken

In SSH tun :

````bash
su -
cd /root
wget https://github.com/jeedom/core/archive/master.zip
entpacken Sie master.zip
cp -R core-master/* /var/www/html
cp -R core-master/.[^.]* /var/www/html
````

## Mise à jour

Toujours en SSH:

````bash
su -
php /var/www/html/install/update.php mode=force
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

> **Wichtig**
>
> Wenn Ihre Jeedom-Installation etwas alt ist, müssen Sie alle ersetzen ``/var/www/html`` Von ``/usr/share/nginx/www/jeedom``
