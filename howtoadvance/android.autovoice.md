Objectif 
========

Cet article a pour objet de vous guider dans l’utilisation d’Android
pour parler à Jeedom. On utilisera le moteur des interactions Jeedom qui
permet de formuler des demandes et que Jeedom y réponde (et aussi, si on
le souhaite, active différents scénarios ou éléments).

Installation 
============

Les prérequis 
-------------

Naturellement, il faut un appareil Android (tablette, téléphone, PC avec
microphone et hauts parleurs) et y installer
[Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=fr)
et
[AutoVoice](https://play.google.com/store/apps/details?id=com.joaomgcd.autovoice&hl=fr).
Ce dernier permet de créer ses propres commandes vocales pour Google Now
pour automatiser ses tâches en utilisant la voix.

À noter : AutoVoice n’est que la composante pour parler à Jeedom mais ne
permet pas à Jeedom de répondre. Pour qu’il le fasse, pas besoin du
plugin Tasker. On peut aussi utiliser cet exemple en remplaçant la
reconnaissance vocale de AutoVoice par un tag NFC, une géolocalisation,
un SMS reçu…​

Le principe 
-----------

On va utiliser un profil Tasker sur état. Celui-ci sera une
reconnaissance vocale de AutoVoice. Ensuite en tâche, on demandera à
Tasker d’exécuter 2 actions. La première sera d’appeler Jeedom et lui
transmettre le résultat texte de la reconnaissance vocale. La deuxième
sera d’énoncer le retour de Jeedom.

Création du profil 
==================

On ajoute un nouveau profil avec un **état** comme déclencheur.

![android.autovoice1](../images/android.autovoice1.png)

On sélectionne **Plugin** sur le premier écran.

![android.autovoice2](../images/android.autovoice2.png)

En type de plugin, on sélectionne **AutoVoice**.

![android.autovoice3](../images/android.autovoice3.png)

Dans le sous-menu **AutoVoice**, on sélectionne **Recognized**.

![android.autovoice4](../images/android.autovoice4.png)

Vous pouvez sauvegarder la configuration par défaut, à moins de vouloir
préciser des mots clefs ou d’autres paramètres.

![android.autovoice5](../images/android.autovoice5.png)

On pourra donner au profil un nom comme "Jeedom Interactions" et la
sauvegarde sera faite après la liaison avec une tâche.

La tâche 
========

On ajoute une **nouvelle tâche** au profil nouvellement créé. Par
exemple, elle pourra être appelée "API Jeedom".

![android.autovoice6](../images/android.autovoice6.png)

La tâche regroupera finalement 2 actions : **appel API** et **dire le
retour**.

![android.autovoice7](../images/android.autovoice7.png)

D’abord on va ajouter une action de type **Réseau**.

![android.autovoice8](../images/android.autovoice8.png)

Puis on sélectionne **Get HTTP**.

![android.autovoice9](../images/android.autovoice9.png)

Là on va remplir avec les informations Jeedom. Voici les informations à
entrer :

-   Serveur:Port : `https://mondomain.tld`

-   Chemin :
    `/jeedom/core/api/jeeApi.php?apikey=votreclef&type=interact&query=%avcommnofilter&utf8=1`

Ne pas oublier de mettre votre clef API en lieu et place de la chaine
`votreclef`. Il faut bien laisser `%avcommonfilter` à la fin, ce sera
remplacé par le retour d’Autovoice.

![android.autovoice10](../images/android.autovoice10.png)

Ajouter une action de type **Dire**. Pour cela, filtrer les actions en
mettant "dire" au niveau de la loupe.

![android.autovoice11](../images/android.autovoice11.png)

Et on rentre `%HTTPD` dans le champ texte.

![android.autovoice12](../images/android.autovoice12.png)

C’est fini. Sur reconnaissance de texte par AutoVoice, Jeedom sera
appelé et vous aurez la réponse configurée dans les interactions qui
sera énoncée par votre téléphone. N’oubliez pas de configurer les
interactions Jeedom et vous pourrez lui demander tout ce que vous
voulez. De "quelle est la température du salon" à "allume la lumière du
salon".

> **Tip**
>
> Si cela ne marche pas dès le début, c’est souvent parce que AutoVoice
> n’est pas actif. Pour cela lancez-le, cliquez sur Google Now
> Integration et sur le premier choix tout en haut et autorisez
> AutoVoice.

> **Tip**
>
> Par défaut, AutoVoice désactive la recherche Google Now, il est
> possible d’annuler ce comportement, pour cela dans Tasker cliquez sur
> votre profil puis "edition" (petit crayon), puis "advanced" (tout en
> bas), et décochez "Do Google Now Search" (tout en bas).
