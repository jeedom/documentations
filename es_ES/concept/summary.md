# Los resúmenes

## Descubrimiento de resúmenes

Jeedom ofrece una forma muy sencilla y clara de visualizar la situación de los diferentes componentes de tu hogar, para que puedas ver inmediatamente cuántas luces están encendidas, qué persianas están abiertas, el estado de la alarma, la temperatura, etc.

Los resúmenes se muestran en forma de pequeños iconos en la barra Jeedom en la parte superior y en cada objeto (Panel y Resumen). Al hacer clic, le permiten ver directamente el equipo incluido en el resumen en el que hizo clic para actuar sobre él si es necesario.

Hay que distinguir dos tipos de resumen :

- El resumen general : Este es el conjunto de iconos de resumen que se muestran en la barra de Jeedom.
- Resúmenes de materias : Cada objeto tiene su propio resumen que se muestra en el resumen del objeto y en el Panel a la derecha del nombre del objeto.

![Descubrimiento de resúmenes](images/summary-intro.gif)

El resumen global no se puede configurar directamente. Es un concentrado de resúmenes de otros objetos. Por ejemplo, si una luz está encendida en la cocina y dos en la sala de estar, el resumen general mostrará tres luces encendidas. Eso sí, todo esto es configurable, como veremos a continuación.

Por tanto, los resúmenes se configuran en cada objeto, en la pestaña... Resumen !

> Remarque
>
> Esta documentación fue escrita e ilustrada en un Core v4.2. Por lo tanto, algunas opciones pueden variar según su versión.

## Configuración general de resúmenes

Antes de ver la configuración en un objeto, para poder configurar un resumen, debe haber.

Ir a **Configuración → Sistema → Configuración** luego en la pestaña **Resúmenes**.

{% include lightbox.html src="images/summary-admin.jpg" data="settings" title="Configurar resúmenes" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Aquí tienes la lista de todos los resúmenes que podrás configurar en cada objeto. Aquí podemos configurar los resúmenes *Presencia* (si miras de cerca, ves en el resumen general que hay una persona en casa), *Alerta*, *Movimiento*, *Calefacción* etc. Et bien sûr, vous pouvez supprimer et ajouter des types de résumé ici afin de les avoir à disposition ensuite sur les objets.

Tenga la seguridad de que se han configurado varias cosas en esta vista previa, pero por defecto Jeedom tiene una lista de resúmenes con parámetros estándar.

Repasemos lo que definiremos aquí:

- **Llave** : Es un valor que debe ser único en esta lista, que sirve como referencia para el Core.
- **Apellido** : El nombre (tipo) del resumen, que encontrará en los parámetros del objeto.
- **Cálculo** : El tipo de cálculo utilizado para el valor mostrado. La suma de los estados, el promedio de, por ejemplo, la temperatura, la humedad o el valor del texto.
- **Icono** : El icono de resumen, que se muestra en el objeto y posiblemente en el resumen general.
- **Si el icono es nulo** : Icono de resumen si su valor es 0. Le permite especificar un ícono diferente como una persiana cerrada, luz apagada o color diferente, etc.
- **Unidad** : Unidad de resumen, que se mostrará a la derecha del valor.
- **Número oculto** : Nunca muestra el valor de resumen (el número a la derecha del icono).
- **Ocultar número si es cero** : Le permite ocultar el valor de resumen, solo si es 0. Por lo tanto, es posible que deseemos tener el icono de la persiana abierta con su número de contraventanas abiertas y el icono de la persiana cerrada sin el número cuando todas las contraventanas estén cerradas.
- **Método de conteo** : Si cuenta datos binarios, debe establecer este valor en binario. Ejemplo : si cuentas el número de lámparas encendidas pero solo tienes el valor del atenuador (0 a 100), entonces debes poner binario, así Jeedom consideró que si el valor es mayor que 1, entonces la lámpara está encendida.
- **Si no** : Mostrar resumen incluso cuando su valor sea 0.
- **Ignorar si** : Ignore un pedido para este resumen si no se ha actualizado durante x minutos.
- **Enlace a un virtual** : Inicia la creación de un dispositivo virtual con comandos correspondientes a los valores del resumen.
- **Eliminar resumen** : El último botón, en el extremo derecho, le permite eliminar el resumen.

>**NOTA**
>
>Para eliminar un icono, simplemente haga doble clic en él

Por ejemplo aquí :

- Si nos fijamos en la animación del inicio de la página, el 3º resumen, correspondiente a **Movimiento**, indica en rojo que hay *1* movimiento. En la vista previa de arriba, vemos que es el icono del círculo verde, sin número. De hecho, si miras su línea, el icono verde está configurado como **Si el icono es nulo** y el valor no se muestra porque **Ocultar número si es cero** está chequeado. Asimismo, el resumen *Puerta* está en verde, sin número, mientras que el resumen *Luz* es amarillo, con el número de luces encendidas.

> Conseil
>
> También puede cambiar el orden en el que se muestran los resúmenes arrastrando una línea hacia arriba o hacia abajo con el mouse.


## Configurar resúmenes de objetos

Una vez que la lista de resúmenes está disponible en la configuración de Jeedom, podemos usarlos en cada objeto.

Dentro **Herramientas → Objetos**, aquí en el objeto Salon :

{% include lightbox.html src="images/summary-object-1.jpg" data="settings" title="Abstracto objet" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Aquí tenemos dos partes :

### Configurar resúmenes

Las columnas de la tabla presentan cada tipo de resumen disponible en la configuración como se ve arriba. Para cada resumen, tres opciones :

- **Subir en el resumen global** : Aquí es donde se elige, para cada resumen, si el de este objeto debe tenerse en cuenta en el resumen general. Por ejemplo, aquí, el resumen *Obturador* du Salon está marcado, por lo que sube en el resumen global. Si miramos en el resumen general, en los 6 paneles abiertos que se muestran, están los del Show ! Por el contrario, si miramos el resumen *TempExt* (16,1 ° C en el resumen global), no está marcado, porque solo quiero devolver la temperatura del objeto Jardín en el resumen global.
- **Ocultar en el escritorio** : Para no mostrar este resumen junto al nombre del objeto en el Tablero.
- **Ocultar en el móvil** : Para no mostrar este resumen junto al nombre del objeto en el móvil.

### Órdenes de resúmenes

Cada pestaña representa un tipo de resumen definido en la configuración de Jeedom. Haga clic en **Agregar un pedido** para que se tenga en cuenta en el resumen. Tiene la opción de seleccionar el comando de cualquier equipo Jeedom, incluso si no tiene este objeto como padre.

Aquí vemos los tres componentes presentes en el resumen de este objeto. Y *Obturador* Al activarse en el resumen global, también se contabilizarán en este.

### Pestaña Resumen por dispositivo

Esta página le permite seleccionar los pedidos de resumen de otra manera : muestra todos los dispositivos que tienen el objeto como padre. En cada dispositivo, al hacer clic en él, se presenta la lista de comandos de información del dispositivo, con a la derecha los medios para asignar este comando a uno o más resúmenes del objeto.

Si al menos un resumen ya está definido, el selector aparece en naranja, con los tipos de resumen marcados a la derecha.

## Resúmenes y virtuales

Los resúmenes se mantienen con el [Complemento virtual](https://market.jeedom.com/index.php?v=d&p=market_display&id=21) una relación ambigua, no siempre fácil de entender, pero sin embargo muy poderosa, especialmente desde Core v4.2 y acciones sobre resumen ! Aún allí ? Continuamos...

Normalmente, ahora deberías haber creado algunos resúmenes sobre tus objetos y por lo tanto tener varias informaciones sobre tus objetos y en el resumen general, como tus contraventanas abiertas, tus luces, etc.

Estos resúmenes son sumamente prácticos para tener un estado general y visual del alojamiento de forma muy rápida y con solo pulsar un botón podrás actuar sobre él mostrando el equipamiento en un resumen. Pero si continuamos con el razonamiento, eso significa que esta información existe... Y que podríamos apreciar usarla en un escenario !

De hecho, dado que mi resumen sabe que tengo 3 luces encendidas, ¿por qué no poder probar en un escenario SI una luz está encendida? ? O incluso activar el escenario cuando se enciende una luz ? O incluso apagar todas las luces del salón con una sola acción ? Bueno, todo esto es posible vinculando un Virtual a un resumen !

Ir a **Configuración → Sistema → Configuración** luego en la pestaña **Resúmenes**.

En la línea *Luz*, en el extremo derecho, haga clic en el botón **Crear virtual**.

Ahora ve a **Complementos → Programación → Virtual**

Para cada objeto con comandos en el resumen *Luz*, ahora tiene un nuevo nombre virtual *Abstracto* con el objeto padre. También tienes un nuevo Virtual *Resumen total* sin objeto padre, correspondiente al resumen global de Jeedom.

Abriendo el Show Virtual y yendo a la pestaña **Pedidos**, esto es lo que encontramos :

{% include lightbox.html src="images/summary-virtual.jpg" data="settings" title="Virtuel résumé" imgstyle="width:auto;display: block;margin: 0 auto;" %}

- Un pedido **Información** *Luz* : Este tiene información del número de luces encendidas del Salón, ya que estamos en el Resumen Virtual del Salón.
- Un pedido **Acción** *Botón de luz encendida* : Al activar esta acción, activaremos todos los comandos de resumen **Luz**, aquí del objeto Salon.
- Un pedido **Acción** *Botón de luz Apagado Luz* : Al activar esta acción, desactivaremos todos los comandos de resumen **Luz**, aquí del objeto Salon.
etc.

Deberías haber entendido el principio ! Ahora tenemos disponible la información y acciones correspondientes para cada objeto, y para el resumen global, para cada resumen al que hemos vinculado un Virtual !

Ahora podemos usarlo como cualquier información o acción de un equipo real, en un escenario !

Por ejemplo :

- Un gatillo#[None][Global Summary][Movimiento]# > 0` que activará un escenario tan pronto como se detecte movimiento en el alojamiento.
- Una expresión IF#[Salon][Summary][Luz]# > 0 `que probará si hay una luz encendida en la sala de estar.
- Una acción '#[Salon][Summary][Obturador Shutter Button Slider]#`con valor 0 que cerrará todas las persianas del Show.

### Acciones sobre resúmenes

Como se vio anteriormente, Summary Virtuals no solo tiene la *Información* resúmenes, sino también *Acción* disponible en los distintos dispositivos configurados en resumen. Estas acciones son, por supuesto, accesibles en el escenario, pero también a través de la interfaz, desde los iconos de resumen aquí y allá !

Por ejemplo, si creó Resumen Virtuales para el resumen *Luz*, puede hacer Ctrl + clic en el icono de este resumen. A continuación aparecerá una ventana emergente con las diferentes acciones que te permitirán, por ejemplo, apagar todas las luces de la casa a la vez !

{% include lightbox.html src="images/summary-virtual-actions.jpg" data="settings" title="Acciones sobre resúmenes" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Como hemos visto, los resúmenes representan un tema vasto, que no siempre es muy fácil de comprender al comienzo de la vida de un jeedomiano, pero que es bueno conocer !
