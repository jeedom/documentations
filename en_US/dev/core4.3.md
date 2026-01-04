## Core v4.3 | Plugin developers

### Obsolete

-

### Deprecated

Almost all variables and functions from the Core pages have been isolated in a namespace : This avoids recreating all the functions when returning to the page, isolates variables and functions per page, thus preventing collisions, makes the code much more readable since we know exactly which function or variable goes where, and greatly facilitates debugging (a namespace console entry shows everything)).

The UI's JavaScript functions are now located in the jeeFrontEnd namespace{} :

*\core\js\jeedom.class.js*

```js
jeeFrontEnd = {
  __description: 'Global object where each Core page registers its own functions and variable in its sub-object name.',
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

- Exemple: The function `displayPlan()` becomes `jeeFrontEnd.plan.displayPlan()`.

Similarly, variables passed from PHP to JavaScript are now located in the jeephp2js namespace{}

- Exemple: The js variable `planHeader_id` becomes `jeephp2js.planHeader_id`.

### Optional modifications

#### Source code and translations

It is now possible to develop a plugin with the source code in English.

If you are developing in French in the source code:

**desktop/php/myplugin.php** :

````html
{% raw %}<label class="col-sm-3 control-label">"{{Equipements de mon petit plugin}}"</label>{% endraw %}
````

**core/i18n/en_US.json** :

````json
{
  "plugins\/monplugin\/desktop\/php\/monplugin.php": {
      	"Equipements de mon petit plugin": "My small plugin equipments",
  }
}
````

In English:

**desktop/php/myplugin.php** :

````html
{% raw %}<label class="col-sm-3 control-label">"{{My small plugin equipments}}"</label>{% endraw %}
````

**core/i18n/fr_FR.json** :

````json
{
  "plugins\/monplugin\/desktop\/php\/monplugin.php": {
      	"My small plugin equipments": "Equipements de mon petit plugin",
  }
}
````
Without an i18n file, the plugin will be displayed in English on a Core configured in French.

> Note: This applies to a pre-4 Core processor.3. The display will be in English regardless of the Core language.



#### addCmdToTable()

The addCmdToTable() function is no longer mandatory. If it is not present, the one from the Core will be used. You just need to create an HTML table `<table id="table_cmd" class="table table-bordered table-condensed"></table> `

On the info commands, the button **Test** is no longer displayed, it is the value that is displayed, and updated in real time. To add this information to an order table : `<span class="cmdAttr" data-l1key="htmlstate"></span> `

#### Widgets

The update function declaration is evolving:

```js
jeedom.cmd.update['#id#'] = function(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Collection date}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.display_value)
    }

jeedom.cmd.refreshValue([{cmd_id :'#id#',display_value: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#'}])
```

Devient:

```js
jeedom.cmd.addUpdateFunction('#id#',function(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Collection date}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.display_value)
      $('.cmd[data-cmd_id=#id#] .unit').empty().append(_options.unit)
    });

jeedom.cmd.refreshValue([{cmd_id :'#id#',display_value: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#', unit: '#unite#'}])
```

Note the new `unit` parameter, which allows the Core to transform, for example, 3500W into 3.5kW.

#### Message source (4.3.7):

In the event of action **message**, The Core now indicates the specified source rather than 'scenario''.

Example for the Mode plugin:

````php
$options['source'] = 'plugin Mode '.$this->getName();
scenarioExpression::createAndExec('action', $action['cmd'], $options);
````

#### Affichage des mots de passe (4.3.9):

En 4.3, les mots de passe et clé API ne sont plus affichés en clair dans l'administration, avec un bouton à droite pour les afficher. C'est maintenant utilisable également sur les plugins :

````html
<div class="input-group">
    <input type="text" class="inputPassword configKey form-control" data-l1key="pass" placeholder="Account password" />
    <span class="input-group-btn">
        <a class="btn btn-default form-control bt_showPass roundedRight"><i class="fas fa-eye"></i></a>
    </span>
</div>
````