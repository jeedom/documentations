# Interruptor Swiid - Swiidinter

**El módulo**

![module](images/swiid.inter/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/swiid.inter/vuedefaut1.jpg)

Resumen
------

SwiidInter es el primer interruptor de cable en el entorno de automatización del hogar Z-Wave que es lo suficientemente pequeño y discreto como para ser comparable a un interruptor de cable ordinario.

Se puede usar tanto manualmente como cualquier interruptor de cable ordinario y de forma remota a través de un controlador Z-Wave.

El interruptor SwiidInter también ofrece posibilidades de asociación bidireccional. Por lo tanto, puede ser activado automáticamente por otro dispositivo Z-Wave en la misma red, como disparando un detector de presencia. Por el contrario, con una pulsación corta o con una pulsación larga, puede controlar dos grupos separados de dispositivos Z-Wave asociados con él : por ejemplo, todas las otras luces en la habitación donde se encuentra su interruptor SwiidInter.

El interruptor SwiidInter se instala exactamente como un interruptor de cable ordinario : Por lo tanto, es una instalación simple y rápida que no requiere ninguna herramienta especializada. Luego debe configurarse para integrarse en una "red" Z-Wave, esta red puede ser tan simple como un solo control remoto que controla su interruptor SwiidInter de forma remota.

Fonctions
---------

-   Encienda el cable que se puede usar tanto manualmente (pulsación corta) como por radio remoto (Z-Wave)
-   Úselo como reemplazo de un interruptor de cable estándar en una mesita de noche, mesa o lámpara de escritorio
-   Función ON / OFF
-   Activación de un escenario de domótica en pulsación larga (asociación Z-Wave)
-   Dimensiones comparables a un interruptor de cable ordinario
-   Se instala como un interruptor de cable ordinario
-   Apto para todo tipo de bombillas

Características técnicas
---------------------------

-   Tipo de módulo : Receptor Z-Wave
-   Color : noire
-   Alimentation: 230V ± 10% - 50Hz
-   Potencia máxima : 660W
-   El consumo : &lt; 0,08W
-   Indice de PROTECCION: IP20
-   Protocolo de radio: Z-Wave® (SDK 4.55)
-   Radiofrecuencia : 868,42 MHz (UE)
-   Dist. transmission: Hasta 30 m en interiores (depende de los materiales)
-   Temp. funcionando : 0 - 40 ° C
-   Pantalla de encendido / apagado : LEDs azules
-   Dimensiones : 84 x 32 x 29 mm
-   Normas de la UE : EN 61058-2-1:2011 EN 55015

Datos del módulo
-----------------

-   Hacer : Swiid
-   Nombre : Swiidinter
-   ID del fabricante : 358
-   Tipo de producto : 256
-   ID del producto : 256

Configuration
-------------

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón en la parte posterior, de acuerdo con su documentación en papel

![inclusion](images/swiid.inter/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/swiid.inter/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/swiid.inter/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : Es el comando que permite conocer el estado de la luz
-   Uno : Es el control que enciende la luz
-   Apagado : Es el comando que apaga la luz

Tenga en cuenta que en el tablero de instrumentos, toda la información se encuentra en el mismo icono

### Configuracion del modulo

Puede configurar el módulo de acuerdo con su instalación. Para hacer esto, vaya al botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/swiid.inter/config1.jpg)

Detalles del parámetro :

Este parámetro le permite elegir el comportamiento cuando asocia el swiidinter con otro módulo (pulsación larga)

-   Inactivo : no tendrá efecto en otras luces
-   Solo apagado : será efectivo solo para apagar otras luces
-   SOLO : será efectivo solo para encender las otras luces
-   ENCENDIDO y APAGADO (completamente) : será efectivo para encender y apagar otras luces

### Groupes

Este módulo tiene dos grupos de asociación.

![Groupe](images/swiid.inter/groupe.jpg)

> **Importante**
>
> Para un funcionamiento óptimo de su módulo. Jeedom debe estar asociado al menos con el grupo 2.

Asociarse con otra luz
----------------------------

Para asociar el swiidinter con otra luz y poder beneficiarse de la iluminación de otra luz, simplemente agréguela al grupo de asociación 1 a través de la pantalla mencionada anteriormente.

Despertar
-------

No hay noción de despertar en este módulo.
