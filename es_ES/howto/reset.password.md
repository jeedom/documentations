# Procedimiento en caso de pérdida de la contraseña de conexión de Jeedom

# > 4.2

Lo primero que hay que hacer es conectarse en SSH a Jeedom (con software tipo kitty o putty).

>**Recordatorios**
>
>De forma predeterminada, las credenciales de inicio de sesión de SSH en jeedom (smart, mini y mini+) son :
>- Nombre del usuario : jeedom, contraseña Mjeedom96
>- Nombre del usuario : raíz, contraseña Mjeedom96

Entonces solo escribe :

````
php /var/www/html/core/php/jeecli.php user list
````

Una vez que haya localizado el nombre del usuario cuya contraseña desea cambiar, haga : 

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

Con : 
- ``[username]`` : el nombre de usuario
- ``[password]`` : la nueva contraseña, tenga cuidado que no necesita espacios y una longitud mínima de 8 caracteres

# > 3.3.50

Lo primero que hay que hacer es conectarse en SSH a Jeedom (con software tipo kitty o putty).

>**Recordatorios**
>
>De forma predeterminada, las credenciales de inicio de sesión de SSH en jeedom (Atlas, Smart, Mini y Mini+) son :
>- Nombre del usuario : jeedom, contraseña Mjeedom96
>- Nombre del usuario : raíz, contraseña Mjeedom96

Entonces solo escribe :

````
php /var/www/html/install/reset_password.php
````

El sistema te pedirá el nombre de usuario para el que has perdido la contraseña (tienes la lista de todos los usuarios por si acaso), una vez tecleado (fíjate en mayúsculas/minúsculas) pulsa la tecla enter. Y tendrás tu nueva contraseña.

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

Veremos aquí cómo cambiar la contraseña de Jeedom directamente modificándola en la base de datos, en caso de que la haya olvidado

Lo primero que hay que hacer es conectarse en SSH a Jeedom (con software tipo kitty o putty).

Una vez conectado, debe recuperar los identificadores de la base de datos :

````
cat /var/www/html/core/config/common.config.php
````

Aquí encontrará la contraseña para acceder a la base de datos de Jeedom, luego debe hacer :

````
mysql -ujeedom -p
````

Allí te pide la contraseña recuperada arriba (la contraseña no se muestra : es normal). Luego escriba (o mejor, copie/pegue). Tienes que hacer "clic derecho" debajo de Putty para "pegar") :

````
usar el jeedom;
REPLACE INTO user SET `login`='adminTmp',password='c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec',profils='admin', enable='1';
````

Listo. Puede desconectarse / volver a conectarse a su Jeedom con las credenciales adminTmp / admin que le permitirán cambiar la contraseña de otras cuentas también.

>**IMPORTANTE**
>
>No olvides una vez recuperados tus accesos eliminar el usuario adminTmp, dejarlo podría ser una potencial brecha de seguridad de la que serías el único responsable.

>**IMPORTANTE**
>
> Si ha habilitado la autenticación AD/LDAP, este método de restablecimiento no funcionará a menos que deshabilite el modo AD/LDAP. Puedes hacer esto haciendo :
>````
>usar el jeedom;
>REEMPLAZAR EN `config` SET `value`='0',`key`='ldap:habilitar',`complemento`='núcleo';
>````
