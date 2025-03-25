## Environnement de développement

Nous allons voir ici comment mettre en place un environnement de développement efficace entre un Pi de test et un PC sous Windows pour l'édition du code et la maintenance du dépôt GitHub.

Cette page concerne le Core de Jeedom mais cette méthode peut être utilisée pour le développement de plugins.

Certes, pour des éditions rapides de quelques fichiers, on peut utiliser l'éditeur de fichiers directement sur Jeedom. Mais c'est rapidement fastidieux et il faut ensuite reporter toutes les modifications sur le dépôt local ou directement sur GitHub. Ce n'est pas ce qu'il y a de plus pratique.

### Principe

- Mettre en place un Pi de test avec Jeedom et un partage Samba pour y accéder depuis le PC.
- Dupliquer le dépôt en local avec **Sublime Merge**.
- Mettre en place **Sublime Text** pour l'édition de code du dépôt avec synchronisation sur le Pi de test.

**Sublime Merge** et **Sublime Text** sont certes payants (un prix faible avec 3 ans de maj), mais sont très légers, rapides, facilement customisables et très complets sans nécessiter pleins de plugins/packages. De plus, si vous ne prenez pas de licence, vous pouvez les utiliser normalement, vous aurez juste un petit popup de temps en temps avec un bouton *Cancel* !

Cette méthode est également possible avec d'autres outils, comme **Atom** (qui nécessitera quelques packages) et **GitHub Desktop**.

### Pi de test / développement

La première chose à faire si vous développez des fonctions du Core ou un plugin : Mettre en place une configuration de test. En effet, on ne développe pas sur une configuration de production !

Pour l'installation de Jeedom, la doc est là : [Installation sur Raspberry Pi](../installation/rpi).

Attention, préférez un SSD à une carte SD !

Une fois Jeedom installé, installez Samba, en SSH :

`sudo apt-get install samba -y`

Configurez un mot de passe pour www-data (le root de Jeedom) :

`sudo smbpasswd www-data` puis entrez votre *password*.

Éditez la configuration de samba :

`sudo nano /etc/samba/smb.conf`

Ajoutez :

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

Et redémarrez samba:

`sudo /etc/init.d/smbd restart`

Sous Windows, dans un explorateur de fichier, entrez l'adresse IP du Pi `\\192.168.x.x`

Faites un clic droit sur `jeedomRoot` puis `Connecter un lecteur réseau...`

Sous Windows, vous avez donc maintenant un Disque Réseau `jeedomRoot` !


### Mise en place du dépôt local

Pour dupliquer le dépôt en local et pouvoir travailler dessus, nous allons récupérer [Sublime Merge portable](https://www.sublimemerge.com/download).

Récupérer également [Sublime Text portable 64bit](https://www.sublimetext.com/3).

Décompressez les deux archives et placez les dans `C:\Program Files`.

Indiquez à **Sublime Merge** l'éditeur de fichiers :

{% include lightbox.html src="images/sbm_settings1.jpg" data="settings" title="Editeur de fichiers" imgstyle="width:450px;display: block;margin: 0 auto;" %}

Puis clonez le dépôt. Ici, si vous avez les droits sur le dépôt du Core, clonez le, sinon *forkez* le sur votre compte GitHub et clonez votre *fork*.

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
      "path": "W:\\_GitHub-Repos_\\JeedomCore"
    },
    {
      "name": "___Pi_JeedomAlpha___",
      "path": "\\\\192.168.0.110\\jeedomRoot"
    }
  ]
}
````

Ici, ajouter le path du Pi de test n'est pas obligatoire, mais c'est toujours pratique.

Vous pouvez donc maintenant, dans **Sublime Text**, éditer directement les fichiers du dépôt local. Les modifications de ces fichiers apparaîtront dans **Sublime Merge**, où vous pourrez faire des commits de tout ou partie de chaque fichier ou annuler les modifications si elles ne fonctionnent pas.

Maintenant, il reste à tester ces modifications de code sur le Jeedom de test.

Pour ça, vous pouvez bien sûr copier les fichiers modifiés sur votre Pi grâce au partage samba sur votre PC. Ou pas ! Quand vous modifiez une dizaine de fichiers à différents endroits, ça va vite devenir pénible !

On va donc configurer **Sublime Text** pour que, quand on sauve un fichier, il le recopie directement sur le Pi !

Allez dans le répertoire `C:\Program Files\SublimeText3\Data\Packages\User` et créez un fichier `onSaveCopy.py`. Éditez le et, après avoir modifié les bon chemins, enregistrez le code suivant:

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

Et voilà !

A chaque fois que vous sauvez un fichier, si celui-ci fait partie du dépôt local, **Sublime Text** va également le copier au bon endroit sur votre Pi. Ctrl-S, F5 sur le Pi et voilà ! Si tout est bon, stage/commit/push dans **Sublime Merge**.

Si vous annulez des modifications, en faisant un *Discard* dans **Sublime Merge**, pensez à faire un clic-droit, *Open in Editor*, et Ctrl-S pour le remettre sur le Pi.

Et bien sûr, attention quand vous mettez à jour le Pi, vous allez écraser les fichiers du Core que vous avez modifié.


Vous pouvez bien sûr suivre la même méthode pour mettre en place vos dépôt et synchronisation sur vos plugins.