# Configuration du plugin

La page de configuration du plugin BACnet Stack Server regroupe tous les paramètres globaux du serveur BACnet, du démon et des options réseau.

## Accès

Pour accéder à la configuration :
1. Depuis la page principale du plugin, cliquez sur la tuile **Configuration**
2. Puis sur **Configuration du plugin**
3. Ou directement via le menu Jeedom : **Plugins > Communication > BACnet Stack Server > Configuration**

---

## Version du plugin

Le champ **Build Release** affiche la version actuelle du plugin installée. Cette information est utile pour le support technique.

---

## Informations du Device BACnet

Cette section configure les propriétés du device BACnet tel qu'il apparaît sur le réseau.

### Paramètres du device

| Paramètre | Description | Par défaut |
|-----------|-------------|------------|
| **Description du Device** | Texte descriptif visible par les clients BACnet | jeeBacnetStackServer |
| **Localisation du Device** | Localisation géographique (texte libre) | - |
| **APDU Timeout (ms)** | Délai d'attente maximum pour les réponses APDU | 3000 |
| **Nombre de tentatives APDU** | Nombre de renvois en cas d'échec | 3 |
| **Taille Max APDU** | Taille maximale des paquets APDU (lecture seule) | Déterminé automatiquement |

### Boutons

| Bouton | Description |
|--------|-------------|
| **Rafraîchir les infos du serveur** | Relit les valeurs actuelles depuis le serveur BACnet en cours d'exécution |
| **Enregistrer les infos du Device** | Envoie les modifications au serveur BACnet |

> **Note** : Ces paramètres sont envoyés directement au serveur BACnet en cours d'exécution. Ils prennent effet immédiatement.

### APDU Timeout

Le timeout APDU détermine combien de temps le serveur attend une réponse avant de considérer la requête comme échouée. Ajustez cette valeur si :
- Votre réseau est lent → augmentez le timeout
- Vos devices sont sur un réseau local rapide → le défaut (3000ms) convient
- Vous avez des devices distants (routeurs BACnet) → essayez 5000-10000ms

### Nombre de tentatives APDU

Nombre de fois que le serveur retente l'envoi d'un message en cas d'échec. Valeurs recommandées :
- Réseau fiable : 3 (défaut)
- Réseau instable : 5
- En cas de surcharge : réduisez à 1-2 et augmentez le timeout

---

## Configuration Plugin

### Fréquence de mise à jour des équipements client

Détermine à quelle fréquence Jeedom interroge les devices BACnet distants pour mettre à jour les commandes des équipements clients.

| Fréquence | Usage recommandé |
|-----------|-----------------|
| **Toutes les minutes** | Valeurs critiques nécessitant une réactivité maximale |
| **Toutes les 5 minutes** | Bon compromis pour la plupart des usages |
| **Toutes les 10 minutes** | Valeurs évoluant lentement (températures, compteurs) |
| **Toutes les heures** | Valeurs stables ou pour réduire la charge réseau |

> **Info** : Cette fréquence s'applique uniquement aux équipements clients dont le mode de mise à jour est "Cron" et dont la case "Inclure dans le cron" est cochée.

### Interface réseau

Sélectionnez l'interface réseau sur laquelle le serveur BACnet écoute. Le plugin liste automatiquement les interfaces disponibles sur votre système (hors loopback).

Interfaces courantes :
- `eth0` : Interface Ethernet filaire
- `ens18`, `enp0s3` : Interfaces Ethernet (nommage moderne)
- `wlan0` : Interface WiFi (déconseillée pour BACnet)

> **Important** : Le serveur BACnet n'écoute que sur une seule interface. Si vos devices BACnet sont sur un réseau spécifique, sélectionnez l'interface correspondante.

### Socket Port

Port utilisé pour la communication interne entre le démon et Jeedom.

| Paramètre | Par défaut |
|-----------|------------|
| **Socket Port** | 55031 |

> Ne modifiez ce port que s'il est déjà utilisé par un autre service.

### Device ID

Identifiant unique du serveur BACnet sur le réseau. Chaque device BACnet doit avoir un ID unique.

- Plage valide : 0 à 4194302
- Choisissez un ID qui n'entre pas en conflit avec les autres devices de votre réseau
- Convention courante : les automates ont des IDs < 1000, les serveurs logiciels ont des IDs > 1000

### Device Name

Nom du serveur BACnet tel qu'il apparaît lors d'une découverte (Who-Is). Utilisez un nom explicite comme `Jeedom_BACnet_Server`.

### Port BACnet

Port réseau utilisé pour le protocole BACnet/IP.

| Paramètre | Par défaut | Standard |
|-----------|------------|----------|
| **Port BACnet** | 47808 | 47808 (0xBAC0) |

> **Attention** : Le port standard BACnet est 47808. Ne le modifiez que si un autre service utilise déjà ce port ou si votre installation nécessite un port non-standard.

### Chemin sauvegarde serveur

Chemin relatif au plugin pour le fichier de sauvegarde de la configuration serveur.

| Paramètre | Par défaut |
|-----------|------------|
| **Chemin sauvegarde** | data/saveServer.json |

Ce fichier est utilisé par la commande `SAVE_CONFIG` pour enregistrer l'état du serveur.

### Fichier JSON à utiliser

Sélectionnez le fichier de configuration JSON qui sera chargé au démarrage du démon. Le menu déroulant liste tous les fichiers `.json` présents dans le dossier `/plugins/bacnetStackServer/data/`.

Ce fichier contient la définition complète de vos objets BACnet (types, instances, noms, valeurs, liaisons Jeedom, etc.).

---

## Démon

La section Démon (gérée par le core Jeedom) affiche :
- L'état du démon (OK / NOK)
- Le bouton de redémarrage
- La gestion automatique

### Vérifications automatiques

Le plugin vérifie au démarrage :
1. Que le binaire BACnet est présent et exécutable
2. Que le port BACnet n'est pas utilisé par un autre processus
3. Que le fichier de configuration JSON existe et est valide

---

## Bonnes pratiques

### Réseau

- Utilisez toujours une interface Ethernet filaire (pas le WiFi)
- Assurez-vous que le port 47808/UDP est ouvert dans votre pare-feu
- Si vous avez des routeurs BACnet, augmentez le timeout APDU

### Identifiants

- Choisissez un Device ID unique sur votre réseau
- Documentez les IDs utilisés pour éviter les conflits
- Utilisez un nom de device explicite

### Sauvegarde

- Le fichier de configuration est sauvegardé manuellement (bouton dédié)
- Pensez à faire des sauvegardes avant les modifications importantes
- Les 10 derniers backups sont conservés automatiquement dans `data/backups/`

---

## Dépannage

### Le démon ne démarre pas

1. Vérifiez les logs du plugin dans Jeedom
2. Assurez-vous que le port BACnet (47808) n'est pas déjà utilisé : `sudo netstat -tulpn | grep 47808`
3. Vérifiez que le binaire est exécutable : `ls -la /chemin/vers/bacnetStackd`
4. Redémarrez les dépendances si nécessaire

### Le serveur n'est pas visible sur le réseau

1. Vérifiez l'interface réseau sélectionnée
2. Testez avec un client BACnet externe (ex : YABE, BACnet Explorer)
3. Vérifiez les règles de pare-feu
4. Assurez-vous que le device est sur le bon sous-réseau

### Erreur "Port already in use"

Un autre processus utilise déjà le port 47808 :
1. Identifiez le processus : `sudo lsof -i :47808`
2. Arrêtez le processus conflictuel
3. Ou changez le port BACnet dans la configuration
