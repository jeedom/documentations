# Restauration en mode usine d'une Jeedom Atlas

## Présentation

La Jeedom Atlas est équipée d’un disque Emmc, garantissant une meilleure fiabilité qu'une carte SD, mais ce disque n’est pas directement accessible.

Le Recovery Mode USB englobe à la fois le système, l’OS, et aussi l’application Jeedom.

Il permet :

- La réinitialisation  de la Jeedom Atlas en configuration « usine » OS+Jeedom.
- La réinitialisation  de la Jeedom Atlas en configuration « usine », en appliquant ensuite sa sauvegarde Jeedom.

Pour rappel la gestion des sauvegardes/restauration est disponible dans Jeedom dans le menu « Réglages » en haut à droite, puis « Sauvegardes ».

Jeedom propose un service avec abonnement de sauvegarde automatique sur cloud privé Jeedom, pour ne plus vous soucier de rien. (Sur le Market, dans votre compte, menu à gauche « Backup Cloud »).

## Fonctionnement du recovery mode

>**Note**
>
>Pensez à mettre de côté (en local) une sauvegarde de configuration Jeedom

>**Important**
>
>L'application d'un Recovery entraine un changement de l'adresse MAC de votre box Jeedom. Il faudra alors changer votre réservation d'IP dans la configuration de votre serveur DHCP si vous en avez.

>**Note**
IMPORTANT : Suivant si vous avez encore accès ou non à votre box, la procédure n'est pas la même.



Matériel nécessaire : une clé USB (minimum 16Go).




CAS 1 : VOUS AVEZ ACCES A VOTRE BOX ATLAS


Rendez-vous dans le plugin Atlas (Passerelle Domotique/Plugin Atlas), et cliquez sur Recovery, et suivez la procédure.

***



CAS 2 : VOUS N'AVEZ PAS ACCES A VOTRE BOX ATLAS



- Téléchargez le Recovery depuis votre profil sur le market : Profil / Mes Services et cliquer sur Télécharger USB Recovery Atlas

![profilrecovery](images/profilrecovery.png)



- Téléchargez le logiciel [Balena etcher](https://www.balena.io/etcher/)



- Dans le logiciel, choisissez votre image téléchargée, puis votre clé usb 

![balenaetcher](images/balenaetcher.png)



- Une fois la clé prête, la mettre dans le port USB 2 inférieur (port USB noir), puis allumer votre box Atlas



- Attendre 5 à 10 minutes environ



- Puis rendez-vous sur http://jeedomatlasrecovery.local/



- Mettre les identifiants et mot de passe :  admin/admin, puis changer le mot de passe, IMPORTANT : mettre un compte market.



- Une fois cela fait, Jeeasy se lance et vous présente la procédure de recovery



- Suivre la procédure




> **Important**
>
> Attention ! Un Recovery Mode remet quoi qu’il arrive votre Atlas en configuration « usine » neuve. Si vous avez une sauvegarde de votre configuration Jeedom il suffit après de la restaurer.
> 

Ce Recovery Mode n’est compatible qu’avec la Jeedom Atlas
