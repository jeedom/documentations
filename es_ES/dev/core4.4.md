## .4 | 

###  ...

. . .).

 !

. ****  ****, comme elles le sont sur $.. (). .

 **getValues()**  **setValues()**  **setJeeValues()**  **getJeeValues()**.

 ****, . *load()*  *html()* (). . !

 ** .  **** **** ****  **** .

. . !

:

<details>

  <summary markdown="span">jQuery to pure js()<summary>

  
  {% raw %}
  jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  :
  ').)
  ().')

  jQuery:
  ()
  ]
  ')

  :
  ()
  ]
  ')

  jQuery:
  addMyTr: ) {
    >'
    >'
    >'
    >'
    )
    ')
    $('#table_stuff tbody').append(newRow)
    
  }

  :
  addMyTr: ) {
    >'
    >'
    >'
    >'
    ')
    
    ')
    )
    
  }

  jQuery:
  $(function(){
    !')
  })

  :
  (){
    !')
  })

  {% endraw %}
  

<details>

.. ..

:

[](/es_ES/devcorejsindex)

[ {}](https:github.comjeedomcoreblobalphacoredomdom.utils.js)

[](https:github.comjeedomcoreblobalphacoredomdom.ui.js)



### Obsolete

#### 

  


#### ):



#### 

 ** . .().

. ..

#### 

 ** . . [](https:flatpickr.js.org).

 ** .

:

<details>

  <summary markdown="span">datetime pickers<summary>

  
  {% raw %}
  <input id="myDate" class="in_datepicker">
  <input id="myTime" class="in_timepicker">
  <input id="myCustomDatetime">
  {% endraw %}
  

  
  {% raw %}
  
  

  :i:
  {% endraw %}
  

<details>



### Deprecated

*:*

#### :

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

#### Variables js (disponibles desde Core 4.3)):

`jeedom_langage` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

> **Observó**
>
> Estos cambios pueden generar la necesidad de actualizar a la versión mínima requerida de Jeedom de muchos complementos. Por eso es que *obsoleto* no aparecen en una rama maestra de Core, pero permiten a los desarrolladores ver qué pueden solucionar.

#### Autocompletar jQuery

La biblioteca Autocompletar dependiente de jQuery se eliminará en una futura versión de Core. Se reemplaza por la función interna del Núcleo **entrada.jeeComplete()**. Esto admite la mayoría de las opciones anteriores (fuente en ajax, etc.), pero corrige varias fallas, aporta nuevos comportamientos (flecha hacia arriba y hacia abajo para seleccionar una propuesta, etc.) y permite usar un solo contenedor para varias entradas, lo que reduce en gran medida el impacto en el DOM, especialmente en escenarios.

<details>

  <summary markdown="span">jeeComplete()<summary>

  
  {% raw %}
  jQuery:
  $('input.auto').autocomplete({
    minLength: 1,
    source: dataArray
  })

  :
  documento.querySelector('input.auto').jeeComplete({
    minLength: 1,
    source: dataArray
  })
  {% endraw %}
  

<details>

#### caja de arranque jQuery

La biblioteca bootbox dependiente de jQuery se eliminará en una futura versión de Core. jeeDialog() reemplaza estas funciones con jeeDialog.alerta(), jeeDialog.confirmar(), jeeDialog.prompt().

<details>

  <summary markdown="span">exemples jeeDialog()<summary>

  
  {% raw %}
  si (condición) {
    jeeDialog.alert('Esto está mal, amigo'!')
    return
  }

  jeeDialog.prompt('Ingrese el nuevo nombre:', función(resultado) {
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
  

<details>

#### Interfaz de usuario jQuery

La biblioteca jQuery UI se eliminará en una versión futura de Core. jeeDialog.dialog() reemplaza el uso de modales *diálogo de interfaz de usuario*.

<details>

  <summary markdown="span">exemples jeeDialog.diálogo()<summary>

  
  {% raw %}
  //jQuery UI:
  $('#md_modal').dialog({
    title: "{{Administración del sistema}}"
  }).cargar('index.php?v=d&modal=system.action').dialog('abrir')

  //Núcleo jeeDialog:
  jeeDialog.diálogo({
    title: '{{Administración del sistema}}',
    contentUrl: 'índice.php?v=d&modal=sistema.acción'
  })

  {% endraw %}
  

<details>

#### jQuery UI Ordenable

La biblioteca jQuery Sortable se eliminará en una versión futura de Core.
La biblioteca SortableJS se ha integrado en el núcleo : [SortableJS](http:sortablejs.github.ioSortable)

#### cursor de jQuery

El complemento jQuery *jquery.at.caret* queda obsoleto. Utilice `myElement.insertAtCursor(myString)`

#### Menú contextual de jQuery

La biblioteca contextMenu dependiente de jQuery se eliminará en una futura versión de Core. jeeCtxMenu() reemplaza estas funciones.

<details>

  <summary markdown="span">jeeCtxMenu()<summary>

  
  {% raw %}
  var myCtxMenu = nuevo jeeCtxMenu({
    selector: '.nav.nav-tabs li', //Obligatorio!
    appendTo: 'div#div_pageContenedor',
    className: '', //Añadido al contenedor del menú
    items: {
      uniqueNameID: {
        name: '{{Mi articulo}}',
        isHtmlName: false,
        icon: 'fas fa-cogs',
        className: '', //Añadido al contenedor del artículo
        callback: 
        }
      },
      sep1: '-----',
    },
    callback: 
    }
    isDisable: false,
    *
    events: {
      show: ) {
      },
      hide: ) {
      }
    },
    *
    *
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
    *
  })

  {% endraw %}
  

<details>

#### 

. .

<details>

  <summary markdown="span">exemples jeeDialog.diálogo()<summary>

  
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
    *
    add: ) {
      ')
      ?
      ()
    },
    *
    done: ) {
      //Hacer cosas
    }
  })

  {% endraw %}
  

<details>

 [](https:github.comjeedomcoreblobalphacoredomdom.ui.js)

> ****
>
> . , **)**.

### 

- 

 : .

 **  ``jeedomUtils.setCheckContextMenu()``

 **  ** .

 *"*.

:

````js
) {
  .
  ')
}
)
````

