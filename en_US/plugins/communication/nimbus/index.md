Nimbus 
======

Description 
-----------

Ce plugin permet de controller et d’avoir toutes les infos de son ou ses
Nimbus.

![nimbus screenshot1](../images/nimbus_screenshot1.jpg) ![nimbus
screenshot2](../images/nimbus_screenshot2.jpg) ![nimbus
screenshot3](../images/nimbus_screenshot3.jpg)

Configuration 
-------------

### Configuration du plugin Jeedom : 

a.  Installation/Création


Afin d’utiliser le plugin, vous devez le télécharger, l’installer et
l’activer comme tout plugin Jeedom.

Suite à cela il vous faudra renseigner vos identifiants (compte wink +
api):


![config plugin](../images/config_plugin.jpg)



Rendez vous dans le menu plugins/Communication, **vous y trouverez le
plugin nimbus :**

Vous arriverez sur la page qui listera vos équipements (vous pouvez
avoir plusieurs nimbus) et qui vous permettra d’en créer


![nimbus screenshot4](../images/nimbus_screenshot4.jpg)


**Cliquez sur le bouton Ajouter :**

Vous arriverez ensuite sur la page de configuration de votre nimbus :

![config nimbus](../images/config_nimbus.jpg)

Sur cette page vous trouverez plusieurs sections :


-   **Général**


Vous trouverez dans cette section toutes les configurations jeedom. A
savoir le nom de votre équipement, l’objet auquel vous voulez
l’associer, la catégorie (de préférence multimédia), si vous voulez que
l’équipement soit actif ou non , et enfin si vous voulez qu’il soit
visible sur le dashboard.

-   **Configuration**

Cette section est utile si et seulement si vous possédez plusieurs
nimbus. Il faudra rentrer le numéro de l’équippement (1, 2 ou 3 par
exemple). Vous pouvez laisser ce champ vide si vous possédez un seul
nimbus ce qui sera surement votre cas.


-   **Design**

Cette section vous permettra de personaliser l’affichage de votre nimbus
sur le dashboard. Vous pouvez choisir parmis plusieurs fonds. Vous
pouvez aussi choisir la couleur de l’aiguille et la couleur du texte.


![nimbus screenshot6](../images/nimbus_screenshot6.jpg)

-   **Informations**

![infonimb](../images/infonimb.jpg)


Cette section se remplira d’elle même à la sauvegarde de votre
équipement. Vous y trouverez des informations realtives à votres nimbus
(numéro de série, adresse mac, nom, id)

-   **Commandes**

Vous n’avez rien à faire dans cette section. Les commandes seront créées
automatiquement.

-   Rafraichir: bouton permettant de rafraichir le widget si besoin

-   Ecran 1 : Information affichée sur l’écran 1

-   Ecran 2 : Information affichée sur l’écran 2

-   Ecran 3 : Information affichée sur l’écran 3

-   Ecran 4 : Information affichée sur l’écran 4

-   Position 1 : Information concernant la position de l’aiguille de
    l’écran 1

-   Position 2 : Information concernant la position de l’aiguille de
    l’écran 2

-   Position 3 : Information concernant la position de l’aiguille de
    l’écran 3

-   Position 4 : Information concernant la position de l’aiguille de
    l’écran 4

-   Action Ecran 1 : Action commande permettant dans un scénario de
    choisir la position et/ou le texte de l’écran 1

-   Action Ecran 2 : Action commande permettant dans un scénario de
    choisir la position et/ou le texte de l’écran 2

-   Action Ecran 3 : Action commande permettant dans un scénario de
    choisir la position et/ou le texte de l’écran 3

-   Action Ecran 4 : Action commande permettant dans un scénario de
    choisir la position et/ou le texte de l’écran 1

-   Action Ecran Tous : Action commande permettant dans un scénario de
    choisir la position et/ou le texte de tous les écrans

-   Action Ecran Phrase : Action commande permettant dans un scénario de
    choisir la position et/ou le texte de tous les écrans (une phrase de
    4 mots maximums splittés sur les 4 écrans)

-   Démo : Action permettant de lancer une démo technique sur votre
    nimbus

…​

Les informations 
----------------

### Informations sur le dashboard : 

![nimbus screenshot1](../images/nimbus_screenshot1.jpg)

Le widget est divisé en 4 cadrans représentant les 4 cadrans de votre
nimbus.

-   L’aiguille indique la position de l’aiguille de l’écran
    correspondant de votre nimbus

-   Le texte est le texte affiché sur votre nimbus. Ce texte est
    cliquable pour arriver à cet écran :


![nimbus screenshot5](../images/nimbus_screenshot5.jpg)


Cet écran permet de changer manuellement le texte, la position de
l’aiguille ou les deux. Il permet de voir lorsque vous changez la valeur
déjà affichée.

…​

Les actions 
-----------

### Actions accessibles via scénario : 

Plusieurs actions sont accessibles via scénario :

![commandes](../images/commandes.jpg)

L’action Démo est independante et lance la démo technique.

Toutes les autres actions marchent de la même façon sur le principe.

**Il s’agit de commande message qui permette de passer deux paramètres:**

-   Titre : un chiffre entre 0 et 360 correspondant à la position de
    l’aiguille

-   Message : le message à afficher

**Les deux sont dissociables cela veut dire que vous pouvez :**

-   Envoyer qu’une position en laissant le champ message vide ou en
    laissant *message*

-   Envoyer qu’un message en laissant le champ titre vide ou en laissant
    *title*

-   Envoyer une position et un message en renseignant les deux

**Il existe une commande par écran, une commande tous, une commande
phrase :**

-   Ecran : permet d’agir sur l’écran correspondant

-   Tous : permet de faire la même chose sur tous les écrans

-   Phrase : commande particulière qui découpera le message en 4 mots
    qui seront affichés sur chacun des écrans (si un mot dépasse 8
    caractères il sera coupé si la phrase fait plus de 4 mots elle
    sera coupée)

![Scenario](../images/Scenario.jpg)


![Scenario2](../images/Scenario2.jpg)


![Scenario3](../images/Scenario3.jpg)


**COMMENT PUIS JE FAIRE AFFICHER DE MANIERE PERMANENTE DES INFOS DE MA
DOMOTIQUE**

Si vous voulez afficher de manière continue une info de votre domotique.
Faites un scénario programmé toutes les 5 minutes (par exemple).

![Scenario4](../images/Scenario4.jpg)

Sur cette exemple il vous suffit de remplacer ce qui est entre crochet
par vos commandes. Et toutes les 5 minutes vos écrans seront mis à jour
avec les bonnes valeurs

…​

FAQ 
---

Le systeme recupère les informations toutes les heures. Vous pouvez
cliquer sur la commande Rafraichir pour rafraichir manuellement.

Assurez vous d’avoir créé le fichier de config en sauvant vos infos dans
la config générale du plugin.
