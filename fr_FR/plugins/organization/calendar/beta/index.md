# Plugin Agenda

Le plugin **Agenda** permet de gérer des agendas et de déclencher des actions en début et/ou fin d'évènement.

# Configuration

## Configuration du plugin

Ce plugin ne nécessite pas de configuration particulière et doit simplement être activé après l'installation.

## Configuration des équipements

Les équipements sont accessibles à partir du menu **Plugins → Organisation → Agenda**.

Sur cette page vous retrouvez la liste de vos Agendas. Cliquez sur un agenda pour accéder à la configuration de l'équipement correspondant :

- **Nom de agenda** : Nom de l'équipement Agenda.
- **Objet parent** : Indique l’objet parent auquel appartient l’équipement.
- **Catégorie** : Permet de choisir la catégorie de l'équipement.
- **Options** :
    - **Activer** : Permet de rendre l'équipement actif.
    - **Visible** : Rend l'équipement visible.

- **Widget** :
    - **Nombre de jours** : défini le nombre de jours maximum à afficher sur le widget.
    - **Nombre d’évènements** : défini le nombre d’évènements maximum à afficher sur le widget.

- **Liste des évènements de l’agenda** : affiche la liste de tous les évènements de l’agenda *(un clic sur le nom permet d’éditer l’évènement)*.

L'onglet **Agenda** permet d'afficher une vue type agenda incluant tous les évènements. Vous pouvez vous déplacer dans l'agenda, choisir de l’afficher par jour, semaine ou mois et même déplacer des évènements par glisser/déposer. Un clic sur un évènement ouvre la fenêtre d’édition de l'évènement concerné.

# Evènements

## Création d'un évènement

Pour créer un nouvel évènement, cliquez sur le bouton **Ajouter évènement** depuis la page de configuration de l'agenda auquel l'évènement doit être rattaché ou sur le bouton **Dupliquer** depuis la fenêtre de configuration d'un évènement appartenant au même agenda.

## Configuration des évènements

La fenêtre de création/configuration des évènements permet de définir les paramètres, les actions et la récurrence propres à chaque évènement. Sur le premier onglet, vous retrouvez :

-   **Nom de l’événement** : nom de votre événement.
-   **Masquer sur le widget** : permet de ne pas afficher cet évènement sur le widget.
-   **Icône** : permet d’ajouter une icône devant le nom de l'évènement *(cliquer sur le bouton "Choisir une icône")*.
-   **Couleur de fond** : permet de choisir la couleur de fond de l'événement *(cocher la case pour un fond transparent)*.
-   **Couleur du texte** : permet de choisir la couleur du texte l'événement.

En haut à droite de la fenêtre d'édition des évènements se trouvent 3 boutons:

- **Dupliquer** : permet de dupliquer l'évènement pour en créer un nouveau *(pensez à sauvegarder le nouvel évènement ainsi généré)*.
- **Enregistrer** : permet de sauvegarder l'évènement.
- **Supprimer** : permet de supprimer l'évènement complet ou seulement une occurence.

## Actions de début/fin

Dans cet onglet, vous allez pouvoir définir les actions à effectuer au début et/ou à la fin de l’évènement. Pour ajouter une action, il suffit de cliquer sur le bouton **+ Action de début/fin**, vous pouvez ajouter autant d'actions que vous le souhaitez.

![Ajouter des actions](../images/calendar_addActions.png)

Les actions peuvent être des commandes Jeedom standards ou bien [des commandes spécifiques de scénario](https://doc.jeedom.com/fr_FR/core/4.1/scenario#Les%20commandes%20sp%C3%A9cifiques).

>**ASTUCE**
>
>Il est possible de modifier l’ordre des actions par glisser/déposer.

## Programmation des évènements

C’est au sein de cet onglet que se trouve toute la gestion temporelle de votre évènement :

- **Dates** :
    - **Début** : date de début de l'évènement.
    - **Fin** : date de fin de l'évènement *(l'icône en bout de ligne permet de définir l'évènement sur toute la journée)*.
- **Inclure par date** : permet d'ajouter une date d’occurence. Vous pouvez en définir plusieurs en les séparant par des ``, (virgules)`` *(exemple: AAAA-MM-JJ,AAAA-MM-JJ)*. Il est également possible de définir une plage de dates avec ``: (deux points)`` *(exemple: AAAA-MM-JJ:AAAA-MM-JJ)*.
- **Inclure par agenda** : permet d’inclure des occurences en fonction de celles d'un autre agenda ou d'un autre évènement. Par exemple, vous avez un événement ``A``, répété tous les lundis, que vous incluez dans votre évènement courant : alors votre évènement courant sera également répété tous les lundis.
- **Exclure par date** : idem que **Inclure par date** mais pour ignorer des occurences.
- **Exclure par agenda** : permet de mettre en exclusion cet événement en fonction d’un autre agenda ou évènement *(pour éviter que 2 événements contradictoires se retrouvent ensembles par exemple)*.

>**INFORMATION**
>
>Les options **Exclure par date** et **Exclure par agenda** ne sont accessibles que si la répétition de l'évènement est activée.

## Répétition des évènements

La répétition va vous permettre de paramétrer les occurences de vos évènements exactement comme vous le désirez :

- **Activer** : cocher la case pour activer la répétition et afficher les options correspondantes.
- **Mode - Répétition simple** :
    - **Répéter tous les** : permet de définir la fréquence de répétition de l’évènement *(tous les 3 jours, tous les 2 mois, etc…​)*.
    - **Uniquement les** : permet de restreindre la répétition à certains jours de la semaine.
- **Mode - Répétition avancée** :
    - **Fréquence** : permet de choisir une répétition tous les 2ème lundis du mois par exemple...
- **Restriction** : permet d’exclure les jours fériés ou de restreindre l’événement aux jours fériés / semaines paires / semaines impaires uniquement.
- **Jusqu’à** : dernière date d’occurence de l’événement.

>**INFORMATION**
>
>Les jours fériés concernent uniquement la France métropolitaine.

# Agenda, commandes et scénario

Un agenda possède plusieurs commandes :

- **En cours** : donne la liste des évènements en cours séparés par des virgules. Pour l’utiliser dans un scénario, le plus simple est d’utiliser l’opérateur *"contient"* (``matches``) ou *"ne contient pas"* (``not matches``) *(exemple : ``[Appartement][test][En cours] matches "/Anniv/"`` sera vrai si dans la liste des évènements en cours il y a "Anniv")*.
- **Ajouter une date** : permet, depuis un scénario, d'ajouter une date à un évènement. Vous pouvez ajouter plusieurs dates en les séparant par des virgules *(attention si vous changez le nom de l'évènement il faudra le modifier dans le scénario)*.
- **Retirer une date** : permet, depuis un scénario, de retirer une date à un évènement. Vous pouvez retirer plusieurs dates en les séparant par des virgules *(attention si vous changez le nom de l'évènement il faudra le modifier dans le scénario)*.

>**INFORMATION**
>
>Il est possible d’utiliser la commande "En cours" comme déclencheur de scénario. Chaque mise à jour de l’information déclenchera l’exécution du scénario, il est donc préférable d’utiliser cette commande dans un scénario programmé avec un test sur la valeur.

>**IMPORTANT**
>
>Attention il ne faut surtout pas faire d'evenement à répétition qui se chevauge lui meme, ce genre de cas n'est pas géré par le plugin. Exemple un evenement qui dure 48h et qui se répéte tous les jours.
