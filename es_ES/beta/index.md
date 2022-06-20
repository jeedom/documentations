
## Pruebas beta y alfa de Jeedom

### Definición

Un Beta Tester es un usuario que prueba versiones de software antes de que se lancen a todos los usuarios. Las pruebas beta permiten informar errores (errores funcionales o problemas de interfaz de usuario, por ejemplo) durante la fase de desarrollo. Por lo tanto, es una importante fuente de mejora para el proyecto, que puede aportar ideas frescas y probar nuevas funciones en condiciones reales. 

### Precauciones

Versiones **Beta** y **Alfa** Core o complementos son versiones de desarrollo. Aunque los desarrolladores, por supuesto, toman precauciones, estas versiones pueden incluir errores que podrían hacer que un complemento o el Core queden completamente inoperativos. Por lo tanto, debe estar familiarizado con los procedimientos de copia de seguridad y recuperación, etc.

El desarrollo central se realiza en [Github](https://github.com/jeedom/core) en la versión **Alfa**. Este por lo tanto tiene todas las novedades futuras, pero también la mayoría de los errores. Además, es probable que los desarrollos realizados sobre esta versión sean cancelados o pospuestos. La versión **Alfa** luego vuelve a **Beta**, que suele ser *Fijo destacado* y, por lo tanto, es para garantizar su estabilidad, al tiempo que permite a los desarrolladores de complementos probar sus futuras versiones.

> **Importante**
> El paso en beta (o alfa) de un complemento o Core es arriesgado y prohíbe cualquier acceso al soporte oficial del equipo de Jeedom. Sin embargo, los desarrolladores están presentes en [Comunidad](https://community.jeedom.com/) para ayudar en caso de problema, sin garantía sin embargo.

> **Importante**
> Se desaconseja encarecidamente instalar una versión beta o alfa en un Jeedom de producción ! Es esencial probar en una Raspberry o una VM de prueba, y el equipo de Jeedom no se hace responsable de ningún mal funcionamiento.

### Comment

Jeedom Core es de código abierto. Cualquiera puede decidir actualizar su Jeedom de una versión estable a una versión Beta o Alpha, con todas las precauciones necesarias mencionadas anteriormente.

El Núcleo tiene tres ramas principales en [Github](https://github.com/jeedom/core):

-  **alfa** : Rama alfa V4. Principalmente destinado a desarrolladores para la próxima versión de Jeedom.
-  **beta** : Rama de la versión beta V4. Principalmente destinado a probadores beta, para probar antes de cambiar a Estable.
-  **V4-estable** : Rama estable de V4.

> **Atención**
> Una vez más, esta manipulación debe reservarse para usuarios avanzados con pleno conocimiento de los hechos.

> **Atención**
> La *degradar* La versión está totalmente desaconsejada y puede hacer que Jeedom sea totalmente inoperante. Por ejemplo, actualizador Beta v4.2 a Estable v4.1 no debe hacerse ! En este caso, la mejor solución es esperar la futura versión estable de la versión beta actual, luego devolver la configuración de Jeedom a la versión estable y realizar una actualización manual. Del mismo modo, una copia de seguridad de una versión posterior no debe restaurarse a una versión anterior (por ejemplo, la copia de seguridad 4.2 en el núcleo 4.1).

Para cambiar de versión, vaya a *Ajustes → Sistema → Configuración*, pestaña *Actualizaciones/Mercado*. Deje la fuente de actualización en **Defecto** y elige la versión que quieras.

Luego guarda y luego ve a *Configuración → Sistema → Centro de actualización*. Aquí lanza una actualización de Core.

### Feedbacks

El objetivo de un probador beta es informar los problemas encontrados durante sus pruebas.
Estos ascensores están hechos en **[Comunidad](https://community.jeedom.com/)** en la sección **[probadores beta](https://community.jeedom.com/c/salon-des-beta-testeurs/6)**

También es en esta sección que un probador puede crear un tema para proponer una mejora.

> Cada tema de esta sección debe estar identificado con la etiqueta de la versión en desarrollo. Por ejemplo : etiqueta v4_2 (se usa un guión bajo porque los puntos están prohibidos en las etiquetas en Discourse.

Esta sección no es de acceso público. Para acceder a él, debe completar un formulario para que el equipo de Jeedom le dé [acceder a tu cuenta](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/).

### Gestión de actualizaciones del núcleo

En versión **Firme**, cada cambio provoca un cambio de versión (menor, por ejemplo 4.1.xx) que, si marcó **Comprobación automática de actualizaciones**, provocará un mensaje y la aparición del punto rojo en la barra de menú. Estas actualizaciones también se muestran en *Configuración → Sistema → Centro de actualización* haciendo clic manualmente en *Buscar actualizaciones*.

En versión **Beta** y **Alfa**, los cambios son mucho más frecuentes (varias veces al día) y no provocan un cambio de versión. Por lo tanto, no aparecerán en el *Centro de actualización*, depende del probador actualizar regularmente el Core, preferiblemente antes de cualquier fase de prueba y antes de informar un problema para asegurarse de que no se haya corregido antes.

> El equipo a veces cambia de versión durante el desarrollo, para marcar ciertas fases. Pero a diferencia de la versión Estable, se realizan muchos cambios entre dos versiones. Cada evaluador puede realizar un seguimiento de las confirmaciones en las ramas [Github](https://github.com/jeedom/core).

### Changelog

Desde el inicio del desarrollo de la versión **Alfa**, el equipo intenta mantener el futuro [Changelog](/fr_FR/core/#VERSION#/registro de cambios). Las nuevas características pueden cambiar significativamente o eliminarse o posponerse, por lo que esta no está necesariamente actualizada y no tiene valor de referencia.

En versión **Firme**, el registro de cambios incluye cada versión menor (4.1.26 -> 4.1.27 etc). En versión **Beta** y **Alfa** el registro de cambios está numerado x.0.0 y, por lo tanto, no corresponde necesariamente a la versión secundaria actual. Por ejemplo, al desarrollar v4.2, el registro de cambios solo tiene una calificación de 4.2.0 mientras que una beta puede estar en 4.2.7. Al pasar **Firme**, el registro de cambios tendrá en cuenta cada versión secundaria futura.

### Ressouces

 [Acceso a la comunidad](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/)
 
Comunidad [probadores beta](https://community.jeedom.com/c/salon-des-beta-testeurs/6)

[Contribución del doctor](/es_ES/contribute/)

[Desarrolladores de documentos](/es_ES/dev/)

[Github](https://github.com/jeedom/core)
