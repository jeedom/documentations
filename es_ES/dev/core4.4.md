## Núcleo v4.4 | Desarrolladores de complementos

### Un día jQuery ...

jQuery es un marco que todavía se usa ampliamente en la interfaz web, y Jeedom históricamente depende en gran medida de él. A pesar de todo, html5 y los navegadores más recientes permiten cada vez más prescindir de él. El interés de Jeedom es sobre todo el rendimiento, y no se trata de eliminar jQuery y sus complementos (jQuery UI, contextmenu, modals, autocompletar, tablesorter, etc.).).

Pero hay que pensarlo, y empezar un día !

Núcleo 4.4 por lo tanto integra las funciones básicas setValues() y getValues(), que ahora también están prototipadas en el **Lista de nodos** y **Elemento**, comme elles le sont sur $.históricamente. También se han implementado algunas funciones como last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass(), hasClass(). El objetivo no es rehacer jQuery, por supuesto, sino ofrecer atajos funcionales cuando sea necesario.

Para una transición más fácil y un mejor mantenimiento, las nuevas funciones **getValues()** y **setValues()** en el DOM están ahora **setJeeValues()** y **getJeeValues()**.

Además, todas las llamadas **Ajax**, sincronizar o asíncrono, pasar por funciones js puras desarrolladas internamente para el Core. *load()* y *html()* por lo tanto, son utilizados por todas las clases js y por la función jeedomUtils.loadPage(). Esto le permite controlar todo lo que sucede sin una capa de abstracción y, entre otras cosas, ha hecho posible filtrar todos los scripts js y las hojas de estilo css provenientes de terceros (núcleo y complementos) para cargarlos en el documento.cabeza y no recargarlos después !

La administración de *eventos* también cambiará gradualmente a js puro. Las paginas **Síntesis** **Tablero** **Diseño** y **Texto** ya están en js completo con delegación de eventos.

Es un proyecto enorme, tanto en la reescritura de lo existente como en la creación de librerías internas para satisfacer las necesidades del front-end sin jQuery. Además, será necesario mantener jQuery y sus complementos/libs por un tiempo más para los complementos. Pero el camino está tomado!

Algunos ejemplos:

<details>

  <summary markdown="span">jQuery to pure js()</summary>

  ~~~ js
  {% raw %}
  //jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  //js puro:
  document.querySelector('#table_objectSummary tbody').insertAdjacentHTML('antes del final', tr)
  document.querySelectorAll('#table_objectSummary tbody tr').last().setJeeValues(_resumen, '.objectSummaryAttr')

  //jQuery:
  var eqId = $('.eqLogicAttr[data-l1key=id]').valor()
  var configuración = $('#config').getValues('.configKey')[0]
  var expresión = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

  //js puro:
  var eqId = document.querySelector('.eqLogicAttr[data-l1key="id"]').jeeValue()
  var config = documento.getElementById('config').getJeeValues('.configKey')[0]
  var expresión = this.closest('.actionOnMessage').getJeeValues('.expressionAttr')

  //jQuery:
  addMyTr: función(_datos) {
    var tr = ' <tr>'
    tr += ' <td>'
    tr += ' </td>'
    tr += ' </tr>'
    let nuevaFila = $(tr)
    newRow.setValues(data, '.mytrDataAttr')
    $('#table_stuff tbody').append(newRow)
    // devuelve fila nueva
  }

  //js puro:
  addMyTr: función(_datos) {
    var tr = ' <tr>'
    tr += ' <td>'
    tr += ' </td>'
    tr += ' </tr>'
    let newRow = document.createElement('tr')
    newRow.innerHTML = tr
    newRow.setJeeValues(_data, '.mytrDataAttr')
    document.getElementById('table_stuff').querySelector('tbody').appendChild(newRow)
    // devuelve fila nueva
  }

  //jQuery:
  $(function(){
    console.log('Dom listo!')
  })

  // Corejs:
  domUtils(función(){
    console.log('Dom listo!')
  })

  {% endraw %}
  ~~~

</details>

El archivo de plantilla de plugin.js y la mayoría de las páginas Core ahora usan estas funciones. Por supuesto, puede usarlos en complementos, pero estos deberán instalarse en un Core 4.4 o más.

Funciones DOM específicas del núcleo:

[DocCore js](/es_ES/dev/corejs/index)

[domUtils {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

#### Función PHP

`displayException()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

#### Funciones js (disponible desde Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toast / Información sobre herramientas

La liberación *brindando* ha sido eliminado de Core. Fue utilizado a través de funciones jeedomUtils.showAlert() y hideAlert() y ha sido reemplazada por la función Core interna jeeDialog.toast().

La lib Tooltipster, dependiente de jQuery, también ha sido reemplazada por la lib Tippy js. El uso de jeedomUtils.initTooltips() por complementos no cambia.

#### selector de fecha y hora de jQuery

La liberación *selector de fecha y hora* ha sido eliminado de Core. Fue utilizado a través de funciones jeedomUtils.datePickerInit() y dateTimePickerInit() y ha sido reemplazado por lib [recogedor](https://flatpickr.js.org/).

Las funciones principales gestionan el tema *recogedor* y el lenguaje de la lib de acuerdo con el lenguaje Core.

Como recordatorio:

<details>

  <summary markdown="span">date/time pickers</summary>

  ~~~
  {% raw %}
  <input id="myDate" class="in_datepicker"/>
  <input id="myTime" class="in_timepicker"/>
  <input id="myCustomDatetime"/>
  {% endraw %}
  ~~~

  ~~~ js
  {% raw %}
  jeedomUtils.datePickerInit() //Iniciar todo input.in_datepicker
  jeedomUtils.dateTimePickerInit() //Iniciar todo input.in_timepicker

  jeedomUtils.datePickerInit('Ymd H:i:00', '#myCustomDatetime') //Iniciará la entrada myCustomDatetime con formato personalizado
  {% endraw %}
  ~~~

</details>



### Deprecated

*Estas funciones devuelven un mensaje de error, pero aún funcionan:*

#### Funciones PHP:

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::porTypeAndSearchConfiguration()`  

#### Funciones js (disponible desde Core4.2):

`jeedom.eqLogic.buildSelectCmd` -> `jeedom.eqLogic.buildSelectCmd`  
`checkPageModified` -> `jeedomUtils.checkPageModified`  
`loadPage` -> `jeedomUtils.loadPage`  
`initPage` -> `jeedomUtils.initPage`  
`initTooltips` -> `jeedomUtils.initTooltips`  
`initTableSorter` -> `jeedomUtils.initTableSorter`  
`initHelp` -> `jeedomUtils.initHelp`  
`datePickerInit` -> `jeedomUtils.datePickerInit`  
`normTextLower` -> `jeedomUtils.normTextLower`  
`dormir` -> `jeedomUtils.dormir`  
`uniqId` -> `jeedomUtils.uniqId`  
`taAutosize` -> `jeedomUtils.taAutosize`  
`hexToRgb` -> `jeedomUtils.hexToRgb`  
`componentToHex` -> `jeedomUtils.componentToHex`  
`rgbToHex` -> `jeedomUtils.rgbToHex`  
`addOrUpdateUrl` -> `jeedomUtils.addOrUpdateUrl`  
`posiciónEqLogic` -> `jeedomUtils.positionEqLogic`  
`chooseIcon` -> `jeedomUtils.chooseIcon`  
`getOpenedModal` -> `jeedomUtils.getOpenedModal`  

#### Js variables (disponible desde Core4.3):

`jeedom_language` -> `jeeFrontEnd.language`  
`perfiles de usuario` -> `jeeFrontEnd.userProfils`

> **Observación**
>
> Estos cambios pueden resultar en la necesidad de montar la versión mínima requerida de Jeedom de muchos complementos. Esta es la razón por la cual el *Obsoleto* no aparecen en un Core en la rama maestra, pero permiten a los desarrolladores ver qué pueden corregir.

#### jQuery Autocompletar

La biblioteca de Autocompletar dependiente de jQuery se eliminará en una versión futura de Core. Se reemplaza por la función interna Core **entrada.jeeComplete()**. Esto es compatible con la mayoría de las opciones anteriores (fuente en ajax, etc.), pero corrige varios defectos, trae nuevos comportamientos (flecha arriba y abajo para seleccionar una propuesta, etc.) y permite usar un solo contenedor para varias entradas, reduciendo enormemente el impacto en el DOM, en particular sobre los escenarios.

<details>

  <summary markdown="span">jeeComplete()</summary>

  ~~~ js
  {% raw %}
  //jQuery:
  $('input.auto').autocomplete({
    minLength: 1,
    source: dataArray
  })

  // Corejs:
  documento.querySelector('input.auto').jeeComplete({
    minLength: 1,
    source: dataArray
  })
  {% endraw %}
  ~~~

</details>

#### caja de arranque de jQuery

La biblioteca de bootbox, que depende de jQuery, se eliminará en una versión futura de Core. jeeDialog() reemplaza estas funciones, con jeeDialog.alerta(), jeeDialog.confirm(), jeeDialog.prompt().

<details>

  <summary markdown="span">exemples jeeDialog()</summary>

  ~~~ js
  {% raw %}
  si (condición) {
    jeeDialog.alert('Esto está mal amigo!')
    return
  }

  jeeDialog.prompt('Ingrese el nuevo nombre:', función(resultado) {
    si (resultado !== null) {
      //Hacer cosas
    }
  })

  jeeDialog.confirm('¿Realmente desea eliminar este?', función(resultado) {
    si (resultado) {
      //Hacer cosas
    } más {
      //Hacer otras cosas
    }
  })

  {% endraw %}
  ~~~

</details>

#### interfaz de usuario de jQuery

La librería de jQuery UI se eliminará en una versión futura de Core. jeeDiálogo.dialog() reemplaza el uso de modales *ui-diálogo*.

<details>

  <summary markdown="span">exemples jeeDialog.diálogo()</summary>

  ~~~ js
  {% raw %}
  //jQueryUI:
  $('#md_modal').dialog({
    title: "{{Administracion del sistema}}"
  }).carga('index.php?v=d&modal=sistema.acción').dialog('abrir')

  //Núcleo jeeDialog:
  jeeDialog.diálogo({
    title: '{{Administracion del sistema}}',
    contentUrl: 'índice.php?v=d&modal=sistema.acción'
  })

  {% endraw %}
  ~~~

</details>

#### jQuery UI ordenable

La librería clasificable de jQuery se eliminará en una versión futura de Core.
Lib SortableJS se ha integrado en Core : [OrdenableJS](http://sortablejs.github.io/Sortable/)

#### intercalación de jQuery

El complemento jQuery *jquery.at.caret* queda obsoleto. Use `myElement.insertAtCursor(myString)`

#### menú contextual de jQuery

El contextMenu lib, que depende de jQuery, se eliminará en una versión futura de Core. jeeCtxMenu() reemplaza estas funciones.

<details>

  <summary markdown="span">jeeCtxMenu()</summary>

  ~~~ js
  {% raw %}
  var myCtxMenu = new jeeCtxMenu({
    selector: '.nav.nav-tabs li', //Obligatorio!
    appendTo: 'div#div_pageContainer',
    className: '', //Agregado al menucontainer
    items: {
      uniqueNameID: {
        name: '{{Mi artículo}}',
        isHtmlName: false,
        icon: 'fas fa engranajes',
        className: '', //Añadido al contenedor de artículos
        callback: function(key, opt) { //Devolución de llamada del artículo
        }
      },
      sep1: '-----',
    },
    callback: function(key, opt) { // Devolución de llamada predeterminada si no se establece en el elemento
    }
    //isDisable: false,
    /*
    events: {
      show: función (optar) {
      },
      hide: función (optar) {
      }
    },
    */
    /*
    build: función (disparador) {
      elementos de menú contextual var = {}
      devolver {
        callback: función (clave, opciones, evento) {
          //Configurar elementos...
        }
      },
      items: contextmenuitems
    },
    position: función(opc, x, y) {
    },
    */
  })

  {% endraw %}
  ~~~

</details>

#### jQuery FileUpload

La lib jQuery fileupload sera supprimée dans une future version du Core. jeeFileUploader() remplace l'utilisation de ces fonctions.

<details>

  <summary markdown="span">exemples jeeDialog.diálogo()</summary>

  ~~~ js
  {% raw %}
  //jQueryUI:
  $('#bt_uploadImage').fileupload({
    url: 'core/ajax/plan.ajax.php?action=uploadImage&id=' + id
    dataType: 'json',
    done: function(event, data) {
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
    done: function(event, data) {
      //Hacer cosas
    }
  })

  {% endraw %}
  ~~~

</details>

Ver [domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

> **Consejo**
>
> Puede probar sus complementos en Core sin Jquery o Bootstrap. Para ello, Ajustes > Sistema > Configuración, pestaña de equipos, **Corejs (desarrollo)**.

### Cambios opcionales

- Gestión de múltiples casillas de verificación

Se ha introducido una función en Core para proporcionar un menú contextual en las casillas de verificación : Seleccionar todo, Ninguno, Selección inversa.

Para usarlo, debes agregar la clase css *comprobar contexto* en las casillas de verificación correspondientes y llamar a la función ``jeedomUtils.setCheckContextMenu()``

Las casillas de verificación se agruparán por el mismo *datos-l1key* y *datos-l2key* si existen.

También puede hacer grupos de casillas de verificación con el atributo *contexto de datos = "grupo1"*.

Finalmente, puede definir una función de devolución de llamada como esta:

````js
var checkContextMenuCallback = function(_el) {
  //_el es un elemento html.
  _el.triggerEvent('cambiar')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

