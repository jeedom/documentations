# Greenwave PowerNode - 1 enchufe

**El módulo**

![module](images/greenwave.Powernode1/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/greenwave.Powernode1/vuedefaut1.jpg)

## Resumen

El módulo de enchufe PowerNode de GreenWave es un dispositivo inteligente que se conecta a uno de sus electrodomésticos y dispositivos electrónicos para permitirle monitorear y controlar el consumo de energía de forma remota a través de un navegador web o teléfono inteligente.

Con la tecnología Z-Wave, el zócalo controlado por PowerNode es compatible con la mayoría de las cajas de automatización del hogar en el mercado, como Fibaro Home Center 2, eedomus o Zipabox.

El módulo de socket PowerNode recopila datos sobre el consumo de energía del dispositivo conectado y los transmite a la caja de automatización del hogar. Esta salida controlada también le permite activar o desactivar el dispositivo de forma remota a través de un navegador web o teléfono inteligente o definir un calendario para activar o desactivar automáticamente su dispositivo a horas preestablecidas.

Una pequeña rueda en el costado del zócalo le permite elegir un color que representará la habitación a la que está asignado. Por ejemplo "azul para el dormitorio ". Este consejo le permitirá diferenciar sus diferentes enchufes PowerNode y múltiples enchufes. También puede configurar este dial en un candado. Esta función le permite bloquear el enchufe para evitar apagarlo accidentalmente, pero el control desde el boxeo de automatización del hogar ya no será posible.

El zócalo controlado por PowerNode también tiene un indicador de estado de luz que brinda información diferente dependiendo de su color : enchufes activados o desactivados, alcance de radio limitado, modo de inclusión y exclusión.

El módulo de enchufe PowerNode está equipado con protección contra sobrecorriente para proteger el dispositivo conectado. El enchufe PowerNode se desactivará en caso de un dispositivo defectuoso o un cortocircuito. El fusible interno ubicado en el zócalo brinda protección adicional.

## Fonctions

-   Controlar una lámpara o dispositivo de forma remota
-   Módulo de enchufe que se integra directamente entre una toma de corriente y la carga a controlar
-   Permite el monitoreo del consumo del dispositivo conectado
-   Función ON / OFF
-   Posibilidad de asignarle un número y un color para diferenciar los diferentes PowerNodes de la misma instalación
-   Botón de encendido / apagado directamente en el zócalo
-   Protección contra sobrecorriente
-   Indicador de estado de luz

## Características técnicas

-   Suministro : 250 V CA, 50 Hz
-   Corriente de carga máxima : 10A
-   Máxima potencia de carga : 2400W (@ 240V)
-   Consumo en espera : 0.4 W
-   Precisión de medición : ± 0.1W
-   Protección contra sobrecorriente : Fusible interno 10A
-   Tipo de enchufe : DIN49440 / EEC 7/7 (Schuko)
-   Radio Frecuencia Z-Wave : 868.42MHz
-   Rango máximo de onda Z : 30m
-   Temperatura de funcionamiento : 0 ° C a + 25 ° C
-   Temperatura de almacenamiento : -20 ° C a + 60 ° C
-   Humedad máxima : 5% a 90%
-   Clase IP (tolerancia a la humedad) : IP20

## Datos del módulo

-   Hacer : GreenWave
-   Nombre : GreenWave \ [1 x enchufe \]
-   ID del fabricante : 153
-   Tipo de producto : 2
-   ID del producto : 2

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón de inclusión debajo del zócalo.

![inclusion](images/greenwave.Powernode1/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/greenwave.Powernode1/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/greenwave.Powernode1/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : Es el comando que permite conocer el estado del socket
-   Uno : Este es el comando que enciende la salida
-   Apagado : Es el comando que hace posible extinguir la captura
-   Potencia : Es el control que saca a relucir la potencia instantánea consumida
-   El consumo : Es el orden que informa el consumo total

Tenga en cuenta que en el tablero los comandos ON / OFF / STATUS se agrupan en un solo botón.

### Configuracion del modulo

Puede configurar el módulo de acuerdo con su instalación. Para hacer esto, vaya al botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/greenwave.Powernode1/config1.jpg)

Como puede ver, no hay mucha configuración para este módulo.

Detalles del parámetro :

-   1 : Retraso antes de que el botón parpadee : número mínimo de segundos entre dos comunicaciones (si se excede este tiempo, el botón del socket parpadeará))
-   2 : Color de rueda seleccionado (detectado automáticamente)

### Groupes

Este módulo tiene cuatro grupos de asociación, solo el tercer grupo es esencial.

![Groupe](images/greenwave.Powernode1/groupe.jpg)

## Bueno saber

A diferencia de su socket múltiple hermana mayor, este socket no requiere sondeo para aumentar el consumo.

### Reset

![Config2](images/greenwave.Powernode1/config2.jpg)

Puede restablecer su medidor de consumo haciendo clic en este botón disponible en la pestaña Sistema. Elija PressButton.

### Específicos

## Wakeup

No hay noción de activación en este módulo.
