## Core v4.4 | Développeurs de plugin

### Obsolete

- Fonctions js:

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

- Variables js:

`jeedom_langage` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

### Deprecated

- Fonctions js:

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

