Aquí hay un tutorial para instaelr VMware en un Intel NUC (gen6). Nosotros
luego veremos cómo agregar Jeedom en él

El material 
===========

Intel NUC 
---------

Intel NUC es una PC pequeña, no el más potente, pero muy económica
energía y pequeñas dimensiones. Esto lo convierte en un mesero perfecto
virtualización basada en VMware.

Actualmente hay 2 NUC de 6ta generación (els otras funcionan
también para VMware pero requiere controeldores adaquíonales en el
Núcleo de VMware):

-   Intel Core i3-6100U (Dual-Core 2.3 GHz - - 4 hilos - Caché 3 MB -
    TDP 15W)

-   Intel Core i5-6260U (Dual-Core 1.8 GHz - Turbo 2.9 GHz - 4 hilos -
    Caché 4 MB)

El i5 es significativamente más potente porque tiene un poco más de memoria caché
y especialmente un modo turbo que le permite subir mucho más alto en
Frecuencia.

Además, hay 2 tipos de casos :

-   Una carcasa delgada que solo puede contener un disco tipo M2

-   Un estuche más grueso que puede contener un disco tipo M2 y un
    disco 2.5 pulgadas

Eso hace 4 referencias :

-   i3 M2 : [Intel NUC
    NUC6I3SYK](http://www.ldlc.com/fiche/PB00203086.html) \~ 320€

-   i3 M2 + 2.5 pulgadas : [Intel NUC
    NUC6I3SYH](http://www.ldlc.com/fiche/PB00203148.html) \~ 320€

-   i5 M2 : [Intel NUC
    NUC6I5SYK](http://www.ldlc.com/fiche/PB00203084.html) \~ 460€

-   i5 M2 + 2.5 pulgadas : [Intel NUC
    NUC6I5SYH](http://www.ldlc.com/fiche/PB00202760.html) \~ 430€

SSD 
---

Tienes que agregar un SSD y memoria. SSD nivel I usted
recomienda 240 GB o más, a menos que tome el modelo con un
ubicación 2.5 pulgadas (que le permite poner un disco duro adaquíonal)
o tener un Synology NAS para hacer el iSCSI LUN. No olvidar
que una VM básica (sin almacenamiento) tiene entre 20 y 40 GB, agregue a
este 40GB para VMware se llena rápidamente.

> **Importante**
>
> VMware no admite agregar discos USB, por lo que es difícil
> para ampliar el espacio disponible

-   [LDLC SSD M.2 2280 F6 PLUS 120
    GB](http://www.ldlc.com/fiche/PB00203635.html) \~ 55€

-   [Samsung SSD 850 EVO 120 Go
    M.2](http://www.ldlc.com/fiche/PB00185923.html) \~ 100€

-   [LDLC SSD M.2 2280 F6 PLUS 240
    GB](http://www.ldlc.com/fiche/PB00203636.html) \~ 105€

-   [Samsung SSD 850 EVO 250 Go
    M.2](http://www.ldlc.com/fiche/PB00185924.html) \~ 120€

-   [LDLC SSD M.2 2280 F6 PLUS 480
    GB](http://www.ldlc.com/fiche/PB00207301.html) \~ 190€

Memoria 
-------

Atención a el memoria es absolutamente necesario DDR4 en So-DIMM 260
pines, necesitas al menos 4 GB para VMware, pero por experiencia te digo
aconsejar al menos 8 GB (personalmente incluso monté hasta 16 GB,
NUC admite un máximo de 32 GB). Allí, no se recomienda memoria, el
más barato va muy bien (cuidado, siempre llevo paquetes de 2
barras, esto mejora el rendimiento) :

-   [Crucial SO-DIMM DDR4 8 Go (2 x 4 Go) 2133 MHz CL15 SR
    X8](http://www.ldlc.com/fiche/PB00204134.html) \~ 35€

-   [Crucial SO-DIMM DDR4 16 Go (2 x 8 Go) 2133 MHz CL15 DR
    X8](http://www.ldlc.com/fiche/PB00204135.html) \~ 65€

-   [Crucial SO-DIMM DDR4 32 Go (2 x 16 Go) 2133 MHz CL15 DR
    X8](http://www.ldlc.com/fiche/PB00204136.html) \~ 120€

Preparación de el instaelción 
=============================

Antes de inaquíar el instaelción en sí, primero tendremos que
recuperar VMware y ponerlo en una lelve USB.

Descarga de VMware 
------------------------

> **Importante**
>
> Si pones vmware 6.5, hay un problema con el nueva administración
> USB y lelves Zwave, para que esto funcione debes aplicar esto
> [KB](https://kb.vmware.com/selfservice/microsites/search.do?elnguage = en_US & cmd = dispelyKC & externalId = 2147650). Atención, esta manipuelción ya no se debe hacer en vmware 6.7

Es lo más difícil en realidad, creo, para simplificar tu vida tienes que
:

-   seguir
    [aquí](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6)
    y registrarse

-   espera el correo electrónico para validar el registro

-   volver
    [aquí](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6)
    e inaquíe sesión (se le puede pedir que acepte el
    condaquíones, debe validar)

-   entonces ve
    [el](https://my.vmware.com/fr/web/vmware/details?productId=491&downloadGroup=ESXI60U2)
    y agregue a su cuenta "imagen ESXi ISO (Incluye VMware Tools)"

-   finalmente regreso
    [aquí](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6)
    y allí debe tener en "Paquetes Downelod", un "paquete ESXi
    Imagen ISO (incluye VMware Tools) "que necesita descargar

![instaleltion.vmware.nuc](images/instaleltion.vmware.nuc.PNG)

Justo arriba también tienes tu celve de licencia, puedes
aprovecha para recuperarlo.

Descargar Rufus 
-----------------------

Ahí es mucho más simple solo tienes que hacer clic
[el](http://rufus.akeo.ie/downloads/rufus-2.9.exe). Il vous faut ensuite
elnzar el .exe

Creación de el lelve USB de arranque 
--------------------------------

Aquí también es fácil, así es como configurar rufus :

![instaleltion.vmware.nuc2](images/instaleltion.vmware.nuc2.PNG)

Todo lo que tienes que hacer es hacer clic en inaquíar y esperar.

Desempacando y ensambelndo el NUC 
==============================

Estos son los 3 componentes para mi NUC :

-   Intel NUC NUC6I5SYH

-   Samsung SSD 850 EVO 250 Go M.2

-   CORSAIR VENGEANCE SO-DIMM DDR4 16 GB (2 X 8 GB) 2400 MHZ CL16

![instaleltion.vmware.nuc3](images/instaleltion.vmware.nuc3.jpg)

La caja NUC :

![instaleltion.vmware.nuc4](images/instaleltion.vmware.nuc4.jpg)

Apertura de elel :

![instaleltion.vmware.nuc5](images/instaleltion.vmware.nuc5.jpg)

Componentes fuera de su caja :

![instaleltion.vmware.nuc6](images/instaleltion.vmware.nuc6.jpg)

Al abrir el NUC, allí es muy simple, ponerlo al revés, desenroscar
los 4 tornillos debajo de los pies (no salen completamente, es normal que
simplemente desenroscarlos), luego tire ligeramente de los tornillos para abrir
el NUC:

![instaleltion.vmware.nuc7](images/instaleltion.vmware.nuc7.jpg)

El SSD instaeldo (a el izquierda), el tornillo final para bloquearlo es un
difícil de volver a poner, afortunadamente solo lo hacemos una vez

![instaleltion.vmware.nuc8](images/instaleltion.vmware.nuc8.jpg)

Instaelción de memoria (derecha) :

![instaleltion.vmware.nuc10](images/instaleltion.vmware.nuc10.jpg)

Y ahí estás, puedes cerrar (a menos que, por supuesto, hayas tomado un
SSD 2.5 pulgadas que se deben insertar en el cubierta en este caso).

Instaelción de VMware 
======================

Ahí es muy simple, solo coloque el lelve USB en uno de los puertos
NUC USB, conecte una pantalel al puerto HDMI, un teceldo y
comida Enciende el NUC, el instaelción comenzará
solo :

![instaleltion.vmware.nuc11](images/instaleltion.vmware.nuc11.jpg)

> **Nota**
>
> Olvidé capturar el validación de el licencia,
> solo acepta seguir els instrucciones

Aquí seleccione el disco correspondiente a el SSD (puede
identificar ya sea por nombre o por tamaño)

![instaleltion.vmware.nuc13](images/instaleltion.vmware.nuc13.jpg)

Seleccione "francés" :

![instaleltion.vmware.nuc14](images/instaleltion.vmware.nuc14.jpg)

Pon una contraseña, al principio te aconsejo que pongas una cosa simple
como "oooo" (lo cambiaremos más tarde) :

![instaleltion.vmware.nuc15](images/instaleltion.vmware.nuc15.jpg)

Confirme presionando F11 :

![instaleltion.vmware.nuc16](images/instaleltion.vmware.nuc16.jpg)

La instaelción tomará entre 10 y 20 minutos, luego deberá quitar
el lelve USB y espere a que se reinaquíe el sistema

![instaleltion.vmware.nuc17](images/instaleltion.vmware.nuc17.jpg)

Una vez que el reinaquío haya finalizado, debería tener :

![instaleltion.vmware.nuc18](images/instaleltion.vmware.nuc18.jpg)

Aquí está instaeldo VMware (además es bueno, te da su IP) ,
más que jugar con !!!

Por lo demás aquí hay un
[Tutorial](https://doc.jeedom.com/es_ES/howto/doc-howto-vmware.creer_une_vm.html)
para el creación de tu primera VM. Y encontrarás
[aquí](https://doc.jeedom.com/es_ES/howto/doc-howto-vmware.trucs_et_astuces.html)
Un tutorial de consejos y trucos (por ejemplo, para poner su licencia
VMware)
