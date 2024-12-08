[<< Core js](index.md)  
## Gestion des événements (*listeners*) js

### Persistance des événements

La gestion des événements en js est relativement simple, toutefois il faut absolument veiller à leur (non) persistance.

Un exemple simple :

````js
window.addEventListener('resize', function(event) {
    console.log('resize!(, event));
    computeMyHeavyFunction();
});
````

Ici, on crée un listener sur l’événement *resize* de *window*. Ce listener se déclenchera donc à chaque redimensionnement du navigateur par l'utilisateur.

Sur un site web normal, ce n'est pas très grave, car en changeant d'url le *listener* disparaît. Un *listener* est automatiquement supprimé lorsque son élément disparaît du DOM.

Mais Jeedom change réellement de page/url très rarement. Pour des questions de performances et de confort, il charge dynamiquement le contenu dans une div. Donc sans notre exemple, *window* n'est pas supprimée et si on change de page, le *listener* existe toujours !

Structure du DOM de Jeedom :

````html
<html>
    <head>
    </head>
    <body>
        <main id="div_mainContainer">
            <div id="div_pageContainer">
                <!--Dynamic page content-->
            </div>
        </main>
    </body>
</html>
````

Les pages, que ce soit un plugin ou les pages du Core, sont chargées dynamiquement dans la div `<div id="div_pageContainer">` par la fonction `jeedomUtils.loadPage(_url, _noPushHistory)`. Cette fonction reset plusieurs chose, gère l'historique du navigateur, nettoie d'autres choses, puis appelle `document.getElementById('div_pageContainer').load(url, function() { //Do stuff }`.

Pour simplifier, `jeedomUtils.loadPage()` vide la div *div_pageContainer* puis insère la nouvelle page dedans.

Donc tous les *listeners* enregistrés sur des éléments de la page elle-même dans la *div_pageContainer* (clic sur des boutons, etc.) seront automatiquement supprimés par le navigateur, puisque les éléments DOM qui y existaient sont supprimés.

Par contre, tous les *listeners* enregistrés sur un parent de *div_pageContainer*, donc *window*, *body* etc, persistent !

Il existe une méthode native pour supprimer un *listener* :

````js
{% raw %}
element.removeEventListener(event, listener, useCapture);
{% endraw %}
````

Mais, vous devez passer à removeEventListener() l'event (clic, ...), le *listener* (il faut donc déclarer la fonction avant pour la passer à *addEventListerner()*), et cet event doit avoir le même paramètre *useCapture* true/false.

Et enfin, vous ne pouvez de toute façon pas le faire, puisque vous ne savez pas à quel moment l'utilisateur va changer de page, donc quand faire ce *removeEventListener()* !

C'est pourquoi le Core propose une méthode pour enregistrer ce *listener* et le Core le supprimera alors lors du loadPage() suivant.

> Attention : Cette méthode n'est à utiliser que dans des cas très particuliers, où un listener doit être enregistré sur un élément parent de *div_pageContainer*. Tous les *listeners* sur des éléments dans la div *div_pageContainer* doivent utiliser la méthode js native addEventListener().

````js
{% raw %}
window.registerEvent('resize', function(event) {
  //Do stuff
}, {capture: false});
{% endraw %}
````

Cette méthode garde une référence de l'élément, du listener et de useCapture. Au prochain loadPage(), le Core pourra donc supprimer ce listener !

````js
{% raw %}
jeedomUtils.loadPage = function(_url, _noPushHistory) {
    domUtils.unRegisterEvents(); //Remove all registered event listeners
    document.getElementById('div_pageContainer').load(url, function() {
        //Do stuff
    });
}
{% endraw %}
````

### Déclencher des événements

Pour déclencher dynamiquement un événement, vous pouvez créer un nouvel événement et le déclencher :

````js
{% raw %}
const event = new Event('build');

//Listen event:
elem.addEventListener('build', function(e) { /* … */ }, false);

//Dispatch the event:
elem.dispatchEvent(event);
{% endraw %}
````

Le Core propose la méthode `triggerEvent(_eventName, _params)` sur les éléments et liste d'éléments.

````js
{% raw %}
var myEl = document.document.getElementById('myid');
// Native js click():
myEl.click();

// Core triggerEvent()
myEl.triggerEvent('update');

document.querySelectorAll('div.myclass').triggerEvent('update', {capture: false, bubbles: false, detail: 'myclass'});
{% endraw %}
````

### Evénements du Core

Vous pouvez enregistrer une fonction qui sera déclenchée une fois la page chargée :

````js
{% raw %}
domUtils(function() {
  //Do stuff
});
{% endraw %}
````

### Délégation d'événements

Dans 99% des cas, vous ne serez pas concerné par la persistance des événements et déclarerez vos déclencheurs normalement.

Pour cela, en js natif, il existe deux méthodes :

- La méthode classique :

````js
{% raw %}
document.getElementById('bt_dostuff').addEventListener('click', function(event) {
    //Do stuff
});

document.getElementById('bt_dootherstuff').addEventListener('click', function(event) {
    //Do other stuff
});
{% endraw %}
````

- La délégation d'événements :

La délégation d'événements permet d'optimiser la gestion d’événements en déléguant un seul événement sur un parent commun.

````js
{% raw %}
document.getElementById('div_pageContainer').addEventListener('click', function(event) {
    var _target = null;
    if (_target = event.target.closest('#bt_dostuff')) {
        let data = _target.getAttribute('data-stuff');
        //Do stuff
        return;
    }

    if (_target = event.target.closest('#bt_dootherstuff')) {
        let data = _target.getAttribute('data-otherstuff');
        //Do other stuff
        return;
    }
});
{% endraw %}
````

Et bien sûr, ce *listener* étant sur la #div_pageContainer, il ne ... persistera pas lors du chargement d'une autre page.