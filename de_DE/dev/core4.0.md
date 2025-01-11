## Kern v4.0 | Plugin-Entwickler

### Deprecated

- Font-awesome 4 ist nicht mehr in Core integriert und wird durch Font-Awesome 5 ersetzt [Migration](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### V4-Kompatibilität auf dem Markt

Die Version 3, die im November 2020 veröffentlicht wird, verfügt über ein Migrationsmodul, mit dem Sie von V3 auf V4 wechseln können.

Während der Migrationsphase von v3 auf v4 sind Plugins ohne v4-Kompatibilität in ihren Informationen enthalten.json benachrichtigt den Endbenutzer vor dem Update.


Wenn Ihr Plugin v4-kompatibel ist, geben Sie es in den Informationen an.json von Ihrem Plugin.

Beispiel **info.json**: `"compatibility" : [„miniplus“, „smart“, „rpi“, „docker“, „diy“, „v4“],`

Sie können anhand eines Szenarios/Codeblocks testen, ob Ihre Plugins über die eingegebene Kompatibilität verfügen:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  ~~~ php
  {% raw %}
  //Autor der zu prüfenden Plugins (Groß- und Kleinschreibung beachten))
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  foreach ($pluginsArray als $plugin) {
    if ($plugin['author'] == $author) {
      $countPlugins++;
    if ($plugin['hardwareCompatibility']['v4'] != '1') {
        $countIncompatibles++;
      $scenario->setLog('Plugin ' . $plugin['name'] . ' does not have v4 compatibility tag.');
    }
    }
  }
  if ($countPlugins > 0) {
    if ($countInkompatibles > 0) {
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

### Anpassung der Plugins für Core v4

- Bereinigen Sie den Inline-Stil so weit wie möglich (siehe [Plugin-Vorlage](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
- Span-Befehlsanzeige : Klasse „Zustand“
- Steuertaste : eine Sammelaktion
- Auf Eingabegruppen:
  - Klasse „roundedLeft“ für das erste Element (eine Eingabe, eine Schaltfläche usw.))
    - Klasse „roundedRight“ für das letzte Element (eine Eingabe, eine Schaltfläche usw.))
- Auf dem eqLogicThumbnailContainer div:
    - Entfernen Sie alle Stile!
    - Fügen Sie in den übergeordneten Divs eine Farbklasse hinzu:
      - Logofarben: „logoPrimary“ und „logoSecondary“
        - Grün : `success`
        - bleu: `info`
        - orange: `warning`
        - Rot : `danger`
- Seien Sie vorsichtig bei Plugins mit Vorlagen: Das Aktualisierungssymbol hat sich geändert (Font-awesome 5) :
- Achten Sie auf die Klassen der Schaltflächen, Eingaben usw:
    - btn : 32px hoch
    - btn-sm / input-sm : 28px hoch
    - btn-xs : 22px hoch
- Desktop/php/pluginid-Datei.php : Objekt ersetzen::all() von jeeObject::all()

- Testen Sie die Plugins zu den drei 2019-Themes Light / Dark / Legacy.

- PNG-Bilder bei Bedarf mit Alpha, um unansehnliche weiße Quadrate im dunklen Design zu vermeiden.

Letztendlich müssen die Plugin-Seiten mit den Seiten der Kernobjekte/Szenarien/Interaktionen (Größen, Farben, Layouts usw.) übereinstimmen). Kein Stileffekt, aber Konsistenz.

> Aufgefallen :
>
> Die Seitenleiste hat Version 4 nicht überlebt ! Als Ersatz steht auf den Reitern für Szenarien, Objekte, Interaktionen, Plugins ein Kontextmenü zur Verfügung.

> Aktualisierungen :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. Dadurch entfällt das Warten auf das Vorbeikommen des Roboters und das Update ist sofort verfügbar.

> Erinnerung :
>
> Auf Plugin-Seiten angezeigte Bilder sollten nicht aus dem Netz geladen werden, sondern sich in den lokalen Dateien des Plugins befinden.

> Aufmerksamkeit :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! Es ist das gefährlichste und daher am weitesten entfernte.


### Dateireiniger

V4 und neue v3 verfügen über eine automatische Bereinigung von Dateien, die bei Ihrem automatischen Plugin-Update nicht vorhanden sind.

Der Kern löscht automatisch Dateien, die älter als 7 Tage sind und kein Update erhalten haben.

- Abhängig von Ihrem Plugin-Update werden Dateien gelöscht, die älter als 7 Tage sind.
- Es betrifft nur Ordner > „3rdparty“, „3rparty“, „desktop“, „mobile“, „core“, „docs“, „install“, „script“, „vendor“, „plugin_info“.
- „Ressource(n)“ und „Daten“ sind nicht betroffen, wir laden Sie jedoch ein, „Daten“ für alle benutzerdefinierten Zwecke zu verwenden.
- Dateien, deren Name mit „custom“ beginnt, sind ebenfalls nicht betroffen.

Wenn Sie vor der Reinigung eine Änderung vornehmen möchten, können Sie „pre_install“ verwenden.php` (inplugin_info).
Sehen [Plugin-Vorlage](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### GitHub-Linkmarkt

Änderung des Github-Namens für den Zugriff auf Ihre privaten Repositories.

Sie müssen jetzt jeedom-market anstelle von zoic verwenden.

### Dokumentation

Auch die Dokumentationsseite hat ihr Erscheinungsbild geändert.

Jetzt führen Links direkt zu Ihrer Dokumentation.

### Übersetzung

Wir entwickeln derzeit ein neues Übersetzungstool. Wir testen es derzeit intern und werden uns in Kürze bei Ihnen melden, um Ihnen die Möglichkeit zu bieten, Ihre Plugins darin zu integrieren.