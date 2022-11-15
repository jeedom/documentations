# Docker-Management-Plugin

# Description

Dieses Plugin ermöglicht es, Docker-Container direkt aus Jeedom zu installieren, zu verwalten und zu erstellen.

>**WICHTIG**
>
>Dieses Plugin soll keine dedizierte Software wie Portainer ersetzen, es dient nur dazu, einfache Befehle auszuführen und Docker zu verwalten, während es einfach bleibt.

# Configuration

Sobald die Abhängigkeiten installiert sind, müssen Sie „Docker 1“ lokal aktivieren (im Moment ist es möglich, die Verbindung zu einem entfernten Docker hinzuzufügen). Sie können den Cron auch für die Aktualisierungshäufigkeit konfigurieren. Wir empfehlen Ihnen, zu setzen ``*/5 * * * *``.

# Equipements

Wenn Sie bereits Docker auf Jeedom haben, können Sie auf die Schaltfläche "Synchronisieren" klicken, um die vorhandenen Docker abzurufen und die entsprechende Jeedom-Ausrüstung zu erstellen.

Sie können auch von Jeedom aus neue Docker erstellen. Erstellen Sie dazu einfach Jeedom-Ausrüstung.

## Allgemeine Einstellungen

- **Ausrüstungsname** : Name Ihrer Ausrüstung in Jeedom
- **Übergeordnetes Objekt** : Übergeordnetes Objekt der Ausrüstung
- **Kategorie** : Gerätekategorie
- **Aktivieren Sie** : das Gerät aktivieren oder nicht
- **Sichtbar** : macht die Ausrüstung auf dem Armaturenbrett sichtbar
- **Docker-Host** : Docker, der die Ausrüstung betreibt *(Im Moment ist nur das Zimmer verfügbar)*
- **Containername** : Wenn Sie die Erstellung über Jeedom durchlaufen, ist es wichtig, dass der Name des Containers derselbe ist wie der in ``docker compose`` Woher ``docker run`` Andernfalls kann der Docker-Container nicht an die Jeedom-Ausrüstung angeschlossen werden.
- **Rette die Reittiere** : teilt Jeedom mit, ob es die bereitgestellten Ordner des Docker-Containers speichern soll. Achten Sie darauf, die Option nicht bei allen Dockern zu aktivieren, insbesondere wenn diese groß sind.
- **Erstellungsmodus** : Kann beides sein ``Manuel``, ist ``Jeedom Docker run`` *(Erstellung mit einem Docker-Run-Befehl von Jeedom)*, ist ``Jeedom docker composer`` *(Erstellung mit einem Docker-Composer von Jeedom)*.
- **Erstellungsreihenfolge** : erscheint nur, wenn Sie sich im Modus befinden ``Jeedom Docker run``. Der Befehl zum Ausfüllen betrifft alles danach ``docker run``.
- **Docker komponiert** : erscheint nur, wenn Sie sich im Modus befinden ``Jeedom Docker komponiertr``. Sie müssen hier den Inhalt Ihrer angeben ``Docker komponiert``.

## Action

- **Speichern Sie den Docker** : Führen Sie ein Backup von Docker aus. Achtung Jeedom behält nur das letzte Backup *(gleichzeitig mit dem Jeedom-Backup wird automatisch ein Backup durchgeführt)*
- **Docker wiederherstellen** : ermöglicht es Ihnen, das letzte Docker-Backup wiederherzustellen
- **Backup herunterladen** : ermöglicht es Ihnen, das letzte Docker-Backup herunterzuladen
- **Backup senden** : ermöglicht es Ihnen, ein Backup von Docker * zu senden (wiederhergestellt von einem Jeedom-Backup in ``plugins/dockers/data/backup`` zum Beispiel)*
- **Docker-Logs** : Docker-Protokolle anzeigen

## Informations

Zeigt verschiedene Informationen zum Docker-Container an :

- ID
- Commande
- Erstellungsdatum
- Taille
- Host-zugeordnete Ports
- Netzwerke
- Montage
- Image

## Commandes

Hier haben Sie Zugriff auf die folgenden Befehle :

- **Zum Starten**
- **Halt**
- **Neustarten**
- **Neu erstellen** *(nur wenn die Schöpfung von Jeedom gemacht wurde)*
- **Löschen**
- **Zentralprozessor** : CPU-Last
- **Speicher** : Speicher laden
- **E/A-Eingang** : Festplatte schreiben
- **E/A-Ausgang** : Disk lesen
- **Netzwerke in** : Netzwerknutzung bei eingehender Verbindung
- **Netzwerke aus** : ausgehende Netzwerknutzung
- **Status** : Docker-Zustand


# Assistant

Sie haben die Möglichkeit, nach dem Anlegen eines Equipments, a anzurufen **Assistent** *(obere rechte Taste)* mit der Sie anhand einiger Fragen einen bestimmten Docker-Container generieren können. Die Liste wird im Laufe der Zeit erweitert, steht aber bereits für die Erstellung der folgenden Container zur Verfügung :

- **AdGuard-Startseite**
- **Geknotet**
- **Kammerwächter**
- **Drahtschutz** *(wg-easy)*

# Code

Auf der allgemeinen Seite des Plugins, das alle Docker-Geräte gruppiert, die Schaltfläche **Codiert** führt Sie direkt in ein Jeedom-Verzeichnis, das dafür vorgesehen ist, die Konfigurationsdateien Ihrer Docker bei Bedarf zu erhalten.
