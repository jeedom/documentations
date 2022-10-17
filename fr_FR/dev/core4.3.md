## Core v4.3 | Développeurs de plugin

### Obsolete

-

### Deprecated

Presque toutes les variables et fonctions des pages du Core ont été isolées dans un namespace : ça permet de ne pas recréer toutes les fonctions si on revient sur la page, d’isoler les variables et fonctions par page donc pas de collision possible, çà rend le code beaucoup plus lisible puisqu’on sait quelle fonction ou variable vient et va où, et çà aide énormément le debuggage (un console du namespace et on voit tout).

Les fonctions js de l'UI sont donc maintenant dans le namespace jeeFrontEnd{} :

*\core\js\jeedom.class.js*

```js
jeeFrontEnd = {
  __description: 'Global object where each Core page register its own functions and variable in its sub-object name.',
  jeedom_firstUse: '',
  language: '',
  userProfils: {},
  planEditOption: {state: false, snap: false, grid: false, gridSize: false, highlight: true},
  //loadPage history:
  PREVIOUS_PAGE: null,
  PREVIOUS_LOCATION: null,
  NO_POPSTAT: false,
  modifyWithoutSave: false,
  //@index.php
  serverDatetime: null,
  clientServerDiffDatetime: null,
  serverDatetime: null,
  serverTZoffsetMin: null,
}
```

- Exemple: La fonction `displayPlan()` devient `jeeFrontEnd.plan.displayPlan()`.

Dans la même logique, les variables passées du php au js sont maintenant dans namespace jeephp2js{}

- Exemple: La variable js `planHeader_id` devient `jeephp2js.planHeader_id`.

### Modifications optionnelles

- addCmdToTable()

La fonction addCmdToTable() n'est plus obligatoire. Si elle n'est pas présente, celle du Cote sera utilisée. Il faut juste créer une table html `<table id="table_cmd" class="table table-bordered table-condensed"></table>`

Sur les commandes info, le bouton **Tester** n'est plus affiché, c'est la valeur qui est affichée, et updatée en temps réel. Pour ajouter cette info dans une table de commande : `<span class="cmdAttr" data-l1key="htmlstate"></span>`

- Widgets

La déclaration de la fonction d'update évolue:

```js
jeedom.cmd.update['#id#'] = function(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Date de collecte}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.display_value)
    }

jeedom.cmd.refreshValue([{cmd_id :'#id#',display_value: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#'}])
```

Devient:

```js
jeedom.cmd.addUpdateFunction('#id#',function(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Date de collecte}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.display_value)
      $('.cmd[data-cmd_id=#id#] .unit').empty().append(_options.unit)
    });

jeedom.cmd.refreshValue([{cmd_id :'#id#',display_value: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#', unit: '#unite#'}])
```

Notez le nouveau paramètre `unit`, qui permet au Core de transformer, par exemple, 3500W en 3.5kW.