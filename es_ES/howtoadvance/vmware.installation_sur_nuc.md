# Vmware instalado en nuc

Aquí hay un tutorial para instalar VMware en un Intel NUC (gen6). Más adelante veremos cómo agregar Jeedom en él

# El material 

## Intel NUC

Intel NUC es una PC pequeña, no la más potente, pero muy eficiente y pequeña. Esto lo convierte en un pequeño servidor de virtualización perfecto basado en VMware.

Actualmente hay 2 NUC de 6ta generación (los otros también funcionan para VMware pero requieren controladores adicionales en el kernel de VMware):

-   Intel Core i3-6100U (Dual-Core 2.3 GHz - - 4 hilos - Caché 3 MB - TDP 15W)
-   Intel Core i5-6260U (Dual-Core 1.8 GHz - Turbo 2.9 GHz - 4 hilos - Caché 4 MB)

El i5 es significativamente más potente porque tiene un poco más de memoria caché y, sobre todo, un modo turbo que le permite aumentar su frecuencia mucho más.

Además, hay 2 tipos de casos :

-   Una carcasa delgada que solo puede contener un disco tipo M2
-   Un estuche más grueso que puede contener un disco tipo M2 y un disco 2.5 pulgadas

Eso hace 4 referencias :

-   i3 M2 : [Intel NUC NUC6I3SYK](http://www.ldlc.com/fiche/PB00203086.html) 320 €
-   i3 M2 + 2.5 pulgadas : [Intel NUC NUC6I3SYH](http://www.ldlc.com/fiche/PB00203148.html) 320 €
-   i5 M2 : [Intel NUC NUC6I5SYK](http://www.ldlc.com/fiche/PB00203084.html) € 460
-   i5 M2 + 2.5 pulgadas : [Intel NUC NUC6I5SYH](http://www.ldlc.com/fiche/PB00202760.html) 430 €

## SSD

Tienes que agregar un SSD y memoria. Nivel de SSD Recomiendo 240 GB o más, a menos que tome el modelo con una ranura 2.5 pulgadas (que le permite colocar un disco duro adicional) o tener un Synology NAS para hacer el iSCSI LUN. No olvide que una VM básica (sin almacenamiento) tiene entre 20 y 40 GB, agregue a esa 40 GB para el VMware en sí mismo que se llena rápidamente.

> **Importante**
>
> VMware no admite agregar discos USB, por lo que es difícil expandir el espacio disponible

-   [LDLC SSD M.2 2280 F6 PLUS 120 GB](http://www.ldlc.com/fiche/PB00203635.html) 55 €
-   [Samsung SSD 850 EVO 120 GB M.2](http://www.ldlc.com/fiche/PB00185923.html) 100 €
-   [LDLC SSD M.2 2280 F6 PLUS 240 GB](http://www.ldlc.com/fiche/PB00203636.html) 105 €
-   [Samsung SSD 850 EVO 250 Go M.2](http://www.ldlc.com/fiche/PB00185924.html) 120 €
-   [LDLC SSD M.2 2280 F6 PLUS 480 GB](http://www.ldlc.com/fiche/PB00207301.html) 190 €

## Memoria

Atención a la memoria es absolutamente necesario DDR4 en So-DIMM 260 pines, es necesario al menos 4 GB para VMware, pero por experiencia le aconsejo al menos 8 GB (personalmente incluso estoy montado hasta 16 GB, el NUC admite como máximo 32GB). Allí, no se recomienda memoria, el más barato va muy bien (tenga cuidado, siempre tomo paquetes de 2 barras, esto mejora el rendimiento) :

-   [Crucial SO-DIMM DDR4 8 GB (2 x 4 GB) 2133 MHz CL15 SR X8](http://www.ldlc.com/fiche/PB00204134.html) € 35
-   [Crucial SO-DIMM DDR4 16 GB (2 x 8 GB) 2133 MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204135.html) 65 €
-   [Crucial SO-DIMM DDR4 32 GB (2 x 16 GB) 2133 MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204136.html) 120 €

# Preparación de la instalación

Antes de iniciar la instalación, primero tendremos que recuperar VMware y ponerlo en una llave USB.

## Descarga de VMware

> **Importante**
>
> Si pones vmware 6.5, hay un problema con la nueva administración de USB y las teclas Zwave, para que esto funcione es necesario aplicar esto [KB](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147650). Atención, esta manipulación ya no se debe hacer en vmware 6.7

Es lo más difícil en realidad, creo, para simplificar tu vida tienes que :

-   seguir [aquí](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) y registrarse
-   espera el correo electrónico para validar el registro
-   volver [aquí](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) e inicie sesión (se le puede pedir que acepte las condiciones, debe validar)
-   entonces ve [el](https://my.vmware.com/fr/web/vmware/details?productId=491&downloadGroup=ESXI60U2) y agregue a su cuenta "ESXi ISO image (incluye VMware Tools)"
-   finalmente regreso [aquí](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) y allí debe tener en "Downlaod Packages", un paquete "ESXi ISO image (incluye VMware Tools)" que debe descargar

![installation.vmware.nuc](images/installation.vmware.nuc.PNG)

Justo arriba también tiene su clave de licencia, puede aprovecharla para recuperarla.

## Descargar Rufus

Ahí es mucho más simple solo tienes que hacer clic [el](http://rufus.akeo.ie/downloads/rufus-2.9.exe). Entonces necesitas iniciar el .exe

## Creación de la llave USB de arranque

Aquí también es fácil, así es como configurar rufus :

![installation.vmware.nuc2](images/installation.vmware.nuc2.PNG)

Todo lo que tienes que hacer es hacer clic en iniciar y esperar.

# Desempacando y ensamblando el NUC

Estos son los 3 componentes para mi NUC :

-   Intel NUC NUC6I5SYH
-   Samsung SSD 850 EVO 250 Go M.2
-   CORSAIR VENGEANCE SO-DIMM DDR4 16 GB (2 X 8 GB) 2400 MHZ CL16

![installation.vmware.nuc3](images/installation.vmware.nuc3.jpg)

La caja NUC :

![installation.vmware.nuc4](images/installation.vmware.nuc4.jpg)

Apertura de ella :

![installation.vmware.nuc5](images/installation.vmware.nuc5.jpg)

Componentes fuera de su caja :

![installation.vmware.nuc6](images/installation.vmware.nuc6.jpg)

Abriendo el NUC, allí es muy simple, póngalo boca abajo, desenrosque los 4 tornillos debajo de los pies (no salen completamente, es normal, solo tiene que desenroscarlos), luego tire ligeramente de los tornillos para abrir el NUC:

![installation.vmware.nuc7](images/installation.vmware.nuc7.jpg)

El SSD instalado (a la izquierda), el tornillo final para bloquearlo es un poco doloroso de volver a colocar, afortunadamente solo hacemos esto una vez

![installation.vmware.nuc8](images/installation.vmware.nuc8.jpg)

Instalación de memoria (derecha) :

![installation.vmware.nuc10](images/installation.vmware.nuc10.jpg)

Y ahora, puede cerrar (a menos que, por supuesto, haya tomado un SSD 2.5 pulgadas que se deben insertar en la cubierta en este caso).

# Instalación de VMware

Ahí es muy simple, simplemente coloque la llave USB en uno de los puertos USB del NUC, conecte una pantalla al puerto HDMI, un teclado y la fuente de alimentación. Enciende el NUC, la instalación se iniciará :

![installation.vmware.nuc11](images/installation.vmware.nuc11.jpg)

> **Nota**
>
> Olvidé capturar la validación de la licencia, solo tienes que aceptar siguiendo las instrucciones

Aquí seleccione el disco correspondiente a la SSD (puede ubicarlo por nombre o por tamaño)

![installation.vmware.nuc13](images/installation.vmware.nuc13.jpg)

Seleccione "francés" :

![installation.vmware.nuc14](images/installation.vmware.nuc14.jpg)

Pon una contraseña, al principio te aconsejo que pongas una cosa simple como "oooo" (la cambiaremos más tarde) :

![installation.vmware.nuc15](images/installation.vmware.nuc15.jpg)

Confirme presionando F11 :

![installation.vmware.nuc16](images/installation.vmware.nuc16.jpg)

La instalación tomará entre 10 y 20 minutos, luego deberá quitar la llave USB y esperar a que el sistema se reinicie

![installation.vmware.nuc17](images/installation.vmware.nuc17.jpg)

Una vez que el reinicio haya finalizado, debería tener :

![installation.vmware.nuc18](images/installation.vmware.nuc18.jpg)

Aquí está instalado VMware (además es bueno, te da su IP), más que jugar con !!!

Por lo demás aquí hay un [Tutorial](https://doc.jeedom.com/es_ES/howto/doc-howto-vmware.creer_une_vm.html) para la creación de tu primera VM. Y encontrarás [aquí](https://doc.jeedom.com/es_ES/howto/doc-howto-vmware.trucs_et_astuces.html) un tutorial de consejos y trucos (por ejemplo, para actualizar su licencia de VMware)
