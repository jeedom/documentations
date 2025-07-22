# Instalación en una VM

Si desea descubrir Jeedom sin riesgo, también puede virtualizarlo en su PC, este es el procedimiento a seguir. No se arriesga en una máquina virtual, la integridad de su PC está protegida :

## Descargue e instale VirtualBox

Debes descargar el software Virtual Box [aquí](https://www.virtualbox.org/wiki/Downloads)

# Instalación automática

Descargar la iso de jeedom [aquí](https://images.jeedom.com/x86-64/).

## Configurar el entorno VM

Haga clic en "Nuevo" y complete los campos como se muestra a continuación :

![VirtualBox1](images/VM1.png)

-   Haga clic en siguiente, adapte el tamaño de la memoria a su sistema (1024 Mb es suficiente)

![VirtualBox3](images/VM2.png)

-   Haga clic en Siguiente
-   Luego haga clic en “Crear un disco virtual ahora” (8 GB son suficientes)

![VirtualBox1](images/VM3.png)

-   Haga clic en Siguiente
-   Haga clic en Finalizar

## Lanzamiento de VM

-   Haga clic en configuración
-   Haga clic en + junto al controlador (1)
-   Indique la imagen descargada anteriormente (2)
-   Haga clic en elegir (3)

![VirtualBox2](images/VM5.png)


-   Luego seleccione la red y elija "acceso de puente" en el modo de acceso a la red.
  
![VirtualBox1](images/VM6.png)

-   Haga clic en Aceptar
-   Haga clic en iniciar

Seleccione "Instalar en disco" (ingrese la tecla en el teclado), confirme con sí (tecla de flecha hacia abajo y luego ingrese). Todo lo demás se hará automáticamente (de 10 a 30 minutos), luego, una vez que el vm se reinicie, esperará 5 minutos y deberá tener acceso a Jeedom simplemente poniendo la ip de jeedom en un navegador.

>**Consejos**
>
>Para conocer la IP de la máquina virtual (una vez conectado a ella, los identificadores se muestran en la pantalla de conexión) escriba el siguiente comando respetando los espacios: 
````
ip -s -c -h a
````

> **Información**
>
> Las ID de conexión ssh predeterminadas son : jeedom y Mjeedom96 para la contraseña 

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)

# Instalación manual

## Descargar una imagen de Debian 11 - netinstall

Descargue una imagen minimalista de debian 11 [aquí](https://www.debian.org/releases/bullseye/debian-installer/), eligiendo "imágenes de CD de instalación en red" -> AMD64

## Configurar el entorno VM

Haga clic en nuevo y complete los campos a continuación :

![VirtualBox1](images/VM1.png)

-   Haga clic en siguiente, adapte el tamaño de la memoria en relación con su sistema (1024 son suficientes)

![VirtualBox3](images/VM2.png)

-   Haga clic en Siguiente, cree un disco virtual ahora (8 GB son suficientes)

![VirtualBox1](images/VM3.png)

-   Haga clic en Siguiente
-   Haga clic en Finalizar

## Lanzamiento de VM

-   Haga clic en configuración
-   Haga clic en + junto al controlador (1)
-   Indique la imagen descargada anteriormente (2)
-   Haga clic en elegir (3)

![VirtualBox2](images/VM5.png)


-   Luego seleccione la red y elija "acceso de puente" en el modo de acceso a la red.
  
![VirtualBox1](images/VM6.png)

-   Haga clic en Aceptar
-   Haga clic en iniciar

## Instalando debian 11

Es clásico

![VirtualBox4](images/VirtualBox4.PNG)

-   Elija instalación gráfica
-   Instale el debian preferiblemente sin interfaz gráfica porque inútil. El nombre de usuario no importa. En la mayoría de las pantallas, solo tiene que validar la opción predeterminada. Puedes dejar campos vacíos, no está bloqueando.
-   Para la selección de software :
![VirtualBox5](images/VirtualBox5.PNG)
-   Para Grub, no se preocupe, el sector de arranque es el de la VM, no el de su PC. No hay riesgo de romper nada.

## Instalación Jeedom

-   Lanza tu VM
-   Identifíquese con el usuario y la contraseña elegidos durante la instalación
-   Ir de raíz

``su -``

-   Ingrese la contraseña de root establecida durante la instalación
-   Obtenga el script jeedom, hágalo ejecutable, ejecútelo

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

-   y déjalo ir

## Lanzamiento de Jeedom

-   Para conocer la dirección Ip Lan de la VM

````
ip -s -c -h a
````

Su dirección IP, escriba 192.168.0.XX aparece en rojo. Solo ingrésalo en tu navegador.

> **Advertencia**
>
> Si esto no funciona, no ha configurado su tarjeta de red como Puente de red como se indica al inicio.

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
