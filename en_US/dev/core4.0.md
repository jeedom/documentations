## Core v4.0 | Plugin developers

### Deprecated

- Font-Awesome 4 is no longer integrated into the Core, replaced by Font-Awesome 5 [Migration](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### V4 compatibility on the market

The v3 which will be released in November 2020 will have a migration module allowing to go from V3 to V4.

During the migration phase from v3 to v4, plugins without v4 compatibility in their info.json will alert the end user before the update.


If your plugin is v4 compatible, indicate it in the info.json from your plugin.

Example **info.json**: `"compatibility" : ["miniplus", "smart", "rpi", "docker", "diy", "v4"], `

You can test from a scenario / Code block if your plugins have the compatibility indicated:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  ~~~ php
  {% raw %}
  // Author of plugins to check (case sensitive)
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  foreach ($ pluginsArray as $ plugin) {
    if ($ plugin ['author'] == $ author) {
      $countPlugins++;
    if ($ plugin ['hardwareCompatibility'] ['v4'] != '1') {
        $countIncompatibles++;
      $scenario->setLog('Plugin ' . $plugin['name'] . ' does not have v4 compatibility tag.');
    }
    }
  }
  if ($ countPlugins> 0) {
    if ($ countIncompatible> 0) {
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

### Adaptation of plugins for Core v4

- Clean the inline style as much as possible (cf [Plugin template](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
- span command display : class `state`
- Control button : a class `action`
- On the input-group:
  - class `roundedLeft` on the first element (a input, button etc)
    - class `roundedRight` on the last element (a input, button etc)
- On the eqLogicThumbnailContainer div:
    - Remove all styles!
    - On the parent divs, add a color class:
      - logo colors: `logoPrimary` and` logoSecondary`
        - Green : `success`
        - bleu: `info`
        - orange: `warning`
        - Red : `danger`
- Be careful with plugins with templates: the refresh icon has changed (font-awesome 5) :
- Pay attention to the class of buttons, input etc:
    - btn : 32px high
    - btn-sm / input-sm : 28px high
    - btn-xs : 22px high
- Desktop / php / pluginid file.php : replace object::all () by jeeObject::all()

- Test the plugins on the three 2019 Light / Dark / Legacy themes.

- Images in png with alpha if necessary, to avoid unsightly white squares in Dark theme.

In the end, the plugin pages must be consistent with the pages of the core objects / scenarios / interactions (sizes, colors, layouts etc). No style effect, but consistency.

> Note :
>
> The sidebar did not survive v4 ! To replace it, a context menu is available on the tabs for scenarios, objects, interactions, plugins.

> Updates :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. This avoids waiting for the robot to pass, and makes the update available immediately.

> Recall :
>
> Images displayed in plugin pages must not be loaded from the net, but must be among the local plugin files.

> Be careful :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! It is the most dangerous therefore the farthest.


### File Cleaner

Both v4 and new v3 have automatic cleaning of files not present on your automatic plugin update.

The core automatically deletes files older than 7 days that have not been updated.

- It erases files that are older than 7 days depending on the update of your plugin.
- It only affects folders> `3rdparty`,` 3rparty`, `desktop`,` mobile`, `core`,` docs`, `install`,` script`, `vendor`,` plugin_info`.
- `resource (s)` and `data` are not affected, but we invite you to use` data` for any custom.
- Files whose name starts with `custom` are also not affected.

If you want to make a modification before cleaning you can use `pre_install.php` (in plugin_info).
View [Plugin template](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### GitHub link market

Change of github name for access to your private rests.

You must now use jeedom-market instead of zoic's.

### The documentation

The documentation site has also changed its appearance.

Now links direct to your documentations.

### The translation

We are in the process of developing a new translation tool. We are currently testing it internally and we will get back to you soon to suggest that you integrate your plugins into it.