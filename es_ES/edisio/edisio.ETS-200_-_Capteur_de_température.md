# Edisio ETS 200

**El módulo**

![ets200.module](images/ets200/ets200.module.jpg)

**El visual de Jeedom**

![ets200.vue defaut](images/ets200/ets200.vue-defaut.jpg)

## Resumen

Colocado en una habitación, la temperatura ambiente deseada aumentará automáticamente. Además, asociado con un receptor tipo EMR-2000 o EDR-B4 (4 salidas) tendrá un termostato conectado y controlable desde cualquier parte del mundo a través de Internet.

La señal solo se envía después de detectar una diferencia de temperatura de 0.5 ° C o 1 ° C o cada 5 minutos. Además, el sensor es compacto y discreto.

El indicador LED integrado señala cualquier cambio de estado.

## Fonctions

-   Sensor inalámbrico de temperatura alimentado por batería
-   Ultra compacto
-   Señal transmitida instantáneamente cuando la temperatura sube o baja
-   Facilidad de uso e instalación
-   Montaje en pared por tornillos o doble cara
-   Información de nivel de batería

## Características técnicas

-   Tipo de módulo : Transmisor Edisio
-   Uso : En el interior
-   Suministro : 3VDC (batería de litio ER14250)
-   Autonomía : Hasta 3 años
-   Frecuencia : 868.3 MHz
-   Temperatura de funcionamiento : 0 ° C + 45 ° C
-   Rango en campo libre : 100M
-   Dimensiones : 25x79x19mm
-   Grado de protección : IP20

## Datos del módulo

-   Hacer : Edisio Smart Home
-   Nombre : ETS-200

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom, consulte este [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, no olvide activar la opción en la configuración del complemento.

> **Punta**
>
> Se recomienda su colocación a una altura de 150 cm y cerca de la temperatura deseada del fieltro.

### Botón "E""

Encontrará debajo del botón "E", que es el botón de asociación del sensor de temperatura.

![ets200.bouton e](images/ets200/ets200.bouton-e.jpg)

### Ajuste de la temperatura delta

Por defecto, la temperatura delta se programa a 1 ° C (+/- 10%) para optimizar la duración de la batería. Puedes ajustar este parámetro:

![ets200.delta](images/ets200/ets200.delta.jpg)

## Asociación del sensor con Jeedom

La combinación del sensor de temperatura es muy sencilla. Simplemente presione el botón "E", ubicado debajo del sensor. Esto será reconocido automáticamente. Colóquelo en un objeto, asígnele un nombre y guárdelo.

![ets200.association](images/ets200/ets200.association.jpg)

Una vez, su equipo asociado, debería obtener esto :

![ets200.general](images/ets200/ets200.general.jpg)

### Commandes

Una vez que se crea su equipo, debe obtener los comandos asociados con el módulo :

![Comandos](images/ets200/ets200.commandes.jpg)

Aquí está la lista de comandos :

-   Temperatura : Es el comando que indica la temperatura leída
-   Batería : Indica el estado de la batería

### Informations

Una vez que su equipo esté asociado con Jeedom, habrá diversa información disponible :

![Comandos](images/ets200/ets200.informations.jpg)

-   Creación : Indica la fecha en que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el micro-módulo
-   Batería : Indica el estado de la batería de los módulos de batería
-   Estado : Devuelve el estado del módulo
