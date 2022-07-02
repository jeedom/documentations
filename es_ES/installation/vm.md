# Instalación en una máquina virtual

Si quieres descubrir Jeedom sin riesgo, también puedes virtualizarlo en tu PC, este es el procedimiento a seguir. No te arriesgas en una VM, la integridad de tu PC está protegida :

## Descargando e Instalando VirtualBox

Necesita descargar el software Virtual Box [aquí](https://download.virtualbox.org/virtualbox/6.1.6/VirtualBox-6.1.6-137129-Win.exe)

# Instalación automática

Descargar jeedom iso [aquí](https://images.jeedom.com/x86-64/).

## Configuración del entorno de máquina virtual

Haga clic en nuevo y complete los campos como se muestra a continuación :

![VirtualBox1](images/VirtualBox1.PNG)

-   Haga clic en siguiente, adapte el tamaño de la memoria a su sistema (1024 son suficientes)
-   Haga clic en Siguiente, cree un disco virtual ahora
-   Haga clic en Crear, elija VDI
-   Haga clic en siguiente, asignado dinámicamente
-   Haga clic en siguiente, elija un tamaño para el espacio (4 GB es suficiente)
-   Haga clic en crear

## Lanzamiento de la máquina virtual

-   Haga clic en configurar
-   Seleccionar almacenamiento
-   Añadir una unidad óptica
-   Elige un disco
![VirtualBox2](images/VirtualBox2.PNG)
-   Indicar la imagen subida anteriormente
-   Luego seleccione la red y elija "acceso al puente" en el modo de acceso a la red.
![VirtualBox3](images/VirtualBox3.PNG)
-   Haga clic en Aceptar
-   Haga clic en Inicio

Seleccione "Instalar en disco" (tecla enter del teclado), valide con sí (tecla de flecha hacia abajo y luego enter). Todo el resto se hará automáticamente (10 a 30 minutos), luego, una vez que la máquina virtual se reinició, esperó 5 minutos y debería tener acceso a Jeedom simplemente colocando la IP de Jeedom en un navegador.

>**PUNTAS**
>
>Para saber la ip de la vm (una vez conectada a ella se muestran los identificadores en la pantalla de conexión) realizada ``ip -s -c -h a``

> **Información**
>
> Las credenciales de inicio de sesión ssh predeterminadas son : jeedom y Mjeedom96 por la contraseña 

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)

# Configuración manual

## Descargar una imagen de Debian strecht - netinstall

Descargue una imagen minimalista de Debian 10 Buster [aquí](https://www.debian.org/CD/http-ftp/), eligiendo CD -> AMD64

## Configuración del entorno de máquina virtual

Haga clic en nuevo y complete los campos como se muestra a continuación :

![VirtualBox1](images/VirtualBox1.PNG)

-   Haga clic en siguiente, adapte el tamaño de la memoria a su sistema (1024 son suficientes)
-   Haga clic en Siguiente, cree un disco virtual ahora
-   Haga clic en Crear, elija VDI
-   Haga clic en siguiente, asignado dinámicamente
-   Haga clic en siguiente, elija un tamaño para el espacio (4 GB es suficiente)
-   Haga clic en crear

## Lanzamiento de la máquina virtual

-   Haga clic en configurar
-   Seleccionar almacenamiento
-   Añadir una unidad óptica
-   Elige un disco
![VirtualBox2](images/VirtualBox2.PNG)
-   Indicar la imagen subida anteriormente
-   Luego seleccione la red y elija "acceso al puente" en el modo de acceso a la red.

![VirtualBox3](images/VirtualBox3.PNG)

-   Haga clic en Aceptar \*Haga clic en Inicio

## Instalando debian 9

Es clasico

![VirtualBox4](images/VirtualBox4.PNG)

-   Elija instalación gráfica
-   Instale el debian preferiblemente sin interfaz gráfica porque es inútil. El nombre de usuario no importa. En la mayoría de las pantallas, todo lo que tiene que hacer es validar la opción predeterminada. Puede dejar los campos vacíos, no está bloqueando.
-   Para la selección de software :
![VirtualBox5](images/VirtualBox5.PNG)
-   Para Grub, no se preocupe, el sector de arranque es el de la VM, no el de su PC. No hay riesgo de romper nada.

## Instalando jeedom

-   Inicie su máquina virtual
-   Identifíquese con el usuario y contraseña elegidos durante la instalación
-   Conviértete en root

``su -``

-   Ingrese la contraseña de root establecida durante la instalación
-   Obtenga el script jeedom, hágalo ejecutable, ejecútelo

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

-   y déjalo ser

## Lanzamiento de jeedom

-   Para conocer la dirección Ip Lan de la VM

````
ip -s -c -h a
````

Su dirección IP, escriba 192.168.0.XX aparece en rojo. Solo ingrésalo en tu navegador.

> **Advertencia**
>
> Si esto no funciona, no has configurado tu tarjeta de red en Network Bridge como se indica al inicio.

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
