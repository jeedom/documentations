# Beitrag zur Dokumentation

Die Jeedom-Dokumentation wird auf dieser Site durch verschiedene Mechanismen zentralisiert. Wie Jeedom's Core ist die Dokumentation auf Github zugänglich und Open-Source (MIT-Lizenz).

Um an der Dokumentation teilnehmen zu können, müssen Sie daher über ein Konto verfügen [Github](https://github.com/).

Natürlich können Sie jederzeit eine Nachricht auf der [Forum](https://community.jeedom.com/), indem Sie das Dokumentations-Jeedom-Tag in Ihre Nachricht einfügen.

Dies wird in drei Kategorien unterteilt :

## Allgemeine Dokumentation

Allgemeine Dokumentationsseiten sind solche, die nicht direkt vom Core stammen.

Zum Beispiel :

- [Präsentation](https://doc.jeedom.com/de_DE/presentation/)
- [Konzepte](https://doc.jeedom.com/de_DE/concept/)
- [Beitrag zur Dokumentation](https://doc.jeedom.com/de_DE/contribute/doc)

Diese Seiten finden Sie auf der [Einreichung der Dokumentation](https://github.com/jeedom/documentations/tree/master/fr_FR)

Wenn Sie der URL auf der Dokumentationsseite folgen, finden Sie die entsprechende MD-Datei. Beispiele :

- Präsentation -> https://github.com/jeedom/documentations/blob/master/de_DE/presentation/index.md
- Konzepte -> https://github.com/jeedom/documentations/blob/master/de_DE/concept/index.md
- Beitrag zur Dokumentation -> https://github.com/jeedom/documentations/blob/master/de_DE/contribute/doc.md

So können Sie PRs machen (*Anfragen ziehen*) auf diesen `.md`-Dateien.

In diesem Verzeichnis sehen Sie die Kernverzeichnisse, Plugins usw. Diese werden automatisch verwaltet, sodass hier keine PRs erforderlich sind (lesen Sie mehr).


## Jeedom Core-Dokumentation

Die Core-Dokumentation befindet sich im Core-Repository im Dokumentverzeichnis : [https://github.com/jeedom/core/tree/alpha/docs/fr_FR](https://github.com/jeedom/core/tree/alpha/docs/fr_FR)

Für jede Jeedom-Seite gibt es eine Seitendatei.md entsprechend.

Dies sind die Seiten, auf die über (?) Oben rechts auf der Oberfläche Ihres Jeedom zugegriffen werden kann und die sich in den Abschnitten befinden :

- Benutzerhandbuch
- Konfigurationshandbuch

So können Sie PRs machen (*Anfragen ziehen*) auf Dateien .md, vorzugsweise auf dem Alpha-Zweig.


## Plugins Dokumentation

Nach dem gleichen Prinzip wie die Core-Dokumentation werden die Plugins automatisch aus dem Plugin-Repository abgerufen.

Zum Beispiel für das OpenZWave-Plugin

- Accès à la doc ici : https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/
- dépôt du plugin : https://github.com/jeedom/plugin-openzwave/blob/beta/docs/de_DE/index.md

Dort müssen Sie das Repository des betreffenden Plugins finden und dann in dessen Verzeichnis doc/fr_FR gehen. Bei der Unterscheidung zwischen [offizielle Plugins](https://github.com/jeedom) Plugins von Drittanbietern. Darüber hinaus sind kostenpflichtige Plugins (offiziell oder von Drittanbietern) nicht zugänglich, da sie sich in privaten Repositories befinden. In diesem Fall können Sie jederzeit eine Nachricht auf der [Forum](https://community.jeedom.com/), mit dem Dokumentations-Jeedom-Tag oder dem Plugin.


## Die Übersetzungen

Die Übersetzungen sind in den anderen Sprachdateien vorhanden. Das Verzeichnis `docs / i18n /` enthält Dateien .json pro Sprache für die Übersetzung der Zeichenketten der Core-Schnittstelle selbst.

Diese werden automatisch von einem für Jeedom spezifischen Übersetzungssystem generiert. Es ist daher nicht erforderlich, Änderungen daran vorzunehmen, da diese vom System überschrieben werden. Wenn Sie die Übersetzungen verbessern möchten, können Sie darüber berichten [Gemeinschaft](https://community.jeedom.com/). Wenn Sie eine der Jeedom-Sprachen beherrschen und weiter gehen möchten, können Sie den Zugriff auf das Übersetzungssystem anfordern, mit dem Sie alle Übersetzungen jeder Sprache der verschiedenen Versionen des Core und der offiziellen Plugins korrigieren können : [Kontaktieren Sie das Projektteam](mailto:contact@jeedom.com).

Im Code können Sie Zeichenfolgen angeben, die wie folgt übersetzt werden sollen :

In php : `$ myString = __ ('Mein zu übersetzender Satz', __FILE __);`

Im JavaScript : ``{% raw %}var myString = '{{Mein Satz, der übersetzt wird}}'{% endraw %}``

Das Übersetzungssystem kümmert sich dann um deren Übersetzung und Referenzierung in den JSON-Dateien (`docs/i18n/`) und der Core kümmert sich um deren Ersetzung in der Schnittstelle.

Wenn Sie auf eine andere Dokumentationsseite verlinken möchten, können Sie "/ fr_FR / contrib / doc" hinzufügen. Bei der Übersetzung wird der Teil fr_FR automatisch angepasst.


