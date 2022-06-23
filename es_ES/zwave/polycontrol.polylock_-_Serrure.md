# PolyLock

**El módulo**

![module](images/polycontrol.polylock/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/polycontrol.polylock/vuedefaut1.jpg)

## Resumen

Proteja su hogar con la cerradura electrónica Z-Wave de Poly-Control !

La cerradura de puerta electrónica Poly-Lock está diseñada para adaptarse a casi cualquier puerta del mundo. Se monta muy facilmente en 5 minutos, solo tienes que cambiar el cilindro de tu puerta.

Una vez emparejado con su controlador Z-Wave (como Vera Systems de VeraControl), puede tener un control completo de su cerradura desde cualquier computadora o teléfono inteligente, sin importar en qué parte del mundo se encuentre. También es posible utilizar la cerradura con el teclado inalámbrico Poly-Pad para abrir o bloquear la puerta.

Por lo tanto, es posible cerrar su casa de manera similar a cerrar su automóvil: con un control remoto, simplemente presione un botón y su casa estará segura. La cerradura Poly-Control también puede funcionar con otras escenas Z-Wave, donde las luces se encienden y el sistema de alarma se desactiva cuando se desbloquea a través de su control remoto.

El sistema Poly-Control se puede utilizar en un entorno doméstico o laboral. El Poly-Lock funciona con batería y ha sido probado para funcionar durante 1 año, sin reemplazo de batería.

## Fonctions

-   Controla tu puerta de entrada de forma remota
-   Se adapta a la mayoría de las puertas
-   Se puede integrar en escenas Z-Wave, por ejemplo, para un sistema de alarma
-   Adecuado para uso doméstico o comercial
-   Perilla para cierre manual
-   Fácil instalación

## Características técnicas

-   Alimento : Batería de cloruro de litio de 3,6 V
-   Frecuencia : 868.42Mhz
-   Alcance : hasta 100 m en exterior, hasta 30 m en interior
-   Dimensiones : 120 x 52 x 60 mm (largo x ancho x alto))
-   Peso : 370g

## Datos del módulo

-   Marca : Poly-Control
-   Apellido : Polylock
-   Identificación del fabricante : 270
-   Tipo Producto : 1
-   Identificación de producto : 1

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar el botón de inclusión una vez, de acuerdo con su documentación en papel.

![inclusion](images/polycontrol.polylock/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/polycontrol.polylock/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/polycontrol.polylock/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : este es el comando que reportará la última acción realizada (abrir/cerrar)
-   Abrir : este es el comando para abrir la cerradura
-   Cerca : este es el comando que cierra la cerradura
-   Batería : este es el comando de la bateria

### Configuración del módulo

> **Advertencia**
>
> Aunque este módulo funciona con pilas, utiliza la tecnología de Flirs. Esto significa que no tiene noción de despertar y despertar. Recuperará todos los cambios de configuración casi en tiempo real como un módulo de sector.

Si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/polycontrol.polylock/config1.jpg)

Detalles del parámetro :

-   0: le permite cambiar la dirección de rotación para los comandos de abrir/cerrar
-   1: le permite definir cuánto tiempo girará la cerradura para abrirse (0 a 15 s))
-   2: le permite definir cuánto tiempo girará la cerradura para cerrarse (0 a 15 s))
-   3: le permite establecer la velocidad de rotación de la cerradura (0 a 15, siendo 15 la más lenta)
-   4: permite elegir entre diferentes modos de funcionamiento (par, fuerza, potencia, etc.))

### Groupes

Este módulo tiene solo un grupo de asociación.

![Groupe](images/polycontrol.polylock/groupe.jpg)

## Ejemplos de uso

![exemple](images/polycontrol.polylock/exemple.jpg)

El activador es el comando de evento de un teclado zipato (puede ser cualquier otra cosa). Si el valor es 6 (casa) la puerta está bloqueada. De hecho, acabamos de regresar para que podamos cerrar la puerta. En caso contrario (necesariamente 5) abrimos la puerta con la llave y 2 minutos después la cerramos. Efectivamente, queremos salir, la puerta se abre y se cerrará poco después.

## Bueno saber

### Especificidades

> **Consejo**
>
> Aunque este módulo funciona con pilas, utiliza la tecnología de Flirs. Esto significa que no tiene noción de despertar y despertar. Recuperará todos los cambios de configuración casi en tiempo real como un módulo de sector.

> **Consejo**
>
> Este módulo no vuelve a su estado, si activas el bloqueo a mano el estado seguirá siendo el mismo.

## Despierta

No hay noción de despertar para este módulo.
