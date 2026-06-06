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

  <summary markdown="span">jQuery to pure js()</summary>

  
  {% raw %}
  //jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  :
  ').)
  ().')

  //jQuery:
  ()
  ]
  ')

  :
  ()
  ]
  ')

  //jQuery:
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

  //jQuery:
  $(function(){
    !')
  })

  :
  (){
    !')
  })

  {% endraw %}
  

</details>

.. ..

:

[](/es_ES/dev/corejs/index)

[ {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

#### 

  


#### ):



#### 

 ** . .().

. ..

#### 

 ** . . [](https://flatpickr.js.org/).

 ** .

:

<details>

  <summary markdown="span">date/time pickers</summary>

  
  {% raw %}
  <input id="myDate" class="in_datepicker"/>
  <input id="myTime" class="in_timepicker"/>
  <input id="myCustomDatetime"/>
  {% endraw %}
  

  
  {% raw %}
  
  

  :i:
  {% endraw %}
  

</details>



### Deprecated

*:*

#### :

`eqLogic::::  

#### ):

  
  
  
  
  
  
  
  
  
  
`uniqId` -> `jeedomUtils.uniqId`  
`taAutosize` -> `jeedomUtils.taAutosize`  
`hexToRgb` -> `jeedomUtils.hexToRgb`  
`componentToHex` -> `jeedomUtils.componentToHex`  
`rgbToHex` -> `jeedomUtils.rgbToHex`  
`addOrUpdateUrl` -> `jeedomUtils.addOrUpdateUrl`  
`positionEqLogic` -> `jeedomUtils.positionEqLogic`  
`chooseIcon` -> `jeedomUtils.chooseIcon`  
`getOpenedModal` -> `jeedomUtils.getOpenedModal`  

#### Variables de JavaScript (disponibles desde Core 4.3)):

`jeedom_langage` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

> **Observó**
>
> Estos cambios pueden requerir la actualización a la versión mínima de Jeedom necesaria para muchos complementos. Por eso el *obsoleto* No aparecen en un Core en la rama principal, pero permiten a los desarrolladores ver qué pueden arreglar.

#### Autocompletado de jQuery

La biblioteca Autocomplete, que depende de jQuery, se eliminará en una futura versión de Core. Se reemplaza por la función interna del núcleo **input.jeeComplete()**. Esta versión es compatible con la mayoría de las opciones anteriores (fuente a través de AJAX, etc.), pero corrige varios fallos, introduce nuevos comportamientos (flechas arriba y abajo para seleccionar una sugerencia, etc.) y permite el uso de un único contenedor para múltiples entradas, lo que reduce considerablemente el impacto en el DOM, especialmente en ciertos escenarios.

<details>

  <summary markdown="span">jeeComplete()</summary>

  
  {% raw %}
  //jQuery:
  $('input.auto').autocomplete({
    minLength: 1,
    source: dataArray
  })

  :
  document.querySelector('input.auto').jeeComplete({
    minLength: 1,
    source: dataArray
  })
  {% endraw %}
  

</details>

#### Caja de arranque jQuery

La biblioteca bootbox, que depende de jQuery, se eliminará en una futura versión del núcleo. jeeDialog() reemplaza estas funciones, con jeeDialog.alert(), jeeDialog.confirmar(), jeeDialog.prompt().

<details>

  <summary markdown="span">exemples jeeDialog()</summary>

  
  {% raw %}
  si (condición) {
    jeeDialog.alert('Esto está mal, amigo!')
    return
  }

  jeeDialog.prompt('Ingrese un nuevo nombre'):', función(resultado)) {
    si (resultado !== null) {
      //Haz cosas
    }
  })

  jeeDialog.confirm('¿De verdad quieres eliminar esto??', función(resultado)) {
    si (resultado) {
      //Haz cosas
    } demás {
      Haz otras cosas
    }
  })

  {% endraw %}
  

</details>

#### Interfaz de usuario jQuery

La biblioteca jQuery UI se eliminará en una futura versión del núcleo. jeeDialog.dialog() reemplaza el uso de modales *diálogo de interfaz de usuario*.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  
  {% raw %}
  //jQuery UI:
  $('#md_modal').dialog({
    title: "{{Administración del sistema}}"
  }).cargar('index.php?v=d&modal=system.action').dialog('abrir'')

  //Diagrama principal de jee:
  jeeDialog.dialog({
    title: '{{Administración del sistema}}',
    contentUrl: 'index.php?v=d&modal=sistema.acción'
  })

  {% endraw %}
  

</details>

#### Ordenable con jQuery UI

La biblioteca jQuery Sortable se eliminará en una futura versión del núcleo.
La biblioteca SortableJS se ha integrado en el núcleo : [SortableJS](http://sortablejs.github.io/Sortable/)

#### jQuery Caret

El complemento jQuery *jquery.at.caret* obsoleto. Utilice `myElement.insertAtCursor(myString)`

#### Menú contextual de jQuery

La biblioteca contextMenu, que depende de jQuery, se eliminará en una futura versión de Core. jeeCtxMenu() reemplaza estas funciones.

<details>

  <summary markdown="span">jeeCtxMenu()</summary>

  
  {% raw %}
  var myCtxMenu = nuevo jeeCtxMenu({
    selector: '.nav.nav-tabs li', //Requerido!
    appendTo: 'div#div_pageContainer',
    className: '', //Añadido al contenedor del menú
    items: {
      uniqueNameID: {
        name: '{{Mi artículo}}',
        isHtmlName: false,
        icon: 'fas fa-cogs',
        className: '', //Añadido al contenedor de elementos
        callback: función(clave, opt) { //Devolución de llamada del elemento
        }
      },
      sep1: '-----',
    },
    callback: función(clave, opción) { //Función de devolución de llamada predeterminada si no se establece en el elemento
    }
    //isDisable: false,
    /*
    events: {
      show: función(opt) {
      },
      hide: función(opt) {
      }
    },
    */
    /*
    build: función(disparador)) {
      var contextmenuitems = {}
      devolver {
        callback: función(clave, opciones, evento)) {
          //Establecer elementos...
        }
      },
      items: contextmenuitems
    },
    position: ) {
    },
    */
  })

  {% endraw %}
  

</details>

#### 

. .

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  
  {% raw %}
  //jQuery UI:
  $('#bt_uploadImage').fileupload({
    url: '?
    dataType: 'json',
    done: ) {
      //Haz cosas
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
      //Haz cosas
    }
  })

  {% endraw %}
  

</details>

 [](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

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

