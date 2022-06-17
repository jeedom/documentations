# Abra el complemento Enocean

Este complemento es un complemento que permite la compatibilidad con Enocean

# Configuration

## Configuración del plugin

> ****
>
> Para usar el complemento, debe descargarlo, instalarlo y activarlo como cualquier complemento de Jeedom.

> ****
>
> Lo más importante aquí es seleccionar su controlador USB (puede elegir Auto, funcionará para la llave Enocean USB300). Para cualquier otro modelo, es mejor elegirlo de la lista :

-    : 
-    : 
-    : ttyS1

La otra opción disponible en esta página es : **Eliminar automáticamente los dispositivos excluidos**. Esto elimina el equipo Jeedom cuando se excluye.

También puede verificar el estado de las dependencias y reiniciarlas. En caso de problemas con el complemento, siempre reinicie las dependencias, incluso si está en caso de duda.

## Compatibilité

Puedes encontrar [](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=openenocean) la lista de módulos compatibles con el complemento

# El complemento

Vaya al menú de complementos / protocolos para encontrar el complemento.

En esta página puedes ver los módulos ya incluidos.

En la parte superior de esta página tiene varios botones (visibles dependiendo de si está en modo experto o no))

-   Botón Agregar : Le permite agregar ciertos módulos que no tienen nociones de emparejamiento o que requieren enviar comandos desde Jeedom
-   Botón de inclusión : Este botón permite poner Jeedom en Inclusion (varios modos, solo el primero está disponible en este momento)
-   Botón de exclusión : Este botón permite poner a Jeedom en Exclusion
-   Botón de configuración : Este botón abre la ventana de configuración del complemento
-   Botón de salud : Este botón le permite tener una visión general del estado de todos sus módulos

# Equipement

Cuando hace clic en uno de sus módulos, llega a la página de configuración de ese módulo :

-   Dale un nombre al módulo
-   Activar / hacerlo visible o no
-   Elige tu objeto padre
-   Asignar una categoría
-   Definir un retraso de monitoreo de comunicación para ciertos módulos
-   Publica un comentario

En el lado derecho encontrarás :

-   El perfil del equipo (generalmente detectado automáticamente si el módulo lo permite)
-   Elija un modelo si para este perfil hay varios modelos disponibles
-   Ver lo visual

# Equipamiento con configuración

Para algunos módulos es posible tener un botón de configuración, al hacer clic en él, llegará a una página que le permite configurarlo

> ****
>
> Aquí solo tienes que elegir todas las opciones y hacer clic en aplicar. ( : allí se envían todos los parámetros, así que valide todo)

# Lista de compatibilidad

Encontraras [](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openenocean) una lista de compatibilidad de módulos con su procedimiento de inclusión si son específicos.
