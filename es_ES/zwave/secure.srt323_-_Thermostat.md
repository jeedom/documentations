# Termostato seguro SRT 323""

**El módulo**

![module](images/secure.srt323/module.jpg)

**El jeedom visual**

![vuedefaut1](images/secure.srt323/vuedefaut1.jpg)

## Resumen

El SRT323 es un termostato de pared que funciona con pilas. Tiene una perilla giratoria que permite al usuario ajustar la temperatura establecida en la habitación. Este termostato incorpora un relé de control de carga. Por lo tanto, no es necesario instalar un actuador cerca de la caldera.

Comprobando la temperatura de consigna con la temperatura real medida, el termostato decide hacer funcionar la caldera. Además, este termostato incorpora un algoritmo TPI (tiempo-proporcional integral), que permite optimizar y ajustar con mayor precisión la temperatura de tu entorno.

El termostato puede recibir la temperatura establecida de otro controlador Z-Wave y también puede usarse como sensor de temperatura. El termostato en sí no tiene un temporizador incorporado, pero ejecuta comandos Z-Wave y comandos locales.

Se puede utilizar como reemplazo directo de los termostatos existentes, sin tener que realizar cambios en el cableado. El algoritmo TPI permitirá optimizar el encendido y apagado de la caldera para mantener mejor la temperatura establecida, sin "sobrepasarla". Se ha demostrado que los controladores TPI pueden proporcionar un ahorro de energía considerable en comparación con los controladores de calefacción tradicionales.

El SRT323 es un socio ideal para usar con la puerta de enlace de automatización del hogar, lo que le permite controlar de forma remota su sistema de calefacción. Ya no tendrá que preocuparse por volver a casa a una casa fría, siempre que tenga un teléfono inteligente, una tableta o una PC a mano y conectado a Internet.

## Fonctions

-   Termostato para aplicación doméstica
-   Reemplaza un termostato existente
-   Tecnología inalámbrica Z-Wave
-   Pantalla LCD retroiluminada
-   Fácil de usar
-   Compatible con otros productos Z-Wave
-   Un botón

## Características técnicas

-   Tipo de mod : Controlador Z-Wave
-   Algoritmo TPI integrado
-   Relai: 3(1)A 230V CA
-   Rango de temperatura ajustable: 5°C a 30°C
-   Alimento : 2 pilas AAA (LR3))
-   Duración de la batería : 2 años
-   Frecuencia : 868.42Mhz
-   Alcance : hasta 50 m en campo libre
-   Indice de PROTECCION : IP30
-   Temperatura de funcionamiento : 0°C a 40°C
-   Dimensiones : 86x86x36,25mm

## Datos del módulo

-   Marca : Horstmann
-   Apellido : SRT 323 Termostato electrónico de ambiente y temperatura
-   Identificación del fabricante : 89
-   Tipo Producto : 1
-   Identificación de producto : 4

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión debe poner el interruptor 1 en la posición ON luego con la rueda mostrar L y presionar la rueda, de acuerdo con su documentación en papel.

![inclusion](images/secure.srt323/inclusion.jpg)

> **Importante**
>
> Este módulo es caprichoso en la inclusión. Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión. Para hacer esto, deje el interruptor 1 en la posición ON luego con el dial gire a la posición "n" y presione el botón. Presione una segunda vez después de 10 segundos para asegurarse. Una vez hecho esto, haga clic en el botón Sincronizar (visible en la vista de experto) junto a los botones Incluir/Excluir. Luego, en la página de su módulo, haga clic en la lupa en la parte superior derecha.

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/secure.srt323/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/secure.srt323/commandes.jpg)

Aquí está la lista de comandos :

-   La temperatura : este es el comando de medición de temperatura
-   Estado del punto de consigna : es el comando que da la instrucción actual
-   Consigna : este es el comando que ajusta el setpoint
-   Estado de calentamiento : este es el comando que le permite saber si el termostato está en modo calefacción o no
-   Batería : este es el comando de la bateria

### Configuración del módulo

Luego es necesario configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.
![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/secure.srt323/config1.jpg)

Detalles del parámetro :

-   1: permite activar o no el sensor de temperatura interno
-   2: le permite elegir la unidad de temperatura
-   3: permite definir el nivel de variación de temperatura del módulo para subirla (por unidad de 0,1°C)

### Groupes

Para un funcionamiento óptimo de su módulo, Jeedom debe estar asociado con los 5 grupos
![Groupe](images/secure.srt323/groupe.jpg)

## Bueno saber

### Especificidades

> **Importante**
>
> Este módulo funciona con pilas. Por lo tanto, es importante tener en cuenta que un cambio de punto de ajuste solo se tendrá en cuenta cuando se despierte. Por defecto, la activación es a los 86400 segundos. Se recomienda encarecidamente reducirlo a unos 10 minutos. Por lo tanto, el módulo tendrá en cuenta un cambio de consigna después de un máximo de 10 minutos

## Wakeup

Para despertar este módulo, debe poner el interruptor 1 en la posición ON y
con la rueda elige n y presiona la rueda.

## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
