# Mise à jour en ligne de commande de Jeedom

Nous allons voir comment mettre à jour manuellement votre Jeedom *(si vous ne pouvez plus accéder à l'interface par exemple)*

## Prérequis

-   savoir se connecter en SSH à Jeedom
-   connaître les identifiants SSH *(voir documentation d’installation)*
-   avoir un accès Internet depuis la box Jeedom

> **Important**
>
> Pensez bien à exporter la sauvegarde Jeedom fonctionnelle la plus récente en dehors de la box avant toute mise à jour manuelle.

## Téléchargement et décompression

En SSH, faites :

````bash
su -
cd /root
wget https://github.com/jeedom/core/archive/V4-stable.zip
unzip V4-stable.zip
cp -R core-4-stable/* /var/www/html
cp -R core-4-stable/.[^.]* /var/www/html
````

## Mise à jour

Toujours en SSH:

````bash
su -
php /var/www/html/install/update.php mode=force
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

> **Important**
>
> Si votre installation de Jeedom est un peu ancienne, il faut remplacer tous les ``/var/www/html`` par ``/usr/share/nginx/www/jeedom``
