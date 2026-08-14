# Installation über die Befehlszeile

Die folgende Anleitung richtet sich an fortgeschrittene Benutzer und beschreibt die Installation von Jeedom auf einem Debian-Linux-Server.

>**INFORMATION**
>
>Falls Sie Fragen zur Installation von Debian haben, bietet das Jeedom-Team auch System-Images an, auf denen Debian und Jeedom bereits vorinstalliert sind. Weitere Informationen finden Sie unter [**die entsprechende Dokumentation**](/compatibility/#Images%20système%20officielles) Weitere Informationen finden Sie hier.

## Debian-Version

Jeedom ist eine Linux-Software, die für den optimalen Betrieb auf [ein Debian-Server-System](https://www.debian.org/){:target="_blank"}.

Denken Sie daran, zu überprüfen, ob [**Ihre Debian-Version wird von Jeedom unterstützt**](/compatibility/#Debian) bevor Sie mit der Installation beginnen.

## Manuelle Installation

>**WICHTIG**
>
>Jede Jeedom-Instanz sollte auf einem dedizierten Server ausgeführt werden. Aus diesem Grund können bei parallel gehosteten Diensten Nebenwirkungen auftreten. Aus dem gleichen Grund werden Debian-Desktop-Systeme nicht offiziell unterstützt.

### Ausführung

Um die Installation von Jeedom durchzuführen, müssen Sie sich über die für Ihre Situation am besten geeignete Methode *(SSH, Tastatur/Bildschirm, virtueller Bildschirm)* bei der Systemkonsole anmelden.

Sobald Sie sich mit einem Benutzer mit Administratorrechten beim System angemeldet haben `sudo`, geben Sie einfach diese 3 Befehle ein:

1. Installationsskript herunterladen:
    ```sh
    wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
    ```

2. Ausführungsrechte vergeben:
    ```sh
    chmod +x install.sh
    ```

3. Skript ausführen:
    ```sh
    sudo ./install.sh
    ```
>**INFORMATION**
>
>Wenn Sie als `root`, muss das Skript ausgeführt werden `./install.sh` ohne Steuerung `sudo` vorher.

### Optionen

>**WICHTIG**
>
>Dieser Abschnitt richtet sich an Nutzer mit entsprechenden Fachkenntnissen.

Das Jeedom-Installationsskript verfügt über verschiedene Optionen, mit denen sich jede Instanz individuell anpassen lässt:

- **Datenbank** (`-d`): Installiert die von Jeedom verwaltete Datenbank oder nicht *(`1` (Standard)*
- **Art der Installation** (`-i`): Legt die Art der Installation fest *(`standard` (Standard)*
- **Schritt** (`-s`): Führt einen bestimmten Schritt aus *(`0` (Standard)*
- **Version** (`-v`): Wählt einen Jeedom-Entwicklungszweig aus *(`master` (Standard)*
- **Installationsunterlagen** (`-w`): Verzeichnis, in dem Jeedom installiert werden soll *(`/var/www/html` (Standard)*

## Hardware-Kompatibilität

Eine nicht vollständige Liste der von Jeedom unterstützten Geräte finden Sie unter [Dokumentation **Kompatibilität**](/compatibility/#Matériels%20supportés)

## Erste Anmeldung

Die Dokumentation zur [**Erste Anmeldung**](/premiers-pas/#Première%20connexion) um nach der Installation auf die Jeedom-Benutzeroberfläche zuzugreifen.
