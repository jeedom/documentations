Description 
===========

La procédure va permettre de se connecter en SFTP à votre box afin
d’aller récupérer les sauvegardes quotidiennes effectuées par celle-ci.

> **Tip**
>
> Attention, afin que cette procédure fonctionne, il est nécessaire que
> le serveur SSH de la box soit toujours fonctionnel.

Installation de Filezilla 
=========================

Filezilla est un logiciel gratuit et disponible sur toutes les
plateformes. Il permet de transférer des fichiers via différents
protocoles (FTP, FTPS, SFTP…​) Il est téléchargeable via ce lien :
<https://filezilla-project.org/download.php?type=client>

Connexion à la box 
==================

Pour se connecter à votre box, il suffit de renseigner les champs
d’information en haut de la fenêtre Filezilla :

![restore filezilla01](../images/restore-filezilla01.jpg)

-   Hôte : Adresse IP de Jeedom (sftp:// est rajouté automatiquement)

-   Identifiant : jeedom

-   Mot de passe : Mjeedom96

-   Port : 22

Puis de cliquer sur "Connexion rapide"

Navigation vers le répertoire de sauvegarde 
===========================================

Une fois la connexion établie, il est nécessaire de se rendre dans le
répertoire de sauvegarde de Jeedom.

2 cas de figures :

-   Serveur Apache (Box Jeedom Smart) : /var/www/html/backup

-   Serveur Nginx (Box Jeedom Mini+) :
    /usr/share/nginx/www/jeedom/backup

Le chemin d’accès se renseigne dans la partie site distant.

![restore filezilla02](../images/restore-filezilla02.jpg)

Téléchargement de la sauvegarde 
===============================

Sur la liste des sauvegardes, en faisant un clic droit, il est possible
de lancer son téléchargement.

![restore filezilla03](../images/restore-filezilla03.jpg)
