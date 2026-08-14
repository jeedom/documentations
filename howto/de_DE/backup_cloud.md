# Cloud-Backup

Sobald der Dienst erworben wurde, müssen Sie in Jeedom Folgendes tun:

- Gehen Sie in die Verwaltung des Geräts, dann auf die Registerkarte „Updates/Market“ und füllen Sie das Formular aus
  - [Cloud-Backup] Name: Name des Ordners, in dem die Jeedom-Backups gespeichert werden sollen (wenn Sie ein Jeedom haben, geben Sie einfach „jeedom“ ein, andernfalls legen Sie für jedes Jeedom einen eigenen Ordner an)
  - [Cloud-Backup] Passwort: Passwort zur Verschlüsselung des Backups. ACHTUNG: Wenn Sie es verlieren, gehen die Backups verloren; das Passwort lässt sich nicht wiederherstellen.
- Aktivieren Sie in der Verwaltung der Backups das Kontrollkästchen „Backups senden“ unter „Market-Backups“.

>**HINWEIS**
>
>Sie können die Jeedom-Backup-Ordner direkt über Ihre Profilseite im Market einsehen: Klicken Sie auf den Reiter „Meine Dienste“ und dann auf „Konfiguration“ im Bereich „Cloud-Backup-Dienst“.

>**WICHTIG**
>
>Die maximale Speicherkapazität pro Market-Konto beträgt 2 GB. Bei Überschreitung dieser Grenze löscht das System die ältesten Sicherungsdateien, bis die Speicherbelegung unter 3 GB fällt (derzeit wird eine Überschreitung um 1 GB toleriert).

>**WICHTIG**
>
>Derzeit gibt es keine maximale Aufbewahrungsdauer, aber wir erwägen, Backups, die älter als 12 Monate sind, automatisch zu löschen.
