# Greenwave PowerNode - 6 enchufes

**El módulo**

![module](images/greenwave.powernode/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/greenwave.powernode/vuedefaut1.jpg)

## Resumen

GreenWave PowerNode Power Strip es un dispositivo inteligente que se conecta a sus dispositivos y dispositivos electrónicos para permitirle monitorear y controlar el consumo de energía de sus dispositivos de forma remota a través de un navegador web o teléfono inteligente. Con la tecnología Z-Wave, la regleta de alimentación PowerNode es compatible con la mayoría de las cajas de automatización del hogar en el mercado, como Fibaro Home Center 2, eedomus o Zipabox. Equipado con 6 puertos, puede controlar de forma independiente 6 dispositivos eléctricos diferentes con una potencia total de 10A.

La regleta de alimentación PowerNode recopila datos sobre el consumo de energía de los dispositivos conectados y los transmite a la caja de automatización del hogar. Luego puede controlar el consumo de energía de cada dispositivo conectado. Esta regleta también le permite activar o desactivar dispositivos de forma remota a través de un navegador web o teléfono inteligente o definir un calendario para activar o desactivar automáticamente sus dispositivos en momentos predefinidos. Una rueda pequeña en el costado de la regleta le permite elegir un color que represente la habitación a la que se asigna la regleta. Por ejemplo "azul para el dormitorio ". Este consejo le permitirá diferenciar sus diferentes enchufes múltiples PowerNode. También puede configurar este dial en un candado. Esta función le permite bloquear la regleta de alimentación para evitar apagarla por accidente, pero el control desde la caja de automatización del hogar ya no será posible.

La regleta de alimentación PowerNode también tiene un indicador de estado de luz que proporciona información diferente según su color : enchufes activados o desactivados, alcance de radio limitado, modo de inclusión y exclusión.

La regleta de alimentación PowerNode está equipada con protección contra sobrecorriente para proteger los dispositivos conectados. PowerNode deshabilitará los puertos en caso de un dispositivo defectuoso o un cortocircuito. El fusible interno ubicado en la regleta de alimentación brinda protección adicional.

Esta regleta es ideal para controlar dispositivos multimedia en un gabinete de TV o para controlar equipos informáticos ubicados en una oficina y así evitar tener que usar 6 enchufes Z-Wave individuales.

## Funciones

-   Regleta de 6 puertos Z-Wave
-   Permite el monitoreo del consumo de dispositivos conectados
-   Función ON / OFF
-   Posibilidad de asignarle un número y un color para diferenciar los diferentes PowerNodes de la misma instalación.
-   Botón de encendido / apagado directamente en la regleta
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
-   Clase de IP (tolerancia a la humedad) : IP20

## Datos del módulo

-   Hacer : GreenWave
-   Nombre : GreenWave \ [6 x tomas \]
-   ID del fabricante : 153
-   Tipo de producto : 3
-   ID del producto : 4

## Configuración

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón de inclusión en el zócalo.

![inclusion](images/greenwave.powernode/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/greenwave.powernode/information.jpg)

### Comandos

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/greenwave.powernode/commandes.jpg)

![Comandos](images/greenwave.powernode/commandes2.jpg)

![Comandos](images/greenwave.powernode/commandes3.jpg)

![Comandos](images/greenwave.powernode/commandes4.jpg)

![Comandos](images/greenwave.powernode/commandes5.jpg)

Aquí está la lista de comandos :

-   Estado-1 : Es el comando que permite conocer el estado del socket 1
-   En-1 : Este es el comando que activa el socket 1
-   Off-1 : Es el comando que apaga el socket 1
-   Poder-1 : Es el comando que muestra la potencia instantánea consumida desde el socket 1
-   Conso-1 : Es el comando que informa el consumo total de la salida 1
-   Estado-2 : Es el comando que permite conocer el estado del socket 2
-   En-2 : Es el comando que enciende el socket 2
-   Off-2 : Es el comando que apaga el socket 2
-   Poder-2 : Es el comando que muestra la potencia instantánea consumida desde el socket 2
-   Conso-2 : Es el comando que informa el consumo total de la salida 2
-   Estado-3 : Es el comando que permite conocer el estado del socket 3
-   En-3 : Este es el comando que activa el socket 3
-   Off-3 : Es el comando que apaga el socket 3
-   Poder-3 : Es el comando que muestra la potencia instantánea consumida desde el socket 3
-   Conso-3 : Es el comando que informa el consumo total de la salida 3
-   Estado-4 : Es el comando que permite conocer el estado del socket 4
-   En-4 : Es el comando que enciende el socket 4
-   Off-4 : Es el comando que apaga el socket 4
-   Poder-4 : Es el comando que muestra la potencia instantánea consumida desde el socket 4
-   Conso-4 : Es el comando que informa el consumo total de la salida 4
-   Estado-5 : Es el comando que permite conocer el estado del socket 5
-   En-5 : Es el comando que enciende el socket 5
-   Off-5 : Es el comando que apaga el socket 5
-   Poder-5 : Es el comando que muestra la potencia instantánea consumida desde el socket 5
-   Conso-5 : Es el comando que informa el consumo total de la salida 5
-   Estado-6 : Es el comando que permite conocer el estado del zócalo 6
-   En-6 : Es el comando que enciende el socket 6
-   Off-6 : Es el comando que apaga el zócalo 6
-   Poder-6 : Es el comando que muestra la potencia instantánea consumida desde el zócalo 6
-   Conso-6 : Es el comando que informa el consumo total de la salida 6

Tenga en cuenta que en el tablero los comandos ON / OFF / STATUS se agrupan en un solo botón.

### Configuración du module

Puede configurar el módulo de acuerdo con su instalación. Para hacer esto, vaya al botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/greenwave.powernode/config1.jpg)

Como puede ver, no hay mucha configuración para este módulo.

Detalles del parámetro :

-   1 : Retrasos antes de que el botón parpadee : número mínimo de segundos entre dos comunicaciones (si se excede este tiempo, el botón del socket parpadeará)
-   2 : Color de rueda seleccionado (detectado automáticamente)

### Grupos

Este módulo tiene cuatro grupos de asociación, solo el primer grupo es esencial.

![Groupe](images/greenwave.powernode/groupe.jpg)

## Bueno saber

### Especificidades / Encuesta

A diferencia de su hermana pequeña "Une award", esta regleta requiere sondeo para aumentar el consumo.
![Config2](images/greenwave.powernode/config2.jpg)

Solo es necesario activarlo para el comando Power de cada socket. Esto tendrá el efecto de elevar los dos (consumo y potencia)

### Consumo general

![consocumul](images/greenwave.powernode/consocumul.jpg)

Puede usar un virtual para crear un consumo acumulativo de los 6 sockets.

![consocumul2](images/greenwave.powernode/consocumul2.jpg)

### Restablecer

![Config3](images/greenwave.powernode/config3.jpg)

Puede restablecer su medidor de consumo haciendo clic en este botón disponible en la pestaña Sistema. (Hay un reinicio por socket). Elija PressButton.

## Despertador

No hay noción de activación en este módulo.
