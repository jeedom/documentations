# So dokumentieren Sie ein Plugin

## Introduction

In dieser Dokumentation erfahren Sie, wie Sie Ihr Plugin dokumentieren.

## Principe

Das Prinzip ist sehr einfach: Die Plugin-Dokumentation muss ein einfacher Weblink sein, der in Ihrer Infodatei angezeigt wird.json (siehe Details [Hier](https://doc.jeedom.com/de_DE/dev/structure_info_json) ) im Dokumentationsbereich.

Beachten Sie, dass Sie auch über ein Änderungsprotokollfeld verfügen, das genauso funktionieren sollte wie das Dokumentationsfeld.

## Wie es geht ?

Wie oben gesehen, müssen Sie nur in der Infodatei angeben.json den http(s)-Link zu Ihrer Dokumentation, sodass Sie bei der Präsentation, dem Host oder sogar dem Modus frei sind :

- ein Blog
- ein einfacher Webserver
- Github (einzige Methode, die wir hier sehen werden)

## Github

Der einfachste Weg für Ihre Dokumentation ist die Verwendung des Github-Seitensystems, das den Vorteil hat, dass es sehr einfach zu verwenden ist.

### Dokumentationssprache

Github unterstützt asciidoc und markdown (md) für Seiten, wir werden hier nur markdown sehen.

Wir werden Ihnen nicht die vollständige Markdown-Syntax beschreiben, andere Websites machen sie bereits sehr gut [Dieses hier](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Emplacement

Wir empfehlen, dass Sie in Ihrem Plugin (gehostet auf Github) einen Ordner erstellen und die Dateien und Verzeichnisse aus dem Ordner /docs in die Plugin-Vorlage kopieren (siehe [Hier](https://doc.jeedom.com/de_DE/dev/plugin_template) )

Sobald dies erledigt ist, befindet sich im Ordner /docs ein fr_FR-Ordner (der einzige, der geändert werden muss)). Wir empfehlen Ihnen, in diesem Ordner zwei Dateien zu erstellen :

- ``changelog.md`` => Ihr Changelog
- ``index.md`` => Ihre Dokumentation

### Online

Das Hochladen ist ganz einfach. Gehen Sie einfach zu Ihrem Github-Repository, dann zu „Einstellungen“ und aktivieren Sie im Abschnitt „GitHub-Seiten“ den Eintrag „Master Branch /docs-Ordner“ (wie der Wortlaut schon sagt, nur die Dateien im /docs-Ordner von). Der Master-Zweig Ihres Plugins ist online).

![doc-github](images/tutoDoc.png)

Github stellt Ihnen dann einen Link zur Verfügung ``https://jeedom.github.io/plugin-template/`` (Wenn Sie nach ein paar Minuten darauf zugreifen, sollten Sie sehen, dass Ihre Dokumentation korrekt angeordnet ist).

Sie müssen nun die Links Ihrer Dokumentation in die Infodatei einfügen.json Ihres Plugins, hierfür benötigen Sie :

- hinzufügen ``#language#/`` Für den Link zur Dokumentation gibt es diesen daher auf unserem Beispiel ``https://jeedom.github.io/plugin-template/#language#/``
- hinzufügen ``#language#/changelog`` Den Link zu Deiner Änderung findest Du also in unserem Beispiel ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Notiz**
>
> Sie werden es verstanden haben, wenn der Benutzer nach Ihrem Dokument fragt, wird Jeedom oder der Markt automatisch ersetzt #language# durch die Sprache des Benutzers, um auf die richtige Sprache zu verweisen (wenn Ihre Dokumentation nicht in der Sprache des Benutzers verfügbar ist, wird sie automatisch auf Französisch verweisen)
