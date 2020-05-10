Ce plugin permet de mettre à jour un service de DNS dynamique
(dyndns,noip,duckdns,…​)

configuración del plugin
=======================

Después de descargar el plugin, sólo hay que activarlo,
no hay ninguna configuración a este nivel.

![dyndns](../images/dyndns.PNG)

Configuración del dispositivo
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

Une fois que vous cliquez sur l’un d’eux, vous obtenez :

![dyndns4](../images/dyndns4.PNG)

Aquí encontrará toda la configuración de su dispositivo:

-   **Nom de l’équipement Ambilight** : nom de votre équipement
    Ambilight,

-   **Objeto padre** : especifica el objeto padre al que pertenece
    equipos,

-   ** ** Categoría: categorías de equipos (que pueden pertenecer a
    varias categorías),

-   ** ** Activar: para que su equipo activo,

-   ** ** visible hace que su equipo visible en el salpicadero,

-   **Service** : Le nom du service utilisé (dyndns.org, noip.com)

-   **Hostname** : nom complet du DNS à mettre à jour (ex toto.ddns.net)

-   **Nom d’utilisateur** : nom d’utilisateur sur le service en question

-   **Mot de passer** : mot de passe sur le service en question

-   **Token** : token utilisé pour duckdns

En-dessous vous retrouvez la liste des commandes :

-   **Nom** : le nom affiché sur le dashboard,

-   **Afficher** : permet d’afficher la donnée sur le dashboard,

-   **Tester** : permet de tester la commande

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
