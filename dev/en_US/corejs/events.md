[<< Core.js](index)
## Event handling (*listeners*) in JavaScript

### Event persistence

Event handling in JavaScript is relatively simple; however, it is essential to ensure that events are (not) persistent.

A simple example:

````js
window.addEventListener('resize', function(event) {
    console.log('resize!(, event))
    computeMyHeavyFunction()
})
````

Here, we create a listener for the *resize* event of the *window*. This listener will therefore be triggered every time the user resizes the browser.

On a normal website, this isn't a big deal, because changing the URL causes the *listener* to disappear. A *listener* is automatically removed when its element disappears from the DOM.

But Jeedom actually changes pages/URLs very rarely. For performance and convenience reasons, it dynamically loads content into a div. So, in our example, *window* isn't removed, and if you switch pages, the *listener* still exists!

Jeedom DOM Structure:

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

Pages—whether they are plugins or Core pages—are loaded dynamically into the div `<div id="div_pageContainer">` by function `jeedomUtils.loadPage(_url, _noPushHistory)`. This function resets several items, manages the browser history, clears other items, and then calls `document.getElementById('div_pageContainer').load(url, function() { //Do stuff }`.

To put it simply, `jeedomUtils.loadPage()` clears the *div_pageContainer* div and then inserts the new page into it.

So all *listeners* registered on elements of the page itself within the *div_pageContainer* (such as button clicks, etc.) will be automatically removed by the browser, since the DOM elements that were there have been removed.

However, all *listeners* registered on a parent of *div_pageContainer*—such as *window*, *body*, etc.—persist!

There is a built-in method for removing a *listener*:

````js
{% raw %}
element.removeEventListener(event, listener, useCapture)
{% endraw %}
````

However, when calling `removeEventListener()`, you must pass the event (click, etc.), the *listener* (so you must declare the function beforehand to pass it to `addEventListener()`), and this event must have the same `useCapture` parameter set to true or false.

And finally, you can't do it anyway, since you don't know when the user will switch pages, so when should you call *removeEventListener()*!

That is why the Core provides a method to register this *listener*, and the Core will then remove it during the next loadPage() call.

> Warning: This method should only be used in very specific cases where a listener must be registered on a parent element of *div_pageContainer*. All listeners on elements within the *div_pageContainer* div must use the native JavaScript addEventListener() method.

````js
{% raw %}
window.registerEvent('resize', function(event) {
  //Do stuff
}, {capture: false})
{% endraw %}
````

This method keeps a reference to the element, the listener, and `useCapture`. The next time `loadPage()` is called, the Core will be able to remove this listener!

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

### Trigger events

To dynamically trigger an event, you can create a new event and trigger it:

````js
{% raw %}
const event = new Event('build')

//Listen event:
elem.addEventListener('build', function(e) { /* … */ }, false)

//Dispatch the event:
elem.dispatchEvent(event)
{% endraw %}
````

The Core offers the method `triggerEvent(_eventName, _params)` on items and lists of items.

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

### Core Events

You can register a function that will be triggered once the page has loaded:

````js
{% raw %}
domUtils(function() {
  //Do stuff
})
{% endraw %}
````

### Event Delegation

In 99% of cases, you won't need to worry about event persistence, and you can declare your triggers as usual.

To do this, there are two methods in native JavaScript:

- The traditional method:

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

- Event delegation:

Event delegation allows you to optimize event management by delegating a single event to a common parent.

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

And of course, since this *listener* is on the #div_pageContainer, it won't... persist when another page loads.
