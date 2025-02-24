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

[](/en_US/devcorejsindex)

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

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::byTypeAndSearchConfiguration()`  

#### Js functions (available since Core4.2):

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

#### Js variables (available since Core4.3):

`jeedom_langage` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

> **Noticed**
>
> These changes may result in the need to upgrade to the minimum required Jeedom version of many plugins. This is why the *deprecated* do not appear on a Core in master branch, but allow developers to see what they can fix.

#### jQuery Autocomplete

The jQuery-dependent Autocomplete lib will be removed in a future Core release. It is replaced by the internal function of the Core **input.jeeComplete()**. This supports most of the previous options (source on ajax etc), but fixes several flaws, brings new behaviors (up and down arrow to select a proposition, etc) and allows to use a single container for several inputs, greatly reducing the impact on the DOM, especially on scenarios.

<details>

  <summary markdown="span">jeeComplete()<summary>

  
  {% raw %}
  jQuery:
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
  

<details>

#### jQuery bootbox

The jQuery-dependent bootbox lib will be removed in a future Core release. jeeDialog() replaces these functions, with jeeDialog.alert(), jeeDialog.confirm(), jeeDialog.prompt().

<details>

  <summary markdown="span">exemples jeeDialog()<summary>

  
  {% raw %}
  if (condition) {
    jeeDialog.alert('This is wrong dude!')
    return
  }

  jeeDialog.prompt('Enter new name:', function(result) {
    if (result !== null) {
      //Do stuff
    }
  })

  jeeDialog.confirm('Do you really want to delete this?', function(result) {
    if (result) {
      //Do stuff
    } else {
      //Do other stuff
    }
  })

  {% endraw %}
  

<details>

#### jQuery UI

The jQuery UI lib will be removed in a future version of Core. jeeDialog.dialog() replaces the use of modals *ui-dialog*.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()<summary>

  
  {% raw %}
  //jQuery UI:
  $('#md_modal').dialog({
    title: "{{System administration}}"
  }).load('index.php?v=d&modal=system.action').dialog('open')

  //Core jeeDialog:
  jeeDialog.dialog({
    title: '{{System administration}}',
    contentUrl: 'index.php?v=d&modal=system.action'
  })

  {% endraw %}
  

<details>

#### jQuery UI Sortable

The jQuery Sortable lib will be removed in a future version of Core.
SortableJS Lib has been integrated into Core : [SortableJS](http:sortablejs.github.ioSortable)

#### jQuery caret

The jQuery plugin *jquery.at.caret* goes deprecated. Use `myElement.insertAtCursor(myString)`

#### jQuery contextMenu

The jQuery-dependent contextMenu lib will be removed in a future Core release. jeeCtxMenu() replaces these functions.

<details>

  <summary markdown="span">jeeCtxMenu()<summary>

  
  {% raw %}
  var myCtxMenu = new jeeCtxMenu({
    selector: '.nav.nav-tabs li', //Required!
    appendTo: 'div#div_pageContainer',
    className: '', //Added to menu container
    items: {
      uniqueNameID: {
        name: '{{My item}}',
        isHtmlName: false,
        icon: 'fas fa-cogs',
        className: '', //Added to item container
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
      return {
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

  <summary markdown="span">exemples jeeDialog.dialog()<summary>

  
  {% raw %}
  //jQuery UI:
  $('#bt_uploadImage').fileupload({
    url: '?
    dataType: 'json',
    done: ) {
      //Do stuff
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
      //Do stuff
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

