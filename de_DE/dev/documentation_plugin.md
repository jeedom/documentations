# So erstellen Sie die Dokumentation eines Plugins

## Einführung

In dieser Dokumentation erfahren Sie, wie Sie die Dokumentation Ihres Plugins erstellen.

## Prinzip

Das Prinzip ist sehr einfach. Die Dokumentation des Plugins muss ein einfacher Weblink sein, der in Ihrer Info-Datei angegeben wird.json (siehe Details [hier](https://doc.jeedom.com/de_DE/dev/structure_info_json) ) im Dokumentationsfeld.

Beachten Sie, dass Sie auch ein Änderungsprotokollfeld haben, das genauso funktionieren sollte wie das Dokumentationsfeld.

## Wie es geht ?

Wie oben zu sehen, müssen Sie nur in der Info-Datei angeben.Wenn Sie den Link http (s) zu Ihrer Dokumentation verwenden, können Sie die Präsentation, den Host oder sogar den Modus frei nutzen :

- ein Blog
- ein einfacher Webserver
- Github (einzige Methode, die wir hier sehen werden)

## Github

Der einfachste Weg für Ihre Dokumentation ist die Verwendung des Github-Seitensystems, das den Vorteil hat, dass es sehr einfach zu bedienen ist.

### Dokumentationssprache

Github asciidoc und markierte (md) Unterstützung für Seiten, wir werden hier nur markierte sehen.

Wir werden Ihnen nicht die vollständige Markdown-Syntax beschreiben, andere Websites tun dies bereits sehr gut [dieser hier](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Lage

Wir empfehlen, in Ihrem Plugin (auf github gehostet) einen Ordner zu erstellen und die Dateien und das Verzeichnis aus dem Ordner docs in das Vorlagen-Plugin zu kopieren (siehe [hier](https://doc.jeedom.com/de_DE/dev/plugin_template) )

Sobald Sie fertig sind, haben Sie im Ordner docs einen Ordner fr_FR (der einzige, der geändert werden muss). In diesem Ordner empfehlen wir Ihnen, 2 Dateien zu erstellen :

- ``changelog.md`` => dein Changelog
- ``index.md`` => Ihre Dokumentation

### Hochladen

Das Online-Gehen ist ganz einfach. Aktivieren Sie in Ihrem Github-Repository "Einstellungen" und im Teil "GitHub-Seiten" diese Option im Ordner "Hauptzweig / Dokumente" (wie durch den Wortlaut nur der Dateien in der Datei angegeben) Ordner / Dokumente des Hauptzweigs Ihres Plugins sind online).

![doc-github](images/tutoDoc.png)

Github stellt Ihnen dann einen Typlink zur Verfügung ``https://jeedom.github.io/plugin-template/`` (Nach ein paar Minuten sollten Sie Ihr Dokumentationslayout korrekt sehen.).

Jetzt müssen Sie die Links Ihrer Dokumentation in die Info-Datei einfügen.json deines Plugins dafür ist es notwendig :

- Hinzufügen ``#language#/`` Für den Link zur Dokumentation geben wir hier unser Beispiel ``https://jeedom.github.io/plugin-template/#language#/``
- Hinzufügen ``#language#/changelog`` Für den Link zu Ihrer Änderung sehen Sie sich also unser Beispiel an ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Notiz**
>
> Sie werden verstehen, wann der Benutzer nach Ihrem Jeedom-Dokument fragen wird oder der Markt automatisch ersetzt wird #language# durch die Sprache des Benutzers, um auf die richtige Sprache zu verweisen (wenn Ihre Dokumentation nicht in der Sprache des Benutzers verfügbar ist, kehrt diese automatisch zu Französisch zurück)
