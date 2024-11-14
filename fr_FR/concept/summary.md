# Les résumés

## Découverte des résumés

Jeedom propose un moyen très simple et clair d'afficher la situation de différents composants de votre habitat, afin de voir tout de suite combien de lumières sont allumées, de volets ouverts, l'état de l'alarme, la température, etc.

Les résumés sont affichés sous forme de petites icônes dans la barre de Jeedom en haut et sur chaque objet (Dashboard et Syntèse). Au clic, ils permettent de voir directement les équipements compris dans le résumé sur lequel vous avez cliqué pour le agir dessus si nécessaire.

Il faut distinguer deux types de résumé :

- Le résumé global : C'est l'ensemble des icônes de résumé affiché dans la barre de Jeedom.
- Les résumés objet : Chaque objet possède son propre résumé affiché sur la synthèse dans l'objet et sur le Dashboard à droite du nom de l'objet.

![Découverte des résumés](images/summary-intro.gif)

Le résumé global ne se paramètre pas directement. C'est un concentré des résumés des autres objets. Par exemple, si une lumière est allumée dans la cuisine et deux dans le salon, le résumé global affichera trois lumières allumées. Bien sûr, tout ceci est paramétrable, comme nous allons le voir plus bas.

Les résumés se configurent donc sur chaque objet, dans l'onglet... Résumé !

> Remarque
>
> Cette documentation a été écrite et illustrée sur une Core v4.2. Certaines options peuvent donc varier suivant votre version.

## Configuration générale des résumés

Avant de voir la configuration sur un objet, pour pouvoir configurer un résumé il faut qu'il existe.

Allez dans **Réglages → Système → Configuration** puis sur l'onglet **Résumés**.

{% include lightbox.html src="images/summary-admin.jpg" data="settings" title="Configuration des résumés" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Vous avez ici la liste de tous les résumés que vous allez pouvoir paramétrer sur chaque objet. Ici, nous pourrons paramétrer les résumés *Présence* (si vous regardez bien, vous voyez dans le résumé global qu'il y a une personne à la maison), *Alerte*, *Mouvement*, *Chauffage* etc. Et bien sûr, vous pouvez supprimer et ajouter des types de résumé ici afin de les avoir à disposition ensuite sur les objets.

Rassurez vous, plusieurs choses sur cet aperçu ont été paramétrées, mais par défaut Jeedom possède une liste de résumés avec des paramètres standard.

Parcourons ce qu'on va définir ici:

- **Clé** : C'est une valeur qui doit être unique dans cette liste, qui sert de référence pour le Core.
- **Nom** : Le nom (type) du résumé, que vous retrouverez dans les paramètres des objets.
- **Calcul** : Le type de calcul utilisé pour la valeur affichée. La somme pour des états, la moyenne pour par exemple des températures, humidités ou la valeur texte.
- **Icône** : L'icône du résumé, affichée sur l'objet et éventuellement dans le résumé global.
- **Icône si nul** : Icône du résumé si sa valeur vaut 0. Permet de spécifier une icône différente comme un volet fermé, une lumière éteinte ou de couleur différente, etc.
- **Unité** : Unité du résumé, qui sera affichée à droite de la valeur.
- **Masquer le nombre** : N'affiche jamais la valeur du résumé (le nombre à droite de l'icône).
- **Masquer le nombre si nul** : Permet de masquer la valeur du résumé, seulement si celle-ci vaut 0. On peut ainsi souhaiter avoir l'icône volet ouvert avec leur nombre de volets ouverts et l'icône volet fermé sans le nombre quand tous les volets sont fermés.
- **Méthode de comptage** : Si vous comptez une donnée binaire alors il faut mettre cette valeur à binaire. Exemple : si vous comptez le nombre de lampes allumées mais que vous avez juste la valeur du variateur (0 à 100), alors il faut mettre binaire, comme cela Jeedom considéra que si la valeur est supérieure à 1, alors la lampe est allumée.
- **Si nul** : Afficher le résumé même quand sa valeur est 0.
- **Ignorer si** : Ignorer une commande pour ce résumé si celle-ci n'a pas d'update depuis x minutes.
- **Lier à un virtuel** : Lance la création d'un équipement virtuel avec des commandes correspondantes aux valeurs du résumé.
- **Supprimer le résumé** : Le dernier bouton, tout à droite, permet de supprimer le résumé.

>**NOTE**
>
>Pour supprimer une icône il suffit de double-cliquer sur celle-ci

Par exemple ici :

- Si nous regardons l'animation en début de page, le 3ème résumé, correspondant à **Mouvement**, indique en rouge qu'il y a *1* mouvement. Sur l'aperçu ci dessus, nous voyons que c'est l’icône du cercle vert, sans chiffre. En effet, si vous regardez sa ligne, l’icône verte est configurée comme **Icône si nul** et la valeur n'est pas affichée car **Masquer le nombre si nul** est coché. De la même façon, le résumé *Porte* est en vert, sans nombre, alors que le résumé *Lumière* est en jaune, avec le nombre de lumières allumées.

> Conseil
>
> Vous pouvez aussi changer l'ordre dans lequel les résumés sont affichés en déplaçant une ligne vers le haut ou le bas à la souris.


## Configuration des résumés objet

Une fois la liste des résumés disponibles en configuration de Jeedom, nous pouvons donc les utiliser sur chaque objet.

Dans **Outils → Objets**, ici sur l'objet Salon :

{% include lightbox.html src="images/summary-object-1.jpg" data="settings" title="Résumé objet" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Ici, nous avons deux parties :

### Configuration des résumés

Les colonnes du tableau présentent chaque type de résumé disponible en configuration comme vu plus haut. Pour chaque résumé, trois options :

- **Remonter dans le résumé global** : C'est ici que vous choisissez, pour chaque résumé, si celui de cet objet doit être pris en compte dans le résumé global. Par exemple, ici, le résumé *Volet* du Salon est coché, donc il remonte dans le résumé global. Si on regarde dans le résumé global, dans les 6 volets ouverts affichés, il y a ceux du Salon ! Inversement, si on regarde le résumé *TempExt* (16.1°C dans le résumé global), il est décoché, car je ne souhaite remonter que la température de l'objet Jardin dans le résumé global.
- **Masquer en desktop** : Pour ne pas afficher ce résumé à côté du nom de l’objet sur le Dashboard.
- **Masquer en mobile** : Pour ne pas afficher ce résumé à côté du nom de l’objet en mobile.

### Commandes des résumés

Chaque onglet représente un type de résumé défini dans la configuration de Jeedom. Cliquez sur **Ajouter une commande** pour que celle-ci soit prise en compte dans le résumé. Vous avez le choix de sélectionner la commande de n’importe quel équipement de Jeedom, même s’il n’a pas pour parent cet objet.

Ici, nous voyons les trois volets présents dans le résumé de cet objet. Et *Volet* étant activé dans le résumé global, il seront comptés dans celui-ci aussi.

### Onglet Résumé par équipement

Cette page permet de sélectionner les commandes de résumés d'une autre manière : elle affiche tous les équipements ayant l'objet comme parent. Sur chaque équipement, en cliquant dessus, la liste des commandes info de l'équipement est présentée, avec sur la droite le moyen d'attribuer cette commande à un ou plusieurs résumés de l'objet.

Si au moins un résumé est déjà défini, le sélecteur apparaît en orange, avec les types de résumés cochés sur la droite.

## Résumés et virtuels

Les résumés entretiennent avec le [plugin Virtuel](https://market.jeedom.com/index.php?v=d&p=market_display&id=21) une relation ambiguë, pas toujours facile à appréhender, mais pourtant très puissante notamment depuis le Core v4.2 et les actions sur résumé ! Encore là ? On continue...

Normalement, vous devriez maintenant avoir créé quelques résumés sur vos objets et donc avoir plusieurs infos sur vos objets et dans le résumé global, comme vos volets ouverts, vos lumières etc.

Ces résumés sont extrêmement pratiques pour avoir un état global et visuel du logement très rapidement et au clic pouvoir agir dessus en affichant les équipements d'un résumé. Mais si on poursuit le raisonnement, ça veux dire que cette info existe... Et qu'on pourrait apprécier de l'utiliser dans un scénario !

En effet, puisque mon résumé sait que j'ai 3 lumières allumées, pourquoi ne pas pouvoir tester dans un scénario SI une lumière est allumée ? Ou même déclencher le scénario quand une lumière s'allume ? Voire même éteindre toutes les lumières dans le Salon avec une seule action ? Et bien tout cela est possible en liant un Virtuel à un résumé !

Allez dans **Réglages → Système → Configuration** puis sur l'onglet **Résumés**.

Sur la ligne *Lumière*, tout à droite, cliquez sur le bouton **Créer virtuel**.

Maintenant, allez dans **Plugins → Programmation → Virtuel**

Pour chaque objet possédant des commandes dans le résumé *Lumière*, vous avez maintenant un nouveau Virtuel nommé *Résumé* avec l'objet pour parent. Vous avez également un nouveau Virtuel *Résumé global* sans objet parent, correspondant au résumé global de Jeedom.

En ouvrant le Virtuel du Salon et en allant sur l'onglet **Commandes**, voici ce qu'on trouve :

{% include lightbox.html src="images/summary-virtual.jpg" data="settings" title="Virtuel résumé" imgstyle="width:auto;display: block;margin: 0 auto;" %}

- Une commande **Info** *Lumière* : Celle-ci possède l'information du nombre de lumières allumées dans le Salon, puisque nous sommes sur le Virtuel du résumé du Salon.
- Une commande **Action** *Lumière Light Button On* : En déclenchant cette action, nous allons allumer toutes les commandes du résumé **Lumière**, ici de l'objet Salon.
- Une commande **Action** *Lumière Light Button Off* : En déclenchant cette action, nous allons éteindre toutes les commandes du résumé **Lumière**, ici de l'objet Salon.
etc.

Vous devriez avoir compris le principe ! Nous avons maintenant les infos et actions correspondantes disponibles pour chaque objet, et pour le résumé global, pour chaque résumé pour lequel on a lié un Virtuel !

Nous pouvons donc maintenant nous en servir comme n'importe quelle info ou action d'un équipement réel, dans un scénario !

Par exemple :

- Un déclencheur `#[None][Global Summary][Mouvement]# > 0` qui déclenchera un scénario dès qu'un mouvement est détecté dans le logement.
- Une expression IF `#[Salon][Summary][Lumière]# > 0 ` qui testera si une lumière est allumée dans le Salon.
- Une action `#[Salon][Summary][Volet Shutter Button Slider]#` avec valeur 0 qui fermera tous les volets du Salon.

### Actions sur résumés

Comme vu précédemment, les Virtuels de résumé possèdent non seulement les *info* des résumés, mais également les *action* disponibles sur les différents équipement configurés en résumé. Ces actions sont bien sûr accessibles en scénario, mais également par l'interface, à partir des icônes de résumé ici et là !

Par exemple, si vous avez créé les Virtuels de résumé pour le résumé *Lumière*, vous pouvez faire un Ctrl+Click sur l’icône de ce résumé. Apparaîtra alors un popup avec les différentes actions vous permettant, par exemple, d'éteindre toutes les lumières de la maison d'un coup !

{% include lightbox.html src="images/summary-virtual-actions.jpg" data="settings" title="Actions sur résumés" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Nous l'avons vu, les résumés représentent un vaste sujet, qu'il n'est pas toujours très simple d'appréhender au début de la vie d'un Jeedomien, mais qu'il est bon de connaître !
