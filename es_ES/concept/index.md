# Concept

Aquí están los principales conceptos básicos de Jeedom. Esta documentación sigue siendo voluntariamente simple para ayudarlo a tomar el control de su domótica.

De hecho, las posibilidades de Jeedom sUno casi infinitas, ya que cUno algunas secuencias de comandos php pythUno u otras puedes crear muchas cosas, pero este no es el tema aquí..

## Affichage

Jeedom hace posible la interfaz de una gran cantidad de periféricos juntos, ya sea que estén basados en los protocolos Z-Wave, Enocena, Zigbee, etc., en las API gracias a complementos o directamente en forma de scripts. La lista es demasiado larga, puedes mirar en el [Mercado](https://market.jeedom.com/) para obtener una descripción general de los dispositivos compatibles.

Puede ver estos dispositivos de varias maneras. :

- Sobre [Salpicadero](/es_ES/core/4.0/dashboard)
- En la [Síntesis](/es_ES/core/4.1/overview) (v4.1)
- Sobre una [Vista](/es_ES/core/4.0/view)
- Sobre un [Diseño](/es_ES/core/4.0/design)
- Sobre un [Diseño 3D](/es_ES/core/4.0/design3d)

Estos se pueden ver en un navegador en una computadora de escritorio o en un teléfono inteligente cUno la aplicación web o aplicación móvil : [Versión móvil](/es_ES/mobile/index")

## Los objetos

Para organizar sus dispositivos, puede crear [Objetos](/es_ES/core/4.0/object).

Estos objetos pueden representar partes de la casa (sala de estar, dormitorio, taller). Cada objeto puede tener un objeto padre. Esta jerarquía se usará para mostrar en el Panel de control. Por ejemplo, puedes tener un objeto **Maison**, entonces objetos **Salon** **Chambre** niño objeto **Maison**. Una vez en el Tablero, el objeto **Maison** también mostrará, a continuación, sus objetos secundarios.

> Tips
>
> DENTRO **Configuración → Preferencias** puede definir en qué objeto desea llegar al Tablero. [Preferencias](/es_ES/core/4.0/profils)

## Equipamiento y sus controles

Para interactuar cUno nuestra automatización del hogar, necesita comandos ! Estos sUno de dos tipos. :

- * Comandos de información* :
Estos comandos almacenan información de los sensores.. Por ejemplo, la temperatura de una sonda, el movimiento de un sensor de presencia, etc..
Estos comandos se pueden registrar para mantener esta información a lo largo del tiempo en forma de curva : [Historial](/es_ES/core/4.0/history)

Estos comandos también se pueden usar para activar [Escenarios](/es_ES/core/4.0/scenario) para automatizar acciones basadas en la información reportada por sus sensores. Por ejemplo, un sensor de movimiento detecta una presencia, lo que desencadenará un escenario que encenderá la luz..

- * Comandos de acción* :
Estos comandos le permiten controlar sus actuadores. Por ejemplo, comandos **on** y **off** de un tomacorriente controlado le permitirá encenderlo y apagarlo.

Los comandos de acción generalmente están vinculados a comandos de información. Aquí nuestra toma tiene dos acciones **on** y **off**, generalmente relacionado cUno la información **Etat**.


Estos dos tipos de comandos se adjuntan en forma de equipo.. Por lo tanto, el equipo tiene comandos de información y / o acción, y es este equipo el que tendrá un Objeto como padre, lo que le permitirá mostrarlo donde desee.

- Physiquement:
Tengo un enchufe cUno un botón de encendido / apagado y un led de estado, en la sala de estar.
- En Jeedom:
Tengo equipo cUno dos acciones de encendido y apagado y una información de estado, en el objeto Sala de estar.

Estos equipos sUno creados por complementos. Por ejemplo, el complemento Z-Wave le permitirá incluir su complemento Z-Waze, que creará un dispositivo cUno sus controles, que puede nombrar y vincular a un Objeto..


En términos de visualización, cada pedido se muestra utilizando un widget. The Core ofrece los widgets principales, así como una herramienta para crearlos (V4) : [Reproductores](/es_ES/core/4.0/widgets).

Estos comandos están agrupados en un mosaico correspondiente a su equipo.. Y este mosaico se mostrará en el Tablero en el Objeto que haya elegido.


