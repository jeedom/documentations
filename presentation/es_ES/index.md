# Presentación

Jeedom es un software de código abierto gratuito que se puede instalar en cualquier sistema Linux. Se basa en un núcleo con múltiples funcionalidades: gestión de escenarios, interacción con la instalación domótica mediante comandos de texto y voz, visualización de historiales y generación de curvas y gráficos, conexión de todos los equipos y objetos conectados, personalización de la interfaz... Su interfaz clara e intuitiva permite implementar una solución completa sin necesidad de tener conocimientos de programación.

Jeedom no necesita acceder a servidores externos para funcionar. Toda tu instalación se gestiona de forma local, por lo que solo tú tienes acceso a ella, lo que te garantiza una total confidencialidad.

Gracias a su flexibilidad y a los numerosos parámetros de personalización, cada usuario puede crear su propio sistema de domótica Jeedom. Con la ayuda de widgets, vistas y diseños, tienes total libertad para diseñar tu propia interfaz si así lo deseas.

Jeedom ofrece numerosas posibilidades, entre las que se incluyen:

- Gestionar la seguridad de los bienes y las personas,
- Automatizar la calefacción para mayor comodidad y ahorro energético,
- Visualizar y gestionar el consumo energético, para prever los gastos y reducir el consumo,
- Comunicarse por voz, SMS, correo electrónico o aplicaciones móviles,
- Gestionar todos los sistemas automatizados de la casa: persianas, verja, luces, etc.,
- Gestionar los dispositivos multimedia de audio y vídeo, así como los objetos conectados.


Jeedom se basa en el Core (el núcleo), que integra la estructura y las funciones centrales.

Varios [complementos](https://market.jeedom.com) pueden ofrecer así nuevas funciones.

El Core incluye, entre otras cosas:

## Panel de control / Resumen

*Los dispositivos, que incluyen actuadores o sensores, se organizan por objetos. Los objetos pueden, por ejemplo, representar estancias físicas*.

[Resumen](/core/overview)

![Resumen](../images/doc-presentation-synthese.jpg)

[Panel de control](/core/dashboard)

![Panel de control](../images/doc-presentation-dashboard.jpg)


## Historial

*Toda la información se puede archivar (curvas de temperatura, consumos, aperturas de puertas, etc.) y se puede consultar en Análisis → Historial o desde los mosaicos del panel de control.*

[Historia](/core/history)

[Cronología](/core/timeline)

![Página de historial](../images/doc-presentation-historique.jpg)

## Escenarios

*Los escenarios permiten automatizar la totalidad o parte de tus dispositivos. Se construyen con diferentes bloques: bloques condicionales (Si, Entonces, Si no), de acciones, de programación (EN x minutos o A hhmm), de bucle, de comentario o de código PHP. Todos los bloques se pueden anidar entre sí, lo que ofrece infinitas posibilidades.*

[Mi primer escenario](/concept/#tocAnchor-4)

![Página «Escenarios»](../images/doc-presentation-scenario.jpg)

## Creación de widgets

*Jeedom ofrece un motor de creación de widgets para controlar los dispositivos. De este modo, además de los widgets básicos, puedes crear tus propios widgets. Los usuarios avanzados también pueden crear widgets directamente a partir del código.*

![Widgets](../images/doc-presentation-widgets.jpg)

## Interacciones

*El sistema de interacción de Jeedom permite realizar acciones mediante comandos de texto o de voz.*

![Página de interacción](../images/doc-presentation-interaction.jpg)

## Centro de actualizaciones

*El centro de actualizaciones permite actualizar todas las funcionalidades de Jeedom, incluido el software básico (core) y sus complementos. Hay disponibles otras funciones de gestión de extensiones (eliminar, reinstalar, comprobar, etc.).*

![Página de copia de seguridad](../images/doc-presentation-update.jpg)


# Mercado

Alrededor de este núcleo se integran diversos complementos, que pueden ser de todo tipo:

-   Protocolo de domótica (Z-Wave, RFXcom, EnOcean…),
-   Protocolo IP (KNX, xPL…),
-   Objetos conectados (Nest, Netatmo…),
-   Nivel superior (alarma, termostato…),
-   Organización (agenda, Google Calendar),
-   Desarrollo (script).

Estos complementos se pueden instalar desde el Market y permiten ampliar las posibilidades de Jeedom.

![Página Market](../images/doc-presentation-market.jpg)

Jeedom permite que cualquier complemento se comunique con otro siguiendo un estándar. Esto permite, por ejemplo, utilizar los complementos de termostato o alarma con cualquier protocolo de domótica o incluso con un complemento IP o un objeto conectado…
