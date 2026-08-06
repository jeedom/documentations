# Plugin Enphase Envoy

Plugin pour remonter les informations photovoltaïques des passerelles Envoy

>IMPORTANT
>
>Attention le plugin n'est pour le moment pas compatible avec la version 7 du firmware Enphase. La mise a jour est prévu mais il faut attendre que l'équipe de développement la reçoive.

# Configuration

## Avant le firmware v7

Afin de configurer le plugin, il est nécessaire de renseigner les informations suivantes :

- Adresse IP de la passerelle envoy
- Mot de passe de l'envoy (si celui-ci n'a pas été modifié, il s'agit des 6 derniers caractères du numéro de série.)

Ensuite, en cliquant sur le bouton "Synchroniser", tous les équipements seront automatiquement créés.

# V7 firmware

Si vous etes en firmware v7 vous pouvez soit récuperer le token vous meme en allant [la](https://entrez.enphaseenergy.com/), vous connecter puis cliquez sur "Create access token" et copier le code jwt dans la configuration du plugin jeedom (Attention nous ne savons pas pour le moment si ce code est valable de maniere illimité ou seulement quelques mois). **OU** vous indiquez dans votre nom d'utilisateur Enphase dans "[v7] Nom d'utilisateur", votre mot de passe dans "[v7] Mot de passe" et enfin le numéro de série de votre passerelle dans "[v7] Numéro de série de l'envoy", avec ces informations jeedom va automatiquement récuperer le token dès que necessaire.

# Informations remontées

Le plugin permet de remonter les informations suivantes (si vous disposez d'un Envoy-s Metered) :

- General (maj toutes les minutes)
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
- Pour chaque micro-onduleur (maj toutes les 5 minutes)
    - Provisionné (Oui/Non)
    - Communication (Oui/Non)
    - Production (Oui/Non)
    - Puissance (en W)
    - Puissance Max (en W)
- Pour chaque batterie (maj toutes les 5 minutes)
    - Provisionné (Oui/Non)
    - Communication (Oui/Non)
    - Production (Oui/Non)
    - Puissance (en W)
    - Puissance Max (en W)
    - % de charge
    - Température maximale (en °C)
