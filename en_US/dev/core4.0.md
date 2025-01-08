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
- Attention for plugins with templates: the refresh icon has changed (font-awesome 5) :
- Pay attention to the class of buttons, input etc:
    - btn : 32px high
    - btn-sm / input-sm : 28px high
    - btn-xs : 22px high
- Desktop/php/pluginid file.php : replace object::all() by jeeObject::all()

- Testing plugins on all three themes 2019 Light / Dark / Legacy.

- Images in png with alpha if necessary, in order to avoid unsightly white squares in Dark theme.

Ultimately, the plugin pages must be consistent with the core objects/scenarios/interactions pages (sizes, colors, layouts, etc.)). No stylistic effect, but consistency.

> Noticed :
>
> The sidebar did not survive v4 ! To replace it, a context menu is available on the tabs for scenarios, objects, interactions, plugins.

> Updates :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. This avoids having to wait for the robot to pass by, and makes the update available immediately.

> Reminder :
>
> Images displayed in plugin pages should not be loaded from the net, but should be among the plugin's local files.

> Attention :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! It is the most dangerous and therefore the furthest away.


### File Cleaner

V4 and new v3 have automatic cleanup of files not present on your automatic plugin update.

The core automatically deletes files older than 7 days that have not been updated.

- It deletes files that are older than 7 days according to your plugin update.
- It only affects folders > `3rdparty`, `3rparty`, `desktop`, `mobile`, `core`, `docs`, `install`, `script`, `vendor`, `plugin_info`.
- `resource(s)` and `data` are not affected, but we encourage you to use `data` for any custom.
- Files whose names start with `custom` are also not affected.

If you want to make a modification before cleaning you can use `pre_install.php` (in plugin_info).
See [plugin template](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### GitHub liaison market

Github name change for access to your private repos.

You must now use jeedom-market instead of zoic.

### The documentation

The documentation site has also changed its appearance.

Now links go directly to your documentation.

### The translation

We are currently developing a new translation tool. We are currently testing it internally and will get back to you soon to offer to integrate your plugins into it.