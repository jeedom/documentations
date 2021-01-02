# Aktualisieren Sie die Debian-Umgebung eines Smart

Wir werden das Verfahren von detailliert beschreiben **Migration der Debian-Umgebung der Smart Box** Damit Sie sich vor dem Üben einen Überblick über die verschiedenen Schritte verschaffen können. Beachten Sie, dass alle Schritte im Verlauf der Migration auch auf dem Bildschirm erläutert werden.

## Voraussetzungen

Die Migration der Debian-Umgebung und des Smart-Kernels ist ein langer und komplexer Prozess. Daher müssen vor dem Start des Vorgangs einige wesentliche Voraussetzungen berücksichtigt werden.

Es ist insbesondere notwendig :

- Leistung **Bleiben Sie auf der Migrationsseite** während des gesamten Prozesses *(es dauert ungefähr 1h30)*,
- Bereiten Sie einen USB-Stick vor, der formatiert ist **FAT32** und haben **mehr als 8 GB freier Speicherplatz**,
- auf der sein **gleiches lokales Netzwerk** als die Smart-Box und greifen Sie von seiner **interne Adresse**.

>**Wichtig**
>
>Wie üblich wird dringend empfohlen, a **Letzte Sicherung** deines Jeedom vorher.

## Migration

### Migration einleiten

Sie haben die Möglichkeit, den Migrationsvorgang auf zwei Arten zu starten :

- Zum Menü gehen **Einstellungen → System → Image-Wiederherstellung** :
![Menu Restauration Image](images/migrateos-smart01.png)

- Durch die Einladung zum **Update Center** wenn nötig :
![Mettre à niveau centre de MAJ](images/migrateos-smart02.png)

### Stufe 1

Der erste Schritt bei der Migration besteht darin, die Hardware vorzubereiten und zu überprüfen. Die zuvor genannten Voraussetzungen werden von einem Popup-Fenster abgerufen und Sie werden aufgefordert, einen USB-Stick einzustecken *(in FAT32 formatiert)* mit mehr als 8 GB freiem Speicherplatz in der Smart Box.

![Insérer clé USB](images/migrateos-smart03.png)

Wenn die Voraussetzungen überprüft sind, können wir mit Schritt 2 fortfahren :

![Clé USB vérifiée](images/migrateos-smart04.png)

### Stufe 2

Im zweiten Schritt wird ein Backup Ihres Jeedom erstellt, von dem eine Kopie auf dem USB-Stick gespeichert wird. Diese Sicherung wird am Ende des Migrationsprozesses wiederhergestellt, wenn Sie dies wünschen. Bei Bedarf befindet sich die Sicherung in einem Verzeichnis mit dem Namen ``Backup`` auf dem USB-Stick.

Wir empfehlen weiterhin, dass Sie sicherstellen, dass ein aktuelles Jeedom-Backup an anderer Stelle verfügbar ist.

![Sauvegarde de Jeedom](images/migrateos-smart05.png)

Die Dauer der Sicherungsphase hängt von der Größe Ihrer Installation und den implementierten Remote-Sicherungsoptionen ab. Sie können den Prozess beschleunigen, indem Sie das Senden von Market- oder Samba-Backups im Voraus deaktivieren.

![Copie de la sauvegarde auf dem USB-Stick](images/migrateos-smart06.png)

### Stufe 3

Im dritten Schritt können Sie das Image mit der neuen Version der Debian-Umgebung herunterladen und nach dem Herunterladen die Gültigkeit überprüfen :

![Téléchargement de l'image](images/migrateos-smart07.png)

Dieser Schritt kann eine Weile dauern und hängt von der Geschwindigkeit Ihrer Internetverbindung sowie der Lese- / Schreibleistung des USB-Sticks ab :

![Vérification de l'image](images/migrateos-smart08.png)

### Schritt 4

Bei weitem der wichtigste Schritt, da es sich um die eigentliche Migration der Hardware handelt. Ziehen Sie in dieser Phase vor allem nicht den USB-Stick ab und unterbrechen Sie nicht die Stromversorgung des Smart !

![Migration de la Smart](images/migrateos-smart09.png)

Dieser Schritt dauert ungefähr 30 Minuten. Danach wird die Smart Box neu gestartet. Dieser erste Neustart wird wahrscheinlich einige Zeit dauern :

![Redémarrage de la Smart](images/migrateos-smart10.png)

### Abschluss der Migration

Am Ende des Migrationsprozesses befindet sich die Smart Box nun in einer aktuellen Umgebung, jedoch mit einer jungfräulichen Jeedom. Der Abschluss des Verfahrens besteht daher entweder darin, von einer Neuinstallation auszugehen oder die im ersten Schritt generierte Sicherung wiederherzustellen :

![Finalisation migration](images/migrateos-smart11.png)

Herzlichen Glückwunsch, Ihre Smart Box ist jetzt auf dem neuesten Stand und betriebsbereit !

## Häufig gestellte Fragen

>**Der Migrationsprozess findet korrekt statt, jedoch scheint nach dem Neustart der Box keine Änderung stattgefunden zu haben ?**
>
>Bitte wiederholen Sie den Vorgang mit einem anderen USB-Stick oder formatieren Sie Ihren USB-Stick vollständig neu *(indem Sie beispielsweise die Partitionstabelle mit GParted neu erstellen)*.
