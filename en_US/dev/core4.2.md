## .2 | 


### Obsolete

- ).
-  : .

### Deprecated

. **** .

- :: : `eqLogic::byTypeAndSearchConfiguration()`.
- . : .

*..*

- ).
-  : ').. . .

-  : )
-  : )


### 

#### 

..

:

php
 {
    


#divGraphInfo# :

html
{% raw %}
<div class="eqLogic eqLogic-widg allowResize allowReorderCmd #custom_layout# #eqLogic_class# #class#" data-eqType="#eqType#" data-eqLogic_id="#id#" data-eqLogic_uid="#uid#" data-version="#version#" data-translate-category="#translate_category#" data-category="#category#" data-tags="#tags#" style="width: #width#height: #height##style#">
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



#### 

. ****, .

:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  
  {% raw %}
  ) {
    $return = array()
    ::) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic))
      #([0-9]*)#
      ) {
        )) {
           (!cmd::))) {
            $return[] = array(
              '?>',
              '),
              'who' => '#' . $cmd_id . '#'
            )
          }
        }
      }
    }
    
  }
  {% endraw %}
  

  .

</details>

#### 

. ** ** ** **  **.

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
  <div class="input-group" style="margin-bottom:5px">
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
      }  {
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
      }  {
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

- .css` section `/*  */`

##### Show other items in table view

If you would like an item from the ** appears on the right, add the CSS class `displayTableRight`. If you need to place multiple items in it, place them all in one ` <span class="displayTableRight">...</span> `

Table mode displays each item on a line, there is space on the right to add information, see buttons.

You can thus have on each ** elements that will not be displayed in normal mode, and on the right in table mode.

<details>

  <summary markdown="span">Par exemple :</summary>

  
  {% raw %}
  <div class="eqLogicThumbnailContainer">
    <?php
      foreach ($eqLogics as $eqLogic) {
        $div = ''
        $opacity = ($eqLogic->getIsEnable()) ? '' : 'disableCard'
        $div .= '<div class="eqLogicDisplayCard cursor '.$opacity.'" data-eqLogic_id="' . $eqLogic->getId() . '">'
        $div .= '<img src="' . $plugin->getPathImgIcon() . '"/>'
        $div .= '<br>'
        $div .= '<span class="name">' . $eqLogic->getHumanName(true, true) . '</span>'
        $div .= '<span class="hidden hiddenAsCard displayTableRight">'.$eqLogic->getConfiguration('autorefresh').' | '.$eqLogic->getConfiguration('loglasttime').'h</span>'
        $div .= '</div>'
        echo $div;
      }
    ?>
  </div>
  {% endraw %}
  

</details>

Here (plugin *jeeLog*) cron and log settings will be hidden in normal mode but visible on the right in table mode. You can also take inspiration from the Core v4 pages.2, in particular the one for scenarios which displays the button to open the logs.

Don't forget the `hidden` class (not present on Core pages) so that this element is not displayed in normal mode on pre-4.2 Cores.


#### Displaying Help for a Widget

Since v4.2, the optional parameters available on the Core Widgets are displayed for each widget, whether in the command configuration or from the Dashboard Edit mode.

In the code of the **Dashboard Widget**, a `template` tag is inserted between the last inner `div` and the `script` tag. The Core removes this tag when displaying the Widget so as not to make the page heavier. However, on pre-4 Core.2, the `template` tag is not displayed by browsers. Conversely, this `template` tag is retrieved by the Core to display help in the configuration windows.

- If a `template` tag is present and not empty, the Core displays its contents.
- If a `template` tag is present, but empty, the Core displays *`No optional parameters available`*.
- If no `template` tag is present, the Core displays *`No description found for this Widget`*.

<details>

  <summary markdown="span">Example de code de Widg avec template</summary>

  
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

#### Slider Widgets

All slider type widgets use since v4.2 a new lib [noUiSlider](https://refreshless.com/nouislider/). More flexible in its use and initialization, it also allows us to use identical code on desktop and mobile. It is also compatible *Touch* on smartphones !

If your third-party plugins/widgets use sliders, it is best to migrate to this new lib.

> Attention : Pre-4 Cores.2 do not have the lib **nouislider** !

You can test the existence of the lib like this :

js
if (typeof noUiSlider !== 'undefined') {
  console.log('noUiSlider code here')
}  {
  console.log('old code here')
}


#### Translation of Third-Party Widgets

If you make and share third-party Widgets (code), Core v4.2 now supports their internationalization.

To do this, each widget must be accompanied by its json file containing its translations.

widget path : `data\customTemplates\dashboard\cmd.info.string.myCustomWidget.html`
translation path : `data\customTemplates\i18n\cmd.info.string.myCustomWidget.json`

> The mobile version of the Widget will take the translation from the same place.

Example :

html
<div class="content-xs">
    <span class="cmdName #hide_name#">#name_display#</span> <strong class="state"></strong>
    {{I am a third party widget}}
  </div>
  <template>
    <div>param : {{My third-party setting}}.</div>
  </template>
  <script>


json
  {
    "en_US": {
      "I am a third party widget": "I am a custom widget",
      "My third-party setting": "My custom parameter description"
    },
    "es_ES": {
      "I am a third party widget": "I'm a terceros widget",
      "My third-party setting": "My configuration of threes"
    },
    "de_DE": {
      "I am a third party widget": "Ich bin ein Widget eines Drittanbieters",
      "My third-party setting": "Meine Einstellung von Drittanbietern"
    }
  }


> The texts `Value Date`, `Collection Date` and all those found in Core widgets do not need to be in the json. If you don't have any other texts in your widget, then json is not needed, and those strings will be translated.


#### Integration of plugin-specific Generic Types into the Core

The Core v4.2 has a new page to configure Generic Types more easily. It of course takes over the Generic Types defined by the Core, but some plugins define their own Generic Types.

In order for these plugins to be supported by this new Core page, here is how to integrate them.

When opening this page, the Core checks, for each plugin, if it has a `pluginGenericTypes()` method. If so, this method is then called, waiting for the plugin's Generic Types to be integrated. These must respect the definition of Generic Types of the Core, in particular if categories already exist (Socket, Light, etc.).

Example, in the file `plugins/myplugin/core/php/myplugin.class.php`:

php
class myPlugin extends eqLogic
{
    /*     * ***********************Static method*************************** */
    

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
        )
        
    }



 :

- .
- .

>  :  [](https://github.com/jeedom/core/blob/alpha/core/config/jeedom.config.php), .