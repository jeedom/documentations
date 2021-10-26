# Procedure in case of loss of the password to connect to Jeedom

# > 4.2

The first thing to do is to connect in SSH to Jeedom (with a software type kitty or putty).

>**Reminders**
>
>By default, the SSH connection identifiers on jeedom (smart, mini and mini +) are either :
>- Username : jeedom, password Mjeedom96
>- Username : root, password Mjeedom96

Then you just have to type :

````
php /var/www/html/core/php/jeecli.php user list
````

Once you have located the name of the user whose password you want to change, do : 

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

With : 
- ``[username]`` : user name
- ``[password]`` : the new password, be careful you don't need spaces and a minimum length of 8 characters

# > 3.3.50

The first thing to do is to connect in SSH to Jeedom (with a software type kitty or putty).

>**Reminders**
>
>By default, the SSH connection identifiers on jeedom (smart, mini and mini +) are either :
>- Username : jeedom, password Mjeedom96
>- Username : root, password Mjeedom96

Then you just have to type :

````
php /var/www/html/install/reset_password.php
````

The system will ask you for the username for which you have lost the password (you have the list of all users in case), once typed (attention to the capital letter / lowercase) press the enter key. And you will have your new password.

Example :

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

We will see here how to change the Jeedom password directly by modifying it in the database, in case you have forgotten it

The first thing to do is to connect in SSH to Jeedom (with a software type kitty or putty).

Once connected, you must retrieve the identifiers from the database :

````
cat /var/www/html/core/config/common.config.php
````

Here you will find the password to access the Jeedom database, you must then do :

````
mysql -ujeedom -p
````

There he asks you for the password recovered above (the password is not displayed : it's normal). Then type (or better, copy / paste. You have to "right-click" under Putty to "paste"") :

````
use jeedom;
REPLACE INTO user SET `login`='adminTmp',password='c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec',profils='admin', enable='1';
````

Here. You can disconnect / reconnect to your Jeedom with the adminTmp / admin identifiers which will allow you to change the password of other accounts as well.

>**IMPORTANT**
>
>Remember once your access is recovered to delete the adminTmp user, leaving it could be a potential security breach for which you are solely responsible.

>**IMPORTANT**
>
> If you have enabled AD / LDAP authentication this reset method will not work unless you disable AD / LDAP mode. You can do this by doing :
>````
>use jeedom;
>REPLACE INTO `config` SET` value` = '0', `key` = 'ldap:enable ', `plugin` =' core ';
>````
