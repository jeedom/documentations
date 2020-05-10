Plugin permettant d’utiliser le RFPLAYER 1000. Ce plugin remplacera à terme le premier plugin. Il sera mis à disposition de tous les possesseurs du premier plugin.
Cela permettra à chacun de migrer tranquillement. Car la philosophie du plugin ayant changé et les ids aussi, il faudra réinclure vos devices sur ce nouveau plugin.

Configuration du plugin RFPlayer 
================================

Après installation du plugin, il vous suffit de l’activer :


**Configuration**

Pour configurer le plugin, vous devez simplement mettre en auto, ou
alors choisir le RFPlayer.


Ajouter un Module 
=================

Le RFPlayer est compatible de nombreux Modules. Le plugin RFPlayer2 change complétement de philosophie.
Il raisonne de manière générique afin d'assurer la compatibilité équitable avec le RFplayer lui même.

Pour inclure un module, il vous suffit de cliquer sur Inclusion et de suivre le pas à pas. Celui-ci va vous demander de choisir
le protocole, puis le type (actionneur / éméteur) dans le cas d'un éméteur la configuration créé contiendra l'ensemble des données brutes
transmises par le rfplayer (certaines seront peut être inutiles pour votre usage, vous pourrez les masquer). L'avantage de cette méthode est d'être alignée
avec le Rfplayer (certains devices donnant l'info à un endroit, d'autres à un autre) et aussi de permettre pendant l'inclusion de filtrer finement le protocole à inclure.
 Vous n'aurez pas le soucis d'inclure des sondes Oregon alors que vous voulez inclure un capteur X2D.

 Pour les actionneurs, c'est le même principe. Vous aurez en plus à choisir le type d'actionneur en fonction du protocole. Une fois fait, l'équipement se créera dans Jeedom. Et il faudra 
 renseigner un ID d'émission cohérent avec le protocole (généralement ce champ se pré remplis intelligemment) et ensuite aller dans le tableau de commande et cliquer sur "Tester" sur la commande association.
 Bien évidemment il faut au préalable que vous ayez mis le module en apprentissage conformément à la documentation du fabricant du module.

 Quelques particularités :

-   Oregon \*

Le changement de piles change l’ID du produit. Il faut donc, lors du
changement de piles, ajouter un nouveau module, puis cliquer sur
"Récupérer ID" en face de "Changement de pile". Il faut faire cette
action sur le nouveau module et choisir le nom du module approprié
(l’ancien nom du module dont les piles viennent d’être remplacées).


-  Parrot \*

Pour le mode parrot un équipement se créera. Celui-ci aura un bouton permettant de mettre le Rfplayer en apprentissage et créera la commande associée. Il existe une commande status qui permet de demander au Rfplayer de logguer
en log debug, l'ensemble des commandes parrot apprises.



Vous serez averti dans les Changelog du plugin lors de sa mise à jour.

FAQ
===
