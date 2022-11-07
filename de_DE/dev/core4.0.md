## Core v4.0 | Plugin-Entwickler

### Deprecated

- Font-Awesome 4 ist nicht mehr in den Core integriert und wird durch Font-Awesome 5 ersetzt [Migration](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### V4-Kompatibilität auf dem Markt

Die Version 3, die im November 2020 veröffentlicht wird, verfügt über ein Migrationsmodul, mit dem Sie von Version 3 auf Version 4 wechseln können.

Während der Migrationsphase von v3 auf v4 werden Plugins ohne v4-Kompatibilität in ihren Informationen angezeigt.json benachrichtigt den Endbenutzer vor dem Update.


Wenn Ihr Plugin v4-kompatibel ist, geben Sie dies in den Informationen an.json von deinem Plugin.

Beispiel **info.json**: `"compatibility" : ["miniplus", "smart", "rpi", "docker", "diy", "v4"], `

Sie können anhand eines Szenario- / Codeblocks testen, ob Ihre Plugins die angegebene Kompatibilität aufweisen:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  ~~~ php
  {% raw %}
  // Autor der zu überprüfenden Plugins (Groß- und Kleinschreibung beachten)
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  foreach ($ pluginsArray als $ plugin) {
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
    } sonst {
      $scenario->setLog('All ' . $countPlugins . ' plugin developed by ' . $author . ' are Jeedom V4 compatible. Congratulations!');
    }
  } sonst {
    $scenario->setLog('No plugin found for ' . $author);
  }
  {% endraw %}
  ~~~

</details>

### Anpassung von Plugins für Core v4

- Reinigen Sie den Inline-Stil so weit wie möglich (vgl [Plugin Vorlage](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
- Anzeige des Bereichsbefehls : Klasse `Zustand`
- Steuertaste : eine Klasse "Aktion"
- Auf der Eingabegruppe:
  - Klasse `roundLeft` für das erste Element (eine Eingabe, eine Schaltfläche usw)
    - Klasse `roundRight` für das letzte Element (eine Eingabe, eine Schaltfläche usw)
- Auf dem eqLogicThumbnailContainer div:
    - Entfernen Sie alle Stile!
    - Fügen Sie in den übergeordneten Divs eine Farbklasse hinzu:
      - Logo Farben: `logoPrimary` und` logoSecondary`
        - Grün : `success`
        - bleu: `info`
        - orange: `warning`
        - Rot : `danger`
- Seien Sie vorsichtig mit Plugins mit Vorlagen: Das Aktualisierungssymbol hat sich geändert (font-awesome 5) :
- Achten Sie auf die Klasse der Tasten, Eingaben usw:
    - BTN : 32px hoch
    - btn-sm / input-sm : 28px hoch
    - btn-xs : 22px hoch
- Desktop / PHP / Pluginid-Datei.php : Objekt ersetzen::all () von jeeObject::all()

- Testen Sie die Plugins zu den drei 2019 Light / Dark / Legacy-Themen.

- Bilder in PNG mit Alpha, falls erforderlich, um unschöne weiße Quadrate im dunklen Thema zu vermeiden.

Am Ende müssen die Pluginseiten mit den Seiten der Kernobjekte / Szenarien / Interaktionen (Größen, Farben, Layouts usw.) übereinstimmen). Kein Stileffekt, aber Konsistenz.

> Anmerkung :
>
> Die Seitenleiste hat v4 nicht überlebt ! Um es zu ersetzen, steht auf den Registerkarten ein Kontextmenü für Szenarien, Objekte, Interaktionen und Plugins zur Verfügung.

> Updates :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. Dadurch wird vermieden, dass auf den Roboter gewartet wird, und das Update wird sofort verfügbar.

> Erinnern :
>
> Auf Plugin-Seiten angezeigte Bilder dürfen nicht aus dem Internet geladen werden, sondern müssen sich in den lokalen Plugin-Dateien befinden.

> Achtung :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! Es ist das gefährlichste und daher das am weitesten entfernte.


### Dateireiniger

Sowohl in Version 4 als auch in Version 3 werden Dateien automatisch bereinigt, die in Ihrem automatischen Plugin-Update nicht vorhanden sind.

Der Core löscht automatisch Dateien, die älter als 7 Tage sind und nicht aktualisiert wurden.

- Je nach Aktualisierung Ihres Plugins werden Dateien gelöscht, die älter als 7 Tage sind.
- Es betrifft nur Ordner> `3rdparty`,` 3rparty`, `desktop`,` mobile`, `core`,` docs`, `install`,` script`, `vendor`,` plugin_info`.
- "Ressource (n)" und "Daten" sind nicht betroffen, aber wir laden Sie ein, "Daten" für jeden benutzerdefinierten Benutzer zu verwenden.
- Dateien, deren Name mit "custom" beginnt, sind ebenfalls nicht betroffen.

Wenn Sie vor dem Reinigen eine Änderung vornehmen möchten, können Sie `pre_install verwenden.php` (in plugin_info).
Sehen [Plugin Vorlage](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### GitHub Link Markt

Änderung des Github-Namens für den Zugriff auf Ihre privaten Pausen.

Sie müssen jetzt Jeedom-Market anstelle von Zoics verwenden.

### Die Dokumentation

Die Dokumentationsseite hat auch ihr Aussehen geändert.

Verknüpft jetzt direkt mit Ihren Dokumentationen.

### Die Übersetzung

Wir sind dabei, ein neues Übersetzungswerkzeug zu entwickeln. Wir testen es derzeit intern und werden uns in Kürze bei Ihnen melden, um Ihnen vorzuschlagen, dass Sie Ihre Plugins darin integrieren.