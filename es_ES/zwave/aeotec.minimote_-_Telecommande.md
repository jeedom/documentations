# Minimodo Aeotec

**El módulo**

![module](images/aeotec.minimote/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/aeotec.minimote/vuedefaut1.jpg)

## Resumen

Este minicontrolador de Aeon Labs es compatible con una amplia variedad de módulos Z-Wave como interruptores, dimmers, detectores de movimiento, interruptores para persianas, etc. Para que puedas controlar de forma remota tus luces, electrodomésticos o persianas enrollables. Con este mando a distancia también puedes incluir/excluir módulos de tu red Z-Wave y asociar escenas a los botones del mando a distancia. Una solapa deslizante oculta los botones para configurar la red Z-Wave.

## Fonctions

-   Configuración de red Z-Wave (inclusión/exclusión de módulos))
-   Le permite controlar hasta 4 escenas
-   8 llaves : 4 para escenas, 4 para configuración de red
-   Funciones de encendido/apagado y atenuación
-   Función TODO ENCENDIDO/TODO APAGADO
-   Batería interna recargable vía USB
-   Actualización de firmware a través de USB

## Características técnicas

-   Tipo de mod : Controlador Z-Wave
-   Color : Blanc
-   Alimento : batería interna recargable a través de USB
-   Affichage: LED azul y rojo
-   Frecuencia : 868,42MHz
-   Alcance : hasta 30m
-   Dimensiones : 0.8 cm x 3.3 cm x 9,3 cm
-   Temperatura de funcionamiento : -35 a +85 °C

## Datos del módulo
 
-   Marca : Aeotec
-   Apellido : Minimote
-   Identificación del fabricante : 134
-   Tipo Producto : 1
-   Identificación de producto : 3

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón APRENDER, de acuerdo con su documentación en papel.

![inclusion](images/aeotec.minimote/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/aeotec.minimote/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/aeotec.minimote/commandes.jpg)

Aquí está la lista de comandos :

-   Botones : este es el comando que levantara el boton presionado
  - 1 : Botón 1 pulsación corta
  - 2 : Botón 1 pulsación larga
  - 3 : Botón 2 pulsaciones cortas
  - 4 : Botón 2 pulsaciones largas
  - 5 : Botón 3 pulsaciones cortas
  - 6 : Botón 3 pulsaciones largas
  - 7 : Botón 4 pulsaciones cortas
  - 8 : Botón 4 pulsaciones largas

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)
 
![Config1](images/aeotec.minimote/config1.jpg)

Detalles del parámetro :

-   241: modo de funcionamiento del botón 1 (dejar por defecto)
-   242: Modo de funcionamiento del botón 2 (dejar por defecto)
-   243: modo de funcionamiento del botón 3 (dejar por defecto)
-   244: modo de funcionamiento del botón 4 (dejar por defecto)
-   250: modo de funcionamiento del mando a distancia (absolutamente dejar Escena para usarlo como mando a distancia)

### Groupes

Este módulo tiene cuatro grupos de asociación, ninguno es necesario para usarlo como control remoto en Jeedom.

![Groupe](images/aeotec.minimote/groupe.jpg)

## Wakeup

 

Para activar este módulo solo hay una forma de proceder :

-   mantenga presionado el botón LEARN durante 3 segundos

## Preguntas frecuentes.

Este módulo se activa presionando el botón LEARN durante 3 segundos.

Este módulo es un módulo alimentado por batería, la nueva configuración solo se tendrá en cuenta si activa el control remoto.

## Nota IMPORTANTE

Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
