Hardware
========

Jeedom se puede instalar en diferentes tipos de hardware :

-   un Raspberry pi 2 o 3
-   un NAS Synology
-   cualquier sistema Linux basado en Debian 9 (stretch)
-   Freebox Delta

También puede comprar una caja preparada con Jeedom preinstalado que también contiene un paquete de servicio (más soporte y servicios) y complementos ofrecidos :

-   [Jeedom Smart Z-Wave +](https://www.domadoo.fr/fr/box-domotique/3959-jeedom-controleur-domotique-jeedom-smart-z-wave.html)

-   [Jeedom Smart Z-Wave + y RFXCOM](https://www.domadoo.fr/fr/box-domotique/4043-jeedom-controleur-domotique-jeedom-smart-z-wave-et-interface-rfxcom.html)

-   [Jeedom Smart EnOcean](https://www.domadoo.fr/fr/box-domotique/4041-jeedom-controleur-domotique-jeedom-smart-enocean.html)

-   [Jeedom Smart EnOcean y RFXCOM](https://www.domadoo.fr/fr/box-domotique/4044-jeedom-controleur-domotique-jeedom-smart-enocean-et-interface-rfxcom.html)

Aquí hay una configuración "típica" para comenzar con Jeedom en Z-Wave :

1.  Raspberry pi 3 :

    -   Un raspberry+caja \~ 50 €
    -   Una llave USB Aeon Gen 5 \~ 60 €
    -   Una tarjeta micro SD \~ 7 €
    -   Una fuente de alimentación USB \~ 8 €

Un total de 125 € para una caja de automatización del hogar de código abierto con control completo sobre su instalación.

> **Tip**
>
> Es posible agregar o cambiar mediante una antena Rfxcom o una clave enOcean.

> **Tip**
>
> Jeedom es un software que es y seguirá siendo de código abierto, su uso es completamente gratuito y no depende de una nube o una suscripción. Sin embargo, algunos complementos que aumentan la capacidad de Jeedom o su uso pueden ser de pago. **y puede necesitar una conexión a internet**. Puedes encontrar la lista de complementos [aquí](http://market.jeedom.fr/index.php?v=d&p=market&type=plugin).

> **Tip**
>
> Servicio pack ? Quézako ? Podéis ver [aquí](https://blog.jeedom.fr/?p=1215) las ventajas de los service packs.


Jeedom Smart
===========

Aquí encontrará documentación noo a noo para instalar o restaurar Jeedom

[aquí](https://doc.jeedom.com/es_ES/howto/recovery_mode_jeedom_smart)

Jeedom mini +
===========

> **Tip**
>
> El nombre de la imagen de Jeedom puede ser diferente al de las capturas realizadas en esta documentación

Etapa 1 : Instalación de grabado
---

Debes descargar el software Etcher [aquí](https://etcher.io/) luego instálalo en tu pc

Etapa 2 : Jeedom recuperación de imagen
---

Tiene que ir [aquí](https://images.jeedom.com/jeeboard/),luego, en la carpeta Imágenes, recupere la imagen jeedom-jeeboard - \*. rar

![install humming 1](images/install_humming_1.PNG)

Etapa 3 : Descomprimiendo la imagen de Jeedom
---

Descomprima la imagen de Jeedom (si no tiene nada que descomprimir, puede instalar [winrar](http://www.clubic.com/telecharger-fiche9632-winrar.html)), debes obtener :

![install humming 2](images/install_humming_2.PNG)

![install humming 8](images/install_humming_8.PNG)

Paso 4 : Grabar la imagen en la tarjeta SD
---

Inserte su tarjeta SD en su computadora, luego inicie el software Etcher, dele la ruta de la imagen, la ruta de la tarjeta SD y haga clic en "Flash!". El software quemará la tarjeta SD y verificará la grabación.

Solo tiene que colocar la tarjeta SD en el Jeedomboard (o Hummingboard), conectar la red y la fuente de alimentación, su Jeedom se iniciará (5 min) y debería verlo en la red.

> **Tip**
>
> Las ID de SSH son jeedom / Mjeedom96

Por lo demás, puedes seguir la documentación [Primer noo con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index.html)


Raspberrypi
===========

Encontrará aquí la documentación para instalar Jeedom en una PI de frambuesa **con una tarjeta SD.**

> **Important**
>
> Debian 9 (Stretch) es la distribución oficialmente compatible para la versión 3.1.5 de la libertad.

**1 / Descargue la última imagen "lite", es decir, sin interfaz gráfica** [aquí](https://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2018-04-19/2018-04-18-raspbian-stretch-lite.zip)

**2 / Descomprime la imagen con winrar** [aquí](http://www.win-rar.com)

**3 / Grabar esta imagen en una SD con etcher, por ejemplo** [aquí](https://etcher.io/)

> **Note**
>
> Si usa Etcher para grabar su imagen, el noo de descompresión es inútil (el formato Zip se reconoce directamente en la selección del archivo de imagen).

**4 / Activar acceso SSH**

> **Warning**
>
> Por razones de seguridad, el acceso SSH ya no está habilitado de forma predeterminada en esta distribución. Entonces tienes que activarlo.

Se debe crear un archivo ssh vacío en la partición de arranque (el único accesible bajo Windows).

Solo haz clic derecho : documento nuevo / de texto y cámbiele el nombre a "ssh" **sin extensión**

> **Important**
>
> En Windows, en el explorador, por lo tanto, debe verificar su configuración en display / options / modificar la carpeta y las opciones de búsqueda /

![ExtensionFichier](images/ExtensionFichier.PNG)

**5 / Iniciar el PI**

Inserte su tarjeta SD, conecte el cable de red, conecte la alimentación.

**6 / Conectar usando SSH**

Identifica tu Pi en la red

Necesita saber la dirección IP de su PI. Varias soluciones :

-   Consulte la configuración de DHCP en su enrutador
-   Utilice un escáner de puertos de tipo angyipscanner" [aquí](http://angryip.org/download/#windows)

Establecer conexión

Luego use, por ejemplo, masilla para establecer su conexión [Aquí](http://www.putty.org/)

Ingrese la dirección IP de su PI (aquí 192.168.0.10) y haga clic en abrir. Acepte el mensaje de seguridad predeterminado al iniciar sesión por primera vez.

Inicie sesión con credenciales **pi / frambuesa**

> **Important**
>
> Por razones de seguridad, es imprescindible cambiar la contraseña predeterminada. Los casos de piratería basada en el uso del par de inicio de sesión / contraseña predeterminado de la Frambuesa están particularmente extendidos. (comando noswd y sudo noswd)

**7 / Inicie el script de instalación de jeedom**

``wget -O- https://raw.githubusercontent.com/jeedom/core/master/install/install.sh | sudo bash``

**La contraseña de sudo también es frambuesa**

> **Note**
>
> Dependiendo de su velocidad de internet, la instalación puede tomar de 45 a 90 minutos.. No debe interrumpir el proceso antes del final.. De lo contrario, tendrá que repetir todo el procedimiento..

Luego solo vaya a IP \_MACHINE \_JEEDOM

> **Note**
>
> Las credenciales predeterminadas son admin / admin

> **Note**
>
> Se pueden usar los siguientes argumentos : -w = carpeta del servidor web -z = dependencias de instalación z-wave -m = contraseña de root mysql deseada

````
./install.sh -w /var/www/html -z -m Jeedom
````

**8 / Optimización del sistema**

Si usa su Raspberry for Jeedom sin una pantalla conectada, se recomienda llevar la RAM mínima en la parte de video.

Solo inicia sesión **SSH** y modificar el archivo de configuración : `sudo nano / boot / config.txt`

Agregar **y O** Descomentar (quitando el #) **y O** Edita las lineas :

````
gpu_mem=16
disable_l2cache=0
gpu_freq=250
````

Salir guardando : `CTRL + X` luego` O` luego` ENTER`

Reinicia tu RPI

Entonces puedes seguir la documentación [Primer noo con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)

Freebox Delta
=============

Es posible instalar en Freebox Delta Jeedom a través del sistema VM.

Etapa 1 : Conexión al Delta
---

Debe ir a la interfaz de configuración de su Freebox Delta. Luego haga clic en VM.

![delta1](images/delta1.png)

Etapa 2 : Establecer las diferentes opciones
---

Haga clic en "Agregar una VM"
![delta2](images/delta2.png)

Configurar funciones. Recomendamos que coloque 2 CPU y el máximo en RAM.

![delta3](images/delta3.png)

Configurar usuario y contraseña, **deben mantenerse en la memoria, se les pedirá durante una conexión SSH**:
![delta4](images/delta4.png)

Etapa 3 : Instalación en curso
---

Espera mientras la imagen se descarga
![delta5](images/delta5.png)

Paso 4 : Conéctate a tu Jeedom
---

Puede conectarse usando la dirección indicada en la página:
![delta6](images/delta6.png)

Recuerde asignar el puerto USB de Delta a la VM si desea usar una antena.

No **pas** marque "Pantalla", esto es inútil en la imagen de Jeedom (aparte del consumo excesivo).

La dirección IP de su Jeedom en Freebox Delta está escrita en la parte superior, debajo de su nombre.

El inicio de sesión y la contraseña predeterminados son admin / admin cuando accede a jeedom a través de su navegador.

Por lo demás, puedes seguir la documentación [Primer noo con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index.html)

VM
==

Si desea descubrir Jeedom sin riesgo, también puede virtualizarlo en su PC, este es el procedimiento a seguir. No se arriesga en una máquina virtual, la integridad de su PC está protegida :

Etapa 1 : Descargue e instale VMware Player
---

Debes descargar el software Virtual Box [Aquí](http://download.virtualbox.org/virtualbox/5.1.28/VirtualBox-5.1.28-117968-Win.exe)

Etapa 2 : Descargar una imagen de Strecht de Debian - netinstall
---

Descargue una imagen minimalista de Debian 9 Stretch [Aquí](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-9.3.0-amd64-netinst.iso)

Descargue el paquete de extensión e instálelo. [Aquí](http://download.virtualbox.org/virtualbox/5.1.28/Oracle_VM_VirtualBox_Extension_Pack-5.1.28.vbox-extpack)

Etapa 3 : Configurar el entorno VM
---

Haga clic en nuevo y complete los campos a continuación :

![VirtualBox1](images/VirtualBox1.PNG)

-   Haga clic en siguiente, adapte el tamaño de la memoria en relación con su sistema (1024 son suficientes)
-   Haga clic en Siguiente, cree un disco virtual ahora
-   Haga clic en Crear, elija VDI
-   Haga clic en siguiente, asignado dinámicamente
-   Haga clic en siguiente, elija un tamaño para el espacio (4 GB es suficiente)
-   Haga clic en crear

Paso 4 : Lanzamiento de VM
---

-   Haga clic en configuración
-   Seleccionar almacenamiento
-   Agregar una unidad óptica
-   Elige un disco

![VirtualBox2](images/VirtualBox2.PNG)

-   Indica la imagen descargada previamente
-   Luego seleccione la red y elija "acceso de puente" en el modo de acceso a la red.

![VirtualBox3](images/VirtualBox3.PNG)

-   Haga clic en Aceptar \* Haga clic en Inicio

Paso 5 : Instalación de Debian 9
---

Es clásico ...

![VirtualBox4](images/VirtualBox4.PNG)

-   Elija instalación gráfica
-   Instale el debian preferiblemente sin interfaz gráfica porque inútil. El nombre de usuario no importa. En la mayoría de las pantallas, solo tiene que validar la opción predeterminada. Puedes dejar campos vacíos, no está bloqueando.
-   Para la selección de software :

![VirtualBox5](images/VirtualBox5.PNG)

-   Para Grub, no se preocupe, el sector de arranque es el de la VM, no el de su PC. No hay riesgo de romper nada..

Paso 6 : Instalación Jeedom
---

-   Lanza tu VM
-   Identifíquese con el usuario y la contraseña elegidos durante la instalación
-   Ir de raíz

``su``

-   Ingrese la contraseña de root establecida durante la instalación
-   Obtenga el script jeedom, hágalo ejecutable, ejecútelo


````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

-   y déjalo ir ...

Paso 7 : Lanzamiento de Jeedom
---

-   Para conocer la dirección Ip Lan de la VM

````
ip -s -c -h a
````

Su dirección IP, escriba 192.168.0.XX aparece en rojo. Solo ingrésalo en tu navegador.

> **Warning**
>
> Si esto no funciona, no ha configurado su tarjeta de red como Puente de red como se indica al inicio.

Entonces puedes seguir la documentación [Primer noo con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)

Docker
======

> **Important**
>
> Tenga en cuenta que aquí asumimos que ya está familiarizado con Estibador

Para descubrir Jeedom, también puedes rotarlo en un contenedor Estibador :

Etapa 1 : Instalación de Estibador
---

Estibador ahora está disponible en todas las distribuciones recientes.
Para instalarlo en una distribución

-   basado en rpm

````
yum install docker
````

-   basado en deb

````
apt-get update
apt-get install docker
apt-get install docker.io
````

Etapa 2 : Instalar una imagen mysql
---

> **Note**
>
> También puede instalar mysql directamente en la máquina host, en este caso, omita este noo.

Yo uso [esta](https://hub.docker.com/_/mysql/). Para instalarlo :

``docker pull mysql:latest``

Luego ejecútalo :

``sudo docker run --name jeedom-mysql -v /opt/jeedom/mysql:/var/lib/mysql -e MySQL_ROOT_PASSWORD=your-mysql-password -d mysql:latest``

Con :

-   ``jeedom-mysql`` : el nombre del contenedor mysql
-   ``/opt/jeedom/mysql`` : El archivo del host donde tenemos que almacenar datos MySql
-   ``your-mysql-password`` : la contraseña de root de la instancia de MySql

Etapa 3 : Instalar una imagen Jeedom
---

Instalación de imagen :

``docker pull jeedom/jeedom``

Luego inicie el :

``sudo docker run --name jeedom-server --link jeedom-mysql:mysql --privileged -v /your/jeedom/path:/var/www/html -e ROOT_PASSWORD=your-root-password -p 9080:80 -p 9022:22 jeedom/jeedom``

Con :

-   ``jeedom-server`` : Se busca el nombre de Jeedom Estibador
-   ``/your/jeedom/path`` : directorio donde los datos de Jeedom se colocan en el host
-   ``your-root-password`` : contraseña de root para acceder a Jeedom en SSH

Entonces necesita instalar Jeedom yendo a : IP \_DOCKER:9080 e ingrese la información de conexión a mysql :

![install other](images/install_other.PNG)

Por lo demás, puedes seguir la documentación [Primer noo con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)

> **Important**
>
> Para el nombre del host MySql, debe poner jeedom-mysql

Synology
========

Aquí encontrará la documentación noo a noo para instalar Jeedom en un Synology (DSM 5.2 mínimo).

Etapa 1 : Instalación de Estibador
================================

Ir al centro de paquetes :

![install synology 1](images/install_synology_1.PNG)

Haga clic en todo, luego instale el paquete Estibador

![install synology 2](images/install_synology_2.PNG)

Espere hasta que termine la instalación. :

![install synology 3](images/install_synology_3.PNG)

> **Important**
>
> Para acceder al paquete Estibador, debe tener DSM 5.2 y un NAS compatible

Etapa 2 : Recuperación e instalación de imágenes de Jeedom
========================================================

Necesita Estibador para ejecutar Jeedom, el primer Estibador Mysql que contendrá la base de datos y el segundo que contiene Jeedom

Inicie la aplicación Estibador :

![install synology 4](images/install_synology_4.PNG)

MYSQL
-----

Haga clic en "Registrarse" :

![install synology 5](images/install_synology_5.PNG)

En el campo de búsqueda, escriba "mysql", seleccione mysql y haga clic en descargar :

![install synology 15](images/install_synology_15.PNG)

Luego valide la solicitud de versión, lo mejor es tomar la última versión :

![install synology 14](images/install_synology_14.PNG)

Luego haga clic en la imagen, aquí puede seguir el progreso de la descarga (puede tomar varias decenas de minutos) :

![install synology 16](images/install_synology_16.PNG)

Una vez terminado, haga clic en la imagen y luego inicie :

![install synology 17](images/install_synology_17.PNG)

Dé un nombre a su mysql, así como a un puerto local redirigido al puerto 3306 del contenedor, luego haga lo siguiente :

![install synology 18](images/install_synology_18.PNG)

Hacer a continuación :

![install synology 19](images/install_synology_19.PNG)

Haga clic en "Configuración avanzada" :

![install synology 34](images/install_synology_34.PNG)

Luego, en "Agregar una carpeta", y allí, coloque la carpeta deseada en el lado de Synology (es en esta carpeta donde habrá todos los archivos de la base de datos) y / var / lib / mysql en el lado del contenedor (tenga cuidado con desmarque "Solo lectura")

![install synology 32](images/install_synology_32.PNG)

Haga clic en "Entorno" y luego "Agregar una variable" y agregue "Variable" : "MySQL \_ROOT \_PASSWORD "y en valor ponga la contraseña BDD deseada (se usará más adelante). Luego validar :

![install synology 33](images/install_synology_33.PNG)

Marque "Ejecutar este contenedor cuando el asistente haya terminado" y luego haga clic en "Aplicar".

Jeedom
------

Haga clic en "Registrarse" :

![install synology 5](images/install_synology_5.PNG)

En el campo de búsqueda, escriba "jeedom", seleccione jeedom / jeedom y haga clic en descargar :

![install synology 20](images/install_synology_20.PNG)

Luego valide la solicitud de versión, lo mejor es tomar la última.

Luego haga clic en la imagen, aquí puede seguir el progreso de la descarga (puede tomar varias decenas de minutos) :

![install synology 21](images/install_synology_21.PNG)

Una vez terminado, haga clic en la imagen y luego inicie :

![install synology 22](images/install_synology_22.PNG)

Dé un nombre a su libertad así como un puerto local redirigido al puerto 80 (aquí 9080) y uno a 22 (aquí 9022) del contenedor, luego haga lo siguiente :

![install synology 23](images/install_synology_23.PNG)

Hacer a continuación :

![install synology 24](images/install_synology_24.PNG)

Haga clic en "Configuración avanzada"

![install synology 25](images/install_synology_25.PNG)

Luego en "Agregar una carpeta"

![install synology 26](images/install_synology_26.PNG)

Elija una carpeta en su Synology (es en esta carpeta donde habrá todos los archivos jeedom), tenga cuidado de desmarcar "Solo lectura"

![install synology 27](images/install_synology_27.PNG)

En la ruta, coloque / var / www / html y luego haga clic en "Entorno" :

![install synology 28](images/install_synology_28.PNG)

Marque "Ejecutar el contenedor con privilegios elevados" y luego valide todo :

![install synology 29](images/install_synology_29.PNG)

Marque "Ejecutar este contenedor cuando el asistente haya terminado" y luego haga clic en "Aplicar".

> **Configuración de configuración avanzada**
>
> Hay 3 parámetros de configuración opcionales, estos parámetros deben noarse como una variable de entorno
> - APACHE_PORT : permite cambiar el puerto predeterminado (80) para escuchar el servidor web
> - SSH_PORT : permite cambiar el puerto predeterminado (22) para escuchar ssh
> - MODE_HOST : indica que la red está en modo host

> **IMPORTANT**
>
> Cierto complemento necesita tener transmisión de red (tipo de complemento Xioami), para eso debe cambiar ABSOLUTAMENTE a la red en modo host (solo posible durante la creación), cambiar el puerto de escucha predeterminado del servidor web y ssh por puertos no utilizados (escriba 9080 para el servidor web y 9022 para el ssh), y establezca la variable MODE_HOST en 1

Etapa 3 : Configuración de Jeedom
---

Ahora necesita instalar Jeedom, es muy simple, vaya a IP \_NAS:9080

![install synology 31](images/install_synology_31.PNG)

Complete los campos de acuerdo con su configuración (configuración de Estibador mysql instalada previamente) y valide.

> **Important**
>
> La dirección IP del BDD es la dirección IP del NAS, el puerto es el redirigido desde Estibador Mysql, la contraseña es la que está en Estibador Mysql. El nombre de usuario es root y el nombre base es lo que quieras (se recomienda Jeedom)

![install synology 30](images/install_synology_30.PNG)

> **Tip**
>
> Si desea acceso SSH, necesita en los puertos para redirigir un puerto local al puerto 22 del contenedor, los identificadores SSH son root / jeedom. Puede cambiar la contraseña configurando la variable de entorno ROOT \_PASSWORD en el valor de la contraseña deseada.

Entonces puedes seguir la documentación [Primer noo con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)

Autres
======

Aquí encontrará la documentación para instalar Jeedom en la mayoría de los sistemas Linux (probado y aprobado en la distribución Debian)

> **Important**
>
> Debian 9 (Stretch) es la distribución oficialmente compatible para la versión 3.1.7 de Jeedom (pero Jessie sigue siendo perfectamente funcional). Si no domina los entornos Linux como mínimo, le recomendamos que use una imagen oficial (OVF) o el uso de un Mini + o Smart (disponible próximamente).

> **Important**
>
> La secuencia de comandos de instalación puede ser peligrosa porque supone que su sistema está en blanco. De lo contrario, lea el guión e instálelo a mano..

Conéctese en SSH a su sistema y haga :

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

Luego simplemente vaya a IP \_MACHINE \_JEEDOM desde su navegador de Internet.

> **Note**
>
> Las credenciales predeterminadas son admin / admin

> **Note**
>
> Se pueden usar los siguientes argumentos : -w = carpeta del servidor web -z = dependencias de instalación z-wave -m = contraseña de root mysql deseada

````
./install.sh -w /var/www/html -z -m Jeedom
````

Entonces puedes seguir la documentación [Primer noo con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index).
