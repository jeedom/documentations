## Core v4.2 | Développeurs de plugin

### Deprecated

- Suppression de la lib jwerty pour du vanillaJS (gestion des raccourcis clavier). Conservée en v4.2 pour les plugins susceptibles de l'utiliser, elle serat supprimée en v4.3.

### En cours de test / développement

#### Coloration des logs et traduction

- `\core\configjeedom.config.php` : $JEEDOM_SCLOG_TEXT reprend les valeurs colorées pour la traduction. Vérifiez les retours de log manquant et les incorporer si nécessaire.
- Utilisé dans les class php `cmd` `scenario` `scenarioElement` `scenarioExpression` `scenarioSubElement`
- Utilisé dans les appels ajax `scenario` et `log`

#### Aide sur les template widget dashboard

- Système de traduction qui actuellement ne scanne pas `core/template/dashboard` et /mobile :
- > Scanner `core/template/dashboard` et tout mettre dans le i18n.json avec le path `"core\/template\/widgets.html"`

#### Documentation à adapter aux nouvelles options / fonctions

### Modifications optionnelles

#### Commandes orphelines

  En v4.2, sur la page **Analyse → Equipements**, onglet Commandes orphelines, la fonction eqLogic `deadCmdGeneric()` renvoit maintenant un lien vers le scénario ou l'équipement concerné.

  Pour référence, la nouvelle fonction du Core:

<details>

  <summary markdown="span">eqLogic deadCmdGeneric()</summary>

  ~~~ php
  public static function deadCmdGeneric($_plugin_id) {
    $return = array();
    foreach (eqLogic::byType($_plugin_id) as $eqLogic) {
      $eqLogic_json = json_encode(utils::o2a($eqLogic));
      preg_match_all("/#([0-9]*)#/", $eqLogic_json, $matches);
      foreach ($matches[1] as $cmd_id) {
        if (is_numeric($cmd_id)) {
          if (!cmd::byId(str_replace('#', '', $cmd_id))) {
            $return[] = array(
              'detail' => '<a href="/index.php?v=d&m='.$eqLogic->getEqType_name().'&p='.$eqLogic->getEqType_name().'&id='.$eqLogic->getId().'">'.$eqLogic->getHumanName().'</a>',
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

  Vous pouvez donc intégrer le même type de retour dans vos plugins, fonction `deadCmd()`.

</details>

#### Support de l'affichage tableau dans un plugin

  Depuis la version 4.2 du Core, un affichage en mode tableau est proposé sur les pages *Objets* *Scénarios* *Interactions* *Widgets* et *Plugins*.

  Cette fonction repose entièrement sur du CSS et ne nécessite pas de modification des éléments du DOM, à part l'ajout du bouton à droite de la recherche pour basculer entre les mode tableau et normal.

  Sur la plupart des plugins, le Core pourra gérer cette fonctionnalité. Toutefois, elle n'a pas été intégrée par défaut car plusieurs plugins n'utilisent pas des *displayCard* standard, et le Core ne peux alors pas gérer l'affichage, dépendant du plugin.

  Ceci doit donc être testé et intégré pour chaque plugin. Plusieurs cas possible :

    - Vous n'intégrez pas le bouton : Votre plugin ne proposera pas ce mode.
    - Vous intégrez le bouton, et l'affichage est bien géré : Rien de plus à faire.
    - Vous intégrez le bouton, mais l'affichage n'est pas bien géré : Inspirez vous du CSS du Core 4.2 pour faire votre propre CSS.

  Dans tout les cas, le bouton de bascule du mode tableau est intégré avec la class CSS `hidden` et est donc masqué. Il ne sera donc pas visible sur les Core pré-4.2 ne possédant pas cette option.


  ##### Ajouter le bouton à droite du champ recherche :

  Ajoutez simplement ce bouton à droite du champ de recherche sur votre page `monplugin/desktop/php/monplugin.php` :

  `<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="1" data-state="0"><i class="fas fa-grip-lines"></i></a>`

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

  Testez l'affichage sur un Core v4.2. Si tous va bien, c'est terminé !

  ##### Si affichage non standard des eqlogics :

  Paramètre *data-coreSupport* à 0 :

  `<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="0" data-state="0"><i class="fas fa-grip-lines"></i></a>`

  - Gérez votre propre class css, autre que ".displayAsTable". Placez le fichier css dans `monplugin/desktop/css/monplugin.css` puis importez le depuis le desktop/php comme cela :

    `include_file('desktop', 'monplugin', 'css', 'monplugin');`

  - Gérez l'event du bouton :

<details>

  <summary markdown="span">Exemple d'event js</summary>

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

  ##### Pour référence, le js du plugin.template :

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

  Vous pouvez également vous inspirer des CSS du Core :

  - Fichier `desktop/css/desktop.main.css` section `/* __________________displayAsTable */`

  #####  Afficher d'autres éléments en mode tableau

  Si vous souhaitez qu'un élément de la *displayCard* apparaisse sur la droite, ajoutez la class CSS `displayTableRight`. Si vous devez y placer plusieurs éléments, placez les tous dans un seul `<span class="displayTableRight"> ... </span>`

  Le mode tableau affichant chaque élément sur une ligne, il y a la place à droite pour ajouter des informations, voir des boutons.

  Vous pouvez ainsi avoir sur chaque *displayCard* des éléments qui ne seront pas affichés en mode normal, et à droite en mode tableau.

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

  Ici (plugin *jeeLog*) les paramètres de cron et log seront masqués en mode normal mais visible sur la droite en mode tableau. Vous pouvez aussi vous inspirez des pages du Core v4.2, notamment celle des scénarios qui affiche le bouton pour ouvrir les logs.

  N'oubliez pas la class `hidden` (non présente sur les pages du Core) pour pas que cet élément soit affiché en mode normal sur les Core pré-4.2.


#### Affichage de l'aide d'un Widget

Depuis la v4.2, les paramètres optionnels disponibles sur les Widgets Core sont affichés affichés pour chaque widget, que ce soit dans la configuration de la commande ou depuis le mode Edition du Dashboard.

Dans le code du **Widget Dashboard**, un tag `template` est inséré entre la dernière `div` interne et le tag `script`. Le Core supprime ce tag à l'affichage du Widget pour ne pas alourdir la page. Toutefois, sur les Core pré-4.2, le tag `template` n'est pas affiché par les navigateurs. Inversement, ce tag `template` est récupéré par le Core pour afficher l'aide dans les fenêtres de configuration.

- Si un tag `template` est présent et non vide, le Core affiche son contenu.
- Si un tag `template` est présent, mais vide, le Core affiche *`Aucun paramètre optionnel disponible`*.
- Si aucun tag `template` n'est présent, le Core affiche *`Aucune description trouvée pour ce Widget`*.

<details>

  <summary markdown="span">Exemple de code de Widget avec template</summary>

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

#### Widgets curseur

Tous les Widgets de type curseur utilisent depuis la v4.2 une nouvelle lib [noUiSlider](https://refreshless.com/nouislider/). Plus souples dans son utilisation et son initilisation, elle nous permet aussi d'utiliser un code identique en desktop et mobile. Elle est également compatible *Touch* sur les smartphones !

Si vos plugins / widgets tiers utilisent des curseurs, il est préférable de migrer vers cette nouvelle lib.

> Attention : Les Core pré-4.2 n'ont pas la lib nouislider !

Vous pouvez tester l'existence de la lib comme cela :

```js
if (typeof noUiSlider !== 'undefined') {
  console.log('noUiSlider code here')
} else {
  console.log('old code here')
}
```

#### Traduction des Widgets tiers

Si vous réalisez et partagez des Widgets tiers (code), le Core v4.2 supporte maintenant leur internationalisation.

Pour cela, chaque widget doit être accompagné de son fichier json contenant ses traductions.

path du widget : `data\customTemplates\dashboard\cmd.info.string.myCustomWidget.html`
path de la traduction : `data\customTemplates\i18n\cmd.info.string.myCustomWidget.json`

> La version mobile du Widget prendra la traduction au même endroit.

Exemple :

```html
<div class="content-xs">
    <span class="cmdName #hide_name#">#name_display#</span> <strong class="state"></strong>
    {{Je suis un widget tiers}}
  </div>
  <template>
    <div>param : {{Mon paramètre tiers}}.</div>
  </template>
  <script>
```

```json
  {
    "en_US": {
      "Je suis un widget tiers": "I am a custom widget",
      "Mon paramètre tiers": "My custom parameter description"
    },
    "es_ES": {
      "Je suis un widget tiers": "Soy un widget de terceros",
      "Mon paramètre tiers": "Mi configuración de terceros"
    },
    "de_DE": {
      "Je suis un widget tiers": "Ich bin ein Widget eines Drittanbieters",
      "Mon paramètre tiers": "Meine Einstellung von Drittanbietern"
    }
  }
```

> Les textes `Date de valeur`, `Date de collecte` et tous ceux se trouvant dans les widgets Core n'ont pas besoin d'être dans le json. Si vous n'avez pas d'autres textes dans votre widget, le json n'est donc pas nécessaire, et ces chaînes seront traduites.