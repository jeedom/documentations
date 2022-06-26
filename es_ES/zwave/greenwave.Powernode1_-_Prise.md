# Greenwave PowerNode - 1 enchufe

**El módulo**

![module](images/greenwave.Powernode1/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/greenwave.Powernode1/vuedefaut1.jpg)

## Resumen

El módulo de enchufe GreenWave PowerNode es un dispositivo inteligente que se conecta a uno de sus electrodomésticos y dispositivos electrónicos para permitirle monitorear y controlar el consumo de energía de forma remota a través de un navegador web o un teléfono inteligente.

Usando la tecnología Z-Wave, el enchufe controlado por PowerNode es compatible con la mayoría de las cajas de domótica del mercado, como Fibaro Home Center 2, eedomus o Zipabox.

El módulo de enchufe PowerNode recopila datos sobre el consumo de energía del dispositivo conectado y los transmite a la caja domótica. Esta salida controlada también le permite encender o apagar el dispositivo de forma remota a través de un navegador web o un teléfono inteligente o establecer un horario para encender o apagar automáticamente su dispositivo en momentos predefinidos.

Una pequeña rueda en el costado del zócalo le permite elegir un color que representará la habitación a la que está asignado. Por ejemplo "azul para el dormitorio ". Este truco te permitirá diferenciar tus diferentes enchufes y regletas PowerNode. También puede ajustar esta rueda en un candado. Esta función permite bloquear el enchufe para evitar que se apague por accidente, pero el control desde la caja domótica ya no será posible.

El tomacorriente controlado por PowerNode también tiene un indicador de estado de luz que brinda información diferente según su color : enchufes encendidos o apagados, rango de radio limitado, modo de inclusión y exclusión.

El módulo de enchufe PowerNode está equipado con protección contra sobrecorriente para proteger el dispositivo conectado. El enchufe PowerNode se desactivará en caso de mal funcionamiento del dispositivo defectuoso o cortocircuito. El fusible interno ubicado en el zócalo proporciona protección adicional.

## Fonctions

-   Controlar una lámpara o un dispositivo de forma remota
-   Módulo de enchufe que se integra directamente entre una toma eléctrica y la carga a controlar
-   Permite monitorizar el consumo del dispositivo conectado
-   Función de encendido/apagado
-   Posibilidad de asignarle un número y un color para diferenciar los distintos PowerNodes de una misma instalación
-   Botón de encendido/apagado directamente en el enchufe
-   Protección contra la sobretensión
-   Indicador de estado brillante

## Características técnicas

-   Alimento : 250V\~CA, 50Hz
-   Corriente de carga máxima : 10A
-   Potencia máxima de carga : 2400W (@240V)
-   Consumo en espera : 0.4W
-   Precisión de la medición : ±0.1W
-   Protección contra la sobretensión : Fusible interno 10A
-   Tipo de enchufe : DIN49440 / CEE 7/7 (Schuko)
-   Onda Z de radiofrecuencia : 868,42 MHz
-   Rango máximo de onda Z : 30m
-   Temperatura de funcionamiento : 0°C a +25°C
-   Temperatura de almacenamiento : -20°C a +60°C
-   Humedad máxima : 5% a 90%
-   Clase IP (tolerancia a la humedad) : IP20

## Datos del módulo

-   Marca : GreenWave
-   Apellido : GreenWave\[1 x enchufe\]
-   Identificación del fabricante : 153
-   Tipo Producto : 2
-   Identificación de producto : 2

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón de inclusión debajo del zócalo.

![inclusion](images/greenwave.Powernode1/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/greenwave.Powernode1/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/greenwave.Powernode1/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : Este es el comando que le permite saber el estado del socket
-   Nosotros : Este es el comando que le permite encender el zócalo
-   Apagado : Este es el comando que le permite apagar el zócalo
-   Potencia : Este es el comando que devuelve la potencia instantánea consumida
-   Consumo : Es el mando que devuelve el consumo total

Tenga en cuenta que en el tablero de instrumentos los comandos ON/OFF/ESTADO están agrupados en un solo botón.

### Configuración del módulo

Puede configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/greenwave.Powernode1/config1.jpg)

Como puede ver, no hay mucha configuración para este módulo.

Detalles del parámetro :

-   1 : Retraso antes de que el botón parpadee : número mínimo de segundos entre dos comunicaciones (si se supera este tiempo, el botón del enchufe parpadeará))
-   2 : Color de rueda seleccionado (detectado automáticamente)

### Groupes

Este módulo tiene cuatro grupos de asociación, solo el 3er grupo es esencial.

![Groupe](images/greenwave.Powernode1/groupe.jpg)

## Bueno saber

A diferencia de su hermano mayor multi-socket, este socket no requiere sondeo para aumentar el consumo.

### Reset

![Config2](images/greenwave.Powernode1/config2.jpg)

Puede restablecer su contador de consumo haciendo clic en este botón disponible en la pestaña Sistema. Tienes que elegir PressButton.

### Especificidades

## Wakeup

No hay noción de despertar en este módulo.
