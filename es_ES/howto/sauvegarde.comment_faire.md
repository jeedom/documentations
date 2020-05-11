Descripción 
===========

Hay dos formas de salvar a Jeedom y cada una tiene
pros y contras.

Es posible guardar desde la interfaz
Jeedom Esto solo concierne al software Jeedom y sus datos.
Tiene la ventaja de poder calentarse y el archivo de
la copia de seguridad se puede exportar a otros medios.

También es posible hacer una copia de seguridad haciendo una imagen
disco de tarjeta microSD (mini y mini +). De esta manera tiene la ventaja
para ser una copia de seguridad completa del sistema, así como de Jeedom y su
datos Sin embargo, debe hacerse apagando Jeedom y
enchufar la tarjeta microSD en otra computadora.

La mejor manera de estar callado es usar ambos : Hacer un
haga una copia de seguridad de la tarjeta microSD de vez en cuando y programe un
copia de seguridad regular de Jeedom.

> **Punta**
>
> El procedimiento de restauración de la tarjeta microSD puede ser útil para
> restaurar un Jeedom predeterminado de la imagen proporcionada por
> el equipo ve
> [aquí](https://www.jeedom.fr/doc/documentation/installation/es_ES/doc-installation.html).

Jeedom Backup / Restore 
=================================

La documentación ya está presente para explicar la página
Administración → Copias de seguridad. Lo encontraras
[aquí](https://jeedom.github.io/core/es_ES/backup).

Copia de seguridad / Restaurar tarjeta microSD 
===========================================

Preparaciones 
-----------

Estas copias de seguridad / restauraciones se realizan desde otro
computadora para hacer una "imagen limpia" de la tarjeta SD. Toma en
primero pare el mini +. Para hacer esto, ponga Jeedom en modo
experto en el menú de usuario en la parte superior derecha.

![save restore06](Imagens/save-restore06.jpg)

Y haga clic en Apagar

![save restore07](Imagens/save-restore07.jpg)

Luego retire la tarjeta microSD del mini + y conéctela a
su computadora a través de un adaptador / lector de tarjetas /

![save restore08](Imagens/save-restore08.jpg)

Ventanas 
------------

Tendrá que comenzar descargando software de terceros, por ejemplo :
[Win32 Disk Imager](http://sourceforge.ny/projects/win32diskImagenr/)

1.  **Salvaguardia**

    -   Inicie el software y verifique que la siguiente carta
        *Device* coincide con el de su tarjeta / lector
        tarjeta.

    -   En el campo *Archivo de imagen*, indicar el nombre del archivo de imagen que
        desea crear y dónde se guardará.

    -   Finalmente haz clic en el botón *Leer*, para crear la imagen.
        Imagen::images / save-restore09.jpg \ [align = "center" \]

2.  **Catering**

    -   Inicie el software y verifique que la siguiente carta
        *Device* coincide con el de su tarjeta / lector
        tarjeta.

    -   En el campo *Archivo de imagen*, ve a buscar el archivo de imagen que
        quieres restaurar.

    -   Finalmente haz clic en el botón *Escribir*, para restaurar esto
        imagen en tarjeta microSD.

![save restore10](Imagens/save-restore10.jpg)

Bajo MacOSX 
-----------

Para facilitar su tarea, puede descargar el software
[ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![save restore11](Imagens/save-restore11.jpg)

1.  **Salvaguardia**

    -   Con Apple Pi-Baker : Seleccione la tarjeta correcta de la lista
        *Corteza de pi*, y haga clic *Crear copia de seguridad* para crear un
        archivo de imagen de su tarjeta microSD.

    -   En comando de shell :

        -   Para encontrar el disco correspondiente a la tarjeta, abra
            una terminal e ingrese el comando : `lista de diskutil`
            Imagen::images / save-restore12.jpg \ [align = "center" \]

        -   Comience a crear la imagen ingresando el comando :
            `sudo dd if = / dev / disk1 of = ~ / Desktop / Backup_Jeedom.img bs = 1m`
            *Observación: En este ejemplo, el nombre del disco de la tarjeta
            es `/ dev / disk1`, así que ingrese el comando
            copia de seguridad \ `/ dev / disk1 \`*

2.  **Catering**

    -   Con Apple Pi-Baker : Seleccione la tarjeta correcta de la lista
        *Corteza de pi*, poner la ruta al archivo de imagen para restaurar
        En el campo *Archivo IMG* de la sección *Ingredientes Pi*, y
        Haga clic en *Restaurar copia de seguridad* para restaurar la imagen en el
        tarjeta microSD.

    -   En comando de shell :

        -   Para encontrar el disco correspondiente a la tarjeta, abra
            un terminal e ingrese el mismo comando que para el
            Salvaguardia : `lista de diskutil`

        -   Desmonta las particiones de la tarjeta escribiendo el comando :
            `sudo diskutil unmountDisk / dev / disk1`

        -   Restaure la imagen en la tarjeta microSD escribiendo el comando
            :
            `sudo dd bs = 1m if = ~ / Desktop / Backup_Jeedom.img de = / dev / disk1`
            *Observación : En este ejemplo, el nombre del disco de la tarjeta
            es `/ dev / disk1`, así que ingrese el comando
            copia de seguridad \ `/ dev / disk1 \`*

Bajo Linux 
----------

1.  **Salvaguardia**

    -   Para encontrar el disco correspondiente a la tarjeta, abra un
        terminal e ingrese el comando : `sudo fdisk -l | grep Dis`

        `` `{.bash}
        $ sudo fdisk -l | grep Dis
        Disco / dev / sda: 320.1 GB, 320072933376 bytes
        Disco / dev / sdb: 16.0 GB, 16012804096 bytes
        Disco / dev / sdc: 8.0 GB, 8006402048 bytes
        `` ''

    -   Comience a crear la imagen ingresando el comando :
        `sudo dd if = / dev / sdc of = Backup_Jeedom.img bs = 1m` * Nota: DENTRO
        En este ejemplo, el nombre del disco de la tarjeta es / dev / sdc.*

2.  **Catering**

    -   Para encontrar el disco correspondiente a la tarjeta, abra un
        terminal e ingrese el comando : `sudo fdisk -l | grep Dis`

    -   Desmonta las particiones de la tarjeta escribiendo el comando (en
        reemplazando la X con los números de partición) :
        `sudo umount / dev / sdcX`

    -   Restaure la imagen en la tarjeta microSD escribiendo el comando :
        `sudo dd if = Backup_Jeedom.img of = / dev / sdc bs = 1m` * Nota: DENTRO
        En este ejemplo, el nombre del disco de la tarjeta es / dev / sdc.*


