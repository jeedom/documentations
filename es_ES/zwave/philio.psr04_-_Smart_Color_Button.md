# Botón de color inteligente Philio

**El módulo**

![module](images/philio.psr04/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/philio.psr04/vuedefaut1.jpg)

## Resumen

Este interruptor de diseño exclusivo ofrece varias funciones. Puedes usarlo para encender, apagar o atenuar la iluminación, ajustar la posición de tus persianas, programar la temperatura del termostato o usarlo como temporizador.

Una vez incluido en su red Z-Wave, el conmutador Philio PSR04 deberá vincularse con los dispositivos que desea controlar. Solo puede funcionar por asociación directa con periféricos y no puede iniciar escenas creadas en su controlador domótico Z-Wave.

Utilizado como dimmer, tiene el mismo comportamiento que un dimmer tradicional. Gire la perilla hacia la derecha para aumentar la luz y hacia la izquierda para disminuirla.

Además, puedes mover y posicionar fácilmente este interruptor en el lugar que elijas gracias a su soporte magnético. Su diseño impermeable permite instalarlo en un lugar con mucha humedad como un baño.

Utiliza el último chip de la serie Z-Wave 500, lo que proporciona un aumento del 50 % en el alcance de la radio y una velocidad de comunicación un 250 % más rápida en comparación con los productos Z-Wave anteriores, así como un menor consumo de energía, lo que permite una mayor autonomía.

## Fonctions

-   Interruptor multifunción
-   Tecnología Z-Wave+
-   Función ON/OFF y regulación (iluminación o persianas))
-   Función de temporizador integrada
-   Etanche
-   Se adapta a cualquier estilo de decoración
-   Batería recargable
-   Muy bajo consumo de energía
-   Batería de larga duración (6 meses por carga))
-   Soporte magnético
-   Indicadores LED RGBW
-   Fácil de instalar

## Características técnicas

-   Alimento : Batería de polímero de litio 3.Duración de la batería de 7 V, 220 mA : 6 meses por 2h de carga
-   Consumo en espera : 18µA
-   Consumo en funcionamiento : 45mA
-   Frecuencia : 868.42 MHz
-   Distancia de transmisión : 100m al aire libre, 40m en el interior
-   Dimensiones : Apoyo : 71,16 x 10,94 mm (diámetro x espesor) Botón : 59,99 x 14,89 mm (diámetro x grosor) Soporte + Botón : 71,16 x 17,22 mm (diámetro x grosor) Certificaciones : EN 301 489-1, EN 301 489-3 EN 300 220-1, EN 300 220-2 EN62479, EN60950 FCC Parte 15 B, FCC Parte 15 C

## Datos del módulo

-   Marca : Philio
-   Apellido : Botón de color inteligente PSR04
-   Identificación del fabricante : 316
-   Tipo Producto : 9
-   Identificación de producto : 34

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo inclusión, se debe poner en posición baja (inclusión) y pulsar el botón, de acuerdo con su documentación en papel.

![inclusion](images/philio.psr04/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/philio.psr04/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/philio.psr04/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : este es el comando que elevará la posición del botón de 0 a 100%
-   Batería : este es el comando que informa el estado de la batería del módulo

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/philio.psr04/config1.jpg)

Detalles del parámetro :

-   1: define el límite inferior (posición más a la izquierda)
-   2 : define el límite superior (posición completamente a la derecha)
-   10 : intervalo de tiempo de recuperación de la batería
-   25 : le permite definir si el módulo envía su posición automáticamente después de la rotación (retraso de 1 s) o si tiene que presionar el botón para validar el envío
-   26 : activa el envío de escena o no al pulsar el botón central (parámetro no tenido en cuenta en Jeedom)

### Groupes

Este módulo tiene dos grupos de asociación, el primero es el único esencial. El segundo permite rastrear la posición hasta Jeedom

![Groupe](images/philio.psr04/groupe.jpg)

## Bueno saber

### Especificidades

Para usar este módulo como control remoto, proceda de la siguiente manera :

-   Agregar el controlador en el grupo 2

De hecho, este tipo de módulo no está hecho para interactuar directamente con una caja, sino directamente con otros módulos. Sin embargo, al agregar Jeedom al grupo 2, esto hace posible recibir la posición del botón y, por lo tanto, usarlo para controlar un escenario (ajustar un volumen, por ejemplo))

## Wakeup

Para activar este módulo solo hay una forma de proceder :

-   coloque el módulo en la posición baja y presione el botón

## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
