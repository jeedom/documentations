## Kern v4.4 | Plugin-Entwickler

### Obsolete

- PHP-Funktion

`displayException()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

- Js-Funktionen (verfügbar seit Core4.2):

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

