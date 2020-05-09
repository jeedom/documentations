GreenIQ 
=======

Description 
-----------

Plugin permettant de controller l’arrosage automatique à l’aide du
boitier GreenIQ. Il est possible de définir pour les 6 sorties
electrovannes le type de fonctionnement : - Auto : l’arrosage de la zone
se déclenche en fonction de la programmation du GreenIQ - Off :
l’arrosage est désactivé - On : l’arrosage est déclenché (durée 3h)

![greeniq screenshot1](../images/greeniq_screenshot1.png)

Configuration 
-------------

Afin de pouvoir utiliser votre GreenIQ avec Jeedom, vous devez
obligatoirement demander un Client ID et un Client Secret. La demande se
fait par email à <developers@greeniq.co> , la réponse se fait très
rapidement, sous 24h normalement.

Vous devez également vous munir du login/mot de passe fourni sur la
petite carte qui est livrée avec le GreenIQ.

Une fois les codes obtenus, vous devez les entrer dans le plugin comme
ceci : ![greeniq1](../images/greeniq1.png)

Utilisation 
-----------

De nombreuses informations sont disponibles dans le widget : 1. Etat de
la vanne 2. Etat de la configuration 3. % de progression 4. Heure de fin
de l’arrosage

![greeniq2](../images/greeniq2.png)

La configuration de chaque vanne est également possible et 3 actions
sont disponibles :

1.  Auto : l’arrosage de la zone se déclenche en fonction de la
    programmation du GreenIQ

2.  Off : l’arrosage est désactivé

3.  On : l’arrosage est déclenché (durée 3h)

FAQ 
---

Le systeme recupère les informations toutes les 5 minutes.

Changelog 
---------

-   V0.1 : Première release


