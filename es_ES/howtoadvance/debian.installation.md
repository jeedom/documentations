# Instalando debian

Veremos aquí cómo instalar un Debian, tanto como VM o directamente instalado en una máquina física

# Recuperación de fuente

Puede encontrar la última versión de Debian en netinstall (tamaño mínimo pero necesita Internet para la instalación)) [aquí](https://www.debian.org/CD/netinst) (tienes que tomar la imagen en amd64) o hacer clic directamente [aquí](http://cdimage.debian.org/debian-cd/10.4.0/amd64/iso-cd/debian-10.4.0-amd64-netinst.iso) para descargar iso.

# Lanzamiento de la instalación

## En una máquina física

Debe grabar la iso en un CD y poner el CD en la máquina (pero hoy en día los reproductores de CD son cada vez más raros) o crear una llave USB de arranque.

Para la llave USB de arranque tienes que descargar rufus [la](http://rufus.akeo.ie/downloads/rufus-2.9.exe), ejecútelo y configúrelo así :

![debian.installation](images/debian.installation.PNG)

> **Nota**
>
> Recuerda seleccionar el archivo ISO que descargaste justo antes

Todo lo que tiene que hacer es hacer clic en Inicio, luego poner la llave USB en la máquina y hacer que arranque en ella.

## En una máquina virtual

La manipulación es bastante simple, creas una nueva máquina virtual, la enchufas, le pones una unidad de CD virtual que apunta a la iso (recuerda conectarla) y lanzas la máquina. Ver [aquí](https://doc.jeedom.com/es_ES/howto/doc-howto-vmware.creer_une_vm.html) para más detalles.

# Installation

Presiona enter para iniciar la instalación :

![debian.installation1](images/debian.installation1.PNG)

Elija "francés" y valide con la tecla enter

![debian.installation2](images/debian.installation2.PNG)

Aquí tienes que elegir "Francés" (Francés)

![debian.installation3](images/debian.installation3.PNG)

Mismo :

![debian.installation4](images/debian.installation4.PNG)

Ingrese el nombre de su máquina (aquí nabaztag pero si es un jeedom ponga jeedom)

![debian.installation5](images/debian.installation5.PNG)

Solo presiona enter :

![debian.installation6](images/debian.installation6.PNG)

Ponga una contraseña, recomiendo una simple aquí (como oooo), se puede cambiar más tarde (comando passwd) :

![debian.installation7](images/debian.installation7.PNG)

Ponerlo de nuevo incluso :

![debian.installation8](images/debian.installation8.PNG)

Da el nombre del usuario principal (aquí nabaztag pero si es un jeedom pon jeedom)

![debian.installation9](images/debian.installation9.PNG)

Devuelve lo mismo :

![debian.installation10](images/debian.installation10.PNG)

Ponga una contraseña, recomiendo una simple aquí (como oooo), se puede cambiar más tarde (comando passwd) :

![debian.installation11](images/debian.installation11.PNG)

Devuelve lo mismo :

![debian.installation12](images/debian.installation12.PNG)

Valida presionando enter :

![debian.installation13](images/debian.installation13.PNG)

Mismo :

![debian.installation14](images/debian.installation14.PNG)

Confirme nuevamente presionando enter :

![debian.installation15](images/debian.installation15.PNG)

Volvemos a validar :

![debian.installation16](images/debian.installation16.PNG)

Y todavia :

![debian.installation17](images/debian.installation17.PNG)

Elija "Francia" y valide :

![debian.installation18](images/debian.installation18.PNG)

Valida presionando enter :

![debian.installation19](images/debian.installation19.PNG)

Mismo :

![debian.installation20](images/debian.installation20.PNG)

Y de nuevo (sí, validamos mucho en una instalación de Debian) :

![debian.installation21](images/debian.installation21.PNG)

Ahora más complicado, tienes que deseleccionar "Entorno de escritorio Debian" presionando la tecla espacio y seleccionar "Servidor SSH" presionando espacio (tienes que moverte con las flechas del teclado), luego validar presionando enter :

![debian.installation22](images/debian.installation22.PNG)

Volvemos a validar :

![debian.installation23](images/debian.installation23.PNG)

Tienes que elegir /dev/sda y luego validar :

![debian.installation24](images/debian.installation24.PNG)

Allí solo hay que sacar la llave USB, el cdrom o el cdrom virtual y pulsar enter :

![debian.installation25](images/debian.installation25.PNG)

Aquí está su instalación de Debian ha terminado. Puede detener el tutorial allí si lo desea o seguir los siguientes pasos para algunas modificaciones del sistema (útiles especialmente para Jeedom).

# Optimización para Jeedom

Para preparar la instalación de Jeedom puedes hacer algunas optimizaciones :

## Agregar vim y sudo

``sudo apt-get install -y vim sudo``

## Añadir fail2ban

Fail2ban es un software que le permite asegurar el acceso a su debian, en caso de demasiadas fallas de conexión, bloquea el acceso a la IP en cuestión (no a todos, solo a 'atacar) por un tiempo.

``sudo apt-get install -y fail2ban``

## Agregar herramientas abiertas de VMware

Open VMware Tools instala los controladores específicos para el sistema operativo instalado y brinda las optimizaciones de este sistema operativo alojado en un hipervisor ESXi.

``sudo apt-get install -y open-vm-tools``

Todo lo que tienes que hacer es instalar Jeedom siguiendo [este](https://doc.jeedom.com/es_ES/installation/cli)
