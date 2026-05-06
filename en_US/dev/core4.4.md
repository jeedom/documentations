## Core v4.4 | Plugin developers

### One day, jQuery ...

jQuery is a framework still widely used in web interfaces, and Jeedom has historically relied heavily on it. Nevertheless, HTML5 and modern browsers are increasingly making it possible to do without it. The main interest for Jeedom is performance, and there are no plans yet to remove jQuery and its plugins (jQuery UI, contextmenu, modals, autocomplete, tablesorter, etc.).).

But we need to think about it, and start one day !

The Core 4.Version 4 therefore integrates the basic functions setValues() and getValues(), which are now also prototyped on the **NodeList** And **Element**, comme elles le sont sur $.historically. Several functions have also been implemented, such as last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass(), and hasClass()(). The goal is not to recreate jQuery, of course, but to offer functional shortcuts when necessary.

For an easier transition and better maintenance, the new functions **getValues()** And **setValues()** on the DOM are now **setJeeValues()** And **getJeeValues()**.

Furthermore, all calls **Ajax**, sync or async, they use pure JS functions developed internally for the Core. *load()* And *html()* are therefore used by all JS classes and by the jeedomUtils.loadPage function(). This allows control over everything that happens without an abstraction layer, and has, among other things, made it possible to filter all JS scripts and CSS stylesheets coming from 3rdparty (core and plugins) to load them into the document.head and not recharge them afterwards !

The management of *events* will also gradually transition to pure JavaScript. The pages **Synthesis** **Dashboard** **Design** And **Scenario** are already in full JS with event delegation.

It's a huge undertaking, both in rewriting the existing code and in creating internal libraries to meet the front-end needs without jQuery. Furthermore, jQuery and its plugins/libs will need to be maintained for some time for the plugins. But the road is already taken!

Some examples:

<details>

  <summary markdown="span">jQuery to pure js()</summary>

  ~~~ js
  {% raw %}
  //jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  //Pure js:
  document.querySelector('#table_objectSummary tbody').insertAdjacentHTML('beforeend', tr)
  document.querySelectorAll('#table_objectSummary tbody tr').last().setJeeValues(_summary, '.objectSummaryAttr')

  //jQuery:
  var eqId = $('.eqLogicAttr[data-l1key=id]').value()
  var config = $('#config').getValues('.configKey')[0]
  var expression = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

  //Pure js:
  var eqId = document.querySelector('.eqLogicAttr[data-l1key="id"]').jeeValue()
  var config = document.getElementById('config').getJeeValues('.configKey')[0]
  var expression = this.closest('.actionOnMessage').getJeeValues('.expressionAttr')

  //jQuery:
  addMyTr: function(_data) {
    var tr = '>'
    tr += '>'
    tr += '>'
    tr += '>'
    let newRow = $(tr)
    newRow.setValues(data, '.mytrDataAttr')
    $('#table_stuff tbody').append(newRow)
    //return newRow
  }

  //Pure js:
  addMyTr: function(_data) {
    var tr = '>'
    tr += '>'
    tr += '>'
    tr += '>'
    let newRow = document.createElement('tr')
    newRow.innerHTML = tr
    newRow.setJeeValues(_data, '.mytrDataAttr')
    document.getElementById('table_stuff').querySelector('tbody').appendChild(newRow)
    //return newRow
  }

  //jQuery:
  $(function(){
    console.log('Dom ready!')
  })

  //Core js:
  domUtils(function(){
    console.log('Dom ready!')
  })

  {% endraw %}
  ~~~

</details>

The plugin-template file.JavaScript and most Core pages now use these functions. You can of course use them in plugins, but these will then need to be installed on a Core 4.minimum 4.

Core-specific DOM functions:

[Doc Core js](/en_US/dev/corejs/index)

[domUtils {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

#### PHP function

`displayExeption()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

#### JavaScript functions (available since Core 4.3)):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toastr / Tooltipster

The lib *toastr* has been removed from the Core. It was used through the Jeedom Utils functions.showAlert() and hideAlert() have been replaced by the internal function of the core jeeDialog.toast().

The Tooltipster library, which depends on jQuery, has also been replaced by the Tippy js library. Using Jeedom Utils.The initTooltips() function used by plugins does not change.

#### jQuery datetimepicker

The lib *datetimepicker* has been removed from the Core. It was used through the Jeedom Utils functions.datePickerInit() and dateTimePickerInit() have been replaced by the library [flatpickr](https://flatpickr.js.org/).

The Core functions manage the theme *flatpickr* and the library language depending on the core language.

As a reminder:

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
  jeedomUtils.datePickerInit() //Init all input.in_datepicker
  jeedomUtils.dateTimePickerInit() //Init all input.in_timepicker

  jeedomUtils.datePickerInit('Ymd H:i:00', '#myCustomDatetime') //Will init myCustomDatetime input with custom format
  {% endraw %}
  ~~~

</details>



### Deprecated

*These functions return an error message, but still work:*

#### PHP functions:

`eqLogic::::byTypeAndSearchConfiguration()`  

#### ):

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

#### ):

  


> **Noticed**
>
> .  ** .

#### 

.  **()**. .

<details>

  <summary markdown="span">jeeComplete()</summary>

  ~~~ js
  {% raw %}
  //jQuery:
  $('input.auto').autocomplete({
    minLength: 1,
    source: dataArray
  })

  //Core js:
  ({
    minLength: 1,
    source: dataArray
  })
  {% endraw %}
  ~~~

</details>

#### 

. ..().

<details>

  <summary markdown="span">exemples jeeDialog()</summary>

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
      
    } else {
      
    }
  })

  {% endraw %}
  ~~~

</details>

#### 

. **.

<details>

  <summary markdown="span">exemples ()</summary>

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

</details>

#### 

.
 : [](http://sortablejs.github.io/Sortable/)

#### 

 ** . 

#### 

. .

<details>

  <summary markdown="span">jeeCtxMenu()</summary>

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
       {
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

  <summary markdown="span">exemples ()</summary>

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
    /*
    add: ) {
      ')
      ?
      ()
    },
    */
    done: ) {
      
    }
  })

  {% endraw %}
  ~~~

</details>

See [domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

> ****
>
> . , **)**.

### Optional modifications

- 

 : .

 **  ``jeedomUtils.setCheckContextMenu()``

 ** And ** .

 *"*.

:

````js
) {
  .
  ')
}
)
````

