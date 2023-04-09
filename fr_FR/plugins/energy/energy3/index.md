# Plugin Energie

Plugin permettant d’afficher un graphique global des énergies de la maison (eau, gaz, électricité, production électrique).

Il affiche également un dashboard montrant la performance d’un système de panneaux solaires, les consommations (eau, gaz et électricité) ainsi que les détails de consommation électrique de certains équipements (nécessite bien sûr d’avoir un module pour la mesurer)

Pour ceux qui ont du solaire il peut aussi vous afficher la prévision de production en fonction des caractéristiques de votre installation (à renseigner)

Attention le plugin ne fait pas et ne fera aucun calcul de coût (ce n’est pas et ne sera pas son but)

Pour fonctionner il nécessite que vous ayez des modules remontant ces informations :

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

- Import d'électricité du réseau
- Export d'électricité du réseau
- Production jour
- Puissance nette

>**IMPORTANT**
>
>En fonction de vos commandes il vous faudra peut être adapter l'unité sur la page de configuration des commandes de l'équipement énergie que vous avez créé

## Détails

Pour l'électricité il est possible d'indiquer des consommateurs dans l'onglet détails, ca peut soit être une commande de type puissance (il faut alors qu'elle soit historisée), soit une commande de type consommation. Si c'est la consommation absolue (pas de remise à zéro à minuit) il n'y a rien de plus à faire, si c'est une consommation par jour (remise à zéro à minuit) alors il faut cocher la case en bout de ligne "Consommation par jour (si Wh ou kWh)"

# Panel

Pour visualiser les historiques, prévision de production et autre il faut bien penser sur la page de configuration du plugin (Plugins -> gestion des plugins) à activer le panel (en desktop et/ou mobile) puis rafraichir la page (F5). Ensuite dans accueil vous trouverez le panel du plugin.
