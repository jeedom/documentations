# Edisio EMS 200

**El módulo**

![ems200.module](images/ems200/ems200.module.jpg)

## Resumen

Colocado en un pasillo, la sala de estar, el garaje de su casa, por ejemplo, el sensor de movimiento detecta una presencia, el cambio de estado es instantáneo.

Gracias a su amplio ángulo de visión y su alcance, permite asegurar un perímetro grande. El indicador LED integrado señala cualquier cambio de estado.

## Fonctions

-   Detecta movimiento, incluso en completa oscuridad
-   Ultra compacto
-   Señal transmitida instantáneamente al detectarla
-   Autoprotección contra el levantamiento
-   Facilidad de uso e instalación
-   Montaje en pared por tornillos o doble cara
-   Información de nivel de batería

## Características técnicas

-   Tipo de módulo : Transmisor Edisio
-   Suministro : 3VDC (batería de litio ER14250)
-   Frecuencia : 868.3 MHz
-   Temperatura de funcionamiento : 0 ° C + 45 ° C
-   Rango en campo libre : 100M
-   Rango de detección : 6M
-   Dimensiones : 25x79x19mm
-   Grado de protección : IP20
-   Uso : En el interior

## Datos del módulo

-   Hacer : Edisio Smart Home
-   Nombre : EMS-200

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom, consulte este [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, no olvide activar la opción en la configuración del complemento.

> **Punta**
>
> Se recomienda su colocación a una altura de 150 cm y cerca de la temperatura deseada del fieltro.

### Botón "E""

Encontrará el botón "E", que es el botón de asociación del sensor de temperatura.

![ems200.bouton e](images/ems200/ems200.bouton-e.jpg)

### Detección

El sensor detecta el más mínimo movimiento dentro de un radio de unos 6 m

![ems200.detection](images/ems200/ems200.detection.jpg)

### Ajuste del temporizador

Por defecto, el temporizador está deshabilitado. Este parámetro se usa para configurar el retraso :

![ems200.minuterie](images/ems200/ems200.minuterie.jpg)

## Asociación del sensor con Jeedom

La asociación del sensor de movimiento es tan fácil. Simplemente presione el botón "E", ubicado debajo del sensor. Esto será reconocido automáticamente por Jeedom. Solo ve al plugin Edisio. Podrá colocarlo en un objeto, asignarle un nombre y guardar.

Una vez que su equipo está emparejado, debe obtener esto :

![ems200.general](images/ems200/ems200.general.jpg)

> **Punta**
>
> Para que el widget esté presente en el tablero, recuerde colocar su equipo en un objeto.

### Commandes

Una vez que se crea su equipo, debe obtener los comandos asociados con el módulo :

![Comandos](images/ems200/ems200.commande.jpg)

Aquí está la lista de comandos :

-   Presencia : Es el comando que indica si se detecta una presencia
-   Batería : Indica el estado de la batería

### Informations

Una vez que su equipo esté asociado con Jeedom, habrá diversa información disponible :

![Comandos](images/ems200/ems200.informations.jpg)

-   Creación : Indica la fecha en que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el módulo
-   Batería : Indica el estado de la batería de los módulos de batería
-   Estado : Devuelve el estado del módulo
