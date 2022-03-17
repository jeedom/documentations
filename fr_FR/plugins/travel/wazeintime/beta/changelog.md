# Changelog Waze in Time

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

# 17/03/2022

- Compatibilité jeedom v4.2

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
