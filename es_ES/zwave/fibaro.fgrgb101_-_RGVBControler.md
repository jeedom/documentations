# Controlador Fibaro RGB - FGRGB-101

-   **El módulo**

![module](images/fibaro.fgrgb101/module.jpg)

-   **La imagen de Jeedom**

![Visuel jeedom](images/fibaro.fgrgb101/Visuel_jeedom.png)

## Resumen

El micromódulo Z-Wave Fibaro FGRGB-101 se puede utilizar para controlar iluminación de bajo voltaje de 12/24V (halógena o LED), una tira de LED RGB o RGB+blanco o incluso para conectar sondas analógicas utilizando el 0-10V.

-   4 entradas analógicas de 0 a 10V para conectar a multitud de sensores, potenciómetros, pulsadores (monoestables) o interruptores (biestables) compatibles).
-   4 salidas de dimmer (PWM) para controlar :
-   \* es decir, 1 canal LED RGB + blanco (RGBW) de 12/24 V
-   \* o 4 canales de LEDs blancos 12/24V
-   \* o 4 canales de lámparas halógenas 12/24V (144W 12V / 288W 24V max.)
-   \* o ventiladores 12/24V.
-   Requiere una fuente de alimentación separada de 12/24 V.
-   Medición instantánea o acumulada de consumos globales o de canales.
-   Función de repetidor (router) para ampliar la red Z-Wave.

## Fonctions

-   Control de iluminación de bajo voltaje 12/24V (halógeno o LED))
-   Se instala detrás de un interruptor existente
-   Simulación de luz previamente programada
-   ON/OFF y función de atenuación
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Alimento : 12 V o 24 V CC
-   Potencia máxima de salida :
-   \* 12A en total (suma de todos los canales),
-   \* 6A máx. por canal
-   Máxima potencia con lámparas halógenas :
-   \* 12 V - 144 W en total (todos los canales),
-   \* 24 V - 288 W en total (todos los canales)
-   Frecuencia de modulación PWM : 244Hz
-   Consumo : 0,3W
-   Protocolo de radio : Z-Wave a 868,4 MHz (EE. UU)
-   Potencia de transmisión Z-Wave : 1mW
-   Temperatura de funcionamiento : 0 - 40C
-   Para instalación en cajas : Ø≥50mm
-   Dimensiones : 42x37x17mm
-   Estándares Europeos : EMC 2004/108/EC R&TTE 199/5/WE
-   Este módulo requiere un controlador Z-Wave para funcionar.

## Datos del módulo

-   Marca : Grupo fibar
-   Apellido : Fibaro FGRGB-101 RGBW
-   Identificación del fabricante : 271
-   Tipo Producto : 2304
-   Identificación de producto : 4096

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![vue bp inclusion](images/fibaro.fgrgb101/vue_bp_inclusion.png)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/fibaro.fgrgb101/configuration.png)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/fibaro.fgrgb101/commande_1.png)

![Pedidos](images/fibaro.fgrgb101/commande_2.png)

Aquí está la lista de comandos :

-   Color : Este es el comando que le permite configurar el código de color para mostrar
-   Chimenea : Este es el comando que le permite simular una atmósfera de chimenea
-   Tormenta : Este es el comando que te permite simular una atmósfera de Tormenta
-   Alba : Este es el comando que le permite simular una atmósfera aude (amanecer progresivo)
-   Desvanecimiento : Este es el comando que simula todo el espectro de colores
-   RBB : Este es el comando que simula un ambiente policiaco
-   Frio blanco : Este es el comando que le permite simular tener un color blanco frío típico, si la banda de color lo permite. (este comando no es visible por defecto)
-   Blanco caliente : Este es el comando que le permite simular tener un color blanco cálido típico, si la banda de color lo permite. (este comando no es visible por defecto)
-   Nosotros : Este es el comando que le permite encender la pancarta en el último color elegido antes
-   Apagado : Este es el comando que te permite apagar el banner
-   Intensidad : Este es el control que le permite ajustar la intensidad de la luz

Tenga en cuenta que en el panel de control toda la información se encuentra en el mismo icono

### Configuración del módulo

Puede configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/fibaro.fgrgb101/parametres.png)

Detalles del parámetro :

Consulte la captura de pantalla anterior, los parámetros se traducen al francés.

### Groupes

Este módulo tiene cinco grupos de asociación, solo el quinto es imprescindible.

![Groupe](images/fibaro.fgrgb101/groupes.png)

## Bueno saber

### Especificidades

Uso de sensores 0-10V.

> **Fianza**
>
> Por ahora la configuración por defecto de jeedom no lo permite, pero se puede considerar una configuración específica.

### Visuales alternativos

![Visuales alternativos](images/fibaro.fgrgb101/Visuel_alternatif.png)

## Wakeup

No hay noción de despertar en este módulo.
