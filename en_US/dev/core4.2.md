## Core v4.2 | Plugin Developers


### Obsolete

- ).
-  : .

### Deprecated

. **Obsolete** .

- :: : `eqLogic::byTypeAndSearchConfiguration()`.
- . : .

*..*

- ).
-  : ').. . .

-  : )
-  : )


### Optional changes

#### 

..

:

```php
 {
    
```

#divGraphInfo# :

```html
<div class="eqLogic eqLogic-widgand allowResize allowReorderCmd #custom_layout# #eqLogic_class# #class#" data-eqType="#eqType#" data-eqLogic_id="#id#" data-eqLogic_uid="#uid#" data-version="#version#" data-translate-category="#translate_category#" data-category="#category#" data-tags="#tags#" style="width: #width#;height: #height#;#style#">
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


#### 

. ****, .

:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  
  ) {
    $return = array();
    ::) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic));
      #([0-9]*)#
      ) {
        )) {
          if (!cmd::))) {
            $return[] = array(
              '?>',
              '),
              'who' => '#' . $cmd_id . '#'
            );
          }
        }
      }
    }
    return $return;
  }
  

  .

</details>

#### 

. ** ** ** ** and **.

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
  

</details>

.  !

#####  :

 **  :



- ". . :

  

-  :

<details>

  <summary markdown="span">Example d'event js</summary>

  
  {% raw %}
  $('#bt_pluginDisplayAsTable').off('click').on('click', function () {
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      ).") {
        $(this).data('state', '1').addClass('active')
        )
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } else {
        $(this).data('state', '0').removeClass('active')
        )
        $('.eqLogicDisplayCard').removeClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').addClass('hidden')
        $('.eqLogicThumbnailContainer').first().removeClass('containerAsTable')
      }
    })
  })
  {% endraw %}
  

</details>

##### . :

<details>

  <summary markdown="span">plugin. js</summary>

  
  {% raw %}
  :
  ').length) {
    $('#bt_pluginDisplayAsTable').removeClass('hidden') //Not shown on previous core versions
    ' || .) {
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
      } else {
        $(this).data('state', '0').removeClass('active')
        )
        $('.eqLogicDisplayCard').removeClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').addClass('hidden')
        $('.eqLogicThumbnailContainer').first().removeClass('containerAsTable')
      }
    })
  }
  {% endraw %}
  

</details>

 :

- .*  *

##### 

 ** . 

.

 ** .

<details>

  <summary markdown="span">Par exemple :</summary>

  
  {% raw %}
  <div class="eqLogicThumbnailContainer">
    <?php
      ) {
        $div = '';
        $opacity = ($eqLogic->getIsEnable()) ? '' : 'disableCard';
        $div .= '<div class="eqLogicDisplayCard cursor '.$opacity.'" data-eqLogic_id="' . $eqLogic->getId() . '">';
        $div .= '<img src="' . $plugin->getPathImgIcon() . '"/>';
        $div .= '<br>';
        $div .= '<span class="name">' . $eqLogic->getHumanName(true, true) . '</span>';
        $div .= '<span class="hidden hiddenAsCard displayTableRight">'.$eqLogic->getConfiguration('autorefresh').' | '.$eqLogic->getConfiguration('loglasttime').'h</span>';
        $div .= '</div>';
        
      }
    ?>
  </div>
  {% endraw %}
  

</details>

 **) . ..

.


#### 

..

 ****, . . .. .

- .
-  **.
-  **.

<details>

  <summary markdown="span">Example de code de Widgand avec template</summary>

  
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
  

</details>

#### 

. [](https://refreshless.com/nouislider/). .  **  !

.

> Attention : Pre-4 Cores.2 don't have the lib **slider** !

You can test the existence of the lib like this :

```js
if (typeof noUiSlider !== 'undefined') {
  console.log('noUiSlider code here')
} else {
  console.log('old code here')
}
```

#### Translation of Third-Party Widgets

If you make and share third-party Widgets (code), Core v4.2 now supports their internationalization.

For this, each widget must be accompanied by its json file containing its translations.

widget path : `data\customTemplates\dashboard\cmd.info.string.myCustomWidget.html`
translation path : `data\customTemplates\i18n\cmd.info.string.myCustomWidget.json`

> The mobile version of the Widget will take the translation from the same place.

Example :

```html
<div class="content-xs">
    <span class="cmdName #hide_name#">#name_display#</span> <strong class="state"></strong>
    {{I am a third party widget}}
  </div>
  <template>
    <div>param : {{My Third Party Setting}}.</div>
  </template>
  <script>
```

```json
  {
    "en_US": {
      "I am a third party widget": "I am a custom widget",
      "My Third Party Setting": "My custom parameter description"
    },
    "es_ES": {
      "I am a third party widget": "Be a terceros widget",
      "My Third Party Setting": "Mi configuration of terceros"
    },
    "from_DE": {
      "I am a third party widget": "Ich bin ein Widget eines Drittanbieters",
      "My Third Party Setting": "Meine Einstellung von Drittanbietern"
    }
  }
```

> `Value date`, `Collection date` and all texts in Core widgets do not need to be in json. If you don't have other texts in your widget, then the json is not needed, and these strings will be translated.


#### Integration in the Core of Generic Types specific to a plugin

Core v4.2 has a new page allowing to configure the Generic Types more easily. Of course, it uses the Generic Types defined by the Core, but some plugins define their own Generic Types.

In order for these plugins to be supported by this new Core page, here is how to integrate them.

When opening this page, the Core checks, for each plugin, if it has a `pluginGenericTypes()` method. If this is the case, this method is then called, waiting for the Generic Types of the plugin in order to integrate them. These must respect the definition of Core Generic Types, especially if categories already exist (Grip, Light, etc.).).

Example, in the file `plugins/monplugin/core/php/monplugin.class.php`:

```php
class myPlugin extends eqLogic
{
    /*     * ***********************Static method*************************** */
    

    public static function pluginGenericTypes()
    {
        $generics = array(
            'MYPLUGIN_TOGGLE' => array( //capitalize without space
                'name' => __('MyPlugin Toggle',__FILE__),
                'familyid' => 'MyPlugin', //No space here
                'family' => __('Plugin MyPlugin',__FILE__), //Start with 'Plugin ' ...
                'type' => 'Action',
                'subtype' => array('other')
            ),
            'MYPLUGIN_LIGHT_BEAM' => array(
                'name' => __('Light Rays (MyPlugin)',__FILE__),
                'familyid' => 'LIGHT', //Existing type if any
                'family' => __('Light',__FILE__),
                'type' => 'Info',
                'subtype' => array('binary','numeric')
            )
        );
        return $generics;
    }

```

Here, the `myPlugin` plugin will 'inject' two Generic Types :

- A Generic Type MONPLUGIN_TOGGLE, of type `MyPlugin`, category that does not exist in the Core.
- A MONPLUGIN_LIGHT_BEAM Generic Type, in the existing `Light` category.

> Reference : Core Generic Types are defined in the [config file](https://github.com/jeedom/core/blob/alpha/core/config/jeedom.config.php), array $JEEDOM_INTERNAL_CONFIG, generic_type.