## Core v4.4 | Plugin Developers

### One day, jQuery...

jQuery is a framework that’s still widely used in web interfaces, and Jeedom has historically relied heavily on it. Nevertheless, HTML5 and modern browsers are making it increasingly possible to do without it. For Jeedom, the main concern is performance, and there are no plans yet to remove jQuery and its plugins (jQuery UI, contextmenu, modals, autocomplete, tablesorter, etc.).

But you have to think about it—and get started someday!

Core 4.4 therefore includes the basic functions setValues() and getValues(), which are now also prototyped on **NodeList** and **Element**, just as they historically were on $.fn. Several functions have also been implemented, such as last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass(), and hasClass(). The goal is not to recreate jQuery, of course, but to provide functional shortcuts when needed.

To make the transition easier and improve maintainability, the new **getValues()** and **setValues()** functions on the DOM are now **setJeeValues()** and **getJeeValues()**.

In addition, all **Ajax** calls—whether synchronous or asynchronous—go through pure JavaScript functions developed in-house for the Core. *load()* and *html()* are therefore used by all JavaScript classes and by the jeedomUtils.loadPage() function. This allows us to control everything that happens without an abstraction layer and, among other things, has enabled us to filter all third-party JavaScript scripts and CSS stylesheets (from both the Core and plugins) so they are loaded in the `document.head` and are not reloaded later!

Event handling will also gradually transition to pure JavaScript. The **Overview**, **Dashboard**, **Design**, and **Scenario** pages are already fully JavaScript-based with event delegation.

This is a massive undertaking, both in terms of rewriting the existing code and creating internal libraries to meet the front-end’s needs without jQuery. Additionally, we’ll need to keep jQuery and its plugins/libraries for a while longer for the plugins. But we’re on the right track!

Some examples:

<details>

<summary markdown="span">jQuery to pure JavaScript()</summary>

~~~ js
{% raw %}
//jQuery:
$('#table_objectSummary tbody').append(tr)
$('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

//Pure JS:
document.querySelector('#table_objectSummary tbody').insertAdjacentHTML('beforeend', tr)
document.querySelectorAll('#table_objectSummary tbody tr').last().setJeeValues(_summary, '.objectSummaryAttr')

//jQuery:
var eqId = $('.eqLogicAttr[data-l1key=id]').value()
var config = $('#config').getValues('.configKey')[0]
var expression = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

//Pure JS:
var eqId = document.querySelector('.eqLogicAttr[data-l1key="id"]').jeeValue()
var config = document.getElementById('config').getJeeValues('.configKey')[0]
var expression = this.closest('.actionOnMessage').getJeeValues('.expressionAttr')

//jQuery:
addMyTr: function(_data) {
var tr = '<tr>'
tr += '<td>'
tr += '</td>'
tr += '</tr>'
let newRow = $(tr)
newRow.setValues(data, '.mytrDataAttr')
$('#table_stuff tbody').append(newRow)
//return newRow
}

//Pure JS:
addMyTr: function(_data) {
var tr = '<tr>'
tr += '<td>'
tr += '</td>'
tr += '</tr>'
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

//Core JS:
domUtils(function(){
console.log('Dom ready!')
})

{% endraw %}
~~~

</details>

The plugin-template.js file and most of the Core pages now use these functions. You can, of course, use them in plugins, but those plugins will then need to be installed on Core 4.4 or later.

Core-specific DOM functions:

[Doc Core JS](corejs/index)

[domUtils {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

#### PHP function

`displayExeption()` -> `displayException()`
`convertDayEnToFr()` -> `convertDayFromEn()`

#### JS functions (available since Core 4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toastr / Tooltipster

The *toastr* library has been removed from the Core. It was used through the jeedomUtils.showAlert() and hideAlert() functions and has been replaced by the Core's internal function jeeDialog.toast().

The Tooltipster library, which depends on jQuery, has also been replaced by the Tippy.js library. The use of jeedomUtils.initTooltips() by plugins remains unchanged.

#### jQuery datetimepicker

The *datetimepicker* library has been removed from the Core. It was used through the jeedomUtils.datePickerInit() and dateTimePickerInit() functions and has been replaced by the library [flatpickr](https://flatpickr.js.org/).

The Core's functions manage the *flatpickr* theme and the library's language based on the Core's language.

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
jeedomUtils.datePickerInit() // Initialize all input.in_datepicker
jeedomUtils.dateTimePickerInit() // Initialize all input.in_timepicker

jeedomUtils.datePickerInit('Y-m-d H:i:00', '#myCustomDatetime') //Will initialize the myCustomDatetime input with a custom format
{% endraw %}
~~~

</details>



### Deprecated

*These functions return an error message but still work:*

#### PHP functions:

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::byTypeAndSearchConfiguration()`

#### JS functions (available since Core 4.2):

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

#### JS variables (available since Core 4.3):

`jeedom_langage` -> `jeeFrontEnd.language`
`userProfils` -> `jeeFrontEnd.userProfils`

> **Note**
>
> These changes may require upgrading to the minimum required version of Jeedom for many plugins. That is why *deprecated* features do not appear in the Core master branch, but allow developers to see what they can fix.

#### jQuery Autocomplete

The Autocomplete library, which depends on jQuery, will be removed in a future version of the Core. It is being replaced by the Core’s built-in function **input.jeeComplete()**. This function supports most of the previous options (AJAX source, etc.), but fixes several bugs, introduces new behaviors (up and down arrows to select a suggestion, etc.), and allows a single container to be used for multiple input fields, greatly reducing the impact on the DOM, particularly in scenarios.

<details>

<summary markdown="span">jeeComplete()</summary>

~~~ js
{% raw %}
//jQuery:
$('input.auto').autocomplete({
minLength: 1,
source: dataArray
})

//Core JS:
document.querySelector('input.auto').jeeComplete({
minLength: 1,
source: dataArray
})
{% endraw %}
~~~

</details>

#### jQuery Bootbox

The bootbox library, which depends on jQuery, will be removed in a future version of Core. jeeDialog() replaces these functions with jeeDialog.alert(), jeeDialog.confirm(), and jeeDialog.prompt().

<details>

<summary markdown="span">jeeDialog() examples</summary>

~~~ js
{% raw %}
if (condition) {
jeeDialog.alert('This is wrong, dude!')
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

The jQuery UI library will be removed in a future version of the Core. jeeDialog.dialog() replaces the use of *ui-dialog* modals.

<details>

<summary markdown="span">examples: jeeDialog.dialog()</summary>

~~~ js
{% raw %}
//jQuery UI:
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

#### jQuery UI Sortable

The jQuery Sortable library will be removed in a future version of the Core.
The SortableJS library has been integrated into the Core: [SortableJS](http://sortablejs.github.io/Sortable/)

#### jQuery caret

The jQuery plugin *jquery.at.caret* is now deprecated. Use `myElement.insertAtCursor(myString)`

#### jQuery contextMenu

The contextMenu library, which depends on jQuery, will be removed in a future version of Core. jeeCtxMenu() replaces these functions.

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
callback: function(key, opt) { // Default callback if not set on the item
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
items: contextmenuItems
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

<summary markdown="span">examples: jeeDialog.dialog()</summary>

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
> You can test your plugins on the Core without jQuery or Bootstrap. To do this, go to Settings > System > Configuration, then the "Devices" tab, and select **Core js (dev)**.

### Optional modifications

- Managing multiple checkboxes

A feature has been added to the Core to provide a context menu for checkboxes: Select All, Select None, Invert Selection.

To use it, add the CSS class *checkContext* to the relevant checkboxes, and call the function ``jeedomUtils.setCheckContextMenu()``

The checkboxes will then be grouped by the same *data-l1key* and *data-l2key* values, if they exist.

You can also create groups of checkboxes using the *data-context="group1"* attribute.

Finally, you can define a callback function like this:

````js
var checkContextMenuCallback = function(_el) {
  //_el is an html element.
  _el.triggerEvent('change')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

