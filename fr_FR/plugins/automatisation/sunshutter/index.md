# Plugin Gestion Volets

# Description

Ce plugin permet de gérer plus facilemement la position de vos volets en fonction de la position du soleil. Ce plugin fonctionne complètement en local et ne nécessite pas de connexion vers l'extérieur.

Vous pouvez trouver [ici](https://www.jeedom.com/blog/?p=4310) un article montrant un exemple de configuration du plugin.

# Configuration du plugins

Rien de spécial ici juste à installer et activer le plugin.

## Comment ca marche ?

Le plugin va régler la position de vos volets par rapport à des positions du soleil (Azimuth et Altitude) en fonction de condition.

# Configuration des volets

La configuration se décompose en plusieurs onglets :

## Equipement

Vous retrouvez dans le premier onglet toute la configuration de votre équipement :

- **Nom de l’équipement** : nom de votre équipement.
- **Objet parent** : indique l’objet parent auquel appartient l’équipement.
- **Catégorie** : permet de choisir la catégorie de votre équipement.
- **Activer** : permet de rendre votre équipement actif.
- **Visible** : rend votre équipement visible sur le dashboard.

## Configuration

### Configuration

- **Vérification** : fréquence de vérification des conditions et position des volets.
- **Reprendre la main** : interdit au système de gestion de volet de modifier la position de celui-ci si il a été bougé manuellement. Exemple : le système ferme le volet, vous l'ouvrez il n'y touchera plus jusqu'à ce que la commande "Reprendre gestion" soit déclenchée ou si le délai de reprise de main est passé.
- **Latitude** : la latitude de votre volet/maison.
- **Longitude** : la longitude de votre volet/maison.
- **Altitude** : l'altitude de votre volet/maison.
- **Etat volet** : commande indiquant la position actuelle du volet.
- **Position volet** : commande permettant de positionner le volet.
- **Rafraîchir position volet (optionnelle)** : commande permettant de rafraichir la position du volet.
- **Temps maximum pour un déplacement** : temps pour faire un mouvement complet (de haut en bas ou de bas en haut) en secondes.

## Condition

- **Condition pour action** : si cette condition n'est pas vraie, le plugin ne modifiera pas la position du volet.
- **Un changement de mode annule les suspensions en cours** : si coché alors un changement de mode du volet repasse celui-ci en gestion automatique.
- **Les actions immédiates sont systématiques et prioritaires** : si coché alors les actions immediates s'executent même si celui-ci est suspendu et sans tenir compte de l'ordre des conditions.

Le tableau des conditions vous permet de spécifier des conditions de positionnement spécifique, qui prenne la main sur le tableau de position du volets :
- **Position** : si la condition est vraie, la position du volet.
- **Mode** : la condition ne marche que si le volet est dans ce mode (vous pouvez en mettre plusieurs séparé par des virgules ``,``). Si ce champ n'est pas rempli alors la condition sera testée quelque soit le mode.

>**IMPORTANT**
>
>On parle ici du mode du volet, cela N'A RIEN A VOIR avec le plugin mode

- **Action immédiate** : agit immédiatement dès que la condition est vraie (n'attend donc pas le cron de verification).
- **Suspendre** : si la condition est vraie, elle suspend la gestion automatique du volet.
- **Condition** : votre condition.
- **Commentaire** : champs libre pour mettre des commentaires.

## Positionnement

- **% ouveture** : le % quand le volet est ouvert.
- **% fermeture** : le % quand le volet est fermé.
- **Action par défaut** : l'action par défaut si aucune condition et position n'est valide.

C'est ici que vous allez pouvoir gérer le positionenement du volet en fonction de la position du soleil.

- **Azimuth** : angle de position du soleil.
- **Elévation** : angle de hauteur du soleil.
- **Position** : position du volet à prendre si le soleil se trouve dans les bornes d'Azimuth et d'élévation.
- **Condition** : condition en plus à satisfaire pour que le volet prenne cette position (peut être vide).
- **Commentaire** : champs libre pour mettre des commentaires.

>**ASTUCE**
>
>Petite astuce le site [suncalc.org](https://www.suncalc.org) permet, une fois votre adresse rentrée, de voir la position du soleil (et donc les angles Azimuth et d'élévation) en fonction des heures de la journée (il suffit de faire glisser le petit soleil en haut).

## Planning

Vous voyez ici les planifications de positionnement du volet faites dans le planning Agenda.

## Commandes

- **Azimut soleil** : angle Azimuth actuel du soleil.
- **Elévation soleil** : angle d'élévation actuel du soleil.
- **Forcer action** : force le calcul de position du volet en fonction de la position du soleil et des conditions et lui applique le résultat quelque soit l\'état de gestion (en pause ou pas).
- **Dernière position** : dernière position demandée au volet par le plugin.
- **Etat gestion** : état de la gestion (suspendu ou pas).
- **Reprendre** : force la remise en mode automatique de la gestion (à noter que c'est cette commande qu'il faut lancer pour repasser en gestion automatique si vous avez modifié la position de votre volet manuellement et coché la case "Ne pas reprendre la main").
- **Suspendre** : suspend le positionnement automatique du volet.
- **Rafraichir** : mets à jour les valeurs des commandes "Azimut soleil" et "Elévation soleil".
- **Mode** : mode actuel du volet.

Vous pouvez ajouter des commandes "mode", le nom de la commande sera le nom du mode.

# Panel

Le plugin possède un panel de gestion en desktop et mobile. Pour l'activer il suffit d'aller dans Plugins → Gestion des plugins, cliquer sur le plugin de gestion de volet et tout en bas à droite de cocher les cases pour afficher les panels desktop et mobile.
