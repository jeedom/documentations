# SmartHome de Everspring Atenuador de pared - AD146-0

**El módulo**

![module](images/smarthomebyeverspring.AD146-0/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/smarthomebyeverspring.AD146-0/vuedefaut1.jpg)

## Resumen

Este Micromódulo Wall Dimmer de SmartHome Europe by Everspring está diseñado para controlar el encendido y apagado de luces y equipos eléctricos de tu hogar. También puede proporcionar una función de atenuación que solo es compatible con bombillas. A un voltaje de 230V, este módulo puede soportar hasta 300 Watts en carga resistiva o incandescente, o 200 Watts de carga fluorescente.

Se puede utilizar en modo 2 hilos (sin neutro), reemplazando un interruptor existente, o en modo 3 hilos con un módulo de alimentación convencional (Fase + Neutro).

El módulo de atenuación de pared es un dispositivo habilitado para Z-Wave™ que está diseñado para funcionar con todas las redes habilitadas para Z-Wave™. Se puede controlar por control remoto, software de PC o cualquier controlador Z-Wave en su red.

## Fonctions

-   Controlar una luz/aparato de forma remota
-   Se instala detrás de un interruptor existente
-   Función ON/OFF y atenuación
-   Bajo consumo de energía
-   Dimensiones muy pequeñas y reducidas
-   Antena de largo alcance
-   Tecnología Z-Wave Plus
-   Se instala fácilmente en una caja posterior estándar
-   Uso en modo de 2 hilos (neutro no necesario))
-   Compatible con bombillas LED regulables
-   Botón para incluir/excluir/asociar el módulo
-   Función de repetidor Z-Wave

## Características técnicas

-   Tipo de mod : Receptor de onda Z
-   Alimento : 230V, 50Hz
-   Consumo : 0.5W
-   Máximo poder :
-   Carga resistente : 300W
-   Bombilla incandescente : 300W
-   Bombilla fluocompacta : 200W
-   Frecuencia : 868.42Mhz
-   Alcance : hasta 70 m en exterior, hasta 30 m en interior
-   Affichage: LED en el botón
-   Dimensiones : 42 mm x 43 mm x 16 mm

## Datos del módulo

-   Marca : Hogar inteligente de Everspring
-   Apellido : Atenuador de pared
-   Identificación del fabricante : 96
-   Tipo Producto : 3
-   Identificación de producto : 2

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar su botón 3 veces, de acuerdo con su documentación en papel. Es importante señalar que este módulo entra directamente en inclusión cuando no pertenece a ninguna red y está alimentado

![inclusion](images/smarthomebyeverspring.AD146-0/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/smarthomebyeverspring.AD146-0/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/smarthomebyeverspring.AD146-0/commandes.jpg)

Aquí está la lista de comandos :

-   Intensidad : Este es el control para ajustar la intensidad de la luz
-   Nosotros : Este es el comando que enciende la luz
-   Apagado : Este es el comando que apaga la luz
-   Estado : Este es el comando que te permite saber el estado de la luz

Tenga en cuenta que en el tablero, la información de Estado, ENCENDIDO/APAGADO e intensidad se encuentra en el mismo icono.

### Configuración del módulo

Puede configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/smarthomebyeverspring.AD146-0/config1.jpg)

Detalles del parámetro :

-   1 : Este parámetro deﬁne el valor de estado del comando, no es recomendable cambiar este valor.
-   2 : Este parámetro define el retraso para enviar el cambio de estado al grupo 1 (valor entre 3 y 25 segundos)
-   3 : Este parámetro se utiliza para definir si el interruptor volverá a su estado (ENCENDIDO o APAGADO) después de una recuperación de energía.
-   4 : Este parámetro se utiliza para definir el tipo de interruptor (pulsador/biestable)
-   5 : Este parámetro se utiliza para definir si el interruptor funcionará en modo de atenuación o en modo de encendido/apagado

### Groupes

Este módulo tiene 2 grupos de asociación.

![Groupe](images/smarthomebyeverspring.AD146-0/groupe.jpg)

> **Importante**
>
> Al menos Jeedom debería terminar en el grupo 1

## Bueno saber

### Especificidades

-   La retroalimentación de estado no se puede configurar en menos de 3 segundos.

## Wakeup

No hay concepto de despertar en este módulo.
