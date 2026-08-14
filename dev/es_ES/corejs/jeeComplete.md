[<< Core js](index)
## jeeComplete()

*HTMLInputElement.prototype.jeeComplete(_options)*

jeeComplete es una biblioteca interna de Core que permite definir autocompletado en un elemento HTML «input».

Permite asignar a un campo de entrada una fuente de autocompletado estática o dinámica (AJAX). Además, permite tener múltiples campos de entrada con el mismo autocompletado, creando un único elemento en el DOM en lugar de un elemento por cada campo de entrada.

> El usuario puede utilizar las teclas *Flecha abajo* y *Flecha arriba* del teclado para desplazarse entre las opciones, y la tecla *Intro* para confirmar la opción.

- Opciones

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


### autocompletado estático

Ejemplo sencillo del widget *action.message.default* de jeeComplete

````js
{% raw %}
document.querySelector('.cmd[data-cmd_uid=#uid#] .title').jeeComplete({
    source: mylist.split(',').map(str => str.trim())
})
{% endraw %}
````

Ejemplo más complejo del uso de jeeComplete en las expresiones de un escenario. En este caso, el mismo autocompletado puede aparecer en decenas de campos de entrada o más, pero el parámetro *id* permite generar un único elemento DOM.

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

### autocompletado dinámico

Ejemplo de jeeComplete para el grupo de un escenario. Dado que esta lista puede cambiar, se recarga dinámicamente mediante una llamada Ajax.

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
