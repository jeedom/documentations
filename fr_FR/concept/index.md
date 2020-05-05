# Concept

Voici les principaux concepts de base de Jeedom. Cette documentation reste volontairement simple afin de vous aider à prendre en main votre domotique.

Les possibilités de Jeedom sont quasi infinies, puisque vous pouvez avec quelques scripts php python ou autre créer énormément de choses, mais ce n'est pas le sujet ici.

> Tip
>
> Les liens ci-dessous pointent vers le Core v4.1. Une fois sur la page de documentation (Manuel d'utilisation ou de configuration) vous pouvez changer de version dans le menu en haut à gauche pour basculer sur la version correspondant au Core que vous souhaitez.

## Affichage

Jeedom permet d'interfacer de très nombreux périphériques ensemble, que ceux-ci soit basés sur les protocoles Z-Wave, Enocean, Zigbee etc, sur des APIs grâce à des plugins, ou directement sous forme de scripts. Vous pouvez regardez sur le [Market](https://market.jeedom.com/) pour avoir un aperçu des périphériques supportés.

Vous pouvez afficher ces périphériques de plusieurs manières :

- Sur le [Dashboard](/fr_FR/core/4.1/dashboard)
- Sur la [Synthèse](/fr_FR/core/4.1/overview) (v4.1)
- Sur une [Vue](/fr_FR/core/4.1/view)
- Sur un [Design](/fr_FR/core/4.1/design)
- Sur un [Design 3D](/fr_FR/core/4.1/design3d)

![Synthese](images/concept-synthese.jpg)

Ceux-ci sont consultables dans un navigateur sur un ordinateur de bureau, ou sur un smartphone avec la WebApp ou l'application mobile : [Version Mobile](/fr_FR/mobile/index")

## Les Objets

Afin d'organiser vos périphériques, vous pouvez créer des [Objets](/fr_FR/core/4.1/object).

Ces objets peuvent représenter des pièces de l'habitation (Salon, Chambre, Atelier). Chaque objet peut avoir un objet parent. Cette hiérarchie servira à l'affichage sur le Dashboard. Par exemple, vous pouvez avoir un objet **Maison**, puis des objets **Salon** **Chambre** enfant de l'objet **Maison**. Une fois sur le Dashboard, l'objet **Maison** affichera aussi, en dessous, ses objets enfants.

![Objet](images/concept-objet.jpg)

> Tips
>
> Dans **Réglages → Préférences** vous pouvez définir sur quel objet vous souhaité arriver sur le Dashboard. [Préférences](/fr_FR/core/4.1/profils)

![Dashboard](images/concept-dashboard.jpg)

## Les Équipements et leurs commandes

### Commandes

Pour interagir avec notre domotique, il faut des commandes ! Celles-ci sont de deux types :

> Note
>
> Rassurez vous, les commandes sont normalement crées automatiquement ! Ces explications sont pour une meilleure compréhension.

- Les commandes *info* :
Ces commandes stockent des informations, issues de capteurs. Par exemple, la température d'une sonde, un mouvement d'un capteur de présence, etc.
Ces commandes peuvent être historisées afin de conserver ces informations dans le temps sous forme de courbe : [Historique](/fr_FR/core/4.1/history)

Ces commandes peuvent aussi servir à déclencher des [scénarios](/fr_FR/core/4.1/scenario) afin d'automatiser des actions en fonctions des informations remontées par vos capteurs. Par exemple, un capteur de mouvement détecte une présence, ce qui va déclencher un scénario qui allumera la lumière.

- Les commandes *action* :
Ces commandes permettent de piloter vos actionneurs. Par exemple, les commandes **on** et **off** d'une prise commandée vous permettront de l'allumer et de l'éteindre.

Les commandes action sont généralement liées à des commandes info. Ici, notre prise possède deux actions **on** et **off**, généralement liées à une information **Etat**.

![Commandes](images/concept-commands.jpg)

Ces deux types de commandes sont rattachées sous la forme d'un équipement. L'équipement possède donc des commandes info et/ou action, et c'est cet équipement qui aura pour parent un Objet, vous permettant de l'afficher où vous le souhaitez.

### Équipement

- Physiquement: J'ai une prise avec un bouton on/off et une led d'état, dans le salon.
- Dans Jeedom: J'ai un équipement avec deux actions on et off et une info état, dans l'objet Salon.

Ces équipements sont crées par des plugins. Par exemple, le plugin Z-Wave vous permettra d'inclure votre prise Z-Waze, ce qui créera un équipement avec ses commandes, que vous pourrez nommez et lier à un Objet.

En terme d'affichage, chaque commandes est affichée grâce à un Widget. Le Core propose les principaux Widgets, ainsi qu'un outil pour en créer (V4) : [Widgets](/fr_FR/core/4.1/widgets).

Ces commandes sont regroupées dans une tuile correspondant à votre équipement. Et cette tuile sera donc affichée sur le Dashboard dans l'Objet que vous aurez choisi.

![Commandes](images/concept-equipment.jpg)

## Conclusion

Quelques soit votre périphérique, il sera donc crée sous forme d'un équipement, à partir d'un [Plugin](/fr_FR/core/4.1/plugin).

Ce périphérique comportera ses propres commandes *info* ou *action*. Ces commandes seront affichées sous forme de Widgets formant la tuile de l'quipement, dans son objet parent.

Vous verrez ensuite que chaque Objet, Équipement, Commande possède de nombreuses options, en terme de fonctionnalités ou d'affichage. Mais chaque chose en son temps, maintenant vous devriez avoir compris les concepts de base de Jeedom, et ainsi pouvoir commencer à organiser votre domotique en sachant où regarder.


