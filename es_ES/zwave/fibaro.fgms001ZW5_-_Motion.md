# Sensor de movimiento Fibaro - FGMS-001

**El módulo**

![module](images/fibaro.fgms001zw5/module.jpg)

 **La imagen de Jeedom**

![vuedefaut1](images/fibaro.fgms001zw5/vuedefaut1.jpg)

## Resumen

El detector de movimiento Fibaro es un detector multifunción Z-Wave. Además de la detección de movimiento, este dispositivo mide la temperatura y la intensidad de la luz. Este detector también incluye un acelerómetro integrado para detectar cualquier intento de manipulación del dispositivo.

El sensor de movimiento Fibaro funciona con batería y está diseñado para instalarse rápida y fácilmente en cualquier superficie. El indicador LED señala el movimiento, el nivel de temperatura, el modo de funcionamiento y se puede usar para ver si el dispositivo está en la red Z-Wave.

El sensor de movimiento se puede utilizar para iluminar escenas y sistemas de vigilancia y/o seguridad.

## Fonctions

-   Detector de movimiento inalámbrico
-   Detecta movimiento usando un sensor infrarrojo pasivo
-   Medición de temperatura
-   Medición de la intensidad de la luz
-   Medición de intensidad sísmica
-   Protección contra robo y hurto
-   Alertas de movimiento y temperatura indicadas por LED parpadeante
-   Botón para incluir/excluir el detector
-   Detección de batería baja
-   Dimensiones muy pequeñas y reducidas
-   Fácil de instalar en una pared o cualquier otra superficie

## Características técnicas

-   Tipo de mod : Transmisor Z-Wave+
-   Alimento : Batería CR123A 3.6VDC
-   Altura recomendada para la instalación : 2,4m
-   Rango de temperatura medido : -20°C a 100°C
-   Precisión de la medición : 0,5°C
-   Rango de medición de brillo : 0-32000LUX
-   Frecuencia : 868.42Mhz
-   Distancia de transmisión : 50m campo abierto, 30m bajo techo
-   Dimensions: 4,4 cm de diámetro
-   Temperatura de funcionamiento : 0-40°C
-   Certificados : LVD 2006/95/WE EMC 2004/108/WE R&TTE 1999/5/WE RoHS II

## Datos del módulo

-   Marca : Grupo fibar
-   Apellido : Fibaro FGMS-001-ZW5 \[Sensor de movimiento\]
-   Identificación del fabricante : 271
-   Tipo Producto : 2048
-   Identificación de producto : 4097

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/fibaro.fgms001zw5/inclusion.jpg)

Una vez incluido, debe aplicar la configuración de zwave+ a través del menú desplegable, debe obtener esto :

![Plugin Zwave](images/fibaro.fgms001zw5/information.jpg)

### Commandes

Tienes que hacer clic una vez en la lupa para recuperar los comandos del módulo. Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/fibaro.fgms001zw5/commandes.jpg)

Aquí está la lista de comandos :

-   Presencia : este es el comando que reportará una detección de presencia
-   La temperatura : este es el comando que te permite subir la temperatura
-   Brillo : este es el comando que te permite aumentar el brillo
-   Sísmico : es el comando que permite elevar la intensidad sísmica
-   Sabotaje : este es el comando de sabotaje (se activa en caso de vibración)
-   Batería : este es el comando de la bateria

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/fibaro.fgms001zw5/config1.jpg)

![Config2](images/fibaro.fgms001zw5/config2.jpg)

![Config3](images/fibaro.fgms001zw5/config3.jpg)

![Config3](images/fibaro.fgms001zw5/config4.jpg)

Detalles del parámetro :

-   Despierta : este es el intervalo de activación del módulo (valor recomendado 7200)
-   1: ajusta la sensibilidad del sensor de presencia
-   2: permite ajustar la inercia del sensor de presencia
-   3: no se recomienda cambiar este parámetro
-   4: no se recomienda cambiar este parámetro
-   6: tiempo después del cual el sensor enviará la señal "no más movimiento" (valor recomendado 30)
-   8: permite activar el modo día/noche o ambos (valor recomendado : Aún en activo)
-   9: le permite establecer el umbral para cambiar al modo nocturno (útil si ha cambiado el parámetro 8)
-   12: modificar solo si sabe por qué lo está haciendo (asociación con un módulo, por ejemplo))
-   14: idem
-   16: idem
-   20: sensibilidad del sensor giroscópico (valor recomendado 15)
-   22: tiempo después del cual el sensor enviará la señal "no más sabotaje" (valor recomendado 30)
-   24: permite decir cómo se notifica el sabotaje (IMPORTANTE : valor recomendado : Tamper del sensor notificado en la clase de comando SensorAlarm/ La cancelación se notifica después del tiempo definido en el parámetro 22 )
-   26: editar solo si sabes por qué lo estás haciendo
-   40: permite decir cuanto se debe modificar el valor de luminosidad para ser enviado (valor recomendado 50)
-   42: le permite dar una duración mínima entre dos transmisiones sucesivas incluso si la luminosidad no ha cambiado (valor recomendado 3600)
-   60: le permite decir cuánto se debe modificar el valor de la temperatura para ser enviado (valor recomendado 2, es decir, 0.2 grados)
-   62: da la frecuencia de las mediciones de temperatura (valor recomendado 900)
-   64: le permite dar una duración mínima entre dos transmisiones sucesivas incluso si la temperatura no ha cambiado (valor recomendado 2700)
-   66: le permite ajustar la temperatura
-   80: permite elegir el color del LED cuando hay detección de movimiento (ver desactivarlo)
-   81: le permite ajustar el brillo del led
-   82: permite programar el umbral mínimo de luminosidad para programar el led al 1% (vinculado al parámetro 81)
-   83: permite programar el umbral de luminosidad máxima para poner el led al 100% (vinculado al parámetro 81)
-   86: temperatura por debajo de la cual el led se iluminará en azul (vinculado al parámetro 81)
-   87: temperatura por encima de la cual el led se iluminará en rojo (vinculado al parámetro 81)
-   89: permite que el LED parpadee en azul/blanco/rojo en caso de sabotaje

### Groupes

![Groupe](images/fibaro.fgms001zw5/groupe.jpg)

> **Consejo**
>
> Este módulo tiene cinco grupos de asociación, debe agregar el controlador en 1, 4 y 5 y quitar 3.

Los nombres de los grupos de la versión Z-Wave+ son los siguientes:

-   1 : Línea de vida, retroalimentación del estado del módulo. El controlador principal debe agregarse a este grupo.
-   2 : Movimiento, sensor de movimiento.
-   3 : Alerta de manipulación, sabotaje.
-   4 : Movimiento BC, sensor de movimiento. Este grupo tiene como objetivo garantizar la compatibilidad con versiones anteriores de los controladores que no admiten el protocolo Z-Wave+.
-   5 : Tamper BC, alerta de sabotaje. Este grupo tiene como objetivo garantizar la compatibilidad con versiones anteriores de los controladores que no admiten el protocolo Z-Wave+.

## Bueno saber

### Especificidades

> **Consejo**
>
> Este modulo es muy caprichoso en los wakeups y muy mal configurado de fabrica. Es fundamental despertarlo bien después de la inclusión (más vale varias veces que una), configurarlo bien según sus deseos y despertarlo bien para que se tenga en cuenta la configuración.

### Visuales alternativos

![vuewidget](images/fibaro.fgms001zw5/vuewidget.jpg)

## Wakeup

Para activar este módulo solo hay una forma de proceder :

-   presione el botón de inclusión 3 veces (la luz se vuelve azul). Aunque la luz se encienda, puede ser necesario hacerlo varias veces seguidas (2 o 3)

## Preguntas frecuentes.

Este módulo se activa presionando su botón de incluir 3 veces.

Este módulo es muy caprichoso. Es recomendable hacer la inclusión lo más cerca posible de su caja y repetirla varias veces.

Este módulo es un módulo alimentado por batería, la nueva configuración se tendrá en cuenta en la próxima activación.

## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
