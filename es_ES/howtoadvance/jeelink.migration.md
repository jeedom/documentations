# Migración Jeelink

Veremos aquí cómo migrar una instalación con Jeedom en modo esclavo a un Jeedom con el complemento "Jeedom Link". El modo esclavo de Jeedom se abandonó cuando Jeedom pasó a la versión 3.0, es necesario proceder antes de migrar al nuevo modo de funcionamiento.

# Preparación antes de la migración

> **Advertencia**
>
> Es importante leer toda esta documentación antes de emprender la migración. La información importante sobre los requisitos previos para actualizar, guardar y recuperar información es esencial para una buena comprensión de la operación a realizar. La falta de lectura de esta documentación puede resultar en operaciones destructivas en su instalación. Si no entiende un punto, no dude en hacer preguntas en el foro antes de iniciar el procedimiento !

> **Importante**
>
> Tenga cuidado de no hacer un bucle de equipo configurando el complemento "Jeedom Link". Por ejemplo, no haga un Equipo-X en un Jeedom1 que sube en un Jeedom2 y luego vuelve a subir en Jeedom1. Podría derribar tus Jeedoms !

> **Nota**
>
> Para una mejor lectura y comprensión de este tutorial, aquí están los términos utilizados :
>
> - **Objetivo de Jeedom** : Servidor (su antiguo Jeedom Master) que centraliza el equipo del **Jeedom(s) Fuente(s))**  Las capturas de pantalla sobre fondo negro corresponden a la **Objetivo de Jeedom**.
>
> - **Fuente Jeedom** : Servidor (su(s) antiguo(s) Jeedom Slave(s)) que vuelve a montar su equipo en el **Objetivo de Jeedom**.
>
> - Los conceptos de **Maestro Jeedom** y **Esclavo de Jeedom** ya no son relevantes. El nuevo modo de funcionamiento para sincronizar equipos entre varios Jeedoms puede ser bidireccional. Un servidor Jeedom ahora puede ser **Fuente** y **Objetivo** mientras que la modalidad antigua solo permitía el ascenso de los equipos de  **el esclavo** hacia **el maestro**. Con el nuevo modo también es posible tener varios **Objetivos Jeedom** por un mismo **Fuente Jeedom**. La comunicación entre Jeedoms ahora también se puede realizar de forma remota a través de Internet (DNS Jeedom u otro).

![jeelink.migration9](images/jeelink.migration9.png)

## Actualizaciones de configuración y verificación

-   Actualizar el **Maestro Jeedom** a la última versión (incluso si no se le ofrece ninguna actualización).
-   Actualizar complementos **Maestro Jeedom** a las últimas versiones disponibles.
-   Verifique en la página de Salud que la configuración de la red interna del **Maestro Jeedom** está bien (y externo si su **Fuentes Jeedoms** será distante).

## Recopilación de información útil

Dependiendo de los complementos instalados en su **Esclavo de Jeedom**, es necesario recuperar la siguiente información :

### Complemento Zwave

-   En la página de salud del complemento Zwave en el **Maestro Jeedom**, escoge tu **Esclavo** en el menú desplegable y tome una captura de pantalla, para tener una lista de los equipos que provienen de él.
-   Nota para cada equipo procedente de **el esclavo** : objeto principal, nombre, ID (nodo), modelo.
-   Recuperar el archivo Zwcfg : *Complementos ⇒ Gestión de complementos ⇒ Z-wave*. Haga clic en el botón rojo *Zwcfg* y copie el contenido a un archivo de texto en su computadora.

### Complemento RFXcom

-   Nota para cada equipo procedente de **el esclavo** : objeto principal, nombre, ID (lógico), tipo, modelo.

> **Nota**
>
> Una hoja de información no exhaustiva a tener en cuenta para la migración está disponible [aquí](images/MemoMigration.xls)

## Copias de seguridad preventivas

-   Hacer un [respaldo de seguridad](https://doc.jeedom.com/es_ES/core/doc-core-backup.html) de su **Maestro Jeedom** y tu (tu) **Jeedom esclavo (s))** y recupérelos (estos) en su PC/NAS…​.
-   Hacer un [Copia de seguridad de disco/SD](https://doc.jeedom.com/es_ES/howto/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd) de su **Maestro Jeedom** y tu (tu) **Jeedom esclavo (s))** y recuperarlos en su PC/NAS.

# Migration

> **Nota**
>
> No elimine equipos antiguos de  **el esclavo** seguro **el maestro**.

## Instale y active el complemento "Jeedom Link" en el **Objetivo de Jeedom** (viejo maestro).

En tu **Objetivo de Jeedom**, *Complementos ⇒ Gestión de complementos* :

![jeelink.migration1](images/jeelink.migration1.png)

## Instalando el **Fuente Jeedom**

> **Nota**
>
> si tiene una Raspberry Pi adicional y otra tarjeta SD, puede migrar protocolo tras protocolo instalando una nueva **Fuente Jeedom** en paralelo sin tener que tocar su **Esclavo de Jeedom** existente. Obviamente, moviendo cualquier controlador de uno a otro.

> **Advertencia**
>
> Si está utilizando su RaspberryPi existente, asegúrese de haber seguido el capítulo de copia de seguridad de esta documentación.

> **Nota**
>
> si está utilizando la Raspberry Pi existente, que actualmente es una  **Esclavo de Jeedom**, le recomendamos que utilice una nueva tarjeta SD/microSD. Esto le permitirá retroceder fácilmente si es necesario.

-   Instale un nuevo Jeedom en una nueva tarjeta SD (ya sea para poner en su **Esclavo de Jeedom** existente o para una nueva Raspberry Pi) siguiendo las [documentación de instalación](https://doc.jeedom.com/es_ES/installation/doc-installation.html).
-   Actualizar el **Fuente Jeedom** a la última versión (incluso si no se le ofrece ninguna actualización).
-   Verifique en la página de Salud que la configuración de la red interna (y externa si es necesario) del **Fuente Jeedom** está bien.

## Configuración de la fuente de Jeedom

-   Cambiar la contraseña del usuario administrador o/y configurar un nuevo usuario.
-   Configura tu cuenta de Jeedom Market (*Configuración ⇒ Actualizaciones y archivos ⇒ pestaña "Market""*). Haga clic en prueba después de guardar, para validar la entrada de sus identificadores de Jeedom Market).
-   Instalación y activación del complemento "Jeedom Link" en el nuevo **Fuente Jeedom**.
![jeelink.migration2](images/jeelink.migration2.png)
-   Instalación y activación de los complementos que desea utilizar. (Es recomendable hacerlos uno por uno, revisando bien cada vez que las dependencias y posibles daemons estén bien).
-   Vuelva a crear la estructura de árbol de los objetos (solo aquellos que le serán útiles) del **Objetivo de Jeedom** (Viejo Maestro) en su nuevo **Fuente Jeedom** (Antiguo esclavo).

## Configuración de equipos en el **Fuente Jeedom**

Para enviar equipos presentes en el **Fuente Jeedom** hacia **Objetivo de Jeedom** a través del complemento "Jeedom Link", es necesario que este último ya esté operativo en su nuevo **Fuente Jeedom**.

> **Nota**
>
> Piense gradualmente en desactivar el registro de comandos de información para cada equipo en el **Fuente Jeedom** para guardar la tarjeta SD de este (La historización se hará en el  **Objetivo de Jeedom**).

> **Nota**
>
> También puedes asignar equipo gradualmente a los objetos recreados en el **Fuente Jeedom** para que luego se coloquen automáticamente en el objeto correcto en el **Objetivo de Jeedom** al declarar en el complemento "Jeedom Link"". En el caso de un nombre duplicado con equipo ya presente en los objetos del **Objetivo de Jeedom**,  el complemento agregará "XXXX remoto" al nombre del equipo.

### Complemento Zwave

-   Haga clic en el botón "Sincronizar" para recuperar los módulos asociados con su controlador. (Se guardan en memoria de ella)
-   Reemplazar el archivo *Zwcfg* : *Complementos ⇒ Gestión de complementos ⇒ Z-wave*. Haga clic en el botón rojo *Zwcfg* y pegue el contenido del archivo de texto creado previamente en su computadora. *Guardar cambios*.
-   Cambie el nombre de sus módulos y colóquelos en los objetos deseados usando su nota de migración.

### Complemento Rfxcom :

#### Sondas, sensores, detectores,…​

-   Poner el complemento en modo de inclusión.
-   Repita la inclusión hasta que obtenga todo su equipo de este tipo.
-   Cambie el nombre de su equipo y colóquelo en los objetos deseados usando su nota de migración.

#### Actuadores, enchufes, …​

-   Agregar nuevo equipo.
-   Defina nombre, ID, objeto principal, tipo de equipo y modelo usando su nota de migración.
-   Repita para todos sus equipos de este tipo.

## Configuración del complemento "Jeedom Link""

El complemento "Jeedom Link" instalado en el **Fuente Jeedom** permitirá el izaje de equipos en la **Objetivo de Jeedom** (Tu antiguo maestro).

> **Nota**
>
> Recordatorio, para una mejor lectura y comprensión de este tutorial :
>
> - Las capturas de pantalla sobre fondo negro corresponden a la **Objetivo de Jeedom**.
> - Las capturas de pantalla sobre fondo blanco corresponden a la **Fuente Jeedom**.

Sobre **Fuente Jeedom**,
[configurar](https://doc.jeedom.com/es_ES/plugins/jeelink/jeelink)
el complemento "Jeedom Link" especificando :

-   El nombre de **Objetivo de Jeedom**.
-   La dirección IP o el nombre DNS del **Objetivo de Jeedom**.
-   La clave API de la **Objetivo de Jeedom**.

Y guarda la configuración.

![jeelink.migration3](images/jeelink.migration3.png)

En la pestaña *Asignación*, añade el equipo que quieras subir a la **Objetivo de Jeedom**.

![jeelink.migration4](images/jeelink.migration4.png)

Haga clic en *Agregar equipo* Seleccione el objeto y el equipo para agregar :

![jeelink.migration5](images/jeelink.migration5.png)

Después de actualizar la página *Mis JeeLinks* de **Objetivo de Jeedom**, deberías ver la creación automática del equipo :

![jeelink.migration6](images/jeelink.migration6.png)

Como cualquier equipo de Jeedom, puedes activar/desactivar y mostrar o no el equipo, sus controles,... o cambiar de categoría :

![jeelink.migration7](images/jeelink.migration7.png)

En la pestaña *Pedidos*, accedes a todos los parámetros de los controles del equipo :

![jeelink.migration8](images/jeelink.migration8.png)

## Recuperación de historial

> **Nota**
>
> Para hacer en el **Objetivo de Jeedom** (Old Master) para cada comando de información del equipo del antiguo **Esclavo** cuya historia queremos recuperar.

-   Ir a la configuración del pedido (*Rueda dentada derecha*).
-   Ir a la pestaña *Configuración avanzada*.
-   Haga clic en el botón *Copie el historial de este comando a otro comando*.
-   Busque el comando correspondiente del nuevo equipo JeeLink correspondiente y valide.

## Sustitución de antiguos equipos esclavos en Escenarios/virtual/…​

> **Nota**
>
> Para hacer en el **Objetivo de Jeedom** (Antiguo Maestro) para cada comando de información/acción del equipo del antiguo **Esclavo** cuyas ocurrencias queremos reemplazar en los escenarios/virtual/…

-   Ir a la configuración del pedido (*Rueda dentada derecha*).
-   Ir a la pestaña *Información*.
-   Haga clic en el botón *Reemplace este comando con el comando*.
-   Busque el comando correspondiente del nuevo equipo JeeLink correspondiente y valide.

## Recuperación de configuraciones avanzadas de visualización de comandos

> **Nota**
>
> Para hacer en el **Objetivo de Jeedom** (Antiguo Maestro) para cada comando de información/acción del equipo del antiguo **Esclavo** cuya configuración de visualización avanzada queremos recuperar.

-   Ir a la configuración del pedido (*Rueda dentada derecha*).
-   Haga clic en el botón *para aplicar a*.
-   Busque y seleccione el comando correspondiente del nuevo equipo JeeLink correspondiente y valide.

## Copiar configuraciones de comandos avanzados

> **Nota**
>
> Para hacer en el **Objetivo de Jeedom** (Antiguo Maestro) para cada comando de información/acción del equipo del antiguo **Esclavo** cuya configuración avanzada queremos recuperar.

-   No hay una solución fácil en este nivel, necesitará tener dos pestañas/ventanas abiertas en su navegador.
-   Abrir pedidos de equipos antiguos **Esclavo** en una pestaña (Jeedom Target).
-   Abra los pedidos de equipos jeeLink en la otra pestaña (Jeedom Target).
-   Y copie los parámetros deseados a mano.

> **Nota**
>
> Para evitar volver varias veces al mismo comando, las operaciones 2.6→2.Se pueden hacer 9 seguidos en el mismo orden antes de pasar a los siguientes.

> **Advertencia**
>
> Las interacciones en el **Objetivo de Jeedom** no puede ser lanzado a través de un equipo de un **Fuente Jeedom** transferido a través del complemento "Jeedom Link"".

# Hogar en el **Objetivo de Jeedom**

> **Nota**
>
> Después de confirmar con certeza que su equipo/escenarios/interacciones/virtuales/…​. funcione correctamente con el nuevo sistema jeelink, puede limpiar.

-   Retire el equipo residual del viejo **Esclavo de Jeedom**.
-   Deshabilita y elimina los complementos que ya no te son útiles (Aquellos que solo tenías equipos en el Esclavo).
-   En el complemento "Jeedom Link", cambie el nombre del equipo que podría tener un nombre que termine con "remote XXXX".
-   En la página Jeedom Network, elimine el antiguo **Esclavo de Jeedom**.
