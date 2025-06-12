## Core v4.0 | Plugin developers

### Deprecated

-  [](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### 

.

..


..

Example ****: `"compatibility" : 

:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  
  {% raw %}
  )
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  ) {
    ) {
      $countPlugins++;
    '] != '1') {
        $countIncompatibles++;
      $scenario->setLog('Plugin ' . $plugin['name'] . ' does not have v4 compatibility tag.');
    }
    }
  }
  ) {
    ) {
      $scenario->setLog($author . ' : ' . $countIncompatibles . ' potentially incompatible Jeedom V4 plugin on ' . $countPlugins . ' checked');
    }  {
      $scenario->setLog('All ' . $countPlugins . ' plugin developed by ' . $author . ' are Jeedom V4 compatible. Congratulations!');
    }
  }  {
    $scenario->setLog('No plugin found for ' . $author);
  }
  {% endraw %}
  

</details>

### 

-  [](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
-  : 
-  : 
- :
  - )
    - )
- :
    - !
    - :
      - : 
        -  : `success`
        - bleu: `info`
        - orange: `warning`
        -  : `danger`
- Attention for plugins with templates: the refresh icon has changed (font-awesome 5) :
- Pay attention to the class of buttons, input etc:
    - btn : 32px high
    - btn-sm / input-sm : 28px high
    - btn-xs : 22px high
- Desktop/php/pluginid file.php : replace object::all() by jeeObject::all()

- Testing plugins on the three 2019 themes Light / Dark / Legacy.

- Images in png with alpha if necessary, to avoid unsightly white squares in Dark theme.

Ultimately, the plugin pages must be consistent with the core objects/scenarios/interactions pages (sizes, colors, layouts, etc.)). No stylistic effect, but consistency.

> Noticed :
>
> The sidebar did not survive v4 ! To replace it, a context menu is available on the tabs for scenarios, objects, interactions, plugins.

> Updates :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. This avoids having to wait for the robot to pass, and makes the update available immediately.

> Reminder :
>
> Images displayed in plugin pages should not be loaded from the web, but should be among the plugin's local files.

> Attention :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! It's the most dangerous, therefore the furthest away.


### File Cleaner

V4 and new v3 have automatic cleanup of files not present on your automatic plugin update.

The core automatically deletes files older than 7 days that have not been updated.

- It deletes files that are older than 7 days depending on your plugin update.
- It only affects folders > `3rdparty`, `3rparty`, `desktop`, `mobile`, `core`, `docs`, `install`, `script`, `vendor`, `plugin_info`.
- `resource(s)` and `data` are not affected, but we encourage you to use `data` for any custom.
- Files whose names begin with `custom` are also not affected.

If you want to make a change before cleaning you can use `pre_install`.php` (in plugin_info).
See [](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### GitHub liaison market

Github name change for access to your private repos.

You must now use jeedom-market instead of zoic.

### The documentation

The documentation site has also changed its appearance.

Now links go directly to your documentation.

### The translation

We are currently developing a new translation tool. We are currently testing it internally and will get back to you soon to offer to integrate your plugins into it.