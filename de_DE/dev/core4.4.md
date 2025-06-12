## Core v4.4 | Plugin-Entwickler

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

  <summary markdown="span">jQuery to pure js()</summary>

  
  {% raw %}
  //jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  :
  ').)
  ().')

  //jQuery:
  ()
  ]
  ')

  :
  ()
  ]
  ')

  //jQuery:
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

  //jQuery:
  $(function(){
    !')
  })

  :
  (){
    !')
  })

  {% endraw %}
  

</details>

.. ..

:

[](/de_DE/dev/corejs/index)

[ {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

#### 

  


#### ):



#### 

 ** . .().

. ..

#### 

 ** . . [](https://flatpickr.js.org/).

 ** .

:

<details>

  <summary markdown="span">date/time pickers</summary>

  
  {% raw %}
  <input id="myDate" class="in_datepicker"/>
  <input id="myTime" class="in_timepicker"/>
  <input id="myCustomDatetime"/>
  {% endraw %}
  

  
  {% raw %}
  
  

  :i:
  {% endraw %}
  

</details>



### Deprecated

*:*

#### :

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

> **Bemerkt**
>
> Diese Änderungen können dazu führen, dass ein Upgrade auf die erforderliche Jeedom-Mindestversion vieler Plugins erforderlich ist. Aus diesem Grund ist die *veraltet* erscheinen nicht auf einem Core im Master-Zweig, sondern ermöglichen Entwicklern zu sehen, was sie beheben können.

#### jQuery-Autovervollständigung

Die jQuery-abhängige Autocomplete-Bibliothek wird in einer zukünftigen Core-Version entfernt. Es wird durch die interne Funktion des Kerns ersetzt **input.jeeComplete()**. Dies unterstützt die meisten der vorherigen Optionen (Quelle auf Ajax usw.), behebt aber mehrere Fehler, bringt neue Verhaltensweisen (Auf- und Abwärtspfeil zum Auswählen eines Vorschlags usw.) und ermöglicht die Verwendung eines einzelnen Containers für mehrere Eingaben, wodurch die Auswirkungen auf das DOM, insbesondere in Szenarien, stark reduziert werden.

<details>

  <summary markdown="span">jeeComplete()</summary>

  
  {% raw %}
  //jQuery:
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
  

</details>

#### jQuery-Bootbox

Die jQuery-abhängige Bootbox-Bibliothek wird in einer zukünftigen Core-Version entfernt. jeeDialog() ersetzt diese Funktionen durch jeeDialog.alert(), jeeDialog.bestätigen(), jeeDialog.prompt().

<details>

  <summary markdown="span">exemples jeeDialog()</summary>

  
  {% raw %}
  wenn (Bedingung) {
    jeeDialog.alert('Das ist falsch, Alter!')
    return
  }

  jeeDialog.prompt('Neuen Namen eingeben:', Funktion(Ergebnis) {
    wenn (Ergebnis !== null) {
      //Mach Sachen
    }
  })

  jeeDialog.confirm('Möchten Sie das wirklich löschen??', Funktion(Ergebnis) {
    wenn (Ergebnis) {
      //Mach Sachen
    } anders {
      // Andere Sachen machen
    }
  })

  {% endraw %}
  

</details>

#### jQuery-Benutzeroberfläche

Die jQuery UI-Bibliothek wird in einer zukünftigen Version von Core entfernt. jeeDialog.dialog() ersetzt die Verwendung von Modalverben *UI-Dialog*.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  
  {% raw %}
  //jQuery-Benutzeroberfläche:
  $('#md_modal').dialog({
    title: "{{Systemadministration}}"
  }).laden('index.php?v=d&modal=system.action').dialog('öffnen')

  //Kern-jeeDialog:
  jeeDialog.dialog({
    title: '{{Systemadministration}}',
    contentUrl: 'index.php?v=d&modal=system.action'
  })

  {% endraw %}
  

</details>

#### jQuery UI sortierbar

Die jQuery Sortable-Bibliothek wird in einer zukünftigen Version von Core entfernt.
Die SortableJS-Bibliothek wurde in den Core integriert : [SortableJS](http://sortablejs.github.io/Sortable/)

#### jQuery-Caret

Das jQuery-Plugin *jquery.at.caret* wird veraltet. Verwenden Sie `myElement.insertAtCursor(myString)`

#### jQuery-Kontextmenü

Die jQuery-abhängige contextMenu-Bibliothek wird in einer zukünftigen Core-Version entfernt. jeeCtxMenu() ersetzt diese Funktionen.

<details>

  <summary markdown="span">jeeCtxMenu()</summary>

  
  {% raw %}
  var myCtxMenu = neues jeeCtxMenu({
    selector: '.nav.nav-tabs li', //Erforderlich!
    appendTo: 'div#div_pageContainer',
    className: '', //Zum Menücontainer hinzugefügt
    items: {
      uniqueNameID: {
        name: '{{Mein Artikel}}',
        isHtmlName: false,
        icon: 'fas fa-cogs',
        className: '', //Zum Artikelcontainer hinzugefügt
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
      zurückkehren {
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
  

</details>

#### 

. .

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  
  {% raw %}
  //jQuery-Benutzeroberfläche:
  $('#bt_uploadImage').fileupload({
    url: '?
    dataType: 'json',
    done: ) {
      //Mach Sachen
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
      //Mach Sachen
    }
  })

  {% endraw %}
  

</details>

Sehen [](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

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

