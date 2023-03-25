# Plugin Energie

Plugin permettant d'afficher un graphique globale des energie de la maison (eau, gaz, electricité, production electrique).

Il affichage aussi un dashboard qui montre la performance d'un systeme de panneaux solaire, les consommations (eau, gaz et electricité) ainsi que le details de consommation electrique de certains équipement (necessite bien sur d'avoir un module pour la mesurer)

Pour ceux qui ont du solaire il peut aussi vous afficher la prevision de production en fonction des caracteristique de votre installation (à renseigner)

Attention le plugin ne fait et ne fera aucun calcul de cout (ce n'est pas son but et ca ne le sera pas)

Pour fonctionner il necessite que vous ayant des modules remontant ces informations : 

## Gaz

- Consommation jour
- Consommation instantanée

## Eau

- Consommation jour
- Consommation instantanée

## Electricité

- Consommation jour
- Consommation instantanée

Si vous avez des panneaux solaire il faut en plus : 

- Import d'electricité du réseaux
- Export d'electricité du réseaux
- Production jour
- Puissance nette

>**IMPORTANT**
>
>En fonction de vos commandes il vous faudra peut etre adapter l'unité sur la page de configuration des commandes de l'équipement energie que vous avez créer