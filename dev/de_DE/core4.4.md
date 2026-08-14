## Core v4.4 | Plugin-Entwickler

### Eines Tages, jQuery ...

jQuery ist ein Framework, das im Bereich der Weboberflächen nach wie vor sehr verbreitet ist, und Jeedom stützt sich seit jeher stark darauf. Dennoch ermöglichen HTML5 und moderne Browser zunehmend, darauf zu verzichten. Für Jeedom steht vor allem die Leistung im Vordergrund, und es kommt noch nicht in Frage, jQuery und seine Plugins (jQuery UI, ContextMenu, Modals, Autocomplete, TableSorter usw.) zu entfernen.

Aber man muss darüber nachdenken und irgendwann damit anfangen!

Core 4.4 enthält daher die Grundfunktionen setValues() und getValues(), die nun ebenfalls auf **NodeList** und **Element** prototypisiert sind, so wie sie es historisch gesehen auf $.fn waren. Außerdem wurden einige Funktionen implementiert, darunter last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass() und hasClass(). Das Ziel ist natürlich nicht, jQuery nachzubilden, sondern bei Bedarf funktionale Abkürzungen anzubieten.

Um den Übergang zu erleichtern und die Wartung zu vereinfachen, heißen die neuen Funktionen **getValues()** und **setValues()** im DOM nun **setJeeValues()** und **getJeeValues()**.

Zudem laufen alle **Ajax**-Aufrufe – ob synchron oder asynchron – über reine JavaScript-Funktionen, die intern für den Core entwickelt wurden. *load()* und *html()* werden daher von allen JavaScript-Klassen sowie von der Funktion `jeedomUtils.loadPage()` verwendet. Dies ermöglicht es, alle Vorgänge ohne Abstraktionsschicht zu kontrollieren, und hat unter anderem dazu geführt, dass alle JavaScript-Skripte und CSS-Stylesheets von Drittanbietern (Core und Plugins) gefiltert werden, um sie im `document.head` zu laden und anschließend nicht erneut zu laden!

Die Verwaltung der *Ereignisse* wird ebenfalls schrittweise auf reines JavaScript umgestellt. Die Seiten **Übersicht**, **Dashboard**, **Design** und **Szenario** laufen bereits vollständig in JavaScript mit Ereignisdelegation.

Das ist ein riesiges Projekt, sowohl was die Überarbeitung des Bestehenden als auch die Entwicklung interner Bibliotheken betrifft, um den Anforderungen des Frontends ohne jQuery gerecht zu werden. Außerdem müssen wir jQuery und seine Plugins/Bibliotheken für die Plugins noch eine Weile beibehalten. Aber der Weg ist geebnet!

Einige Beispiele:

<details>

<summary markdown="span">jQuery zu reinem JavaScript()</summary>

~~~ js
{% raw %}
//jQuery:
$('#table_objectSummary tbody').append(tr)
$('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

//Reines JavaScript:
document.querySelector('#table_objectSummary tbody').insertAdjacentHTML('beforeend', tr)
document.querySelectorAll('#table_objectSummary tbody tr').last().setJeeValues(_summary, '.objectSummaryAttr')

//jQuery:
var eqId = $('.eqLogicAttr[data-l1key=id]').value()
var config = $('#config').getValues('.configKey')[0]
var expression = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

//Reines JavaScript:
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

//Reines JavaScript:
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
console.log('Dom bereit!')
})

//Core js:
domUtils(function(){
console.log('Dom bereit!')
})

{% endraw %}
~~~

</details>

Die Datei „plugin-template.js“ und die meisten Seiten des Core nutzen nun diese Funktionen. Sie können sie natürlich auch in Plugins verwenden, allerdings müssen diese dann auf einem Core 4.4 oder höher installiert sein.

Core-spezifische DOM-Funktionen:

[Doc Core js](corejs/index)

[domUtils {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Veraltet

#### PHP-Funktion

`displayExeption()` -> `displayException()`
`convertDayEnToFr()` -> `convertDayFromEn()`

#### JS-Funktionen (verfügbar ab Core 4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toastr / Tooltipster

Die Bibliothek *toastr* wurde aus dem Core entfernt. Sie wurde über die Funktionen jeedomUtils.showAlert() und hideAlert() verwendet und durch die interne Core-Funktion jeeDialog.toast() ersetzt.

Die jQuery-abhängige Bibliothek „Tooltipster“ wurde ebenfalls durch die Bibliothek „Tippy js“ ersetzt. Die Verwendung von `jeedomUtils.initTooltips()` durch die Plugins bleibt unverändert.

#### jQuery-Datums- und Uhrzeitauswahl

Die Bibliothek *datetimepicker* wurde aus dem Core entfernt. Sie wurde über die Funktionen jeedomUtils.datePickerInit() und dateTimePickerInit() verwendet und durch die Bibliothek [flatpickr](https://flatpickr.js.org/).

Die Funktionen des Core verwalten das Theme *flatpickr* und die Sprache der Bibliothek entsprechend der Sprache des Core.

Zur Erinnerung:

<details>

<summary markdown="span">Datums- und Zeitauswahlfelder</summary>

~~~ html
{% raw %}
<input id="myDate" class="in_datepicker"/>
<input id="myTime" class="in_timepicker"/>
<input id="myCustomDatetime"/>
{% endraw %}
~~~

~~~ js
{% raw %}
jeedomUtils.datePickerInit() // Alle input.in_datepicker initialisieren
jeedomUtils.dateTimePickerInit() // Alle input.in_timepicker initialisieren

jeedomUtils.datePickerInit('Y-m-d H:i:00', '#myCustomDatetime') //Initialisiert das Eingabefeld „myCustomDatetime“ mit einem benutzerdefinierten Format
{% endraw %}
~~~

</details>



### Veraltet

*Diese Funktionen geben eine Fehlermeldung aus, funktionieren aber weiterhin:*

#### PHP-Funktionen:

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::byTypeAndSearchConfiguration()`

#### JS-Funktionen (verfügbar ab Core 4.2):

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

#### JS-Variablen (verfügbar ab Core 4.3):

`jeedom_langage` -> `jeeFrontEnd.language`
`userProfils` -> `jeeFrontEnd.userProfils`

> **Hinweis**
>
> Diese Änderungen können dazu führen, dass die Mindestversion von Jeedom für viele Plugins aktualisiert werden muss. Aus diesem Grund erscheinen die als *deprecated* gekennzeichneten Elemente nicht im Master-Zweig des Core, sondern dienen den Entwicklern als Hinweis darauf, was sie korrigieren können.

#### jQuery-Autocomplete

Die jQuery-abhängige Autocomplete-Bibliothek wird in einer zukünftigen Version des Core entfernt. Sie wird durch die interne Core-Funktion **input.jeeComplete()** ersetzt. Diese unterstützt die meisten bisherigen Optionen (Ajax-Quelle usw.), behebt jedoch mehrere Fehler, bietet neue Funktionen (Pfeile nach oben und unten zur Auswahl eines Vorschlags usw.) und ermöglicht die Verwendung eines einzigen Containers für mehrere Eingabefelder, wodurch die Auswirkungen auf das DOM, insbesondere in Szenarien, erheblich reduziert werden.

<details>

<summary markdown="span">jeeComplete()</summary>

~~~ js
{% raw %}
//jQuery:
$('input.auto').autocomplete({
minLength: 1,
Quelle: dataArray
})

//Core js:
document.querySelector('input.auto').jeeComplete({
minLength: 1,
Quelle: dataArray
})
{% endraw %}
~~~

</details>

#### jQuery-Bootbox

Die jQuery-abhängige „lib bootbox“ wird in einer zukünftigen Version des Core entfernt. jeeDialog() ersetzt diese Funktionen durch jeeDialog.alert(), jeeDialog.confirm() und jeeDialog.prompt().

<details>

<summary markdown="span">Beispiele für jeeDialog()</summary>

~~~ js
{% raw %}
if (Bedingung) {
jeeDialog.alert('Das ist falsch, Mann!')
Zurück
}

jeeDialog.prompt('Neuen Namen eingeben:', function(result) {
if (result !== null) {
//Etwas tun
}
})

jeeDialog.confirm('Möchten Sie dies wirklich löschen?', function(result) {
if (result) {
//Etwas tun
} else {
//Andere Aufgaben ausführen
}
})

{% endraw %}
~~~

</details>

#### jQuery UI

Die jQuery-UI-Bibliothek wird in einer zukünftigen Version des Core entfernt. jeeDialog.dialog() ersetzt die Verwendung der *ui-dialog*-Modalfenster.

<details>

<summary markdown="span">Beispiele für jeeDialog.dialog()</summary>

~~~ js
{% raw %}
//jQuery UI:
$('#md_modal').dialog({
title: „{{Systemadministration}}“
}).load('index.php?v=d&modal=system.action').dialog('open')

//Core jeeDialog:
jeeDialog.dialog({
title: '{{Systemverwaltung}}',
contentUrl: 'index.php?v=d&modal=system.action'
})

{% endraw %}
~~~

</details>

#### jQuery UI Sortable

Die jQuery-Bibliothek „Sortable“ wird in einer zukünftigen Version des Core entfernt.
Die Bibliothek „SortableJS“ wurde in den Core integriert: [SortableJS](http://sortablejs.github.io/Sortable/)

#### jQuery-Caret

Das jQuery-Plugin *jquery.at.caret* wird als veraltet eingestuft. Verwenden Sie `myElement.insertAtCursor(myString)`

#### jQuery contextMenu

Die jQuery-abhängige Funktion `contextMenu` wird in einer zukünftigen Version des Core entfernt. `jeeCtxMenu()` ersetzt diese Funktionen.

<details>

<summary markdown="span">jeeCtxMenu()</summary>

~~~ js
{% raw %}
var myCtxMenu = new jeeCtxMenu({
selector: '.nav.nav-tabs li', //Erforderlich!
appendTo: 'div#div_pageContainer',
className: '', //Zum Menü-Container hinzugefügt
items: {
uniqueNameID: {
name: '{{Mein Element}}',
isHtmlName: false,
Symbol: 'fas fa-cogs',
className: '', //Zum Element-Container hinzugefügt
Callback: function(key, opt) { //Callback für Element
}
},
sep1: '-----',
},
Callback: function(key, opt) { // Standard-Callback, falls für das Element nicht anders festgelegt
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
Callback: function(key, options, event) {
//Elemente festlegen...
}
},
Elemente: Kontextmenüelemente
},
position: function(opt, x, y) {
},
*/
})

{% endraw %}
~~~

</details>

#### jQuery FileUpload

Die jQuery-Bibliothek „fileupload“ wird in einer zukünftigen Version des Core entfernt. jeeFileUploader() ersetzt die Verwendung dieser Funktionen.

<details>

<summary markdown="span">Beispiele für jeeDialog.dialog()</summary>

~~~ js
{% raw %}
//jQuery UI:
$('#bt_uploadImage').fileupload({
url: 'core/ajax/plan.ajax.php?action=uploadImage&id=' + id
dataType: 'json',
done: function(event, data) {
//Etwas tun
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
//Etwas tun
}
})

{% endraw %}
~~~

</details>

Siehe [domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

> **Tipp**
>
> Sie können Ihre Plugins auf dem Core ohne jQuery und Bootstrap testen. Gehen Sie dazu auf „Einstellungen > System > Konfiguration“, Registerkarte „Ausrüstung“, **Core js (dev)**.

### Optionale Änderungen

- Verwaltung mehrerer Kontrollkästchen

Im Core wurde eine Funktion eingeführt, die ein Kontextmenü für Kontrollkästchen bereitstellt: „Alle auswählen“, „Keine auswählen“, „Auswahl umkehren“.

Um diese Funktion zu nutzen, muss man den CSS-Classnamen *checkContext* den entsprechenden Kontrollkästchen hinzufügen und die Funktion aufrufen ``jeedomUtils.setCheckContextMenu()``

Die Kontrollkästchen werden dann nach demselben *data-l1key* und *data-l2key* gruppiert, sofern diese vorhanden sind.

Sie können Checkboxen auch mit dem Attribut *data-context="group1"* zu Gruppen zusammenfassen.

Schließlich können Sie eine Callback-Funktion wie folgt definieren:

````js
var checkContextMenuCallback = function(_el) {
  //_el is an html element.
  _el.triggerEvent('change')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

