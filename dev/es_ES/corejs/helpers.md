[<< Core js](index)
## Ayudas

Los *helpers* son funciones del Core listas para usar que pueden ser invocadas por los plugins y se encargan de diversas tareas.


### initTooltips()

*jeedomUtils.initTooltips(_el)*

_el: HTMLelement documento predeterminado: un HTMLelement en el que se van a inicializar las descripciones emergentes.

Inicializa las descripciones emergentes buscando los elementos HTML con un atributo *title*, con la biblioteca [tippy](https://atomiks.github.io/tippyjs/)



### initSpinners()

*jeedomUtils.initSpinners()*

Inicializa los spinners buscando en la página los elementos *input[type="number"].ispin*, con la biblioteca [ISpin](https://unmanner.github.io/ispinjs/)


### datePickerInit()

*jeedomUtils.datePickerInit(_format, _selector)*

- _formato: cadena predeterminada «Y-m-d».
- _selector: Cadena predeterminada «input.in_datepicker».

Inicializa los campos de entrada *input.in_datepicker* con la biblioteca [flatpick](https://flatpickr.js.org/)

````js
{% raw %}
flatpickr(_input, {
    enableTime: _enableTime, //Depends on passed _format
    dateFormat: _format, //Default: 'Y-m-d'
    time_24hr: true,
})
{% endraw %}
````

### dateTimePickerInit()

*jeedomUtils.dateTimePickerInit(_step) *

- _step: Número por defecto 5: Paso de selección de minutos.

Inicializa los campos de entrada *input.in_timepicker* o *input.isdatepicker* con la biblioteca [flatpick](https://flatpickr.js.org/)

````js
{% raw %}
flatpickr(_input, {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    minuteIncrement: _step
})
{% endraw %}
````
> En estas dos funciones, el idioma es «us», «fr» o «es», dependiendo del idioma del Core.


### setCheckContextMenu()

*jeedomUtils.setCheckContextMenu()*

- Gestión de casillas de selección múltiples: ofrecer un menú contextual en las casillas de selección: «Seleccionar todas», «Ninguna» y «Selección inversa».

Para utilizarlo, hay que añadir la clase CSS *checkContext* a las casillas de selección correspondientes y llamar a la función ``jeedomUtils.setCheckContextMenu()``

Las casillas de selección se agruparán entonces por el mismo *data-l1key* y *data-l2key*, si existen.

También puedes crear grupos de casillas de selección con el atributo *data-context="group1"*.

Por último, puedes definir una función de callback de la siguiente manera:

````js
{% raw %}
var checkContextMenuCallback = function(_el) {
  //_el is an html element.
  _el.triggerEvent('change')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
{% endraw %}
````

### initDataTables()

*jeedomUtils.initDataTables(_selector, _paging, _searching)*

- _selector: Cadena predeterminada «body»: Limita la búsqueda a un elemento padre. Permite no reiniciar las tablas de datos de la página al llamar a la función desde un cuadro de diálogo.
- _paging: Booleano, valor predeterminado false: Activa la paginación.
- _searching: Booleano, valor predeterminado «false»: activa la búsqueda.

Inicializa las tablas *table.dataTable* con la biblioteca *DataTable* (biblioteca basada en DataTable y mejorada por Jeedom).

Si la tabla ya tiene una instancia *dataTable*, llama a destroy() y la reinicia.
