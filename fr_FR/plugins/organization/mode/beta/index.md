# Plugin Mode

Plugin permettant de gérer différents modes d’un appartement/maison/pièce, mais aussi des ambiances.

## Configuration du plugin

Après téléchargement du plugin, il vous suffit juste d’activer celui-ci, il n’y a aucune configuration à ce niveau.

## Configuration des équipements

La configuration des équipements mode est accessible à partir du menu plugin puis organisation :

Vous retrouvez ici toute la configuration de votre équipement :

- **Nom de l’équipement Mode** : nom de votre équipement Mode,
- **Objet parent** : indique l’objet parent auquel appartient l’équipement,
- **Activer** : permet de rendre votre équipement actif,
- **Visible** : rend votre équipement visible sur le dashboard,
- **Catégorie** : les catégories de l’équipement (il peut appartenir à plusieurs catégories).
- **Ajouter mode** : bouton permettant d’ajouter un nouveau mode

En dessous vous retrouvez la liste des modes, en cliquant dessus vous allez pouvoir choisir les actions à effectuer lors de l’entrée et/ou la sortie de ce mode.

>**IMPORTANT**
>
>Attention lors du renommage d'un mode il faut absolument revoir les scénarios/équipements qui utilisaient l'ancien nom pour les passer sur le nouveau.

## Création d'un équipement

- Cliquer sur *Ajouter*
- Donner un nom
- Sélectionner l'*objet parent*
- Activer le
- Sélectionner l'onglet *Modes* pour ajouter les modes (voir [les exemples](#exemples))

## Exemples

### Mode Volet

Exemple d'un équipement sans action d'entrée ou de sortie sur les modes. Un équipement de ce type peut être utile comme déclencheur d'un scénario ou pour conditionner des actions dans un scénario.

![Mode volet](../images/mode_volet.png)

### Mode Présence

Exemple d'un équipement avec des actions définis lorsque l'on change de mode.

Dans cet équipement, on va créer 3 modes à partir de l'onglet *Modes* de l'équipement:

- Présent
- Absent
- Vacances

![Mode présence](../images/mode_presence_mode.png)

Lorsque l'on passe dans le mode *Présent*, on veut que l'alarme se désactive et que le chauffage passe en mode confort (2 actions d'entrée).

![Mode présence action entrée](../images/mode_presence_entree.png)

Lorsque l'on quitte le mode *Présent* pour passer dans le mode *Absent* ou *Vacances*, on veut que l'alarme s'active (1 action de sortie).

![Mode présence action sortie](../images/mode_presence_sortie.png)

Pour les modes *Absent* et *Vacances*, on va juste créer sur chaqu'un de ces modes 1 action d'entrée pour gérer le chauffage (Éco pour le mode *Absent*, Hors gel pour le mode *Vacances*).

![Mode absent vacances](../images/mode_presence_absent_vacances.png)

#### Fonctionnement

- Quand on passe du mode *Présent* au mode *Absent*, l'alarme s'active (action de sortie du mode *Présent*) et le chauffage passe en éco (action d'entrée du mode *Absent*).  
- Quand on passe du mode *Présent* au mode *Vacances*, l'alarme s'active (action de sortie du mode *Présent*) et le chauffage passe en hors gel (action d'entrée du mode *Vacances*).
- Quand on passe du mode *Absent* au mode *Présent*, l'alarme se désactive (action d'entrée du mode *Présent*) et le chauffage passe en confort (action d'entrée du mode *Présent*).
- Quand on passe du mode *Absent* au mode *Vacances*, le chauffage passe en hors gel (action d'entrée du mode *Vacances*).
- Quand on passe du mode *Vacances* au mode *Présent*, l'alarme se désactive (action d'entrée du mode *Présent*) et le chauffage passe en confort (action d'entrée du mode *Présent*).
- Quand on passe du mode *Vacances* au mode *Absent*, le chauffage passe en éco (action d'entrée du mode *Absent*).

### Mode Présence bis

On modifie légèrement l'exemple précédent pour illustrer le filtrage sur les actions.

![Filtre](../images/mode_presence_filtre.png)

Pour cela, l'activation de l'alarme ne va plus se faire sur la sortie du mode *Présent* mais sur l'entrée des modes *Absent* et *Vacances*. Après modification on obtient ça :

![Présent](../images/mode_presence_bis_present.png)
![Absent](../images/mode_presence_bis_absent.png)
![Vacances](../images/mode_presence_bis_vacances.png)

Remarque : sur les modes *Absent* et *Vacances*, l'alarme ne s'active que si on vient du mode *Présent*. Si on passe de *Absent* à *Vacances* (et inversement), l'alarme est déjà activée, donc il n'y a pas besoin de refaire l'action.

#### Fonctionnement bis

- Quand on passe du mode *Présent* au mode *Absent*, l'alarme s'active (action d'entrée du mode *Absent*) et le chauffage passe en éco (action d'entrée du mode *Absent*).  
- Quand on passe du mode *Présent* au mode *Vacances*, l'alarme s'active (action d'entrée du mode *Vacances*) et le chauffage passe en hors gel (action d'entrée du mode *Vacances*).
- Quand on passe du mode *Absent* au mode *Présent*, l'alarme se désactive (action d'entrée du mode *Présent*) et le chauffage passe en confort (action d'entrée du mode *Présent*).
- Quand on passe du mode *Absent* au mode *Vacances*, le chauffage passe en hors gel (action d'entrée du mode *Vacances*). L'activation de l'alarme ne se fait pas.
- Quand on passe du mode *Vacances* au mode *Présent*, l'alarme se désactive (action d'entrée du mode *Présent*) et le chauffage passe en confort (action d'entrée du mode *Présent*).
- Quand on passe du mode *Vacances* au mode *Absent*, le chauffage passe en éco (action d'entrée du mode *Absent*).  L'activation de l'alarme ne se fait pas.
