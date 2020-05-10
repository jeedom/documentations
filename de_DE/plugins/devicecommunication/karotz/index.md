Beschreibung
===========

Ce plugin permet de contrôler son Karotz (fonctionnant sous
[OpenKarotz](http://www.openkarotz.org/)). Cela va de sa led ventrale, à
ses oreilles en passant par les sons, la synthèse vocale et plein
d’autres.

Konfiguration
=============

Configuration du plugin Jeedom : 
--------------------------------

**Installation/Création**

Afin d’utiliser le plugin, vous devez le télécharger, l’installer et
l’activer comme tout plugin Jeedom.

Rendez vous dans le menu Plugins/Communication, vous y trouverez le
plugin Karotz.

Vous arriverez sur la page qui listera vos équipements (vous pouvez
avoir plusieurs Karotz) et qui vous permettra d’en créer.

Cliquez sur le bouton Ajouter :

Vous arriverez ensuite sur la page de configuration de votre karotz.

-   **Commandes**

Vous n’avez rien à faire dans cette section. Les commandes seront créées
automatiquement.

-   Rafraîchir: bouton permettant de rafraîchir le widget si besoin

-   Clignotement OFF : permet de couper le clignotement de la led

-   Clignotement ON : permet d’activer le clignotement de la led

-   Arrêter son : permet d’arrêter une musique ou un son en cours

-   Coucher : permet de faire dormir le lapin

-   Debout : permet de réveiller le lapin

-   Debout silencieux : permet de réveiller le lapin en mode silencieux

-   Horloge : permet de lancer le mode horloge du lapin

-   Humeur : permet de faire dire au lapin l’humeur selectionnée

-   Humeur n°: permet de faire dire au lapin l’humeur indiquée par son
    n°

-   Humeur aléatoire : permet de faire dire au lapin une humeur
    aléatoire

-   Oreille aléatoire : permet de bouger les oreilles de manière
    aléatoire

-   Oreille raz : permet de remettre les oreilles en position initiale

-   Oreilles positions : permet de régler la position précise des deux
    oreilles

-   Son du karotz (nom) : permet de lancer un son du Karotz (bip
    par exemple) en indiquant son nom

-   Son du karotz : permet de lancer un son du Karotz (bip par exemple)
    en sélectionnant son nom dans une liste

-   Son URL : permet de faire lire une URL au Karotz (station de radio
    par exemple)

-   Squeezebox on : permet d’activer le mode squeezebox du Karotz

-   Squeezebox off : permet de désactiver le mode squeezebox du Karotz

-   Endormi : permet de savoir si le Karotz est endormi (sinon il
    est réveillé)

-   Statut couleur : permet d’avoir la couleur actuellement sur le
    ventre du Karotz

-   TTS : permet de faire parler le lapin en choisissant la voix et le
    message (par défaut le message est mis en cache)

-   TTS sans cache : permet de faire parler le lapin en choisissant la
    voix et le message (le message n’est pas mis en cache)

-   Vitesse pulse : permet de régler la vitesse du clignotement

-   % d’espace occupé : permet de connaitre le % de disque utilisé sur
    le lapin

-   Espace libre : valeur en Mo d’espace libre sur le lapin

-   Redémarrer : permet de faire redémarrer (reboot) le lapin

-   Mettre à l’heure : permet de remettre automatiquement le lapin à
    l’heure (utile au changement d’heure)

-   Niveau du volume : indique en % le niveau du volume

-   Volume : permet de choisir en % le niveau du volume (recommandé max
    50%, risque de distorsion au-dessus)

-   Volume+ : augmente de 5% le niveau du volume

-   Volume- : diminue de 5% le niveau du volume

-   Photo : permet de prendre une photo par le lapin

-   Photos effacer : permet d’effacer toutes les photos prises par le
    lapin (libère de la place disque)

-   Photos refresh listing : permet de mettre à jour la liste des photos
    conservées

-   Photos listing : liste des photos conservées

-   Photos télécharger : permet de télécharger (par ftp) les photos
    conservées sur le disque (elles ne sont pas supprimées)

Toutes ces commandes sont disponibles via les scénarios.

Commande TTS 
------------

La commande TTS peut comporter plusieurs options séparées par des & :

-   voice : le n° de la voix

-   nocache : ne pas utiliser le cache

Exemple :

    voice=3&nocache=1

…​

Les informations/actions 
========================

Informations/actions sur le dashboard : 
---------------------------------------

![widget](../images/widget.jpg)

-   A : Permet d’accéder à la page de choix du son

![karotz screenshot5](../images/karotz_screenshot5.jpg)

-   B : Bouton Rafraîchir pour redemander les valeurs d’état et de
    couleur

-   C : Zone de contrôle des oreilles (aléatoire, remise à
    zéro, personnalisé)

![karotz screenshot7](../images/karotz_screenshot7.jpg)

-   D : Zone actions (horloge/humeur)

-   E : Zone Squeezebox (activer/désactiver)

-   F : Zone leds (activer clignotement/désactiver)

![karotz screenshot6](../images/karotz_screenshot6.jpg)

-   G : Slider de contrôle de la vitesse de clignotement

-   H : En cliquant sur le ventre, cela permet de changer la couleur de
    la led

-   I : En cliquant sur le lapin, cela permet de le faire se coucher ou
    s’endormir

FAQ
===

Quelle est la fréquence de rafraîchissement des infos

:   Le système récupère les informations toutes les 30 minutes ou après
    une demande de changement de couleur ou d’état du lapin. Vous pouvez
    cliquer sur la commande Rafraîchir pour rafraîchir manuellement.

Changelog détaillé :
<https://github.com/jeedom/plugin-karotz/commits/stable>
