We will see here how to change the Jeedom password directly
by modifying it in the database, in case you have forgotten it 

The first thing to do is to connect in SSH to Jeedom (with a
kitty or putty software).

Once connected, you must retrieve the identifiers from the database
Data :

``` {.bash}
cat /var/www/html/core/config/common.config.php
```

Here you will find the password to access the database
Jeedom, then you have to do :

``` {.bash}
mysql -ujeedom -p
```

There he asks you for the password retrieved above (the password
does not display : it's normal). Then type (or better,
copy paste. You have to "right-click" under Putty to "paste") :

``` {.bash}
use jeedom;
REPLACE INTO user SET `login` = 'adminTmp', password = 'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6dcdc'
```

Here. You can disconnect / reconnect to your Jeedom with the
adminTmp / admin identifiers which will allow you to modify the password
pass other accounts also.

>**IMPORTANT**
>
>Remember once your access is recovered to delete the user adminTmp, leaving it could be a potential
security breach for which you are solely responsible.

>**IMPORTANT**
>
> If you have enabled AD / LDAP authentication this reset method will not work unless you disable AD / LDAP mode. You can do this by doing : 
>``` {.bash}
>use jeedom;
>REPLACE INTO `config` SET` value` = '0', `key` = 'ldap:enable ', `plugin` =' core ';
>```
