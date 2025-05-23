# Diseño 3D
**Inicio → Design3D**

Esta página le permite crear una vista 3D de su hogar que puede reaccionar dependiendo del estado de la información variada en su domótica.


> **Consejo**
>
> Es posible ir directamente a un diseño 3D gracias al submenú.

## Importando el modelo 3D

> **IMPORTANTE**
>
> No puede crear su modelo 3D directamente en Jeedom, debe hacerlo con un software de terceros. Nous recommandons le très bon SweetHome3d (http://www.sweethome3d.com/fr/).

Una vez que se ha creado su modelo 3D, debe exportarse en formato OBJ. Si usa SweetHome3d, esto se hace desde el menú "Vista 3D" y luego "Exportar a formato OBJ". Luego tome todos los archivos generados y póngalos en un archivo zip (puede haber muchos archivos debido a las texturas).

> **IMPORTANTE**
>
> Los archivos deben estar en la raíz del zip y no en una subcarpeta.

> **ATENCIÓN**
>
> Un modelo 3D es bastante grande (puede representar varios cientos de MB). Cuanto más grande sea, mayor será el tiempo de representación en Jeedom.

Una vez exportado tu modelo 3D, en Jeedom debes crear un nuevo diseño 3D. Para hacer esto, debes ingresar al modo de edición haciendo clic en el pequeño lápiz a la derecha, luego hacer clic en +, darle un nombre a este nuevo diseño 3D y luego validar.

Jeedom cambiará automáticamente al nuevo diseño 3D, debe volver al modo de edición y hacer clic en las pequeñas ruedas con muescas.

Desde esta pantalla podrás :

- Cambia el nombre de tu diseño
- Agregar un código de acceso
- Elige un ícono
- Importa tu modelo 3D

Haga clic en el botón &quot;enviar&quot; en el nivel &quot;Modelo 3D&quot; y seleccione su archivo zip

> **ATENCIÓN**
>
> Jeedom autoriza la importación de un archivo de 150mo como máximo !

> **ATENCIÓN**
>
> Debes tener un archivo zip.

> **Consejo**
>
> Una vez que se haya importado el archivo (puede ser bastante largo dependiendo del tamaño del archivo), debe actualizar la página para ver el resultado (F5).


## Configuracion de elementos

> **IMPORTANTE**
>
> La configuración solo se puede hacer en modo edición.

Para configurar un elemento en el diseño 3D, haga doble clic en el elemento que desea configurar. Esto mostrará una ventana donde puedes :

- Indique un tipo de enlace (actualmente solo existe el equipo)
- Ingrese el enlace al elemento en cuestión. Aquí solo puede poner un enlace a un dispositivo por el momento. Esto permite al hacer clic en el elemento para que aparezca el equipo
- Definir especificidad : allí hay varios que veremos justo después, esto permite especificar el tipo de equipo y, por lo tanto, la visualización de información

### Luz

- Estado : El control del estado de la luz puede ser binario (0 o 1), digital (0 a 100%) o color
- Fuerza : potencia de la bombilla (tenga en cuenta que esto puede no reflejar la realidad))

### Texte

- Texto : texto para mostrar (puede poner comandos allí, el texto se actualizará automáticamente al cambiarlo))
- Tamaño del texto
- Color del texto
- Transparencia de texto : de 0 (invisible) a 1 (visible)
- Color de fondo
- Transparencia de fondo : de 0 (invisible) a 1 (visible)
- Color del borde
- Transparencia de la frontera : de 0 (invisible) a 1 (visible)
- Espacio sobre el objeto : permite indicar el espaciado del texto en comparación con el elemento

### Puerta / ventana

#### Puerta / ventana

- Estado : Estado de puerta / ventana, 1 cerrado y 0 abierto
- Rotation
	- Permitir : activa la rotación de la puerta / ventana al abrir
	- Apertura : lo mejor es probar para que coincida con su puerta / ventana
- Translation
	- Permitir : activa la traducción al abrir (puerta corredera / tipo de ventana))
	- Sentido : dirección en la que debe moverse la puerta / ventana (tiene arriba / abajo / derecha / izquierda)
	- Repetición : de forma predeterminada, la Puerta / Ventana se mueve una vez que su dimensión en la dirección dada, pero puede aumentar este valor
- Ocultar cuando la puerta / ventana está abierta
	- Permitir : Oculta el elemento si la puerta / ventana está abierta
- Couleur
	- Color abierto : Si marca, el elemento tomará este color si la puerta / ventana está abierta
	- Color cerrado : Si marca, el elemento tomará este color si la puerta / ventana está cerrada

#### Volet

- Estado : estado de la persiana, 0 abierto y otro valor cerrado
- Ocultar cuando el obturador está abierto
	- Permitir : ocultar el elemento si el obturador está abierto
- Couleur
	- Color cerrado : Si marca, el elemento tomará este color si el obturador está cerrado

### Color condicional

Si la condición es válida, permite dar el color elegido al elemento. Puedes poner tantos colores / condiciones como quieras.

> **Consejo**
>
> Las condiciones se evalúan en orden, se tomará la primera que sea verdadera, por lo tanto, las siguientes no se evaluarán
