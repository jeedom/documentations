# Comment publier le plugin sur le market

## Pré-requis

- S'etre inscrit en tant que dev, voir [ici](https://www.jeedom.com/site/fr/dev.html)
- Avoir attendu la validation du compte market comme developpeur
- Avoir mis votre plugin sur github (dépot privé ou non)

## Configuration

Une fois connecté avec votre compte dev sur le market il faut : 

- cliquer sur market puis sur ajouter
- renseigner les informations sur votre plugin : 
  - Général : 
    - Prix
    - Id (celui dans le fichier info.json)
    - Nom
    - Catégorie
    - Si il est privé ou non pour commencer
  - Documentation et liens
    - la description (bien mettre les point important, la plupart des utilisateurs ne vont pas voir la documentation avant l'achat)
    - les langues
    - le matériel compatible
    - une note sur l'utilisation si necessaire
  - Github : c'est ici que vous aller mettre les information entre le market et Github
    - le token (a ne mettre que si votre plugin est sur un dépot privé)
    - votre nom d'utilisateur github
    - le nom du dépot sur github
    - cocher la case pour que le market gere la traduction de votre plugin et de la documentation (attention dans ce cas à bien donner tous les droits à l'utilisateur zoic21 de github sur votre dépot github)
    
   Une fois sauvegardé en retournant dans l'onglet github vous aurez 3-4 champs pour indiquer les branches : 
   
   - beta
   - stable
   - pro (ne sert a rien dans 99% des cas)
   - stablev3 (bientot)
   
   La synchronisation se fait soit automatiquement tous les jours à 12h10 (attention vu le nombre de plugin et les restrictions d'appels api la mise à jour commence à 12h10 mais prendre plusieurs dizaine d'heure). Vous pouvez aussi lancer une synchronisation manuel d'une branche à partir de la fiche plugin
