Porkfolio 
=========

Description 
-----------

Ce plugin permet de controller et d’avoir toutes les infos de sa
tirelire Porkfolio.

![porkfolio screenshot1](../images/porkfolio_screenshot1.jpg)
![porkfolio screenshot10](../images/porkfolio_screenshot10.jpg)
![porkfolio screenshot9](../images/porkfolio_screenshot9.jpg)
![porkfolio screenshot8](../images/porkfolio_screenshot8.jpg)

Configuration 
-------------

### Configuration du plugin Jeedom : 

**Installation/Création**

Afin d’utiliser le plugin, vous devez le télécharger, l’installer et
l’activer comme tout plugin Jeedom.

Suite à cela il vous faudra renseigner vos identifiants (compte wink +
api):

![porkfolio screenshot7](../images/porkfolio_screenshot7.jpg)

Rendez vous dans le menu Plugins/Finances, vous y trouverez le plugin
porkfolio :

Vous arriverez sur la page qui listera vos équipements (vous pouvez
avoir plusieurs Porkfolio) et qui vous permettra d’en créer

![porkfolio screenshot6](../images/porkfolio_screenshot6.jpg)

Cliquez sur le bouton Ajouter :

Vous arriverez ensuite sur la page de configuration de votre porkfolio:

![porkfolio screenshot5](../images/porkfolio_screenshot5.jpg)

Sur cette page vous trouverez plusieurs sections :

-   **Général**

Vous trouverez dans cette section toutes les configurations Jeedom. A
savoir le nom de votre équippement, l’objet auquel vous voulez
l’associer, la catégorie (de préférence multimédia), si vous voulez que
l’équipement soit actif ou non , et enfin si vous voulez qu’il soit
visible sur le dashboard.

-   **Configuration**

Cette section est utile si et seulement si vous possédez plusieurs
porkfolio. Il faudra rentrer le numéro de l’équippement (1, 2 ou 3 par
exemple). Vous pouvez laisser ce champ vide si vous possédez un seul
porkfolio ce qui sera sûrement votre cas.

-   **Commandes**

Vous n’avez rien à faire dans cette section. Les commandes seront créées
automatiquement.

-   Rafraîchir: bouton permettant de rafraîchir le widget si besoin

-   Date de dépôt : Date de la dernière opération

-   Date mouvement : Date de la dernière fois où un mouvement a été
    détecté

-   Date retournement : Date de la dernière fois où le porkfolio a été
    retourné

-   Dernière opération : Montant de la dernière opération

-   Nez : Couleur du nez

-   Objectif : Montant de votre objectif

-   Somme : Somme actuellement dans le porkfolio

…​

Les informations 
----------------

### Informations sur le dashboard : 

![dashboardinfo](../images/dashboardinfo.jpg)

-   A : Tête du cochon qui peut changer d’humeur. En laissant la souris
    sur sa tête il vous dira quand il a bougé pour la dernière fois
    ainsi que la dernière fois où il a été retourné

-   B : Bouton rafraîchir pour redemander les valeurs au serveur

-   C : Montant de la dernière opération. En laissant la souris dessus
    vous aurez la date de la dernière opération

-   D : Montant de votre objectif

-   E : Couleur du nez de votre porkfolio

-   F : Barre de progression dans l’atteinte de votre objectif

-   G : Somme actuellement dans votre porkfolio

…​

Les actions 
-----------

### Actions accessibles sur le dashboard : 

Plusieurs actions sont accessibles sur le dashboard :

![dashboardactions](../images/dashboardactions.jpg)

-   A : En cliquant sur le billet vous pourrez déposer ou retirer une
    somme d’argent

![porkfolio screenshot2](../images/porkfolio_screenshot2.jpg)

-   B : En cliquant sur le drapeau vous pourrez modifier votre objectif

![porkfolio screenshot3](../images/porkfolio_screenshot3.jpg)

-   C : En cliquant sur le pinceau vous pourrez modifier la couleur du
    nez de votre porkfolio

![porkfolio screenshot4](../images/porkfolio_screenshot4.jpg)

…​

FAQ 
---

Le système recupère les informations toutes les heures. Vous pouvez
cliquer sur la commande Rafraîchir pour rafraîchir manuellement.

Assurez-vous d’avoir créé le fichier de config en sauvant vos infos dans
la config générale du plugin.
