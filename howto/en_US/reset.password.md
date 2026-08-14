# Procedure for Lost Jeedom Login Password

# > 4.2

The first thing to do is connect to Jeedom via SSH (using software such as Kitty or PuTTY).

>**Reminders**
>
>By default, the SSH login credentials on Jeedom (Luna, Atlas, Smart, Mini, and Mini+) are either:
>- Username: jeedom, password: Mjeedom96
>- Username: root, password: Mjeedom96

Then just type:

````
php /var/www/html/core/php/jeecli.php user list
````

## There are no users, so you need to create one

````
php /var/www/html/core/php/jeecli.php user add [username] [password]
````

Featuring:
- ``[username]`` : the user's name
- ``[password]`` : The new password—please note that it must not contain any spaces and must be at least 8 characters long

## A user already exists; you just need to change their password

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

Featuring:
- ``[username]`` : the user's name
- ``[password]`` : The new password—please note that it must not contain any spaces and must be at least 8 characters long

