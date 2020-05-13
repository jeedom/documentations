# SmartHome de Everspring en pared encendido apagado - AN179-0

**El módulo**

![module](images/smarthomebyeverspring.AN179-0/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/smarthomebyeverspring.AN179-0/vuedefaut1.jpg)

Resumen
------

El micromódulo Wall / ON de SmartHome Europe de Everspring está diseñado para controlar el encendido y apagado de luces y electrodomésticos en su hogar. Dos juegos de contactos secos permiten la conexión de dos interruptores.

Por razones de seguridad, la unidad puede detectar el sobrecalentamiento y apagará directamente el relé para evitar daños. Con un voltaje de 230 V, este módulo puede soportar hasta 11 A de carga resistiva, 1200 vatios incandescentes, 700 vatios de motor o 320 vatios (8 x 40 vatios) de carga fluorescente.

El Micromodule Mural ON / OFF es un dispositivo compatible con Z-Wave ™ que está diseñado para funcionar con todas las redes compatibles con Z-Wave ™. Puede ser controlado por un control remoto, software de PC o cualquier controlador Z-Wave en su red.

Fonctions
---------

-   Controlar una luz / dispositivo de forma remota
-   Se instala detrás de un interruptor existente
-   Función ON / OFF
-   Bajo consumo de energía
-   Muy pequeño, dimensiones reducidas
-   Antena de largo alcance
-   Tecnología Z-Wave Plus
-   Se instala fácilmente en una caja de empotrar estándar
-   Botón para incluir / excluir / asociar el módulo
-   Función repetidora Z-Wave

Características técnicas
---------------------------

-   Tipo de módulo : Receptor Z-Wave
-   Suministro : 230 V, 50 Hz
-   El consumo : 0.5W
-   Potencia máxima : Carga resistiva : Bombilla incandescente de 2500W : Bombilla fluorescente compacta de 1200 vatios : 320W
-   Frecuencia : 868.42 Mhz
-   Alcance : hasta 70 m en exteriores, hasta 30 m en edificios
-   Affichage: LED en el botón
-   Dimensiones : 42 mm x 43 mm x 16 mm

Datos del módulo
-----------------

-   Hacer : Smarthome por everspring
-   Nombre : En pared encendido apagado
-   ID del fabricante : 96
-   Tipo de producto : 4
-   ID del producto : 8

Configuration
-------------

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione su botón 3 veces, de acuerdo con su documentación en papel. Es importante tener en cuenta que este módulo entra directamente en la inclusión cuando no pertenece a ninguna red y está alimentado

![inclusion](images/smarthomebyeverspring.AN179-0/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/smarthomebyeverspring.AN179-0/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/smarthomebyeverspring.AN179-0/commandes.jpg)

Aquí está la lista de comandos :

-   Uno : Es el control que enciende la luz
-   Apagado : Es el comando que apaga la luz
-   Estado : Es el comando que permite conocer el estado de la luz

Tenga en cuenta que en el tablero de instrumentos, la información de estado, ON / OFF se encuentra en el mismo icono.

### Configuracion del modulo

Puede configurar el módulo de acuerdo con su instalación. Para hacer esto, vaya al botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/smarthomebyeverspring.AN179-0/config1.jpg)

Detalles del parámetro :

-   1 : Este parámetro define el comando de valor de estado, no es aconsejable cambiar este valor.
-   2 : Este parámetro define el retraso para enviar el cambio de estado al grupo 1 (valor entre 3 y 25 segundos)
-   3 : Este parámetro se usa para definir si el interruptor reanudará su estado (ON u OFF) después de una recuperación de energía.
-   4 : Este parámetro define el tipo de interruptor (push / bistable)

### Groupes

Este módulo tiene 2 grupos de asociación.

![Groupe](images/smarthomebyeverspring.AN179-0/groupe.jpg)

> **Importante**
>
> Al menos Jeedom debería terminar en el grupo 1

Bueno saber
------------

### Específicos

-   La retroalimentación de estado no se puede configurar en 3 segundos.

Despertar
-------

No hay noción de despertar en este módulo.
