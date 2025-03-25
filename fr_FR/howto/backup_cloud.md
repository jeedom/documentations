# Sauvegarde cloud

Une fois le service acheté, dans Jeedom il faut : 

- aller dans l'administration de celui-ci puis dans l'onglet "Mises à jour/Market" et remplir
  - [Backup cloud] Nom : nom du dossier où mettre les backups de Jeedom (si vous avez un Jeedom mettez simplement jeedom, sinon mettez un dossier par Jeedom)
  - [Backup cloud] Mot de passe : mot de passe de cryptage du backup. ATTENTION si vous le perdez les backups sont perdus, il est impossible de récupérer le mot de passe
- cocher la case "Envoi des sauvegardes" dans la gestion des sauvegardes au niveau de "Sauvegardes Market"

> **NOTE**
>
> Il est possible de voir les dossiers des backups Jeedom directement depuis votre page profil sur le market, onglet mes services puis configuration au niveau du service backup cloud.

> **IMPORTANT**
>
> La taille de stockage maximale par compte market est de 2go. Au-delà le système supprimera les fichiers de sauvegarde les plus vieux jusqu'à tomber en dessous des 3go (pour le moment on tolère 1go de plus).

> **IMPORTANT**
>
> Pour le moment il n'y a pas de durée maximum de conservation mais nous réflechissons à supprimer automatiquement les backups de plus de 12 mois.
