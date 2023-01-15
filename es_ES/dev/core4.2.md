## Core v4.2 | Desarrolladores de complementos


### Obsolete

- Método `initCheckBox()` (utils.js).
- Método de clase `cmd` : `setEventOnly()`.

### Deprecated

Estas modificaciones todavía son compatibles con la v4.2 y cambiará a **Obsoleto** en una versión futura.

- El método `eqLogic::byTypeAndSearhConfiguration () `ha sido renombrado correctamente : `eqLogic::byTypeAndSearchConfiguration()`.
- El método js `jeedom.eqLogic.builSelectCmd` ha sido renombrado correctamente : `jeedom.eqLogic.buildSelectCmd`.

*Estos dos métodos también se han integrado en v4.1 para acelerar su adopción.*

- Eliminación de jwerty liberty para vanillaJS (gestión de atajos de teclado).
- Uso de cambios de "showAlert" : `$ ('# div_alert').showAlert ({`se convierte` en $ .fn.showAlert ({`. Sin cambio para la llamada de un modal. No es compatible con Core pre 4.2.

- Método php `displayExeption` : `displayException` (utils.inc)
- Método php `convertDayEnToFr` : `convertDayFromEn` (utils.inc)


### Modificaciones opcionales

#### Gráfico de fondo de mosaico

V4.2 se utiliza para definir, en un eqLogic, un comando de información cuyo historial se mostrará en la parte inferior del mosaico.

Para esto, su complemento debe permitirlo en plugins / myplugin / core / class / myplugin.class.php:

`` ``php
clase myplugin extiende eqLogic {
    public static $ _widgetPossibility = array ('personalizado' => verdadero);
`` ``

Si su complemento tiene una plantilla específica para su equipo, la versión de escritorio debe actualizarse con `#divGraphInfo#`para exhibición :

`` ``html
{% raw %}
<div class="eqLogic eqLogic-widgy allowResize allowReorderCmd #custom_layout# #eqLogic_class# #class#" data-eqType="#eqType#" data-eqLogic_id="#id#" data-eqLogic_uid="#uid#" data-version="#version#" data-translate-category="#translate_category#" data-category="#category#" data-tags="#tags#" style="width: #width#;height: #height#;#style#">
  <div class="#isVerticalAlign#">
    <center>
      #cmd#
    </center>
  </div>
  #divGraphInfo#
  <script>

  </script>
</div>
{% endraw %}
`` ``


#### Comandos huérfanos

En v4.2, en la página **Análisis → Equipo**, Pestaña de comandos huérfanos, la función eqLogic `deadCmdGeneric ()` ahora devuelve un enlace al escenario o al dispositivo en cuestión.

Como referencia, la nueva función del Core:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  ~~~ php
  {% raw %}
  función estática pública deadCmdGeneric ($ _ plugin_id) {
    $return = array();
    foreach (eqLogic::byType ($ _ plugin_id) como $ eqLogic) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic));
      preg_match_all ("/#([0-9]*)#/ ", $ eqLogic_json, $ coincidencias);
      foreach ($ coincide con [1] como $ cmd_id) {
        if (is_numeric ($ cmd_id)) {
          tejo (!cmd::byId (str_replace ('#', '', $ cmd_id))) {
            $return[] = array(
              '<html>detalle '=>'?v = d & m = '. $ eqLogic-> getEqType_name ().' & p = '. $ eqLogic-> getEqType_name ().' & id = '. $ eqLogic-> getId ().' "> '. $ eqLogic-> getHumanName (). ' </a>',
              'help '=> __ (' Acción ', __FILE__),
              'who' => '#' . $cmd_id . '#'
            );
          }
        }
      }
    }
    return $ return;
  }
  {% endraw %}
  ~~~

  Por lo tanto, puede integrar el mismo tipo de retorno en sus complementos, función `deadCmd ()`.

</details>

#### Soporte de visualización de tabla en un complemento

Desde la versión 4.2 del Core, se propone una visualización en modo tabla en las páginas *Objetos* *Escenarios* *Interacciones* *Widgets* y *Complementos*.

Esta función se basa completamente en CSS y no requiere ninguna modificación de los elementos DOM, además de agregar el botón a la derecha de la búsqueda para cambiar entre la tabla y el modo normal.

En la mayoría de los complementos, el Core podrá administrar esta funcionalidad. Sin embargo, no se ha integrado de forma predeterminada porque varios complementos no utilizan *tarjeta gráfica* estándar, y el Core no puede administrar la pantalla, dependiendo del complemento.

Por lo tanto, esto debe probarse e integrarse para cada complemento. Varios casos posibles :

  - No integras el botón : Su complemento no ofrecerá este modo.
  - Integra el botón y la pantalla está bien administrada : Nada mas que hacer.
  - Integra el botón, pero la pantalla no está bien gestionada : Inspírate con el CSS de Core 4.2 para hacer tu propio CSS.

En cualquier caso, el botón de alternancia del modo de tabla está integrado con la clase CSS `hidden` y, por lo tanto, está oculto. Por lo tanto, no será visible en versiones anteriores a 4 Core.2 no tengo esta opción.


##### Agrega el botón a la derecha del campo de búsqueda :

Simplemente agregue este botón a la derecha del cuadro de búsqueda en su página `myplugin / desktop / php / myplugin.php :

''<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="1" data-state="0"><i class="fas fa-grip-lines"></i></a> ''

<details>

  <summary markdown="span">Par exemple :</summary>

  ~~~ html
  {% raw %}
  <legend><i class="fa fa-table"></i> {{Mes Equipemnts}}</legend>
  <div class="input-group" style="margin-bottom:5px;">
    <input class="form-control roundedLeft" placeholder="{{Rechercher}}" id="in_searchEqlogic"/>
    <div class="input-group-btn">
      <a id="bt_resetObjectSearch" class="btn" style="width:30px"><i class="fas fa-times"></i>
      </a><a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="1" data-state="0"><i class="fas fa-grip-lines"></i></a>
    </div>
  </div>
  {% endraw %}
  ~~~

</details>

Pruebe la pantalla en un Core v4.2. Si todo va bien, se acabó !

##### Si la visualización de eqlogics no es estándar :

Ajuste *soporte de datos* a 0 :

''<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="0" data-state="0"><i class="fas fa-grip-lines"></i></a> ''

- Administre su propia clase css, que no sea ".displayAsTable". Coloque el archivo css en `myplugin / desktop / css / myplugin.css` luego impórtelo desde el escritorio / php como este :

  `include_file ('escritorio', 'myplugin', 'css', 'myplugin');`

- Gestionar el evento del botón :

<details>

  <summary markdown="span">Ejemplo d'event js</summary>

  ~~~ js
  {% raw %}
  $('#bt_pluginDisplayAsTable').off('click').on('click', function () {
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      si ($ (este).datos ('estado') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie ('jeedom_displayAsTable', 'verdadero', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } más {
        $(this).data('state', '0').removeClass('active')
        setCookie ('jeedom_displayAsTable', 'falso', 2)
        $('.eqLogicDisplayCard').removeClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').addClass('hidden')
        $('.eqLogicThumbnailContainer').first().removeClass('containerAsTable')
      }
    })
  })
  {% endraw %}
  ~~~

</details>

##### Como referencia, el complemento js.modelo :

<details>

  <summary markdown="span">plugin.modelo js</summary>

  ~~~ js
  {% raw %}
  // displayAsTable si el complemento lo admite:
  if ($ ('# bt_pluginDisplayAsTable').length) {
    $('#bt_pluginDisplayAsTable').removeClass('hidden') //Not shown on previous core versions
    if (getCookie ('jeedom_displayAsTable') == 'verdadero' || jeedom.theme.theme_displayAsTable == 1) {
      $('#bt_pluginDisplayAsTable').data('state', '1').addClass('active')
      if ($ ('# bt_pluginDisplayAsTable [data-coreSupport = "1"]').length) {
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      }
    }
    // evento principal:
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      si ($ (este).datos ('estado') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie ('jeedom_displayAsTable', 'verdadero', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } más {
        $(this).data('state', '0').removeClass('active')
        setCookie ('jeedom_displayAsTable', 'falso', 2)
        $('.eqLogicDisplayCard').removeClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').addClass('hidden')
        $('.eqLogicThumbnailContainer').first().removeClass('containerAsTable')
      }
    })
  }
  {% endraw %}
  ~~~

</details>

También puede inspirarse en Core CSS :

- Archivo Desktop / css / desktop.main.css` sección `/* __________________displayAsTable */ ''

##### Mostrar otros elementos en la vista de tabla

Si quieres un elemento del *tarjeta gráfica* aparece a la derecha, agregue la clase CSS `displayTableRight`. Si necesita colocar varios elementos allí, colóquelos todos en uno ` <span class="displayTableRight">...</span> `

El modo de tabla que muestra cada elemento en una línea, está el lugar a la derecha para agregar información, ver botones.

Por lo tanto, puede tener en cada *tarjeta gráfica* elementos que no se mostrarán en modo normal y a la derecha en modo tabla.

<details>

  <summary markdown="span">Par exemple :</summary>

  ~~~ php
  {% raw %}
  <div class="eqLogicThumbnailContainer">
    <?php
      foreach ($ eqLogics como $ eqLogic) {
        $div = '';
        $opacity = ($eqLogic->getIsEnable()) ? '' : 'disableCard';
        $div .= '<div class="eqLogicDisplayCard cursor '.$opacity.'" data-eqLogic_id="' . $eqLogic->getId() . '">';
        $div .= '<img src="' . $plugin->getPathImgIcon() . '"/>';
        $div .= '<br>';
        $div .= '<span class="name">' . $eqLogic->getHumanName(true, true) . '</span>';
        $div .= '<span class="hidden hiddenAsCard displayTableRight">'.$eqLogic->getConfiguration('autorefresh').' | '.$eqLogic->getConfiguration('loglasttime').'h</span>';
        $div .= '</div>';
        echo $ div;
      }
    ?>
  </div>
  {% endraw %}
  ~~~

</details>

Aquí (complemento *jeeLog*) Los parámetros cron y log se ocultarán en el modo normal, pero serán visibles a la derecha en el modo de tabla. También puede inspirarse en las páginas de Core v4.2, en particular el de los escenarios que muestra el botón para abrir los registros.

No olvide la clase `hidden` (no presente en las páginas Core) para que este elemento no se muestre en modo normal en versiones Core anteriores a 4.2.


#### Visualización de la ayuda del widget

Desde v4.2, los parámetros opcionales disponibles en los Widgets principales se muestran para cada widget, ya sea en la configuración del comando o desde el modo de edición del Tablero.

En el código de **Widget de panel**, se inserta una etiqueta `template` entre el último div interno` y la etiqueta` script`. El Core elimina esta etiqueta cuando se muestra el widget para no sobrecargar la página. Sin embargo, en pre-4 Core.2, los navegadores no muestran la etiqueta `template`. Por el contrario, el Core recupera esta etiqueta `template` para mostrar la ayuda en las ventanas de configuración.

- Si una etiqueta "plantilla" está presente y no está vacía, el Core muestra su contenido.
- Si hay una etiqueta "template", pero vacía, el Core muestra *`No hay parámetros opcionales disponibles`*.
- Si no hay una etiqueta "template", el Core muestra *`No se ha encontrado una descripción para este widget`*.

<details>

  <summary markdown="span">Ejemplo de code de Widgy avec template</summary>

  ~~~ html
  <div class="cmd cmd-widget" ...>
    <div class="title #hide_name#">
      <div class="cmdName">#name_display#</div>
    </div>
    <div>
      ...
    </div>
    <template>
      <div>color : rgb(20,20,20) ({{couleur d'arrière plan}})</div>
      <div>color_switch : rgb(230,230,230) ({{couleur de la pastille}})</div>
    </template>
    <script>
    </script>
  </div>
  ~~~

</details>

#### Widgets deslizantes

Todos los widgets de tipo de cursor se utilizan desde v4.2 una nueva biblioteca [noUiSlider](https://refreshless.com/nouislider/). Más flexible en su uso e iniciación, también nos permite utilizar un código idéntico en escritorio y móvil. Tambien es compatible *Toque* en smartphones !

Si sus complementos / widgets de terceros usan controles deslizantes, es mejor migrar a esta nueva biblioteca.

> Atención : El núcleo pre-4.2 no tengo la lib **noUiSlider** !

Puede probar la existencia de la biblioteca de esta manera :

`` ``js
if (typeof noUiSlider !== 'undefined') {
  console.log ('código noUiSlider aquí')
} más {
  console.log ('código antiguo aquí')
}
`` ``

#### Traducción de widgets de terceros

Si crea y comparte widgets de terceros (código), Core v4.2 ahora apoya su internacionalización.

Para ello, cada widget debe ir acompañado de su archivo json que contiene sus traducciones.

ruta del widget : `data \ customTemplates \ dashboard \ cmd.info.string.myCustomWidget.html`
ruta de traducción : `data \ customTemplates \ i18n \ cmd.info.string.myCustomWidget.json`

> La versión móvil del Widget llevará la traducción en el mismo lugar.

Ejemplo :

`` ``html
<div class="content-xs">
    <span class="cmdName #hide_name#">#name_display#</span> <strong class="state"></strong>
    {{Soy un widget de terceros}}
  </div>
  <template>
    <div>param : {{Mi configuración de terceros}}.</div>
  </template>
  <script>
`` ``

`` ``json
  {
    "en_US": {
      "Soy un widget de terceros": "Soy un widget personalizado",
      "Mi configuración de terceros": "Mi descripción de parámetro personalizado"
    },
    "es_ES": {
      "Soy un widget de terceros": "Ser un widget de terceros",
      "Mi configuración de terceros": "Mi configuración de terceros"
    },
    "de_DE": {
      "Soy un widget de terceros": "Ich bin ein Widget eines Drittanbieters",
      "Mi configuración de terceros": "Meine Einstellung von Drittanbietern"
    }
  }
`` ``

> Los textos `Fecha de valor`,` Fecha de colección` y todos los que se encuentran en los widgets Core no necesitan estar en el json. Si no tiene otros textos en su widget, entonces el json no es necesario y estas cadenas se traducirán.


#### Integración en el núcleo de tipos genéricos específicos de un complemento

Core v4.2 tiene una nueva página que le permite configurar tipos genéricos más fácilmente. Por supuesto, utiliza los tipos genéricos definidos por el núcleo, pero algunos complementos definen sus propios tipos genéricos.

Para que estos complementos sean compatibles con esta nueva página principal, aquí se explica cómo integrarlos.

Al abrir esta página, el Core comprueba, para cada complemento, si tiene un método `` pluginGenericTypes () `. Si este es el caso, se llama a este método, mientras se esperan los tipos genéricos del complemento para integrarlos. Estos deben respetar la definición de Tipos Genéricos del Núcleo, especialmente si ya existen categorías (Socket, Light, etc.).

Ejemplo, en el archivo `plugins / myplugin / core / php / myplugin.class.php`:

`` ``php
class myPlugin extiende eqLogic
{
    /*     * ***********************Método estático*************************** */
    public static $ _widgetPossibility = array ('personalizado' => verdadero);

    complemento de función estática pública()
    {
        $generics = array(
            'MONPLUGIN_TOGGLE '=> matriz (// capitalizar sin espacio
                'name '=> __ (' MyPlugin Toggle ', __ FILE__),
                'familyid '=>' MyPlugin ', // No hay espacio aquí
                'family '=> __ (' Plugin MyPlugin ', __ FILE__), // Empiece con' Plugin ' ...
                'type '=>' Acción',
                'subtipo '=> matriz (' otro')
            ),
            'MONPLUGIN_LIGHT_BEAM '=> matriz(
                'name '=> __ (' Light Rays (MyPlugin) ', __ FILE__),
                'familyid '=>' LIGHT ', // Tipo existente si lo hay
                'family '=> __ (' Light ', __ FILE__),
                'type '=>' Información',
                'subtipo '=> matriz (' binario ',' numérico')
            )
        );
        return $ genéricos;
    }

`` ``

Aquí, el complemento `myPlugin` 'inyectará' dos tipos genéricos :

- Un tipo genérico MONPLUGIN_TOGGLE, de tipo `MyPlugin`, categoría que no existe en el Core.
- Un tipo genérico MONPLUGIN_LIGHT_BEAM, en la categoría existente `Lumière`.

> Referencia : Los tipos de núcleos genéricos se definen en el [archivo de configuración](https://github.com/jeedom/core/blob/alpha/core/config/jeedom.config.php), matriz $ JEEDOM_INTERNAL_CONFIG, tipo_genérico.