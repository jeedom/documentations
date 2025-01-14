## Kern v4.2 | Plugin-Entwickler


### Obsolete

- Methode „initCheckBox()“ (utils.js).
- Klassenmethode „cmd“ : `setEventOnly()`.

### Deprecated

Diese Änderungen werden in Version 4 weiterhin unterstützt.2 und wird in übergehen **Veraltet** in einer zukünftigen Version.

- Die `eqLogic-Methode::byTypeAndSearhConfiguration()` wurde korrekt umbenannt : `eqLogic::byTypeAndSearchConfiguration()`.
- Die js-Methode „jeedom.eqLogic.buildSelectCmd` wurde korrekt umbenannt : `jeedom.eqLogic.buildSelectCmd`.

*Diese beiden Methoden wurden auch in v4 integriert.1, um ihre Einführung zu beschleunigen.*

- Entfernen der JWERTY-Bibliothek für VanillaJS (Verwaltung von Tastaturkürzeln)).
- Verwendung von „showAlert“-Änderungen : `$('#div_alert').showAlert({` wird zu `$.fn.showAlert({`. Keine Änderung für den Anruf von einem Modal. Wird auf Core vor 4.2 nicht unterstützt.

- PHP-Methode „displayExeption“ : „displayException“ (utils.inc)
- PHP-Methode „convertDayEnToFr“ : „convertDayFromEn“ (utils.inc)


### Optionale Modifikationen

#### Fliesen-Hintergrundgrafik

V4.2 ermöglicht es Ihnen, auf einer eqLogic einen Info-Befehl zu definieren, dessen Verlauf am unteren Rand der Kachel angezeigt wird.

Dazu muss Ihr Plugin dies in der Datei „plugins/myplugin/core/class/myplugin.class.php“ zulassen:

„php
Die Klasse myplugin erweitert eqLogic {
    public static $_widgetPossibility = array('custom' => true);
„

Wenn Ihr Plugin über eine bestimmte Vorlage für seine Ausstattung verfügt, muss die Desktop-Version mit ` aktualisiert werden#divGraphInfo#` zur Anzeige :

„html
{% raw %}
<div class="eqLogic eqLogic-widgUnd allowResize allowReorderCmd #custom_layout# #eqLogic_class# #class#" data-eqType="#eqType#" data-eqLogic_id="#id#" data-eqLogic_uid="#uid#" data-version="#version#" data-translate-category="#translate_category#" data-category="#category#" data-tags="#tags#" style="width: #width#;height: #height#;#style#">
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
„


#### Verwaiste Befehle

In v4.2, auf der Seite **Analyse → Ausrüstung**, Auf der Registerkarte „Verwaiste Befehle“ gibt die eqLogic-Funktion „deadCmdGeneric()“ jetzt einen Link zum betreffenden Szenario oder Gerät zurück.

Als Referenz die neue Core-Funktion:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  ~~~ php
  {% raw %}
  öffentliche statische Funktion deadCmdGeneric($_plugin_id) {
    $return = array();
    foreach (eqLogic::byType($_plugin_id) als $eqLogic) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic));
      preg_match_all("/#([0-9]*)#/", $eqLogic_json, $matches);
      foreach ($matches[1] als $cmd_id) {
        if (is_numeric($cmd_id)) {
          Wenn (!cmd::byId(str_replace('#', '', $cmd_id))) {
            $return[] = array(
              'Detail' => '?v=d&m='.$eqLogic->getEqType_name().'&p='.$eqLogic->getEqType_name().'&id='.$eqLogic->getId().'">'.$eqLogic->getHumanName ().'>',
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

  Sie können daher den gleichen Rückgabetyp in Ihre Plugins integrieren, die Funktion „deadCmd()“.

</details>

#### Unterstützung für Tabellendarstellung in einem Plugin

Seit Version 4.2 des Cores wird auf den Seiten eine tabellarische Darstellung angeboten *Objekte* *Szenarien* *Interaktionen* *Widgets* Und *Plugins*.

Diese Funktion basiert vollständig auf CSS und erfordert keine Änderung der DOM-Elemente, abgesehen vom Hinzufügen der Schaltfläche rechts neben der Suche, um zwischen Tabellen- und Normalmodus zu wechseln.

Bei den meisten Plugins kann der Core diese Funktionalität verwalten. Es wurde jedoch nicht standardmäßig integriert, da mehrere Plugins nicht verwendet werden *Anzeigekarte* Standard, und der Core kann dann je nach Plugin die Anzeige nicht verwalten.

Dies muss daher für jedes Plugin getestet und integriert werden. Mehrere mögliche Fälle :

  - Sie integrieren den Button nicht : Ihr Plugin bietet diesen Modus nicht an.
  - Sie integrieren die Schaltfläche und die Anzeige ist gut verwaltet : Nichts mehr zu tun.
  - Sie integrieren die Schaltfläche, aber die Anzeige ist nicht gut gelungen : Lassen Sie sich von Core 4 CSS inspirieren.2, um Ihr eigenes CSS zu erstellen.

In allen Fällen ist die Schaltfläche zum Umschalten des Tabellenmodus in die CSS-Klasse „versteckt“ integriert und daher ausgeblendet. Es wird daher auf Kernen vor 4 nicht sichtbar sein.2 diese Option nicht haben.


##### Fügen Sie die Schaltfläche rechts neben dem Suchfeld hinzu :

Fügen Sie einfach diese Schaltfläche rechts neben dem Suchfeld auf Ihrer Seite „myplugin/desktop/php/myplugin“ hinzu.php` :

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

Testen Sie die Anzeige auf einem Core v4.2. Wenn alles gut ist, ist es vorbei !

##### Bei nicht standardmäßiger Anzeige von eqlogics :

Einstellung *data-coreSupport* auf 0 :

`<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="0" data-state="0"><i class="fas fa-grip-lines"></i></a> `

- Verwalten Sie Ihre eigene CSS-Klasse außer „.displayAsTable“". Platzieren Sie die CSS-Datei in „myplugin/desktop/css/myplugin.css` und importieren Sie es dann wie folgt vom Desktop/PHP :

  `include_file('desktop', 'myplugin', 'css', 'myplugin');`

- Behandeln Sie das Schaltflächenereignis :

<details>

  <summary markdown="span">Beispiel d'event js</summary>

  ~~~js
  {% raw %}
  $('#bt_pluginDisplayAsTable').off('click').on('click', function () {
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      if ($(dies).data('state') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie('jeedom_displayAsTable', 'true', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } anders {
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

##### Als Referenz: das Plugin js.Vorlage :

<details>

  <summary markdown="span">plugin.Vorlage js</summary>

  ~~~js
  {% raw %}
  //displayAsTable, wenn das Plugin es unterstützt:
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
    //Kernereignis:
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      if ($(dies).data('state') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie('jeedom_displayAsTable', 'true', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } anders {
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

Sie können sich auch von Core CSS inspirieren lassen :

- Datei „desktop/css/desktop.main“.css`section`/* __________________displayAsTable */`

##### Andere Elemente in der Tabellenansicht anzeigen

Wenn Sie einen Artikel in der *Anzeigekarte* rechts erscheint, fügen Sie die CSS-Klasse „displayTableRight“ hinzu. Wenn Sie dort mehrere Elemente platzieren müssen, platzieren Sie sie alle in einem einzigen „ <span class="displayTableRight">...</span> “

Im Tabellenmodus wird jedes Element in einer Zeile angezeigt. Auf der rechten Seite ist Platz zum Hinzufügen von Informationen, siehe Schaltflächen.

Sie können also auf jedem haben *Anzeigekarte* Elemente, die im Normalmodus nicht angezeigt werden, und rechts im Tabellenmodus.

<details>

  <summary markdown="span">Par exemple :</summary>

  ~~~ php
  {% raw %}
  <div class="eqLogicThumbnailContainer">
    <?php
      foreach ($eqLogics als $eqLogic) {
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

Hier (Plugin *jeeLog*) Die Cron- und Log-Parameter werden im normalen Modus ausgeblendet, sind aber im Tabellenmodus rechts sichtbar. Sie können sich auch von den Core v4-Seiten inspirieren lassen.2, insbesondere das der Szenarien, in dem die Schaltfläche zum Öffnen der Protokolle angezeigt wird.

Vergessen Sie nicht die Klasse „versteckt“ (auf Core-Seiten nicht vorhanden), damit dieses Element auf Cores vor 4.2 nicht im normalen Modus angezeigt wird.


#### Hilfe von einem Widget anzeigen

Seit v4.2 werden die optionalen Parameter, die auf den Kern-Widgets verfügbar sind, für jedes Widget angezeigt, sei es in der Steuerungskonfiguration oder im Bearbeitungsmodus des Dashboards.

Im Code von **Dashboard-Widget**, Zwischen dem letzten internen „div“ und dem „script“-Tag wird ein „template“-Tag eingefügt. Der Core entfernt dieses Tag bei der Anzeige des Widgets, um die Seite nicht schwerer zu machen. Allerdings auf älteren Versionen als 4 Core.2, das Tag „template“ wird von Browsern nicht angezeigt. Umgekehrt wird dieses „Vorlage“-Tag vom Core abgerufen, um Hilfe in den Konfigurationsfenstern anzuzeigen.

- Wenn ein „template“-Tag vorhanden und nicht leer ist, zeigt der Core seinen Inhalt an.
- Wenn ein „template“-Tag vorhanden, aber leer ist, wird der Core angezeigt *„Keine optionalen Parameter verfügbar“*.
- Wenn kein „template“-Tag vorhanden ist, wird der Core angezeigt *„Keine Beschreibung für dieses Widget gefunden“*.

<details>

  <summary markdown="span">Beispiel de code de WidgUnd avec template</summary>

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

#### Slider-Widgets

Alle Slider-Widgets werden seit Version 4 verwendet.2 eine neue lib [noUiSlider](https://refreshless.com/nouislider/). Es ist flexibler in der Verwendung und Initialisierung und ermöglicht uns auch die Verwendung identischer Codes auf Desktops und Mobilgeräten. Es ist auch kompatibel *Berühren* auf Smartphones !

Wenn Ihre Plugins/Widgets von Drittanbietern Schieberegler verwenden, ist es besser, auf diese neue Bibliothek zu migrieren.

> Aufmerksamkeit : Kern vor 4.2 habe nicht die lib **nouislider** !

So können Sie die Existenz der Bibliothek testen :

„js
if (typeof noUiSlider !== 'undefined') {
  console.log('noUiSlider-Code hier')
} anders {
  console.log('alter Code hier')
}
„

#### Übersetzung von Widgets von Drittanbietern

Wenn Sie Widgets (Code) von Drittanbietern erstellen und teilen, ist Core v4.2 unterstützt nun deren Internationalisierung.

Dazu muss jedem Widget eine JSON-Datei mit den Übersetzungen beiliegen.

Widget-Pfad : `data\customTemplates\dashboard\cmd.info.string.myCustomWidget.html`
Übersetzungspfad : `data\customTemplates\i18n\cmd.info.string.myCustomWidget.json`

> Die mobile Version des Widgets übernimmt die Übersetzung an derselben Stelle.

Beispiel :

„html
<div class="content-xs">
    <span class="cmdName #hide_name#">#name_display#</span> <strong class="state"></strong>
    {{Ich bin ein Drittanbieter-Widget}}
  </div>
  <template>
    <div>param : {{Meine Drittanbieter-Einstellung}}.</div>
  </template>
  <script>
„

„json
  {
    "en_US": {
      "Ich bin ein Drittanbieter-Widget": "Ich bin ein benutzerdefiniertes Widget",
      "Meine Drittanbieter-Einstellung": "Meine benutzerdefinierte Parameterbeschreibung"
    },
    "es_ES": {
      "Ich bin ein Drittanbieter-Widget": "Seien Sie ein Terceros-Widget",
      "Meine Drittanbieter-Einstellung": "Meine Konfiguration von Terceros"
    },
    "de_DE": {
      "Ich bin ein Drittanbieter-Widget": "Ich bin ein Widget eines Drittanbieters",
      "Meine Drittanbieter-Einstellung": "Meine Einstellung von Drittanbietern"
    }
  }
„

> Die Texte „Value date“, „Collection date“ und alle Texte, die in Core-Widgets zu finden sind, müssen nicht im JSON enthalten sein. Wenn Ihr Widget keine anderen Texte enthält, ist JSON nicht erforderlich und diese Zeichenfolgen werden übersetzt.


#### Integration in den Kern der generischen Typen, die für ein Plugin spezifisch sind

Kern v4.2 verfügt über eine neue Seite, auf der Sie generische Typen einfacher konfigurieren können. Es verwendet natürlich die vom Core definierten generischen Typen, aber bestimmte Plugins definieren ihre eigenen generischen Typen.

Damit diese Plugins von dieser neuen Core-Seite unterstützt werden, erfahren Sie hier, wie Sie sie integrieren.

Beim Öffnen dieser Seite prüft der Core für jedes Plugin, ob es über eine „pluginGenericTypes()“-Methode verfügt. Ist dies der Fall, wird diese Methode aufgerufen und wartet auf die Generic Types des Plugins, um diese zu integrieren. Diese müssen die Definition der generischen Typen des Kerns respektieren, insbesondere wenn bereits Kategorien vorhanden sind (Socket, Light usw.).).

Beispiel in der Datei „plugins/monplugin/core/php/monplugin.class.php“:

„php
Die Klasse myPlugin erweitert eqLogic
{
    /*     * ***********************Statische Methode*************************** */
    public static $_widgetPossibility = array('custom' => true);

    öffentliche statische Funktion PluginGenericTypes()
    {
        $generics = array(
            'MONPLUGIN_TOGGLE' => array( //Großschreibung ohne Leerzeichen
                'name' => __('MyPlugin Toggle',__FILE__),
                'Familyid' => 'MyPlugin', //Kein Leerzeichen hier
                'Family' => __('Plugin MyPlugin',__FILE__), //Beginnen Sie mit 'Plugin ' ...
                'type' => 'Aktion',
                'subtype' => array('other')
            ),
            'MONPLUGIN_LIGHT_BEAM' => Array(
                'name' => __('Light Rays (MyPlugin)',__FILE__),
                'Familyid' => 'LIGHT', //Vorhandener Typ, falls vorhanden
                'Familie' => __('Licht',__FILE__),
                'Typ' => 'Info',
                'subtype' => array('binary','numeric')
            )
        );
        return $generics;
    }

„

Hier „injiziert“ das „monPlugin“-Plugin zwei generische Typen :

- Ein generischer Typ MONPLUGIN_TOGGLE vom Typ „MonPlugin“, Kategorie, die im Core nicht vorhanden ist.
- Ein generischer Typ MONPLUGIN_LIGHT_BEAM in der vorhandenen Kategorie „Licht“.

> Referenz : Generische Kerntypen werden im definiert [config-Datei](https://github.com/jeedom/core/blob/alpha/core/config/jeedom.config.php), Array $JEEDOM_INTERNAL_CONFIG, generic_type.