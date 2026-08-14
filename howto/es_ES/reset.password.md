# Procedimiento en caso de pérdida de la contraseña de acceso a Jeedom

# > 4.2

Lo primero que hay que hacer es conectarse por SSH a Jeedom (con un programa como Kitty o PuTTY).

>**Recordatorios**
>
>Por defecto, los datos de acceso SSH en Jeedom (Luna, Atlas, Smart, Mini y Mini+) son los siguientes:
>- Nombre de usuario: jeedom, contraseña: Mjeedom96
>- Nombre de usuario: root, contraseña: Mjeedom96

A continuación, solo tienes que escribir:

````
php /var/www/html/core/php/jeecli.php user list
````

## No hay ningún usuario, así que hay que crear uno

````
php /var/www/html/core/php/jeecli.php user add [username] [password]
````

Con:
- ``[username]`` : el nombre de usuario
- ``[password]`` : la nueva contraseña; atención: no debe contener espacios y debe tener una longitud mínima de 8 caracteres

## Ya existe un usuario, solo hay que cambiar su contraseña

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

Con:
- ``[username]`` : el nombre de usuario
- ``[password]`` : la nueva contraseña; atención: no debe contener espacios y debe tener una longitud mínima de 8 caracteres

