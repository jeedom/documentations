# Restauration en mode usine d'une Jeedom Atlas

## Présentation

La Jeedom Atlas est équipée d’un disque Emmc, garantissant une meilleur fiabilité qu'une carte SD, mais ce disque n’est pas directement accessible.

Le Recovery Mode USB englobe à la fois le système, l’OS, et aussi l’application Jeedom.

Il permet :

- La reinitialisation de la Jeedom Atlas en configuration « usine » OS+Jeedom.
- La reinitialisation de la Jeedom Atlas en configuration « usine », en appliquant ensuite sa sauvegarde Jeedom.

Pour rappel la gestion des sauvegardes/restauration est disponible dans Jeedom dans le menu « Reglages » en haut à droite, puis « Sauvegardes ».

Jeedom propose un service avec abonnement de sauvegarde automatique sur cloud privé Jeedom, pour ne plus vous soucier de rien. (Sur le Market, dans votre compte, menu à gauche « Backup Cloud »).

## Fonctionnement du recovery mode

>**Note**
>
>Pensez à mettre de côté (en local) une sauvegarde de configuration Jeedom


>**Note**
IMPORTANT : Suivant si vous avez encore accès ou non à votre box, la procedure n'est pas la même.



Matériel necessaire : une clé USB (minimum 16Go).





CAS 1 : VOUS AVEZ ACCES A VOTRE BOX ATLAS


Rendez vous dans le plugin Atlas (Passerelle Domotique/Plugin Atlas), et cliquez sur Recovery, et suivez la procédure.





CAS 2 : VOUS N'AVEZ ACCES A VOTRE BOX ATLAS



- Téléchargez le Recovery depuis votre profil sur le market : Profil / Mes Services et cliquer sur Telecharger USB Recovery Atlas

![profilrecovery](https://github.com/jeedom/documentations/blob/master/fr_FR/installation/images/profilrecovery.png)



- Téléchargez le logiciel[Balena etcher](https://www.balena.io/etcher/)



- Dans le logiciel, choississez votre image téléchargée, puis votre clé usb 

![balenaetcher](https://github.com/jeedom/documentations/blob/master/fr_FR/installation/images/balenaetcher.png)



- Une fois la clé prête, la mettre dans le port USB 2 inferieur (port USB noir), puis allumer votre box Atlas



- Attendre 5 à 10 minutes environ



- Puis rendez vous sur http://jeedomatlasrecovery.local/



- Mettre les identifiants et mot de passe :  admin/admin, puis changer le mot de passe, IMPORTANT : mettre un compte market.



- Une fois cela fait, Jeeasy se lance et vous présente la procédure de recovery



- Suivre la procédure




> **Important**
>
> Attention ! Un Recovery Mode remet quoi qu’il arrive votre Atlas en configuration « usine » neuve. Si vous avez une sauvegarde de votre configuration Jeedom il suffit après de la restaurer.
> 

Ce Recovery Mode n’est compatible qu’avec la Jeedom Atlas
