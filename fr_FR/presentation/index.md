# Présentation

Jeedom est une solution domotique Open-Source et *cloudless* (sans serveur dans le cloud). Il fonctionne sans abonnement, ce qui permet de garantir le fonctionnement de votre domotique sans internet, ainsi que la sécurité de vos données. Il est également extrêmement ouvert, multi-protocoles, personnalisable, et fortement évolutif.

Jeedom propose un noyau, le Core, embarquant la structure et les fonctions centrales.

Différents [plugins](https://market.jeedom.com) peuvent alors proposer de nouvelles fonctions.

Le Core comprend notamment:

## Dashboard / Synthèse

*Les équipements, comprenant des actionneurs ou des capteurs, sont organisés par objets. Les objets peuvent, par exemple, représenter des pièces physiques*.

![Synthèse](images/doc-presentation-synthese.jpg)

![Dashboard](images/doc-presentation-dashboard.jpg)


## Création de widgets

*Jeedom propose un moteur de création de Widgets pour les tuiles des équipements. Vous pouvez ainsi créer vos propres Widgets, en plus des Widgets de base. La création de Widgets est aussi possible directement à partir de code, pour les utilisateurs avancés.*

![Dashboard](images/doc-presentation-widgets)

## Historiques

*Toutes les informations sont historisables (courbe de température, consommation, ouvertures de porte, etc), et accessibles dans Analyse → Historique ou depuis les tuiles du Dashboard.*

![Page Historique](images/doc-presentation-historique.jpg)

## Scénarios

*Les scénarios permettent d'automatiser tout ou partie de vos équipements. Ils sont construits avec différents blocs. Des blocs conditionnels (Si Alors, Sinon), d'actions, de programmation (DANS x minutes ou A hhmm), de boucle, de commentaire, ou de code php. Tous les blocs sont imbricables les uns dans les autres, offrant des possibilités infinies.*

![Page Scénario](images/doc-presentation-scenario.jpg)

## Interactions

*Le système d’interaction dans Jeedom permet de réaliser des actions à partir de commandes textes ou vocales.*

![Page Interaction](images/doc-presentation-interaction.jpg)

## Centre de Mise à jour

*Le centre de mise à jour permet de mettre à jour toutes les fonctionnalités de Jeedom, incluant le logiciel de base (core) et ses plugins. D’autres fonctions de gestion des extensions sont disponibles (supprimer, réinstaller, vérifier, etc.).*

![Page Sauvegarde](images/doc-presentation-update.jpg)


# Market

Autour de ce noyau viennent se greffer des plugins, qui peuvent être de toutes sortes :

-   Protocole domotique (Z-Wave, RFXcom, EnOcean…),
-   Protocole IP (KNX,xPL…),
-   Objet communiquant (Nest, Netatmo…),
-   Haut niveau (alarme, thermostat…),
-   Interface (widget),
-   Organisation (agenda, Google agenda),
-   Développement (script).

Ces plugins peuvent être installés depuis le Market et permettent d’étendre les possibilités de Jeedom.

![Page Market](images/doc-presentation-market.jpg)

Jeedom permet à n’importe quel plugin de discuter avec un autre sur une base normalisée. Cela permet par exemple d’utiliser les plugins thermostat ou alarme avec n’importe quel protocole domotique ou même un plugin IP ou objet communiquant…

