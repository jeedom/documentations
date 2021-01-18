## Core v4.2 | Plugin-Entwickler

### Deprecated

- Aufhebung der JWERTY-Freiheit für VanillaJS (Verwaltung von Tastaturkürzeln)). Wird in Version 4 beibehalten.2 für Plugins, die es wahrscheinlich verwenden, wird es in Version 4.3 entfernt.

### In Prüfung / Entwicklung

#### Log Färbung und Übersetzung

- `\ core \ configjeedom.config.php : $JEEDOM_SCLOG_TEXT reprend les valeurs colorées pour la traduction. Suchen Sie nach fehlenden Protokollrückgaben und integrieren Sie diese gegebenenfalls.
- Wird in der PHP-Klasse `cmd`` Szenario`` SzenarioElement`` SzenarioExpression` `SzenarioSubElement` verwendet
- Wird in Ajax-Szenarien- und Protokollaufrufen verwendet

#### Dokumentation zur Anpassung an neue Optionen / Funktionen

### Optionale Änderungen

#### Verwaiste Befehle

  In v4.2, auf der Seite **Analyse → Ausrüstung**, Auf der Registerkarte "Verwaiste Befehle" gibt die Funktion "deadCmdGeneric ()" von eqLogic jetzt einen Link zum Szenario oder zum betreffenden Gerät zurück.

  Als Referenz die neue Funktion des Kerns:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  ~~~ php
  öffentliche statische Funktion deadCmdGeneric ($ _ plugin_id) {
    $return = array();;
    foreach (eqLogic::byType ($ _ plugin_id) als $ eqLogic) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic));;
      preg_match_all ("/#([0-9]*)#/ ", $ eqLogic_json, $ match);
      foreach ($ entspricht [1] als $ cmd_id) {
        if (is_numeric ($ cmd_id)) {
          Eibe (!cmd::byId (str_replace ('#', '', $ cmd_id))) {
            $return[] = array(
              '<html>Detail '=>'?v = d & m = '. $ eqLogic-> getEqType_name ().' & p = '. $ eqLogic-> getEqType_name ().' & id = '. $ eqLogic-> getId ().' "> '. $ eqLogic-> getHumanName (). ' </a>',
              'help '=> __ (' Action ', __FILE__),
              'who' => '#' . $cmd_id . '#'
            );;
          }
        }
      }
    }
    return $ return;
  }
  ~~~

  Sie können daher die gleiche Art der Rückgabe in Ihre Plugins integrieren, die Funktion `deadCmd ()`.

</details>

#### Unterstützung für Tabellenanzeigen in einem Plugin

  Ab Version 4.2 des Kerns wird auf den Seiten eine Anzeige im Tabellenmodus vorgeschlagen *Objekte* *Szenarien* *Interaktionen* *Widgets* und *Plugins*.

  Diese Funktion basiert vollständig auf CSS und erfordert keine Änderung der DOM-Elemente, abgesehen vom Hinzufügen der Schaltfläche rechts neben der Suche, um zwischen Array- und Normalmodus zu wechseln.

  Bei den meisten Plugins kann der Core diese Funktionalität verwalten. Es wurde jedoch standardmäßig nicht integriert, da mehrere Plugins nicht verwendet werden *displayCard* Standard, und der Core kann dann die Anzeige je nach Plugin nicht verwalten.

  Dies muss daher für jedes Plugin getestet und integriert werden. Mehrere mögliche Fälle :

    - Sie integrieren die Schaltfläche nicht : Ihr Plugin bietet diesen Modus nicht an.
    - Sie integrieren die Schaltfläche und die Anzeige ist gut verwaltet : Nichts mehr zu tun.
    - Sie integrieren die Schaltfläche, aber die Anzeige ist nicht gut verwaltet : Lassen Sie sich vom CSS von Core 4 inspirieren.2, um Ihr eigenes CSS zu erstellen.

  In jedem Fall ist die Umschalttaste für den Tabellenmodus in die CSS-Klasse "hidden" integriert und daher ausgeblendet. Es wird daher auf Pre-4 Core nicht sichtbar sein.2 haben diese Option nicht.


  ##### Fügen Sie die Schaltfläche rechts neben dem Suchfeld hinzu :

  Fügen Sie einfach diese Schaltfläche rechts neben dem Suchfeld auf Ihrer Seite hinzu: myplugin / desktop / php / myplugin.php :

  ``<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="1" data-state="0"><i class="fas fa-grip-lines"></i></a> ``

<details>

  <summary markdown="span">Par exemple :</summary>

  ~~~ html
  {% raw %}
  <legend><i class="fa fa-table"></i> {{Mes Equipemnts}}</legend>
  <div class="input-group" style="margin-bottom:5px;;">
    <input class="form-control roundedLeft" placeholder="{{Rechercher}}" id="in_searchEqlogic"/>
    <div class="input-group-btn">
      <a id="bt_resetObjectSearch" class="btn" style="width:30px"><i class="fas fa-times"></i>
      </a><a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="1" data-state="0"><i class="fas fa-grip-lines"></i></a>
    </div>
  </div>
  {% endraw %}
  ~~~

</details>

  Testen Sie die Anzeige auf einem Core v4.2. Wenn alles in Ordnung ist, ist es vorbei !

  ##### Wenn nicht standardmäßige Anzeige von Eqlogics :

  Rahmen *data-coreSupport* bis 0 :

  ``<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="0" data-state="0"><i class="fas fa-grip-lines"></i></a> ``

  - Verwalten Sie Ihre eigene CSS-Klasse außer ".displayAsTable"". Platzieren Sie die CSS-Datei in `myplugin / desktop / css / myplugin.css` importiere es dann wie folgt von desktop / php :

    `include_file ('desktop', 'myplugin', 'css', 'myplugin');`

  - Verwalten Sie das Schaltflächenereignis :

<details>

  <summary markdown="span">Beispiel d'event js</summary>

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
      } sonst {
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

  ##### Als Referenz dient das Plugin js.Vorlage :

<details>

  <summary markdown="span">plugin.Vorlage js</summary>

  ~~~ js
  {% raw %}
  // displayAsTable, wenn das Plugin dies unterstützt:
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
    // Kernereignis:
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      if ($ (this).data ('state') == "0") {
        $(this).data('state', '1').addClass('active')
        setCookie ('jeedom_displayAsTable', 'true', 2)
        $('.eqLogicDisplayCard').addClass('displayAsTable')
        $('.eqLogicDisplayCard .hiddenAsCard').removeClass('hidden')
        $('.eqLogicThumbnailContainer').first().addClass('containerAsTable')
      } sonst {
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

  Sie können sich auch von Core CSS inspirieren lassen :

  - Desktop / css / desktop.main-Datei.css` section `/* __________________displayAsTable */ ``

  #####  Zeigen Sie andere Elemente in der Tabellenansicht an

  Wenn Sie einen Artikel aus dem *displayCard* erscheint rechts, fügen Sie die CSS-Klasse `displayTableRight` hinzu. Wenn Sie dort mehrere Elemente platzieren müssen, fügen Sie sie alle in ein ` <span class="displayTableRight">...</span> ` ein

  Im Tabellenmodus, in dem jedes Element in einer Zeile angezeigt wird, befindet sich rechts die Stelle, an der Informationen hinzugefügt werden können (siehe Schaltflächen).

  Sie können also auf jedem haben *displayCard* Elemente, die im normalen Modus nicht angezeigt werden, und rechts im Tabellenmodus.

<details>

  <summary markdown="span">Par exemple :</summary>

  ~~~ php
  {% raw %}
  <div class="eqLogicThumbnailContainer">
    <?php
      foreach ($ eqLogics als $ eqLogic) {
        $div = '';;
        $opacity = ($eqLogic->getIsEnable()) ? '' : 'disableCard';;
        $div .= '<div class="eqLogicDisplayCard cursor '.$opacity.'" data-eqLogic_id="' . $eqLogic->getId() . '">';;
        $div .= '<img src="' . $plugin->getPathImgIcon() . '"/>';;
        $div .= '<br>';;
        $div .= '<span class="name">' . $eqLogic->getHumanName(true, true) . '</span>';;
        $div .= '<span class="hidden hiddenAsCard displayTableRight">'.$eqLogic->getConfiguration('autorefresh').' | '.$eqLogic->getConfiguration('loglasttime').'h</span>';;
        $div .= '</div>';;
        echo $ div;
      }
    ?>
  </div>
  {% endraw %}
  ~~~

</details>

  Hier (Plugin *jeeLog*) cron- und log-Parameter werden im normalen Modus ausgeblendet, im Tabellenmodus jedoch rechts angezeigt. Sie können sich auch von den Seiten von Core v4 inspirieren lassen.2, insbesondere das der Szenarien, in denen die Schaltfläche zum Öffnen der Protokolle angezeigt wird.

  Vergessen Sie nicht die "versteckte" Klasse (auf Core-Seiten nicht vorhanden), damit dieses Element auf Core vor 4.2 nicht im normalen Modus angezeigt wird.


#### Widget-Hilfe anzeigen

Seit v4.In 2 werden die optionalen Parameter, die in den Core-Widgets verfügbar sind, für jedes Widget angezeigt, entweder in der Befehlskonfiguration oder im Bearbeitungsmodus des Dashboards.

Im Code von **Dashboard-Widget**, Ein "Template" -Tag wird zwischen dem letzten internen "Div" und dem "Script" -Tag eingefügt. Der Core entfernt dieses Tag, wenn das Widget angezeigt wird, um die Seite nicht zu beschweren. Allerdings auf Pre-4 Core.2, das "Vorlage" -Tag wird von Browsern nicht angezeigt. Umgekehrt wird dieses "Template" -Tag vom Core abgerufen, um die Hilfe in den Konfigurationsfenstern anzuzeigen.

- Wenn ein "Template" -Tag vorhanden und nicht leer ist, zeigt der Core seinen Inhalt an.
- Wenn ein Template-Tag vorhanden, aber leer ist, wird der Core angezeigt *`Keine optionalen Parameter verfügbar`*.
- Wenn kein Template-Tag vorhanden ist, wird der Core angezeigt *`Keine Beschreibung für dieses Widget gefunden`*.

<details>

  <summary markdown="span">Beispiel de code de Widgund avec template</summary>

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

Alle Cursortyp-Widgets werden seit Version 4 verwendet.2 eine neue lib [noUiSlider](https://refreshless.com/nouislider/). Es ist flexibler in seiner Verwendung und Initiierung und ermöglicht es uns, einen identischen Code auf Desktop und Mobile zu verwenden. Es ist auch kompatibel *Berühren* auf Smartphones !

Wenn Ihre Plugins / Widgets von Drittanbietern Schieberegler verwenden, ist es besser, auf diese neue Bibliothek zu migrieren.

> Warnung : Der Pre-4 Core.2 habe nicht den lib nouislider !

Sie können die Existenz der Bibliothek so testen :

`` ``js
if (Typ von noUiSlider !== 'undefined') {
  console.log ('noUiSlider-Code hier')
} sonst {
  console.log ('alter Code hier')
}
`` ``

#### Übersetzung von Widgets von Drittanbietern

Wenn Sie Widgets (Code) von Drittanbietern erstellen und freigeben, Core v4.2 unterstützt nun ihre Internationalisierung.

Dazu muss jedem Widget eine JSON-Datei mit seinen Übersetzungen beigefügt sein.

Widget-Pfad : `data \ customTemplates \ dashboard \ cmd.info.string.myCustomWidget.html`
Übersetzungspfad : `data \ customTemplates \ i18n \ cmd.info.string.myCustomWidget.json`

> Die mobile Version des Widgets übernimmt die Übersetzung an derselben Stelle.

Beispiel :

`` ``html
<div class="content-xs">
    <span class="cmdName #hide_name#">#name_display#</span> <strong class="state"></strong>
    {{Ich bin ein Widget eines Drittanbieters}}
  </div>
  <template>
    <div>param : {{Meine Einstellung von Drittanbietern}}.</div>
  </template>
  <script>
`` ``

`` ``json
  {
    "en_US": {
      "Ich bin ein Widget eines Drittanbieters": "Ich bin ein benutzerdefiniertes Widget",
      "Meine Einstellung von Drittanbietern": "Meine benutzerdefinierte Parameterbeschreibung"
    },
    "es_ES": {
      "Ich bin ein Widget eines Drittanbieters": "Sei ein Terceros-Widget",
      "Meine Einstellung von Drittanbietern": "Mi configurationación de terceros"
    },
    "de_DE": {
      "Ich bin ein Widget eines Drittanbieters": "Ich bin ein Widget eines Drittanbieters",
      "Meine Einstellung von Drittanbietern": "Meine Einstellung von Drittzahlenern"
    }
  }
`` ``

> Die Texte "Wertdatum", "Erfassungsdatum" und alle in Core-Widgets enthaltenen Texte müssen nicht in json sein. Wenn Sie keine anderen Texte in Ihrem Widget haben, wird der JSON nicht benötigt und diese Zeichenfolgen werden übersetzt.