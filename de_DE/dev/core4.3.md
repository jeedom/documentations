## Kern v4.3 | Plugin-Entwickler

### Obsolete

-

### Deprecated

Fast alle Core-Seitenvariablen und -Funktionen wurden in einem Namespace isoliert : Dies ermöglicht es uns, nicht alle Funktionen neu zu erstellen, wenn wir zur Seite zurückkehren, die Variablen und Funktionen pro Seite zu isolieren, sodass keine Kollision möglich ist. Dies macht den Code viel lesbarer, da wir wissen, welche Funktion oder Variable wo ankommt und geht, und das hilft enorm beim Debuggen (eine Namespace-Konsole und wir sehen alles).

Die UI-JS-Funktionen befinden sich jetzt im jeeFrontEnd-Namespace{} :

*\core\js\jeedom.class.js*

„js
jeeFrontEnd = {
  __description: 'Globales Objekt, bei dem jede Core-Seite ihre eigenen Funktionen und Variablen in ihrem Unterobjektnamen registriert.',
  jeedom_firstUse: '',
  language: '',
  userProfils: {},
  planEditOption: {state: falsch, schnapp: falsch, Gitter: false, GridSize: falsch, hervorheben: true},
  //Seitenverlauf laden:
  VORHERIGE_SEITE: null,
  VORHERIGER_STANDORT: null,
  NO_POPSTAT: false,
  modifyWithoutSave: false,
  //@index.php
  serverDatetime: null,
  clientServerDiffDatetime: null,
  serverDatetime: null,
  serverTZoffsetMin: null,
}
„

- Exemple: Die Funktion „displayPlan()“ wird zu „jeeFrontEnd.plan.displayPlan()“.

In der gleichen Logik befinden sich die von PHP an JS übergebenen Variablen nun im Namespace jeephp2js{}

- Exemple: Die js-Variable „planHeader_id“ wird zu „jeephp2js.planHeader_id“.

### Optionale Modifikationen

#### Quellcode und Übersetzungen

Es ist nun möglich, ein Plugin mit dem Quellcode auf Englisch zu entwickeln.

Wenn Sie im Quellcode auf Französisch entwickeln:

**desktop/php/myplugin.php** :

„`html
{% raw %}<label class="col-sm-3 control-label">"{{Equipements de mon petit plugin}}"</label>{% endraw %}
„`

**core/i18n/en_US.json** :

„`json
{
  "plugins\/monplugin\/desktop\/php\/monplugin.php": {
      	"Equipements de mon petit plugin": "My small plugin equipments",
  }
}
„`

Auf Englisch:

**desktop/php/myplugin.php** :

„`html
{% raw %}<label class="col-sm-3 control-label">"{{My small plugin equipments}}"</label>{% endraw %}
„`

**core/i18n/fr_FR.json** :

„`json
{
  "plugins\/monplugin\/desktop\/php\/monplugin.php": {
      	"My small plugin equipments": "Equipements de mon petit plugin",
  }
}
„`
Ohne i18n-Datei wird das Plugin auf einem auf Französisch konfigurierten Core auf Englisch angezeigt.

> Seien Sie vorsichtig, auf einer Version vor 4 Core.3, die Anzeige erfolgt unabhängig von der Kernsprache auf Englisch.



#### addCmdToTable()

Die Funktion addCmdToTable() ist nicht mehr zwingend erforderlich. Wenn es nicht vorhanden ist, wird das des Kerns verwendet. Sie müssen lediglich eine HTML-Tabelle erstellen<table id="table_cmd" class="table table-bordered table-condensed"></table> `

Bei Info-Befehlen die Schaltfläche **Prüfen** nicht mehr angezeigt wird, ist es der Wert, der angezeigt und in Echtzeit aktualisiert wird. Um diese Informationen zu einer Bestelltabelle hinzuzufügen : `<span class="cmdAttr" data-l1key="htmlstate"></span> `

#### Widgets

Die Deklaration der Aktualisierungsfunktion entwickelt sich weiter:

„js
jeedom.cmd.update['#id#'] = Funktion(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Abholdatum}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.Anzeigewert)
    }

jeedom.cmd.refreshValue([{cmd_id :'#id#',Anzeigewert: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#'}])
„

Devient:

„js
jeedom.cmd.addUpdateFunction('#id#',Funktion(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Abholdatum}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.Anzeigewert)
      $('.cmd[data-cmd_id=#id#] .unit').empty().append(_options.unit)
    });

jeedom.cmd.refreshValue([{cmd_id :'#id#',Anzeigewert: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#', unit: '#unite#'}])
„

Beachten Sie den neuen „Unit“-Parameter, der es dem Core ermöglicht, beispielsweise 3500 W in 3,5 kW umzuwandeln.

#### Nachrichtenquelle (4.3.7):

Im Falle einer Aktion **Nachricht**, Core zeigt jetzt die angegebene Quelle statt „Szenario“ an'.

Beispiel für das Mode-Plugin:

„`php
$options['source'] = 'plugin Mode '.$this->getName();
scenarioExpression::createAndExec('action', $action['cmd'], $options);
„`

#### Affichage des mots de passe (4.3.9):

En 4.3, les mots de passe et clé API ne sont plus affichés en clair dans l'administration, avec un bouton à droite pour les afficher. C'est maintenant utilisable également sur les plugins :

„`html
<div class="input-group">
    <input type="text" class="inputPassword configKey form-control" data-l1key="pass" placeholder="Account password" />
    <span class="input-group-btn">
        <a class="btn btn-default form-control bt_showPass roundedRight"><i class="fas fa-eye"></i></a>
    </span>
</div>
„`