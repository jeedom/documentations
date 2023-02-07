## Gestion des évènements (*listeners*) js

#### Persistance des évènements

La gestion des évènements en js est relativement simple, toutefois il faut absolument veiller à ne leur (non) persistance.

Un exemple simple :

````js
window.addEventListener('resize', function(event) {
    console.log('resize!(, event))
    computeMyHeavyFunction()
})
````

Ici, on crée un listener sur l'évènement *resize* de *window*. Ce listener se déclenchera donc à chaque redimensionnement du navigateur par l'utilisateur.

Sur un site web normal, ce n'est pas très grave, car en changant d'url le *listener* disparait. Un *listener* est automatiquement supprimé lorsque son élément disparait du DOM.

Mais Jeedom change réellement de page/url très rarement. Pour des questions de performances et de confort, il charge dynamiquement le contenu dans une div. Donc sans notre exemple, *window* n'est pas supprimée, et si on change de page, le *listener* existe toujours !

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

Donc tous les *listeners* enregistrés sur des éléments de la page elle-même dans la *div_pageContainer* (click sur des boutons, etc.) seront automatiquement supprimés par le navigateur, puisque la les éléments DOM qui y existaient sont supprimés.

Par contre, tous les *listeners* enregistrés sur un parent de *div_pageContainer*, donc *window*, *body* etc, persistent !

Il existe une méthode native pour supprimer un *listener* :

````js
element.removeEventListener(event, listener, useCapture)
````

Mais, vous devez passer à removeEventListener() l'event (click, ...), le listerner (il faut donc déclarer la fonction avant pour la passer à *addEventListerner()*), et cet event doit avoir le même paramètre *useCapture* true/false.

Et enfin, vous ne pouvez de toute façon pas le faire, puisque vous ne savez pas à quel moment l'utilisateur va changer de page, donc quand faire ce *removeEventListener()* !

C'est pourquoi le Core propose une méthode pour enregistrer ce *listener*, et le Core le supprimera alors lors du loadPage() suivant.

> Attention : Cette méthode n'est à utiliser que dans des cas très particulier, où un listener doit être enregistré sur un élément parent de *div_pageContainer*. Tous les *listeners* sur des éléments dans la div *div_pageContainer* doivent utiliser la méthode js native addEventListener().

````js
window.registerEvent('resize', function(event) {
  //Do stuff
}, {capture: false})
````

Cette méthode garde une référence de l'élément, du listener, et de useCapture. Au prochain loadpage(), le Core pourra donc supprimer ce listener !

````js
jeedomUtils.loadPage = function(_url, _noPushHistory) {
    domUtils.unRegisterEvents() //Remove all registered event listeners
    document.getElementById('div_pageContainer').load(url, function() {
        //Do stuff
    }
}
````

#### Déclencher des évènements

Pour déclencher dynamiquement un évènement, vous pouvez créer un nouvel évènement et le déclencher :

````js
const event = new Event('build')

//Listen event:
elem.addEventListener('build', function(e) { /* … */ }, false)

//Dispatch the event:
elem.dispatchEvent(event)
````

Le Core propose la méthode `triggerEvent(_eventName, _params)` sur les éléments et liste d'éléments.

````js
var myEl = document.document.getElementById('myid')
//Native js click():
myEl.click()

//Core triggerEvent()
myEl.triggerEvent('update')

document.querySelectorAll('div.myclass').triggerEvent('update', {capture: false, bubbles: false, detail: 'myclass'})
````


