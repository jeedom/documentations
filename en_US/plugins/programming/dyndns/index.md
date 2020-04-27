Ce plugin permet de mettre à jour un service de DNS dynamique
(dyndns,noip,duckdns,…​)

Plugin configuration
=======================

After downloading the plugin, you just have to activate it,
there is no configuration at this level.

![dyndns](../images/dyndns.PNG)

Equipment configuration
=============================

La configuration des équipements Dyndns est accessible à partir du menu
plugin :

![dyndns2](../images/dyndns2.PNG)

Voilà à quoi ressemble la page du plugin Dyndns (ici avec déjà 1
équipement) :

![dyndns3](../images/dyndns3.PNG)

> **Tip**
>
> Comme à beaucoup d’endroits sur Jeedom, placer la souris tout à gauche
> permet de faire apparaître un menu d’accès rapide (vous pouvez, à
> partir de votre profil, le laisser toujours visible).

Once you click on one of them, you get:

![dyndns4](../images/dyndns4.PNG)

You can find here the full configuration of your device :

-   **Nom de l’équipement Ambilight** : nom de votre équipement
    Ambilight,

-   **Parent Object**: Specifies the parent object to which belongs
    equipment,

-   **Category**: categories of equipment (it may belong to
    plusieurs catégories),

-   **Enable**: to make your equipment active,

-   **Visible**: makes your equipment visible on the dashboard,

-   **Service** : Le nom du service utilisé (dyndns.org, noip.com)

-   **Hostname** : nom complet du DNS à mettre à jour (ex toto.ddns.net)

-   **Nom d’utilisateur** : nom d’utilisateur sur le service en question

-   **Mot de passer** : mot de passe sur le service en question

-   **Token** : token utilisé pour duckdns

Below you will find the list of commands:

-   **Nom** : le nom affiché sur le dashboard,

-   **Afficher** : permet d’afficher la donnée sur le dashboard,

-   **Test**: allows to test the command

> **Note**
>
> Jeedom va vérifier toute les 15 minutes l’ip externe, si celle-ci a
> changé alors le DNS sera mise à jour

> **Important**
>
> Le plugin fournit une commande pour forcer la mise à jour. Attention à
> ne pas en abuser car vous pouvez être banni temporairement du service
> de DNS

> **Note**
>
> Si vous utilisez OVH, attention le nom d’utilisateur est de la forme
> mondomaine.com-identificant alors que le domaine est bien sous la
> forme mon-dynHost.mmondomaine.com
