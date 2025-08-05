# Changelog BACnet

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte


# 04/08/2025

- Correction suppresion à l'update des commandes action pour objets Input (readOnly)
- Amelioration UI Affichage du scan des points
- Ajout Bouton pour requeter le tableau de priorité d'écriture si existant
- Relachement priorité apres ecriture si priorityArray existant

# 01/08/20205

- Ajout visualisation Schedules + Modifications horaires si device le supporte (rare)
- Amélioration du mécanisme d'écriture BACnet avec libération automatique des priorités pour éviter les conflits d'écriture

# 30/07/2025

- Ajout Scan Manuel par équipement

# 29/07/2025

- Ajout import CSV EDE

# 28/07/2025

- Ajout création manuelle équipement + ajout points manuels pour devices avec milliers de points non scannable pour le plugin. 

# 25/07/20205

- Utilisation Vendorname si il existe lors de la création d'un équipement
- Refonte UI Scan
- Optimisation Scan des points


# 20/02/2025

- Fix Socket for PHP8

# 19/02/2025

- Fix une fuite de mémoire sur le démon
- Plusieurs corrections de bugs mineurs
- Optimisation du code
- Compatibilité Debian 12
- Debian 11 requis
- Jeedom v4.4.8 requis

# 28/10/2024

- Fix pour usage CPU
- Threading pour lecture des données
- Optimisation du code
- Fix possible Null Values

# 27/03/2024

- Fix commandes OnOff
- Ajout Modale pour Gestion Points Bacnet (renommer les commandes par leurs attributs bacnet Description)

# 21/06/2023

- Ajout Champ Liste si commande Action/Liste (voir documentation)

# 25/05/2023

- Ajout Champ Priorite Ecriture sur commande (voir fin documentation)

# 11/05/2023

- Changements pour Scan Réseau et Points Bacnet
- Retour Etat v4.2
- Bouton Tout Historiser sur onglet Commandes

# 08/06/2022

- Choix Masque de sous réseau dans Configuration du plugin

# 18/05/2022

- Choix des Devices à scanner lors d'un ajout d'un nouvel équipement
- Optimisation durée du scan

# 08/02/2022

- Changement LogicalId et Boutons Tout Sélectionner pour les commandes Info et Ecritures.

# 30/08/2021

- Ajout système de pagination à la création des commandes
