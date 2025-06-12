## Núcleo v4.2 | Desarrolladores de complementos


### Obsolete

- Método `initCheckBox()` (utils.js).
- Método de clase `cmd` : `setEventOnly()`.

### Deprecated

Estos cambios todavía se admiten en la versión v4.2 y pasará a **Obsoleto** en una versión futura.

- El método `eqLogic`::byTypeAndSearhConfiguration()` se ha renombrado correctamente : `eqLogic::byTypeAndSearchConfiguration()`.
- El método js `jeedom.eqLogic`.buildSelectCmd` ha sido renombrado correctamente : `jeedom.eqLogic.buildSelectCmd`.

*Estos dos métodos también se han integrado en la versión v4.1 para acelerar su adopción.*

- Eliminación de la biblioteca jwerty para vanillaJS (gestión de atajos de teclado)).
- El uso de `showAlert` está cambiando : `$('#div_alert').showAlert({` se convierte en `$.fn.showAlert({`. No hay cambios para llamar desde un modal. No compatible con Core anterior a la versión 4.2.

- Método PHP `displayException` : )
-  : )


### 

#### 

..

:

```php
 {
    
```

#divGraphInfo# :

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


#### 

. ****, .

:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  
  {% raw %}
  ) {
    $return = array();
    ::) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic));
      #([0-9]*)#
      ) {
        )) {
          si (!cmd::))) {
            $return[] = array(
              '?>',
              '),
              'who' => '#' . $cmd_id . '#'
            );
          }
        }
      }
    }
    devolver $return;
  }
  {% endraw %}
  ~~~

  .

</details>

#### 

. ** ** ** ** Y **.

.

.  ** .

.  :

  -  : .
  -  : .
  -  : ..

. ..


#####  :

. :



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

.  !

#####  :

 **  :



- ". . :

  

-  :

<details>

  <summary markdown="span">Ejemplo d'event js</summary>

  ~~~ js
  {% raw %}
  $('#bt_pluginDisplayAsTable').off('click').on('click', function () {
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      ).") {
        $(this).data('state', '1').addClass('active')
        )
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } demás {
        $(this).data('state', '0').removeClass('active')
        )
        $('.eqLogicDisplayCard').removeClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').addClass('hidden')
        $('.eqLogicThumbnailContainer').first().removeClass('containerAsTable')
      }
    })
  })
  {% endraw %}
  ~~~

</details>

##### . :

<details>

  <summary markdown="span">plugin. js</summary>

  ~~~ js
  {% raw %}
  :
  ').length) {
    $('#bt_pluginDisplayAsTable').removeClass('hidden') //Not shown on previous core versions
    si (getCookie('jeedom_displayAsTable') == 'verdadero' || tema jeedom.) {
      $('#bt_pluginDisplayAsTable').data('state', '1').addClass('active')
      "]').length) {
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      }
    }
    :
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      ).") {
        $(this).data('state', '1').addClass('active')
        )
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } demás {
        $(this).data('state', '0').removeClass('active')
        )
        $('.eqLogicDisplayCard').removeClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').addClass('hidden')
        $('.eqLogicThumbnailContainer').first().removeClass('containerAsTable')
      }
    })
  }
  {% endraw %}
  ~~~

</details>

 :

- .sección css`/*  */`

##### Mostrar otros elementos en la vista de tabla

Si desea un artículo de la ** aparece a la derecha, agregue la clase CSS `displayTableRight`. Si necesita colocar varios elementos en él, colóquelos todos en un solo ` <span class="displayTableRight">...</span> `

El modo tabla muestra cada elemento en una línea, hay espacio a la derecha para agregar información, ver botones.

Así podrás tenerlo en cada uno ** elementos que no se mostrarán en el modo normal y a la derecha en el modo tabla.

<details>

  <summary markdown="span">Par exemple :</summary>

  
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

Aquí (complemento *jeeLog*) Las configuraciones de cron y registro estarán ocultas en el modo normal, pero visibles a la derecha en el modo de tabla. También puedes inspirarte en las páginas de Core v4.2, en particular el de escenarios que muestra el botón para abrir los registros.

No olvide la clase `oculta` (no presente en las páginas de Core) para que este elemento no se muestre en modo normal en Cores anteriores a 4.2.


#### Cómo mostrar ayuda para un widget

Desde la v4.2, los parámetros opcionales disponibles en los Widgets principales se muestran para cada widget, ya sea en la configuración del comando o desde el modo de edición del tablero.

En el código de la **Widget del panel de control**, Se inserta una etiqueta `template` entre el último `div` interno y la etiqueta `script`. El Core elimina esta etiqueta al mostrar el Widget para no hacer la página más pesada. Sin embargo, en los núcleos anteriores a 4.2, la etiqueta `template` no se muestra en los navegadores. Por el contrario, esta etiqueta `plantilla` es recuperada por el núcleo para mostrar ayuda en las ventanas de configuración.

- Si hay una etiqueta `plantilla` presente y no está vacía, el núcleo muestra su contenido.
- Si hay una etiqueta `plantilla` presente, pero está vacía, el núcleo muestra *`No hay parámetros opcionales disponibles`*.
- Si no hay ninguna etiqueta `plantilla` presente, el núcleo muestra *`No se encontró ninguna descripción para este widget`*.

<details>

  <summary markdown="span">Ejemplo de code de WidgY avec template</summary>

  ~~~ html
  <div class=" cmd-widget" ...>
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

Todos los widgets de tipo deslizante se utilizan desde la versión v4.2 una nueva biblioteca [noUiSlider](https://refreshless.com/nouislider/). Más flexible en su uso e inicialización, también nos permite usar código idéntico en computadoras de escritorio y dispositivos móviles. También es compatible *Tocar* en teléfonos inteligentes !

Si sus complementos/widgets de terceros usan controles deslizantes, es mejor migrar a esta nueva biblioteca.

> Atención : Pre-4 núcleos.2 no tienen la biblioteca **nouislider** !

Puedes probar la existencia de la biblioteca de esta manera :

```js
si (tipo de noUiSlider !== 'undefined') {
  console.log('noUiSlider código aquí')
} demás {
  console.log('código antiguo aquí')
}
```

#### Traducción de widgets de terceros

Si crea y comparte widgets de terceros (código), Core v4.2 ahora apoya su internacionalización.

Para ello, cada widget debe estar acompañado de su archivo json que contiene sus traducciones.

ruta del widget : `datos\customTemplates\dashboard\cmd.info.string.myCustomWidget.html`
ruta de traducción : `datos\customTemplates\i18n\cmd.info.string.myCustomWidget.json`

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
    "en_US": {
      "Soy un widget de terceros": "Soy un widget personalizado",
      "Mi configuración de terceros": "Mi descripción de parámetro personalizado"
    },
    "es_ES": {
      "Soy un widget de terceros": "Soy un widget de terceros",
      "Mi configuración de terceros": "Mi configuración de tres"
    },
    "de_DE": {
      "Soy un widget de terceros": "Ich bin ein Widget eines Drittanbieters",
      "Mi configuración de terceros": "Mi instalación de Drittanbietern"
    }
  }
```

> Los textos `Fecha de valor`, `Fecha de recopilación` y todos los que se encuentran en los widgets Core no necesitan estar en el json. Si no tiene ningún otro texto en su widget, entonces el json no es necesario y estas cadenas se traducirán.


#### Integración de tipos genéricos específicos del complemento en el núcleo

El núcleo v4.2 tiene una nueva página para configurar Tipos Genéricos más fácilmente. Por supuesto, asume los tipos genéricos definidos por el núcleo, pero algunos complementos definen sus propios tipos genéricos.

Para que estos complementos sean compatibles con esta nueva página principal, aquí se explica cómo integrarlos.

Al abrir esta página, el Core verifica, para cada complemento, si tiene un método `pluginGenericTypes()`. Si es así, se llama a este método, esperando que se integren los tipos genéricos del complemento. Estos deben respetar la definición de Tipos Genéricos del Núcleo, en particular si ya existen categorías (Socket, Luz, etc.).).

Ejemplo, en el archivo `plugins/myplugin/core/php/myplugin.class.php`:

```php
La clase myPlugin extiende eqLogic
{
    /*     * ***********************Método estático*************************** */
    

    plugin de función estática pública GenericTypes()
    {
        $generics = array(
            'MONPLUGIN_TOGGLE' => array( //capitalizar sin espacios
                'nombre' => __('MyPlugin Toggle',__FILE__),
                'familyid' => 'MyPlugin', //No hay espacio aquí
                'familia' => __('Plugin MyPlugin',__FILE__), //Comienza con 'Plugin ' ...
                'tipo' => 'Acción',
                'subtipo' => array('otro')
            ),
            'MONPLUGIN_LIGHT_BEAM' => matriz(
                'nombre' => __('Rayos de luz (MiPlugin)',__ARCHIVO__),
                'familyid' => 'LIGHT', //Tipo existente si lo hay
                'familia' => __('Luz',__ARCHIVO__),
                'tipo' => 'Información',
                'subtipo' => array('binario','numérico')
            )
        );
        
    }

```

 :

- .
- .

>  :  [](https://github.com/jeedom/core/blob/alpha/core/config/jeedom.config.php), .