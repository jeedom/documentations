# Concept

Aquí están los principales conceptos básicos de Jeedom. Esta documentación se mantiene simple deliberadamente para ayudarlo a tomar el control de la automatización de su hogar.

Las posibilidades de Jeedom son casi infinitas, ya que puedes crear muchas cosas con algunos php, python u otros scripts, pero ese no es el tema aquí.

> Tip
>
> Los enlaces a continuación apuntan al Core v4.1. Una vez en la página de documentación (Manual de usuario o configuración) puedes cambiar de versión en el menú de arriba a la izquierda para cambiar a la versión correspondiente al Core que deseas.

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
Estos comandos le permiten controlar sus actuadores. Por ejemplo, los comandos on y off una salida controlada le permitirá encenderlo y apagarlo.

Los comandos de acción generalmente están vinculados a los comandos de información. Aquí, nuestro agarre tiene dos acciones on y off, generalmente relacionado con la información **Estado**.

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

. .  *Presencia* .

 [](/es_ES/core/4.1/scenario) .


### .

.

![1stScenario](images/1stScenario.gif)

-  ****
-  ** .
-  **,  **  **.
-  **  **, .

 ** . #[Habitación][Détecteur Habitación][Présence]# == .

. . . .

-  **  **.  ** , **  **. .  : #[Habitación][Lumière Habitación][On]#.

-  !

.  **),  *Dentro*),  **),  **).

 **, .  ** .


### .

 :

- .
- .
- .

 : [](https://kiboost.github.io/jeedom_docs/jeedomV4Tips/Tutos/ProgDuJour/es_ES/)

