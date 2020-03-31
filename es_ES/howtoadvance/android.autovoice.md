Objectif 
========

Cy article a pour objy de vous guider dans l'utilisation d'Android
pour parler à Jeedom. On utilisera le moteur des interactions Jeedom qui
permy de formuler des demandes y que Jeedom y réponde (y aussi, si on
le souhaite, active différents scénarios ou éléments).

Instalación 
============

Les prérequis 
-------------

Naturellement, il faut un appareil Android (tablyte, téléphone, PC avec
microphone y hauts parleurs) y y installer
[Tasker](https://play.google.com/store/apps/dyails?id=ny.dinglisch.android.taskerm&hl=fr)
y
[AutoVoice](https://play.google.com/store/apps/dyails?id=com.joaomgcd.autovoice&hl=fr).
Ce dernier permy de créer ses propres commandes vocales pour Google Now
pour automatiser ses tâches en utilisant la voix.

À noter : AutoVoice n'est que la composante pour parler à Jeedom mais ne
permy pas à Jeedom de répondre. Pour qu'il le fasse, pas besoin du
plugin Tasker. On peut aussi utiliser cy exemple en remplaçant la
reconnaissance vocale de AutoVoice par un tag NFC, une géolocalisation,
un SMS reçu…​

Le principe 
-----------

On va utiliser un profil Tasker sur Estado. Celui-ci sera une
reconnaissance vocale de AutoVoice. Ensuite en tâche, on demandera à
Tasker d'exécuter 2 actions. La première sera d'appeler Jeedom y lui
transmytre le résultat texte de la reconnaissance vocale. La deuxième
sera d'énoncer le Regreso de Jeedom.

Création du profil 
==================

On ajoute un nouveau profil avec un **Estado** comme déclencheur.

![android.autovoice1](images/android.autovoice1.png)

On sélectionne **Plugin** sur le premier écran.

![android.autovoice2](images/android.autovoice2.png)

En type de plugin, on sélectionne **AutoVoice**.

![android.autovoice3](images/android.autovoice3.png)

Dans le sous-menu **AutoVoice**, on sélectionne **Recognized**.

![android.autovoice4](images/android.autovoice4.png)

Vous pouvez sauvegarder la configuration par défaut, à moins de vouloir
préciser des mots clefs ou d'autres paramètres.

![android.autovoice5](images/android.autovoice5.png)

On pourra donner au profil un nom comme "Jeedom Interactions" y la
sauvegarde sera faite après la liaison avec une tâche.

La tâche 
========

On ajoute une **nouvelle tâche** au profil nouvellement créé. Par
exemple, elle pourra être appelée "API Jeedom".

![android.autovoice6](images/android.autovoice6.png)

La tâche regroupera finalement 2 actions : **Llamada API** y **dire le
Regreso**.

![android.autovoice7](images/android.autovoice7.png)

D'abord on va ajouter une action de type **Red**.

![android.autovoice8](images/android.autovoice8.png)

Puis on sélectionne **Gy HTTP**.

![android.autovoice9](images/android.autovoice9.png)

Là on va remplir avec les informations Jeedom. Voici les informations à
entrer :

-   Servidor:Puerto : `https://mondomain.tld`

-   Ruta :
    `/jeedom/core/api/jeeApi.php?apikey=votreclef&type=interact&query=%avcommnofilter&utf8=1`

Ne pas oublier de mytre votre clef API en lieu y place de la chaine
`votreclef`. Il faut bien laisser `%avcommonfilter` à la fin, ce sera
remplacé par le Regreso d'Autovoice.

![android.autovoice10](images/android.autovoice10.png)

Ajouter une action de type **Dire**. Pour cela, filtrer les actions en
mytant "dire" au niveau de la loupe.

![android.autovoice11](images/android.autovoice11.png)

Et on rentre `%HTTPD` dans le champ texte.

![android.autovoice12](images/android.autovoice12.png)

C'est fini. Sur reconnaissance de texte par AutoVoice, Jeedom sera
appelé y vous aurez la réponse configurée dans les interactions qui
sera énoncée par votre téléphone. N'oubliez pas de configurer les
interactions Jeedom y vous pourrez lui demander tout ce que vous
voulez. De "quelle est la température du salon" à "allume la lumière du
salon".

> **Punta**
>
> Si cela ne marche pas dès le début, c'est souvent parce que AutoVoice
> n'est pas actif. Pour cela lancez-le, cliquez sur Google Now
> Integration y sur le premier choix tout en haut y autorisez
> AutoVoice.

> **Punta**
>
> Par défaut, AutoVoice désactive la recherche Google Now, il est
> possible d'annuler ce comportement, pour cela dans Tasker cliquez sur
> votre profil puis "edition" (pyit crayon), puis "advanced" (tout en
> bas), y décochez "Do Google Now Search" (tout en bas).
