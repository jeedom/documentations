# Cómo hacer copias de seguridad

Hay dos formas de hacer una copia de seguridad de Jeedom y cada una tiene sus ventajas e inconvenientes.

Es posible realizar una copia de seguridad desde la interfaz de Jeedom. Esta copia de seguridad solo afecta al software de Jeedom y a sus datos. Tiene la ventaja de que se puede realizar en tiempo real y el archivo de copia de seguridad se puede exportar a otros soportes.

También es posible realizar una copia de seguridad creando una imagen de disco de la tarjeta microSD (mini y mini+). Esta forma tiene la ventaja de que se trata de una copia de seguridad completa del sistema, así como de Jeedom y sus datos. Sin embargo, hay que hacerlo apagando Jeedom y conectando la tarjeta microSD a otro ordenador.

La mejor forma de estar tranquilo es utilizar ambas opciones: hacer una copia de seguridad de la tarjeta microSD de vez en cuando y programar una copia de seguridad periódica de Jeedom.

> **Consejo**
>
> El procedimiento de restauración de la tarjeta microSD puede resultar útil para restablecer los ajustes predeterminados de un Jeedom a partir de la imagen facilitada por el equipo. Véase [aquí](/installation).

# Copia de seguridad/Restauración de Jeedom

Ya hay documentación disponible que explica la página «Administración→Copias de seguridad». La encontrarás [aquí](/core/backup).

# Copia de seguridad/Restauración de la tarjeta microSD

## Preparativos

Estas copias de seguridad y restauraciones se realizan desde otro ordenador para crear una «imagen limpia» de la tarjeta SD. En primer lugar, hay que apagar el mini+. Para ello, hay que poner Jeedom en modo experto en el menú de usuario situado en la esquina superior derecha.

![guardar restaurar06](../images/save-restore06.jpg)

Y haz clic en «Apagar»

![guardar restaurar07](../images/save-restore07.jpg)

A continuación, hay que sacar la tarjeta microSD de la mini+ y conectarla al ordenador mediante un adaptador, un lector de tarjetas o similar...​

![guardar restaurar08](../images/save-restore08.jpg)

## En Windows

Lo primero que hay que hacer es descargar un programa de terceros, por ejemplo: [Win32 Disk Imager](http://sourceforge.net/projects/win32diskimager/)

### Copia de seguridad

- Inicia el programa y comprueba que la letra que aparece debajo de *Device* coincida con la de tu tarjeta o lector de tarjetas.
- En el campo *Archivo de imagen*, indica el nombre del archivo de imagen que quieres crear, así como la ubicación donde se guardará.
- Por último, haz clic en el botón *Read* para crear la imagen.

![guardar restaurar09](../images/save-restore09.jpg)

### Restauración

- Inicia el programa y comprueba que la letra que aparece debajo de *Device* coincida con la de tu tarjeta o lector de tarjetas.
- En el campo *Archivo de imagen*, busca el archivo de imagen que quieras restaurar.
- Por último, haz clic en el botón *Write* para grabar esta imagen en la tarjeta microSD.

![guardar restaurar10](../images/save-restore10.jpg)

## En macOS

Para facilitarte la tarea, puedes descargar el programa [ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![guardar restaurar11](../images/save-restore11.jpg)

### Copia de seguridad

- Con ApplePi-Baker: selecciona la tarjeta adecuada en la lista *Pi-Crust* y haz clic en *Create Backup* para crear una imagen de tu tarjeta microSD.

- En la línea de comandos:
 - Para encontrar la unidad correspondiente a la tarjeta, abre un terminal y escribe el comando: ``diskutil list``
![guardar restaurar12](../images/save-restore12.jpg)
 - Inicia la creación de la imagen introduciendo el comando: ``sudo dd if=/dev/disk1 of=~/Desktop/Backup_Jeedom.img bs=1m`` *Nota: En este ejemplo, el nombre del disco de la tarjeta es `/dev/disk1`, por lo tanto, hay que introducir en el comando de copia de seguridad \`/dev/disk1\`*

### Restauración

- Con ApplePi-Baker: selecciona la tarjeta correcta en la lista *Pi-Crust*, introduce la ruta al archivo de imagen que deseas restaurar en el campo *IMG file* de la sección *Pi-Ingredients* y haz clic en *Restore Backup* para restaurar la imagen en la tarjeta microSD.
- En la línea de comandos:
    - Para encontrar la unidad correspondiente a la tarjeta, abre un terminal y escribe el mismo comando que para la copia de seguridad: ``diskutil list``
 - Desmonta las particiones de la tarjeta escribiendo el comando: ``sudo diskutil unmountDisk /dev/disk1``
 - Restaura la imagen en la tarjeta microSD escribiendo el comando: ``sudo dd bs=1m if=~/Desktop/Backup_Jeedom.img of=/dev/disk1`` *Nota: En este ejemplo, el nombre del disco de la tarjeta es `/dev/disk1`, por lo tanto, hay que introducir en el comando de copia de seguridad \`/dev/disk1\`*

## En Linux

### Copia de seguridad

- Para encontrar la unidad correspondiente a la tarjeta, abre un terminal y escribe el comando: ``sudo fdisk -l | grep Dis``
    ````
    $ sudo fdisk -l | grep Dis
    Disk /dev/sda: 320.1 GB, 320072933376 bytes
    Disk /dev/sdb: 16.0 GB, 16012804096 bytes
    Disk /dev/sdc: 8.0 GB, 8006402048 bytes
    ````
- Inicia la creación de la imagen introduciendo el comando: ``sudo dd if=/dev/sdc of=Backup_Jeedom.img bs=1m`` *Nota: En este ejemplo, el nombre del disco de la tarjeta es /dev/sdc.*

### Restauración

- Para encontrar la unidad correspondiente a la tarjeta, abre un terminal y escribe el comando: ``sudo fdisk -l | grep Dis``
- Desmonta las particiones de la tarjeta escribiendo el comando (sustituyendo la X por los números de las particiones): ``sudo umount /dev/sdcX``
- Restaura la imagen en la tarjeta microSD escribiendo el comando: ``sudo dd if=Backup_Jeedom.img of=/dev/sdc bs=1m`` *Nota: En este ejemplo, el nombre del disco de la tarjeta es /dev/sdc.*
