# Actualización de versión (V3 → V4)

Descubramos juntos los principales pasos que hay que seguir para migrar de una versión de Jeedom a otra en las mejores condiciones. Este tutorial se basa en el caso concreto de una migración de la versión 3 a la 4.

## Copia de seguridad de Jeedom

Antes de actualizar Jeedom, es importante asegurarse de haber tomado las precauciones necesarias para poder recuperar rápidamente una instalación de domótica operativa en caso de que surjan dificultades.

### Creación de la copia de seguridad

En primer lugar, vamos a generar el archivo de copia de seguridad de su instalación actual.

Vayamos al **menú con forma de engranaje**, situado en la parte superior de la barra de navegación, a la izquierda del reloj, y hagamos clic en el submenú **Copias de seguridad** para acceder a la [componente que gestiona las copias de seguridad](/core/backup):
![menú de copia de seguridad](../images/migrate-version01.png)

Para crear la copia de seguridad, vamos a hacer clic en el botón verde **Iniciar** en la sección titulada **Copias de seguridad**:
![iniciar copia de seguridad](../images/migrate-version02.png)

Confirma el mensaje en el que se te pide que confirmes que deseas realizar una copia de seguridad de Jeedom haciendo clic en el botón **De acuerdo**:
![Aceptar copia de seguridad](../images/migrate-version03.png)

Se inicia el proceso de copia de seguridad. Puede tardar un rato; puedes seguir su progreso en la ventana denominada **Información**:
![registros de copia de seguridad](../images/migrate-version04.png)

Si todo va bien, el final del proceso se indica con el mensaje:
``***************Fin de la sauvegarde de Jeedom*************** [END BACKUP SUCCESS]``

El archivo de copia de seguridad se ha generado correctamente en Jeedom.

### Descarga de la copia de seguridad

En la situación actual, solo se puede acceder a la copia de seguridad generada anteriormente desde Jeedom. Sin embargo, en caso de que surjan problemas durante una actualización, es posible que ya no se pueda acceder a Jeedom ni al servidor que lo aloja. Por lo tanto, vamos a ver cómo recuperar el archivo de copia de seguridad en un ordenador ajeno a Jeedom.

En la sección **Copias de seguridad locales**, hay que asegurarse de que la copia de seguridad creada en el apartado anterior aparezca correctamente en la línea **Copias de seguridad disponibles**, comprobando la fecha y la hora que figuran en el nombre del archivo. Si es así, ya podemos hacer clic en el botón verde **Descargar**:
![descargar copia de seguridad](../images/migrate-version05.png)

El archivo de copia de seguridad se descargará entonces en tu ordenador; guárdalo con cuidado, ya que contiene una copia completa de tu Jeedom en el momento de la copia de seguridad.

## Herramienta de migración sencilla

Ahora que ya hemos protegido la copia de seguridad de nuestro Jeedom, podemos proceder a la actualización con total tranquilidad.

Desde la versión V3.3.54, se ha incorporado una herramienta de migración sencilla en el **Centro de actualizaciones**. Para acceder a ella, hay que ir al **menú con forma de engranaje**, situado en la parte superior de la barra de navegación, a la izquierda del reloj, y hacer clic en el submenú **Centro de actualizaciones**.

Una vez en el centro de actualizaciones, haz clic en el botón naranja titulado **Actualizar a la versión 4** para abrir la ventana modal de migración:
![botón de migración](../images/migrate-version06.png)

### Requisitos previos

La ventana de actualización analizará el sistema y todos los complementos instalados en tu dispositivo desde el mercado de Jeedom para comprobar la compatibilidad anunciada con la versión 4. Se divide en dos partes:

- La parte superior presenta algunas novedades que descubrir en la versión 4, con una barra superior que resume de forma general la compatibilidad de los complementos instalados:
![migración modal hacia arriba](../images/migrate-version07.png)

>**IMPORTANTE**
>
>No será posible realizar la migración en una instalación cuyo entorno sea anterior a ``Debian Stretch 9.X`` *(``Debian 8.X Jessie`` o inferior)*. También se le pedirá que elimine los posibles complementos identificados como obsoletos.

- La parte inferior consiste en una tabla en la que se detallan todos los complementos instalados, así como su compatibilidad confirmada o no con esta nueva versión:
![migración modal hacia abajo](../images/migrate-version08.png)

> **IMPORTANTE**
>
>Esta nueva versión de Jeedom trae consigo cambios importantes. Por ello, es posible que los widgets de terceros y algunas personalizaciones de diseño utilizadas en la V3 dejen de mostrarse o de funcionar como se esperaba, y que sea necesario que intervengas tras la actualización a la V4.

### Actualización

Ahora que ya conocemos toda la información importante que hay que tener en cuenta antes de actualizar nuestro Jeedom, podemos iniciar la migración haciendo clic en el botón naranja **Actualizar a la versión 4** situado en la parte superior derecha de la ventana modal.

> **INFORMACIÓN ÚTIL**
>
>El botón **Actualizar a la versión 4** solo se puede pulsar una vez que se ha visualizado la ventana completa. Por lo tanto, hay que asegurarse de desplazarse hasta el final de la página.

Aparece una ventana emergente que nos informa de que, antes de la migración, se realizará automáticamente una copia de seguridad completa para poder volver rápida y fácilmente a la versión 3 si fuera necesario.
Para iniciar el proceso de migración, haz clic en **Aceptar**:
![migración acordada](../images/migrate-version09.png)

A continuación, se le redirigirá a la página que contiene los registros de migración, que comenzará realizando una copia de seguridad de la instalación actual antes de actualizar los plugins y el núcleo.

> **IMPORTANTE**
>
>Dependiendo del equipo en el que esté instalado Jeedom, esta operación puede tardar varios minutos. Es fundamental dejar que el proceso de migración se complete hasta el final.

Una vez finalizada la operación de migración, aparecerá una barra verde en la parte superior de la pantalla con el mensaje ***La operación se ha realizado correctamente. Por favor, `F5` para conocer las últimas novedades***:
![finalización de la migración](../images/migrate-version10.png)

Así que ya solo queda pulsar el botón `F5` pulsa la tecla *(o actualiza la página)* para comprobar que la actualización a la versión 4 se ha realizado correctamente. Es posible que algunos complementos vuelvan a solicitar una actualización tras la migración; no dudes en actualizarlos inmediatamente.
