## Core v4.2 | Plugin Developers


### Obsolete

- `initCheckBox()` method (utils.js).
- Class method `cmd` : `setEventOnly()`.

### Deprecated

These changes are still supported in v4.2 and will pass into **Obsolete** in a future version.

- The `eqLogic method::byTypeAndSearhConfiguration()` has been renamed correctly : `eqLogic::byTypeAndSearchConfiguration()`.
- The js method `jeedom.eqLogic.builSelectCmd` has been renamed correctly : `jeedom.eqLogic.buildSelectCmd`.

*These two methods have also been integrated in v4.1 to accelerate their adoption.*

- Removed jwerty lib for vanillaJS (keyboard shortcut management)).
- Usage of `showAlert` changes : `$('#div_alert').showAlert({` becomes `$.fn.showAlert({`. No change for calling from a modal. Not supported on Core pre 4.2.

- Php method `displayException` : `displayException` (utils.inc)
- Php method `convertDayEnToFr` : `convertDayFromEn` (utils.inc)


### Optional modifications

#### Tiles background graphic

The v4.2 allows you to define, on an eqLogic, an info command whose history will be displayed in the tile background.

For this your plugin must allow it in plugins/myplugin/core/class/myplugin.class.php:

```php
class myplugin extends eqLogic {
    public static $_widgetPossibility = array('custom' => true);
```

If your plugin has a specific template for its equipment, the desktop version of it must be updated with `#divGraphInfo#` for display :

```html
{% raw %}
<div class="eqLogic eqLogic-widgAnd allowResize allowReorderCmd #custom_layout# #eqLogic_class# #class#" data-eqType="#eqType#" data-eqLogic_id="#id#" data-eqLogic_uid="#uid#" data-version="#version#" data-translate-category="#translate_category#" data-category="#category#" data-tags="#tags#" style="width: #width#;height: #height#;#style#">
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


#### Orphaned Commands

In v4.2, on the page **Analysis → Equipment**, Orphaned Commands tab, eqLogic function `deadCmdGeneric()` now returns a link to the affected scenario or equipment.

For reference, the new Core function:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  ~~~ php
  {% raw %}
  public static function deadCmdGeneric($_plugin_id) {
    $return = array();
    foreach (eqLogic::byType($_plugin_id) as $eqLogic) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic));
      preg_match_all("/#([0-9]*)#/", $eqLogic_json, $matches);
      foreach ($matches[1] as $cmd_id) {
        if (is_numeric($cmd_id)) {
          if (!cmd::byId(str_replace('#', '', $cmd_id))) {
            $return[] = array(
              'detail' => '?v=d&m='.$eqLogic->getEqType_name().'&p='.$eqLogic->getEqType_name().'&id='.$eqLogic->getId().'">'.$eqLogic->getHumanName ().'>',
              'help' => __('Action', __FILE__),
              'who' => '#' . $cmd_id . '#'
            );
          }
        }
      }
    }
    return $return;
  }
  {% endraw %}
  ~~~

  So you can integrate the same type of return in your plugins, `deadCmd()` function.

</details>

#### Support for table display in a plugin

Since version 4.2 of the Core, a table mode display is offered on the pages *Objects* *Scenarios* *Interactions* *Widgets* And *Plugins*.

This feature is entirely CSS based and does not require any modification to any DOM elements, other than adding the button to the right of the search to toggle between table and normal mode.

On most plugins, the Core will be able to handle this functionality. However, it was not integrated by default because several plugins do not use *displayCard* standard, and the Core cannot then manage the display, depending on the plugin.

So this needs to be tested and integrated for each plugin. Several cases possible :

  - You do not integrate the button : Your plugin will not offer this mode.
  - You integrate the button, and the display is well managed : Nothing more to do.
  - You integrate the button, but the display is not well managed : Get inspired by Core 4 CSS.2 to make your own CSS.

In any case, the table mode toggle button is embedded with the CSS class `hidden` and is therefore hidden. So it won't be visible on pre-4 Cores.2 not having this option.


##### Add button to the right of the search field :

Simply add this button to the right of the search field on your page `myplugin/desktop/php/myplugin.php` :

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

Setting *data-coreSupport* at 0 :

`<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="0" data-state="0"><i class="fas fa-grip-lines"></i></a> `

- Manage your own css class, other than ".displayAsTable". Place the css file in `myplugin/desktop/css/myplugin.css` then import it from desktop/php like this :

  `include_file('desktop', 'myplugin', 'css', 'myplugin');`

- Handle the button event :

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

##### For reference, the plugin js.template :

<details>

  <summary markdown="span">plugin.template js</summary>

  ~~~ js
  {% raw %}
  //displayAsTable if plugin support it:
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

- File `desktop/css/desktop.main.css` section `/* __________________displayAsTable */`

##### Show other items in table view

If you would like any item from the *displayCard* appears on the right, add the CSS class `displayTableRight`. If you need to put multiple items in it, put them all in one ` <span class="displayTableRight">...</span> `

Table mode displays each item on a line, there is room on the right to add information, see buttons.

You can thus have on each *displayCard* items that will not be displayed in normal mode, and on the right in table mode.

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

Here (plugin *jeeLog*) cron and log settings will be hidden in normal mode but visible on the right in table mode. You can also take inspiration from the Core v4 pages.2, especially the scenarios one which displays the button to open the logs.

Don't forget the `hidden` class (not present on Core pages) so that this element is not displayed in normal mode on pre-4.2 Cores.


#### Displaying Help for a Widget

Since v4.2, the optional parameters available on the Core Widgets are displayed for each widget, whether in the command configuration or from the Dashboard Edit mode.

In the code of the **Dashboard Widget**, a `template` tag is inserted between the last inner `div` and the `script` tag. The Core removes this tag when displaying the Widget so as not to weigh down the page. However, on pre-4 Cores.2, the `template` tag is not displayed by browsers. Conversely, this `template` tag is retrieved by the Core to display help in the configuration windows.

- If a `template` tag is present and not empty, the Core displays its contents.
- If a `template` tag is present, but empty, the Core displays *`No optional parameters available`*.
- If no `template` tag is present, the Core displays *`No description found for this Widget`*.

<details>

  <summary markdown="span">Example de code de WidgAnd avec template</summary>

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

#### Slider Widgets

All slider type widgets use since v4.2 a new lib [noUiSlider](https://refreshless.com/nouislider/). More flexible in its use and initialization, it also allows us to use identical code on desktop and mobile. It is also compatible *Touch* on smartphones !

If your third party plugins/widgets use sliders, it is better to migrate to this new lib.

> Attention : Core pre-4.2 do not have the lib **nouislider** !

You can test the existence of the lib like this :

```js
if (typeof noUiSlider !== 'undefined') {
  console.log('noUiSlider code here')
} else {
  console.log('old code here')
}
```

#### Translation of Third Party Widgets

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
    <div>param : {{My third party setting}}.</div>
  </template>
  <script>
```

```json
  {
    "en_US": {
      "I am a third party widget": "I am a custom widget",
      "My third party setting": "My custom parameter description"
    },
    "es_ES": {
      "I am a third party widget": "I'm a terceros widget",
      "My third party setting": "My configuration of three"
    },
    "from_DE": {
      "I am a third party widget": "Ich bin ein Widget eines Drittanbieters",
      "My third party setting": "Meine Einstellung von Drittanbietern"
    }
  }
```

> The texts `Value date`, `Collection date` and all those found in Core widgets do not need to be in the json. If you don't have any other texts in your widget, then the json is not needed, and these strings will be translated.


#### Integration of Generic Types specific to a plugin into the Core

The Core v4.2 has a new page to configure Generic Types more easily. It of course takes over the Generic Types defined by the Core, but some plugins define their own Generic Types.

In order for these plugins to be supported by this new Core page, here is how to integrate them.

When opening this page, the Core checks, for each plugin, if it has a `pluginGenericTypes()` method. If so, this method is then called, waiting for the plugin's Generic Types in order to integrate them. These must respect the definition of Generic Types of the Core, in particular if categories already exist (Socket, Light, etc.).).

Example, in the file `plugins/myplugin/core/php/myplugin.class.php`:

```php
class myPlugin extends eqLogic
{
    /*     * ***********************Static method*************************** */
    public static $_widgetPossibility = array('custom' => true);

    public static function pluginGenericTypes()
    {
        $generics = array(
            'MONPLUGIN_TOGGLE' => array( //capitalize without space
                'name' => __('MyPlugin Toggle',__FILE__),
                'familyid' => 'MyPlugin', //No space here
                'family' => __('Plugin MyPlugin',__FILE__), //Start with 'Plugin ' ...
                'type' => 'Action',
                'subtype' => array('other')
            ),
            'MONPLUGIN_LIGHT_BEAM' => array(
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

Here, the plugin `myPlugin` will 'inject' two Generic Types :

- A Generic Type MONPLUGIN_TOGGLE, of type `MyPlugin`, category not existing in the Core.
- A Generic Type MONPLUGIN_LIGHT_BEAM, in the existing category `Light`.

> Reference : Core Generic Types are defined in the [config file](https://github.com/jeedom/core/blob/alpha/core/config/jeedom.config.php), array $JEEDOM_INTERNAL_CONFIG, generic_type.