# Changelog Waze in Time

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

# 06/10/2026

- Mise à jour majeure pour contourner le blocage de Waze (erreur 403)
- Nouvelles dépendances requises, elles seront installées lors de la mise à jour
- Le plugin dispose d'un démon qui doit être démarré pour pouvoir rafrachir les trajets
- Ajout de nouveaux paramètres de trajet: *Type de véhicule*, *Eviter les routes à péage*, *Eviter les routes nécessitant une vignettes*, *Eviter ferries*
- Ajout de nouvelles commandes infos pour les 3 trajets aller et retour: *Distance*
- Suppression de la compatibilité "Amérique du Nord"
- Debian 12 & Python 3.11 requis
- Jeedom v4.5 requis

# 20/12/2025

- Correction pour les trajets "Amérique du Nord"

# 29/11/2025

- Correction de l'URL utilisée suite à un changement de Waze
- Version Jeedom 4.4 ou plus requis
- Version Debian 11 ou plus requis

# 29/06/2025

- Optimisation des requêtes vers Waze afin de réduire la latence

# 17/10/2022

- Mise à jour liste des commandes pour Jeedom v4.3

# 17/03/2022

- Compatibilité Jeedom v4.2

# 08/12/2021

- Ajout d'une option pour configurer les abonnements à activer lors du calcul des itinéraires (voir documentation)
- Ajout d'une option pour utiliser n'importe quelle commande de n'importe quel plugin comme position de départ ou d'arrivée
- Correction de l'extraction des infos de trajet dû à un changement d'api de Waze

# 18/10/2021

- Amélioration des pages de configuration pour la v4:
  - Ajout de la zone de recherche
  - Ajout de la présentation en mode tableau des équipements (Jeedom v4.2)
  - Nouvelle présentation de la page de configuration
  - Nouvelle présentation de la liste des objets dans la page équipement
  - Nouvelle présentation de la liste des commandes
- Ajout du support de la géolocalisation configurée dans le core de Jeedom
- Ajout d'un cron d'auto-actualisation personnalisé dans la config de l'équipement; attention vous devez allez reconfigurer vos équipements car le cron30 est désactivé; Sans cela le refresh des trajets ne sera plus effectué automatiquement.
- Correction de l'extraction des infos dû à un changement d'api de Waze

# 23/10/2019

- Amélioration du widget pour jeedom v4

# 05/09/2019

- Correction de bug sur le widget en jeedom v4
- Correction de bug pour php 7.3
