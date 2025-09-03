# Raspberry pi 3

Vous trouverez ici la documentation pour installer Jeedom sur un raspberry PI 3 **sans carte microSD.**

Le PI3 offre en effet la possibilité de booter directement sur un périphérique USB et donc de vous affranchir de la carte microSD parfois génératrice de problèmes (corruption).

**La procédure d’installation est strictement identique à celle sur une carte microSD, mais il faudra s’assurer de posséder un firmware à jour.**

Pour cela ouvrez une connexion SSH. Si vous ne savez pas comment faire, regardez l’installation sur microSD : [Ici](../installation/index).

``vcgencmd otp_dump | grep 17:``

Vous devez obtenir en retour :

``17:3020000a``

Si c’est le cas, votre PI3 est correctement configuré pour booter sur l’USB. Si il ne trouve rien, il démarrera normalement sur une carte microSD.

Si le retour est différent, vous devez simplement effectuer une mise à jour.

``sudo apt-get update; sudo apt-get install rpi-update``

puis

``sudo rpi-update``

Puis redémarrage du PI3

``sudo reboot``

> **Important**
>
> Pour éviter les problèmes de puissance, optez pour un disque SSD mSATA à faible consommation.

> **Conseil**
>
> Vous pouvez désormais installer Jeedom en suivant exactement la même procédure qu’avec une carte SD [ici](../installation/index).

## Ajustements possibles

**Il faut ensuite prendre en compte les remarques suivantes :**

> **Important**
>
> Les modifications suivantes sont les solutions à des problèmes rencontrés par les utilisateurs. Vous devez les adapter à votre cas. Le support Jeedom n’intervient pas pour des problèmes liés à votre configuration.

- **Si vous rencontrez des problèmes de swap, il faut le modifier.**
    - **Augmentez sa taille** :
        - Changez la taille du swap en ouvrant ce fichier :
            ``sudo nano /etc/dphys-swapfile``
        - Changez la valeur de ``CONF_SWAPSIZE`` à 1024, par exemple, puis redémarrez :
            ``sudo reboot``
    - **Changez la valeur d’appel au swap.** Par défaut, le système appelle le swap lorsqu’il reste moins de 40% de Ram.
        - Ouvrez le fichier pour changer ce paramètre :
            ``sudo nano /etc/sysctl.conf``
        - Ajoutez cette ligne, pour demander au Pi3 de n’utiliser le swap que lorsqu’il lui reste 10% de mémoire disponible (soit 100 Mo de Ram disponible) :
            ``vm.swappiness = 10``
        - Puis redémarrez :
            ``sudo reboot``
- **Désactivez le bluetooth intégré car incompatible avec la carte GPIO zwave.me**
    - Ouvrez le fichier concerné :
    ``sudo nano /boot/config.txt``
    - Ajoutez la ligne :
        ``dtoverlay=pi3-disable-bt``
    - Faites un arrêt propre
        ``sudo halt``
    - Débranchez rebranchez (pas de sudo reboot !).
