## Core v4.4 | Plugin Developers

### Obsolete

- PHP function

`displayException()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

- Js functions (available since Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

### Deprecated

*These functions return an error message, but still work.*

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
> These changes may result in the need to mount the minimum required Jeedom version of many plugins. This is why it is not certain that the *Deprecated* will remain in stable v4.4 but they at least let the devs see what they can fix.

### Optional changes

- Management of multiple checkboxes

A function has been introduced in Core to provide a contextual menu on checkboxes : Select All, None, Reverse Select.

To use it, you have to add the css class *checkContext* on the relevant checkboxes, and call the function ``jeedomUtils.setCheckContextMenu()``

The checkboxes will then be grouped by same *data-l1key* and *data-l2key* if they exist.

You can also make groups of checkboxes with the attribute *data-context="group1"*.

Finally, you can define a callback function like this:

````js
var checkContextMenuCallback = function(_el) {
    _el.trigger('change')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

### Un jour, jQuery ...

jQuery est un framework toujours très utilisé en interface web, and Jeedom s'appuie énormément dessus. Malgré tout, le html5 and les navigateurs récents permettent de plus en plus de s'en passer. L'intérêt pour Jeedom est avant tout la performance, and il n'est pas encore question de supprimer jQuery and ses plugins (jQuery UI, contextmenu, les modales, etc.).

Mais il faut y penser, and commencer un jour !

Le Core 4.4 intègre donc les fonctions de bases que sont setValues() and getValues(), qui sont maintenant également prototypées sur les **NodeList** and **Element**, comme elles le sont sur $.fn historiquement. Quelques fonctions ont également été implémentées comme last(), triggerEvent(), isHidden(), empty(), addClass(),  removeClass(), toggleClass(), hasClass(). Le but n'est pas de refaire un jQuery bien sûr, mais proposer des raccourcis fonctionnels quand c'est nécessaire.

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

Le fichier plugin-template.js and plusieurs pages du Core utilisent maintenant ces fonctions. Vous pouvez bien sûr les utiliser dans les plugins, mais celui-ci devra alors être installé sur un Core 4.4 minimum.