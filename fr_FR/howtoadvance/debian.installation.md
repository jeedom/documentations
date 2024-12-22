# Installation de debian

Nous allons voir ici comment installer une Debian, aussi bien en tant que VM ou en installation directe sur une machine physique

# Récupération des sources

Vous pouvez trouver la dernière version Debian en netinstall (taille minimale mais besoin d’internet pour l’installation) [ici](https://www.debian.org/CD/netinst). Il faut prendre l’image ISO pour architecture amd64.

# Lancement de l’installation

## Sur une machine physique

Il faut soit créer une clef USB bootable soit graver l’iso sur un CD et mettre le CD dans la machine (mais de nos jour les lecteurs CD sont de plus en plus rares).

Pour la clef USB bootable il faut télécharger rufus [là](http://rufus.akeo.ie/downloads/rufus-2.9.exe), le lancer et le configurer comme cela :

![debian.installation](images/debian.installation.PNG)

> **Note**
>
> Pensez bien à sélectionner le fichier ISO que vous avez téléchargé juste avant.

Il ne vous reste plus qu’à cliquer sur démarrer, puis mettre la clef USB sur la machine et la faire booter dessus.

## Sur une VM

La manipulation est assez simple, vous créez une nouvelle machine virtuelle, vous branchez, mettez un lecteur CD virtuel dessus qui pointe vers l’iso (pensez bien à le connecter) et vous lancez la machine. Voir [ici](../howtoadvance/vmware.creer_une_vm) pour plus de détails.

# Installation

Appuyez sur entrée pour lancer l’installation :

![debian.installation1](images/debian.installation1.PNG)

Choisissez "French" et validez par la touche entrée

![debian.installation2](images/debian.installation2.PNG)

Ici il faut choisir "French" (Français)

![debian.installation3](images/debian.installation3.PNG)

Idem (si votre clavier a une disposition AZERTY, sinon choisissez la bonne disposition) :

![debian.installation4](images/debian.installation4.PNG)

Entrez le nom de votre machine (ici nabaztag mais vous pouvez saisir jeedom)

![debian.installation5](images/debian.installation5.PNG)

Appuyez juste sur entrée pour laisser vide ou saisissez le domaine :

![debian.installation6](images/debian.installation6.PNG)

Mettez un mot de passe compliqué mais asez simple pour pouvoir le retenir. Ca peut être une phrase du genre `J4cques f4it du ski` :

![debian.installation7](images/debian.installation7.PNG)

Remettez-le même :

![debian.installation8](images/debian.installation8.PNG)

Donnez le nom de l’utilisateur principal (ici nabaztag mais mettez le nom que vous voulez)

![debian.installation9](images/debian.installation9.PNG)

Saisissez le login de cet utilisateur (un seul nom, par exemple "john" si le nom complet est "John Doe") :

![debian.installation10](images/debian.installation10.PNG)

Mettez un mot de passe compliqué mais asez simple pour pouvoir le retenir :

![debian.installation11](images/debian.installation11.PNG)

Remettez la même chose :

![debian.installation12](images/debian.installation12.PNG)

Validez en appuyant sur entrée :

![debian.installation13](images/debian.installation13.PNG)

Idem :

![debian.installation14](images/debian.installation14.PNG)

A nouveau validez en appuyant sur entrée :

![debian.installation15](images/debian.installation15.PNG)

On valide encore :

![debian.installation16](images/debian.installation16.PNG)

Et encore :

![debian.installation17](images/debian.installation17.PNG)

Choisissez "France" et validez :

![debian.installation18](images/debian.installation18.PNG)

Validez en appuyant sur entrée :

![debian.installation19](images/debian.installation19.PNG)

Saisissez votre proxy ou laissez vide si vous n'en avez pas ou si vous ne savez pas quoi mettre :

![debian.installation20](images/debian.installation20.PNG)

Et encore (oui on valide beaucoup sur une installation de debian) :

![debian.installation21](images/debian.installation21.PNG)

Maintenant plus compliqué, il faut désélectionner "environnement de bureau Debian" en appuyant sur la touche espace et sélectionner "serveur SSH" en appuyant sur espace (il faut se déplacer avec les flèches du clavier), puis valider en appuyant sur entrée :

![debian.installation22](images/debian.installation22.PNG)

On valide à nouveau :

![debian.installation23](images/debian.installation23.PNG)

Il faut choisir /dev/sda puis valider :

![debian.installation24](images/debian.installation24.PNG)

Là vous avez juste à retirer la clef USB, le cdrom ou le cdrom virtuel et à appuyer sur entrée :

![debian.installation25](images/debian.installation25.PNG)

Voilà votre installation de debian est finie. Vous pouvez arrêter le tuto là si vous le voulez ou suivre les étapes suivantes pour quelques modifications du système (utile surtout pour jeedom).

# Optimisation pour Jeedom

## Ajouter les Open VMware Tools

Les Open VMware Tools installent les drivers spécifiques au système d’exploitation installé et apportent les optimisations de cet OS hébergé sur un hyperviseur ESXi. Si vous n'utilisez pas ESXi, n'installez pas ce paquet.

``sudo apt-get install -y open-vm-tools``

Il ne vous reste plus qu’à installer Jeedom en suivant [ceci](../installation/cli)
