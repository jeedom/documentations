Asegure el termostato SRT de 323 "" 
===========================

\

-   **El módulo**

\

![module](images/secure.srt323/module.jpg)

\

-   **El visual de la libertad**

\

![vuedefaut1](images/secure.srt323/vuedefaut1.jpg)

\

Resumen 
------

\

El SRT323 es un termostato de batería montado en la pared.. Tiene
un botón giratorio que permite al usuario ajustar la temperatura
en la habitacion. Este termostato incorpora un relé de control.
cobrar. Por lo tanto, no es necesario instalar un actuador cerca
de la caldera.

Al verificar la temperatura de consigna con la temperatura real
medido, el termostato decide activar la caldera. Lo que es mas
El termostato incorpora un algoritmo TPI (integral proporcional al tiempo),
permitiendo una optimización y ajuste más precisos de la temperatura
de su entorno.

El termostato puede recibir el punto de ajuste de otro
Controlador Z-Wave, y también se puede utilizar como
temperatura El termostato en sí no tiene un temporizador incorporado pero
ejecutar comandos Z-Wave y comandos locales.

Se puede usar como reemplazo directo de termostatos
existente, sin tener que hacer ningún cambio de cableado. El algoritmo
TPI optimizará el encendido y apagado de la caldera
para mantener mejor la temperatura establecida, sin
"sobrepasar "de ella. Se ha demostrado que los controladores TPI
puede proporcionar un considerable ahorro de energía en comparación con
controladores de calefacción tradicionales.

El SRT323 es un socio ideal para usar con una puerta de enlace
domótica, que le permite controlar de forma remota su sistema domótico
calefaccion. Ya no tendrás que preocuparte por volver a casa en
una casa fría, siempre que tenga un teléfono inteligente, tableta o
PC a mano y conectada a internet.

\

Las funciones 
---------

\

-   Termostato para aplicación doméstica

-   Reemplaza un termostato existente

-   Tecnología inalámbrica Z-Wave

-   Pantalla LCD retroiluminada

-   Fácil de usar

-   Compatible con otros productos Z-Wave

-   Un botón

\

Características técnicas 
---------------------------

\

-   Tipo de módulo : Controlador Z-Wave

-   Algoritmo TPI integrado

-   Relai: 3 (1) A 230V CA

-   Rango de temperatura ajustable: 5 ° C a 30 ° C

-   Comida : 2 pilas AAA (LR3)

-   Duración de la batería : 2 años

-   Frecuencia : 868.42 Mhz

-   Alcance : hasta 50 m en campo abierto

-   Indice de PROTECCION : IP30

-   Temperatura de funcionamiento : 0 ° C a 40 ° C

-   Dimensiones : 86 x 86 x 36.25 mm

\

Datos del módulo 
-----------------

\

-   Hacer : Horstmann

-   Apellido : SRT 323 Termostato ambiental electrónico y temperatura

-   ID del fabricante : 89

-   Tipo de producto : 1

-   ID del producto : 4

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
> Para poner este módulo en modo de inclusión, debe poner el interruptor 1 en
> posición ON y luego con la pantalla del dial L y presione el dial,
> de acuerdo con su documentación en papel.

\

![inclusion](images/secure.srt323/inclusion.jpg)

\

> **Important**
>
> Este módulo es meticuloso en la inclusión. Durante una primera inclusión
> siempre active el módulo inmediatamente después de la inclusión. Para hacer esto
> deje el interruptor 1 en la posición de ENCENDIDO y luego con la rueda de ajuste
> posición "n" y presione el botón. Presione una segunda vez después
> 10 segundos para estar seguro. Una vez hecho esto, haz clic en el botón
> Sincronizar (visible en la vista experta) junto a los botones
> Inclusión / Exclusión. Luego, en la página de su módulo, haga clic en
> lupa arriba a la derecha.

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/secure.srt323/information.jpg)

\

### Órdenes 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.

\

![Órdenes](images/secure.srt323/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Temperatura : es el comando de medición de temperatura

-   Estado : es el comando que da la instrucción actual

-   Consigna : es el comando que hace posible ajustar el punto de ajuste

-   Estado de calentamiento : es el comando que hace posible saber si el
    el termostato está en modo calefacción o no

-   Batería : es el comando de la batería

\

### Configuracion del modulo 

\

Entonces es necesario configurar el módulo en
dependiendo de su instalación. Esto requiere pasar por el botón
"Configuración "del complemento OpenZwave de Jeedom.

\

![Configuracion plugin Zwave](images/plugin/bouton_configuration.jpg)

\

Llegará a esta página (después de hacer clic en la pestaña
configuraciones)

\

![Config1](images/secure.srt323/config1.jpg)

\

Detalles del parámetro :

\

-   1: permite activar o no el sensor de temperatura interno

-   2: permite elegir la unidad de temperatura

-   3: permite definir el nivel de variación de temperatura para
    el módulo vuelve a subir (en unidades de 0.1 ° C)

\

### Grupos 

\

Para un funcionamiento óptimo de su módulo, Jeedom debe ser
asociado con los 5 grupos

\

![Groupe](images/secure.srt323/groupe.jpg)

\

Bueno saber 
------------

\

### Específicos 

\

> **Important**
>
> Este módulo está en batería. Por eso es importante tener en cuenta que
> El cambio del punto de ajuste solo se tendrá en cuenta al despertar. Por
> el despertador predeterminado es a 86400 segundos. Es muy recomendable
> disminuirlo a unos 10 minutos. Por lo tanto, un cambio de punto de ajuste será
> tomado en cuenta por el módulo como máximo después de 10 minutos

\

Despertador 
------

\

Para activar este módulo, coloque el interruptor 1 en la posición ON y
con la rueda, elija n y presione la rueda.

\

Faq. 
------

\

\

Este módulo es un módulo de batería, la nueva configuración será
tomado en cuenta en el próximo despertar.

\

Nota importante 
---------------

\

> **Important**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio
> de la configuración, después de un cambio de activación, después de un
> cambio de grupos de asociación

\

**@sarakha63**
