# Botón de pánico Aeotec

**El módulo**

![module](images/aeotec.panicbutton/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/aeotec.panicbutton/vuedefaut1.jpg)

## Resumen

Este mando a distancia de llavero con un diseño moderno y agradable dispone de un botón para controlar todo tipo de dispositivos Z-Wave como lámparas, persianas, etc.

Con sus dimensiones muy pequeñas, puede guardarlo fácilmente en su bolsillo. Fácil de usar y elegante, está equipado con un anillo para sujetarlo a las llaves, lo que lo hace disponible al salir de la casa o al regresar a su hogar.

El botón permite controlar dos dispositivos o escenas gracias a la gestión de pulsaciones cortas y largas. Este control remoto se puede usar como controlador principal y secundario.

Este control remoto también se puede usar como botón de emergencia o pánico. En caso de angustia o cuando su titular se enfrente a otra situación de emergencia, basta con que presione el botón y se emitirá una señal Z-Wave. En este caso, este dispositivo también se puede utilizar como medallón alrededor del cuello.

## Fonctions

-   Control remoto de llavero
-   Controlador principal o secundario
-   Diseño ultracompacto y ultra
-   1 botón configurable
-   Gestiona hasta 2 dispositivos/escenas
-   Se puede utilizar como botón de emergencia/pánico
-   Usar alrededor del cuello como medallón de emergencia

## Características técnicas

-   Tipo de mod : Transmisor de onda Z
-   Alimento : 1 batería de litio CR2450 3V
-   Duración de la batería : 2 a 3 meses para 10 a 20 usos por día
-   Frecuencia: 868.42 MHz
-   Distancia de transmisión : 30m en interiores
-   Dimensiones : 55 x 30 x 11 mm (largo x ancho x alto))

## Datos del módulo

-   Marca : Aeotec
-   Apellido : Botón de pánico
-   Identificación del fabricante : 134
-   Tipo Producto : 1
-   Identificación de producto : 38

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón APRENDER, de acuerdo con su documentación en papel.

![inclusion](images/aeotec.panicbutton/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/aeotec.panicbutton/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/aeotec.panicbutton/commandes.jpg)

Aquí está la lista de comandos :

-   Botones : este es el comando que levantara el boton presionado
  - 1 : Botón de pulsación corta
  - 2 : Botón de pulsación larga

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/aeotec.panicbutton/config1.jpg)

Detalles del parámetro :

-   250: modo de funcionamiento del control remoto (absolutamente poner Escena para usarlo como control remoto)
-   255 : permite restablecer de fábrica el llavero

### Groupes

Este módulo tiene un solo grupo de asociación. Es indispensable.

![Groupe](images/aeotec.panicbutton/groupe.jpg)

## Bueno saber

### Especificidades

Para usar este módulo como control remoto, proceda de la siguiente manera :

-   1 : Incluir control remoto
-   2 : Despertar control remoto
-   3 : Cambia el parámetro 250 a verdadero (hazlo bien aunque ya parezca verdadero))
-   4 : Activa el mando a distancia y comprueba que se ha tenido en cuenta el cambio
-   5 : Cambie el modo de funcionamiento del control remoto manteniendo presionados los dos botones en la parte posterior durante 3 segundos.

##Wakeup

Para activar este módulo solo hay una forma de proceder :

-   mantenga presionado el botón LEARN durante 3 segundos

## Preguntas frecuentes.
 
Este módulo se activa presionando el botón LEARN durante 3 segundos.

Este módulo es un módulo alimentado por batería, la nueva configuración solo será
tenido en cuenta solo si activa el control remoto.

## Nota IMPORTANTE

Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
