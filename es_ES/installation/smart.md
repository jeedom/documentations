# Restaurar al modo de fábrica de un Jeedom Smart

## Presentación

El Jeedom Smart está equipado con un disco Emmc, lo que garantiza una mayor confiabilidad que una tarjeta SD, pero no se puede acceder directamente a este disco.

El modo de recuperación USB incluye el sistema, el sistema operativo y también la aplicación Jeedom.

Permite :

- La reinitialisation de la Jeedom Smart en configuration « usine » OS+Jeedom.
- La reinitialisation de la Jeedom Smart en configuration « usine », en appliquant ensuite sa sauvegarde Jeedom.

Pour rappel la gestion des sauvegardes/restauration est disponible dans Jeedom dans le menu « roues crantées » en haut à droite, puis « Sauvegardes ».

Jeedom ofrece un servicio con suscripción de copia de seguridad automática en la nube privada de Jeedom, para que no tenga que preocuparse por nada. (Sur le Market, dans votre compte, menu à gauche « Backup Cloud »).

## Funcionamiento del modo de recuperación

Material necesario : una llave USB (mínimo 8 GB).

>**Nota**
>
>Recuerde reservar (localmente) una copia de seguridad de la configuración de Jeedom

- descargar el archivo que proporcionamos : [copia de seguridadJeedom.tar.gz](https://images.jeedom.com/smart/copia de seguridadJeedom.tar.gz). Tenga cuidado de verificar que el archivo tenga el nombre backupJeedom.tar.gz para restaurar al trabajo.
- copia este archivo sin modificarlo ni descomprimirlo, en una llave USB formateada en FAT32 y en blanco
- apague su Smart correctamente por Jeedom
- desenchúfelo
- inserta tu llave USB
- reiniciar el inteligente
- espere unos 30 minutos, caja no accesible **NO DESCONECTAR**
- busca tu Smart en la red
- volver a conectar con el inicio de sesión : administrador y contraseña : admin

> **Importante**
>
> Atención ! Un Recovery Mode remet quoi qu'il arrive votre Smart en configuration « usine » neuve. Si tiene una copia de seguridad de su configuración de Jeedom, simplemente restáurela después.

Este modo de recuperación solo es compatible con Jeedom Smart.
