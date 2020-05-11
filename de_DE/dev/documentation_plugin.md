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

Wir empfehlen, in Ihrem Plugin (auf github gehostet) einen Ordner zu erstellen und die Dateien und das Verzeichnis aus dem Ordner docs in das Vorlagen-Plugin zu kopieren (siehe [hier](https://github.com/jeedom/plugin-template/tree/master/docs) )

Sobald Sie fertig sind, haben Sie im Ordner docs einen Ordner fr_FR (der einzige, der geändert werden muss). In diesem Ordner empfehlen wir Ihnen, 2 Dateien zu erstellen : 

- Änderungsprotokoll.md => dein Changelog
- Index.md => Ihre Dokumentation

### Hochladen

Das Online-Gehen ist ganz einfach. Aktivieren Sie in Ihrem Github-Repository "Einstellungen" und im Teil "GitHub-Seiten" diese Option im Ordner "Hauptzweig / Dokumente" (wie durch den Wortlaut nur der Dateien in der Datei angegeben) Ordner / Dokumente des Hauptzweigs Ihres Plugins sind online). 

![doc-github](images/tutoDoc.png)

Github va ensuite vous fournir un lien de type "https://jeedom.github.io / plugin-template / "(nach ein paar Minuten sollten Sie Ihr Dokumentationslayout korrekt sehen).

Jetzt müssen Sie die Links Ihrer Dokumentation in die Info-Datei einfügen.json deines Plugins dafür ist es notwendig : 

- Hinzufügen #language#/ pour le lien vers la documentation, cela donne donc sur notre exemple "https://jeedom.github.io/plugin-template/#language#/"
- Hinzufügen #language#/ Changelog pour le lien vers votre changement, cela donne donc sur notre exemple "https://jeedom.github.io/plugin-template/#language#/ Changelog"

> **Notiz**
>
> Sie werden verstehen, wann der Benutzer nach Ihrem Jeedom-Dokument fragen wird oder der Markt automatisch ersetzt wird #language# durch die Sprache des Benutzers, um auf die richtige Sprache zu verweisen (wenn Ihre Dokumentation nicht in der Sprache des Benutzers verfügbar ist, kehrt diese automatisch zu Französisch zurück)

### Übersetzungsmanagement

Wenn Ihr Plugin wie oben beschrieben strukturiert ist, ist das Übersetzungsmanagement nicht nur automatisch, sondern auch sehr einfach einzurichten. Autorisieren Sie einfach den Benutzer github zoic21, Ihr Repository zu pushen / zu ziehen und auf den Markt zu bringen Klicken Sie auf der Editionsseite Ihres Plugins auf der Registerkarte Github auf "Aktivieren Sie die Generierung von Dokumentation und Übersetzung". Der Roboter fährt jeden Tag um 12 Uhr (mehr oder weniger 2 Stunden, abhängig von der Arbeitsbelastung), um die französische Dokumentation Ihres Plugins abzurufen, und das Changelog (Beta-Zweig) schiebt es auf Transiflex (Community-Übersetzungssystem), um die Nachrichten abzurufen Übersetzung und schieben Sie es auf Ihr Github-Repository in den richtigen Ordnern.


> **Wichtig**
>
> Damit der Übersetzungsverwaltungsteil automatisch funktioniert, muss Ihr Plugin auf Github gehostet werden

> **Notiz**
>
> Beachten Sie, dass einmal Ihre Info-Datei.json renseigné et pousser en version stable le site de documentation Jeedom (https://doc.jeedom.com) fügt automatisch Ihr Plugin hinzu.
