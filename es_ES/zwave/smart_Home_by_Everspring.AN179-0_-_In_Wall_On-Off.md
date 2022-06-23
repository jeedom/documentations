# SmartHome de Everspring In Wall On Off - AN179-0

**El módulo**

![module](images/smarthomebyeverspring.AN179-0/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/smarthomebyeverspring.AN179-0/vuedefaut1.jpg)

## Resumen

El Micromódulo de Pared ON/OFF de SmartHome Europe de Everspring está diseñado para controlar el encendido y apagado de luces y electrodomésticos de tu hogar. Dos juegos de contactos secos permiten la conexión de dos interruptores.

Por motivos de seguridad, la unidad puede detectar el sobrecalentamiento y apagará directamente el relé para evitar daños. A un voltaje de 230 V, este módulo puede soportar hasta 11 A en carga resistiva, 1200 Watts incandescentes, 700 Watts de motor o 320 Watts (8 x 40 Watts) de carga fluorescente.

El micromódulo de pared ON/OFF es un dispositivo compatible con Z-Wave™ diseñado para funcionar con todas las redes compatibles con Z-Wave™. Se puede controlar por control remoto, software de PC o cualquier controlador Z-Wave en su red.

## Fonctions

-   Controlar una luz/aparato de forma remota
-   Se instala detrás de un interruptor existente
-   Función de encendido/apagado
-   Bajo consumo de energía
-   Dimensiones muy pequeñas y reducidas
-   Antena de largo alcance
-   Tecnología Z-Wave Plus
-   Se instala fácilmente en una caja posterior estándar
-   Botón para incluir/excluir/asociar el módulo
-   Función de repetidor Z-Wave

## Características técnicas

-   Tipo de mod : Receptor de onda Z
-   Alimento : 230V, 50Hz
-   Consumo : 0.5W
-   Máximo poder : Carga resistente : Bombilla incandescente de 2500W : Bombilla fluorescente compacta de 1200W : 320W
-   Frecuencia : 868.42Mhz
-   Alcance : hasta 70 m en exterior, hasta 30 m en interior
-   Affichage: LED en el botón
-   Dimensiones : 42 mm x 43 mm x 16 mm

## Datos del módulo

-   Marca : Hogar inteligente de Everspring
-   Apellido : En pared Encendido Apagado
-   Identificación del fabricante : 96
-   Tipo Producto : 4
-   Identificación de producto : 8

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar su botón 3 veces, de acuerdo con su documentación en papel. Es importante señalar que este módulo entra directamente en inclusión cuando no pertenece a ninguna red y está alimentado

![inclusion](images/smarthomebyeverspring.AN179-0/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/smarthomebyeverspring.AN179-0/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/smarthomebyeverspring.AN179-0/commandes.jpg)

Aquí está la lista de comandos :

-   Nosotros : Este es el comando que enciende la luz
-   Apagado : Este es el comando que apaga la luz
-   Estado : Este es el comando que le permite saber el estado de la luz

Tenga en cuenta que en el tablero, la información de Estado, ENCENDIDO/APAGADO se encuentra en el mismo icono.

### Configuración del módulo

Puede configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/smarthomebyeverspring.AN179-0/config1.jpg)

Detalles del parámetro :

-   1 : Este parámetro deﬁne el valor de estado del comando, no es recomendable cambiar este valor.
-   2 : Este parámetro define el retraso para enviar el cambio de estado al grupo 1 (valor entre 3 y 25 segundos)
-   3 : Este parámetro se utiliza para definir si el interruptor volverá a su estado (ENCENDIDO o APAGADO) después de una recuperación de energía.
-   4 : Este parámetro se utiliza para definir el tipo de interruptor (pulsador/biestable)

### Groupes

Este módulo tiene 2 grupos de asociación.

![Groupe](images/smarthomebyeverspring.AN179-0/groupe.jpg)

> **Importante**
>
> Al menos Jeedom debería terminar en el grupo 1

## Bueno saber

### Especificidades

-   La retroalimentación de estado no se puede configurar en menos de 3 segundos.

## Despierta

No hay concepto de despertar en este módulo.
