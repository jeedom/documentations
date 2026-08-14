[<< Core.js](index)
## Ajax JS

### Fetch ...

At a high level, fetching a resource is a fairly simple operation. A request is sent, and a response is returned. Here’s an example using the native JavaScript `fetch()` method:

````js
{% raw %}
fetch("folder/data.json")
    .then(data => {
        //Do stuff
    }).catch(error => {
        //Handle fetch error
    })
{% endraw %}
````

The Fetch method, which defines the JavaScript fetch() API, provides a unified architecture for various aspects of data retrieval, such as redirects and the CORS protocol. Several APIs use it, such as img, the CSS cursor, list style, etc.

The example above, however, is an extremely simple—and simplified—example!

In fact, you also need to manage various possibilities such as:

- Use the GET or POST method.
- Retrieve a string or a JSON object.
- Process the headers and parameters to be sent.
- Manage the dynamic insertion of JavaScript scripts as needed, sequentially and synchronously!

And all of this while minimizing potential errors as much as possible...

As a result, we had to develop several internal functions within the Core to handle all these scenarios, which are called constantly (dynamic page loading, saving, cmd update events, eqLogic, etc., etc.).

The Core's internal functions also allow for global handling of all Ajax calls, for example, to manage the dispatch of the pageLoad event.

In addition, these methods have made it possible to isolate certain dynamically loaded scripts, such as the libraries in core/3rdparty or plugin/3rdparty, which are now loaded and kept in the head to improve performance.

### Using the Core's JavaScript class methods:

````js
{% raw %}
jeedom.config.load({
    configuration: document.getElementById('config').getJeeValues('.configKey:not(.noSet)')[0],
    error: function(error) {
        jeedomUtils.showAlert({
            message: error.message,
            level: 'danger'
        })
    },
    success: function(data) {
        //Do stuff
    }
})
{% endraw %}
````

### Calling Ajax outside of the Core JavaScript classes:

````js
{% raw %}
domUtils.ajax({
    type: "POST",
    url: "plugin/xx/xx/stuff.php",
    data: {
        action: "doStuff",
        key: 'thisone'
    },
    dataType: 'json',
    global: false,
    error: function(error) {
        jeedomUtils.showAlert({
            message: error.message,
            level: 'danger'
        })
    },
    success: function(data) {
        //Do stuff
        jeedomUtils.showAlert({
            message: 'All good dude!',
            level: 'success'
        })
    }
})
{% endraw %}
````
