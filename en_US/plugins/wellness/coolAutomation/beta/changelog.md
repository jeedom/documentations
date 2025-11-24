# Changelog CoolAutomation


>**IMPORTANT**
>
>If there is no information on the update, it means that it only concerns updating documentation, translation or text.


# 
- 

# 05/11/2025
- **Amélioration de la gestion des timeouts et des erreurs HTTP** :
  - Augmentation du timeout par défaut de 2 à 10 secondes (configurable)
  - Ajout d'un système de retry automatique en cas de timeout (2 tentatives par défaut, configurable)
  - Messages d'erreur plus explicites avec indication de l'équipement et de la commande en échec
  - Logs enrichis avec temps de réponse et adresse IP de l'équipement
  - Nouveaux paramètres de configuration dans le plugin :
    - **Timeout HTTP** : durée d'attente maximale pour une requête (3-30 secondes)
    - **Nombre de tentatives** : nombre de tentatives en cas d'échec (0-5 tentatives)

# 27/10/2025

- Fix changements de noms de lignes après mise à jour du plugin
- Ajout délai aux mise à jours des commandes infos

# 14/10/2025

- Fix erreur PHP lors de la création des unités

# 18/08/2025

- Ajout plages de consignes min max pour Consigne Mode Chaud et Froid

# 14/08/2025

- Optimisation appels API
- Ajout Consigne Min & Max pour Mode Chaude et Froid

# 08/08/2025
- Ajout système de queues pour l'execution des commandes
- Redémarrage démon tous les 2 jours pour libération éventuelle de mémoire

# 17/07/2025
- Fix Telnetlib3 pour debian 12


# 02/07/2025
- Fix double appel requetes
- Fix code erreur

# 24/07/2024
- Ajout Selection Interface Réseau pour le scan

# 06/19/2024

- Fix Administrator min/max temperature management
- Added Min/Max management by Master
- Deleting obsolete commands when updating the plugin


# 05/15/2024

- Addition Template widget for tiles
- Removing consoles.useless logs
- Fix eqlogic->save in queryParameters function
- Added renaming of manually created Uids
- New Modal for mass logging of certain commands


# 06/05/2024

- Fix IP change on main equipment for transmission to children
- Added Manual Creation for Backstream Integration

# 05/04/2024

- Fix Lines Display
_ Added checkbox select all

# 04/16/2024

- New UI :  Master -> Lines
- Deleting rows when parent deleted


# 01/04/2024

- TelNet Connection
- Api rest with coolLinkHub

# 01/24/2024

- First Commit

