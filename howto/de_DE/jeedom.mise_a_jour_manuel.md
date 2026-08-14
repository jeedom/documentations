# Befehlszeilen-Update für Jeedom

Wir werden sehen, wie Sie Ihr Jeedom manuell aktualisieren können *(zum Beispiel, wenn Sie keinen Zugriff mehr auf die Benutzeroberfläche haben)*

## Voraussetzungen

-   So stellen Sie eine SSH-Verbindung zu Jeedom her
-   Die SSH-Anmeldedaten kennen *(siehe Installationsanleitung)*
-   Internetzugang über die Jeedom-Box

> **Wichtig**
>
> Denken Sie unbedingt daran, vor jedem manuellen Update die aktuellste funktionsfähige Jeedom-Sicherung aus der Box zu exportieren.

## Herunterladen und Entpacken

Führen Sie in SSH Folgendes aus:

````bash
su -
cd /root
wget https://github.com/jeedom/core/archive/master.zip
unzip master.zip
cp -R core-master/* /var/www/html
cp -R core-master/.[^.]* /var/www/html
````

## Aktualisierung

Weiterhin über SSH:

````bash
su -
php /var/www/html/install/update.php mode=force
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

> **Wichtig**
>
> Wenn Ihre Jeedom-Installation schon etwas älter ist, müssen Sie alle ``/var/www/html`` von ``/usr/share/nginx/www/jeedom``
