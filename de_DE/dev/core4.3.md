## Core v4.3 | Plugin-Entwickler

### Obsolete

-

### Deprecated

Fast alle Core-Seitenvariablen und -Funktionen wurden in einem Namensraum isoliert : Es erlaubt Ihnen, nicht alle Funktionen neu zu erstellen, wenn Sie auf die Seite zurückkehren, um die Variablen und Funktionen pro Seite zu isolieren, damit keine möglichen Kollisionen auftreten. Es macht den Code viel besser lesbar, da Sie wissen, welche Funktion oder Variable wo kommt und geht, und das hilft enorm beim Debuggen (eine Konsole des Namespace und wir sehen alles).

Die js-Funktionen der Benutzeroberfläche befinden sich jetzt im jeeFrontEnd-Namespace{} :

*\core\js\jeedom.class.js*

```js
jeeFrontEnd = {
  __description: 'Globales Objekt, bei dem jede Kernseite ihre eigenen Funktionen und Variablen in ihrem Unterobjektnamen registriert.',
  jeedom_firstUse: '',
  language: '',
  userProfils: {},
  planEditOption: {state: falsch, schnappen: falsch, Gitter: falsch, GridSize: falsch, hervorheben: true},
  //Seitenverlauf laden:
  VORHERIGE SEITE: null,
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

- Exemple: Die Funktion „displayPlan()“ wird zu „jeeFrontEnd.plan.displayPlan()“.

In der gleichen Logik befinden sich die von PHP an js übergebenen Variablen jetzt im Namespace jeephp2js{}

- Exemple: Die js-Variable „planHeader_id“ wird zu „jeephp2js.planHeader_id“.

### Optionale Modifikationen

#### Quellcode und Übersetzungen

Es ist jetzt möglich, ein Plugin mit dem Quellcode in englischer Sprache zu entwickeln.

Wenn Sie im Quellcode auf Französisch entwickeln:

**desktop/php/meinplugin.php** :

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

Auf Englisch:

**desktop/php/meinplugin.php** :

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
Ohne i18n-Datei wird das Plugin auf einem auf Französisch konfigurierten Core in Englisch angezeigt.

> Achtung, auf einem Core vor 4.3, wird die Anzeige unabhängig von der Sprache des Kerns auf Englisch sein.



#### addCmdToTable()

Die Funktion addCmdToTable() ist nicht mehr obligatorisch. Wenn es nicht vorhanden ist, wird das des Kerns verwendet. Sie müssen nur eine HTML-Tabelle erstellen `<table id="table_cmd" class="table table-bordered table-condensed"></table> `

Bei Info-Befehlen die Taste **Prüfen** nicht mehr angezeigt wird, wird der Wert angezeigt und in Echtzeit aktualisiert. Um diese Informationen in eine Befehlstabelle einzufügen : `<span class="cmdAttr" data-l1key="htmlstate"></span> `

#### Widgets

Die Deklaration der Update-Funktion entwickelt sich:

```js
jeedom.cmd.update['#id#'] = Funktion (_Optionen) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Datum der Abholung}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.Anzeigewert)
    }

jeedom.cmd.refreshValue([{cmd_id :'#id#',Anzeigewert: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#'}])
```

Devient:

```js
jeedom.cmd.addUpdateFunction('#id#',Funktion (_Optionen) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Datum der Abholung}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.Anzeigewert)
      $('.cmd[data-cmd_id=#id#] .unit').empty().append(_options.unit)
    });

jeedom.cmd.refreshValue([{cmd_id :'#id#',Anzeigewert: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#', unit: '#unite#'}])
```

Beachten Sie den neuen Parameter „Einheit“, der es dem Core ermöglicht, beispielsweise 3500 W in 3,5 kW umzuwandeln.

#### Nachrichtenquelle (4.3.7):

Im Aktionsfall **Botschaft**, der Core zeigt jetzt die angegebene Quelle an anstatt 'scenario'.

Beispiel für das Mode-Plugin:

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