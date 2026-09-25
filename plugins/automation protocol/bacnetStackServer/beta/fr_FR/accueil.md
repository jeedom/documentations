# Page d'accueil du plugin

La page d'accueil du plugin BACnet Stack Server est le point d'entrée principal. Elle présente les trois grandes sections du plugin sous forme de tuiles.

## Vue d'ensemble

### Tuile Serveur BACnet

La tuile bleue **Serveur BACnet** donne accès à toutes les fonctionnalités liées à l'exposition de vos commandes Jeedom sur le réseau BACnet.

En cliquant dessus, vous accédez à trois cartes d'action :

| Carte | Description |
|-------|-------------|
| **Monitoring serveur** | Surveillance en temps réel de l'état du serveur et de tous les objets BACnet configurés |
| **Mapping Jeedom → BACnet** | Interface de configuration des liaisons entre commandes Jeedom et objets BACnet |
| **Sauvegarder configuration** | Sauvegarde manuelle de la configuration du serveur BACnet |

### Tuile Client BACnet

La tuile verte **Client BACnet** donne accès aux fonctionnalités de découverte et de lecture des devices BACnet présents sur votre réseau.

En cliquant dessus, vous accédez à :

| Carte | Description |
|-------|-------------|
| **Découverte réseau** | Interface complète du client : Who-Is, lecture/écriture, COV, liste d'objets |
| **Ajouter un client** | Création manuelle d'un équipement client BACnet |
| **Équipements clients** | Liste des équipements clients déjà créés, avec barre de recherche |

### Tuile Configuration

La tuile violette **Configuration** donne accès aux paramètres globaux du plugin.

| Carte | Description |
|-------|-------------|
| **Configuration du plugin** | Paramètres réseau, démon, Device ID, ports, etc. |
| **Changelog** | Historique des modifications et mises à jour du plugin |

---

## Serveur vs Client : quelle différence ?

| | Serveur BACnet | Client BACnet |
|--|----------------|---------------|
| **Direction** | Jeedom → Réseau BACnet | Réseau BACnet → Jeedom |
| **Rôle** | Expose les commandes Jeedom comme objets BACnet | Lit les objets BACnet distants et crée des commandes Jeedom |
| **Usage** | Une GTB lit/écrit les valeurs Jeedom | Jeedom interroge des automates BACnet |
| **Configuration** | Mapping Jeedom → BACnet | Découverte + création d'équipements |
| **Mise à jour** | Cron ou sur événement (BACnet → Jeedom) | Cron ou COV (device → Jeedom) |

### Cas d'usage Serveur

- Exposer la température d'un capteur Zigbee à une GTB
- Permettre à un automate de piloter un thermostat Jeedom
- Rendre visible l'état d'un équipement Jeedom sur le réseau BACnet

### Cas d'usage Client

- Lire les valeurs d'un automate BACnet (CTA, chaudière, etc.)
- Superviser un réseau BACnet existant depuis Jeedom
- Commander un équipement BACnet depuis Jeedom

---

## Navigation

### Retour à l'accueil

Chaque section dispose d'un bouton **Retour** (flèche gauche) pour revenir à la page d'accueil.

### Boutons d'aide

Des boutons d'aide (icône `?` ou bouton "Aide") sont présents sur toutes les sections et modales. Ils ouvrent un panneau latéral avec la documentation contextuelle correspondante.

---

## Prérequis

Avant d'utiliser le plugin, assurez-vous que :

1. Le plugin est installé et activé depuis le Market Jeedom
2. Les dépendances sont installées (automatique)
3. Le démon est démarré (section Configuration)
4. L'interface réseau est correctement configurée
5. Le port BACnet (47808) est disponible et ouvert dans le pare-feu
