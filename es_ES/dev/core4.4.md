## Núcleo v4.4 | Desarrolladores de complementos

### Un día, jQuery ...

jQuery es un marco que todavía se usa ampliamente en interfaces web, y Jeedom históricamente ha dependido en gran medida de él. A pesar de todo, HTML5 y los navegadores más recientes permiten cada vez más prescindir de él. El interés de Jeedom es sobre todo el rendimiento, y todavía no se trata de eliminar jQuery y sus complementos (jQuery UI, menú contextual, modales, autocompletar, clasificador de tablas, etc.).

Pero hay que pensarlo y empezar algún día !

El núcleo 4.4 integra por lo tanto las funciones básicas setValues() y getValues(), que ahora también están prototipadas en el **Lista de nodos** Y **Elemento**, comme elles le sont sur $.históricamente. También se han implementado algunas funciones como last(), triggerEvent(), isHidden(), vacío(), addClass(), removeClass(), toggleClass(), hasClass(). El objetivo no es rehacer jQuery, por supuesto, sino ofrecer atajos funcionales cuando sea necesario.

Para una transición más fácil y un mejor mantenimiento, las nuevas funciones **getValues()** Y **setValues()** en el DOM están ahora **setJeeValues()** Y **getJeeValues()**.

Además, todas las llamadas **Áyax**, sync o async, pasa por funciones js puras desarrolladas internamente para Core. *load()* Y *html()* por lo tanto, son utilizados por todas las clases js y por la función jeedomUtils.loadPage(). Esto permite controlar todo lo que sucede sin una capa de abstracción y, entre otras cosas, permite filtrar todos los scripts js y hojas de estilo css provenientes de terceros (núcleo y complementos) para cargarlos en el documento.cabeza y no recargarlos después !

La gestión de *eventos* también pasará gradualmente a js puro. Las paginas **Síntesis** **Panel** **Diseño** Y **Guión** ya estan en full js con delegación de eventos.

Es un proyecto enorme, tanto para reescribir el existente como para crear bibliotecas internas para satisfacer las necesidades del front-end sin jQuery. Además, será necesario mantener jQuery y sus complementos/libras por un tiempo más para los complementos. Pero el camino está tomado!

Algunos ejemplos:

<details>

  <summary markdown="span">jQuery to pure js()</summary>

  ~~~js
  {% raw %}
  //jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  // js puro:
  document.querySelector('#table_objectSummary tbody').insertAdjacentHTML('antes del fin', tr)
  document.querySelectorAll('#table_objectSummary tbody tr').último().setJeeValues(_summary, '.objectSummaryAttr')

  //jQuery:
  var eqId = $('.eqLogicAttr[data-l1key=id]').valor()
  var configuración = $('#config').getValues('.configKey')[0]
  var expresión = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

  // js puro:
  var eqId = document.querySelector('.eqLogicAttr[data-l1key="id"]').jeeValue()
  var config = document.getElementById('config').getJeeValues('.configKey')[0]
  var expresión = this.closest('.actionOnMessage').getJeeValues('.expressionAttr')

  //jQuery:
  addMyTr: función (_datos) {
    vartr='>'
    tr+='>'
    tr+= '>'
    tr+= '>'
    dejar nuevaFila = $(tr)
    newRow.setValues(datos, '.mytrDataAttr')
    $('#table_stuff tbody').append(newRow)
    //devuelve nuevafila
  }

  // js puro:
  addMyTr: función (_datos) {
    vartr='>'
    tr+='>'
    tr+= '>'
    tr+= '>'
    let newRow = document.createElement('tr')
    nuevaFila.innerHTML = tr
    newRow.setJeeValues(_data, '.mytrDataAttr')
    document.getElementById('table_stuff').querySelector('tbody').appendChild(newRow)
    //devuelve nuevafila
  }

  //jQuery:
  $(function(){
    console.log('Dom listo!')
  })

  // Núcleo js:
  domUtils(función(){
    console.log('Dom listo!')
  })

  {% endraw %}
  ~~~

</details>

El archivo de plantilla de complemento.js y la mayoría de las páginas principales ahora usan estas funciones. Por supuesto, puedes usarlos en complementos, pero luego debes instalarlos en un Core 4.4 mínimo.

Funciones DOM específicas del núcleo:

[Doc Core js](/es_ES/dev/corejs/index)

[domUtils {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[DOMUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

#### Función php

`displayExeption()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

#### Funciones js (disponibles desde Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toastr / Información sobre herramientas

La biblioteca *tostada* fue eliminado del núcleo. Fue utilizado a través de funciones jeedomUtils.showAlert() y hideAlert() y fue reemplazado por la función interna Core jeeDialog.toast().

La biblioteca Tooltipster, que depende de jQuery, también ha sido reemplazada por la biblioteca Tippy js. Usando jeedomUtils.initTooltips() por complementos no cambia.

#### jQuery selector de fecha y hora

La biblioteca *selector de fecha y hora* fue eliminado del núcleo. Fue utilizado a través de funciones jeedomUtils.datePickerInit() y dateTimePickerInit() y fue reemplazado por la biblioteca [recogedor plano](https://flatpickr.js.org/).

Las funciones principales gestionan el tema *recogedor plano* y el idioma de la lib dependiendo del idioma del Core.

Como recordatorio:

<details>

  <summary markdown="span">date/time pickers</summary>

  ~~~ html
  {% raw %}
  <input id="myDate" class="in_datepicker"/>
  <input id="myTime" class="in_timepicker"/>
  <input id="myCustomDatetime"/>
  {% endraw %}
  ~~~

  ~~~js
  {% raw %}
  jeedomUtils.datePickerInit() //Inicia todo input.in_datepicker
  jeedomUtils.dateTimePickerInit() //Inicia todo input.in_timepicker

  jeedomUtils.datePickerInit('Ymd H:i:00', '#myCustomDatetime') //Iniciará la entrada myCustomDatetime con formato personalizado
  {% endraw %}
  ~~~

</details>



### Deprecated

*Estas funciones devuelven un mensaje de error, pero aún funcionan:*

#### Funciones PHP:

`eqLogic::porTypeAndSearhConfiguration()` -> `eqLogic::porTypeAndSearchConfiguration()`  

#### Funciones js (disponibles desde Core4.2):

`jeedom.eqLogic.builSelectCmd` -> `jeedom.eqLogic.buildSelectCmd`  
`checkPageModified` -> `jeedomUtils.checkPageModified`  
`loadPage` -> `jeedomUtils.loadPage`  
`initPage` -> `jeedomUtils.initPage`  
`initTooltips` -> `jeedomUtils.initTooltips`  
`initTableSorter` -> `jeedomUtils.initTableSorter`  
`initHelp` -> `jeedomUtils.initHelp`  
`datePickerInit` -> `jeedomUtils.datePickerInit`  
`normTextLower` -> `jeedomUtils.normTextLower`  
`dormir` -> `jeedomUtils.sleep`  
`uniqId` -> `jeedomUtils.uniqId`  
`taAutosize` -> `jeedomUtils.taAutosize`  
`hexToRgb` -> `jeedomUtils.hexToRgb`  
`componentToHex` -> `jeedomUtils.componentToHex`  
`rgbToHex` -> `jeedomUtils.rgbToHex`  
`addOrUpdateUrl` -> `jeedomUtils.addOrUpdateUrl`  
`positionEqLogic` -> `jeedomUtils.positionEqLogic`  
`elegirIcon` -> `jeedomUtils.elegirIcon`  
`getOpenedModal` -> `jeedomUtils.getOpenedModal`  

#### Variables js (disponibles desde Core4.3):

`jeedom_language` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

> **Observó**
>
> Estos cambios pueden resultar en la necesidad de montar la versión Jeedom mínima requerida de muchos complementos. Esta es la razón por la que *obsoleto* no aparecen en un Core en la rama maestra, pero permiten a los desarrolladores ver qué pueden corregir.

#### Autocompletar jQuery

La biblioteca Autocompletar, que depende de jQuery, se eliminará en una versión futura de Core. Se reemplaza por la función interna del Core **input.jeeCompleto()**. Esto soporta la mayoría de las opciones anteriores (fuente en ajax, etc.), pero corrige varios defectos, trae nuevos comportamientos (flechas arriba y abajo para seleccionar una propuesta, etc.) y permite el uso de un solo contenedor para varias entradas, reduciendo enormemente el impacto en el DOM, en particular en los escenarios.

<details>

  <summary markdown="span">jeeComplete()</summary>

  ~~~js
  {% raw %}
  //jQuery:
  $('input.auto').autocomplete({
    minLength: 1,
    source: dataArray
  })

  // Núcleo js:
  document.querySelector('input.auto').jeeComplete({
    minLength: 1,
    source: dataArray
  })
  {% endraw %}
  ~~~

</details>

#### caja de arranque jQuery

La biblioteca de arranque, que depende de jQuery, se eliminará en una versión futura de Core. jeeDialog() reemplaza estas funciones, con jeeDialog.alerta(), jeeDialog.confirmar(), jeeDialog.prompt().

<details>

  <summary markdown="span">exemples jeeDialog()</summary>

  ~~~js
  {% raw %}
  si (condición) {
    jeeDialog.alert('Esto está mal amigo!')
    return
  }

  jeeDialog.prompt('Ingrese nuevo nombre:', función (resultado) {
    si (resultado !== null) {
      //Hacer cosas
    }
  })

  jeeDialog.confirm('¿Realmente quieres eliminar esto??', función (resultado) {
    si (resultado) {
      //Hacer cosas
    } demás {
      //Hacer otras cosas
    }
  })

  {% endraw %}
  ~~~

</details>

#### interfaz de usuario jQuery

La biblioteca jQuery UI se eliminará en una futura versión Core. jeeDiálogo.dialog() anula el uso de modales *diálogo-ui*.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  ~~~js
  {% raw %}
  // interfaz de usuario jQuery:
  $('#md_modal').dialog({
    title: "{{Administración del sistema}}"
  }).cargar('index.php?v=d&modal=system.action').dialog('abrir')

  //Diálogo principal de jee:
  jeeDialog.dialog({
    title: '{{Administración del sistema}}',
    contentUrl: 'index.php?v=d&modal=sistema.acción'
  })

  {% endraw %}
  ~~~

</details>

#### jQuery UI ordenable

La biblioteca jQuery Sortable se eliminará en una futura versión Core.
SortableJS Lib se ha integrado en Core : [OrdenableJS](http://sortablejs.github.io/Sortable/)

#### cursor de jQuery

El complemento jQuery *jquery.at.caret* va a estar obsoleto. Utilice `myElement.insertAtCursor(myString)`

#### Menú contextual de jQuery

La biblioteca contextMenu, que depende de jQuery, se eliminará en una versión futura de Core. jeeCtxMenu() anula estas funciones.

<details>

  <summary markdown="span">jeeCtxMenu()</summary>

  ~~~js
  {% raw %}
  var myCtxMenu = nuevo jeeCtxMenu({
    selector: '.nav.nav-tabs li', //Obligatorio!
    appendTo: 'div#div_pageContenedor',
    className: '', //Añadido al contenedor del menú
    items: {
      uniqueNameID: {
        name: '{{Mi artículo}}',
        isHtmlName: false,
        icon: 'fas fa-cogs',
        className: '', //Agregado al contenedor de elementos
        callback: function(key, opt) { //Devolución de llamada del elemento
        }
      },
      sep1: '-----',
    },
    callback: function(key, opt) { //Devolución de llamada predeterminada si no está configurada en el elemento
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
      var elementos del menú contextual = {}
      devolver {
        callback: función (tecla, opciones, evento) {
          //Establecer elementos...
        }
      },
      items: contextmenuitems
    },
    position: función (optar, x, y) {
    },
    */
  })

  {% endraw %}
  ~~~

</details>

#### Carga de archivos jQuery

La biblioteca jQuery fileupload se eliminará en una futura versión Core. jeeFileUploader() reemplaza el uso de estas funciones.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  ~~~js
  {% raw %}
  // interfaz de usuario jQuery:
  $('#bt_uploadImage').fileupload({
    url: 'núcleo/ajax/plan.ajax.php?acción=cargarImagen&id=' + id
    dataType: 'json',
    done: función (evento, datos) {
      //Hacer cosas
    }
  })

  //Núcleo jeeFileUploader:
  nuevo jeeFileUploader({
    fileInput: document.getElementById('bt_uploadImg'),
    url: 'núcleo/ajax/plan.ajax.php?acción=cargarImagen&id=' + id
    /*
    add: función (evento, datos) {
      let currentPath = document.getElementById('bt_uploadImg').getAttribute('ruta-datos')
      datos.url = 'core/ajax/jeedom.ajax.php?acción=uploadImageIcon&filepath=' + rutaactual
      datos.enviar()
    },
    */
    done: función (evento, datos) {
      //Hacer cosas
    }
  })

  {% endraw %}
  ~~~

</details>

Ver [DOMUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

> **Consejo**
>
> Puedes probar tus complementos en Core sin Jquery o Bootstrap. Para ello, Ajustes > Sistema > Configuración, pestaña Equipo, **Core js (desarrollador)**.

### Modificaciones opcionales

- Administrar múltiples casillas de verificación

Se ha introducido una función en Core para ofrecer un menú contextual en las casillas de verificación : Seleccionar todo, ninguno, selección inversa.

Para usarlo, debes agregar la clase css *comprobar contexto* en las casillas de verificación correspondientes y llame a la función ``jeedomUtils.setCheckContextMenu()``

Las casillas de verificación se agruparán por el mismo *datos-l1key* Y *datos-l2key* si existen.

También puedes hacer grupos de checkboxes con el atributo *contexto-datos="grupo1"*.

Finalmente, puedes definir una función de devolución de llamada como esta:

````js
var checkContextMenuCallback = función (_el) {
  //_el es un elemento html.
  _el.triggerEvent('cambiar')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

