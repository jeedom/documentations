# Instalación en Raspberry Pi

Aquí encontrarás la documentación para instalar Jeedom en una Raspberry Pi **con una tarjeta microSD**.

# Instalación mediante la línea de comandos

## Descargar la última imagen «lite»

[Raspberry Pi Imager](https://www.raspberrypi.com/software/)  permite descargar la imagen de instalación de Raspberry Pi OS y grabarla directamente en la tarjeta SD.

## Activar el acceso SSH

> **Advertencia**
>
> Por motivos de seguridad, el acceso SSH ya no está activado de forma predeterminada en esta distribución. Por lo tanto, hay que activarlo a través de las opciones avanzadas de Raspberry Pi Imager.

## Iniciar la Raspberry Pi

Inserta tu tarjeta MicroSD, conecta el cable de red y enchufa la fuente de alimentación.

## Conectarse por SSH

Identifica tu Raspberry Pi en la red

Es necesario conocer la dirección IP de tu Raspberry Pi. Hay varias soluciones:

-   Consulta la configuración de DHCP en tu router
-   Utiliza un escáner de puertos como «Angry IP Scanner» [aquí](http://angryip.org/download/#windows)

Establecer la conexión

A continuación, utiliza, por ejemplo, PuTTY para establecer la conexión [Aquí](http://www.putty.org/)

Introduce la dirección IP de tu Raspberry Pi (en este caso, 192.168.0.10) y haz clic en «Abrir». Acepta el mensaje predeterminado relativo a la seguridad que aparece al conectarte por primera vez.

Inicia sesión con los datos de acceso que hayas definido en Raspberry Pi Imager durante la grabación.

> **Importante**
>
> Por motivos de seguridad, es imprescindible cambiar la contraseña predeterminada. Son muy frecuentes los casos de piratería informática que se aprovechan de la combinación predeterminada de nombre de usuario y contraseña de la Raspberry Pi. (comandos: passwd y sudo passwd)

## Ejecutar el script de instalación de Jeedom

```
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
```

> **Nota**
>
> Dependiendo de la velocidad de tu conexión a Internet, la instalación puede tardar entre 45 y 90 minutos. Es muy importante que no interrumpas el proceso antes de que finalice. De lo contrario, tendrás que volver a realizar todo el procedimiento desde el principio.

A continuación, solo tienes que ir a IP\_MACHINE\_JEEDOM

> **Nota**
>
> Las credenciales predeterminadas son admin/admin

Para obtener más información sobre la instalación de Jeedom, consulta esta [documentación](cli)

A continuación, puedes consultar la documentación [Primeros pasos con Jeedom](/premiers-pas)
