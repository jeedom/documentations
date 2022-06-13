# Edisio EMS 200

**El módulo**

![ems200.module](images/ems200/ems200.module.jpg)

## Resumen

Colocado en un pasillo, el salón, el garaje de tu casa por ejemplo, el sensor de movimiento detecta una presencia, el cambio de estado es instantáneo.

Gracias a su amplio ángulo de visión y su alcance, permite asegurar un amplio perímetro. El indicador LED incorporado señala cualquier cambio de estado.

## Fonctions

-   Detecta movimiento, incluso en completa oscuridad
-   Ultra compacto
-   Señal transmitida instantáneamente tras la detección
-   Autoprotección extraíble
-   Facilidad de uso e instalación
-   Montaje en pared mediante tornillos o doble cara
-   Información del nivel de la batería

## Características técnicas

-   Tipo de mod : Transmisor Edisio
-   Alimento : 3VDC (batería de litio ER14250)
-   Frecuencia : 868,3 MHz
-   Temperatura de funcionamiento : 0°C +45°C
-   Alcance en campo abierto : 100M
-   Rango de detección : 6M
-   Dimensiones : 25x79x19mm
-   Grado de protección : IP20
-   Usar : Adentro

## Datos del módulo

-   Marca : Hogar inteligente Edisio
-   Apellido : EMS-200

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, no olvide activar la opción en la configuración del complemento.

> **Consejo**
>
> Se recomienda su colocación a una altura de 150 cm y cercana a la temperatura deseada del fieltro.

### Botón "E""

Encontrará el botón "E" que es el botón de emparejamiento del sensor de temperatura.

![ems200.bouton e](images/ems200/ems200.bouton-e.jpg)

### Detección

El sensor detecta el más mínimo movimiento en un radio de aproximadamente 6 m

![ems200.detection](images/ems200/ems200.detection.jpg)

### Configuración del temporizador

Por defecto, el temporizador está deshabilitado. Este parámetro se utiliza para configurar el retardo :

![ems200.minuterie](images/ems200/ems200.minuterie.jpg)

## Asociación del sensor con Jeedom

La asociación del sensor de movimiento, es simple como un pastel. Simplemente presione el botón "E", ubicado debajo del sensor. Esto será reconocido automáticamente por Jeedom. Todo lo que tienes que hacer es ir al plugin de Edisio. Luego puede colocarlo en un objeto, darle un nombre y guardar.

Una vez que su equipo esté vinculado, debería obtener esto :

![ems200.general](images/ems200/ems200.general.jpg)

> **Consejo**
>
> Para que el widget esté presente en el tablero, recuerde colocar su equipo en un objeto.

### Commandes

Una vez creado su equipo, debe obtener los comandos asociados con el módulo :

![Pedidos](images/ems200/ems200.commande.jpg)

Aquí está la lista de comandos :

-   Presencia : Este es el comando que indica si se detecta una presencia
-   Batería : Indica el estado de la batería

### Informations

Una vez que su equipo esté asociado con Jeedom, estará disponible diversa información :

![Pedidos](images/ems200/ems200.informations.jpg)

-   Creación : Indica la fecha en que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el módulo
-   Batería : Indica el estado de la batería de los módulos de batería
-   Estado : Devuelve el estado del módulo
