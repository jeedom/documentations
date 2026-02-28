## Core v4.2 | Plugin developers


### Obsolete

- Method `initCheckBox()` (utils.js)).
- Method of class `cmd` : `setEventOnly()`.

### Deprecated

These modifications are still supported in v4.2 and will move on to **Obsolete** in a future version.

- The `eqLogic` method::`byTypeAndSearhConfiguration()` has been renamed correctly : `eqLogic::byTypeAndSearchConfiguration()`.
- The js method `jeedom.eqLogic`.`builSelectCmd` has been renamed correctly : `jeedom.eqLogic.buildSelectCmd`.

*These two methods were also integrated into v4.1 to accelerate their adoption.*

- Removing the JWERTY library in favor of vanillaJS (keyboard shortcut management)).
- The use of `showAlert` changes : `$('#div_alert').showAlert({` becomes `$.fn.showAlert({`. No change for calls from a modal. Not supported on Core versions prior to 4.2.

- PHP method `displayException` : `displayException` (utils.inc)
- PHP method `convertDayEnToFr` : `convertDayFromEn` (utils.inc)


### Optional modifications

#### Background tile graphic

V4.Option 2 allows you to define, on an eqLogic, an info command whose history will be displayed in the tile background.

For this to work, your plugin must allow it in plugins/myplugin/core/class/myplugin.class.php:

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


#### Orphaned commands

In v4.2, on page **Analysis → Equipment**, In the Orphaned Commands tab, the eqLogic function `deadCmdGeneric()` now returns a link to the relevant scenario or device.

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
              'detail' => '?v=d&m='.$eqLogic->getEqType_name().'&p='.$eqLogic->getEqType_name().'&id='.$eqLogic->getId().'">'.$eqLogic->getHumanName().'>',
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

  You can therefore integrate the same type of return value into your plugins, using the `deadCmd()` function.

</details>

#### Support for table display in a plugin

Since version 4.2 of the Core, a table view display is offered on the pages *Objects* *Scenarios* *Interactions* *Widgets* And *Plugins*.

This function relies entirely on CSS and does not require any modification of DOM elements, apart from adding the button to the right of the search bar to switch between table and normal mode.

For most plugins, the Core will be able to handle this functionality. However, it was not integrated by default because several plugins do not use *displayCard* standard, and the Core cannot then handle the display, depending on the plugin.

This therefore needs to be tested and integrated for each plugin. Several possible scenarios :

  - You are not integrating the button : Your plugin will not offer this mode.
  - You integrate the button, and the display is handled correctly : Nothing more to do.
  - You integrate the button, but the display isn't handled correctly : Take inspiration from the Core 4 CSS.2. To create your own CSS.

In all cases, the table mode toggle button is integrated with the CSS class `hidden` and is therefore hidden. Therefore, it will not be visible on pre-4 Core processors.2 not having this option.


##### Add the button to the right of the search field :

Simply add this button to the right of the search field on your `myplugin/desktop/php/myplugin` page.php` :

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

- Manage your own CSS class, other than ".displayAsTable". Place the CSS file in `myplugin/desktop/css/myplugin`.Then import the CSS file from desktop/php like this :

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

##### For reference, the plugin's JS file.template :

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

You can also draw inspiration from the Core's CSS :

- File `desktop/css/desktop.main.* __________________displayAsTable *

##### 

 *displayCard* . 

.

 *displayCard* .

<details>

  <summary markdown="span">Par exemple :</summary>

  ~~~ php
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
  ~~~

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

#### 

. [](https://refreshless.com/nouislider/). .  **  !

.

> Attention : . **** !

 :

```js
 !== 'undefined') {
  ')
} else {
  ')
}
```

#### 

..

.

 : 
 : 

> .

Example :

```html
<div class="content-xs">
    <span class="cmdName #hide_name#">#name_display#</span> <strong class="state"></strong>
    {{}}
  </div>
  <template>
    <div>param : {{}}.</div>
  </template>
  <script>
```

```json
  {
    "": {
      "": "",
      "": ""
    },
    "": {
      "": "",
      "": ""
    },
    "": {
      "": "",
      "": ""
    }
  }
```

> . .


#### 

.. .

.

. . .).

:

```php

{
    /*     * ************************************************** */
    public static $_widgetPossibility = array('custom' => true);

    ()
    {
        $generics = array(
            '
                '),
                '
                ' ' ...
                '',
                '')
            ),
            '(
                '),
                '
                '),
                '',
                '')
            )
        );
        
    }

```

 :

- .
- .

>  :  [](https://github.com/jeedom/core/blob/alpha/core/config/jeedom.config.php), .