Présentation 
============

Ce plugin permet de gérer les cartes Ecodevice de GCE.

Initialement, ce plugin a été créé pour connecter les Ecodevices de GCE.

Données visibles sur le Dashboard : 
-----------------------------------

-   '''les compteurs de Téléinformation '''

![ecodevice screenshot2](../images/ecodevice_screenshot2.jpg)

-   '''les compteurs d’impulsions'''

![ecodevice screenshot3](../images/ecodevice_screenshot3.jpg)

Fréquence de rafraichissement 
-----------------------------

Le plugin met à jour ces données de 2 façons :

Les données sont récupérées par le plugin toutes les minutes pour tous
les compteurs. Il n’est pas possible d’avoir une fréquence plus élevée.

Pour les débits, consommations instantanés et Puissance Apparente une
collecte est fait par un daemon en fonction de la fréquence paramétrée
au niveau du plugin. Attention, une forte diminution engendre une forte
surcharge de votre serveur jeedom.

Installation/Paramétrage 
========================

Nous allons maintenant paramétrer un équipement. Pour se faire, cliquer
sur '''Plugins / Protocole domotique / Eco-device'''.

Puis cliquer sur le bouton en haut à gauche "'''Ajouter un
équipement'''".

Puis saisir le nom de l’équipement (ex. Ecodevice 1).

Dann definieren Sie :

-   '''Objet parent'''

-   '''Catégorie '''(optionnelle)

-   '''Activer '''(à cocher, sinon l’équipement ne sera pas utilisable)

-   '''Visible '''(optionel si vous ne désirez pas le rendre visible sur
    le Dashboard)

-   '''Adresse IP'''

-   '''Port'''

-   '''Compte'''

-   '''Mot de passe'''

![ecodevice screenshot1](../images/ecodevice_screenshot1.jpg)

Vous retrouverez l’ensemble des élements de la carte dans le menu à
gauche en clickant sur l’icone de celle-ci.

Voici la page de configuration de compteur. Tant que le type de compteur
n’est pas defini, les commandes ne sont pas crées.

![ecodevice screenshot4](../images/ecodevice_screenshot4.jpg)

Voici la page de configuration d’une entrée téléinformation. Tant que le
type de contrat n’est pas defini, les commandes ne sont pas crées.

![ecodevice screenshot5](../images/ecodevice_screenshot5.jpg)

Installation/Paramétrage 
========================

Ce plugin ne nécessite aucun pre-requis d’installation.

FAQ
===

Il faut dans le menu gauche cliquer sur l’icône suivant pour y avoir
accès : ![la](../images/acces_sous_indicateur.jpg)

Par défaut c’est toutes les minutes. Il est possible de configurer
manuellement du push sur l’ecodevice. Pour les débits, consommations
instantanées et puissance apparente peuvent être collectées plus
fréquement en fonction du démon.

Il faut cliquer sur l’icône à gauche du nom de la carte dans la liste de
gauche.

Ce plugin est gratuit pour que chacun puisse en profiter simplement. Si
vous souhaitez tout de même faire un don au développeur du plugin, merci
de m’envoyer un [message
privé](https://www.jeedom.com/forum/memberlist.php?mode=viewprofile&u=698)
sur le forum.

C’est tout à fait possible via
[github](https://github.com/guenneguezt/plugin-ecodevice)

Pour le calcul du débit de fuel en une heure de fonctionnement, il faut
connaître le marquage de votre gicleur de fuel. Pour cela, vous
trouverez les informations dans [le doc
suivant](http://fr.cd.danfoss.com/PCMPDF/DKBDPD060A204.pdf).

La valeur donnée est en USgal/Heure avec la correspondance en Kg/H.

Pour la densité du fuel, on peut prendre 820Kg/m³ et une pression de 7
bar.

Donc si vous avez un gicleur marqué 0.65S : 2,67 kg/h (suivant le
tableau Danfoss). 2,67x0,82=2,1894 litres à l’heure. Cela donne une
indication "approximative" de votre consommation.

Oui, il n’a pas été rédigé par mes soins, mais a le mérite d’exister.
Merci au rédacteur.
<http://blog.domadoo.fr/guides/jeedom-guide-dutilisation-plugin-ecodevice/>

Changelog
=========

> **Warning**
>
> Detail complet des mises à jour sur [Historique
> Commit](https://github.com/guenneguezt/plugin-ecodevice/commits/master)

Liste des évolutions majeures de la version courante :

-   Suppression du lien Paypal pour être conforme avec Jeedom V3.1

Anciennes évolutions :

-   Ajout d’une Clef API spécifique au plugin

-   Modification pour compatibilité Jeedom V3

-   Plus de suivi de version

-   Correction pour firmware 1.04.82

-   Correction du triphase

-   Correction du démon

-   Ajout de la génération automatique et intélligente des commandes de
    téléinfo

-   Changement unité Ampère en A

-   Ajout de démon pour valeur variant rapidement

-   Commande par type de compteur (eau, gaz, electricité, fuel)

-   Ajout des max et min pour widget

-   Widget par défaut

-   Amélioration de FAQ

-   Correction commande reboot.

-   Modification pour recréer les sous-commandes si elles
    n’existent plus.

-   Correction de la commande reboot

-   Ajout de commande pour reboot

-   Detection des xml corrompu.

-   Mise à jour des entrées analogiques, même si la valeur ne change pas
    pour les graphiques.

-   Ajout de Intensité souscrite.

-   Intensité maximale.

-   Ajout du compteur journalier en monde non fuel.

-   Modification de cron pour plus d’autonomie.

-   Modification de l’extension du logo.

-   Compatibilité Imperihome

-   Retrait de la suppression des équipements lors de la désactivation
    du plugin

-   Correction par rapport au nouveau core.

-   Suppression de l’info `updatetime`.

-   Ajout de données évolution (variation par minute).

-   Ajout d’un choix de tarification pour ne présenter que les commandes
    correspondantes à celle-ci.

-   Ajout de lien vers les options d’affichage.

-   Correction de double cron.

-   Ajout du nombre d’impulsions par minute.

-   Redéclenchement jusqu’à 3 fois en cas d’indisponibilité
    de l’ecodevice.

-   Ajout d’une information `status`.

-   Ne pas mettre à jour les données si elles ne changent pas.

-   Problème de ZIP.

-   Initialisation.


