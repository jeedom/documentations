## Core v4.0 | Plugin-Entwickler

### Deprecated

- Font Awesome 4 ist nicht mehr in den Core integriert und wurde durch Font Awesome 5 ersetzt [Migration](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### V4-Kompatibilität auf dem Markt

Version 3, die im November 2020 erscheinen soll, wird ein Migrationsmodul enthalten, das es Benutzern ermöglicht, von Version 3 auf Version 4 zu aktualisieren.

Während der Migrationsphase von v3 auf v4 werden auch Plugins ohne v4-Kompatibilität in ihre Informationen aufgenommen.JSON wird den Endbenutzer vor dem Update benachrichtigen.


Wenn Ihr Plugin mit Version 4 kompatibel ist, geben Sie dies bitte in den Informationen an.JSON-Datei Ihres Plugins.

Beispiel **info.json**: `"compatibility" : [„miniplus“, „smart“, „rpi“, „docker“, „diy“, „v4“],`

Sie können anhand eines Szenarios/Codeblocks testen, ob Ihre Plugins über die korrekten Kompatibilitätsinformationen verfügen:

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
    } anders {
      $scenario->setLog('All ' . $countPlugins . ' plugin developed by ' . $author . ' are Jeedom V4 compatible. Congratulations!');
    }
  } anders {
    $scenario->setLog('No plugin found for ' . $author);
  }
  {% endraw %}
  ~~~

</details>

### Anpassung von Plugins für Core v4

- Bereinigen Sie den Inline-Stil so weit wie möglich (siehe [Plugin-Vorlage](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
- Anzeige des Befehls „span“ : Klasse `state`
- Steuertaste : eine Klassenaktion
- Auf der Eingabegruppe:
  - Die Klasse `roundedLeft` wird dem ersten Element (z. B. einem Eingabefeld, einem Button usw.) zugewiesen)
    - Die Klasse `roundedRight` wird dem letzten Element (Eingabefeld, Schaltfläche usw.) zugewiesen)
- Im eqLogicThumbnailContainer-Div:
    - Alle Stile entfernen!
    - Füge den übergeordneten Div-Elementen eine Farbklasse hinzu:
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