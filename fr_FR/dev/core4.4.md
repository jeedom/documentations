## Core v4.4 | Développeurs de plugin

### Un jour, jQuery ...

jQuery est un framework toujours très utilisé en interface web, et Jeedom s'appuie historiquement énormément dessus. Malgré tout, le html5 et les navigateurs récents permettent de plus en plus de s'en passer. L'intérêt pour Jeedom est avant tout la performance, et il n'est pas encore question de supprimer jQuery et ses plugins (jQuery UI, contextmenu, les modales, autocomplete, tablesorter, etc.).

Mais il faut y penser, et commencer un jour !

Le Core 4.4 intègre donc les fonctions de bases que sont setValues() et getValues(), qui sont maintenant également prototypées sur les **NodeList** et **Element**, comme elles le sont sur $.fn historiquement. Quelques fonctions ont également été implémentées comme last(), triggerEvent(), isHidden(), empty(), addClass(),  removeClass(), toggleClass(), hasClass(). Le but n'est pas de refaire un jQuery bien sûr, mais proposer des raccourcis fonctionnels quand c'est nécessaire.

Pour une transition plus facile et une meilleure maintenance, les nouvelles fonctions **getValues()** et **setValues()** sur le DOM sont maintenant **setJeeValues()** et **getJeeValues()**.

De plus, tous les appels **Ajax**, sync ou async, passent par des fonctions pur js développées en interne pour le Core. *load()* et *html()* sont donc utilisés par toutes les class js et par la fonction jeedomUtils.loadPage(). Cela permet de maîtriser tout ce qu'il se passe sans couche d'abstraction, et a entre autres, permis de filtrer tous les scripts js et stylesheets css venant de 3rdparty (core et plugins) pour les charger dans le document.head et ne pas les recharger ensuite !

La gestion des *events* passera également progressivement en pur js. Les pages **Synthèse** **Dashboard** **Design** et **Scenario** sont déjà en full js avec délégation des events.

C'est un chantier énorme, autant dans la réécriture de l'existant que dans la création de libs interne pour répondre aux besoins du front-end sans jQuery. De plus, il faudra conserver jQuery et ses plugins/libs encore quelques temps pour les plugins. Mais la route est prise!

Quelques exemples:

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
    var tr = '<tr>'
    tr += '<td>'
    tr += '</td>'
    tr += '</tr>'
    let newRow = $(tr)
    newRow.setValues(data, '.mytrDataAttr')
    $('#table_stuff tbody').append(newRow)
    //return newRow
  }

  //Pure js:
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

  //Core js:
  domUtils(function(){
    console.log('Dom ready!')
  })

  {% endraw %}
  ~~~

</details>

Le fichier plugin-template.js et la plupart des pages du Core utilisent maintenant ces fonctions. Vous pouvez bien sûr les utiliser dans les plugins, mais ceux-ci devront alors être installé sur un Core 4.4 minimum.

fonctions DOM propres au Core:

[Doc Core js](/fr_FR/dev/corejs/index)

[domUtils {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

#### Fonction php

`displayExeption()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

#### Fonctions js (disponibles depuis Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

#### jQuery Toastr / Tooltipster

La lib *toastr* a été supprimée du Core. Elle était utilisée au travers des fonctions jeedomUtils.showAlert() et hideAlert() et a été remplacée par la fonction interne du Core jeeDialog.toast().

La lib Tooltipster, dépendante de jQuery, a également été remplacée par la lib Tippy js. L'utilisation de jeedomUtils.initTooltips() par les plugins ne change pas.

#### jQuery datetimepicker

La lib *datetimepicker* a été supprimée du Core. Elle était utilisée au travers des fonctions jeedomUtils.datePickerInit() et dateTimePickerInit() et a été remplacée par la lib [flatpickr](https://flatpickr.js.org/).

Les fonctions du Core gèrent le thème *flatpickr* et la langue de la lib en fonction de la langue du Core.

Pour rappel:

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

  jeedomUtils.datePickerInit('Y-m-d H:i:00', '#myCustomDatetime') //Will init myCustomDatetime input with custom format
  {% endraw %}
  ~~~

</details>



### Deprecated

*Ces fonctions renvoient un message d'erreur, mais fonctionnent encore:*

#### Fonctions php:

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::byTypeAndSearchConfiguration()`  

#### Fonctions js (disponibles depuis Core4.2):

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

#### Variables js (disponibles depuis Core4.3):

`jeedom_langage` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

> **Remarque**
>
> Ces modifications peuvent entraîner la nécessité de monter la version Jeedom minimale requise de nombreux plugins. C'est pourquoi les *deprecated* n’apparaissent pas sur un Core en branche master, mais permettent aux développeurs de voir ce qu'ils peuvent corriger.

#### jQuery Autocomplete

La lib Autocomplete, dépendante de jQuery, sera supprimée dans une future version du Core. Elle est remplacée par la fonction interne du Core **input.jeeComplete()**. Celle-ci supporte la plupart des options précédentes (source sur ajax etc), mais corrige plusieurs défauts, apporte de nouveaux comportements (flèche haut et bas pour sélectionner une proposition, etc) et permet d'utiliser un seul container pour plusieurs inputs, réduisant énormément l'impact sur le DOM, notamment sur les scénarios.

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

La lib bootbox, dépendante de jQuery, sera supprimée dans une future version du Core. jeeDialog() remplace ces fonctions, avec jeeDialog.alert(), jeeDialog.confirm(), jeeDialog.prompt().

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

La lib jQuery UI sera supprimée dans une future version du Core. jeeDialog.dialog() remplace l'utilisation des modales *ui-dialog*.

<details>

  <summary markdown="span">exemples jeeDialog.dialog()</summary>

  ~~~ js
  {% raw %}
  //jQuery UI:
  $('#md_modal').dialog({
    title: "{{Administration système}}"
  }).load('index.php?v=d&modal=system.action').dialog('open')

  //Core jeeDialog:
  jeeDialog.dialog({
    title: '{{Administration système}}',
    contentUrl: 'index.php?v=d&modal=system.action'
  })

  {% endraw %}
  ~~~

</details>

#### jQuery UI Sortable

La lib jQuery Sortable sera supprimée dans une future version du Core.
La Lib SortableJS a été intégré au Core : [SortableJS](http://sortablejs.github.io/Sortable/)

#### jQuery caret

Le plugin jQuery *jquery.at.caret* passe en deprecated. Utiliser `myElement.insertAtCursor(myString)`

#### jQuery contextMenu

La lib contextMenu, dépendante de jQuery, sera supprimée dans une future version du Core. jeeCtxMenu() remplace ces fonctions.

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
        name: '{{Mon item}}',
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

La lib jQuery fileupload sera supprimée dans une future version du Core. jeeFileUploader() remplace l'utilisation de ces fonctions.

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

Voir [domUI](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

> **Tip**
>
> Vous pouvez tester vos plugins sur le Core sans Jquery ni Bootstrap. Pour cela, Réglages > Système > Configuration, onglet équipements, **Core js (dev)**.

### Modifications optionnelles

- Gestion de checkboxs multiples

Une fonction a été introduite dans le Core pour proposer un menu contextuel sur les checkbox : Sélectionner toutes, aucune, Sélection inversée.

Pour l'utiliser, il faut ajouter la class css *checkContext* sur les checkboxs concernées, et appeller la fonction ``jeedomUtils.setCheckContextMenu()``

Les checkboxs seront alors groupées par même *data-l1key* et *data-l2key* si ils existent.

Vous pouvez également faire des groupes de checkboxs avec l'attribut *data-context="group1"*.

Enfin, vous pouvez définir une fonction callback de la sorte:

````js
var checkContextMenuCallback = function(_el) {
  //_el is an html element.
  _el.triggerEvent('change')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

