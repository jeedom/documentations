## Core v4.3 | Desarrolladores de complementos

### Obsoleto

-

### Obsoleto

Casi todas las variables y funciones de las páginas del Core se han aislado en un espacio de nombres: esto permite no tener que volver a crear todas las funciones si se vuelve a la página, aislar las variables y funciones por página, por lo que no hay posibilidad de colisión, hace que el código sea mucho más legible, ya que se sabe de dónde viene y adónde va cada función o variable, y facilita enormemente la depuración (una consola del espacio de nombres y se ve todo).

Las funciones js de la interfaz de usuario se encuentran ahora en el espacio de nombres jeeFrontEnd{}:

*\core\js\jeedom.class.js*

```js
jeeFrontEnd = {
  __description: 'Global object where each Core page register its own functions and variable in its sub-object name.',
  jeedom_firstUse: '',
  language: '',
  userProfils: {},
  planEditOption: {state: false, snap: false, grid: false, gridSize: false, highlight: true},
  //loadPage history:
  PREVIOUS_PAGE: null,
  PREVIOUS_LOCATION: null,
  NO_POPSTAT: false,
  modifyWithoutSave: false,
  //@index.php
  serverDatetime: null,
  clientServerDiffDatetime: null,
  serverDatetime: null,
  serverTZoffsetMin: null,
}
```

- Ejemplo: La función `displayPlan()` se está convirtiendo en `jeeFrontEnd.plan.displayPlan()`.

Siguiendo la misma lógica, las variables que se pasan de PHP a JavaScript ahora se encuentran en el espacio de nombres jeephp2js{}

- Ejemplo: La variable js `planHeader_id` se está convirtiendo en `jeephp2js.planHeader_id`.

### Modificaciones opcionales

#### Código fuente y traducciones

Ahora es posible desarrollar un complemento con el código fuente en inglés.

Si desarrollas en francés en el código fuente:

**desktop/php/monplugin.php**:

````html
{% raw %}<label class="col-sm-3 control-label">"{{Equipements de mon petit plugin}}"</label>{% endraw %}
````

**core/i18n/en_US.json**:

````json
{
  "plugins\/monplugin\/desktop\/php\/monplugin.php": {
      	"Equipements de mon petit plugin": "My small plugin equipments",
  }
}
````

En inglés:

**desktop/php/monplugin.php**:

````html
{% raw %}<label class="col-sm-3 control-label">"{{My small plugin equipments}}"</label>{% endraw %}
````

**core/i18n/fr_FR.json**:

````json
{
  "plugins\/monplugin\/desktop\/php\/monplugin.php": {
      	"My small plugin equipments": "Equipements de mon petit plugin",
  }
}
````
Sin el archivo i18n, el complemento se mostrará en inglés en un Core configurado en francés.

> Atención: en un Core anterior a la versión 4.3, la interfaz se mostrará en inglés independientemente del idioma del Core.



#### addCmdToTable()

La función addCmdToTable() ya no es obligatoria. Si no está presente, se utilizará la del Core. Solo hay que crear una tabla HTML. `<table id="table_cmd" class="table table-bordered table-condensed"></table>`

En los controles de información, ya no aparece el botón **Probar**, sino que se muestra el valor, que se actualiza en tiempo real. Para añadir esta información a una tabla de control: `<span class="cmdAttr" data-l1key="htmlstate"></span>`

#### Widgets

La declaración de la función «update» cambia:

```js
{% raw %}
jeedom.cmd.update['#id#'] = function(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Date de collecte}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.display_value)
    }

jeedom.cmd.refreshValue([{cmd_id :'#id#',display_value: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#'}])
{% endraw %}
```

Se convierte en:

```js
{% raw %}
jeedom.cmd.addUpdateFunction('#id#',function(_options) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Date de collecte}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.display_value)
      $('.cmd[data-cmd_id=#id#] .unit').empty().append(_options.unit)
    });

jeedom.cmd.refreshValue([{cmd_id :'#id#',display_value: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#', unit: '#unite#'}])
{% endraw %}
```

Toma nota del nuevo parámetro `unit`, que permite al Core convertir, por ejemplo, 3500 W en 3,5 kW.

#### Fuente del mensaje (4.3.7):

En caso de una acción **mensaje**, el Core ahora indica la fuente especificada en lugar de «escenario».

Ejemplo para el plugin «Modo»:

````php
$options['source'] = 'plugin Mode '.$this->getName();
scenarioExpression::createAndExec('action', $action['cmd'], $options);
````

#### Visualización de contraseñas (4.3.9):

En la versión 4.3, las contraseñas y las claves API ya no se muestran a la vista en el panel de administración, sino que hay un botón a la derecha para mostrarlas. Ahora también se puede utilizar en los plugins:

````html
<div class="input-group">
    <input type="text" class="inputPassword configKey form-control" data-l1key="pass" placeholder="Account password" />
    <span class="input-group-btn">
        <a class="btn btn-default form-control bt_showPass roundedRight"><i class="fas fa-eye"></i></a>
    </span>
</div>
````
