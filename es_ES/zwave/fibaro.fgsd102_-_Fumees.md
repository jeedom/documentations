Fibaro FGSD-002 "Sensor de humo 2" 
================================

\

-   **El módulo**

\

![module](images/fibaro.fgsd102/module.jpg)

\

-   **El visual de la libertad**

\

![vuedefaut1](images/fibaro.fgsd102/vuedefaut1.jpg)

\

Resumen 
------

\

Con líneas suaves, una superficie pulida y un tamaño pequeño, esto
el detector de humo le permitirá ser alertado de una amenaza con
LED RGB multicolor y una sirena integrada. El gran formato de la
la cuadrícula puede detectar la menor cantidad de humo
obtener una reacción rápida. Por lo tanto, encontrará muy fácilmente su
colocar en su hogar para preservar la seguridad del conjunto
famille.

El detector de humo Fibaro FGSD-002 es un detector de alarma
Humo autónomo (DAAF) compatible con la norma EN 14604:2005. bueno
así de autónomo, también se está comunicando gracias a la tecnología Z-Wave
Plus.

Algunos materiales se queman sin fumar. Por eso los ingenieros de
Fibaro ha decidido incluir protección adicional en sus
detector de humo en forma de sensor de temperatura. Si la
no hay suficiente humo para hacer sonar la alarma,
el dispositivo aún podrá detectar una amenaza al detectar
Un cambio rápido de temperatura causado por un incendio. Cambio
El aumento o aumento rápido de la temperatura a 54 ° C es suficiente
para que el sensor de humo detecte una amenaza y la informe a
habitantes de la casa. Solo este tipo de sensor de humo ofrece
alta eficiencia, independientemente de lo que se queme.

\

Funciones 
---------

\

-   Detector de humo Z-Wave

-   Alimentado por batería

-   Sensibilidad ajustable del sensor (3 niveles)

-   Protección contra manipulaciones

-   Alarma señalizada por sonido, luz LED y señal Z-Wave

-   Detección de incendios midiendo la temperatura del aire

-   Prueba de eficiencia automática, realizada cada 5 segundos

-   Probador de cobertura de red Z-Wave integrado

-   Cumple con la norma EN 14604:2005

-   Compatible con Z-Wave Plus

-   Instalación muy simple: simplemente instálela en un lugar
    o existe riesgo de incendio

\

Características técnicas 
---------------------------

\

-   Tipo de módulo : Transmisor de onda Z

-   Suministro : Batería de litio CR123A de 3V

-   Duración de la batería : 3 años

-   Frecuencia : 868.42 Mhz

-   Distancia de transmisión : 50m de campo libre, 30m en interiores

-   Dimensiones : 65 x 28 mm (diámetro x altura)

-   Temperatura de funcionamiento : 0-55 ° C

-   Humedad de funcionamiento : 0% - 93%

-   Rango de medición de temperatura : -20 a 100 ° C

-   Sensibilidad al humo : 1er nivel - 1.20 +/- 0.5% obs / m; 2do
    nivel - 1.80 +/- 0.5% obs / m; 3er nivel - 2.80 +/- 0.5% obs / m

-   Nivel sonoro: 85 dB a 3 m

-   Precisión de medición : 0.5 ° C (en un rango de 0 a 55 ° C)

-   Normas : EMC 2004/108 / EC y R & TTE 199/5 / WE

-   Certificaciones : EN 14604:2005

\

Datos del módulo 
-----------------

\

-   Hacer : Grupo Fibar

-   Nombre : Sensor de humo Fibaro FGSD-002

-   ID del fabricante : 271

-   Tipo de producto : 3074

-   ID del producto : 4098

\

Configuración 
-------------

\

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[Documentación](https://jeedom.fr/doc/documentation/plugins/openzwave/es_ES/openzwave.html).

\

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón 3 veces
> botón central de inclusión, de acuerdo con su documentación en papel.

\

![inclusion](images/fibaro.fgsd102/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/fibaro.fgsd102/information.jpg)

\

### Comandos 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.

\

![Comandos](images/fibaro.fgsd102/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Humo : Este es el comando de alerta del módulo (para humo,
    calor ...)

-   Temperatura : es el comando de medición de temperatura

-   Sabotaje : este es el comando de sabotaje. Señala la apertura
    del caso

-   Alerta de prueba : Es el comando el que mostrará el hecho de que el módulo
    está en modo de prueba

-   Alerta de calor : es el control el que generará una alerta de calor
    (no confiable todavía)

-   Batería : es el comando de la batería

\

### Configuracion del modulo 

\

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después
> inclusión.

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

![Config1](images/fibaro.fgsd102/config1.jpg)

![Config2](images/fibaro.fgsd102/config2.jpg)

\

Detalles del parámetro :

\

-   Despertador : este es el intervalo de activación del módulo (valor
    recomendado 21600)

-   1: ajusta la sensibilidad de la detección de humo

-   2: le permite elegir qué notificaciones se enviarán a Jeedom
    (consejo : toutes)

-   3: le permite elegir qué notificaciones irán acompañadas de un
    indicación visual

-   4: le permite elegir qué notificaciones irán acompañadas de un
    indicación audible (en todos los casos las detecciones de calor y
    el módulo sonará)

-   10: no cambie esta configuración a menos que sepa lo que
    faites

-   11: idem

-   12: idem

-   13: permite notificar a otros módulos zwave (para desactivar a menos que
    sabes por qué lo activas)

-   20: tiempo entre dos informes de temperatura

-   21: diferencia de temperatura a partir de la cual, incluso si la duración
    desde arriba no se alcanza, la temperatura se enviará a Jeedom

-   30: Temperatura de activación de alarma de calor

-   31: intervalo de informe de temperatura pico

-   32: intervalo de señal si la pérdida de Zwave

\

### Grupos 

\

Para un funcionamiento óptimo de su módulo. Jeedom debe ser
al menos asociado con los grupos 1 4 y 5:

\

![Groupe](images/fibaro.fgsd102/groupe.jpg)

\

Bueno saber 
------------

\

### Específicos 

\

### Visual alternativo 

\

![widget1](images/fibaro.fgsd102/widget1.jpg)

\

Despertador 
------

\

Para activar este módulo, presione el botón central 3 veces

\

Faq. 
------

\

Este módulo se activa presionando 3 veces en su botón de inclusión.

\

Este módulo es un módulo de batería, la nueva configuración será
tomado en cuenta en el próximo despertar.

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
