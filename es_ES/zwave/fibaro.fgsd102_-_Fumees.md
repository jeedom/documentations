# Fibaro FGSD-002 "Sensor de humo 2"

**El módulo**

![module](images/fibaro.fgsd102/module.jpg)

**El visual de la libertad**

![vuedefaut1](images/fibaro.fgsd102/vuedefaut1.jpg)

## Resumen

Con líneas suaves, una superficie pulida y un tamaño pequeño, este detector de humo le permitirá ser alertado de una amenaza con LED RGB multicolores y una sirena integrada. El gran formato de la cuadrícula permite detectar la menor cantidad de humo para obtener una reacción rápida. Encontrará fácilmente su lugar en su hogar para preservar la seguridad de toda la familia.

El detector de humo Fibaro FGSD-002 es un detector de alarma de humo autónomo (DAAF) conforme a la norma EN 14604:2005. Aunque autónomo, también es comunicativo gracias a la tecnología Z-Wave Plus.

Algunos materiales se queman sin fumar. Esta es la razón por la cual los ingenieros de Fibaro decidieron incluir protección adicional en su detector de humo en forma de un sensor de temperatura. Si no hay suficiente humo para hacer sonar la alarma, el dispositivo aún podrá detectar una amenaza al detectar un cambio rápido de temperatura causado por el incendio. Un cambio rápido de temperatura o un aumento de 54 ° C es suficiente para que el sensor de humo detecte una amenaza e informe a los habitantes de la casa. Solo este tipo de sensor de humo ofrece una alta eficiencia, independientemente de las quemaduras.

## Fonctions

-   Detector de humo Z-Wave
-   Alimentado por batería
-   Sensibilidad ajustable del sensor (3 niveles)
-   Protección contra manipulaciones
-   Alarma señalizada por sonido, luz LED y señal Z-Wave
-   Detección de incendios midiendo la temperatura del aire
-   Prueba de eficiencia automática, realizada cada 5 segundos
-   Probador de cobertura de red Z-Wave integrado
-   Cumple con la norma EN 14604:2005
-   Compatible con Z-Wave Plus
-   Instalación muy simple: simplemente instálelo en un lugar donde exista riesgo de incendio

## Características técnicas

-   Tipo de módulo : Transmisor de onda Z
-   Suministro : Batería de litio CR123A de 3V
-   Duración de la batería : 3 años
-   Frecuencia : 868.42 Mhz
-   Distancia de transmisión : 50m de campo libre, 30m en interiores
-   Dimensiones : 65 x 28 mm (diámetro x altura)
-   Temperatura de funcionamiento : 0-55 ° C
-   Humedad de funcionamiento : 0% - 93%
-   Rango de medición de temperatura : -20 a 100 ° C
-   Sensibilidad al humo : 1er nivel - 1.20 +/- 0.5% obs / m; 2do nivel - 1.80 +/- 0.5% obs / m; 3er nivel - 2.80 +/- 0.5% obs / m
-   Nivel sonoro: 85 dB a 3 m
-   Precisión de medición : 0.5 ° C (en un rango de 0 a 55 ° C)
-   Normas : EMC 2004/108 / EC y R & TTE 199/5 / WE
-   Certificaciones : EN 14604:2005

## Datos del módulo

-   Hacer : Grupo Fibar
-   Nombre : Sensor de humo Fibaro FGSD-002
-   ID del fabricante : 271
-   Tipo de producto : 3074
-   ID del producto : 4098

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón central de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/fibaro.fgsd102/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/fibaro.fgsd102/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/fibaro.fgsd102/commandes.jpg)

Aquí está la lista de comandos :

-   Humo : es el comando de alerta del módulo (para humo, calor, etc.)
-   Temperatura : es el comando de medición de temperatura
-   Sabotaje : este es el comando de sabotaje. Señala la apertura del caso
-   Alerta de prueba : Es el comando el que mostrará el hecho de que el módulo está en modo de prueba
-   Alerta de calor : es el control el que generará una alerta de calor (aún no es confiable)
-   Batería : es el comando de la batería

### Configuracion del modulo

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después de la inclusión.

Entonces es necesario configurar el módulo de acuerdo con su instalación. Para hacer esto, vaya al botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/fibaro.fgsd102/config1.jpg)

![Config2](images/fibaro.fgsd102/config2.jpg)

Detalles del parámetro :

-   Despertador : Este es el intervalo de activación del módulo (valor recomendado 21600)
-   1: ajusta la sensibilidad de la detección de humo
-   2: le permite elegir qué notificaciones se enviarán a Jeedom (asesoramiento : toutes)
-   3: permite elegir qué notificaciones irán acompañadas de una indicación visual
-   4: le permite elegir qué notificaciones irán acompañadas de una indicación audible (en todos los casos, las detecciones de calor e incendio harán sonar el módulo)
-   10: no cambie esta configuración a menos que sepa lo que está haciendo
-   11: idem
-   12: idem
-   13: permite notificar a otros módulos zwave (para desactivar a menos que sepa por qué lo activa)
-   20: tiempo entre dos informes de temperatura
-   21: diferencia de temperatura a partir de la cual, incluso si no se alcanza la duración de la parte superior, la temperatura se enviará a Jeedom
-   30: Temperatura de activación de alarma de calor
-   31: intervalo de informe de temperatura pico
-   32: intervalo de señal si la pérdida de Zwave

### Groupes

Para un funcionamiento óptimo de su módulo. Jeedom debe estar asociado al menos con los grupos 1 4 y 5:

![Groupe](images/fibaro.fgsd102/groupe.jpg)

## Bueno saber

### Específicos

## Wakeup

Para activar este módulo, presione el botón central 3 veces

## Nota importante

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio en la configuración, después de un cambio en la activación, después de un cambio en los grupos de asociación
