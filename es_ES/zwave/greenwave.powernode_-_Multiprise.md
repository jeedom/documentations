Greenwave PowerNode - 6 enchufes 
==============================

\

-   **El módulo**

\

![module](images/greenwave.powernode/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/greenwave.powernode/vuedefaut1.jpg)

\

Resumen 
------

\

La regleta de alimentación GreenWave PowerNode es un dispositivo inteligente que
se conecta a sus electrodomésticos y productos electrónicos para usted
le permite monitorear y controlar el consumo eléctrico de su
dispositivos de forma remota a través del navegador web o teléfono inteligente. Utilizando
Tecnología Z-Wave, la regleta PowerNode es compatible con
la mayoría de las cajas de domótica en el mercado, como Fibaro Home Center 2, eedomus
o Zipabox. 
.


.




. 

. 
". 
. 


.


 : 
.


. 

. 
.






Funciones 
---------

\

-   

-   

-   Función ON / OFF

-   Posibilidad de asignarle un número y un color para
    diferenciar entre los diferentes PowerNodes de la misma instalación.

-   

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

-   Hacer : GreenWave

-   Nombre : ]

-   ID del fabricante : 153

-   Tipo de producto : 3

-   ID del producto : 4

\

Configuración 
-------------

\

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/es_ES/openzwave.html).

\

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón
> .

\

![inclusion](images/greenwave.powernode/inclusion.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/greenwave.powernode/information.jpg)

\

### Comandos 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponible.

\

![Comandos](images/greenwave.powernode/commandes.jpg)

![Comandos](images/greenwave.powernode/commandes2.jpg)

![Comandos](images/greenwave.powernode/commandes3.jpg)

![Comandos](images/greenwave.powernode/commandes4.jpg)

![Comandos](images/greenwave.powernode/commandes5.jpg)

\

Aquí está la lista de comandos :

\

-    : Es el comando que permite conocer el estado de la
    

-    : 

-    : 

-    : 
    

-    : 
    

-    : Es el comando que permite conocer el estado de la
    

-    : 

-    : 

-    : 
    tomado de la ingesta 2

-   Conso-2 : 
    

-   Estado-3 : Es el comando que permite conocer el estado de la
    toma 3

-   En-3 : Este es el comando que activa el socket 3

-   Off-3 : Es el comando que apaga el socket 3

-   Poder-3 : 
    tomado de la ingesta 3

-   Conso-3 : 
    toma 3

-   Estado-4 : Es el comando que permite conocer el estado de la
    toma 4

-   En-4 : Es el comando que enciende el socket 4

-   Off-4 : Es el comando que apaga el socket 4

-   Poder-4 : 
    tomado de la ingesta 4

-   Conso-4 : 
    toma 4

-   Estado-5 : Es el comando que permite conocer el estado de la
    toma 5

-   En-5 : Es el comando que enciende el socket 5

-   Off-5 : Es el comando que apaga el socket 5

-   Poder-5 : 
    tomado de la ingesta 5

-   Conso-5 : 
    toma 5

-   Estado-6 : Es el comando que permite conocer el estado de la
    toma 6

-   En-6 : Es el comando que enciende el socket 6

-   Off-6 : Es el comando que apaga el zócalo 6

-   Poder-6 : 
    tomado de la ingesta 6

-   Conso-6 : 
    toma 6

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

![Config1](images/greenwave.powernode/config1.jpg)

\

Como puede ver, no hay mucha configuración
para este módulo.

\

Detalles del parámetro :

\

-   1 : Retrasos antes de que el botón parpadee : cantidad de segundos
    mínimo entre dos comunicaciones (si se supera este retraso, el botón
    del zócalo parpadeará)

-   2 : Color de rueda seleccionado (detectado automáticamente)

\

### Grupos 

\

Este módulo tiene cuatro grupos de asociación, solo el primer grupo es
indispensable.

\

![Groupe](images/greenwave.powernode/groupe.jpg)

\

Bueno saber 
------------

\

### Especificidades / Encuesta 

\

A diferencia de su hermana pequeña "Une award", esta regleta requiere
encuestas para aumentar el consumo.

\

![Config2](images/greenwave.powernode/config2.jpg)

\

Solo es necesario activarlo para el comando Power de cada
tomado. Esto tendrá el efecto de aumentar los dos (consumo y potencia)

\

### Consumo general 

\

![consocumul](images/greenwave.powernode/consocumul.jpg)

\

Puedes usar un virtual para crear un consumo acumulativo
de 6 tomas.

\

![consocumul2](images/greenwave.powernode/consocumul2.jpg)

\

### Restablecer 

\

![Config3](images/greenwave.powernode/config3.jpg)

\

Puede restablecer su medidor de consumo haciendo clic en
en este botón disponible en la pestaña Sistema. (Hay un reinicio por
tomado). Elija PressButton.

\

Despertador 
------

\

No hay noción de activación en este módulo.

\

Faq. 
------

\

¿Pagaste un CRON?.

\

No El módulo no lo permite.. Pon un trozo de cinta negra
arriba.

\
**@sarakha63**
