# Ein Plugin im Market veröffentlichen

## Voraussetzungen

- Als Entwickler im Market registriert sein, siehe [Plugin-Entwicklung > Entwicklerkonto](index#Compte%20développeur),
- Das Plugin auf GitHub hochgeladen haben *(privates oder öffentliches Repository)*.
- Stellen Sie Ihr Plugin im Forum im [**Entwicklermesse**, Kategorie **Plugin-Präsentation**](https://community.jeedom.com/c/developpeur-developpeurs/presentation-plugin/20){:target="_blank"}.

>**INFORMATION**
>
>Wenn Sie zwar als Entwickler im Market registriert sind, aber keine Schreibrechte im Entwicklerbereich des Forums haben, um einen Beitrag zu veröffentlichen, müssen Sie eine Supportanfrage stellen.

## Vorstellung des Plugins

Um einen Antrag auf Umstellung auf die stabile Version zu stellen, muss die Vorstellung des Plugins im Forum verfasst worden sein.

Wir empfehlen, diese Präsentation bereits bei der ersten Veröffentlichung in der Beta-Version oder sogar schon dann zu erstellen, sobald das Plugin über einen einfachen GitHub-Link funktionsfähig ist. Eine frühzeitige Präsentation des Plugins bietet nämlich mehrere Vorteile:
- um zu vermeiden, dass ein anderer Entwickler dasselbe Plugin anbietet,
- Hilfe bei der Planung erhalten,
- dem Jeedom-Team ermöglichen, zu erfahren, wozu das Plugin dient und wie es programmiert ist,
- seine Ideen und Anmerkungen mit denen der Nutzer abgleichen.

### Präsentationsformat

Jeder Entwickler kann selbst entscheiden, welche Informationen er bereitstellen möchte; offiziell sind nur die folgenden Felder erforderlich:
- **Name** und **ID**
- **Funktionsbeschreibung**
- **Verwendete Programmiersprachen** *(PHP, JavaScript, Python, Node.js, C usw.)*
- Verwendet es einen **Daemon**? **Abhängigkeiten**? **Cron-Jobs**? **Listener**?
- Verfügt es über ein **Panel** *(Dashboard und/oder mobile App)*?
- Ist es **kostenlos** oder **kostenpflichtig**?
- **GitHub-Link** *(sofern das Repository nicht privat ist)*
- **Link zur Dokumentation** *(falls verfügbar)*

### Stichwörter

Im Forum stehen verschiedene Tags zur Verfügung, mit denen Sie Ihr Plugin kategorisieren können:
- **dependance_intall**: Installiert Abhängigkeiten
- **Daemon**: Verwendet einen Daemon
- **Node.js** oder **Python**: Vom Daemon verwendete Programmiersprache
- **jsonrpc**: Verwendet die JSON-RPC-API von Jeedom
- **panel-dash**: Erstellt ein spezielles Dashboard
- **Beta** oder **Stable**: Status des Plugins
- **kostenlos** oder **kostenpflichtig**: Preisgestaltung des Plugins

Sobald das Plugin als stabil freigegeben wurde, muss ihm ein entsprechendes Label in der folgenden Form zugewiesen werden: `plugin-ID_PLUGIN` damit Sie die für Sie relevanten Themen leicht finden können. Sollte dieses Tag aus irgendeinem Grund noch nicht angelegt worden sein, können Sie ein Thema im Forum eröffnen oder eine Supportanfrage stellen.

## Veröffentlichung

Um ein neues Plugin zu veröffentlichen, müssen Sie sich mit Ihrem Entwicklerkonto im Market anmelden und dann auf das Menü **Market** und **Hinzufügen** klicken. Nun müssen Sie nur noch die Informationen zum Plugin eingeben:
- Allgemeines:
  - Preis
  - ID
  - Name

- Quelle des Repositories
  - Token *(ermöglicht den Zugriff auf private Repositories)*. Um ein Token zu erstellen, gehen Sie einfach auf diese Seite [GitHub-Seite](https://github.com/settings/tokens){:target="_blank"}, auswählen `token classic` oder `fine-grained`, `aucune expiration` und den entsprechenden Abschnitt ankreuzen `repo`
  - Benutzername des GitHub-Repositorys
  - Name des GitHub-Repositorys

Sobald Sie diese Informationen eingegeben haben, können Sie auf die Schaltfläche **BESTÄTIGEN** klicken. Wenn alles korrekt konfiguriert ist, sollte der Market eine erste Synchronisierung des Plugins durchführen. Anschließend müssen Sie nur noch die Plugin-Karte bearbeiten, um die verschiedenen Zweige einzutragen *(denken Sie daran, auf **BESTÄTIGEN** zu klicken, bevor Sie einen **TEST** durchführen)*:
  - **Beta**: `beta` zum Beispiel
  - **Stabil**: `master` zum Beispiel

>**INFORMATION**
>
>Standardmäßig ist Ihr Plugin-Autorname Ihre Market-ID. Um diesen zu ändern, rufen Sie Ihr **Profil** im Market auf und füllen Sie das Feld **Autor** im Bereich **Für Entwickler** aus.

### Synchronisierung

Alle Plugins werden täglich ab 1 Uhr morgens automatisch mit dem Market synchronisiert. Es ist auch möglich, eine manuelle Synchronisierung eines bestimmten Zweigs durchzuführen, indem Sie auf die Schaltfläche **GitHub Beta** oder **GitHub Stable** auf der Market-Seite des Plugins klicken.

Dieser Synchronisierungsschritt *(täglich automatisch oder manuell)* löst bei den Nutzern eine Benachrichtigung über ein Plugin-Update aus und sorgt für die Aktualisierung des Market-Eintrags.
