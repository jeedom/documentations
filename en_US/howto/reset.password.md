# Procedure in case of loss of the password to connect to Jeedom

# > 4.2

The first thing to do is to connect in SSH to Jeedom (with a software type kitty or putty).

>**Reminders**
>
>By default, the SSH connection credentials on Jeedom (Luna, Atlas, Smart, Mini and Mini+) are either :
>- Username : jeedom, password Mjeedom96
>- Username : root, password Mjeedom96

Then you just have to type :

````
php /var/www/html/core/php/jeecli.php user list
````

## There are no users, so you need to create one

````
php /var/www/html/core/php/jeecli.php user add [username] [password]
````

With : 
- ``[username]`` : user name
- ``[password]`` : the new password, be careful, no spaces are required and a minimum length of 8 characters

## A user exists, you just need to change their password 

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

With : 
- ``[username]`` : user name
- ``[password]`` : the new password, be careful, no spaces are required and a minimum length of 8 characters

