# "

**El módulo**

![module](images/dlink.dchz110/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/dlink.dchz110/vuedefaut1.jpg)

## Resumen

 : .  : . .

). . .

. .

## Fonctions

-   : 
-   
-   
-   
-   Autoprotection
-   
-   
-   

## Características técnicas

 [](http://www.dlink.com/-/media/Consumer_Products/DCH/DCH%20Z110/Datasheet/DCH_Z110_Datasheet_FR.pdf)

 [](http://www.kafkas.gr/uploads/Pdf/182732/DCH-Z120_183010381_01_Z02.PDF)

![caracteristiques techniques](images/dlink.dchz110/caracteristiques_techniques.jpg)

## Datos del módulo

-   Marca : D-Link
-    : 
-    : 
-   Identificación del fabricante : ]
-   Tipo Producto : ]
-   Identificación de producto : ]

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> . (.. ()

![config inclusion](images/dlink.dchz110/config-inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/dlink.dchz110/apres_inclusion.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/dlink.dchz110/commandes.jpg)

Aquí está la lista de comandos :

-   Apertura : este es el comando que reportará una detección de apertura
-   La temperatura : este es el comando que te permite subir la temperatura
-   Brillo : este es el comando que te permite aumentar el brillo
-   Sabotaje : este es el comando de sabotaje (se activa en caso de rotura)
-   Batería : este es el comando de la bateria

### Configuración del módulo

> **Importante**
>
> . .

Luego es necesario configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/dlink.dchz110/config1.jpg)

![Config2](images/dlink.dchz110/config2.jpg)

Detalles del parámetro :

-   2: ajusta la señal enviada a los módulos en el grupo de asociación 2
-   4: permite ajustar el nivel de brillo a partir del cual se enviará la señal definida en el parámetro 2 a los módulos asociados al grupo 2
-   5: )
-   6: ).  : 7
-   7: ).  : )
-   9: permite definir después de cuánto tiempo se enviará la señal de APAGADO a los módulos asociados al grupo 2
-   10: le permite definir la duración entre dos informes de batería (una unidad = parámetro 20)
-   11: le permite definir la duración entre dos relaciones de apertura automática (una unidad = parámetro 20)
-   12: ).  : 6
-   13: ).  : 2
-   20: .  : 10
-   21: valor de variación en °F de la temperatura para activar un informe
-   22: .  : 10

### Groupes

Este módulo tiene dos grupos de asociación, solo el primero es imprescindible.

![Groupe](images/dlink.dchz110/groupe.jpg)

## Bueno saber

: )

## Wakeup

Para activar este módulo solo hay una forma de proceder :

-   
-   )

## .

.

. ()

## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
