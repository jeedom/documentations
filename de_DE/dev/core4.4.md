## Kern v4.4 | Plugin-Entwickler

### Eines Tages jQuery ...

jQuery ist ein Framework, das in Webschnittstellen immer noch weit verbreitet ist, und Jeedom verlässt sich historisch stark darauf. Trotz allem machen es html5 und neuere Browser zunehmend möglich, darauf zu verzichten. Das Interesse für Jeedom ist vor allem die Leistung, und es kommt nicht in Frage, jQuery und seine Plugins (jQuery UI, Kontextmenü, Modals, Autocomplete, Tablesorter usw.) zu entfernen.).

Aber man muss darüber nachdenken und eines Tages damit anfangen !

Kern 4.4 integriert daher die Basisfunktionen setValues() und getValues(), die nun auch auf der prototypisiert sind **Knotenliste** und **Element**, comme elles le sont sur $.fn historisch. Einige Funktionen wurden ebenfalls implementiert, wie last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass(), hasClass(). Das Ziel ist natürlich nicht, eine jQuery zu wiederholen, sondern bei Bedarf funktionale Verknüpfungen anzubieten.

Für einen einfacheren Umstieg und eine bessere Wartung sorgen die neuen Funktionen **getValues()** und **setValues()** auf dem DOM sind jetzt **setJeeValues()** und **getJeeValues()**.

Außerdem alle Anrufe **Ajax**, sync oder async, durchlaufen Sie reine js-Funktionen, die intern für den Core entwickelt wurden. *load()* und *html()* werden daher von allen Klassen-js und von der Funktion jeedomUtils.loadPage verwendet(). Dies ermöglicht es Ihnen, alles zu kontrollieren, was ohne eine Abstraktionsschicht passiert, und hat es unter anderem ermöglicht, alle js-Skripte und CSS-Stylesheets, die von Drittanbietern (Core und Plugins) stammen, zu filtern, um sie in das Dokument zu laden.Kopf und laden Sie sie danach nicht neu !

Die Geschäftsführung von *Veranstaltungen* wird auch nach und nach auf reines js umstellen. Die Seiten **Synthese** **Armaturenbrett** **Design** und **Skript** sind bereits in vollem js mit Ereignisdelegierung.

Es ist ein riesiges Projekt, sowohl beim Umschreiben des Bestehenden als auch beim Erstellen interner Bibliotheken, um die Anforderungen des Front-Ends ohne jQuery zu erfüllen. Außerdem wird es notwendig sein, jQuery und seine Plugins/Libs für Plugins noch eine Weile aufzubewahren. Aber der Weg ist genommen!

Einige Beispiele:

<details>

  <summary markdown="span">jQuery to pure js()</summary>

  ~~~ js
  {% raw %}
  //jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  //reines js:
  document.querySelector('#table_objectSummary tbody').insertAdjacentHTML('beforeend', tr)
  document.querySelectorAll('#table_objectSummary tbody tr').last().setJeeValues(_summary, '.objectSummaryAttr')

  //jQuery:
  var eqId = $('.eqLogicAttr[data-l1key=id]').value()
  var config = $('#config').getValues('.configKey')[0]
  var expression = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

  //reines js:
  var eqId = document.querySelector('.eqLogicAttr[data-l1key="id"]').jeeValue()
  var config = document.getElementById('config').getJeeValues('.configKey')[0]
  var expression = this.closest('.actionOnMessage').getJeeValues('.expressionAttr')

  //jQuery:
  addMyTr: funktion(_daten) {
    var tr = ' <tr>'
    tr += ' <td>'
    tr += ' </td>'
    tr += ' </tr>'
    let newRow = $(tr)
    newRow.setValues(data, '.mytrDataAttr')
    $('#table_stuff tbody').append(newRow)
    //neueReihe zurückgeben
  }

  //reines js:
  addMyTr: funktion(_daten) {
    var tr = ' <tr>'
    tr += ' <td>'
    tr += ' </td>'
    tr += ' </tr>'
    let newRow = document.createElement('tr')
    newRow.innerHTML = tr
    newRow.setJeeValues(_data, '.mytrDataAttr')
    document.getElementById('table_stuff').querySelector('tbody').appendChild(newRow)
    //neueReihe zurückgeben
  }

  //jQuery:
  $(function(){
    console.log('Dom bereit!')
  })

  // Corejs:
  domUtils(Funktion(){
    console.log('Dom bereit!')
  })

  {% endraw %}
  ~~~

</details>

Die Plugin-Template-Datei.js und die meisten Core-Seiten verwenden diese Funktionen jetzt. Sie können sie natürlich in Plugins verwenden, aber diese müssen dann auf einem Core 4 installiert werden.4 oder mehr.

Core-spezifische DOM-Funktionen:

[DocCore js](/de_DE/dev/corejs/index)

[domUtils {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

#### PHP-Funktion

`displayException()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

#### Js-Funktionen (verfügbar seit Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery-Toast / Tooltipster

Die lib *Toasten* wurde aus Core entfernt. Es wurde über jeedomUtils-Funktionen verwendet.showAlert() und hideAlert() und wurde durch die interne Kernfunktion jeeDialog.toast ersetzt().

Die von jQuery abhängige Tooltipster-Bibliothek wurde ebenfalls durch die Tippy js-Bibliothek ersetzt. Die Verwendung von jeedomUtils.initTooltips() durch Plugins ändert sich nicht.

#### jQuery datetimepicker

Die lib *datetimepicker* wurde aus Core entfernt. Es wurde über jeedomUtils-Funktionen verwendet.datePickerInit() und dateTimePickerInit() und wurde durch die lib ersetzt [Flatpickr](https://flatpickr.js.org/).

Kernfunktionen verwalten das Thema *Flatpickr* und die Sprache der Bibliothek gemäß der Core-Sprache.

Als eine Erinnerung:

<details>

  <summary markdown="span">date/time pickers</summary>

  ~~~.html
  {% raw %}
  <input id="myDate" class="in_datepicker"/>
  <input id="myTime" class="in_timepicker"/>
  <input id="myCustomDatetime"/>
  {% endraw %}
  ~~~

  ~~~ js
  {% raw %}
  jeedomUtils.datePickerInit() // Alles initialisieren input.in_datepicker
  jeedomUtils.dateTimePickerInit() // Alles initialisieren input.in_timepicker

  jeedomUtils.datePickerInit('Ymd H:i:00', '#myCustomDatetime') //Initiiert die myCustomDatetime-Eingabe mit benutzerdefiniertem Format
  {% endraw %}
  ~~~

</details>



### Deprecated

*Diese Funktionen geben eine Fehlermeldung zurück, funktionieren aber trotzdem:*

#### PHP-Funktionen:

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::byTypeAndSearchConfiguration()‘  

#### Js-Funktionen (verfügbar seit Core4.2):

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
„uniqId“ -> „jeedomUtils.uniqId“  
`taAutosize` -> `jeedomUtils.taAutosize`  
`hexToRgb` -> `jeedomUtils.hexToRgb`  
`componentToHex` -> `jeedomUtils.componentToHex`  
`rgbToHex` -> `jeedomUtils.rgbToHex`  
`addOrUpdateUrl` -> `jeedomUtils.addOrUpdateUrl`  
`positionEqLogic` -> `jeedomUtils.positionEqLogic`  
`chooseIcon` -> `jeedomUtils.chooseIcon`  
`getOpenedModal` -> `jeedomUtils.getOpenedModal`  

#### Js-Variablen (verfügbar seit Core4.3):

`jeedom_language` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

> **Anmerkung**
>
> Diese Änderungen können dazu führen, dass die mindestens erforderliche Jeedom-Version vieler Plugins gemountet werden muss. Deshalb die *Veraltet* nicht auf einem V4-Stable Branch Core erscheinen, sondern Entwicklern ermöglichen, zu sehen, was sie beheben können.

#### jQuery-Autovervollständigung

Die jQuery-abhängige Autocomplete-Bibliothek wird in einer zukünftigen Core-Version entfernt. Sie wird durch die Core-interne Funktion ersetzt **input.jeeComplete()**. Dies unterstützt die meisten der vorherigen Optionen (Quelle auf Ajax usw.), korrigiert jedoch mehrere Fehler, bringt neue Verhaltensweisen (Pfeil nach oben und unten, um einen Vorschlag auszuwählen usw.) und ermöglicht die Verwendung eines einzigen Containers für mehrere Eingaben, wodurch die Auswirkungen auf enorm reduziert werden des DOM, insbesondere zu den Szenarien.

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

#### jQuery-Bootbox

Die von jQuery abhängige Bootbox-Bibliothek wird in einer zukünftigen Core-Version entfernt. jeeDialog() ersetzt diese Funktionen durch jeeDialog.alert(), jeeDialog.bestätigen(), jeeDialog.prompt().

<details>

  <summary markdown="span">exemples jeeDialog()</summary>

  ~~~ js
  {% raw %}
  wenn (Bedingung) {
    jeeDialog.alert('Das ist falsch, Alter!')
    return
  }

  jeeDialog.prompt('Neuen Namen eingeben:', Funktion (Ergebnis) {
    wenn (Ergebnis !== null) {
      //Sachen machen
    }
  })

  jeeDialog.confirm('Wollen Sie das wirklich löschen?', Funktion (Ergebnis) {
    wenn (Ergebnis) {
      //Sachen machen
    } anders {
      // Mach andere Sachen
    }
  })

  {% endraw %}
  ~~~

</details>

#### jQuery-Benutzeroberfläche

Die jQuery-UI-Bibliothek wird in einer zukünftigen Core-Version entfernt. jeeDialog.dialog() ersetzt die Verwendung von Modalen *ui-dialog*.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  ~~~ js
  {% raw %}
  //jQueryUI:
  $('#md_modal').dialog({
    title: "{{Systemadministration}}"
  }).load('index.php?v=d&modal=system.action').dialog('öffnen')

  //Core jeeDialog:
  jeeDialog.dialog({
    title: '{{Systemadministration}}',
    contentUrl: 'index.php?v=d&modal=system.aktion'
  })

  {% endraw %}
  ~~~

</details>

#### jQuery-Benutzeroberfläche sortierbar

Die jQuery Sortable lib wird in einer zukünftigen Core-Version entfernt.
Lib SortableJS wurde in Core integriert : [SortableJS](http://sortablejs.github.io/Sortable/)

#### jQuery-Eingabezeichen

Das jQuery-Plugin *jquery.at.caret* wird verworfen. Verwenden Sie „myElement.insertAtCursor(myString)“

#### jQuery-Kontextmenü

Die von jQuery abhängige contextMenu-Bibliothek wird in einer zukünftigen Version von Core entfernt. jeeCtxMenu() ersetzt diese Funktionen.

<details>

  <summary markdown="span">jeeCtxMenu()</summary>

  ~~~ js
  {% raw %}
  var myCtxMenu = neues jeeCtxMenu({
    selector: '.nav.nav-tabs li', //Erforderlich!
    appendTo: 'div#div_pageContainer',
    className: '', //Zu Menücontainer hinzugefügt
    items: {
      uniqueNameID: {
        name: '{{Mein Artikel}}',
        isHtmlName: false,
        icon: 'fas fa Zahnräder',
        className: '', //Hinzugefügt zum Artikelcontainer
        callback: function(key, opt) { //Item-Callback
        }
      },
      sep1: '-----',
    },
    callback: function(key, opt) { //Standard-Callback, wenn nicht auf Item gesetzt
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
    build: Funktion (Auslöser) {
      var Kontextmenüeinträge = {}
      Rückkehr {
        callback: Funktion (Schlüssel, Optionen, Ereignis) {
          //Setitems...
        }
      },
      items: contextmenuitems
    },
    position: funktion(opt, x, y) {
    },
    */
  })

  {% endraw %}
  ~~~

</details>

#### jQuery FileUpload

La lib jQuery fileupload sera supprimée dans une future version du Core. jeeFileUploader() remplace l'utilisation de ces fonctions.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  ~~~ js
  {% raw %}
  //jQueryUI:
  $('#bt_uploadImage').fileupload({
    url: 'core/ajax/plan.ajax.php?action=uploadImage&id=' + id
    dataType: 'json',
    done: function(event, data) {
      //Sachen machen
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
      //Sachen machen
    }
  })

  {% endraw %}
  ~~~

</details>

Sehen [domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

> **Spitze**
>
> Sie können Ihre Plugins auf Core ohne Jquery oder Bootstrap testen. Dazu Einstellungen > System > Konfiguration, Registerkarte Geräte, **Corejs (Entw)**.

### Optionale Änderungen

- Verwaltung mehrerer Checkboxen

In Core wurde eine Funktion eingeführt, um ein Kontextmenü für Kontrollkästchen bereitzustellen : Wählen Sie Alle, Keine, Auswahl umkehren.

Um es zu verwenden, müssen Sie die CSS-Klasse hinzufügen *checkContext* auf die entsprechenden Checkboxen und rufen Sie die Funktion auf ``jeedomUtils.setCheckContextMenu()``

Die Kontrollkästchen werden dann nach denselben gruppiert *data-l1key* und *data-l2key* wenn sie existieren.

Sie können mit dem Attribut auch Gruppen von Kontrollkästchen erstellen *data-context="Gruppe1"*.

Schließlich können Sie eine Callback-Funktion wie diese definieren:

````js
var checkContextMenuCallback = function(_el) {
  //_el ist ein HTML-Element.
  _el.triggerEvent('ändern')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

