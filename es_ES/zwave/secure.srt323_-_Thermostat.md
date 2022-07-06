# Termostato SRT seguro de 323 ""

**El módulo**

![module](images/secure.srt323/module.jpg)

**El visual de la libertad**

![vuedefaut1](images/secure.srt323/vuedefaut1.jpg)

## Resumen

El SRT323 es un termostato de batería montado en la pared. Tiene un botón giratorio que permite al usuario ajustar la temperatura establecida en la habitación. Este termostato incorpora un relé de control de carga. Por lo tanto, no es necesario instalar un actuador cerca de la caldera.

Al verificar la temperatura de consigna con la temperatura real medida, el termostato decide activar la caldera. Además, este termostato incorpora un algoritmo TPI (integral proporcional al tiempo), que permite la optimización y el ajuste más justo de la temperatura de su entorno.

El termostato puede recibir la temperatura establecida desde otro controlador Z-Wave, y también puede usarse como un sensor de temperatura. El termostato en sí no tiene un temporizador incorporado, pero ejecuta Z-Wave y comandos locales.

Se puede usar como un reemplazo directo para los termostatos existentes, sin tener que hacer ningún cambio de cableado. El algoritmo TPI optimizará el encendido y apagado de la caldera para mantener mejor la temperatura establecida, sin "excederla". Se ha demostrado que los controladores TPI proporcionan ahorros de energía considerables en comparación con los controladores de calefacción tradicionales.

El SRT323 es un socio ideal para usar con una puerta de enlace domótica, lo que le permite controlar de forma remota su sistema de calefacción. Ya no tendrá que preocuparse por ir a casa a una casa fría, siempre que tenga a mano un teléfono inteligente, una tableta o una PC y esté conectado a Internet.

## Fonctions

-   Termostato para aplicación doméstica
-   Reemplaza un termostato existente
-   Tecnología inalámbrica Z-Wave
-   Pantalla LCD retroiluminada
-   Fácil de usar
-   Compatible con otros productos Z-Wave
-   Un botón

## Características técnicas

-   Tipo de módulo : Controlador Z-Wave
-   Algoritmo TPI integrado
-   Relai: 3 (1) A 230V CA
-   Rango de temperatura ajustable: 5 ° C a 30 ° C
-   Suministro : 2 pilas AAA (LR3)
-   Duración de la batería : 2 años
-   Frecuencia : 868.42 Mhz
-   Alcance : hasta 50 m en campo abierto
-   Indice de PROTECCION : IP30
-   Temperatura de funcionamiento : 0 ° C a 40 ° C
-   Dimensiones : 86 x 86 x 36.25 mm

## Datos del módulo

-   Hacer : Horstmann
-   Nombre : SRT 323 Termostato ambiental electrónico y temperatura
-   ID del fabricante : 89
-   Tipo de producto : 1
-   ID del producto : 4

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe colocar el interruptor 1 en la posición ON, luego usar el dial para mostrar L y presionar el dial, de acuerdo con su documentación en papel.

![inclusion](images/secure.srt323/inclusion.jpg)

> **Importante**
>
> Este módulo es meticuloso en la inclusión. Durante una primera inclusión, siempre active el módulo justo después de la inclusión. Para hacer esto, deje el interruptor 1 en la posición ON, luego con la ruedecilla, colóquelo en la posición "n" y presione el botón. Presione una segunda vez después de 10 segundos para asegurarse. Una vez hecho esto, haga clic en el botón Sincronizar (visible en la vista experta) junto a los botones de inclusión / exclusión. Luego, en la página de su módulo, haga clic en la lupa en la parte superior derecha.

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/secure.srt323/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/secure.srt323/commandes.jpg)

Aquí está la lista de comandos :

-   Temperatura : es el comando de medición de temperatura
-   Estado : es el comando que da la instrucción actual
-   Consigna : es el comando que hace posible ajustar el punto de ajuste
-   Estado de calentamiento : Es el comando que permite saber si el termostato está en modo calefacción o no
-   Batería : es el comando de la batería

### Configuracion del modulo

Entonces es necesario configurar el módulo de acuerdo con su instalación. Para hacer esto, vaya al botón "Configuración" del complemento OpenZwave de Jeedom.
![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de parámetros)

![Config1](images/secure.srt323/config1.jpg)

Detalles del parámetro :

-   1: permite activar o no el sensor de temperatura interno
-   2: permite elegir la unidad de temperatura
-   3: le permite definir el nivel de variación de temperatura para que el módulo lo eleve (en unidades de 0.1 ° C)

### Groupes

Para un funcionamiento óptimo de su módulo, Jeedom debe estar asociado con los 5 grupos
![Groupe](images/secure.srt323/groupe.jpg)

## Bueno saber

### Específicos

> **Importante**
>
> Este módulo está en batería. Por lo tanto, es importante tener en cuenta que un cambio de punto de ajuste solo se tendrá en cuenta cuando se despierte. Por defecto, el despertador es a 86400 segundos. Se recomienda reducirlo a unos 10 minutos. Por lo tanto, el módulo tendrá en cuenta un cambio de punto de ajuste como máximo después de 10 minutos

## Wakeup

Para activar este módulo, debe colocar el interruptor 1 en la posición ON y
con la rueda, elija n y presione la rueda.

## Nota importante

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio en la configuración, después de un cambio en la activación, después de un cambio en los grupos de asociación
