## Core v4.3 | Desarrolladores de complementos

### Obsolete

-

### Deprecated

Casi todas las variables y funciones de la página principal se han aislado en un espacio de nombres : te permite no recrear todas las funciones si vuelves a la página, aislar las variables y funciones por página para que no haya colisión, hace que el código sea mucho más legible ya que sabes qué función o variable va y dónde, y eso ayuda enormemente a la depuración (una consola del espacio de nombres y vemos todo).

Las funciones js de la interfaz de usuario ahora están en el espacio de nombres jeeFrontEnd{} :

*\core\js\jeedom.class.js*

```js
jeeFrontEnd = {
  __description: 'Objeto global donde cada página principal registra sus propias funciones y variables en su nombre de subobjeto.',
  jeedom_firstUso: '',
  language: '',
  userProfils: {},
  planEditOption: {state: falso, chasquido: falso, cuadrícula: falso, tamaño de cuadrícula: falso, resaltar: true},
  //cargar el historial de la página:
  PAGINA ANTERIOR: null,
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

#### addCmdToTable()

La función addCmdToTable() ya no es obligatoria. Si no está presente, se utilizará el de la Cote. Solo necesita crear una tabla html `<table id="table_cmd" class="table table-bordered table-condensed"></table> `

En los comandos de información, el botón **Prueba** ya no se muestra, es el valor que se muestra y se actualiza en tiempo real. Para agregar esta información en una tabla de comandos : `<span class="cmdAttr" data-l1key="htmlstate"></span> `

#### Widgets

La declaración de la función de actualización evoluciona:

```js
jeedom.cmd.update['#id#'] = función(_opciones) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Fecha de recogida}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.mostrar_valor)
    }

jeedom.cmd.refreshValue([{cmd_id :'#id#',mostrar_valor: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#'}])
```

Devient:

```js
jeedom.cmd.addUpdateFunction('#id#',función(_opciones) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{Fecha de recogida}} : '+_options.collectDate)
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.mostrar_valor)
      $('.cmd[data-cmd_id=#id#] .unit').empty().append(_options.unit)
    });

jeedom.cmd.refreshValue([{cmd_id :'#id#',mostrar_valor: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#', unit: '#unite#'}])
```

Tenga en cuenta el nuevo parámetro `unit`, que permite que el Core transforme, por ejemplo, 3500W en 3.5kW.

#### Fuente del mensaje (4.3.7):

En caso de acción **mensaje**, el Core ahora indica la fuente especificada en lugar de 'escenario'.

Ejemplo para el complemento de modo:

````php
$options['source'] = 'plugin Mode '.$this->getName();
scenarioExpression::createAndExec('acción', $acción['cmd'], $opciones);
````