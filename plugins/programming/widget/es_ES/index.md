# Complemento de widget

El complemento de widgets es un poco especial porque no le permite crear equipos sino modificar la representación (visualización) de un pedido. El objetivo de este complemento es, por lo tanto, simplemente personalizar la forma de mostrar un valor, información o acción de acuerdo con sus gustos y deseos.

Desde la versión 1.112 de Jeedom, es posible personalizar widgets con opciones específicas (creadas por el desarrollador del widget). Entonces podemos tener un widget que se mostrará de manera diferente de un pedido a otro.

Entonces, podemos tener el mismo widget escrito en azul en un pedido y en verde en otro.

> **Nota**
>
> Widget y Tile, para no confundir.
>
> El widget es la parte que se encargará de formatear y mostrar una información u orden. Un widget solo debe manejar un comando o información.
>
> La Tuile es una agrupación de widgets para un módulo. Esta es el área en la que se mostrarán los diferentes widgets aplicados a los comandos y la información del módulo.

# Instalar el complemento Widget 

Al igual que con cualquier complemento, el complemento Widget se instala desde la interfaz de Jeedom, menú "General" ⇒ "Complementos"

![capture001](../images/capture001.png)

Haga clic en el ícono verde para ir directamente al Mercado. En esta ventana, haga clic en "Oficial" y en el campo de búsqueda ponga "Widget".

![capture002](../images/capture002.png)

Haga clic en el ícono del complemento. Esto abre el archivo de complemento donde se encuentra información variada.

![capture003](../images/capture003.png)

Haga clic en el botón "Instalar estable"". Una vez instalado, Jeedom le pregunta si desea ir a la página de configuración del complemento. Responde sí. En la página de configuración del complemento del widget, solo tenemos una opción para este complemento : activar o desactivar.

Por defecto, el complemento está deshabilitado. Los invito a hacer clic en el botón verde "activar".

A partir de ahora, el complemento está activo y operativo.

# Presentación y función básica del complemento Widget 

Para ir al complemento Widget, vaya al menú "Complementos" ⇒ "Programación" ⇒ "Widget".

![capture005](../images/capture005.png)

Así que estamos en la página principal del complemento. Por defecto, este último tiene una gama de widgets tan pronto como se instala. Puede descargar otros a través del mercado o crear sus propios widgets (ver más abajo).

![capture006](../images/capture006.png)

Al hacer clic en uno de los widgets de la lista en el menú derecho o izquierdo, abrirá la página de configuración de widgets, en la que puede modificar, ver una vista previa del widget (si Jeedom encuentra un comando compatible) y todo mucha información de configuración como el código fuente del widget

![capture007](../images/capture007.png)

> **Advertencia**
>
> Si modifica un widget que no es una de sus creaciones, es preferible duplicarlo para evitar perder sus modificaciones si se actualiza el widget original.

Para obtener más información sobre la configuración y la creación de widgets, consulte a continuación.

## Aplicar el widget en un pedido 

Para aplicar un widget a un solo comando o modificar el aplicado, debe ir a la página de configuración del módulo. La ruta para acceder al módulo difiere según el tipo de este último. He aquí algunos ejemplos :

Para los módulos Z-Wave, "Complementos" ⇒ "Protocolo de automatización del hogar" ⇒ "Z-wave", luego elija el módulo del comando que desea modificar.

![capture024](../images/capture024.png)

En la página de configuración del módulo, vaya al comando y haga clic en las ruedas dentadas. En la nueva ventana, vaya a la pestaña "Vista avanzada""

![capture025](../images/capture025.png)

Aquí puede modificar el widget aplicado para computadoras y móviles con las listas desplegables dedicadas.

![capture014](../images/capture014.png)

> **Nota**
>
> Las listas desplegables se autofiltran. Solo proporcionan widgets compatibles con el tipo de comando.

## Aplicar el widget en varios comandos

En cliquant sur le bouton “Appliquer sur des commandes” vous ouvrez une fenêtre qui liste toutes les commandes compatibles avec le type du widget. Así que simplemente puede aplicar o eliminar el widget a muchos pedidos a la vez.

![capture008](../images/capture008.png)

Simplemente marque los comandos en los que desea aplicar el widget

### Varios ejemplos para el mismo orden 

![Widget : badge-transparent](../images/capture009.png)

![Widget : badge](../images/capture010.png)

![Widget : ConsoIMG](../images/capture011.png)

## Opciones de personalización de widgets 

Desde la versión 1.112 de Jeedom, es posible personalizar widgets con opciones específicas (creadas por el desarrollador del widget) y comunes a todos los widgets. Entonces podemos tener un widget que se mostrará de manera diferente de un pedido a otro.

Hay 2 formas de acceder a estas opciones. O por el árbol de la automatización del hogar que se encuentra en el menú "General" ⇒ "Resumen de la automatización del hogar"

![capture012](../images/capture012.png)

En esta página encontrará todos sus elementos de domótica, objetos, módulos, comandos. Haga clic en la pequeña rueda dentada para acceder a la página de configuración.

![capture013](../images/capture013.png)

Ya sea desde la página de configuración del módulo.

![capture015](../images/capture015.png)

### Agregar una opción personalizada 

En la pestaña "Pantalla avanzada", hay 2 listas desplegables que le permiten cambiar el widget utilizado en una computadora para el pedido y el otro para dispositivos móviles. También hay otras opciones, para mostrar o no los nombres y estadísticas, forzar el salto de línea antes / después del widget si hay varios comandos en un módulo (saltos de línea en el mosaico). Finalmente la lista de parámetros opcionales de Widget aplicados

![capture014](../images/capture014.png)

![exemple 1 de valeur pour afficher un compteur spécifique](../images/capture016.png)

![exemple 2 de valeur pour afficher un autre compteur](../images/capture017.png)

> **Nota**
>
> Para agregar una opción, simplemente haga clic en el botón "Agregar", ingrese el nombre de la opción con las letras mayúsculas y minúsculas correctas, así como el valor que se asignará a la opción.

## Configuración avanzada

Ver el documento en el resumen de domótica ⇒ [Aquí](https://jeedom.github.io/core/es_ES/display)

## Creación / modificación de widgets
El complemento ofrece 2 posibilidades para la creación de widgets, el modo fácil que permite hacer widgets básicos fácilmente con un asistente de creación y el modo avanzado que también permite la modificación posterior de todos los widgets.

> **Nota**
>
> El modo avanzado proporciona flexibilidad ilimitada. Sin embargo, debe tener algún conocimiento del lenguaje de programación básico como HTML y CSS para la base y JavaScript para poder hacer cosas un poco más complejas.

### Modo de creación fácil

Para crear un widget con el asistente, solo necesita ir al complemento : Menú "Complementos" ⇒ "Programación" ⇒ "Widget". Desde esta página, haga clic en el botón "Modo de creación fácil" en la esquina superior izquierda.

![capture026](../images/capture026.png)

En la nueva página, puede ver en la parte derecha los iconos básicos de Jeedom, las imágenes que ha importado y los paquetes importados. En el lado izquierdo, primero un botón para importar paquetes o imágenes, luego 3 botones para crear un widget.

![capture027](../images/capture027.png)

-   Activar / Desactivar widget ⇒ Destinado a comandos de botón para activar / desactivar
-   Widget de estado simple ⇒ Destinado a comandos que tienen una retroalimentación de estado
-   Widget numérico ⇒ Destinado a comandos que envían un valor numérico (ejemplo : Temperatura, brillo ... etc.)

#### Ejemplo con la creación de un widget de estado 

> **Nota**
>
> Este ejemplo sigue siendo aplicable para los otros 2 tipos de creación

Haga clic en el botón "Widget de estado simple". Llegamos a la página de configuración asistida. Debe asignar un nombre al widget (nombre único), el tipo de interfaz, si el widget está destinado a la PC (Tablero de instrumentos) o al dispositivo móvil, luego la biblioteca a usar (Jeedom, Imagen personal o paquetes).

![capture028](../images/capture028.png)

Luego debe elegir el ícono para los estados 0 y 1, así como el tamaño del ícono (valor en "EM" =% del tamaño original de la fuente del navegador, 1 = 100%). Hecho esto, el código fuente aparece debajo del área de configuración.

> **Advertencia**
>
> No modifique esta información si no sabe lo que está haciendo.

Solo queda validar para finalizar la creación del widget. Será redirigido automáticamente a la página de configuración avanzada que le permite aplicar el widget a varios comandos

### Creación / modificación en modo avanzado 

En modo avanzado, debe tener conocimiento del lenguaje de programación "HTML", "CSS" y "JavaScript" para poder modificar un widget correctamente.

> **Nota**
>
> Hay varios sitios en FR en la web para aprender estos idiomas, recomiendo OpenClassRoom que explica todo desde el principio.

Para acceder al modo avanzado, simplemente vaya al complemento del widget, elija el widget para modificar o haga clic en el botón "Agregar widget""

#### Crear un widget 

Desde la página principal del complemento, haga clic en "Agregar un widget". Jeedom te pide información sobre el widget futuro.

![capture029](../images/capture029.png)

-   El nombre debe ser un nombre único. Así que verifique que este nombre no exista.
-   Versión, corresponde al tipo de dispositivo para el que está destinado (PC o móvil).
-   Tipo, corresponde al tipo de comando que usará el widget: ninguno, información o acción.
-   Subtipo, da precisión al tipo elegido previamente.

Puede cambiar el nombre, tipo y subtipo más tarde. Sin embargo, esto puede tener implicaciones si el widget ya está aplicado a uno o más comandos. Por lo tanto, es mejor evitarlo.

##### Información de tipo 

El tipo "info" se usa para comandos que devuelven un valor, por ejemplo, un estado del módulo, un valor numérico (temperatura, brillo, humedad, etc.), un texto o cualquier otra información.

-   Digital : para números
-   Binario : para estados de encendido / apagado (0/1)
-   Otro : para todos los otros tipos de información como textos

##### El tipo de acción 

El tipo de "acción" se usa para comandos que tendrán una acción en Jeedom o en equipos externos.

-   Por defecto : usado para crear botones de acción
-   Cursor : usado para crear cursores para cambiar valores numéricos
-   Mensaje : Se usa para crear un área de ingreso de texto con el botón Enviar
-   Color : usado para crear un botón de elección de color

Una vez configurado, haga clic en "Agregar". Jeedom lo redirige a la página principal de configuración / modificación de widgets. A partir de ahí, el widget se crea en Jeedom pero actualmente no contiene ningún código para mostrar el comando.

![capture030](../images/capture030.png)

#### Editar un widget 

Una vez en la página de configuración principal de un widget, es en la parte del "código fuente" donde se aplican los cambios en la apariencia.

> **Advertencia**
>
> Para modificar esta información, necesita tener algunos conceptos básicos en programación HTML, CSS y JavaScript. Las modificaciones pueden tener un impacto significativo en la visualización del widget y la visualización de otros widgets, o incluso bloquear la visualización de todos los widgets.

La base (esqueleto) de un widget está en HTML. Esto le permite estructurar la pantalla y buscar información de manera más simple.

En Jeedom para widgets, la primera pieza de código para crear es un "div" que actuará como el contenedor principal para todo el código en nuestro Widget.

En este "div", puede encontrar hasta 3 sub-partes distintas :

-   La parte HTML que mostrará la información
-   La parte CSS que lo hará más atractivo formateando la parte HTML (Parte opcional)
-   La parte de JavaScript que le permite trabajar en varias acciones, cálculos y animaciones

##### Código HTML 

En lugar de largos discursos, aquí hay un ejemplo de código básico para un widget

**Estructura HTML básica.**

````
<div>
    <center>
        <span></span>
    </center>

    <style>

    </style>

    <script>

    </script>
</div>
````

Ahora se crea la estructura básica que esquematiza las diferentes ubicaciones en nuestro widget. Sin embargo, no tenemos nada mostrado, es normal.

- ``div`` : Contenedor multipropósito relativamente versátil con avance de línea después
- ``center`` : etiqueta que centra su contenido
- ``span`` : Contenedor multipropósito relativamente versátil sin avance de línea
- ``style`` : Contenedor para el código CSS que se aplicará en general (tenga cuidado de que su contenido pueda afectar a todos los elementos de la página)
- ``script`` : etiqueta que contendrá JavaScript

Tal como están las cosas, es difícil hacer algo con este código. Es por eso que agregaremos algunas opciones (llamadas Atributo en lenguaje HTML) en nuestras etiquetas.

**Adición de atributos básicos.**

````
<div class="Doc-#id# cmd tooltips cmd-widget #history#" title="" data-type="info" data-subtype="numeric" data-cmd_id="#id#" >

    <center>
        <span></span>
    </center>

    <style>

    </style>

    <script>

    </script>
</div>
````

En nuestro ``div`` principal agregamos varios atributos :

``id`` : El atributo "id" no se recomienda en Jeedom

> **Importante**
>
> Para asegurarnos de evitar un conflicto a nivel de ID (que puede bloquear toda la página web), en Jeedom utilizamos identificadores de clase y atributos de "datos"-". Esto permite asegurarse de que, en caso de colisión, no se bloquee toda la página web.

clase : Las clases a diferencia de los identificadores no son únicas. Se utilizan para aplicar un estilo definido en la parte de estilo (la etiqueta). Por lo tanto, simplemente podemos reproducir el mismo formato que creamos una vez y que reutilizamos por palabra clave (clase). Aquí agregamos varias clases básicas definidas y disponibles en Jeedom (ver la clase Jeedom a continuación).

Jeedom usa en lugar del atributo id, una clase como id, esto hace posible que un elemento sea único en la página para encontrarlo y apuntarlo más fácilmente. Es imperativo que su valor sea único en la página. Para esto te aconsejo que uses una palabra que represente nuestro elemento. En nuestro ejemplo, el div representa la totalidad de nuestro widget, por lo que podemos usar el nombre de nuestro widget o una abreviatura (aquí elegí Doc-). Luego, para garantizar que el id de clase sea único, colocaremos una etiqueta "#id#" (para obtener más información sobre las etiquetas Jeedom, consulte a continuación), que proporciona "Doc-#id#".

- ``data-type`` : Este atributo permite almacenar el tipo de comando en el que se aplicará el widget. Por lo tanto, su valor debe corresponder al parámetro de tipo sobre el área del código.
- ``data-subtype`` : Este atributo permite almacenar el subtipo del comando en el que se aplicará el widget. Por lo tanto, su valor debe corresponder al parámetro de subtipo sobre el área de código.
- ``data-cmd\_id`` : Este atributo toma como valor la etiqueta \#id\#. Jeedom lo utiliza para actualizar el Tablero.

A partir de ahí, tenemos una base que corresponde al estándar Jeedom. Es
el código minimalista que se necesita para tener un widget que respete el
Carta de libertad / regla

> **Importante**
>
> No olvide modificar el atributo de tipo de datos y subtipo de datos si modifica estos valores en la configuración del widget.

##### Código CSS 

Esta parte que se agrega entre las 2 etiquetas de "estilo", permite declarar reglas de formato. Esta parte es opcional porque puede agregar el formato directamente en el atributo de estilo de una etiqueta o usando JavaScript. Por lo tanto, el uso de esta parte es una cuestión de preferencia para separar correctamente HTML y CSS

> **Advertencia**
>
> Cualquier código declarado en etiquetas de estilo se aplica a toda la página. Así que tenga cuidado con el selector de CSS que elige usar para no alterar los otros widgets.

Para no impactar involuntariamente otros widgets por el código CSS que va a poner allí, le aconsejo que use el selector de id que se dirige a su widget.

Ejemplo, si quiero poner en rojo el texto ubicado en la etiqueta "Span", tendemos a escribir :

**Código puesto en la etiqueta Estilo.**

````
span{
    color: red;
}
````

Pero eso cambiaría el color del texto de todo el espacio de la página. Entonces, para evitar esto, agregue un selector de identificación que apunte a su widget para limitar su acción :

**Código puesto en la etiqueta Estilo y delimitado.**

````
.Doc-#id# span{
    color: red;
}
````

Al agregar .Doc- \#id\# delante del selector de span, delimitamos la modificación dentro de nuestro widget.

##### Código JavaScript 

JavaScript se coloca entre las etiquetas "Script". Usamos JavaScript para hacer cálculos, convertir datos, animar el widget, formatear el widget, realizar acciones en el widget basadas en eventos. Además del JavaScript básico, Jeedom incorpora por defecto varios Frameworks que simplifican el código JavaScript. Entonces podemos usar sin inicializarlos :

-   Jquery
-   Jquery UI
-   Bootstrap

> **Advertencia**
>
> En el caso de un error en el código JS, esto puede bloquear todos los códigos JS que puedan seguir, ya sea en el widget u otros widgets. Así que ten cuidado al hacer cambios.

> **Punta**
>
> Si después de haber guardado una modificación de un widget, la rueda dentada contenida para rotar indefinidamente, puede haber cometido un error JS que hace que la continuación de la ejecución JS se bloquee en la página. Para poder corregirlo, solo tiene que pasar div id = jqueryLoadingDiv en display none usando la consola del navegador, corregir el código y guardar. También debes hacer F5 para actualizar la página.

### Etiquetas de libertad 

En Jeedom a menudo encontrarás etiquetas que son nombres rodeados por "\#". El principio de funcionamiento de estas etiquetas es simple : Jeedom los reemplazará con el valor que corresponde a la etiqueta. Las etiquetas son tipos de variables (cuadros) en los que se almacenan valores desconocidos al momento de escribir el código. Es un poco como hacer un texto con espacios en blanco para poner palabras más tarde que le darían un significado variable al texto.

No todas las etiquetas están disponibles con todo tipo de pedidos, así que aquí está la lista y sus detalles :

- \#id\# : ID de pedido creado por Jeedom cuando se creó el pedido (valor numérico único). Usar como texto, en JS o en atributos HTML
- \#logicalId\# : ID de pedido lógico (puede estar vacío). Usar como texto o en JS
- \#name\# : Nombre de la orden.  Usar como texto o en JS
- \#name\_display\# : Nombre de la orden. Para ser utilizado para mostrar el nombre del comando a nivel de widget. Usar como texto o en JS
- \#hideCmdName\# : Vacío si se debe mostrar el nombre del comando. Y "mostrar:none; "si el nombre del comando no debe mostrarse. Usar en atributos de estilo HTML (CSS)
- \#maxValue\# : Valor máximo que puede tomar el pedido. Usar como texto, en JS o en atributos HTML
- \#valueName\# : Nombre del comando de información vinculado, si el comando de acción está vinculado a un comando de información, de lo contrario, nombre del comando de acción. Usar como texto o en JS
- \#lastValue\# : Último valor del pedido (puede estar vacío). Usar como texto o en JS
- \#unite\# : Unidad de comando Para usar como texto o en JS
- \#collectDate\# : Devuelve la fecha y hora de la última actualización del widget en formato ``yyyy-mm-dd hh:mn:ss`` Usar como texto, en JS o en el atributo de título
- \#state\# : Valor de comando Para usar como texto o en JS
- \#displayHistory\# : Le permite tener en cuenta la opción "Mostrar estadísticas en widgets" en el menú "General" ⇒ "Administración" ⇒ pestaña "Configuración" "Configuración de comandos". Si la opción está en sí, la etiqueta devolverá un espacio en blanco de lo contrario ``display : none;`` Para ser utilizado en el atributo "estilo" de una etiqueta html para mostrar si el registro está activado en la configuración de Jeedom
- \#averageHistoryValue\# : Valor promedio durante las últimas x horas del comando Para usar como texto o en JS
- \#minHistoryValue\# : Mínimo durante las últimas x horas del pedido Para ser utilizado como texto o en JS
- \#maxHistoryValue\# : Máximo en las últimas x horas del pedido Para ser utilizado como texto o en JS
- \#tendance\# : Permite si el historial de valores está activado para devolver la clase : ``fa fa-minus``, ``fa fa-arrow-up`` o ``fa fa-arrow-down`` (icono de línea, flecha hacia abajo, flecha hacia arriba), vinculado a la tendencia del valor que se utilizará en el atributo ``class`` una etiqueta ``i``
- \#history\# : Permite si el historial de valores está activado para devolver la clase : 'cursor de historial '(Ver clase CSS Jeedom), de lo contrario será reemplazado por un vacío. Por lo tanto, la etiqueta permite mostrar o no el gráfico de historial en el tablero. Para ser utilizado en el atributo "clase" del div principal

![Exemple de retour de valeur](../images/capture031.png)

### Clases CSS de Jeedom 

- ``cmd`` : Debe agregarse al atributo "clase" del div principal, esta clase permite actualizar el widget. Sin esta clase, el widget solo se actualiza al actualizar la página.
- ``cmd-widget`` : Se recomienda esta clase porque le permite agregar algunos parámetros CSS predeterminados al widget para un buen comportamiento.
- ``cursor`` : Le permite cambiar el puntero en la mano.
- ``history`` : Esta clase le permite modificar el puntero en la mano, y al hacer clic para mostrar el historial del valor del widget.
- ``tooltips`` : Es por el título de un elemento en lugar de ser amarillo, se vuelve negro translúcido con el texto blanco

# Preguntas frecuentes 

>**Cómo aprender a hacer un widget ?**
>
>El sistema de widgets se basa en los idiomas HTML y Javascript, por lo que es aconsejable ver los cursos (muy numerosos) en estos idiomas. Además, es interesante leer también cursos en Jquery (y Jquery mobile para la versión móvil de widgets). Otra forma es hacer un widget en "creación fácil", por lo que el complemento generará automáticamente el código de sus widgets.
