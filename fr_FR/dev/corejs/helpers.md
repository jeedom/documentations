[<< Core js](index)   
## Helpers

Les *helpers* sont des fonctions du Core prêtes à l'emploi qui peuvent être appellées par les plugins et se chargent de différentes tâches.


### initTooltips()

*jeedomUtils.initTooltips(_el)*

_el : HTMLelement default document : un HTMLelement sur lequel initialiser les tooltips.

Initialise les tooltips en recherchant les éléments html avec un attribut *title*, avec la lib [tippy](https://atomiks.github.io/tippyjs/).


### initSpinners() 

*jeedomUtils.initSpinners()*

Initialise des spinners en recherchant sur la page les *input[type="number"].ispin*, avec la lib [ISpin](https://unmanner.github.io/ispinjs/).


### datePickerInit()

*jeedomUtils.datePickerInit(_format, _selector)*

- _format : String default 'Y-m-d'.  
- _selector : String default 'input.in_datepicker'.  

Initialise les inputs *input.in_datepicker* avec la lib [flatpick](https://flatpickr.js.org/).

````js
{% raw %}
flatpickr(_input, {
    enableTime: _enableTime, //Depends on passed _format
    dateFormat: _format, //Default: 'Y-m-d'
    time_24hr: true,
});
{% endraw %}
````

### dateTimePickerInit()

*jeedomUtils.dateTimePickerInit(_step)*

- _step : Number default 5: Pas de la sélection des minutes.  

Initialise les inputs *input.in_timepicker* ou *input.isdatepicker* avec la lib [flatpick](https://flatpickr.js.org/).

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
> Sur ces deux fonctions, la langues est soit us, fr ou es en fonction de la langue du Core.


### setCheckContextMenu() 

*jeedomUtils.setCheckContextMenu()*

- Gestion de checkboxs multiples : Proposer un menu contextuel sur les checkbox : Sélectionner toutes, aucune, Sélection inversée.

Pour l'utiliser, il faut ajouter la class css *checkContext* sur les checkboxs concernées et appeler la fonction ``jeedomUtils.setCheckContextMenu()``.

Les checkboxs seront alors groupées par même *data-l1key* et *data-l2key* si ils existent.

Vous pouvez également faire des groupes de checkboxs avec l'attribut *data-context="group1"*.

Enfin, vous pouvez définir une fonction callback de la sorte :

````js
{% raw %}
var checkContextMenuCallback = function(_el) {
  //_el is an html element.
  _el.triggerEvent('change');
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback);
{% endraw %}
````

### initDataTables() 

*jeedomUtils.initDataTables(_selector, _paging, _searching)*  

- _selector : String default 'body': Limite la recherche à un élément parent. Permet de ne pas réinitialiser les dataTables de la page en appelant la fonction depuis une boite de dialogue.  
- _paging : Boolean default false: Active la pagination.  
- _searching : Boolean default false: Active la recherche.  

Initialise les tables *table.dataTable* avec la lib *DataTable* (lib basée sur DataTable et améliorée par Jeedom).

Si la table possède déjà une instance *dataTable*, elle appelle destroy() et la réinitialise.
