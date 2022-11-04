## Núcleo v4.4 | Desarrolladores de complementos

### Obsolete

- Funciones js:

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

- Js-variables:

`jeedom_language` -> `jeeFrontEnd.language`  
`perfiles de usuario` -> `jeeFrontEnd.userProfils`

### Deprecated

- Funciones js:

`jeedom.eqLogic.buildSelectCmd` -> `jeedom.eqLogic.buildSelectCmd`  
`checkPageModified` -> `jeedomUtils.checkPageModified`  
`loadPage` -> `jeedomUtils.loadPage`  
`initPage` -> `jeedomUtils.initPage`  
`initTooltips` -> `jeedomUtils.initTooltips`  
`initTableSorter` -> `jeedomUtils.initTableSorter`  
`initHelp` -> `jeedomUtils.initHelp`  
`datePickerInit` -> `jeedomUtils.datePickerInit`  
`normTextLower` -> `jeedomUtils.normTextLower`  
`dormir` -> `jeedomUtils.dormir`  
`uniqId` -> `jeedomUtils.uniqId`  
`taAutosize` -> `jeedomUtils.taAutosize`  
`hexToRgb` -> `jeedomUtils.hexToRgb`  
`componentToHex` -> `jeedomUtils.componentToHex`  
`rgbToHex` -> `jeedomUtils.rgbToHex`  
`addOrUpdateUrl` -> `jeedomUtils.addOrUpdateUrl`  
`posiciónEqLogic` -> `jeedomUtils.positionEqLogic`  
`chooseIcon` -> `jeedomUtils.chooseIcon`  
`getOpenedModal` -> `jeedomUtils.getOpenedModal`  

### Cambios opcionales

- Gestión de múltiples casillas de verificación

Se ha introducido una función en Core para proporcionar un menú contextual en las casillas de verificación : Seleccionar todo, Ninguno, Selección inversa.

Para usarlo, debes agregar la clase css *comprobar contexto* en las casillas de verificación correspondientes y llamar a la función ``jeedomUtils.setCheckContextMenu()``

Las casillas de verificación se agruparán por el mismo *datos-l1key* y *datos-l2key* si existen.

También puede hacer grupos de casillas de verificación con el atributo *contexto de datos = "grupo1"*.

Finalmente, puede definir una función de devolución de llamada como esta:

````js
var checkContextMenuCallback = function(_el) {
    _el.trigger('cambiar')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

