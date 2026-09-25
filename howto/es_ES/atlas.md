# Restablecimiento de los ajustes de fábrica de un Jeedom Atlas

## Copia de seguridad de Jeedom

Antes de nada, **es imprescindible realizar una copia de seguridad de Jeedom** que se pueda restaurar una vez finalizado el proceso.

1. Accede a la interfaz de Jeedom y haz clic en el menú **Configuración > Sistema > Copias de seguridad**.

2. Haz clic en el botón **Iniciar una copia de seguridad**.

3. Cuando haya finalizado la copia de seguridad, haz clic en **Descargar la copia de seguridad**.

4. Una vez descargada la copia de seguridad de Jeedom, apaga el sistema a través del menú **Configuración > Sistema > Apagar**.

## Presentación

El Jeedom Atlas está equipado con un disco eMMC, lo que garantiza una mayor fiabilidad que una tarjeta SD, pero no se puede acceder directamente a este disco.

El modo de recuperación USB abarca tanto el sistema como el sistema operativo y también la aplicación Jeedom.

Permite:

- Restablecimiento del Jeedom Atlas a la configuración «de fábrica» de OS+Jeedom.
- Restablecimiento del Jeedom Atlas a la configuración «de fábrica» y, a continuación, aplicación de su copia de seguridad de Jeedom.

Como recordatorio, la gestión de copias de seguridad y restauraciones está disponible en Jeedom, en el menú «Configuración», situado en la parte superior derecha, y luego en «Copias de seguridad».

Jeedom ofrece un servicio de suscripción con copia de seguridad automática en la nube privada de Jeedom, para que no tengas que preocuparte por nada. (En el Market, en tu cuenta, menú de la izquierda «Backup Cloud»).

## Funcionamiento del modo de recuperación

>**Nota**
>
>No olvides guardar (localmente) una copia de seguridad de la configuración de Jeedom

>**Importante**
>
>La aplicación de una recuperación provoca un cambio en la dirección MAC de tu dispositivo Jeedom. Por lo tanto, tendrás que modificar la reserva de IP en la configuración de tu servidor DHCP, si dispones de uno.

>**Importante**
>
>Dependiendo de si sigues teniendo acceso a tu router o no, el procedimiento varía.

Material necesario: una memoria USB (mínimo 16 GB).

CASO 1: TIENES ACCESO A TU BOX ATLAS

Accede al complemento Atlas (Pasarela de domótica/Complemento Atlas), haz clic en «Recovery» y sigue los pasos indicados.

***

CASO 2: NO TIENES ACCESO A TU BOX ATLAS

- Descarga Recovery desde tu perfil en la tienda: Perfil / Mis servicios y haz clic en Descargar USB Recovery Atlas
![recuperación de perfil](../images/profilrecovery.png)
- Descarga el software [Balena Etcher](https://www.balena.io/etcher/)
- En el programa, selecciona la imagen que has descargado y, a continuación, tu memoria USB
![balenaetcher](../images/balenaetcher.png)
- Una vez que la memoria USB esté lista, insértala en el puerto USB 2 inferior (el puerto USB negro) y, a continuación, enciende tu Atlas Box.
- Esperar entre 5 y 10 minutos aproximadamente
- A continuación, visita http://jeedomatlasrecovery.local/
- Introduce el nombre de usuario y la contraseña: admin/admin; a continuación, cambia la contraseña. IMPORTANTE: crea una cuenta en Market.
- Una vez hecho esto, Jeeasy se inicia y te muestra el procedimiento de recuperación
- Sigue los pasos

Este modo de recuperación solo es compatible con el Jeedom Atlas
