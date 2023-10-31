# Sauvegarde cloud

Une fois le service acheté il faut dans Jeedom : 

- aller dans l'administration de celui-ci puis dans l'onglet "Mises à jour/Market" et remplissez
  - [Backup cloud] Nom : nom du dossier où mettre les backups de Jeedom (si vous avez un Jeedom mettez simplement jeedom, sinon mettez un dossier par Jeedom)
  - [Backup cloud] Mot de passe : mot de passe de cryptage du backup. ATTENTION si vous le perdez les backups sont perdu, il est impossible de récuperer le mot de passe
- dans la gestion des sauvegardes cochez la case "Envoi des sauvegardes" au niveau de "Sauvegardes Market"

>**NOTE**
>
>Il est possible de voir les dossiers des backups Jeedom directement depuis votre page profils sur le market, onglet mes services puis configuration au niveau du service backup cloud

>**IMPORTANT**
>
>La taille maximal de stockage par compte market est de 4go au dela le système supprimera les fichiers de sauvegarde les plus vieux jusqu'à tomber en dessous des 4go.
