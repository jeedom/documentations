# Concept

Aquí están los principales conceptos básicos de Jeedom. Esta documentación sigue siendo intencionalmente simple para ayudarlo a hacerse cargo de la automatización de su hogar.

Las posibilidades de Jeedom son casi infinitas, ya que puedes crear muchas cosas con unos pocos php, python u otros scripts, pero ese no es el tema aquí.

> Tip
>
> Los enlaces a continuación apuntan a Core v4.1. Una vez en la página de documentación (manual de usuario o configuración) puede cambiar la versión en el menú de la parte superior izquierda para cambiar a la versión correspondiente al Core que desee.

## Affichage

Jeedom permite interconectar una gran cantidad de dispositivos juntos, ya sea que estén basados en protocolos Z-Wave, Enocean, Zigbee, etc., en API que usan complementos o directamente en forma de scripts. Puedes mirar en el [Mercado](https://market.jeedom.com/) para obtener una descripción general de los dispositivos compatibles.

Puede ver estos dispositivos de varias formas :

- Sobre [Tablero](/es_ES/core/4.1/dashboard)
- En la [Síntesis](/es_ES/core/4.1/overview) (v4.1)
- Sobre una [Ver](/es_ES/core/4.1/view)
- Sobre un [Diseño](/es_ES/core/4.1/design)
- Sobre un [Diseño 3d](/es_ES/core/4.1/design3d)

![Synthese](images/concept-synthese.jpg)

Estos se pueden ver en un navegador en una computadora de escritorio o en un teléfono inteligente con la aplicación web o la aplicación móvil : [Version móvil](/es_ES/mobile/index)

## Los objetos

Para organizar sus dispositivos, puede crear [Objetos](/es_ES/core/4.1/object).

Estos objetos pueden representar habitaciones de la casa (sala de estar, dormitorio, taller). Cada objeto puede tener un objeto padre. Esta jerarquía se utilizará para mostrar en el panel. Por ejemplo, puede tener un objeto **Casa**, luego objetos **Sala** **Habitación** niños objeto **Casa**. Una vez en el Tablero, el objeto **Casa** también mostrará, debajo, sus objetos secundarios.

![Objet](images/concept-objet.jpg)

> Tips
>
> Dentro **Configuración → Preferencias**, puede definir en qué objeto desea llegar en el tablero. [Preferencias](/es_ES/core/4.1/profils)

![Tablero](images/concept-dashboard.jpg)

## Equipos y sus controles

### Commandes

Para interactuar con nuestra domótica, necesitas comandos ! Estos son de dos tipos :

> Note
>
> Tenga la seguridad de que los pedidos normalmente se crean automáticamente ! Estas explicaciones son para una mejor comprensión.

- Las órdenes *info* :
Estos comandos almacenan información de sensores. Por ejemplo, la temperatura de una sonda, movimiento de un sensor de presencia, etc.
Estos pedidos se pueden registrar para mantener esta información a lo largo del tiempo en forma de curva : [Histórico](/es_ES/core/4.1/history)

Estos comandos también se pueden utilizar para activar [escenarios](/es_ES/core/4.1/scenario) para automatizar acciones basadas en la información enviada por sus sensores. Por ejemplo, un sensor de movimiento detecta una presencia, lo que activará un escenario que encenderá la luz.

- Las órdenes *acción* :
Estos comandos le permiten controlar sus actuadores. Por ejemplo, los comandos ''''on'''' y ''''off'''' un tomacorriente controlado le permitirá encenderlo y apagarlo.

Los comandos de acción generalmente están vinculados a comandos de información. Aquí, nuestro socket tiene dos acciones ''''on'''' y ''''off'''', generalmente vinculado a la información **Estado**.

![Pedidos](images/concept-commands.jpg)

Estos dos tipos de controles se adjuntan en forma de dispositivo. Por lo tanto, el equipo tiene información y / o comandos de acción, y es este equipo el que tendrá un Objeto como padre, lo que le permitirá mostrarlo donde desee.

Cada comando tiene una propiedad de tipo genérico que permite a Jeeodm comprender lo que está haciendo.Usted puede ver [aquí](https://doc.jeedom.com/es_ES/concept/generic_type) la documentación sobre tipo genérico

### Équipement

- Physiquement: Tengo un enchufe con un botón de encendido / apagado y un led de estado, en la sala de estar.
- En Jeedom: Tengo un dispositivo con dos acciones de encendido y apagado y una información de estado, en el objeto Sala.

Estos equipos son creados por complementos. Por ejemplo, el complemento Z-Wave le permitirá incluir su zócalo Z-Waze, que creará un dispositivo con sus comandos, que puede nombrar y vincular a un objeto.

En términos de visualización, cada pedido se muestra mediante un widget. El Core ofrece los principales Widgets, así como una herramienta para crearlos (V4) : [Widgets](/es_ES/core/4.1/widgets).

Estos comandos están agrupados en un mosaico correspondiente a su equipo. Y este mosaico se mostrará en el Tablero en el Objeto que ha elegido.

![Pedidos](images/concept-equipment.jpg)

Cualquiera que sea su dispositivo, se creará en forma de dispositivo, a partir de un [Enchufar](/es_ES/core/4.1/plugin).

Este dispositivo tendrá sus propios controles *info* o *acción*. Estos comandos se mostrarán en forma de widgets que forman el mosaico del equipo, en su objeto principal.

Luego verá que cada Objeto, Equipo, Orden tiene muchas opciones, en términos de funcionalidad o visualización. Pero todo a su debido tiempo, ahora deberías haber entendido los conceptos básicos de Jeedom, y así poder empezar a organizar tu domótica sabiendo dónde buscar.

## Mi primer escenario

El interés de la domótica, más allá del control centralizado y remoto de nuestros periféricos, radica sobre todo en la automatización. El objetivo no es pasar horas frente a tu Dashboard o su Diseño, sino al contrario que tu alojamiento se adapte a tus hábitos y sea olvidado. No más persianas para abrir y cerrar todos los días, no más luces para encender y apagar, estar avisado cuando tirar la basura a la calle, cuando hay correo en el buzón, la calefacción que se adapta según el estaciones y condiciones climáticas. Las posibilidades son infinitas y dependen del estilo de vida. Los escenarios están ahí para eso !

Un escenario es una serie de acciones definidas que se ejecutarán en determinados momentos del día. La ejecución puede ser programada (todos los lunes a una hora determinada) o causada por un evento. Como se vio anteriormente, este evento puede ser, por ejemplo, nuestro comando de información *Presencia* un detector de movimiento, tras una detección.

El objetivo aquí no es ser exhaustivo sino descubrir los escenarios a través de ejemplos sencillos. los [documentación del manual de usuario](/es_ES/core/4.1/scenario) es mucho mas completo.


### Encendido de la luz cuando se detecta movimiento.

Digamos que tenemos un detector de movimiento y luz controlado en el dormitorio.

![1stScenario](images/1stScenario.gif)

- Ir **Herramientas → Escenarios**
- Haga clic en *Añadir* entonces dale un nombre.
- A la derecha, en la parte *Desencadenar*, compruebe que el modo está en *Provocado* luego haga clic en *+ Gatillo*.
- Usando el botón *elige un pedido* a la derecha del campo *Evento*, seleccione el objeto luego el equipo y su orden.

Los *Desencadenar* es lo que desencadenará la ejecución de este escenario. Aquí, queremos activarlo cuando nuestro detector detecta una presencia, por lo que usaremos el comando `#[Habitación][Détecteur Habitación][Présence]# == 1`.

El `#` indica un comando, luego encontramos `[el nombre de su objeto principal]`, luego `[el nombre del dispositivo]`, y finalmente `[el nombre del comando]`. Aquí, agregamos `== 1` porque queremos que el escenario se active solo en la detección de una presencia. Sin embargo, en un detector de presencia, esta detección vuelve a 0 unos segundos después. Por lo tanto, este cambio a 0 no activará nuestro escenario nuevamente.

- Haga clic en la pestaña *Guión* luego en el botón en la parte superior *Agregar bloque*. Elige un bloque *Acción* luego en este, *Añadir* un *Acción*. Esta acción será nuestro comando para encender la luz. Según el mismo principio : ''#[Habitación][Lumière Habitación][On]#''.

- Guarde y su escenario estará listo !

Aquí solo hemos arañado la superficie de las posibilidades de los escenarios. Puede agregar condiciones (bloquear *Si / Entonces / Else*), retrasar acciones (bloquear *Dentro*), programarlos (bloquear *A*), e incluso usar directamente el código php (bloquear *Codificado*).

Aquí hemos utilizado el modo de disparo *provocado*, con un comando. Pero también puedes usar (y combinar) el modo *programa* ejecutar un escenario cada mañana o cada hora, etc.


### Programación del día.

Un tema recurrente para principiantes en Jeedom, la programación de eventos diarios como :

- Encienda la cafetera a las 7 a.m. de lunes a viernes.
- Persianas abiertas al amanecer.
- Cierra las persianas al atardecer, si no estoy.

Para este tipo de escenario, aquí hay una muy buena introducción : [Programación del día](https://kiboost.github.io/jeedom_docs/jeedomV4Tips/Tutos/ProgDuJour/es_ES/)

