[<< Core.js](index)
## Hilfsprogramme

*Helper* sind vorgefertigte Funktionen des Core, die von Plugins aufgerufen werden können und verschiedene Aufgaben übernehmen.


### initTooltips()

*jeedomUtils.initTooltips(_el)*

_el: HTML-Element „default document“: ein HTML-Element, auf dem die Tooltips initialisiert werden sollen.

Initialisiert die Tooltips, indem HTML-Elemente mit einem *title*-Attribut gesucht werden, mit der Bibliothek [tippy](https://atomiks.github.io/tippyjs/)



### initSpinners()

*jeedomUtils.initSpinners()*

Initialisiert Spinner, indem auf der Seite nach *input[type="number"].ispin* gesucht wird, mit der Bibliothek [ISpin](https://unmanner.github.io/ispinjs/)


### datePickerInit()

*jeedomUtils.datePickerInit(_format, _selector)*

- _format: String, Standardwert „Y-m-d“.
- _selector: String, Standardwert „input.in_datepicker“.

Initialisiert die Eingabefelder *input.in_datepicker* mit der Bibliothek [Flatpick](https://flatpickr.js.org/)

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

- _step: Zahl, Standardwert 5: Schrittweite bei der Auswahl der Minuten.

Initialisiert die Eingabefelder *input.in_timepicker* oder *input.isdatepicker* mit der Bibliothek [Flatpick](https://flatpickr.js.org/)

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
> Bei diesen beiden Funktionen lautet die Sprache je nach Sprache des Core entweder „us“, „fr“ oder „es“.


### setCheckContextMenu()

*jeedomUtils.setCheckContextMenu()*

- Verwaltung mehrerer Kontrollkästchen: Ein Kontextmenü für die Kontrollkästchen anzeigen: „Alle auswählen“, „Keines auswählen“, „Auswahl umkehren“.

Um diese Funktion zu nutzen, muss man den CSS-Classnamen *checkContext* den entsprechenden Kontrollkästchen hinzufügen und die Funktion aufrufen ``jeedomUtils.setCheckContextMenu()``

Die Kontrollkästchen werden dann nach demselben *data-l1key* und *data-l2key* gruppiert, sofern diese vorhanden sind.

Sie können Checkboxen auch mit dem Attribut *data-context="group1"* zu Gruppen zusammenfassen.

Schließlich können Sie eine Callback-Funktion wie folgt definieren:

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

- _selector: String, Standardwert „body“: Beschränkt die Suche auf ein übergeordnetes Element. So müssen die dataTables der Seite nicht neu geladen werden, wenn die Funktion über ein Dialogfeld aufgerufen wird.
- _paging: Boolescher Wert, Standardwert „false“: Aktiviert die Paginierung.
- _searching: Boolescher Wert, Standardwert „false“: Aktiviert die Suche.

Initialisiert die Tabellen *table.dataTable* mit der Bibliothek *DataTable* (eine auf DataTable basierende und von Jeedom erweiterte Bibliothek).

Wenn die Tabelle bereits über eine *dataTable*-Instanz verfügt, ruft sie destroy() auf und setzt sie zurück.
