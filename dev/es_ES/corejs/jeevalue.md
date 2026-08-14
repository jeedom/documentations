[<< Core js](index)
## Establecer y obtener valores

### getJeeValues() / setJeeValues()

*Element.prototype.getJeeValues*
*NodeList.prototype.getJeeValues*
*Element.prototype.setJeeValues*
*NodeList.prototype.setJeeValues*
 

Estas funciones permiten asignar los parámetros guardados en la base de datos a los elementos de una página para su visualización y, posteriormente, recuperarlos para guardarlos en la base de datos.

> Base de datos -> setJeeValues() -> interfaz -> modificaciones del usuario -> getJeeValues() -> Base de datos

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

> No te preocupes si no utilizas estas funciones en tu plugin, el núcleo se encarga de ello por ti en la mayoría de los casos.


### jeeValue()

*Element.prototype.jeeValue*
*NodeList.prototype.jeeValue*

La función `jeeValue()` es a la vez un setter y un getter.

Si se invoca sin argumentos, devuelve el valor del elemento.

Cuando se invoca con un argumento, asigna el valor al elemento.

Los elementos HTML tienen diferentes formas de asignar o recuperar su valor.

Algunos ejemplos:

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

O, dicho de forma más sencilla:

````js
{% raw %}
var value = document.getElementById('myElement').jeeValue()

document.getElementById('myElement').jeeValue(4.4)
//...
{% endraw %}
````

> No siempre es necesario recurrir a esta función. Si sabes qué tipo de elemento necesitas, utilizar la función nativa de JavaScript consumirá menos recursos.
