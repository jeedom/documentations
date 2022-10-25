## Core v4.3 | Plugin developers

### Obsolete

-

### Deprecated

Almost all Core page variables and functions have been isolated into a namespace : it allows you not to recreate all the functions if you come back to the page, to isolate the variables and functions per page so no possible collision, it makes the code much more readable since you know which function or variable comes and goes where , and that helps enormously the debugging (a console of the namespace and we see everything).

The js functions of the UI are now in the jeeFrontEnd namespace{} :

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

- Exemple: The `displayPlan()` function becomes `jeeFrontEnd.plan.displayPlan()`.

In the same logic, the variables passed from php to js are now in namespace jeephp2js{}

- Exemple: The js variable `planHeader_id` becomes `jeephp2js.planHeader_id`.

### Optional modifications

#### addCmdToTable()

The addCmdToTable() function is no longer mandatory. If it is not present, that of the Cote will be used. You just need to create an html table `<table id="table_cmd" class="table table-bordered table-condensed"></table> `

On info commands, the button **Test** is no longer displayed, it is the value that is displayed, and updated in real time. To add this info in a command table : `<span class="cmdAttr" data-l1key="htmlstate"></span> `

#### Widgets

The declaration of the update function evolves:

```js
jeedom.cmd.update['#id#'] = function(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Date of collection}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.display_value)
    }

jeedom.cmd.refreshValue([{cmd_id :'#id#',display_value: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#'}])
```

Devient:

```js
jeedom.cmd.addUpdateFunction('#id#',function(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Date of collection}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.display_value)
      $('.cmd[data-cmd_id=#id#] .unit').empty().append(_options.unit)
    });

jeedom.cmd.refreshValue([{cmd_id :'#id#',display_value: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#', unit: '#unite#'}])
```

Note the new `unit` parameter, which allows the Core to transform, for example, 3500W into 3.5kW.

#### Message source (4.3.7):

In case of action **message**, the Core now indicates the specified source rather than 'scenario'.

Example for the Mode plugin:

````php
$options['source'] = 'plugin Mode '.$this->getName();
scenarioExpression::createAndExec('action', $action['cmd'], $options);
````