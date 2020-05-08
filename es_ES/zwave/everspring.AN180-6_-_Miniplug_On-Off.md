 
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




,
.


. 

.

\

Las funciones 
---------

\

-   Controlar una lámpara o dispositivo de forma remota

-   Módulo de enchufe que se integra directamente entre una toma de corriente y
    la carga a la orden

-   
    

-   

-   Tecnología Z-Wave Plus

-   

-   

-   Función repetidora Z-Wave

\

Características técnicas 
---------------------------

\

-   Tipo de módulo : Receptor Z-Wave

-   Comida : 230 V, 50 Hz

-   El consumo : 0.6W

-   Potencia máxima : Carga resistiva : 
    :  :  :
    200W

-   Frecuencia : 868.42 Mhz

-   Alcance : hasta 70 m en exteriores, hasta 30 m en edificios

-   Affichage: LED en el botón

-   Dimensiones :  :  : 52mm

\

Datos del módulo 
-----------------

\

-   Hacer : Everspring

-   Apellido : Miniplug encendido / apagado

-   ID del fabricante : 96

-   Tipo de producto : 4

-   ID del producto : 7

\

Configuracion 
-------------

\

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[documentación](https://jeedom.fr/doc/documentation/plugins/openzwave/es_ES/openzwave.html).

\

> **Important**
>
> Para poner este módulo en modo de inclusión, presione 3 veces en su
> botón, de acuerdo con su documentación en papel. Es importante
> tenga en cuenta que este módulo entra directamente en la inclusión cuando
> no pertenece a ninguna red y está alimentado

\

![inclusion](images/everspring.AN180-6/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/everspring.AN180-6/information.jpg)

\

### Órdenes 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con los módulos serán
disponibles.

\

![Órdenes](images/everspring.AN180-6/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Estado : Es el comando que permite conocer el estado de la
    zócalo (encendido / apagado)

-   Nosotros : Este es el comando que enciende la salida

-   Apagado : Es el comando que hace posible extinguir la captura.

\

Tenga en cuenta que en el tablero, la información de estado, ON / OFF, se puede encontrar en
el mismo icono.

\

### Configuracion del modulo 

\

Puede configurar el módulo de acuerdo con su
instalación Para hacer esto, vaya al botón "Configuración" del
Complemento Jeedom OpenZwave.

\

![Configuracion plugin Zwave](images/plugin/bouton_configuration.jpg)

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

> **Important**
>
> Como mínimo, Jeedom debería terminar en el grupo 1 \

Bueno saber 
------------

\

### Específicos 

\

-   La retroalimentación de estado no se puede configurar por debajo de 3
    segundos. \

Despertador 
------

\

No hay noción de despertar en este módulo.

\

Faq. 
------

\

Sí, es el parámetro 2 y no se puede establecer por debajo de 3
secondes.

\

**@sarakha63**
