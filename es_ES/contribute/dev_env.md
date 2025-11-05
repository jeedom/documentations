## 

.

.

. . .

### Principe

- .
-  ****.
-  **** .

****  **** .  ** !

 **** ( ****.

### 

 : .  !

 : [](https://doc.jeedom.com/es_ES/installation/rpi).

 !

 :



) :

 **.

 :



 :

````text


]







````

Et redémarrez samba:

`sudo /etc/init.d/smbd restart`

Sous Windows, dans un explorateur de fichier, entrez l'adresse IP du Pi `\\192.168.x.x`

Faites un clic droit sur `jeedomRoot` puis `Connecter un lecteur réseau...`

Sous Windows, vous avez donc maintenant un Disque Réseau `jeedomRoot` !


### Mise en place du dépôt local

Pour dupliquer le dépôt en local  pouvoir travailler dessus, nous allons récupérer [ portable](https://www.sublimemerge.com/download).

Récupérer également [ portable 64bit](https://www.sublimetext.com/3).

Décompressez les deux archives  placez les dans `C:\Program Files`.

Indiquez à **** l'éditeur de fichiers :

{% include lightbox.html src="images/sbm_settings1.jpg" data="settings" title="Editeur de fichiers" imgstyle="width:450px;display: block;margin: 0 auto;" %}

Puis clonez le dépôt. Ici, si vous avez les droits sur le dépôt du Core, clonez le, sinon *forkez* le sur votre compte GitHub  clonez votre *fork*.

**File / Clone dépôt...**

{% include lightbox.html src="images/sbm_clonerepo.jpg" data="settings" title="Clone dépôt" imgstyle="width:450px;display: block;margin: 0 auto;" %}


### Mise en place de l'édition

Dans ****, *Project* / *Edit Project*, définissez le répertoire de votre dépôt :

````json
{
  "folders":
  [
    {
      "name": "__GitHub Jeedom Core__",
      "path": "W:"
    },
    {
      "name": "___Pi_JeedomAlpha___",
      "path": "\\\\192.168.0.110\\jeedomRoot"
    }
  ]
}
````

.

 ****, .  ****, .

.

 !  !

 ****  !

:. :

````py



:"
"

. ):
  ):
    ()
    )
    :
      .)
      )
````

Et voilà !

A chaque fois que vous sauvez un fichier, si celui-ci fait partie du dépôt local, **** va également le copier au bon endroit sur votre Pi. Ctrl-S, F5 sur le Pi  voilà ! Si tout est bon, stage/commit/push dans ****.

Si vous annulez des modifications, en faisant un *Discard* dans ****, pensez à faire un clic-droit, *Open in Editor*,  Ctrl-S pour le remettre sur le Pi.

Et bien sûr, attention quand vous mettez à jour le Pi, vous allez écraser les fichiers du Core que vous avez modifié.


Vous pouvez bien sûr suivre la même méthode pour mettre en place vos dépôt  synchronisation sur vos plugins.