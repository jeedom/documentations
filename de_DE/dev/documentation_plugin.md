# So dokumentieren Sie ein Plugin

## Introduction

In dieser Dokumentation erfahren Sie, wie Sie Ihr Plugin dokumentieren.

## Principe

Das Prinzip ist sehr einfach. Die Plugin-Dokumentation muss ein einfacher Weblink sein, der in Ihrer Info-Datei angegeben wird.json (siehe das Detail [Hier](https://doc.jeedom.com/de_DE/dev/structure_info_json) ) im Dokumentationsfeld.

Beachten Sie, dass Sie auch ein Änderungsprotokollfeld haben, das genauso funktionieren muss wie das Dokumentationsfeld.

## Wie macht man ?

Wie oben gezeigt, müssen Sie nur in der Info-Datei angeben.json den http (s) Link zu Ihrer Dokumentation, so dass Sie frei auf der Präsentation, dem Host oder sogar dem Modus sind :

- ein Blog
- ein einfacher Webserver
- Github (einzige Methode, die wir hier sehen werden)

## Github

Am einfachsten für Ihre Dokumentation ist die Verwendung des Github-Seitensystems, das den Vorteil hat, dass es sehr einfach zu bedienen ist.

### Dokumentationssprache

Github unterstützt Asciidoc und Markedown (md) für Seiten, wir werden nur den Markdown hier sehen.

Wir werden nicht die vollständige Syntax des Markdowns beschreiben, andere Websites machen dies bereits sehr gut, einschließlich [dieses](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Emplacement

Wir empfehlen Ihnen, in Ihrem Plugin (auf github gehostet) einen Ordner zu erstellen und die Dateien und Verzeichnisse aus dem Ordner / docs in die Plugin-Vorlage zu kopieren (siehe [Hier](https://doc.jeedom.com/de_DE/dev/plugin_template) )

Sobald dies erledigt ist, haben Sie im Ordner / docs einen fr_FR-Ordner (der einzige, der geändert werden muss). In diesem Ordner empfehlen wir Ihnen, 2 Dateien zu erstellen :

- ``changelog.md`` => dein Changelog
- ``index.md`` => Ihre Dokumentation

### Online

Das Hochladen ist ganz einfach. Gehen Sie einfach zu Ihrem Github-Repository, dann zu "Einstellungen" und im Teil "GitHub-Seiten", um den Ordner "Master Branch / Docs" zu aktivieren (wie in der Beschriftung angegeben) Die Dateien im Ordner / docs des Hauptzweigs Ihres Plugins sind online).

![doc-github](images/tutoDoc.png)

Github wird Ihnen dann einen Link vom Typ zur Verfügung stellen ``https://jeedom.github.io/plugin-template/`` (Nach einigen Minuten sollten Sie Ihr Dokumentationslayout korrekt anzeigen).

Sie müssen nun die Links Ihrer Dokumentation in die Info-Datei einfügen.json deines Plugins dafür brauchst du :

- hinzufügen ``#language#/`` Für den Link zur Dokumentation gibt es also unser Beispiel ``https://jeedom.github.io/plugin-template/#language#/``
- hinzufügen ``#language#/changelog`` für den Link zu Ihrer Änderung, so gibt dies auf unserem Beispiel ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Hinweis**
>
> Wie Sie sehen können, wird Jeedom oder der Markt automatisch ersetzt, wenn der Benutzer nach Ihrem Dokument fragt #language# durch die Sprache des Benutzers, um auf die richtige Sprache zu verweisen (wenn Ihre Dokumentation nicht in der Sprache des Benutzers verfügbar ist, bezieht sich dies automatisch auf Französisch)
