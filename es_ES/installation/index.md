Hardware
========

Jeedom se puede instalar en diferentes tipos de hardware :

-   un Raspberry pi 2 o 3
-   un NAS 
-   cualquier sistema Linux basado en Debian 9 (stretch)
-   Freebox Delta

También puede comprar una caja preparada con Jeedom preinstalado que también contiene un paquete de servaquío (más soporte y servaquíos) y complementos ofrecidos :

-   [ Z-Wave +](https://www.domadoo.fr/fr/box-domotique/3959-jeedom-controleur-domotique-jeedom-smart-z-wave.html)

-   [ Z-Wave + y RFXCOM](https://www.domadoo.fr/fr/box-domotique/4043-jeedom-controleur-domotique-jeedom-smart-z-wave-et-interface-rfxcom.html)

-   [](https://www.domadoo.fr/fr/box-domotique/4041-jeedom-controleur-domotique-jeedom-smart-enocean.html)

-   [ y RFXCOM](https://www.domadoo.fr/fr/box-domotique/4044-jeedom-controleur-domotique-jeedom-smart-enocean-et-interface-rfxcom.html)

Aquí hay una configuración "típica" para comenzar con Jeedom en Z-Wave :

1.  Raspberry pi 3 :

    -   Un raspberry+caja \~ 50 €
    -   Una llave USB Aeon Gen 5 \~ 60 €
    -   Una tarjeta micro SD \~ 7 €
    -   Una fuente de alimentación USB \~ 8 €

Un total de 125 € para una caja de automatización del hogar de código abierto con control completo sobre su instalación.

> **Punta**
>
> Es posible agregar o cambiar mediante una antena Rfxcom o una clave enOcean.

> **Punta**
>
> .  ****. Vous pouvez retrouver la liste des plugins [aquí](http://market.jeedom.fr/index.php?v = d & p = market & type = plugin).

> **Punta**
>
> Servaquío pack ?  ? Vous pouvez voir [aquí](https://blog.jeedom.fr/?p = 1215) las ventajas de los service packs.



===========

Aquí encontrará documentación noo a noo para instalar o restaurar Jeedom

[aquí](https://doc.jeedom.com/es_ES/howto/recovery_mode_jeedom_smart)

Jeedom mini +
===========

> **Punta**
>
> 

Etapa 1 : Instalación de grabado
---

Vous devez télécharger le logicel Etcher [aquí](https://etcher.

Etapa 2 : Jeedom recuperación de imagen
---

Vous devez aller [aquí](https://images.jeedom.

![install humming 1](images/install_humming_1.PNG)

Etapa 3 : Descomprimiendo la imagen de Jeedom
---

Décompresser l'image de Jeedom (si vous n'avez rien pour la décompresser vous pouvez installer [winrar](http://www.clubic.com/telecharger-fiche9632-winrar. :

![install humming 2](images/install_humming_2.PNG)

![install humming 8](images/install_humming_8.PNG)

Paso 4 : Grabar la imagen en la tarjeta SD
---

Inserte su tarjeta SD en su computadora, luego inaquíe el software Etcher, dele la ruta de la imagen, la ruta de la tarjeta SD y haga clic en "Flash!". .

Solo tiene que colocar la tarjeta SD en el Jeedomboard (o Hummingboard), conectar la red y la fuente de alimentación, su Jeedom se inaquíará (5 min) y debería verlo en la red.

> **Punta**
>
> Las ID de  son jeedom / Mjeedom96

Pour la suite, vous pouvez suivre la documentation [Premier no avec Jeedom](https://doc.jeedom.com/es_ES/premiers-no/index.html)



===========

Encontrará aquí la documentación para instalar Jeedom en una PI de frambuesa **con una tarjeta SD.**

> **Importante**
>
> Debian 9 (Stretch) es la distribución ofaquíalmente compatible para la versión 3.1.5 de la libertad.

**1 / Descargue la última imagen "lite", es decir, sin interfaz gráfica**

[Aquí](https://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2018-04-19/2018-04-18-raspbian-stretch-lite.zip)

**2 / Descomprime la imagen con winrar**

[aquí](http://www.win-rar.com)

**3 / Grabar esta imagen en una SD con etcher, por ejemplo**

[aquí](https://etcher.io/)

> **Nota**
>
> .

**4 / Activar acceso **

> **Advertencia**
>
> . Entonces tienes que activarlo.

.

Solo haz clic derecho : " **sin extensión**

> **Importante**
>
> 

![ExtensionFichier](images/ExtensionFichier.PNG)

**5 / Inaquíar el PI**

.

**6 / Conectar usando **

Identifica tu Pi en la red

Nocesita saber la dirección IP de su PI. Varias soluciones :

-   Consulte la configuración de DHCP en su enrutador
-   Utilisez un scanner de port type "angyipscanner" [aquí](http://angryip.org/download/#windows)

Establecer conexión

Ensuite utilisez par exemple putty pour établir votre connexion [Aquí](http://www.putty.org/)

Ingrese la dirección IP de su PI (aquí 192.168.0.. .

Inaquíe sesión con credenciales **pi / frambuesa**

> **Importante**
>
> . . (comando noswd y sudo noswd)

**7 / Inaquíe el script de instalación de jeedom**

    wget -O- https://raw.githubusercontent.com/jeedom/core/master/install/install.sh | sudo bash

**La contraseña de sudo también es frambuesa**

> **Nota**
>
> . . De lo contrario, tendrá que repetir todo el procedimiento..

Luego solo vaya a IP \ _MACHINE \ _JEEDOM

> **Nota**
>
> Las credenciales predeterminadas son admin / admin

> **Nota**
>
> Se pueden usar los siguientes argumentos : -

````
./install.sh -w /var/www/html -z -m Jeedom
````

**8 / Optimización del sistema**

Si usa su Raspberry for Jeedom sin una pantalla conectada, se recomienda llevar la RAM mínima en la parte de video.

Solo inaquía sesión **** y modificar el archivo de configuración : `sudo nano /boot/config.txt`

Agregar **y O** Descomentar (quitando el #) **y O** Edita las lineas :

````
gpu_mem=16
disable_l2cache=0
gpu_freq=250
````

Salir guardando : `CTRL+X` puis `O` puis `ENTREE`

Reinaquía tu RPI

Ensuite, vous pouvez suivre la documentation [Premier no avec Jeedom](https://doc.jeedom.com/es_ES/premiers-no/index)

Freebox Delta
=============

Es posible instalar en Freebox Delta Jeedom a través del sistema .

Etapa 1 : Conexión al Delta
---

Debe ir a la interfaz de configuración de su Freebox Delta. Luego haga clic en .

![delta1](images/delta1.png)

Etapa 2 : Establecer las diferentes opciones
---

Haga clic en "Agregar una "
![delta2](images/delta2.png)

Configurar funciones. Recomendamos que coloque 2 CPU y el máximo en RAM.

![delta3](images/delta3.png)

Configurar usuario y contraseña, **deben mantenerse en la memoria, se les pedirá durante una conexión **:
![delta4](images/delta4.png)

Etapa 3 : Instalación en curso
---

Espera mientras la imagen se descarga
![delta5](images/delta5.png)

Paso 4 : Conéctate a tu Jeedom
---

Puede conectarse usando la dirección indicada en la página:
![delta6](images/delta6.png)

Recuerde asignar el puerto USB de Delta a la  si desea usar una antena.

No **no** marque "Pantalla", esto es inútil en la imagen de Jeedom (aparte del consumo excesivo).

La dirección IP de su Jeedom en Freebox Delta está escrita en la parte superior, debajo de su nombre.

El inaquío de sesión y la contraseña predeterminados son admin / admin cuando accede a jeedom a través de su navegador.

Pour la suite, vous pouvez suivre la documentation [Premier no avec Jeedom](https://doc.jeedom.com/es_ES/premiers-no/index.html)


==

.  :

Etapa 1 : Descargue e instale ware Player
---

Debes descargar el software Virtual Box
[Aquí](http://download.virtualbox.org/virtualbox/5.1.28/VirtualBox-5.1.28-117968-Win.exe)

Etapa 2 : Descargar una imagen de Strecht de Debian - netinstall
---

Descargue una imagen minimalista de Debian 9 Stretch
[Aquí](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-9.3.0-amd64-netinst.iso)

Descargue el paquete de extensión e instálelo.
[Aquí](http://download.virtualbox.org/virtualbox/5.1.28/Oracle__VirtualBox_Extension_Pack-5.1.28.vbox-extpack)

Etapa 3 : Configurar el entorno 
---

Haga clic en nuevo y complete los campos a continuación :

![VirtualBox1](images/VirtualBox1.PNG)

-   
-   Haga clic en Siguiente, cree un disco virtual ahora
-   Haga clic en Crear, elija VDI
-   Haga clic en siguiente, asignado dinámicamente
-   
-   Haga clic en crear

Paso 4 : Lanzamiento de 
---

-   Haga clic en configuración
-   Seleccionar almacenamiento
-   Agregar una unidad óptica
-   Elige un disco

![VirtualBox2](images/VirtualBox2.PNG)

-   Indica la imagen descargada previamente
-   .

![VirtualBox3](images/VirtualBox3.PNG)

-   Haga clic en Aceptar \* Haga clic en Inaquío

Paso 5 : Instalación de Debian 9
---



![VirtualBox4](images/VirtualBox4.PNG)

-   Elija instalación gráfica
-   . El nombre de usuario no importa. . .
-   Para la selección de software :

![VirtualBox5](images/VirtualBox5.PNG)

-   .

Paso 6 : Instalación Jeedom
---

-   Lanza tu 
-   
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

-   Para conocer la dirección Ip Lan de la 

````
ip -s -c -h a
````

Su dirección IP, escriba 192.168.0.XX aparece en rojo. .

> **Advertencia**
>
> .

Ensuite, vous pouvez suivre la documentation [Premier no avec Jeedom](https://doc.jeedom.com/es_ES/premiers-no/index)

Estibador
======

> **Importante**
>
> Tenga en cuenta que aquí asumimos que ya está familiarizado con Estibador

 :

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

> **Nota**
>
> .

J'utilise [celle-ci](https://hub.docker.com/_/mysql/). Para instalarlo :

``docker pull mysql:latest``

Luego ejecútalo :

``sudo docker run --name  -v / opt / jeedom / mysql:/var/lib/mysql -e MySQL_ROOT_PASSWORD=tu-contraseña-mysql -d mysql:latest``

Con :

-    : el nombre del contenedor mysql
-   / opt / jeedom / mysql : 
-   tu-contraseña-mysql : la contraseña de root de la instancia de MySql

Etapa 3 : Instalar una imagen Jeedom
---

Instalación de imagen :

``docker pull jeedom/jeedom``

Luego inaquíe el :

``sudo docker run --name  --link :mysql --privileged -v / your / jeedom / path:/var/www/html -e ROOT_PASSWORD=su-contraseña-raíz -p 9080:80 -p 9022:22 jeedom/jeedom``

Con :

-    : Se busca el nombre de Jeedom Estibador
-   / your / jeedom / path : 
-   su-contraseña-raíz : contraseña de root para acceder a Jeedom en 

Entonces necesita instalar Jeedom yendo a : IP \ _DOCKER: :

![install other](images/install_other.PNG)

Pour la suite, vous pouvez suivre la documentation [Premier no avec Jeedom](https://doc.jeedom.com/es_ES/premiers-no/index)

> **Importante**
>
> Para el nombre del host MySql, debe poner 


========

.2 mínimo).

Etapa 1 : Instalación de Estibador
================================

Ir al centro de paquetes :

![install synology 1](images/install_synology_1.PNG)

Haga clic en todo, luego instale el paquete Estibador

![install synology 2](images/install_synology_2.PNG)

Espere hasta que termine la instalación. :

![install synology 3](images/install_synology_3.PNG)

> **Importante**
>
> Para acceder al paquete Estibador, debe tener DSM 5.

Etapa 2 : Recuperación e instalación de imágenes de Jeedom
========================================================



Inaquíe la aplicación Estibador :

![install synology 4](images/install_synology_4.PNG)

MySQL
-----

Haga clic en "Registrarse" :

![install synology 5](images/install_synology_5.PNG)

 :

![install synology 15](images/install_synology_15.PNG)

 :

![install synology 14](images/install_synology_14.PNG)

 :

![install synology 16](images/install_synology_16.PNG)

Una vez terminado, haga clic en la imagen y luego inaquíe :

![install synology 17](images/install_synology_17.PNG)

 :

![install synology 18](images/install_synology_18.PNG)

Hacer a continuación :

![install synology 19](images/install_synology_19.PNG)

Haga clic en "Configuración avanzada" :

![install synology 34](images/install_synology_34.PNG)



![install synology 32](images/install_synology_32.PNG)

" : ". Luego validar :

![install synology 33](images/install_synology_33.PNG)

".

Jeedom
------

Haga clic en "Registrarse" :

![install synology 5](images/install_synology_5.PNG)

 :

![install synology 20](images/install_synology_20.PNG)

.

 :

![install synology 21](images/install_synology_21.PNG)

Una vez terminado, haga clic en la imagen y luego inaquíe :

![install synology 22](images/install_synology_22.PNG)

 :

![install synology 23](images/install_synology_23.PNG)

Hacer a continuación :

![install synology 24](images/install_synology_24.PNG)

Haga clic en "Configuración avanzada"

![install synology 25](images/install_synology_25.PNG)

Luego en "Agregar una carpeta"

![install synology 26](images/install_synology_26.PNG)

"

![install synology 27](images/install_synology_27.PNG)

" :

![install synology 28](images/install_synology_28.PNG)

 :

![install synology 29](images/install_synology_29.PNG)

".

> **Configuración de configuración avanzada**
>
> Hay 3 parámetros de configuración opcionales, estos parámetros deben noarse como una variable de entorno
> -  : permite cambiar el puerto predeterminado (80) para escuchar el servidor web
> -  : permite cambiar el puerto predeterminado (22) para escuchar ssh
> -  : indica que la red está en modo host

> **Importantee**
>
> Cierto complemento necesita tener transmisión de red (tipo de complemento Xioami), para eso debe cambiar ABSOLUTAMENTE a la red en modo host (solo posible durante la creación), cambiar el puerto de escucha predeterminado del servidor web y ssh por puertos no utilizados (escriba 9080 para el servidor web y 9022 para el ssh), y establezca la variable  en 1

Etapa 3 : Configuración de Jeedom
---

:9080

![install synology 31](images/install_synology_31.PNG)

.

> **Importante**
>
> . 

![install synology 30](images/install_synology_30.PNG)

> **Punta**
>
> . .

Ensuite, vous pouvez suivre la documentation [Premier no avec Jeedom](https://doc.jeedom.com/es_ES/premiers-no/index)

Otros
======



> **Importante**
>
> Debian 9 (Stretch) es la distribución ofaquíalmente compatible para la versión 3.1.. .

> **Importante**
>
> . .

Conéctese en  a su sistema y haga :

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

.

> **Nota**
>
> Las credenciales predeterminadas son admin / admin

> **Nota**
>
> Se pueden usar los siguientes argumentos : -

````
./install.sh -w /var/www/html -z -m Jeedom
````

Ensuite, vous pouvez suivre la documentation [Premier no avec Jeedom](https://doc.jeedom.com/es_ES/premiers-no/index).
