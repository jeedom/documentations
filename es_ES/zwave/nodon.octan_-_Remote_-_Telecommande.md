Mando a distancia Nodon - Octan
==========================

-   **El módulo**

![module](images/nodon.octan/module.jpg)

-   **El visual de Jeedom**

![vuedefaut1](images/nodon.octan/vuedefaut1.jpg)

Resumen
------

El Octan Remote NodOn® le permite controlar cualquier receptor
Compatible con Z-Wave® o Z-Wave Plus®, como la toma del control remoto
NodOn® (modo de controlador principal - Independiente), o incluso disparador
escenas / acciones a través de un sistema de automatización del hogar compatible (modo
Gateway)

Su imán integrado permite su fijación en todas partes, desde el radiador hasta la puerta
refrigerador, a través de su soporte de pared. Entre control remoto
y cambia, el control remoto Octan revoluciona el control de objetos
domestiques

Fonctions
---------

-   Control solo o con un sistema domótico

-   Imán integrado

-   Led de color

-   Placa de pared

-   2 años de batería

Características técnicas
---------------------------

-   Suministro : Batería CR2032 - Autonomía 1,5 - 2 años

-   4 botones

-   Soporte de pared fijado con adhesivo de doble cara (incluido) o tornillos
    (no incluido)

-   Imán integrado para fijación a superficie metálica

-   Temperatura de funcionamiento : 0 ° C a 40 ° C - Altitud : 2000m

-   Protocolo de radio Z-Wave® : 868.4MHz - Serie 500 - Compatible con Z-Wave
    Plus® SDK 06.51.01 Alcance: 40m interior / 80m exterior

-   Dimensiones : 80 \*80 \*15mm

-   2 años de garantia

Datos del módulo
-----------------

-   Hacer : Nodon

-   Nombre : CRC-3-1-00 Octan Remote

-   ID del fabricante : 357

-   Tipo de producto : 2

-   ID del producto : 1

Configuration
-------------

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione los dos
> botón (1 y 2) hasta que la luz se vuelva rosa y luego presione
> botón 1, según su documentación en papel.

![inclusion](images/nodon.octan/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/nodon.octan/information.jpg)

### Commandes

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.

![Comandos](images/nodon.octan/commandes.jpg)

Aquí está la lista de comandos :

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

### Configuracion del modulo

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después
> inclusión.

Entonces, si desea configurar el módulo de acuerdo con
de su instalación, debe pasar por el botón
"Configuración "del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña
configuraciones)

![Config1](images/nodon.octan/config1.jpg)

Detalles del parámetro :

-   1-2 : Le permite elegir los perfiles de botón cuando se usa en
    central (no es necesario para usar en Jeedom)

-   3 : Parámetro importante para decir si el interruptor debería funcionar
    en el modo de escena o escena central (escena configurada absolutamente)

-   4-7 : Elija el modo de funcionamiento del botón (en caso de que
    asociaciones de grupo)

-   8 : Le permite elegir el modo de funcionamiento del LED

### Groupes

Este módulo tiene 7 grupos de asociación.

![Groupe](images/nodon.octan/groupe.jpg)

![Groupe](images/nodon.octan/groupe2.jpg)

-   Grupo 1 - Línea de vida : Este grupo se usa generalmente para
    transferir información del Smart Plug al controlador principal
    de la red.

-   Grupo 2 a 5: los dispositivos de estos grupos están controlados por
    botón correspondiente según perfil MONO

-   Grupo 6 a 7: los dispositivos de estos grupos están controlados por
    botón correspondiente según perfil DUO

> **Importante**
>
> Al menos Jeedom debería terminar en el grupo 1

Bueno saber
------------

### Específicos

-   Este módulo puede ser complicado en la inclusión. No dudes en
    Despierte 1 o 2 veces después de la inclusión y verifique
    grupo de asociación.

Wakeup
------

Para activar este módulo, solo presione uno de los botones

Faq.
------

Este módulo es un módulo de batería, la nueva configuración no será
tenga en cuenta que si despierta el control remoto.

Nota importante
---------------

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio
> de la configuración, después de un cambio de activación, después de un
> cambio de grupos de asociación

**@sarakha63**
