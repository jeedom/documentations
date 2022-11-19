## Núcleo v4.4 | Desarrolladores de complementos

### Obsolete

- Función PHP

`displayException()` -> `displayException()`  
`convertDayEnToFr()` -> `convertDayFromEn()`

- Funciones js (disponible desde Core4.3):

`displayPlan()` -> `jeeFrontEnd.plan.displayPlan()`

### Deprecated

*Estas funciones devuelven un mensaje de error, pero aún funcionan.*

- Funciones PHP:

`eqLogic::byTypeAndSearhConfiguration()` -> `eqLogic::porTypeAndSearchConfiguration()`  

- Funciones js (disponible desde Core4.2):

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

- Js variables (disponible desde Core4.3):

`jeedom_language` -> `jeeFrontEnd.language`  
`perfiles de usuario` -> `jeeFrontEnd.userProfils`

> **Observación**
>
> Estos cambios pueden resultar en la necesidad de montar la versión mínima requerida de Jeedom de muchos complementos. Por eso no es seguro que el *Obsoleto* permanecerá en v4 estable.4 pero al menos dejan que los desarrolladores vean lo que pueden arreglar.

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

### Un jour, jQuery ...

jQuery est un framework toujours très utilisé en interface web, y Jeedom s'appuie énormément dessus. Malgré tout, le html5 y les navigateurs récents permettent de plus en plus de s'en passer. L'intérêt pour Jeedom est avant tout la performance, y il n'est pas encore question de supprimer jQuery y ses plugins (jQuery UI, contextmenu, les modales, etc.).

Mais il faut y penser, y commencer un jour !

Le Core 4.4 intègre donc les fonctions de bases que sont setValues() y getValues(), qui sont maintenant également prototypées sur les **NodeList** y **Element**, comme elles le sont sur $.fn historiquement. Quelques fonctions ont également été implémentées comme last(), triggerEvent(), isHidden(), empty(), addClass(),  removeClass(), toggleClass(), hasClass(). Le but n'est pas de refaire un jQuery bien sûr, mais proposer des raccourcis fonctionnels quand c'est nécessaire.

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
    var eqId = $('.eqLogicAttr[datos-l1key=id]').value()
    var config = $('#config').getValues('.configKey')[0]
    var expression = $(this).closest('.actionOnMessage').getValues('.expressionAttr')

    //Devient:
    var eqId = document.querySelector('.eqLogicAttr[datos-l1key="id"]').jeeValue()
    var config = document.getElementById('config').getValues('.configKey')[0]
    var expression = this.closest('.actionOnMessage').getValues('.expressionAttr')
    {% endraw %}
    ~~~

</details>

Le fichier plugin-template.js y plusieurs pages du Core utilisent maintenant ces fonctions. Vous pouvez bien sûr les utiliser dans les plugins, mais celui-ci devra alors être installé sur un Core 4.4 minimum.