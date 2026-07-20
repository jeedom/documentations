# Von Version migrieren (V3 → V4)

Lassen Sie uns gemeinsam die wichtigsten Aktionen herausfinden, die implementiert werden müssen, um unter den besten Bedingungen von der Version von Jeedom zu migrieren. Dieses Tutorial basiert auf dem konkreten Fall einer Migration von V3 zu V4.

## Jeedom Backup

Vor jedem Jeedom-Update ist es wichtig sicherzustellen, dass Sie die erforderlichen Vorkehrungen getroffen haben, um ein funktionsfähiges Hausautomationssystem bei Schwierigkeiten schnell wiederherstellen zu können.

### Backup-Erstellung

Wir werden zuerst die Sicherungsdatei Ihrer aktuellen Installation generieren.

Gehen wir zum **Gangmenü**, Klicken Sie oben in der Navigationsleiste links auf der Uhr auf das Untermenü **Sicherungen** um auf die zuzugreifen [Komponente, die Backups verwaltet](https://doc.jeedom.com/de_DE/core/3.3/backup):    
![backup menu](images/migrate-version01.png)

Um das Backup zu erstellen, klicken wir auf die grüne Schaltfläche **Start** im Abschnitt mit dem Titel **Sicherungen** :    
![launch backup](images/migrate-version02.png)

Bestätigen Sie die Nachricht, in der Sie um Bestätigung Ihres Wunsches gebeten werden, mit einem Jeedom-Backup fortzufahren, indem Sie auf die Schaltfläche klicken **In Ordnung** :    
![agree backup](images/migrate-version03.png)

Der Sicherungsprozess beginnt. Es kann einige Zeit dauern, Sie können den Fortschritt im benannten Fenster verfolgen **Information** :    
![backup logs](images/migrate-version04.png)

Wenn alles normal läuft, wird das Ende des Prozesses durch die Meldung angezeigt :      
``***************Fin de la sauvegarde de Jeedom*************** [END BACKUP SUCCESS]``

Die Sicherungsdatei wurde korrekt in Jeedom generiert.

### Backup herunterladen

Im aktuellen Status ist das zuvor generierte Backup nur von Jeedom aus zugänglich. Bei Schwierigkeiten während eines Updates ist Jeedom oder der Computer, auf dem es gehostet wird, möglicherweise nicht mehr verfügbar. Wir werden also sehen, wie die Sicherungsdatei auf einem Computer außerhalb von Jeedom wiederhergestellt wird.

Im Spiel **Lokale Backups**, Stellen Sie sicher, dass die im vorherigen Absatz erstellte Sicherung korrekt in die Zeile eingegeben wurde **Verfügbare Backups** durch Bestätigen mit dem Datum und der Uhrzeit, die im Dateinamen erscheinen. In diesem Fall können wir jetzt auf die grüne Schaltfläche klicken **Download** :    
![download backup](images/migrate-version05.png)

Die Sicherungsdatei wird dann auf Ihren Computer heruntergeladen. Behalten Sie sie genau bei, da sie zum Zeitpunkt der Sicherung eine Kopie Ihres gesamten Jeedom enthält.

## Einfaches Migrationstool

Nachdem wir die Sicherung unseres Jeedom gesichert haben, können wir das Upgrade ruhig fortsetzen.

Seit V3.3.In 54 wurde ein einfaches Migrationstool implementiert **Update Center**. Um darauf zuzugreifen, müssen Sie zu gehen **Gangmenü**, Klicken Sie oben in der Navigationsleiste links auf der Uhr auf das Untermenü **Update Center**.

Klicken Sie im Update Center auf die orangefarbene Schaltfläche mit dem Titel **Upgrade auf V4** um das modale Migrationsfenster zu öffnen :    
![migration button](images/migrate-version06.png)

### Voraussetzungen

Das Upgrade-Fenster analysiert das System und alle auf Ihrem Computer installierten Plugins aus dem Jeedom-Markt, um die mit V4 angekündigte Kompatibilität zu überprüfen. Es zerfällt in 2 Teile :

- Im oberen Teil werden einige Neuerungen vorgestellt, die in V4 zu entdecken sind. Ein Banner fasst die Kompatibilität der installierten Plugins zusammen :    
![migration modal up](images/migrate-version07.png)

>**Wichtig**
>
>Eine vorherige Migration zu einer Installation mit einer Umgebung ist nicht möglich ``Debian Stretch 9.X`` *(``Debian 8.X Jessie`` oder niedriger)*. Sie werden außerdem aufgefordert, alle Plugins zu entfernen, die als veraltet eingestuft wurden.

- Der untere Teil besteht aus einer Tabelle, in der alle installierten Plugins sowie ihre bestätigte Kompatibilität mit dieser neuen Version aufgeführt sind :    
![migration modal down](images/migrate-version08.png)

> **Wichtig**    
>
>Diese neue Version von Jeedom bringt große Änderungen mit sich. Infolgedessen werden Widgets von Drittanbietern und einige in V3 verwendete Designanpassungen möglicherweise nicht mehr wie gewünscht angezeigt oder reagieren nicht mehr und erfordern möglicherweise Ihr Eingreifen nach dem Wechsel zu V4.

### Aktualisierung

Nachdem wir alle wichtigen Informationen gelesen haben, die Sie vor dem Upgrade unseres Jeedom wissen müssen, können Sie die Migration starten, indem Sie auf die orangefarbene Schaltfläche klicken **Upgrade auf V4** oben rechts im modalen Fenster.

> **Wissen**   
>
>Die Schaltfläche **Upgrade auf V4** wird erst anklickbar, wenn das gesamte Fenster angezeigt wurde. Sie müssen daher sicherstellen, dass Sie zum Ende der Seite scrollen.

Ein Popup-Fenster wird geöffnet und zeigt an, dass vor der Migration automatisch eine vollständige Sicherung durchgeführt wird, damit wir bei Bedarf schnell und einfach zu V3 zurückkehren können.
Klicken Sie auf, um den Migrationsprozess zu starten **In Ordnung** :    
![migration agree](images/migrate-version09.png)

Anschließend wechseln Sie zu der Seite mit den Migrationsprotokollen, auf der zunächst die aktuelle Installation gesichert wird, bevor die Plugins und der Core aktualisiert werden.

> **Wichtig**    
>
>Abhängig von der Hardware, auf der Jeedom installiert ist, kann dieser Vorgang einige Minuten dauern. Es ist wichtig, den Migrationsprozess bis zum Ende laufen zu lassen.

Sobald der Migrationsvorgang abgeschlossen ist, wird oben auf dem Bildschirm ein grünes Banner mit der Meldung angezeigt ***Die Operation ist erfolgreich. Bitte machen Sie `F5` für die neuesten Nachrichten*** :    
![migration finish](images/migrate-version10.png)

Sie müssen also nur die Taste "F5" auf der Tastatur drücken *(oder aktualisieren Sie die Seite)* um den tatsächlichen Übergang zu V4 zu sehen. Es ist möglich, dass einige Plugins nach der Migration erneut aktualisiert werden müssen. Zögern Sie nicht, sie sofort zu aktualisieren.
