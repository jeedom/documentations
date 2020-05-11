-   **El módulo**

![module](images/etc4/module.jpg)

-   **El visual de Jeedom**

![vue default](images/etc4/vue_default.jpg)

Resumen 
======

El mini control remoto e-Trendy de 4 canales es simple, robusto y elegante,
fue creado para complacer. Se conecta fácilmente a receptores y
puede controlar su encendido / apagado y luces regulables, motorizaciones,
persianas, persianas, portones, puertas de garaje. Tiene dos modos de
Programación.

Además, la interacción con otros protocolos es posible, puede
interactuar con los receptores de la marca Edisio, con Jeedom, pero
también por cualquier receptor Z-Wave en su red.

Funciones 
=========

-   Modo de uso : Encendido / Apagado, Abrir / Parar / Cerrar, Atenuador,
    Motorización, persianas, persianas, portones, puertas de garaje

-   2 modos de programación

-   Pequeño, discreto y estético

-   Facilidad de uso e instalación

Características técnicas 
===========================

-   Tipo de módulo : Transmisor Edisio

-   Suministro : 3VDC (batería de litio CR2430)

-   Canales : 4

-   Frecuencia : 868.3 MHz

-   Temperatura de funcionamiento : -10 ° C + 50 ° C

-   Dimensiones : 52x28x12mm

-   Grado de protección : IP40

Datos del módulo 
=================

-   Hacer : Edisio Smart Home

-   Nombre : ETC4

Configuración general 
======================

Para configurar el complemento Edisio y asociar un módulo con Jeedom,
referirse a esto
[Documentación](https://www.jeedom.fr/doc/Documentación/plugins/edisio/es_ES/edisio.html).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, recuerde
> no active la opción en la configuración del complemento.

Las modas 
---------

Controle y centralice sus luces y atenuadores de encendido / apagado,
apertura, motores, en la misma tecla o en 2 botones separados. El
Los controles remotos de e-Trendy tienen 2 modos de funcionamiento, MODO 1 y MODO 2
:

-   MODO 1 : Control de 1 botón : Encendido / Apagado, Abrir / Cerrar,
    Variación + / Variación-, Impulso

-   MODO 2 : Control en 2 teclas :

    -   Teclas ARRIBA: Detener, Cerrar, Variación, Impulso

    -   Teclas inferiores: Caminar, Abierto, Variación +, Pulso

Diagrama de funciones 
===========================

Dependiendo de si su transmisor está configurado en "1 tecla" o "modo 2
teclas ", así es como funciona el control remoto :

![diagramme](images/etc4/diagramme.jpg)

Cambiar modo 
===============

-   MODO 1 :

    -   Mantenga presionada la tecla "C4"

    -   Presione la tecla "C1" 1x, manteniendo presionada la tecla
        "C4 ", el LED parpadeará 1 vez

![mode1](images/etc4/mode1.jpg)

-   MODO 2 :

    -   Mantenga presionada la tecla "C4"

    -   Presione la tecla "C1" dos veces, manteniendo presionada la tecla
        "C4 ", el LED parpadeará 2 veces

![mode2](images/etc4/mode2.jpg)

Asociación del control remoto con Jeedom 
=======================================

La asociación de un transmisor Edisio es simple y
automáticamente Solo tienes que presionar cada tecla
deseo tener en tu Jeedom.

Una vez, su equipo asociado, debería obtener esto :

![asso equip](images/etc4/asso_equip.jpg)

Comandos 
---------

Una vez que haya creado su equipo, debe recibir los pedidos
asociado con el módulo :

![Comandos](images/etc4/commandes.jpg)

Aquí está la lista de comandos :

-   bt01 : Es el comando que te permite interactuar con el botón 1

-   bt02 : Es el comando que permite interactuar con el botón 2

-   bt03 : Es el comando que permite interactuar con el botón 3

-   bt04 : Es el comando que te permite interactuar con el botón 4

-   Batería : Indica el estado de la batería

Información 
------------

Una vez que su equipo esté asociado con Jeedom, se le dará diversa información
disponible :

![Comandos](images/etc4/infos.jpg)

-   Creación : Indica la fecha en que se creó el equipo

-   Comunicación : Indica la última comunicación registrada entre
    Jeedom y el micro módulo

-   Batería : Indica el estado de la batería para los módulos de batería

-   Estado : Devuelve el estado del módulo

Uso 
-----------

Una vez que su control remoto está configurado, puede hacerlo con
El plugin Jeedom Scenario interactúa con su control remoto en Jeedom.

> **Nota**
>
> Cada clave para un estado binario devuelve.

Faq. 
======

Cómo eliminar la asociación de una clave con un receptor ?

:   Presione 5 segundos en la "R" del receptor, una señal sonora simple
    modo de desprogramación activado. Presione la tecla "C" para eliminar.
    Repita esta operación para borrar todas las teclas.

**@Jamsta**
