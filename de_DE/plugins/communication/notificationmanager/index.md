# Notification Manager-Plugin

Mit diesem Plugin können Sie Benachrichtigungen verwalten (Wiederherstellung im Fehlerfall, Generierung von Text ...)

# Plugin Konfiguration

Nach dem Herunterladen des Plugins müssen Sie das Plugin lediglich aktivieren.

# Gerätekonfiguration

## Equipement

Auf die Konfiguration der Notification Manager-Geräte kann über das Menü Plugins und dann über Kommunikation zugegriffen werden. Hier finden Sie die Konfiguration Ihrer Geräte :

- Name des zu benachrichtigenden Geräts : Name der Ausrüstung
- Übergeordnetes Objekt : sein übergeordnetes Objekt
- Activer
- Visible

## Commande

Hier können Sie Benachrichtigungsbefehle hinzufügen. Nach dem Hinzufügen für jeden Befehl können Sie die zu verwendenden Nachrichtentypbefehle in der Reihenfolge ihrer Priorität definieren.

Sie haben Optionen :

- Ausführungstest : Ermöglicht das Hinzufügen eines Tests vor der Ausführung der Benachrichtigung. Wenn der Test falsch ist, führt das Plugin nichts aus. Wenn dies der Fall ist, werden die Benachrichtigungen in der Reihenfolge der Prioritäten ausgeführt, bis eine funktionierende gefunden wird. Wenn das Feld leer ist, wird der Test ignoriert.

> **Notiz**
>
> Sie haben auch einen Test pro Bestellung in der Benachrichtigung.


**Einfaches Beispiel**

Beispiel: Sie können zuerst einen Befehl vom Typ Slack und dann einen Befehl vom Typ SMS eingeben. Wenn das Senden per Slack nicht funktioniert, wird die Nachricht per SMS gesendet.

**Komplexeres Beispiel**

Beispiel: Sie können zuerst einen Slack-Befehl und einen SMS-Befehl (im selben durch && getrennten Feld) und dann eine E-Mail eingeben. Wenn Sie das Plugin verwenden, wird die Nachricht zuerst auf Slack und SMS gesendet. Wenn die beiden nicht funktionieren, wird sie per E-Mail gesendet.

# Texterzeugung

Das Plugin bietet auch die Möglichkeit der Texterzeugung, sodass die Nachrichten nicht immer gleich sind. Das System ist das gleiche wie für Interaktionen :

- [Hallo]|Hi] wie geht es dir ? => Wird entweder "Hallo, wie geht es dir?" oder "Hallo, wie geht es dir? ?"

# Bedingter Text

Sie können auch bedingten Text in das Formular {(Test) einfügen ? War : faux}.

> **Wichtig**
>
> Es ist unbedingt erforderlich, den Test (die Bedingung) in Klammern zu setzen

Hier ist ein Beispiel für das Morgenwetter mit bedingtem Text und Texterzeugung :

\ [Hallo \|Salut\.|Hi \] \ [Ich hoffe du hast gut geschlafen ?\.|gut geschlafen ?\.|wie geht es dir ?\.] . \ [Heute wird es sein \|Heute wird das Wetter sein|Wettervorhersage \] \#[Maison\.]\.[Météo\.]\.[Condition\.]\.# \ [und die Temperatur wird \ sein|mit \] {(\#\.[Maison\.]\.[Météo\.]\.[Température Max\.]\.# < 6) ? \ [oula es wird kalt sein \|oula es gerinnt \]: } \.#\.[Maison\.]\.[Météo\.]\.[Température Max\.]\.# Grad.

# FAQ

>**Verwaltet das Plugin fragen ?**
>
>Ja, das Plugin verwaltet die Anfrage.
