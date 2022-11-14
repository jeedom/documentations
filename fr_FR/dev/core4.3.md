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

#### Code source et traductions

Il est maintenant possible de développer un plugin avec le code source en Anglais.

Si vous développez en Français dans le code source:

**desktop/php/monplugin.php** :

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

En Anglais:

**desktop/php/monplugin.php** :

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
Sans fichier i18n, le plugin sera affiché en Anglais sur un Core configuré en Français.

> Attention, sur un Core pré 4.3, l'affichage se fera en Anglais quelque soit la langue du Core.



#### addCmdToTable()

La fonction addCmdToTable() n'est plus obligatoire. Si elle n'est pas présente, celle du Core sera utilisée. Il faut juste créer une table html `<table id="table_cmd" class="table table-bordered table-condensed"></table>`

Sur les commandes info, le bouton **Tester** n'est plus affiché, c'est la valeur qui est affichée, et updatée en temps réel. Pour ajouter cette info dans une table de commande : `<span class="cmdAttr" data-l1key="htmlstate"></span>`

#### Widgets

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

#### Source de message (4.3.7):

En cas d'action **message**, le Core indique maintenant la source spécifiée plutôt que 'scenario'.

Exemple pour le plugin Mode:

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