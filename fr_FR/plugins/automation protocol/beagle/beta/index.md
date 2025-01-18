Odace SFSP
============

Ce plugin est un plugin permettant une compatibilité avec la gamme Odace Sans Fil Sans Pile de Schneider.


# Configuration 

## Configuration du plugin : 

> **Tip**
>
> Afin d’utiliser le plugin, vous devez le télécharger, l’installer et l’activer comme tout plugin Jeedom.

> **Important**
>
> La chose la plus importante sur la page de configuration du plugin est de sélectionner votre Contrôleur Bluetooth. Il est très important d'utiliser un dongle bluetooth dédié pour ce plugin pour un bon fonctionnement de celui-ci.

Vous pouvez aussi vérifier l’état des dépendances et les relancer. En cas de soucis avec le plugin toujours relancer les dépendances même si OK dans le doute.

# Le plugin 

Rendez vous dans le menu plugins/protocole pour retrouver le plugin.

Sur cette page vous pourrez voir les modules déjà inclus.

Sur la partie haute de cette page vous avez plusieurs boutons

-   Bouton Lancer Scan : Permet d'intégrer un nouveau device. Bien mettre le device en question en appairage, conformément à la documentation de celui-ci.
-   Bouton Configuration : Permet de se rendre directement sur la page configuration du plugin
-   Bouton Santé : Ce bouton permet d’avoir un aperçu Santé de tous vos modules
-   Bouton Scènes : Permet d'interroger les devices pour connaître les scènes qu'ils disposent
-   Bouton Groupes : Permet d'interroger les devices pour connaître les groupes qu'ils disposent

# Equipement 

Lorsque que vous cliquez sur un de vos modules, vous arrivez sur la page de configuration de celui-ci. Comme partout dans Jeedom vous pouvez ici sur la partie gauche:

-   Donner un nom au module
-   L’activer/le rendre visible ou non
-   Choisir son objet parent
-   Lui attribuer une catégorie

Sur la partie droite vous trouverez :

-   Un visuel du module. Pour les interrupteurs le visuel est le même peut importe son type
-   Des infos spécifiques comme la version du firmware, le modèle, l'identifiant unique du module, son adresse mac
-   Dans le cas d'un actionneur vous trouverez aussi une information de "Pairage", si après inclusion celle-ci n'est pas sur "Pairé" vous pourrez retenter l'appairage en cliquant sur le bouton orange "trame pairing" "en ayant pris soin de mettre le module en appairage"

