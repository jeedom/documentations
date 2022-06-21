## Entwicklungsumgebung

Wir werden hier sehen, wie Sie eine effiziente Entwicklungsumgebung zwischen einem Test-Pi und einem Windows-PC für die Codebearbeitung und Wartung des GitHub-Repositorys einrichten.

Diese Seite betrifft Jeedom Core, aber diese Methode kann für die Plugin-Entwicklung verwendet werden.

Für schnelle Bearbeitungen einiger Dateien können Sie natürlich das Plugin verwenden **jeeExplorer** direkt auf Jeedom. Das ist aber schnell mühsam, und dann müssen Sie alle Änderungen in das lokale Repository oder direkt auf GitHub übertragen. Es ist nicht das praktischste.

### Principe

- Richten Sie einen Test-Pi mit Jeedom und einer Samba-Freigabe ein, um vom PC aus darauf zuzugreifen.
- Duplizieren Sie das Repository lokal mit **Erhabene Verschmelzung**.
- Implementieren **Erhabener Text** für die Bearbeitung des Repository-Codes mit Synchronisation auf dem Test-Pi.

**Erhabene Verschmelzung** und **Erhabener Text** zahlen sich sicherlich aus (ein niedriger Preis mit 3 Jahren Update), sind aber sehr leicht, schnell, leicht anpassbar und sehr vollständig, ohne dass viele Plugins / Pakete erforderlich sind. Auch wenn Sie keine Lizenz nehmen, können Sie sie normal verwenden, Sie haben nur von Zeit zu Zeit ein kleines Popup mit einer Schaltfläche *Absagen* !

Diese Methode ist auch mit anderen Tools möglich, wie z **Atom** (was einige Pakete erfordert) und **GitHub-Desktop**.

### Test-/Entwicklungs-Pi

Das erste, was Sie tun sollten, wenn Sie Core-Funktionen oder ein Plugin entwickeln : Bauen Sie einen Testaufbau auf. Tatsächlich entwickeln wir nicht auf einer Produktionskonfiguration !

Für die Installation von Jeedom ist das Doc da : [Installation auf RaspberryPi](https://doc.jeedom.com/de_DE/installation/rpi).

Achtung, lieber eine SSD als eine SD-Karte !

Sobald Jeedom installiert ist, installieren Sie Samba in SSH :

`sudo apt-get install samba -y`

Konfigurieren Sie ein Passwort für www-data (das Stammverzeichnis von Jeedom) :

`sudo smbpasswd www-data` dann geben Sie Ihre *Passwort*.

Bearbeiten Sie die Samba-Konfiguration :

`sudo nano /etc/samba/smb.conf`

Hinzufügen :

````text
gewinnt Unterstützung=ja

[jeedomRoot]
Pfad = /var/www/html
durchsuchbar = ja
beschreibbar=ja
user=www-data erzwingen
Forcegroup = www-Daten
Nur lesen = Nein
Gast ok = Ja
````

Et redémarrez samba:

`sudo /etc/init.d/smbd restart`

Sous Windows, dans un explorateur de fichier, entrez l'adresse IP du Pi `\\192.168.x.x`

Faites un clic droit sur `jeedomRoot` puis `Connecter un lecteur réseau...`

Sous Windows, vous avez donc maintenant un Disque Réseau `jeedomRoot` !


### Mise en place du repository local

Pour dupliquer le repository en local und pouvoir travailler dessus, nous allons récupérer [Erhabene Verschmelzung portable](https://www.sublimemerge.com/download).

Récupérer également [Erhabener Text portable 64bit](https://www.sublimetext.com/3).

Décompressez les deux archives und placez les dans `C:\Program Files`.

Indiquez à **Erhabene Verschmelzung** l'éditeur de fichiers :

{% include lightbox.html src="images/sbm_settings1.jpg" data="settings" title="Editeur de fichiers" imgstyle="width:450px;display: block;margin: 0 auto;" %}

Puis clonez le repository. Ici, si vous avez les droits sur le repository du Core, clonez le, sinon *forkez* le sur votre compte GitHub und clonez votre *fork*.

**File / Clone Repository ...**

{% include lightbox.html src="images/sbm_clonerepo.jpg" data="settings" title="Clone Repository" imgstyle="width:450px;display: block;margin: 0 auto;" %}


### Mise en place de l'édition

Dans **Erhabener Text**, *Project* / *Edit Project*, définissez le répertoire de votre repository :

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

Hier ist das Hinzufügen des Pfads des Test-Pi nicht obligatorisch, aber immer bequem.

Also kannst du jetzt rein **Erhabener Text**, lokale Repository-Dateien direkt bearbeiten. Änderungen an diesen Dateien werden in angezeigt **Erhabene Verschmelzung**, wo Sie alle oder einen Teil jeder Datei festschreiben oder die Änderungen rückgängig machen können, wenn das nicht funktioniert.

Nun bleibt es, diese Codeänderungen auf dem Test Jeedom zu testen.

Dazu können Sie die geänderten Dateien natürlich über die Samba-Freigabe auf Ihrem PC auf Ihren Pi kopieren. Oder nicht ! Wenn Sie ein Dutzend Dateien an verschiedenen Stellen ändern, wird es schnell schmerzhaft !

Wir werden daher konfigurieren **Erhabener Text** Wenn Sie also eine Datei speichern, wird sie direkt auf den Pi kopiert !

Wechseln Sie in das `C-Verzeichnis:\Program Files\SublimeText3\Data\Packages\User` und erstellen Sie eine Datei `onSaveCopy.py`. Bearbeiten Sie es und speichern Sie nach dem Ändern der richtigen Pfade den folgenden Code:

````py
sublime importieren, sublime_plugin, os
aus Shutil Import Copyfile

gitHub_repoCore = "W:\\_GitHub-Repos_\\JeedomCore"
rpi_root = "\\\\192.168.0.110\\jeedomRoot"

Klasse EventListener(sublime_plugin.Ereignis-Listener ):
  def on_post_save_async(self, view):
    fullPath = Ansicht.Dateiname()
    path, baseName = os.path.split(fullPath)
    wenn gitHub_repoCore im Pfad:
      rpi_path = vollständigerPfad.replace(gitHub_repoCore, rpi_root)
      copyfile(fullPath, rpi_path)
````

Et voilà !

A chaque fois que vous sauvez un fichier, si celui-ci fait partie du repository local, **Erhabener Text** va également le copier au bon endroit sur votre Pi. Ctrl-S, F5 sur le Pi und voilà ! Si tout est bon, stage/commit/push dans **Erhabene Verschmelzung**.

Si vous annulez des modifications, en faisant un *Discard* dans **Erhabene Verschmelzung**, pensez à faire un clic-droit, *Open in Editor*, und Ctrl-S pour le remettre sur le Pi.

Et bien sûr, attention quand vous mettez à jour le Pi, vous allez écraser les fichiers du Core que vous avez modifié.


Vous pouvez bien sûr suivre la même méthode pour mettre en place vos repository und synchronisation sur vos plugins.