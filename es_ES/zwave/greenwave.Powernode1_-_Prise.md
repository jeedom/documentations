Greenwave PowerNode - 1 enchufe 
=============================

\

-   **El módulo**

\

![module](images/greenwave.Powernode1/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/greenwave.Powernode1/vuedefaut1.jpg)

\

Resumen 
------

\

El módulo de enchufe PowerNode de Greenwave es un dispositivo inteligente que
se conecta a uno de sus electrodomésticos y dispositivos electrónicos para
le permite monitorear y controlar el consumo de energía a
distancia a través del navegador web o teléfono inteligente.

Usando la tecnología Z-Wave, el tomacorriente controlado por PowerNode es
compatible con la mayoría de las cajas de domótica del mercado, como Fibaro
Home Center 2, eedomus o Zipabox.

El módulo de enchufe PowerNode recopila datos de consumo
de energía del dispositivo conectado y las transmite a la caja de automatización del hogar.
Esta salida controlada también le permite activar o desactivar
el dispositivo de forma remota a través de un navegador web o teléfono inteligente o conjunto
un calendario para activar o desactivar automáticamente su dispositivo
en tiempos predefinidos.

Una pequeña rueda en el costado del zócalo le permite elegir un color.
que representará la sala a la que está asignado. Por ejemplo "
azul para el dormitorio ". Este consejo le permitirá diferenciar su
diferentes enchufes PowerNode y múltiples enchufes. También podemos ajustar
esta rueda en un candado. Esta función le permite bloquear el
tomado para evitar apagarlo accidentalmente, pero control desde
el boxeo de domótica ya no será posible.

El tomacorriente controlado por PowerNode también tiene un indicador de estado
brillante que proporciona información diferente según su color :
enchufes de encendido o apagado, alcance de radio limitado, modo de inclusión y
Exclusión.

El módulo de enchufe PowerNode está equipado con protección contra
sobrecorrientes para proteger el dispositivo conectado. El zócalo PowerNode
desactivado en caso de un dispositivo defectuoso o
cortocircuito. El fusible proporciona protección adicional
interno ubicado en el zócalo.

\

Funciones 
---------

\

-   Controlar una lámpara o dispositivo de forma remota

-   Módulo de enchufe que se integra directamente entre una toma de corriente y
    la carga a la orden

-   Permite el monitoreo del consumo del dispositivo conectado

-   Función ON / OFF

-   Posibilidad de asignarle un número y un color para
    diferenciar entre los diferentes PowerNodes de la misma instalación

-   Botón de encendido / apagado directamente en el zócalo

-   Protección contra sobrecorriente

-   Indicador de estado de luz

\

Características técnicas 
---------------------------

\

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

\

Datos del módulo 
-----------------

\

-   Hacer : Greenwave

-   Nombre : Greenwave \ [1 x enchufe \]

-   ID del fabricante : 153

-   Tipo de producto : 2

-   ID del producto : 2

\

Configuración 
-------------

\

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[Documentación](https://jeedom.fr/doc/Documentación/plugins/openzwave/es_ES/openzwave.html).

\

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón
> inclusión presente bajo el zócalo.

\

![inclusion](images/greenwave.Powernode1/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/greenwave.Powernode1/information.jpg)

\

### Comandos 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponible.

\

![Comandos](images/greenwave.Powernode1/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Estado : Es el comando que permite conocer el estado de la
    Salida

-   Uno : Este es el comando que enciende la salida

-   Apagado : Es el comando que hace posible extinguir la captura.

-   Potencia : Es el control que trae el poder instantáneo
    consumido

-   El consumo : Es el orden que informa el consumo total.

\

Tenga en cuenta que en el tablero los comandos ON / OFF / STATUS están agrupados
en un botón.

\

### Configuracion del modulo 

\

Puede configurar el módulo de acuerdo con su
instalación Esto requiere pasar por el botón "Configuración" del
Complemento Jeedom OpenZwave.

\

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

\

Llegará a esta página (después de hacer clic en la pestaña
Configuraciones)

\

![Config1](images/greenwave.Powernode1/config1.jpg)

\

Como puede ver, no hay mucha configuración
para este módulo.

\

Detalles del parámetro :

\

-   1 : Retraso antes de que el botón parpadee : cantidad de segundos
    mínimo entre dos comunicaciones (si se supera este retraso, el botón
    del zócalo parpadeará)

-   2 : Color de rueda seleccionado (detectado automáticamente)

\

### Grupos 

\

Este módulo tiene cuatro grupos de asociación, solo el tercer grupo es
indispensable.

\

![Groupe](images/greenwave.Powernode1/groupe.jpg)

\

Bueno saber 
------------

\

A diferencia de su socket múltiple hermana mayor, este socket no requiere
encuestas para aumentar el consumo.

\

### Restablecer 

\

![Config2](images/greenwave.Powernode1/config2.jpg)

\

Puede restablecer su medidor de consumo haciendo clic en
en este botón disponible en la pestaña Sistema. Hay que elegir
PressButton.

\

### Específicos 

\

Despertador 
------

\

No hay noción de activación en este módulo.

\

Faq. 
------

\

¿Has asociado el grupo 3 del módulo con Jeedom? ?

\

No El módulo no lo permite.. Ponle un pequeño trozo de cinta
adhesivo negro.

\

**@sarakha63**
