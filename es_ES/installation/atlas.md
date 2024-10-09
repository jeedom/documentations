# Restauración en modo fábrica de un Jeedom Atlas

## Copia de seguridad de Jeedom

En primer lugar, **Es imprescindible realizar una copia de seguridad de Jeedom** que se puede restaurar al final del procedimiento.

1. Vaya a la interfaz de Jeedom y luego haga clic en el menú **Configuración > Sistema > Copias de seguridad**.

2. Haga clic en el botón **Iniciar una copia de seguridad**.

3. Cuando se complete la copia de seguridad, haga clic en **Descargar copia de seguridad**.

4. Una vez descargada la copia de seguridad de Jeedom, apague el sistema usando el menú **Configuración > Sistema > Apagar**.

## Presentación

Jeedom Atlas está equipado con un disco Emmc, lo que garantiza una mayor confiabilidad que una tarjeta SD, pero no se puede acceder directamente a este disco.

El modo de recuperación USB incluye el sistema, el sistema operativo y también la aplicación Jeedom.

Permite :

- La réinitialisation  de la Jeedom Atlas en configuration « usine » OS+Jeedom.
- La réinitialisation  de la Jeedom Atlas en configuration « usine », en appliquant ensuite sa sauvegarde Jeedom.

Pour rappel la gestion des sauvegardes/restauration est disponible dans Jeedom dans le menu « Réglages » en haut à droite, puis « Sauvegardes ».

Jeedom ofrece un servicio con suscripción de copia de seguridad automática en la nube privada de Jeedom, para que no tenga que preocuparse por nada. (Sur le Market, dans votre compte, menu à gauche « Backup Cloud »).

## Funcionamiento del modo de recuperación

>**Nota**
>
>Recuerde reservar (localmente) una copia de seguridad de la configuración de Jeedom

>**IMPORTANTE**
>
>La aplicación de una recuperación provoca un cambio en la dirección MAC de su caja Jeedom. Luego deberá cambiar su reserva de IP en la configuración de su servidor DHCP, si tiene uno.

>**IMPORTANTE**
>
>Dependiendo de si sigues teniendo o no acceso a tu caja, el procedimiento no es el mismo.

Material necesario : una llave USB (mínimo 16 GB).

CASO 1 : TIENES ACCESO A TU CAJA ATLAS

Vaya al complemento Atlas (Home Automation Gateway/Atlas Plugin), haga clic en Recuperación y siga el procedimiento.

***

CASO 2 : NO TIENES ACCESO A TU CAJA ATLAS

- Descarga el Recovery desde tu perfil en el mercado : Perfil/Mis servicios y haga clic en Descargar USB Recovery Atlas
![profilrecovery](images/profilrecovery.png)
- Descarga el programa [Grabador balena](https://www.balena.io/etcher/)
- En el software, elija su imagen descargada, luego su llave USB 
![balenaetcher](images/balenaetcher.png)
- Una vez que la llave esté lista, colóquela en el puerto USB 2 inferior (puerto USB negro), luego encienda su caja Atlas
- Espere unos 5 a 10 minutos
- Puis rendez-vous sur http://jeedomatlasrecovery.local/
- Poner usuario y contraseña :  admin/admin, luego cambie la contraseña, IMPORTANTE : poner una cuenta de mercado.
- Una vez hecho esto, Jeeasy se inicia y le muestra el procedimiento de recuperación
- Siga el procedimiento

Este modo de recuperación solo es compatible con Jeedom Atlas
