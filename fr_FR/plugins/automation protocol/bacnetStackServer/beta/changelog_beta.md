# Changelog bacnetStackServer

> **⚠ IMPORTANT — À faire après chaque mise à jour**
> Toujours **réinstaller les dépendances** après une mise à jour du plugin.
> Cette étape télécharge le binaire daemon (`bacnetStackd`) à jour. Sans cette étape, l'ancien binaire reste en place et les corrections ou nouvelles fonctionnalités du daemon ne sont pas actives.

# 19/03/2026

- **Timeout BACnet configurable (daemon C + PHP)** :
  - Timeout BACnet par défaut abaissé de 60s à **15s** pour readprop, writeprop et subscribecov
  - Nouveau champ JSON `"timeout"` (en secondes) passable par commande pour ajuster par appel


- **Correction fuite invoke_id sur writeprop timeout** :
  - `tsm_free_invoke_id()` ajouté dans le chemin timeout de `handle_client_writeprop`
  - Évite l'épuisement du pool TSM (256 slots) après de nombreux timeouts consécutifs sur un device injoignable

- **Re-souscription COV intégrée au cycle de polling** :
  - Suppression du blocage `resubscribeAllCOV()` au démarrage du daemon
  - Les souscriptions COV expirées sont rétablies automatiquement lors du premier poll réussi de chaque device
  - Élimine le risque de blocage du démarrage PHP sur des devices lents ou injoignables

- **Relinquish au démarrage désactivé par défaut** :
  - Nouvelle option dans Configuration Plugin : *Relinquish au démarrage du démon* (désactivée par défaut)


- **Correction commandes Relinquish** :
  - Les commandes relinquish lisent désormais `device_ip` et `device_id` depuis l'équipement parent plutôt que depuis leur propre configuration, évitant des données obsolètes en cas de modification de l'équipement


# 16/03/2026

- **Persistance des TrendLogs au redémarrage du démon** :
  - Les données historiques des TrendLogs sont désormais restaurées depuis le disque au redémarrage, sans perte d'historique


# 13/03/2026

- **Priorité d'écriture BACnet configurable côté Client** :
  - Nouveau champ **Priorité d'écriture par défaut** (1-16) sur l'équipement client (onglet Équipement), utilisé lors du scan/génération des commandes
  - La priorité par défaut reste 8 (Manual-Operator) pour les équipements existants
  - Nouveau sélecteur de priorité **par commande** directement dans le tableau des commandes (onglet Commandes), visible pour toutes les commandes action BACnet
  - Les commandes existantes ne sont pas modifiées lors du changement de la valeur par défaut de l'équipement


# 11/03/2026

- **Refonte complète de l'interface de mapping Jeedom** :
  - Système de pagination pour gérer des centaines d'objets BACnet (50/100/200/500 objets par page)
  - Navigation rapide : première page, précédente, suivante, dernière page
  - Navigation clavier avec flèches gauche/droite
  - Affichage du nombre d'objets par page personnalisable
  - Fonction de recherche adaptée à la pagination

- **Augmentation des timeouts pour les scans de devices** :
  - Timeout JavaScript passé de 30s à 180s pour gérer les équipements avec beaucoup d'objets (2000+)
  - Timeout PHP passé de 60s à 180s
  - Limite d'exécution PHP étendue à 300s
  - Message d'information pendant le scan prévenant du temps d'attente possible (jusqu'à 3 minutes)

- **Nouvelle fonctionnalité : Scan sélectif d'objets BACnet** :
  - Bouton "Scan sélectif" sur la page de configuration d'un équipement Client
  - Permet d'ajouter uniquement des objets spécifiques sans scanner tout le device
  - Interface à deux modes :
    - **Mode manuel** : sélection interactive avec dropdown des types d'objets, input d'instance, choix Info/Action
    - **Mode liste** : import rapide via textarea (format type:instance, un par ligne)
  - Gestion intelligente des commandes action : désactivée automatiquement pour les types en lecture seule (analog-input, binary-input, multi-state-input, accumulator, pulse-converter)
  - Affichage de la liste des objets sélectionnés avec badges visuels et suppression possible
  - Idéal pour ajouter quelques points à un équipement existant sans le scanner entierement
  - Création automatique des commandes avec leurs propriétés BACnet


# 06/03/2026

- Priorité d'écriture configurable par objet BACnet Serveur (AO, AV, BO, MSO) :
  - Nouveau champ `writePriority` dans la configuration JSON du daemon (1-16, défaut : 16)
  - Sélecteur de priorité dans la modale d'édition d'objet côté Serveur
  - Priorité prise en compte à l'initialisation du daemon au démarrage


# 05/03/2026

- Visualisation des objets Schedule BACnet côté Client :
  - Bouton calendrier sur les commandes de type `schedule` dans l'équipement
  - Modale affichant la valeur actuelle, la valeur par défaut, la période effective
  - Planning hebdomadaire décodé avec les plages horaires et valeurs (null = retour au défaut)
  - Exceptions décodées : dates fixes, plages de dates, patterns jour/semaine/mois ; support de l'année "any" (BACnet 0xFF)
  - Décodage natif des propriétés complexes `weekly-schedule`, `exception-schedule` et `effective-period`


- Support étendu des types d'objets BACnet côté Client :
  - `accumulator` : compteur impulsions, lecture seule, numérique avec unité
  - `pulse-converter` : conversion impulsions → unités ingénierie, lecture seule, numérique avec unité
  - `integer-value` : valeur entière signée, lecture + écriture (slider)
  - `positive-integer-value` : valeur entière non-signée, lecture + écriture (slider)
  - `characterstring-value` : valeur texte, lecture + écriture (message)
  - `large-analog-value` : déjà géré via la détection 'analog' (double précision)
- Exclusion automatique des objets sans `present-value` du polling et du scan : `device`, `network-port`, `notification-class`
- Correction : `listValue` des commandes action multi-state rempli automatiquement au premier cycle cron (pour équipements créés depuis EDE)
- Utilisation de l'ID numérique BACnet `110` pour la lecture de `state-text` via readProperty

# 02/03/2026

- Optimisation Trendlog : résolution immédiate de l'objet source et création de la commande associée lors du scan et historisation des valeurs sur celle ci
- Prise en charge fichiers EDE sur un équipement Client
- Lors de l'injection d'un EDE, possibilité de créér des équipements par 'thématique'


# 26/02/2026

- Ajout bouton Tout historiser sur equipements de type Clients
- Ajout champ de recherche sur le tableau après le resultat des objets

# 18/02/2026

- Nouvelle écran Supervision (monitoring des équipements Clients, historique des derniers événements)

# 17/02/2026

- Ajout HeartBeat daemon
- Déclenchement reSubscribeAllCOV sur reconnexion du daemon
- Timeout/reconnexion renforcée sur daemon


# 16/02/2026

- Ajout documentation contextuelle
- Fix écriture clients BACnet

# 13/02/2026

- Nouvelle UI
- Ajout Client Bacnet : decouverte via whois, objectList, création d'équipements pour lire des devices bacnet
- Ajout Souscription COV sur les objets Bacnet
- Ajout Nouvelle Configuration/Charger configuration depuis la page de mapping
- Ajout en masse via équipement sur la page de mapping

# 26/11/2025

- Modifications selection commandes à lier
- Ajout Synchronisation d'un schedule à un Agenda du plugin Calendar Jeedom au cron. 

# 24/11/2025

- Nouveau binaire v1.0.98
- Ajout Lock et file d'attente sur json avant envoie au serveur, pour eviter souci lecture/ecriture

# 20/11/2025
- Plugin inital
