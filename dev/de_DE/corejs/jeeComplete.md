[<< Core.js](index)
## jeeComplete()

*HTMLInputElement.prototype.jeeComplete(_options)*

jeeComplete ist eine interne Bibliothek des Core, mit der sich eine Autovervollständigung für ein HTML-Input-Element definieren lässt.

Damit lässt sich einem Eingabefeld eine statische oder dynamische (Ajax) Autovervollständigungsquelle zuweisen. Zudem ermöglicht es die Verwendung einer Vielzahl von Eingabefeldern mit derselben Autovervollständigung, indem nur ein einziges Element im DOM erstellt wird, anstatt für jedes Eingabefeld ein eigenes Element zu erstellen.

> Der Benutzer kann mit den Tasten *Pfeil nach unten* und *Pfeil nach oben* auf der Tastatur zwischen den Vorschlägen navigieren und mit *Enter* den Vorschlag bestätigen.

- Optionen

````js
{% raw %}
HTMLInputElement.jeeComplete({
    id: String, //Default false, allow one autocomplete for several inputs
    minLength: Number, //Default 1, minimal user entry length to fire autocomplete
    forceSingle: Boolean, //Default false, reset input value before insert, or insert at cursor.
    ignoreKeyCodes: Array, //Default [8, 13, 16, 17, 18, 27, 46]
    source: Array / function(request, response, url) {} //Define source for proposals. Static array or function.
    response: function(event, ui) {}, //Triggered when matches are found, before displaying them.
    focus: function(event) {}, //Triggered when the input is focused.
    select: function(event, ui) {}, //Triggered when user select a proposal. Returning false cancel internal setter.
    })
{% endraw %}
````


### Statische Autovervollständigung

Einfaches Beispiel für das jeeComplete-Widget *action.message.default*

````js
{% raw %}
document.querySelector('.cmd[data-cmd_uid=#uid#] .title').jeeComplete({
    source: mylist.split(',').map(str => str.trim())
})
{% endraw %}
````

Ein komplexeres Beispiel für jeeComplete bei Ausdrücken in einem Szenario. Hier kann dieselbe Autovervollständigung bei Dutzenden oder mehr Eingabefeldern vorkommen, doch dank des Parameters *id* wird nur ein einziges DOM-Element generiert!

````js
{% raw %}
_expr.querySelector('.expressionAttr[data-l1key="' + _params.type + '"]').jeeComplete({
    id: 'scenarioConditionAutocomplete',
    minLength: 1,
    source: function(request, response) {
        //return last term after last space:
        var values = request.term.split(' ')
        var term = values[values.length - 1]
        if (term == '') return false //only space entered
        response(
            jeedom.scenario.autoCompleteCondition.filter(item => item.includes(term))
        )
    },
    response: function(event, data) {
        //remove leading # from all values:
        data.content.forEach(_content => {
            _content.text = _content.text.substr(1)
            _content.value = _content.value.substr(1)
        })
    },
    focus: function(event) {
        event.preventDefault()
        return false
    },
    select: function(event, data) {
        if (data.value.substr(-1) == '#') {
            data.value = data.value.slice(0, -1) + data.value
        } else {
            var values = data.value.split(' ')
            var term = values[values.length - 1]
            data.value = data.value.slice(0, -term.length) + data.value
        }
    }
})
{% endraw %}
````

### dynamische Autovervollständigung

Beispiel für jeeComplete zur Darstellung einer Szenario-Gruppe. Da sich diese Liste ändern kann, wird sie dynamisch per Ajax-Aufruf neu geladen.

````js
{% raw %}
document.querySelector('.scenarioAttr[data-l1key="group"]')?.jeeComplete({
    minLength: 1,
    source: function(request, response, url) {
        domUtils.ajax({
            type: 'POST',
            url: 'core/ajax/scenario.ajax.php',
            data: {
                action: 'autoCompleteGroup',
                term: request.term
            },
            dataType: 'json',
            global: false,
            error: function(request, status, error) {
                handleAjaxError(request, status, error)
            },
            success: function(data) {
                if (data.state != 'ok') {
                    jeedomUtils.showAlert({
                        message: data.result,
                        level: 'danger'
                    })
                    return
                }
                response(data.result)
            }
        })
    },
})
{% endraw %}
````
