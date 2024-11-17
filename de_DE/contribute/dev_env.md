## Entwicklungsumgebung

Hier erfahren Sie, wie Sie eine effiziente Entwicklungsumgebung zwischen einem Test-Pi und einem Windows-PC einrichten, um Code zu bearbeiten und das GitHub-Repository zu verwalten.

Diese Seite betrifft Jeedom Core, aber diese Methode kann für die Plugin-Entwicklung verwendet werden.

Für schnelle Bearbeitungen einiger Dateien können Sie natürlich den Dateieditor direkt auf Jeedom verwenden. Aber es wird schnell mühsam und man muss dann alle Änderungen an das lokale Repository oder direkt an GitHub melden. Dies ist nicht die praktischste.

### Principe

- Richten Sie einen Test-Pi mit Jeedom und einer Samba-Freigabe ein, um vom PC aus darauf zuzugreifen.
- Duplizieren Sie das Repository lokal mit **Erhabene Verschmelzung**.
- Implementieren **Erhabener Text** zum Bearbeiten von Code aus dem Repository mit Synchronisierung auf dem Test-Pi.

**Erhabene Verschmelzung** und **Erhabener Text** sind sicherlich kostenpflichtig (ein niedriger Preis mit 3 Jahren Aktualisierungszeit), sind aber sehr leicht, schnell, leicht anpassbar und sehr vollständig, ohne dass viele Plugins/Pakete erforderlich sind. Wenn Sie keine Lizenz erwerben, können Sie diese normal verwenden. Ab und zu wird nur ein kleines Popup mit einem Knopf angezeigt *Stornieren* !

Diese Methode ist auch mit anderen Werkzeugen möglich, wie z **Atom** (was einige Pakete erfordert) und **GitHub Desktop**.

### Pi Test / Entwicklung

Das erste, was Sie tun müssen, wenn Sie Kernfunktionen oder ein Plugin entwickeln : Richten Sie eine Testkonfiguration ein. In der Tat entwickeln wir keine Produktionskonfiguration !

Für die Installation von Jeedom ist die Dokumentation vorhanden : [Installation auf Raspberry Pi](https://doc.jeedom.com/de_DE/installation/rpi).

Achtung, ziehen Sie eine SSD einer SD-Karte vor !

Sobald Jeedom installiert ist, installieren Sie Samba in SSH :

`sudo apt-get install samba -y`

Konfigurieren Sie ein Passwort für www-Daten (die Wurzel von Jeedom) :

`sudo smbpasswd www-data` dann geben Sie Ihre *Kennwort*.

Bearbeiten Sie die Samba-Konfiguration :

`sudo nano / etc / samba / smb.conf`

Hinzufügen :

````text
gewinnt Unterstützung = ja

[jeedomRoot]
Pfad = / var / www / html
durchsuchbar = ja
beschreibbar = ja
Benutzer erzwingen = www-Daten
Kraftgruppe = www-Daten
schreibgeschützt = Nein
Gast ok = Ja
````

Et redémarrez samba:

`sudo /etc/init.d/smbd restart`

Sous Windows, dans un explorateur de fichier, entrez l'adresse IP du Pi `\\192.168.x.x`

Faites un clic droit sur `jeedomRoot` puis `Connecter un lecteur réseau...`

Sous Windows, vous avez donc maintenant un Disque Réseau `jeedomRoot` !


### Mise en place du dépôt local

Pour dupliquer le dépôt en local und pouvoir travailler dessus, nous allons récupérer [Erhabene Verschmelzung portable](https://www.sublimemerge.com/download).

Récupérer également [Erhabener Text portable 64bit](https://www.sublimetext.com/3).

Décompressez les deux archives und placez les dans `C:\Program Files`.

Indiquez à **Erhabene Verschmelzung** l'éditeur de fichiers :

{% include lightbox.html src="images/sbm_settings1.jpg" data="settings" title="Editeur de fichiers" imgstyle="width:450px;display: block;margin: 0 auto;" %}

Puis clonez le dépôt. Ici, si vous avez les droits sur le dépôt du Core, clonez le, sinon *forkez* le sur votre compte GitHub und clonez votre *fork*.

**File / Clone dépôt...**

{% include lightbox.html src="images/sbm_clonerepo.jpg" data="settings" title="Clone dépôt" imgstyle="width:450px;display: block;margin: 0 auto;" %}


### Mise en place de l'édition

Dans **Erhabener Text**, *Project* / *Edit Project*, définissez le répertoire de votre dépôt :

````json
{
  "folders":
  [
    {
      "name": "__GitHub Jeedom Core__",
      "path": "W:\\_ GitHub-Repos _ \\ JeedomCore"
    },
    {
      "name": "___Pi_JeedomAlpha___",
      "path": "\\\\192.168.0.110\\jeedomRoot"
    }
  ]
}
````

Dabei ist das Hinzufügen des Pfades des Test-Pi nicht zwingend, aber immer sinnvoll.

So können Sie jetzt in **Erhabener Text**, Bearbeiten Sie Dateien direkt aus dem lokalen Repository. Änderungen an diesen Dateien werden in angezeigt **Erhabene Verschmelzung**, Hier können Sie Commits für die gesamte Datei oder einen Teil davon vornehmen oder Änderungen rückgängig machen, wenn sie nicht funktionieren.

Jetzt müssen diese Codeänderungen noch auf dem Test Jeedom getestet werden.

Dazu können Sie natürlich die geänderten Dateien mit der Samba-Freigabe auf Ihrem PC auf Ihren Pi kopieren. Oder nicht ! Wenn Sie zehn Dateien an verschiedenen Stellen bearbeiten, wird dies schnell schmerzhaft !

Wir werden daher konfigurieren **Erhabener Text** Wenn Sie eine Datei speichern, wird sie direkt auf den Pi kopiert !

Gehen Sie in das Verzeichnis `C:\ Programme \ SublimeText3 \ Data \ Packages \ User` und erstellen Sie eine `onSaveCopy.py`-Datei. Bearbeiten Sie es und speichern Sie nach dem Ändern der richtigen Pfade den folgenden Code:

````py
Importieren Sie Sublime, Sublime_plugin, Bone
von Shutil Import Copyfile

gitHub_repoCore = "W:\\_ GitHub-Repos _ \\ JeedomCore"
rpi_root = "\\\\ 192.168.0.110 \\ jeedomRoot"

Klasse EventListener (sublime_plugin.EventListener ):
  def on_post_save_async (self, view):
    fullPath = view.file_name()
    Pfad, baseName = os.path.split (fullPath)
    if gitHub_repoCore im Pfad:
      rpi_path = fullPath.ersetzen (gitHub_repoCore, rpi_root)
      copyfile (fullPath, rpi_path)
````

Et voilà !

A chaque fois que vous sauvez un fichier, si celui-ci fait partie du dépôt local, **Erhabener Text** va également le copier au bon endroit sur votre Pi. Ctrl-S, F5 sur le Pi und voilà ! Si tout est bon, stage/commit/push dans **Erhabene Verschmelzung**.

Si vous annulez des modifications, en faisant un *Discard* dans **Erhabene Verschmelzung**, pensez à faire un clic-droit, *Open in Editor*, und Ctrl-S pour le remettre sur le Pi.

Et bien sûr, attention quand vous mettez à jour le Pi, vous allez écraser les fichiers du Core que vous avez modifié.


Vous pouvez bien sûr suivre la même méthode pour mettre en place vos dépôt und synchronisation sur vos plugins.