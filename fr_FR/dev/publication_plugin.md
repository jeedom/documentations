# Comment publier le plugin sur le market

## Pré-requis

- S’être inscrit en tant que dev, voir [ici](https://www.jeedom.com/site/fr/dev.html).
- Avoir attendu la validation du compte market comme développeur.
- Avoir mis votre plugin sur github (dépôt privé ou non).

## Configuration

Une fois connecté avec votre compte dev sur le market il faut :

- Cliquer sur market puis sur ajouter
- Renseigner les informations sur votre plugin :
  - Général :
    - Prix.
    - Id (celui dans le fichier info.json).
    - Nom.
    - Catégorie.
    - Si il est privé ou non.
  - Documentation et liens
    - La description (bien mettre les points importants, la plupart des utilisateurs ne vont pas voir la documentation avant l'achat).
    - Les langues.
    - Le matériel compatible
    - Une note sur l'utilisation si nécessaire.
  - Github : c'est ici que vous aller mettre les information entre le market et Github.
    - Le token (a ne mettre que si votre plugin est sur un dépôt privé).
    - Votre nom d'utilisateur github.
    - Le nom du dépôt sur github.
    - Cocher la case pour que le market gère la traduction de votre plugin et de la documentation (attention dans ce cas à bien donner tous les droits à l'utilisateur `jeedom-market` de github sur votre dépot github).

   Une fois sauvegardé, en retournant dans l'onglet github, vous pourrez indiquer les branches :

   - Beta
   - Stable
   - V3 (seulement si vous avez une branche différente pour le support de Jeedom v3).

   La synchronisation se fait soit automatiquement tous les jours à 12h10 (attention vu le nombre de plugin et les restrictions d'appels api la mise à jour commence à 12h10 mais prendre plusieurs dizaine d'heure). Vous pouvez aussi lancer une synchronisation manuelle d'une branche à partir de la fiche plugin.
