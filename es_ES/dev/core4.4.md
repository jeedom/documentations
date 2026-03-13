## .4 | 

###  ...

. . .).

 !

. **** Y ****, comme elles le sont sur $.históricamente. También se han implementado varias funciones, como last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass() y hasClass()(). El objetivo no es recrear jQuery, por supuesto, sino ofrecer atajos funcionales cuando sea necesario.

Para una transición más sencilla y un mejor mantenimiento, las nuevas funciones **getValues()** Y **setValues()** en el DOM ahora son **setJeeValues()** Y **getJeeValues()**.

Además, todas las llamadas **Áyax**, Ya sean síncronas o asíncronas, utilizan funciones JavaScript puras desarrolladas internamente para el núcleo. *load()* Y *html()* Por lo tanto, son utilizadas por todas las clases JS y por la función jeedomUtils.loadPage(). Esto permite controlar todo lo que sucede sin una capa de abstracción y, entre otras cosas, ha hecho posible filtrar todos los scripts JS y las hojas de estilo CSS provenientes de terceros (núcleo y complementos) para cargarlos en el documento.cabeza y no recargarlos después !

La gestión de *eventos* También hará una transición gradual a JavaScript puro. Las páginas **Síntesis** **Panel** **Diseño** Y **Guión** ya están completamente en JS con delegación de eventos.

Es una tarea enorme, tanto por la reescritura del código existente como por la creación de bibliotecas internas para satisfacer las necesidades del front-end sin jQuery. Además, será necesario mantener jQuery y sus complementos/bibliotecas durante algún tiempo. Pero el camino ya está recorrido!

Algunos ejemplos:

<details>

  <summary markdown="span">jQuery to pure js()<summary>

  ~~~ js
  {% raw %}
  jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  //JavaScript puro:
  document.querySelector('#table_objectSummary tbody').insertAdjacentHTML('beforeend', tr)
  document.querySelectorAll('#table_objectSummary tbody tr').last().setJeeValues(_summary, '.objectSummaryAttr')

  jQuery:
  var eqId = $('.eqLogicAttr[data-l1key=id]').value()
  var config = $('#config').getValues('.configKey')[0]
  var expresión = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

  //JavaScript puro:
  var eqId = document.querySelector('.eqLogicAttr[data-l1key="id"]').jeeValue()
  var config = document.getElementById('config').getJeeValues('.configKey')[0]
  var expresión = this.closest('.actionOnMessage').getJeeValues('.expressionAttr')

  jQuery:
  addMyTr: función(_datos)) {
    var tr = '>'
    tr += '>'
    tr += '>'
    tr += '>'
    sea newRow = $(tr)
    newRow.setValues(data, '.mytrDataAttr')
    $('#table_stuff tbody').append(newRow)
    //devuelve newRow
  }

  //JavaScript puro:
  addMyTr: función(_datos)) {
    var tr = '>'
    tr += '>'
    tr += '>'
    tr += '>'
    let newRow = document.createElement('tr')
    newRow.innerHTML = tr
    newRow.setJeeValues(_data, '.mytrDataAttr')
    document.getElementById('table_stuff').querySelector('tbody').appendChild(newRow)
    //devuelve newRow
  }

  jQuery:
  $(function(){
    console.log('Dom listo')!')
  })

  //JavaScript básico:
  domUtils(función(){
    console.log('Dom listo')!')
  })

  {% endraw %}
  ~~~

<details>

El archivo de plantilla del complemento.JavaScript y la mayoría de las páginas principales ahora utilizan estas funciones. Por supuesto, puedes usarlos en plugins, pero estos deberán instalarse en un Core 4.mínimo 4.

Funciones DOM específicas del núcleo:

[Documentación Core js](/es_ES/devcorejsindex)

[domUtils {}](https:github.comjeedomcoreblobalphacoredomdom.utils.js)

[domUI](https:github.comjeedomcoreblobalphacoredomdom.ui.js)



### Obsolete

#### Función PHP

`displayException()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

#### Funciones de JavaScript (disponibles desde Core 4.3)):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toastr / Tooltipster

La biblioteca *tostadora* ha sido eliminado del núcleo. Se utilizó a través de las funciones de Jeedom Utils.Las funciones showAlert() y hideAlert() han sido reemplazadas por la función interna del núcleo jeeDialog.toast().

La biblioteca Tooltipster, que depende de jQuery, también ha sido reemplazada por la biblioteca Tippy js. Uso de Jeedom Utils.La función initTooltips() utilizada por los complementos no cambia.

#### selector de fecha y hora de jQuery

La biblioteca *selector de fecha y hora* ha sido eliminado del núcleo. Se utilizó a través de las funciones de Jeedom Utils.datePickerInit() y dateTimePickerInit() han sido reemplazados por la biblioteca [flatpickr](https:flatpickr.js.org).

Las funciones principales gestionan el tema *flatpickr* y el lenguaje de la biblioteca dependiendo del lenguaje principal.

Como recordatorio:

<details>

  <summary markdown="span">datetime pickers<summary>

  ~~~ html
  {% raw %}
  <input id="myDate" class="in_datepicker">
  <input id="myTime" class="in_timepicker">
  <input id="myCustomDatetime">
  {% endraw %}
  ~~~

  ~~~ js
  {% raw %}
  jeedomUtils.datePickerInit() // Inicializar todo input.in_datepicker
  jeedomUtils.dateTimePickerInit() // Inicializa todos los campos input.in_timepicker

  jeedomUtils.datePickerInit('Ymd H:i:00', '#myCustomDatetime') // Inicializará la entrada myCustomDatetime con un formato personalizado
  {% endraw %}
  ~~~

<details>



### Deprecated

*Estas funciones devuelven un mensaje de error, pero aun así funcionan:*

#### Funciones PHP:

`eqLogic::::  

#### ):

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

#### ):

  


> ****
>
> .  ** .

#### 

.  **()**. .

<details>

  <summary markdown="span">jeeComplete()<summary>

  ~~~ js
  {% raw %}
  jQuery:
  $('input.auto').autocomplete({
    minLength: 1,
    source: dataArray
  })

  //JavaScript básico:
  ({
    minLength: 1,
    source: dataArray
  })
  {% endraw %}
  ~~~

<details>

#### 

. ..().

<details>

  <summary markdown="span">exemples jeeDialog()<summary>

  ~~~ js
  {% raw %}
  ) {
    !')
    return
  }

  :', ) {
     !== null) {
      
    }
  })

  ?', ) {
    ) {
      
    }  {
      
    }
  })

  {% endraw %}
  ~~~

<details>

#### 

. **.

<details>

  <summary markdown="span">exemples ()<summary>

  ~~~ js
  {% raw %}
  :
  $('#md_modal').dialog({
    title: "{{}}"
  }).?')

  :
  ({
    title: '{{}}',
    contentUrl: '?'
  })

  {% endraw %}
  ~~~

<details>

#### 

.
 : [](http:sortablejs.github.ioSortable)

#### 

 ** . 

#### 

. .

<details>

  <summary markdown="span">jeeCtxMenu()<summary>

  ~~~ js
  {% raw %}
  ({
    selector: '.nav.!
    appendTo: '',
    className: '', 
    items: {
      uniqueNameID: {
        name: '{{}}',
        isHtmlName: false,
        icon: '',
        className: '', 
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
       {
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
  ~~~

<details>

#### 

. .

<details>

  <summary markdown="span">exemples ()<summary>

  ~~~ js
  {% raw %}
  :
  $('#bt_uploadImage').fileupload({
    url: '?
    dataType: 'json',
    done: ) {
      
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
      
    }
  })

  {% endraw %}
  ~~~

<details>

 [domUI](https:github.comjeedomcoreblobalphacoredomdom.ui.js)

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

