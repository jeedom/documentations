Control remoto Mediodía - Control remoto suave 
================================

\

-   **El módulo**

\

![module](images/nodon.softremote/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/nodon.softremote/vuedefaut1.png)

\

Resumen 
------

\

El Soft Remote NodOn® puede controlar directamente cualquier dispositivo
Compatible con Z-Wave® o Z-Wave Plus®, como el enchufe inteligente NodOn®.

También puede desencadenar escenas a través de un sistema de automatización del hogar.
compatible.

\

Funciones 
---------

\

-   Controla cualquier dispositivo compatible con Z-Wave

-   Resistente a golpes y salpicaduras.

-   Se adhiere a todas partes gracias a su imán integrado

-   6 colores disponible

\

Características técnicas 
---------------------------

\

-   Suministro : Batería CR2032 - Autonomía 1,5 - 2 años

-   4 botones

-   Imán integrado para fijación a superficie metálica.

-   Resistente a golpes y salpicaduras.

-   Temperatura de funcionamiento : 0 ° C a 40 ° C - Altitud : 2000m

-   Protocolo de radio Z-Wave® : 868.4MHz - Serie 500 - Compatible con Z-Wave
    Plus® SDK 06.51.06

-   Alcance : 40m en interiores / 80m en exteriores

-   Dimensiones 56 \ * 56 \ * 20 mm

-   2 años de garantia

\

Datos del módulo 
-----------------

\

-   Hacer : Mediodía

-   Nombre : CRC-3-6-0x Control remoto suave

-   ID del fabricante : 357

-   Tipo de producto : 2

-   ID del producto : 2

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
> Para poner este módulo en modo de inclusión, presione los dos
> botón (+ y 0 lleno) hasta que la luz se vuelva rosa
> presione el botón +, de acuerdo con su documentación en papel.

\

![inclusion](images/nodon.softremote/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/nodon.softremote/information.png)

\

### Comandos 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponible.

\

![Comandos](images/nodon.softremote/commandes.png)

\

Aquí está la lista de comandos :

\

-   Botones : es el comando que empujará el botón hacia arriba

+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| Botones        | Apoyo          | Pulsación larga     | Relajamiento    | Doble soporte   |
+ ================ + ================ + ================ = + ================ + ================= +
| **1 (0         | 10             | 12             | 11             | 13             |
| completo)**       |                |                |                |                |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **2 (+)**      | 20             | 22             | 21             | 23             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **3 (0 vacío)** | 30             | 32             | 31             | 33             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **4 (-)**      | 40             | 42             | 41             | 43             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +

-   Batería : es el comando que eleva el nivel de las baterías

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

![Config1](images/nodon.softremote/config1.png)

\

Detalles del parámetro :

\

-   1-2 : Le permite elegir el perfil de los botones cuando se usa en
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

![Groupe](images/nodon.softremote/groupe.png)

\

-   Grupo 1 - Línea de vida : Este grupo se usa generalmente para
    transferir información del Smart Plug al controlador principal
    de la red.

-   Grupo 2 a 5: los dispositivos de estos grupos están controlados por
    botón correspondiente según perfil MONO

-   Grupo 6 a 7: los dispositivos de estos grupos están controlados por
    botones correspondientes según el perfil DUO

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
    despertarse 1 o 2 veces después de la inclusión. Y revisa el
    grupo de asociación.

\

Despertador 
------

\

Para activar este módulo, solo presione uno de los botones

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

**@lunarok**
