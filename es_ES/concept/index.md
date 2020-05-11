# Concept

Aquí están los principales conceptos básicos de Jeedom. Esta documentación sigue siendo voluntariamente simple para ayudarlo a tomar el control de su domótica.

Las posibilidades de Jeedom son casi infinitas, ya que puedes crear muchas cosas con unos pocos python u otros scripts php, pero ese no es el punto aquí.

> Tip
>
> Los enlaces a continuación apuntan a Core v4.1. Una vez en la página de documentación (manual de usuario o configuración) puede cambiar la versión en el menú en la parte superior izquierda para cambiar a la versión correspondiente al núcleo que desee.

## Affichage

Jeedom le permite interconectar una gran cantidad de dispositivos, ya sea que estén basados en los protocolos Z-Wave, Enocean, Zigbee, etc., en las API que usan complementos o directamente en forma de scripts. Puedes mirar en el [Mercado](https://market.jeedom.com/) para obtener una descripción general de los dispositivos compatibles.

Puede ver estos dispositivos de varias maneras :

- Sobre [Salpicadero](/es_ES/core/4.1/dashboard)
- En la [Síntesis](/es_ES/core/4.1/overview) (v4.1)
- Sobre una [Vista](/es_ES/core/4.1/view)
- Sobre un [Diseño](/es_ES/core/4.1/design)
- Sobre un [Diseño 3D](/es_ES/core/4.1/design3d)

![Synthese](images/concept-synthese.jpg)

Estos se pueden ver en un navegador en una computadora de escritorio o en un teléfono inteligente con la aplicación web o aplicación móvil : [Versión móvil](/es_ES/mobile/index")

## Los objetos

Para organizar sus dispositivos, puede crear [Objetos](/es_ES/core/4.1/object).

Estos objetos pueden representar partes de la casa (sala de estar, dormitorio, taller). Cada objeto puede tener un objeto padre. Esta jerarquía se usará para mostrar en el Panel de control. Por ejemplo, puedes tener un objeto **Maison**, entonces objetos **Salon** **Chambre** niño objeto **Maison**. Una vez en el Tablero, el objeto **Maison** también mostrará, a continuación, sus objetos secundarios.

![Objy](images/concept-objet.jpg)

> Tips
>
> DENTRO**Configuración → Preferencias** puede definir en qué objeto desea llegar al Tablero. [Preferencias](/es_ES/core/4.1/profils)

![Salpicadero](images/concept-dashboard.jpg)

## Equipamiento y sus controles

### Commandes

Para interactuar con nuestra automatización del hogar, necesita comandos ! Estos son de dos tipos :

> Note
>
> Tenga la seguridad de que los pedidos normalmente se crean automáticamente ! Estas explicaciones son para una mejor comprensión.

- Las órdenes *info* :
Estos comandos almacenan información de los sensores. Por ejemplo, la temperatura de una sonda, el movimiento de un sensor de presencia, etc.
Estos comandos se pueden registrar para mantener esta información a lo largo del tiempo en forma de curva : [Historial](/es_ES/core/4.1/history)

Estos comandos también se pueden usar para activar [Escenarios](/es_ES/core/4.1/scenario) para automatizar acciones basadas en la información reportada por sus sensores. Por ejemplo, un sensor de movimiento detecta una presencia, lo que desencadenará un escenario que encenderá la luz.

- Las órdenes *action* :
Estos comandos le permiten controlar sus actuadores. Por ejemplo, comandos **on** y**off** de un tomacorriente controlado le permitirá encenderlo y apagarlo.

Los comandos de acción generalmente están vinculados a comandos de información. Aquí nuestra toma tiene dos acciones **on** y**off**, generalmente relacionado con la información **Etat**.

![Comandos](images/concept-commands.jpg)

Estos dos tipos de comandos se adjuntan en forma de equipo. Por lo tanto, el equipo tiene comandos de información y / o acción, y es este equipo el que tendrá un Objeto como padre, lo que le permitirá mostrarlo donde desee.

### Équipement

- Physiquement: Tengo un enchufe con un botón de encendido / apagado y un led de estado, en la sala de estar.
- En Jeedom: Tengo equipo con dos acciones de encendido y apagado y una información de estado, en el objeto Salon.

Estos equipos son creados por complementos. Por ejemplo, el complemento Z-Wave le permitirá incluir su complemento Z-Waze, que creará un dispositivo con sus controles, que puede nombrar y vincular a un Objeto.

En términos de visualización, cada pedido se muestra utilizando un widget. The Core ofrece los widgets principales, así como una herramienta para crearlos (V4) : [Reproductores](/es_ES/core/4.1/widgets).

Estos comandos están agrupados en un mosaico correspondiente a su equipo. Y este mosaico se mostrará en el Tablero en el Objeto que haya elegido.

![Comandos](images/concept-equipment.jpg)

## Conclusion

Sea cual sea su dispositivo, se creará en forma de equipo, a partir de un [Plugin](/es_ES/core/4.1/plugin).

Este dispositivo tendrá sus propios comandos *info* o*action*. Estos comandos se mostrarán como widgets que forman el mosaico del equipo, en su objeto principal.

Luego verá que cada Objeto, Equipo, Orden tiene muchas opciones, en términos de funcionalidad o visualización. Pero todo a su tiempo, a estas alturas ya debería haber entendido los conceptos básicos de Jeedom, y así poder comenzar a organizar su automatización del hogar sabiendo dónde buscar.


