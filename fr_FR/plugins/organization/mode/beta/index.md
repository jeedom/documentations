# Plugin Mode

Le plugin **Mode** va vous permettre de créer des modes pour gérer facilement différentes fonctionnalités *(logement, alarme, présence, etc...)* et effectuer des actions automatiquement lors du passage d'un mode à l'autre.

# Configuration

Ce plugin ne nécessite pas de configuration particulière et doit simplement être activé après l'installation.

## Configuration des équipements

Pour accéder aux différents équipements **Mode**, il faut se diriger vers le menu **Plugins → Organisation → Mode**.

>**INFORMATION**
>
>Le bouton + Ajouter permet d’ajouter un nouvel équipement **Mode**.

Cliquez sur un équipement **Mode** pour accéder à sa page de gestion. Le premier onglet donne accès aux options de configuration de l'équipement :

- **Nom de l’équipement** : Nom de l'équipement Mode.
- **Objet parent** : Indique l’objet parent auquel appartient l’équipement.
- **Catégorie** : Permet de choisir la catégorie de l'équipement.
- **Options** :
    - **Activer** : Permet de rendre l'équipement actif.
    - **Visible** : Rend l'équipement visible.

- **Commande de verrouillage** : Case à cocher pour afficher la commande de verrouillage sur le widget.

Le second onglet va nous permettre de définir les différents modes de l'équipement ainsi que les actions associées si nécessaire :

- **Ajouter mode** : Cliquez sur le bouton pour créer un nouveau mode dans l'équipement.

En dessous, vous retrouvez la liste des modes existants :

![Modes](../images/mode_screenshot1.png)

Cliquez sur la ligne d'un mode pour déployer sa configuration et accéder à la gestion des actions d'entrée/sortie. L'exécution de ces actions peut être conditionnée par le mode duquel on arrive *(mode précédent)* pour les actions d'entrée ou par le mode sur lequel on se rend *(mode suivant)* pour les actions de sortie (voir [les exemples](#Exemples)).

>**INFORMATION**
>
>Cliquez sur le nom du mode pour le changer. Attention, en cas de modification du nom d'un mode, il sera nécessaire de revoir tous les scénarios/équipements qui y faisaient référence sous son ancien nom.

# Commandes

La liste des commandes est consultable en cliquant sur le bouton **Configuration avancée** d'un équipement **Mode**. Chaque mode créé dans un équipement génèrera la commande action correspondante en complément des commandes déjà existantes :

- **Verrouillage** :
    - **Lock/Unlock** : Permet de verrouiller le thermostat pour empêcher tout changement de mode.
    - **Unlock** : Permet de déverrouiller le thermostat.
>La case **Commande de verrouillage** doit être cochée pour que cette commande soit affichée sur le widget.

- **Mode** : Mode en cours.
- **Mode précédent** : Mode précédent *(commande non visible par défaut)*.
- **Retour mode précédent** : Permet de revenir au mode précédemment actif.
- **Aller au mode suivant** : Permet d'aller au mode suivant dans la liste.

# Exemples

## Modes Volet

Exemple d'équipement sans actions d'entrée ni de sortie sur les modes. Un équipement de ce type peut être utile comme déclencheur d'un scénario ou pour conditionner des actions dans un scénario :

![Mode volet](../images/mode_volet.png)

## Modes Présence

Exemple d'un équipement avec des actions définies lorsque l'on change de mode. Dans cet équipement, nous allons créer 3 modes à partir de l'onglet **Modes** de l'équipement :

- **Présent**
- **Absent**
- **Vacances**

![Mode présence](../images/mode_presence_mode.png)

Lorsque l'on passe dans le mode **Présent**, on veut que l'alarme se désactive et que le chauffage passe en *Confort (2 actions d'entrée)* :

![Mode présence action entrée](../images/mode_presence_entree.png)

Lorsque l'on quitte le mode **Présent** pour passer dans le mode **Absent** ou **Vacances**, on veut que l'alarme s'active *(1 action de sortie)* :

![Mode présence action sortie](../images/mode_presence_sortie.png)

Concernant les modes **Absent** et **Vacances**, nous allons juste créer sur chacun 1 action d'entrée pour gérer le chauffage, *Eco* pour le mode **Absent** et *Hors-gel* pour le mode **Vacances** :

![Mode absent vacances](../images/mode_presence_absent_vacances.png)

### Fonctionnement Présence

- Quand on passe du mode **Présent** au mode **Absent**, l'alarme s'active (action de sortie du mode **Présent**) et le chauffage passe en *Eco* (action d'entrée du mode **Absent**).  
- Quand on passe du mode **Présent** au mode **Vacances**, l'alarme s'active (action de sortie du mode **Présent**) et le chauffage passe en *Hors-gel* (action d'entrée du mode **Vacances**).
- Quand on passe du mode **Absent** au mode **Présent**, l'alarme se désactive (action d'entrée du mode **Présent**) et le chauffage passe en *Confort* (action d'entrée du mode **Présent**).
- Quand on passe du mode **Absent** au mode **Vacances**, le chauffage passe en *Hors-gel* (action d'entrée du mode **Vacances**).
- Quand on passe du mode **Vacances** au mode **Présent**, l'alarme se désactive (action d'entrée du mode **Présent**) et le chauffage passe en *Confort* (action d'entrée du mode **Présent**).
- Quand on passe du mode **Vacances** au mode **Absent**, le chauffage passe en *Eco* (action d'entrée du mode **Absent**).

## Modes Présence bis

On modifie légèrement l'exemple précédent pour illustrer le filtrage sur les actions :

![Filtre](../images/mode_presence_filtre.png)

Pour cela, l'activation de l'alarme ne va plus se faire sur la sortie du mode **Présent** mais sur l'entrée des modes **Absent** et **Vacances**. Après modification on obtient le résultat suivant :

![Présent](../images/mode_presence_bis_present.png)
![Absent](../images/mode_presence_bis_absent.png)
![Vacances](../images/mode_presence_bis_vacances.png)

>**INFORMATION**
>
>sur les modes **Absent** et **Vacances**, l'alarme ne s'active que si on vient du mode **Présent**. Si on passe de **Absent** à **Vacances** *(ou inversement)*, l'alarme est déjà activée, il n'y a donc pas besoin de refaire l'action.

### Fonctionnement Présence bis

- Quand on passe du mode **Présent** au mode **Absent**, l'alarme s'active (action d'entrée du mode **Absent**) et le chauffage passe en *Eco* (action d'entrée du mode **Absent**).  
- Quand on passe du mode **Présent** au mode **Vacances**, l'alarme s'active (action d'entrée du mode **Vacances**) et le chauffage passe en *Hors-gel* (action d'entrée du mode **Vacances**).
- Quand on passe du mode **Absent** au mode **Présent**, l'alarme se désactive (action d'entrée du mode **Présent**) et le chauffage passe en *Confort* (action d'entrée du mode **Présent**).
- Quand on passe du mode **Absent** au mode **Vacances**, le chauffage passe en *Hors-gel* (action d'entrée du mode **Vacances**). L'activation de l'alarme ne se fait pas.
- Quand on passe du mode **Vacances** au mode **Présent**, l'alarme se désactive (action d'entrée du mode **Présent**) et le chauffage passe en *Confort* (action d'entrée du mode **Présent**).
- Quand on passe du mode **Vacances** au mode **Absent**, le chauffage passe en *Eco* (action d'entrée du mode **Absent**). L'activation de l'alarme ne se fait pas.
