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

Pour les débits, consommations instantanées et Puissance Apparente une
collecte est faite par un daemon en fonction de la fréquence paramétrée
au niveau du plugin. Attention, une forte diminution engendre une forte
surcharge de votre serveur jeedom.

Installation/Paramétrage
========================

Nous allons maintenant paramétrer un équipement. Pour se faire, cliquer
sur '''Plugins / Protocole domotique / Eco-device'''.

Puis cliquer sur le bouton en haut à gauche "'''Ajouter un
équipement'''".

Puis saisir le nom de l’équipement (ex. Ecodevice 1).

Puis définir :

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
gauche en cliquant sur l’icône de celle-ci.

Voici la page de configuration de compteur. Tant que le type de compteur
n’est pas défini, les commandes ne sont pas créées.

![ecodevice screenshot4](../images/ecodevice_screenshot4.jpg)

Voici la page de configuration d’une entrée téléinformation. Tant que le
type de contrat n’est pas défini, les commandes ne sont pas créées.

![ecodevice screenshot5](../images/ecodevice_screenshot5.jpg)

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
