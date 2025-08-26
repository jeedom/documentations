## Kern v4.0 | Plugin-Entwickler

### Deprecated

- Font-awesome 4 ist nicht mehr in Core integriert, ersetzt durch Font-Awesome 5 [Migration](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### V4-Kompatibilität auf dem Markt

V3, das im November 2020 veröffentlicht wird, verfügt über ein Migrationsmodul, mit dem Sie von V3 auf V4 wechseln können.

Während der Migrationsphase von v3 auf v4 werden Plugins ohne v4-Kompatibilität in ihren Informationen.json benachrichtigt den Endbenutzer vor dem Update.


Wenn Ihr Plugin v4-kompatibel ist, geben Sie es in den Informationen an.JSON Ihres Plugins.

Beispiel **info.json**: `"compatibility" : [„miniplus“, „smart“, „rpi“, „docker“, „diy“, „v4“],`

Sie können anhand eines Szenarios/Codeblocks testen, ob Ihre Plugins die richtige Kompatibilität eingegeben haben:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  ~~~ php
  {% raw %}
  //Autor der zu prüfenden Plugins (Groß-/Kleinschreibung beachten))
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  foreach ($pluginsArray als $plugin) {
    wenn ($plugin['author'] == $author) {
      $countPlugins++;
    wenn ($plugin['hardwareCompatibility']['v4'] != '1') {
        $countIncompatibles++;
      $scenario->setLog('Plugin ' . $plugin['name'] . ' does not have v4 compatibility tag.');
    }
    }
  }
  wenn ($countPlugins > 0) {
    wenn ($countIncompatibles > 0) {
      $scenario->setLog($author . ' : ' . $countIncompatibles . ' potentially incompatible Jeedom V4 plugin on ' . $countPlugins . ' checked');
    } anders {
      $scenario->setLog('All ' . $countPlugins . ' plugin developed by ' . $author . ' are Jeedom V4 compatible. Congratulations!');
    }
  } anders {
    $scenario->setLog('No plugin found for ' . $author);
  }
  {% endraw %}
  ~~~

</details>

### Anpassen von Plugins für Core v4

- Bereinigen Sie Inline-Stile so weit wie möglich (siehe [Plugin-Vorlage](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
- Span-Befehlsanzeige : Klasse „Staat“
- Steuertaste : eine Sammelklage
- Zu Eingabegruppen:
  - Klasse „roundedLeft“ auf dem ersten Element (eine Eingabe, Schaltfläche usw)
    - Klasse „roundedRight“ auf dem letzten Element (eine Eingabe, Schaltfläche usw)
- Auf dem eqLogicThumbnailContainer-Div:
    - Alle Stile löschen!
    - Fügen Sie den übergeordneten Divs eine Farbklasse hinzu:
      - Logofarben: `logoPrimary` und `logoSecondary`
        - Grün : `success`
        - bleu: `info`
        - orange: `warning`
        - Rot : `danger`
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
 [Plugin-Vorlage](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### 

.

.

### 

.

.

### 

. .