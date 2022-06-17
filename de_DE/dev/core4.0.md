## Kern v4.0 | Plugin-Entwickler

### Deprecated

- Font-Awesome 4 ist nicht mehr in den Core integriert, ersetzt durch Font-Awesome 5 [Migration](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### V4-Kompatibilität auf dem Markt

Die v3, die im November 2020 veröffentlicht wird, verfügt über ein Migrationsmodul, mit dem Sie von V3 auf V4 wechseln können.

Während der Migrationsphase von v3 zu v4 werden Plugins ohne v4-Kompatibilität in ihrer Info.json benachrichtigt den Endbenutzer vor dem Update.


Wenn Ihr Plugin v4-kompatibel ist, geben Sie dies in der Info an.json Ihres Plugins.

Beispiel **info.json**: `"compatibility" : ["miniplus","smart","rpi","docker","diy","v4"],`

Sie können von einem Szenario/Code-Block aus testen, ob Ihre Plugins die Kompatibilität mitgeteilt haben:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  ~~~ php
  {% raw %}
  //Autor der zu prüfenden Plugins (Groß-/Kleinschreibung beachten)
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  foreach ($pluginsArray als $plugin) {
    if ($plugin['author'] == $autor) {
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

- Bereinigen Sie die Inline-Stile so weit wie möglich (siehe [Plugin-Vorlage](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
- Span-Befehlsanzeige : Klasse "Zustand"
- Steuertaste : eine Sammelklage
- Auf den Input-Gruppen:
  - Klasse `roundedLeft` auf das erste Element (eine Eingabe, Schaltfläche etc)
    - Klasse `roundedRight` auf das letzte Element (eine Eingabe, Schaltfläche usw)
- Auf dem eqLogicThumbnailContainer div:
    - Löschen Sie alle Stile!
    - Fügen Sie in den übergeordneten Divs eine Farbklasse hinzu:
      - Logo-Farben: „logoPrimary“ und „logoSecondary“
        - grün : `success`
        - bleu: `info`
        - orange: `warning`
        - rot : `danger`
- Hüten Sie sich vor Plugins mit Vorlagen: Aktualisierungssymbol geändert (font-awesome 5) :
- Achten Sie auf die Klasse der Tasten, Eingaben usw:
    - btn : 32px hoch
    - btn-sm / Eingabe-sm : 28px hoch
    - btn-xs : 22px hoch
- Desktop/php/pluginid-Datei.php : Objekt ersetzen::all() von jeeObject::all()

- Testen Sie die Plugins zu den drei Themes 2019 Light / Dark / Legacy.

- Bilder im PNG-Format mit Alpha, falls erforderlich, um unansehnliche weiße Quadrate im dunklen Design zu vermeiden.

Am Ende müssen die Plugin-Seiten mit den Kernobjekten/Szenarien/Interaktionsseiten übereinstimmen (Größen, Farben, Layouts usw.)). Kein Style-Effekt, sondern Konstanz.

> Anmerkung :
>
> Die Seitenleiste hat v4 nicht überlebt ! Als Ersatz steht auf den Registerkarten für Szenarien, Objekte, Interaktionen, Plugins ein Kontextmenü zur Verfügung.

> Aktualisierung :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. Dies vermeidet das Warten auf das Passieren des Roboters und stellt das Update sofort zur Verfügung.

> Abrufen :
>
> Bilder, die auf Plugin-Seiten angezeigt werden, sollten nicht aus dem Netz geladen werden, sondern sich in den lokalen Dateien des Plugins befinden.

> Aufmerksamkeit :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! Es ist am gefährlichsten, also am weitesten.


### Dateireiniger

Sowohl v4 als auch das neue v3 verfügen über eine automatische Bereinigung von Dateien, die bei Ihrem automatischen Plugin-Update nicht vorhanden sind.

Der Core löscht automatisch Dateien, die älter als 7 Tage sind und kein Update erhalten haben.

- Es löscht Dateien, die laut Ihrem Plugin-Update älter als 7 Tage sind.
- Es betrifft nur Ordner > `3rdparty`, `3rparty`, `desktop`, `mobile`, `core`, `docs`, `install`, `script`, `vendor`, `plugin_info`.
- „Ressource(n)“ und „Daten“ sind davon nicht betroffen, aber wir laden Sie ein, „Daten“ für beliebige Zwecke zu verwenden.
- Dateien, die mit „custom“ beginnen, sind ebenfalls nicht betroffen.

Wenn Sie vor der Reinigung eine Änderung vornehmen möchten, können Sie `pre_install.php` (in plugin_info).
Sehen [Plugin-Vorlage](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### GitHub-Verbindungsmarkt

Änderung des Github-Namens für den Zugriff auf Ihre privaten Repos.

Es ist jetzt notwendig, jeedom-market anstelle von zoic zu verwenden.

### Die Dokumentation

Auch die Dokumentationsseite hat ihr Aussehen geändert.

Jetzt verweisen Links direkt auf Ihre Dokumentation.

### Die Übersetzung

Wir entwickeln ein neues Übersetzungstool. Wir testen es derzeit intern und werden uns bald bei Ihnen melden, um Ihnen vorzuschlagen, dass Sie Ihre Plugins darin integrieren.