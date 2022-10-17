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

- addCmdToTable()

Die Funktion addCmdToTable() ist nicht mehr obligatorisch. Wenn es nicht vorhanden ist, wird das der Cote verwendet. Sie müssen nur eine HTML-Tabelle erstellen `<table id="table_cmd" class="table table-bordered table-condensed"></table> `

Bei Info-Befehlen die Taste **Prüfen** nicht mehr angezeigt wird, wird der Wert angezeigt und in Echtzeit aktualisiert. Um diese Informationen in eine Befehlstabelle einzufügen : `<span class="cmdAttr" data-l1key="htmlstate"></span> `

- Widgets

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