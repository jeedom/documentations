# Detector de apertura Fibaro - FGK-101

**El módulo**

![module](images/fibaro.fgk101-DS18B20/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/fibaro.fgk101-DS18B20/vuedefaut1.jpg)

# Resumen

Este detector compatible con Z-Wave alimentado por batería cuenta con un sensor de láminas, un interruptor de proximidad operado magnéticamente, que detecta la apertura de una puerta o ventana cuando los dos elementos están muy separados.

El dispositivo consta de una parte con un imán (la parte móvil), fijada en la puerta o ventana, y la unidad principal colocada en la parte fija de la ventana/puerta con tornillos o adhesivo. Cuando las dos partes ya no están una frente a la otra, se envía automáticamente una señal de radio Z-Wave.

Además, este detector tiene una entrada analógica para conectar una sonda de temperatura 1-Wire DS18B20. Este detector también tiene una entrada cableada, por lo que puede usarse como un transmisor universal : deje de lado su contacto magnético, y conecte sus entradas de tornillo a cualquier detector (normalmente cerrado) de su elección como detector de humo, gas, monóxido de carbono, etc.

Se requiere un controlador Z-Wave (control remoto, dongle, etc.) para integrar este detector en su red si ya tiene una red existente.

## Fonctions

-   Detector de apertura
-   Botón para incluir/excluir el detector
-   Detección de batería baja
-   Protección contra manipulación
-   1 entrada cableada libre de potencial
-   1 entrada analógica 1-Wire (para conectar un sensor de temperatura DS18B20)
-   Dimensiones muy pequeñas y reducidas
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de mod : Transmisor de onda Z
-   Color : Blanco (FGK-101/102/103/104/105/106/107 según color)
-   Alimento : Batería ER14250 (1/2AA) 3.6V
-   Frecuencia : 868.42Mhz
-   Distancia de transmisión : 50m campo abierto, 30m bajo techo
-   Dimensions: 76x17x19mm
-   Temperatura de funcionamiento : 0-40°C

## Datos del módulo

-   Marca : Grupo fibar
-   Apellido : Fibaro FGK-101 con sonda de temperatura (DS18B20)
-   Identificación del fabricante : 271
-   Tipo Producto : 1792
-   Identificación de producto : 4096

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/fibaro.fgk101-DS18B20/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/fibaro.fgk101-DS18B20/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/fibaro.fgk101-DS18B20/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : este es el comando que informará el estado abierto o cerrado del módulo
-   Batería : este es el comando que le permite informar el estado de la batería

Puede ocultar o mostrar estos comandos como desee.

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/fibaro.fgk101-DS18B20/config1.jpg)

![Config2](images/fibaro.fgk101-DS18B20/config2.jpg)

Detalles del parámetro :

-   Despierta : este es el intervalo de activación del módulo (valor recomendado 7200)
-   1: le permite configurar el retraso para cancelar la alarma de la entrada IN (contacto seco)
-   2: le permite elegir si el LED azul debe parpadear al abrir y cerrar la puerta, por ejemplo
-   3: se utiliza para definir el tipo de contacto conectado al bloque de terminales (IN)
-   5: No se recomienda cambiar esta configuración a menos que sepa por qué (establece el tipo de señal enviada al grupo de asociación 1)
-   7: valor enviado al grupo de asociación 1
-   9: permite configurar el envío de la señal de cancelación entre la entrada IN y el grupo de asociación 1
-   12: le permite ajustar la sensibilidad a los cambios de temperatura (si se conecta una sonda de 1 hilo al módulo)
-   13: le permite configurar el envío en modo de transmisión de las señales de temperatura y sabotaje
-   14: le permite activar la función de activación de escena

### Groupes

Este módulo tiene tres grupos de asociación, solo el tercero es imprescindible.

![Groupe](images/fibaro.fgk101-DS18B20/groupe.jpg)

## Bueno saber

### Especificidades

> **Consejo**
>
> Este módulo es muy caprichoso en las activaciones y requiere una proximidad muy cercana al controlador cuando está incluido

### Visuales alternativos

![vuewidget](images/fibaro.fgk101-DS18B20/vuewidget.jpg)

## Wakeup

Para activar este módulo solo hay una forma de proceder :

-   presione el botón de inclusión 3/4 veces. Puede ser necesario hacer esto varias veces seguidas (2 o 3)

## Preguntas frecuentes.

Este módulo se despierta presionando 3 veces en uno de los botones de sabotaje. Pero el otro botón de sabotaje debe ser presionado.

Este módulo tiene un rango muy bajo. Es recomendable hacer la inclusión lo más cerca posible de su caja.

Este módulo es un módulo alimentado por batería, la nueva configuración se tendrá en cuenta en la próxima activación.

## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
