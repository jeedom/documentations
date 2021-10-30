# Docker-Management-Plugin

## Description

Mit diesem Plugin können Sie Docker direkt von Jeedom aus installieren und verwalten

>**WICHTIG**
>
>Dieses Plugin soll keine dedizierte Software vom Typ Portainer ersetzen, es ist nur dazu da, grundlegende Befehle zu starten und Docker (auf einfache Weise) zu verwalten

>**WICHTIG**
>
>Aufgrund der Voraussetzungen für die Installation von Docker ist es nicht mit jeder Hardware kompatibel (einschließlich der Smart). Damit es funktioniert, benötigen Sie unbedingt eine x86-64-, rpi-(3 oder 4)-Plattform oder eine Atlas-Box

## Configuration

Nachdem die Abhängigkeiten installiert wurden, müssen Sie "Docker 1" lokal aktivieren (im Moment ist es möglich, dass wir die Verbindung auf einem Remote-Docker hinzufügen). Sie können den Cron auch für die Aktualisierungshäufigkeit konfigurieren. Wir empfehlen Ihnen, zu setzen "*/ 5 * * * *"

## Equipement

Wenn Sie bereits Docker auf Jeedom haben, können Sie auf die Schaltfläche zum Synchronisieren klicken, die die vorhandenen Docker abruft und die entsprechende Jeedom-Ausrüstung erstellt.

Sie können auch einen neuen Docker von Jeedom erstellen, dafür müssen Sie nur Jeedom-Ausrüstung erstellen.

### Allgemeine Einstellungen

- Ausrüstungsname : Name Ihrer Ausrüstung in Jeedom
- Übergeordnetes Objekt : Übergeordnetes Objekt der Ausrüstung
- Kategorie : Gerätekategorie
- Aktivieren Sie : das Gerät aktivieren oder nicht
- Sichtbar : macht die Ausrüstung auf dem Armaturenbrett sichtbar
- Docker-Host : Docker, der die Ausrüstung betreibt (im Moment ist nur der lokale verfügbar))
- Containername : Containername im Docker. Es ist sehr wichtig, dass es mit dem Docker Compose oder Docker Run identisch ist, wenn Sie die Erstellung über Jeedom durchführen. Andernfalls kann der One-if Ihre Ausrüstung nicht an den Docker anhängen, den er erstellt
- Rette die Reittiere : sagt Jeedom, ob er die gemounteten Docker-Dateien speichern soll. Achten Sie darauf, es nicht auf allen Dockern zu aktivieren, insbesondere wenn sie groß sind
- Erstellungsmodus : Erstellungsmodus Dies kann entweder manuell oder "Jeedom Docker run" (Erstellung mit einem von Jeedom erstellten Docker-Run-Befehl), "Jeedom Docker Composer" (Erstellung mit einem von Jeedom erstellten Docker-Composer) sein)
- Erstellungsreihenfolge : erscheint nur, wenn Sie sich in "Jeedom Docker run" befinden, der Befehl, den Sie geben müssen, ist alles, was nach "docker run .""
- Docker komponiert : erscheint nur, wenn Sie sich in "Jeedom Docker Composer" befinden, müssen Sie Ihren komponierten Docker hier ablegen

### Action

- Speichern Sie den Docker : Starten Sie ein Docker-Backup, seien Sie vorsichtig, Jeedom behält nur das letzte Backup (ein Backup wird automatisch gleichzeitig mit dem Jeedom-Backup erstellt .))
- Docker wiederherstellen : ermöglicht es Ihnen, das letzte Docker-Backup wiederherzustellen
- Backup herunterladen : ermöglicht es Ihnen, das letzte Docker-Backup herunterzuladen
- Backup senden : ermöglicht es Ihnen, ein Docker-Backup zurückzugeben (z. B. von einem Jeedom-Backup in Plugins / Dockers / Daten / Backup wiederherstellen)
- Docker-Logs : Docker-Logs anzeigen

### Informations

Zeigt verschiedene Informationen zu Ihrem Docker an : 

- ID
- Commande
- Erstellungsdatum
- Taille
- Dem Host zugeordnete Ports
- Netzwerke
- Montage
- Image

## Commande

Hier haben Sie die folgenden Befehle : 

- Zum Starten
- Arreter
- Neustarten
- Recreer (nur verfügbar, wenn die Kreation von Jeedom . erstellt wurde))
- Supprimer
- Zentralprozessor : Docker-CPU-Auslastung
- Speicher : Docker-Speichernutzung
- E/A-Eingang : eingehende Festplattennutzung
- E/A-Ausgang : ausgehende Festplattennutzung
- Netzwerke in : eingehende Netzwerknutzung
- Netzwerke aus : ausgehende Netzwerknutzung
- Status : Docker-Zustand


## Assistant

Sie haben auch die Möglichkeit, nach der Erstellung eines Geräts einen Assistenten (oben rechts) anzurufen, der eine Art von Docker enthält (die Liste wird mit der Zeit wachsen) und Ihnen nur wenige Fragen stellen, um Ihren Docker in die Route einzufügen

## Code

Auf der Hauptseite des Plugins haben Sie auch einen Code-Button, der Sie direkt zu einem Jeedom-Verzeichnis führt. Hier raten wir Ihnen, die Konfigurationsdateien Ihres Dockers abzulegen (falls erforderlich).