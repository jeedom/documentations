## Kern v4.4 | Plugin-Entwickler

### Eines Tages, jQuery ...

jQuery ist ein Framework, das immer noch häufig in Webschnittstellen verwendet wird, und Jeedom verlässt sich in der Vergangenheit stark darauf. Trotz allem ist es mit HTML5 und neueren Browsern zunehmend möglich, darauf zu verzichten. Das Interesse für Jeedom liegt vor allem an der Leistung, und es steht noch außer Frage, jQuery und seine Plugins (jQuery-Benutzeroberfläche, Kontextmenü, Modalitäten, Autovervollständigung, Tabellensortierer usw.) zu entfernen.).

Aber man muss darüber nachdenken und eines Tages anfangen !

Der Kern 4.4 integriert daher die Grundfunktionen setValues() und getValues(), die nun auch auf dem prototypisiert sind **Knotenliste** Und **Element**, comme elles le sont sur $.fn historisch. Einige Funktionen wurden ebenfalls implementiert, wie last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass(), hasClass(). Das Ziel besteht natürlich nicht darin, jQuery neu zu erstellen, sondern bei Bedarf funktionale Verknüpfungen anzubieten.

Für einen einfacheren Übergang und eine bessere Wartung sorgen die neuen Funktionen **getValues()** Und **setValues()** auf dem DOM sind jetzt **setJeeValues()** Und **getJeeValues()**.

Zusätzlich alle Anrufe **Ajax**, synchron oder asynchron, durchlaufen Sie reine JS-Funktionen, die intern für Core entwickelt wurden. *load()* Und *html()* werden daher von allen js-Klassen und von der Funktion jeedomUtils.loadPage verwendet(). Dadurch ist es möglich, alles zu steuern, was ohne eine Abstraktionsschicht geschieht, und es ist unter anderem möglich, alle von Drittanbietern stammenden JS-Skripte und CSS-Stylesheets (Kern und Plugins) zu filtern, um sie in das Dokument zu laden.Kopf und laden sie anschließend nicht erneut !

Die Leitung von *Ereignisse* Ich werde auch nach und nach auf reines JS umsteigen. Die Seiten **Synthese** **Armaturenbrett** **Design** Und **Szenario** sind bereits in voller js mit Delegation von Ereignissen.

Es ist ein riesiges Projekt, sowohl beim Umschreiben der vorhandenen als auch bei der Erstellung interner Bibliotheken, um die Anforderungen des Frontends ohne jQuery zu erfüllen. Darüber hinaus wird es für Plugins notwendig sein, jQuery und seine Plugins/Bibliotheken noch eine Weile aufzubewahren. Aber der Weg ist genommen!

Einige Beispiele:

<details>

  <summary markdown="span">jQuery to pure js()</summary>

  ~~~js
  {% raw %}
  //jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  //Reines js:
  document.querySelector('#table_objectSummary tbody').insertAdjacentHTML('beforeend', tr)
  document.querySelectorAll('#table_objectSummary tbody tr').last().setJeeValues(_summary, '.objectSummaryAttr')

  //jQuery:
  var eqId = $('.eqLogicAttr[data-l1key=id]').value()
  var config = $('#config').getValues('.configKey')[0]
  var expression = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

  //Reines js:
  var eqId = document.querySelector('.eqLogicAttr[data-l1key="id"]').jeeValue()
  var config = document.getElementById('config').getJeeValues('.configKey')[0]
  var expression = this.closest('.actionOnMessage').getJeeValues('.expressionAttr')

  //jQuery:
  addMyTr: Funktion(_data) {
    var tr = '>'
    tr += '>'
    tr += '>'
    tr += '>'
    sei newRow = $(tr)
    newRow.setValues(data, '.mytrDataAttr')
    $('#table_stuff tbody').append(newRow)
    //newRow zurückgeben
  }

  //Reines js:
  addMyTr: Funktion(_data) {
    var tr = '>'
    tr += '>'
    tr += '>'
    tr += '>'
    let newRow = document.createElement('tr')
    newRow.innerHTML = tr
    newRow.setJeeValues(_data, '.mytrDataAttr')
    document.getElementById('table_stuff').querySelector('tbody').appendChild(newRow)
    //newRow zurückgeben
  }

  //jQuery:
  $(function(){
    console.log('Dom bereit!')
  })

  //Kern js:
  domUtils(Funktion(){
    console.log('Dom bereit!')
  })

  {% endraw %}
  ~~~

</details>

Die Plugin-Vorlagendatei.js und die meisten Core-Seiten verwenden diese Funktionen jetzt. Man kann sie natürlich in Plugins verwenden, diese müssen dann aber auf einem Core 4 installiert werden.Mindestens 4.

Kernspezifische DOM-Funktionen:

[Doc Core js](/de_DE/dev/corejs/index)

[domUtils {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

#### PHP-Funktion

`displayException()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

#### Js-Funktionen (verfügbar seit Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toastr / Tooltipster

Die lib *Toast* wurde aus dem Kern entfernt. Es wurde über die jeedomUtils-Funktionen verwendet.showAlert() und hideAlert() und wurde durch die interne Core-Funktion jeeDialog.toast ersetzt().

Die von jQuery abhängige Tooltipster-Bibliothek wurde ebenfalls durch die Tippy js-Bibliothek ersetzt. Verwenden von jeedomUtils.initTooltips() durch Plugins ändert sich nicht.

#### jQuery Datetimepicker

Die lib *Datetimepicker* wurde aus dem Kern entfernt. Es wurde über die jeedomUtils-Funktionen verwendet.datePickerInit() und dateTimePickerInit() und wurde durch die lib ersetzt [flatpickr](https://flatpickr.js.org/).

Kernfunktionen verwalten das Theme *flatpickr* und die Sprache der Bibliothek abhängig von der Sprache des Kerns.

Zur Erinnerung:

<details>

  <summary markdown="span">date/time pickers</summary>

  ~~~ html
  {% raw %}
  <input id="myDate" class="in_datepicker"/>
  <input id="myTime" class="in_timepicker"/>
  <input id="myCustomDatetime"/>
  {% endraw %}
  ~~~

  ~~~js
  {% raw %}
  jeedomUtils.datePickerInit() //Init alles input.in_datepicker
  jeedomUtils.dateTimePickerInit() //Init alles input.in_timepicker

  jeedomUtils.datePickerInit('Ymd H:i:00', '#myCustomDatetime') //Initiiert die myCustomDatetime-Eingabe mit benutzerdefiniertem Format
  {% endraw %}
  ~~~

</details>



### Deprecated

*Diese Funktionen geben eine Fehlermeldung zurück, funktionieren aber weiterhin:*

#### PHP-Funktionen:

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::byTypeAndSearchConfiguration()`  

#### Js-Funktionen (verfügbar seit Core4.2):

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

#### Js-Variablen (verfügbar seit Core4.3):

`jeedom_sprache` -> `jeeFrontEnd.sprache`  
`userProfils` -> `jeeFrontEnd.userProfils`

> **Aufgefallen**
>
> Diese Änderungen können dazu führen, dass bei vielen Plugins die erforderliche Mindestversion von Jeedom bereitgestellt werden muss. Aus diesem Grund ist die *veraltet* werden nicht in einem Core im Master-Zweig angezeigt, sondern ermöglichen es Entwicklern, zu sehen, was sie korrigieren können.

#### jQuery-Autovervollständigung

Die von jQuery abhängige Autocomplete-Bibliothek wird in einer zukünftigen Version von Core entfernt. Es wird durch die interne Funktion des Kerns ersetzt **input.jeeComplete()**. Dies unterstützt die meisten der vorherigen Optionen (Quelle auf Ajax usw.), korrigiert jedoch mehrere Fehler, bringt neue Verhaltensweisen mit sich (Pfeil nach oben und unten, um einen Vorschlag auszuwählen usw.) und ermöglicht die Verwendung eines einzelnen Containers für mehrere Eingaben, was die Kosten enorm reduziert die Auswirkungen auf das DOM, insbesondere auf die Szenarien.

<details>

  <summary markdown="span">jeeComplete()</summary>

  ~~~js
  {% raw %}
  //jQuery:
  $('input.auto').autocomplete({
    minLength: 1,
    source: dataArray
  })

  //Kern js:
  document.querySelector('input.auto').jeeComplete({
    minLength: 1,
    source: dataArray
  })
  {% endraw %}
  ~~~

</details>

#### jQuery-Bootbox

Die von jQuery abhängige Bootbox-Bibliothek wird in einer zukünftigen Version von Core entfernt. jeeDialog() ersetzt diese Funktionen durch jeeDialog.alarm(), jeeDialog.bestätigen(), jeeDialog.prompt().

<details>

  <summary markdown="span">exemples jeeDialog()</summary>

  ~~~js
  {% raw %}
  wenn (Bedingung) {
    jeeDialog.alert('Das ist falsch, Alter!')
    return
  }

  jeeDialog.prompt('Geben Sie einen neuen Namen ein:', Funktion(Ergebnis) {
    wenn (Ergebnis !== null) {
      //Sachen machen
    }
  })

  jeeDialog.confirm('Möchten Sie das wirklich löschen??', Funktion(Ergebnis) {
    wenn (Ergebnis) {
      //Sachen machen
    } anders {
      //Mach andere Sachen
    }
  })

  {% endraw %}
  ~~~

</details>

#### jQuery-Benutzeroberfläche

Die jQuery-UI-Bibliothek wird in einer zukünftigen Core-Version entfernt. jeeDialog.dialog() überschreibt die Verwendung von Modalen *ui-dialog*.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  ~~~js
  {% raw %}
  //jQuery-Benutzeroberfläche:
  $('#md_modal').dialog({
    title: "{{Systemadministration}}"
  }).laden('index.php?v=d&modal=system.action').dialog('open')

  //Core jeeDialog:
  jeeDialog.dialog({
    title: '{{Systemadministration}}',
    contentUrl: 'index.php?v=d&modal=system.action'
  })

  {% endraw %}
  ~~~

</details>

#### jQuery-Benutzeroberfläche sortierbar

Die jQuery Sortable-Bibliothek wird in einer zukünftigen Core-Version entfernt.
Die SortableJS Lib wurde in Core integriert : [SortableJS](http://sortablejs.github.io/Sortable/)

#### jQuery-Caret

Das jQuery-Plugin *jquery.at.caret* geht auf veraltet. Verwenden Sie „myElement.insertAtCursor(myString)“

#### jQuery-Kontextmenü

Die von jQuery abhängige contextMenu-Bibliothek wird in einer zukünftigen Version von Core entfernt. jeeCtxMenu() überschreibt diese Funktionen.

<details>

  <summary markdown="span">jeeCtxMenu()</summary>

  ~~~js
  {% raw %}
  var myCtxMenu = neues jeeCtxMenu({
    selector: '.nav.nav-tabs li', //Erforderlich!
    appendTo: 'div#div_pageContainer',
    className: '', //Zum Menücontainer hinzugefügt
    items: {
      uniqueNameID: {
        name: '{{Mein Artikel}}',
        isHtmlName: false,
        icon: 'fas fa-zahnräder',
        className: '', //Zum Artikelcontainer hinzugefügt
        callback: function(key, opt) { //Elementrückruf
        }
      },
      sep1: '-----',
    },
    callback: function(key, opt) { //Standardrückruf, wenn nicht für das Element festgelegt
    }
    //isDisable: false,
    /*
    events: {
      show: Funktion (opt) {
      },
      hide: Funktion (opt) {
      }
    },
    */
    /*
    build: Funktion(Auslöser) {
      var contextmenuitems = {}
      zurückkehren {
        callback: Funktion(Taste, Optionen, Ereignis) {
          //Elemente festlegen...
        }
      },
      items: contextmenuitems
    },
    position: Funktion(opt, x, y) {
    },
    */
  })

  {% endraw %}
  ~~~

</details>

#### jQuery FileUpload

Die jQuery-Dateiupload-Bibliothek wird in einer zukünftigen Core-Version entfernt. jeeFileUploader() ersetzt die Verwendung dieser Funktionen.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  ~~~js
  {% raw %}
  //jQuery-Benutzeroberfläche:
  $('#bt_uploadImage').fileupload({
    url: 'core/ajax/plan.ajax.php?action=uploadImage&id=' + id
    dataType: 'json',
    done: Funktion(Ereignis, Daten) {
      //Sachen machen
    }
  })

  //Core jeeFileUploader:
  neuer jeeFileUploader({
    fileInput: document.getElementById('bt_uploadImg'),
    url: 'core/ajax/plan.ajax.php?action=uploadImage&id=' + id
    /*
    add: Funktion(Ereignis, Daten) {
      let currentPath = document.getElementById('bt_uploadImg').getAttribute('data-path')
      data.url = 'core/ajax/jeedom.ajax.php?action=uploadImageIcon&filepath=' + currentPath
      data.submit()
    },
    */
    done: Funktion(Ereignis, Daten) {
      //Sachen machen
    }
  })

  {% endraw %}
  ~~~

</details>

Sehen [domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

> **Tipp**
>
> Sie können Ihre Plugins auf Core ohne Jquery oder Bootstrap testen. Dazu Einstellungen > System > Konfiguration, Registerkarte Geräte, **Core js (Entw)**.

### Optionale Modifikationen

- Mehrere Kontrollkästchen verwalten

In Core wurde eine Funktion eingeführt, um ein Kontextmenü für Kontrollkästchen anzubieten : Alle auswählen, keine, Auswahl umkehren.

Um es zu verwenden, müssen Sie die CSS-Klasse hinzufügen *checkContext* auf die betreffenden Kontrollkästchen und rufen Sie die Funktion auf ``jeedomUtils.setCheckContextMenu()``

Die Kontrollkästchen werden dann entsprechend gruppiert *data-l1key* Und *data-l2key* wenn sie existieren.

Sie können mit dem Attribut auch Gruppen von Kontrollkästchen erstellen *data-context="group1"*.

Schließlich können Sie eine Rückruffunktion wie diese definieren:

````js
var checkContextMenuCallback = function(_el) {
  //_el ist ein HTML-Element.
  _el.triggerEvent('change')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

