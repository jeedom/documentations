# Beitrag zur Dokumentation

Die Dokumentation von Jeedom ist auf dieser Seite durch mehrere Mechanismen zentralisiert. Wie der Kern von Jeedom ist die Dokumentation auf Github und Open-Source zugänglich.

Um an der Dokumentation teilnehmen zu können, müssen Sie daher über einen Account verfügen [GitHub](https://github.com/).

Natürlich können Sie jederzeit eine Nachricht hinterlassen [Forum](https://community.jeedom.com/), indem Sie das Tag „documentation-jeedom“ in Ihre Nachricht einfügen.

Diese ist in drei Kategorien unterteilt :

## Allgemeine Dokumentation

Allgemeine Dokumentationsseiten sind diejenigen, die nicht direkt aus dem Kern stammen.

Zum Beispiel :

- [Präsentation](https://doc.jeedom.com/de_DE/presentation/)
- [Konzepte](https://doc.jeedom.com/de_DE/concept/)
- [Beitrag zur Dokumentation](https://doc.jeedom.com/de_DE/contribute/doc)

Diese Seiten sind auf der verfügbar [Dokumentationsrepository](https://github.com/jeedom/documentations/tree/master/fr_FR)

Nach der URL auf der Dokumentationsseite finden Sie die entsprechende md-Datei. Beispiele :

- Präsentation -> https://github.com/jeedom/documentations/blob/master/de_DE/presentation/index.md
- Konzepte -> https://github.com/jeedom/documentations/blob/master/de_DE/concept/index.md
- Beitrag zur Dokumentation -> https://github.com/jeedom/documentations/blob/master/de_DE/contribute/doc.md

So können Sie PRs machen (*Pull-Requests*) auf diesen .md-Dateien.

Sie können in diesem Verzeichnis die Kernverzeichnisse, Plugins usw. sehen. Diese werden automatisch verwaltet, sodass Sie hier keine PRs erstellen müssen (lesen Sie mehr).


## Jeedom Core-Dokumentation

Die Core-Dokumentation befindet sich im Core-Repository im Verzeichnis doc : [https://github.com/jeedom/core/tree/alpha/docs/fr_FR](https://github.com/jeedom/core/tree/alpha/docs/fr_FR)

Für jede Seite von Jeedom haben Sie eine Seite.passende md.

Dies sind die Seiten, auf die über das (?) oben rechts auf der Benutzeroberfläche Ihres Jeedom zugegriffen werden kann und die sich in den Abschnitten befinden :

- Benutzerhandbuch
- Setup-Handbuch

So können Sie PRs machen (*Pull-Requests*) auf den Dateien .md, vorzugsweise auf dem Alpha-Zweig.


## Plugin-Dokumentation

Nach dem gleichen Prinzip wie die Core-Dokumentation wird die der Plugins automatisch aus dem Plugin-Repository abgerufen.

Zum Beispiel für das OpenZWave-Plugin

- Accès à la doc ici : https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/
- Repository du plugin : https://github.com/jeedom/plugin-openzwave/blob/beta/docs/de_DE/index.md

Dort müssen Sie das Repository des betreffenden Plugins finden und dann in sein Verzeichnis doc/fr_FR gehen. Bei der Unterscheidung der [offizielle Plugins](https://github.com/jeedom) Plugins von Drittanbietern. Darüber hinaus sind kostenpflichtige Plugins (offiziell oder von Drittanbietern) nicht zugänglich, da auf privaten Repositories. In diesem Fall können Sie jederzeit eine Nachricht an die senden [Forum](https://community.jeedom.com/), mit dem document-jeedom- oder plugin-Tag.


## Die Übersetzungen

Die Übersetzungen sind in den anderen Sprachordnern vorhanden. Das Verzeichnis `docs/i18n/` enthält Dateien .json pro Sprache zum Übersetzen von Zeichenfolgen aus der Core-Schnittstelle selbst.

Diese werden automatisch von einem Jeedom-spezifischen Übersetzungssystem generiert. Es ist daher sinnlos, daran Änderungen vorzunehmen, da sie vom System überschrieben werden. Wenn Sie die Übersetzungen verbessern möchten, können Sie dies melden [Gemeinschaft](https://community.jeedom.com/). Wenn Sie eine der Sprachen von Jeedom beherrschen und weiter gehen möchten, können Sie den Zugriff auf das Übersetzungssystem anfordern, mit dem Sie alle Übersetzungen jeder Sprache der verschiedenen Versionen von Core und offiziellen Plugins korrigieren können : [wenden Sie sich an das Projektteam](mailto:contact@jeedom.com).

Im Code können Sie Zeichenfolgen angeben, die so übersetzt werden sollen :

Im php : `$myString = __('Mein zu übersetzender Satz', __FILE__);`

In js : „{% raw %}var myString = '{{Mein Satz, der übersetzt wird}}'{% endraw %}„

Das Übersetzungssystem kümmert sich dann um ihre Übersetzung und ihre Referenzierung in den json-Dateien (`docs/i18n/`) und der Kern um ihren Ersatz in der Schnittstelle.

Wenn Sie auf eine andere Dokumentationsseite verlinken möchten, können Sie `/fr_FR/contribute/doc` hinzufügen. Beim Übersetzen wird der fr_FR-Teil automatisch angepasst.


