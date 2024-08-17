# Registro de cambios Jeedom V4.5

# 4.5

- Posibilidad de cambiar el tamaño de las columnas de la tabla (por el momento sólo la lista de variables, se ampliará a otras tablas si es necesario)) [ENLACE](https://github.com/jeedom/core/issues/2499)
- Se agregó una alerta si el espacio en disco es demasiado bajo (la verificación se realiza una vez al día)) [ENLACE](https://github.com/jeedom/core/issues/2438)
- Se agregó un botón a la ventana de configuración del pedido en el campo de cálculo del valor para recuperar un pedido [ENLACE](https://github.com/jeedom/core/issues/2776)
- Posibilidad de ocultar ciertos menús para usuarios limitados [ENLACE](https://github.com/jeedom/core/issues/2651)
- Los gráficos se actualizan automáticamente cuando llegan nuevos valores [ENLACE](https://github.com/jeedom/core/issues/2749)
- Jeedom agrega automáticamente la altura de la imagen al crear widgets para evitar problemas de superposición en dispositivos móviles [ENLACE](https://github.com/jeedom/core/issues/2539)
- Rediseño de la parte de copia de seguridad en la nube [ENLACE](https://github.com/jeedom/core/issues/2765)
- **DESARROLLO** Configurar un sistema de colas para la ejecución de acciones [ENLACE](https://github.com/jeedom/core/issues/2489)
- Las etiquetas del escenario ahora son específicas de la instancia del escenario (si tiene dos escenarios lanzados muy juntos, las etiquetas del último ya no sobrescriben al primero)) [ENLACE](https://github.com/jeedom/core/issues/2763)
- Cambiar a la parte desencadenante de los escenarios : [ENLACE](https://github.com/jeedom/core/issues/2414)
  - ``triggerId()`` Ahora está en desuso y se eliminará en futuras actualizaciones principales
  - ``trigger()`` Ahora está en desuso y se eliminará en futuras actualizaciones principales
  - ``triggerValue()`` Ahora está en desuso y se eliminará en futuras actualizaciones principales
  - ``#trigger#`` : Puede ser :
    - ``api`` si el lanzamiento fue activado por la API,
    - ``TYPEcmd`` si el inicio fue activado por un comando, con TYPE reemplazó la identificación del complemento (por ejemplo, virtualCmd),
    - ``schedule`` si fue lanzado por programación,
    - ``user`` si se inició manualmente,
    - ``start`` para un lanzamiento en la startup Jeedom.
  - ``#trigger_id#`` : Si es un comando el que desencadenó el escenario, entonces esta etiqueta tiene el valor de la identificación del comando que lo desencadenó
  - ``#trigger_name#`` : Si es un comando el que desencadenó el escenario, entonces esta etiqueta tiene el valor del nombre del comando (en el formato [objeto][equipo][comando])
  - ``#trigger_value#`` : Si es un comando que desencadenó el escenario, entonces esta etiqueta tiene el valor del comando que desencadenó el escenario
- Gestión de complementos mejorada en github (no más dependencias de una biblioteca de terceros)) [ENLACE](https://github.com/jeedom/core/issues/2567)
- Eliminando el antiguo sistema de caché. [ENLACE](https://github.com/jeedom/core/pull/2799)
- Posibilidad de borrar los bloques IN y A mientras se espera otro escenario [ENLACE](https://github.com/jeedom/core/pull/2379)
- Se corrigió un error en Safari en filtros con acentos [ENLACE](https://github.com/jeedom/core/pull/2754)
- Se corrigió un error en la generación de información de tipo genérico en escenarios [ENLACE](https://github.com/jeedom/core/pull/2806)
- Se agregó confirmación al abrir el acceso de soporte desde la página de administración de usuarios [ENLACE](https://github.com/jeedom/core/pull/2809)
- Adición de escenarios de condiciones mayores o iguales y menores o iguales al asistente de condiciones [ENLACE](https://github.com/jeedom/core/issues/2810)
- Capacidad para excluir órdenes del análisis de órdenes muertas [ENLACE](https://github.com/jeedom/core/issues/2812)
- Se corrigió un error en la numeración del número de filas en las tablas [ENLACE](https://github.com/jeedom/core/commit/0e9e44492e29f7d0842b2c9b3df39d0d98957c83)
- Se agregó openstreetmap.org en dominios externos permitidos de forma predeterminada [ENLACE](https://github.com/jeedom/core/commit/2d62c64f0bd1958372844f6859ef691f88852422)
- Actualización automática del archivo de seguridad de Apache al actualizar el núcleo [ENLACE](https://github.com/jeedom/core/issues/2815)
- Se corrigió una advertencia en las vistas [ENLACE](https://github.com/jeedom/core/pull/2816)
- Se corrigió un error en el valor de selección del widget predeterminado [ENLACE](https://github.com/jeedom/core/pull/2813)
- Se corrigió un error si un comando excedía su mínimo o máximo, el valor cambiaba a 0 (en lugar de mínimo/máximo)) [ENLACE](https://github.com/jeedom/core/issues/2819)
- Se corrigió un error en la visualización del menú de configuración en ciertos idiomas [ENLACE](https://github.com/jeedom/core/issues/2821)
- Posibilidad en el escenario programado de activar cálculos/comando/etiqueta/fórmula que resulten en la hora de lanzamiento en formato Gi (hora sin cero ni minuto inicial, ejemplo para las 9:15 a.m. => 915 o para las 11:40 p.m. => 2340) [ENLACE](https://github.com/jeedom/core/pull/2808)
- Posibilidad de poner una imagen personalizada del equipo en los plugins (si el plugin lo soporta), para ello basta con poner la imagen en `data/img` en el formato `eqLogic#id#.png` con #id# el id del equipo (lo puedes encontrar en la configuración avanzada del equipo)) [ENLACE](https://github.com/jeedom/core/pull/2802)
- Agregar el nombre del usuario que lanzó el escenario en la etiqueta ``#trigger_value#`` [ENLACE](https://github.com/jeedom/core/pull/2382)
- Se corrigió un error que podía ocurrir si abandonaba el panel antes de que terminara de cargarse [ENLACE](https://github.com/jeedom/core/pull/2827)
- Se corrigió un error en la página de reemplazo al filtrar objetos [ENLACE](https://github.com/jeedom/core/issues/2833)

>**IMPORTANTE**
>
> Debido al cambio del motor de caché en esta actualización, todo el caché se perderá, no te preocupes, es el caché el que se reconstruirá solo. El caché contiene, entre otras cosas, los valores de los comandos que se actualizarán automáticamente cuando los módulos aumenten su valor. Ten en cuenta que si tienes virtuales con un valor fijo (lo cual no es bueno si no cambia entonces tienes que usar variables) entonces tendrás que guardarlos nuevamente para recuperar el valor.