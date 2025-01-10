## Núcleo v4.3 | Desarrolladores de complementos

### Obsolete

-

### Deprecated

Casi todas las variables y funciones de la página principal se han aislado en un espacio de nombres : Esto nos permite no recrear todas las funciones si volvemos a la página, aislar las variables y funciones por página para que no sea posible una colisión, esto hace que el código sea mucho más legible ya que sabemos qué función o variable va y viene, y eso ayuda enormemente con la depuración (una consola de espacio de nombres y vemos todo).

Las funciones de UI js ahora están en el espacio de nombres jeeFrontEnd{} :

*\core\js\jeedom.class.js*

```js
jeeFrontEnd = {
  __description: 'Objeto global donde cada página principal registra sus propias funciones y variables en su nombre de subobjeto.',
  jeedom_firstUso: '',
  language: '',
  userProfils: {},
  planEditOption: {state: falso, chasquido: falso, cuadrícula: falso, tamaño de cuadrícula: falso, resaltar: true},
  //cargar historial de página:
  PÁGINA_ANTERIOR: null,
  UBICACIÓN_ANTERIOR: null,
  NO_POPSTAT: false,
  modifyWithoutSave: false,
  //@index.php
  serverDatetime: null,
  clientServerDiffDatetime: null,
  serverDatetime: null,
  serverTZoffsetMin: null,
}
```

- Exemple: La función `displayPlan()` se convierte en `jeeFrontEnd.plan.displayPlan()`.

En la misma lógica, las variables pasadas de php a js ahora están en el espacio de nombres jeephp2js{}

- Exemple: La variable js `planHeader_id` se convierte en `jeephp2js.planHeader_id`.

### Modificaciones opcionales

#### Código fuente y traducciones

Ya es posible desarrollar un plugin con el código fuente en inglés.

Si desarrollas en francés en el código fuente:

**escritorio/php/myplugin.php** :

````html
{% raw %}<label class="col-sm-3 control-label">"{{Equipements de mon petit plugin}}"</label>{% endraw %}
````

**core/i18n/en_US.json** :

````json
{
  "plugins\/monplugin\/desktop\/php\/monplugin.php": {
      	"Equipements de mon petit plugin": "My small plugin equipments",
  }
}
````

En Inglés:

**escritorio/php/myplugin.php** :

````html
{% raw %}<label class="col-sm-3 control-label">"{{My small plugin equipments}}"</label>{% endraw %}
````

**core/i18n/fr_FR.json** :

````json
{
  "plugins\/monplugin\/desktop\/php\/monplugin.php": {
      	"My small plugin equipments": "Equipements de mon petit plugin",
  }
}
````
Sin un archivo i18n, el complemento se mostrará en inglés en un Core configurado en francés.

> Cuidado, en un Core anterior a 4.3, la pantalla estará en inglés independientemente del idioma principal.



#### addCmdToTable()

La función addCmdToTable() ya no es obligatoria. Si no está presente se utilizará el del Núcleo. Sólo necesitas crear una tabla html.<table id="table_cmd" class="table table-bordered table-condensed"></table> `

En los comandos de información, el botón **Prueba** ya no se muestra, es el valor que se muestra y se actualiza en tiempo real. Para agregar esta información a una tabla de pedidos : `<span class="cmdAttr" data-l1key="htmlstate"></span> `

#### Widgets

La declaración de la función de actualización evoluciona:

```js
jeedom.cmd.actualización['#id#'] = función (_opciones) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Fecha de recogida}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.valor_visualización)
    }

jeedom.cmd.refreshValue([{cmd_id :'#id#',valor_visualización: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#'}])
```

Devient:

```js
jeedom.cmd.addUpdateFunction('#id#',función (_opciones) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Fecha de recogida}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.valor_visualización)
      $('.cmd[data-cmd_id=#id#] .unit').empty().append(_options.unit)
    });

jeedom.cmd.refreshValue([{cmd_id :'#id#',valor_visualización: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#', unit: '#unite#'}])
```

Tenga en cuenta el nuevo parámetro "unidad", que permite al Core transformar, por ejemplo, 3500W en 3,5kW.

#### Fuente del mensaje (4.3.7):

En caso de acción **mensaje**, Core ahora indica la fuente especificada en lugar de "escenario"'.

Ejemplo del complemento Modo:

````php
$options['source'] = 'plugin Mode '.$this->getName();
scenarioExpression::createAndExec('acción', $acción['cmd'], $opciones);
````

#### Affichage des mots de passe (4.3.9):

En 4.3, les mots de passe et clé API ne sont plus affichés en clair dans l'administration, avec un bouton à droite pour les afficher. C'est maintenant utilisable également sur les plugins :

````html
<div class="input-group">
    <input type="text" class="inputPassword configKey form-control" data-l1key="pass" placeholder="Account password" />
    <span class="input-group-btn">
        <a class="btn btn-default form-control bt_showPass roundedRight"><i class="fas fa-eye"></i></a>
    </span>
</div>
````