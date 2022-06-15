# 

**El módulo**

![module](images/greenwave.powernode/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/greenwave.powernode/vuedefaut1.jpg)

## Resumen

. . .

. . . .  ". . . .

 : .

. . .

.

## Fonctions

-   
-   
-   
-   .
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
-   Tipo Producto : 3
-   Identificación de producto : 4

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> .

![inclusion](images/greenwave.powernode/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/greenwave.powernode/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/greenwave.powernode/commandes.jpg)

![Pedidos](images/greenwave.powernode/commandes2.jpg)

![Pedidos](images/greenwave.powernode/commandes3.jpg)

![Pedidos](images/greenwave.powernode/commandes4.jpg)

![Pedidos](images/greenwave.powernode/commandes5.jpg)

Aquí está la lista de comandos :

-    : 
-    : 
-    : 
-    : 
-    : 
-    : 
-    : 
-    : 
-    : 
-    : 
-    : 
-    : 
-   Fuera de 3 : Este es el comando que apaga el socket 3
-   Poder-3 : Este es el comando que informa la potencia instantánea consumida por el zócalo 3
-   Consola-3 : Este es el comando que reporta el consumo total del socket 3
-   Estado-4 : Este es el comando que le permite saber el estado del socket 4
-   En-4 : Este es el comando que enciende el socket 4
-   Fuera de 4 : Este es el comando que apaga el socket 4
-   Poder 4 : Este es el comando que informa la potencia instantánea consumida por el zócalo 4
-   Consola-4 : Este es el comando que reporta el consumo total del socket 4
-   Estado-5 : Este es el comando que le permite saber el estado del socket 5
-   En-5 : Este es el comando que enciende el socket 5
-   Fuera de 5 : Este es el comando que apaga el socket 5
-   Poder-5 : Este es el comando que informa la potencia instantánea consumida por el zócalo 5
-   Conso-5 : Este es el comando que devuelve el consumo total del socket 5
-   Estado-6 : Este es el comando que te permite saber el estado del socket 6
-   En-6 : Este es el comando que enciende el socket 6
-   Fuera de 6 : Este es el comando que apaga el socket 6
-   Poder-6 : Este es el comando que reporta la potencia instantánea consumida por el socket 6
-   Conso-6 : Este es el comando que reporta el consumo total del socket 6

Tenga en cuenta que en el tablero de instrumentos los comandos ON/OFF/ESTADO están agrupados en un solo botón.

### Configuración del módulo

Puede configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/greenwave.powernode/config1.jpg)

Como puede ver, no hay mucha configuración para este módulo.

Detalles del parámetro :

-   1 : Retrasos antes de que el botón parpadee : número mínimo de segundos entre dos comunicaciones (si se supera este tiempo, el botón del enchufe parpadeará))
-   2 : Color de rueda seleccionado (detectado automáticamente)

### Groupes

Este módulo tiene cuatro grupos de asociación, solo el 1er grupo es esencial.

![Groupe](images/greenwave.powernode/groupe.jpg)

## Bueno saber

### Especificidades / Sondeo

A diferencia de su hermana pequeña "One socket", esta regleta requiere sondeo para aumentar el consumo.
![Config2](images/greenwave.powernode/config2.jpg)

Solo es necesario activarlo para el comando Power de cada toma. Esto tendrá el efecto de elevar los dos (consumo y potencia)

### Consumo mundial

![consocumul](images/greenwave.powernode/consocumul.jpg)

Puede usar un virtual para crear un consumo acumulativo de los 6 enchufes.

![consocumul2](images/greenwave.powernode/consocumul2.jpg)

### Reset

![Config3](images/greenwave.powernode/config3.jpg)

Puede restablecer su contador de consumo haciendo clic en este botón disponible en la pestaña Sistema. (Hay un reinicio por socket). Tienes que elegir PressButton.

## Wakeup

No hay noción de despertar en este módulo.
