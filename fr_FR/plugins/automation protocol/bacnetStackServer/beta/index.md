# Plugin BACnet Stack Server

## Description

Le plugin **BACnet Stack Server** transforme votre Jeedom en **passerelle BACnet bidirectionnelle**. Il fonctionne à la fois en mode **serveur** (exposer vos équipements Jeedom sur le réseau BACnet) et en mode **client** (lire et écrire des valeurs sur des devices BACnet externes).

### Librairie utilisée

Le plugin s'appuie sur **[bacnet-stack](https://bacnet.sourceforge.net/)**, une implémentation open source du protocole BACnet. Un binaire compilé est téléchargé automatiquement lors de l'installation des dépendances.

### Principe de fonctionnement

```
  Jeedom                        Réseau BACnet
  ┌─────────────────────┐       ┌──────────────────┐
  │                     │  ←→   │  GTB / Automate  │
  │  Mode Serveur       │       │  (lit/écrit les  │
  │  (objets exposés)   │       │   objets Jeedom) │
  │                     │       └──────────────────┘
  │  Mode Client        │  ←→   ┌──────────────────┐
  │  (lit/écrit des     │       │  Device BACnet   │
  │   devices externes) │       │  (capteur, CVC…) │
  └─────────────────────┘       └──────────────────┘
```

### Cas d'usage typiques

- Intégrer Jeedom dans une installation GTB existante (BMS, Siemens Desigo, etc.)
- Exposer des capteurs Jeedom (température, consommation…) à une GTB en lecture
- Permettre à une GTB de piloter des équipements Jeedom (thermostats, volets…)
- Lire les valeurs d'un automate ou d'un capteur BACnet depuis Jeedom
- Écrire des consignes sur un device BACnet externe (régulateur CVC, variateur…)

---

## Installation

1. Installez le plugin depuis le Market Jeedom
2. Activez le plugin
3. Les dépendances se lancent automatiquement et téléchargent le binaire bacnet-stack compilé
4. Le daemon BACnet démarre
5. Configurez le **mode serveur** (mapping) et/ou créez des **équipements clients**

---

## Mode Serveur — Exposer Jeedom sur le réseau BACnet

### Page de Mapping Jeedom → BACnet

Accédez à la page de configuration via le menu du plugin. Cette interface vous permet de **lier vos commandes Jeedom à des objets BACnet** visibles sur le réseau.

#### Recherche et filtre

Une barre de recherche en haut du tableau filtre instantanément les lignes par type, instance, nom ou commande liée. Utile sur de grandes configurations.

#### Tableau de configuration

| Colonne | Description |
|---------|-------------|
| **Type BACnet** | Type d'objet BACnet (`analog-value`, `analog-input`, `binary-value`, etc.) |
| **Instance** | Numéro d'instance unique pour ce type d'objet (≥ 1, sauf schedule/trendlog ≥ 0) |
| **Nom BACnet** | Nom de l'objet visible sur le réseau BACnet |
| **Commande Jeedom liée** | Commande info ou action à exposer |
| **Valeur initiale** | Valeur de démarrage de l'objet BACnet |
| **Sync auto** | Mise à jour automatique depuis Jeedom (cron) |
| **Actions** | Supprimer l'objet ou configurer l'action |

#### Ajouter un objet BACnet

1. Cliquez sur **"Ajouter un objet BACnet"**
2. Remplissez les champs :
   - **Type BACnet** :
     - `analog-value` / `analog-input` : valeurs numériques (température, consommation…)
     - `binary-value` / `binary-input` : états ON/OFF
     - `multi-state-value` : états multiples
   - **Instance** : numéro unique (ex : 3001, 3002…)
   - **Nom BACnet** : nom descriptif (ex : "Température Salon")

3. **Lier une commande Jeedom** (optionnel) :
   - Sélectionnez une commande dans la liste déroulante
   - **Type Info** : la valeur Jeedom est exposée en lecture BACnet
   - **Type Action** : une écriture BACnet exécute cette commande

4. **Valeur initiale** :
   - **Mode Auto** (si commande liée) : utilise la valeur actuelle de la commande
   - **Mode Manuel** : saisissez une valeur fixe de démarrage

5. **Sync auto** (commandes info uniquement) : Jeedom met à jour la valeur BACnet selon la fréquence de cron configurée

#### Configuration des commandes Action

Quand une commande **action** est liée à un objet BACnet, cliquez sur **"Config"** pour définir le comportement lors d'une écriture BACnet :

- **Utiliser la valeur reçue** : la valeur écrite par le client BACnet est transmise à la commande Jeedom
  *Ex : client BACnet écrit `22.5` → thermostat reçoit `22.5`*
- **Utiliser une valeur fixe** : une valeur prédéfinie est toujours envoyée, quelle que soit la valeur BACnet reçue
  *Ex : toute écriture → commande reçoit toujours `1` (pour activer)*

#### Valeurs temps réel

Le bouton **"Valeurs live"** dans l'en-tête du tableau interroge instantanément le daemon BACnet pour afficher la valeur courante de chaque objet directement dans la colonne correspondante.

#### Boutons d'action

| Bouton | Effet |
|--------|-------|
| **Sauvegarder** | Enregistre la configuration dans un fichier temporaire, sans l'appliquer au serveur |
| **Sauvegarder et Appliquer** | Crée un backup automatique, puis applique à chaud la configuration (pas de redémarrage) |
| **Synchroniser maintenant** | Lance une synchronisation manuelle immédiate de toutes les valeurs liées |

#### Synchronisation automatique

**1. Cron (Sync auto)**
- Activez la case **"Sync auto"** sur les objets souhaités
- Configurez la fréquence dans le sélecteur en haut de page (15 min par défaut)
- Seules les commandes **info** avec **Sync auto** cochée sont mises à jour

**2. Callback temps réel**
- Les écritures BACnet reçues sur le serveur sont traitées instantanément
- Si une commande action est liée, elle est exécutée automatiquement
- Aucune synchronisation auto n'est nécessaire pour ce sens de communication

---

## Mode Client — Lire et écrire des devices BACnet externes

Le plugin peut se comporter en **client BACnet** : il se connecte à un device BACnet présent sur le réseau (automate, capteur, régulateur CVC…) pour lire ses valeurs et/ou lui envoyer des consignes.

### Créer un équipement client

1. Dans le menu du plugin, créez un **nouvel équipement**
2. Renseignez dans la configuration :
   - **Device ID** : identifiant BACnet du device distant (ex : `4194302`)
   - **IP:Port** : adresse du device (ex : `192.168.1.100:47808`). Le port 47808 est ajouté automatiquement si absent.
3. Activez l'équipement et sauvegardez

### Commandes de lecture (info)

Chaque commande **info** d'un équipement client correspond à un objet BACnet du device distant :

| Paramètre | Description |
|-----------|-------------|
| **Type d'objet** | `analog-input`, `analog-value`, `binary-input`, etc. |
| **Instance** | Numéro d'instance de l'objet sur le device |
| **Propriété** | Propriété à lire (par défaut : `present-value`) |

Les valeurs sont lues automatiquement à chaque cycle du cron. L'unité de mesure est récupérée depuis le device et appliquée automatiquement sur la commande Jeedom.

### Commandes d'écriture (action)

Chaque commande **action** permet d'écrire une valeur sur un objet BACnet du device distant :

| Paramètre | Description |
|-----------|-------------|
| **Type d'objet** | `analog-value`, `analog-output`, `binary-value`, etc. |
| **Instance** | Numéro d'instance de l'objet cible |
| **Propriété** | Propriété à écrire (par défaut : `present-value`) |
| **Priorité d'écriture** | Priorité BACnet (1–16, défaut : 8) |

### Suivi de connectivité

Le plugin surveille automatiquement la disponibilité de chaque device client :

- Après **3 cycles consécutifs** sans réponse, le device est marqué **hors-ligne**
- Une **commande info "Connectivité"** (0 = hors-ligne, 1 = en ligne) est créée automatiquement sur chaque équipement
- Dès qu'une lecture réussit à nouveau, le device revient **en ligne**
- Un événement est enregistré dans l'historique à chaque transition

---

## Supervision

La page **Supervision** (accessible depuis l'accueil du plugin via la tuile orange) offre une vue centralisée de l'état du plugin.

### Dashboard

- **État du démon** : indique si le daemon BACnet est actif
- **Devices en ligne / hors-ligne** : compteurs en temps réel
- **Tableau des devices** : pour chaque équipement client, affiche l'IP, le statut, le nombre d'échecs consécutifs et la date de dernière lecture réussie

Le bouton **Rafraîchir** met à jour l'ensemble de la page.

### Historique des événements

La section **Derniers événements** liste les 200 derniers événements enregistrés par le plugin, triés du plus récent au plus ancien.

**Types d'événements :**

| Type | Description |
|------|-------------|
| **Connectivité** | Device qui passe hors-ligne ou qui revient en ligne |
| **Écriture** | Écriture BACnet reçue sur le serveur ou envoyée par le client |
| **Timeout** | Dépassement du délai d'attente lors d'une lecture client |
| **Connexion** | Erreur de connexion au daemon |

**Filtres disponibles :**
- Par type (Connectivité, Écriture, Timeout, Connexion)
- Par device (liste déroulante)
- Bouton **Effacer l'historique** pour repartir de zéro

---

## Indicateur d'état du démon

Un **badge coloré** est affiché en permanence dans l'en-tête du plugin :
- 🟢 **OK** : le daemon BACnet fonctionne et répond
- 🔴 **Inactif** : le daemon est arrêté ou ne répond plus

Il se rafraîchit automatiquement toutes les 30 secondes.

---

## Import / Export de configuration

Depuis la page de mapping, vous pouvez :
- **Exporter** la configuration courante au format JSON (pour sauvegarder ou transférer)
- **Importer** un fichier JSON pour charger une configuration existante

---

## Exemples d'utilisation

### Exemple 1 : Exposer une température en lecture seule (mode serveur)

**Besoin** : Exposer la température du salon à une GTB

1. Ajoutez un objet BACnet :
   - Type : `analog-input` — Instance : `3001` — Nom : "Température Salon"
2. Liez la commande **info** de votre capteur de température
3. Activez **"Sync auto"**
4. Cliquez sur **"Sauvegarder et Appliquer"**

➜ La GTB peut lire la température via BACnet sur l'instance 3001

---

### Exemple 2 : Contrôler un thermostat depuis BACnet (mode serveur)

**Besoin** : Permettre à une GTB de modifier la consigne de chauffage

1. Ajoutez un objet BACnet :
   - Type : `analog-value` — Instance : `3002` — Nom : "Consigne Chauffage Salon"
2. Liez la commande **action** "Consigne" de votre thermostat
3. Cliquez sur **"Config"** → "Utiliser la valeur reçue en écriture"
4. Définissez une valeur initiale (ex : 20.0)
5. Cliquez sur **"Sauvegarder et Appliquer"**

➜ Quand la GTB écrit sur l'instance 3002, le thermostat Jeedom est commandé

---

### Exemple 3 : Lire un capteur BACnet externe (mode client)

**Besoin** : Afficher dans Jeedom la température d'un capteur BACnet (device ID 100, IP 192.168.1.50)

1. Créez un équipement client avec Device ID `100`, IP `192.168.1.50:47808`
2. Ajoutez une commande **info** :
   - Type d'objet : `analog-input` — Instance : `1`
3. Sauvegardez — la valeur sera lue à chaque cycle cron

---

### Exemple 4 : Envoyer une consigne à un régulateur CVC (mode client)

**Besoin** : Modifier la consigne d'un régulateur BACnet depuis un scénario Jeedom

1. Créez un équipement client avec les paramètres du régulateur
2. Ajoutez une commande **action** :
   - Type d'objet : `analog-value` — Instance : `3` — Priorité : `8`
3. Utilisez cette commande dans vos scénarios Jeedom

---

## Logs et Diagnostic

Le plugin génère des logs dans la page de logs Jeedom :

| Canal | Contenu |
|-------|---------|
| `bacnetStackServer` | Lectures/écritures client, connectivité, cron |
| `callbackBacnetStackServer` | Écritures reçues sur le serveur depuis le réseau BACnet |

**Niveaux :**
- **Info** : Écritures détectées, exécution de commandes, transitions online/offline
- **Debug** : Détails de synchronisation, valeurs lues, unités reçues
- **Warning** : Objets non trouvés, commandes manquantes, daemon non démarré
- **Error** : Erreurs de connexion, fichiers inaccessibles, timeouts

---

## FAQ

**Q : Quelle est la différence entre analog-value et analog-input ?**
R : `analog-input` est en lecture seule par convention BACnet, `analog-value` est en lecture/écriture. Pour commander depuis BACnet, utilisez `analog-value`.

**Q : Pourquoi ma checkbox "Sync auto" est grisée ?**
R : La synchronisation automatique n'est disponible que pour les commandes **info**. Les commandes **action** réagissent aux écritures BACnet en temps réel, sans nécessiter de sync auto.

**Q : Que se passe-t-il si je ne lie pas de commande Jeedom à un objet serveur ?**
R : L'objet BACnet existe avec une valeur statique définie dans "Valeur initiale". Il ne sera pas mis à jour automatiquement.

**Q : Puis-je utiliser la même instance pour plusieurs objets ?**
R : Non, chaque couple Type + Instance doit être unique sur le serveur BACnet.

**Q : Les backups prennent-ils de la place ?**
R : Le plugin garde automatiquement les 10 derniers backups et supprime les plus anciens.

**Q : Que signifie "Appliquer à chaud" ?**
R : Le serveur BACnet met à jour sa configuration sans redémarrage — les connexions actives ne sont pas interrompues.

**Q : Comment savoir si un device client est accessible ?**
R : Consultez la page **Supervision** → colonne Statut du tableau des devices. La commande "Connectivité" de l'équipement est également disponible pour les scénarios et alertes. Un device est marqué hors-ligne après 3 cycles consécutifs sans réponse.

**Q : Quelle est la librairie BACnet utilisée ?**
R : Le plugin utilise **[bacnet-stack](https://bacnet.sourceforge.net/)**, une implémentation open source et portable du protocole BACnet/IP.
