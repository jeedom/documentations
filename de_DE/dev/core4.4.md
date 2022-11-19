## Kern v4.4 | Plugin-Entwickler

### Obsolete

- PHP-Funktion

`displayException()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

- Js-Funktionen (verfügbar seit Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

### Deprecated

*Diese Funktionen geben eine Fehlermeldung zurück, funktionieren aber trotzdem.*

- PHP-Funktionen:

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::byTypeAndSearchConfiguration()‘  

- Js-Funktionen (verfügbar seit Core4.2):

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

- Js-Variablen (verfügbar seit Core4.3):

`jeedom_language` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

> **Anmerkung**
>
> Diese Änderungen können dazu führen, dass die mindestens erforderliche Jeedom-Version vieler Plugins gemountet werden muss. Deshalb ist es nicht sicher, dass die *Veraltet* bleibt in Stable v4.4, aber sie lassen die Entwickler zumindest sehen, was sie beheben können.

### Optionale Änderungen

- Verwaltung mehrerer Checkboxen

In Core wurde eine Funktion eingeführt, um ein Kontextmenü für Kontrollkästchen bereitzustellen : Wählen Sie Alle, Keine, Auswahl umkehren.

Um es zu verwenden, müssen Sie die CSS-Klasse hinzufügen *checkContext* auf die entsprechenden Checkboxen und rufen Sie die Funktion auf ``jeedomUtils.setCheckContextMenu()``

Die Kontrollkästchen werden dann nach denselben gruppiert *data-l1key* und *data-l2key* wenn sie existieren.

Sie können mit dem Attribut auch Gruppen von Kontrollkästchen erstellen *data-context="Gruppe1"*.

Schließlich können Sie eine Callback-Funktion wie diese definieren:

````js
var checkContextMenuCallback = function(_el) {
    _el.trigger('ändern')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

### Un jour, jQuery ...

jQuery est un framework toujours très utilisé en interface web, und Jeedom s'appuie énormément dessus. Malgré tout, le html5 und les navigateurs récents permettent de plus en plus de s'en passer. L'intérêt pour Jeedom est avant tout la performance, und il n'est pas encore question de supprimer jQuery und ses plugins (jQuery UI, contextmenu, les modales, etc.).

Mais il faut y penser, und commencer un jour !

Le Core 4.4 intègre donc les fonctions de bases que sont setValues() und getValues(), qui sont maintenant également prototypées sur les **NodeList** und **Element**, comme elles le sont sur $.fn historiquement. Quelques fonctions ont également été implémentées comme last(), triggerEvent(), isHidden(), empty(), addClass(),  removeClass(), toggleClass(), hasClass(). Le but n'est pas de refaire un jQuery bien sûr, mais proposer des raccourcis fonctionnels quand c'est nécessaire.

Quelques exemples:

<details>

  <summary markdown="span">jQuery to pure js()</summary>

    ~~~ js
    {% raw %}
    $('#table_objectSummary tbody').append(tr)
    $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

    //Devient:
    document.querySelector('#table_objectSummary tbody').insertAdjacentHTML('beforeend', tr)
    document.querySelectorAll('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

    //Ou:
    var eqId = $('.eqLogicAttr[data-l1key=id]').value()
    var config = $('#config').getValues('.configKey')[0]
    var expression = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

    //Devient:
    var eqId = document.querySelector('.eqLogicAttr[data-l1key="id"]').jeeValue()
    var config = document.getElementById('config').getValues('.configKey')[0]
    var expression = this.closest('.actionOnMessage').getValues('.expressionAttr')
    {% endraw %}
    ~~~

</details>

Le fichier plugin-template.js und plusieurs pages du Core utilisent maintenant ces fonctions. Vous pouvez bien sûr les utiliser dans les plugins, mais celui-ci devra alors être installé sur un Core 4.4 minimum.