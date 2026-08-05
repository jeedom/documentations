# Procédure en cas de perte du mot de passe de connexion à Jeedom

# > 4.2

La première chose à faire est de se connecter en SSH à Jeedom (avec un logiciel type kitty ou putty).

>**Rappels**
>
>Par défaut les identifiants de connexion SSH sur Jeedom (Luna, Atlas, Smart, Mini et Mini+) sont soit :
>- Nom d'utilisateur : jeedom, mot de passe Mjeedom96
>- Nom d'utilisateur : root, mot de passe Mjeedom96

Ensuite il vous suffit de taper :

````
php /var/www/html/core/php/jeecli.php user list
````

## Il n'y a aucun utilisateur, alors il faut en crée un

````
php /var/www/html/core/php/jeecli.php user add [username] [password]
````

Avec : 
- ``[username]`` : le nom de l'utilisateur
- ``[password]`` : le nouveau mot de passe, attention il ne faut pas d'espace et une longueur de 8 caractères minimum

## Un utilisateur existe il faut juste changer son mot de passe 

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

Avec : 
- ``[username]`` : le nom de l'utilisateur
- ``[password]`` : le nouveau mot de passe, attention il ne faut pas d'espace et une longueur de 8 caractères minimum

