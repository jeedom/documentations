# Plugin Bestway

Plugin permetant de controler le Bestway Lazy Spa Milan à travers Jeedom.

Il permet de gerer automatiquement la filtration et la durée de celle-ci en fonction de la température de l'eau

## Configuration 

Il suffit de mettre vos identifiants Bestway

## Compatibilité

Vous pouvez trouver [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=bestway) la liste des modules compatible avec le plugin

## Filtration automatique

Si vous cochez la case de gestion de la filtration automatique alors le plugin va lui meme calculer en chaque debut d'heure le temps de filtration necessaire en fonction de la température moyenne de l'eau sur l'heure d'avant (en se basant sur la formule temps filtration en heure = temperature de l'eau / 2)