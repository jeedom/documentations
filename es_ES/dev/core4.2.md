## Núcleo v4.2 | Desarrolladores de complementos


### Obsolete

- Método `initCheckBox()` (utils.js).
- Método de clase `cmd` : `setEventOnly()`.

### Deprecated

Estos cambios todavía son compatibles con la versión 4.2 y pasará a **Obsoleto** en una versión futura.

- El método `eqLogic::byTypeAndSearhConfiguration()` ha sido renombrado correctamente : `eqLogic::byTypeAndSearchConfiguration()`.
- El método js `jeedom.eqLogic.builSelectCmd` fue renombrado correctamente : `jeedom.eqLogic.buildSelectCmd`.

*Estos dos métodos también se han integrado en v4.1 para acelerar su adopción.*

- Eliminación de jwerty lib para vanillaJS (manejo de atajos de teclado)).
- Uso de cambios en `showAlert` : `$('#div_alert').showAlert({` se convierte en `$.fn.showAlert({`. No hay cambios para la llamada de un modal. No es compatible con Core pre 4.2.

- Método PHP `displayExeption` : `displayException` (utils.inc)
- Método PHP `convertDayEnToFr` : `convertDayFromEn` (utils.inc)


### Modificaciones opcionales

#### Gráfico de fondo de azulejos

V4.2 le permite definir, en un eqLogic, un comando de información cuyo historial se mostrará en la parte inferior del mosaico.

Para hacer esto, su complemento debe permitirlo en plugins/myplugin/core/class/myplugin.class.php:

```php
la clase myplugin extiende eqLogic {
    pública estática $_widgetPossibility = array('personalizado' => verdadero);
```

Si su complemento tiene una plantilla específica para su equipo, la versión de escritorio debe actualizarse con `#divGraphInfo#`para mostrar :

```html
{% raw %}
<div class="eqLogic eqLogic-widgY allowResize allowReorderCmd #custom_layout# #eqLogic_class# #class#" data-eqType="#eqType#" data-eqLogic_id="#id#" data-eqLogic_uid="#uid#" data-version="#version#" data-translate-category="#translate_category#" data-category="#category#" data-tags="#tags#" style="width: #width#;height: #height#;#style#">
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
```


#### Comandos huérfanos

En v4.2, en la página **Análisis → Equipo**, En la pestaña Comandos huérfanos, la función eqLogic `deadCmdGeneric()` ahora devuelve un enlace al escenario o equipo en cuestión.

Como referencia, la nueva función Core:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  ~~~ php
  {% raw %}
  función estática pública deadCmdGeneric($_plugin_id) {
    $return = array();
    foreach (eqLogic::porTipo($_plugin_id) como $eqLogic) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic));
      preg_match_all("/#([0-9]*)#/", $eqLogic_json, $coincidencias);
      foreach ($coincide con [1] como $cmd_id) {
        si (is_numeric($cmd_id)) {
          si (!cmd::porId(str_replace('#', '', $cmd_id))) {
            $return[] = array(
              'detalle' => '?v=d&m='.$eqLogic->getEqType_name().'&p='.$eqLogic->getEqType_name().'&id='.$eqLogic->getId().'">'.$eqLogic->getHumanName ().'>',
              'ayuda' => __('Acción', __FILE__),
              'who' => '#' . $cmd_id . '#'
            );
          }
        }
      }
    }
    devolver $regresar;
  }
  {% endraw %}
  ~~~

  Por lo tanto, puede integrar el mismo tipo de retorno en sus complementos, función `deadCmd()`.

</details>

#### Soporte para visualización de tablas en un complemento

Desde la versión 4.2 del Core, se ofrece una visualización en modo tabla en las páginas *Objetos* *Escenarios* *Interacciones* *Widgets* Y *Complementos*.

Esta función se basa completamente en CSS y no requiere modificación de los elementos DOM, aparte de agregar el botón a la derecha de la búsqueda para cambiar entre el modo tabla y normal.

En la mayoría de los complementos, el Core podrá administrar esta funcionalidad. Sin embargo, no se ha integrado de forma predeterminada porque varios complementos no utilizan *tarjeta de visualización* estándar, y el Core no puede administrar la pantalla, dependiendo del complemento.

Por lo tanto, esto debe probarse e integrarse para cada complemento. Varios casos posibles :

  - No integras el botón : Su complemento no ofrecerá este modo.
  - Integras el botón y la pantalla está bien gestionada : Nada más que hacer.
  - Integras el botón, pero la pantalla no está bien gestionada : Inspírate en Core 4 CSS.2 para hacer tu propio CSS.

En todos los casos, el botón de alternancia del modo de tabla está integrado con la clase CSS "oculta" y, por lo tanto, está oculto. Por lo tanto, no será visible en los núcleos anteriores a 4.2 no tener esta opción.


##### Agregue el botón a la derecha del campo de búsqueda :

Simplemente agregue este botón a la derecha del cuadro de búsqueda en su página `myplugin/desktop/php/myplugin.php` :

`<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="1" data-state="0"><i class="fas fa-grip-lines"></i></a> `

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

Pruebe la pantalla en un Core v4.2. Si todo está bien, se acabó !

##### Si la visualización de eqlogics no es estándar :

Configuración *soporte de núcleo de datos* a 0 :

`<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="0" data-state="0"><i class="fas fa-grip-lines"></i></a> `

- Administre su propia clase CSS, distinta de ".displayAsTable". Coloque el archivo css en `myplugin/desktop/css/myplugin.css` y luego importarlo desde el escritorio/php así :

  `include_file('escritorio', 'micomplemento', 'css', 'micomplemento');`

- Manejar el evento del botón :

<details>

  <summary markdown="span">Ejemplo d'event js</summary>

  ~~~js
  {% raw %}
  $('#bt_pluginDisplayAsTable').off('click').on('click', function () {
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      si ($(esto).datos('estado') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie('jeedom_displayAsTable', 'verdadero', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } demás {
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

##### Como referencia, el complemento js.plantilla :

<details>

  <summary markdown="span">plugin.plantilla js</summary>

  ~~~js
  {% raw %}
  //displayAsTable si el complemento lo admite:
  si ($('#bt_pluginDisplayAsTable').length) {
    $('#bt_pluginDisplayAsTable').removeClass('hidden') //Not shown on previous core versions
    if (getCookie('jeedom_displayAsTable') == 'verdadero' || jeedom.tema.theme_displayAsTable == 1) {
      $('#bt_pluginDisplayAsTable').data('state', '1').addClass('active')
      si ($('#bt_pluginDisplayAsTable[data-coreSupport="1"]').length) {
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      }
    }
    //evento central:
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      si ($(esto).datos('estado') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie('jeedom_displayAsTable', 'verdadero', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } demás {
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

También puedes inspirarte en Core CSS :

- Archivo `escritorio/css/desktop.main.css`sección`/* __________________ mostrar como tabla */`

##### Mostrar otros elementos en la vista de tabla

Si desea un artículo en el *tarjeta de visualización* aparece a la derecha, agregue la clase CSS `displayTableRight`. Si necesita colocar varios elementos allí, colóquelos todos en un solo ` <span class="displayTableRight">...</span> `

El modo tabla muestra cada elemento en una línea, hay espacio a la derecha para agregar información, ver botones.

Así podrás tener en cada *tarjeta de visualización* elementos que no se mostrarán en modo normal, y a la derecha en modo tabla.

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
        eco $div;
      }
    ?>
  </div>
  {% endraw %}
  ~~~

</details>

Aquí (complemento *jeeLog*) Los parámetros cron y log estarán ocultos en modo normal pero visibles a la derecha en modo tabla. También puedes inspirarte en las páginas de Core v4.2, en particular el de los escenarios que muestra el botón para abrir los registros.

No olvide la clase "oculta" (no presente en las páginas Core) para que este elemento no se muestre en modo normal en versiones Core anteriores a 4.2.


#### Mostrar ayuda desde un widget

Desde v4.2, los parámetros opcionales disponibles en los Core Widgets se muestran para cada widget, ya sea en la configuración de control o desde el modo Editar del Dashboard.

En el código de **Widget de panel**, se inserta una etiqueta `template` entre el último `div` interno y la etiqueta `script`. El Core elimina esta etiqueta al mostrar el widget para no hacer la página más pesada. Sin embargo, en versiones anteriores a 4 Core.2, los navegadores no muestran la etiqueta `plantilla`. Por el contrario, el Core recupera esta etiqueta "plantilla" para mostrar ayuda en las ventanas de configuración.

- Si una etiqueta "plantilla" está presente y no está vacía, el Core muestra su contenido.
- Si hay una etiqueta `template` presente, pero vacía, el Core muestra *`No hay parámetros opcionales disponibles`*.
- Si no hay ninguna etiqueta `template` presente, el Core muestra *`No se encontró ninguna descripción para este widget`*.

<details>

  <summary markdown="span">Ejemplo de code de WidgY avec template</summary>

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

Todos los widgets de tipo control deslizante se utilizan desde v4.2 una nueva biblioteca [noUiSlider](https://refreshless.com/nouislider/). Más flexible en su uso e inicialización, también nos permite utilizar código idéntico en escritorio y móvil. También es compatible *Tocar* en teléfonos inteligentes !

Si sus complementos/widgets de terceros usan controles deslizantes, es mejor migrar a esta nueva biblioteca.

> Atención : Núcleo pre-4.2 no tienen la lib **nouislider** !

Puedes probar la existencia de la biblioteca de esta manera :

```js
si (tipo de noUiSlider !== 'undefined') {
  console.log('no hay código UiSlider aquí')
} demás {
  console.log('código antiguo aquí')
}
```

#### Traducción de widgets de terceros

Si crea y comparte widgets (código) de terceros, Core v4.2 ahora apoya su internacionalización.

Para ello, cada widget debe ir acompañado de su archivo json que contiene sus traducciones.

ruta del widget : `datos\customTemplates\dashboard\cmd.info.string.myCustomWidget.html`
ruta de traducción : `datos\customTemplates\i18n\cmd.info.string.myCustomWidget.json`

> La versión móvil del Widget realizará la traducción en el mismo lugar.

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
    "es_US": {
      "Soy un widget de terceros": "Soy un widget personalizado",
      "Mi configuración de terceros": "Mi descripción de parámetro personalizado"
    },
    "es_ES": {
      "Soy un widget de terceros": "Ser un widget de terceros",
      "Mi configuración de terceros": "Mi configuración de terceros"
    },
    "de_DE": {
      "Soy un widget de terceros": "Ich bin ein Widget eines Drittanbieters",
      "Mi configuración de terceros": "Mi instalación de Drittanbietern"
    }
  }
```

> Los textos `Fecha valor`, `Fecha colección` y todos los que se encuentran en los widgets Core no necesitan estar en el json. Si no tiene ningún otro texto en su widget, entonces el json no es necesario y estas cadenas se traducirán.


#### Integración en el núcleo de tipos genéricos específicos de un complemento

Núcleo v4.2 tiene una nueva página que le permite configurar tipos genéricos más fácilmente. Por supuesto, utiliza los tipos genéricos definidos por el núcleo, pero ciertos complementos definen sus propios tipos genéricos.

Para que estos complementos sean compatibles con esta nueva página principal, aquí se explica cómo integrarlos.

Al abrir esta página, el Core comprueba, para cada complemento, si tiene un método `pluginGenericTypes()`. Si este es el caso, entonces se llama a este método, esperando los Tipos Genéricos del complemento para poder integrarlos. Estos deben respetar la definición de Tipos Genéricos del Núcleo, particularmente si ya existen categorías (Socket, Light, etc.).).

Ejemplo, en el archivo `plugins/monplugin/core/php/monplugin.class.php`:

```php
la clase myPlugin extiende eqLogic
{
    /*     * ***********************Método estático*************************** */
    pública estática $_widgetPossibility = array('personalizado' => verdadero);

    complemento de función estática públicaGenericTypes()
    {
        $generics = array(
            'MONPLUGIN_TOGGLE' => array( //capitalizar sin espacio
                'nombre' => __('MyPlugin Toggle',__FILE__),
                'familyid' => 'MyPlugin', //No hay espacio aquí
                'family' => __('Plugin MyPlugin',__FILE__), //Comienza con 'Plugin ' ...
                'tipo' => 'Acción',
                'subtipo' => matriz('otro')
            ),
            'MONPLUGIN_LIGHT_BEAM' => matriz(
                'nombre' => __('Rayos de luz (MyPlugin)',__FILE__),
                'familyid' => 'LIGHT', //Tipo existente si lo hay
                'familia' => __('Luz',__FILE__),
                'tipo' => 'Información',
                'subtipo' => matriz('binario','numérico')
            )
        );
        devolver $genéricos;
    }

```

Aquí, el complemento `monPlugin` 'inyectará' dos tipos genéricos :

- Un tipo genérico MONPLUGIN_TOGGLE, de tipo `MonPlugin`, categoría que no existe en el Core.
- Un tipo genérico MONPLUGIN_LIGHT_BEAM, en la categoría existente "Light".

> Referencia : Los tipos genéricos principales se definen en la [archivo de configuración](https://github.com/jeedom/core/blob/alpha/core/config/jeedom.config.php), matriz $JEEDOM_INTERNAL_CONFIG, tipo_genérico.