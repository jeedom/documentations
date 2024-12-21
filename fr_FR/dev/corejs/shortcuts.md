[<< Core js](index)  
## Raccourcis sur les éléments html

Le Core v4.4+ propose plusieurs raccourcis permettant d'écrire plus facilement et rapidement certaines fonctions.

Ces raccourcis sont définis dans le fichier `core/dom/dom.ui.js`.

> La plupart de ces méthodes retourne l'élément ou la liste d'éléments appelés. Ce qui permet de chaîner les méthodes, par exemple `myEl.empty().addClass('newClass')`.

### isVisible() / isHidden()

*Element.prototype.isVisible*  
*Element.prototype.isHidden*

Retourne un boolean si un élément est visible ou invisible.

````js
{% raw %}
var myEl = document.document.getElementById('myid');
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
});
{% endraw %}
````

### seen() / unseen()

*Element.prototype.seen*  
*NodeList.prototype.seen*  
*Element.prototype.unseen*  
*NodeList.prototype.unseen*  

Rend un élément ou une liste d'éléments visible ou invisible.

````js
{% raw %}
var myEl = document.document.getElementById('myid');
myEl.unseen();

document.querySelectorAll('div.myclass').seen();
{% endraw %}
````

### empty()

*Element.prototype.empty*  
*NodeList.prototype.empty*

Supprime les éléments enfant d'un élément ou d'une liste d'éléments.

````js
{% raw %}
var myEl = document.document.getElementById('myid');
myEl.empty();

document.querySelectorAll('div.myclass').empty();
{% endraw %}
````

### classes css

*Element.prototype.addClass*  
*NodeList.prototype.addClass*  
*Element.prototype.removeClass*  
*NodeList.prototype.removeClass*  
*Element.prototype.toggleClass*  
*NodeList.prototype.toggleClass*  
*Element.prototype.hasClass*  

Contrôle les classes css d'un élément ou d'une liste d'éléments.

> addClass() et removeClass() permettent de passer plusieurs css à un élément html :
> 
> myEl.addClass('newClass', 'newClass2', 'newClass3', ...);
> myEl.addClass('newClass newClass2 newClass3 ...');

````js
{% raw %}
var myEl = document.document.getElementById('myid');
myEl.addClass('newClass');
myEl.removeClass('oldClass');
myEl.toggleClass('refClass');
//ou:
document.querySelectorAll('div.myclass').removeClass('oldClass').toggleClass('refClass').addClass('newClass');

document.querySelectorAll('div.myclass').forEach(_el => {
    if (_el.hasClass('myclass')) {
        //Do stuff...
    } else {
        //Do stuff...
    }
});
{% endraw %}
````

### remove()

*NodeList.prototype.remove* 

La méthode `remove()` existe nativement sur les *Element*.

````js
{% raw %}
document.querySelectorAll('div.myclass').remove();
{% endraw %}
````

### last() / closestAll()

*NodeList.prototype.last*  
*Element.prototype.closestAll*

`querySelector()` permet de sélectionner le premier élément. Cette méthode permet de sélectionner le dernier élément d'une liste.

`closestAll()` permet de sélectionner tous les parents et renvoit une liste d'éléments.

````js
{% raw %}
// Return last element or null
var myEl = document.querySelectorAll('div.myclass').last();

myEl.closestAll('.element').forEach( _parent => {
    _parent.removeClass('group');
})
{% endraw %}
````

### insertAtCursor()

*Element.prototype.insertAtCursor* 

Insère une string dans un input ou textarea.

````js
{% raw %}
document.querySelector('input.useroption').insertAtCursor(resultString);
{% endraw %}
````

### sortOptions()

*HTMLSelectElement.prototype.sortOptions* 

Tri les options d'un select.

````js
{% raw %}
//Sort by text (default):
document.querySelector('select.class').sortOptions();
//Sort by value:
document.querySelector('select.class').sortOptions(false);
{% endraw %}
````


### html()

*Element.prototype.html*  

Permet d'injecter une chaine de caractères html dans un élément.

- _htmlString : La chaine de caractères html à injecter.  
- _append (boolean : default(false)): Par défaut, html() remplace le contenu de l'élément. Permet de conserver le contenu existant en faisant un *append*.  
- _callback : La méthode étant asynchrone, _callback est une fonction exécutée en sortie.

````js
{% raw %}
document.getElementById('#myID').html(_htmlString, _append, _callback);
{% endraw %}
````
> Cette méthode permet l'injection de contenu html avec des scripts js. Pour du html simple ('<div>text</div>'), utilisez innerHTML = String ou textContent = String.


### load()

*Element.prototype.load*  

Permet de charger le contenu d'un fichier dans un élément.

- _path : url.  
- _callback : La méthode étant asynchrone, _callback est une fonction exécutée en sortie.

> Cette méthode utilise la méthode du Core html() afin de parser et exécuter les scripts js injectés.

````js
{% raw %}
document.getElementById('#myID').load(_path, function() {
    //Do stuff
});
{% endraw %}
````


### extend object

*domUtils.extend(_object /*, _object... */)*  

Permet de fusionner le contenu d'un objet ou plus avec l'objet passé en 1er argument.

````js
{% raw %}
var defaultOptions = {
    isActive: true,
    minLength: 1,
};
var options = domUtils.extend(defaultOptions, userOptions);
{% endraw %}
````