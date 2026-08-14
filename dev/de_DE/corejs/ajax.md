[<< Core.js](index)
## Ajax JS

### Abrufen ...

Im Grunde genommen ist das Abrufen einer Ressource ein recht einfacher Vorgang. Eine Anfrage geht ein, und es wird eine Antwort ausgegeben. Beispiel mit der nativen JavaScript-Methode `fetch()`:

````js
{% raw %}
fetch("folder/data.json")
    .then(data => {
        //Do stuff
    }).catch(error => {
        //Handle fetch error
    })
{% endraw %}
````

Die Fetch-Methode, die die JavaScript-API `fetch()` definiert, bietet eine einheitliche Architektur für verschiedene Aspekte des Datenabrufs, wie beispielsweise Weiterleitungen und das CORS-Protokoll. Mehrere APIs nutzen sie, darunter `img`, der CSS-Cursor, die Listenformatierung usw.

Das obige Beispiel ist jedoch ein äußerst einfaches und … vereinfachtes Beispiel!

Tatsächlich müssen auch verschiedene Möglichkeiten berücksichtigt werden, wie zum Beispiel:

- Verwenden Sie die GET- oder POST-Methode.
- Einen String oder ein JSON-Objekt abrufen.
- Die zu sendenden Header und Parameter verarbeiten.
- Die dynamische Einbindung von JS-Skripten bei Bedarf nacheinander und synchron verwalten!

Und das alles unter bestmöglicher Berücksichtigung möglicher Fehler ...

Daher mussten mehrere interne Funktionen im Core entwickelt werden, um all diese Fälle zu bewältigen, die ständig aufgerufen werden (dynamisches Laden von Seiten, Speichern, Cmd-Update-Ereignisse, eqLogic usw. usw.).

Die internen Funktionen des Core ermöglichen es zudem, alle Ajax-Aufrufe global zu verarbeiten, beispielsweise um das Senden des pageLoad-Ereignisses zu verwalten.

Darüber hinaus konnten durch diese Methoden bestimmte dynamisch geladene Skripte isoliert werden, wie beispielsweise die Bibliotheken in core/3rdparty oder in plugin/3rdparty, die nun geladen und im Head gespeichert werden, um die Leistung zu steigern.

### Verwendung der JavaScript-Methoden des Core:

````js
{% raw %}
jeedom.config.load({
    configuration: document.getElementById('config').getJeeValues('.configKey:not(.noSet)')[0],
    error: function(error) {
        jeedomUtils.showAlert({
            message: error.message,
            level: 'danger'
        })
    },
    success: function(data) {
        //Do stuff
    }
})
{% endraw %}
````

### Ajax-Aufruf außerhalb der Core-JS-Klassen:

````js
{% raw %}
domUtils.ajax({
    type: "POST",
    url: "plugin/xx/xx/stuff.php",
    data: {
        action: "doStuff",
        key: 'thisone'
    },
    dataType: 'json',
    global: false,
    error: function(error) {
        jeedomUtils.showAlert({
            message: error.message,
            level: 'danger'
        })
    },
    success: function(data) {
        //Do stuff
        jeedomUtils.showAlert({
            message: 'All good dude!',
            level: 'success'
        })
    }
})
{% endraw %}
````
