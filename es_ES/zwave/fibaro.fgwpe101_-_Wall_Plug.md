# Fibaro FGRWPE-101 "enchufe de pared"

**El módulo**

![module](images/fibaro.fgwpe101/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/fibaro.fgwpe101/vuedefaut1.jpg)

## Resumen

El Fibaro Wall Plug es un receptor-enchufe-transmisor universal en forma de adaptador para enchufarlo a un enchufe de pared en la red eléctrica, compatible con el estándar Z-Wave. Le permite administrar cualquier dispositivo con una potencia máxima de 2.5kW, al tiempo que integra la funcionalidad de medir la potencia activa de la corriente y el consumo de energía de los dispositivos. Este módulo está equipado con un anillo de luz con LED que indican su estado y el consumo de energía de cualquier dispositivo conectado. El enchufe de pared Fibaro puede controlarse mediante un botón en su carcasa o desde cualquier controlador compatible con el estándar Z-Wave

## Funciones

-   Controlado desde un controlador compatible con el estándar Z-Wave.
-   Control de microchip.
-   Elemento de ejecución: Relé.
-   Medición de la potencia activa de la corriente y la energía eléctrica del receptor.

## Características técnicas

-   Tipo de módulo : Receptor Z-Wave
-   Suministro : 230V, 50Hz
-   El consumo de energía : hasta 0.8W
-   Carga máxima : 2.5kW
-   Frecuencia : 868.42 Mhz UE
-   Distancia de transmisión : 50m de campo libre, 30m en interiores
-   Dimensions: 17 x 42 x 37 mm
-   Temperatura de funcionamiento : 0-40 ° C
-   Temperatura límite : 105°C
-   Normas : LVD (2006/95 / WE), EMC (2004/108 / EC), R & TTE (1999/5 / WE)

## Datos del módulo

-   Hacer : Grupo Fibar
-   Nombre : Enchufe de pared FGWPE-101
-   ID del fabricante : 271
-   Tipo de producto : 1536
-   ID del producto : 4096

## Configuración

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/fibaro.fgwpe101/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/fibaro.fgwpe101/information.jpg)

### Comandos

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/fibaro.fgwpe101/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : Es el comando que permite conocer el estado del socket
-   Uno : Este es el comando que enciende la salida
-   Apagado : Es el comando que hace posible extinguir la captura
-   Potencia : Es el comando que saca a relucir el poder instantáneo consumido
-   El consumo : Es el orden que informa el consumo total

Tenga en cuenta que en el tablero los comandos ON / OFF / STATUS se agrupan en un solo botón.

### Configuración du module

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/fibaro.fgwpe101/config1.jpg)

![Config2](images/fibaro.fgwpe101/config2.jpg)

![Config3](images/fibaro.fgwpe101/config3.jpg)

![Config4](images/fibaro.fgwpe101/config4.jpg)

Detalles del parámetro :

-   1: permite bloquear el módulo siempre en ON
-   16: le permite recordar el último estado en caso de falla de energía
-   34: le permite elegir a qué tipo de alarma de red Zwave debe reaccionar el socket
-   35: le permite configurar cómo responderá la salida a las alarmas
-   39: establece la duración de la alarma
-   40: permite definir cuánto debe variar la potencia para aumentar (en%)
-   42: igual que en el modo estándar (hasta 5 veces por paso definido en el parámetro 43)
-   43: intervalo de aumento de potencia
-   45: intervalo de aumento del consumo (en kWh 10 = 0.1 kWh)
-   47: intervalo en segundos de informe de información, independientemente de una variación
-   49: tener en cuenta el consumo del propio módulo en los valores
-   50: valor mínimo utilizado por el parámetro 52
-   51: valor máximo utilizado por el parámetro 52
-   52: acción a tomar si la potencia deja los límites definidos en los parámetros 50 y 51
-   60: potencia más allá de la cual el enchufe parpadeará en púrpura
-   61: color cuando el enchufe está encendido
-   62: color cuando el enchufe está apagado
-   63: color cuando se detecta una alarma Zwave
-   70: energía de seguridad (el enchufe se cortará cuando la energía alcance este umbral)

### Grupos

Este módulo tiene 3 grupos de asociación, solo el tercero es esencial.

![Groupe](images/fibaro.fgwpe101/groupe.jpg)

## Bueno saber

### Restablecer

![Config5](images/fibaro.fgwpe101/config5.jpg)

Puede restablecer su medidor de consumo haciendo clic en este botón disponible en la pestaña Sistema. Elija PressButton.

## Despertador

No hay noción de activación en este módulo.
