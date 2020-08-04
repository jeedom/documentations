# Instalación en Raspberry Pi

Encontrará aquí la documentación para instalar Jeedom en una PI de frambuesa **con una tarjeta MiroSD.**. Hay 2 modos :

- Automático (beta) : uso de la imagen para Raspberry Pi hecha por Jeedom con Jeedom preinstalado
- Línea de comando : instalación manual de Jeedom desde Raspberry Pi OS

> **Importante**
>
> Debian 10 (Buster) es la distribución oficialmente compatible.

# Instalación automática

## Descargue la última imagen

Encuentras las imagenes [aquí](https://images.jeedom.com/rpi/)

> **Importante**
>
>Hay 2 tipos de imagen que jeedom-debian-XXXX-rpi-X.X.XX.zip que está en 32 bits, es compatible con todos los modelos RPI y el jeedom-debian-XXXX-rpi-64-X.X.XX.zip que está en 64bits, es (significativamente) más eficiente pero solo es compatible con RPI2 / 3/4. Para resumir en rpi 1, tome los 32 bits; de lo contrario, tome los 64 bits (rpi-64)

Raspberry Pi imager le permite descargar directamente la imagen de instalación del sistema operativo Raspberry Pi, en su versión más reciente.

## Grabe esta imagen en una tarjeta MicroSD con Raspberry Pi imager por ejemplo

Puedes descargarlo [aquí](https://www.raspberrypi.org/downloads/)

## Comience el PI

Inserte su tarjeta MicroSD, conecte el cable de red y conecte la alimentación.

> **Importante**
>
> Durante el primer inicio, la Raspberry Pi puede ser lenta porque cambia el tamaño de la partición para que coincida con el tamaño de su tarjeta MicroSD. Además, una vez que se realiza el primer inicio, es recomendable reiniciar nuevamente para que el intercambio sea del tamaño correcto.

Il vous suffit ensuite, dedespués votre navigateur, de saisir : http://IP_RPI/ (en remplaçant IP_RPI par l'ip de votre Raspberry Pi).

> **Información**
>
> Las credenciales de inicio de sesión SSH predeterminadas son : jeedom y Mjeedom96 para la contraseña 

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)

# Instalación de línea de comando

## Descargue la última imagen "lite""

[aquí](https://downloads.raspberrypi.org/raspbian_lite_latest)

Raspberry Pi imager le permite descargar directamente la imagen de instalación del sistema operativo Raspberry Pi, en su versión más reciente.

## Grabe esta imagen en una tarjeta MiroSD con Raspberry Pi imager por ejemplo

[aquí](https://www.raspberrypi.org/downloads/)

> **Nota**
>
> Si usa Etcher para grabar su imagen, el paso de descompresión es inútil (el formato Zip se reconoce directamente en la selección del archivo de imagen).

## Habilitar acceso SSH

> **Advertencia**
>
> Por razones de seguridad, el acceso SSH ya no está habilitado de forma predeterminada en esta distribución. Entonces tienes que activarlo.

Se debe crear un archivo ssh vacío en la partición de arranque (el único accesible bajo Windows).

Solo haz clic derecho : documento nuevo / de texto y cámbiele el nombre a "ssh" **sin extensión**

> **Importante**
>
> En Windows, en el explorador, por lo tanto, debe verificar su configuración en display / options / modificar la carpeta y las opciones de búsqueda /

![ExtensionFichier](images/ExtensionFichier.PNG)

## Inicie la Raspberry Pi

Inserte su tarjeta MicroSD, conecte el cable de red y conecte la alimentación.

## Conectarse en SSH

Identifica tu Raspberry Pi en la red

Necesita saber la dirección IP de su Raspberry PI. Muchas soluciones :

-   Consulte la configuración de DHCP en su enrutador
-   Utilice un escáner de puertos de tipo angyipscanner" [aquí](http://angryip.org/download/#windows)

Establecer conexión

Luego use, por ejemplo, masilla para establecer su conexión [Aquí](http://www.putty.org/)

Ingrese la dirección IP de su Raspberry Pi (aquí 192.168.0.10) y haga clic en abrir. Acepte el mensaje de seguridad predeterminado al iniciar sesión por primera vez.

Inicie sesión con credenciales **pi / frambuesa**

> **Importante**
>
> Por razones de seguridad, es imprescindible cambiar la contraseña predeterminada. Los casos de piratería basados en el uso del par de inicio de sesión / contraseña predeterminado de Raspberry Pi están particularmente extendidos. (Comando : passwd y sudo passwd)

## Inicie el script de instalación de jeedom

``wget -O- https://raw.githubusercontent.com/jeedom/core/master/install/install.sh | sudo bash``

**La contraseña de sudo también es frambuesa**

> **Nota**
>
> Dependiendo de su velocidad de internet, la instalación puede tomar de 45 a 90 minutos. No debe interrumpir el proceso antes del final. De lo contrario, tendrá que repetir todo el procedimiento.

Luego solo vaya a IP\_MACHINE\_JEEDOM

> **Nota**
>
> Las credenciales predeterminadas son admin / admin

> **Nota**
>
> Se pueden usar los siguientes argumentos : -w = carpeta del servidor web -z = dependencias de instalación z-wave -m = contraseña de root mysql deseada

````
./install.sh -w /var/www/html -z
````

## Optimización del sistema

Si usa su Raspberry Pi para Jeedom sin una pantalla conectada, se recomienda asignar el mínimo de RAM a la parte de video.

Solo inicia sesión **SSH** y modificar el archivo de configuración : ``sudo nano /boot/config.txt``

Agregar **y O** Descomentar (quitando el #) **y O** Edita las lineas :

````
gpu_mem=16
disable_l2cache=0
gpu_freq=250
````

Salir guardando : ``CTRL+X`` después ``O`` después ``ENTER``

Reinicia tu Raspberry Pi

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
