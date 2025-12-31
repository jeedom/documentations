
## Prueba beta y alfa de Jeedom

### Definición

Un Beta Tester es un usuario que prueba las versiones del software antes de que se lancen a todos los usuarios. Las pruebas beta permiten informar errores (errores funcionales o problemas de la interfaz de usuario, por ejemplo) durante la fase de desarrollo. Por tanto, es una importante fuente de mejora para el proyecto, que puede aportar ideas frescas y probar las novedades en condiciones reales. 

### Precauciones

Las versiones **Beta** y **Alfa** El núcleo o los complementos son versiones de desarrollo. Incluso si los desarrolladores, por supuesto, toman precauciones, estas versiones pueden incluir errores que podrían hacer que un complemento o el Core sean completamente inoperantes. Por lo tanto, debe estar familiarizado con los procedimientos de copia de seguridad y recuperación, etc.

El desarrollo del núcleo se realiza en [Github](https://github.com/jeedom/core) en la versión **Alfa**. Por lo tanto, tiene todas las novedades futuras, pero también la mayoría de los errores. Además, es probable que los desarrollos realizados en esta versión se cancelen o pospongan. La versión **Alfa** luego vuelve a **Beta**, quien es usualmente *Destacado fijo* y por tanto consiste en asegurar su estabilidad, permitiendo a los desarrolladores de plugins probar sus futuras versiones.

> **Importante**
> Cambiar un complemento o Core a beta (o alfa) es arriesgado y prohíbe todo acceso al soporte oficial del equipo de Jeedom. Sin embargo, los desarrolladores están presentes en [Comunidad](https://community.jeedom.com/) para ayudar en caso de problema, sin garantía sin embargo.

> **Importante**
> Se recomienda encarecidamente no instalar una versión beta o alfa en un Jeedom de producción ! Es esencial realizar la prueba en una Raspberry o en una máquina virtual de prueba y el equipo de Jeedom no se hace responsable de ningún mal funcionamiento.

### Comment

Jeedom's Core es de código abierto. Cualquiera puede decidir cambiar su Jeedom de una versión estable a una versión Beta o Alpha, con todas las precauciones necesarias mencionadas anteriormente.

El Núcleo tiene tres ramas principales en [Github](https://github.com/jeedom/core):

-  **Alfa** : Rama de la versión V4 alpha. Destinado principalmente a desarrolladores para la siguiente versión de Jeedom.
-  **Beta** : Rama de la versión V4 beta. Destinado principalmente a probadores beta, para probar antes de cambiar a estable.
-  **maestro** : Rama estable de V4.

> **Atención**
> Una vez más, esta manipulación debe reservarse para usuarios avanzados con pleno conocimiento de los hechos.

> **Atención**
> El *degradar* La versión está completamente desaconsejada y puede hacer que Jeedom sea completamente inoperante. Por ejemplo, *degradar* de Beta v4.2 a estable v4.1 no se debe hacer ! En este caso, la mejor solución es esperar la futura versión estable de la Beta actual, luego volver a poner la configuración de Jeedom en la versión estable y hacer una actualización manual. Del mismo modo, una copia de seguridad de una versión posterior no debe restaurarse a una versión anterior (por ejemplo, la copia de seguridad 4.2 en Core 4.1).

Para cambiar la versión, vaya a *Configuración → Sistema → Configuración*, pestaña *Actualizaciones / Mercado*. Deje la fuente de actualización en **Culpa** y elige la versión que quieras.

Luego guarda y luego ve a *Configuración → Sistema → Centro de actualización*. Aquí lanza una actualización del Core.

### Feedbacks

El objetivo de un probador beta es informar las inquietudes encontradas durante sus pruebas.
Estos ascensores se realizan en **[Comunidad](https://community.jeedom.com/)** en la sección **[probadores beta](https://community.jeedom.com/c/salon-des-beta-testeurs/6)**

También es en esta sección donde un evaluador puede crear un tema para proponer una mejora.

> Cada tema de esta sección debe identificarse con la etiqueta de la versión en desarrollo. Por ejemplo : etiqueta v4_4 (se utiliza un guión bajo porque los puntos están prohibidos en las etiquetas de Discourse.

Esta sección no es de acceso público. Para acceder a él, debe completar un formulario para que el equipo de Jeedom pueda dar [acceso a su cuenta](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/).

> Antes de escalar un problema, actualice el Core e intente reproducirlo nuevamente. Vea abajo.

### Gestión de actualizaciones de Core

En versión **Estable**, cada cambio provoca un cambio de versión (menor, por ejemplo 4.1.xx) que, si marcaste **Verificación automática de actualizaciones**, causará un mensaje y la aparición del punto rojo en la barra de menú. Estas actualizaciones también se muestran en *Configuración → Sistema → Centro de actualización* haciendo clic manualmente en *Buscar actualizaciones*.

En versión **Beta** y **Alfa**, los cambios son mucho más frecuentes (varias veces al día) y no provocan un cambio de versión. Por lo tanto, no aparecerán en el *Centro de actualización*, Depende del probador actualizar regularmente el Core, preferiblemente antes de cualquier fase de prueba y antes de informar un problema para asegurarse de que no se haya corregido antes.

> El equipo a veces cambia de versión durante el desarrollo, para marcar ciertas fases. Pero a diferencia de la versión Estable, se realizan muchos cambios entre dos versiones. Cada evaluador puede seguir las confirmaciones en las sucursales [Github](https://github.com/jeedom/core).

### Changelog

Desde el inicio del desarrollo de la versión **Alfa**, el equipo intenta mantener el futuro actualizado [Registro de cambios](/es_ES/core/4.5/changelog). Las nuevas funciones pueden cambiar significativamente, eliminarse o posponerse, por lo que no necesariamente están actualizadas y no tienen valor de referencia.

En versión **Estable**, el registro de cambios se hace cargo de cada versión menor (4.1.26 -> 4,1.27 etc.). En versión **Beta** y **Alfa** el registro de cambios tiene el número x.0.0 y por lo tanto no corresponde necesariamente a la versión menor actual. Por ejemplo, durante el desarrollo de v4.2, el registro de cambios solo se anota 4.2.0 mientras que una beta puede estar en 4.2.7. Al cambiar a **Estable**, el registro de cambios tendrá en cuenta cada versión secundaria futura.

### Ressouces

 [Acceso a la comunidad](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/)
 
Comunidad [probadores beta](https://community.jeedom.com/c/salon-des-beta-testeurs/6)

[Doc contribuir](/es_ES/contribute/)

[Desarrolladores de documentos](/es_ES/dev/)

[Github](https://github.com/jeedom/core)
