Botón de pánico Aeotec 
===================

\

-   **El módulo**

\

![module](images/aeotec.panicbutton/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/aeotec.panicbutton/vuedefaut1.jpg)

\

Resumen 
------

\

Este control remoto de llavero con un diseño moderno y agradable tiene un
botón para controlar todos los tipos de dispositivos Z-Wave como
lámparas, persianas, etc..

Con sus dimensiones muy pequeñas, puedes ponerlo fácilmente
en tu bolsillo. Fácil de usar y elegante, está equipado con un
anillo para adjuntarlo a las teclas, lo que lo hace disponible para
al salir de casa o al regresar a casa.

El botón le permite controlar dos dispositivos o escenas gracias a la
gestión de prensas cortas y largas. Este control remoto también puede ser
bien utilizado como controlador primario como secundario.

Este control remoto también se puede usar como botón
emergencia o pánico. En caso de angustia o cuando su titular
se encuentra frente a otra situación de emergencia, solo necesita presionar
se emitirá el botón y una señal Z-Wave. En este caso, este dispositivo
también se puede usar como medallón alrededor del cuello.

\

Funciones 
---------

\

-   Control remoto llavero

-   Controlador primario o secundario

-   Diseño ultra compacto y ultra

-   1 botón configurable

-   Gestiona hasta 2 dispositivos / escenas

-   Se puede usar como botón de emergencia / pánico

-   Úselo alrededor del cuello como medallón de emergencia.

\

Características técnicas 
---------------------------

\

-   Tipo de módulo : Transmisor de onda Z

-   Suministro : 1 batería de litio 3V CR2450

-   Duración de la batería : 2 a 3 meses para 10 a 20 usos
    por día

-   Frecuencia: 868.42 MHz

-   Distancia de transmisión : 30m en interiores

-   Dimensiones : 55 x 30 x 11 mm (largo x ancho x alto)

\

Datos del módulo 
-----------------

\

-   Hacer : Aeotec

-   Nombre : Botón de pánico

-   ID del fabricante : 134

-   Tipo de producto : 1

-   ID del producto : 38

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
> Para poner este módulo en modo de inclusión, presione el botón
> APRENDER, de acuerdo con su documentación en papel.

\

![inclusion](images/aeotec.panicbutton/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/aeotec.panicbutton/information.jpg)

\

### Comandos 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponible.

\

![Comandos](images/aeotec.panicbutton/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Botones : es el comando que empujará el botón hacia arriba

1 : Presione brevemente el botón

2 : Mantenga presionado el botón

\

### Configuracion del modulo 

\

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después
> inclusión.

\

Entonces, si desea configurar el módulo de acuerdo con
de su instalación, debe pasar por el botón
"Configuración "del complemento OpenZwave de Jeedom.

\

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

\

Llegará a esta página (después de hacer clic en la pestaña
Configuraciones)

\

![Config1](images/aeotec.panicbutton/config1.jpg)

\

Detalles del parámetro :

\

-   250: modo de funcionamiento del control remoto (absolutamente
    Escena para control remoto)

-   255 : permite que el llavero se restablezca de fábrica

\

### Grupos 

\

Este módulo tiene un solo grupo de asociación. El es
indispensable.

\

![Groupe](images/aeotec.panicbutton/groupe.jpg)

\

Bueno saber 
------------

\

### Específicos 

Para usar este módulo como control remoto, proceda de la siguiente manera :

-   1 : Incluye control remoto

-   2 : Despierta el control remoto

-   3 : Cambie el parámetro 250 a verdadero (hágalo incluso si
    ya parece ser cierto)

-   4 : Active el control remoto y asegúrese de que el cambio haya sido
    tener en cuenta

-   5 : Cambie el modo de funcionamiento del control remoto mientras permanece
    presione los dos botones en la parte posterior durante 3 segundos.

Despertador 
------

\

Para activar este módulo, solo hay una forma :

-   mantenga presionado el botón APRENDIZAJE durante 3 segundos

\

Faq. 
------

\

Este módulo se activa presionando el botón APRENDIZAJE durante 3 segundos.

\

Este módulo es un módulo de batería, la nueva configuración no será
tenga en cuenta que si despierta el control remoto.

\

Nota importante 
---------------

\

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio
> de la configuración, después de un cambio de activación, después de un
> cambio de grupos de asociación

\

**@sarakha63**
