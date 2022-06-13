# 

# > 4.2

).

>****
>
> :
>-  : 
>-  : 

 :

````
php /var/www/html/core/php/jeecli.php user list
````

 : 

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

 : 
- ``[username]`` : 
- ``[password]`` : 

# > 

).

>****
>
> :
>-  : 
>-  : 

 :

````
php /var/www/html/install/reset_password.php
````

. .

 :

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

# < 



).

 :

````
cat /var/www/html/core/config/common.config.php
````

 :

````
mysql -ujeedom -p
````

 : ). . ") :

````

REPLACE INTO user SET `login`='adminTmp',password='c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec',profils='admin', enable='1';
````

.

>****
>
>.

>****
>
> .  :
>````
>
>:
>````
