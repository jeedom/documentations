# Edisio ETS 200

**El módulo**

![ets200.module](images/ets200/ets200.module.jpg)

**El visual de Jeedom**

![ets200.vue defaut](images/ets200/ets200.vue-defaut.jpg)

## Resumen

Colocado en una habitación, la temperatura ambiente deseada aumentará automáticamente. Además, asociado a un receptor tipo EMR-2000 o EDR-B4 (4 salidas) tendrás un termostato conectado y controlable desde cualquier parte del mundo a través de internet.

La señal solo se envía después de detectar una diferencia de temperatura de 0.5 ° C o 1 ° C o cada 5 minutos. Además, el sensor es compacto y discreto.

El indicador LED integrado señala cualquier cambio de estado.

## Fonctions

-   Sensor de temperatura inalámbrico a batería
-   Ultra compacto
-   Señal transmitida instantáneamente cuando la temperatura sube o baja
-   Facilidad de uso e instalación
-   Montaje en pared con tornillos o doble cara
-   Información sobre el nivel de la batería

## Características técnicas

-   Tipo de módulo : Transmisor Edisio
-   Utilizar : Adentro
-   Comida : 3VDC (batería de litio ER14250)
-   Autonomía : Hasta 3 años
-   Frecuencia : 868,3 MHz
-   Temperatura de funcionamiento : 0 ° C + 45 ° C
-   Alcance en campo libre : 100M
-   Dimensiones : 25x79x19mm
-   Grado de protección : IP20

## Datos del módulo

-   Marca : Casa inteligente Edisio
-   Apellido : ETS-200

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, no olvide activar la opción en la configuración del complemento.

> **Propina**
>
> Se recomienda la colocación a una altura de 150 cm y cerca de la temperatura deseada del fieltro.

### Botón "E"

Encontrará debajo el botón "E" que es el botón de asociación del sensor de temperatura.

![ets200.bouton e](images/ets200/ets200.bouton-e.jpg)

### Configuración del delta de temperatura

De forma predeterminada, el delta de temperatura está programado a 1 ° C (+/- 10%) para optimizar la vida útil de la batería. Tienes la posibilidad de ajustar este parámetro:

![ets200.delta](images/ets200/ets200.delta.jpg)

## Asociación del sensor con Jeedom

La asociación del sensor de temperatura es un juego de niños. Simplemente presione el botón "E", ubicado debajo del sensor. Esto será reconocido automáticamente. Colócalo en un objeto, dale un nombre y guarda.

![ets200.association](images/ets200/ets200.association.jpg)

Una vez, su equipo asociado, debería obtener este :

![ets200.general](images/ets200/ets200.general.jpg)

### Commandes

Una vez creado su equipo, debe obtener los comandos asociados con el módulo :

![Pedidos](images/ets200/ets200.commandes.jpg)

Aquí está la lista de comandos :

-   Temperatura : Este es el comando que indica la temperatura medida
-   Tambores : Indica el estado de la batería

### Informations

Una vez que su equipo esté asociado con Jeedom, habrá diversa información disponible :

![Pedidos](images/ets200/ets200.informations.jpg)

-   Creación : Indica la fecha en la que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el micro-módulo
-   Tambores : Indica el estado de la batería de los módulos de batería
-   Estado : Devuelve el estado del módulo
