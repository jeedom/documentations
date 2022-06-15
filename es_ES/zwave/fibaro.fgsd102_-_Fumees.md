# Fibaro FGSD-002 "Sensor de humo 2"

**El módulo**

![module](images/fibaro.fgsd102/module.jpg)

**El jeedom visual**

![vuedefaut1](images/fibaro.fgsd102/vuedefaut1.jpg)

## Resumen

Con líneas suaves, una superficie pulida y un tamaño pequeño, este detector de humo le permitirá ser alertado de una amenaza con luces LED RGB multicolores y una sirena incorporada. El gran formato de la rejilla permite detectar la menor cantidad de humo para obtener una reacción rápida. Encontrará fácilmente su lugar en su hogar para preservar la seguridad de toda la familia.

El detector de humo Fibaro FGSD-002 es un detector de humo autónomo (DAAF) que cumple con la norma EN 14604:2005. Aunque autónomo, también se comunica gracias a la tecnología Z-Wave Plus.

Algunos materiales se queman sin fumar. Es por eso que los ingenieros de Fibaro decidieron incluir una protección adicional en su detector de humo en forma de sensor de temperatura. Si la cantidad de humo no es suficiente para activar la alarma, el dispositivo aún podrá detectar una amenaza al detectar un cambio rápido en la temperatura causado por el fuego. Un cambio rápido de temperatura o un aumento de hasta 54°C es suficiente para que el sensor de humo detecte una amenaza y se la señale a los habitantes de la casa. Solo este tipo de sensor de humo ofrece una alta eficiencia, independientemente de lo que se esté quemando.

## Fonctions

-   Detector de humo Z-Wave
-   Bateria cargada
-   Sensibilidad del sensor ajustable (3 niveles)
-   Protección contra sabotaje
-   Alarma señalizada por sonido, luz LED y señal Z-Wave
-   Detección de incendios por medición de la temperatura del aire
-   Prueba de eficiencia automática, realizada cada 5 segundos
-   Comprobador de cobertura de red Z-Wave integrado
-   Cumple con EN 14604:2005
-   Compatible con Z-Wave Plus
-   Instalación muy simple: solo instálelo en un lugar donde haya riesgo de incendio

## Características técnicas

-   Tipo de mod : Transmisor de onda Z
-   Alimento : Batería de litio CR123A de 3V
-   Duración de la batería : 3 años
-   Frecuencia : 868,42 MHz
-   Distancia de transmisión : 50m campo abierto, 30m bajo techo
-   Dimensiones : 65 x 28 mm (diámetro x altura)
-   Temperatura de funcionamiento : 0-55°C
-   Humedad de funcionamiento : 0% - 93%
-   Rango de medición de temperatura : -20 a 100°C
-   Sensibilidad al humo : 1er nivel - 1,20 +/- 0,5% obs/m; 2do nivel - 1,80 +/- 0,5% obs/m; 3er nivel - 2,80 +/- 0,5% obs/m
-   Nivel sonoro: 85dB a 3m
-   Precisión de la medición : 0,5°C (en un rango de 0 a 55°C)
-   Estándares : EMC 2004/108/EC y R&TTE 199/5/WE
-   Certificados : ES 14604:2005

## Datos del módulo

-   Marca : Grupo fibar
-   Apellido : Sensor de humo Fibaro FGSD-002
-   Identificación del fabricante : 271
-   Tipo Producto : 3074
-   Identificación de producto : 4098

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione 3 veces el botón de inclusión central, de acuerdo con su documentación en papel.

![inclusion](images/fibaro.fgsd102/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/fibaro.fgsd102/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/fibaro.fgsd102/commandes.jpg)

Aquí está la lista de comandos :

-   Vapores : este es el comando de alerta del módulo (para humo, calor)
-   La temperatura : este es el comando de medición de temperatura
-   Sabotaje : este es el comando de sabotaje. Señala la apertura de la caja
-   Alerta de prueba : este es el comando que informará el hecho de que el módulo está en modo de prueba
-   Alerta de calor : este es el comando que generará una alerta de calor (no confiable aún)
-   Batería : este es el comando de la bateria

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

Luego es necesario configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/fibaro.fgsd102/config1.jpg)

![Config2](images/fibaro.fgsd102/config2.jpg)

Detalles del parámetro :

-   Despierta : este es el intervalo de activación del módulo (valor recomendado 21600)
-   1: le permite ajustar la sensibilidad de la detección de humo
-   2: le permite elegir las notificaciones que se enviarán a Jeedom (consejos : toutes)
-   3: le permite elegir qué notificaciones irán acompañadas de una indicación visual
-   4: permite elegir qué notificaciones irán acompañadas de una indicación sonora (en todos los casos la detección de calor y fuego hará sonar el módulo)
-   10: no cambie esta configuración a menos que sepa lo que está haciendo
-   11: idem
-   12: idem
-   13: permite notificar a otros módulos zwave (deshabilitar a menos que sepa por qué lo habilita)
-   20: tiempo entre dos relaciones de temperatura
-   21: diferencia de temperatura a partir de la cual, incluso si no se alcanza la duración anterior, la temperatura se enviará a Jeedom
-   30: Temperatura de activación de la alarma de calor
-   31: intervalo de notificación de picos de temperatura
-   32: 

### Groupes

Para un funcionamiento óptimo de su módulo. :

![Groupe](images/fibaro.fgsd102/groupe.jpg)

## Bueno saber

### Especificidades

## Wakeup

Para activar este módulo, presione el botón central 3 veces

## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
