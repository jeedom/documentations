# Bacnet

## Description

Le plugin Bacnet permet de récupérer les informations de vos équipements Bacnet/IP et d'interagir avec eux depuis votre Jeedom. Il supporte de nombreuses fonctionnalités avancées telles que l'importation de fichiers EDE, l'ajout manuel de points, la visualisation des calendriers (schedules) et bien plus encore.

## Configuration du plugin

Après téléchargement du plugin, il faut tout d'abord l'activer, comme tout plugin Jeedom :

![config](./images/BacnetConfig.png)

Ensuite, il faut lancer l'installation des dépendances (même si elles apparaissent OK) :

![dependances](./images/BacnetDep.png)

Enfin, il faut démarrer le démon :

![demon](./images/BacnetDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](./images/BacnetSocket.png)

Dans ce même onglet, il vous faut choisir la valeur du Cron pour l'actualisation de vos équipements.

## Comment déclarer un équipement Bacnet dans Jeedom

### Détection automatique

>**IMPORTANT**
>
>Vos équipements BACNET doivent se trouver sur le même réseau que votre Jeedom pour être détectés automatiquement.

Rendez-vous dans le menu « Plugins → Protocole domotique → Bacnet » :



Vous pouvez lancer un scan de type broadcast, qui enverra un whois à tout votre réseau pour trouver les équipements Bacnet. 
Une fenetre s'affichera avec les résultats. 
Vous pourrez scanner ensuite les points du/des device(s) choisis.

Sur une grande installation;un whois global peut perturber les équipements bacnet, il est conseillé alors d'ajouter un équipement manuellement (vous pourrez lui choisir son adresse IP et son device ID) : un bouton Scan de point est présent sur chaque équipement pour faire un scan de cet équipement en particulier

À la suite du scan, un tableau avec toutes les entrées/sorties de vos équipements s'affichera.

Suivant les constructeurs d'équipements, certaines valeurs ne sont pas disponibles.

Il vous suffit de sélectionner les commandes à créer en cochant une des options suivant votre choix (commande de type info ou de type action), vous pouvez valider à la suite, et vous serez amené sur la page de l'équipement avec les commandes créées.

-
Cliquez ensuite sur votre équipement créé, puis cochez « Activer » et « Visible » pour le voir apparaître sur votre dashboard.

Pour ajouter des commandes ultérieurement à un équipement existant, il faudra refaire un scan des points de cet équipements. 
Les commandes deja créées auront leur checkbox deja cochées sur le tableau des points.

### Ajout manuel de point

Si votre équipement n'est pas lu, du à un nombre trop grand d'objets, une erreur vous indiquera qu'il faut ajouter les points manuellement (ou injecter un EDE)

Depuis la page de l'équipement, cliquez sur le bouton "Ajouter manuellement des points" :

1. Renseignez l'ID d'instance de chaque point
2. Sélectionnez le type d'objet (Analog Input, Binary Output, etc.)
3. Choisissez le mode (lecture seule ou lecture/écriture)
4. Donnez un nom à la commande
5. Ajoutez éventuellement une unité et une description
6. Cliquez sur "+" pour ajouter d'autres points si nécessaire

Une fois tous vos points configurés, cliquez sur "Créer les commandes" pour les ajouter à votre équipement.

### Importation via fichier EDE

Le plugin supporte l'importation de points Bacnet à partir d'un fichier EDE (Engineering Data Exchange). Cette méthode est particulièrement utile pour les systèmes complexes avec de nombreux points.

Depuis la page de l'équipement, cliquez sur le bouton "Importer fichier EDE" :

1. Sélectionnez votre fichier EDE au format CSV
2. Le système analysera le fichier et vous montrera un aperçu des données
3. Vous pourrez sélectionner les points que vous souhaitez importer
4. Configurez les options d'importation (historisation, visibilité)
5. Cliquez sur "Importer" pour créer les commandes

Le plugin détectera automatiquement le séparateur utilisé dans le fichier (virgule, point-virgule ou tabulation) et analysera la structure pour extraire correctement les informations des points Bacnet.

## Les commandes

Rendez-vous dans l'onglet « Commandes » de la page de configuration du nouvel équipement Bacnet.

Ici vous pouvez masquer et rendre visibles les différentes commandes de type « action » et « info » disponibles (les commandes de type « info » peuvent également être historisées) :

![cmdVisible](./images/BacnetVisible.png)

Tous les équipements créés auront par défaut 2 commandes : une commande info « Connexion Bacnet » et une commande action « Refresh », qui serviront à voir l'état de la connexion Bacnet sur votre dashboard, et à rafraîchir les valeurs de vos commandes.

![cmdBase](./images/BacnetCmdBase.png)

## Visualisation et gestion des calendriers (schedules)

Le plugin permet désormais de visualiser et gérer les calendriers (schedules) BACnet des équipements qui supportent cette fonctionnalité.

Depuis la page de l'équipement, cliquez sur le bouton "Calendriers/Planifications" :

Une fenêtre s'ouvre et affiche tous les calendriers disponibles sur l'équipement. Pour chaque calendrier, vous pouvez :

1. Visualiser la programmation hebdomadaire
2. Consulter les exceptions (jours fériés, etc.)
3. Modifier les horaires et valeurs des événements
4. Ajouter de nouveaux événements de planification
5. Supprimer des événements existants

Tous les changements peuvent être enregistrés sur l'équipement (si celui-ci supporte l'écriture des schedules, ce qui est rare sur certains équipements).

>**NOTE**
>
>La gestion des calendriers est particulièrement utile pour les systèmes CVC (chauffage, ventilation, climatisation) qui fonctionnent selon des plages horaires définies.

>**IMPORTANT**
>
>Concernant l'écriture: par sécurité, le protocole Bacnet prévoit par défaut un système d'écriture à niveaux de priorités sur les entrées/sorties de ses équipements.
Il y a 16 niveaux de priorité(le niveau le plus bas étant prioritaire sur tous les autres). Il se peut que votre équipement soit programmé de telle manière que la fonction d'écriture développée dans ce plugin ne soit pas prioritaire sur la programmation logique de l'équipement/système par défaut.
Pour les entrées/sorties de type Output, le plugin est parametré avec une écriture en priorité 8 (Manual Operator).
Plus d'infos sur le sujet :

https://store.chipkin.com/articles/bacnet-why-doesnt-the-present-value-change

Pour une écriture sur un équipement Bacnet, on interagit sur la PresentValue de l'entrée/sortie correspondante.
Il faut savoir que les PresentValues des entrées/sorties de type: Analogique Output, Binary Output et Multistate Output sont toujours commandables.
Celles des entrées/sorties de type AnalogValue, BinaryValue ou MultistateValue sont commandables si le fabricant a implanté cette fonctionnalité. C'est au seul choix du fabricant. Veuillez vous renseigner auprès de la documentation de votre équipement pour en savoir plus à ce sujet.

À la création des commandes choisies de type écriture, une commande action associée sera également créée, par défaut non visible sur le dashboard.
En cliquant dessus, elle permet de remettre par défaut le tableau de priorités d'écriture d'une entrée/sortie.
Elle portera un nom avec << resetPrioritesEcriture >>
Pour rendre visible cette commande sur votre dashboard, il faut vous rendre dans les commandes de votre équipement et cocher la case "Afficher".

## Liste sur Commande Action (pour MultiStateValue)

Quand vous avez créé une commande d'Écriture comme habituellement depuis les résultats du scan, elle est de base en Slider ou On Off, suivant le type de point Bacnet remonté (analog, binary) : maintenant, si vous choisissez une multiState, la commande sera de type Slider par défaut, mais vous pouvez la mettre en Liste dans la liste des commandes de l'équipement; un nouveau champ Valeur Liste apparaîtra;
Vous pouvez y mettre les valeurs que vous désirez, séparées par un -, sans espace : par exemple 1-4-5-8
À la sauvegarde de l'équipement, cela mettra ces valeurs dans la liste de la commande sur le Dashboard
Au changement de cette valeur, cela enverra la valeur à écrire sur le point paramétré.

## Priorité des écritures

A Manipuler avec prudence

Un champ Priorité Ecriture est disponible sur chaque commande créée

Comme d'après la documentation :

In BACnet, object to which we can write often provide what is called the priorityArray. This array contains 16 levels to which we can write (1 being the highest priority).

Typical usage of priority is :

1 Manual-Life Safety 2 Automatic-Life Safety 3 Available 4 Available 5 Critical Equipment Control 6 Minimum On/Off 7 Available 8 Manual Operator (Override) 9 Available 10 Available (Typical Control from a Supervisor) 11 Available 12 Available 13 Available 14 Available 15 Available (Schedule) 16 Available

Vous pouvez choisir une priorité d'écriture sur les commandes souhaitées, en choisissant un nombre entre 1 et 16

Si pas de valeur entrée sur une commande d'écriture, par défaut la valeur sera établie à 8.

## Informations supplémentaires des protocoles supportés

Le plugin BACnet supporte les types d'objets suivants :
- Analog Input, Output, Value
- Binary Input, Output, Value
- Multi-State Input, Output, Value
- Schedule
- Calendar
- Device

Les protocoles de communication supportés sont :
- BACnet/IP (UDP/IP)


Le plugin est compatible avec les équipements respectant la norme ASHRAE 135 qui définit le protocole BACnet.

## Dépannage et diagnostic

Si vous rencontrez des problèmes avec votre équipement BACnet, voici quelques étapes de dépannage :

1. Vérifiez que le démon est bien en cours d'exécution
2. Assurez-vous que votre équipement est bien sur le même réseau que Jeedom
3. Vérifiez qu'aucun pare-feu ne bloque les ports UDP 47808 (port BACnet par défaut)
4. Consultez les logs du plugin pour identifier d'éventuelles erreurs

Pour les équipements qui ne sont pas détectés automatiquement, utilisez l'ajout manuel ou l'importation via fichier EDE.
