# Greenwave PowerNode - 6 salidas

**El módulo**

![module](images/greenwave.powernode/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/greenwave.powernode/vuedefaut1.jpg)

## Resumen

La regleta de enchufes PowerNode de GreenWave es un dispositivo inteligente que se conecta a sus electrodomésticos y dispositivos electrónicos para permitirle monitorear y controlar el consumo de energía de sus electrodomésticos de forma remota a través de un navegador web o un teléfono inteligente. Utilizando la tecnología Z-Wave, la regleta PowerNode es compatible con la mayoría de las cajas domóticas del mercado como Fibaro Home Center 2, eedomus o Zipabox. Equipado con 6 puertos, puede controlar de forma independiente 6 dispositivos eléctricos diferentes con una potencia total de 10A.

La regleta PowerNode recopila datos sobre el consumo de energía de los dispositivos conectados y los transmite a la caja domótica. A continuación, puede controlar el consumo de energía de cada dispositivo conectado. Esta regleta también le permite encender o apagar dispositivos de forma remota a través del navegador web o teléfono inteligente o establecer un horario para encender o apagar automáticamente sus dispositivos a horas preestablecidas. Una pequeña perilla en el costado de la regleta le permite elegir un color que representará la habitación a la que se asigna la regleta. Por ejemplo "azul para el dormitorio ". Este truco te permitirá diferenciar tus distintas regletas PowerNode. También puede ajustar esta rueda en un candado. Esta función permite bloquear la regleta para evitar que se apague por accidente, pero el control desde la caja domótica ya no será posible.

La regleta PowerNode también tiene un indicador luminoso de estado que da diferente información dependiendo de su color : enchufes encendidos o apagados, rango de radio limitado, modo de inclusión y exclusión.

La regleta PowerNode está equipada con protección contra sobrecorriente para proteger los dispositivos conectados. El PowerNode deshabilitará los puertos en caso de un mal funcionamiento del dispositivo defectuoso o un cortocircuito. La protección adicional es proporcionada por el fusible interno ubicado en la regleta de alimentación.

Esta regleta es ideal para controlar dispositivos multimedia en un mueble de TV o para controlar equipos de cómputo ubicados en una oficina y así evitar la necesidad de utilizar 6 tomas Z-Wave individuales.

## Fonctions

-   Regleta de alimentación Z-Wave de 6 puertos
-   Permite monitorizar el consumo de los dispositivos conectados
-   Función de encendido/apagado
-   Posibilidad de asignarle un número y un color para diferenciar los distintos PowerNodes de una misma instalación.
-   Botón de encendido/apagado directamente en la regleta
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
-   Apellido : GreenWave\[6 x enchufes\]
-   Identificación del fabricante : 153
-   Tipo Producto : 3
-   Identificación de producto : 4

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón de inclusión en el zócalo.

![inclusion](images/greenwave.powernode/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/greenwave.powernode/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/greenwave.powernode/commandes.jpg)

![Pedidos](images/greenwave.powernode/commandes2.jpg)

![Pedidos](images/greenwave.powernode/commandes3.jpg)

![Pedidos](images/greenwave.powernode/commandes4.jpg)

![Pedidos](images/greenwave.powernode/commandes5.jpg)

Aquí está la lista de comandos :

-   Estado-1 : Este es el comando que le permite saber el estado del socket 1
-   En 1 : Este es el comando que enciende el socket 1
-   Desactivado-1 : Este es el comando que apaga el socket 1
-   Poder-1 : Este es el comando que reporta la potencia instantánea consumida por el socket 1
-   Consola-1 : Este es el comando que informa el consumo total de la salida 1
-   Estado-2 : Este es el comando que le permite saber el estado del socket 2
-   En 2 : Este es el comando que enciende el socket 2
-   Desactivado-2 : Este es el comando que apaga el socket 2
-   Poder-2 : Este es el comando que reporta la potencia instantánea consumida por el socket 2
-   Consola-2 : Este es el comando que reporta el consumo total del socket 2
-   Estado-3 : Este es el comando que le permite saber el estado del socket 3
-   En-3 : Este es el comando que enciende el socket 3
-   Fuera de 3 : Este es el comando que apaga el socket 3
-   Poder-3 : Este es el comando que informa la potencia instantánea consumida por el zócalo 3
-   Consola-3 : Este es el comando que reporta el consumo total del socket 3
-   Estado-4 : Este es el comando que le permite saber el estado del socket 4
-   En-4 : Este es el comando que enciende el socket 4
-   Fuera de 4 : Este es el comando que apaga el socket 4
-   Poder 4 : Este es el comando que informa la potencia instantánea consumida por el zócalo 4
-   Consola-4 : Este es el comando que reporta el consumo total del socket 4
-   Estado-5 : Este es el comando que le permite saber el estado del socket 5
-   En-5 : Este es el comando que enciende el socket 5
-   Fuera de 5 : Este es el comando que apaga el socket 5
-   Poder-5 : Este es el comando que informa la potencia instantánea consumida por el zócalo 5
-   Conso-5 : Este es el comando que devuelve el consumo total del socket 5
-   Estado-6 : Este es el comando que te permite saber el estado del socket 6
-   En-6 : Este es el comando que enciende el socket 6
-   Fuera de 6 : Este es el comando que apaga el socket 6
-   Poder-6 : Este es el comando que reporta la potencia instantánea consumida por el socket 6
-   Conso-6 : Este es el comando que reporta el consumo total del socket 6

Tenga en cuenta que en el tablero de instrumentos los comandos ON/OFF/ESTADO están agrupados en un solo botón.

### Configuración del módulo

Puede configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/greenwave.powernode/config1.jpg)

Como puede ver, no hay mucha configuración para este módulo.

Detalles del parámetro :

-   1 : Retrasos antes de que el botón parpadee : número mínimo de segundos entre dos comunicaciones (si se supera este tiempo, el botón del enchufe parpadeará))
-   2 : Color de rueda seleccionado (detectado automáticamente)

### Groupes

Este módulo tiene cuatro grupos de asociación, solo el 1er grupo es esencial.

![Groupe](images/greenwave.powernode/groupe.jpg)

## Bueno saber

### Especificidades / Sondeo

A diferencia de su hermana pequeña "One socket", esta regleta requiere sondeo para aumentar el consumo.
![Config2](images/greenwave.powernode/config2.jpg)

Solo es necesario activarlo para el comando Power de cada toma. Esto tendrá el efecto de elevar los dos (consumo y potencia)

### Consumo mundial

![consocumul](images/greenwave.powernode/consocumul.jpg)

Puede usar un virtual para crear un consumo acumulativo de los 6 enchufes.

![consocumul2](images/greenwave.powernode/consocumul2.jpg)

### Reset

![Config3](images/greenwave.powernode/config3.jpg)

Puede restablecer su contador de consumo haciendo clic en este botón disponible en la pestaña Sistema. (Hay un reinicio por socket). Tienes que elegir PressButton.

## Wakeup

No hay noción de despertar en este módulo.
