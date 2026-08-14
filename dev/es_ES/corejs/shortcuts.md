[<< Core js](index)
## Atajos para los elementos HTML

Core v4.4+ ofrece varios atajos que permiten escribir ciertas funciones de forma más fácil y rápida.

Estos atajos se definen en el archivo `core/dom/dom.ui.js`.

> La mayoría de estos métodos devuelven el elemento o la lista de elementos a los que se ha llamado. Esto permite encadenar métodos, por ejemplo, myEl.empty().addClass('newClass').

### isVisible() / isHidden()

*Element.prototype.isVisible*
*Element.prototype.isHidden*

Devuelve un valor booleano que indica si un elemento está visible o invisible.

````js
{% raw %}
var myEl = document.document.getElementById('myid')
if (myEl.isVisible()) {
    //Do stuff...
} else {
    //Do stuff...
}

document.querySelectorAll('div.myclass').forEach(_el => {
    if (_el.isHidden()) {
        //Do stuff...
    } else {
        //Do stuff...
    }
})
{% endraw %}
````

### seen() / unseen()

*Element.prototype.seen*
*NodeList.prototype.seen*
*Element.prototype.unseen*
*NodeList.prototype.unseen*

Hace que un elemento o una lista de elementos sea visible o invisible.

````js
{% raw %}
var myEl = document.document.getElementById('myid')
myEl.unseen()

document.querySelectorAll('div.myclass').seen()
{% endraw %}
````

### empty()

*Element.prototype.empty*
*NodeList.prototype.empty*

Elimina los elementos secundarios de un elemento o de una lista de elementos.

````js
{% raw %}
var myEl = document.document.getElementById('myid')
myEl.empty()

document.querySelectorAll('div.myclass').empty()
{% endraw %}
````

### clases CSS

*Element.prototype.addClass*
*NodeList.prototype.addClass*
*Element.prototype.removeClass*
*NodeList.prototype.removeClass*
*Element.prototype.toggleClass*
*NodeList.prototype.toggleClass*
*Element.prototype.hasClass*

Controla las clases CSS de un elemento o de una lista de elementos.

> Las funciones addClass() y removeClass() permiten pasar varios parámetros en las siguientes formas:
>
> myEl.addClass('newClass', 'newClass2', 'newClass3', ...)
> myEl.addClass('newClass newClass2 newClass3 ...')

````js
{% raw %}
var myEl = document.document.getElementById('myid')
myEl.addClass('newClass')
myEl.removeClass('oldClass')
myEl.toggleClass('refClass')
//ou:
document.querySelectorAll('div.myclass').removeClass('oldClass').toggleClass('refClass').addClass('newClass')

document.querySelectorAll('div.myclass').forEach(_el => {
    if (_el.hasClass('myclass')) {
        //Do stuff...
    } else {
        //Do stuff...
    }
})
{% endraw %}
````

### remove()

*NodeList.prototype.remove*

El método `remove()` está integrada de serie en los *Element*.

````js
{% raw %}
document.querySelectorAll('div.myclass').remove()
{% endraw %}
````

### last() / closestAll()

*NodeList.prototype.last*
*Element.prototype.closestAll*

`querySelector()` permite seleccionar el primer elemento. Este método permite seleccionar el último elemento de una lista.

`closestAll()` permite seleccionar todos los elementos principales y devuelve una lista de elementos.

````js
{% raw %}
// Return last element or null
var myEl = document.querySelectorAll('div.myclass').last()

myEl.closestAll('.element').forEach( _parent => {
    _parent.removeClass('group')
})
{% endraw %}
````

### insertAtCursor()

*Element.prototype.insertAtCursor*

Inserta una cadena en un campo de entrada o en un área de texto.

````js
{% raw %}
document.querySelector('input.useroption').insertAtCursor(resultString)
{% endraw %}
````

### sortOptions()

*HTMLSelectElement.prototype.sortOptions*

Ordena las opciones de un menú desplegable

````js
{% raw %}
//Sort by text (default):
document.querySelector('select.class').sortOptions()
//Sort by value:
document.querySelector('select.class').sortOptions(false)
{% endraw %}
````


### html()

*Element.prototype.html*

Permite insertar una cadena HTML en un elemento.

- _htmlString: La cadena HTML que se va a insertar.
- _append (booleano: por defecto (false)): Por defecto, html() sustituye el contenido del elemento. Permite conservar el contenido existente realizando un *append*.
- _callback: Dado que el método es asíncrono, _callback es una función que se ejecuta al finalizar.

````js
{% raw %}
document.getElementById('#myID').html(_htmlString, _append, _callback)
{% endraw %}
````
> Este método permite insertar contenido HTML con scripts JavaScript. Para HTML sencillo ('<div>texto</div>'), utiliza innerHTML = String o textContent = String.


### load()

*Element.prototype.load*

Permite cargar el contenido de un archivo en un elemento.

- _path: url.
- _callback: Dado que el método es asíncrono, _callback es una función que se ejecuta al finalizar.

> Este método utiliza la función Core html() para analizar y ejecutar los scripts JavaScript inyectados.

````js
{% raw %}
document.getElementById('#myID').load(_path, function() {
    //Do stuff
})
{% endraw %}
````


### ampliar objeto

*domUtils.extend(_object /*, _object... */)*

Permite fusionar el contenido de uno o varios objetos con el objeto pasado como primer argumento.

````js
{% raw %}
var defaultOptions = {
    isActive: true,
    minLength: 1,
}
var options = domUtils.extend(defaultOptions, userOptions)
{% endraw %}
````
