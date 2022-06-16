## Núcleo v4.2 | Desarrolladores de complementos


### Obsolete

- Método `initCheckBox()` (utils.js).
- Método de la clase `cmd` : `setEventOnly()`.

### Deprecated

Estos cambios aún se admiten en v4.2 y cambiará a **Obsoleto** en una versión futura.

- El método eqLogic::byTypeAndSearhConfiguration()` fue renombrado correctamente : `eqLogic::byTypeAndSearchConfiguration()`.
- El método js `jeedom.eqLogic.buildSelectCmd se ha renombrado correctamente : `jeedom.eqLogic.buildSelectCmd`.

*Estos dos métodos también se han integrado en v4.1 para acelerar su adopción.*

- Eliminación de jwerty lib para vanillaJS (administración de atajos de teclado)).
- Uso de cambios `showAlert` : `$('#div_alerta').showAlert({` se convierte en `$.fn.showAlert({`. Sin cambio para la llamada desde un modal. No compatible con Core anterior a 4.2.

- Método php `displayException` : `displayException` (utils.inc)
- Método PHP `convertDayEnToFr` : `convertDayFromEn` (utils.inc)


### Cambios opcionales

#### Gráfico de fondo de azulejos

V4.2 permite definir, en un eqLogic, un comando de información cuyo historial se mostrará en el fondo del mosaico.

Para esto, su complemento debe permitirlo en plugins/myplugin/core/class/myplugin.class.php:

```php
clase myplugin extiende eqLogic {
    public static $_widgetPossibility = array('custom' => true);
```

Si su complemento tiene una plantilla específica para su equipo, la versión de escritorio debe actualizarse con `#divGraphInfo#` para mostrar :

```html
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

```


#### Comandos huérfanos

En v4.2, en la página **Análisis → Equipo**, Pestaña de comandos huérfanos, la función eqLogic `deadCmdGeneric()` ahora devuelve un enlace al escenario o al equipo en cuestión.

Como referencia, la nueva función Core:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  ~~~ php
  función estática pública deadCmdGeneric($_plugin_id)) {
    $return = array();
    foreach(eqLogic::byType($_plugin_id) como $eqLogic) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic));
      preg_match_all("/#([0-9]*)#/", $eqLogic_json, $coincidencias);
      foreach ($coincidencias[1] como $cmd_id) {
        si (es_numérico($cmd_id)) {
          si (!cmd::byId(str_replace('#', '', $cmd_id))) {
            $return[] = array(
              '<html>detalle' => '?v=d&m='.$eqLogic->getEqType_name().'&p='.$eqLogic->getEqType_name().'&id='.$eqLogic->getId().'">'.$eqLogic->getHumanName ().' </a>',
              'ayuda' => __('Acción', __ARCHIVO__),
              'who' => '#' . $cmd_id . '#'
            );
          }
        }
      }
    }
    devolver $retorno;
  }
  ~~~

  Para que pueda incrustar el mismo tipo de devolución en sus complementos, la función `deadCmd ()`.

</details>

#### Soporte de visualización de tablas en un complemento

Desde la versión 4.2 del Core, se ofrece una visualización en modo tabla en las páginas *Objetos* *Escenarios* *Interacciones* *Widgets* y *Complementos*.

Esta función está completamente basada en CSS y no requiere ninguna modificación de los elementos DOM, excepto la adición del botón a la derecha de la búsqueda para cambiar entre el modo tabla y normal.

En la mayoría de los complementos, Core podrá manejar esta función. Sin embargo, no se integró de forma predeterminada porque varios complementos no usan *tarjeta gráfica* estándar, y luego el Core no puede administrar la pantalla, dependiendo del complemento.

Por lo tanto, esto debe probarse e integrarse para cada complemento. Varios casos posibles :

  - No insertas el botón : Su complemento no ofrecerá este modo.
  - Integras el botón y la pantalla está bien administrada : Nada más que hacer.
  - Integras el botón, pero la pantalla no está bien administrada : Inspírate en Core 4 CSS.2 para hacer tu propio CSS.

En cualquier caso, el botón de alternancia del modo de tabla está integrado con la clase CSS `oculta` y, por lo tanto, está oculto. Por lo tanto, no será visible en los núcleos anteriores a 4.2 no tener esta opción.


##### Agregue el botón a la derecha del campo de búsqueda :

Simplemente agregue este botón a la derecha del cuadro de búsqueda en su página `myplugin/desktop/php/myplugin.php` :

`<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="1" data-state="0"><i class="fas fa-grip-lines"></i></a> `

<details>

  <summary markdown="span">Par exemple :</summary>

  ~~~
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

##### Si la visualización no estándar de eqlogics :

Ajuste *soporte de núcleo de datos* a 0 :

`<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="0" data-state="0"><i class="fas fa-grip-lines"></i></a> `

- Administre su propia clase css, que no sea ".displayAsTable". Coloque el archivo css en `myplugin/desktop/css/myplugin.css` luego impórtelo desde el escritorio/php así :

  `include_file('escritorio', 'micomplemento', 'css', 'micomplemento');`

- Administrar el evento del botón :

<details>

  <summary markdown="span">Ejemplo d'event js</summary>

  ~~~ js
  {% raw %}
  $('#bt_pluginDisplayAsTable').off('click').on('click', function () {
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      si ($(este).datos('estado') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie('jeedom_displayAsTable', 'verdadero', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } más {
        $(this).data('state', '0').removeClass('active')
        setCookie('jeedom_displayAsTable', 'falso', 2)
        $('.eqLogicDisplayCard').removeClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').addClass('hidden')
        $('.eqLogicThumbnailContainer').first().removeClass('containerAsTable')
      }
    })
  })
  {% endraw %}
  ~~~

</details>

##### Como referencia, el js del complemento.modelo :

<details>

  <summary markdown="span">plugin.modelo js</summary>

  ~~~ js
  {% raw %}
  //displayAsTable si el complemento lo admite:
  si ($('#bt_pluginDisplayAsTable').length) {
    $('#bt_pluginDisplayAsTable').removeClass('hidden') //Not shown on previous core versions
    if (getCookie('jeedom_displayAsTable') == 'verdadero' || jeedom.tema.tema_displayAsTable == 1) {
      $('#bt_pluginDisplayAsTable').data('state', '1').addClass('active')
      si ($('#bt_pluginDisplayAsTable[data-coreSupport="1"]').length) {
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      }
    }
    //evento central:
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      si ($(este).datos('estado') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie('jeedom_displayAsTable', 'verdadero', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } más {
        $(this).data('state', '0').removeClass('active')
        setCookie('jeedom_displayAsTable', 'falso', 2)
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

- Archivo `desktop/css/desktop.main.css `sección`/* __________________mostrar como tabla */`

##### Mostrar otros elementos en la vista de tabla

Si quieres un elemento de la *tarjeta gráfica* aparece a la derecha, agregue la clase CSS `displayTableRight`. Si necesita poner varios elementos allí, póngalos todos en un solo ` <span class="displayTableRight">...</span> `

El modo de tabla muestra cada elemento en una línea, hay espacio a la derecha para agregar información, vea los botones.

Por lo tanto, puede tener en cada *tarjeta gráfica* elementos que no se mostrarán en modo normal, y a la derecha en modo tabla.

<details>

  <summary markdown="span">Par exemple :</summary>

  ~~~ php
  {% raw %}
  <div class="eqLogicThumbnailContainer">
    <?php
      foreach ($eqLogics como $eqLogic) {
        $div = '';
        $opacity = ($eqLogic->getIsEnable()) ? '' : 'disableCard';
        $div .= '<div class="eqLogicDisplayCard cursor '.$opacity.'" data-eqLogic_id="' . $eqLogic->getId() . '">';
        $div .= '<img src="' . $plugin->getPathImgIcon() . '"/>';
        $div .= '<br>';
        $div .= '<span class="name">' . $eqLogic->getHumanName(true, true) . '</span>';
        $div .= '<span class="hidden hiddenAsCard displayTableRight">'.$eqLogic->getConfiguration('autorefresh').' | '.$eqLogic->getConfiguration('loglasttime').'h</span>';
        $div .= '</div>';
        echo $div;
      }
    ?>
  </div>
  {% endraw %}
  ~~~

</details>

Aquí (complemento *jeeLog*) Los parámetros de cron y log estarán ocultos en el modo normal pero visibles a la derecha en el modo de tabla. También puede inspirarse en las páginas de Core v4.2, en particular el de los escenarios que muestra el botón para abrir los registros.

No olvide la clase `oculta` (no presente en las páginas de Core) para que este elemento no se muestre en modo normal en Cores anteriores a 4.2.


#### Mostrar ayuda para un widget

Desde v4.2, los parámetros opcionales disponibles en Core Widgets se muestran para cada widget, ya sea en la configuración de comandos o desde el modo de edición del panel.

En el codigo de **Widget del panel de control**, se inserta una etiqueta `template` entre el último `div` interno y la etiqueta `script`. El Core elimina esta etiqueta al mostrar el Widget para no sobrecargar la página. Sin embargo, en pre-4 Cores.2, los navegadores no muestran la etiqueta `template`. Por el contrario, el Core recupera esta etiqueta `template` para mostrar la ayuda en las ventanas de configuración.

- Si una etiqueta `template` está presente y no está vacía, el Core muestra su contenido.
- Si hay una etiqueta `template`, pero vacía, el Core muestra *`No hay parámetros opcionales disponibles`*.
- Si no hay una etiqueta `template`, el Core muestra *`No se ha encontrado ninguna descripción para este widget`*.

<details>

  <summary markdown="span">Ejemplo de code de Widgy avec template</summary>

  ~~~
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

Todos los controles deslizantes se usan desde v4.2 una nueva biblioteca [noUiSlider](https://refreshless.com/nouislider/). Más flexible en su uso e inicialización, también nos permite usar código idéntico en escritorio y móvil. Tambien es compatible *Tocar* en teléfonos inteligentes !

Si sus complementos/widgets de terceros usan controles deslizantes, es mejor migrar a esta nueva biblioteca.

> Atención : Pre-4 núcleos.2 no tienen la lib **control deslizante** !

Puedes probar la existencia de la lib así :

```js
if (tipo de noUiSlider !== 'undefined') {
  console.log('no hay código UiSlider aquí')
} más {
  console.log('código antiguo aquí')
}
```

#### Traducción de widgets de terceros

Si crea y comparte widgets de terceros (código), Core v4.2 ahora apoya su internacionalización.

Para ello, cada widget debe ir acompañado de su archivo json que contiene sus traducciones.

ruta del widget : `data\customTemplates\dashboard\cmd.info.string.myCustomWidget.html`
ruta de traducción : `data\customTemplates\i18n\cmd.info.string.myCustomWidget.json`

> La versión móvil del Widget tomará la traducción desde el mismo lugar.

Ejemplo :

```html
<div class="content-xs">
    <span class="cmdName #hide_name#">#name_display#</span> <strong class="state"></strong>
    {{Soy un widget de terceros}}
  </div>
  <template>
    <div>param : {{Mi configuración de terceros}}.</div>
  </template>
  <script>
```

```json
  {
    "es_ES": {
      "Soy un widget de terceros": "Soy un widget personalizado",
      "Mi configuración de terceros": "Mi descripción de parámetro personalizado"
    },
    "es_ES": {
      "Soy un widget de terceros": "Ser un widget de terceros",
      "Mi configuración de terceros": "Mi configuración de terceros"
    },
    "from_DE": {
      "Soy un widget de terceros": "Ich bin ein Widget eines Drittanbieters",
      "Mi configuración de terceros": "Meine Einstellung von Drittanbietern"
    }
  }
```

> `Value date`, `Collection date` y todos los textos en los widgets Core no necesitan estar en json. Si no tiene otros textos en su widget, entonces el json no es necesario y estas cadenas se traducirán.


#### Integración en el Núcleo de Tipos Genéricos específicos de un plugin

Núcleo v4.2 tiene una nueva página que permite configurar los Tipos Genéricos más fácilmente. Por supuesto, utiliza los tipos genéricos definidos por Core, pero algunos complementos definen sus propios tipos genéricos.

Para que estos complementos sean compatibles con esta nueva página principal, aquí se explica cómo integrarlos.

Al abrir esta página, el Core verifica, para cada complemento, si tiene un método `pluginGenericTypes ()`. Si este es el caso, entonces se llama a este método, esperando los Tipos Genéricos del plugin para integrarlos. Estos deben respetar la definición de Core Generic Types, especialmente si ya existen categorías (Grip, Light, etc.).).

Ejemplo, en el archivo `plugins/monplugin/core/php/monplugin.class.php`:

```php
clase myPlugin extiende eqLogic
{
    /*     * ***********************Método estático*************************** */
    public static $_widgetPossibility = array('custom' => true);

    función estática pública pluginGenericTypes()
    {
        $generics = array(
            'MYPLUGIN_TOGGLE' => array( //en mayúsculas sin espacios
                'nombre' => __('Alternar Mi Complemento',__FILE__),
                'familyid' => 'MyPlugin', //No hay espacio aquí
                'family' => __('Plugin MyPlugin',__FILE__), //Empezar con 'Plugin ' ...
                'tipo' => 'Acción',
                'subtipo' => array('otro')
            ),
            'MYPLUGIN_LIGHT_BEAM' => matriz(
                'nombre' => __('Rayos de luz (MyPlugin)',__FILE__),
                'familyid' => 'LIGHT', //Tipo existente si lo hay
                'familia' => __('Luz',__ARCHIVO__),
                'escriba' => 'Información',
                'subtipo' => array('binario','numérico')
            )
        );
        devolver $genéricos;
    }

```

Aquí, el complemento `myPlugin` 'inyectará' dos tipos genéricos :

- Un Tipo Genérico MONPLUGIN_TOGGLE, de tipo `MyPlugin`, categoría que no existe en el Core.
- Un tipo genérico MONPLUGIN_LIGHT_BEAM, en la categoría `Light` existente.

> Referencia : Los tipos genéricos principales se definen en el [archivo de configuración](https://github.com/jeedom/core/blob/alpha/core/config/jeedom.config.php), matriz $JEEDOM_INTERNAL_CONFIG, tipo_genérico.