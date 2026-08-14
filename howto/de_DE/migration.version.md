# Versionswechsel (V3 → V4)

Lassen Sie uns gemeinsam die wichtigsten Schritte betrachten, die erforderlich sind, um unter optimalen Bedingungen eine Jeedom-Version zu aktualisieren. Dieses Tutorial basiert auf dem konkreten Fall einer Migration von Version 3 auf Version 4.

## Sicherung von Jeedom

Vor jedem Jeedom-Update ist es wichtig, sicherzustellen, dass die notwendigen Vorkehrungen getroffen wurden, um im Falle von Schwierigkeiten schnell wieder eine funktionsfähige Hausautomationsanlage herstellen zu können.

### Erstellung der Sicherung

Zunächst erstellen wir eine Sicherungsdatei Ihrer aktuellen Installation.

Gehen wir zum **Zahnrad-Menü**, das sich oben in der Navigationsleiste links neben der Uhr befindet, und klicken wir dann auf das Untermenü **Backups**, um zum [Komponente zur Verwaltung von Backups](/core/backup):
![Backup-Menü](../images/migrate-version01.png)

Um die Sicherung zu erstellen, klicken wir im Bereich **Sicherungen** auf die grüne Schaltfläche **Starten**:
![Sicherung starten](../images/migrate-version02.png)

Bestätigen Sie die Meldung, in der Sie gefragt werden, ob Sie eine Sicherung von Jeedom durchführen möchten, indem Sie auf die Schaltfläche **OK** klicken:
![Backup einrichten](../images/migrate-version03.png)

Der Sicherungsvorgang wird gestartet. Dies kann eine Weile dauern. Sie können den Fortschritt im Fenster „**Informationen**“ verfolgen:
![Sicherungsprotokolle](../images/migrate-version04.png)

Wenn alles normal verläuft, wird das Ende des Vorgangs durch folgende Meldung angezeigt:
``***************Fin de la sauvegarde de Jeedom*************** [END BACKUP SUCCESS]``

Die Sicherungsdatei wurde in Jeedom erfolgreich erstellt.

### Sicherung herunterladen

Derzeit ist die zuvor erstellte Sicherungsdatei nur über Jeedom zugänglich. Bei Problemen während eines Updates kann es jedoch vorkommen, dass Jeedom oder der Server, auf dem es gehostet wird, nicht mehr erreichbar sind. Wir werden daher nun sehen, wie man die Sicherungsdatei auf einem Computer außerhalb von Jeedom abrufen kann.

Im Abschnitt **Lokale Backups** muss sichergestellt werden, dass das im vorherigen Abschnitt erstellte Backup in der Zeile **Verfügbare Backups** korrekt aufgeführt ist. Überprüfen Sie dies anhand des Datums und der Uhrzeit, die im Dateinamen angezeigt werden. Ist dies der Fall, können wir nun auf die grüne Schaltfläche **Herunterladen** klicken:
![Sicherung herunterladen](../images/migrate-version05.png)

Die Sicherungsdatei wird nun auf Ihren Computer heruntergeladen. Bewahren Sie sie sorgfältig auf, da sie eine vollständige Kopie Ihres Jeedom-Systems zum Zeitpunkt der Sicherung enthält.

## Einfaches Migrationstool

Nachdem wir nun die Sicherung unseres Jeedom gesichert haben, können wir das Upgrade beruhigt durchführen.

Seit Version 3.3.54 wurde im **Update-Center** ein benutzerfreundliches Migrationstool implementiert. Um darauf zuzugreifen, klicken Sie auf das **Zahnrad-Menü** oben in der Navigationsleiste links neben der Uhr und wählen Sie dann im Untermenü den Eintrag **Update-Center** aus.

Sobald Sie sich im Update-Center befinden, klicken Sie auf die orangefarbene Schaltfläche mit der Bezeichnung **Auf V4 aktualisieren**, um das Modalfenster für die Migration zu öffnen:
![Migrationsschaltfläche](../images/migrate-version06.png)

### Voraussetzungen

Das Upgrade-Fenster analysiert das System und alle auf Ihrem Rechner über den Jeedom-Market installierten Plugins, um die angegebene Kompatibilität mit Version 4 zu überprüfen. Es gliedert sich in zwei Teile:

- Im oberen Bereich gibt es in Version 4 einige Neuerungen zu entdecken, darunter eine Leiste, die einen allgemeinen Überblick über die Kompatibilität der installierten Plugins bietet:
![Modal-Migration nach oben](../images/migrate-version07.png)

>**WICHTIG**
>
>Die Migration kann nicht auf einer Anlage durchgeführt werden, deren Umgebung älter ist als ``Debian Stretch 9.X`` *(``Debian 8.X Jessie`` oder niedriger)*. Außerdem werden Sie aufgefordert, eventuell als veraltet identifizierte Plugins zu entfernen.

- Der untere Teil besteht aus einer Tabelle, in der alle installierten Plugins sowie deren bestätigte oder nicht bestätigte Kompatibilität mit dieser neuen Version aufgeführt sind:
![Modal-Migration nach unten](../images/migrate-version08.png)

> **WICHTIG**
>
>Diese neue Version von Jeedom bringt wesentliche Änderungen mit sich. Daher kann es vorkommen, dass Widgets von Drittanbietern und bestimmte Designanpassungen, die in Version 3 verwendet wurden, nach dem Umstieg auf Version 4 nicht mehr wie gewünscht angezeigt werden oder reagieren und möglicherweise ein Eingreifen Ihrerseits erfordern.

### Upgrade

Nachdem wir nun alle wichtigen Informationen zur Kenntnis genommen haben, die vor dem Upgrade unseres Jeedom zu beachten sind, können wir die Migration starten, indem wir oben rechts im Modalfenster auf die orangefarbene Schaltfläche **Auf V4 aktualisieren** klicken.

> **WISSENSWERTES**
>
>Die Schaltfläche **Auf V4 aktualisieren** wird erst dann anklickbar, wenn das gesamte Fenster angezeigt wird. Sie müssen daher darauf achten, bis zum Ende der Seite zu scrollen.

Es öffnet sich ein Pop-up-Fenster, das uns darüber informiert, dass vor der Migration automatisch eine vollständige Sicherung durchgeführt wird, damit bei Bedarf schnell und einfach wieder auf Version 3 zurückgekehrt werden kann.
Um den Migrationsvorgang zu starten, klicken Sie auf **OK**:
![Migration vereinbart](../images/migrate-version09.png)

Sie werden nun auf die Seite mit den Migrationsprotokollen weitergeleitet, auf der zunächst eine Sicherung der aktuellen Installation durchgeführt wird, bevor die Plugins und der Core aktualisiert werden.

> **WICHTIG**
>
>Je nach der Hardware, auf der Jeedom installiert ist, kann dieser Vorgang mehrere Minuten dauern. Es ist äußerst wichtig, den Migrationsprozess bis zum Ende ablaufen zu lassen.

Sobald der Migrationsvorgang abgeschlossen ist, erscheint oben auf dem Bildschirm ein grüner Balken mit der Meldung ***Der Vorgang war erfolgreich. Bitte `F5` Um die neuesten Informationen zu erhalten***:
![Migration abgeschlossen](../images/migrate-version10.png)

Jetzt müssen Sie nur noch auf die Taste drücken `F5` Drücken Sie die Taste *(oder aktualisieren Sie die Seite)*, um zu überprüfen, ob der Wechsel zu V4 tatsächlich erfolgt ist. Es kann sein, dass einige Plugins nach der Migration erneut aktualisiert werden müssen. Zögern Sie nicht, diese sofort zu aktualisieren.
