# Plugin LNS

## Description

Ce plugin permet d'installer et de configurer un Chirpstack V3 sur la box Jeedom.

## Fonctionnement
1- Lancer les dépendances - afin d'installer les packages nécessaires.

2- Le port par défaut est 8081. Il est possible de le changer via l'interface du plugin LNS.

3- Importer la configuration de MQTT2 - tant que les quatres champs adresse IP du broker, port du broker, identifiant de connexion, mot de passe MQTT ne sont pas remplis alors les dépendances de MQTT2 sont toujours en cours d'installation.

4- Installer Gateway Bridge (optionnel) - à cocher puis sauvegarder si l'installation du Gateway Bridge est nécessaire.

5- Modifier la configuration de CS - une fois les quatres champs remplis, on pourra modifier les fichiers de configurations.

6- Vérifier l'état des services.

7- Ouvrir Chirpstack.

8- Création automatique dans CS - renseigner les identifiants CS afin de créer dans Chirpstack le Network Server, Service Profile, Gateway, Device Profile (class A et class C).
