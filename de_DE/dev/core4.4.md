## .4 | 

###  ...

. . .).

 !

. **** Und ****, comme elles le sont sur $.fn historisch. Einige Funktionen wurden ebenfalls implementiert, wie last(), triggerEvent(), isHidden(), empty(), addClass(), removeClass(), toggleClass(), hasClass(). Das Ziel besteht natürlich nicht darin, ein jQuery neu zu erstellen, sondern bei Bedarf funktionale Verknüpfungen anzubieten.

Für einen einfacheren Übergang und eine bessere Wartung bieten die neuen Funktionen **getValues()** Und **setValues()** auf dem DOM sind jetzt **setJeeValues()** Und **getJeeValues()**.

Darüber hinaus alle Anrufe **Ajax**, sync oder async, durch reine js-Funktionen, die intern für den Core entwickelt wurden. *load()* Und *html()* werden daher von allen js-Klassen und von der Funktion jeedomUtils.loadPage verwendet(). Dies ermöglicht die Steuerung aller Vorgänge ohne Abstraktionsebene und ermöglicht unter anderem das Filtern aller JS-Skripte und CSS-Stylesheets von Drittanbietern (Core und Plugins), um sie in das Dokument zu laden.Kopf und laden Sie sie danach nicht wieder !

Verwaltung von *Veranstaltungen* wird auch schrittweise auf reines js umsteigen. Die Seiten **Synthese** **Armaturenbrett** **Design** Und **Szenario** sind bereits in voller js mit Delegation von Ereignissen.

Es handelt sich um ein riesiges Projekt, sowohl was die Neufassung des bestehenden Systems als auch die Erstellung interner Bibliotheken betrifft, um die Anforderungen des Front-Ends ohne jQuery zu erfüllen. Darüber hinaus müssen jQuery und seine Plugins/Bibliotheken für einige Zeit aufbewahrt werden, damit Plugins. Aber der Weg ist genommen!

Einige Beispiele:

<details>

  <summary markdown="span">jQuery to pure js()<summary>

  ~~~
  {% raw %}
  jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  //Reines js:
  document.querySelector('#table_objectSummary tbody').insertAdjacentHTML('vorEnde', tr)
  document.querySelectorAll('#table_objectSummary tbody tr').letzte().setJeeValues(_summary, '.objectSummaryAttr')

  jQuery:
  var eqId = $('.eqLogicAttr[data-l1key=id]').Wert()
  var konfiguration = $('#config').getValues('.configKey')[0]
  var Ausdruck = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

  //Reines js:
  var eqId = document.querySelector('.eqLogicAttr[data-l1key="id"]').jeeValue()
  var config = document.getElementById('config').getJeeValues('.configKey')[0]
  var Ausdruck = this.closest('.actionOnMessage').getJeeValues('.expressionAttr')

  jQuery:
  addMyTr: Funktion(_data) {
    var tr = '>'
    tr += '>'
    tr += '>'
    tr += '>'
    lass neueZeile = $(tr)
    newRow.setValues(Daten, '.mytrDataAttr')
    $('#table_stuff tbody').append(newRow)
    //neue Zeile zurückgeben
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
    //neue Zeile zurückgeben
  }

  jQuery:
  $(function(){
    console.log('Dom bereit!')
  })

  //Kern-JS:
  domUtils(Funktion(){
    console.log('Dom bereit!')
  })

  {% endraw %}
  ~~~

<details>

Die Plugin-Vorlagendatei.js und die meisten Core-Seiten verwenden jetzt diese Funktionen. Sie können sie natürlich in Plugins verwenden, aber dann müssen sie auf einem Core 4 installiert werden.4 mindestens.

Kernspezifische DOM-Funktionen:

[Doc Core js](/de_DE/devcorejsindex)

[domUtils {}](https:github.comjeedomcoreblobalphacoredomdom.utils.js)

[domUI](https:github.comjeedomcoreblobalphacoredomdom.ui.js)



### Obsolete

#### PHP-Funktion

`displayException()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

#### Js-Funktionen (verfügbar seit Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toastr / Tooltipster

Die Lib *Toast* wurde aus Core entfernt. Es wurde über die jeedomUtils-Funktionen verwendet.showAlert() und hideAlert() und wurde durch die Core-interne Funktion jeeDialog.toast ersetzt().

Die jQuery-abhängige Tooltipster-Bibliothek wurde ebenfalls durch die Tippy js-Bibliothek ersetzt. Verwenden von jeedomUtils.initTooltips() durch Plugins ändert sich nicht.

#### jQuery Datums-/Uhrzeitauswahl

Die Lib *Datums-/Uhrzeitauswahl* wurde aus Core entfernt. Es wurde über die jeedomUtils-Funktionen verwendet.datePickerInit() und dateTimePickerInit() und wurde durch die lib ersetzt [Flachpicker](https:flatpickr.js.org).

Kernfunktionen verwalten das Theme *Flachpicker* und die Sprache der Bibliothek abhängig von der Sprache des Core.

Zur Erinnerung:

<details>

  <summary markdown="span">datetime pickers<summary>

  ~~~ html
  {% raw %}
  <input id="myDate" class="in_datepicker">
  <input id="myTime" class="in_timepicker">
  <input id="myCustomDatetime">
  {% endraw %}
  ~~~

  ~~~
  {% raw %}
  jeedomUtils.datePickerInit() //Init alle input.in_datepicker
  jeedomUtils.dateTimePickerInit() //Init alle input.in_timepicker

  jeedomUtils.datePickerInit('Ymd H:i:00‘, ‚#myCustomDatetime‘) //Initiiert die myCustomDatetime-Eingabe mit benutzerdefiniertem Format
  {% endraw %}
  ~~~

<details>



### Deprecated

*Diese Funktionen geben eine Fehlermeldung zurück, funktionieren aber trotzdem:*

#### PHP-Funktionen:

`eqLogic::::  

#### ):

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

#### ):

  


> ****
>
> .  ** .

#### 

.  **()**. .

<details>

  <summary markdown="span">jeeComplete()<summary>

  ~~~
  {% raw %}
  jQuery:
  $('input.auto').autocomplete({
    minLength: 1,
    source: dataArray
  })

  //Kern-JS:
  ({
    minLength: 1,
    source: dataArray
  })
  {% endraw %}
  ~~~

<details>

#### 

. ..().

<details>

  <summary markdown="span">exemples jeeDialog()<summary>

  ~~~
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
      
    }  {
      
    }
  })

  {% endraw %}
  ~~~

<details>

#### 

. **.

<details>

  <summary markdown="span">exemples ()<summary>

  ~~~
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

<details>

#### 

.
 : [](http:sortablejs.github.ioSortable)

#### 

 ** . 

#### 

. .

<details>

  <summary markdown="span">jeeCtxMenu()<summary>

  ~~~
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
       {
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
  ~~~

<details>

#### 

. .

<details>

  <summary markdown="span">exemples ()<summary>

  ~~~
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
    *
    add: ) {
      ')
      ?
      ()
    },
    *
    done: ) {
      
    }
  })

  {% endraw %}
  ~~~

<details>

 [domUI](https:github.comjeedomcoreblobalphacoredomdom.ui.js)

> ****
>
> . , **)**.

### 

- 

 : .

 **  ``jeedomUtils.setCheckContextMenu()``

 ** Und ** .

 *"*.

:

````js
) {
  .
  ')
}
)
````

