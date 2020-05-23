# Migración de Jeelink

Veremos aquí cómo migrar una instalación con Jeedom en modo esclavo a un Jeedom con el complemento "Jeedom Link". El modo esclavo Jeedom se abandona en la transición de Jeedom a la versión 3.0, es necesario proceder antes de la migración al nuevo modo operativo.

# Preparación antes de la migración

> **Advertencia**
>
> Es importante leer toda esta documentación antes de embarcarse en la migración. La información importante sobre los requisitos previos para actualizar, guardar y recuperar información es esencial para la comprensión adecuada de la operación que se llevará a cabo. No leer esta documentación puede llevar a operaciones destructivas en su instalación. Si no entiende un punto, no dude en hacer preguntas en el foro antes de comenzar el procedimiento !

> **Importante**
>
> Tenga cuidado de no conectar el equipo configurando el complemento "Jeedom Link"". Por ejemplo, no haga un Equipment-X en un Jeedom1 que vuelve a subir en un Jeedom2 y luego vuelve a subir en Jeedom1. Podría dejar caer tus Jeedoms !

> **Nota**
>
> Para una mejor lectura y comprensión de este tutorial, aquí están los términos utilizados :
>
> - **Jeedom Target** : Servidor (su antiguo Jeedom Master) que centraliza el equipo del **Jeedom (s) Fuente (s))**  Las capturas de pantalla en un fondo negro corresponden a la **Jeedom Target**.
>
> - **Fuente de la libertad** : Servidor (su / su antiguo esclavo (s) Jeedom) que vuelve a ensamblar su equipo en el **Jeedom Target**.
>
> - Las nociones de **Jeedom Master** y **Jeedom Slave** ya no es relevante. El nuevo modo operativo de sincronización de equipos entre varios Jeedoms puede ser bidireccional. Un servidor Jeedom ahora puede ser **Fuente** y **Target** mientras que el modo antiguo solo permitía el ascenso del equipo de  **el esclavo** Hacia **el maestro**. Con el nuevo modo también es posible tener varios **Jeedom Targets** por lo mismo **Fuente de la libertad**. La comunicación entre Jeedoms ahora también se puede hacer de forma remota a través de Internet (Jeedom DNS u otro).

![jeelink.migration9](images/jeelink.migration9.png)

## Actualizaciones de configuración y verificación

-   Actualiza el **Jeedom Master** a la última versión (incluso si no se le ofrece ninguna actualización)).
-   Actualizar complementos de **Jeedom Master** las últimas versiones disponibles.
-   Compruebe en la página de Salud que la configuración de red interna del **Jeedom Master** está bien (y externo si su **Fuentes de Jeedoms** será distante).

## Recopilando información útil

Dependiendo de los complementos instalados en su **Jeedom Slave**, es necesario recuperar la siguiente información :

### Complemento Zwave

-   En la página de salud del complemento Zwave en el **Jeedom Master**, escoge tu **Esclavo** en el menú desplegable y haga una captura de pantalla para tener una lista del equipo que proviene de él.
-   Nota para cada equipo proveniente de **el esclavo** : objeto principal, nombre, ID (nodo), modelo.
-   Recuperar archivo Zwcfg : *Complementos ⇒ Gestión de complementos ⇒ onda Z*. Haga clic en el botón rojo *Zwcfg* y copie el contenido a un archivo de texto en su computadora.

### Complemento RFXcom

-   Nota para cada equipo proveniente de **el esclavo** : objeto principal, nombre, ID (lógico), tipo, modelo.

> **Nota**
>
> Hay disponible una hoja de información no exhaustiva para la migración [aquí](images/MemoMigration.xls)

## Copias de seguridad preventivas

-   Hacer un [Jeedom backup](https://doc.jeedom.com/es_ES/core/doc-core-backup.html) de su **Jeedom Master** y tu (tu) **Jeedom Slave (s))** y recuperarlo (s) en su PC / NAS.
-   Hacer un [Copia de seguridad de disco / SD](https://doc.jeedom.com/es_ES/howto/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd) de su **Jeedom Master** y tu (tu) **Jeedom Slave (s))** y recuperarlos en su PC / NAS.

# Migration

> **Nota**
>
> No elimine equipos viejos de  **el esclavo** sobre **el maestro**.

## Instale y active el complemento "Jeedom Link" en el **Jeedom Target** (ex maestro).

En su **Jeedom Target**, *Complementos ⇒ Gestión de complementos* :

![jeelink.migration1](images/jeelink.migration1.png)

## Instalación de **Fuente de la libertad**

> **Nota**
>
> Si tiene una Raspberry Pi adicional y otra tarjeta SD, puede migrar un protocolo tras otro instalando uno nuevo **Fuente de la libertad** en paralelo sin tener que tocar tu **Jeedom Slave** existente. Obviamente al mover posibles controladores de uno a otro.

> **Advertencia**
>
> Si está utilizando su RaspberryPi existente, asegúrese de seguir el capítulo de copia de seguridad de esta documentación.

> **Nota**
>
> si está utilizando la Raspberry Pi existente, que actualmente es una  **Jeedom Slave**, le recomendamos que use una nueva tarjeta SD / microSD. Esto le permitirá retroceder fácilmente si es necesario.

-   Instale un nuevo Jeedom en una nueva tarjeta SD (ya sea para poner en su **Jeedom Slave** existente o para una nueva Raspberry Pi) siguiendo el [documentación de instalación](https://doc.jeedom.com/es_ES/installation/doc-installation.html).
-   Actualiza el **Fuente de la libertad** a la última versión (incluso si no se le ofrece ninguna actualización)).
-   Compruebe en la página Estado que la configuración de red interna (y externa si es necesario) del **Fuente de la libertad** esta bien.

## Configuración de fuente de Jeedom

-   Cambie la contraseña del usuario administrador o / y configure un nuevo usuario.
-   Configure su cuenta de Jeedom Market (*Configuración ⇒ Actualizaciones y archivos ⇒ pestaña "Mercado""*). Haga clic en la prueba después de guardar, para confirmar la entrada de sus identificadores de Jeedom Market).
-   Instalación y activación del complemento "Jeedom Link" en el nuevo **Fuente de la libertad**.
![jeelink.migration2](images/jeelink.migration2.png)
-   Instalación y activación de complementos que desea usar. (Es recomendable hacerlos uno por uno, verificando cada vez que las dependencias y los demonios estén bien).
-   Recrea el árbol de objetos (solo los que te serán útiles) del **Jeedom Target** (Viejo maestro) en tu nuevo **Fuente de la libertad** (Antiguo esclavo).

## Configuración de equipos en el **Fuente de la libertad**

Para enviar equipos presentes en el **Fuente de la libertad** hacia **Jeedom Target** a través del complemento "Jeedom Link", ya debe estar operativo en su nuevo **Fuente de la libertad**.

> **Nota**
>
> Recuerde desactivar el registro de comandos de información para cada equipo en el **Fuente de la libertad** para guardar la tarjeta SD (la historización se realizará en el  **Jeedom Target**).

> **Nota**
>
> También puede asignar gradualmente el equipo a los objetos recreados en el **Fuente de la libertad** para que luego se coloquen automáticamente en el objeto correcto en el **Jeedom Target** al declarar en el complemento Jeedom Link". En caso de nombre duplicado con equipo ya presente en los objetos del **Jeedom Target**,  el complemento agregará "XXXX remoto" al nombre del equipo.

### Complemento Zwave

-   Haga clic en el botón "Sincronizar" para recuperar los módulos asociados con su controlador. (Se mantienen en el recuerdo)
-   Reemplazar archivo *Zwcfg* : *Complementos ⇒ Gestión de complementos ⇒ onda Z*. Haga clic en el botón rojo *Zwcfg* y pegue el contenido del archivo de texto creado previamente en su computadora. *Guardar cambios*.
-   Cambie el nombre de sus módulos y colóquelos en los objetos deseados, utilizando su memo de migración.

### Complemento RFXcom :

#### Sondas, sensores, detectores,

-   Cambie el complemento al modo de inclusión.
-   Repita la inclusión hasta que tenga todo su equipo de este tipo.
-   Cambie el nombre de su equipo y colóquelo en los objetos deseados utilizando su memo de migración.

#### Actuadores, enchufes,

-   Agregar nuevo equipo.
-   Defina el nombre, ID, objeto principal, tipo de equipo y modelo utilizando su memo de migración.
-   Repita para todos sus equipos de este tipo.

## Configuración del complemento "Jeedom Link"

El complemento "Jeedom Link" instalado en el **Fuente de la libertad** permitirá que el equipo sea llevado a **Jeedom Target** (Tu viejo maestro).

> **Nota**
>
> Recordatorio, para una mejor lectura y comprensión de este tutorial :
>
> - Las capturas de pantalla en un fondo negro corresponden a la **Jeedom Target**.
> - Las capturas de pantalla en un fondo blanco corresponden a **Fuente de la libertad**.

Sobre **Fuente de la libertad**,
[Configurar](https://doc.jeedom.com/es_ES/plugins/jeelink/jeelink)
el complemento "Jeedom Link" especificando :

-   El nombre de **Jeedom Target**.
-   La dirección IP o el nombre DNS del **Jeedom Target**.
-   La clave API de **Jeedom Target**.

Y guarda la configuración.

![jeelink.migration3](images/jeelink.migration3.png)

En la pestaña *Cesión*, agregue el equipo que desea volver al **Jeedom Target**.

![jeelink.migration4](images/jeelink.migration4.png)

Haga clic en *Agregar equipo* Seleccione el objeto y el equipo para agregar :

![jeelink.migration5](images/jeelink.migration5.png)

Después de actualizar la página *Mis enlaces* del **Jeedom Target**, deberías ver la creación automática del equipo :

![jeelink.migration6](images/jeelink.migration6.png)

Al igual que todos los equipos Jeedom, puede activar / desactivar y mostrar o no el equipo, sus controles, ... o cambiar la categoría :

![jeelink.migration7](images/jeelink.migration7.png)

En la pestaña *Comandos*, accede a todos los parámetros de los controles del equipo :

![jeelink.migration8](images/jeelink.migration8.png)

## Recuperación histórica

> **Nota**
>
> Para hacer en **Jeedom Target** (Ex maestro) para cada comando de información del equipo del ex **Esclavo** cuya historia queremos recuperar.

-   Ir a la configuración del pedido (*Rueda dentada a la derecha*).
-   Ir a la pestaña *Configuración avanzada*.
-   Haga clic en el botón *Copiar el histórico de esta orden en otra orden*.
-   Encuentre el pedido correspondiente para el nuevo equipo JeeLink correspondiente y confirme.

## Reemplazo de equipos esclavos antiguos en escenarios / virtuales /

> **Nota**
>
> Para hacer en **Jeedom Target** (Ex maestro) para cada comando de información / acción del equipo del primero **Esclavo** cuyas ocurrencias queremos reemplazar en escenarios / virtuales /

-   Ir a la configuración del pedido (*Rueda dentada a la derecha*).
-   Ir a la pestaña *Información*.
-   Haga clic en el botón *Reemplazar este comando por el comando*.
-   Encuentre el pedido correspondiente para el nuevo equipo JeeLink correspondiente y confirme.

## Recuperando configuraciones de pantalla avanzadas para comandos

> **Nota**
>
> Para hacer en **Jeedom Target** (Ex maestro) para cada comando de información / acción del equipo del primero **Esclavo** que queremos recuperar configuraciones de pantalla avanzadas.

-   Ir a la configuración del pedido (*Rueda dentada a la derecha*).
-   Haga clic en el botón *Aplicar*.
-   Busque y seleccione el comando correspondiente para el nuevo equipo JeeLink correspondiente y confirme.

## Copia de configuraciones de comando avanzadas

> **Nota**
>
> Para hacer en **Jeedom Target** (Ex maestro) para cada comando de información / acción del equipo del primero **Esclavo** que queremos recuperar la configuración avanzada.

-   No hay una solución fácil a este nivel, necesitará tener dos pestañas / ventanas abiertas en su navegador.
-   Órdenes abiertas para equipos viejos **Esclavo** en una pestaña (Jeedom Target).
-   Abra los controles del equipo jeeLink en la otra pestaña (Jeedom Target).
-   Y copie los parámetros deseados a mano.

> **Nota**
>
> Para evitar repetir el mismo comando varias veces, operaciones 2.6 → 2.9 puede llevarse a cabo en secuencia en el mismo orden antes de proceder a lo siguiente.

> **Advertencia**
>
> Interacciones en el **Jeedom Target** no se puede iniciar utilizando equipos de un **Fuente de la libertad** transferido a través del complemento Jeedom Link".

# Hogar en el **Jeedom Target**

> **Nota**
>
> Después de validar con certeza que su equipo / escenarios / interacciones / virtual /. funciona bien con el nuevo sistema jeelink, puedes hacer la limpieza.

-   Eliminar el equipo residual de la antigua **Jeedom Slave**.
-   Deshabilite y elimine complementos que ya no le sean útiles (aquellos para los que solo tenía equipo en Slave).
-   En el complemento "Jeedom Link", cambie el nombre del equipo que podría tener un nombre que termine con "remoto XXXX".
-   En la página de Jeedom Network, elimine la anterior **Jeedom Slave**.
