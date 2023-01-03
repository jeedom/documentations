## Core v4.4 | Plugin Developers

### One day jQuery ...

jQuery is a framework still widely used in web interface, and Jeedom historically relies heavily on it. Despite everything, html5 and recent browsers increasingly make it possible to do without it. The interest for Jeedom is above all performance, and there is no question of removing jQuery and its plugins (jQuery UI, contextmenu, modals, autocomplete, tablesorter, etc.).).

But you have to think about it, and start one day !

Core 4.4 therefore integrates the basic functions setValues() and getValues(), which are now also prototyped on the **NodeList** and **Element**, comme elles le sont sur $.fn historically. A few functions have also been implemented like last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass(), hasClass(). The goal is not to redo a jQuery of course, but to offer functional shortcuts when necessary.

For an easier transition and better maintenance, the new functions **getValues()** and **setValues()** on the DOM are now **setJeeValues()** and **getJeeValues()**.

Additionally, all calls **Ajax**, sync or async, go through pure js functions developed internally for the Core. *load()* and *html()* are therefore used by all class js and by the jeedomUtils.loadPage function(). This allows you to control everything that happens without an abstraction layer, and has, among other things, made it possible to filter all the js scripts and css stylesheets coming from 3rdparty (core and plugins) to load them into the document.head and not reload them afterwards !

The management of *events* will also gradually switch to pure js. The pages **Synthesis** **Dashboard** **Design** and **Script** are already in full js with event delegation.

It's a huge project, as much in the rewriting of the existing as in the creation of internal libs to meet the needs of the front-end without jQuery. In addition, it will be necessary to keep jQuery and its plugins/libs for a while longer for plugins. But the road is taken!

Some examples:

<details>

  <summary markdown="span">jQuery to pure js()</summary>

  ~~~ js
  {% raw %}
  //jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  //purejs:
  document.querySelector('#table_objectSummary tbody').insertAdjacentHTML('beforeend', tr)
  document.querySelectorAll('#table_objectSummary tbody tr').last().setJeeValues(_summary, '.objectSummaryAttr')

  //jQuery:
  var eqId = $('.eqLogicAttr[data-l1key=id]').value()
  var config = $('#config').getValues('.configKey')[0]
  var expression = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

  //purejs:
  var eqId = document.querySelector('.eqLogicAttr[data-l1key="id"]').jeeValue()
  var config = document.getElementById('config').getJeeValues('.configKey')[0]
  var expression = this.closest('.actionOnMessage').getJeeValues('.expressionAttr')

  //jQuery:
  addMyTr: function(_data) {
    var tr = ' <tr>'
    tr += ' <td>'
    tr += ' </td>'
    tr += ' </tr>'
    let newRow = $(tr)
    newRow.setValues(data, '.mytrDataAttr')
    $('#table_stuff tbody').append(newRow)
    //return newRow
  }

  //purejs:
  addMyTr: function(_data) {
    var tr = ' <tr>'
    tr += ' <td>'
    tr += ' </td>'
    tr += ' </tr>'
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

  // Corejs:
  domUtils(function(){
    console.log('Dom ready!')
  })

  {% endraw %}
  ~~~

</details>

The plugin-template file.js and most Core pages now use these functions. You can of course use them in plugins, but these will then have to be installed on a Core 4.4 or more.

Core-specific DOM functions:

[domUtils {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)
[domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

- PHP function

`displayException()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

- Js functions (available since Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

- jQuery Toast / Tooltipster

The lib *toasting* has been removed from Core. It was used through jeedomUtils functions.showAlert() and hideAlert() and has been replaced by the internal Core function jeeDialog.toast().

The Tooltipster lib, dependent on jQuery, has also been replaced by the Tippy js lib. The use of jeedomUtils.initTooltips() by plugins does not change.

### Deprecated

*These functions return an error message, but still work:*

- PHP functions:

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::byTypeAndSearchConfiguration()`  

- Js functions (available since Core4.2):

`jeedom.eqLogic.buildSelectCmd` -> `jeedom.eqLogic.buildSelectCmd`  
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

- Js variables (available since Core4.3):

`jeedom_language` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

> **Remark**
>
> These changes may result in the need to mount the minimum required Jeedom version of many plugins. This is why the *Deprecated* do not appear on a V4-Stable Branch Core, but allow developers to see what they can fix.

- jQuery Autocomplete

The jQuery-dependent Autocomplete lib will be removed in a future Core release. It is replaced by the Core internal function **input.jeeComplete()**. This supports most of the previous options (source on ajax etc), but corrects several defects, brings new behaviors (up and down arrow to select a proposal, etc) and allows to use a single container for several inputs, reducing enormously the impact on the DOM, in particular on the scenarios.

<details>

  <summary markdown="span">jeeComplete()</summary>

  ~~~ js
  {% raw %}
  //jQuery:
  $('input.auto').autocomplete({
    minLength: 1,
    source: dataArray
  })

  // Corejs:
  document.querySelector('input.auto').jeeComplete({
    minLength: 1,
    source: dataArray
  })
  {% endraw %}
  ~~~

</details>

See [domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

- jQuery bootbox

The bootbox lib, dependent on jQuery, will be removed in a future Core release. jeeDialog() replaces these functions, with jeeDialog.alert(), jeeDialog.confirm(), jeeDialog.prompt().

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
      //Dostuff
    }
  })

  jeeDialog.confirm('Do you really want to delete this?', function(result) {
    if (result) {
      //Dostuff
    } else {
      //Do other stuff
    }
  })

  {% endraw %}
  ~~~

</details>

- jQuery UI

The jQuery UI lib will be removed in a future Core release. jeeDialog.dialog() replaces the use of modals *ui-dialog*.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  ~~~ js
  {% raw %}
  //jQueryUI:
  $('#md_modal').dialog({
    title: "{{System Administration}}"
  }).load('index.php?v=d&modal=system.action').dialog('open')

  //Core jeeDialog:
  jeeDialog.dialog({
    title: '{{System Administration}}',
    contentUrl: 'index.php?v=d&modal=system.action'
  })

  {% endraw %}
  ~~~

</details>

See [domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)


### Optional changes

- Management of multiple checkboxes

A function has been introduced in Core to provide a contextual menu on checkboxes : Select All, None, Reverse Select.

To use it, you have to add the css class *checkContext* on the relevant checkboxes, and call the function ``jeedomUtils.setCheckContextMenu()``

The checkboxes will then be grouped by same *data-l1key* and *data-l2key* if they exist.

You can also make groups of checkboxes with the attribute *data-context="group1"*.

Finally, you can define a callback function like this:

````js
var checkContextMenuCallback = function(_el) {
  //_el is an html element.
  _el.triggerEvent('change')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

