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

# Installation du plugin LNS - Jeedom
1. Plugins > Gestion des plugins > Market > LNS (installer version stable)
2. Plugins > Gestion des plugins > LNS
    - Installer les dépendances
![alt text](image-5.png)
ii. Suivre les 6 étapes suivantes :
1. Importer la configuration de MQTT2
2. Cocher Installer Gateway Bridge (dans le cas d’une Jeedom
Luna Lora)
3. Sauvegarder
4. Modifier la configuration de CS
![alt text](image-6.png)
5. Création automatique dans Chirsptack (Gateway, Device
Profile, Application)
6. Ouvrir Chirpstack (vérification)
![alt text](image-7.png)

# Panel

## Qu’est-ce que le panel LNS ?

- Le **panel LNS** (LoRaWAN Network Server) est une interface disponible dans Jeedom qui **centralise les informations des getways venant de votre réseau LoRaWAN**.
- Il affiche :
  - La liste **complète des gateways connectées** au serveur LNS leurs statuts en temps réel.

- Pour l'afficher, il faut se rendre dans la configuration du plugin LNS, elle se trouve en bas a droite.
![alt text](image-3.png)

---
## Visualisation dans Jeedom

- Accède à ces panels depuis l’interface Jeedom :
![alt text](image-4.png)
![alt text](image-8.png)
---

