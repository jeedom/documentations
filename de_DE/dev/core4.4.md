## Kern v4.4 | Plugin-Entwickler

### Obsolete

- Js-Funktionen:

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

- Js-Variablen:

`jeedom_language` -> `jeeFrontEnd.language`  
`userProfils` -> `jeeFrontEnd.userProfils`

### Deprecated

- Js-Funktionen:

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

