# Fibaro FGRM-222 "Persiana enrollable"

**El módulo**

![module](images/fibaro.fgrm222/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/fibaro.fgrm222/vuedefaut1.jpg)

## Resumen

El micromódulo FGRM-222 le permitirá gestionar persianas motorizadas con topes electrónicos, persianas venecianas o incluso puertas de garaje utilizando el protocolo Z-Wave manteniendo su interruptor actual. Por lo tanto, podrá operar el motor conectado utilizando el interruptor existente, un transmisor Z-Wave o directamente desde el botón del micromódulo.

Además, este micromódulo es capaz de transmitir el consumo eléctrico instantáneo (W) y acumulado (KWh) de los equipos que tiene acoplados.

Se requiere un controlador Z-Wave (control remoto, dongle, etc.) para integrar este módulo en su red si ya tiene una red existente.

Cada módulo Z-Wave funciona como un repetidor inalámbrico con los demás módulos, para garantizar la cobertura total de su hogar.

Nota : Este módulo requiere el neutral para operar.

## Fonctions

-   Controla tus persianas o persianas a distancia
-   Compatible con BSO y persianas venecianas con posicionamiento de lamas
-   Se instala detrás de un interruptor existente
-   Subir/bajar función y posicionamiento
-   Compatible con motores con parada mecánica o electrónica
-   Medición de consumos instantáneos y acumulados
-   Actualización inalámbrica con la caja Fibaro Home Center 2
-   Función de prueba de cobertura de red Z-Wave
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de mod : Receptor de onda Z
-   Alimento : 230V, 50Hz
-   El consumo de energía : &lt; 0,8W
-   Alambrado : 3 hilos, se requiere neutro
-   Carga maxima : 1000W
-   Frecuencia : 868.42Mhz
-   Intensidad de señal : 1mW
-   Distancia de transmisión : 50m campo abierto, 30m bajo techo
-   Dimensions: 17x42x37mm
-   Temperatura de funcionamiento : 0-40°C
-   Temperatura límite : 105°C
-   Estándares : LVD (2006/95/EC), EMC (2004/10B/EC), R&TTE (1999/5/EC))

## Datos del módulo

-   Marca : Grupo fibar
-   Apellido : Fibaro FGRM-222
-   Identificación del fabricante : 271
-   Tipo Producto : 769
-   Identificación de producto : 4097

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/fibaro.fgrm222/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/fibaro.fgrm222/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/fibaro.fgrm222/commandes.jpg)

![Pedidos](images/fibaro.fgrm222/commandes2.jpg)

Aquí está la lista de comandos :

-   Estado : Este es el comando que te permite saber la posición de tu persiana
-   Posicionamiento : Este es el comando que le permite definir el porcentaje de apertura
-   Arriba : Este es el comando que le permite abrir completamente el obturador
-   Abajo : Este es el comando que le permite cerrar completamente la persiana
-   Actualizar : Este es el mando que permite volver a solicitar la posición de la persiana
-   Potencia : Comando para obtener el consumo del módulo
-   Consumo : Comando utilizado para conocer la potencia instantánea utilizada por el módulo
-   DETÉNGASE : Mando para detener el movimiento de la persiana
-   DETENER BSO : Mando de parada del movimiento (en modo lamas orientables))
-   Inclinación : Permite inclinar las lamas (modo lamas orientables))
-   Rechazar : Permite declinar las lamas (modo de lamas regulables))
-   No : Le permite definir el paso para presionar Rechazar o Inclinar

### Configuración del módulo

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/fibaro.fgrm222/config1.jpg)

![Config2](images/fibaro.fgrm222/config2.jpg)

![Config3](images/fibaro.fgrm222/config3.jpg)

![Config4](images/fibaro.fgrm222/config4.jpg)

Detalles del parámetro :

-   1: le permite bloquear el módulo (para congelar un obturador) (en el caso de presionar un interruptor)
-   2: igual pero para los comandos zwave
-   3: tipo de informes (clásico o fibar)
-   10: modo de funcionamiento (persiana veneciana, persiana, etc.))
-   12: duración de un giro completo (en modo persiana veneciana)
-   13: permite elegir cuándo deben volver las lamas a su posición anterior
-   14: le permite elegir el tipo de interruptor
-   17: le permite elegir cuánto tiempo después del límite definido en 18 se detiene el obturador
-   18: energía de seguridad para el motor
-   22: NA
-   29: le permite calibrar el obturador
-   30 a 35: permite definir el comportamiento del módulo frente a las diferentes alarmas zwave
-   40: delta de potencia para activar la retroalimentación (incluso fuera del período definido en 42)
-   42: período de retroalimentación
-   43: delta de energía para activar la retroalimentación (incluso fuera del período definido en 42)
-   44: permite elegir si el consumo y la potencia deben tener en cuenta la del propio módulo
-   50: permite elegir si el módulo debe enviar la información a los nodos en asociación en modo escena o en modo asociación

### Groupes

Este módulo tiene 3 grupos de asociación, solo el tercero es imprescindible.

![Groupe](images/fibaro.fgrm222/groupe.jpg)

## Bueno saber

### Reset

![Config5](images/fibaro.fgrm222/config5.jpg)

Puede restablecer su contador de consumo haciendo clic en este botón disponible en la pestaña Sistema.

### Important

> **Importante**
>
> Para que la retroalimentación de estado funcione en Jeedom, es necesario forzar la calibración del equipo (parámetro 29 a "Sí") y el posicionamiento debe estar activo (parámetro 10 a los valores "Activo directo", "Activo veneciano" o "Activar puerta").


## Wakeup

No hay noción de despertar en este módulo.
