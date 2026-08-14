[<< Core.js](index)
## Dialog boxes

Jeedom's dialog box management relies entirely on the internal library function jeeDialog().

### jeeDialog.alert()

Displays a simple alert, with no options.

````js
{% raw %}
jeeDialog.alert('{{Vous devez activer ce plugin pour y accéder.}}')
{% endraw %}
````
- Options

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

Prompt the user for confirmation, with feedback.

````js
{% raw %}
jeeDialog.confirm('{{Êtes-vous sûr de vouloir supprimer tous ces équipements ?}}', function(result) {
    if (result) {
        //Do stuff
    }
})
{% endraw %}
````
- Options

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

Requests information from the user, with feedback provided.

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
- Options

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

Displays a notification.

````js
{% raw %}
jeedomUtils.showAlert({
    message: '{{Plugin activé !}}',
    level: 'success'
})
{% endraw %}
````

- Options

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

Displays a full-featured dialog box (resizable, maximizable) with dynamic content.

--WIP options--

````js
{% raw %}
jeeDialog.dialog({
    id: 'md_cmdHistory',
    title: '{{Historique}}',
    contentUrl: 'index.php?v=d&modal=cmd.history&id=' + cmdIds
})
{% endraw %}
````
- Options

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

- Features

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
