## Core v4.4 | Plugin developers

### One day, jQuery ...

jQuery is a framework that is still widely used in web interfaces, and Jeedom has historically relied heavily on it. Despite everything, HTML5 and recent browsers increasingly make it possible to do without it. The interest in Jeedom is above all performance, and there is no question yet of removing jQuery and its plugins (jQuery UI, contextmenu, modals, autocomplete, tablesorter, etc.).

But you have to think about it, and start one day !

The Core 4.4 therefore integrates the basic functions that are setValues() and getValues(), which are now also prototyped on the **NodeList** And **Element**, comme elles le sont sur $.fn historically. Some functions have also been implemented like last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass(), hasClass(). The goal is not to redo jQuery of course, but to offer functional shortcuts when necessary.

For easier transition and better maintenance, the new functions **getValues()** And **setValues()** on the DOM are now **setJeeValues()** And **getJeeValues()**.

In addition, all calls **Ajax**, sync or async, go through pure js functions developed internally for the Core. *load()* And *html()* are therefore used by all js classes and by the jeedomUtils.loadPage function(). This allows to control everything that happens without an abstraction layer, and among other things, allowed to filter all js scripts and css stylesheets coming from 3rd party (core and plugins) to load them into the document.head and not reload them afterwards !

Management of *events* will also gradually move to pure js. The pages **Synthesis** **Dashboard** **Design** And **Scenario** are already in full js with event delegation.

It's a huge project, both in rewriting the existing system and in creating internal libraries to meet the needs of the front-end without jQuery. Additionally, jQuery and its plugins/libs will need to be kept for some time to come for plugins. But the road is taken!

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

The plugin-template file.js and most Core pages now use these functions. You can of course use them in plugins, but then they will have to be installed on a Core 4.4 minimum.

Core-specific DOM functions:

[Doc Core js](/en_US/dev/corejs/index)

[domUtils {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

#### PHP function

`displayExeption()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

#### Js functions (available since Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toastr / Tooltipster

The lib *toast* has been removed from the Core. It was used through the jeedomUtils functions.showAlert() and hideAlert() and has been replaced by the internal Core function jeeDialog.toast().

The jQuery-dependent Tooltipster lib has also been replaced by the Tippy js lib. Using jeedomUtils.initTooltips() by plugins does not change.

#### jQuery datetimepicker

The lib *datetimepicker* has been removed from the Core. It was used through the jeedomUtils functions.datePickerInit() and dateTimePickerInit() and has been replaced by the lib [flatpicker](https://flatpickr.js.org/).

Core functions manage the theme *flatpicker* and the language of the lib depending on the language of the Core.

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

