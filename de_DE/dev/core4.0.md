## Core v4.0 | Plugin-Entwickler

### Deprecated

-  [](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### 

.

..


..

Beispiel ****: `"compatibility" : 

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
    } anders {
      $scenario->setLog('All ' . $countPlugins . ' plugin developed by ' . $author . ' are Jeedom V4 compatible. Congratulations!');
    }
  } anders {
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
- Achtung für Plugins mit Vorlagen: das Aktualisierungssymbol hat sich geändert (font-awesome 5) :
- Achten Sie auf die Klasse der Schaltflächen, Eingaben usw:
    - btn : 32px hoch
    - btn-sm / input-sm : 28px hoch
    - btn-xs : 22px hoch
- Desktop/PHP/Pluginid-Datei.php : Objekt ersetzen::all() von jeeObject::all()

- Testen von Plugins für die drei 2019-Themen Hell / Dunkel / Legacy.

- Bilder im PNG-Format mit Alpha, falls erforderlich, um unschöne weiße Quadrate im dunklen Design zu vermeiden.

Letztendlich müssen die Plugin-Seiten mit den Seiten der Kernobjekte/Szenarien/Interaktionen übereinstimmen (Größen, Farben, Layouts usw.)). Kein stilistischer Effekt, aber Konsequenz.

> Bemerkt :
>
> Die Seitenleiste hat Version 4 nicht überlebt ! Als Ersatz steht ein Kontextmenü auf den Registerkarten für Szenarien, Objekte, Interaktionen, Plugins zur Verfügung.

> Aktualisierungen :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. Dadurch müssen Sie nicht warten, bis der Roboter vorbeikommt, und das Update ist sofort verfügbar.

> Erinnerung :
>
> Auf Plugin-Seiten angezeigte Bilder sollten nicht aus dem Internet geladen werden, sondern sich in den lokalen Dateien des Plugins befinden.

> Aufmerksamkeit :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! Es ist das Gefährlichste und daher am weitesten entfernt.


### Dateireiniger

V4 und die neue v3 verfügen über eine automatische Bereinigung von Dateien, die bei Ihrem automatischen Plugin-Update nicht vorhanden sind.

Der Kern löscht automatisch Dateien, die älter als 7 Tage sind und nicht aktualisiert wurden.

- Es löscht Dateien, die älter als 7 Tage sind, abhängig von Ihrem Plugin-Update.
- Es betrifft nur Ordner > `3rdparty`, `3rparty`, `desktop`, `mobile`, `core`, `docs`, `install`, `script`, `vendor`, `plugin_info`.
- `resource(s)` und `data` sind nicht betroffen, aber wir empfehlen Ihnen, `data` für alle benutzerdefinierten.
- Dateien, deren Namen mit „custom“ beginnen, sind ebenfalls nicht betroffen.

Wenn Sie vor der Bereinigung eine Änderung vornehmen möchten, können Sie `pre_install` verwenden.php` (in plugin_info).
Sehen [](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### GitHub-Verbindungsmarkt

Github-Namensänderung für den Zugriff auf Ihre privaten Repos.

Sie müssen jetzt jeedom-market anstelle von zoic verwenden.

### Die Dokumentation

Auch die Dokumentationsseite hat ihr Erscheinungsbild verändert.

Jetzt führen Links direkt zu Ihrer Dokumentation.

### Die Übersetzung

Wir entwickeln derzeit ein neues Übersetzungstool. Wir testen es derzeit intern und werden uns in Kürze bei Ihnen melden, um Ihnen die Integration Ihrer Plugins anzubieten.