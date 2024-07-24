# Cloud-Backup

Sobald der Dienst gekauft wurde, ist es in jeedom notwendig : 

- Gehen Sie in die Verwaltung und dann auf die Registerkarte „Updates/Markt“ und füllen Sie das Formular aus
  - [Backup Cloud] Name : Name des Ordners, in dem die Jeedom-Backups abgelegt werden sollen (wenn Sie einen Jeedom haben, geben Sie einfach jeedom ein, andernfalls legen Sie einen Ordner von Jeedom ab)
  - [Backup Cloud] Passwort : Backup-Verschlüsselungskennwort. ACHTUNG: Wenn Sie es verlieren, gehen die Backups verloren. Es ist unmöglich, das Passwort wiederherzustellen
- Aktivieren Sie in der Backup-Verwaltung das Kontrollkästchen „Backups senden“ auf der Ebene „Backups-Markt“"

>**Notiz**
>
>Es ist möglich, die Jeedom-Sicherungsdateien direkt von Ihrer Profilseite auf dem Markt anzuzeigen, meine Dienste zu tabulieren und dann auf der Ebene des Cloud-Sicherungsdienstes zu konfigurieren

>**WICHTIG**
>
>Die maximale Speichergröße pro Marktkonto beträgt 2 GB. Darüber hinaus löscht das System die ältesten Backup-Dateien, bis sie unter 3 GB fallen (im Moment tolerieren wir 1 GB mehr)).

>**WICHTIG**
>
>Im Moment gibt es keine maximale Aufbewahrungsdauer, wir erwägen jedoch, Backups, die älter als 12 Monate sind, automatisch zu löschen.
