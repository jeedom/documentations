# Instalación en Raspberry Pi

Aquí encontrará la documentación para instalar Jeedom en una raspberry Pi **con una tarjeta MiroSD.**. Hay 2 modos :

- Automático (beta) : uso de la imagen para Raspberry Pi hecha por Jeedom con Jeedom preinstalado en ella
- Línea de comando : instalación manual de Jeedom desde Raspberry Pi OS

> **Importante**
>
> Debian 10 (Buster) es la distribución compatible oficialmente.

# Instalación automática

## Descargar última imagen

Encuentras las fotos [aquí](https://images.jeedom.com/rpi/)

> **IMPORTANTE**
>
>Hay 2 fotos : jeedom-debian-XXXX-rpi-X.X.XX.zip que es de 32 bits, es compatible con modelos Raspberry PI de generación 2 y 3 y jeedom-debian-XXXX-rpi-64-X.X.XX.zip que está en 64 bits, es compatible solo para Raspberry Pi4 y está en alfa (no recomendado).

Raspberry Pi imager te permite descargar directamente la imagen de instalación de Raspberry Pi OS, en su versión más reciente.

## Grabe esta imagen en una tarjeta MicroSD con Raspberry Pi Imager, por ejemplo

Puedes descargarlo [aquí](https://www.raspberrypi.org/downloads/)

## Iniciar IP

Inserte su tarjeta MicroSD, conecte el cable de red y conecte la fuente de alimentación.

> **Importante**
>
> En el primer arranque, la Raspberry Pi puede ser lenta, ya que cambia el tamaño de la partición para que coincida con el tamaño de su tarjeta MicroSD. Además, una vez realizada la 1ª puesta en marcha, es recomendable reiniciar de nuevo para que el Swap tenga el tamaño correcto.

Il vous suffit ensuite, dedespués votre navigateur, de saisir : http://IP_RPI/ (en remplaçant IP_RPI par l'ip de votre Raspberry Pi).

> **Información**
>
> Las credenciales de inicio de sesión SSH predeterminadas son : jeedom y Mjeedom96 por la contraseña 

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)

# Instalación de la línea de comandos

## Descargar última imagen lite"

[aquí](https://downloads.raspberrypi.org/raspbian_lite_latest)

Raspberry Pi Imager permite descargar directamente la imagen de instalación de Raspberry Pi OS, en su versión más reciente.

## Grabe esta imagen en una tarjeta MiroSD con Raspberry Pi Imager, por ejemplo

[aquí](https://www.raspberrypi.org/downloads/)

> **Nota**
>
> Si usa Etcher para grabar su imagen, el paso de descompresión es innecesario (el formato Zip se reconoce directamente en la selección del archivo de imagen).

## Habilitar acceso SSH

> **Advertencia**
>
> Por razones de seguridad, el acceso SSH ya no está habilitado de forma predeterminada en esta distribución. Entonces tienes que activarlo.

Debe crear en la partición de arranque (la única accesible en Windows) un archivo ssh vacío.

Simplemente haga clic derecho : nuevo / documento de texto y cámbiele el nombre a "ssh" **sin extensión**

> **Importante**
>
> En Windows, en el explorador, debe verificar su configuración en pantalla / opciones / modificar carpeta y opciones de búsqueda /

![ExtensionFichier](images/ExtensionFichier.PNG)

## Inicie la Raspberry Pi

Inserte su tarjeta MicroSD, conecte el cable de red y conecte la fuente de alimentación.

## Iniciar sesión en SSH

Identifica tu Raspberry Pi en la red

Necesita saber la dirección IP de su Raspberry PI. Muchas soluciones :

-   Verifique la configuración de DHCP en su enrutador
-   Use un escáner de puerto tipo "Angry IP Scanner"" [aquí](http://angryip.org/download/#windows)

Establecer conexión

Luego use, por ejemplo, PuTTY para establecer su conexión [Aquí](http://www.putty.org/)

Introduce la dirección IP de tu Raspberry Pi (aquí 192.168.0.10) y haga clic en abrir. Acepte el mensaje de seguridad predeterminado en el primer inicio de sesión.

Iniciar sesión con credenciales **pi / frambuesa**

> **Importante**
>
> Por razones de seguridad, es imprescindible cambiar la contraseña por defecto. Los casos de piratería basados en la explotación del par predeterminado de inicio de sesión/contraseña de Raspberry Pi están particularmente extendidos. (ordenado : contraseña y sudo contraseña)

## Inicie el script de instalación de jeedom

``wget -O- https://raw.githubusercontent.com/jeedom/core/master/install/install.sh | sudo bash``

**La contraseña de sudo también es raspberry**

> **Nota**
>
> Dependiendo de tu velocidad de internet, la instalación puede tomar de 45 a 90 minutos. No debe interrumpir el proceso antes del final. De lo contrario, tendrás que repetir todo el procedimiento.

Luego solo ve a IP\_MACHINE\_JEEDOM

> **Nota**
>
> Las credenciales predeterminadas son admin/admin

> **Nota**
>
> Se pueden usar los siguientes argumentos : -w = carpeta del servidor web -z = instalar las dependencias de z-wave -m = contraseña raíz de mysql deseada

````
./install.sh -w /var/www/html -z
````

## Optimización del sistema

Si usa su Raspberry Pi para Jeedom sin una pantalla conectada, se recomienda asignar la RAM mínima a la parte de video.

Solo inicia sesión **SSH** y modificar el archivo de configuración : ``sudo nano /boot/config.txt``

Agregar **y O** Descomentar (borrar el #) **y O** Edita las lineas :

````
gpu_mem=16
disable_l2cache=0
gpu_freq=250
````

Salir guardando : ``CTRL+X`` después ``O`` después ``ENTER``

Reinicia tu Raspberry Pi

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
