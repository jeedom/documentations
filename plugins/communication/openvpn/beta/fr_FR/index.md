# Plugin Openvpn

Ce plugin permet de connecter Jeedom à un serveur openvpn. Il est aussi utilisé et donc obligatoire pour le service DNS Jeedom qui vous permet d’accèder à votre Jeedom depuis internet.

# Configuration du plugin

Après téléchargement du plugin, il suffit d’activer et d’installer les dépendances openvpn (cliquer sur le bouton **Installer/Mettre à jour**)

# Configuration des équipements

Vous retrouvez ici toute la configuration de votre équipement :

-   **Nom de l’équipement Openvpn** : nom de votre équipement Openvpn,
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement,
-   **Catégorie** : les catégories de l’équipement (il peut appartenir à plusieurs catégories),
-   **Activer** : permet de rendre votre équipement actif,
-   **Visible** : rend votre équipement visible sur le dashboard,

> **Note**
>
> Les autres options ne seront pas détaillées ici, pour avoir de plus amples informations veuillez vous référer à la [documentation openvpn](https://openvpn.net/index.php/open-source/documentation.html)

> **Note**
>
> Concernant les commandes shell executées après le démarrage, il existe le tag `#interface#` permettant d'obtenir le nom de l'interface en cours.

En dessous vous retrouvez la liste des commandes :

-   **Nom** : le nom affiché sur le dashboard,
-   **Afficher** : permet d’afficher la donnée sur le dashboard,
-   **Tester** : permet de tester la commande

> **Note**
>
> Jeedom va vérifier toutes les 5 minutes si le VPN est bien démarré ou arreté et agir en conséquence si ce n’est pas le cas.
