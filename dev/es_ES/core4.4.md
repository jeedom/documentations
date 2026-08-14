## Core v4.4 | Desarrolladores de complementos

### Un día, jQuery...

jQuery es un framework que sigue siendo muy utilizado en interfaces web, y Jeedom se ha basado en gran medida en él desde sus inicios. A pesar de todo, el HTML5 y los navegadores recientes permiten prescindir cada vez más de él. El interés de Jeedom radica, ante todo, en el rendimiento, y todavía no se plantea eliminar jQuery y sus complementos (jQuery UI, contextmenu, las ventanas modales, autocomplete, tablesorter, etc.).

¡Pero hay que pensárselo y empezar algún día!

Por lo tanto, Core 4.4 integra las funciones básicas setValues() y getValues(), que ahora también están prototipadas en **NodeList** y **Element**, tal y como lo estaban históricamente en $.fn. También se han implementado algunas funciones como last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass() y hasClass(). El objetivo no es, por supuesto, recrear jQuery, sino ofrecer atajos funcionales cuando sea necesario.

Para facilitar la transición y mejorar el mantenimiento, las nuevas funciones **getValues()** y **setValues()** del DOM pasan a llamarse ahora **setJeeValues()** y **getJeeValues()**.

Además, todas las llamadas **Ajax**, ya sean sincrónicas o asincrónicas, pasan por funciones de JavaScript puro desarrolladas internamente para el Core. Por lo tanto, *load()* y *html()* son utilizadas por todas las clases de JavaScript y por la función jeedomUtils.loadPage(). Esto permite controlar todo lo que ocurre sin una capa de abstracción y, entre otras cosas, ha permitido filtrar todos los scripts de JavaScript y hojas de estilo CSS procedentes de terceros (núcleo y complementos) para cargarlos en el <head> del documento y evitar que se vuelvan a cargar posteriormente.

La gestión de los *eventos* también se irá trasladando progresivamente a JavaScript puro. Las páginas **Resumen**, **Panel de control**, **Diseño** y **Escenario** ya están totalmente en JavaScript con delegación de eventos.

Es un proyecto enorme, tanto por la reescritura del código existente como por la creación de bibliotecas internas que satisfagan las necesidades del front-end sin jQuery. Además, habrá que seguir utilizando jQuery y sus plugins y bibliotecas durante algún tiempo más para los plugins. ¡Pero ya hemos emprendido el camino!

Algunos ejemplos:

<details>

<summary markdown="span">jQuery a JavaScript puro()</summary>

~~~ js
{% raw %}
//jQuery:
$('#table_objectSummary tbody').append(tr)
$('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

//Puro JavaScript:
document.querySelector('#table_objectSummary tbody').insertAdjacentHTML('beforeend', tr)
document.querySelectorAll('#table_objectSummary tbody tr').last().setJeeValues(_summary, '.objectSummaryAttr')

//jQuery:
var eqId = $('.eqLogicAttr[data-l1key=id]').value()
var config = $('#config').getValues('.configKey')[0]
var expresión = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

//Puro JavaScript:
var eqId = document.querySelector('.eqLogicAttr[data-l1key="id"]').jeeValue()
var config = document.getElementById('config').getJeeValues('.configKey')[0]
var expresión = this.closest('.actionOnMessage').getJeeValues('.expressionAttr')

//jQuery:
addMyTr: function(_data) {
var tr = '<tr>'
tr += '<td>'
tr += '</td>'
tr += '</tr>'
let newRow = $(tr)
newRow.setValues(data, '.mytrDataAttr')
$('#table_stuff tbody').append(newRow)
//return newRow
}

//Puro JavaScript:
addMyTr: function(_data) {
var tr = '<tr>'
tr += '<td>'
tr += '</td>'
tr += '</tr>'
let newRow = document.createElement('tr')
newRow.innerHTML = tr
newRow.setJeeValues(_data, '.mytrDataAttr')
document.getElementById('table_stuff').querySelector('tbody').appendChild(newRow)
//return newRow
}

//jQuery:
$(function(){
console.log('¡Dom listo!')
})

//Core js:
domUtils(function(){
console.log('¡Dom listo!')
})

{% endraw %}
~~~

</details>

El archivo plugin-template.js y la mayoría de las páginas del Core utilizan ahora estas funciones. Por supuesto, puedes utilizarlas en los plugins, pero estos deberán estar instalados en un Core 4.4 como mínimo.

Funciones DOM propias de Core:

[Doc Core js](corejs/index)

[domUtils {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsoleto

#### Función PHP

`displayExeption()` -> `displayException()`
`convertDayEnToFr()` -> `convertDayFromEn()`

#### Funciones de JavaScript (disponibles a partir de Core 4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toastr / Tooltipster

La biblioteca *toastr* se ha eliminado del Core. Se utilizaba a través de las funciones jeedomUtils.showAlert() y hideAlert(), y ha sido sustituida por la función interna del Core jeeDialog.toast().

La biblioteca Tooltipster, que depende de jQuery, también se ha sustituido por la biblioteca Tippy.js. El uso de jeedomUtils.initTooltips() por parte de los complementos no cambia.

#### Selector de fecha y hora de jQuery

La biblioteca *datetimepicker* se ha eliminado del núcleo. Se utilizaba a través de las funciones jeedomUtils.datePickerInit() y dateTimePickerInit(), y ha sido sustituida por la biblioteca [flatpickr](https://flatpickr.js.org/).

Las funciones del Core gestionan el tema *flatpickr* y el idioma de la biblioteca en función del idioma del Core.

A modo de recordatorio:

<details>

<summary markdown="span">selectores de fecha y hora</summary>

~~~ html
{% raw %}
<input id="myDate" class="in_datepicker"/>
<input id="myTime" class="in_timepicker"/>
<input id="myCustomDatetime"/>
{% endraw %}
~~~

~~~ js
{% raw %}
jeedomUtils.datePickerInit() // Inicializa todos los campos de entrada «input.in_datepicker»
jeedomUtils.dateTimePickerInit() // Inicializa todos los campos de entrada «input.in_timepicker»

jeedomUtils.datePickerInit('Y-m-d H:i:00', '#myCustomDatetime') //Inicializará el campo de entrada «myCustomDatetime» con un formato personalizado
{% endraw %}
~~~

</details>



### Obsoleto

*Estas funciones devuelven un mensaje de error, pero siguen funcionando:*

#### Funciones de PHP:

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::byTypeAndSearchConfiguration()`

#### Funciones de JavaScript (disponibles a partir de Core 4.2):

`jeedom.eqLogic.builSelectCmd` -> `jeedom.eqLogic.buildSelectCmd`
`checkPageModified` -> `jeedomUtils.checkPageModified`
`loadPage` -> `jeedomUtils.loadPage`
`initPage` -> `jeedomUtils.initPage`
`initTooltips` -> `jeedomUtils.initTooltips`
`initTableSorter` -> `jeedomUtils.initTableSorter`
`initHelp` -> `jeedomUtils.initHelp`
`datePickerInit` -> `jeedomUtils.datePickerInit`
`normTextLower` -> `jeedomUtils.normTextLower`
`sleep` -> `jeedomUtils.sleep`
`uniqId` -> `jeedomUtils.uniqId`
`taAutosize` -> `jeedomUtils.taAutosize`
`hexToRgb` -> `jeedomUtils.hexToRgb`
`componentToHex` -> `jeedomUtils.componentToHex`
`rgbToHex` -> `jeedomUtils.rgbToHex`
`addOrUpdateUrl` -> `jeedomUtils.addOrUpdateUrl`
`positionEqLogic` -> `jeedomUtils.positionEqLogic`
`chooseIcon` -> `jeedomUtils.chooseIcon`
`getOpenedModal` -> `jeedomUtils.getOpenedModal`

#### Variables de JavaScript (disponibles a partir de Core 4.3):

`jeedom_langage` -> `jeeFrontEnd.language`
`userProfils` -> `jeeFrontEnd.userProfils`

> **Nota**
>
> Estos cambios pueden hacer que sea necesario actualizar a la versión mínima requerida de Jeedom para muchos complementos. Por eso, los complementos *deprecated* no aparecen en un Core de la rama «master», pero permiten a los desarrolladores ver qué pueden corregir.

#### Autocompletado con jQuery

La biblioteca Autocomplete, que depende de jQuery, se eliminará en una futura versión del Core. Se sustituye por la función interna del núcleo **input.jeeComplete()**. Esta función es compatible con la mayoría de las opciones anteriores (fuente mediante AJAX, etc.), pero corrige varios errores, aporta nuevos comportamientos (flechas arriba y abajo para seleccionar una sugerencia, etc.) y permite utilizar un único contenedor para varios campos de entrada, lo que reduce enormemente el impacto en el DOM, especialmente en los escenarios.

<details>

<summary markdown="span">jeeComplete()</summary>

~~~ js
{% raw %}
//jQuery:
$('input.auto').autocomplete({
minLength: 1,
fuente: dataArray
})

//Core js:
document.querySelector('input.auto').jeeComplete({
minLength: 1,
fuente: dataArray
})
{% endraw %}
~~~

</details>

#### jQuery Bootbox

La biblioteca bootbox, que depende de jQuery, se eliminará en una futura versión de Core. jeeDialog() sustituye a estas funciones, con jeeDialog.alert(), jeeDialog.confirm() y jeeDialog.prompt().

<details>

<summary markdown="span">ejemplos de jeeDialog()</summary>

~~~ js
{% raw %}
if (condición) {
jeeDialog.alert('¡Esto está mal, tío!')
volver
}

jeeDialog.prompt('Introduce un nuevo nombre:', function(result) {
if (resultado !== null) {
//Hacer cosas
}
})

jeeDialog.confirm('¿De verdad quieres eliminar esto?', function(result) {
if (resultado) {
//Hacer cosas
} else {
//Hacer otras cosas
}
})

{% endraw %}
~~~

</details>

#### jQuery UI

La biblioteca jQuery UI se eliminará en una futura versión del núcleo. jeeDialog.dialog() sustituye al uso de las ventanas modales *ui-dialog*.

<details>

<summary markdown="span">ejemplos de jeeDialog.dialog()</summary>

~~~ js
{% raw %}
//jQuery UI:
$('#md_modal').dialog({
título: «{{Administración del sistema}}»
}).load('index.php?v=d&modal=system.action').dialog('open')

//Core jeeDialog:
jeeDialog.dialog({
título: '{{Administración del sistema}}',
contentUrl: 'index.php?v=d&modal=system.action'
})

{% endraw %}
~~~

</details>

#### jQuery UI Sortable

La biblioteca jQuery Sortable se eliminará en una futura versión del núcleo.
La biblioteca SortableJS se ha integrado en el núcleo: [SortableJS](http://sortablejs.github.io/Sortable/)

#### Caret de jQuery

El plugin jQuery *jquery.at.caret* pasa a estar obsoleto. Utiliza `myElement.insertAtCursor(myString)`

#### jQuery contextMenu

La biblioteca contextMenu, que depende de jQuery, se eliminará en una futura versión del Core. jeeCtxMenu() sustituye a estas funciones.

<details>

<summary markdown="span">jeeCtxMenu()</summary>

~~~ js
{% raw %}
var myCtxMenu = new jeeCtxMenu({
selector: '.nav.nav-tabs li', //¡Obligatorio!
appendTo: 'div#div_pageContainer',
className: '', //Añadido al contenedor del menú
items: {
uniqueNameID: {
nombre: '{{Mi elemento}}',
isHtmlName: false,
icono: 'fas fa-cogs',
className: '', //Añadido al contenedor de elementos
callback: function(key, opt) { //Callback del elemento
}
},
sep1: '-----',
},
función de devolución de llamada: function(key, opt) { //Función de devolución de llamada predeterminada si no se ha establecido en el elemento
}
//isDisable: false,
/*
eventos: {
show: function(opt) {
},
hide: function(opt) {
}
},
*/
/*
build: function(trigger) {
var contextmenuitems = {}
return {
callback: function(key, options, event) {
//Configurar elementos...
}
},
elementos: elementos del menú contextual
},
posición: function(opt, x, y) {
},
*/
})

{% endraw %}
~~~

</details>

#### jQuery FileUpload

La biblioteca jQuery «fileupload» se eliminará en una futura versión del núcleo. La función jeeFileUploader() sustituye el uso de estas funciones.

<details>

<summary markdown="span">ejemplos de jeeDialog.dialog()</summary>

~~~ js
{% raw %}
//jQuery UI:
$('#bt_uploadImage').fileupload({
url: 'core/ajax/plan.ajax.php?action=uploadImage&id=' + id
dataType: 'json',
hecho: function(evento, datos) {
//Hacer cosas
}
})

//Core jeeFileUploader:
new jeeFileUploader({
fileInput: document.getElementById('bt_uploadImg'),
url: 'core/ajax/plan.ajax.php?action=uploadImage&id=' + id
/*
add: function(event, data) {
let currentPath = document.getElementById('bt_uploadImg').getAttribute('data-path')
data.url = 'core/ajax/jeedom.ajax.php?action=uploadImageIcon&filepath=' + currentPath
data.submit()
},
*/
hecho: function(evento, datos) {
//Hacer cosas
}
})

{% endraw %}
~~~

</details>

Ver [domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

> **Consejo**
>
> Puedes probar tus plugins en el Core sin jQuery ni Bootstrap. Para ello, ve a Ajustes > Sistema > Configuración, pestaña «Equipos», **Core js (dev)**.

### Modificaciones opcionales

- Gestión de casillas de selección múltiples

Se ha introducido una función en el Core para ofrecer un menú contextual en las casillas de selección: Seleccionar todo, Ninguno, Invertir selección.

Para utilizarlo, hay que añadir la clase CSS *checkContext* a las casillas de selección correspondientes y llamar a la función ``jeedomUtils.setCheckContextMenu()``

Las casillas de selección se agruparán entonces por el mismo *data-l1key* y *data-l2key*, si existen.

También puedes crear grupos de casillas de selección con el atributo *data-context="group1"*.

Por último, puedes definir una función de callback de la siguiente manera:

````js
var checkContextMenuCallback = function(_el) {
  //_el is an html element.
  _el.triggerEvent('change')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

