# Instalación de Debian

Veremos aquí cómo instalar un Debian, tanto como VM o en instalación directa en una máquina física

# Fuente de recuperación

Puede encontrar la última versión de Debian en netinstall (tamaño mínimo pero necesita internet para la instalación) [aquí](https://www.debian.org/CD/netinst) (toma la imagen en amd64) o haz clic directamente [aquí](http://cdimage.debian.org/debian-cd/10.4.0/amd64/iso-cd/debian-10.4.0-amd64-netinst.iso) para descargar el ISO.

# Lanzamiento de la instalación

## En una maquina fisica

Debe grabar el ISO en un CD y colocar el CD en la máquina (pero hoy en día los reproductores de CD son cada vez más raros) o bien crear una llave USB de arranque.

Para la llave USB de arranque, descargue rufus [el](http://rufus.akeo.ie/downloads/rufus-2.9.exe), ejecutarlo y configurarlo así :

![debian.installation](images/debian.installation.PNG)

> **Nota**
>
> Recuerde seleccionar el archivo ISO que descargó justo antes

Solo tiene que hacer clic en Inicio, luego poner la llave USB en la máquina y arrancarla.

## En una máquina virtual

La manipulación es bastante simple, crea una nueva máquina virtual, la conecta, coloca un reproductor de CD virtual que apunta a la ISO (recuerde conectarla) y ejecuta la máquina. Ver [aquí](https://doc.jeedom.com/es_ES/howto/doc-howto-vmware.creer_une_vm.html) para más detalles.

# Installation

Presione enter para comenzar la instalación :

![debian.installation1](images/debian.installation1.PNG)

Elija "Francés" y confirme con la tecla Intro

![debian.installation2](images/debian.installation2.PNG)

Aquí tienes que elegir "francés")

![debian.installation3](images/debian.installation3.PNG)

ídem :

![debian.installation4](images/debian.installation4.PNG)

Ingrese el nombre de su máquina (aquí nabaztag pero si es un jeedom ponga jeedom)

![debian.installation5](images/debian.installation5.PNG)

Solo presiona enter :

![debian.installation6](images/debian.installation6.PNG)

Pon una contraseña, recomiendo una simple aquí (como oooo), se puede cambiar más tarde (comando passwd) :

![debian.installation7](images/debian.installation7.PNG)

Ponlo de nuevo igual :

![debian.installation8](images/debian.installation8.PNG)

Dé el nombre del usuario principal (aquí nabaztag pero si es un jeedom ponga jeedom)

![debian.installation9](images/debian.installation9.PNG)

Poner de nuevo lo mismo :

![debian.installation10](images/debian.installation10.PNG)

Pon una contraseña, recomiendo una simple aquí (como oooo), se puede cambiar más tarde (comando passwd) :

![debian.installation11](images/debian.installation11.PNG)

Poner de nuevo lo mismo :

![debian.installation12](images/debian.installation12.PNG)

Confirme presionando enter :

![debian.installation13](images/debian.installation13.PNG)

ídem :

![debian.installation14](images/debian.installation14.PNG)

Nuevamente confirme presionando enter :

![debian.installation15](images/debian.installation15.PNG)

Todavía validamos :

![debian.installation16](images/debian.installation16.PNG)

Y todavia :

![debian.installation17](images/debian.installation17.PNG)

Elija "Francia" y valide :

![debian.installation18](images/debian.installation18.PNG)

Confirme presionando enter :

![debian.installation19](images/debian.installation19.PNG)

ídem :

![debian.installation20](images/debian.installation20.PNG)

Y de nuevo (sí, validamos mucho en una instalación de Debian) :

![debian.installation21](images/debian.installation21.PNG)

Ahora más complicado, debe anular la selección de "Entorno de escritorio Debian" presionando la tecla de espacio y seleccionar "Servidor SSH" presionando espacio (debe moverse con las teclas de flecha), luego validar presionando enter :

![debian.installation22](images/debian.installation22.PNG)

Validamos nuevamente :

![debian.installation23](images/debian.installation23.PNG)

Debe elegir / dev / sda y luego validar :

![debian.installation24](images/debian.installation24.PNG)

Allí solo tiene que quitar la llave USB, cdrom o cdrom virtual y presionar enter :

![debian.installation25](images/debian.installation25.PNG)

Aquí está su instalación de Debian terminada. Puede detener el tutorial allí si lo desea o seguir los siguientes pasos para algunas modificaciones del sistema (útil especialmente para jeedom).

# Optimización para Jeedom

Para preparar la instalación de Jeedom puedes hacer algunas optimizaciones :

## Añadir vim y sudo

``sudo apt-get install -y vim sudo``

## Añadir fail2ban

Fail2ban es un software que permite asegurar el acceso a su Debian, en caso de demasiados fallos de conexión, bloquea el acceso a la IP en cuestión (por lo tanto, no para todos, solo para 'atacante) por un tiempo.

``sudo apt-get install -y fail2ban``

## Agregue las herramientas abiertas de VMware

Abra los controladores de instalación de VMware Tools específicos para el sistema operativo instalado y proporcione optimizaciones para este sistema operativo alojado en un hipervisor ESXi.

``sudo apt-get install -y open-vm-tools``

Solo tienes que instalar Jeedom siguiendo [este](https://doc.jeedom.com/es_ES/installation/cli)
