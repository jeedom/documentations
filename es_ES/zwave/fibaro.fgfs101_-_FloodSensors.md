# Fibaro FGFS-101 "Sensor de inundación"

**El módulo**

![module](images/fibaro.fgfs101/module.jpg)

**El jeedom visual**

![vuedefaut1](images/fibaro.fgfs101/vuedefaut1.jpg)

## Resumen

El sensor FGFS-101 es compacto y tiene una amplia variedad de funciones. Con su tecnología de punta y precisión, el sensor de inundación Fibaro lo alerta sobre una amenaza de inundación o un rápido aumento o disminución de la temperatura.

Está equipado con un sensor de inclinación que envía una alerta inmediatamente a la red Z-Wave si el detector se mueve o es robado (realimenta al controlador Z-Wave la información de inclinación o movimiento).

Este detector universal de inundación y temperatura puede funcionar con batería o con una fuente de alimentación externa de 12 o 24 VCC. Cuando se conecta a una fuente de alimentación externa, la batería sirve como fuente de alimentación de respaldo.

Gracias a su sensor de temperatura podrás controlar la temperatura de tu suelo. Es impermeable, en caso de inundación flota en la superficie del agua.

También tiene una sirena de alarma que puede sonar si algo sale mal. Puede conectar la salida de contacto seco a un sistema de alarma existente. Un LED frontal para comprobar el estado del FGFS-101.

Este sensor incorpora un probador de rango de red Z-Wave, que te asegura el correcto funcionamiento del sensor durante su instalación.

## Fonctions

-   Detector de inundación (presencia de agua a través de contactos)
-   Detector de temperatura
-   Sensor de inclinación
-   Alarma audible y visual
-   Probador de rango Z-Wave
-   Repetidor Z-Wave ?? (consulte la sección "Es bueno saber")

## Características técnicas

-   Tipo de mod : Transmisor de onda Z
-   El módulo se puede alimentar externamente : 12 – 24 VCC
-   Tipo de Batería : CR123A
-   Duración de la batería : 2 años
-   Consumo en fuente de alimentación externa : 0,4W
-   Máxima corriente soportada en salida (ALARM NC, TAMP NC) :25mA
-   Tensión de salida máxima admitida : 40 V (CA o CC)
-   Frecuencia : 868,42 MHz
-   Distancia de transmisión : 50m campo abierto, 30m bajo techo
-   Dimensiones : 72 x 28 mm (diámetro x altura)
-   Temperatura de funcionamiento : 0-40°C (-20°C a 70°C si fuente de alimentación externa)
-   Rango de medición de temperatura : -20 a 100°C
-   Precisión de la medición : 0,5°C (en un rango de 0 a 40°C)
-   Estándares : EMC 2004/108/EC y R&TTE 199/5/WE

## Datos del módulo

-   Marca : Grupo fibar
-   Modelo : Sensor de inundación FGFS101
-   Fabricante : Sistema FIBARO
-   Identificación del fabricante : 271
-   Tipo Producto : 2816
-   Identificación de producto : 4097

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo inclusión, debe presionar 3 veces el botón central de inclusión, marcado TMP, de acuerdo con su documentación en papel (la pestaña negra).

![Vue interieur](images/fibaro.fgfs101/Vue_interieur.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/fibaro.fgfs101/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/fibaro.fgfs101/commandes.jpg)

Aquí está la lista de comandos :

-   Filtración : este es el comando de alerta del módulo (por presencia de agua, inundaciones, etc)
-   La temperatura : este es el comando de medición de temperatura
-   Sabotaje : este es el comando de sabotaje. Señala la apertura de la caja
-   Batería : este es el comando de la bateria

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

Luego es necesario configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/fibaro.fgfs101/config1.jpg)

![Config2](images/fibaro.fgfs101/config2.jpg)

Detalles del parámetro :

-   Despierta : este es el intervalo de activación del módulo (valor recomendado 21600)
-   1\. Retraso de cancelación de alarma después de detección de inundación : valeur de 0 à 3600 s (0 par défaut/ dès qu‘il n'y a plus de détection il s'arrête instantanément)
-   2\. Elección del tipo de alarma. Valor :
  - 0 : Alarma sonora y visual desactivada
  - 1 : Alarma audible apagada y alarma visual encendida
  - 2 : Alarma audible encendida y alarma visual apagada
  - 3 : Alarma audible y visual activada.
-   10\. Tiempo de retraso entre dos lecturas de temperatura : de 1 a 65535 s (300 por defecto). Tenga cuidado de no poner un valor de transferencia demasiado cerca, de lo contrario, la batería del módulo se derretirá a toda velocidad ! (Se recomienda 1800)
-   12\. Diferencia de temperatura entre dos informes : de 1 a 1000 (50 por defecto = 0,5°). De acuerdo con el parámetro 10, también es posible gestionar el informe de las temperaturas según la variación de estas últimas.
-   50\. Establecer alarma de temperatura baja : de -10000 a + 10000 (1500 por defecto = 15°C) Se utiliza para activar una alarma cuando la temperatura desciende por debajo de un cierto umbral.
-   51.Configuración de la alarma de temperatura alta : de -10000 a + 10000 (3500 por defecto = 35°C) Se utiliza para activar una alarma cuando la temperatura supera un cierto umbral.
-   73\. Temperatura compensada : de -10000 a + 10000 (0 por defecto = 0°C) Se utiliza para definir una compensación entre la temperatura del sensor y la temperatura real
-   75\. Configuración de la duración de la alarma : de 0 a 65535s (0 por defecto, La alarma se detiene tan pronto como deja de detectar una falla.)

### Groupes

Para un funcionamiento óptimo de su módulo. Jeedom debe estar asociado al menos con los grupos 1, 4 y 5:

![Groupe](images/fibaro.fgfs101/groupe.jpg)

## Bueno saber

Alimentado desde el exterior, este módulo puede actuar como un repetidor de onda Z (información no confirmada actualmente)

Cableado para una fuente de alimentación externa.

![Alim Exterieur](images/fibaro.fgfs101/Alim_Exterieur.jpg)

## Wakeup

Para activar este módulo, presione el botón central 3 veces

## Preguntas frecuentes.

Este módulo se activa presionando su botón de incluir 3 veces.

Este módulo es, por defecto, un módulo en batería, la nueva configuración se tendrá en cuenta en la próxima activación.

## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación


Detalles de uso [aquí](http://blog.domadoo.fr/2014/12/18/jeedom-guide-dutilisation-du-detecteur-dinondation-fibaro-fgfs-001/)
Documentación fibaro [inglés](http://www.fibaro.com/manuals/en/FGFS-101-Flood-Sensor/FGFS-101-Flood-Sensor-en-2.1-2.3.pdf)
