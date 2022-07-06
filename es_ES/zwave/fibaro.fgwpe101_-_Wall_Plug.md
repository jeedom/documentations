# Fibaro FGRWPE-101 "Enchufe de pared"

**El módulo**

![module](images/fibaro.fgwpe101/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/fibaro.fgwpe101/vuedefaut1.jpg)

## Resumen

El Fibaro Wall Plug es un receptor-toma-transmisor universal en forma de adaptador para enchufar en una toma de pared de la red eléctrica, compatible con el estándar Z-Wave. Permite gestionar cualquier dispositivo con una potencia máxima de 2,5kW, integrando la funcionalidad para medir la potencia activa de la corriente y el consumo energético de los dispositivos. Este módulo está equipado con un anillo de luz con LED que indican su estado y el consumo de energía de cualquier dispositivo conectado. El Wall Plug Fibaro se puede controlar mediante un botón en su carcasa o desde cualquier controlador compatible con el estándar Z-Wave

## Fonctions

-   Controlado desde un controlador compatible con el estándar Z-Wave.
-   Control de microchip.
-   elemento de ejecución: relé.
-   Medida de potencia activa de corriente y energía eléctrica del receptor.

## Características técnicas

-   Tipo de mod : Receptor de onda Z
-   Alimento : 230V, 50Hz
-   El consumo de energía : hasta 0.8W
-   Carga maxima : 2,5kW
-   Frecuencia : 868,42 MHz UE
-   Distancia de transmisión : 50m campo abierto, 30m bajo techo
-   Dimensions: 17x42x37mm
-   Temperatura de funcionamiento : 0-40°C
-   Temperatura límite : 105°C
-   Estándares : LVD (2006/95/WE), EMC (2004/108/EC), R&TTE (1999/5/WE)

## Datos del módulo

-   Marca : Grupo fibar
-   Apellido : Enchufe de pared FGWPE-101
-   Identificación del fabricante : 271
-   Tipo Producto : 1536
-   Identificación de producto : 4096

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/fibaro.fgwpe101/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/fibaro.fgwpe101/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/fibaro.fgwpe101/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : Este es el comando que le permite saber el estado del socket
-   Nosotros : Este es el comando que le permite encender el zócalo
-   Apagado : Este es el comando que le permite apagar el zócalo
-   Potencia : Este es el comando que informa de la potencia instantánea consumida
-   Consumo : Es el mando que devuelve el consumo total

Tenga en cuenta que en el tablero de instrumentos los comandos ON/OFF/ESTADO están agrupados en un solo botón.

### Configuración del módulo

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/fibaro.fgwpe101/config1.jpg)

![Config2](images/fibaro.fgwpe101/config2.jpg)

![Config3](images/fibaro.fgwpe101/config3.jpg)

![Config4](images/fibaro.fgwpe101/config4.jpg)

Detalles del parámetro :

-   1: permite bloquear el módulo en siempre ON
-   16: le permite recordar el último estado en caso de un corte de energía
-   34: le permite elegir a qué tipo de alarma de red Zwave debe reaccionar el enchufe
-   35: le permite configurar cómo reaccionará el enchufe a las alarmas
-   39: le permite establecer la duración de la alarma
-   40: permite definir cuanto debe variar la potencia para ser aumentada (en %)
-   42: igual pero en modo estándar (hasta 5 veces por paso definido en el parámetro 43)
-   43: intervalo de aceleración
-   45: Intervalo de incremento de consumo (en kWh 10=0,1 kWh)
-   47: intervalo en segundos para reportar información independientemente de una variación
-   49: tener en cuenta el consumo del propio módulo en los valores
-   50: valor mínimo utilizado por el parámetro 52
-   51: valor máximo utilizado por el parámetro 52
-   52: acción a tomar si la potencia sale de los límites definidos en los parámetros 50 y 51
-   60: potencia más allá de la cual el enchufe parpadeará en púrpura
-   61: color cuando el enchufe está encendido
-   62: color cuando el enchufe está apagado
-   63: color cuando se detecta una alarma Zwave
-   70: energía de seguridad (el enchufe se cortará cuando la energía alcance este umbral)

### Groupes

Este módulo tiene 3 grupos de asociación, solo el tercero es imprescindible.

![Groupe](images/fibaro.fgwpe101/groupe.jpg)

## Bueno saber

### Reset

![Config5](images/fibaro.fgwpe101/config5.jpg)

Puede restablecer su contador de consumo haciendo clic en este botón disponible en la pestaña Sistema. Tienes que elegir PressButton.

## Wakeup

No hay concepto de despertar en este módulo.
