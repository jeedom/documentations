# Cómo hacer copias de seguridad

Hay dos formas de hacer una copia de seguridad de Jeedom y cada una tiene ventajas y desventajas.

Es posible hacer una copia de seguridad desde la interfaz de Jeedom. Esto solo se refiere al software Jeedom y sus datos. Tiene la ventaja de poder calentarse y el archivo de copia de seguridad se puede exportar a otros medios.

También es posible hacer una copia de seguridad haciendo una imagen de disco de la tarjeta microSD (mini y mini+). Esta forma tiene la ventaja de ser una copia de seguridad completa del sistema, así como de Jeedom y sus datos. Por otro lado, debe hacerse apagando Jeedom y conectando la tarjeta microSD a otra computadora.

La mejor manera de estar tranquilo es usar ambos : Realice una copia de seguridad de la tarjeta microSD de vez en cuando y programe una copia de seguridad regular de Jeedom.

> **Consejo**
>
> El procedimiento de restauración de la tarjeta microSD puede ser útil para restaurar un Jeedom predeterminado a partir de la imagen proporcionada por el equipo ver [aquí](https://doc.jeedom.com/es_ES/installation/).

# Copia de seguridad/restauración de Jeedom

La documentación ya está presente para explicar la página Administración→Copias de seguridad. Lo encontrarás [aquí](https://doc.jeedom.com/es_ES/core/3.3/backup).

# Copia de seguridad/restauración de la tarjeta MicroSD

## Preparativos

Estas copias de seguridad/restauración se realizan desde otra computadora para crear una "imagen limpia" de la tarjeta SD. Primero debe detener el mini+. Para hacer esto, cambie Jeedom al modo experto en el menú de usuario en la parte superior derecha.

![save restore06](images/save-restore06.jpg)

Y haga clic en Apagar

![save restore07](images/save-restore07.jpg)

Luego, debe sacar la tarjeta microSD del mini+ y conectarla a su computadora a través de un adaptador/lector de tarjetas/…​

![save restore08](images/save-restore08.jpg)

## Bajo Windows

Tendrás que empezar descargando software de terceros, por ejemplo : [Generador de imágenes de disco Win32](http://sourceforge.net/projects/win32diskimager/)

### Sauvegarde

-   Inicie el software y verifique que la letra a continuación *Dispositivo* coincide con el de su tarjeta/lector de tarjetas.
-   En el campo *Archivo de imagen*, especifique el nombre del archivo de imagen que desea crear y la ubicación donde se guardará.
-   Finalmente haga clic en el botón *Leer*, para crear la imagen.
    image::imágenes/guardar-restaurar09.jpg

### Restauration

-   Inicie el software y verifique que la letra a continuación *Dispositivo* coincide con el de su tarjeta/lector de tarjetas.
-   En el campo *Archivo de imagen*, ve a buscar el archivo de imagen que deseas restaurar.
-   Finalmente haga clic en el botón *Escribe*, para restaurar esta imagen en la tarjeta microSD.

![save restore10](images/save-restore10.jpg)

## Bajo macOSX

Para ponértelo más fácil, puedes descargar el software [ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![save restore11](images/save-restore11.jpg)

### Sauvegarde

-   Con ApplePi-Baker : Seleccione la tarjeta correcta de la lista *Pi-corteza*, y haga clic en *Crear copia de seguridad* para crear un archivo de imagen desde su tarjeta microSD.

-   En comando de shell :
 -   Para encontrar el disco correspondiente al mapa, abra una terminal e ingrese el comando : ``diskutil list``  
 ![save restore12](images/save-restore12.jpg)
 -   Inicie la creación de la imagen ingresando el comando : ``sudo dd if=/dev/disk1 of=~/Desktop/Backup_Jeedom.img bs=1m`` *Remarque: En este ejemplo, el nombre del disco del mapa es `/dev/disk1`, por lo que en el comando de copia de seguridad debe escribir \`/dev/disk1\`*

### Restauration

-   Con ApplePi-Baker : Seleccione la tarjeta correcta de la lista *Pi-corteza*, poner la ruta al archivo de imagen para restaurar en el campo *Archivo IMG* sección *Pi-Ingredientes*, y haga clic en *Restaurar copia de seguridad* para restaurar la imagen en la tarjeta microSD.
-   En comando de shell :
    -   Para encontrar el disco correspondiente al mapa, abra una terminal e ingrese el mismo comando que para la copia de seguridad : ``diskutil list``
 -   Desmonte las particiones de la tarjeta escribiendo el comando : ``sudo diskutil unmountDisk /dev/disk1``
 -   Restaure la imagen en la tarjeta microSD escribiendo el comando : ``sudo dd bs=1m if=~/Desktop/Backup_Jeedom.img of=/dev/disk1`` *Observación : En este ejemplo, el nombre del disco del mapa es `/dev/disk1`, por lo que en el comando de copia de seguridad debe escribir \`/dev/disk1\`*

## Bajo Linux

### Sauvegarde

-   Para encontrar el disco correspondiente al mapa, abra una terminal e ingrese el comando : ``sudo fdisk -l | grep Dis``
    ````
    $ sudo fdisk -l | grep Dis
    Disk /dev/sda: 320.1 GB, 320072933376 bytes
    Disk /dev/sdb: 16.0 GB, 16012804096 bytes
    Disk /dev/sdc: 8.0 GB, 8006402048 bytes
    ````
-   Inicie la creación de la imagen ingresando el comando : ``sudo dd if=/dev/sdc of=Backup_Jeedom.img bs=1m`` *Remarque: En este ejemplo, el nombre del disco del mapa es /dev/sdc.*

### Restauration

-   Para encontrar el disco correspondiente al mapa, abra una terminal e ingrese el comando : ``sudo fdisk -l | grep Dis``
-   Desmonte las particiones de la tarjeta escribiendo el comando (reemplazando la X con los números de partición) : ``sudo umount /dev/sdcX``
-   Restaure la imagen en la tarjeta microSD escribiendo el comando : ``sudo dd if=Backup_Jeedom.img of=/dev/sdc bs=1m`` *Remarque: En este ejemplo, el nombre del disco del mapa es /dev/sdc.*
