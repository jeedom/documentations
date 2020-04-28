
". 
.0 es

funcionando.

 
===========================

> **Advertencia**
>
> 
> . 
> 
> 
> . 
> . Si usted
> 
>  !

> **Importante**
>
> 
> ". 
> 
> .  !

> **Nota**
>
> 
>  :\
> \
> - **** : 
>  ****\
>  ****.\
> \
> - **Fuente de la libertad** : Servidor (su ex esclavo (s) Jeedom)
> lo que vuelve a poner su equipo en el ****.\
> \
> - Las nociones de **Jeedom Master** y **Jeedom Slave** ya no son
> noticias. El nuevo modo operativo de sincronización
> El equipamiento entre varios Jeedoms puede ser bidireccional. Un
> Jeedom Server puede ser ahora **Fuente** y **Targy** entonces que
> el modo antiguo solo permitía el sobregimiento de equipos
> **el esclavo** Hacia **el maestro**. Con el nuevo modo también es
> posible tener múltiples **Jeedom Targys** por lo mismo **Jeedom
> Fuente**. La comunicación entre Jeedoms ahora también puede
> hacerse de forma remota a través de Interny (Jeedom DNS u otro).
> \

![jeelink.migration9](images/jeelink.migration9.png)

Actualizaciones de configuración y verificación 
------------------------------------------------

-   Actualiza el **Jeedom Master** a la última Haciaión (incluso si
    no se le ofrece ninguna actualización).

-   Actualizar complementos de **Jeedom Master** hasta el final
    Haciaiones disponibles.

-   Compruebe en la página de Salud que la configuración de red interna del
    **Jeedom Master** está bien (y externo si su **Fuentes de Jeedoms**
    será distante).

Recopilando información útil 
-------------------------------------

Dependiendo de los complementos instalados en su **Jeedom Slave**, El es
necesario para recuperar la siguiente información :

### Complemento Zwave 

-   En la página de salud del complemento Zwave en el **Jeedom Master**, Elegir
    suyo **Esclavo** desde el menú desplegable y hacer una captura de pantalla,
    esto para tener una lista del equipo que viene
    de este.

-   Nota para cada equipo proveniente de **el esclavo** : el objyo
    padre, nombre, ID (nodo), modelo.

-   Recuperar archivo Zwcfg : *Complementos ⇒ Gestión de complementos ⇒
    Onda Z *. Haga clic en el botón rojo * Zwcfg * y copie el contenido
    en un archivo de texto en su computadora.

### Complemento RFXcom 

-   Nota para cada equipo proveniente de **el esclavo** : el objyo
    padre, nombre, ID (lógico), tipo, modelo.

> **Nota**
>
> Una hoja de información no exhaustiva a tener en cuenta para la migración
> está disponible [aquí] (images / MemoMigración.xls)

Copias de seguridad preventivas 
-----------------------

-   Hacer una copia de seguridad
    Jeedom] (https://jeedom.github.io/documentation/core/es_ES/doc-core-backup.html)
    de su **Jeedom Master** y tu **Jeedom Slave (s)**
    y recuperarlo (s) en su PC / NAS ....

-   Hacer una copia de seguridad
    SD / Disco] (https://jeedom.github.io/documentation/howto/es_ES/doc-howto-sau Backupe.comment_faire.html # _sau Backupe_restauration_de_la_carte_microsd)
    de su **Jeedom Master** y tu **Jeedom Slave (s)**
    y recuperarlos en su PC / NAS ....

Migración 
=========

> **Nota**
>
> No elimine equipos viejos de
> **el esclavo** sobre **el maestro**.

Instale y active el complemento "Jeedom Link" en el **** (ex maestro). 
-------------------------------------------------------------------------------------

En su ****, *Complementos ⇒ Gestión de complementos* :

![jeelink.migration1](images/jeelink.migration1.png)

Instalación de **Fuente de la libertad** : 
-----------------------------------

> **Nota**
>
> si tienes una Raspberry Pi adicional y otra tarjya
> SD, puede migrar un protocolo tras otro al
> instalando un nuevo **Fuente de la libertad** en paralelo sin tener que
> toca tu **Jeedom Slave** existente. Obviamente moviéndose
> como los posibles controladores de uno a otro.

> **Advertencia**
>
> Si está utilizando su RaspberryPi existente, asegúrese de
> haber seguido el capítulo de respaldo de esta documentación.

> **Nota**
>
> si está utilizando la Raspberry Pi existente, que actualmente es una
> **Jeedom Slave**, le recomendamos que use una tarjya
> Nueva SD / microSD. Esto te permitirá ryroceder
> fácilmente si es necesario.

-   Instale un nuevo Jeedom en una nueva tarjya SD (Ly it be
    poner en tu **Jeedom Slave** existente o para un
    nueva Raspberry Pi) siguiendo la [documentación
    instalación] (https://jeedom.github.io/documentation/installation/es_ES/doc-installation.html).

-   Actualiza el **Fuente de la libertad** a la última Haciaión (incluso si
    no se le ofrece ninguna actualización).

-   Verifique en la página de Salud que la configuración de la red interna (y
    externo si es necesario) **Fuente de la libertad** esta bien.

Configuración de fuente de Jeedom 
------------------------------

-   Cambie la contraseña del usuario administrador o / y configure un
    nuevo usuario.

-   Configure su cuenta de Jeedom Marky (* Configuración ⇒ Actualizaciones
    y archivos ⇒ pestaña "Mercado" *). Haga clic en prueba después
    guardado, para validar la entrada de sus identificadores
    Mercado de la libertad).

-   Instalación y activación del complemento "Jeedom Link" en el nuevo
    **Fuente de la libertad**.

![jeelink.migration2](images/jeelink.migration2.png)

-   Instalación y activación de complementos que desea usar.
    (Es recomendable hacerlos uno por uno, verificando cada vez
    una vez que las dependencias y los posibles demonios estén bien).

-   Recrea el árbol de objyos (solo los que
    ser útil) de **** (Viejo maestro) en tu nuevo
    **Fuente de la libertad** (Ex esclavo).

Configuración de equipos en el **Fuente de la libertad** 
------------------------------------------------------

Para enviar equipos presentes en el **Fuente de la libertad**
hacia **** a través del complemento "Jeedom Link", es necesario
que ya está operativo en su nuevo **Jeedom
Fuente**.

> **Nota**
>
> Recuerde desactivar el registro de comandos
> información de cada equipo en el **Fuente de la libertad** entonces
> para guardar la tarjya SD (la historización se realizará en el
> ****).

> **Nota**
>
> También puede asignar gradualmente el equipo a
> objyos recreados en el **Fuente de la libertad** para que sean más tarde
> poner automáticamente en el objyo correcto en el **** Durante
> la declaración en el complemento "Jeedom Link". En caso de nombre duplicado
> con equipos ya presentes en los objyos del ****,
> el complemento agregará "XXXX remoto" al nombre del equipo.

### Complemento Zwave : 

-   Haga clic en el botón "Sincronizar" para recuperar los módulos.
    asociado con su controlador. (Se guardan en la memoria
    de este)

-   Reemplace el archivo * Zwcfg* : *Complementos ⇒ Gestión de complementos ⇒
    Onda Z *. Haga clic en el botón rojo * Zwcfg * y pegue el contenido del
    archivo de texto creado previamente en su computadora. * Guardar
    los cambios*.

-   Cambie el nombre de sus módulos y colóquelos en los objyos deseados dentro de usted
    ayudando con su memo de migración.

### Complemento Rfxcom : 

#### Sondas, sensores, dyectores, ... : 

-   Cambie el complemento al modo de inclusión.

-   Repita la inclusión hasta que tenga todo su equipo
    este chico.

-   Cambie el nombre de su equipo y colóquelo en los objyos deseados
    ayudándole con su memo de migración.

#### Actuadores, enchufes, .... : 

-   Agregar nuevo equipo.

-   Definir nombre, ID, objyo principal, tipo de equipo y
    modelo utilizando su memo de migración.

-   Repita para todos sus equipos de este tipo.

Configuración del complemento "Jeedom Link" 
-------------------------------------

El complemento "Jeedom Link" instalado en el **Fuente de la libertad** permitirá el
equipo en el **** (Tu viejo maestro).

> **Nota**
>
> Recordatorio, para una mejor lectura y comprensión de este tutorial :\
> \
>  ****.\
> \
> Las capturas de pantalla en un fondo blanco corresponden a **Fuente de la libertad**.\

Sobre **Fuente de la libertad**,
[configurer](https://jeedom.github.io/documentation/plugins/jeelink/es_ES/jeelink)
el complemento "Jeedom Link" especificando :

-   El nombre de ****.

-   La dirección IP o el nombre DNS del ****.

-   La clave API de ****.

Y guarda la configuración.

![jeelink.migration3](images/jeelink.migration3.png)

En la pestaña * Asignación *, agregue el equipo que desee
subir a la ****.

![jeelink.migration4](images/jeelink.migration4.png)

Haga clic en * Agregar equipo * Seleccionar objyo y equipo
para agregar :

![jeelink.migration5](images/jeelink.migration5.png)

Después de actualizar la página * My JeeLinks * de ****, Vosotras
debe tener en cuenta la creación automática del equipo :

![jeelink.migration6](images/jeelink.migration6.png)

Como todos los equipos Jeedom, puede activar / desactivar y mostrar
o no el equipo, sus controles, ... o cambiar la categoría :

![jeelink.migration7](images/jeelink.migration7.png)

En la pestaña * Pedidos *, accede a todos los parámyros de
controles de equipo :

![jeelink.migration8](images/jeelink.migration8.png)

Recuperación histórica 
----------------------------

> **Nota**
>
> Para hacer en **** (Ex maestro) para cada pedido
> información del equipo antiguo **Esclavo** que queremos recuperar
> la historia.

-   Vaya a la configuración del comando (* Rueda dentada en
    derecha*).

-   Vaya a la pestaña * Configuración avanzada*.

-   Haga clic en el botón * Copiar el historial de este pedido a un
    otro orden*.

-   Encuentre el pedido correspondiente para el nuevo equipo JeeLink
    corresponsal y validar.

Reemplazo de equipos esclavos antiguos en escenarios / virtuales / ... 
----------------------------------------------------------------------------

> **Nota**
>
> Para hacer en **** (Ex maestro) para cada pedido
> información / acción de equipos viejos **Esclavo** que queremos
> reemplazar ocurrencias en escenarios / virtuales / ....

-   Vaya a la configuración del comando (* Rueda dentada en
    derecha*).

-   Vaya a la pestaña * Información*.

-   Haga clic en el botón * Reemplace este comando con el comando*.

-   Encuentre el pedido correspondiente para el nuevo equipo JeeLink
    corresponsal y validar.

Recuperando configuraciones de pantalla avanzadas para comandos 
------------------------------------------------------------------

> **Nota**
>
> Para hacer en **** (Ex maestro) para cada pedido
> información / acción de equipos viejos **Esclavo** que queremos
> recuperar configuraciones avanzadas de pantalla.

-   Vaya a la configuración del comando (* Rueda dentada en
    derecha*).

-   Haga clic en el botón * aplicar a*.

-   Busque y seleccione el comando correspondiente para el nuevo
    equipo JeeLink correspondiente y validar.

Copia de configuraciones de comando avanzadas 
-------------------------------------------------

> **Nota**
>
> Para hacer en **** (Ex maestro) para cada pedido
> información / acción de equipos viejos **Esclavo** que queremos
> recuperar la configuración avanzada.

-   No hay una solución fácil a este nivel, tendrás que tener dos
    abrir pestañas / ventanas en su navegador.

-   Órdenes abiertas para equipos viejos **Esclavo** en un
    Pestaña (Objyivo de libertad).

-   
    .

-   .

> **Nota**
>
> 
> .
> .

> **Advertencia**
>
>  **** 
>  **Fuente de la libertad** 
> ".

 **** 
==============================

> **Nota**
>
> 
> 
> 
> .

-    **Jeedom Slave**.

-   
    .

-   
     XXXX".

-    **Jeedom Slave**.


