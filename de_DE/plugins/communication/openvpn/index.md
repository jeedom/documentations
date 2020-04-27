Ce plugin permet de connecter Jeedom à un serveur openvpn. Il est aussi
utilisé et donc obligatoire pour le service DNS Jeedom qui vous permet
d’accèder à votre Jeedom depuis internet

Plugin-Konfiguration
=======================

Après téléchargement du plugin, il vous suffit juste d’activer et
d’installer les dépendances openvpn (clic sur le bouton Installer/Mettre
à jour)

Gerätekonfiguration
=============================

Sie werden hier alle die Konfiguration Ihrer Geräte finden:

-   **Nom de l’équipement Openvpn** : nom de votre équipement Openvpn,

-   **Übergeordnete Objekt** zeigt das übergeordnete Objekt gehört
    Ausrüstung,

-   ** ** Kategorie: Gerätekategorien (es kann gehören
    plusieurs catégories),

-   **Aktivieren**: auf Ihre aktive Ausrüstung zu machen,

-   Visible ** ** macht Ihr Gerät sichtbar auf dem Armaturenbrett,

> **Note**
>
> Les autres options ne seront pas détaillées ici, pour avoir de plus
> amples informations merci de vous référer à la [documention
> openvpn](https://openvpn.net/index.php/open-source/documentation.html)

> **Note**
>
> Pour les commandes shell executées après le démarrage vous avez le tag #interface# pour le nom de l'interface automatiquement remplacé

En-dessous vous retrouvez la liste des commandes :

-   **Nom** : le nom affiché sur le dashboard,

-   **Afficher** : permet d’afficher la donnée sur le dashboard,

-   **Tester** : permet de tester la commande

> **Note**
>
> Jeedom va vérifier toutes les 15 minutes si le VPN est bien démarré ou
> arreté (s’il le faut) et agir en conséquence si ce n’est pas le cas
