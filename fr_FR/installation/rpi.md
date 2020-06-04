# Installation sur Raspberry Pi

Vous trouverez ici la documentation pour installer Jeedom sur un raspberry PI **avec une carte SD.**. Il existe 2 modes :

- Automatique (beta) : utilisation de l'image pour rapsberry pi faite par Jeedom avec Jeeodm de preinstallé dessus
- Ligne de commande : installation manuel de jeedom à partir de Raspberry pi OS

> **Important**
>
> Debian 10 (Buster) est la distribution officiellement supportée.

# Installation automatique

## Télécharger le dernière image

[ici](https://images.jeedom.com/rpi/)

## Gravez cette image sur une SD avec Raspberry Pi imager par exemple

[ici](https://www.raspberrypi.org/downloads/)

## Démarrer le PI

Insérez votre carte SD, branchez le cable réseau, branchez l’alimentation.

> **Important**
>
> Lors du premiers démarrage le raspberry pi peut etre lent car il redimensionne la partition pour correspondre à votre carte SD. De plus une fois le 1er demarrage fait il est conseillé de redemarrer à nouveau pour que le swap soit de taille correct.

Il vous suffit ensuite dans votre navigateur de mettre : http://IP_RPI/ (en remplacent IP_RPI par l'ip de votre Raspberry pi).

# Installation en ligne de commande

## Télécharger le dernière image "lite"

[ici](https://downloads.raspberrypi.org/raspbian_lite_latest)

## Gravez cette image sur une SD avec Raspberry Pi imager par exemple

[ici](https://www.raspberrypi.org/downloads/)

> **Note**
>
> Si vous utilisez Etcher pour graver votre image, l’étape de décompression est inutile (format Zip reconnu directement dans la sélection du fichier image).

## Activer un accès SSH

> **Warning**
>
> Pour des raisons de sécurité, l’accès SSH n’est plus activé par défaut sur cette distribution. Il faut donc l’activer.

Il faut créer sur la partition boot (la seule accessible sous windows) un fichier ssh vide.

Il suffit de faire un clic droit : nouveau / document texte et le renommer en "ssh" **sans extension**

> **Important**
>
> Sous windows, dans l’explorateur il faut donc vérifier votre paramétrage dans affichage / options / modifier les options de dossiers et de recherche /

![ExtensionFichier](images/ExtensionFichier.PNG)

## Démarrer le PI

Insérez votre carte SD, branchez le cable réseau, branchez l’alimentation.

## Se connecter en SSH

Identifiez votre Pi sur le réseau

Il faut connaître l’adresse Ip de votre PI. Plusieurs solutions :

-   Consultez la configuration DHCP dans votre routeur
-   Utilisez un scanner de port type "angyipscanner" [ici](http://angryip.org/download/#windows)

Etablir la connexion

Ensuite utilisez par exemple putty pour établir votre connexion [Ici](http://www.putty.org/)

Rentrer l’adresse de Ip de votre PI (ici 192.168.0.10) et cliquez sur open. Accepter le message par défaut relatif à la sécurité lors de la première connexion.

Connectez-vous avec les identifiants **pi / raspberry**

> **Important**
>
> Pour des raisons de sécurité, il est impératif de modifier le mot de passe par défaut. Les cas de piratages basés sur l’exploitation du couple login/mot de passe par défaut du Raspberry sont particulièrement répandus. (commande passwd et sudo passwd)

## Lancer le script d’installation jeedom

``wget -O- https://raw.githubusercontent.com/jeedom/core/master/install/install.sh | sudo bash``

**Le mot de passe sudo est également raspberry**

> **Note**
>
> En fonction de votre débit internet, l’installation peut prendre de 45 à 90 minutes. Vous ne devez surtout pas interrompre le processus avant la fin. A défaut, il faudra reprendre la totalité de la procédure.

Il vous suffit ensuite d’aller sur IP\_MACHINE\_JEEDOM

> **Note**
>
> Les identifiants par défaut sont admin/admin

> **Note**
>
> Les arguments suivants sont utilisables : -w = dossier webserver -z = installation dependances z-wave -m = mot de passe root mysql désiré

````
./install.sh -w /var/www/html -z
````

## Optimisation système

Si vous utilisez votre Raspberry pour Jeedom sans écran connecté, il est recommandé d'effectuer le minimum de RAM à la partie vidéo.

Il suffit de se connecter en **SSH** et de modifier le fichier config : ``sudo nano /boot/config.txt``

Ajoutez **et/ou** De-commentez (en supprimant le #) **et/ou** Modifiez les lignes :

````
gpu_mem=16
disable_l2cache=0
gpu_freq=250
````

Quittez en sauvegardant : ``CTRL+X`` puis ``O`` puis ``ENTER``

Rebootez votre RPI

Ensuite, vous pouvez suivre la documentation [Premier pas avec Jeedom](https://doc.jeedom.com/fr_FR/premiers-pas/index)
