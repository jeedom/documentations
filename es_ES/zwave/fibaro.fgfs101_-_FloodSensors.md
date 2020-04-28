Fibaro  "Sensor de inundación" 
==============================

\

-   **El módulo**

\

![module](images/fibaro.fgfs101/module.jpg)

\

-   **El visual de la libertad**

\

![vuedefaut1](images/fibaro.fgfs101/vuedefaut1.jpg)

\

Resumen 
------

\

El sensor  es compacto y tiene una amplia variedad de
funciones Con su avanzada tecnología y precisión, el sensor
Inundación Fibaro lo alerta de una inundación amenazante o un aumento
o caída rápida de temperatura.

Está equipado con un sensor de inclinación que envía una alerta
inmediatamente a la red Z-Wave si el detector es movido o robado
(retroalimenta al controlador Z-Wave la inclinación o
movimiento).

Este detector universal de inundación y temperatura puede ser alimentado
por batería o por una fuente de alimentación externa de 12 o 24 VCC. Cuando es
conectada a una fuente de alimentación externa, la batería sirve como fuente
poder de emergencia.

Gracias a su sensor de temperatura puedes controlar la temperatura de
tu suelo. Es resistente al agua, en caso de inundación flota sobre la superficie de
agua.

También tiene una alarma de sirena que puede sonar en caso de
problema. Puede conectar la salida de contacto seco a un sistema
alarma existente. Un LED frontal para verificar el estado del
.

Este sensor incorpora un probador de rango de red Z-Wave, que le permite
asegura el correcto funcionamiento del sensor durante su instalación.

\

Funciones 
---------

\

-   Detector de inundaciones (presencia de agua a través de contactos)

-   Detector de temperatura

-   Detector de inclinación

-   Alarma audible y visual

-   Probador de rango Z-Wave

-   Repetidor de onda Z ?? (ver sección "Es bueno saberlo")

\

Características técnicas 
---------------------------

\

-   Tipo de módulo : Transmisor de onda Z

-   El módulo puede ser alimentado externamente : 12-24 VDC

-   Tipo de batería : 

-   Duración de la batería : 2 años

-   Consumo en fuente de alimentación externa : 0.4W

-   Corriente máxima admitida en la salida (ALARM NC, TAMP NC) :

-   Tensión máxima soportada en la salida : 40V (CA o CC)

-   Frecuencia : 868.42 Mhz

-   Distancia de transmisión : 50m de campo libre, 30m en interiores

-   Dimensiones : 72 x 28 mm (diámetro x altura)

-   Temperatura de funcionamiento : 0-40 ° C (-20 ° C a 70 ° C si
    fuente de alimentación externa)

-   Rango de medición de temperatura : -20 a 100 ° C

-   Precisión de medición : 0.5 ° C (en un rango de 0 a 40 ° C)

-   Normas : EMC 2004/108 / EC y R & TTE 199/5 / WE

\

Datos del módulo 
-----------------

\

-   Hacer : Grupo Fibar

-   Modelo : Sensor de inundación FGFS101

-   Fabricante : Sistema FIBARO

-   ID del fabricante : 271

-   Tipo de producto : 2816

-   ID del producto : 4097

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
> Para poner este módulo en modo de inclusión, presione el botón 3 veces
> botón de inclusión central, TMP identificado, de acuerdo con su documentación
> papel (la pestaña negra).

\

![Vue interieur](images/fibaro.fgfs101/Vue_interieur.jpg)

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/fibaro.fgfs101/information.jpg)

\

### Comandos 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponible.

\

![Comandos](images/fibaro.fgfs101/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Fuga : este es el comando de alerta del módulo (para la presencia
    agua, inundaciones ...)

-   Temperatura : es el comando de medición de temperatura

-   Sabotaje : este es el comando de sabotaje. Señala la apertura
    del caso

-   Batería : es el comando de la batería

\

### Configuracion del modulo 

\

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después
> inclusión.

\

Entonces es necesario configurar el módulo en
dependiendo de su instalación. Esto requiere pasar por el botón
"Configuración "del complemento OpenZwave de Jeedom.

\

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

\

Llegará a esta página (después de hacer clic en la pestaña
Configuraciones)

\

![Config1](images/fibaro.fgfs101/config1.jpg)

![Config2](images/fibaro.fgfs101/config2.jpg)

\

Detalles del parámetro :

\

-   Despertador : este es el intervalo de activación del módulo (valor
    recomendado 21600)

-   1 \. Retraso de cancelación de alarma después de la detección de una inundación :
    valeur de 0 à 3600 s (0 par défaut/ dès qu‘il n'y a plus de détection il
    se detiene al instante)

-   2 \. Elección del tipo de alarma.. Valor :

        0 : Alarma audible y visual desactivada
        1 : Alarma sonora desactivada y alarma visual activada
        2 : Alarma sonora activada y alarma visual desactivada
        3 : Alarma audible y visual activada.

-   10 \. Tiempo de transferencia entre dos lecturas de temperatura. : 1 a 65,535 s
    (300 por defecto). Tenga cuidado de no poner un valor de arrastre también
    muy juntos bajo pena de ver la batería del módulo derretirse
    velocidad ! (Se recomienda 1800)

-   12 \. Diferencia de temperatura entre dos informes. : de 1 a 1000 (50 por defecto
    = 0.5 °). De acuerdo con el parámetro 10, también es posible
    gestionar la transferencia de temperatura según la variación de
    estos últimos.

-   50 \. Configurar la alarma de baja temperatura : de -10000 a + 10000
    (1500 por defecto = 15 ° C) Se utiliza para activar una alarma cuando el
    la temperatura cae por debajo de cierto umbral.

-   51.Configurar la alarma de alta temperatura : de -10000 a + 10000
    (3500 por defecto = 35 ° C) Se utiliza para activar una alarma cuando el
    la temperatura supera un cierto umbral.

-   73 \. Compensación de temperatura : de -10000 a + 10000 (0 por defecto
    = 0 ° C) Se utiliza para definir un desplazamiento entre la temperatura del sensor y
    la temperatura actual

-   75 \. Establecer la duración de la alarma : de 0 a 65535s (0 por defecto,
    La alarma se detiene tan pronto como ya no detecta una falla).

\

### Grupos 

\

Para un funcionamiento óptimo de su módulo. Jeedom debe ser
asociado al menos con los grupos 1, 4 y 5:

\

![Groupe](images/fibaro.fgfs101/groupe.jpg)

\

Bueno saber 
------------

Alimentado desde el exterior, este módulo puede usarse como repetidor
Onda Z (información no confirmada actualmente)

El cableado para una fuente de alimentación externa. \

![Alim Exterieur](images/fibaro.fgfs101/Alim_Exterieur.jpg)

\

Despertador 
------

\

Para activar este módulo, presione el botón central 3 veces

\

Faq. 
------

\

Este módulo se activa presionando 3 veces en su botón de inclusión.

\

Este módulo es, por defecto, un módulo de batería, el nuevo
la configuración se tendrá en cuenta en la próxima activación.

\

Nota importante 
---------------

\

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio
> de la configuración, después de un cambio de activación, después de un
> cambio de grupos de asociación

\

\
Detalle de uso :
<http://blog.domadoo.fr/2014/12/18/jeedom-guide-dutilisation-du-detecteur-dinondation-fibaro-fgfs-001/>
Documentación de fibaro :
<http://www.fibaro.com/manuals/en/-Flood-Sensor/-Flood-Sensor-en-2.1-2.3.pdf>

\

