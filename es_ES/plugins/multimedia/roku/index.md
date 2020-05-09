Roku 
====

Description 
-----------

Ce plugin permet de contrôler votre Roku. Il peut le détecter tout seul
et synchroniser ses chaînes. Ainsi il sera possible d’avoir un widget en
3 parties :

1 partie télécommande

1 partie recherche

1 partie chaînes

![roku screenshot1](../images/roku_screenshot1.png)

Configuration 
-------------

### Configuration du plugin: 

a.  Installation/Création

Afin d’utiliser le plugin, vous devez le télécharger, l’installer et
l’activer comme tout plugin Jeedom.

Suite à cela il vous faudra le créer, cliquer sur "Scanner
automtiquement" :

![roku screenshot2](../images/roku_screenshot2.png)

Il se peut que cela ne fonctionne pas à chaque fois, vous pouvez
retenter 2 ou 3 fois. Si malgré tout le roku n’est pas détecté, aucun
souci vous pourrez le rajouter manuellement avec son adresse IP.

Rendez vous dans le menu Plugins/Multimedia, vous y trouverez le plugin
Roku :

![configuration1](../images/configuration1.png)

Ensuite vous arriverez sur la page qui listera vos rokus

![roku screenshot2](../images/roku_screenshot2.png)

Cliquez sur le bouton Ajouter si vous voulez rajouter un Roku
manuellement

Sur cette page vous trouverez trois sections :

![roku screenshot5](../images/roku_screenshot5.png)

i.  Général

Vous trouverez dans cette section toutes les configurations jeedom. A
savoir le nom de votre équippement, l’objet auquel vous voulez
l’associer, la catégorie, si vous voulez que l’équipement soit actif ou
non , et enfin si vous voulez qu’il soit visible sur le dashboard.

i.  Configuration

Cette section est une des plus importantes elle permet de choisir le
modèle et l’IP de votre roku (dans le cas ou l’autodétection n’a pas
fonctionné)

Le bouton "Synchroniser les chaînes" permet une fois votre équipement
sauvegardé de lancer une récupération des chaînes disponibles sur votre
roku ainsi que leur image. Vous pouvez cliquer sur ce bouton chaque fois
que vous avez ajouté ou supprimé des chaines de votre roku afin de
synchroniser l’ensemble.

i.  Tableau de Commandes

Ici vous trouverez la liste de toutes les commandes et chaînes
disponibles

Toutes ces commandes sont disponibles via scénarios et via le dashboard

### Le widget : 

![roku screenshot1](../images/roku_screenshot1.png) ![roku
screenshot3](../images/roku_screenshot3.png) ![roku
screenshot4](../images/roku_screenshot4.png)

Le widget se décompose en trois parties :

-   Une partie centrale qui est en fait la télécommande de votre Roku

-   Une partie Chaînes qui permet d’avoir les icones de toutes les
    chaînes (scrollable) et ainsi avoir un accès direct à vos chaînes

-   Une partie recherche permettant selon les pages sur lesquelles vous
    êtes (quelques rares pages) d’avoir un accès direct à la recherche
    et même de taper votre recherche avec le clavier

Vous pouvez avec les 3 boutons du bas choisir la page à afficher. La
page se chargeant à chaque fois au moment où vous vous rendez sur le
dashboard étant bien entendu celle de la télécommande.
