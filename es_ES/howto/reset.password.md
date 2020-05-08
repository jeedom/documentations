Veremos aquí cómo cambiar la contraseña de Jeedom directamente
modificándolo en la base de datos, en caso de que lo haya olvidado 

Lo primero que debe hacer es conectarse en SSH a Jeedom (con un
software de gatito o masilla).

Una vez conectado, debe recuperar los identificadores de la base de datos.
datos :

`` `{.bash}
cat /var/www/html/core/config/common.config.php
`` ''

Aquí encontrará la contraseña para acceder a la base de datos.
Jeedom, entonces tienes que hacer :

`` `{.bash}
mysql -ujeedom -p
`` ''

Allí te pide la contraseña recuperada arriba (la contraseña
no se muestra : es normal). Luego escriba (o mejor,
copiar pegar. Debe "hacer clic con el botón derecho" debajo de Masilla para "pegar") :

`` `{.bash}
usar la libertad;
REPLACE INTO user SET `login` = 'adminTmp', password = 'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81fd75dcdcabff8a90c81fd75dcdcab
`` ''

Listo. Puede desconectarse / reconectarse a su Jeedom con el
identificadores adminTmp / admin que le permitirán modificar la contraseña
cambia de otras cuentas también.

>**IMPORTANT**
>
>Recuerde que una vez que se recupere su acceso para eliminar el usuario adminTmp, dejarlo podría ser un potencial
violación de seguridad de la cual usted es el único responsable.

>**IMPORTANT**
>
> Si ha habilitado la autenticación AD / LDAP, este método de reinicio no funcionará a menos que desactive el modo AD / LDAP. Puedes hacer esto haciendo : 
>`` `{.bash}
>usar la libertad;
>REPLACE INTO `config` SET` value` = '0',` key` = 'ldap:enable ', `plugin` =' core ';
>`` ''
