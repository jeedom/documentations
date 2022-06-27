# Fibaro Dimmer2 - FGD-212

-   **El módulo**

![module](images/fibaro.fgd212/module.jpg)

-   **La imagen de Jeedom**

![vuedefaut1](images/fibaro.fgd212/vuedefaut1.jpg)

Resumen 
------

El micromódulo dimmer FGD-212 le permitirá controlar un
lámpara remota o luz de techo gracias al protocolo Z-Wave mientras
conservando su interruptor existente.

Por lo tanto, podrá operar la lámpara conectada y variar su
intensidad usando el interruptor existente, un transmisor Z-Wave o
directamente desde el botón del micromódulo.

El nuevo dimmer Fibaro FGD-212 está equipado con un algoritmo de
Detección inteligente de la fuente de luz que facilita la
configuración y garantiza una alta compatibilidad de dispositivos. Él
Tiene protección contra sobrecarga y la función de
comienzo suave. Para fuentes de luz no regulables,
solo es posible la función ON/OFF (en conexión de 3 hilos)).

Es compatible con todo tipo de lámparas que admitan regulación o
no. Además de la función de atenuación, este micromódulo también puede
medir el consumo eléctrico de la carga conectada. Los valores
consumo instantáneo (en W) y el consumo eléctrico total
(en kWh) se puede ver.

Fonctions
---------

-   Controla la iluminación de forma remota

-   Se instala detrás de un interruptor existente

-   ON/OFF y función de atenuación

-   Uso en modo de 2 hilos (neutro no necesario))

-   Integra el chip de la serie Z-Wave 500

-   Comunicación un 250 % más rápida en comparación con los dispositivos Z-Wave
    standard

-   Detección automática de carga

-   Protegido contra sobrecarga

-   Compatible con todos los controladores Z-Wave y Z-Wave+

-   Función de medición de energía y potencia activa

-   Funciona con diferentes tipos de interruptores - pulsador,
    alternar, tres vías, etc.

-   Función de arranque suave)

-   Diodo LED de indicación de estado de inclusión, calibración y
    Niveles de MENÚ

-   Probador de rango Z-Wave integrado

-   Detecta automáticamente fallas de cableado, alta temperatura,
    bombilla quemada, subidas de tensión y sobrecargas

-   Opciones de configuración avanzada

-   Pequeño, discreto y estético

-   Facilidad de uso e instalación

Características técnicas
---------------------------

-   Tipo de mod : Receptor de onda Z

-   Alimento : 230 V +/- 10 %, 50 Hz

-   Consumo : 1.3W

-   Alambrado : neutro no es necesario

-   Carga maxima : 50-250 W (carga resistiva) o 0,25-1,1 A
    (carga inductiva)

-   Tipo de lámpara compatible (regulable) : Incandescente, Fluorescente compacta,
    Halógena (230VAC y 12VDC con transformador electrónico), LED

-   Tipo de lámpara compatible (no regulable)) : Fluorescente compacto, LED

-   Frecuencia : 868.42Mhz

-   Intensidad de señal : 1mW

-   Distancia de transmisión : 50m campo abierto, 30m bajo techo

-   Dimensiones : 42.5x38.25x20,3 mm

-   Temperatura de funcionamiento : 0-35°C

-   Temperatura límite : 105°C

-   Estándares : RoHS 2011/65/UE, LVD 2006/95/CE, EMC 2004/108/CE, R&TTE
    1999/5/EC

Datos del módulo
-----------------

-   Marca : Grupo fibar

-   Apellido : FGD212 Atenuador 2

-   Identificación del fabricante : 271

-   Tipo Producto : 258

-   Identificación de producto : 4096

Configuration
-------------

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión se refieren a este
[documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo inclusión hay que pulsar 3 veces en el
> botón de suscripción, según su documentación en papel. Si el
> el módulo aún no está incluido, se incluirá
> automáticamente cuando se enciende.

![inclusion](images/fibaro.fgd212/inclusion.jpg)

> **Consejo**
>
> Si ya has integrado tu módulo en la pared, puedes incluirlo
> haciendo muchos viajes de ida y vuelta en el interruptor o
> muchas pulsaciones si tiene un interruptor de botón.

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/fibaro.fgd212/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con los módulos serán
disponibles.

![Pedidos](images/fibaro.fgd212/commandes.jpg)

Aquí está la lista de comandos :

-   Intensidad : Este es el control que le permite ajustar la intensidad de la
    luz

-   Nosotros : Este es el comando que enciende la luz

-   Apagado : Este es el comando que apaga la luz

-   Estado : Este es el comando que le permite conocer el estado de la
    luz

-   Consumo : Este es el comando que le permite subir el
    consumo de módulos

-   Potencia : Este es el comando que permite aumentar la potencia
    instantánea del módulo

Tenga en cuenta que en el panel de control toda la información se encuentra en el mismo
icone

### Configuración del módulo

Puede hacer la configuración del módulo de acuerdo con su
instalaciones. Para ello, acceda al botón "Configuración" de la
Complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña
configuraciones)

![Config1](images/fibaro.fgd212/config1.jpg)

![Config2](images/fibaro.fgd212/config2.jpg)

![Config3](images/fibaro.fgd212/config3.jpg)

![Config3](images/fibaro.fgd212/config4.jpg)

![Config3](images/fibaro.fgd212/config5.jpg)

Detalles del parámetro :

REDACCIÓN EN CURSO

### Groupes

Este módulo tiene cinco grupos de asociación, solo el primero es
indispensable.

![Groupe](images/fibaro.fgd212/groupe.jpg)

Bueno saber
------------

### Especificidades

> **Fianza**
>
> El parámetro más importante de la configuración es 20. Es
> le permite elegir el tipo de interruptor utilizado. Por defecto el tipo
> se establece en monoestable.

Si desea excluir/incluir el módulo sin desmontar su
interruptor, puede presionar su interruptor varias veces
(o ir y venir en caso de un interruptor biestable)

### Visuales alternativos

![vuewidget](images/fibaro.fgd212/vuewidget.jpg)

Wakeup
------

No hay noción de despertar en este módulo.

Preguntas frecuentes.
------

No. este módulo se puede incluir o excluir pulsando varias veces
en el interruptor.


**@sarakha63**
