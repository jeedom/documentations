# Notification Manager-Plugin

Dieses Plugin wird zum Verwalten von Benachrichtigungen verwendet (Wiederherstellung im Fehlerfall, Generierung von Text usw.)...).

# Plugin Konfiguration

Nach dem Herunterladen des Plugins müssen Sie lediglich das Plugin aktivieren. Es ist keine weitere Konfiguration erforderlich.

# Gerätekonfiguration

## Equipement

Gerätekonfiguration **Benachrichtigungsmanager** ist über das Menü Plugins → Kommunikation zugänglich. Hier finden Sie die Konfiguration Ihrer Geräte :

- **Name des Benachrichtigers** : Name der Ausrüstung.
- **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.
- **Aktivieren** : macht Ihre Ausrüstung aktiv.
- **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar.

## Commande

Hier können Sie Benachrichtigungsbefehle hinzufügen. Für jeden Benachrichtigungsbefehl können Sie die zu verwendenden Nachrichtentypbefehle in der Reihenfolge ihrer Priorität definieren.

![Benachrichtigungsmanager présentation](./images/notifmanager1.png)

Sie haben Optionen :

- **Ausführungstest** : Ermöglicht das Hinzufügen eines Tests vor der Ausführung der Benachrichtigung. Wenn der Test falsch ist, tut das Plugin nichts. Wenn es wahr ist, führt es die Benachrichtigungen in der Reihenfolge ihrer Priorität aus, bis es eine funktionierende findet. Wenn das Feld leer ist, wird der Test ignoriert.

> **Notiz**
>
> Sie haben auch einen Test pro Bestellung in der Benachrichtigung.

> **Wichtig**
>
> Das Plugin unterstützt nicht das Umbenennen von Benachrichtigungsbefehlen. Wenn Sie den Namen eines Benachrichtigungsbefehls ändern möchten, müssen Sie zu allen Szenarien / Geräten wechseln, die ihn zum Aktualisieren verwenden


**Einfaches Beispiel**

*Sie können zuerst einen Befehl vom Typ Slack und dann einen Befehl vom Typ SMS eingeben. Wenn das Senden per Slack nicht funktioniert, wird die Nachricht per SMS gesendet.*

**Komplexeres Beispiel**

*Sie können zuerst einen Slack-Befehl und einen SMS-Befehl eingeben (im selben Feld, getrennt durch ``&&``), dann Mail. Das Plugin sendet die Nachricht zuerst per Slack und SMS. Wenn beide nicht funktionieren, sendet es die Benachrichtigung per E-Mail.*

# Texterzeugung

Das Plugin bietet auch die Möglichkeit der Texterzeugung, so dass die Nachrichten nicht immer identisch sind. Das System ist das gleiche wie für Interaktionen :

- ``[Coucou|Salut] ca va ?`` wird entweder zurückkehren "*Hallo, wie geht es dir ?*" oder  "*Hallo, wie geht es dir ?*"

# Bedingter Text

Es ist auch möglich, bedingten Text in das Formular einzufügen ``{(test) ? vrai : faux}``.

> **Wichtig**
>
> Es ist unbedingt erforderlich, den Test (die Bedingung) in Klammern zu setzen.

Hier ist ein Beispiel für das Morgenwetter mit bedingtem Text und Texterzeugung :

``[Bonjour|Salut|Coucou] [j'espères que tu as bien dormi ?|bien dormi ?|ça va ?]. [Aujourd'hui il fera|Aujourd'hui le temps sera|La météo annonce] #[Maison][Météo][Condition]# [et la température sera de|avec] {(#[Maison][Météo][Température Max]# < 6) ? [oula il va faire froid|oula il caille]: } #[Maison][Météo][Température Max]# degrés.``

# FAQ

>**Verwaltet das Plugin fragen ?**
>
>Ja, das Plugin verwaltet die Anfrage.
