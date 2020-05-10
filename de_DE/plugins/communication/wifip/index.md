Waze in Time 
============

Description 
-----------

Ce plugin permet d’avoir les infos de trajet (traffic pris en compte)
via Waze. Ce plugin peux ne plus marcher si Waze n’acceptes plus qu’on
interroge son site

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

Konfiguration
-------------

### Configuration du plugin: 

a.  Installation/Création

Afin d’utiliser le plugin, vous devez le télécharger, l’installer et
l’activer comme tout plugin Jeedom.

Suite à cela il vous faudra créer votre ou vos trajets :

Rendez vous dans le menu plugins/organisation, vous y trouverez le
plugin Waze Duration :

![configuration1](../images/configuration1.jpg)

Ensuite vous arriverez sur la page qui listera vos équipements (vous
pouvez avoir plusieurs Trajets) et qui vous permettra d’en créer

![wazeintime screenshot2](../images/wazeintime_screenshot2.jpg)

Klicken sie auf die Schaltfläche "Route hinzufügen" oder "+" :

![config2](../images/config2.jpg)

Dann kommen Sie auf die Konfigurationsseite Ihrer Route :

![wazeintime screenshot3](../images/wazeintime_screenshot3.jpg)

Auf dieser Seite finden sie drei Abschnitte :

i.  Général

Vous trouverez dans cette section toutes les configurations jeedom. A
savoir le nom de votre équippement, l’objet auquel vous voulez
l’associer, la catégorie, si vous voulez que l’équippement soit actif ou
non , et enfin si vous voulez qu’il soit visible sur le dashboard.

i.  Configuration

Cette section est une des plus importantes elle permet de régler le
point de départ et d’arrivée :

-   Ces infos doivent être les latitudes et longitudes des positions

-   Elles peuvent être retrouvées en utilisant le site fournis en
    cliquant sur le lien de la page (il vous suffit de rentrer une
    adresse et de cliquer sur obtenir les coordonnées GPS)

    i.  Tableau de Commandes

![config3](../images/config3.jpg)

-   Durée 1 : durée aller avec le trajet 1

-   Durée 2 : durée aller avec le trajet alternatif

-   Trajet 1 : Trajet 1

-   Trajet 2 : Trajet alternatif

-   Durée retour 1 : durée retour avec le trajet 1

-   Durée retour 2 : durée retour avec le trajet alternatif

-   Trajet retour 1 : Trajet retour 1

-   Trajet retour 2 : Trajet retour alternatif

-   Rafraichir : Permet de rafraichir les infos

All diese Befehle sind verfügbar über Szenarien und das Armaturenbrett

### Le widget : 

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

-   Le bouton en haut à droite permet de rafraichir les infos.

-   Toutes les infos sont visibles (pour les trajets, si le trajet est
    long, il peut être tronquée mais la version complète est visible en
    laissant la souris dessus)

### Comment sont rafraichis les infos : 

Les infos sont rafraichis une fois toutes les 30 minutes. Vous pouvez
les rafraichir à la demande via scénario avec la commande rafraichir, ou
via le dash avec les doubles flêches
