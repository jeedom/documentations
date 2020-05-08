Nodon Smart Plug - Smartplug 
====================================

\

-   **El módulo**

\

![module](images/nodon.smartplug/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/nodon.smartplug/vuedefaut1.jpg)

\

Resumen 
------

\

El enchufe con control remoto NodOn® se puede controlar a través de un sistema de automatización del hogar
Compatible con Z-Wave® o Z-Wave Plus® o directamente a través de otro
Controladores Z-Wave® o Z-Wave Plus® como el control remoto suave,
el interruptor de pared o el Octan Remote NodOn®. Norma alemana
(Schuko) o francés (Tipo E), el enchufe se puede conectar en 2
sentido, cabeza arriba o cabeza abajo. Asociado con su diseño fino, estos 2
Las características permiten una fácil integración sin obstrucción
barriles vecinos en una regleta. Aprendiendo a tomar con sonido
el controlador solo toma unos segundos. Un botón local permite
enciende o apaga el enchufe directamente.

\

Las funciones 
---------

\

-   Detección de pérdida de corriente de red

-   Ergonomique: Posibilidad de conectar la toma de cabeza / cabeza
    bas

-   Gestión inteligente de alarmas

-   Alcance de radio mejorado

-   Amperaje máximo: 16A

\

Características técnicas 
---------------------------

\

-   Comida : 230V AC +/- 10% - 50Hz

-   Potencia máxima : 3000W continuo / 3500W cíclico
    (Carga resistiva) Consumo intrínseco : &lt;1W

-   Temperatura de funcionamiento : 0 ° C a 40 ° C - Altitud : 2000m

-   Protocolo de radio Z-Wave® : 868.4MHz - Serie 500 - Compatible con Z-Wave
    Plus® SDK 06.51.01

-   Alcance: 40m interior / 80m exterior

-   Dimensions: 104 \*51 \*36mm

-   Garantía de 2 años

-   Tipo de la UE

\

Datos del módulo 
-----------------

\

-   Hacer : Nodon

-   Apellido : Smartplug

-   ID del fabricante : 357

-   Tipo de producto : 1

-   ID del producto : 1

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
> Para poner este módulo en modo de inclusión, presione el botón
> hasta que la luz se vuelva roja, de acuerdo con su documentación
> papel.

\

![inclusion](images/nodon.smartplug/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/nodon.smartplug/information.jpg)

\

### Órdenes 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.

\

![Órdenes](images/nodon.smartplug/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Estado : Es el comando que permite conocer el estado de la
    zócalo (encendido / apagado)

-   Nosotros : Este es el comando que enciende la salida

-   Apagado : Es el comando que hace posible extinguir la captura.

-   Estado : Se usa para averiguar si el tomacorriente está alimentado o no
    (Detección de falla de energía / desconexión)

\

Tenga en cuenta que en el tablero, la información de estado, ON / OFF, se puede encontrar en
el mismo icono.

\

### Configuracion del modulo 

\

Puede configurar el módulo de acuerdo con su
instalación Para hacer esto, vaya al botón "Configuración" del
Complemento Jeedom Zwave.

\

![Configuracion plugin Zwave](images/plugin/bouton_configuration.jpg)

\

Llegará a esta página (después de hacer clic en la pestaña
configuraciones)

\

![Config1](images/nodon.smartplug/config1.jpg)

![Config1](images/nodon.smartplug/config2.jpg)

\

Detalles del parámetro :

\

-   1 : Este parámetro define el estado (ON / OFF) del Smart Plug después de un
    falla de energía o después de la conexión

-   2 : Esta configuración le permite configurar los informes de noti ﬁ cación de
    corte de energía / retorno, así como los grupos asociados (Grupos
    4, 5, 6, 7, 8). Son posibles varias combinaciones (consulte
    documentación en papel o burbuja de ayuda en libertad). El es
    recomienda establecer este parámetro en 1.

-   3 : Este parámetro permite activar o desactivar los grupos 2 y 3..

-   4 : Le paramètre force l'état de la Smart Plug à « ON » (Smart
    Enchufe activado). Cuando la configuración está habilitada, no es
    posible apagar el Smart Plug (local o radio)

-   Parámetros 5 a 20 : A través de los parámetros de configuración \# 5 para
    \# 20, es posible configurar hasta 8 alarmas diferentes.
    Para configurar correctamente sus alarmas, el formulario en línea:
    www.nodon.fr/support/asp3/alarm lo guiará

### Grupos 

\

Este módulo tiene 8 grupos de asociación..

\

![Groupe](images/nodon.smartplug/groupe.jpg)

\

-   Grupo 1 - Línea de vida : Este grupo se usa generalmente para
    transferir información del Smart Plug al controlador principal
    de la red.

-   Grupo 2 - Monitoreo del estado del Smart Plug cuando el Smart Plug
    se activa (desactiva respectivamente) mediante el botón local,
    esto envía un comando de activación
    (desactivación respectivamente) a los dispositivos asociados. Ninguno
    el comando no se envía si el cambio de estado del Smart Plug tiene
    sido causado por un comando de radio

-   Grupo 3: seguimiento del estado complementario cuando el Smart Plug
    se activa (desactiva respectivamente) mediante el botón local,
    esto envía un comando de desactivación
    (respectivamente activación) a los dispositivos asociados. Ninguno
    el comando no se envía si el cambio de estado del Smart Plug tiene
    sido causado por un comando de radio.

-   Grupo 4 - Notificación de falla de energía cuando el Smart Plug
    detecta una falla de energía o un retorno de energía, un informe
    la notificación se envía a dispositivos emparejados. El informe enviado
    est un « Notiﬁcation Report : Administración de energía: CA desconectada
    / Reconectado).

-   Grupo 5: activación en caso de fallo de alimentación cuando el enchufe inteligente
    detecta una falla de energía, activa los dispositivos asociados.

-   Grupo 6 - Desactivación por falla de energía cuando el Smart
    El enchufe detecta fallas de energía, desactiva dispositivos
    asociados

-   Grupo 7: activación en el retorno actual cuando el Smart Plug
    detecta un retorno de corriente, activa los dispositivos asociados.

-   Grupo 8 - Desactivación en el retorno actual cuando el Smart Plug
    detecta un retorno de corriente, desactiva los dispositivos asociados

\

> **Important**
>
> Como mínimo, Jeedom debe encontrarse en los grupos 1 y 4 \

Bueno saber 
------------

\

### Específicos 

\

-   No tiene sentido divertirse conectando / desconectando el enchufe
    observar la alarma. Esto solo funcionará unas 3 veces. En
    más allá del enchufe debe permanecer encendido durante un tiempo para recargarse
    la batería interna.

\

Despertador 
------

\

No hay noción de despertar en este módulo.

\

Faq. 
------

\

No debería tener la opción de descargar widgets automáticos
activado. Puede recuperar los widgets móviles y del tablero en el
mercado : alarma.

\

¿Ha configurado correctamente el parámetro 2? ? ¿Tienes al menos Jeedom bien?
en los grupos 1 y 4 ? ¿Da tiempo para que la batería
Cargar ?

\

**@sarakha63**
