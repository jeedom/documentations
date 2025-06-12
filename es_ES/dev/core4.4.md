## Núcleo v4.4 | Desarrolladores de complementos

###  ...

. . .).

 !

. **** Y ****, comme elles le sont sur $.fn históricamente. También se han implementado algunas funciones como last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass(), hasClass(). El objetivo no es rehacer jQuery, por supuesto, sino ofrecer atajos funcionales cuando sea necesario.

Para una transición más sencilla y un mejor mantenimiento, las nuevas funciones **getValues()** Y **setValues()** en el DOM ahora están **setJeeValues()** Y **getJeeValues()**.

Además, todas las llamadas **Áyax**, sincronización o asíncrono, pasan por funciones js puras desarrolladas internamente para el núcleo. *load()* Y *html()* Por lo tanto, son utilizados por todas las clases js y por la función jeedomUtils.loadPage(). Esto permite controlar todo lo que sucede sin una capa de abstracción y, entre otras cosas, permite filtrar todos los scripts js y hojas de estilo css provenientes de terceros (núcleo y complementos) para cargarlos en el documento.cabeza y no recargarlos después !

Gestión de *eventos* También se moverá gradualmente a JS puro. Las páginas **Síntesis** **Panel** **Diseño** Y **Guión** Ya están en js completo con delegación de eventos.

Es un proyecto enorme, tanto en la reescritura del sistema existente como en la creación de bibliotecas internas para satisfacer las necesidades del front-end sin jQuery. Además, jQuery y sus complementos/bibliotecas deberán conservarse durante algún tiempo para los complementos. Pero el camino está tomado!

Algunos ejemplos:

<details>

  <summary markdown="span">jQuery to pure js()</summary>

  ~~~ js
  {% raw %}
  //jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  //Js puro:
  documento.querySelector('#table_objectSummary tbody').insertAdjacentHTML('antes de', tr)
  documento.querySelectorAll('#table_objectSummary tbody tr').last().setJeeValues(_summary, '.objectSummaryAttr')

  //jQuery:
  var eqId = $('.eqLogicAttr[data-l1key=id]').valor()
  var config = $('#config').getValues('.configKey')[0]
  var expresión = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

  //Js puro:
  var eqId = document.querySelector('.eqLogicAttr[data-l1key="id"]').jeeValue()
  var config = document.getElementById('config').getJeeValues('.configKey')[0]
  var expresión = this.closest('.actionOnMessage').getJeeValues('.expressionAttr')

  //jQuery:
  addMyTr: función(_datos) {
    var tr = '>'
    tr += '>'
    tr += '>'
    tr += '>'
    sea nuevaFila = $(tr)
    newRow.setValues(datos, '.mytrDataAttr')
    $('#table_stuff tbody').append(newRow)
    //devuelve nuevaFila
  }

  //Js puro:
  addMyTr: función(_datos) {
    var tr = '>'
    tr += '>'
    tr += '>'
    tr += '>'
    deje que newRow = document.createElement('tr')
    nuevaFila.innerHTML = tr
    newRow.setJeeValues(_data, '.mytrDataAttr')
    documento.getElementById('table_stuff').querySelector('tbody').appendChild(newRow)
    //devuelve nuevaFila
  }

  //jQuery:
  $(function(){
    console.log('Dom listo!')
  })

  //Js básico:
  domUtils(función(){
    console.log('Dom listo!')
  })

  {% endraw %}
  ~~~

</details>

El archivo de plantilla del complemento.js y la mayoría de las páginas principales ahora usan estas funciones. Por supuesto, puedes usarlos en complementos, pero luego deberán instalarse en un Core 4.4 mínimo.

Funciones DOM específicas del núcleo:

[Doc Core js](/es_ES/dev/corejs/index)

[domUtils {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[interfaz de usuario del dominio](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

#### Función PHP

`displayException()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

#### Funciones js (disponibles desde Core4.3)):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toastr / Tooltipster

La biblioteca *tostada* se ha eliminado del núcleo. Se utilizó a través de las funciones jeedomUtils.showAlert() y hideAlert() y ha sido reemplazado por la función interna Core jeeDialog.toast().

La biblioteca Tooltipster dependiente de jQuery también ha sido reemplazada por la biblioteca Tippy js. Usando jeedomUtils.initTooltips() de los complementos no cambia.

#### Selector de fecha y hora de jQuery

La biblioteca *selector de fecha y hora* se ha eliminado del núcleo. Se utilizó a través de las funciones jeedomUtils.datePickerInit() y dateTimePickerInit() y ha sido reemplazado por la biblioteca [recolector de planos](https://flatpickr.js.org/).

Las funciones principales gestionan el tema *recolector de planos* y el idioma de la biblioteca dependiendo del idioma del núcleo.

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

  ~~~ js
  {% raw %}
  jeedomUtils.datePickerInit() //Inicializa todas las entradas.in_datepicker
  jeedomUtils.dateTimePickerInit() //Inicializar todas las entradas.in_timepicker

  jeedomUtils.datePickerInit('Ymd H:i:00', '#myCustomDatetime') //Iniciará la entrada myCustomDatetime con formato personalizado
  {% endraw %}
  ~~~

</details>



### Deprecated

*Estas funciones devuelven un mensaje de error, pero siguen funcionando:*

#### Funciones PHP:

`eqLogic::porTypeAndSearhConfiguration()` -> `eqLogic::porTypeAndSearchConfiguration()`  

#### Funciones js (disponibles desde Core4.2)):

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
`chooseIcon` -> `jeedomUtils.chooseIcon`  
`getOpenedModal` -> `jeedomUtils.getOpenedModal`  

#### Variables js (disponibles desde Core4.3)):

`jeedom_language` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

> **Observó**
>
> Estos cambios pueden resultar en la necesidad de actualizar a la versión mínima requerida de Jeedom de muchos complementos. Por eso es que *obsoleto* no aparecen en un núcleo en la rama maestra, pero permiten a los desarrolladores ver qué pueden arreglar.

#### Autocompletar jQuery

La biblioteca Autocompletar dependiente de jQuery se eliminará en una futura versión de Core. Se reemplaza por la función interna del Núcleo **entrada.jeeComplete()**. Esto admite la mayoría de las opciones anteriores (fuente en ajax, etc.), pero corrige varias fallas, aporta nuevos comportamientos (flecha hacia arriba y hacia abajo para seleccionar una propuesta, etc.) y permite usar un solo contenedor para varias entradas, lo que reduce en gran medida el impacto en el DOM, especialmente en escenarios.

<details>

  <summary markdown="span">jeeComplete()</summary>

  ~~~ js
  {% raw %}
  //jQuery:
  $('input.auto').autocomplete({
    minLength: 1,
    source: dataArray
  })

  //Js básico:
  documento.querySelector('input.auto').jeeComplete({
    minLength: 1,
    source: dataArray
  })
  {% endraw %}
  ~~~

</details>

#### caja de arranque de jQuery

La biblioteca bootbox dependiente de jQuery se eliminará en una futura versión de Core. jeeDialog() reemplaza estas funciones con jeeDialog.alerta(), jeeDialog.confirmar(), jeeDialog.prompt().

<details>

  <summary markdown="span">exemples jeeDialog()</summary>

  ~~~ js
  {% raw %}
  si (condición) {
    jeeDialog.alert('Esto está mal, amigo'!')
    return
  }

  jeeDialog.prompt('Ingrese un nuevo nombre:', función(resultado) {
    si (resultado !== null) {
      //Hacer cosas
    }
  })

  jeeDialog.confirm('¿Realmente desea eliminar esto??', función(resultado) {
    si (resultado) {
      //Hacer cosas
    } demás {
      //Hacer otras cosas
    }
  })

  {% endraw %}
  ~~~

</details>

#### Interfaz de usuario jQuery

La biblioteca jQuery UI se eliminará en una versión futura de Core. jeeDialog.dialog() reemplaza el uso de modales *diálogo de interfaz de usuario*.

<details>

  <summary markdown="span">exemples jeeDialog.diálogo()</summary>

  ~~~ js
  {% raw %}
  //jQuery UI:
  $('#md_modal').dialog({
    title: "{{Administración del sistema}}"
  }).cargar('index.php?v=d&modal=system.action').dialog('abrir')

  //Núcleo de jeeDialog:
  jeeDialog.diálogo({
    title: '{{Administración del sistema}}',
    contentUrl: 'índice.php?v=d&modal=sistema.acción'
  })

  {% endraw %}
  ~~~

</details>

#### jQuery UI Ordenable

La biblioteca jQuery Sortable se eliminará en una versión futura de Core.
La biblioteca SortableJS se ha integrado en el núcleo : [SortableJS](http://sortablejs.github.io/Sortable/)

#### cursor de jQuery

El complemento jQuery *jquery.at.caret* queda obsoleto. Utilice `myElement.insertAtCursor(myString)`

#### Menú contextual de jQuery

La biblioteca contextMenu dependiente de jQuery se eliminará en una futura versión de Core. jeeCtxMenu() reemplaza estas funciones.

<details>

  <summary markdown="span">jeeCtxMenu()</summary>

  ~~~ js
  {% raw %}
  var myCtxMenu = nuevo jeeCtxMenu({
    selector: '.nav.nav-tabs li', //Obligatorio!
    appendTo: 'div#div_pageContainer',
    className: '', //Añadido al contenedor del menú
    items: {
      uniqueNameID: {
        name: '{{Mi articulo}}',
        isHtmlName: false,
        icon: 'fas fa-cogs',
        className: '', //Añadido al contenedor de artículos
        callback: 
        }
      },
      sep1: '-----',
    },
    callback: 
    }
    //isDisable: false,
    /*
    events: {
      show: ) {
      },
      hide: ) {
      }
    },
    */
    /*
    build: ) {
       = {}
      devolver {
        callback: ) {
          ...
        }
      },
      items: contextmenuitems
    },
    position: ) {
    },
    */
  })

  {% endraw %}
  ~~~

</details>

#### 

. .

<details>

  <summary markdown="span">exemples jeeDialog.diálogo()</summary>

  ~~~ js
  {% raw %}
  //jQuery UI:
  $('#bt_uploadImage').fileupload({
    url: '?
    dataType: 'json',
    done: ) {
      //Hacer cosas
    }
  })

  :
  ({
    fileInput: '),
    url: '?
    /*
    add: ) {
      ')
      ?
      ()
    },
    */
    done: ) {
      //Hacer cosas
    }
  })

  {% endraw %}
  ~~~

</details>

Ver [interfaz de usuario del dominio](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

> ****
>
> . , **)**.

### 

- 

 : .

 **  ``jeedomUtils.setCheckContextMenu()``

 ** Y ** .

 *"*.

:

````js
) {
  .
  ')
}
)
````

