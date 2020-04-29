Dimmer Fibaro - FGD-211 
=======================

\

-   **El módulo**

\

![module](images/fibaro.fgd211/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/fibaro.fgd211/vuedefaut1.jpg)

\

Resumen 
------

\

El módulo de atenuación FGD-211 le permitirá controlar un
lámpara o lámpara de techo de forma remota gracias al protocolo Z-Wave mientras
manteniendo su interruptor existente.

Por lo tanto, podrá activar la lámpara conectada y variar su
intensidad usando el interruptor existente, un transmisor Z-Wave o
directamente desde el botón en el micromódulo. El es
compatible con cualquier tipo de variación de soporte de lámpara
(incandescencia, fluo-compacto, LED, ...). El módulo dimmer Fibaro
es un concentrado de tecnología, detecta automáticamente el tipo de
carga conectada y está protegida contra sobretensión.

Para bombillas fluorescentes que no admiten variación, el
El módulo actúa automáticamente como un módulo de conmutación (ON / OFF
uniquement).

Se puede utilizar en modo de 2 hilos (sin neutro), reemplazando un
interruptor existente, o tres cables con fuente de alimentación convencional de
módulo (Fase + Neutro).

Para lámparas de muy bajo consumo (lámpara LED de
ejemplo), puede usar la carga FGB-001 (bypass) que permite
correcto funcionamiento del módulo. Un controlador Z-Wave (control remoto,
dongle ...) es necesario para integrar este detector en su red
si ya tienes una red existente. Cada módulo Z-Wave funciona
como repetidor inalámbrico con los otros módulos, para asegurar
cobertura total de su hogar.

\

Funciones 
---------

\

-   Control remoto de iluminación

-   Se instala detrás de un interruptor existente

-   ON / OFF y función de variación

-   Usar en modo de 2 hilos (no es necesario neutral)

-   Detección automática de carga

-   Protegido contra sobrecargas

-   Pequeño, discreto y estético.

-   Facilidad de uso e instalación.

\

Características técnicas 
---------------------------

\

-   Puntao de módulo : Receptor Z-Wave

-   Suministro : 230V, 50 Hz

-   Cableado : neutral no requerido

-   Carga máxima : 25-500W (carga resistiva) o 1.5A (carga inductiva)

-   Puntao de lámpara compatible (regulable) : Incandescente, Fluocompacto,
    Halógeno (230VAC y 12VDC con transformador electrónico), LED

-   Puntao de lámpara compatible (no regulable) : Fluorescente compacta, LED

-   Fusible : 2.5A

-   Frecuencia : 868.42 Mhz

-   Distancia de transmisión : 50m de campo libre, 30m en interiores

-   Dimensiones: 15 x 42 x 36 mm

-   Temperatura de funcionamiento : 0-40 ° C

-   Temperatura límite : 105 ° C

-   Normas : EN 55015 y EN 60669-2-1

\

Datos del módulo 
-----------------

\

-   Hacer : Grupo Fibar

-   Nombrebre : Fibaro FGMS-001 \ [Sensor de movimiento \]

-   ID del fabricante : 271

-   Puntao de producto : 256

-   ID del producto : 4106

\

Configuración 
-------------

\

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[Documentación](https://jeedom.fr/doc/documentation/plugins/openzwave/es_ES/openzwave.html).

\

> **Important**
>
> Para poner este módulo en modo de inclusión, presione el botón 3 veces
> botón de inclusión, de acuerdo con su documentación en papel.

\

![inclusion](images/fibaro.fgd211/inclusion.jpg)

\

> **Tip**
>
> Si ya ha integrado su módulo en la pared, puede incluirlo
> haciendo muchos de ida y vuelta en el interruptor o muchos
> presione si tiene un interruptor de botón.

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/fibaro.fgd211/information.jpg)

\

### Comandos 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.

\

![Comandos](images/fibaro.fgd211/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Intensidad : Este es el comando que le permite ajustar la intensidad de la
    Iluminación

-   Uno : Es el control que enciende la luz.

-   Apagado : Es el comando que apaga la luz.

-   Estado : Es el comando que permite conocer el estado de la
    Iluminación

Tenga en cuenta que en el tablero de instrumentos toda la información se encuentra en el mismo
icone

\

### Configuracion del modulo 

\

Puede configurar el módulo de acuerdo con su
instalación Esto requiere pasar por el botón "Configuración" del
Complemento Jeedom OpenZwave.

\

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

\

Llegará a esta página (después de hacer clic en la pestaña
Configuraciones)

\

![Config1](images/fibaro.fgd211/config1.jpg)

![Config2](images/fibaro.fgd211/config2.jpg)

![Config3](images/fibaro.fgd211/config3.jpg)

\

Detalles del parámetro :

\

-   1: TODAS las funciones ON / ALL OFF : utilizado solo si ha asociado el
    FGD-211 a otro módulo

-   6: digamos cómo se envía la información al grupo
    asociación 1

-   7: permite verificar o no el estado del módulo asociado antes
    para enviar un pedido

-   8: permite definir el porcentaje de variación (auto)

-   9: duración de la variación entre los dos extremos (manual)

-   10: duración de la variación entre los dos extremos (auto)

-   11: permite definir el porcentaje de variación (manual)

-   12: permite definir el nivel máximo autorizado

-   13: permite definir el nivel mínimo autorizado

-   14: AJUSTE IMPORTANTE : permite elegir entre cambiar
    BISTABLE o MONOSTABLE (pulsador)

-   15: activa la opción que permite establecer el brillo al máximo
    en doble pulsación (o volver a biestable)

-   16: opción para activar la memorización del último estado

-   17: le permite elegir entre el modo de ida y vuelta y
    interruptor de control remoto

-   18: permite sincronizar el nivel de variación con otros
    unidades asociadas

-   19: modo de funcionamiento del interruptor biestable (marcha atrás
    o no)

-   20: permite ajustar el nivel mínimo para bombillas LEDS
    regulable por ejemplo

-   30: permite definir el modo de funcionamiento del módulo en caso de
    recepción de una señal de alarma de difusión

-   39: duración de la alarma definida en el parámetro 30

-   41: permite activar o no la función de activación de escena

\

### Grupos 

\

Este módulo tiene tres grupos de asociación, solo el tercero es
indispensable.

\

![Groupe](images/fibaro.fgd211/groupe.jpg)

\

Bueno saber 
------------

\

### Específicos 

\

> **Caution**
>
> El parámetro más importante de la configuración es 14. Es
> permite elegir el tipo de interruptor utilizado. Puntao predeterminado
> se establece en monoestable.

\

Si desea excluir / incluir el módulo sin desmontar su
interruptor puede presionar su interruptor varias veces
(o ir y venir en caso de un interruptor biestable)

\

### Visual alternativo 

\

![vuewidget](images/fibaro.fgd211/vuewidget.jpg)

\

Despertador 
------

\

No hay noción de activación en este módulo.

\

Faq. 
------

\

No este módulo se puede incluir o excluir presionando varias veces
en el interruptor.

\
**@sarakha63**
