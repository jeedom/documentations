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

## No hay usuarios, por lo que necesitas crear uno

````
php /var/www/html/core/php/jeecli.php user add [username] [password]
````

Con : 
- ``[username]`` : nombre de usuario
- ``[password]`` : la nueva contraseña, ojo, no se necesitan espacios y una longitud mínima de 8 caracteres

## Un usuario existe, solo necesitas cambiar su contraseña 

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

Con : 
- ``[username]`` : nombre de usuario
- ``[password]`` : la nueva contraseña, ojo, no se necesitan espacios y una longitud mínima de 8 caracteres

