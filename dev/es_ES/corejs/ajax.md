[<< Core js](index)
## Ajax JS

### Recuperar...

A grandes rasgos, la recuperación de un recurso es una operación bastante sencilla. Llega una solicitud y se devuelve una respuesta. Ejemplo con el método nativo de JavaScript fetch():

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

El método Fetch, que define la API fetch() de JavaScript, proporciona una arquitectura unificada para diversos aspectos de la recuperación de datos, como las redirecciones y el protocolo CORS. Varias API lo utilizan, como img, el cursor CSS, el estilo de lista, etc.

No obstante, el ejemplo anterior es un ejemplo extremadamente sencillo y... ¡simplificado!

De hecho, también hay que gestionar diferentes posibilidades, como:

- Utiliza el método GET o POST.
- Recuperar una cadena o un JSON.
- Procesar los encabezados y los parámetros que se van a enviar.
- Gestionar la inserción dinámica de scripts JS cuando sea necesario, de forma sucesiva y sincrónica.

Y todo ello, gestionando al máximo los posibles errores...

Por lo tanto, ha sido necesario desarrollar varias funciones internas en el Core para gestionar todos estos casos, que se invocan constantemente (carga dinámica de páginas, guardado, eventos de actualización de cmd, eqLogic, etc., etc.).

Las funciones internas del Core también permiten gestionar todas las llamadas Ajax de forma global, por ejemplo, para gestionar el envío del evento pageLoad.

Además, estos métodos han permitido aislar ciertos scripts cargados dinámicamente, como las bibliotecas de core/3rdparty o de plugin/3rdparty, que ahora se cargan y se mantienen en el encabezado para mejorar el rendimiento.

### Utilizar los métodos de Class.js del Core:

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

### Llamada a Ajax fuera de las clases js del núcleo:

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
