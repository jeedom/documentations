# He instalado VMware en un NUC

Aquí tienes un tutorial para instalar VMware en un Intel NUC (gen6). A continuación, veremos cómo añadir Jeedom en él.

# El equipo

## Intel NUC

El Intel NUC es un pequeño ordenador, no es el más potente, pero consume muy poca energía y tiene unas dimensiones reducidas. Esto lo convierte en un pequeño servidor de virtualización perfecto basado en VMware.

Actualmente hay dos NUC de sexta generación (los demás también funcionan con VMware, pero es necesario instalar controladores adicionales en el núcleo de VMware):

-   Intel Core i3-6100U (doble núcleo a 2,3 GHz, 4 hilos, 3 MB de caché, TDP de 15 W)
-   Intel Core i5-6260U (doble núcleo a 1,8 GHz - Turbo a 2,9 GHz - 4 hilos - caché de 4 MB)

El i5 es claramente más potente, ya que tiene un poco más de memoria caché y, sobre todo, un modo turbo que le permite alcanzar frecuencias mucho más altas.

A esto hay que añadir dos tipos de cajas:

-   Una carcasa delgada en la que solo cabe un disco de tipo M2
-   Una carcasa más gruesa con capacidad para un disco de tipo M.2 y un disco de 2,5 pulgadas

Así pues, son cuatro referencias:

-   i3 M2: [Intel NUC NUC6I3SYK](http://www.ldlc.com/fiche/PB00203086.html) \~ 320€
-   i3 M2 + 2,5 pulgadas: [Intel NUC NUC6I3SYH](http://www.ldlc.com/fiche/PB00203148.html) \~ 320€
-   i5 M2: [Intel NUC NUC6I5SYK](http://www.ldlc.com/fiche/PB00203084.html) \~ 460€
-   i5 M2 + 2,5 pulgadas: [Intel NUC NUC6I5SYH](http://www.ldlc.com/fiche/PB00202760.html) \~ 430€

## SSD

A esto hay que añadir un SSD y memoria. En cuanto al SSD, te recomiendo 240 GB o más, a menos que elijas el modelo con una ranura de 2,5 pulgadas (que te permite añadir un disco duro adicional) o que tengas un NAS tipo Synology para crear un LUN iSCSI. No hay que olvidar que una máquina virtual básica (sin almacenamiento) ocupa entre 20 y 40 GB; si a eso le sumas 40 GB para el propio VMware, el espacio se llena rápidamente.

> **Importante**
>
> VMware no admite la incorporación de discos USB, por lo que resulta difícil ampliar el espacio disponible

-   [SSD LDLC M.2 2280 F6 PLUS de 120 GB](http://www.ldlc.com/fiche/PB00203635.html) \~ 55€
-   [SSD Samsung 850 EVO de 120 GB M.2](http://www.ldlc.com/fiche/PB00185923.html) \~ 100€
-   [SSD LDLC M.2 2280 F6 PLUS de 240 GB](http://www.ldlc.com/fiche/PB00203636.html) \~ 105€
-   [SSD Samsung 850 EVO de 250 GB M.2](http://www.ldlc.com/fiche/PB00185924.html) \~ 120€
-   [SSD LDLC M.2 2280 F6 PLUS de 480 GB](http://www.ldlc.com/fiche/PB00207301.html) \~ 190€

## Memoria

Atención: en cuanto a la memoria, es imprescindible que sea DDR4 en formato So-DIMM de 260 pines; se necesitan como mínimo 4 GB para VMware, pero por experiencia te recomiendo al menos 8 GB (yo, personalmente, incluso he llegado hasta los 16 GB; el NUC admite un máximo de 32 GB). En este caso, no hay ninguna memoria recomendada, la más barata funciona muy bien (atención: yo siempre compro paquetes de 2 módulos, ya que mejora el rendimiento):

-   [Crucial SO-DIMM DDR4 de 8 GB (2 x 4 GB) a 2133 MHz, CL15, SR X8](http://www.ldlc.com/fiche/PB00204134.html) \~ 35€
-   [Crucial SO-DIMM DDR4 16 GB (2 x 8 GB) 2133 MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204135.html) \~ 65€
-   [Crucial SO-DIMM DDR4 32 GB (2 x 16 GB) 2133 MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204136.html) \~ 120€

# Preparación de la instalación

Antes de comenzar con la instalación propiamente dicha, primero habrá que descargar VMware y copiarlo en una memoria USB.

## Descarga de VMware

> **Importante**
>
> Si instalas VMware 6.5, hay un problema con la nueva gestión del USB y los dispositivos Z-Wave; para que funcione, hay que aplicar esto [KB](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147650). Atención: este procedimiento ya no debe realizarse en VMware 6.7

De hecho, creo que eso es lo más difícil; para haceros la vida más fácil, hay que:

-   ir a [aquí](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) y registrarse
-   espera el correo electrónico para confirmar correctamente el registro
-   volver [aquí](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) e inicia sesión (es posible que te pida que aceptes las condiciones; debes confirmarlo)
-   luego ir [allí](https://my.vmware.com/fr/web/vmware/details?productId=491&downloadGroup=ESXI60U2) y añade a tu cuenta «Imagen ISO de ESXi (incluye VMware Tools)»
-   por fin volver [aquí](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) y ahí, en «Descargar paquetes», deberías encontrar un paquete llamado «Imagen ISO de ESXi (incluye VMware Tools)» que tienes que descargar

![instalación.vmware.nuc](../images/installation.vmware.nuc.PNG)

Justo encima también tienes tu clave de licencia; puedes aprovechar para recuperarla.

## Descarga de Rufus

Aquí es mucho más sencillo, solo tienes que hacer clic [la](http://rufus.akeo.ie/downloads/rufus-2.9.exe). A continuación, debes ejecutar el archivo .exe

## Creación de una memoria USB de arranque

Esto también es fácil; a continuación te explicamos cómo configurar Rufus:

![instalación.vmware.nuc2](../images/installation.vmware.nuc2.PNG)

Ahora solo tienes que hacer clic en «Iniciar» y esperar.

# Desembalaje y montaje del NUC

Estos son los tres componentes de mi NUC:

-   Intel NUC NUC6I5SYH
-   SSD Samsung 850 EVO de 250 GB M.2
-   CORSAIR VENGEANCE SO-DIMM DDR4 16 GB (2 x 8 GB) 2400 MHz CL16

![instalación.vmware.nuc3](../images/installation.vmware.nuc3.jpg)

La caja del NUC:

![installation.vmware.nuc4](../images/installation.vmware.nuc4.jpg)

Cómo activarla:

![instalación.vmware.nuc5](../images/installation.vmware.nuc5.jpg)

Los componentes sacados de su caja:

![installation.vmware.nuc6](../images/installation.vmware.nuc6.jpg)

Para abrir el NUC, es muy sencillo: dale la vuelta, desenrosca los cuatro tornillos que hay debajo de las patas (no salen del todo, es normal; solo hay que desenroscarlos) y, a continuación, tira ligeramente de los tornillos para abrir el NUC:

![installation.vmware.nuc7](../images/installation.vmware.nuc7.jpg)

Una vez instalado el SSD (a la izquierda), resulta un poco complicado volver a colocar el tornillo del extremo para fijarlo; por suerte, solo hay que hacerlo una vez.

![instalación.vmware.nuc8](../images/installation.vmware.nuc8.jpg)

Instalación de la memoria (a la derecha):

![installation.vmware.nuc10](../images/installation.vmware.nuc10.jpg)

Y ya está, ya puedes cerrar la tapa (a menos, claro está, que hayas elegido un SSD de 2,5 pulgadas, en cuyo caso tendrás que insertarlo en la tapa).

# Instalación de VMware

Es muy sencillo: basta con conectar la memoria USB a uno de los puertos USB del NUC, conectar una pantalla al puerto HDMI, un teclado y la fuente de alimentación. Enciende el NUC y la instalación se iniciará automáticamente:

![instalación.vmware.nuc11](../images/installation.vmware.nuc11.jpg)

> **Nota**
>
> Se me ha olvidado hacer las capturas de pantalla de la validación de la licencia; solo hay que aceptar las condiciones siguiendo las instrucciones.

Aquí, selecciona bien el disco que corresponde al SSD (puedes identificarlo por el nombre o por el tamaño)

![installation.vmware.nuc13](../images/installation.vmware.nuc13.jpg)

Selecciona «Francés»:

![installation.vmware.nuc14](../images/installation.vmware.nuc14.jpg)

Establece una contraseña; al principio te aconsejo que pongas algo sencillo como «oooo» (ya la cambiaremos más adelante):

![installation.vmware.nuc15](../images/installation.vmware.nuc15.jpg)

Confirma pulsando F11:

![installation.vmware.nuc16](../images/installation.vmware.nuc16.jpg)

La instalación tardará entre 10 y 20 minutos; a continuación, deberá retirar la memoria USB y esperar a que el sistema se reinicie.

![instalación.vmware.nuc17](../images/installation.vmware.nuc17.jpg)

Una vez finalizado el reinicio, deberías tener:

![installation.vmware.nuc18](../images/installation.vmware.nuc18.jpg)

Ya está instalado VMware (además, es muy práctico, te muestra su dirección IP), ¡¡¡ahora solo queda probarlo!!!

A continuación, aquí tienes un [tutorial](vmware.creer_une_vm) para crear tu primera máquina virtual. Y encontrarás [aquí](vmware.trucs_et_astuces) un tutorial con consejos y trucos (por ejemplo, para instalar tu licencia de VMware)
