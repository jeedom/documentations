# Changelog bacnetStackServer


# 05/03/2026

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
