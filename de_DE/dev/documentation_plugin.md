# So dokumentieren Sie ein Plugin

## Introduction

Wir werden in dieser Dokumentation sehen, wie Sie Ihr Plugin dokumentieren.

## Principe

Das Prinzip ist sehr einfach, die Dokumentation des Plugins muss als einfacher Weblink in Ihrer Infodatei angegeben werden.json (siehe detail [hier](https://doc.jeedom.com/de_DE/dev/structure_info_json) ) im Dokumentationsbereich.

Beachten Sie, dass Sie auch ein Changelog-Feld haben, das genauso funktionieren muss wie das Dokumentationsfeld.

## Wie macht man ?

Wie oben gesehen, müssen Sie nur in der Info-Datei angeben.json den http(s)-Link zu Ihrer Dokumentation, damit sind Sie frei in Bezug auf die Präsentation, den Host oder sogar den Modus :

- ein Blog
- ein einfacher Webserver
- github (einzige Methode, die wir hier sehen werden)

## Github

Der einfachste Weg für Ihre Dokumentation ist die Verwendung des github-Seitensystems, das den Vorteil hat, dass es sehr einfach zu bedienen ist.

### Dokumentationssprache

Github unterstützt asciidoc und markdown (md) für Seiten, hier sehen wir nur markdown.

Wir werden Ihnen nicht die vollständige Markdown-Syntax beschreiben, andere Websites machen dies bereits sehr gut, einschließlich [Dieses hier](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Emplacement

Wir empfehlen Ihnen, in Ihrem Plugin (gehostet auf github) einen Ordner zu erstellen und die Dateien und Verzeichnisse aus dem Ordner /docs in das Template-Plugin zu kopieren (siehe [hier](https://doc.jeedom.com/de_DE/dev/plugin_template) )

Sobald dies erledigt ist, haben Sie im Ordner /docs einen Ordner fr_FR (der einzige, der geändert werden muss). In diesem Ordner empfehlen wir Ihnen, 2 Dateien zu erstellen :

- ``changelog.md`` => Ihr Änderungsprotokoll
- ``index.md`` => Ihre Dokumente

### Online

Es online zu stellen ist ganz einfach, gehen Sie einfach zu Ihrem Github-Repository, dann zu "Einstellungen" und aktivieren Sie im Abschnitt "GitHub-Seiten" dasjenige auf "master branch /docs folder" (wie der Wortlaut schon sagt, nur Dateien im /docs-Ordner von Der Master-Branch deines Plugins wird online sein).

![doc-github](images/tutoDoc.png)

Github stellt Ihnen dann einen Link wie zur Verfügung ``https://jeedom.github.io/plugin-template/`` (Nach ein paar Minuten sollten Sie Ihre Dokumentation korrekt formatiert sehen, indem Sie sie durchgehen).

Jetzt müssen Sie die Links Ihrer Dokumentation in die Infodatei einfügen.json deines Plugins dafür benötigst du :

- hinzufügen ``#language#/`` für den Link zur Dokumentation, so gibt dies bei unserem Beispiel an ``https://jeedom.github.io/plugin-template/#language#/``
- hinzufügen ``#language#/changelog`` für den Link zu Ihrer Änderung, so gibt dies an unserem Beispiel ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Notiz**
>
> Sie werden verstehen, wenn der Benutzer nach Ihrem Dokument fragt, wird Jeedom oder der Markt automatisch ersetzt #language# durch die Sprache des Benutzers, um auf die richtige Sprache zu verweisen (wenn Ihre Dokumentation nicht in der Sprache des Benutzers verfügbar ist, wird sie automatisch auf Französisch zurückgesetzt)
