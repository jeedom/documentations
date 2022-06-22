# 

**El módulo**

![module](images/everspring.AN180-6/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/everspring.AN180-6/vuedefaut1.jpg)

## Resumen

. ).

. .

## Fonctions

-   
-   
-   )
-   
-   Tecnología Z-Wave Plus
-   
-   
-   Función de repetidor Z-Wave

## Características técnicas

-   Tipo de mod : Receptor de onda Z
-   Alimento : 230V, 50Hz
-   Consumo : 
-   Máximo poder : Carga resistente :  :  : 
-   Frecuencia : 868.42Mhz
-   Alcance : hasta 70 m en exterior, hasta 30 m en interior
-   Affichage: LED en el botón
-   Dimensiones : ) :  : 52mm

## Datos del módulo

-   Marca : Everspring
-   Apellido : 
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

-   Estado : )
-   Nosotros : Este es el comando que le permite encender el zócalo
-   Apagado : Este es el comando que le permite apagar el zócalo

.

### Configuración del módulo

Puede configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/everspring.AN180-6/config1.jpg)

Detalles del parámetro :

-   1 : Este parámetro deﬁne el valor de estado del comando, no es recomendable cambiar este valor.
-   2 : )
-   3 : .

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
