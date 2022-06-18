## Kern v4.2 | Plugin-Entwickler


### Obsolete

- Methode „initCheckBox()“ (utils.js).
- `cmd`-Klassenmethode : `setEventOnly()`.

### Deprecated

Diese Änderungen werden in v4 noch unterstützt.2 und wechselt zu **Obsolet** in einer zukünftigen Version.

- Die eqLogic-Methode::byTypeAndSearhConfiguration()` wurde korrekt umbenannt : `eqLogic::byTypeAndSearchConfiguration()`.
- Die js-Methode `jeedom.eqLogic.buildSelectCmd wurde korrekt umbenannt : `jeedom.eqLogic.buildSelectCmd`.

*Diese beiden Methoden wurden auch in v4 integriert.1, um ihre Einführung zu beschleunigen.*

- Entfernen der jwerty-Bibliothek für VanillaJS (Tastaturkürzelverwaltung).
- Die Verwendung von „showAlert“ ändert sich : `$('#div_alert').showAlert({` wird zu `$.fn.showAlert({`. Keine Änderung für den Aufruf von einem Modal. Nicht unterstützt auf Core vor 4.2.

- Php `displayException`-Methode : `displayException` (utils.inc)
- PHP-Methode „convertDayEnToFr“ : `convertDayFromEn` (utils.inc)


### Optionale Änderungen

#### Kachelhintergrundgrafik

V4.2 ermöglicht es, auf einem eqLogic einen Info-Befehl zu definieren, dessen Verlauf im Hintergrund der Kachel angezeigt wird.

Dazu muss Ihr Plugin dies in plugins/myplugin/core/class/myplugin.class.php zulassen:

```php
Die Klasse myplugin erweitert eqLogic {
    öffentlich statisch $_widgetPossibility = array('custom' => true);
```

Wenn Ihr Plugin ein bestimmtes Template für seine Ausstattung hat, muss die Desktop-Version davon mit ` aktualisiert werden#divGraphInfo#` zur Anzeige :

```html
<div class="eqLogic eqLogic-widgund allowResize allowReorderCmd #custom_layout# #eqLogic_class# #class#" data-eqType="#eqType#" data-eqLogic_id="#id#" data-eqLogic_uid="#uid#" data-version="#version#" data-translate-category="#translate_category#" data-category="#category#" data-tags="#tags#" style="width: #width#;height: #height#;#style#">
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


#### Verwaiste Befehle

In v4.2, auf der Seite **Analyse → Ausrüstung**, Auf der Registerkarte „Verwaiste Befehle“ gibt die eqLogic-Funktion „deadCmdGeneric()“ jetzt einen Link zu dem betreffenden Szenario oder der betreffenden Ausrüstung zurück.

Als Referenz die neue Core-Funktion:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  ~~~ php
  öffentliche statische Funktion deadCmdGeneric($_plugin_id) {
    $return = array();
    foreach(eqLogic::byType($_plugin_id) als $eqLogic) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic));
      preg_match_all("/#([0-9]*)#/", $eqLogic_json, $matches);
      foreach ($matches[1] als $cmd_id) {
        if (is_numeric($cmd_id)) {
          wenn (!cmd::byId(str_replace('#', '', $cmd_id))) {
            $return[] = array(
              '<html>Einzelheiten' => '?v=d&m='.$eqLogic->getEqType_name().'&p='.$eqLogic->getEqType_name().'&id='.$eqLogic->getId().'">'.$eqLogic->getHumanName ().' </a>',
              'help' => __('Aktion', __FILE__),
              'who' => '#' . $cmd_id . '#'
            );
          }
        }
      }
    }
    Rückgabe $Rückgabe;
  }
  ~~~

  Sie können also denselben Rückgabetyp in Ihre Plugins einbetten, die Funktion "deadCmd()".

</details>

#### Tabellenanzeigeunterstützung in einem Plugin

Seit Version 4.2 des Core wird auf den Seiten eine Darstellung im Tabellenmodus angeboten *Objekte* *Szenarien* *Interaktionen* *Widgets* und *Plugins*.

Diese Funktion basiert vollständig auf CSS und erfordert keine Änderung der DOM-Elemente, außer der Hinzufügung der Schaltfläche rechts neben der Suche, um zwischen Tabellen- und Normalmodus zu wechseln.

Bei den meisten Plugins wird der Core in der Lage sein, diese Funktion zu handhaben. Es wurde jedoch nicht standardmäßig integriert, da mehrere Plugins nicht verwendet werden *displayCard* Standard, und dann kann der Core die Anzeige je nach Plugin nicht verwalten.

Dies muss daher für jedes Plugin getestet und integriert werden. Mehrere Fälle möglich :

  - Sie betten die Schaltfläche nicht ein : Ihr Plugin bietet diesen Modus nicht an.
  - Sie integrieren die Schaltfläche, und die Anzeige ist gut verwaltet : Nichts mehr zu tun.
  - Sie integrieren die Schaltfläche, aber die Anzeige ist nicht gut gelungen : Lassen Sie sich von Core 4 CSS inspirieren.2, um Ihr eigenes CSS zu erstellen.

In jedem Fall ist die Toggle-Schaltfläche für den Tabellenmodus in die CSS-Klasse „hidden“ integriert und daher verborgen. Es wird daher auf Pre-4 Cores nicht sichtbar sein.2 diese Option nicht haben.


##### Fügen Sie die Schaltfläche rechts neben dem Suchfeld hinzu :

Fügen Sie diesen Button einfach rechts neben dem Suchfeld auf Ihrer Seite `myplugin/desktop/php/myplugin.php` :

`<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="1" data-state="0"><i class="fas fa-grip-lines"></i></a> `

<details>

  <summary markdown="span">Par exemple :</summary>

  ~~~.html
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

Testen Sie die Anzeige auf einem Core v4.2. Wenn alles gut geht, ist es vorbei !

##### Wenn nicht standardmäßige Anzeige von eqlogics :

Einstellung *data-coreSupport* zu 0 :

`<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="0" data-state="0"><i class="fas fa-grip-lines"></i></a> `

- Verwalten Sie Ihre eigene CSS-Klasse außer „.displayAsTable". Legen Sie die CSS-Datei in `myplugin/desktop/css/myplugin.css‘ importieren und dann so vom Desktop/php importieren :

  `include_file('desktop', 'myplugin', 'css', 'myplugin');`

- Verwalten Sie das Schaltflächenereignis :

<details>

  <summary markdown="span">Beispiel d'event js</summary>

  ~~~ js
  {% raw %}
  $('#bt_pluginDisplayAsTable').off('click').on('click', function () {
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      wenn ($(dies).data('state') == "0") {
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

##### Als Referenz die js des Plugins.Schablone :

<details>

  <summary markdown="span">plugin.Schablone js</summary>

  ~~~ js
  {% raw %}
  //displayAsTable, wenn das Plugin dies unterstützt:
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
    // Kernereignis:
    $('#bt_pluginDisplayAsTable[data-coreSupport="1"]').off('click').on('click', function () {
      wenn ($(dies).data('state') == "0") {
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

- `desktop/css/desktop.main-Datei.css `Abschnitt`/* ____alsTabelle anzeigen */`

##### Andere Elemente in der Tabellenansicht anzeigen

Wenn Sie ein Element der *displayCard* rechts erscheint, fügen Sie die CSS-Klasse `displayTableRight` hinzu. Wenn Sie mehrere Elemente dort einfügen müssen, fügen Sie sie alle in einem einzigen ` <span class="displayTableRight">...</span> ` ein

Der Tabellenmodus zeigt jedes Element in einer Zeile an, rechts ist Platz zum Hinzufügen von Informationen, siehe Schaltflächen.

Sie können also auf jeden haben *displayCard* Elemente, die im normalen Modus nicht angezeigt werden, und rechts im Tabellenmodus.

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

Hier (plugin *JeeLog*) Cron- und Protokollparameter werden im normalen Modus ausgeblendet, aber im Tabellenmodus auf der rechten Seite sichtbar. Sie können sich auch von den Core v4-Seiten inspirieren lassen.2, insbesondere die der Szenarien, die die Schaltfläche zum Öffnen der Protokolle anzeigt.

Vergessen Sie nicht die `hidden`-Klasse (nicht auf den Core-Seiten vorhanden), damit dieses Element nicht im normalen Modus auf Cores vor 4.2 angezeigt wird.


#### Anzeige der Hilfe für ein Widget

Seit v4.2 werden optionale Parameter, die auf Core-Widgets verfügbar sind, für jedes Widget angezeigt, sei es in der Befehlskonfiguration oder im Bearbeitungsmodus des Dashboards.

Im Code von **Dashboard-Widget**, ein `template`-Tag wird zwischen dem letzten internen `div` und dem `script`-Tag eingefügt. Der Core entfernt dieses Tag beim Anzeigen des Widgets, um die Seite nicht zu belasten. Allerdings auf Pre-4 Cores.2 wird das `template`-Tag von Browsern nicht angezeigt. Umgekehrt wird dieses „template“-Tag vom Core abgerufen, um die Hilfe in den Konfigurationsfenstern anzuzeigen.

- Wenn ein `template`-Tag vorhanden und nicht leer ist, zeigt der Core seinen Inhalt an.
- Wenn ein `template`-Tag vorhanden, aber leer ist, wird der Core angezeigt *`Keine optionalen Parameter verfügbar`*.
- Wenn kein `template`-Tag vorhanden ist, wird der Core angezeigt *`Keine Beschreibung für dieses Widget gefunden`*.

<details>

  <summary markdown="span">Beispiel de code de Widgund avec template</summary>

  ~~~.html
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

Alle Slider-Widgets verwenden seit v4.2 eine neue Bibliothek [noUiSlider](https://refreshless.com/nouislider/). Es ist flexibler in seiner Verwendung und Initialisierung und ermöglicht es uns auch, identischen Code auf Desktop und Mobilgerät zu verwenden. Es ist auch kompatibel *Berühren* auf Smartphones !

Wenn Ihre Plugins/Widgets von Drittanbietern Schieberegler verwenden, ist es besser, zu dieser neuen Bibliothek zu migrieren.

> Aufmerksamkeit : Pre-4 Kerne.2 habe nicht die lib **Schieberegler** !

Sie können die Existenz der Bibliothek so testen :

```js
if (Typ von noUiSlider !== 'undefined') {
  console.log('kein UiSlider-Code hier')
} anders {
  console.log('alter Code hier')
}
```

#### Übersetzung von Widgets von Drittanbietern

Wenn Sie Drittanbieter-Widgets (Code) erstellen und teilen, Core v4.2 unterstützt nun deren Internationalisierung.

Dazu muss jedes Widget von seiner JSON-Datei begleitet werden, die seine Übersetzungen enthält.

Widget-Pfad : `data\customTemplates\dashboard\cmd.info.string.myCustomWidget.html`
Übersetzungspfad : `data\customTemplates\i18n\cmd.info.string.myCustomWidget.json`

> Die mobile Version des Widgets übernimmt die Übersetzung von derselben Stelle.

Beispiel :

```html
<div class="content-xs">
    <span class="cmdName #hide_name#">#name_display#</span> <strong class="state"></strong>
    {{Ich bin ein Drittanbieter-Widget}}
  </div>
  <template>
    <div>param : {{Meine Drittanbieter-Einstellung}}.</div>
  </template>
  <script>
```

```json
  {
    "en_US": {
      "Ich bin ein Drittanbieter-Widget": "Ich bin ein benutzerdefiniertes Widget",
      "Meine Drittanbieter-Einstellung": "Meine benutzerdefinierte Parameterbeschreibung"
    },
    "es_ES": {
      "Ich bin ein Drittanbieter-Widget": "Seien Sie ein Terceros-Widget",
      "Meine Drittanbieter-Einstellung": "Mi-Konfiguration von Terceros"
    },
    "aus_DE": {
      "Ich bin ein Drittanbieter-Widget": "Ich bin ein Widget eines Drittanbieters",
      "Meine Drittanbieter-Einstellung": "Meine Einstellung von Drittanbietern"
    }
  }
```

> `Wertstellungsdatum`, `Sammeldatum` und alle Texte in Core-Widgets müssen nicht in json sein. Wenn Sie keine anderen Texte in Ihrem Widget haben, wird der json nicht benötigt und diese Zeichenfolgen werden übersetzt.


#### Integration in den Kern von generischen Typen, die für ein Plugin spezifisch sind

Kern v4.2 hat eine neue Seite, die es ermöglicht, die generischen Typen einfacher zu konfigurieren. Natürlich verwendet es die vom Kern definierten generischen Typen, aber einige Plugins definieren ihre eigenen generischen Typen.

Damit diese Plugins von dieser neuen Core-Seite unterstützt werden, erfahren Sie hier, wie Sie sie integrieren.

Beim Öffnen dieser Seite prüft der Core für jedes Plugin, ob es eine `pluginGenericTypes()`-Methode hat. Ist dies der Fall, wird diese Methode aufgerufen und wartet auf die Generic Types des Plugins, um diese einzubinden. Diese müssen die Definition von Core Generic Types respektieren, insbesondere wenn Kategorien bereits existieren (Grip, Light, etc.).).

Beispielsweise in der Datei `plugins/monplugin/core/php/monplugin.class.php`:

```php
Klasse myPlugin erweitert eqLogic
{
    /*     * ***********************Statische Methode*************************** */
    öffentlich statisch $_widgetPossibility = array('custom' => true);

    öffentliches statisches FunktionspluginGenericTypes()
    {
        $generics = array(
            'MYPLUGIN_TOGGLE' => array( //Großschreibung ohne Leerzeichen
                'name' => __('MyPlugin Toggle',__FILE__),
                'familyid' => 'MyPlugin', //Kein Leerzeichen hier
                'family' => __('Plugin MyPlugin',__FILE__), //Starte mit 'Plugin ' ...
                'type' => 'Aktion',
                'subtype' => array('other')
            ),
            'MYPLUGIN_LIGHT_BEAM' => Array(
                'name' => __('Lichtstrahlen (MyPlugin)',__FILE__),
                'familyid' => 'LIGHT', //Vorhandener Typ, falls vorhanden
                'Familie' => __('Licht',__FILE__),
                'Typ' => 'Info',
                'subtype' => array('binary','numeric')
            )
        );
        $Generika zurückgeben;
    }

```

Hier „injiziert“ das „myPlugin“-Plugin zwei generische Typen :

- Ein generischer Typ MONPLUGIN_TOGGLE vom Typ „MyPlugin“, Kategorie, die im Kern nicht vorhanden ist.
- Ein generischer Typ MONPLUGIN_LIGHT_BEAM in der bestehenden Kategorie „Light“.

> Bezug : Generische Kerntypen sind in definiert [Konfigurationsdatei](https://github.com/jeedom/core/blob/alpha/core/config/jeedom.config.php), Array $JEEDOM_INTERNAL_CONFIG, generischer_Typ.