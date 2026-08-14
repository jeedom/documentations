[<< Core js](index)
## Gestión de eventos (*listeners*) en JavaScript

### Persistencia de eventos

La gestión de eventos en JavaScript es relativamente sencilla; sin embargo, hay que prestar especial atención a su (no) persistencia.

Un ejemplo sencillo:

````js
window.addEventListener('resize', function(event) {
    console.log('resize!(, event))
    computeMyHeavyFunction()
})
````

Aquí se crea un listener para el evento *resize* de *window*. Por lo tanto, este listener se activará cada vez que el usuario cambie el tamaño del navegador.

En una página web normal, esto no supone un gran problema, ya que al cambiar la URL, el *listener* desaparece. Un *listener* se elimina automáticamente cuando su elemento desaparece del DOM.

Pero Jeedom cambia de página o de URL muy pocas veces. Por cuestiones de rendimiento y comodidad, carga el contenido de forma dinámica en un elemento div. Por lo tanto, en nuestro ejemplo, *window* no se elimina, y si cambiamos de página, ¡el *listener* sigue existiendo!

Estructura del DOM de Jeedom:

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

Las páginas, ya sean de un plugin o del núcleo, se cargan dinámicamente en el div `<div id="div_pageContainer">` mediante la función `jeedomUtils.loadPage(_url, _noPushHistory)`. Esta función restablece varios elementos, gestiona el historial del navegador, limpia otros elementos y, a continuación, llama a `document.getElementById('div_pageContainer').load(url, function() { //Do stuff }`.

En pocas palabras, `jeedomUtils.loadPage()` vacía la div *div_pageContainer* y, a continuación, inserta la nueva página en ella.

Por lo tanto, todos los *listeners* registrados en los elementos de la propia página dentro del *div_pageContainer* (clics en botones, etc.) serán eliminados automáticamente por el navegador, ya que, en ese momento, los elementos DOM que existían allí se eliminan.

Sin embargo, todos los *listeners* registrados en un elemento padre de *div_pageContainer*, es decir, *window*, *body*, etc., ¡persisten!

Existe un método nativo para eliminar un *listener*:

````js
{% raw %}
element.removeEventListener(event, listener, useCapture)
{% endraw %}
````

Sin embargo, debes pasar a `removeEventListener()` el evento (clic, etc.), el *listener* (por lo que hay que declarar la función antes para pasarla a `addEventListener()`) y este evento debe tener el mismo parámetro *useCapture* (true/false).

Y, al fin y al cabo, tampoco podrías hacerlo, ya que no sabes en qué momento el usuario va a cambiar de página, ¡así que cuándo vas a llamar a ese *removeEventListener()*!

Por eso, el Core ofrece un método para registrar este *listener*, y el Core lo eliminará en la siguiente llamada a loadPage().

> Atención: este método solo debe utilizarse en casos muy concretos, en los que sea necesario registrar un listener en un elemento padre de *div_pageContainer*. Todos los *listeners* de los elementos dentro de la div *div_pageContainer* deben utilizar el método nativo de JavaScript addEventListener().

````js
{% raw %}
window.registerEvent('resize', function(event) {
  //Do stuff
}, {capture: false})
{% endraw %}
````

Este método guarda una referencia al elemento, al listener y a useCapture. Así, en la próxima llamada a loadPage(), el Core podrá eliminar este listener.

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

### Activar eventos

Para activar un evento de forma dinámica, puedes crear un nuevo evento y activarlo:

````js
{% raw %}
const event = new Event('build')

//Listen event:
elem.addEventListener('build', function(e) { /* … */ }, false)

//Dispatch the event:
elem.dispatchEvent(event)
{% endraw %}
````

El Core propone el método `triggerEvent(_eventName, _params)` sobre los elementos y la lista de elementos.

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

### Eventos de Core

Puedes registrar una función que se activará una vez que se haya cargado la página:

````js
{% raw %}
domUtils(function() {
  //Do stuff
})
{% endraw %}
````

### Delegación de eventos

En el 99 % de los casos, la persistencia de los eventos no te afectará y declararás tus desencadenantes con normalidad.

Para ello, en JavaScript nativo, existen dos métodos:

- El método clásico:

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

- Delegación de eventos:

La delegación de eventos permite optimizar la gestión de los mismos al delegar un único evento en un elemento padre común.

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

Y, por supuesto, como este *listener* está en el #div_pageContainer, no... se mantendrá al cargar otra página.
