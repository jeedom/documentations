Veremos aquí cómo migrar una instalación con Jeedom en modo
esclavo de un Jeedom con el complemento Jeedom Link". Modo esclavo
Jeedom siendo abandonado en la transición de Jeedom a la versión 3.0 es
necesario proceder antes de la migración al nuevo modo de
funcionando.

Preparación antes de la migración 
===========================

> **Advertencia**
>
> Es importante leer toda esta documentación antes
> iniciarse en la migración. Información importante sobre
> requisitos de actualización, respaldo y recuperación
> de información son esenciales para la comprensión adecuada de
> la operación a realizar. Abstenerse de leer esta documentación puede
> conducir a operaciones destructivas en su instalación. Si usted
> no entiendo un punto, no dude en hacer preguntas sobre el
> foro antes de comenzar el procedimiento !

> **Importante**
>
> Tenga cuidado de no enrollar el equipo
> configurar el complemento Jeedom Link". Por ejemplo, no hagas un
> Equipment-X en un Jeedom1 que sube en un Jeedom2 y luego sube
> de nuevo en Jeedom1. Podría dejar caer tus Jeedoms !

> **Nota**
>
> Para una mejor lectura y comprensión de este tutorial, aquí están los
> términos utilizados :\
> \
> - **Jeedom Target** : Servidor (tu antiguo Jeedom Master) que
> centralizar el equipamiento de la **Jeedom (s) Fuente (s)**\
> Las capturas de pantalla en un fondo negro corresponden a la **Jeedom Target**.\
> \
> - **Fuente de la libertad** : Servidor (su ex esclavo (s) Jeedom)
> lo que vuelve a poner su equipo en el **Jeedom Target**.\
> \
> - Las nociones de **Jeedom Master** y **Jeedom Slave** ya no son
> noticias. El nuevo modo operativo de sincronización
> El equipamiento entre varios Jeedoms puede ser bidireccional. Un
> Jeedom Server puede ser ahora **Fuente** y **Target** entonces que
> el modo antiguo solo permitía el surgimiento de equipos
> **el esclavo** Hacia **el maestro**. Con el nuevo modo también es
> posible tener múltiples **Jeedom Targets** por lo mismo **Jeedom
> Fuente**. La comunicación entre Jeedoms ahora también puede
> hacerse de forma remota a través de Internet (Jeedom DNS u otro)
> \

![jeelink.migration9](images/jeelink.migration9.png)

Actualizaciones de configuración y verificación 
------------------------------------------------

-   Actualiza el **Jeedom Master** a la última versión (incluso si
    no se le ofrece ninguna actualización).

-   Actualizar complementos de **Jeedom Master** hasta el final
    versiones disponibles.

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

-   Nota para cada equipo proveniente de **el esclavo** : el objeto
    padre, nombre, ID (nodo), modelo.

-   Recuperar archivo Zwcfg : *Complementos ⇒ Gestión de complementos ⇒
    Onda Z*. Haga clic en el botón rojo *Zwcfg * y copiar contenido
    en un archivo de texto en su computadora.

### Complemento RFXcom 

-   Nota para cada equipo proveniente de **el esclavo** : el objeto
    padre, nombre, ID (lógico), tipo, modelo.

> **Nota**
>
> Una hoja de información no exhaustiva a tener en cuenta para la migración
> está disponible [aquí](images/MemoMigración.xls)

Copias de seguridad preventivas 
-----------------------

-   Hacer una copia de seguridad
    Jeedom](https://doc.jeedom.com/es_ES/core/doc-core-backup.html)
    de su **Jeedom Master** y tu **Jeedom Slave (s)**
    y recuperarlo (s) en su PC / NAS.

-   Hacer una copia de seguridad
    SD/Disque](https://doc.jeedom.com/es_ES/howto/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd)
    de su **Jeedom Master** y tu **Jeedom Slave (s)**
    y recuperarlos en su PC / NAS.

Migración 
=========

> **Nota**
>
> No elimine equipos viejos de
> **el esclavo** sobre **el maestro**.

Instale y active el complemento "Jeedom Link" en el **Jeedom Target** (ex maestro). 
-------------------------------------------------------------------------------------

En su **Jeedom Target**, *Complementos ⇒ Gestión de complementos* :

![jeelink.migration1](images/jeelink.migration1.png)

Instalación de **Fuente de la libertad** : 
-----------------------------------

> **Nota**
>
> si tienes una Raspberry Pi adicional y otra tarjeta
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
> **Jeedom Slave**, le recomendamos que use una tarjeta
> Nueva SD / microSD. Esto te permitirá retroceder
> fácilmente si es necesario.

-   Instale un nuevo Jeedom en una nueva tarjeta SD (Let it be
    poner en tu **Jeedom Slave** existente o para un
    nueva Raspberry Pi) siguiendo la [documentación
    d'installation](https://doc.jeedom.com/es_ES/installation/doc-installation.html).

-   Actualiza el **Fuente de la libertad** a la última versión (incluso si
    no se le ofrece ninguna actualización).

-   Verifique en la página de Salud que la configuración de la red interna (y
    externo si es necesario) **Fuente de la libertad** esta bien.

Configuración de fuente de Jeedom 
------------------------------

-   Cambie la contraseña del usuario administrador o / y configure un
    nuevo usuario.

-   Configure su cuenta de Jeedom Market (* Configuración ⇒ Actualizaciones
    y archivos ⇒ pestaña "Mercado" *). Haga clic en prueba después
    guardado, para validar la entrada de sus identificadores
    Mercado de la libertad).

-   Instalación y activación del complemento "Jeedom Link" en el nuevo
    **Fuente de la libertad**.

![jeelink.migration2](images/jeelink.migration2.png)

-   Instalación y activación de complementos que desea usar.
    (Es recomendable hacerlos uno por uno, verificando cada vez
    una vez que las dependencias y los posibles demonios estén bien).

-   Recrea el árbol de objetos (solo los que
    ser útil) de **Jeedom Target** (Viejo maestro) en tu nuevo
    **Fuente de la libertad** (Ex esclavo).

Configuración de equipos en el **Fuente de la libertad** 
------------------------------------------------------

Para enviar equipos presentes en el **Fuente de la libertad**
hacia **Jeedom Target** a través del complemento "Jeedom Link", es necesario
que ya está operativo en su nuevo **Jeedom
Fuente**.

> **Nota**
>
> Recuerde desactivar el registro de comandos
> información de cada equipo en el **Fuente de la libertad** entonces
> para guardar la tarjeta SD (la historización se realizará en el
> **Jeedom Target**).

> **Nota**
>
> También puede asignar gradualmente el equipo a
> objetos recreados en el **Fuente de la libertad** para que sean más tarde
> poner automáticamente en el objeto correcto en el **Jeedom Target** Durante
> la declaración en el complemento "Jeedom Link". En caso de nombre duplicado
> con equipos ya presentes en los objetos del **Jeedom Target**,
> el complemento agregará "XXXX remoto" al nombre del equipo.

### Complemento Zwave : 

-   Haga clic en el botón "Sincronizar" para recuperar los módulos
    asociado con su controlador. (Se guardan en la memoria
    de este)

-   Reemplazar archivo *Zwcfg* : *Complementos ⇒ Gestión de complementos ⇒
    Onda Z*. Haga clic en el botón rojo *Zwcfg * y pegue el contenido de
    archivo de texto creado previamente en su computadora. * Guardar
    los cambios*.

-   Cambie el nombre de sus módulos y colóquelos en los objetos deseados dentro de usted
    ayudando con su memo de migración.

### Complemento RFXcom : 

#### Sondas, sensores, detectores, : 

-   Cambie el complemento al modo de inclusión.

-   Repita la inclusión hasta que tenga todo su equipo
    este chico.

-   Cambie el nombre de su equipo y colóquelo en los objetos deseados
    ayudándole con su memo de migración.

#### Actuadores, enchufes,. : 

-   Agregar nuevo equipo.

-   Definir nombre, ID, objeto principal, tipo de equipo y
    modelo utilizando su memo de migración.

-   Repita para todos sus equipos de este tipo.

Configuración del complemento "Jeedom Link" 
-------------------------------------

El complemento "Jeedom Link" instalado en el **Fuente de la libertad** permitirá el
equipo en el **Jeedom Target** (Tu viejo maestro).

> **Nota**
>
> Recordatorio, para una mejor lectura y comprensión de este tutorial :\
> \
> Las capturas de pantalla en un fondo negro corresponden a la **Jeedom Target**.\
> \
> Las capturas de pantalla en un fondo blanco corresponden a **Fuente de la libertad**.\

Sobre **Fuente de la libertad**,
[Configurar](https://doc.jeedom.com/es_ES/plugins/jeelink/jeelink)
el complemento "Jeedom Link" especificando :

-   El nombre de **Jeedom Target**.

-   La dirección IP o el nombre DNS del **Jeedom Target**.

-   La clave API de **Jeedom Target**.

Y guarda la configuración.

![jeelink.migration3](images/jeelink.migration3.png)

En la pestaña *Cesión*, agrega el equipo que quieras
subir a la **Jeedom Target**.

![jeelink.migration4](images/jeelink.migration4.png)

Haga clic en *Agregar equipo* Seleccionar objeto y equipo
para agregar :

![jeelink.migration5](images/jeelink.migration5.png)

Después de actualizar la página *Mis enlaces* del **Jeedom Target**, Vosotras
debe tener en cuenta la creación automática del equipo :

![jeelink.migration6](images/jeelink.migration6.png)

Como todos los equipos Jeedom, puede activar / desactivar y mostrar
o no el equipo, sus controles, ... o cambiar la categoría :

![jeelink.migration7](images/jeelink.migration7.png)

En la pestaña *Comandos*, accede a todos los parámetros de la
controles de equipo :

![jeelink.migration8](images/jeelink.migration8.png)

Recuperación histórica 
----------------------------

> **Nota**
>
> Para hacer en **Jeedom Target** (Ex maestro) para cada pedido
> información del equipo antiguo **Esclavo** que queremos recuperar
> la historia.

-   Vaya a la configuración del comando (* Rueda dentada en
    derecha*).

-   Ir a la pestaña *Configuración avanzada*.

-   Haga clic en el botón * Copiar el historial de este pedido a un
    otro orden*.

-   Encuentre el pedido correspondiente para el nuevo equipo JeeLink
    corresponsal y validar.

Reemplazo de equipos esclavos antiguos en escenarios / virtuales / 
----------------------------------------------------------------------------

> **Nota**
>
> Para hacer en **Jeedom Target** (Ex maestro) para cada pedido
> información / acción de equipos viejos **Esclavo** que queremos
> reemplazar ocurrencias en escenarios / virtuales /.

-   Vaya a la configuración del comando (* Rueda dentada en
    derecha*).

-   Ir a la pestaña *Información*.

-   Haga clic en el botón *Reemplazar este comando por el comando*.

-   Encuentre el pedido correspondiente para el nuevo equipo JeeLink
    corresponsal y validar.

Recuperando configuraciones de pantalla avanzadas para comandos 
------------------------------------------------------------------

> **Nota**
>
> Para hacer en **Jeedom Target** (Ex maestro) para cada pedido
> información / acción de equipos viejos **Esclavo** que queremos
> recuperar configuraciones avanzadas de pantalla.

-   Vaya a la configuración del comando (* Rueda dentada en
    derecha*).

-   Haga clic en el botón *Aplicar*.

-   Busque y seleccione el comando correspondiente para el nuevo
    equipo JeeLink correspondiente y validar.

Copia de configuraciones de comando avanzadas 
-------------------------------------------------

> **Nota**
>
> Para hacer en **Jeedom Target** (Ex maestro) para cada pedido
> información / acción de equipos viejos **Esclavo** que queremos
> recuperar la configuración avanzada.

-   No hay una solución fácil a este nivel, tendrás que tener dos
    abrir pestañas / ventanas en su navegador.

-   Órdenes abiertas para equipos viejos **Esclavo** en un
    Pestaña (Objetivo de libertad).

-   Abra los controles del equipo jeeLink en la otra pestaña
    (Objetivo de libertad).

-   Y copie los parámetros deseados a mano.

> **Nota**
>
> Para evitar repetir el mismo orden varias veces, el
> operaciones 2.6 → 2.9 se pueden realizar consecutivamente en el mismo
> orden antes de proceder al siguiente.

> **Advertencia**
>
> Interacciones en el **Jeedom Target** no se puede lanzar
> a través del equipo de un **Fuente de la libertad** transferido a través de
> Complemento Jeedom Link".

Hogar en el **Jeedom Target** 
==============================

> **Nota**
>
> Después de confirmar con certeza que su
> equipos / escenarios / interacciones / virtuales / ... trabajar
> correctamente con el nuevo sistema jeelink puedes hacer el
> hogar.

-   Eliminar el equipo residual de la antigua **Jeedom Slave**.

-   Deshabilita y elimina los complementos que ya no te son útiles
    (Los que solo tenías equipo en el Esclavo).

-   En el complemento "Jeedom Link", cambie el nombre del equipo que
    podría tener un nombre que termine con "remoto XXXX".

-   En la página de Jeedom Network, elimine la anterior **Jeedom Slave**.


