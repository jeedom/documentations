## Core v4.3 | Plugin-Entwickler

### Veraltet

-

### Veraltet

Fast alle Variablen und Funktionen der Core-Seiten wurden in einem Namespace isoliert: So müssen nicht alle Funktionen neu erstellt werden, wenn man zur Seite zurückkehrt; die Variablen und Funktionen sind pro Seite isoliert, sodass keine Kollisionen möglich sind; der Code wird dadurch wesentlich lesbarer, da man weiß, woher eine Funktion oder Variable stammt und wohin sie führt; und das erleichtert das Debuggen enorm (eine Namespace-Konsole, und man sieht alles).

Die JavaScript-Funktionen der Benutzeroberfläche befinden sich nun also im Namespace `jeeFrontEnd{}`:

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

- Beispiel: Die Funktion `displayPlan()` wird `jeeFrontEnd.plan.displayPlan()`.

Aus dem gleichen Grund befinden sich die von PHP an JS übergebenen Variablen nun im Namespace jeephp2js{}

- Beispiel: Die Variable „js“ `planHeader_id` wird `jeephp2js.planHeader_id`.

### Optionale Änderungen

#### Quellcode und Übersetzungen

Es ist nun möglich, ein Plugin mit dem Quellcode in Englisch zu entwickeln.

Wenn Sie den Quellcode auf Französisch entwickeln:

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

Auf Englisch:

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
Ohne i18n-Datei wird das Plugin auf einem auf Französisch konfigurierten Core auf Englisch angezeigt.

> Achtung: Auf einem Core vor Version 4.3 erfolgt die Anzeige unabhängig von der Sprache des Core auf Englisch.



#### addCmdToTable()

Die Funktion addCmdToTable() ist nicht mehr zwingend erforderlich. Falls sie nicht vorhanden ist, wird die des Core verwendet. Es muss lediglich eine HTML-Tabelle erstellt werden. `<table id="table_cmd" class="table table-bordered table-condensed"></table>`

Bei den Info-Steuerelementen wird die Schaltfläche **Testen** nicht mehr angezeigt; stattdessen wird der Wert angezeigt und in Echtzeit aktualisiert. So fügen Sie diese Information in eine Steuerungstabelle ein: `<span class="cmdAttr" data-l1key="htmlstate"></span>`

#### Widgets

Die Deklaration der Update-Funktion ändert sich:

```js
{% raw %}
jeedom.cmd.update['#id#'] = function(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Date de collecte}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.display_value)
    }

jeedom.cmd.refreshValue([{cmd_id :'#id#',display_value: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#'}])
{% endraw %}
```

Wird zu:

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

Beachten Sie die neue Einstellung `unit`, wodurch der Core beispielsweise 3500 W in 3,5 kW umrechnen kann.

#### Quelle der Meldung (4.3.7):

Bei einer **Message**-Aktion gibt der Core nun die angegebene Quelle anstelle von „scenario“ an.

Beispiel für das Plugin „Mode“:

````php
$options['source'] = 'plugin Mode '.$this->getName();
scenarioExpression::createAndExec('action', $action['cmd'], $options);
````

#### Anzeige von Passwörtern (4.3.9):

In Version 4.3 werden Passwörter und API-Schlüssel im Admin-Bereich nicht mehr im Klartext angezeigt; rechts befindet sich nun eine Schaltfläche, über die sie angezeigt werden können. Diese Funktion ist nun auch für Plugins verfügbar:

````html
<div class="input-group">
    <input type="text" class="inputPassword configKey form-control" data-l1key="pass" placeholder="Account password" />
    <span class="input-group-btn">
        <a class="btn btn-default form-control bt_showPass roundedRight"><i class="fas fa-eye"></i></a>
    </span>
</div>
````
