# Procedimiento en caso de pérdida de la contraseña para conectarse a Jeedom

# > 4.2

Lo primero que debe hacer es conectarse en SSH a Jeedom (con un software tipo kitty o masilla).

>**Recordatorios**
>
>De forma predeterminada, las credenciales de conexión SSH en Jeedom (Luna, Atlas, Smart, Mini y Mini+) son :
>- Nombre de usuario : jeedom, contraseña Mjeedom96
>- Nombre de usuario : root, contraseña Mjeedom96

Entonces solo tienes que escribir :

````
php /var/www/html/core/php/jeecli.php user list
````

Una vez que haya localizado el nombre del usuario cuya contraseña desea cambiar, haga : 

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

Con : 
- ``[username]`` : nombre de usuario
- ``[password]`` : la nueva contraseña, ojo, no se necesitan espacios y una longitud mínima de 8 caracteres

# > 3.3.50

Lo primero que debe hacer es conectarse en SSH a Jeedom (con un software tipo kitty o masilla).

>**Recordatorios**
>
>De forma predeterminada, las credenciales de conexión SSH en Jeedom (Luna, Atlas, Smart, Mini y Mini+) son :
>- Nombre de usuario : jeedom, contraseña Mjeedom96
>- Nombre de usuario : root, contraseña Mjeedom96

Entonces solo tienes que escribir :

````
php /var/www/html/install/reset_password.php
````

El sistema te pedirá el nombre de usuario del que perdiste la contraseña (tienes la lista de todos los usuarios por si acaso), una vez escrito (ojo con mayúsculas/minúsculas) presiona la tecla enter. Y tendrás tu nueva contraseña.

Ejemplo :

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

Aquí veremos cómo cambiar la contraseña de Jeedom directamente modificándola en la base de datos, en caso de que la haya olvidado

Lo primero que debe hacer es conectarse en SSH a Jeedom (con un software tipo kitty o masilla).

Una vez conectado, debe recuperar los identificadores de la base de datos :

````
cat /var/www/html/core/config/common.config.php
````

Aquí encontrará la contraseña para acceder a la base de datos Jeedom, luego debe hacer :

````
mysql -ujeedom -p
````

Allí te pide la contraseña recuperada arriba (la contraseña no se muestra : es normal). Luego escriba (o mejor, copie / pegue. Debe "hacer clic con el botón derecho" debajo de Masilla para "pegar"") :

````
usar la libertad;
REPLACE INTO user SET `login`='adminTmp',password='c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec',profils='admin', enable='1';
````

Listo. Puede desconectarse / volver a conectarse a su Jeedom con los identificadores adminTmp / admin que le permitirán cambiar la contraseña de otras cuentas también.

>**Importante**
>
>No olvides una vez que hayas recuperado tu acceso eliminar el usuario adminTmp, dejarlo podría ser una potencial violación de seguridad de la cual serías el único responsable.

>**Importante**
>
> Si ha habilitado la autenticación AD / LDAP, este método de reinicio no funcionará a menos que desactive el modo AD / LDAP. Puedes hacer esto haciendo :
>````
>usar la libertad;
>REEMPLAZAR EN `config` SET` value` = '0',` key` = 'ldap:enable ', `plugin` =' core ';
>````
