[<< Core.js](index)
## Helpers

*Helpers* are ready-to-use Core functions that can be called by plugins and perform various tasks.


### initTooltips()

*jeedomUtils.initTooltips(_el)*

_el: HTMLelement default document: an HTMLelement on which to initialize the tooltips.

Initializes the tooltips by searching for HTML elements with a *title* attribute, using the library [tippy](https://atomiks.github.io/tippyjs/)



### initSpinners()

*jeedomUtils.initSpinners()*

Initializes spinners by searching the page for *input[type="number"].ispin*, using the library [ISpin](https://unmanner.github.io/ispinjs/)


### datePickerInit()

*jeedomUtils.datePickerInit(_format, _selector)*

- _format: String, default 'Y-m-d'.
- _selector: String, default 'input.in_datepicker'.

Initializes the *input.in_datepicker* inputs using the library [flatpick](https://flatpickr.js.org/)

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

- _step: Number (default 5): Step size for minute selection.

Initializes the *input.in_timepicker* or *input.isdatepicker* inputs using the library [flatpick](https://flatpickr.js.org/)

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
> For these two functions, the language is either us, fr, or es, depending on the Core's language.


### setCheckContextMenu()

*jeedomUtils.setCheckContextMenu()*

- Handling multiple checkboxes: Provide a context menu for the checkboxes: Select All, Select None, Invert Selection.

To use it, add the CSS class *checkContext* to the relevant checkboxes, and call the function ``jeedomUtils.setCheckContextMenu()``

The checkboxes will then be grouped by the same *data-l1key* and *data-l2key* values, if they exist.

You can also create groups of checkboxes using the *data-context="group1"* attribute.

Finally, you can define a callback function like this:

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

- _selector: String (default 'body'): Limits the search to a parent element. Prevents the page's dataTables from being reset when the function is called from a dialog box.
- _paging: Boolean, default false: Makes pagination active.
- _searching: Boolean, default false: Makes searching active.

Initializes the *table.dataTable* tables using the *DataTable* library (a library based on DataTable and enhanced by Jeedom).

If the table already has a *dataTable* instance, it calls destroy() and resets it.
