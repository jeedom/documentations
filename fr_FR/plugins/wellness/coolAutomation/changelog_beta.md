# Changelog CoolAutomation


>**IMPORTANT**
>
>S'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.


# 24/11/2025
- Fix changement de consignes autorisée

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

# 19/06/2024

- Fix Gestion des temperatures min/max administrateur
- Ajout Gestion Min/Max par Master
- Suppression de commandes obsoletes a la mise a jour du plugin


# 15/05/2024

- Ajout Template widget pour tuiles
- Suppression des console.log inutiles
- Fix eqlogic->save dans la fonction queryParameters
- Ajout Renommages des Uids créées manuellement
- Nouvelle Modale pour Historisation de masses de certaines commandes


# 06/05/2024

- Fix changement IP sur equipement principal pour transmission aux enfants
- Ajout Création Manuelle pour Intégration en amont

# 04/05/2024

- Fix Affichage des Lines
_ Ajout checkbox selectionner tout

# 16/04/2024

- Nouvelle UI :  Master -> Lignes
- Suppression des lignes quand parent supprimé


# 01/04/2024

- Connexion TelNet
- Api rest avec coolLinkHub

# 24/01/2024

- First Commit

