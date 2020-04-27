---
layout: default
lang: fr_FR
---

Description
===

Plugin pour remonter les informations photovoltaïques des passerelles Envoy

Configuration
===

Afin de configurer le plugin, il est nécessaire de renseigner les informations suivantes :

- Adresse IP de la passerelle envoy
- Mot de passe de l'envoy (si celui-ci n'a pas été modifié, il s'agit des 6 derniers caractères du numéro de série.)

Ensuite, en cliquant sur le bouton "Synchroniser", tous les équipements seront automatiquement créés.

Informations remontées
===

Le plugin permet de remonter les informations suivantes (si vous disposez d'un Envoy-s Metered) :

__*- General (maj toutes les minutes)*__

    - Nombre de micro-onduleurs
    - Nombre de batteries
    - Etat des batteries (charging/discharging/idle)
    - % de charge des batteries
    - Production des batteries (en W)
    - Production instantanée (en W)
    - Production de la journée (en Wh)
    - Production des 7 derniers jours (en Wh)
    - Production depuis la mise en service (en Wh)
    - Puissance totale instantanée (en W)
    - Consommation de la journée (en Wh)
    - Consommation des 7 derniers jours (en Wh)
    - Consommation depuis la mise en service (en Wh)
    - Puissance nette instantanée (en W)
    - Consommation nette de la journée (en Wh)
    - Consommation nette des 7 derniers jours (en Wh)
    - Consommation nette depuis la mise en service (en Wh)

  __*- Pour chaque micro-onduleur (maj toutes les 5 minutes)*__

    - Provisionné (Oui/Non)
    - Communication (Oui/Non)
    - Production (Oui/Non)
    - Puissance (en W)
    - Puissance Max (en W)

  __*- Pour chaque batterie (maj toutes les 5 minutes)*__

    - Provisionné (Oui/Non)
    - Communication (Oui/Non)
    - Production (Oui/Non)
    - Puissance (en W)
    - Puissance Max (en W)
    - % de charge
    - Température maximale (en °C)
