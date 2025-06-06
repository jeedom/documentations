# Registro de cambios Jeedom V4.5

# 4.5

- Posibilidad de cambiar el tamaño de las columnas de la tabla (solo la lista de variables por el momento, esto se extenderá a otras tablas si es necesario)) [ENLACE](https://github.com/jeedom/core/issues/2499)
- Se agregó una alerta si el espacio en disco es demasiado bajo (la verificación se realiza una vez al día)) [ENLACE](https://github.com/jeedom/core/issues/2438)
- Se agregó un botón a la ventana de configuración del pedido en el campo de cálculo del valor para recuperar un pedido [ENLACE](https://github.com/jeedom/core/issues/2776)
- Posibilidad de ocultar ciertos menús para usuarios con derechos limitados [ENLACE](https://github.com/jeedom/core/issues/2651)
- Los gráficos se actualizan automáticamente cuando llegan nuevos valores [ENLACE](https://github.com/jeedom/core/issues/2749)
- Jeedom agrega automáticamente la altura de la imagen al crear widgets para evitar problemas de superposición en dispositivos móviles [ENLACE](https://github.com/jeedom/core/issues/2539)
- Rediseño de la parte de copia de seguridad en la nube [ENLACE](https://github.com/jeedom/core/issues/2765)
- **DESARROLLO** Configurar un sistema de colas para ejecutar acciones [ENLACE](https://github.com/jeedom/core/issues/2489)
- Las etiquetas de escenario ahora son específicas de la instancia del escenario (si tiene dos lanzamientos de escenario muy cercanos, las etiquetas del último ya no sobrescriben la primera)) [ENLACE](https://github.com/jeedom/core/issues/2763)
- Cambiar a la parte desencadenante de los escenarios : [ENLACE](https://github.com/jeedom/core/issues/2414)
  - ``triggerId()`` Ahora está en desuso y se eliminará en futuras actualizaciones principales. Si tienes ``triggerId() == 587`` debe ser reemplazado por ``#trigger_id# == 587``
  - ``triggerValue()`` Ahora está en desuso y se eliminará en futuras actualizaciones principales. Si tienes ``triggerValue() == 10`` debe ser reemplazado por ``#trigger_value# == 10``
  - ``#trigger#`` : Puede ser :
    - ``api`` si el lanzamiento fue activado por la API,
    - ``TYPEcmd`` si el inicio fue activado por un comando, con TIPO reemplazado por la identificación del complemento (por ejemplo, virtualCmd),
    - ``schedule`` si fue lanzado por programación,
    - ``user`` si se inició manualmente,
    - ``start`` para un lanzamiento en la startup Jeedom.
  - ``#trigger_id#`` : Si es un comando el que desencadenó el escenario, entonces esta etiqueta toma el valor de la identificación del comando que lo desencadenó
  - ``#trigger_name#`` : Si es un comando el que desencadenó el escenario, entonces esta etiqueta toma el valor del nombre del comando (en el formato [objeto][equipo][comando])
  - ``#trigger_value#`` : Si es un comando que desencadenó el escenario, entonces esta etiqueta toma el valor del comando que desencadenó el escenario
  - ``#trigger_message#`` : Mensaje indicando el origen del lanzamiento del escenario
- Gestión de complementos mejorada en github (no más dependencias de una biblioteca de terceros)) [ENLACE](https://github.com/jeedom/core/issues/2567)
- Eliminando el antiguo sistema de caché. [ENLACE](https://github.com/jeedom/core/pull/2799)
- Posibilidad de borrar los bloques IN y A mientras se espera otro escenario [ENLACE](https://github.com/jeedom/core/pull/2379)
- Se corrigió un error en Safari en filtros con acentos [ENLACE](https://github.com/jeedom/core/pull/2754)
- Se corrigió un error en la generación de información *tipo genérico* en los escenarios [ENLACE](https://github.com/jeedom/core/pull/2806)
- Se agregó confirmación al abrir el acceso de soporte desde la página de administración de usuarios [ENLACE](https://github.com/jeedom/core/pull/2809)
- Se mejoró el sistema cron para evitar algunas fallas de lanzamiento [ENLACE](https://github.com/jeedom/core/commit/533d6d4d508ffe5815f7ba6355ec45497df73313)
- Adición de escenarios de condiciones al asistente de condiciones *mayor o igual* Y *menor o igual* [ENLACE](https://github.com/jeedom/core/issues/2810)
- Capacidad para excluir órdenes del análisis de órdenes muertas [ENLACE](https://github.com/jeedom/core/issues/2812)
- Se corrigió un error en la numeración del número de filas en las tablas [ENLACE](https://github.com/jeedom/core/commit/0e9e44492e29f7d0842b2c9b3df39d0d98957c83)
- Se agregó openstreetmap.org en dominios externos permitidos de forma predeterminada [ENLACE](https://github.com/jeedom/core/commit/2d62c64f0bd1958372844f6859ef691f88852422)
- Actualización automática del archivo de seguridad de Apache al actualizar el núcleo [ENLACE](https://github.com/jeedom/core/issues/2815)
- Se corrigió una advertencia en las vistas [ENLACE](https://github.com/jeedom/core/pull/2816)
- Se corrigió un error en el valor de selección del widget predeterminado [ENLACE](https://github.com/jeedom/core/pull/2813)
- Se corrigió un error si un comando excedía su mínimo o máximo, el valor cambiaba a 0 (en lugar de mínimo/máximo)) [ENLACE](https://github.com/jeedom/core/issues/2819)
- Se corrigió un error al mostrar el menú de configuración en ciertos idiomas [ENLACE](https://github.com/jeedom/core/issues/2821)
- Posibilidad en los disparadores programados de los escenarios de utilizar cálculos/comandos/etiquetas/fórmulas dando como resultado el tiempo de lanzamiento en forma Gi (horas sin cero inicial y minutos, ejemplo para las 9:15 a.m. => 915 o para las 11:40 pm => 2340) [ENLACE](https://github.com/jeedom/core/pull/2808)
- Posibilidad de poner una imagen personalizada del equipo en los plugins (si el plugin lo soporta), esto se hace en la configuración avanzada del equipo [ENLACE](https://github.com/jeedom/core/pull/2802) [ENLACE](https://github.com/jeedom/core/pull/2852)
- Agregar el nombre del usuario que lanzó el escenario a la etiqueta ``#trigger_value#`` [ENLACE](https://github.com/jeedom/core/pull/2382)
- Se corrigió un error que podía ocurrir al salir del tablero antes de que terminara de cargarse [ENLACE](https://github.com/jeedom/core/pull/2827)
- Se corrigió un error en la página de reemplazo al filtrar objetos [ENLACE](https://github.com/jeedom/core/issues/2833)
- Apertura mejorada del registro de cambios principal en iOS (ya no en una ventana emergente)) [ENLACE](https://github.com/jeedom/core/issues/2835)
- Ventana de creación avanzada de widgets mejorada [ENLACE](https://github.com/jeedom/core/pull/2836)
- Se mejoró la ventana de configuración de comandos avanzados [ENLACE](https://github.com/jeedom/core/pull/2837)
- Se corrigió un error en la creación de widgets [ENLACE](https://github.com/jeedom/core/pull/2838)
- Se corrigió un error en la página del escenario y en la ventana de adición de acciones que ya no podía funcionar [ENLACE](https://github.com/jeedom/core/issues/2839)
- Se corrigió un error que podía cambiar el orden de los comandos al editar el panel [ENLACE](https://github.com/jeedom/core/issues/2841)
- Se corrigió un error de JavaScript en los registros [ENLACE](https://github.com/jeedom/core/issues/2840)
- Se agregó seguridad en la codificación json en ajax para evitar errores debido a caracteres no válidos [ENLACE](https://github.com/jeedom/core/commit/0784cbf9e409cfc50dd9c3d085c329c7eaba7042)
- Si un comando de equipo es del tipo genérico "Batería" y tiene la unidad "%" entonces el núcleo asignará automáticamente el nivel de batería del equipo al valor del comando [ENLACE](https://github.com/jeedom/core/issues/2842)
- Mejora de textos y corrección de errores [ENLACE](https://github.com/jeedom/core/pull/2834)
- Al instalar dependencias npm, el caché se limpia antes [ENLACE](https://github.com/jeedom/core/commit/1a151208e0a66b88ea61dca8d112d20bb045c8d9)
- Se corrigió un error en los planos 3D que podía bloquear completamente la configuración [ENLACE](https://github.com/jeedom/core/pull/2849)
- Se corrigió un error en la ventana de visualización de registros [ENLACE](https://github.com/jeedom/core/pull/2850)
- Posibilidad de elegir el puerto de escucha de Apache en modo acoplable [ENLACE](https://github.com/jeedom/core/pull/2847)
- Se corrigió una advertencia al guardar en la tabla de eventos [ENLACE](https://github.com/jeedom/core/issues/2851)
- Agregar un nombre para mostrar para objetos [ENLACE](https://github.com/jeedom/core/issues/2484)
- Se agregó un botón para eliminar historias y eventos de la línea de tiempo en el futuro [ENLACE](https://github.com/jeedom/core/issues/2415)
- Se solucionó un problema con los comandos de tipo seleccionado en los diseños [ENLACE](https://github.com/jeedom/core/issues/2853)
- Posibilidad de indicar que el equipo no tiene batería (en caso de mala recuperación) [ENLACE](https://github.com/jeedom/core/issues/2855)
- Rediseño de escritura en logs, eliminación de la biblioteca monolog (tenga en cuenta que la opción de enviar logs en syslog ya no está disponible en este momento, si la demanda es alta veremos cómo volver a colocarla)) [ENLACE](https://github.com/jeedom/core/pull/2805)
- Mejor gestión de los niveles de registro de sublogs de complementos [ENLACE](https://github.com/jeedom/core/issues/2860)
- Eliminar la carpeta del proveedor (usando Composer de la manera normal) le permite reducir el tamaño del núcleo [ENLACE](https://github.com/jeedom/core/commit/3aa99c503b6b1903e6a07b346ceb4d03ca3c0c42)
- La configuración específica del widget ahora se puede traducir [ENLACE](https://github.com/jeedom/core/pull/2862)
- Se corrigió un error en Mac en los diseños al hacer clic derecho [ENLACE](https://github.com/jeedom/core/issues/2863)
- Ajout de widget badge pour les commandes de type texte [ENLACE](https://github.com/jeedom/core/issues/2864)
- Mejora del sistema de lanzamiento de escenarios programados [ENLACE](https://github.com/jeedom/core/issues/2875)
- Mensajes de error de excepción mejorados si el nivel de registro es depuración [ENLACE](https://github.com/jeedom/core/issues/2886)
- En la página de reposición posibilidad de solicitar la desactivación del equipo [ENLACE](https://github.com/jeedom/core/issues/2893)
- Durante una actualización, la copia de seguridad directa ahora tiene en cuenta las exclusiones de complementos [ENLACE](https://github.com/jeedom/core/commit/22aa19b85028b0de6f7d3028ae0424d4f238f7df)
- Si un complemento está en versión beta pero no tiene un registro de cambios beta, el centro de actualización volverá al registro de cambios estable [ENLACE](https://github.com/jeedom/core/commit/2af7b0a4d8680f68810cf9d07c657c51fe9e40bd)
- Se agregó una alerta si la versión de Debian es 10 o menos [ENLACE](https://github.com/jeedom/core/issues/2912)
- Corregir error de actualización de base de datos en la tabla de caché [ENLACE](https://github.com/jeedom/core/commit/a21f3498195f0003c5ead7cd5e8589f1c77c1c06)
- Si la página del equipo tiene un elemento img_device (etiqueta de tipo img), entonces el núcleo puede configurar la URL para mostrar la imagen correcta del equipo (usando la de la página de presentación de todos los equipos del complemento)) [ENLACE](https://github.com/jeedom/core/commit/07708ba4cbed982af968919dac3e406707867417)
- Se corrigió un error con la función time_diff [ENLACE](https://github.com/jeedom/core/issues/2915)
- Corrección de errores en la gestión de dependencias del compositor [ENLACE](https://github.com/jeedom/core/issues/2920)
- En caso de un comando vacío, Jeedom fuerza el retorno de acuerdo con el subtipo del comando (por lo tanto, 0 para números y binarios)) [ENLACE](https://github.com/jeedom/core/commit/442d47246373e4f52b1dde7d1c7fdc9f67ea143e)
- Soporte para eventos de tipo personalizado #pluginClass::*# O #pluginClass::customId# [ENLACE](https://github.com/jeedom/core/pull/2964)
- Se agregó un botón de actualización a la línea "principal" además del que está en la parte superior derecha [ENLACE](https://github.com/jeedom/core/pull/2974)
- Reparar la pantalla "paquete" en el nivel del paquete python2 [ENLACE](https://github.com/jeedom/core/pull/2973)
- Se corrigió un error al actualizar el equipo en la página de la batería [ENLACE](https://github.com/jeedom/core/pull/3008)
- La vérification de la connexion réseau est désormais effectuée de manière aléatoire toutes les 10 minutes afin d'éviter que toutes les box Jeedom ne tentent de se reconnecter simultanément en cas de microcoupure.
- Correction du système de file d'attente sur la partie DB [ENLACE](https://github.com/jeedom/core/pull/3051).

>**IMPORTANTE**
>
> Debido a la revisión de registros y la reinternalización de bibliotecas, durante la actualización puede aparecer un error estándar ``PHP Fatal error`` (nada grave) simplemente reinicie la actualización.

>**IMPORTANTE**
>
> Restaurar una copia de seguridad 4.4 en algunos casos puede provocar errores en la interfaz web. Rien de grave cela peut facilement se corriger il suffit de faire : `cd /tmp;wgY https://github.com/jeedom/core/archive/refs/tags/4.4.19.zip;descomprimir 4.4.19.zip;cd core-4.4.19;cp -rf * /var/www/html/;rm -rf /tmp/master.zip;rm -rf /tmp/core-4.4.19;`. Puede ejecutar este comando desde la interfaz de rescate de jeedom (agregue `&rescue=1` en la URL), o directamente a través de ssh.
