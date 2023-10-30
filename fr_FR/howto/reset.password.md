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

Une fois que vous avez repéré le nom de l'utilisateur dont vous voulez changer le mot de passe faite : 

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

Avec : 
- ``[username]`` : le nom de l'utilisateur
- ``[password]`` : le nouveau mot de passe, attention il ne faut pas d'espace et une longueur de 8 caractères minimum

# > 3.3.50

La première chose à faire est de se connecter en SSH à Jeedom (avec un logiciel type kitty ou putty).

>**Rappels**
>
>Par défaut les identifiants de connexion SSH sur Jeedom (Luna, Atlas, Smart, Mini et Mini+) sont soit :
>- Nom d'utilisateur : jeedom, mot de passe Mjeedom96
>- Nom d'utilisateur : root, mot de passe Mjeedom96

Ensuite il vous suffit de taper :

````
php /var/www/html/install/reset_password.php
````

Le système va vous demander le nom d'utilisateur pour lequel vous avez perdu le mot de passe (vous avez la liste de tous les utilisateurs au cas où), une fois tapé (attention au majuscule/minuscule) appuyez sur la touche entrée. Et vous aurez votre nouveau mot de passe.

Exemple :

````
php /var/www/html/install/reset_password.php
Reset user password
List of user :
- toto
- plop
Please type login :
toto
Operation successfull, your new password for user toto is : 9ULB5RUr3VGHxBD8tYVSMeWPvOKILQbs
````

# < 3.3.50

Nous allons voir ici comment changer le mot de passe Jeedom directement en modifiant celui-ci dans la base de données, dans le cas où vous l’auriez oublié

La première chose à faire est de se connecter en SSH à Jeedom (avec un logiciel type kitty ou putty).

Une fois connecté, il faut récupérer les identifiants de la base de données :

````
cat /var/www/html/core/config/common.config.php
````

Ici, vous trouverez le mot de passe pour accéder à la base de données Jeedom, il faut ensuite faire :

````
mysql -ujeedom -p
````

Là il vous demande le mot de passe récupéré plus haut (le mot de passe ne s’affiche pas : c’est normal). Tapez ensuite (ou mieux, copier/coller. Il faut faire "clic-droit" sous Putty pour "coller") :

````
use jeedom;
REPLACE INTO user SET `login`='adminTmp',password='c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec',profils='admin', enable='1';
````

Voilà. Vous pouvez vous déconnecter/reconnecter à votre Jeedom avec les identifiants adminTmp/admin ce qui vous permettra de modifier le mot de passe des autres comptes également.

>**IMPORTANT**
>
>N'oubliez pas une fois vos accès récupérés de bien supprimer l'utilisateur adminTmp, le laisser pourrait être une potentielle faille de sécurité dont vous seriez seul responsable.

>**IMPORTANT**
>
> Si vous avez activé l'authentification AD/LDAP cette méthode de remise à zéro ne marchera pas à moins de désactiver le mode AD/LDAP. Vous pouvez le faire en faisant :
>````
>use jeedom;
>REPLACE INTO `config` SET `value`='0',`key`='ldap:enable',`plugin`='core';
>````
