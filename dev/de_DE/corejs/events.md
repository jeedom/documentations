[<< Core.js](index)
## Ereignisbehandlung (*Listeners*) in JavaScript

### Ereignispersistenz

Die Ereignisbehandlung in JavaScript ist relativ einfach, allerdings muss unbedingt darauf geachtet werden, dass sie (nicht) persistent sind.

Ein einfaches Beispiel:

````js
window.addEventListener('resize', function(event) {
    console.log('resize!(, event))
    computeMyHeavyFunction()
})
````

Hier wird ein Listener für das Ereignis *resize* des *window* erstellt. Dieser Listener wird also jedes Mal ausgelöst, wenn der Nutzer die Größe des Browsers ändert.

Auf einer normalen Website ist das kein großes Problem, da der *Listener* beim Wechseln der URL verschwindet. Ein *Listener* wird automatisch entfernt, wenn sein Element aus dem DOM verschwindet.

Jeedom wechselt jedoch nur sehr selten die Seite bzw. die URL. Aus Gründen der Leistung und des Komforts lädt es den Inhalt dynamisch in ein `div`-Element. Ohne unser Beispiel wird das *Fenster* also nicht geschlossen, und wenn man die Seite wechselt, ist der *Listener* weiterhin vorhanden!

Struktur des Jeedom-DOMs:

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

Die Seiten – egal, ob es sich um ein Plugin oder um Seiten des Core handelt – werden dynamisch in das div geladen `<div id="div_pageContainer">` über die Funktion `jeedomUtils.loadPage(_url, _noPushHistory)`. Diese Funktion setzt verschiedene Einstellungen zurück, verwaltet den Browserverlauf, bereinigt weitere Elemente und ruft anschließend `document.getElementById('div_pageContainer').load(url, function() { //Do stuff }`.

Um es einfach auszudrücken: `jeedomUtils.loadPage()` Leert das *div_pageContainer*-Element und fügt die neue Seite darin ein.

Daher werden alle *Listener*, die auf Elementen der Seite selbst im *div_pageContainer* registriert sind (Klicks auf Schaltflächen usw.), automatisch vom Browser entfernt, da die dort vorhandenen DOM-Elemente gelöscht werden.

Dagegen bleiben alle *Listener*, die auf einem übergeordneten Element von *div_pageContainer* – also *window*, *body* usw. – registriert sind, erhalten!

Es gibt eine native Methode zum Entfernen eines *Listeners*:

````js
{% raw %}
element.removeEventListener(event, listener, useCapture)
{% endraw %}
````

Sie müssen jedoch bei `removeEventListener()` das Ereignis (Klick, ...), den *Listener* (die Funktion muss also zuvor deklariert werden, um sie an `addEventListener()` zu übergeben) und denselben Parameter *useCapture* (true/false) übergeben.

Und schließlich ist das ohnehin nicht möglich, da Sie nicht wissen, wann der Benutzer die Seite wechselt – wann sollten Sie also dieses *removeEventListener()* ausführen?

Aus diesem Grund bietet der Core eine Methode zum Registrieren dieses *Listeners* an, und der Core wird ihn dann beim nächsten Aufruf von loadPage() wieder entfernen.

> Achtung: Diese Methode sollte nur in ganz bestimmten Fällen verwendet werden, in denen ein Listener auf einem übergeordneten Element von *div_pageContainer* registriert werden muss. Alle *Listener* auf Elementen innerhalb des *div_pageContainer*-Elements müssen die native JavaScript-Methode addEventListener() verwenden.

````js
{% raw %}
window.registerEvent('resize', function(event) {
  //Do stuff
}, {capture: false})
{% endraw %}
````

Diese Methode speichert eine Referenz auf das Element, den Listener und useCapture. Beim nächsten Aufruf von loadPage() kann der Core diesen Listener dann entfernen!

````js
{% raw %}
jeedomUtils.loadPage = function(_url, _noPushHistory) {
    domUtils.unRegisterEvents() //Remove all registered event listeners
    document.getElementById('div_pageContainer').load(url, function() {
        //Do stuff
    }
}
{% endraw %}
````

### Ereignisse auslösen

Um ein Ereignis dynamisch auszulösen, können Sie ein neues Ereignis erstellen und es auslösen:

````js
{% raw %}
const event = new Event('build')

//Listen event:
elem.addEventListener('build', function(e) { /* … */ }, false)

//Dispatch the event:
elem.dispatchEvent(event)
{% endraw %}
````

Der Core bietet die Methode `triggerEvent(_eventName, _params)` zu den Elementen und der Elementliste.

````js
{% raw %}
var myEl = document.document.getElementById('myid')
//Native js click():
myEl.click()

//Core triggerEvent()
myEl.triggerEvent('update')

document.querySelectorAll('div.myclass').triggerEvent('update', {capture: false, bubbles: false, detail: 'myclass'})
{% endraw %}
````

### Core-Veranstaltungen

Sie können eine Funktion registrieren, die ausgelöst wird, sobald die Seite geladen ist:

````js
{% raw %}
domUtils(function() {
  //Do stuff
})
{% endraw %}
````

### Ereignisdelegierung

In 99 % der Fälle sind Sie von der Persistenz der Ereignisse nicht betroffen und melden Ihre Auslöser wie gewohnt.

Dafür gibt es in nativem JavaScript zwei Methoden:

- Die klassische Methode:

````js
{% raw %}
document.getElementById('bt_dostuff').addEventListener('click', function(event) {
    //Do stuff
})

document.getElementById('bt_dootherstuff').addEventListener('click', function(event) {
    //Do other stuff
})
{% endraw %}
````

- Ereignisdelegierung:

Die Ereignisdelegierung ermöglicht eine Optimierung der Ereignisverwaltung, indem ein einzelnes Ereignis an ein gemeinsames übergeordnetes Ereignis delegiert wird.

````js
{% raw %}
document.getElementById('div_pageContainer').addEventListener('click', function(event) {
    var _target = null
    if (_target = event.target.closest('#bt_dostuff')) {
        let data = _target.getAttribute('data-stuff')
        //Do stuff
        return
    }

    if (_target = event.target.closest('#bt_dootherstuff')) {
        let data = _target.getAttribute('data-otherstuff')
        //Do other stuff
        return
    }
})
{% endraw %}
````

Und da sich dieser *Listener* auf dem #div_pageContainer befindet, bleibt er natürlich nicht erhalten, wenn eine andere Seite geladen wird.
