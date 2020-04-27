Ce plugin permet de connecter Jeedom à un serveur openvpn. Il est aussi
utilisé et donc obligatoire pour le service DNS Jeedom qui vous permet
d’accèder à votre Jeedom depuis internet

== Plugin configuration

Après téléchargement du plugin, il vous suffit juste d’activer et
d’installer les dépendances openvpn (clic sur le bouton Installer/Mettre
à jour)

Equipment configuration
=============================

You can find here the full configuration of your device :

-   **Nom de l’équipement Openvpn** : nom de votre équipement Openvpn,

-   **Parent Object** : means the parent object the equipment depend
    equipment,

-   **Category**: categories of equipment (it may belong to
    plusieurs catégories),

-   **Enable**: to make your equipment active,

-   **Visible**: makes your equipment visible on the dashboard,

> **Note**
>
> Les autres options ne seront pas détaillées ici, pour avoir de plus
> amples informations merci de vous référer à la [documention
> openvpn](https://openvpn.net/index.php/open-source/documentation.html)

> **Note**
>
> Pour les commandes shell executées après le démarrage vous avez le tag #interface# pour le nom de l'interface automatiquement remplacé

Below you will find the list of commands:

-   **Nom** : le nom affiché sur le dashboard,

-   **Afficher** : permet d’afficher la donnée sur le dashboard,

-   **Test**: allows to test the command

> **Note**
>
> Jeedom va vérifier toutes les 15 minutes si le VPN est bien démarré ou
> arreté (s’il le faut) et agir en conséquence si ce n’est pas le cas
