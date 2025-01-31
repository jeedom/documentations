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
          if (!cmd::))) {
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
        $div = ''
        $opacity = ($eqLogic->getIsEnable()) ? '' : 'disableCard'
        $div .= '<div class="eqLogicDisplayCard cursor '.$opacity.'" data-eqLogic_id="' . $eqLogic->getId() . '">'
        $div .= '<img src="' . $plugin->getPathImgIcon() . '"/>'
        $div .= '<br>'
        $div .= '<span class="name">' . $eqLogic->getHumanName(true, true) . '</span>'
        $div .= '<span class="hidden hiddenAsCard displayTableRight">'.$eqLogic->getConfiguration('autorefresh').' | '.$eqLogic->getConfiguration('loglasttime').'h</span>'
        $div .= '</div>'
        
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

#### 

. [](https://refreshless.com/nouislider/). .  **  !

.

>  : . **** !

 :

js
 !== 'undefined') {
  ')
}  {
  ')
}


#### 

..

.

 : 
 : 

> .

Example :

html
<div class="content-xs">
    <span class="cmdName #hide_name#">#name_display#</span> <strong class="state"></strong>
    {{}}
  </div>
  <template>
    <div>param : {{}}.</div>
  </template>
  <script>


json
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


> . .


#### 

.. .

.

. . .).

:

php

{
    /*     * ************************************************** */
    

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
        )
        
    }



 :

- .
- .

>  :  [](https://github.com/jeedom/core/blob/alpha/core/config/jeedom.config.php), .