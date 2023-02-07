## Raccourcis sur les éléments html

Le Core v4.4+ propose plusieurs raccourcis permettant d'écrire plus facilement et rapidement certaines fonctions.

Ces raccourcis sont définits dans le fichier `core/dom/dom.ui.js`.

> La plupart de ces méthodes retourne l'élément ou la liste d'éléments appellé(e). Ce qui permet de chainer les méthodes, par exemple myEl.empty().addClass('newClass').

#### isVisible / isHidden

*Element.prototype.isVisible*  
*Element.prototype.isHidden*

Retourne un boolean si un élément est visible, ou invisible.

````js
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
````

#### seen / unseen

*Element.prototype.seen*  
*NodeList.prototype.seen*  
*Element.prototype.unseen*  
*NodeList.prototype.unseen*  

Rend un élément ou une liste d'éléments visible ou invisible.

````js
var myEl = document.document.getElementById('myid')
myEl.unseen()

document.querySelectorAll('div.myclass').seen()
````

#### empty

*Element.prototype.empty*  
*NodeList.prototype.empty*

Supprime les éléments enfant d'un élément ou d'une liste d'éléments.

````js
var myEl = document.document.getElementById('myid')
myEl.empty()

document.querySelectorAll('div.myclass').empty()
````

#### classes css

*Element.prototype.addClass*  
*NodeList.prototype.addClass*  
*Element.prototype.removeClass*  
*NodeList.prototype.removeClass*  
*Element.prototype.toggleClass*  
*NodeList.prototype.toggleClass*  
*Element.prototype.hasClass*  

Controle les classes css d'un élément ou d'une liste d'éléments.

> addClass() et removeClass() permettent de passer plusieurs sous les formes :
> 
> myEl.addClass('newClass', 'newClass2', 'newClass3', ...)
> myEl.addClass('newClass newClass2 newClass3 ...')

````js
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
````

#### remove

*NodeList.prototype.remove* 

La méthode `remove()` existe nativement sur les *Element*.

````js
document.querySelectorAll('div.myclass').remove()
````

#### last / closestAll

*NodeList.prototype.last*  
*Element.prototype.closestAll*

`querySelector()` permet de sélectionner le premier élément. Cette méthode permet de sélectionner le dernier élément d'une liste.

`closestAll()` permet de sélectionner tous les parents, et renvoit une liste d'éléments.

````js
// Return last element or null
var myEl = document.querySelectorAll('div.myclass').last()

myEl.closestAll('.element').forEach( _parent => {
    _parent.removeClass('group')
})
````

#### insertAtCursor

*Element.prototype.insertAtCursor* 

Insère une string dans un input ou textarea.

````js
document.querySelector('input.useroption').insertAtCursor(resultString)
````

#### sortOptions

*HTMLSelectElement.prototype.sortOptions* 

Tri les options d'un select

````js
//Sort by text (default):
document.querySelector('select.class').sortOptions()
//Sort by value:
document.querySelector('select.class').sortOptions(false)
````

#### html() / load()

*Element.prototype.html*  
*Element.prototype.load*  

````js
document.getElementById('#myID').html(_htmlString, _append, _callback)



document.getElementById('#myID').load(_path, _callback)


````
