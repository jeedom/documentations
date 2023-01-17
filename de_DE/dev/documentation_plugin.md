# So erstellen Sie die Dokumentation eines Plugins

## Introduction

In dieser Dokumentation erfahren Sie, wie Sie die Dokumentation Ihres Plugins erstellen.

## Principe

Das Prinzip ist sehr einfach. Die Plugin-Dokumentation muss ein einfacher Weblink sein, der in Ihrer Info-Datei angegeben wird.json (siehe Details [hier](https://doc.jeedom.com/de_DE/dev/structure_info_json) ) im Dokumentationsfeld.

Beachten Sie, dass Sie auch ein Änderungsprotokollfeld haben, das genauso funktionieren muss wie das Dokumentationsfeld.

## Wie es geht ?

Wie oben gezeigt, müssen Sie nur in der Info-Datei angeben.json den http (s) Link zu Ihrer Dokumentation, so dass Sie frei auf der Präsentation, dem Host oder sogar dem Modus sind :

- ein Blog
- ein einfacher Webserver
- Github (einzige Methode, die wir hier sehen werden)

## Github

Der einfachste Weg für Ihre Dokumentation ist die Verwendung des Github-Seitensystems, das den Vorteil hat, dass es sehr einfach zu bedienen ist.

### Dokumentationssprache

Github unterstützt Asciidoc und Markedown (md) für Seiten, wir werden nur den Markdown hier sehen.

Wir werden Ihnen nicht die vollständige Markdown-Syntax beschreiben, andere Websites machen dies bereits sehr gut, einschließlich [dieser hier](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Emplacement

Wir empfehlen Ihnen, in Ihrem Plugin (auf github gehostet) einen Ordner zu erstellen und die Dateien und Verzeichnisse aus dem Ordner / docs in die Plugin-Vorlage zu kopieren (siehe [hier](https://doc.jeedom.com/de_DE/dev/plugin_template) )

Sobald Sie fertig sind, haben Sie im Ordner / docs einen fr_FR-Ordner (der einzige, der geändert werden muss). In diesem Ordner empfehlen wir Ihnen, 2 Dateien zu erstellen :

- ``changelog.md`` => dein Changelog
- ``index.md`` => Ihre Dokumentation

### Hochladen

Das Hochladen ist ziemlich einfach. Gehen Sie einfach zu Ihrem Github-Repository, dann zu "Einstellungen" und im Teil "GitHub-Seiten", um den Ordner "Ordner" Hauptzweig / Dokumente "zu aktivieren (wie in der Beschriftung angegeben) Die Dateien im Ordner / docs des Hauptzweigs Ihres Plugins sind online).

![doc-github](images/tutoDoc.png)

Github stellt Ihnen dann einen Typlink zur Verfügung ``https://jeedom.github.io/plugin-template/`` (Nach einigen Minuten sollten Sie Ihr Dokumentationslayout korrekt anzeigen).

Jetzt müssen Sie die Links Ihrer Dokumentation in die Info-Datei einfügen.json deines Plugins dafür ist es notwendig :

- Hinzufügen ``#language#/`` Für den Link zur Dokumentation geben wir hier unser Beispiel ``https://jeedom.github.io/plugin-template/#language#/``
- Hinzufügen ``#language#/changelog`` Für den Link zu Ihrer Änderung sehen Sie sich also unser Beispiel an ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Notiz**
>
> Wie Sie sehen können, wird Jeedom oder der Markt automatisch ersetzt, wenn der Benutzer nach Ihrem Dokument fragt #language# durch die Sprache des Benutzers, um auf die richtige Sprache zu verweisen (wenn Ihre Dokumentation nicht in der Sprache des Benutzers verfügbar ist, bezieht sich dies automatisch auf Französisch)
