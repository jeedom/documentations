# Interruptor Swiid - Swiidinter

**El módulo**

![module](images/swiid.inter/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/swiid.inter/vuedefaut1.jpg)

## Resumen

SwiidInter es el primer interruptor con cable en el entorno de automatización del hogar Z-Wave que es lo suficientemente pequeño y discreto para ser comparable a un interruptor con cable común.

Se puede operar manualmente como cualquier interruptor con cable normal y de forma remota a través de un controlador Z-Wave.

El interruptor SwiidInter también ofrece posibilidades de asociación bidireccional. Así, puede ser activado automáticamente por otro dispositivo Z-Wave de la misma red, como por ejemplo mediante la activación de un detector de presencia. Por el contrario, con una pulsación corta o larga, puede controlar dos grupos separados de dispositivos Z-Wave que se le han asociado : por ejemplo, todas las demás luces de la habitación donde se encuentra el interruptor SwiidInter.

El interruptor SwiidInter se instala como un interruptor de cable normal : por lo tanto, es una instalación simple y rápida que no requiere herramientas especializadas. Luego debe configurarse para integrarse en una "red" Z-Wave, esta red puede ser tan simple como un solo control remoto que controla su interruptor SwiidInter de forma remota.

## Fonctions

-   Interruptor de cable utilizable tanto manualmente (pulsación corta) como por radio remota (Z-Wave)
-   Úselo como reemplazo de un interruptor de cable estándar en una lámpara de noche, mesa o escritorio
-   Función de encendido/apagado
-   Activación de un escenario domótico con pulsación larga (asociación Z-Wave)
-   Dimensiones comparables a un interruptor de cable común
-   Se instala como un interruptor de cable regular
-   Apto para todo tipo de bombillas

## Características técnicas

-   Tipo de mod : Receptor de onda Z
-   Color : noire
-   Alimentation: 230V ± 10% - 50Hz
-   Poder maximo : 660W
-   Consumo : &lt; 0,08W
-   Indice de PROTECCION: IP20
-   Protocolo de radio: Z-Wave® (SDK 4.55)
-   Frecuencia de radio : 868,42 MHz (EE. UU)
-   Distrito. transmission: Hasta 30m interior (depende de los materiales))
-   Temperatura. marcha : 0 – 40°C
-   Activar/desactivar pantalla : LED azules
-   Dimensiones : 84x32x29mm
-   Normas de la UE : EN 61058-2-1:2011 EN 55015

## Datos del módulo

-   Marca : Swiid
-   Apellido : Swiidinter
-   Identificación del fabricante : 358
-   Tipo Producto : 256
-   Identificación de producto : 256

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar el botón en la parte posterior, de acuerdo con su documentación en papel

![inclusion](images/swiid.inter/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/swiid.inter/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/swiid.inter/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : Este es el comando que te permite saber el estado de la luz
-   NOSOTROS : Este es el comando que enciende la luz
-   APAGADO : Este es el comando que apaga la luz

Tenga en cuenta que en el panel de control toda la información se encuentra en el mismo icono

### Configuración del módulo

Puede configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/swiid.inter/config1.jpg)

Detalles del parámetro :

Este parámetro le permite elegir el comportamiento cuando asocia el swiidinter con otro módulo (pulsación larga)

-   Inactivo : no tendrá ningún efecto en otras luces
-   Solo APAGADO : será efectivo solo para apagar las otras luces
-   Sólo en : será efectivo solo para encender las otras luces
-   ENCENDIDO y APAGADO (totalmente) : será efectivo para encender y apagar las otras luces

### Groupes

Este módulo tiene dos grupos de asociación.

![Groupe](images/swiid.inter/groupe.jpg)

> **Importante**
>
> Para un funcionamiento óptimo de su módulo. Jeedom debe estar asociado al menos con el grupo 2.

## Asociar con otra luz

Para asociar el swiidinter a otra luz y poder beneficiarse del encendido de otra luz basta con añadirlo al grupo de asociación 1 a través de la pantalla mencionada anteriormente.

## Despierta

No hay concepto de despertar en este módulo.
