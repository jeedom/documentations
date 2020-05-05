Interruptor Swiid - Swiidinter 
===============================

\

-   **El módulo**

\

![module](images/swiid.inter/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/swiid.inter/vuedefaut1.jpg)

\

Resumen 
------

\

SwiidInter es el primer interruptor de cable del entorno
Domótica Z-Wave que es lo suficientemente pequeña y discreta como para ser
comparable a un interruptor de cable ordinario.

Se puede usar tanto manualmente como cualquier
interruptor de cable ordinario y remoto a través del controlador
Z-Wave.

El interruptor SwiidInter también ofrece posibilidades de asociación.
y este bidireccional. Por lo tanto, puede ser operado automáticamente por un
otro dispositivo Z-Wave en la misma red, como el
detector de presencia activado. Por el contrario con apoyo
corto o con una pulsación larga puede controlar dos grupos separados de
Dispositivos Z-Wave asociados a él : por ejemplo cada
otras luces en la habitación donde se encuentra su interruptor
SwiidInter.

El interruptor SwiidInter se instala exactamente como un interruptor
en cordón ordinario : así que es una instalación rápida y fácil que
no requiere herramientas especializadas. Luego debe configurarse para
integrarse en una "red" Z-Wave, esta red puede ser tan simple
solo un control remoto que controla su interruptor SwiidInter a
distance.

\

Funciones 
---------

\

-   Interruptor de cable utilizable tanto manualmente
    (pulsación corta) y por radio remota (Z-Wave)

-   Úselo como reemplazo de un interruptor de cable estándar
    una lámpara de mesilla de noche, mesa o escritorio

-   Función ON / OFF

-   Activación de un escenario de domótica en pulsación larga
    (Asociación Z-Wave)

-   Dimensiones comparables a un interruptor de cable ordinario

-   Se instala como un interruptor de cable ordinario

-   Apto para todo tipo de bombillas

\

Características técnicas 
---------------------------

\

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

\

Datos del módulo 
-----------------

\

-   Hacer : Swiid

-   Nombre : Swiidinter

-   ID del fabricante : 358

-   Tipo de producto : 256

-   ID del producto : 256

\

Configuración 
-------------

\

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[Documentación](https://jeedom.fr/doc/documentation/plugins/openzwave/es_ES/openzwave.html).

\

> **Important**
>
> Para poner este módulo en modo de inclusión, presione el botón
> en la parte posterior, de acuerdo con su documentación en papel

\

![inclusion](images/swiid.inter/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/swiid.inter/information.jpg)

\

### Comandos 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.

\

![Comandos](images/swiid.inter/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Estado : Es el comando que permite conocer el estado de la
    Iluminación

-   Uno : Es el control que enciende la luz.

-   Apagado : Es el comando que apaga la luz.

\

Tenga en cuenta que en el tablero de instrumentos toda la información se encuentra en el mismo
icone

\

### Configuracion del modulo 

\

Puede configurar el módulo de acuerdo con su
instalación Esto requiere pasar por el botón "Configuración" del
Complemento Jeedom OpenZwave.

\

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

\

Llegará a esta página (después de hacer clic en la pestaña
configuraciones)

\

![Config1](images/swiid.inter/config1.jpg)

\

Detalles del parámetro :

\

Este parámetro le permite elegir el comportamiento cuando asocia el
swiidinter a otro módulo (pulsación larga)

\

-   Inactivo : no tendrá efecto en otras luces

-   Solo apagado : será efectivo solo para apagar a otros
    luces

-   SOLO : será efectivo solo para encender a los demás
    luces

-   ENCENDIDO y APAGADO (completamente) : será efectivo para encender y apagar el
    otras luces

\

### Grupos 

\

Este módulo tiene dos grupos de asociación..

\

![Groupe](images/swiid.inter/groupe.jpg)

\

> **Important**
>
> Para un funcionamiento óptimo de su módulo. Jeedom debe
> estar asociado al menos con el grupo 2.

\

Asociarse con otra luz 
----------------------------

\

Para asociar el swiidinter con otra luz y poder beneficiarse de
encender otra luz, solo agréguela al grupo
de asociación 1 a través de la pantalla citada anteriormente.

\

Bueno saber 
------------

\

### Visual alternativo 

\

![vuewidget](images/swiid.inter/vuewidget.jpg)

\

Despertar 
-------

\

No hay noción de despertar en este módulo.

\

Faq. 
------

\

¿Ha combinado los dos módulos y ha configurado la pieza correctamente?
Especifico.

\

No El módulo no lo permite..

\

**@sarakha63**
