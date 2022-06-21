## Core v4.2 | Plugin Developers


### Obsolete

- `initCheckBox()` method (utils.js).
- `cmd` class method : `setEventOnly()`.

### Deprecated

These changes are still supported in v4.2 and will switch to **Obsolete** in a future version.

- The eqLogic method::byTypeAndSearhConfiguration()` was renamed correctly : `eqLogic::byTypeAndSearchConfiguration()`.
- The js method `jeedom.eqLogic.buildSelectCmd has been renamed correctly : `jeedom.eqLogic.buildSelectCmd`.

*These two methods have also been integrated in v4.1 to accelerate their adoption.*

- Removal of the jwerty lib for vanillaJS (keyboard shortcut management).
- Usage of `showAlert` changes : `$('#div_alert').showAlert({` becomes `$.fn.showAlert({`. No change for the call from a modal. Not supported on Core pre 4.2.

- Php `displayException` method : `displayException` (utils.inc)
- PHP `convertDayEnToFr` method : `convertDayFromEn` (utils.inc)


### Optional changes

#### Tiles background graphic

V4.2 allows to define, on an eqLogic, an info command whose history will be displayed in the background of the tile.

For this your plugin must allow it in plugins/myplugin/core/class/myplugin.class.php:

```php
class myplugin extends eqLogic {
    public static $_widgetPossibility = array('custom' => true);
```

If your plugin has a specific template for its equipment, the desktop version of it must be updated with `#divGraphInfo#` for display :

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


#### Orphan commands

In v4.2, on the page **Analysis → Equipment**, Orphan commands tab, the eqLogic `deadCmdGeneric()` function now returns a link to the scenario or the equipment concerned.

For reference, the new Core function:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  ~~~ php
  public static function deadCmdGeneric($_plugin_id) {
    $return = array();
    foreach(eqLogic::byType($_plugin_id) as $eqLogic) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic));
      preg_match_all("/#([0-9]*)#/", $eqLogic_json, $matches);
      foreach ($matches[1] as $cmd_id) {
        if (is_numeric($cmd_id)) {
          if (!cmd::byId(str_replace('#', '', $cmd_id))) {
            $return[] = array(
              '<html>detail' => '?v=d&m='.$eqLogic->getEqType_name().'&p='.$eqLogic->getEqType_name().'&id='.$eqLogic->getId().'">'.$eqLogic->getHumanName ().' </a>',
              'help' => __('Action', __FILE__),
              'who' => '#' . $cmd_id . '#'
            );
          }
        }
      }
    }
    return $return;
  }
  ~~~

  So you can embed the same return type in your plugins, `deadCmd()` function.

</details>

#### Table display support in a plugin

Since version 4.2 of the Core, a display in table mode is offered on the pages *Objects* *Scenarios* *Interactions* *Widgets* and *Plugins*.

This function is entirely based on CSS and does not require any modification of the DOM elements, except for the addition of the button to the right of the search to switch between table and normal mode.

On most plugins, the Core will be able to handle this feature. However, it was not integrated by default because several plugins do not use *displayCard* standard, and then the Core can't manage the display, depending on the plugin.

This must therefore be tested and integrated for each plugin. Several cases possible :

  - You don't embed the button : Your plugin will not offer this mode.
  - You integrate the button, and the display is well managed : Nothing more to do.
  - You integrate the button, but the display is not well managed : Take inspiration from Core 4 CSS.2 to make your own CSS.

In any case, the table mode toggle button is integrated with the `hidden` CSS class and is therefore hidden. It will therefore not be visible on pre-4 Cores.2 not having this option.


##### Add the button to the right of the search field :

Just add this button to the right of the search box on your page `myplugin/desktop/php/myplugin.php` :

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

Test the display on a Core v4.2. If all goes well, it's over !

##### If non-standard display of eqlogics :

Setting *data-coreSupport* to 0 :

`<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="0" data-state="0"><i class="fas fa-grip-lines"></i></a> `

- Manage your own css class, other than ".displayAsTable". Put the css file in `myplugin/desktop/css/myplugin.css` then import it from the desktop/php like this :

  `include_file('desktop', 'myplugin', 'css', 'myplugin');`

- Manage the button event :

<details>

  <summary markdown="span">Example d'event js</summary>

  ~~~ js
  {% raw %}
  $('#bt_pluginDisplayAsTable').off('click').on('click', function () {
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      if ($(this).data('state') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie('jeedom_displayAsTable', 'true', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } else {
        $(this).data('state', '0').removeClass('active')
        setCookie('jeedom_displayAsTable', 'false', 2)
        $('.eqLogicDisplayCard').removeClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').addClass('hidden')
        $('.eqLogicThumbnailContainer').first().removeClass('containerAsTable')
      }
    })
  })
  {% endraw %}
  ~~~

</details>

##### For reference, the js of the plugin.template :

<details>

  <summary markdown="span">plugin.template js</summary>

  ~~~ js
  {% raw %}
  //displayAsTable if plugin supports it:
  if ($('#bt_pluginDisplayAsTable').length) {
    $('#bt_pluginDisplayAsTable').removeClass('hidden') //Not shown on previous core versions
    if (getCookie('jeedom_displayAsTable') == 'true' || jeedom.theme.theme_displayAsTable == 1) {
      $('#bt_pluginDisplayAsTable').data('state', '1').addClass('active')
      if ($('#bt_pluginDisplayAsTable[data-coreSupport="1"]').length) {
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      }
    }
    //core event:
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      if ($(this).data('state') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie('jeedom_displayAsTable', 'true', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } else {
        $(this).data('state', '0').removeClass('active')
        setCookie('jeedom_displayAsTable', 'false', 2)
        $('.eqLogicDisplayCard').removeClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').addClass('hidden')
        $('.eqLogicThumbnailContainer').first().removeClass('containerAsTable')
      }
    })
  }
  {% endraw %}
  ~~~

</details>

You can also take inspiration from Core CSS :

- `desktop/css/desktop.main file.css `section`/* __________________displayAsTable */`

##### Show other items in table view

If you want an element of the *displayCard* appears on the right, add the CSS class `displayTableRight`. If you need to put multiple items in there, put them all in a single ` <span class="displayTableRight">...</span> `

The table mode displaying each element on a line, there is room on the right to add information, see buttons.

You can thus have on each *displayCard* elements that will not be displayed in normal mode, and on the right in table mode.

<details>

  <summary markdown="span">Par exemple :</summary>

  ~~~ php
  {% raw %}
  <div class="eqLogicThumbnailContainer">
    <?php
      foreach ($eqLogics as $eqLogic) {
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

Here (plugin *jeeLog*) cron and log parameters will be hidden in normal mode but visible on the right in table mode. You can also take inspiration from the Core v4 pages.2, in particular that of the scenarios which displays the button to open the logs.

Don't forget the `hidden` class (not present on the Core pages) so that this element is not displayed in normal mode on pre-4.2 Cores.


#### Displaying Help for a Widget

Since v4.2, optional parameters available on Core Widgets are shown displayed for each widget, whether in the command configuration or from the Edit mode of the Dashboard.

In the code of **Dashboard-widget**, a `template` tag is inserted between the last internal `div` and the `script` tag. The Core removes this tag when displaying the Widget so as not to weigh down the page. However, on pre-4 Cores.2, the `template` tag is not displayed by browsers. Conversely, this `template` tag is retrieved by the Core to display the help in the configuration windows.

- If a `template` tag is present and not empty, the Core displays its content.
- If a `template` tag is present, but empty, the Core displays *`No optional parameters available`*.
- If no `template` tag is present, the Core displays *`No description found for this Widget`*.

<details>

  <summary markdown="span">Example de code de Widgand avec template</summary>

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

#### Slider widgets

All Slider Widgets use since v4.2 a new lib [noUiSlider](https://refreshless.com/nouislider/). More flexible in its use and initialization, it also allows us to use identical code on desktop and mobile. It is also compatible *Touch* on smartphones !

If your 3rd party plugins/widgets use sliders, it is better to migrate to this new lib.

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
    public static $_widgetPossibility = array('custom' => true);

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