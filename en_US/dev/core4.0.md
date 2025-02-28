## Core v4.0 | Plugin Developers

### Deprecated

- Font-awesome 4 is no longer integrated into Core, replaced by Font-Awesome 5 [migration](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### V4 compatibility on the market

The v3 which will be released in November 2020 will have a migration module allowing you to move from V3 to V4.

During the migration phase from v3 to v4, plugins without v4 compatibility in their info.json will alert the end user before the update.


If your plugin is v4 compatible, indicate it in the info.json of your plugin.

Example **info.json**: `"compatibility" : ["miniplus","smart","rpi","docker","diy","v4"],`

You can test from a scenario / Code block if your plugins have the correct compatibility entered:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  ~~~ php
  {% raw %}
  //Author of plugins to check (case sensitive)
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  foreach ($pluginsArray as $plugin) {
    if ($plugin['author'] == $author) {
      $countPlugins++;
    if ($plugin['hardwareCompatibility']['v4'] != '1') {
        $countIncompatibles++;
      $scenario->setLog('Plugin ' . $plugin['name'] . ' does not have v4 compatibility tag.');
    }
    }
  }
  if ($countPlugins > 0) {
    if ($countIncompatibles > 0) {
      $scenario->setLog($author . ' : ' . $countIncompatibles . ' potentially incompatible Jeedom V4 plugin on ' . $countPlugins . ' checked');
    } else {
      $scenario->setLog('All ' . $countPlugins . ' plugin developed by ' . $author . ' are Jeedom V4 compatible. Congratulations!');
    }
  } else {
    $scenario->setLog('No plugin found for ' . $author);
  }
  {% endraw %}
  ~~~

</details>

### Adapting plugins for Core v4

- Clean up inline styles as much as possible (see [plugin template](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
- span command display : class `state`
- Control button : a class `action`
- On input groups:
  - class `roundedLeft` on the first element (a input, button etc)
    - class `roundedRight` on the last element (a input, button etc)
- On the eqLogicThumbnailContainer div:
    - Delete all styles!
    - On parent divs, add a color class:
      - logo colors: `logoPrimary` and `logoSecondary`
        - Green : `success`
        - bleu: `info`
        - orange: `warning`
        - red : `danger`
- : ) :
- :
    -  : 
    -  : 
    -  : 
- . : ::::all()

- .

- .

). .

>  :
>
>  ! .

>  :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. .

>  :
>
> .

>  :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! .


### 

.

.

- .
- .
- .
- .

.).
 [plugin template](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### 

.

.

### 

.

.

### 

. .