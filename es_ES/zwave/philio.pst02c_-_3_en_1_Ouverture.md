# 

**El módulo**

![module](images/philio.pst02c/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/philio.pst02c/vuedefaut1.jpg)

## Resumen

 : detección de apertura, sensor de temperatura y detector de luminosidad. Está formado por dos partes : un detector y un imán. Están diseñadas para colocarse en una puerta o ventana con el imán fijado en la parte que abre y el detector en la parte fija.

Al abrir la puerta o la ventana, el imán se alejará del detector, lo que activará el detector que enviará una señal de alarma Z-Wave, si el sistema está armado (esta señal puede ser operada por una sirena o por una caja de automatización del hogar para ejemplo). El sensor también se puede utilizar para el control automático de la iluminación, dependiendo del nivel de luz. Por ejemplo, el sensor enviará una señal al interruptor Z-Wave para encender la luz cuando la puerta se abra y la habitación esté oscura.

El detector también aumentará el brillo y la temperatura, ya sea en caso de un cambio significativo, y cada vez que se detecte la apertura/cierre.

Se requiere un controlador Z-Wave (control remoto, dongle, etc.) para integrar este detector en su red si ya tiene una red existente.

## Fonctions

-   Detector 3 en 1: Apertura, temperatura, luz
-   )
-   
-   Rango de antena optimizado
-   
-   Botón para incluir/excluir el detector
-   Autoprotection
-   Indicación de batería baja
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de mod : Transmisor de onda Z
-   Alimento : 
-    : )
-   Frecuencia : 868.42 MHz
-   Distancia de transmisión : 30m en interiores
-    : -
-    : 
-   Dimensiones :
  -    : 
  -    : 
-    : 52g
-   Temperatura de funcionamiento : -
-   Humedad de funcionamiento : 
-    : 
-    : 

## Datos del módulo

-   Marca : 
-   Apellido : 
-   Identificación del fabricante : 316
-   Tipo Producto : 2
-   Identificación de producto : 14

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/philio.pst02c/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/philio.pst02c/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/philio.pst02c/commandes.jpg)

Aquí está la lista de comandos :

-   Apertura : este es el comando que reportará una detección de apertura
-   La temperatura : este es el comando que te permite subir la temperatura
-   Brillo : este es el comando que te permite aumentar el brillo
-   Batería : este es el comando de la bateria

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/philio.pst02c/config1.jpg)

![Config2](images/philio.pst02c/config2.jpg)

![Config3](images/philio.pst02c/config3.jpg)

Detalles del parámetro :

-   2: ajusta la señal enviada a los módulos en el grupo de asociación 2
-   4: permite ajustar el nivel de brillo a partir del cual se enviará la señal definida en el parámetro 2 a los módulos asociados al grupo 2
-   5:  : 8
-   6:  : 4
-   7:  : )
-   9: permite definir después de cuánto tiempo se enviará la señal de APAGADO a los módulos asociados al grupo 2
-   10: le permite definir la duración entre dos informes de batería (una unidad = parámetro 20)
-   11: le permite definir la duración entre dos relaciones de apertura automática (una unidad = parámetro 20)
-   12:  : 3
-   13:  : 2
-   20:  : 10
-   21: valor de variación en °F de la temperatura para activar un informe
-   22:  : 10

### Groupes

Este módulo tiene dos grupos de asociación, solo el primero es imprescindible.

![Groupe](images/philio.pst02c/groupe.jpg)

## Wakeup

Para activar este módulo solo hay una forma de proceder :

-   

## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
