# 

.  :

## 

 [](https://download.virtualbox.org/virtualbox/6.1.6/VirtualBox-6.1.6-137129-Win.exe)

# 

 [](https://images.jeedom.com/x86-64/).

## 

 :

![VirtualBox1](images/VirtualBox1.PNG)

-   )
-   
-   
-   
-   )
-   

## 

-   
-   
-   
-   
![VirtualBox2](images/VirtualBox2.PNG)
-   
-   .
![VirtualBox3](images/VirtualBox3.PNG)
-   
-   

). .

>****
>
> ``ip -s -c -h a``

> ****
>
>  :  

 [](https://doc.jeedom.com/es_ES/premiers-pas/index)

# 

## 

 [](https://www.debian.org/CD/http-ftp/), eligiendo CD -> AMD64

## 

 :

![VirtualBox1](images/VirtualBox1.PNG)

-   )
-   
-   
-   
-   )
-   

## 

-   
-   
-   
-   
![VirtualBox2](images/VirtualBox2.PNG)
-   
-   .

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

 [](https://doc.jeedom.com/es_ES/premiers-pas/index)
