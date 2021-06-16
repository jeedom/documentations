# Plugin Philips Hue

# Description

Ce plugin va vous permettre d'intégrer votre écosystème Philips Hue dans Jeedom. La plugin offre la possibilité de piloter jusqu'à 2 ponts Philips Hue simultanément.

# Configuration

## Configuration du plugin

Comme tout plugin Jeedom, le plugin **Philips Hue** doit être activé après l'installation.

Une fois le plugin activé, il faudra renseigner l’adresse IP à laquelle votre pont Philips Hue est joignable.

>**ASTUCE**
>
>Vous pouvez renseigner jusqu'à 2 ponts Philips Hue qui seront en mesure de communiquer avec Jeedom simultanément.

Le plugin **Philips Hue** utilise son propre démon afin de rester en contact constant avec le(s) pont(s) Philips Hue. Vous pouvez en contrôler le statut sur la page de configuration du plugin.

>**INFORMATION**
>    
>Il n'est normalement pas nécessaire de démarrer le démon manuellement, celui-ci étant automatiquement géré par le plugin.

## Configuration des équipements

Pour accéder aux différents équipements **Philips Hue**, dirigez-vous vers le menu **Plugins → Communication → Philips Hue**.

>**INFORMATION**
>    
>Le bouton **+ Ajouter** permet d'ajouter un nouvel équipement Philips Hue.

En cliquant sur un équipement déjà créé dans la liste, vous êtes dirigés vers sa page de configuration :

- **Nom de l’équipement** : nom de votre équipement Hue.
- **Objet parent** : indique l’objet parent auquel appartient l’équipement.
- **Catégorie** : les catégories de l’équipement (il peut appartenir à plusieurs catégories).
- **Activer** : permet de rendre l'équipement actif.
- **Visible** : rend l'équipement visible sur le dashboard.

- **Modèle** : renseignez le modèle de votre équipement Philips Hue.
- **Pont** : indique le pont sur lequel l'équipement est connecté.
- **Toujours allumé** : indique à Jeedom de ne jamais marquer la lampe comme étant non-joignable.

>**A SAVOIR**
>
>Il y aura toujours un équipement nommé "Toutes les lampes" qui correspond au groupe 0 qui existe dans tous les cas.

En cliquant sur le second onglet, nous retrouvons la liste des commandes :

- **Nom** : le nom affiché sur le dashboard.
- **Icône** : permet d'affecter une icône à la commande.
- **Options** : permet d’afficher ou de masquer certaines commandes et/ou d’en historiser les valeurs.
- **Paramètres** : permet de définir des paramètres optionnels sur les commandes info/numérique.
- **Configuration avancée** *(roue crantée)* : permet d’afficher la fenêtre de configuration avancée de la commande.
- **Tester** : permet de tester la commande.
- **Bouton -** : permet de supprimer la commande.


# Le groupe 0 (Toute les lampes)

Le groupe 0 ne peut pas être supprimé ni modifié. Il pilote forcément toutes les lampes et c’est aussi lui qui porte les scènes.

En effet vous pouvez faire des "scènes" avec les Philips Hue. Celles-ci doivent absolument être faites à partir de l’application mobile (impossible de les faire depuis Jeedom). Suite à l’ajout d’une scène vous devez absolument synchroniser Jeedom avec le pont *(simplement en sauvegardant la configuration du plugin)*.

# Transition

Commande un peu particulière qui est conçue pour être utilisée dans un scénario. Elle permet de définir la durée en secondes de la transition entre l’état actuel et la prochaine commande.

Par exemple le matin vous pouvez vouloir simuler le lever du soleil en 3 minutes. Dans votre scénario vous avez donc juste à appeler la commande transition avec ``180`` en paramètre puis appeler la commande couleur vers la couleur désirée.

# Animation

Les animations sont des enchainements de transition, actuellement il existe :

- **sunrise** : permet de simuler un lever de soleil. Il peut prendre en paramètre :
    - **duration** : définir la durée, par défaut 720s. Pour 5 minutes il faudra indiquer ``duration=300``.
- **sunset** : pour simuler un couché de soleil. Il peut prendre en paramètre :
    - **duration** : définir la durée, par défaut 720s. Pour 5 minutes il faudra indiquer ``duration=300``.
- **adaptive_lighting** : permet de synchroniser la température de couleur et luminosité avec le soleil (elles evoluent aussi au cours de la journée). Attention à bien renseigner dans jeedom votre latitude/longitude

# Bouton télécommande

Voici la liste des codes pour les boutons :

- 1002 pour le bouton On
- 2002 pour le bouton augmenter
- 3002 pour le bouton réduire
- 4002 pour le bouton off

La même chose avec XXX0 pour la touche appuyée, XXX1 pour la touche maintenue et XXX2 pour la touche relâchée.

Voici les séquences pour le bouton On par exemple :

- Appui court : Lors de l'appui on passe sur 1000 et quand on relâche on passe sur 1002
- Appui Long : Lors de l'appui on passe sur 1000, durant l'appui on passe sur 1001, quand on relâche on passe sur 1002

# FAQ

> **J’ai l’impression qu’il y a un décalage sur certaines couleurs entre ce que je demande et la couleur de l’ampoule.**
>
> Il semble que la grille de couleur des ampoules ait un offset, nous cherchons comment corriger.

> **Quelle est la fréquence de rafraîchissement ?**
>
> Le système récupère les informations toutes les 2s.

> **Mon équipement (lampe, interrupteur, etc...) n'est pas reconnu par le plugin, comment faire ?**
>
> Il faut :
> - nous décrire l'équipement que vous voulez qu'on ajoute avec photos et les possibilités de celui-ci et nous envoyer le log en debug de la synchronisation avec le pont, le tout en nous contactant par une demande de support

>**J'ai ajouté l'historisation d'une commande mais ca ne marche pas**
>
>Pour des questions de performance, il faut redémarrer le démon Philips Hue pour qu'il prenne en compte ce changement.
