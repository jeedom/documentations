# Edisio EOS 200

**El módulo**

![eos200.module](images/eos200/eos200.module.jpg)

**El visual de Jeedom**

![eos200.vue defaut](images/eos200/eos200.vue-defaut.jpg)

## Resumen

Colocado en una puerta, ventana, puerta de garaje, cajón, todas las aberturas, este sensor compacto y discreto le permitirá conocer el estado de apertura o cierre de este último.

Dependiendo del estado, el sensor controla el encendido o apagado de sus luces, el cierre o la apertura de las persianas, o incluso la activación de una alarma a través de un escenario.

La señal solo se envía cuando el sensor está separado de su elemento magnético. El indicador LED integrado señala cualquier cambio de estado. Nivel de batería bajo señalado por 3 "pitidos" audibles en el receptor

## Fonctions

-   Sensor magnético inalámbrico alimentado por baterías
-   Detecta aperturas / cierres
-   Ultra compacto
-   Instalación fácil y gratuita
-   Señal transmitida instantáneamente durante la apertura / cierre
-   Autoprotección contra el levantamiento
-   Información de nivel de batería
-   Montaje en pared con tornillos o cinta de doble cara

## Características técnicas

-   Tipo de módulo : Transmisor Edisio
-   Suministro : 3VDC (batería de litio ER14250)
-   Frecuencia : 868.3 MHz
-   Temperatura de funcionamiento : 0 ° C + 45 ° C
-   Rango en campo libre : 100M
-   Dimensiones : 25x79x19mm
-   Grado de protección : IP20
-   Uso : En el interior

## Datos del módulo

-   Hacer : Edisio Smart Home
-   Nombre : EOS-200

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom, consulte este [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, no olvide activar la opción en la configuración del complemento.

### Botón "E""

Encontrará debajo del botón "E", que es el botón de asociación del sensor de temperatura.

![eos200.bouton e](images/eos200/eos200.bouton-e.jpg)

### Configuration

Por defecto, el sensor está configurado en NO (normalmente abierto)

![eos200.nf no](images/eos200/eos200.nf-no.jpg)

> **Nota**
>
> Por lo tanto, tendrá que configurar su sensor, si desea tener un widget con una puerta cerrada cuando está.

![eos200.mode](images/eos200/eos200.mode.jpg)

## Asociación del sensor con Jeedom

Emparejar el sensor de movimiento es fácil. Simplemente presione el botón "E", ubicado debajo del sensor. Esto será reconocido automáticamente por Jeedom. Solo ve al plugin Edisio. Podrá colocarlo en un objeto, asignarle un nombre y guardar.

Una vez que su equipo está emparejado, debe obtener esto :

![eos200.general](images/eos200/eos200.general.jpg)

> **Punta**
>
> Para que el widget esté presente en el tablero, recuerde colocar su equipo en un objeto.

### Comandos 

Una vez que se crea su equipo, debe obtener los comandos asociados con el módulo :

![Comandos](images/eos200/eos200.commandes.jpg)

Aquí está la lista de comandos :

-   Puerta : Es el comando que indica si la puerta está abierta o cerrada
-   Batería : Indica el estado de la batería

### Informations

Una vez que su equipo esté asociado con Jeedom, habrá diversa información disponible :

![Comandos](images/eos200/eos200.informations.jpg)

-   Creación : Indica la fecha en que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el módulo
-   Batería : Indica el estado de la batería de los módulos de batería
-   Estado : Devuelve el estado del módulo

## Visual alternativo

![eos200.vue alternative](images/eos200/eos200.vue-alternative.jpg)
