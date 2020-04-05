Ce plugin permet de faire un ping ou un wake-on-lan sur un équipement
réseau.

Plugin-Konfiguration
=======================

Nachdem das Plugin herunterzuladen, müssen Sie nur um es zu aktivieren,
gibt es auf dieser Ebene keine Konfiguration.

![networks](../images/networks.PNG)

Gerätekonfiguration
=============================

La configuration des équipements networks est accessible à partir du
menu plugin :

![networks2](../images/networks2.PNG)

Voilà à quoi ressemble la page du plugin Networks (ici avec déjà 1
équipement) :

![networks3](../images/networks3.PNG)

> **Tip**
>
> Wie an vielen Stellen in Jeedom kann mit dem Mauszeiger ganz links, ein
> Menü mit Schnellzugriff aufgerufen werden (Sie können in Ihrem Profil
> immer sichtbar einstellen).  

Sobald Sie eines davon anklicken, erhalten Sie :

![networks4](../images/networks4.PNG)

Sie werden hier alle die Konfiguration Ihrer Geräte finden:

-   **Nom de l’équipement Networks** : nom de votre équipement Networks,

-   **Objet parent** : indique l’objet parent auquel appartient l’équipement,

-   **Catégorie** : les catégories de l’équipement (il peut appartenir à plusieurs catégories),

-   **Aktivieren**: auf Ihre aktive Ausrüstung zu machen,

-   Visible ** ** macht Ihr Gerät sichtbar auf dem Armaturenbrett,

-   **Adresse IP** : adresse IP sur laquelle faire le ping,

-   **Adresse MAC (wol)** : adresse MAC pour le wake-on-lan,

-   **Broadcast IP (wol)** : adresse IP de broadcast du réseau pour     envoyer le wake-on-lan,

-   **Méthode de ping** : Choix de la méthode de ping : ip (normal), arp (a priviliegier pour les téléphone ou péripheriques qui s'endorment), port (pour tester si un port est ouvert)

-   **TTL** : Time-to-live, les valeurs peuvent etre : 
    - 0 : même hote
    - 1 : même sous-réseaux
    - 32 : même site
    - 64 : même région
    - 128 : même continent
    - 256 : aucune limite
Si vous avez une erreur de type 'Time to live exceeded' , il faut augmenter cette valeur. Si vide alors le paramètre vaut 255. A noter que sous certain type de configuration (Docker par exemple) le 255 n'est pas autorisé il faut donc diminuer cette valeur.

-   **Port** : Port sur lequel faire le ping si vous etês en mode ping sur un port

-   **Auto-actualisation (cron)** : cron définissant la fréquence du ping.

En-dessous vous retrouvez la liste des commandes :

-   **Nom** : le nom affiché sur le dashboard,

-   **Afficher** : permet d’afficher la donnée sur le dashboard,

-   **Tester** : permet de tester la commande.

> **Note**
>
> Jeedom va vérifier toutes les minutes (par defaut) le ping sur l’IP.

> **Important**
>
> Si vous ne renseignez pas l’adresse MAC et broadcast alors vous
> n’aurez pas de commande wake-on-lan.

> **Note**
>
> L’adresse MAC doit être de la forme : 5E:FF:56:A2:AF:15.

Widgets 
=======

Voilà un exemple de widget (sans le wake-on-lan) en desktop :

![networks5](../images/networks5.PNG)

Und das Mobile :

![networks6](../images/networks6.PNG)

Changelog détaillé :
<https://github.com/jeedom/plugin-networks/commits/stable>
