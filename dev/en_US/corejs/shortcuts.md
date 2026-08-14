[<< Core.js](index)
## Shortcuts for HTML elements

Core v4.4+ offers several shortcuts that make it easier and faster to write certain functions.

These shortcuts are defined in the file `core/dom/dom.ui.js`.

> Most of these methods return the called element or list of elements. This allows you to chain methods together, for example, myEl.empty().addClass('newClass').

### isVisible() / isHidden()

*Element.prototype.isVisible*
*Element.prototype.isHidden*

Returns a boolean indicating whether an element is visible or invisible.

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

Makes an item or a list of items visible or invisible.

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

Removes child elements from an element or a list of elements.

````js
{% raw %}
var myEl = document.document.getElementById('myid')
myEl.empty()

document.querySelectorAll('div.myclass').empty()
{% endraw %}
````

### CSS classes

*Element.prototype.addClass*
*NodeList.prototype.addClass*
*Element.prototype.removeClass*
*NodeList.prototype.removeClass*
*Element.prototype.toggleClass*
*NodeList.prototype.toggleClass*
*Element.prototype.hasClass*

Checks the CSS classes of an element or a list of elements.

> The `addClass()` and `removeClass()` methods allow you to pass multiple parameters in the following formats:
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

The Method `remove()` is built right into *Element*.

````js
{% raw %}
document.querySelectorAll('div.myclass').remove()
{% endraw %}
````

### last() / closestAll()

*NodeList.prototype.last*
*Element.prototype.closestAll*

`querySelector()` selects the first item. This method selects the last item in a list.

`closestAll()` allows you to select all parent elements and returns a list of elements.

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

Inserts a string into an input or textarea.

````js
{% raw %}
document.querySelector('input.useroption').insertAtCursor(resultString)
{% endraw %}
````

### sortOptions()

*HTMLSelectElement.prototype.sortOptions*

Sorts the options in a drop-down menu

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

Allows you to insert an HTML string into an element.

- _htmlString: The HTML string to inject.
- _append (boolean: default(false)): By default, html() replaces the element's content. This option allows you to preserve the existing content by performing an *append*.
- _callback: Since this method is asynchronous, _callback is a function that is executed upon completion.

````js
{% raw %}
document.getElementById('#myID').html(_htmlString, _append, _callback)
{% endraw %}
````
> This method allows you to inject HTML content with JavaScript scripts. For simple HTML ('<div>text</div>'), use innerHTML = String or textContent = String.


### load()

*Element.prototype.load*

Allows you to load the contents of a file into an element.

- _path: url.
- _callback: Since this method is asynchronous, _callback is a function that is executed upon completion.

> This method uses the Core html() method to parse and execute the injected JavaScript scripts.

````js
{% raw %}
document.getElementById('#myID').load(_path, function() {
    //Do stuff
})
{% endraw %}
````


### extend object

*domUtils.extend(_object /*, _object... */)*

Merges the contents of one or more objects with the object passed as the first argument.

````js
{% raw %}
var defaultOptions = {
    isActive: true,
    minLength: 1,
}
var options = domUtils.extend(defaultOptions, userOptions)
{% endraw %}
````
