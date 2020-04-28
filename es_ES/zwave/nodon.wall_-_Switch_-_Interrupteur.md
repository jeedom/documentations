Nodon Switch - Interruptor de pared 
================================

\

-   **El módulo**

\

![module](images/nodon.wallswitch/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/nodon.wallswitch/vuedefaut1.jpg)

\

Resumen 
------

\

El interruptor de pared NodOn® puede controlar directamente cualquier
Dispositivo compatible con Z-Wave® o Z-Wave Plus®, como un enchufe
NodOn® smart o disparar escenas a través de una central
domótica compatible.

El interruptor tiene una placa de montaje para un fácil montaje.
en la casa: usando los tornillos de una olla empotrada, por
atornillar a la pared, o simplemente pegándolo con adhesivos
doble cara en la parte posterior del plato.

\

Funciones 
---------

\

-   Control solo o con un sistema domótico

-   Fácil de montar y desmontar.

-   Agradable sentimiento de apoyo

-   Sin hilos

-   

\

Características técnicas 
---------------------------

\

-   Suministro : Batería CR2032 - Autonomía 1,5 - 2 años

-   4 botones

-   

-   Temperatura de funcionamiento : 

-   Altitud : 2000m

-   Protocolo de radio Z-Wave® : 868.4MHz - Serie 500 - Compatible con Z-Wave
    Plus® SDK 06.51.06

-   Alcance : 

-   Dimensiones : 

-   2 años de garantia

-   :::::2013

-   

-   

-   

-   :2010

\

Datos del módulo 
-----------------

\

-   Hacer : Nodon

-   Nombre : 

-   ID del fabricante : 357

-   Tipo de producto : 2

-   ID del producto : 3

\

Configuración 
-------------

\

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/es_ES/openzwave.html).

\

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione los dos
> 
> .

\

![inclusion](images/nodon.wallswitch/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/nodon.wallswitch/information.jpg)

\

### Comandos 

\


disponible.

\

![Comandos](images/nodon.wallswitch/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Botones : es el comando que empujará el botón hacia arriba

+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| Botones        | Apoyo          | Pulsación larga     | Relajamiento    | Doble soporte   |
+ ================ + ================ + ================ = + ================ + ================= +
| **1**          | 10             | 12             | 11             | 13             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **2**          | 20             | 22             | 21             | 23             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **3**          | 30             | 32             | 31             | 33             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **4**          | 40             | 42             | 41             | 43             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +

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
configuraciones)

\

![Config1](images/nodon.wallswitch/config1.jpg)

\

Detalles del parámetro :

\

-   1-2 : 
    central (no es necesario para usar en Jeedom)

-   3 : Parámetro importante para decir si el interruptor debería funcionar
    en el modo de escena o escena central (escena configurada absolutamente)

-   4-7 : Elija el modo de funcionamiento del botón (en caso de que
    asociaciones de grupo)

-   8 : Le permite elegir el modo de funcionamiento del LED

### Grupos 

\

Este módulo tiene 7 grupos de asociación..

\

![Groupe](images/nodon.wallswitch/groupe.jpg)

![Groupe](images/nodon.wallswitch/groupe2.jpg)

\

-   Grupo 1 - Línea de vida : Este grupo se usa generalmente para
    transferir información del Smart Plug al controlador principal
    de la red.

-   Grupo 2 a 5: los dispositivos de estos grupos están controlados por
    botón correspondiente según perfil MONO

-   Grupo 6 a 7: los dispositivos de estos grupos están controlados por
    botón correspondiente según perfil DUO

\

> **Importante**
>
> Como mínimo, Jeedom debería terminar en el grupo 1 \

Bueno saber 
------------

\

### Específicos 

\

-   Este módulo puede ser complicado en la inclusión. No dudes en
    . 
    grupo de asociación.

\

Despertador 
------

\



\

Faq. 
------

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
