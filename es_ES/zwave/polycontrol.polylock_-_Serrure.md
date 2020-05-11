PolyLock 
========

\

-   **El módulo**

\

![module](images/polycontrol.polylock/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/polycontrol.polylock/vuedefaut1.jpg)

\

Resumen 
------

 

Asegure su hogar con la cerradura electrónica Z-Wave de
Poly-Control !

La cerradura electrónica Poly-Lock está diseñada para adaptarse a casi
todas las puertas del mundo. Se monta muy fácilmente en 5
minutos, solo tienes que cambiar el cilindro de tu puerta.

Una vez emparejado con su controlador Z-Wave (como los sistemas de Vera
VeraControl), puede tener un control completo de su cerradura
desde cualquier computadora o teléfono inteligente, sin importar dónde se encuentre
estar en el mundo. También es posible usar la cerradura
con el teclado inalámbrico Poly-Pad para abrir o bloquear la puerta.

Por lo tanto, es posible bloquear su casa de manera similar
para bloquear su automóvil - con un control remoto, presionando
solo un botón y tu casa está segura. La cerradura
Poly-Control también puede funcionar con otras escenas de Z-Wave, donde
las luces se encienden y el sistema de alarma se desactiva cuando
desbloqueado a través de su control remoto.

El sistema Poly-Control se puede utilizar en un entorno
doméstica o laboral. El Poly-Lock funciona con
batería, y ha sido probado para funcionar durante 1 año, sin
reemplazo de la batería.

\

Funciones 
---------

\

-   Controla tu puerta de entrada de forma remota

-   Se adapta a la mayoría de las puertas

-   Se puede integrar en escenas Z-Wave, por ejemplo, para un sistema
    alarma

-   Adecuado para uso doméstico o comercial

-   Rueda para cierre manual

-   Instalación fácil

\

Características técnicas 
---------------------------

\

-   Suministro : Batería de cloruro de litio de 3.6V

-   Frecuencia : 868.42 Mhz

-   Alcance : hasta 100 m en exteriores, hasta 30 m en
    edificios

-   Dimensiones : 120 x 52 x 60 mm (largo x ancho x alto)

-   Peso : 370g

\

Datos del módulo 
-----------------

\

-   Hacer : Poly-Control

-   Nombre : PolyLock

-   ID del fabricante : 270

-   Tipo de producto : 1

-   ID del producto : 1

\

Configuración 
-------------

\

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[Documentación](https://jeedom.fr/doc/Documentación/plugins/openzwave/es_ES/openzwave.html).

\

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón 1 vez
> botón de inclusión, de acuerdo con su documentación en papel.

\

![inclusion](images/polycontrol.polylock/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/polycontrol.polylock/information.jpg)

\

### Comandos 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponible.

\

![Comandos](images/polycontrol.polylock/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Estado : es el comando que subirá la última acción
    ejecutado (abrir / cerrar)

-   Abrir : es el comando que abre la cerradura

-   Cerca : es el comando que hace posible cerrar la cerradura

-   Batería : es el comando de la batería

\

### Configuracion del modulo 

\

> **Advertencia**
>
> Aunque este módulo funciona con batería, utiliza la tecnología Flirs.
> Esto significa que no tiene el concepto de despertar y despertar. Él
> recuperará cualquier cambio de configuración en tiempo casi real
> como módulo sectorial.

\

Si desea configurar el módulo de acuerdo a su
instalación, debe pasar por el botón "Configuración" del
Complemento Jeedom OpenZwave.

\

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

\

Llegará a esta página (después de hacer clic en la pestaña
configuraciones)

\

![Config1](images/polycontrol.polylock/config1.jpg)

\

Detalles del parámetro :

\

-   0: permite cambiar la dirección de rotación de los comandos
    abrir / cerrar

-   1: le permite definir cuánto tiempo girará la cerradura
    abierto (0 a 15 s)

-   2: le permite definir cuánto tiempo girará la cerradura
    cerrar (0 a 15 s)

-   3: Se utiliza para definir la velocidad de rotación de la cerradura (0 a 15,
    15 siendo el más lento)

-   4: le permite elegir entre diferentes modos de operación
    (par, fuerza, potencia, etc.)

\

### Grupos 

\

Este módulo tiene solo un grupo de asociación.

\

![Groupe](images/polycontrol.polylock/groupe.jpg)

\

Ejemplos de uso 
----------------------

\

![exemple](images/polycontrol.polylock/exemple.jpg)

\

El disparador es el comando de evento de un teclado zipato
(puede ser cualquier otra cosa). Si el valor es 6 (inicio) en
cierra la puerta. Acabamos de regresar para poder cerrar
la puerta de la llave. De lo contrario (necesariamente 5) la puerta se abre con una llave y 2 minutos
después de cerrarlo. De hecho, queremos salir, la puerta se abre y
se cerrará poco después.

\

Bueno saber 
------------

\

### Específicos 

\

> **Punta**
>
> Aunque este módulo funciona con batería, utiliza la tecnología Flirs.
> Esto significa que no tiene el concepto de despertar y despertar. Él
> recuperará cualquier cambio de configuración en tiempo casi real
> como módulo sectorial.

\

> **Punta**
>
> Este módulo no devuelve su estado, si opera el bloqueo en el
> mano el estado seguirá siendo el mismo. \

### Visual alternativo 

\

![vuewidget](images/polycontrol.polylock/vuewidget.jpg)

\

Despertar 
-------

\

No hay concepto de despertar para este módulo.

\

Faq. 
------

\

No hay concepto de despertar en este módulo, lea el párrafo específico.

\

**@sarakha63**
