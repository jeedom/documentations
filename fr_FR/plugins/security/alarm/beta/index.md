# Plugin Alarme

Le plugin Alarme permet à Jeedom d’avoir un vrai système d’alarme pour sa domotique, très simple à utiliser et à configurer.

## Configuration du plugin

Après téléchargement du plugin, il vous suffit juste d’activer celui-ci, il n’y a aucune configuration supplémentaire à ce niveau.

## Notion immédiate

C’est une notion très importante du plugin Alarme et il est très important de bien la comprendre. Pour schématiser c’est comme si vous aviez 2 alarmes, la première : l’alarme immédiate qui ne tient pas compte des délais de déclenchement (attention elle prend bien en compte les délais d’activation) et une 2ème alarme qui elle, prend en compte les délais de déclenchement.

**Pourquoi cette notion immédiate ?**

Cette notion immédiate permet de déclencher des actions bien spécifiques. Par exemple : vous rentrez chez vous et vous n’avez pas désactivé l’alarme, avant de déclencher la sirène il peut être bon de diffuser un message rappellant de bien désactiver l’alarme et si ce n’est pas fait 1 minute plus tard (délai d’activation de 1 minute donc) d’activer la sirène.

Cette notion se retrouve dans différents types d’actions, à chaque fois son principe sera détaillé.

## Equipements

La configuration des équipements Alarme est accessible à partir du menu Plugin => Sécurité.

Une fois une alarme ajoutée vous vous retrouvez avec :

-   **Nom de l’équipement alarme** : nom de votre alarme,
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement,
-   **Catégorie** : la catégorie de l’équipement (sécurité en général pour une alarme),
-   **Activer** : permet de rendre votre équipement actif,
-   **Visible** : rend votre équipement visible sur le dashboard,
-   **Actif en permanence** : indique que l’alarme sera en permanence active (par exemple pour une alarme de détection d’incendie),
-   **Armement visible** : permet de rendre visible ou non la commande d’armement de l’alarme sur le widget,
-   **Statut immédiat visible** : permet de rendre le statut immédiat de l’alarme visible (voir plus bas pour l’explication),
-   **Historiser état et statut de l’alarme** : permet d’historiser ou non l’état et le statut de l’alarme.
-   **Séparer les zones** : permet de rendre les zones indépendantes en terme d'alerte. En temps normal si une zone est en alerte le plugin va ignorer les autres zones. En séparant les zones il répetera les actions pour les autres zones qui entreraient en alerte
-   **Réarmement automatique** : lors d'un déclenchement l'alarme complète se réarme pour prévenir des déclenchements suivants (en temps normal elle ne se réarme pas tant qu'il n'y a pas eu une action scénario/humaine pour le faire)
-   **Ne pas faire les actions immédiates si le capteur n'a pas de délai** : indique à l'alarme de ne pas faire les actions immédiates si le capteur n'a pas de délai de déclenchement, l'alarme ne fera donc que les actions

> **Tip**
>
> Pour chaque action il est possible de spécifier le mode dans lequel elle doit s’exécuter ou dans tous les modes

## Zones

Partie principale de l’alarme. C’est ici que vous configurez les différentes zones et les actions (immédiates et différées par zone, à noter qu’il est aussi possible de les configurer globalement) à faire en cas de déclenchement. Une zone peut aussi bien être volumétrique (pour la journée par exemple) que périmétrique (pour la nuit) ou aussi des zones de la maison (garage, chambre, dépendances…​.).

Un bouton en haut à droite vous permet d’en ajouter autant que vous voulez.

> **Tip**
>
> Il est possible d’éditer le nom de la zone en cliquant sur le nom de celle-ci (en face du label "Nom de la zone").

Une zone est constituée de différents éléments : - déclencheur, - action immédiate, - action.

## Déclencheur

Un déclencheur est une commande binaire, qui lorsqu’elle vaut 1 va déclencher l’alarme. Il est possible d’inverser le déclencheur, pour que ça soit l’état 0 du capteur qui déclenche l’alarme, en mettant "inverser" sur OUI. Une fois votre déclencheur choisi, vous pouvez spécifier un délai d’activiation en minute (il n’est pas possible de descendre en-dessous de la minute). Ce délai permet par exemple, si vous activez l’alarme avant de sortir de chez vous, de ne pas déclencher l’alarme avant une minute (le temps de vous laisser sortir). Autre cas, certains détecteurs de mouvement restent en mode déclenché (valeur 1) pendant un certain temps même si il n’y a aucune détection, par exemple 4 minutes, il est donc bon de décaler l’activation de ces capteurs de 4 ou 5 min pour que l’alarme ne se déclenche pas immédiatement après l’activation. Ensuite vous avez le délai de déclenchement, à la différence du délai d’activation qui n’a lieu que une fois lors de l’activation de l’alarme, celui-ci est mis en place après chaque déclenchement d’un capteur. La cinématique est la suivante lors du déclenchement du capteur (ouverture de porte, détection de présence), si les délais d’activation sont passés, l’alarme va déclencher les actions immédiates mais va attendre que le délai de déclenchement soit fini avant de déclencher les actions. Enfin vous avez le bouton "inverser" qui permet d’inverser l’état déclencheur du capteur (0 au lieu de 1).

Vous avez aussi un paramètre **Maintient** qui permet de spécifier un délai de maintient du déclencheur avant de déclencher l'alarme. Ex si vous avez un détecteur de fumée qui remonte parfois de fausses alarmes vous pouvez spécifier un délai de 2s. Lors du déclenchement de l'alarme Jeedom va attendre 2s et vérifier que le détecteur de fumée est toujours en alerte si ce n'est pas le cas il ne déclenchera pas l'alarme.  

Petit exemple pour bien comprendre : sur le premier déclencheur (*\[Salon\]\[Oeil\]\[Présence\]*) j’ai ici un délai d’activation de 5 minutes et de déclenchement de 1 minute. Cela veut dire que lorsque j’active l’alarme, pendant les 5 premières minutes aucun déclenchement de l’alarme ne pourra avoir lieu à cause de ce capteur. Passé ce délai de 5 minutes, si un mouvement est détecté par le capteur, l’alarme va attendre 1 minute (le temps de me laisser désactiver l’alarme) avant de déclencher les actions. Si j’avais eu des actions immédiates celles-ci se seraient déclenchées immédiatement sans attendre la fin du délai d’activation, les actions non immédiates auraient eu lieu après (1 minute après les actions immédiates).

### Action immédiate

Comme décrit plus haut, ce sont des actions qui se déclenchent dès le déclenchement en ne tenant pas compte du délai de déclenchement (mais en tenant compte quand même du délai d’activation). Vous avez juste à sélectionner la commande d’action voulue puis en fonction de celle-ci remplir les paramètres d’exécution.

> **Note**
>
> Lorsque plusieurs zones sont déclenchées successivement, seules les actions immédiates de la 1ere zone déclenchée sont exécutées.

## Modes

Les modes sont assez simples à configurer, il suffit juste d’indiquer les zones actives en fonction du mode.

> **Tip**
>
> Il est possible de renommer le mode en cliquant sur le nom de celui-ci (en face du label "Nom du mode"). Attention lors du renommage d'un mode il faut absoluement revoir les scénarios/équipement qui utiliser l'ancien nom pour les passer sur le nouveau

> **Note**
>
> Lors du renommage d’un mode, il faut sur le widget de l’alarme recliquer sur le mode en question pour une prise en compte complète (sinon Jeedom reste sur l’ancien mode)

> **Important**
>
> Il faut absolument créer au moins un mode et lui affecter des zones sinon votre alarme ne marchera pas.

## Activation OK

Cette partie permet de définir les actions à faire suite à une activation de l’alarme. Ici encore, vous retrouverez la notion immédiate qui représente les actions à faire tout de suite après armement de l’alarme, ensuite viennent les actions d’activation qui elles sont exécutées après les délais de déclenchement.

Dans l’exemple, ici j’allume par exemple une lampe en rouge pour signaler que l’armement a bien été pris en compte et je l’éteins une fois l’armement complet (car normalement il n’y a plus personne dans le périmètre de l’alarme, sinon ça la déclenche).

> **Important**
>
> Les actions d’activation OK ne prennent pas en compte les délais d’activation. Si vous avez un délai sur l’activation d’un capteur d’ouverture, même si votre porte est ouverte les actions d’activation seront exécutées.

## Activation KO

Ces actions sont exécutées si un capteur est déclenché suite à l'activation de l'alarme ou après le delai d'activation d'un capteur si celui-ci est en alerte

Vous pouvez aussi ici ajouter des actions lors de la reprise de surveillance d'un capteur

## Déclenchement

Permet de configurer les actions globales à faire lors d’un déclenchement de l’alarme. Vous n’êtes pas obligé d’en ajouter si vous avez configuré des actions spécifiques par zone.

## Désactivation OK

Ces actions sont exécutées lorsque l’alarme est désactivée et qu’elle n’est pas déclenchée. Exemple vous rentrez chez vous, en ouvrant la porte cela déclenche l’alarme, mais vous avez mis un délai de déclenchement sur le capteur et vous coupez l’alarme avant la fin du délai, les actions de désactivation OK seront exécutées. Si par contre vous aviez arrêté l’alarme après la fin de délai de déclenchement cela n’aurait pas été le cas.

## Réinitialisation

Cette partie vous permet de définir les actions à faire lorsque l’alarme est déclenchée puis désactivée. Ici aussi il y a des actions immédiates et différées. Voici un exemple : vous rentrez chez vous, les délais d’activation sont passés, mais en ouvrant la porte cela déclenche l’alarme. Si vous la désactivez (avant les délais de déclenchement) alors les actions de réinitialisation immédiate seront exécutées, mais pas celles de réinitialisation normale. Si vous la désactivez après les délais de déclenchement, alors les actions de réinitialisation immédiate et normale seront exécutées.

## FAQ

>**Quels sont les tags possible ?**
>
> Les tags possible sont :
>
> - #mode# : nom du mode en cours
> - #alarm_trigger# : nom de la commande qui a déclenché l'alerte
> - #zone# : nom de la zone de la commande qui a déclenché l'alerte

>**Comment réarmer une alarme permanente ?**
>
>Il suffit de cliquer sur un des modes de l’alarme (même celui actif).

>**Peut-on mettre les délais en secondes ?**
>
>C’est possible pour le "Délai de déclenchement" (il faut mettre des nombres à virgule, ex : 0.5 pour 30 secondes) mais pas pour le "Délai d’activation" (ne pas mettre de chiffres à virgule pour ce paramètre).

>**Je ne comprends pas mon alarme ne fait rien**
>
>Vérifiez que l’alarme a bien un mode d’actif
