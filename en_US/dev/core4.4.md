## Core v4.4 | Plugin Developers

### One day, jQuery ...

jQuery is a framework that is still widely used in web interfaces, and Jeedom has historically relied heavily on it. Despite everything, HTML5 and recent browsers increasingly make it possible to do without it. The interest for Jeedom is above all performance, and there is no question yet of removing jQuery and its plugins (jQuery UI, contextmenu, modals, autocomplete, tablesorter, etc.).

But you have to think about it, and start one day !

The Core 4.4 therefore integrates the basic functions setValues() and getValues(), which are now also prototyped on the **NodeList** And **Element**, comme elles le sont sur $.fn historically. Some functions have also been implemented like last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass(), hasClass(). The goal is not to remake a jQuery of course, but to offer functional shortcuts when necessary.

For easier transition and better maintenance, the new functions **getValues()** And **setValues()** on the DOM are now **setJeeValues()** And **getJeeValues()**.

In addition, all calls **Ajax**, sync or async, go through pure js functions developed internally for the Core. *load()* And *html()* are therefore used by all js classes and by the jeedomUtils.loadPage function(). This allows to control everything that happens without an abstraction layer, and among other things, allowed to filter all js scripts and css stylesheets coming from 3rd party (core and plugins) to load them into the document.head and do not reload them afterwards !

Management of *events* will also gradually switch to pure js. The pages **Synthesis** **Dashboard** **Design** And **Scenario** are already in full js with delegation of events.

It's a huge project, both in rewriting the existing system and in creating internal libraries to meet the needs of the front-end without jQuery. Additionally, jQuery and its plugins/libs will need to be kept for some time for plugins. But the road is taken!

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

#### Php function

`displayExeption()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

#### Js functions (available since Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toastr / Tooltipster

The lib *toast* has been removed from Core. It was used through the jeedomUtils functions.showAlert() and hideAlert() and has been replaced by the Core internal function jeeDialog.toast().

The jQuery-dependent Tooltipster lib has also been replaced by the Tippy js lib. Using jeedomUtils.initTooltips() by plugins does not change.

#### jQuery datetimepicker

The lib *datetimepicker* has been removed from Core. It was used through the jeedomUtils functions.datePickerInit() and dateTimePickerInit() and has been replaced by the lib [flatpickr](https://flatpickr.js.org/).

Core functions manage the theme *flatpickr* and the language of the lib depending on the language of the Core.

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

#### Php functions:

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

  <summary markdown="span">jeeComplete()</summary>

  ~~~ js
  {% raw %}
  //jQuery:
  $('input.auto').autocomplete({
    minLength: 1,
    source: dataArray
  })

  //Core js:
  document.querySelector('input.auto').jeeComplete({
    minLength: 1,
    source: dataArray
  })
  {% endraw %}
  ~~~

</details>

#### jQuery bootbox

The jQuery-dependent bootbox lib will be removed in a future Core release. jeeDialog() replaces these functions, with jeeDialog.alert(), jeeDialog.confirm(), jeeDialog.prompt().

<details>

  <summary markdown="span">exemples jeeDialog()</summary>

  ~~~ js
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
  ~~~

</details>

#### jQuery UI

The jQuery UI lib will be removed in a future version of Core. jeeDialog.dialog() replaces the use of modals *ui-dialog*.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  ~~~ js
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
  ~~~

</details>

#### jQuery UI Sortable

The jQuery Sortable lib will be removed in a future version of Core.
SortableJS Lib has been integrated into Core : [SortableJS](http://sortablejs.github.io/Sortable/)

#### jQuery caret

The jQuery plugin *jquery.at.caret* goes deprecated. Use `myElement.insertAtCursor(myString)`

#### jQuery contextMenu

The jQuery-dependent contextMenu lib will be removed in a future Core release. jeeCtxMenu() replaces these functions.

<details>

  <summary markdown="span">jeeCtxMenu()</summary>

  ~~~ js
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
        callback: function(key, opt) { //Item callback
        }
      },
      sep1: '-----',
    },
    callback: function(key, opt) { //Default callback if not set on item
    }
    //isDisable: false,
    /*
    events: {
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
          //Set items...
        }
      },
      items: contextmenuitems
    },
    position: function(opt, x, y) {
    },
    */
  })

  {% endraw %}
  ~~~

</details>

#### jQuery FileUpload

The jQuery fileupload lib will be removed in a future version of Core. jeeFileUploader() replaces the use of these functions.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  ~~~ js
  {% raw %}
  //jQuery UI:
  $('#bt_uploadImage').fileupload({
    url: 'core/ajax/plan.ajax.php?action=uploadImage&id=' + id
    dataType: 'json',
    done: function(event, data) {
      //Do stuff
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
      //Do stuff
    }
  })

  {% endraw %}
  ~~~

</details>

See [domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

> **Tip**
>
> You can test your plugins on the Core without Jquery or Bootstrap. To do this, Settings > System > Configuration, Equipment tab, **Core js (dev)**.

### Optional modifications

- Managing multiple checkboxes

A feature has been introduced in the Core to provide a context menu on checkboxes : Select all, none, inverted selection.

To use it, you need to add the css class *checkContext* on the relevant checkboxes, and call the function ``jeedomUtils.setCheckContextMenu()``

The checkboxes will then be grouped by the same *data-l1key* And *data-l2key* if they exist.

You can also make groups of checkboxes with the attribute *data-context="group1"*.

Finally, you can define a callback function like this:

````js
var checkContextMenuCallback = function(_el) {
  //_el is an html element.
  _el.triggerEvent('change')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

