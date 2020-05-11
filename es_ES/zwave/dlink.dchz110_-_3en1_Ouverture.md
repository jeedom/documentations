D-Link DCH-Z110 - "Apertura 3 en 1" 
====================================

\

-   **El módulo**

\

![module](images/dlink.dchz110/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/dlink.dchz110/vuedefaut1.jpg)

\

Resumen 
------

\

El detector DCH-Z110 ofrece 3 funciones diferentes : detección
apertura, sensor de temperatura y detector de luz. El se
consta de dos partes : un detector y un imán. Estan disenados
para ser colocado en una puerta o ventana con el imán fijado en el
parte de apertura y el detector en la parte fija.

Abrir la puerta o ventana mantendrá el imán alejado de
detector, que activará el detector que enviará una señal Z-Wave
alarma, si el sistema está armado (esta señal puede ser utilizada por un
sirena o por una caja de automatización del hogar, por ejemplo). El sensor también puede
ser utilizado para el control automático de iluminación, dependiendo del
nivel de brillo. Por ejemplo, el sensor enviará una señal a
Interruptor Z-Wave para encender la luz cuando se abre la puerta
y el cuarto esta oscuro.

El detector también aumentará el brillo y la temperatura, es decir
en caso de un cambio significativo, y cada vez que la apertura / cierre
se detecta. Un controlador Z-Wave (control remoto, dongle ...?) Es
necesario para integrar este detector en su red si tiene
ya una red existente.

\

Funciones 
---------

\

-   Detector 3 en 1: Apertura, temperatura, luz

-   Rango de antena optimizado

-   Uso para aplicaciones de domótica o seguridad

-   Botón para incluir / excluir el detector

-   Autoprotección

-   Indicación de batería baja

-   Pequeño, discreto y estético

-   Facilidad de uso e instalación

\

Características técnicas 
---------------------------

\

Sitio oficial :
<http://www.dlink.com/-/media/Consumer_Products/DCH/DCH%20Z110/Datasheet/DCH_Z110_Datasheet_FR.pdf>

Otro enlace técnico :
<http://www.kafkas.gr/uploads/Pdf/182732/DCH-Z120_183010381_01_Z02.PDF>

![caracteristiques
técnicas] (images / dlink.dchz110 / caracteristiques_techniques.jpg)

\

Datos del módulo 
-----------------

\

-   Hacer : D-Link

-   Modelo : Detector de apertura de puertas y ventanas DCH-Z110
    mydlink ™ Inicio

-   Fabricante : Sistema FIBARO

-   ID del fabricante : 264 \ [0x0108 \]

-   Tipo de producto : 2 \ [0x0002 \]

-   ID del producto : 14 \ [0x000e \]

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
> No instale el módulo en la ventana / puerta antes de tenerlo
> configurado correctamente y preste atención a la alineación de
> el imán durante las pruebas en una superficie plana y durante la instalación.
> (Use cuñas si es necesario) Para poner este módulo en modo
> inclusión es necesario presionar 3 veces en el botón de asociación en 1.5
> segundo, según su documentación. (parpadeo rojo constante
> en modo asociación)

\

![config inclusion](images/dlink.dchz110/config-inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/dlink.dchz110/apres_inclusion.jpg)

\

### Comandos 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponible.

\

![Comandos](images/dlink.dchz110/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Apertura : es el comando que generará una detección
    abriendo

-   Temperatura : es el comando que permite subir el
    Temperatura

-   Brillo : es el comando que hace posible aumentar el brillo

-   Sabotaje : Este es el comando de sabotaje (se activa en
    arrancando)

-   Batería : es el comando de la batería

\

### Configuracion del modulo 

\

> **Importante**
>
> Durante una primera inclusión o modificación, guarde
> siempre active el módulo presionando el botón de asociación.
> Debería parpadear en rojo y cambiar de estado.

\

Entonces es necesario configurar el módulo en
dependiendo de su instalación. Esto requiere pasar por el botón
"Configuración "del complemento OpenZwave de Jeedom.

\

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

\

Llegará a esta página (después de hacer clic en la pestaña
Configuraciones)

\

![Config1](images/dlink.dchz110/config1.jpg)

![Config2](images/dlink.dchz110/config2.jpg)

\

Detalles del parámetro :

\

-   2: permite ajustar la señal enviada a los módulos en el grupo
    asociación 2

-   4: ajusta el nivel de brillo desde el cual
    la señal definida en el parámetro 2 se enviará a los módulos asociados con el
    grupo 2

-   5: modo de funcionamiento (ver el
    documentación del fabricante)

-   6: modo de funcionamiento multisensor (ver el
    documentación del fabricante). Valor recomendado : 7

-   7: modo de funcionamiento multisensor personalizado (ver
    en la documentación del fabricante). Valor recomendado : 20 (para
    tener apertura funcional)

-   9: permite definir después de cuánto tiempo será la señal OFF
    enviado a módulos asociados con el grupo 2

-   10: le permite definir la duración entre dos informes de batería (uno
    unidad = parámetro 20)

-   11: le permite definir la duración entre dos informes de apertura automáticos
    (una unidad = parámetro 20)

-   12: le permite definir la duración entre dos auto
    brillo (una unidad = parámetro 20). Valor recomendado : 6

-   13: le permite definir la duración entre dos auto
    temperatura (una unidad = parámetro 20). Valor recomendado : 2

-   20: duración de un intervalo para los parámetros 10 a 13. Valor
    recomendado : 10

-   21: valor de variación de temperatura en ° F para activar un
    Reporte

-   22: valor en% de variación de brillo para disparar
    un informe. Valor recomendado : 10

\

### Grupos 

\

Este módulo tiene dos grupos de asociación, solo el primero es
indispensable.

\

![Groupe](images/dlink.dchz110/groupe.jpg)

\

Bueno saber 
------------

Asociación / Notificación posible con otros módulos (ejemplo: Sirena
Notificación de campanilla DCH-Z510 al abrir la puerta / ventana)

\

Visual alternativo 
-----------------

\

![Groupe](images/dlink.dchz110/autre_visuel_jeedom.jpg)

\

Despertador 
------

\

Para activar este módulo, solo hay una forma :

-   Suelte el botón de asociación y presiónelo nuevamente

-   Reduzca el intervalo de activación en la configuración / sistema del módulo
    (en segundos)

\

Faq. 
------

\

Este módulo se activa presionando su botón de asociación.

\

Este módulo es un módulo de batería, la nueva configuración será
tomado en cuenta en el próximo despertar. (botón de asociación para
fuerza, de ahí el interés de no instalar el módulo antes de su
buena configuración)

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

