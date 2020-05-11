Botón de color inteligente Philio 
=========================

\

-   **El módulo**

\

![Modulo](images/philio.psr04/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/philio.psr04/vuedefaut1.jpg)

\

Resumen 
------

\

Este interruptor de diseño único ofrece varias funciones. Vosotras
puede usarlo para encender, apagar o atenuar la iluminación, ajustar
la posición de sus persianas, ajuste la temperatura del termostato o
úsalo como temporizador.

Una vez incluido en su red Z-Wave, el conmutador Philio PSR04
debe estar asociado con los dispositivos que desea controlar.
Solo puede operar por asociación directa con
dispositivos, y no puede iniciar escenas creadas en su controlador
Automatización del hogar Z-Wave.

Utilizado como unidad, tiene el mismo comportamiento que una unidad
tradicional Gire la perilla hacia la derecha para aumentar el
luz, y a la izquierda para disminuirlo.

Además, puede mover y colocar fácilmente este interruptor
en el lugar que elija gracias a su soporte magnético. Su concepción
resistente al agua permite su instalación en un lugar con alta humedad como
sala de baño.

Utiliza el último chip de la serie Z-Wave 500, proporcionando un aumento
50% de alcance de radio y 250% de velocidad de comunicación más rápida
rápido en comparación con los productos Z-Wave anteriores, así como un plus
bajo consumo de energía que permite una mayor autonomía.

\

Funciones
---------

\

-   Interruptor multifuncional

-   Tecnología Z-Wave +

-   Función de encendido / apagado y atenuación (iluminación o persianas)

-   Función de temporizador integrado

-   Etanche

-   Se adapta a cualquier estilo de decoración

-   Batería recargable

-   Muy bajo consumo de energía

-   Batería de larga duración (6 meses por carga)

-   Soporte magnético

-   LED de indicación RGBW

-   Fácil de instalar

\

Características técnicas 
---------------------------

\

-   Suministro: Batería de polímero de litio 3.7V, 220mA v
    la batería : 6 meses por 2 horas de carga

-   Consumo en espera : 18µA

-   Consumo en funcionamiento : 45mA

-   Frecuencia : 868.42 MHz

-   Distancia de transmisión : 100m en exteriores, 40m en interiores

-   Dimensiones:

Apoyo: Botón 71,16 x 10,94 mm (diámetro x grosor) : 59,99 x 14,89
mm (diámetro x grosor) Soporte + Botón : 71,16 x 17,22 mm (diámetro
x espesor) \* Certificaciones :

EN 301 489-1, EN 301 489-3 EN 300 220-1, EN 300 220-2 EN62479, EN60950
FCC Parte 15 B, FCC Parte 15 C

\

Datos del módulo 
-----------------

\

-   Hacer: Philio

-   Nombre: Botón de color inteligente PSR04

-   ID del fabricante : 316

-   Tipo de producto : 9

-   ID del producto : 34

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
> Para poner este módulo en modo de inclusión, colóquelo en posición
> bajo (inclusión) y presione el botón de acuerdo con su
> documentación en papel.

\

![inclusion](images/philio.psr04/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/philio.psr04/information.jpg)

\

### Comandos

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.

\

![Comandos](images/philio.psr04/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Estado: es el comando que moverá la posición del botón de 0 a
    100%

-   Batería: Este es el comando que informa el estado de la batería del
    module

\

### Configuracion del modulo 

\

> **Important**
>
> Durante una primera inclusión, siempre active el módulo justo después
>inclusión

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

![Config1](images/philio.psr04/config1.jpg)

\

Detalles del parámetro :

\

-   1: define el límite más bajo (posición completamente a la izquierda)

-   2 : define el terminal más alto (posición completamente a la derecha)

-   10 : intervalo de tiempo de ascenso de la batería

-   25 : permite definir si el módulo envía su posición
    automáticamente después de la rotación (1s de retraso) o si es necesario presionar
    en el botón para validar el envío

-   26 : activa el envío de escena o no al presionar el botón central
    (parámetro no tomado en cuenta en Jeedom)

\

### Grupos

\

Este módulo tiene dos grupos de asociación, el primero es el único
indispensable. El segundo permite subir la posición a Jeedom

\

![Groupe](images/philio.psr04/groupe.jpg)

\

Bueno saber 
------------

\

### Específicos 

Para usar este módulo como control remoto, proceda de la siguiente manera :

-   Agregue el controlador en el grupo 2

De hecho, este tipo de módulo no está hecho para interactuar directamente
con una caja pero directamente con otros módulos. Sin embargo en
agregando Jeedom al grupo 2, esto permite recibir la posición del
botón y, por tanto, úselo para controlar un escenario (establezca un
volumen por ejemplo)

Despertador
------

\

Para activar este módulo, solo hay una forma :

-   coloque el módulo en la posición baja y presione el botón

\

Faq. 
------

\

\

Este módulo es un módulo de batería, la nueva configuración no será
tenga en cuenta que si despierta el módulo.

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
