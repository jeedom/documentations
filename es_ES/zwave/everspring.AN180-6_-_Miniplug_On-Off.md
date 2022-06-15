# Minienchufe Everspring encendido/apagado - AN180-6

**El módulo**

![module](images/everspring.AN180-6/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/everspring.AN180-6/vuedefaut1.jpg)

## Resumen

El Mini Toma de Encendido/Apagado está diseñado para controlar el encendido y apagado de luces y equipos eléctricos en su hogar. Con un voltaje de 220 - 240 V, este Socket puede soportar una carga de hasta 1500W (resistencia), 800W (incandescente), 200W (motor, fluorescente, Led).

El mini enchufe de encendido/apagado es un dispositivo habilitado para Z-Wave™ que está diseñado para funcionar con todas las redes habilitadas para Z-Wave™. Puede ser controlado por un control remoto, software de PC o cualquier controlador Z-Wave en su red.

## Fonctions

-   Controlar una lámpara o un dispositivo de forma remota
-   Módulo de enchufe que se integra directamente entre una toma eléctrica y la carga a controlar
-   Función ON/OFF para controlar lámparas o electrodomésticos (sin atenuación))
-   Control de carga local mediante botón integrado
-   Tecnología Z-Wave Plus
-   Dimensiones reducidas para pasar casi desapercibido
-   LED de estado en el botón integrado
-   Función de repetidor Z-Wave

## Características técnicas

-   Tipo de mod : Receptor de onda Z
-   Alimento : 230V, 50Hz
-   Consumo : 0.6W
-   Máximo poder : Carga resistente : 1500W, bombilla incandescente : Bombilla fluorescente compacta de 800 W : 200W, Bombilla Led (no regulable) 200W
-   Frecuencia : 868.42Mhz
-   Alcance : hasta 70 m en exterior, hasta 30 m en interior
-   Affichage: LED en el botón
-   Dimensiones : Longitud (incluido el enchufe) : 74 mm de diámetro : 52mm

## Datos del módulo

-   Marca : Everspring
-   Apellido : Mini-enchufe encendido/apagado
-   Identificación del fabricante : 96
-   Tipo Producto : 4
-   Identificación de producto : 7

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar su botón 3 veces, de acuerdo con su documentación en papel. Es importante señalar que este módulo entra directamente en inclusión cuando no pertenece a ninguna red y está alimentado

![inclusion](images/everspring.AN180-6/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/everspring.AN180-6/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con los módulos estarán disponibles.

![Pedidos](images/everspring.AN180-6/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : Este es el comando que le permite conocer el estado del socket (On/Off)
-   Nosotros : Este es el comando que le permite encender el zócalo
-   Apagado : Este es el comando que le permite apagar el zócalo

Tenga en cuenta que en el tablero, la información de Estado, ENCENDIDO/APAGADO se encuentra en el mismo icono.

### Configuración del módulo

Puede configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/everspring.AN180-6/config1.jpg)

Detalles del parámetro :

-   1 : Este parámetro deﬁne el valor de estado del comando, no es recomendable cambiar este valor.
-   2 : Este parámetro define el retraso para enviar el cambio de estado al grupo 1 (valor entre 3 y 25 segundos)
-   3 : Este parámetro se utiliza para definir si el enchufe volverá a su estado (ENCENDIDO o APAGADO) después de una recuperación de energía.

### Groupes

Este módulo tiene 2 grupos de asociación.

![Groupe](images/everspring.AN180-6/groupe.jpg)

> **Importante**
>
> Al menos Jeedom debería terminar en el grupo 1

## Bueno saber

### Especificidades

-   La retroalimentación de estado no se puede configurar en menos de 3 segundos.

## Wakeup

No hay noción de despertar en este módulo.
