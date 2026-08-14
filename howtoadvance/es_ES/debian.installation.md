# Instalación de Debian

Aquí veremos cómo instalar Debian, tanto en una máquina virtual como en una instalación directa en un equipo físico.

# Recuperación de fuentes

Puedes encontrar la última versión de Debian en formato netinstall (tamaño mínimo, pero se necesita conexión a Internet para la instalación). [aquí](https://www.debian.org/CD/netinst) (hay que descargar la imagen en formato amd64) o hacer clic directamente [aquí](http://cdimage.debian.org/debian-cd/10.4.0/amd64/iso-cd/debian-10.4.0-amd64-netinst.iso) para descargar la imagen ISO.

# Inicio de la instalación

## En un equipo físico

Hay que grabar la imagen ISO en un CD e introducir el CD en el ordenador (aunque hoy en día los lectores de CD son cada vez más escasos) o bien crear una memoria USB de arranque.

Para crear una memoria USB de arranque, hay que descargar Rufus [allí](http://rufus.akeo.ie/downloads/rufus-2.9.exe), ejecútalo y configúralo de la siguiente manera:

![debian.instalación](../images/debian.installation.PNG)

> **Nota**
>
> Asegúrate de seleccionar el archivo ISO que acabas de descargar

Ahora solo tienes que hacer clic en «Iniciar», introducir la memoria USB en el ordenador y arrancar desde ella.

## En una máquina virtual

El procedimiento es bastante sencillo: creas una nueva máquina virtual, la conectas, le añades una unidad de CD virtual que apunte al archivo ISO (no te olvides de conectarla) y arrancas la máquina. Ver [aquí](vmware.creer_une_vm) para más información.

# Instalación

Pulsa Intro para iniciar la instalación:

![debian.instalación1](../images/debian.installation1.PNG)

Selecciona «French» y confirma pulsando la tecla Intro

![debian.instalación2](../images/debian.installation2.PNG)

Aquí hay que seleccionar «French» (Francés)

![debian.instalación3](../images/debian.installation3.PNG)

Lo mismo:

![debian.instalación4](../images/debian.installation4.PNG)

Introduce el nombre de tu dispositivo (en este caso, «nabaztag», pero si es un «Jeedom», escribe «Jeedom»)

![debian.instalación5](../images/debian.installation5.PNG)

Solo tienes que pulsar Intro:

![debian.instalación6](../images/debian.installation6.PNG)

Establece una contraseña; te recomiendo una sencilla, como «ooo», que podrás cambiar más adelante (comando «passwd»):

![debian.instalación7](../images/debian.installation7.PNG)

Vuelve a introducirlo:

![debian.instalación8](../images/debian.installation8.PNG)

Introduce el nombre del usuario principal (en este caso, «nabaztag», pero si se trata de un Jeedom, escribe «jeedom»)

![debian.instalación9](../images/debian.installation9.PNG)

Vuelve a poner lo mismo:

![debian.instalación10](../images/debian.installation10.PNG)

Establece una contraseña; te recomiendo una sencilla, como «ooo», que podrás cambiar más adelante (comando «passwd»):

![debian.instalación11](../images/debian.installation11.PNG)

Vuelve a poner lo mismo:

![debian.instalación12](../images/debian.installation12.PNG)

Confirma pulsando Intro:

![debian.instalación13](../images/debian.installation13.PNG)

Lo mismo:

![debian.instalación14](../images/debian.installation14.PNG)

Vuelve a confirmar pulsando Intro:

![debian.instalación15](../images/debian.installation15.PNG)

Seguimos validando:

![debian.instalación16](../images/debian.installation16.PNG)

Y además:

![debian.instalación17](../images/debian.installation17.PNG)

Selecciona «Francia» y confirma:

![debian.instalación18](../images/debian.installation18.PNG)

Confirma pulsando Intro:

![debian.instalación19](../images/debian.installation19.PNG)

Lo mismo:

![debian.instalación20](../images/debian.installation20.PNG)

Y además (sí, hay que validar muchas cosas en una instalación de Debian):

![debian.instalación21](../images/debian.installation21.PNG)

Ahora es un poco más complicado: hay que deseleccionar «Entorno de escritorio Debian» pulsando la barra espaciadora y seleccionar «Servidor SSH» pulsando la barra espaciadora (hay que desplazarse con las flechas del teclado) y, a continuación, confirmar pulsando Intro:

![debian.instalación22](../images/debian.installation22.PNG)

Volvemos a validar:

![debian.instalación23](../images/debian.installation23.PNG)

Hay que seleccionar /dev/sda y, a continuación, confirmar:

![debian.installation24](../images/debian.installation24.PNG)

Ahora solo tienes que sacar la memoria USB, el CD-ROM o el CD-ROM virtual y pulsar Intro:

![debian.instalación25](../images/debian.installation25.PNG)

Ya has terminado la instalación de Debian. Puedes detener el tutorial aquí si lo deseas o seguir los siguientes pasos para realizar algunos ajustes en el sistema (especialmente útiles para Jeedom).

# Optimización para Jeedom

Para preparar la instalación de Jeedom, puedes realizar algunas optimizaciones:

## Añadir vim y sudo

``sudo apt-get install -y vim sudo``

## Añadir fail2ban

Fail2ban es un programa que permite proteger el acceso a tu Debian: en caso de que se produzca un número excesivo de intentos fallidos de conexión, bloquea el acceso a la dirección IP en cuestión (es decir, no a todo el mundo, sino solo al atacante) durante un tiempo determinado.

``sudo apt-get install -y fail2ban``

## Añadir Open VMware Tools

Open VMware Tools instala los controladores específicos del sistema operativo instalado y aporta las optimizaciones de dicho sistema operativo alojado en un hipervisor ESXi.

``sudo apt-get install -y open-vm-tools``

Ahora solo tienes que instalar Jeedom siguiendo [esto](/installation/cli)
