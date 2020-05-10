Plugin permettant d’envoyer des SMS et de passer des appels avec
messages automatiques à partir de Jeedom.

> **Important**
>
> Ce plugin passe par le market c’est donc un service cloud qui
> nécessite une connexion internet pour fonctionner.

> **Tip**
>
> Le plugin marche sur un système de crédit, 1 SMS = 1 crédit, 1 appel =
> 2 crédits. Vous pouvez consulter votre crédit
> [ici](http://market.jeedom.fr/index.php?v=d&p=profils&tab=sms). En cas
> de crédits faibles (moins de 5), un mail vous sera envoyé.

> **Important**
>
> Les SMS sont limités à 140 caractères et les appels à 450 caractères.

== Plugin configuration

After downloading the plugin, you just have to activate it,
there is no configuration at this level.

![phonemarket1](../images/phonemarket1.PNG)

Equipment configuration
=============================

La configuration des équipements Phonemarket est accessible à partir du
menu plugin :

![phonemarket2](../images/phonemarket2.PNG)

Voilà à quoi ressemble la page du plugin Phonemarket (ici avec déjà 1
équipement) :

![phonemarket3](../images/phonemarket3.PNG)

> **Tip**
>
> Comme à beaucoup d’endroits sur Jeedom, placer la souris tout à gauche
> permet de faire apparaître un menu d’accès rapide (vous pouvez, à
> partir de votre profil, le laisser toujours visible).

Once you click on one of them, you get:

![phonemarket4](../images/phonemarket4.PNG)

You can find here the full configuration of your device :

-   **Nom de l’équipement Phonemarket** : nom de votre équipement
    Phonemarket,

-   **Parent Object** : means the parent object the equipment depend
    equipment,

-   **Enable**: to make your equipment active,

-   **Visible** : rend votre équipement visible sur le dashboard.

Below you will find the list of commands:

-   **Nom** : le nom affiché sur le dashboard,

-   **Type** : type de commande (appels ou sms),

-   **Numéro** : numéro de téléphone qui doit être appelé ou à qui un
    SMS doit être envoyé (en fonction du type),

-   **Tester** : permet de tester la commande,

-   **Supprimer** (signe -) : permet de supprimer la commande.


