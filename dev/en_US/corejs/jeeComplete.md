[<< Core.js](index)
## jeeComplete()

*HTMLInputElement.prototype.jeeComplete(_options)*

jeeComplete is an internal library in Core that allows you to set up autocomplete for an HTML input element.

It allows you to assign a static or dynamic (AJAX) autocomplete source to an input field. Additionally, it allows you to have multiple input fields with the same autocomplete by creating a single element in the DOM instead of one element per input field.

> The user can use the *Arrow Down* and *Arrow Up* keys on the keyboard to navigate between options, and *Enter* to select an option.

- Options

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


### static autocomplete

A simple example of the *action.message.default* widget in jeeComplete

````js
{% raw %}
document.querySelector('.cmd[data-cmd_uid=#uid#] .title').jeeComplete({
    source: mylist.split(',').map(str => str.trim())
})
{% endraw %}
````

A more complex example of jeeComplete using expressions in a scenario. Here, the same autocomplete feature can appear on dozens or more inputs, but the *id* parameter ensures that only a single DOM element is generated!

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

### dynamic autocomplete

Example of jeeComplete for a scenario group. Since this list may change, it is dynamically reloaded using an Ajax call.

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
