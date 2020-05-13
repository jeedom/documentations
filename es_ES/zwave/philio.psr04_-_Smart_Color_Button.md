# Botón de color inteligente Philio

**El módulo**

![module](images/philio.psr04/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/philio.psr04/vuedefaut1.jpg)

Resumen
------

Este interruptor de diseño único ofrece varias funciones. Puede usarlo para encender, apagar o atenuar las luces, ajustar la posición de sus persianas, ajustar la temperatura del termostato o usarlo como temporizador.

Una vez incluido en su red Z-Wave, el conmutador PSR04 de Philio debe estar asociado con los dispositivos que desea controlar. Solo puede funcionar por asociación directa con periféricos, y no puede iniciar escenas creadas en su controlador de automatización del hogar Z-Wave.

Utilizado como un atenuador, tiene el mismo comportamiento que un atenuador tradicional. Gire la perilla hacia la derecha para aumentar la luz y hacia la izquierda para disminuirla.

Además, puede mover y colocar fácilmente este interruptor en la ubicación que elija gracias a su soporte magnético. Su diseño resistente al agua permite su instalación en un lugar con alta humedad, como un baño.

Utiliza el último chip de la serie Z-Wave 500, que ofrece un aumento del 50% en el alcance de la radio y una velocidad de comunicación 250% más rápida en comparación con los productos Z-Wave anteriores, así como un menor consumo de energía. permitiendo una mayor autonomía.

Fonctions
---------

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

Características técnicas
---------------------------

-   Suministro : Batería de polímero de litio 3.7V, 220mA v Duración de la batería : 6 meses por 2 horas de carga
-   Consumo en espera : 18µA
-   Consumo en funcionamiento : 45mA
-   Frecuencia : 868.42 MHz
-   Distancia de transmisión : 100m en exteriores, 40m en interiores
-   Dimensiones : Apoyo : Botón 71,16 x 10,94 mm (diámetro x grosor) : 59.99 x 14.89 mm (diámetro x grosor) Soporte + botón : Certificaciones de 71.16 x 17.22 mm (grosor diametrex) : EN 301 489-1, EN 301 489-3 EN 300 220-1, EN 300 220-2 EN62479, EN60950 FCC Parte 15 B, FCC Parte 15 C

Datos del módulo
-----------------

-   Hacer : Philio
-   Nombre : Botón de color inteligente PSR04
-   ID del fabricante : 316
-   Tipo de producto : 9
-   ID del producto : 34

Configuration
-------------

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, colóquelo en la posición baja (inclusión) y presione el botón, de acuerdo con su documentación en papel.

![inclusion](images/philio.psr04/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/philio.psr04/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/philio.psr04/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : es el comando que elevará la posición del botón de 0 a 100%
-   Batería : es el comando que informa el estado de la batería del módulo

### Configuracion del modulo

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/philio.psr04/config1.jpg)

Detalles del parámetro :

-   1: define el límite más bajo (posición completamente a la izquierda)
-   2 : define el terminal más alto (posición completamente a la derecha)
-   10 : intervalo de tiempo de ascenso de la batería
-   25 : permite definir si el módulo envía su posición automáticamente después de la rotación (1s de retraso) o si es necesario presionar el botón para validar el envío
-   26 : activa el envío de escena o no al presionar el botón central (parámetro no tomado en cuenta en Jeedom)

### Groupes

Este módulo tiene dos grupos de asociación, el primero es el único esencial. El segundo permite subir la posición a Jeedom

![Groupe](images/philio.psr04/groupe.jpg)

Bueno saber
------------

### Específicos

Para usar este módulo como control remoto, proceda de la siguiente manera :

-   Agregue el controlador en el grupo 2

De hecho, este tipo de módulo no está hecho para interactuar directamente con una caja, sino directamente con otros módulos. Sin embargo, al agregar Jeedom al grupo 2, esto le permite recibir la posición del botón y, por lo tanto, usarlo para controlar un escenario (por ejemplo, ajustar un volumen)

Wakeup
------

Para activar este módulo, solo hay una forma :

-   coloque el módulo en la posición baja y presione el botón

Nota importante
---------------

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio en la configuración, después de un cambio en la activación, después de un cambio en los grupos de asociación
