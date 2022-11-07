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

