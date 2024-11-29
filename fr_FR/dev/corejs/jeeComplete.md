[<< Core js](index.md)  
## jeeComplete()

*HTMLInputElement.prototype.jeeComplete(_options)*  

jeeComplete est une lib interne au Core, permettant de définir un autocomplete sur un élément html input.

Elle permet d'attribuer une source d'autocomplete statique ou dynamique (ajax) à un input. De plus, elle permet d'avoir une multitude d'input avec le même autocomplete, en créant un seul élément dans le DOM au lieu d'un élément par input.

> L'utilisateur peut utiliser les touches du clavier *ArrowDown*, *ArrowUp* pour naviguer entre les propositions, *Enter* pour valider la proposition.

- Options

````js
{% raw %}
HTMLInputElement.jeeComplete({
    id: String, //Default false, allow one autocomplete for several inputs
    minLength: Number, //Default 1, minimal user entry length to fire autocomplete
    forceSingle: Boolean, //Default false, reset input value before insert, or insert at cursor.
    ignoreKeyCodes: Array, //Default [8, 13, 16, 17, 18, 27, 46]
    source: Array / function(request, response, url) {}, //Define source for proposals. Static array or function.
    response: function(event, ui) {}, //Triggered when matches are found, before displaying them.
    focus: function(event) {}, //Triggered when the input is focused.
    select: function(event, ui) {}, //Triggered when user select a proposal. Returning false cancel internal setter.
});
{% endraw %}
````


### autocomplete statique

Exemple simple du jeeComplete du widget *action.message.default*

````js
{% raw %}
document.querySelector('.cmd[data-cmd_uid=#uid#] .title').jeeComplete({
    source: mylist.split(',').map(str => str.trim())
})
{% endraw %}
````

Exemple plus complexe du jeeComplete sur les expressions d'un scénario. Ici, le même autocomplete peut se retrouver sur des dizaines d'inputs ou plus, mais le paramètre *id* permet de ne générer qu'un seul élément DOM !

````js
{% raw %}
_expr.querySelector('.expressionAttr[data-l1key="' + _params.type + '"]').jeeComplete({
    id: 'scenarioConditionAutocomplete',
    minLength: 1,
    source: function(request, response) {
        //return last term after last space:
        var values = request.term.split(' ');
        var term = values[values.length - 1];
        if (term == '') return false; //only space entered
        response(
            jeedom.scenario.autoCompleteCondition.filter(item => item.includes(term))
        );
    },
    response: function(event, data) {
        //remove leading # from all values:
        data.content.forEach(_content => {
            _content.text = _content.text.substr(1);
            _content.value = _content.value.substr(1);
        })
    },
    focus: function(event) {
        event.preventDefault();
        return false;
    },
    select: function(event, data) {
        if (data.value.substr(-1) == '#') {
            data.value = data.value.slice(0, -1) + data.value;
        } else {
            var values = data.value.split(' ');
            var term = values[values.length - 1];
            data.value = data.value.slice(0, -term.length) + data.value;
        }
    }
});
{% endraw %}
````

### autocomplete dynamique

Exemple du jeeComplete pour le groupe d'un scénario. Cette liste pouvant changer, elle est rechargée dynamiquement avec un appel Ajax.

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
                handleAjaxError(request, status, error);
            },
            success: function(data) {
                if (data.state != 'ok') {
                    jeedomUtils.showAlert({
                        message: data.result,
                        level: 'danger'
                    })
                    return;
                }
                response(data.result);
            }
        });
    },
});
{% endraw %}
````
