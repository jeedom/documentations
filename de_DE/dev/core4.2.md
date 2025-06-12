## Core v4.2 | Plugin-Entwickler


### Obsolete

- `initCheckBox()`-Methode (utils.js).
- Klassenmethode „cmd“ : `setEventOnly()`.

### Deprecated

Diese Änderungen werden in Version 4 weiterhin unterstützt.2 und wird in **Veraltet** in einer zukünftigen Version.

- Die `eqLogic`-Methode::byTypeAndSearhConfiguration()` wurde korrekt umbenannt : `eqLogic::byTypeAndSearchConfiguration()`.
- Die js-Methode `jeedom.eqLogic`.buildSelectCmd` wurde korrekt umbenannt : `jeedom.eqLogic.buildSelectCmd`.

*Diese beiden Methoden wurden auch in v4 integriert.1 um ihre Einführung zu beschleunigen.*

- Entfernung der Jwerty-Bibliothek für VanillaJS (Verwaltung von Tastaturkürzeln)).
- Die Verwendung von „showAlert“ ändert sich : `$('#div_alert').showAlert({` wird zu `$.fn.showAlert({`. Keine Änderung beim Aufruf aus einem Modal. Wird auf Core vor 4.2 nicht unterstützt.

- PHP-Methode `displayException` : )
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
```


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
          Wenn (!cmd::))) {
            $return[] = array(
              '?>',
              '),
              'who' => '#' . $cmd_id . '#'
            )
          }
        }
      }
    }
    zurückgeben $return;
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

  <summary markdown="span">Beispiel d'event js</summary>

  
  {% raw %}
  $('#bt_pluginDisplayAsTable').off('click').on('click', function () {
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      ).") {
        $(this).data('state', '1').addClass('active')
        )
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } anders {
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
    if (getCookie('jeedom_displayAsTable') == 'true' || jeedom.thema.) {
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
      } anders {
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

- .CSS-Abschnitt `/*  */`

##### Andere Elemente in der Tabellenansicht anzeigen

Wenn Sie einen Artikel aus der ** rechts erscheint, fügen Sie die CSS-Klasse „displayTableRight“ hinzu. Wenn Sie mehrere Elemente darin platzieren müssen, platzieren Sie sie alle in einem ` <span class="displayTableRight">...</span> `

Im Tabellenmodus wird jedes Element in einer Zeile angezeigt. Auf der rechten Seite ist Platz zum Hinzufügen von Informationen, siehe Schaltflächen.

Sie können somit auf jedem ** Elemente, die im Normalmodus nicht angezeigt werden, und rechts im Tabellenmodus.

<details>

  <summary markdown="span">Par exemple :</summary>

  
  {% raw %}
  <div class="eqLogicThumbnailContainer">
    <?php
      foreach ($eqLogics als $eqLogic) {
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

Hier (Plugin *jeeLog*) Cron- und Log-Einstellungen werden im Normalmodus ausgeblendet, sind im Tabellenmodus jedoch rechts sichtbar. Sie können sich auch von den Core v4-Seiten inspirieren lassen.2, insbesondere die für Szenarien, die die Schaltfläche zum Öffnen der Protokolle anzeigt.

Vergessen Sie nicht die Klasse „hidden“ (nicht auf Core-Seiten vorhanden), damit dieses Element auf Cores vor 4.2 nicht im Normalmodus angezeigt wird.


#### Hilfe für ein Widget anzeigen

Seit v4.2. Die optionalen Parameter der Core Widgets werden für jedes Widget angezeigt, egal ob in der Befehlskonfiguration oder im Dashboard-Bearbeitungsmodus.

Im Code der **Dashboard-Widget**, Ein `template`-Tag wird zwischen dem letzten inneren `div`-Tag und dem `script`-Tag eingefügt. Der Core entfernt dieses Tag beim Anzeigen des Widgets, um die Seite nicht schwerer zu machen. Auf Prozessoren vor 4 Core.2. Das Tag „Vorlage“ wird von Browsern nicht angezeigt. Umgekehrt wird dieses `template`-Tag vom Core abgerufen, um Hilfe in den Konfigurationsfenstern anzuzeigen.

- Wenn ein `template`-Tag vorhanden und nicht leer ist, zeigt der Core seinen Inhalt an.
- Wenn ein `template`-Tag vorhanden, aber leer ist, zeigt der Core *`Keine optionalen Parameter verfügbar`*.
- Wenn kein `template`-Tag vorhanden ist, zeigt der Core *`Keine Beschreibung für dieses Widget gefunden`*.

<details>

  <summary markdown="span">Beispiel de code de Widg avec template</summary>

  
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

#### Slider-Widgets

Alle Slider-Widgets seit v4.2 eine neue Bibliothek [noUiSlider](https://refreshless.com/nouislider/). Es ist flexibler in der Verwendung und Initialisierung und ermöglicht uns außerdem die Verwendung identischen Codes auf Desktop- und Mobilgeräten. Es ist auch kompatibel *Berühren* auf Smartphones !

Wenn Ihre Drittanbieter-Plugins/Widgets Slider verwenden, ist es am besten, auf diese neue Bibliothek zu migrieren.

> Aufmerksamkeit : Vor 4 Kernen.2 haben nicht die Bibliothek **nouislider** !

Sie können die Existenz der Bibliothek wie folgt testen :

```js
wenn (Typ von noUiSlider !== 'undefined') {
  console.log('noUiSlider-Code hier')
} anders {
  console.log('alter Code hier')
}
```

#### Übersetzung von Widgets von Drittanbietern

Wenn Sie Widgets (Code) von Drittanbietern erstellen und teilen, Core v4.2 unterstützt nun ihre Internationalisierung.

Dazu muss jedes Widget von seiner JSON-Datei begleitet werden, die seine Übersetzungen enthält.

Widgetpfad : `data\customTemplates\dashboard\cmd.info.string.myCustomWidget.html`
Übersetzungspfad : `data\customTemplates\i18n\cmd.info.string.myCustomWidget.json`

> Die mobile Version des Widgets übernimmt die Übersetzung vom selben Ort.

Beispiel :

```html
<div class="content-xs">
    <span class="cmdName #hide_name#">#name_display#</span> <strong class="state"></strong>
    {{Ich bin ein Drittanbieter-Widget}}
  </div>
  <template>
    <div>param : {{Meine Drittanbieter-Einstellungen}}.</div>
  </template>
  <script>
```

```json
  {
    "de_US": {
      "Ich bin ein Drittanbieter-Widget": "Ich bin ein benutzerdefiniertes Widget",
      "Meine Drittanbieter-Einstellungen": "Meine benutzerdefinierte Parameterbeschreibung"
    },
    "es_ES": {
      "Ich bin ein Drittanbieter-Widget": "Ich bin ein Terceros-Widget",
      "Meine Drittanbieter-Einstellungen": "Meine Dreierkonfiguration"
    },
    "de_DE": {
      "Ich bin ein Drittanbieter-Widget": "Ich bin ein Widget eines Drittanbieters",
      "Meine Drittanbieter-Einstellungen": "Meine Einstellung von Drittanbietern"
    }
  }
```

> Die Texte `Wertstellungsdatum`, `Abholdatum` und alle in den Core-Widgets gefundenen Texte müssen nicht im JSON enthalten sein. Wenn Sie keine anderen Texte in Ihrem Widget haben, wird JSON nicht benötigt und diese Zeichenfolgen werden übersetzt.


#### Integration von Plugin-spezifischen generischen Typen in den Core

Der Core v4.2 hat eine neue Seite, um generische Typen einfacher zu konfigurieren. Es übernimmt natürlich die vom Core definierten generischen Typen, aber einige Plugins definieren ihre eigenen generischen Typen.

Damit diese Plugins von dieser neuen Core-Seite unterstützt werden, erfahren Sie hier, wie Sie sie integrieren.

Beim Öffnen dieser Seite prüft der Core für jedes Plugin, ob es eine `pluginGenericTypes()`-Methode hat. Wenn ja, wird diese Methode aufgerufen und wartet auf die Integration der generischen Typen des Plugins. Diese müssen die Definition der generischen Typen des Kerns einhalten, insbesondere wenn bereits Kategorien vorhanden sind (Socket, Light usw.).).

Beispiel in der Datei `plugins/myplugin/core/php/myplugin.class.php`:

```php
Klasse myPlugin erweitert eqLogic
{
    /*     * ***********************Statische Methode*************************** */
    

    öffentliche statische Funktion pluginGenericTypes()
    {
        $generics = array(
            'MONPLUGIN_TOGGLE' => array( //Großbuchstaben ohne Leerzeichen
                'Name' => __('MeinPlugin-Umschalter',__FILE__),
                'familyid' => 'MeinPlugin', //Kein Platz hier
                'Familie' => __('Plugin MyPlugin',__FILE__), //Beginnen Sie mit 'Plugin ' ...
                'Typ' => 'Aktion',
                'Untertyp' => Array('andere')
            ),
            'MONPLUGIN_LIGHT_BEAM' => Array(
                'Name' => __('Lichtstrahlen (MeinPlugin)',__FILE__),
                'familyid' => 'LIGHT', //Vorhandener Typ, falls vorhanden
                'Familie' => __('Licht',__FILE__),
                'Typ' => 'Info',
                'Subtyp' => Array('binär','numerisch')
            )
        )
        
    }

```

 :

- .
- .

>  :  [](https://github.com/jeedom/core/blob/alpha/core/config/jeedom.config.php), .