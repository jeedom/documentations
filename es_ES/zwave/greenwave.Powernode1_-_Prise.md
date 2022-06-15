# 

**El módulo**

![module](images/greenwave.Powernode1/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/greenwave.Powernode1/vuedefaut1.jpg)

## Resumen

.

.

. .

.  ". . . .

 : .

. . .

## Fonctions

-   Controlar una lámpara o un dispositivo de forma remota
-   Módulo de enchufe que se integra directamente entre una toma eléctrica y la carga a controlar
-   
-   
-   
-   
-   
-   

## Características técnicas

-   Alimento : 
-    : 10A
-    : )
-   Consumo en espera : 
-    : 
-    : 
-    : )
-    : 
-    : 30m
-   Temperatura de funcionamiento : 
-    : -
-    : 
-   ) : IP20

## Datos del módulo

-   Marca : GreenWave
-   Apellido : ]
-   Identificación del fabricante : 153
-   Tipo Producto : 2
-   Identificación de producto : 2

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> .

![inclusion](images/greenwave.Powernode1/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/greenwave.Powernode1/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/greenwave.Powernode1/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : 
-   Nosotros : Este es el comando que le permite encender el zócalo
-   Apagado : Este es el comando que le permite apagar el zócalo
-   Potencia : 
-    : 

Tenga en cuenta que en el tablero de instrumentos los comandos ON/OFF/ESTADO están agrupados en un solo botón.

### Configuración del módulo

Puede configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/greenwave.Powernode1/config1.jpg)

Como puede ver, no hay mucha configuración para este módulo.

Detalles del parámetro :

-   1 :  : número mínimo de segundos entre dos comunicaciones (si se supera este tiempo, el botón del enchufe parpadeará))
-   2 : Color de rueda seleccionado (detectado automáticamente)

### Groupes

.

![Groupe](images/greenwave.Powernode1/groupe.jpg)

## Bueno saber

.

### Reset

![Config2](images/greenwave.Powernode1/config2.jpg)

Puede restablecer su contador de consumo haciendo clic en este botón disponible en la pestaña Sistema. Tienes que elegir PressButton.

### Especificidades

## Wakeup

No hay noción de despertar en este módulo.
