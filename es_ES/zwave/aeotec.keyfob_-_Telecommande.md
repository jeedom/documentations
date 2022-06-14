# Llavero Aeotec

**El módulo**

![module](images/aeotec.keyfob/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/aeotec.keyfob/vuedefaut1.jpg)

## Resumen

El mando a distancia de llavero Aeon Labs con un diseño moderno y agradable dispone de 4 botones para controlar todo tipo de dispositivos Z-Wave como lámparas, persianas, etc…​

Con sus dimensiones muy pequeñas, puede guardarlo fácilmente en su bolsillo. Fácil de usar y elegante, está equipado con un anillo para sujetarlo a las llaves, lo que lo hace disponible al salir de la casa o al regresar a su hogar.

Cada botón permite controlar dos dispositivos o escenas gracias a la gestión de pulsaciones cortas y largas. Este control remoto se puede usar como controlador principal y secundario.

## Fonctions

-   Control remoto de llavero
-   Controlador principal o secundario
-   Diseño ultracompacto y ultra
-   4 botones configurables
-   Gestiona hasta 8 dispositivos/escenas
-   Contraventana corredera de protección
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de mod : Transmisor de onda Z
-   Alimento : 1 batería de litio CR2450 3V
-   Duración de la batería : 1 año
-   Frecuencia: 868.42 MHz
-   Distancia de transmisión : 100m en campo abierto
-   Temperatura de funcionamiento : -10°C a 50°C
-   Dimensiones : 55 x 30 x 13 mm (largo x ancho x alto))

## Datos del módulo

-   Marca : Aeotec
-   Apellido : Llavero
-   Identificación del fabricante : 134
-   Tipo Producto : 1
-   Identificación de producto : 22

# Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).
> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón APRENDER, de acuerdo con su documentación en papel.
>![inclusión](images/aeotec.keyfob/inclusion.jpg)
>Una vez incluido, debe obtener esto :
![Plugin Zwave](images/aeotec.keyfob/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con los módulos estarán disponibles.

![Pedidos](images/aeotec.keyfob/commandes.jpg)

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
> Durante una primera inclusión, siempre despierte el módulo justo después
> inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)
![Config1](images/aeotec.keyfob/config1.jpg)

Detalles del parámetro :
-   250: modo de funcionamiento del control remoto (absolutamente poner Escena para usarlo como control remoto)

Todos los demás parámetros son útiles solo en caso de asociación directa entre el control remoto y los módulos.

### Groupes
Este módulo tiene un solo grupo de asociación. Es indispensable.

![Groupe](images/aeotec.keyfob/groupe.jpg)

## Bueno saber

### Especificidades

Para usar este módulo como control remoto, proceda de la siguiente manera :

-   1 : Incluir control remoto
-   2 : Despertar control remoto
-   3 : Cambie el parámetro 250 a verdadero (bueno, hágalo incluso si ya parece ser verdadero))
-   4 : Activa el mando a distancia y comprueba que se ha tenido en cuenta el cambio
-   5 : Cambia el modo de funcionamiento del mando a distancia pulsando los dos botones de la parte trasera durante 3 segundos.

# Wakeup

Para activar este módulo solo hay una forma de proceder :

-   mantenga presionado el botón LEARN durante 3 segundos

# Preguntas frecuentes

Este módulo se activa presionando el botón LEARN durante 3 segundos.
Este módulo es un módulo alimentado por batería, la nueva configuración solo se tendrá en cuenta si activa el control remoto.

# Nota IMPORTANTE

Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
