Everspring Miniplug Uno / Apagado - AN180-6 
====================================

\

-   **El módulo**

\

![module](images/everspring.AN180-6/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/everspring.AN180-6/vuedefaut1.jpg)

\

Resumen 
------

\

El mini enchufe de encendido / apagado está diseñado para controlar el encendido y
apagar las luces y el equipo eléctrico de su
casa Con un voltaje de 220 - 240 V, este enchufe puede soportar un
Carga hasta 1500W (resistencia), 800W (incandescente), 200W (motor,
fluorescente, Led).

El Mini Uno / Apagado Plug es un dispositivo compatible con Z-Wave ™ que está diseñado
para trabajar con todas las redes compatibles con Z-Wave ™. Ella puede
ser controlado por un control remoto, software de PC o cualquier
Controlador Z-Wave para su red.

\

Funciones 
---------

\

-   Controlar una lámpara o dispositivo de forma remota

-   Módulo de enchufe que se integra directamente entre una toma de corriente y
    la carga a la orden

-   Función ON / OFF para controlar lámparas o dispositivos (no
    variación)

-   Control de carga local mediante botón integrado.

-   Tecnología Z-Wave Plus

-   Dimensiones reducidas para pasar casi desapercibidas

-   LED de estado en el botón integrado

-   Función repetidora Z-Wave

\

Características técnicas 
---------------------------

\

-   Tipo de módulo : Receptor Z-Wave

-   Suministro : 230 V, 50 Hz

-   El consumo : 0.6W

-   Potencia máxima : Carga resistiva : 1500W, bombilla incandescente
    : 800W, bombilla fluorescente compacta : 200W, bombilla led (no regulable) :
    200W

-   Frecuencia : 868.42 Mhz

-   Alcance : hasta 70 m en exteriores, hasta 30 m en edificios

-   Visualización: LED en el botón

-   Dimensiones : Longitud (enchufe incluido) : 74 mm de diámetro : 52mm

\

Datos del módulo 
-----------------

\

-   Hacer : Everspring

-   Nombre : Miniplug encendido / apagado

-   ID del fabricante : 96

-   Tipo de producto : 4

-   ID del producto : 7

\

Configuración 
-------------

\

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[Documentación](https://jeedom.fr/doc/Documentación/plugins/openzwave/es_ES/openzwave.html).

\

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione 3 veces en su
> botón, de acuerdo con su documentación en papel. Es importante
> tenga en cuenta que este módulo va directamente a la inclusión cuando
> no pertenece a ninguna red y está alimentado

\

![inclusion](images/everspring.AN180-6/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/everspring.AN180-6/information.jpg)

\

### Comandos 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con los módulos serán
disponible.

\

![Comandos](images/everspring.AN180-6/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Estado : Es el comando que permite conocer el estado de la
    zócalo (encendido / apagado)

-   Uno : Este es el comando que enciende la salida

-   Apagado : Es el comando que hace posible extinguir la captura.

\

Tenga en cuenta que en el tablero, la información de estado, ON / OFF, se puede encontrar en
el mismo icono.

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

![Config1](images/everspring.AN180-6/config1.jpg)

\

Detalles del parámetro :

\

-   1 : Este parámetro define el comando de valor de estado, no es
    aconseja cambiar este valor.

-   2 : Este parámetro define el retraso en el envío del cambio de estado a
    grupo 1 (valor entre 3 y 25 segundos)

-   3 : Este parámetro se usa para definir si el socket reanudará su estado
    (ON u OFF) después de una recuperación de energía.

### Grupos 

\

Este módulo tiene 2 grupos de asociación..

\

![Groupe](images/everspring.AN180-6/groupe.jpg)

\

> **Importante**
>
> Como mínimo, Jeedom debería terminar en el grupo 1 \

Bueno saber 
------------

\

### Específicos 

\

-   La retroalimentación de estado no se puede configurar por debajo de 3
    segundos \

Despertador 
------

\

No hay noción de activación en este módulo.

\

Faq. 
------

\

Sí, es el parámetro 2 y no se puede establecer por debajo de 3
segundos.

\

**@sarakha63**
