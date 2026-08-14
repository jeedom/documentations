## Core v4.3 | Plugin Developers

### Obsolete

-

### Deprecated

Almost all variables and functions on the Core pages have been isolated into a namespace: this prevents having to recreate all the functions when returning to the page, isolates variables and functions by page so there’s no risk of conflicts, makes the code much more readable since you know where each function or variable comes from and goes, and greatly aids debugging (just use the namespace console and you can see everything).

The UI's JavaScript functions are now in the jeeFrontEnd{} namespace:

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

- Example: The function `displayPlan()` is becoming `jeeFrontEnd.plan.displayPlan()`.

Similarly, variables passed from PHP to JavaScript are now in the namespace jeephp2js{}

- Example: The js variable `planHeader_id` is becoming `jeephp2js.planHeader_id`.

### Optional modifications

#### Source code and translations

It is now possible to develop a plugin using source code in English.

If you're developing in French in the source code:

**desktop/php/monplugin.php**:

````html
{% raw %}<label class="col-sm-3 control-label">"{{Equipements de mon petit plugin}}"</label>{% endraw %}
````

**core/i18n/en_US.json**:

````json
{
  "plugins\/monplugin\/desktop\/php\/monplugin.php": {
      	"Equipements de mon petit plugin": "My small plugin equipments",
  }
}
````

In English:

**desktop/php/monplugin.php**:

````html
{% raw %}<label class="col-sm-3 control-label">"{{My small plugin equipments}}"</label>{% endraw %}
````

**core/i18n/fr_FR.json**:

````json
{
  "plugins\/monplugin\/desktop\/php\/monplugin.php": {
      	"My small plugin equipments": "Equipements de mon petit plugin",
  }
}
````
Without an i18n file, the plugin will be displayed in English on a Core configured in French.

> Please note: On a Core version prior to 4.3, the interface will be displayed in English regardless of the Core's language setting.



#### addCmdToTable()

The addCmdToTable() function is no longer required. If it is not present, the Core's version will be used. You just need to create an HTML table. `<table id="table_cmd" class="table table-bordered table-condensed"></table>`

On the command info controls, the **Test** button is no longer displayed; instead, the value is displayed and updated in real time. To add this information to a command table: `<span class="cmdAttr" data-l1key="htmlstate"></span>`

#### Widgets

The declaration of the update function is changing:

```js
{% raw %}
jeedom.cmd.update['#id#'] = function(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Date de collecte}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.display_value)
    }

jeedom.cmd.refreshValue([{cmd_id :'#id#',display_value: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#'}])
{% endraw %}
```

Becomes:

```js
{% raw %}
jeedom.cmd.addUpdateFunction('#id#',function(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Date de collecte}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.display_value)
      $('.cmd[data-cmd_id=#id#] .unit').empty().append(_options.unit)
    });

jeedom.cmd.refreshValue([{cmd_id :'#id#',display_value: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#', unit: '#unite#'}])
{% endraw %}
```

Note the new setting `unit`, which allows the Core to convert, for example, 3,500 W to 3.5 kW.

#### Message source (4.3.7):

When a **message** action occurs, the Core now displays the specified source instead of 'scenario'.

Example for the Mode plugin:

````php
$options['source'] = 'plugin Mode '.$this->getName();
scenarioExpression::createAndExec('action', $action['cmd'], $options);
````

#### Displaying Passwords (4.3.9):

In version 4.3, passwords and API keys are no longer displayed in plain text in the admin panel; there is now a button on the right to show them. This feature is now also available in plugins:

````html
<div class="input-group">
    <input type="text" class="inputPassword configKey form-control" data-l1key="pass" placeholder="Account password" />
    <span class="input-group-btn">
        <a class="btn btn-default form-control bt_showPass roundedRight"><i class="fas fa-eye"></i></a>
    </span>
</div>
````
