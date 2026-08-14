# Zur Dokumentation beitragen

Die Jeedom-Dokumentation ist auf dieser Website über verschiedene Mechanismen zentralisiert. Wie der Kern von Jeedom, [Die Dokumentation ist auf GitHub einsehbar](https://github.com/jeedom/documentations){:target="_blank"} und ist Open-Source *(MIT-Lizenz)*.

Diese lässt sich in drei große Kategorien unterteilen:
- [Allgemeine Dokumentation](#Documentation%20générale)
- [Die Dokumentation zum Jeedom-Core](#Documentation%20du%20core%20Jeedom)
- [Die Dokumentation zu den Plugins](#Documentation%20des%20plugins)

>**INFORMATION**
>
>Wenn Sie eine große Anzahl von Dateien überprüfen möchten, ist es ratsam, dies schrittweise *(beispielsweise nach Rubriken)* zu tun, anstatt zahlreiche Änderungen auf einmal einzureichen.

## Voraussetzungen

Um zur Dokumentation beizutragen, sollten Sie einige Voraussetzungen kennen und berücksichtigen:
- Zunächst einmal muss man über[ein Benutzerkonto auf GitHub](https://github.com/){:target="_blank"},
- Know-how [ein *Pull Request* auf GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request){:target="_blank"},
- Wissenswertes [die Sprache `Markdown`](https://fr.wikipedia.org/wiki/Markdown){:target="_blank"} wird zur Formatierung des Textes verwendet,
- Da die Übersetzungen aus dem Französischen erstellt werden, **müssen die Beiträge unbedingt auf Französisch eingereicht werden *(Ordner `fr_FR`)***,
- Da die Übersetzungen automatisch generiert werden, **dürfen an den Dateien keine Änderungen vorgenommen werden** `.translation_memory/*.json`**.

>**INFORMATION**
>
>Wenn Sie sich nicht wohl dabei fühlen, direkt in den Dokumentationsdateien Änderungen vorzunehmen, können Sie auch einen Beitrag leisten, indem Sie ein Thema erstellen unter [das Forum](https://community.jeedom.com/){:target="_blank"} mit dem Etikett `documentation-jeedom`.

## Allgemeine Dokumentation

Die Seiten mit der allgemeinen Dokumentation beziehen sich auf alle Abschnitte, mit Ausnahme derjenigen, die sich auf **Handbücher** *(Jeedom-Kern)* und **Plugins** beziehen. Die Dateien sind abrufbar unter [Einreichung der Unterlagen](https://github.com/jeedom/documentations/tree/master){:target="_blank"}.

Jede Seite der Dokumentationswebsite entspricht einer Datei `Markdown` *(\*.md)* auf GitHub, zum Beispiel:
- Diese Seite, **Zur Dokumentation beitragen** ([doc.jeedom.com/contribute/#LANG#/doc](/contribute/doc)) entspricht der Datei [contribute/fr_FR/doc.md](https://github.com/jeedom/documentations/blob/master/contribute/fr_FR/doc.md){:target="_blank"}.
- Die Seite **Kompatibilität** ([doc.jeedom.com/compatibility/#LANG#/](/compatibility)) entspricht der Datei [Kompatibilität/fr_FR/index.md](https://github.com/jeedom/documentations/blob/master/compatibility/fr_FR/index.md){:target="_blank"}.
- Die Seite **Installation auf dem Raspberry Pi** ([doc.jeedom.com/installation/#LANG#/rpi](/installation/rpi)) entspricht der Datei [Installation/fr_FR/rpi.md](https://github.com/jeedom/documentations/blob/master/installation/fr_FR/rpi.md){:target="_blank"}.
- Die Seite **Plugin-Entwicklung** ([doc.jeedom.com/dev/#LANG#/](/dev)) entspricht der Datei [dev/fr_FR/index.md](https://github.com/jeedom/documentations/blob/master/dev/fr_FR/index.md){:target="_blank"}.
- Und so weiter...

>**WICHTIG**
>
>Da die Dokumentationen für den Core und die Plugins aus deren eigenen Repositories generiert werden, können keine Beiträge in den Ordnern akzeptiert werden `core`, `plugins` und `plugins_contributor` *(siehe folgende Absätze)*. Die Dokumentation `PHPDoc` wird ebenfalls automatisch generiert und muss daher auch nicht manuell geändert werden.

## Jeedom-Core-Dokumentation

Die Dokumentation zum Jeedom-Core umfasst die Rubriken **Bedienungsanleitung** und **Konfigurationshandbuch**, die Sie durch Klicken auf die Schaltfläche ❔ oben rechts auf der Jeedom-Benutzeroberfläche aufrufen können. Die Dateien befinden sich unter [Das Core-Repository](https://github.com/jeedom/core/tree/develop/docs/fr_FR){:target="_blank"}, im Verzeichnis `docs/fr_FR`.

Jede Seite des Handbuchs entspricht einer Datei `Markdown` *(\*.md)* auf GitHub, zum Beispiel:
- **Bedienungsanleitung – Dashboard** ([doc.jeedom.com/core/#VERSION#/#LANG#/dashboard](/core/dashboard)) entspricht der Datei [docs/fr_FR/dashboard.md](https://github.com/jeedom/core/tree/develop/docs/fr_FR/dashboard.md){:target="_blank"}.
- **Bedienungsanleitung – Szenarien** ([doc.jeedom.com/core/#VERSION#/#LANG#/scenario](/core/scenario)) entspricht der Datei [docs/fr_FR/scenario.md](https://github.com/jeedom/core/tree/develop/docs/fr_FR/scenario.md){:target="_blank"}.
- **Konfigurationshandbuch – Erweiterte Anpassung** ([doc.jeedom.com/core/#VERSION#/#LANG#/custom](/core/custom)) entspricht der Datei [docs/fr_FR/custom.md](https://github.com/jeedom/core/tree/develop/docs/fr_FR/custom.md){:target="_blank"}.

>**WICHTIG**
>
>Beiträge müssen über den Zweig eingereicht werden `develop` vom Kern aus.

## Plugin-Dokumentation

Die Dokumentation zu den Plugins ist in die Rubriken **Offizielle Plugins** und **Plugins von Drittanbietern** unterteilt. Wie der Name schon sagt, werden die offiziellen Plugins vom Jeedom-Team entwickelt, während die Plugins von Drittanbietern das Werk externer und unabhängiger Entwickler sind.

Plugins von Drittanbietern erstellen ihre Dokumentations- und Changelog-Seiten selbst; die Jeedom-Dokumentationsseite listet diese Seiten auf und bietet einen direkten Link zu ihnen.

Die Dokumentation der offiziellen Plugins wird hingegen direkt aus deren GitHub-Repositories abgerufen.

>**INFORMATION**
>
>Einige Plugin-Repositorien sind nicht öffentlich zugänglich. In diesem Fall können Sie dennoch einen Beitrag leisten, indem Sie ein Thema erstellen unter [das Forum](https://community.jeedom.com/c/plugins/46){:target="_blank"} mit dem Etikett `documentation-jeedom` und die des Plugins.

Wie beim Core entspricht jede Dokumentationsseite eines offiziellen Plugins einer Datei `Markdown` *(\*.md)* auf GitHub. Nehmen wir **das ZwaveJS-Plugin** als Beispiel:
- **Dokumentation zum Z-Wave-JS-Plugin** ([doc.jeedom.com/plugins/automation%20protocol/zwavejs/beta/#LANG#/](/plugins/automation%20protocol/zwavejs/beta/)) entspricht der Datei [docs/fr_FR/index.md](https://github.com/jeedom/plugin-zwavejs/blob/beta/docs/fr_FR/index.md){:target="_blank"}.
- **Änderungsprotokoll des Z-Wave-JS-Plugins** ([doc.jeedom.com/plugins/automation%20protocol/zwavejs/beta/#LANG#/changelog](/plugins/automation%20protocol/zwavejs/beta/changelog)) entspricht der Datei [docs/fr_FR/changelog.md](https://github.com/jeedom/plugin-zwavejs/blob/beta/docs/fr_FR/changelog.md){:target="_blank"}.

>**WICHTIG**
>
>Beiträge müssen über den Zweig eingereicht werden `beta` Plugins in den allermeisten Fällen.
