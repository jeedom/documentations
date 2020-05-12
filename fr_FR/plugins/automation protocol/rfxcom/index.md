# Plugin RFXcom

Plugin permettant d’utiliser une clef RFXcom avec Jeedom. Ce plugin fonctionne aussi bien en local qu’en déporté (avec le plugin Jeedom Link)

Le plugin RFXcom permet de dialoguer avec l’ensemble des périphériques compatibles avec le module RFXCOM USB. Parmi ces périphériques on retrouve les marques suivantes : Oregon, LaCross, Chacon, X10, DI-O, Blyss, etc.

# Configuration du plugin

Après installation du plugin, il vous suffit de l’activer et de mettre le port sur auto, après sauvegarde le démon devrait se lancer. Le plugin est déjà configuré par défaut ; vous n’avez donc rien à faire de plus. Cependant vous pouvez modifier cette configuration. Voici le détail des paramètres :

-   **Dépendances** : cette partie vous donne le statut des dépendances, si elles ne sont pas OK vous pouvez soit les lancer à la main soit attendre 5min, Jeedom les lancera de lui même.
-   **Démon** : cette partie vous donne le statut du démon, si il n’est pas OK vous pouvez soit le lancer à la main soit attendre 5min, Jeedom le lancera de lui même.
-   **Configuration** : cette partie permet de configurer les paramètres généraux du plugin.
    -   *Bannir les IDs suivants* : permet de donner une liste d’identifiants RFXcom à Jeedom pour que celui-ci ne crée pas les équipements correspondants. Les identifiants doivent être séparés par des espaces. Exemple : "1356AD87 DB54AF".
-   **Démon** : paramètres de configuration du démon.
    -   *Port RFXcom* : le port USB sur lequel votre interface RFXcom est connectée.
        > **Tip**
        >
        > Si vous ne savez pas quel port USB est utilisé, vous pouvez simplement indiquer "Auto". Mais attention certains modules peuvent entrer en conflit avec la découverte auto (type téléinfo) et la sélection automatique ne marchera pas.

    -   *Vitesse de communication* : vitesse de communication du
        port RFXcom.

        > **Tip**
        >
        > A laisser à la valeur par défaut à moins d’utiliser un ancien modèle de contrôleur.

    -   \_Port socket interne (modification dangereuse : permet de modifier le port de communication interne du démon.
        > **Important**
        >
        > A ne changer que si vous savez ce que vous faites.

-   *Protocoles* : permet de sélectionner les protocoles actifs de l’interface RFXcom.

    > **Important**
    >
    > Ne pas tous les activer, certains étant incompatibles entre eux, voici la matrice de compatibilité :

Pour lancer le démon en debug il suffit au niveau de la configuration des logs du plugin de mettre en debug, de sauvegarder et de relancer le démon.

> **Important**
>
> Dans ce mode, le démon est très bavard. Une fois le debug terminé, il ne faut pas oublier de cliquer sur "Redémarrer" pour sortir du mode debug !!

# Configuration des équipements

La configuration des équipements RFXcom est accessible à partir du menu plugins puis protocole domotique. Vous retrouvez ici :

-   un bouton pour créer un équipement manuellement
-   un bouton pour passer en mode inclusion
-   un bouton pour afficher la configuration du plugin
-   un bouton qui vous donne l’état de santé de tous vos équipements RFXcom
-   enfin en dessous vous retrouvez la liste de vos équipements

En cliquant sur un de vos équipements vous arrivez sur la page configuration de votre équipement comprenant 2 onglets, équipement et commandes.

-   **Onglet Equipement** :
-   **Nom de l’équipement RFXcom** : nom de votre équipement RFXcom
-   **ID** : l’id de votre sonde (à ne modifier qu’en connaissance de cause)
-   **Activer** : permet de rendre votre équipement actif
-   **Visible** : le rend visible sur le dashboard
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement
-   **Catégorie** : les catégories de l’équipement (il peut appartenir à plusieurs catégories)
-   **Ne pas vérifier la batterie** : indique à Jeedom de ne pas vous alerter si l’équipement envoie une trame de batterie faible (certains modules ne gèrent pas correctement cette info et génèrent de fausses alertes)
-   **Délai maximum autorisé entre 2 messages (min)** : le délai maximum autorisé entre 2 messages avant que Jeedom ne déclare l’équipement en "timeout".
-   **Récupérer ID (changement de pile)** : le RFXcom a la particularité de changer l’ID de la sonde lors du changement de pile, Jeedom propose un assistant pour faciliter l’opération. Vous devez :
    -   changer la pile de votre sonde
    -   attendre sa création du Jeedom et aller sur la nouvelle sonde créée
    -   appuyer sur le bouton "Récupérer ID (changement de pile)"
    -   Sur la fenêtre, dans le menu déroulant choisir l’ancienne sonde,
    -   Valider
-   **Equipement** : permet de définir le modèle de votre équipement (à ne configurer que pour une création manuelle d’un équipement, en automatique Jeedom configure ce champ tout seul)
-   **Création** : vous donne la date de création de l’équipement
-   **Communication** : vous donne la date de dernière communication avec l’équipement (peut être vide dans le cas d’une prise par exemple)
-   **Batterie** : niveau de batterie de l’équipement
-   **Statut** : statut de l’équipement (peut être timeout par exemple)
-   **Onglet Commandes** :
  -   le nom affiché sur le dashboard
  -   le type et le sous-type
  -   la clef de l’information si c’est une info, ou alors le code hexadécimal à envoyer lorsque c’est une action. Les configurations permettent de remplir ces champs automatiquement (il faut créer l’équipement, choisir la configuration puis sauvegarder)
  -   Le groupe permet une gestion facile pour les équipements supportant la notion de groupe. Cela remplace le tag \#GROUP\# dans la chaîne hexadécimale lors de l’exécution de la commande
  -   "Valeur de retour d’état" et "Durée avant retour d’état" : permet d’indiquer à Jeedom qu’après un changement sur l’information sa valeur doit revenir à Y, X min après le changement. Exemple : dans le cas d’un détecteur de présence qui n’émet que lors d’une détection de présence, il est utile de mettre par exemple 0 en valeur et 4 en durée, pour que 4 min après une détection de mouvement (et s’il n’y a en pas eu de nouvelles depuis) Jeedom remette la valeur de l’information à 0 (plus de mouvement détecté)
  -   historiser : permet d’historiser la donnée
  -   afficher : permet d’afficher la donnée sur le dashboard
  -   évènement : dans le cas du RFXcom cette case doit toujours être cochée car on ne peut pas interroger un module RFXcom
  -   unité : unité de la donnée (peut être vide)
  -   min/max : bornes de la donnée (peuvent être vides)
  -   configuration avancée (petites roues crantées) : permet d’afficher la configuration avancée de la commande (méthode d’historisation, widget…​)
  -   Tester : permet de tester la commande
  -   supprimer (signe -) : permet de supprimer la commande

# Opération sur les équipements RFXcom

En haut de votre page de configuration pour l’équipement, vous avez 3 boutons qui permettent de réaliser certaines options :

-   Dupliquer : permet de dupliquer l’équipement
-   Configuration avancée : même principe que pour les commandes, ça permet une configuration avancée de l’équipement
-   Supprimer : Supprime votre équipement
-   Sauvegarder : Sauvegarde votre équipement et les éventuelles modifications apportées

# Inclusion d’un équipement RFXcom

L’ajout d’un équipement RFXcom est très simple, il faut juste passer en mode inclusion et attendre que l’équipement envoi un message, quand ca sera le cas Jeedom vous indiquera qu’il a inclus un nouvel équipement et créera celui-ci automatiquement.

# Liste des modules compatibles

Vous trouverez la liste non exhaustive des modules compatibles
[ici](https://doc.jeedom.com/fr_FR/rfxcom/equipement.compatible)

# Ajouter une prise

Ce mode opératoire est valable pour les prises, récepteurs luminaires, etc. Rendez-vous dans le menu "Plugins" puis "Protocole domotique" et enfin "RFXcom".

Cliquez sur "Ajouter" pour ajouter un module, nommez votre module et cliquez sur "D’accord".

Sélectionnez "Prise - Défaut" dans "Equipement", puis cliquez sur "Sauvegarder".

-   Allez sur l’onglet "Commandes"
-   Mettre votre module/prise en mode apprentissage. (Cliquez sur le bouton apprentissage de votre module/prise. Certaines prises ne possèdent pas de bouton, il suffit de débrancher la prise, puis de la rebrancher et pendant les 3 premières secondes suivant le branchement la prise est en mode apprentissage).
-   Cliquez sur "Tester" d’une commande.
-   Si la connexion s’est bien déroulée, vous pouvez cliquer sur "Sauvegarder", dans le cas contraire vous pouvez recommencer cette étape.

Votre module/prise est maintenant connecté(e) avec JEEDOM, pensez à l’activer et à le rendre visible pour le voir apparaître sur le Dashboard.

# Ajouter un store somfy

Depuis la sortie du nouveau module RFXcom RFXtrx433E, il est désormais possible de piloter ses périphériques Somfy RTS (RFY/RFU) depuis Jeedom. (Qui prend en charge ce module via le plugin RFXcom)

Pour ajouter un nouveau périphérique, se rendre dans le menu Plugins &gt; Protocole Domotique &gt; RFXcom

Cliquez sur le bouton +Ajouter et donnez un nom à votre périphérique. Ex : « Volet Véranda ».

Se rendre sur le nouveau Périphérique créé et dans le menu déroulant Equipement, choisir « RTS Store Somfy – Défaut », en profiter pour lui définir un objet parent et une catégorie si vous le souhaitez et cliquer sur Enregistrer.

Les commandes utiles pour gérer le volet roulant sont automatiquement générées. Il ne reste plus qu’à appairer le volet avec ce périphérique Jeedom. Pour cela, appuyez sur le bouton d’appairage de la télécommande du volet que vous souhaitez commander pendant 2 à 3 secondes, jusqu’à ce que le volet fasse un léger aller/retour.

Une fois que le volet a signifié qu’il est en attente de commande pour l’appairage, cliquer sur le bouton Tester correspondant à la commande Programme dans Jeedom.

Pour valider l’apprentissage de la nouvelle commande, le volet va alors faire de nouveau un bref aller/retour.

Afin de tester tout de suite, vous pouvez cliquer sur les boutons Tester correspondants aux commandes « Monter, Descendre, Stop ». Le bouton « My » correspond à la commande Stop.

Activez et rendez visible le périphérique avec les cases à cocher correspondantes afin de pouvoir le visualiser et l’utiliser dans le dashboard.

Vous pouvez désormais commander votre volet Somfy RTS avec Jeedom.

# FAQ

>**Simuler/reconnaître une télécommande rfxcom chinoise (undecoded).**
>
>   **Programmation des télécommandes chinoises à code dans Jeedom**
>
>Au niveau du plugin RFXCom → Gestion des protocoles RFXCom :
>
>-   Ne PAS cocher Undecoded
>-   Cocher Lightning4
>
>Pour récupérer les codes de la télécommande : Activer l’option "Enregistrer tous les messages" et récupérer les ID en appuyant sur les
>touches des télécommandes qui ressemblent à Message : 0913004C410A24015970, Subtype = ARC, Id = 400A24 …​ Exemple"Messages"
>d’une télécommande à 4 touches : 0913006D410A21015E70 0913006E410A22015970 0913006F410A24015970 09130070410A28015970
>
>Pour simuler un appui sur la commande (émission), il faut choisir un équipement de type "Lightning4 (13) Defaut". Ensuite, ajouter une commande de type Action / Défaut et mettre la valeur "Message" dans Logicial ID (de type0913006D410A21015E70). Le bouton tester permet de vérifier le bon fonctionnement.
>
>Pour la réception, il faut impérativement utiliser la commande auto générée par Jeedom (une par touche) avec la valeur Id = 400A24 dans le champ ID en haut à gauche, tout en sélectionnant un équipement de type "Lightning4 (13) Defaut". C’est l’info "Pulse" qui est reçue à chaque appui de la télécommande, et permet donc de déclencher des évènements dans Jeedom.

>**Boitier relai chinois ak-rk01-12 piloté depuis Jeedom**
>
>Pour un pilotage relai depuis Jeedom en direct : mettre le cavalier en position 1-2 (coté LED rouge et 3 borniers) pour activer le mode Latch avec commande déparée ON et OFF. Au niveau de Jeedom, créer une commande ON avec une valeur 09130038410B20015C70 (ce qui est important, c’est la chaine au milieu 410B20 pour ON et 410B21 pour OFF. Il est possible de varier les codes avec les 4 premières lettres 410B, mais conserver les fins en 20 et 21 pour les commandes ON et OFF. On peut aussi mettre le cavalier sur 2-3 et n’utiliser que la première commande pour inverser l’état ON/OFF à chaque envoi de la commande

>**Je ne vois pas le port USB du rfxcom**
>
>Vérifiez que vous n’avez pas brltty d’installer (`sudo apt-get remove brltty` pour le supprimer)


>**Au bout de quelques heures/jours je n’ai plus de mise à jour de mes sondes, une relance du démon corrige**
>
>Vérifiez votre cable USB (un mauvais cable USB entraine souvent ce genre de soucis, il ne faut pas qu’il soit trop long non plus), verifiez aussi votre alimentation, un hub USB est fortement conseillé

>**J’ai un message m’indiquant que le port n’existe pas**
>
>Vérifiez que le port est bien configuré et que la configuration est enregistrée (il faut sauvegarder sinon la modification n’est pas prise en compte).

>**Mes sondes ne sont pas vues**
>
>Bien s’assurer d’avoir bien coché la case pour la création automatique des équipements. Vérifer que le démon est bien lancé. Il est aussi possible de redémarrer le démon en debug pour voir s’il reçoit bien les messages des sondes. Vérifier aussi que les bons protocoles sont activés (attention à ne pas trop en activer sinon ça ne fonctionnera pas non plus).

>**Lors du démarrage en mode debug j’ai le message : "can not bind socket address" ou "Cannot assign requested address"**
>
>Cela provient probablement d’une mauvaise adresse IP configurée dans le menu Général/administration/Configuration, section "Configuration réseau", puis "Accès interne" et Adresse URL ou IP.

>**Le démon refuse de démarrer**
>
>Essayer de démarrer le démon en mode debug pour voir l’erreur.

>**Pourquoi l’association d’une prise est plus complexe sur Jeedom que sur d’autres solutions domotiques ?**
>
>Sur les autres solutions domotiques il suffit souvent juste de cliquer sur les boutons de la télécommande pour pouvoir piloter la prise que la télécommande pilote, pourquoi ce n’est pas le cas sous Jeedom ?
>
>Jeedom dissocie la télécommande de la prise, avec la méthode précédente vos boutons doivent piloter la prise, et si vous cassez l’association entre la prise et la télécommande la solution domotique ne peut plus piloter la prise.
>
>Sous Jeedom c’est différent : l’association est plus complexe mais il n’est plus nécessaire que la télécommande ait X boutons monopolisés par la commande de la prise. Ces boutons peuvent servir à piloter un groupe de prise mixant plusieurs technologies (Z-Wwave, Enocean et RFXcom par exemple).

>**Ma prise DIO ne veut pas s’associer avec Jeedom**
>
>Cela arrive généralement quand la mémoire interne de la prise est saturée. Pour effacer la mémoire des prises DIO/Chacon (elles n’acceptent pas plus de 3 codes différents) sous Jeedom, il faut créé une commande "reset" avec la valeur 0B110006\#ID\#09030070 A ce moment, la led rouge clignote deux fois, et la prise peut accepter une nouvelle association avec Jeedom.

>**La batterie de mes sondes ne remonte pas correctement**
>
>Vérfiez que vous avez bien une commande batterie avec pour logicalId "battery" sur votre équipement

>**J'ai l'erreur [Errno 5] Input/output error**
>
>Cette erreur est malheureusement matériel (problème de communication avec le RFXcom). Souvent c'est du à un soucis d'alimentation ou de câble USB, vous pouvez donc essayer en changent le câble USB et/ou en passant par un hub USB alimenté

>**Je n'arrive pas a faire reconnaitre certain capteur malgrès l'activation du bon protocole**
>
> Verifiez que le firmware est à jour. Puis si c'est toujours pas bon il faut tester avec le rfxmng

>**J'ai l'erreur Timeout waiting status**
>
> Cela arrive en général dans 2 cas :
>- Votre module RFXCOM n'est pas à jour, voir [ici](http://www.rfxcom.com/epages/78165469.sf/nl_NL/?ObjectPath=/Shops/78165469/Categories/Downloads)
>- Vous avez pris le plugin RFXCOM alors que vous avez un RFPLAYER, il faut donc la prendre le plugin RFPLAYER

>**J'ai des soucis de remonté des capteurs et la seule solution est de tout redemarrer**
>
> Il faut à l'aide de windows et du rfxmanager mettre en dur dans le rfxcom l'activation ou non des differents protocoles
