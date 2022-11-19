## Core v4.4 | Développeurs de plugin

### Obsolete

- Fonction php

`displayExeption()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

- Fonctions js (disponibles depuis Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

### Deprecated

*Ces fonctions renvoient un message d'erreur, mais fonctionnent encore.*

- Fonctions php:

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::byTypeAndSearchConfiguration()`  

- Fonctions js (disponibles depuis Core4.2):

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

- Variables js (disponibles depuis Core4.3):

`jeedom_langage` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

> **Remarque**
>
> Ces modifications peuvent entraîner la nécessité de monter la version Jeedom minimale requise de nombreux plugins. C'est pourquoi il n'est pas certains que les *deprecated* resteront en stable v4.4 mais ils permettent au moins aux développeurs de voir ce qu'ils peuvent corriger.

### Modifications optionnelles

- Gestion de checkboxs multiples

Une fonction a été introduite dans le Core pour proposer un menu contextuel sur les checkbox : Sélectionner toutes, aucune, Sélection inversée.

Pour l'utiliser, il faut ajouter la class css *checkContext* sur les checkboxs concernées, et appeller la fonction ``jeedomUtils.setCheckContextMenu()``

Les checkboxs seront alors groupées par même *data-l1key* et *data-l2key* si ils existent.

Vous pouvez également faire des groupes de checkboxs avec l'attribut *data-context="group1"*.

Enfin, vous pouvez définir une fonction callback de la sorte:

````js
var checkContextMenuCallback = function(_el) {
    _el.trigger('change')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

### Un jour, jQuery ...

jQuery est un framework toujours très utilisé en interface web, et Jeedom s'appuie énormément dessus. Malgré tout, le html5 et les navigateurs récents permettent de plus en plus de s'en passer. L'intérêt pour Jeedom est avant tout la performance, et il n'est pas encore question de supprimer jQuery et ses plugins (jQuery UI, contextmenu, les modales, etc.).

Mais il faut y penser, et commencer un jour !

Le Core 4.4 intègre donc les fonctions de bases que sont setValues() et getValues(), qui sont maintenant également prototypées sur les **NodeList** et **Element**, comme elles le sont sur $.fn historiquement. Quelques fonctions ont également été implémentées comme last(), triggerEvent(), isHidden(), empty(), addClass(),  removeClass(), toggleClass(), hasClass(). Le but n'est pas de refaire un jQuery bien sûr, mais proposer des raccourcis fonctionnels quand c'est nécessaire.

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

Le fichier plugin-template.js et plusieurs pages du Core utilisent maintenant ces fonctions. Vous pouvez bien sûr les utiliser dans les plugins, mais celui-ci devra alors être installé sur un Core 4.4 minimum.