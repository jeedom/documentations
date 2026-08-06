# Plugin DynDNS

Ce plugin permet de mettre à jour un service de DNS dynamique (dyndns,noip,duckdns,…)

# Configuration du plugin 

Après téléchargement du plugin, il vous suffit juste d’activer celui-ci, il n’y a aucune configuration à ce niveau.

![dyndns](../images/dyndns.PNG)

# Configuration des équipements 

La configuration des équipements Dyndns est accessible à partir du menu plugin :

![dyndns2](../images/dyndns2.PNG)

Voilà à quoi ressemble la page du plugin Dyndns (ici avec déjà 1 équipement) :

![dyndns3](../images/dyndns3.PNG)

Une fois que vous cliquez sur l’un d’eux, vous obtenez :

![dyndns4](../images/dyndns4.PNG)

Vous retrouvez ici toute la configuration de votre équipement :

-   **Nom de l’équipement DynDNS** : nom de votre équipement DynDns,
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement,
-   **Catégorie** : les catégories de l’équipement (il peut appartenir à plusieurs catégories),
-   **Activer** : permet de rendre votre équipement actif,
-   **Visible** : rend votre équipement visible sur le dashboard,
-   **Service** : Le nom du service utilisé (dyndns.org, noip.com)
-   **Hostname** : nom complet du DNS à mettre à jour (ex toto.ddns.net)
-   **Nom d’utilisateur** : nom d’utilisateur sur le service en question
-   **Mot de passer** : mot de passe sur le service en question
-   **Token** : token utilisé pour duckdns
-   **IPv6** : Votre **Service** supporte IPv6. Sélectionnez si vous désirez mettre à jour votre entrée **Hostname** de type AAAA.

En-dessous vous retrouvez la liste des commandes :

-   **Nom** : le nom affiché sur le dashboard,
-   **Afficher** : permet d’afficher la donnée sur le dashboard,
-   **Tester** : permet de tester la commande

> **Note**
>
> Jeedom va vérifier toute les 15 minutes l’ip externe, si celle-ci a changé alors le DNS sera mise à jour

> **Important**
>
> Le plugin fournit une commande pour forcer la mise à jour. Attention à ne pas en abuser car vous pouvez être banni temporairement du service de DNS

> **Note**
>
> Si vous utilisez OVH, attention le nom d’utilisateur est de la forme mondomaine.com-identificant alors que le domaine est bien sous la forme mon-dynHost.mmondomaine.com

> **IPv6**
>
> Vous devez avoir configuré dans votre **Service** une entrée DNS de type AAAA pour votre **Hostname**.
> Tous les **Service** ne supportent pas ou ne fournissent pas les informations pour IPv6.