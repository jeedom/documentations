# Aeotec Minimote

**El módulo**

![module](images/aeotec.minimote/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/aeotec.minimote/vuedefaut1.jpg)

## Resumen

Este mini controlador Aeon Labs es compatible con una amplia variedad de módulos Z-Wave como interruptores, atenuadores, detectores de movimiento, interruptores para persianas ... Para que pueda controlar de forma remota sus luces, dispositivos o persianas. Con este control remoto, también puede incluir / excluir módulos de su red Z-Wave y asociar escenas con los botones del control remoto. Una tapa deslizante oculta los botones utilizados para configurar la red Z-Wave.

## Fonctions

-   Configuración de red Z-Wave (inclusión / exclusión de módulos)
-   Le permite controlar hasta 4 escenas
-   8 llaves : 4 para escenas, 4 para configuraciones de red
-   Inicio / parada y funciones de atenuación
-   Función ALL ON / ALL OFF
-   Batería interna recargable en USB
-   Actualización de firmware a través de USB

## Características técnicas

-   Tipo de módulo : Controlador Z-Wave
-   Color : Blanc
-   Suministro : batería interna recargable a través de USB
-   Affichage: LED azul y rojo
-   Frecuencia : 868,42MHz
-   Alcance : hasta 30 m
-   Dimensiones : 0.8cm x 3.3cm x 9.3cm
-   Temperatura de funcionamiento : -35 a +85 ° C

## Datos del módulo
 
-   Hacer : Aeotec
-   Nombre : Minimote
-   ID del fabricante : 134
-   Tipo de producto : 1
-   ID del producto : 3

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón APRENDIZAJE, de acuerdo con su documentación en papel.

![inclusion](images/aeotec.minimote/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/aeotec.minimote/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/aeotec.minimote/commandes.jpg)

Aquí está la lista de comandos :

-   Botones : es el comando que empujará el botón hacia arriba
  - 1 : Botón 1 pulsación corta
  - 2 : Botón 1 pulsación larga
  - 3 : Botón 2 presiones cortas
  - 4 : Botón 2 prensas largas
  - 5 : Botón 3 pulsaciones cortas
  - 6 : Botón 3 pulsaciones largas
  - 7 : Botón 4 pulsaciones cortas
  - 8 : Botón 4 prensas largas

### Configuracion del modulo

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de parámetros)
 
![Config1](images/aeotec.minimote/config1.jpg)

Detalles del parámetro :

-   241: Botón 1 modo de funcionamiento (salir por defecto)
-   242: botón 2 modo de funcionamiento (dejar por defecto)
-   243: Botón 3 modo de funcionamiento (salir por defecto)
-   244: botón 4 modo de funcionamiento (dejar por defecto)
-   250: modo de funcionamiento del control remoto (deje absolutamente Scene para usarlo como control remoto)

### Groupes

Este módulo tiene cuatro grupos de asociación, ninguno es necesario para usarlo como control remoto en Jeedom.

![Groupe](images/aeotec.minimote/groupe.jpg)

## Wakeup

 

Para activar este módulo, solo hay una forma :

-   mantenga presionado el botón APRENDIZAJE durante 3 segundos

## Faq.

Este módulo se activa presionando y manteniendo presionado el botón LEARN durante 3 segundos.

Este módulo es un módulo de batería, la nueva configuración solo se tendrá en cuenta si activa el control remoto.

## Nota importante

Tienes que despertar el módulo : después de su inclusión, después de un cambio en la configuración, después de un cambio en la activación, después de un cambio en los grupos de asociación
