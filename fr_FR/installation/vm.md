# Installation sur une VM

Si vous voulez découvrir Jeedom sans risque, vous pouvez aussi le virtualiser sur votre PC, voici la démarche à suivre. Vous ne prenez aucun risque dans une VM, l’intégrité de votre Pc est protégé :

## Téléchargement et installation de VirtualBox

Vous devez télécharger le logicel Virtual Box [ICI](https://download.virtualbox.org/virtualbox/6.1.6/VirtualBox-6.1.6-137129-Win.exe)

# Installation automatique

Téléchargez l'iso jeedom [ici](https://images.jeedom.com/x86-64/).

## Configuration de l’environnement de la VM

Cliquez sur nouvelle et renseignez les champs comme ci dessous :

![VirtualBox1](images/VirtualBox1.PNG)

-   Cliquez sur suivant, adapter la taille de la mémoire par rapport à votre système (1024 sont suffisants)
-   Cliquez sur suivant, créer un disque virtuel maintenant
-   Cliquez sur Créer, choisissez VDI
-   Cliquez sur suivant, dynamiquement alloué
-   Cliquez sur suivant, Choisissez une taille pour l’espace (4Go suffisent)
-   Cliquez sur créer

## Lancement de la VM

-   Cliquez sur configuration
-   Sélectionnez stockage
-   Ajoutez un lecteur optique
-   Choisissez un disque
![VirtualBox2](images/VirtualBox2.PNG)
-   Indiquez l’image précédemment téléchargée
-   Sélectionnez ensuite réseau et choisissez "accès par pont" dans le mode d’accès réseau.
![VirtualBox3](images/VirtualBox3.PNG)
-   Cliquez sur OK \*Cliquez sur démarrer

Selectionnez "Installer jeedom" (touche entrée du clavier), valider avec yes (touche flèche bas puis entrée). Toute la suite va se faire automatiquement (10 à 30min), puis une fois la vm redemarré attendant 5min et vous devriez avoir accès à Jeedom en mettant simplement l'ip de jeedom dans un navigateur.

>**TIPS**
>
>Pour connaitre l'ip de la vm (une fois connecté dessus, les identifiants s'affichent sur l'écran de connexion) faite ``ip -s -c -h a``

# Installation manuel

## Téléchargement d’une image Debian strecht - netinstall

Téléchargez une image minimaliste debian 10 Buster [Ici](https://cdimage.debian.org/debian-cd/current/amd64/bt-cd/debian-10.3.0-amd64-netinst.iso.torrent)

## Configuration de l’environnement de la VM

Cliquez sur nouvelle et renseignez les champs comme ci dessous :

![VirtualBox1](images/VirtualBox1.PNG)

-   Cliquez sur suivant, adapter la taille de la mémoire par rapport à votre système (1024 sont suffisants)
-   Cliquez sur suivant, créer un disque virtuel maintenant
-   Cliquez sur Créer, choisissez VDI
-   Cliquez sur suivant, dynamiquement alloué
-   Cliquez sur suivant, Choisissez une taille pour l’espace (4Go suffisent)
-   Cliquez sur créer

## Lancement de la VM

-   Cliquez sur configuration
-   Sélectionnez stockage
-   Ajoutez un lecteur optique
-   Choisissez un disque
![VirtualBox2](images/VirtualBox2.PNG)
-   Indiquez l’image précédemment téléchargée
-   Sélectionnez ensuite réseau et choisissez "accès par pont" dans le mode d’accès réseau.

![VirtualBox3](images/VirtualBox3.PNG)

-   Cliquez sur OK \*Cliquez sur démarrer

## Installation de debian 9

C’est du classique…​

![VirtualBox4](images/VirtualBox4.PNG)

-   Choisissez Graphical install
-   Installez la debian de préférence sans interface graphique car inutile. Le nom d’utilisateur n’a aucune importance. Dans la plupart des écrans, il suffit de valider le choix par défaut. Vous pouvez laissez des champs vides, ce n’est pas bloquant.
-   Pour la sélection des logiciels :
![VirtualBox5](images/VirtualBox5.PNG)
-   Pour Grub, pas d’inquiétude, le secteur de démarrage est celui de la VM, pas celui de votre PC. Aucun risque de casser quoi que ce soit.

## Installation de jeedom

-   Lancez votre VM
-   Identifiez-vous avec l’utilisateur et le mot de passe choisis pendant l’installation
-   Passez en root

``su -``

-   Saisissez le mot de passe root défini pendant l’installation
-   Récupérez le script jeedom, le rendre exécutable, le lancer

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

-   et laissez faire…​

## Lancement de jeedom

-   Pour connaitre l’adresse Ip Lan de la VM

````
ip -s -c -h a
````

Votre adresse Ip, type 192.168.0.XX apparait en rouge. Il vous suffit de la saisir dans votre navigateur.

> **Warning**
>
> Si cela ne fonctionne pas, vous n’avez pas configuré votre carte réseau en Pont réseau comme indiquée au départ.

Ensuite, vous pouvez suivre la documentation [Premier pas avec Jeedom](https://doc.jeedom.com/fr_FR/premiers-pas/index)
