-   **El módulo**

![ems200.module](images/ems200/ems200.module.jpg)

-   **El visual de Jeedom**

![ems200.vue defaut](images/ems200/ems200.vue-defaut.jpg)

Resumen 
======

Colocado en un pasillo, la sala de estar, el garaje de su casa, por ejemplo,
el sensor de movimiento detecta una presencia, el cambio de estado es
instantané.

Gracias a su amplio ángulo de visión y su alcance, permite asegurar
un gran perímetro. El indicador LED integrado señala cualquier cambio
estado.

Funciones 
=========

-   Detecta movimiento, incluso en completa oscuridad.

-   Ultra compacto

-   Señal transmitida instantáneamente al detectarla

-   Autoprotección contra el levantamiento

-   Facilidad de uso e instalación.

-   Montaje en pared por tornillos o doble cara

-   Información de nivel de batería

Características técnicas 
===========================

-   Tipo de módulo : Transmisor Edisio

-   Suministro : 3VDC (batería de litio ER14250)

-   Frecuencia : 868.3 MHz

-   Temperatura de funcionamiento : 0 ° C + 45 ° C

-   Rango en campo libre : 100M

-   Rango de detección : 6M

-   Dimensiones : 25x79x19mm

-   Grado de protección : IP20

-   Uso : En el interior

Datos del módulo 
=================

-   Hacer : Edisio Smart Home

-   Nombre : EMS-200

Configuración general 
======================

Para configurar el complemento Edisio y asociar un módulo con Jeedom,
referirse a esto
[Documentación](https://www.jeedom.fr/doc/documentation/plugins/edisio/es_ES/edisio.html).

> **Important**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, recuerde
> no active la opción en la configuración del complemento.

> **Tip**
>
> Se recomienda su colocación a una altura de 150 cm y cerca
> la temperatura deseada.

Botón "E"" 
----------

Encontrará el botón "E", que es el botón de asociación del sensor
de temperatura.

![ems200.bouton e](images/ems200/ems200.bouton-e.jpg)

Detección 
---------

El sensor detecta el más mínimo movimiento dentro de un radio de unos 6 m.

![ems200.detection](images/ems200/ems200.detection.jpg)

Ajuste del temporizador 
-----------------------

Por defecto, el temporizador está deshabilitado. Este parámetro se usa para configurar
el plazo :

![ems200.minuterie](images/ems200/ems200.minuterie.jpg)

Asociación del sensor con Jeedom 
===============================

La asociación del sensor de movimiento es fácil como un pastel. Él
simplemente presione el botón "E", ubicado debajo del sensor. Este lo hará
reconocido automáticamente por Jeedom. Solo ve al
Complemento Edisio. Luego puede colocarlo en un objeto, darle un
nombrar y guardar.

Una vez que su equipo está emparejado, debe obtener esto :

![ems200.general](images/ems200/ems200.general.jpg)

> **Tip**
>
> Para que el widget esté presente en el tablero, recuerde colocar
> su equipo en un objeto.

Comandos 
---------

Una vez que haya creado su equipo, debe recibir los pedidos.
asociado con el módulo :

![Comandos](images/ems200/ems200.commande.jpg)

Aquí está la lista de comandos :

-   Presencia : Es el comando que indica si hay presencia
    detectado

-   Batería : Indica el estado de la batería.

Información 
------------

Una vez que su equipo esté asociado con Jeedom, se le dará diversa información
disponible :

![Comandos](images/ems200/ems200.informations.jpg)

-   Creación : Indica la fecha en que se creó el equipo.

-   Comunicación : Indica la última comunicación registrada entre
    Jeedom y el módulo

-   Batería : Indica el estado de la batería de los módulos de batería.

-   Estado : Devuelve el estado del módulo.

Visual alternativo 
=================

![ems200.vue alternative](images/ems200/ems200.vue-alternative.jpg)

Faq. 
======

Cómo controlar un receptor Z-Wave?

:   Con el complemento Jeedom Scenario.

¿Cómo puedo tener el mismo visual? ?

:   Con el complemento Jeedom Widgets.

**@Jamsta**
