Description 
===========

Plugin permettant à Jeedom de communiquer avec l’application S.A.R.A.H
(reconnaissance vocale). D’effectuer des annonces vocales et de jouer
des sons à partir de Jeedom.

Configuration
=============

Le plugin S.A.R.A.H. ajoute la reconnaissance vocale permettant de
parler à Jeedom, faire une annonce ou jouer un son à partir de Jeedom.

Plugin configuration
-----------------------

Une fois le plugin S.A.R.A.H. installé sur Jeedom à partir du Market,
cliquez sur **Activer**.

Configurer le nom de Sarah (par défaut **Sarah**, mais vous pouvez
mettre Jarvis ou Jeedom par exemple).

![sarah1](../images/sarah1.PNG)

Ensuite, cliquez sur l’un des boutons afin de télécharger le plugin
**Jeedom** pour la version de S.A.R.A.H. que vous utilisez, v3 ou v4.

Une fois téléchargé, arrêtez le Serveur et Client S.A.R.A.H..
Décompressez l’archive dans le dossier **plugins** de S.A.R.A.H. sur le
poste client (compatible Windows uniquement) :
<http://encausse.wordpress.com/s-a-r-a-h/>

Quand c’est fait, vous pouvez redémarrer le client et le serveur
S.A.R.A.H..

Equipment configuration
-----------------------------

La configuration des équipements S.A.R.A.H. est accessible à partir du
menu Plugins :

![sarah2](../images/sarah2.PNG)

Voilà à quoi ressemble la page du plugin S.A.R.A.H. (Ici, avec déjà 1
équipement) :

![sarah3](../images/sarah3.PNG)

> **Tip**
>
> Comme à beaucoup d’endroits sur Jeedom, placer la souris tout à gauche
> permet de faire apparaître un menu d’accès rapide (vous pouvez, à
> partir de votre profil, le laisser toujours visible).

Once you click on one of them, you get:

![sarah4](../images/sarah4.PNG)

Vous retrouvez ici :

-   **Nom de l’équipement S.A.R.A.H** : nom de votre équipement
    S.A.R.A.H.,

-   **Objet parent** : indique l’objet parent auquel
    appartient l’équipement.

-   **Enable**: to make your equipment active,

-   **Adresse du nodeJS** : IP de S.A.R.A.H. + port du node JS (par
    défaut le port est le 8080)

-   **Adresse du TTS** : IP de S.A.R.A.H. + port du serveur TTS (par
    défaut le port est le 8888)

-   **Ne pas remonter d’erreur si S.A.R.A.H. n’est pas là** : A cocher
    si S.A.R.A.H. n’est pas démarré en permanence

Chaque équipement de type S.A.R.A.H. crée aussi une commande :

-   **Dit** : Qui permet dans les scénarios de faire dire un texte
    à Jeedom. Il est possible d’annoncer une phrase de manière aléatoire
    en séparant vos phrases par un pipe : | Exemple : La porte d’entrée
    est ouverte.|Une personne a ouvert la porte d’entrée.|Porte d’entrée
    ouverte. Ainsi, lors de l’annonce, une de ses 3 phrases sera choisie
    au hasard.

-   **Jouer** : Qui permet d’exécuter un fichier audio de type .mp3
    ou .wav. Ces fichiers audio doivent être placés pour la **v3** :
    dans le dossier **"medias"**à la racine ou**v4** : dans le dossier
    **"client/medias"** de votre application S.A.R.A.H. Dans votre
    scénario, il suffira d’indiquer le nom de votre fichier audio
    à exécuter.

![sarah5](../images/sarah5.PNG)

-   **Mettre à jour la grammaire** : Qui permet par l’intermédiaire d’un
    scénario, de regénérer la grammaire XML à partir des
    interactions Jeedom.

Le bouton "synchroniser" permet d’envoyer à S.A.R.A.H. la liste de
toutes les interactions, il faut le faire à chaque mise à jour des
interactions.

Si vous désirez utiliser la fonction **Ask** de S.A.R.A.H., il est
possible de le faire à partir d’un scénario Jeedom en utilisant une
action "**Faire une Demande**".

Voici un simple exemple d’utilisation :

![sarah6](../images/sarah6.PNG)

Quand vous aurez ajouté la commande action "**Faire une Demande**", vous
allez voir apparaitre 5 champs à complèter :

-   **Question** : La question que vous désirez que Jeedom vous pose.

-   **Réponse** : Les choix de réponses que vous désirez pour pouvoir
    interagir suite à la question. Chaque réponse doit être séparée par
    un point virgule.

-   **Variable** : Ce sera le nom de la variable dans laquelle vous
    aimeriez que votre réponse soit enregistrée, afin de pouvoir faire
    une évaluation pour la suite du scénario.

-   **Délai(sec)** : C’est Le temps en seconde, avant que le scénario
    continue pour effectuer l’évaluation, si aucune réponse n’est
    donnée (Timeout).

-   **Commandes** : Sera la commande "**Dit**" de votre
    équipement SARAH.

Configuration dans S.A.R.A.H. 
-----------------------------

Sur l’interface de S.A.R.A.H., vous devriez avoir un Portlet avec le
Logo **Jeedom**.

**S.A.R.A.H. v3** :

Cliquez sur les doubles flèches en haut du Portlet pour faire tourner
l’image pour la suite, cliquer sur la clé en bas à gauche du Portlet
pour accèder à la fenêtre de configuration du Plugin.

**S.A.R.A.H. v4** :

Cliquez sur la roue crantée en bas du Portlet et ensuite sur
**Configurer l’extension** pour accèder à la fenêtre de configuration du
plugin.

Dans **addrJeedom**, remplacez **\[IP\_JEEDOM\]** par l’IP de votre
Jeedom et remplacez **\[PORT\_JEEDOM\]**, par le port de votre Jeedom.
Si votre Jeedom utilise l’extension **/jeedom**, n’oubliez pas de
l’indiquer après le port.

Dans **apikeyJeedom**, remplacez **\[CLE\_API\_JEEDOM\]** par la clef
API de votre Jeedom que vous pouvez retrouver dans la page de
Configuration de votre Jeedom.

Et pour terminer, cliquez sur Enregistrer.

Cas d’utilisation 
-----------------

Exemples :

-   Cela peut vous permettre de connaître toutes les remontées
    d’informations des différents capteurs (type “Sarah combien fait-il
    dehors?” ou “Sarah qu’elle est la température de la chambre”).

-   Vous pouvez également piloter les lumières (“Sarah allume la lumière
    du salon”), pour cela il faut bien sur avoir configuré
    les interactions.

-   Une personne appuie sur le bouton de la sonnette sans fil(RF433,
    Z-wave, ets…​), Jeedom émet un son par l’intermédiaire de SARAH,
    vous annonce la présence d’un visiteur et vous pose la question,
    "puis-je ouvrir la porte ?".

-   Votre machine à laver se trouve à la cave, le programme est terminé,
    SARAH joue un son "ding, dong" et vous annonce que le programme
    est terminé. Ensuite, elle vous pose la question, "dois-je éteindre
    la machine à laver ?".

-   Ets…​

La seul limite sera votre imagination.
