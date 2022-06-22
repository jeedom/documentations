# Concept

Aquí están los principales conceptos básicos de Jeedom. Esta documentación se mantiene simple deliberadamente para ayudarlo a tomar el control de la automatización de su hogar.

Las posibilidades de Jeedom son casi infinitas, ya que puedes con unos pocos php, python u otros scripts crear muchas cosas, pero ese no es el tema aquí.

> Tip
>
> Los enlaces a continuación apuntan al Core v4.1. Una vez en la página de documentación (Manual de usuario o configuración) puedes cambiar de versión en el menú de arriba a la izquierda para cambiar a la versión correspondiente al Core que quieras.

## Affichage

Jeedom permite interconectar una gran cantidad de dispositivos, ya sea que se basen en los protocolos Z-Wave, Enocean, Zigbee, etc., en API gracias a complementos o directamente en forma de scripts. Puedes mirar en el [Mercado](https://market.jeedom.com/) para obtener una descripción general de los dispositivos compatibles.

Puede mostrar estos dispositivos de varias maneras :

- Sobre [Tablero](/es_ES/core/4.1/dashboard)
- En la [Síntesis](/es_ES/core/4.1/overview) (v4.1)
- Sobre una [Visto](/es_ES/core/4.1/view)
- Sobre un [Diseño](/es_ES/core/4.1/design)
- Sobre un [Diseño 3D](/es_ES/core/4.1/design3d)

![Synthese](images/concept-synthese.jpg)

Estos se pueden ver en un navegador en una computadora de escritorio o en un teléfono inteligente con la aplicación web o aplicación móvil : [Version móvil](/es_ES/mobile/index)

## Los objetos

Para organizar sus dispositivos, puede crear [Objetos](/es_ES/core/4.1/object).

Estos objetos pueden representar habitaciones de la casa (Sala de estar, Dormitorio, Taller). Cada objeto puede tener un objeto principal. Esta jerarquía se utilizará para su visualización en el Tablero. Por ejemplo, puede tener un objeto **Casa**, luego objetos **Sala de estar** **Habitación** objeto niños **Casa**. Una vez en el Dashboard, el objeto **Casa** también mostrará, a continuación, sus objetos secundarios.

![Objet](images/concept-objet.jpg)

> Tips
>
> Dentro **Ajustes → Preferencias**, puedes definir a qué objeto quieres llegar en el Dashboard. [Preferencias](/es_ES/core/4.1/profils)

![Tablero](images/concept-dashboard.jpg)

## Equipo y sus controles

### Commandes

Para interactuar con nuestra domótica, necesitas comandos ! Estos son de dos tipos :

> Note
>
> Tenga la seguridad de que los pedidos normalmente se crean automáticamente ! Estas explicaciones son para una mejor comprensión.

- Las órdenes *información* :
Estos comandos almacenan información de los sensores. Por ejemplo, la temperatura de una sonda, el movimiento de un sensor de presencia, etc.
Estos comandos se pueden registrar para mantener esta información a lo largo del tiempo en forma de curva : [Histórico](/es_ES/core/4.1/history)

Estos comandos también se pueden utilizar para activar [escenarios](/es_ES/core/4.1/scenario) para automatizar acciones basadas en la información reportada por sus sensores. Por ejemplo, un sensor de movimiento detecta una presencia, lo que activará un escenario que encenderá la luz.

- Las órdenes *Valores* :
Estos comandos le permiten controlar sus actuadores. Por ejemplo, los comandos ``on`` y ``off`` una salida controlada le permitirá encenderlo y apagarlo.

Los comandos de acción generalmente están vinculados a los comandos de información. Aquí, nuestro agarre tiene dos acciones ``on`` y ``off``, generalmente relacionado con la información **Estado**.

![Pedidos](images/concept-commands.jpg)

Estos dos tipos de mandos se adjuntan en forma de equipos. Por lo tanto, el equipo tiene comandos de información y/o acción, y es este equipo el que tendrá un Objeto como padre, lo que le permitirá mostrarlo donde desee.

Cada comando también puede tener lo que se llama un tipo genérico, lo que permite que Jeedom y ciertos complementos sepan el tipo de comando (estado de un enchufe, botón de una luz, etc). [**Herramientas → Tipos de equipos**](/es_ES/core/4.2/types).

### Équipement

- Physiquement: Tengo un enchufe con botón de encendido/apagado y led de estado, en el salón.
- En Jeedom: Tengo un equipo con dos acciones de encendido y apagado y una información de estado, en el objeto Salón.

Estos equipos son creados por complementos. Por ejemplo, el complemento Z-Wave le permitirá incluir su enchufe Z-Waze, que creará un equipo con sus controles, que puede nombrar y vincular a un Objeto.

En términos de visualización, cada pedido se muestra mediante un Widget. El Core ofrece los principales Widgets, así como una herramienta para crearlos (V4) : [Widgets](/es_ES/core/4.1/widgets).

Estos comandos se agrupan en un mosaico correspondiente a su equipo. Y, por lo tanto, este mosaico se mostrará en el Tablero en el Objeto que haya elegido.

![Pedidos](images/concept-equipment.jpg)

Cualquiera que sea su periférico, por lo tanto, se creará en forma de equipo, a partir de un [Enchufar](/es_ES/core/4.1/plugin).

Este dispositivo tendrá sus propios comandos *información* Dónde *Valores*. Estos comandos se mostrarán como widgets que forman el mosaico del equipo, en su objeto principal.

Luego verá que cada Objeto, Equipo, Comando tiene muchas opciones, en términos de funcionalidad o visualización. Pero todo en su momento, ahora deberías haber entendido los conceptos básicos de Jeedom, y así poder empezar a organizar tu domótica sabiendo dónde buscar.

## Mi primer guion

El interés de la domótica, más allá del control centralizado y remoto de nuestros periféricos, radica sobre todo en la automatización. El objetivo no es pasar horas frente a tu Dashboard o su Diseño, sino todo lo contrario que tu hogar se adapte a tus hábitos y quede en el olvido. No más persianas que abrir y cerrar todos los días, no más luces que encender y apagar, avisos de cuándo tirar la basura a la calle, cuándo hay correo en el buzón, calefacción que se adapta según las estaciones y las condiciones climáticas. Las posibilidades son infinitas y dependen del estilo de vida de cada uno. Los escenarios están para eso !

Un escenario es una secuencia de acciones definidas que se ejecutarán en determinados momentos del día. La ejecución puede ser programada (todos los lunes a esa hora), o provocada por un evento. Como se vio anteriormente, este evento puede ser, por ejemplo, nuestro comando de información *Presencia* de un detector de movimiento, después de una detección.

El objetivo aquí no es ser exhaustivo sino descubrir los escenarios a través de ejemplos simples. los [documentación del manual de usuario](/es_ES/core/4.1/scenario) es mucho mas completo.


### Encendido de la luz en detección de movimiento.

Digamos que tenemos una luz controlada y un detector de movimiento en la habitación.

![1stScenario](images/1stScenario.gif)

- Entrar en **Herramientas → Escenarios**
- Haga clic en *Para agregar* entonces dale un nombre.
- A la derecha, en la parte *Activación*, compruebe que el modo está en *Provocado* luego haga clic *+ Disparador*.
- Usando el botón *elige un pedido* a la derecha del campo *Evento*, seleccione el objeto, luego el equipo y su comando.

La *Generar* es lo que desencadenará la ejecución de este escenario. Aquí, queremos activarlo cuando nuestro detector detecte una presencia, por lo que usaremos el comando `#[Habitación][Détecteur Habitación][Présence]# == 1`.

El `#` indica un comando, luego encontramos `[el nombre de su objeto principal]`, luego `[el nombre del equipo]` y finalmente `[el nombre del comando]`. Aquí, agregamos ` == 1` porque queremos que el escenario se active solo en la detección de una presencia. Sin embargo, en un detector de presencia, esta detección vuelve a 0 unos segundos después. Este cambio a 0, por lo tanto, no volverá a activar nuestro escenario.

- Haga clic en la pestaña *Guion* luego el botón en la parte superior *Agregar bloque*. Elige un bloque *Valores* entonces en este, *Agregar* a *Valores*. Esta acción será nuestra luz al mando. Según el mismo principio : `#[Habitación][Lumière Habitación][On]#`.

- Guarde y su escenario estará listo !

Solo hemos arañado la superficie aquí de las posibilidades de los escenarios. Puede agregar condiciones (bloquear *Si/Entonces/Si no*), retrasar acciones (bloquear *Dentro*), programarlos (bloquear *POSEE*), e incluso usar código php directamente (bloquear *Codificado*).

Aquí hemos utilizado el modo disparador *provocado*, con una orden. Pero también puedes usar (y combinar) el modo *programa* para ejecutar un escenario cada mañana, o cada hora, etc.


### Programación del día.

Un tema recurrente para principiantes en Jeedom, la programación de eventos diarios como :

- Encender la cafetera a las 7 a. m. los días de semana.
- Abre las persianas al amanecer.
- Cierra las persianas al atardecer, si no estoy.

Para este tipo de escenario, aquí hay una muy buena introducción : [Programación del día](https://kiboost.github.io/jeedom_docs/jeedomV4Tips/Tutos/ProgDuJour/es_ES/)

