# Vmware instalado en nuc

Aquí hay un tutorial para instalar VMware en un Intel NUC (gen6). Veremos más adelante cómo agregar Jeedom en él

# El material 

## Intel NUC

La Intel NUC es una PC pequeña, no la más potente, pero muy eficiente energéticamente y de tamaño pequeño. Esto lo convierte en un pequeño servidor de virtualización perfecto basado en VMware.

Actualmente hay 2 NUC de sexta generación (los otros también funcionan para VMware pero requieren controladores adicionales en el kernel de VMware):

-   Intel Core i3-6100U (doble núcleo 2.3 GHz - - 4 hilos - 3 MB de caché - TDP 15W)
-   Intel Core i5-6260U (doble núcleo 1.8 GHz-turbo 2.9 GHz - 4 hilos - 4 MB de caché)

El i5 es mucho más potente porque tiene un poco más de memoria caché y sobre todo un modo turbo que le permite subir mucho más de frecuencia.

A esto se le suma 2 tipos de caja :

-   Un estuche delgado que solo puede contener un disco tipo M2
-   Una caja más gruesa que puede contener un disco tipo M2 y un disco 2.5 pulgadas

Eso hace 4 referencias :

-   i3 M2 : [Intel NUC NUC6I3SYK](http://www.ldlc.com/fiche/PB00203086.html) \~ 320€
-   i3 M2+2.5 pulgadas : [Intel NUC NUC6I3SYH](http://www.ldlc.com/fiche/PB00203148.html) \~ 320€
-   i5 M2 : [Intel NUC NUC6I5SYK](http://www.ldlc.com/fiche/PB00203084.html) \~ 460€
-   i5 M2+2.5 pulgadas : [Intel NUC NUC6I5SYH](http://www.ldlc.com/fiche/PB00202760.html) \~ 430€

## SSD

Tienes que agregar un SSD y memoria a esto. Nivel SSD recomiendo 240GB o más, a menos que tomes el modelo con ranura 2.5 pulgadas (que te permite poner un disco duro extra) o tener un NAS tipo Synology para hacer iSCSI LUNs. No olvide que una VM básica (sin almacenamiento) tiene entre 20 y 40 GB, agregue a esos 40 GB para el propio VMware, se llena rápidamente.

> **Importante**
>
> VMware no admite la adición de un disco USB, por lo que es difícil ampliar el espacio disponible

-   [SSD LDLC M.2 2280 F6 PLUS 120 GB](http://www.ldlc.com/fiche/PB00203635.html) \~ 55€
-   [Samsung SSD 850 EVO 120GB M.2](http://www.ldlc.com/fiche/PB00185923.html) \~ 100€
-   [SSD LDLC M.2 2280 F6 PLUS 240 GB](http://www.ldlc.com/fiche/PB00203636.html) \~ 105€
-   [Samsung SSD 850 EVO 250GB M.2](http://www.ldlc.com/fiche/PB00185924.html) \~ 120€
-   [SSD LDLC M.2 2280 F6 PLUS 480 GB](http://www.ldlc.com/fiche/PB00207301.html) \~ 190€

## Memoria

Tenga cuidado con la memoria que necesita absolutamente DDR4 en So-DIMM 260 pines, necesita al menos 4 GB para VMware, pero por experiencia le aconsejo al menos 8 GB (personalmente, incluso subí a 16 GB, el NUC admite un máximo de 32 GB). Ahí, no hay memoria recomendada, la más barata está bien (ojo, yo siempre llevo packs de 2 barras, esto mejora el rendimiento)) :

-   [Crucial SO-DIMM DDR4 8GB (2 x 4GB) 2133MHz CL15 SR X8](http://www.ldlc.com/fiche/PB00204134.html) \~ 35€
-   [Crucial SO-DIMM DDR4 16GB (2 x 8GB) 2133MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204135.html) \~ 65€
-   [Crucial SO-DIMM DDR4 32GB (2 x 16GB) 2133MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204136.html) \~ 120€

# Preparación para la instalación

Antes de comenzar la instalación en sí, primero deberá recuperar VMware y ponerlo en una llave USB.

## Descargar VMware

> **Importante**
>
> Si pones vmware 6.5, hay un problema con la nueva gestión de llaves USB y Zwave, para que esto funcione debes aplicar esto [KB](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147650). Atención, esta manipulación ya no se debe realizar en vmware 6.7

De hecho, creo que es la parte más difícil, para simplificar tu vida tienes que :

-   continuar [aquí](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) y registrarse
-   espere el correo electrónico para validar el registro
-   dar la vuelta [aquí](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) y conectarte (puede pedirte que aceptes las condiciones, debes validar)
-   entonces vete [la](https://my.vmware.com/fr/web/vmware/details?productId=491&downloadGroup=ESXI60U2) y agregue a su cuenta "Imagen ISO de ESXi (Incluye VMware Tools)"
-   finalmente regreso [aquí](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) y ahí debes tener en "Downlaod Packages", un paquete "ESXi ISO image (Incluye VMware Tools)" que debes descargar

![installation.vmware.nuc](images/installation.vmware.nuc.PNG)

Justo encima también tienes tu clave de licencia, puedes aprovechar para recuperarla.

## Descargar rufo

Ahí es mucho más sencillo solo tienes que hacer click [la](http://rufus.akeo.ie/downloads/rufus-2.9.exe). A continuación, debe iniciar el .exe

## Creación de la llave USB de arranque

Nuevamente, es fácil, aquí se explica cómo configurar rufus :

![installation.vmware.nuc2](images/installation.vmware.nuc2.PNG)

Ahora todo lo que tiene que hacer es hacer clic en iniciar y esperar.

# Desembalaje y montaje de la NUC

Aquí están los 3 componentes para mi NUC :

-   Intel NUC NUC6I5SYH
-   Samsung SSD 850 EVO 250GB M.2
-   CORSAIR VENGANZA SO-DIMM DDR4 16GB (2 X 8GB) 2400MHZ CL16

![installation.vmware.nuc3](images/installation.vmware.nuc3.jpg)

La caja NUC :

![installation.vmware.nuc4](images/installation.vmware.nuc4.jpg)

Apertura de la misma :

![installation.vmware.nuc5](images/installation.vmware.nuc5.jpg)

Componentes fuera de su caja :

![installation.vmware.nuc6](images/installation.vmware.nuc6.jpg)

Abrir el NUC, es muy sencillo, ponerlo boca abajo, desatornillar los 4 tornillos debajo de los pies (no salen del todo, es normal, solo hay que desatornillarlos), luego tirar ligeramente de los tornillos para abrir el NUC:

![installation.vmware.nuc7](images/installation.vmware.nuc7.jpg)

El SSD instalado (a la izquierda), el tornillo al final para bloquearlo es un poco doloroso de volver a colocar, afortunadamente solo lo hacemos una vez

![installation.vmware.nuc8](images/installation.vmware.nuc8.jpg)

Instalación de memoria (derecha) :

![installation.vmware.nuc10](images/installation.vmware.nuc10.jpg)

Ahí lo tienes, puedes cerrar (a menos, por supuesto, que hayas tomado un SSD 2.5 pulgadas que se deben insertar en la tapa en este caso).

# Instalación de VMware

Es muy sencillo, basta con poner la llave USB en uno de los puertos USB del NUC, conectar una pantalla al puerto HDMI, un teclado y la fuente de alimentación. Enciende el NUC, la instalación comenzará por sí sola :

![installation.vmware.nuc11](images/installation.vmware.nuc11.jpg)

> **Nota**
>
> Olvidé tomar las capturas de la validación de la licencia, solo debes aceptar siguiendo las instrucciones

Aquí selecciona el disco correspondiente al SSD (puedes ubicarlo ya sea por el nombre o por el tamaño)

![installation.vmware.nuc13](images/installation.vmware.nuc13.jpg)

Seleccione "Francés" :

![installation.vmware.nuc14](images/installation.vmware.nuc14.jpg)

Pon una contraseña, al principio te aconsejo que pongas algo simple como "oooo" (la cambiaremos luego) :

![installation.vmware.nuc15](images/installation.vmware.nuc15.jpg)

Validar haciendo F11 :

![installation.vmware.nuc16](images/installation.vmware.nuc16.jpg)

La instalación tomará de 10 a 20 minutos, luego deberá quitar la llave USB y esperar a que el sistema se reinicie

![installation.vmware.nuc17](images/installation.vmware.nuc17.jpg)

Una vez que se complete el reinicio, debe tener :

![installation.vmware.nuc18](images/installation.vmware.nuc18.jpg)

Aquí está instalado VMware (además es bueno que te dé su IP), solo para jugar con !!!

Para la continuación aquí hay un [tutorial](https://doc.jeedom.com/es_ES/howto/doc-howto-vmware.creer_une_vm.html) para crear su primera máquina virtual. y encontrarás [aquí](https://doc.jeedom.com/es_ES/howto/doc-howto-vmware.trucs_et_astuces.html) un tutorial de consejos y trucos (por ejemplo, para poner su licencia de VMware)
