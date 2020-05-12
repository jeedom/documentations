# Botón de pánico Aeotec

**El módulo**

![module](images/aeotec.panicbutton/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/aeotec.panicbutton/vuedefaut1.jpg)

## Resumen

Este control remoto con un diseño moderno y agradable tiene un botón para controlar todo tipo de dispositivos Z-Wave, como lámparas, persianas, etc.

Con sus dimensiones muy pequeñas, puede guardarlo fácilmente en su bolsillo. Fácil de usar y elegante, está equipado con un anillo para sujetarlo a las llaves, lo que lo hace disponible al salir de la casa o al regresar a su hogar.

El botón le permite controlar dos dispositivos o escenas gracias a la gestión de pulsaciones cortas y largas. Este control remoto se puede usar como controlador primario o secundario.

Este control remoto también se puede usar como botón de emergencia o pánico. En caso de angustia o cuando su titular se enfrenta a otra situación de emergencia, es suficiente que presione el botón y se emitirá una señal de Z-Wave. En este caso, este dispositivo también se puede usar como un medallón alrededor del cuello.

## Fonctions

-   Control remoto llavero
-   Controlador primario o secundario
-   Diseño ultra compacto y ultra
-   1 botón configurable
-   Gestiona hasta 2 dispositivos / escenas
-   Se puede usar como botón de emergencia / pánico
-   Úselo alrededor del cuello como medallón de emergencia

## Características técnicas

-   Tipo de módulo : Transmisor de onda Z
-   Suministro : 1 batería de litio 3V CR2450
-   Duración de la batería : 2 a 3 meses por 10 a 20 usos por día
-   Frecuencia: 868.42 MHz
-   Distancia de transmisión : 30m en interiores
-   Dimensiones : 55 x 30 x 11 mm (largo x ancho x alto)

## Datos del módulo

-   Hacer : Aeotec
-   Nombre : Botón de pánico
-   ID del fabricante : 134
-   Tipo de producto : 1
-   ID del producto : 38

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón APRENDIZAJE, de acuerdo con su documentación en papel.

![inclusion](images/aeotec.panicbutton/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/aeotec.panicbutton/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/aeotec.panicbutton/commandes.jpg)

Aquí está la lista de comandos :

-   Botones : es el comando que empujará el botón hacia arriba
  - 1 : Presione brevemente el botón
  - 2 : Mantenga presionado el botón

### Configuracion del modulo

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/aeotec.panicbutton/config1.jpg)

Detalles del parámetro :

-   250: modo de funcionamiento del control remoto (ponga absolutamente Scene para usarlo como control remoto)
-   255 : permite que el llavero se restablezca de fábrica

### Groupes

Este módulo tiene un solo grupo de asociación. Es indispensable.

![Groupe](images/aeotec.panicbutton/groupe.jpg)

## Bueno saber

### Específicos

Para usar este módulo como control remoto, proceda de la siguiente manera :

-   1 : Incluye control remoto
-   2 : Despierta el control remoto
-   3 : Cambie el parámetro 250 a verdadero (haga esto incluso si ya parece ser verdadero)
-   4 : Active el control remoto y asegúrese de que el cambio se haya tenido en cuenta
-   5 : Cambie el modo de funcionamiento del control remoto presionando y manteniendo presionados los dos botones en la parte posterior durante 3 segundos.

##Wakeup

Para activar este módulo, solo hay una forma :

-   mantenga presionado el botón APRENDIZAJE durante 3 segundos

## Faq.
 
Este módulo se activa presionando el botón APRENDIZAJE durante 3 segundos.

Este módulo es un módulo de batería, la nueva configuración no será
tenga en cuenta que si despierta el control remoto.

## Nota importante

Tienes que despertar el módulo : después de su inclusión, después de un cambio en la configuración, después de un cambio en la activación, después de un cambio en los grupos de asociación
