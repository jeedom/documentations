[<< Core.js](index)
## Dialogfelder

Die Verwaltung der Dialogfelder in Jeedom basiert vollständig auf der internen Bibliothek jeeDialog().

### jeeDialog.alert()

Zeigt eine einfache Warnmeldung ohne Optionen an.

````js
{% raw %}
jeeDialog.alert('{{Vous devez activer ce plugin pour y accéder.}}')
{% endraw %}
````
- Optionen

````js
{% raw %}
jeeDialog.alert({
    title: String,
    message: String, //@required
    width: String,
    height: String,
    top: String,
    backdrop: Boolean, //Default: true
    callback: function(result) { //@required
        console.log('result:', result)
    },
    beforeClose: function() {
        console.log('About to close!')
    },
})
{% endraw %}
````


### jeeDialog.confirm()

Fordert eine Bestätigung vom Benutzer an, mit Rückmeldung.

````js
{% raw %}
jeeDialog.confirm('{{Êtes-vous sûr de vouloir supprimer tous ces équipements ?}}', function(result) {
    if (result) {
        //Do stuff
    }
})
{% endraw %}
````
- Optionen

````js
{% raw %}
jeeDialog.confirm({
    title: String,
    message: String, //@required
    width: String,
    height: String,
    top: String,
    backdrop: Boolean, //Default: true
    buttons: {},
    onShown: function(dialog //dialog HTMLelement) {
        console.log(dialog, 'shown')
    }),
    callback: function(result) { //@required
        console.log('result:', result)
    },
    beforeClose: function() {
        console.log('About to close!')
    },
})
{% endraw %}
````


### jeeDialog.prompt()

Fordert vom Benutzer eine Eingabe an und gibt eine Rückmeldung.

````js
{% raw %}
jeeDialog.prompt("{{Nom du nouvel équipement}} ?", function(result) {
    if (result !== null) {
        var name = result
        //Do stuff
    }
})
{% endraw %}
````
- Optionen

````js
{% raw %}
jeeDialog.prompt({
    title: String,
    message: String, //@required
    width: String,
    height: String,
    top: String,
    inputType: String, //Default: input'. 'input', 'date', 'time', 'select', 'textarea'
    inputOptions: [ //Options for inputType: 'select'
        {text: String, value: String},
    ],
    placeholder: String,
    value: String / Number, //Default value for inputType
    pattern: String, //Validation pattern. Default pattern if inputType 'time' : '[0-9]{4}-[0-9]{2}-[0-9]{2}'
    backdrop: Boolean, //Default: true
    buttons: {},
    onShown: function(dialog //dialog HTMLelement) {
        console.log(dialog, 'shown')
    }),
    callback: function(result) { //@required
        console.log('result:', result)
    },
    beforeClose: function() {
        console.log('About to close!')
    },
})
{% endraw %}
````

### jeedomUtils.showAlert()

Zeigt eine Benachrichtigung an.

````js
{% raw %}
jeedomUtils.showAlert({
    message: '{{Plugin activé !}}',
    level: 'success'
})
{% endraw %}
````

- Optionen

````js
{% raw %}
jeedomUtils.showAlert({
    title: String,
    message: String,
    level: String, //'info', 'success', 'warning', 'danger'
    emptyBefore: false, //Remove all other notifications
    timeOut: Number //ms, setting in Configuration / Interface, forced to 0 if level 'danger',
    attachTo: String / HTMLelement, //If String, a valid querySelector
})
{% endraw %}
````


### jeeDialog.dialog()

Zeigt ein vollständiges Dialogfeld (in der Größe anpassbar, maximierbar) mit dynamischem Inhalt an.

--wip-Optionen--

````js
{% raw %}
jeeDialog.dialog({
    id: 'md_cmdHistory',
    title: '{{Historique}}',
    contentUrl: 'index.php?v=d&modal=cmd.history&id=' + cmdIds
})
{% endraw %}
````
- Optionen

````js
{% raw %}
jeeDialog.dialog({
    id: String,
    title: String,
    contentUrl: String,
    show: true,
    retainPosition: false,
    fullScreen: false,
    contentUrl: '',
    zIndex: 1019,
    backdrop: true,
    buttons: {
        uniqueid: {
            label: String,
            className: String,
            callback: {
                click: function(event) {
                    console.log('Clicked!', event)
                }
            }
        },
    },
    setTitle: true,
    setContent: true,
    setFooter: false,
    callback: function() {
        console.log('My dialog now exist!')
    },
    onMove: function(event) {
        console.log(event.target, 'is moving')
    },
    onResize: function(event) {
        console.log('Resizing', event)
    },
})
{% endraw %}
````

- Funktionen

````js
{% raw %}
var dialogOptions = jeeDialog.get('queryselectorstring', 'options')
var dialogElement = jeeDialog.get('queryselectorstring', 'dialog')
var dialogTitleElement = jeeDialog.get('queryselectorstring', 'title')
var dialogContentElement = jeeDialog.get('queryselectorstring', 'content')
var dialogFooterElement = jeeDialog.get('queryselectorstring', 'footer')

jeeDialog.get(dialogElement).destroy()
{% endraw %}
````
