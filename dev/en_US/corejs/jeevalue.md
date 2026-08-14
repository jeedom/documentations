[<< Core.js](index)
## Setting / Retrieving Values

### getJeeValues() / setJeeValues()

*Element.prototype.getJeeValues*
*NodeList.prototype.getJeeValues*
*Element.prototype.setJeeValues*
*NodeList.prototype.setJeeValues*
 

These functions allow you to assign parameters stored in the database to elements on a page for display, and then retrieve them to save them back to the database.

> Database -> setJeeValues() -> interface -> user changes -> getJeeValues() -> Database

#### setJeeValues()

````js
{% raw %}
jeedom.eqLogic.byId({
    id: myId,
    error: function(error) {
    },
    success: function(data) {
        document.getElementById('div_displayEqLogicConfigure').setJeeValues(data, '.eqLogicAttr')
    }
})
{% endraw %}
````


#### getJeeValues()

````js
{% raw %}
var eqLogic = document.getElementById('div_displayEqLogicConfigure').getJeeValues('.eqLogicAttr')[0]
{% endraw %}
````

> Don't worry if you don't use these features for your plugin; the Core handles it for you in most cases.


### jeeValue()

*Element.prototype.jeeValue*
*NodeList.prototype.jeeValue*

The feature `jeeValue()` is both a setter and a getter.

When called without any arguments, it returns the value of the element.

When called with an argument, it assigns the value to the element.

HTML elements have different ways of assigning or retrieving their values.

Some examples:

````js
{% raw %}
var value = document.getElementById('myInput').value
var value = document.getElementById('myInputCheckbox').checked
var value = document.getElementById('myDiv').innerHTML
//...

document.getElementById('myInput').value = 4.4
document.getElementById('myInputCheckbox').checked = true
document.getElementById('myDiv').innerHTML = 'RTFM'
//...

{% endraw %}
````

Or, to put it more simply:

````js
{% raw %}
var value = document.getElementById('myElement').jeeValue()

document.getElementById('myElement').jeeValue(4.4)
//...
{% endraw %}
````

> It is not always necessary to use this function. If you know the type of element you need, using the native JavaScript function will be less resource-intensive.
