# Resúmenes

## Descubrimiento de resúmenes

Jeedom ofrece una forma muy simple y clara de mostrar la situación de los diferentes componentes de su hogar, para ver de inmediato cuántas luces están encendidas, persianas abiertas, estado de alarma, temperatura, etc.

Los resúmenes se muestran en forma de pequeños iconos en la barra de Jeedom en la parte superior y en cada objeto (Panel y Síntesis). Al hacer clic, le permiten ver directamente el equipo incluido en el resumen sobre el que hizo clic para actuar sobre él si es necesario.

Hay que distinguir entre dos tipos de resúmenes :

- El resumen general : Este es el conjunto de iconos de resumen que se muestran en la barra de Jeedom.
- Los resúmenes de objetos : Cada objeto tiene su propio resumen, que se muestra en el resumen del objeto y en el Tablero a la derecha del nombre del objeto.

![Descubrimiento de resúmenes](images/summary-intro.gif)

El resumen global no se parametriza directamente. Es un concentrado de los resúmenes de los otros objetos. Por ejemplo, si una luz está encendida en la cocina y dos en la sala de estar, el resumen general mostrará tres luces encendidas. Por supuesto, todo esto se puede configurar, como veremos a continuación.

Por lo tanto, los resúmenes se configuran en cada objeto, en la pestaña ... Resumen !

> Remarque
>
> Esta documentación fue escrita e ilustrada en un Core v4.2. Por lo tanto, algunas opciones pueden variar según su versión.

## Configuración general de resúmenes

Antes de ver la configuración de un objeto, para poder configurar un resumen debe existir.

Entrar en **Ajustes → Sistema → Configuración** luego en la pestaña **Resúmenes**.

{% include lightbox.html src="images/summary-admin.jpg" data="settings" title="Configuración de resúmenes" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Aquí tienes la lista de todos los resúmenes que podrás configurar en cada objeto. Aquí podemos configurar los resúmenes *Presencia* (si te fijas bien, ves en el resumen global que hay una persona en casa), *Alerta*, *Movimienot*, *Calentador* etc.. Et bien sûr, vous pouvez supprimer et ajouter des types de résumé ici, afin de les avoir à disposition ensuite sur les objets.

Tenga la seguridad de que se han configurado varias cosas en esta vista previa, pero por defecto Jeedom tiene una lista de resúmenes con parámetros estándar.

Repasemos lo que vamos a definir aquí:

- **Llave** : Es un valor que debe ser único en esta lista, que sirve como referencia para el Core.
- **Apellido** : El nombre (tipo) del resumen, que encontrará en los parámetros del objeto.
- **Cálculo** : El tipo de cálculo utilizado para el valor mostrado. La suma de los estados, el promedio de, por ejemplo, temperaturas, humedad o el valor del texto.
- **Icono** : El icono de resumen, que se muestra en el objeto y, opcionalmente, en el resumen global.
- **Icono si es nulo** : Icono de resumen si su valor es 0. Le permite especificar un icono diferente, como el obturador cerrado, la luz apagada o un color diferente, etc.
- **Unidad** : Unidad de resumen, que se mostrará a la derecha del valor.
- **Número oculto** : Nunca muestra el valor de resumen (el número a la derecha del icono).
- **Ocultar número si es cero** : Le permite ocultar el valor de resumen, solo si es 0. Por lo tanto, podemos desear tener el icono de panel abierto con su número y el icono de panel cerrado sin el número cuando todos los paneles están cerrados.
- **Método de conteo** : Si cuenta datos binarios, debe poner este valor en binario, por ejemplo, si cuenta la cantidad de lámparas encendidas pero solo tiene el valor del atenuador (0 a 100), entonces debe poner binario, así Jeedom lo hará considere que si el valor es mayor que 1, entonces la lámpara está encendida.
- **Si cero** : Mostrar resumen incluso cuando su valor es 0.
- **Ignorar si** : Ignorar un comando para este resumen si no ha tenido una actualización durante x minutos.
- **Enlace a una virtual** : Lanza la creación de un dispositivo virtual con comandos correspondientes a los valores en el resumen.
- **Eliminar resumen** : El último botón, en el extremo derecho, le permite eliminar el resumen.

>**NOTA**
>
>Para eliminar un icono, simplemente haga doble clic en él

Por ejemplo aquí :

- Si nos fijamos en la animación de la parte superior de la página, el 3er resumen, correspondiente a **Movimienot** indica en rojo que hay *1* movimienot. En la vista previa de arriba, vemos que es el ícono del círculo verde, sin números. De hecho, si miras su línea, el icono verde está configurado como **Icono si es nulo** y el valor no se muestra porque **Ocultar número si es cero** está chequeado. Del mismo modo, el resumen *Puerta* está en verde, sin número, mientras que el resumen *Luz* está en amarillo, con el número de luces encendidas.

> Tip
>
> También puede cambiar el orden en que se muestran los resúmenes moviendo una línea hacia arriba o hacia abajo con el mouse.


## Configuración de resúmenes de objetos

Una vez que la lista de resúmenes está disponible en la configuración de Jeedom, podemos usarlos en cada objeto.

Dentro **Herramientas → Objetos**, aquí sobre el tema Salón :

{% include lightbox.html src="images/summary-object-1.jpg" data="settings" title="Resumen objet" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Aquí tenemos dos partes :

### Configuración de resúmenes

Las columnas de la tabla presentan cada tipo de resumen disponible en configuración como se ve arriba. Para cada resumen, tres opciones :

- **Subir en el resumen global** : Es aquí que usted elige, para cada resumen, si el de este objeto debe tenerse en cuenta en el resumen global. Por ejemplo, aquí el resumen *Obturador* del Show está marcado, por lo que sube en el resumen global. Si miramos en el resumen general, en los 6 apartados abiertos que se muestran, están los del Salón ! Por el contrario, si nos fijamos en el resumen *TempExt* (16.1°C en el resumen global), está desmarcado, porque solo quiero reportar la temperatura del objeto Garden en el resumen global.
- **Ocultar en el escritorio** : Para no mostrar este resumen junto al nombre del objeto en el Tablero.
- **Ocultar en el móvil** : Para no mostrar este resumen junto al nombre del objeto en el móvil.

### Órdenes abstractas

Cada pestaña representa un tipo de resumen definido en la configuración de Jeedom. Haga clic en **Añadir un pedido** para que se tenga en cuenta en el resumen. Tiene la opción de seleccionar el comando de cualquier equipo Jeedom, incluso si no tiene este objeto como padre.

Aquí vemos los tres paneles presentes en el resumen de este objeto. Y *Obturador* estando activados en el resumen global, también serán contados en este.

### Pestaña resumen por equipo

Esta página le permite seleccionar órdenes de resumen de otra manera : muestra todo el equipo que tiene el objeto como padre. En cada equipo, al hacer clic en él, se presenta la lista de comandos de información del equipo, con a la derecha los medios para asignar este comando a uno o más sumarios del objeto.

Si uno o más resúmenes ya están definidos, el selector aparece en naranja, con los tipos de resúmenes marcados a la derecha.

## Resúmenes y virtuales

Los resúmenes mantienen con el [Complemento virtual](https://market.jeedom.com/index.php?v=d&p=market_display&id=21) una relación ambigua, no siempre fácil de entender, pero sin embargo muy poderosa, especialmente desde Core v4.2 y acciones en resumen ! Aún allí ? Continuamos ...

Normalmente, ahora debería haber creado algunos resúmenes en sus objetos y, por lo tanto, tener varias informaciones sobre sus objetos y en el resumen global, como sus persianas abiertas, sus luces, etc.

Estos resúmenes son extremadamente prácticos para tener un estado general y visual del alojamiento muy rápidamente, y al hacer clic para poder actuar sobre él mostrando el equipamiento de un resumen. Pero si continuamos con el razonamiento, eso significa que esa información existe... Y que podríamos apreciar usarla en un escenario !

De hecho, dado que mi resumen sabe que tengo 3 luces encendidas, ¿por qué no poder probar en un escenario SI una luz está encendida? ? O incluso activar el escenario cuando se enciende una luz ? Ve incluso apagando todas las luces del Salón con una sola acción ? Pues todo esto es posible vinculando un Virtual a un resumen !

Entrar en **Ajustes → Sistema → Configuración** luego en la pestaña **Resúmenes**.

En la línea *Luz*, en el extremo derecho, haga clic en el botón **Crear virtuales**.

Ahora entra **Complementos → Programación → Virtual**

Para cada objeto con comandos en el resumen *Luz*, ahora tienes un nuevo virtual llamado *Resumen* con objeto como padre. También tienes una nueva Virtual *Resumen total* sin objeto principal, correspondiente al resumen global de Jeedom.

Abriendo el Show Virtual y yendo a la pestaña **Pedidos**, esto es lo que encontramos :

{% include lightbox.html src="images/summary-virtual.jpg" data="settings" title="Virtuel résumé" imgstyle="width:auto;display: block;margin: 0 auto;" %}

- Un pedido **Información** *Luz* : Este tiene la información del número de luces encendidas. En el Salón, ya que estamos en el Resumen Virtual del Salón.
- Un pedido **Valores** *Botón de luz encendido* : Al activar esta acción, activaremos todos los comandos en el resumen **Luz**, aquí desde el objeto Salon.
- Un pedido **Valores** *Botón de luz Luz apagada* : Al activar esta acción, desactivaremos todos los comandos en el resumen **Luz**, aquí desde el objeto Salon.
etc.

Deberías haber entendido el principio ! Ahora tenemos, para cada resumen para el que hemos vinculado un Virtual, la información y las acciones correspondientes disponibles para cada objeto, y para el resumen global !

Entonces ahora podemos usarlo como cualquier información o acción de equipo real, en un escenario !

Por ejemplo :

- Un disparador `#[None][Global Summary][Movimienot]# > 0` que activará un escenario en cuanto se detecte un movimiento en la vivienda.
- Una expresión IF `#[Salon][Summary][Luz]# > 0 ` que probará si una luz está encendida en el Salón.
- Una acción `#[Salon][Summary][Obturador Shutter Button Slider]#` con valor 0 que cerrará todos los paneles del Salón.

### Acciones de resumen

Como se vio anteriormente, los Summary Virtuals no solo tienen la *información* resúmenes, pero también *Valores* disponibles en los diferentes equipos configurados en resumen. Por supuesto, estas acciones son accesibles en el escenario, pero también a través de la interfaz, desde los iconos de resumen aquí y allá !

Por ejemplo, si creó el resumen Virtuals para el resumen *Luz*, puede Ctrl+Clic en el icono de este resumen. Luego aparecerá una ventana emergente con las diferentes acciones, lo que le permitirá, por ejemplo, apagar todas las luces de la casa a la vez !

{% include lightbox.html src="images/summary-virtual-actions.jpg" data="settings" title="Acciones de resumen" imgstyle="width:auto;display: block;margin: 0 auto;" %}


Como hemos visto, los resúmenes representan un tema extenso, que no siempre es muy fácil de captar al comienzo de la vida de un Jeedomian, pero que es bueno conocer !
