# Edisio EOS 200

**El módulo**

![eos200.module](images/eos200/eos200.module.jpg)

**El visual de Jeedom**

![eos200.vue defaut](images/eos200/eos200.vue-defaut.jpg)

## Resumen

Colocado en una puerta, ventana, puerta de garaje, cajón, toda apertura, este sensor compacto y discreto te permitirá conocer el estado de apertura o cierre de este último.

Dependiendo del estado, el sensor controla el encendido o apagado de las luces, el cierre o apertura de las persianas, o incluso la activación de una alarma a través de un escenario.

La señal solo se envía cuando el sensor está separado de su elemento magnético. El indicador LED integrado señala todos los cambios de estado. Nivel de batería bajo indicado por 3 "pitidos" audibles en el receptor

## Fonctions

-   Sensor magnético inalámbrico a batería
-   Detecta aperturas / cierres
-   Ultra compacto
-   Instalación fácil y gratuita
-   Señal transmitida instantáneamente al abrir / cerrar
-   Autoprotección al tirar
-   Información sobre el nivel de la batería
-   Montaje mural mediante tornillos o cinta adhesiva de doble cara

## Características técnicas

-   Tipo de módulo : Transmisor Edisio
-   Comida : 3VDC (batería de litio ER14250)
-   Frecuencia : 868,3 MHz
-   Temperatura de funcionamiento : 0 ° C + 45 ° C
-   Alcance en campo libre : 100M
-   Dimensiones : 25x79x19mm
-   Grado de protección : IP20
-   Utilizar : Adentro

## Datos del módulo

-   Marca : Casa inteligente Edisio
-   Apellido : EOS-200

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, no olvide activar la opción en la configuración del complemento.

### Botón "E"

Encontrará debajo el botón "E" que es el botón de asociación del sensor de temperatura.

![eos200.bouton e](images/eos200/eos200.bouton-e.jpg)

### Configuration

Por defecto, el sensor está configurado como NO (normalmente abierto)

![eos200.nf no](images/eos200/eos200.nf-no.jpg)

> **Nota**
>
> Por lo tanto, deberá configurar su sensor, si desea tener un widget con una puerta cerrada cuando esté.

![eos200.mode](images/eos200/eos200.mode.jpg)

## Asociación del sensor con Jeedom

Emparejar el sensor de movimiento es muy fácil. Simplemente presione el botón "E", ubicado debajo del sensor. Esto será reconocido automáticamente por Jeedom. Solo tienes que ir al plugin de Edisio. Luego puede colocarlo en un objeto, darle un nombre y guardar.

Una vez que haya emparejado su equipo, debería obtener esto :

![eos200.general](images/eos200/eos200.general.jpg)

> **Propina**
>
> Para que el widget esté presente en el tablero, recuerde colocar su equipo en un objeto.

### Pedidos 

Una vez creado su equipo, debe obtener los comandos asociados con el módulo :

![Pedidos](images/eos200/eos200.commandes.jpg)

Aquí está la lista de comandos :

-   Puerta : Este es el comando que indica si la puerta está abierta o cerrada
-   Tambores : Indica el estado de la batería

### Informations

Una vez que su equipo esté asociado con Jeedom, habrá diversa información disponible :

![Pedidos](images/eos200/eos200.informations.jpg)

-   Creación : Indica la fecha en la que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el módulo
-   Tambores : Indica el estado de la batería de los módulos de batería
-   Estado : Devuelve el estado del módulo

## Visual alternativo

![eos200.vue alternative](images/eos200/eos200.vue-alternative.jpg)
