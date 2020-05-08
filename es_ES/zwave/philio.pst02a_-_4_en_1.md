 
=======================

\

-   **El módulo**

\

![module](images/philio.pst02a/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/philio.pst02a/vuedefaut1.jpg)

\

Resumen 
------

\

El detector ZIP-PSM02-EU ofrece 4 funciones diferentes. : detección de
movimiento, detección de apertura, sensor de temperatura y detector
brillo Consta de dos partes : un detector y un imán.
Están diseñados para colocarse en una puerta o ventana con
el imán fijado en la parte que se abre y el detector en la parte
fixe.

Abrir la puerta o ventana mantendrá el imán alejado de
detector, que activará el detector que enviará una señal de onda Z
alarma, si el sistema está armado (esta señal puede ser explotada por un
sirena o por una caja de automatización del hogar, por ejemplo). Este detector puede ser
utilizado para seguridad o automatización. Cuando el detector
está asociado con dispositivos de seguridad, sirve como disparador
alertas al detectar cambios en los niveles de radiación
infrarrojo o puerta / ventana de apertura. Si una persona se muda
el campo de visión del detector o abre una puerta / ventana, una señal
se transmite la radio, que activa una alarma para disuadir
intrus.

El detector también se puede usar en combinación con un
Controlador Z-Wave para usos de domótica, detectando ambos
cambios en los niveles de radiación infrarroja (presencia) o
apertura de puerta / ventana y cambios en el nivel de
brillo Por lo tanto, se puede activar una iluminación durante una detección
movimiento de puerta o apertura en la oscuridad.

El detector también aumentará el brillo y la temperatura, es decir.
cambio significativo, y cada vez que un movimiento o
se detectan apertura / cierre. Un controlador Z-Wave (control remoto,
dongle ...) es necesario para integrar este detector en su red
si ya tienes una red existente. \

Las funciones 
---------

\

-   Detector 4 en 1: movimiento, apertura, temperatura, luz

-   Adopta el reciente chip de la serie Z-Wave 400 para admitir
    operaciones multicanal y más rendimiento de datos
    alto (9.6 / 40 / 100kbps)

-   Utiliza el SDK de Z-Wave 6.02

-   Rango de antena optimizado

-   Uso para aplicaciones de domótica o seguridad

-   Botón para incluir / excluir el detector

-   Autoprotection

-   Indicación de batería baja

-   Pequeño, discreto y estético.

-   Facilidad de uso e instalación.

\

Características técnicas 
---------------------------

\

-   Tipo de módulo : Transmisor de onda Z

-   Comida : 1 batería CR123A 3V

-   Duración de la batería : 2 años

-   Frecuencia : 868.42 MHz

-   Distancia de transmisión : 30m en interiores

-   Sensor de temperatura : -10 a 70 ° C

-   Sensor de brillo : 0 a 500 lux

-   Ángulo de detección PIR : 90 °

-   Rango de detección PIR : 8 a 10m

-   Dimensiones :

-   Detector : 28 x 96 x 23 mm

-   Imán : 10 x 50 x 12 mm

-   Peso : 52g

-   Temperatura de funcionamiento : -10 a 40 ° C

-   Humedad de funcionamiento : 85% HR máx.

-   Norma CE : EN300 220-1

-   Certificación Z-Wave : ZC08-13050003

\

Datos del módulo 
-----------------

\

-   Hacer : Philio Technology Corporation

-   Apellido : PST02-A Multisensor 4 en 1

-   ID del fabricante : 316

-   Tipo de producto : 2

-   ID del producto : 12

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
> Para poner este módulo en modo de inclusión, presione el botón 3 veces
> botón de inclusión, de acuerdo con su documentación en papel.

\

![inclusion](images/philio.pst02a/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/philio.pst02a/information.jpg)

\

### Órdenes 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.

\

![Órdenes](images/philio.pst02a/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Presencia : es el comando que detectará una detección de presencia

-   Apertura : es el comando que generará una detección
    d'ouverture

-   Temperatura : es el comando que permite subir el
    temperatura

-   Brillo : es el comando que hace posible aumentar el brillo

-   Sabotaje : Este es el comando de sabotaje (se activa en
    arrancando)

-   Batería : es el comando de la batería

\

### Configuracion del modulo 

\

> **Important**
>
> Durante una primera inclusión, siempre active el módulo justo después
> inclusión.

\

Entonces, si desea configurar el módulo de acuerdo con
de su instalación, debe pasar por el botón
"Configuración "del complemento OpenZwave de Jeedom.

\

![Configuracion plugin Zwave](images/plugin/bouton_configuration.jpg)

\

Llegará a esta página (después de hacer clic en la pestaña
configuraciones)

\

![Config1](images/philio.pst02a/config1.jpg)

![Config2](images/philio.pst02a/config2.jpg)

![Config3](images/philio.pst02a/config3.jpg)

\

Detalles del parámetro :

\

-   2: permite ajustar la señal enviada a los módulos en el grupo
    asociación 2

-   3: ajusta la sensibilidad del sensor de presencia (0 :
    discapacitado 99: máxima sensibilidad)

-   4: ajusta el nivel de brillo desde el cual
    la señal definida en el parámetro 2 se enviará a los módulos asociados con el
    grupo 2

-   5: modo de funcionamiento (ver el
    documentación del fabricante) Valor recomendado : 8

-   6: modo de funcionamiento multisensor (ver el
    documentación del fabricante) Valor recomendado : 4

-   7: modo de funcionamiento multisensor personalizado (ver
    en la documentación del fabricante) Valor recomendado : 6 (para
    tener un regreso a OFF de la presencia)

-   8: permite definir la duración en pasos de 8 segundos de redetección
    de movimiento

-   9: permite definir después de cuánto tiempo será la señal OFF
    enviado a módulos asociados con el grupo 2

-   10: le permite definir la duración entre dos informes de batería (uno
    unidad = parámetro 20)

-   11: le permite definir la duración entre dos informes de apertura automática
    (una unidad = parámetro 20)

-   12: le permite definir la duración entre dos automáticos
    brillo (una unidad = parámetro 20) Valor recomendado : 3

-   13: le permite definir la duración entre dos automáticos
    temperatura (una unidad = parámetro 20) Valor recomendado : 2

-   20: duración de un intervalo para los parámetros 10 a 13 Valor
    recomendado : 10

-   21: valor de variación de temperatura en ° F para activar un
    rapport

-   22: valor en% de variación de brillo para activar un
    Informar valor recomendado : 10

\

### Grupos 

\

Este módulo tiene dos grupos de asociación, solo el primero es
indispensable.

\

![Groupe](images/philio.pst02a/groupe.jpg)

\

Bueno saber 
------------

\

### Visual alternativo 

\

![vuewidget](images/philio.pst02a/vuewidget.jpg)

\

Despertador 
------

\

Para activar este módulo, solo hay una forma :

-   suelte el botón de manipulación y presiónelo nuevamente

\

Faq. 
------

\

Este módulo se activa presionando su botón de manipulación.

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
