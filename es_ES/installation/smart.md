# Restauración al modo de fábrica de un Jeedom Smart

## Presentación

El Jeedom Smart está equipado con un disco Emmc, lo que garantiza una mayor confiabilidad que una tarjeta SD, pero este disco no es accesible directamente.

El modo de recuperación USB incluye tanto el sistema, el sistema operativo y también la aplicación Jeedom.

Permite :

- La reinitialisation de la Jeedom Smart en configuration « usine » OS+Jeedom.
- La reinitialisation de la Jeedom Smart en configuration « usine », en appliquant ensuite sa sauvegarde Jeedom.

Pour rappel la gestion des sauvegardes/restauration est disponible dans Jeedom dans le menu « roues crantées » en haut à droite, puis « Sauvegardes ».

Jeedom ofrece un servicio con suscripción automática de respaldo en la nube privada Jeedom, para que no tenga que preocuparse por nada. (Sur le Market, dans votre compte, menu à gauche « Backup Cloud »).

## Cómo funciona el modo de recuperación

Material requerido : una llave USB (mínimo 8 GB).

>**Nota**
>
>Recuerde reservar (localmente) una copia de seguridad de configuración de Jeedom

- descarga el archivo que proporcionamos : [backupJeedom.tar.gz](https://images.jeedom.com/smart/backupJeedom.tar.gz). Tenga cuidado de verificar que el archivo tenga el nombre backupJeedom.tar.gz para hacer trabajos de restauración.
- copie este archivo sin modificarlo o descomprimirlo, en una llave USB en blanco formateada en FAT32
- apague su Smart correctamente por Jeedom
- desenchufar allí
- inserta tu memoria USB
- reiniciar el Smart
- espere unos 30 minutos, caja no accesible **NO DESCONECTE**
- encuentra tu Smart en la red
- reconectarse con el inicio de sesión : administrador y contraseña : admin

> **Importante**
>
> Atención ! Un Recovery Mode remet quoi qu'il arrive votre Smart en configuration « usine » neuve. Si tiene una copia de seguridad de su configuración de Jeedom, solo necesita restaurarla después.

Este modo de recuperación solo es compatible con Jeedom Smart.
