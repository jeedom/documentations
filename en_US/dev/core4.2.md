## Core v4.2 | Plugin developers

### Deprecated

- Removal of the jwerty liberty for vanillaJS (management of keyboard shortcuts). Kept in v4.2 for plugins likely to use it, it will be removed in v4.3.

### Under test / development

#### Log coloring and translation

- `\ core \ configjeedom.config.php : $JEEDOM_SCLOG_TEXT reprend les valeurs colorées pour la traduction. Check for missing log returns and incorporate them if necessary.
- Used in php class `cmd`` scenario` `scenarioElement`` scenarioExpression` `scenarioSubElement`
- Used in ajax `scenario` and` log` calls

#### Documentation to adapt to new options / functions

### Optional modifications

#### Orphan commands

In v4.2, on the page **Analysis → Equipment**, Orphan commands tab, the eqLogic `deadCmdGeneric ()` function now returns a link to the scenario or the device concerned.

For reference, the new function of the Core:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  ~~~ php
  public static function deadCmdGeneric ($ _ plugin_id) {
    $return = array();
    foreach (eqLogic::byType ($ _ plugin_id) as $ eqLogic) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic));
      preg_match_all ("/#([0-9]*)#/ ", $ eqLogic_json, $ matches);
      foreach ($ matches [1] as $ cmd_id) {
        if (is_numeric ($ cmd_id)) {
          yew (!cmd::byId (str_replace ('#', '', $ cmd_id))) {
            $return[] = array(
              '<html>detail '=>'?v = d & m = '. $ eqLogic-> getEqType_name ().' & p = '. $ eqLogic-> getEqType_name ().' & id = '. $ eqLogic-> getId ().' "> '. $ eqLogic-> getHumanName (). ' </a>',
              'help '=> __ (' Action ', __FILE__),
              'who' => '#' . $cmd_id . '#'
            );
          }
        }
      }
    }
    return $ return;
  }
  ~~~

  You can therefore integrate the same type of return in your plugins, function `deadCmd ()`.

</details>

#### Table display support in a plugin

From version 4.2 of the Core, a display in table mode is proposed on the pages *Objects* *Scenarios* *Interactions* *Widgets* and *Plugins*.

This function relies entirely on CSS and does not require any modification of the DOM elements, apart from adding the button to the right of the search to switch between table and normal mode.

On most plugins, the Core will be able to manage this functionality. However, it has not been integrated by default because several plugins do not use *displayCard* standard, and the Core cannot then manage the display, depending on the plugin.

This must therefore be tested and integrated for each plugin. Several possible cases :

  - You do not integrate the button : Your plugin will not offer this mode.
  - You integrate the button, and the display is well managed : Nothing more to do.
  - You integrate the button, but the display is not well managed : Get inspired by the CSS of Core 4.2 to make your own CSS.

In any case, the table mode toggle button is integrated with the CSS class `hidden` and is therefore hidden. It will therefore not be visible on pre-4 Core.2 do not have this option.


##### Add the button to the right of the search field :

Just add this button to the right of the search box on your page `myplugin / desktop / php / myplugin.php :

``<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="1" data-state="0"><i class="fas fa-grip-lines"></i></a> ``

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

Test the display on a Core v4.2. If all is well, it's over !

##### If non-standard display of eqlogics :

Setting *data-coreSupport* to 0 :

``<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="0" data-state="0"><i class="fas fa-grip-lines"></i></a> ``

- Manage your own css class, other than ".displayAsTable". Place the css file in `myplugin / desktop / css / myplugin.css` then import it from desktop / php like this :

  `include_file ('desktop', 'myplugin', 'css', 'myplugin');`

- Manage the button event :

<details>

  <summary markdown="span">Example d'event js</summary>

  ~~~ js
  {% raw %}
  $('#bt_pluginDisplayAsTable').off('click').on('click', function () {
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      if ($ (this).data ('state') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie ('jeedom_displayAsTable', 'true', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } else {
        $(this).data('state', '0').removeClass('active')
        setCookie ('jeedom_displayAsTable', 'false', 2)
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
  // displayAsTable if plugin support it:
  if ($ ('# bt_pluginDisplayAsTable').length) {
    $('#bt_pluginDisplayAsTable').removeClass('hidden') //Not shown on previous core versions
    if (getCookie ('jeedom_displayAsTable') == 'true' || jeedom.theme.theme_displayAsTable == 1) {
      $('#bt_pluginDisplayAsTable').data('state', '1').addClass('active')
      if ($ ('# bt_pluginDisplayAsTable [data-coreSupport = "1"]').length) {
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      }
    }
    // core event:
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      if ($ (this).data ('state') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie ('jeedom_displayAsTable', 'true', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } else {
        $(this).data('state', '0').removeClass('active')
        setCookie ('jeedom_displayAsTable', 'false', 2)
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

- Desktop / css / desktop.main file.css` section `/* __________________displayAsTable */ ``

##### Display other elements in table view

If you want an item from the *displayCard* appears on the right, add the CSS class `displayTableRight`. If you need to place several elements there, put them all in one ` <span class="displayTableRight">...</span> `

The table mode displaying each element on a line, there is the place on the right to add information, see buttons.

You can thus have on each *displayCard* elements that will not be displayed in normal mode, and on the right in table mode.

<details>

  <summary markdown="span">Par exemple :</summary>

  ~~~ php
  {% raw %}
  <div class="eqLogicThumbnailContainer">
    <?php
      foreach ($ eqLogics as $ eqLogic) {
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

Here (plugin *jeeLog*) cron and log parameters will be hidden in normal mode but visible on the right in table mode. You can also take inspiration from the pages of Core v4.2, in particular that of the scenarios which displays the button to open the logs.

Don't forget the `hidden` class (not present on Core pages) so that this element is not displayed in normal mode on pre-4.2 Core.


#### Displaying Widget Help

Since v4.2, the optional parameters available on the Core Widgets are displayed for each widget, whether in the command configuration or from the Edit mode of the Dashboard.

In the code of **Dashboard Widget**, a `template` tag is inserted between the last internal` div` and the `script` tag. The Core removes this tag when the Widget is displayed so as not to weigh down the page. However, on pre-4 Core.2, the `template` tag is not displayed by browsers. Conversely, this `template` tag is retrieved by the Core to display the help in the configuration windows.

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

All cursor type Widgets use since v4.2 a new lib [noUiSlider](https://refreshless.com/nouislider/). More flexible in its use and initiation, it also allows us to use an identical code on desktop and mobile. It is also compatible *Touch* on smartphones !

If your third party plugins / widgets use sliders, it is better to migrate to this new lib.

> Warning : The pre-4 Core.2 do not have the lib nouislider !

You can test the existence of the lib like this :

`` ``js
if (typeof noUiSlider !== 'undefined') {
  console.log ('noUiSlider code here')
} else {
  console.log ('old code here')
}
`` ``

#### Translation of third-party widgets

If you make and share third-party Widgets (code), Core v4.2 now supports their internationalization.

For this, each widget must be accompanied by its json file containing its translations.

widget path : `data \ customTemplates \ dashboard \ cmd.info.string.myCustomWidget.html`
translation path : `data \ customTemplates \ i18n \ cmd.info.string.myCustomWidget.json`

> The mobile version of the Widget will take the translation in the same place.

Example :

`` ``html
<div class="content-xs">
    <span class="cmdName #hide_name#">#name_display#</span> <strong class="state"></strong>
    {{I am a third party widget}}
  </div>
  <template>
    <div>param : {{My third-party setting}}.</div>
  </template>
  <script>
`` ``

`` ``json
  {
    "en_US": {
      "I am a third party widget": "I am a custom widget",
      "My third-party setting": "My custom parameter description"
    },
    "es_ES": {
      "I am a third party widget": "Be a terceros widget",
      "My third-party setting": "Mi configuración de terceros"
    },
    "de_DE": {
      "I am a third party widget": "Ich bin ein Widget eines Drittanbieters",
      "My third-party setting": "Meine Einstellung von Drittanbietern"
    }
  }
`` ``

> The texts `Value date`,` Collection date` and all those found in Core widgets do not need to be in json. If you don't have other texts in your widget, then the json is not needed, and these strings will be translated.