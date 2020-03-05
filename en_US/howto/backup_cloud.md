# Cloud backup

Une fois le service acheté il faut dans jeedom : 

- aller dans l'administration de celui-ci puis dans l'onglet "Mise à jour/Market" et remplissez
  - [Backup cloud] Nom : nom du dossier ou mettre les backup de jeedom (si vous avez un jeedom mettez simplement jeedom, sinon mettez un dossier par jeedom)
  - [Backup cloud] Mot de passe : mot de passe de cryptage du backup. ATTENTION si vous le perdez les backups sont perdu il est impossible de récuperer le mot de passe
- dans la gestion des sauvegarde cochez la case "Envoi des sauvegardes" au niveau de "Sauvegardes Market"

>**NOTE**
>
>Il est possible de voir les dossiers des backups jeedom directement depuis votre page profils sur le market, onglet mes services puis configuration au niveau du service backup cloud

## FAQ

> **Erreur Specification mandate value for attribute defer on line 19, column 146**
>
> Si vous avez cette erreur il faut contacter le support, c'est une erreur de notre coté au niveau (disque dur du serveur de backup en readonly).
> Suite à la correction de notre coté il faudra surement forcer une reconfiguration du backup cloud sur votre page profils (onglet service puis backup cloud)
