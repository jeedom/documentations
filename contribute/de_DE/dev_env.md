<!-- Unused for now -->
## Entwicklungsumgebung

Hier erfahren Sie, wie Sie eine effiziente Entwicklungsumgebung zwischen einem Test-Pi und einem Windows-PC einrichten, um Code zu bearbeiten und das GitHub-Repository zu verwalten.

Diese Seite bezieht sich auf den Jeedom-Core, aber diese Methode kann auch für die Entwicklung von Plugins verwendet werden.

Zugegeben, für schnelle Bearbeitungen einiger weniger Dateien kann man den Dateieditor direkt in Jeedom nutzen. Das wird jedoch schnell mühsam, und anschließend müssen alle Änderungen in das lokale Repository oder direkt auf GitHub übertragen werden. Das ist nicht gerade die praktischste Vorgehensweise.

### Prinzip

- Einrichten eines Test-Raspberry Pi mit Jeedom und einer Samba-Freigabe, um vom PC aus darauf zugreifen zu können.
- Das Repository lokal mit **Sublime Merge** duplizieren.
- **Sublime Text** für die Bearbeitung des Code-Repositorys mit Synchronisierung auf dem Test-Pi einrichten.

**Sublime Merge** und **Sublime Text** sind zwar kostenpflichtig (ein geringer Preis für 3 Jahre Updates), aber sehr ressourcenschonend, schnell, leicht anpassbar und sehr umfassend, ohne dass man jede Menge Plugins oder Pakete benötigt. Außerdem können Sie sie auch ohne Lizenz ganz normal nutzen – es erscheint lediglich ab und zu ein kleines Popup-Fenster mit einer *Cancel*-Schaltfläche!

Diese Methode ist auch mit anderen Tools möglich, wie beispielsweise **Atom** (wofür einige Pakete erforderlich sind) und **GitHub Desktop**.

### Test- und Entwicklungs-Pi

Das Erste, was Sie tun sollten, wenn Sie Core-Funktionen oder ein Plugin entwickeln: Richten Sie eine Testumgebung ein. Denn man entwickelt nicht auf einer Produktionsumgebung!

Für die Installation von Jeedom finden Sie hier die Dokumentation: [Installation auf Raspberry Pi](/installation/rpi).

Achtung: Verwenden Sie lieber eine SSD als eine SD-Karte!

Sobald Jeedom installiert ist, installieren Sie Samba per SSH:

`sudo apt-get install samba -y`

Legen Sie ein Passwort für www-data (den Root-Benutzer von Jeedom) fest:

`sudo smbpasswd www-data` und geben Sie dann Ihr *Passwort* ein.

Bearbeiten Sie die Samba-Konfiguration:

`sudo nano /etc/samba/smb.conf`

Fügen Sie hinzu:

````text
wins support = yes

[jeedomRoot]
path = /var/www/html
browsable = yes
writable = yes
force user = www-data
force group = www-data
read only = No
guest ok = Yes
````

Und starten Sie Samba neu:

`sudo /etc/init.d/smbd restart`

Geben Sie unter Windows in einem Datei-Explorer die IP-Adresse des Pi ein `\\192.168.x.x`

Klicken Sie mit der rechten Maustaste auf `jeedomRoot` dann `Connecter un lecteur réseau...`

Unter Windows steht Ihnen nun also ein Netzlaufwerk zur Verfügung `jeedomRoot` !


### Einrichtung des lokalen Speichers

Um das Repository lokal zu duplizieren und daran arbeiten zu können, laden wir Folgendes herunter: [Sublime Merge (portable Version)](https://www.sublimemerge.com/download).

Ebenfalls abrufen [Sublime Text Portable 64-Bit](https://www.sublimetext.com/3).

Entpacken Sie die beiden Archive und legen Sie sie in `C:\Program Files`.

Geben Sie in **Sublime Merge** den Dateieditor an:

{% include lightbox.html src="../images/sbm_settings1.jpg" data="settings" title="Editeur de fichiers" imgstyle="width:450px;display: block;margin: 0 auto;" %}

Klonen Sie anschließend das Repository. Wenn Sie Zugriffsrechte auf das Core-Repository haben, klonen Sie es; andernfalls erstellen Sie einen *Fork* in Ihrem GitHub-Konto und klonen Sie Ihren *Fork*.

**Datei / Repository klonen...**

{% include lightbox.html src="../images/sbm_clonerepo.jpg" data="settings" title="Clone dépôt" imgstyle="width:450px;display: block;margin: 0 auto;" %}


### Einrichtung der Ausgabe

Legen Sie in **Sublime Text** unter *Project* / *Edit Project* das Verzeichnis Ihres Repositorys fest:

````json
{
  "folders":
  [
    {
      "name": "__GitHub Jeedom Core__",
      "path": "W:\\_GitHub-Repos_\\JeedomCore"
    },
    {
      "name": "___Pi_JeedomAlpha___",
      "path": "\\\\192.168.0.110\\jeedomRoot"
    }
  ]
}
````

Hier ist es nicht zwingend erforderlich, den Pfad des Test-Pi anzugeben, aber es ist immer praktisch.

Sie können nun also in **Sublime Text** die Dateien im lokalen Repository direkt bearbeiten. Die Änderungen an diesen Dateien werden in **Sublime Merge** angezeigt, wo Sie die gesamte Datei oder Teile davon committen oder die Änderungen rückgängig machen können, falls sie nicht funktionieren.

Nun müssen diese Codeänderungen noch auf dem Test-Jeedom getestet werden.

Dazu können Sie die geänderten Dateien natürlich über die Samba-Freigabe auf Ihrem PC auf Ihren Pi kopieren. Oder auch nicht! Wenn Sie etwa zehn Dateien an verschiedenen Orten ändern, wird das schnell mühsam!

Wir werden also **Sublime Text** so konfigurieren, dass beim Speichern einer Datei diese direkt auf den Pi kopiert wird!

Wechseln Sie in das Verzeichnis `C:\Program Files\SublimeText3\Data\Packages\User` und erstellen Sie eine Datei `onSaveCopy.py`. Bearbeiten Sie die Datei und speichern Sie den folgenden Code, nachdem Sie die entsprechenden Pfade angepasst haben:

````py
import sublime, sublime_plugin, os
from shutil import copyfile

gitHub_repoCore = "W:\\_GitHub-Repos_\\JeedomCore"
rpi_root = "\\\\192.168.0.110\\jeedomRoot"

class EventListener( sublime_plugin.EventListener ):
  def on_post_save_async(self, view):
    fullPath = view.file_name()
    path, baseName = os.path.split(fullPath)
    if gitHub_repoCore in path:
      rpi_path = fullPath.replace(gitHub_repoCore, rpi_root)
      copyfile(fullPath, rpi_path)
````

Das war’s!

Jedes Mal, wenn Sie eine Datei speichern, die Teil des lokalen Repositorys ist, kopiert **Sublime Text** diese auch an den richtigen Ort auf Ihrem Pi. Strg-S, F5 auf dem Pi und fertig! Wenn alles in Ordnung ist, stage/commit/push in **Sublime Merge**.

Wenn Sie Änderungen rückgängig machen, indem Sie in **Sublime Merge** auf *Discard* klicken, denken Sie daran, mit der rechten Maustaste zu klicken, *Open in Editor* auszuwählen und Strg+S zu drücken, um die Datei wieder auf dem Pi zu speichern.

Und natürlich: Seien Sie vorsichtig, wenn Sie den Pi aktualisieren, denn dabei werden die von Ihnen geänderten Core-Dateien überschrieben.


Sie können natürlich dieselbe Vorgehensweise anwenden, um die Repos und die Synchronisierung für Ihre Plugins einzurichten.
