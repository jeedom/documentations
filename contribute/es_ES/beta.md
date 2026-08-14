
# Prueba beta de Jeedom

Un probador beta es un usuario que prueba las versiones del software antes de que se distribuyan al conjunto de usuarios. Las pruebas beta permiten detectar errores que podrían surgir durante la fase de desarrollo *(por ejemplo, errores funcionales o problemas de interfaz)*. Son una importante fuente de mejora para el proyecto, ya que aportan ideas nuevas y permiten probar las novedades en condiciones reales.

## Advertencias

Aunque los desarrolladores toman todas las precauciones posibles, las versiones en fase de desarrollo pueden contener errores que hagan que un complemento o el núcleo dejen de funcionar por completo. Del mismo modo, las funcionalidades en fase de desarrollo pueden posponerse o incluso abandonarse, dependiendo de las circunstancias. Por lo tanto, es necesario estar bastante familiarizado con los procedimientos de copia de seguridad y restauración de Jeedom antes de lanzarse a las pruebas beta.

Como se ha indicado anteriormente, actualizar Jeedom o un complemento a una versión en fase de desarrollo conlleva riesgos. Por lo tanto, **se recomienda encarecidamente hacerlo en una instalación de prueba destinada a tal fin *([una máquina virtual](/installation/vm) por ejemplo)* en lugar de en un Jeedom en producción**.

>**IMPORTANTE**
>
>El equipo de Jeedom no se hace responsable de ningún fallo que se produzca tras la instalación de una versión que no sea la estable. En ese caso, **no se podrá acceder al servicio de asistencia oficial**, por lo que es necesario [enviar un informe](#Faire%20une%20remontée).

## Sectores

Jeedom es un programa de código abierto cuyo desarrollo se puede seguir en tiempo real en [GitHub](https://github.com/jeedom/core){:target="_blank"}. Cada rama corresponde a diferentes niveles de avance en su desarrollo.

### Áreas principales

-  **desarrollo**: Versión en fase de desarrollo que incluye modificaciones periódicas *(integración continua)*.
-  **Lanzamiento**: La próxima versión se publicará unos días antes de pasar a la versión estable para poder probarla en condiciones reales y corregirla rápidamente si es necesario.
-  **master**: Versión estable de Jeedom *(rama predeterminada que incluye el soporte oficial)*.

>**INFORMACIÓN**
>
>Aunque hay más de un centenar de probadores beta registrados en el foro, apenas tenemos comentarios sobre los desarrollos en curso *(rama `develop`)*. Ya sea por falta de tiempo o por dudas sobre sus conocimientos técnicos, quienes deseen, no obstante, participar en los avances de Jeedom pueden probar la rama `release` *(ya estabilizada en gran parte)* antes de que se ponga a disposición de todos los usuarios en la versión estable.

### Sectores relacionados

Las ramas secundarias corresponden a desarrollos independientes y puntuales, destinados a integrarse en una rama principal.

-  **feat/xxxxx-yyyyy**: Nueva funcionalidad que se puede probar antes de su implementación en `develop`.
-  **fix/xxxxx-yyyyy**:  Corrección no urgente que se puede probar unos días antes de su implementación en `develop`.
-  **hotfix/xxxxx-yyyyy**: Parche urgente implementado rápidamente en las tres ramas principales.

>**INFORMACIÓN**
>
>`xxxxx-yyyyy` corresponde al asunto breve de la funcionalidad o el parche en cuestión.

### Cambiar de versión

Al leer el [advertencias](#Mises%20en%20garde) Como se ha explicado anteriormente, es evidente que **esta operación debe reservarse a usuarios avanzados que conozcan bien el tema**.

Para cambiar de rama y, por lo tanto, de versión de Jeedom, ve al menú **Ajustes → Sistema → Configuración**, pestaña **Actualizaciones/Market**. Deja la fuente de actualización en **Predeterminada** y selecciona la versión del núcleo *(rama)* que quieras instalar.

A continuación, haz clic en el botón **Guardar** y ve al menú **Configuración → Sistema → Centro de actualizaciones**. Desde esta página, solo tienes que actualizar el núcleo para pasar a la nueva versión.

>**IMPORTANTE**
>
>En caso de que cambie la numeración del núcleo, se desaconseja encarecidamente volver a una versión anterior *(downgrade)*. Se recomienda, en cambio, esperar a que los cambios se incorporen a la versión estable para volver a ella.\
>En cuanto a las ramas secundarias, una vez probada la funcionalidad o la corrección, hay que volver a la versión base *(`develop` (en la mayoría de los casos)*.

## Actualizaciones

En `master` *(estable)* o `release`: cada nueva versión conlleva un cambio en la numeración *(x.y.z)*. Si la casilla **Comprobación automática de actualizaciones** está marcada, aparecerá un mensaje de notificación en Jeedom acompañado de un icono rojo en la barra de menú. De lo contrario, hay que ir al menú **Configuración → Sistema → Centro de actualizaciones** y hacer clic en el botón **Comprobar actualizaciones**.

Por el contrario, las demás ramas no generan notificaciones ni alertas en el centro de actualizaciones, a pesar de que se modifican con regularidad. Por lo tanto, es responsabilidad del beta-tester actualizar el núcleo manualmente y con regularidad. En particular, antes de cada fase de pruebas y, sobre todo, antes de enviar cualquier informe, para asegurarse de que el problema no se haya corregido ya.

## Registro de cambios

El **registro de cambios** *(o changelog)* ofrece una visión general de las modificaciones introducidas en cada versión de Jeedom.

Solo las versiones `master` *(estable)* y `release` *(próxima versión estable)* garantiza la presencia de un [Registro de cambios detallado y actualizado](/core/changelog){:target="_blank"}.

En `develop`, dado que las integraciones son continuas, el registro de cambios aún no se ha generado en esta fase. Para conocer los cambios introducidos desde la última versión estable, hay que consultar los [notas de la versión](https://github.com/jeedom/core/blob/develop/docs/release-notes.md){:target="_blank"} que enumeran las *Pull Requests* validadas en esta rama.

Por su parte, las ramas secundarias, al referirse a un elemento concreto, a primera vista no requieren más detalles para ser comprendidas.

## Complementos

Esta página se centra principalmente en las pruebas beta relacionadas con el núcleo de Jeedom, pero el principio es prácticamente el mismo para los complementos. De hecho, los complementos se ofrecen en versión estable *(rama `master`)* por defecto, pero también disponen de versiones `beta` para los proyectos en curso.

Para acceder a los complementos en versión `beta`, es necesario marcar la casilla **Activar el acceso a los complementos beta** en [tu perfil de Market](https://market.jeedom.com/index.php?v=d&p=profils){:target="_blank"}. A continuación, solo tienes que instalar o reinstalar el complemento en esta versión.

>**IMPORTANTE**
>
>La instalación de un complemento en versión `beta` hace que se pierda todo acceso al soporte técnico oficial.

## Enviar una sugerencia

Los beta-testers son los primeros en detectar un fallo, probar una nueva funcionalidad o validar una corrección antes de su publicación en la versión estable.

Tras analizar claramente la situación, existen varios canales disponibles para realizar informes lo más detallados posible con todo el contexto necesario. Sea cual sea el canal elegido, el primer paso imprescindible consiste en realizar una búsqueda para asegurarse de que el tema no se haya tratado ya, con el fin de evitar duplicidades.

>**IMPORTANTE**
>
>Es fundamental tener un conocimiento básico del tema por uno mismo, sin depender por completo del análisis de una inteligencia artificial. No obstante, esta puede resultar útil para dar forma a la información recopilada o para añadir información complementaria *(verificada)*.

### Foro de Jeedom

Los comentarios se pueden enviar directamente en [el salón de los beta-testers del foro Jeedom](https://community.jeedom.com/c/salon-des-beta-testeurs/6){:target="_blank"}.

Elige la sección adecuada para la categoría de la publicación y añade las etiquetas *(tags)* relacionadas con el tema *(`v4_5` (por ejemplo)*. Ahora solo tienes que redactar tu informe incluyendo toda la información posible para que cualquier persona ajena al caso pueda comprender, reproducir y analizar la situación.

>**INFORMACIÓN**
>
>La feria de los beta-testers también incluye [una sección **Sugerencias**](https://community.jeedom.com/c/salon-des-beta-testeurs/suggestion/29){:target="_blank"} para proponer mejoras.

### Tema de GitHub

Si, tras realizar una búsqueda, ya hay una *issue* o una *pull request* abierta sobre el mismo tema, puedes añadir tu análisis siempre que aporte información relevante para el desarrollo en cuestión.

Si no, puedes abrir [una *publicación* en GitHub](https://github.com/jeedom/core/issues){:target="_blank"} describiendo de forma exhaustiva el fallo que se ha producido.

>**INFORMACIÓN**
>
>En GitHub se utiliza el inglés como idioma estándar para que todo el mundo pueda entender el tema, pero aceptamos textos redactados en francés.

## Contribuir al desarrollo

Ya sea para corregir un simple error ortográfico o sintáctico, o incluso para proponer un cambio más importante, todo el mundo puede participar en el desarrollo y la evolución de la solución Jeedom a su nivel.

### Documentación

Las páginas de documentación que estás consultando actualmente requieren actualizaciones y adaptaciones periódicas para seguir siendo válidas y fiables. Agradecemos enormemente la ayuda de la comunidad en este sentido.

Hay que tener en cuenta algunas particularidades antes de proponer cambios en la documentación. Por lo tanto, es imprescindible conocer las buenas prácticas para [colaborar en la documentación](/contribute/doc) ante todo.

### Núcleo y complementos

Al igual que la documentación, el núcleo de Jeedom y la mayoría de los complementos también están abiertos a contribuciones externas. Consulta la página [«Contribuir al núcleo o a los complementos»](/contribute/core) Para más información.
