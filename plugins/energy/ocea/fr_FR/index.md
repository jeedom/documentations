# Plugin Ocea

## Description

Ce plugin permet de récupérer depuis la plateforme Ocea, par API, les données de consommation de chauffage, eau et eau-chaude.

## Fonctionnement
1. **Configuration du plugin :**
   - Cron Relevé : exemple 18 (l'heure à laquelle le plugin va récupérer les données de la plateforme OCEA : chauffage, eau-chaud et eau)
   - Code Site : exemple xx06  (NB : le plugin ne peut gérér qu'un seul site à la fois)
   - Mot de passe API : token unique par e-mail

2. **Synchronisation**
Le bouton Synchronisation permet de récupérer les informations du site en question, ainsi que ces unités de gestion et appareils.
Un équipement par entité sera crée avec des commandes infos dont les valeurs sont récupérées par API.

3. **Tout supprimer**
Le bouton Tout Supprimer permet de supprimer tous les équipements du plugin Ocea