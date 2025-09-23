# Plugin LNS (LoRaWAN Network Server)

## Description

Le plugin **LNS** permet d’installer, configurer et superviser un serveur **ChirpStack** directement sur votre box Jeedom.  
Il est compatible avec **ChirpStack V3 et V4** et fournit une interface graphique complète pour :  
- Installer les services nécessaires (Application Server, Network Server, Gateway Bridge).  
- Configurer automatiquement les fichiers ChirpStack.  
- Gérer le broker MQTT via le plugin **MQTT2**.  
- Créer automatiquement les éléments côté ChirpStack (Gateway, Device Profile, Application).  
- Superviser en temps réel l’état des services, des gateways et des équipements.


## Fonctionnement
1. **Installer les dépendances**  
   - Lance l’installation des paquets nécessaires (PostgreSQL, Redis, Mosquitto, etc.).  

2. **Port par défaut**  
   - ChirpStack est accessible sur le port **8081** en V3, et **8080** en V4.  
   - Le port peut être modifié dans l’interface du plugin.  

3. **Configuration de MQTT2**  
   - Quatre champs doivent être remplis :  
     - Adresse IP du broker  
     - Port du broker  
     - Identifiant de connexion  
     - Mot de passe MQTT  
   - Tant que ces champs ne sont pas renseignés, le plugin considère que la configuration est **incomplète**.  

4. **Installation du Gateway Bridge (optionnel)**  
   - À cocher puis sauvegarder si vous souhaitez installer le **Gateway Bridge**.  
   - Recommandé pour les box **Jeedom Luna LoRa**.  

5. **Modification de la configuration ChirpStack**  
   - Une fois les champs MQTT remplis, le plugin permet de modifier les fichiers de configuration ChirpStack.  

6. **Vérification des services**  
   - L’interface du plugin affiche l’état en temps réel des services installés (démarrés, arrêtés, en erreur).  

7. **Ouverture de ChirpStack**  
   - Un bouton permet d’accéder directement à l’interface web ChirpStack.  

8. **Création automatique dans ChirpStack**  
   - En renseignant vos identifiants ChirpStack, le plugin peut créer automatiquement :  
     - **V3** : Network Server, Service Profile, Gateway, Device Profiles (Classe A et Classe C).  
     - **V4** : Gateway, Device Profile, Application (via l’API unifiée).  


## Installation du plugin LNS - Jeedom
1. **Installation depuis le Market**  
   - Allez dans : `Plugins > Gestion des plugins > Market`  
   - Recherchez **LNS** et installez la **version stable**.  

2. **Configuration du plugin**  
   - Allez dans : `Plugins > Gestion des plugins > LNS`  
   - Lancez l’installation des dépendances.  
  ![alt text](../images/image-5.png)
3. **Suivre les étapes** :  
   ![alt text](../images/LNSV3.png) 
   1. Importer la configuration de MQTT2.  
   2. (Optionnel) Cocher *Installer Gateway Bridge* (recommandé pour Jeedom Luna LoRa).  
   3. Sauvegarder.  
   4. Modifier la configuration ChirpStack. 
   5. Lancer la création automatique dans ChirpStack (Gateway, Device Profile Application).  
   6. Vérifier le résultat en ouvrant l’interface web ChirpStack.  

**Attention** : Si l’installation de ChirpStack semble anormalement longue, cela peut être lié à une mauvaise installation des dépendances du plugin MQTT2. Dans ce cas, il est nécessaire de relancer l’installation de ces dépendances avant de reprendre l’installation de ChirpStack.

## Panel LNS

### Qu’est-ce que le panel LNS ?

Le **Panel LNS** est une interface disponible dans Jeedom qui centralise les informations de votre réseau LoRaWAN.  

- Il affiche :  
  - La liste **complète des gateways connectées** au serveur.  
  - Leurs **statuts en temps réel**.  
  - La liste des **devices enregistrés** et leur état de communication.  

Pour afficher le panel, rendez-vous dans la configuration du plugin LNS :  
- Le bouton du panel se trouve en bas à droite. 

![alt text](../images/image-3.png)

---
## Visualisation dans Jeedom

- Les panels permettent de suivre visuellement :  
  - L’état des gateways.  
  - Le statut des devices.  
  - Les informations principales (Application, Device Name, DevEUI, Profil, Dernière communication).  
<p align="center">
  <img src="../images/image-4.png" width="20%" style="margin-right:10px;">
  <img src="../images/image-8.png" width="75%">
</p>

---

## Installation de ChirpStack V4

Le plugin propose une installation automatisée de ChirpStack V4 via le bouton <img src="../images/btn_cs4.png" width="20%" style="margin-right:10px;"> et en suivant les mêmes étapes que l'installation de chirpstack v3
Le processus inclut :  
- Téléchargement et installation du paquet ChirpStack V4.  
- Installation et configuration de Redis.  
- Création des fichiers de configuration (`chirpstack.toml`, `region_eu868.toml`).  
- Mise à jour des permissions.  
- Application des paramètres personnalisés (PostgreSQL, MQTT, API bind).  
- Démarrage et activation du service ChirpStack.  
 

Après installation, ChirpStack V4 est accessible sur le port **8081** par défaut.  

---
## Compatibilité ChirpStack V3 / V4

| Fonctionnalité              | ChirpStack V3                                    | ChirpStack V4                                   |
|-----------------------------|--------------------------------------------------|------------------------------------------------|
| **Architecture**            | Network Server + Application Server              | Service unifié (chirpstack)                    |
| **Port web par défaut**     | `8081`                                           | `8081`                                         |
| **Gateway Bridge**          | Optionnel, installé séparément mais intégré pour les jeedom Luna Lora                  | Toujours externe, mais gestion simplifiée mais intégré pour les jeedom Luna Lora        |
| **Création automatique**    | Network Server, Service Profile, Gateway, Device Profiles (A et C) | Gateway, Device Profile, Application (API unifiée) |
| **Services supervisés**     | `chirpstack-application-server`, `chirpstack-network-server`, `chirpstack-gateway-bridge` | `chirpstack`, `chirpstack-gateway-bridge`      |

---

## Migration de ChirpStack V3 vers V4
Le plugin **LNS** intègre un **script de migration** qui prend en charge la sauvegarde des données de ChirpStack V3 avant d’installer la V4.  
Vous n’avez donc pas besoin d’exporter manuellement vos applications, devices ou profils : le plugin s’en occupe automatiquement.

### Prérequis
- Avoir chirpstack v3 installer sur la box avec le plugin LNS et fonctionnel.  
- Prévoir une courte coupure de service (redémarrage des services).  

### Étapes
En cliquant simplement sur le bouton <img src="../images/btn_migration.png" width="10%" style="margin-right:5px;">, le script intégré prend le relais et exécute automatiquement les étapes suivantes :
1. Sauvegarder la configuration V3 (depuis ChirpStack ou via le plugin).  
2. Arrêter les services V3 ( `application-server`, `network-server`, `gateway-bridge`).  
3. Installer ChirpStack V4 via le plugin LNS.  
4. Vérifier/configurer le broker MQTT dans MQTT2.  
5. Modifier la configuration ChirpStack ( fichier unifié `chirpstack.toml`).  
6. Utiliser la création automatique pour recréer Gateways, Device Profiles et Applications.  
7. Vérifier que les services `chirpstack` et `chirpstack-gateway-bridge` sont actifs.  
8. Ouvrir l’interface web ( port 8081 par défaut).  

### Points de vigilance
- Les **Device Profiles** en V4 ont quelques différences → vérifier les classes et paramètres.  
- Les **Applications** sont gérées via l’API unifiée.  
- Les **Downlinks** restent compatibles.  

---

## Dépannage
 
- **Les dépendances restent “en cours d’installation”**  
  → Vérifiez que les 4 champs MQTT2 (IP, port, identifiant, mot de passe) sont renseignés.  

- **Les devices ne remontent pas dans Jeedom**  
  → Vérifiez que le plugin **lorapayload** est bien installé et configuré. Vérifiez aussi que la `Commande de Payload` et `Commande d'envoi` sont renseignées.

- **Passage V3 → V4**  
  → Utilisez la procédure de migration ci-dessus et vérifiez les logs du plugin pour toute erreur.  

---
