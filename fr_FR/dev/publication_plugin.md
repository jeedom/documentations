# Comment publier le plugin sur le market

## Pré-requis

- S’être inscrit en tant que dev, voir [ici](https://www.jeedom.com/site/fr/dev.html).
- Avoir attendu la validation du compte market comme développeur.
- Vérifier que vous avez accès à "Salon des développeurs" sur Community.
- Avoir mis votre plugin sur github (dépôt privé ou non).
- Présentez votre plugin dans le "Salon des développeurs" et "Présentation plugin"

## Présentation plugin

Pourquoi présenter son plugin !

Pour éviter de travailler dans son coin et de voir à la fin un autre dev sortir la même chose.  
Pour obtenir de l’aide sur la conception de celui-ci.  
Pour permettre à l’équipe Jeedom de connaître à quoi sert votre Plugin et comment il est codé lors d’un ToStable.  
Pour partager vos idées et vos remarques :wink:  

Nous ne vous demandons pas une dissertation sur vos plugins mais juste des infos :

- Nom et id > Z-Wave (openzwave) // vous pouvez mettre cela en titre de votre sujet.
- ce que fait votre plugin
- type de langages utilisés
- Utilise-t-il un démon ? des dépendances particulières ? des crons ?
- Possède-t-il un panel dédié ?
- Payant | gratuit ? (si vous avez déjà une idée)
- Lien GitHub ou autre site de dépôt (si vous le souhaitez)
- Lien vers la documentation
De là un tag sera attribué à votre Plugin par un modérateur

Vous avez aussi plusieurs tag à votre disposition, pour que l’équipe Jeedom puisse vous avertir plus facilement :

demon (si vous avez un démon)  
dependance_intall (si vous avez des installation de dépendance)  
nodejs ou python (language utilisé dans votre démon)  
cron (si vous utiliser le moteur cron de Jeedom)  
jsonrpc (si vous utiliser l’api jsonrpc de Jeedom)  
idée, beta, stable, prive (selon ou en est votre plugin)  
gratuit, payant  
panel-dash, panel-mob (si vous avez un panel dans votre plugin)  

## Configuration

Une fois connecté avec votre compte dev sur le market il faut :

- Cliquer sur market puis sur ajouter
- Renseigner les informations sur votre plugin :
  - Général :
    - Prix.
    - Id (celui dans le fichier info.json).
    - Nom.
    - Catégorie.
    - S'il est privé ou non.
  - Documentation et liens (Ces informations sont basées sur le fichier info.json de votre plugin)
    - La description (bien mettre les points importants, la plupart des utilisateurs ne vont pas voir la documentation avant l'achat).
    - Les langues.
    - Le matériel compatible
    - Une note sur l'utilisation si nécessaire.
  - Github : c'est ici que vous allez mettre les informations entre le market et Github.
    - Le token (cela permet de remonter les infos du plugin dans la documentation jeedom). Vous pouvez le créer sur la page Github suivante : https://github.com/settings/tokens, choisir `token classic`, `aucune expiration` et cocher la partie `repo`.
    - Votre nom d'utilisateur github.
    - Le nom du dépôt sur github.
    - Cocher la case pour que le market gère la traduction de votre plugin et de la documentation (attention, dans ce cas, à bien donner tous les droits à l'utilisateur `jeedom-market` de github sur votre dépot github).

   Une fois sauvegardé, en retournant dans l'onglet github, vous pourrez indiquer les branches de votre github qui correspondent aux versions du market (pensez à cliquer sur `Valider` avant de cliquer sur `Test/Synchroniser`) :

   - Beta  (par exemple: beta)
   - Stable  (par exemple: master)
   - V3 (seulement si vous avez une branche différente pour le support de Jeedom v3).

La synchronisation se fait soit automatiquement tous les jours à 12h10 (attention de part le nombre de plugin et les restrictions d'appels API, la mise à jour commence à 12h10 mais peut prendre plusieurs dizaines d'heure), soit via une synchronisation manuelle d'une branche à partir de la fiche plugin.
      
> **Note**
> Vous avez un compte market avec un nom différent de community et vous désirez publier sous le nom de community.
> Allez sur votre compte market dans "Mon profil".  Dans la zone "Pour les développeurs", vous pouvez indiquer dans le champ auteur votre nom de community. 
