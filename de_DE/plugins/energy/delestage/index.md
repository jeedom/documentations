Délestage 
=========

![delestage](./images/delestage_screenshot1.png)

Beschreibung
===========

Plugin permettant de gérer le délestage électrique. Le plugin gère 3
types de délestage :

-   Délestage "intelligent".

-   Délestage hiérarchique.

-   Délestage cascado-cyclique.

Funktionsweise
==============

Délestage intelligent. 
----------------------

Le délestage intelligent nécessite le plugin Thermostat pour
fonctionner.

Le plugin classe les thermostats en fonction de leurs températures
réelles en fonction des températures de consigne.

Ainsi le délestage interviendra en priorité sur les pièces dont l’écart
est le plus faible. La gène pour les occupants sera ainsi moins
importante.

![intelligent](./images/smart.png)

Délestage hiérarchique 
----------------------

Le délestage s’effectue en mode hiérarchisé sur les x actionneurs.
L’actionneur 1 sera délesté en priorité puis le 2, 3…

Les actionneurs seront réenclenchés dans l’ordre inverse du délestage

![hierarchique](./images/hierarchique.png)

### Délestage cascadocyclique 

Le délestage s’effectue en mode rotatif sur les actionneurs définis pour
le mode cyclique puis si la puissance est toujours supérieure au seuil,
en mode hiérarchisé sur les autres.

![cascadocyclique](./images/cascadocyclique.png)

Konfiguration
=============

Allgemeine Konfiguration
----------------------

Voici les paramètres à configurer sur le plugin :

-   Type de délestage : intelligent, hiérarchique ou cascadocyclique

-   Type de compteur : Puissance instantanée ou Ampérage instantané

-   Compteur : sélectionner ici la commande qui renvoie soit la
    puissance soit l’ampérage (dans ce cas il sera nécessaire de
    configurer la tension du réseau)

-   Seuil en Watts : Seuil à partir duquel le déléstage se déclenchera

![configuration générale](./images/configuration_generale.png)

### Actions supplémentaires 

Il est possible de définir des actions complémentaires en plus des
actions de délestage.

Il est, par exemple, possible d’envoyer un sms pour prévenir du début et
de la fin du délestage.

![Actions complémentaires](./images/actions_complementaires.png)

### Configuration avancée 

Les paramètres suivants peuvent être réglés:

-   Tension du réseau en Volts (220V par défaut)

-   Délai avant réactivation en mins (5 mns par défaut) : délai avant
    lequel les équipements ne se réactiveront pas (afin d’éviter les
    on/off trop répétitifs)

-   Délai minimum entre les relevés en s (10s par défaut) : délai
    nécessaire entre 2 relevés

![Configuration avancée](./images/configuration_avancee.png)

FAQ
===

Pour l’instant seul le plugin thermostat officiel est géré par le
délestage intelligent. Il est cependant possible d’utiliser les 2 autres
modes de délestage avec les autres thermostats.

Problembehebung
==============

Attention à bien activer le mode "Auto" sur le widget afin d’activer le
délestage.
