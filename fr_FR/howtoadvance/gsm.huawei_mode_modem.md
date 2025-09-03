# GSM Huawei mode carte modem

Dans 90% des cas il n’est pas nécessaire de forcer les clefs GSM en mode GSM seulement (au lieu de GSM + cdrom + lecteur de carte), le seul cas où c’est obligatoire c’est si vous voulez utiliser la clef dans un Jeedom sur une VM (VMware ESXi). En effet si vous ne la passez pas en mode GSM seulement la clef n’apparaîtra pas dans la liste des périphériques USB que vous pouvez faire passer à la VM.

> **Important**
>
> Ce tuto a été fait sur un Windows 10

# Installation des drivers

Une fois la clef connectée à un PC Windows 10 vous devez avoir un nouveau lecteur CD-ROM. Il faut double-cliquer dessus et installer le logiciel proposé (il n’y a rien à changer faîtes juste suivant tout le long).

![gsmonly](images/gsmonly.PNG)

# Récupération du port COM

Ensuite il faut récupérer le numéro du port de communication. Allez sur le menu "Démarrer" et recherchez "Gestionnaire de périphériques", lancez celui-ci puis dépliez la partie "Ports (COM et LPT)", vous devriez avoir un item contenant "HUAWEI", il faut ensuite juste retenir le numéro du port COM :

![gsmonly2](images/gsmonly2.PNG)

# Téléchargement de Putty

Téléchargez ensuite putty [ici](https://the.earth.li/~sgtatham/putty/latest/x86/putty.exe) et lancez le fichier téléchargé

# Configuration de putty et passage en mode GSM seulement

Une fois lancé configurez putty comme cela (en mettant bien votre numéro de port COM à vous, voir étape au-dessus) :

![gsmonly3](images/gsmonly3.PNG)

Une fenêtre noire va apparaître (il peut de temps en temps y avoir un message "boot…​", c’est normal, cela veut dire que vous êtes bien connecté à la clef GSM). Dans cette fenêtre il faut taper puis appuyer sur la touche "Entrée" :

``AT^u2diag=0``

> **Important**
>
> Attention quand vous allez taper le texte vous n’allez rien voir à l’écran, c’est normal, le texte est quand même bien pris en compte.

Normalement en retour vous devez avoir un OK.

Voilà c’est terminé. Votre clef est bien en mode GSM seulement et vous pouvez vous en servir à travers un VMware maintenant.
