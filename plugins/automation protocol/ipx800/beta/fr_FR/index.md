Présentation 
============

Ce plugin permet de gérer les cartes IPX800 de GCE.
Initialement, ce plugin a été créé pour connecter les IPX800 de GCE.

Données visibles sur le Dashboard : 
-----------------------------------

-   ''les entrées analogiques''

-   ''les entrées numeriques''

-   ''les relais''

-   ''les compteurs d’impulsions''

Installation/Paramétrage 
========================

Nous allons maintenant paramétrer un équipement. Pour se faire, cliquer
sur ''Plugins / Protocole domotique / IPX800''

Puis cliquer sur le bouton en haut à gauche ''Ajouter un équipement''

Puis saisir le nom de l’équipement (ex. IPX 1).

Puis définir :

-   ''Objet parent''

-   ''Catégorie'' (optionnelle)

-   ''Activer'' (à cocher, sinon l’équipement ne sera pas utilisable)

-   ''Visible'' (optionel si vous ne désirez pas le rendre visible sur
    le Dashboard)

-   ''Adresse IP''

-   ''Port''

-   ''Compte''

-   ''Mot de passe''

Fréquence de rafraichissement 
-----------------------------

Pour les entrées analogiques et les compteurs, les données sont
récupérées par le plugin toutes les minutes. Il n’est pas possible
d’avoir une fréquence plus élevée. Pour le reste, si le mode push est
activé, le rafraichissement est quasi instantané.

Pour activer le push, il faut cliquer sur

![bouton config push](../images/bouton_config_push.jpg)

Ensuite aller en bas et cliquer sur Appliquer.

Comportement avec l’application mobile 
--------------------------------------

Par defaut, voici le comportement :

-   ''L’ip800''

Les commandes sont toutes paramétrées.

-   ''les entrées analogiques''

Les commandes sont toutes par defaut visible et le type dépend de la
sonde choisi.

-   ''les entrées numeriques''

Les commandes sont considérées comme des lumières.

-   ''les relais''

Les commandes sont considérées comme des lumières.

-   ''les compteurs d’impulsions''

Les commandes sont considérées comme des types génériques.

Il faut noter que l’on retrouvera dans l’application les commandes à
partir du moment où elles sont paramétrées, même si elles ne sont pas
marquées comme visible. Pour les masquer, il faut choisir dans
"Configuration commande" ⇒ "Type générique" ⇒ "Ne pas tenir compte de
cette commande".

Quelques copies d’écran 
=======================

![ipx800 screenshot1](../images/ipx800_screenshot1.jpg)

![ipx800 screenshot2](../images/ipx800_screenshot2.jpg)

![ipx800 screenshot3](../images/ipx800_screenshot3.jpg)
