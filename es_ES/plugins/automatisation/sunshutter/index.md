# Description

Ce plugin vous permet de gerer plus facilemement la position de vos volets en fonction de la position du soleil. Ce plugin est completement cloudless

Vous pouvez trouver [ici](https://www.jeedom.com/blog/?p=4310) un article montrant un exemple de configuration du plugin

# Configuration du plugins

Rien de spécial ici juste à installer et activer le plugin

## Comment ca marche ?

Le plugin va regler la position de vos volets par rapport à des positions du soleil (Azimuth et Altitude) en fonction de condition.

# Configuration des volets

La configuration se decompose en plusieurs onglet.

## Equipement

Vous retrouvez dans le premier onglet toute la configuration de votre équipement :

- Nom de l’équipement : nom de votre équipement Simulation,
- Objet parent : indique l’objet parent auquel appartient l’équipement,
- Activer : permet de rendre votre équipement actif,
- Visible : rend votre équipement visible sur le dashboard.


## Configuración

### Configuración

- Vérification : fréquence de verification des conditions et position des volets
- Reprendre la main : interdit au systeme de gestion de volet de modifier la position de celui-ci si il a été bougé manuellement. Exemple le systeme ferme le volet, vous l'ouvrez il n'y touchera plus jusqu'a ce que la commande "Reprendre gestion" soit déclenchée ou si le délai de reprise de main est passé
- Latitude : la latitude de votre volet/maison
- Longitude : la longitude de votre volet/maison
- Altitude : l'altitude de votre volet/maison
- Etat volet : commande indiquant la position actuel du volet
- Position volet : commande permettant de positionner le volet
- Rafraîchir position volet (optionnelle) : commande permettant de rafraichir la positionner du volet
- Temps maximum pour un déplacement : temps pour faire un mouvement complet (de haut en bas ou de bas en haut), en seconde

## Condition

- Condition pour action : si cette condition n'est pas vrai le plugin ne modifiera pas la position du volet
- Un changement de mode annule les suspensions en cours : si coché alors un changement de mode du volet repasse celui-ci en gestion automatique
- Les actions immédiate sont systématique et prioritaire : si coché alors les actions immediate s'executent meme si celui-ci est suspendu et sans tenir compte de l'ordre des conditions


Le tableau des conditions vous permet de spécifier des conditions de positionnement spécifique, qui prenne la main sur le tableau de position du volets :
- Position : si la condition est vrai, la position du volets
- Mode : la condition ne marche que si le volet est dans ce mode (vous pouvez en mettre plusieurs séparé par des ,). Si ce champs n'est pas remplis alors la condition sera testée quelque soit le mode
- Action immediate : agit immediatement dès que la condition est vrai (n'attend donc pas le cron de verification)
- Suspendre : si la condition est vrai elle suspend la gestion automatique du volet
- Condition : votre condition
- Commentaire : champs libre pour mettre des commentaires

## Positionnement

- %ouveture : le % quand le volet est ouvert
- %fermeture : le % quand le volet est fermé
- Action par defaut : l'action par defaut si aucune condition et position n'est valide

C'est ici que vous allez pouvoir gerer le positionenement du volet en fonction de la position du soleil.

- Azimuth : angle de position du soleil
- Elevation : angle de hauteur du soleil
- Position : position du volet à prendre si le soleil se trouve dans les bornes d'Azimuth et d'élévation
- Condition : condition en plus à satisfaire pour que le volet prenne cette position (peut etre vide)
- Commentaire : champs libre pour mettre des commentaires

>**ASTUCE**
>
>Petite astuce le site [suncalc.org](https://www.suncalc.org) qui permet, une fois votre adresse rentrée, de voir la position du soleil (et donc les angles Azimuth et d'élévation) en fonction des heures de la journée (il suffit de faire glisser le petit soleil en haut)

## Planning

Vous voyez ici les plannification de positionnement du volet faite dans le planning Agenda

## Commandes

- Azimut soleil : angle Azimuth actuel du soleil
- Elévation soleil : angle d'élevation actuel du soleil
- Executer action : force le calcul de position du volet en fonction de la position du soleil et des conditions et lui applique le resultat quelque soit l\'état de gestion (en pause ou pas)
- Dernière position : derniere position demandé au volet par le plugin
- Etat gestion : état de la gestion (suspendu ou pas)
- Reprendre : force la remise en mode automatique de la gestion (A noter que c'est cette commande qu'il faut lancer pour repasser en gestion automatique si vous avez modifier la position de votre volet manuellement et coché la case "Ne pas reprendre la main")
- Suspendre : suspend le positionnement automatique du volet
- Rafraichir : mets à jour les valeurs des commandes "Azimut soleil" et "Elévation soleil"
- Mode : mode actuel du volet

Vous pouvez ajouter des commandes "mode", le nom de la commande sera le nom du mode.

# Panel

Le plugin possede un panel de gestion en desktop et mobile pour l'activer il suffit d'aller dans Plugins -> Gestion des plugins, cliquer sur le plugin de gestion de volet et tout en bas a droite de cocher les cases pour afficher le panel desktop et mobile
