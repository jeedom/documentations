## Development environment

Here we will see how to set up an efficient development environment between a test Pi and a Windows PC for editing code and maintaining the GitHub repository.

This page concerns the Jeedom Core but this method can be used for the development of plugins.

Of course, for quick edits of a few files, you can use the file editor directly on Jeedom. But this quickly becomes tedious and you then have to transfer all the modifications to the local repository or directly to GitHub. This is not the most practical.

### Principe

- Set up a test Pi with Jeedom and a Samba share to access it from the PC.
- Duplicate the repository locally with **Sublime Merge**.
- Implement **Sublime Text** for editing code from the repository with synchronization on the test Pi.

**Sublime Merge** and **Sublime Text** are certainly paid (a low price with 3 years of updates), but are very light, fast, easily customizable and very complete without requiring lots of plugins/packages. Also if you don't take a license you can use them normally, you will just get a little popup every now and then with a button *Cancel* !

This method is also possible with other tools, such as **Atom** (which will require some packages) and **GitHub Desktop**.

### Pi test / development

The first thing to do if you are developing Core functions or a plugin : Set up a test configuration. Indeed, we do not develop on a production configuration !

For the installation of Jeedom, the documentation is there : [Installation on Raspberry Pi](https://doc.jeedom.com/en_US/installation/rpi).

Warning, prefer an SSD to an SD card !

Once Jeedom is installed, install Samba, in SSH :

`sudo apt-get install samba -y`

Configure a password for www-data (the root of Jeedom) :

`sudo smbpasswd www-data` then enter your *Password*.

Edit the samba configuration :

`sudo nano / etc / samba / smb.conf`

Add :

````text
wins support = yes

[jeedomRoot]
path = / var / www / html
browsable = yes
writable = yes
force user = www-data
force group = www-data
read only = No
guest ok = Yes
````

Et redémarrez samba:

`sudo /etc/init.d/smbd restart`

Sous Windows, dans un explorateur de fichier, entrez l'adresse IP du Pi `\\192.168.x.x`

Faites un clic droit sur `jeedomRoot` puis `Connecter un lecteur réseau...`

Sous Windows, vous avez donc maintenant un Disque Réseau `jeedomRoot` !


### Mise en place du dépôt local

Pour dupliquer le dépôt en local and pouvoir travailler dessus, nous allons récupérer [Sublime Merge portable](https://www.sublimemerge.com/download).

Récupérer également [Sublime Text portable 64bit](https://www.sublimetext.com/3).

Décompressez les deux archives and placez les dans `C:\Program Files`.

Indiquez à **Sublime Merge** l'éditeur de fichiers :

{% include lightbox.html src="images/sbm_settings1.jpg" data="settings" title="Editeur de fichiers" imgstyle="width:450px;display: block;margin: 0 auto;" %}

Puis clonez le dépôt. Ici, si vous avez les droits sur le dépôt du Core, clonez le, sinon *forkez* le sur votre compte GitHub and clonez votre *fork*.

**File / Clone dépôt...**

{% include lightbox.html src="images/sbm_clonerepo.jpg" data="settings" title="Clone dépôt" imgstyle="width:450px;display: block;margin: 0 auto;" %}


### Mise en place de l'édition

Dans **Sublime Text**, *Project* / *Edit Project*, définissez le répertoire de votre dépôt :

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

Here, adding the path of the test Pi is not mandatory, but it is always practical.

So you can now, in **Sublime Text**, edit files from local repository directly. Changes to these files will appear in **Sublime Merge**, where you can commit all or part of each file or revert changes if they don't work.

Now, it remains to test these code changes on the test Jeedom.

For that, you can of course copy the modified files to your Pi using the samba share on your PC. Or not ! When you edit ten files in different places, it will quickly become painful !

We will therefore configure **Sublime Text** so that, when you save a file, it will copy it directly to the Pi !

Go to the directory `C:\ Program Files \ SublimeText3 \ Data \ Packages \ User` and create an `onSaveCopy.py` file. Edit it and, after modifying the correct paths, save the following code:

````py
import sublime, sublime_plugin, bone
from shutil import copyfile

gitHub_repoCore = "W:\\_ GitHub-Repos _ \\ JeedomCore"
rpi_root = "\\\\ 192.168.0.110 \\ jeedomRoot"

class EventListener (sublime_plugin.EventListener ):
  def on_post_save_async (self, view):
    fullPath = view.file_name()
    path, baseName = os.path.split (fullPath)
    if gitHub_repoCore in path:
      rpi_path = fullPath.replace (gitHub_repoCore, rpi_root)
      copyfile (fullPath, rpi_path)
````

Et voilà !

A chaque fois que vous sauvez un fichier, si celui-ci fait partie du dépôt local, **Sublime Text** va également le copier au bon endroit sur votre Pi. Ctrl-S, F5 sur le Pi and voilà ! Si tout est bon, stage/commit/push dans **Sublime Merge**.

Si vous annulez des modifications, en faisant un *Discard* dans **Sublime Merge**, pensez à faire un clic-droit, *Open in Editor*, and Ctrl-S pour le remettre sur le Pi.

Et bien sûr, attention quand vous mettez à jour le Pi, vous allez écraser les fichiers du Core que vous avez modifié.


Vous pouvez bien sûr suivre la même méthode pour mettre en place vos dépôt and synchronisation sur vos plugins.