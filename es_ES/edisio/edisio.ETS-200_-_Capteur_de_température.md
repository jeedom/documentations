# Edisio ETS 200

**El módulo**

![ets200.module](images/ets200/ets200.module.jpg)

**La imagen de Jeedom**

![ets200.vue defaut](images/ets200/ets200.vue-defaut.jpg)

## Resumen

Colocado en una habitación, la temperatura ambiente deseada aumentará automáticamente. Además, asociado a un receptor tipo EMR-2000 o EDR-B4 (4 salidas) tendrás un termostato conectado y controlable desde cualquier parte del mundo a través de internet.

La señal solo se envía después de detectar una diferencia de temperatura de 0,5 °C o 1 °C o cada 5 minutos. Además, el sensor es compacto y discreto.

El indicador LED integrado señala cualquier cambio de estado.

## Fonctions

-   Sensor de temperatura inalámbrico alimentado por batería
-   Ultra compacto
-   Señal transmitida instantáneamente durante un aumento o disminución de la temperatura
-   Facilidad de uso e instalación
-   Montaje en pared mediante tornillos o doble cara
-   Información del nivel de la batería

## Características técnicas

-   Tipo de mod : Transmisor Edisio
-   Usar : Adentro
-   Alimento : 3VDC (batería de litio ER14250)
-   Autonomía : Hasta 3 años
-   Frecuencia : 868,3 MHz
-   Temperatura de funcionamiento : 0°C +45°C
-   Alcance en campo abierto : 100M
-   Dimensiones : 25x79x19mm
-   Grado de protección : IP20

## Datos del módulo

-   Marca : Hogar inteligente Edisio
-   Apellido : ETS-200

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, no olvide activar la opción en la configuración del complemento.

> **Consejo**
>
> Se recomienda su colocación a una altura de 150 cm y cercana a la temperatura deseada del fieltro.

### Botón "E""

A continuación encontrará el botón "E" que es el botón de asociación del sensor de temperatura.

![ets200.bouton e](images/ets200/ets200.bouton-e.jpg)

### Ajuste del delta de temperatura

De forma predeterminada, el delta de temperatura está programado en 1 °C (+/-10 %) para optimizar la duración de la batería. Tienes la posibilidad de ajustar este parámetro:

![ets200.delta](images/ets200/ets200.delta.jpg)

## Asociación del sensor con Jeedom

La asociación del sensor de temperatura es un juego de niños. Simplemente presione el botón "E", ubicado debajo del sensor. Esto será reconocido automáticamente. Colóquelo en un objeto, asígnele un nombre y guárdelo.

![ets200.association](images/ets200/ets200.association.jpg)

Una vez que su equipo esté asociado, debería obtener esto :

![ets200.general](images/ets200/ets200.general.jpg)

### Commandes

Una vez creado su equipo, debe obtener los comandos asociados con el módulo :

![Pedidos](images/ets200/ets200.commandes.jpg)

Aquí está la lista de comandos :

-   La temperatura : Este es el comando que indica la temperatura leída
-   Batería : Indica el estado de la batería

### Informations

Una vez que su equipo esté asociado con Jeedom, estará disponible diversa información :

![Pedidos](images/ets200/ets200.informations.jpg)

-   Creación : Indica la fecha en que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el micromódulo
-   Batería : Indica el estado de la batería de los módulos de batería
-   Estado : Devuelve el estado del módulo
