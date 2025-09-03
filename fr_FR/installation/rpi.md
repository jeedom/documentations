# Installation sur Raspberry Pi

Vous trouverez ici la documentation pour installer Jeedom sur un raspberry Pi **avec une carte MiroSD.**. 

# Installation en ligne de commande

## Télécharger la dernière image "lite"

[Raspberry Pi Imager](https://www.raspberrypi.com/software/) permet de télécharger directement l'image d'installation de Raspberry Pi OS, dans sa version la plus récente et de graver l'image directement sur la carte SD. Attention il faut prendre une version debian 11 (Bullseye), Jeedom n'étant pas encore compatible Debian 12 (mais on y travaille).

## Activer un accès SSH

> **Warning**
>
> Pour des raisons de sécurité, l’accès SSH n’est plus activé par défaut sur cette distribution. Il faut donc l’activer.

Sur la partition boot (la seule accessible sous Windows), il faut créer un fichier ssh vide.

Il suffit de faire un clic droit : nouveau / document texte et le renommer en "ssh" **sans extension**

> **Important**
>
> Sous Windows, dans l’explorateur, il faut donc vérifier votre paramétrage dans affichage / options / modifier les options de dossiers et de recherche :

![ExtensionFichier](images/ExtensionFichier.PNG)

## Démarrer le Raspberry Pi

Insérez votre carte MicroSD, branchez le câble réseau et branchez l’alimentation.

## Se connecter en SSH

Identifiez votre Raspberry Pi sur le réseau

Il faut connaître l’adresse IP de votre Raspberry PI. Plusieurs solutions :

-   Consultez la configuration DHCP dans votre routeur
-   Utilisez un scanner de port type "Angry IP Scanner" [ici](http://angryip.org/download/#windows)

Etablir la connexion

Ensuite, utilisez par exemple PuTTY pour établir votre connexion [Ici](http://www.putty.org/)

Rentrez l’adresse IP de votre Raspberry Pi (ici 192.168.0.10) et cliquez sur open. Acceptez le message par défaut relatif à la sécurité lors de la première connexion.

Connectez-vous avec les identifiants **pi / raspberry**

> **Important**
>
> Pour des raisons de sécurité, il est impératif de modifier le mot de passe par défaut. Les cas de piratages basés sur l’exploitation du couple login/mot de passe par défaut du Raspberry Pi sont particulièrement répandus. (commande : passwd et sudo passwd)

## Lancer le script d’installation jeedom

```
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
```

**Le mot de passe sudo est également raspberry**

> **Note**
>
> En fonction de votre débit internet, l’installation peut prendre de 45 à 90 minutes. Vous ne devez surtout pas interrompre le processus avant la fin. A défaut, il faudra reprendre la totalité de la procédure.

Il vous suffit ensuite d’aller sur IP\_MACHINE\_JEEDOM

> **Note**
>
> Les identifiants par défaut sont admin/admin

Pour plus d'information sur l'installation de Jeedom veuillez consulter cette [documentation](cli)

Ensuite, vous pouvez suivre la documentation [Premier pas avec Jeedom](../premiers-pas/index)
