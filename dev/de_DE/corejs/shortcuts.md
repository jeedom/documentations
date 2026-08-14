[<< Core.js](index)
## Tastenkombinationen für HTML-Elemente

Core v4.4+ bietet mehrere Tastenkombinationen, mit denen sich bestimmte Funktionen einfacher und schneller ausführen lassen.

Diese Tastenkombinationen sind in der Datei definiert `core/dom/dom.ui.js`.

> Die meisten dieser Methoden geben das aufgerufene Element oder die Liste der Elemente zurück. Dadurch lassen sich Methoden verketten, zum Beispiel myEl.empty().addClass('newClass').

### isVisible() / isHidden()

*Element.prototype.isVisible*
*Element.prototype.isHidden*

Gibt einen booleschen Wert zurück, der angibt, ob ein Element sichtbar oder unsichtbar ist.

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

Macht ein Element oder eine Liste von Elementen sichtbar oder unsichtbar.

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

Löscht die untergeordneten Elemente eines Elements oder einer Liste von Elementen.

````js
{% raw %}
var myEl = document.document.getElementById('myid')
myEl.empty()

document.querySelectorAll('div.myclass').empty()
{% endraw %}
````

### CSS-Klassen

*Element.prototype.addClass*
*NodeList.prototype.addClass*
*Element.prototype.removeClass*
*NodeList.prototype.removeClass*
*Element.prototype.toggleClass*
*NodeList.prototype.toggleClass*
*Element.prototype.hasClass*

Überprüft die CSS-Klassen eines Elements oder einer Liste von Elementen.

> Mit addClass() und removeClass() können mehrere Klassen in folgenden Formen übergeben werden:
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

Die Methode `remove()` ist bei *Element* standardmäßig vorhanden.

````js
{% raw %}
document.querySelectorAll('div.myclass').remove()
{% endraw %}
````

### last() / closestAll()

*NodeList.prototype.last*
*Element.prototype.closestAll*

`querySelector()` ermöglicht die Auswahl des ersten Elements. Mit dieser Methode lässt sich das letzte Element einer Liste auswählen.

`closestAll()` ermöglicht die Auswahl aller übergeordneten Elemente und gibt eine Liste von Elementen zurück.

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

Fügt eine Zeichenkette in ein Eingabefeld oder ein Textfeld ein.

````js
{% raw %}
document.querySelector('input.useroption').insertAtCursor(resultString)
{% endraw %}
````

### sortOptions()

*HTMLSelectElement.prototype.sortOptions*

Sortiert die Optionen eines Select-Feldes

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

Ermöglicht das Einfügen eines HTML-Strings in ein Element.

- _htmlString: Der einzufügende HTML-String.
- _append (boolesch: Standardwert (false)): Standardmäßig ersetzt html() den Inhalt des Elements. Ermöglicht es, den bestehenden Inhalt durch ein *Anhängen* beizubehalten.
- _callback: Da es sich um eine asynchrone Methode handelt, ist _callback eine Funktion, die nach Abschluss der Operation ausgeführt wird.

````js
{% raw %}
document.getElementById('#myID').html(_htmlString, _append, _callback)
{% endraw %}
````
> Diese Methode ermöglicht das Einfügen von HTML-Inhalten mit JavaScript-Skripten. Für einfachen HTML-Code ('<div>Text</div>'), verwenden Sie innerHTML = String oder textContent = String.


### load()

*Element.prototype.load*

Ermöglicht das Laden des Inhalts einer Datei in ein Element.

- _path: url.
- _callback: Da es sich um eine asynchrone Methode handelt, ist _callback eine Funktion, die nach Abschluss der Operation ausgeführt wird.

> Diese Methode nutzt die Core-Methode html(), um die eingefügten JS-Skripte zu parsen und auszuführen.

````js
{% raw %}
document.getElementById('#myID').load(_path, function() {
    //Do stuff
})
{% endraw %}
````


### Objekt erweitern

*domUtils.extend(_object /*, _object... */)*

Ermöglicht es, den Inhalt eines oder mehrerer Objekte mit dem als erstes Argument übergebenen Objekt zusammenzuführen.

````js
{% raw %}
var defaultOptions = {
    isActive: true,
    minLength: 1,
}
var options = domUtils.extend(defaultOptions, userOptions)
{% endraw %}
````
