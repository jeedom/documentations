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

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::byTypeAndSearchConfiguration()`  

#### JavaScript functions (available since Core 4.2)):

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

#### JavaScript variables (available since Core 4.3)):

`jeedom_langage` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

> **Noticed**
>
> These changes may necessitate upgrading to the minimum required Jeedom version for many plugins. That's why the *deprecated* They do not appear on a Core in the master branch, but allow developers to see what they can fix.

#### jQuery Autocomplete

The Autocomplete library, which depends on jQuery, will be removed in a future version of the Core. It is replaced by the Core's internal function **input.jeeComplete()**. This version supports most of the previous options (source via AJAX, etc.), but corrects several flaws, introduces new behaviors (up and down arrows to select a suggestion, etc.), and allows the use of a single container for multiple inputs, greatly reducing the impact on the DOM, particularly on scenarios.

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

The bootbox library, which depends on jQuery, will be removed in a future version of the Core. jeeDialog() replaces these functions, with jeeDialog.alert(), jeeDialog.confirm(), jeeDialog.prompt().

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
      Do other stuff
    }
  })

  {% endraw %}
  ~~~

</details>

#### jQuery UI

The jQuery UI library will be removed in a future version of the core. jeeDialog.dialog() replaces the use of modals *ui-dialog*.

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

The jQuery Sortable library will be removed in a future version of the core.
The SortableJS library has been integrated into the core : [SortableJS](http://sortablejs.github.io/Sortable/)

#### jQuery Caret

The jQuery plugin *jquery.at.caret* deprecated. Use `myElement.insertAtCursor(myString)`

#### jQuery contextMenu

The jQuery-dependent contextMenu library will be removed in a future version of the Core. jeeCtxMenu() replaces these functions.

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

The jQuery fileupload library will be removed in a future version of the Core. jeeFileUploader() replaces the use of these functions.

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
> You can test your plugins on the Core without jQuery or Bootstrap. To do this, go to Settings > System > Configuration, then the Equipment tab, **Core js (dev)**.

### Optional modifications

- Managing multiple checkboxes

A function has been introduced in the Core to provide a context menu for checkboxes : Select all, None, Inverted selection.

To use it, you need to add the CSS class *checkContext* on the relevant checkboxes, and call the function ``jeedomUtils.setCheckContextMenu()``

The checkboxes will then be grouped by the same *data-l1key* And *data-l2key* if they exist.

You can also create groups of checkboxes using the attribute *data-context="group1"*.

Finally, you can define a callback function like this:

````js
var checkContextMenuCallback = function(_el) {
  //_el is an html element.
  _el.triggerEvent('change')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

