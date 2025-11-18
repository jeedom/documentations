# Plugin BACnet Stack Server

## Description

Le plugin **BACnet Stack Server** permet de transformer votre Jeedom en serveur BACnet. Il expose vos équipements et commandes Jeedom sous forme d'objets BACnet accessibles par d'autres systèmes de GTB (Gestion Technique du Bâtiment).

### Principe de fonctionnement

Ce plugin fonctionne comme un **pont bidirectionnel** entre Jeedom et le protocole BACnet :

- **Exposition** : Vos commandes Jeedom (info ou action) deviennent des objets BACnet visibles sur le réseau
- **Lecture** : Les systèmes BACnet peuvent lire les valeurs de vos capteurs Jeedom
- **Écriture** : Les systèmes BACnet peuvent commander vos équipements Jeedom (chauffage, éclairage, etc.)
- **Synchronisation** : Les valeurs sont synchronisées automatiquement selon la configuration

### Cas d'usage typiques

- Intégrer Jeedom dans une installation BACnet existante
- Exposer des capteurs Jeedom (température, consommation, etc.) à une GTB
- Permettre à une GTB de piloter des équipements Jeedom (thermostats, volets, etc.)
- Créer un point de contrôle BACnet pour des systèmes externes

---

## Installation

1. Installez le plugin depuis le Market Jeedom
2. Activez le plugin
3. Les dependances se lancent, pour télécharger le binaire compilé de la librairie
3. Le daemon BACnet se lance automatiquement
4. Configurez vos objets BACnet dans la page de mapping

---

## Configuration

### Page de Mapping Jeedom → BACnet

Accédez à la page de configuration via le menu du plugin. Cette interface vous permet de **lier vos commandes Jeedom à des objets BACnet**.

#### Tableau de configuration

Le tableau présente 7 colonnes :

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
   - **Type BACnet** : Choisissez selon votre besoin
     - `analog-value` / `analog-input` : Pour valeurs numériques (température, consommation, etc.)
     - `binary-value` / `binary-input` : Pour états ON/OFF
     - `multi-state-value` : Pour états multiples
   - **Instance** : Numéro unique (ex: 3001, 3002, etc.)
   - **Nom BACnet** : Nom descriptif (ex: "Température Salon")

3. **Lier une commande Jeedom** (optionnel) :
   - Sélectionnez une commande dans la liste déroulante
   - Les commandes sont identifiées par : `Équipement [Plugin] - Nom commande (Type)`
   - **Type Info** : La valeur Jeedom sera exposée en lecture BACnet
   - **Type Action** : Une écriture BACnet exécutera cette commande

4. **Configurer la valeur initiale** :
   - **Mode Auto** (si commande liée) : Utilise la valeur actuelle de la commande
   - **Mode Manuel** : Saisissez une valeur fixe de démarrage

5. **Activer la synchronisation automatique** (uniquement pour commandes info) :
   - Cochez la case **"Sync auto"** pour que Jeedom mette à jour le serveur BACnet automatiquement
   - Utile pour des capteurs dont la valeur change fréquemment

#### Configuration des commandes Action

Lorsque vous liez une **commande action** Jeedom à un objet BACnet, vous devez configurer le comportement lors d'une écriture BACnet :

1. Cliquez sur le bouton **"Config"** à côté de la commande action
2. Une fenêtre s'ouvre avec deux options :

   **Option 1 : Utiliser la valeur reçue en écriture**
   - La valeur écrite par le client BACnet est transmise directement à la commande Jeedom
   - Exemple : Client BACnet écrit `22.5` → Commande thermostat reçoit `22.5`

   **Option 2 : Utiliser une valeur fixe**
   - Une valeur prédéfinie est toujours envoyée, quelle que soit la valeur BACnet reçue
   - Exemple : Client BACnet écrit n'importe quelle valeur → Commande reçoit toujours `1` (pour activer)
   - Utile pour des commandes ON/OFF ou des scénarios

3. Validez la configuration
4. Un badge **"Configurée"** apparaît pour confirmer

#### Synchronisation automatique

Le plugin propose deux modes de mise à jour :

**1. Synchronisation automatique (Cron)**
- Activez la case **"Sync auto"** sur les objets souhaités
- Configurez la fréquence dans le sélecteur en haut de page (15 min par défaut)
- Seules les commandes **info** avec **Sync auto** cochée seront mises à jour
- Jeedom lit périodiquement les valeurs et les pousse vers le serveur BACnet

**2. Mise à jour temps réel (Callback)**
- Les écritures BACnet sur le serveur sont détectées instantanément
- Si une commande action est liée, elle est exécutée automatiquement
- La valeur est mise à jour dans la configuration JSON
- Pas besoin d'activer "Sync auto" pour ce sens de communication

---

## Boutons d'action

### Sauvegarder
- Enregistre la configuration dans un fichier temporaire
- **N'applique PAS** au serveur BACnet
- Utile pour tester une configuration avant de l'appliquer

### Sauvegarder et Appliquer
- **Crée un backup** automatique de la configuration actuelle
- Écrase la configuration du serveur BACnet
- **Applique à chaud** les changements (pas de redémarrage nécessaire)
- Une confirmation est demandée avant l'application
- **À utiliser** lorsque vous êtes prêt à mettre en production

### Synchroniser maintenant
- Lance une synchronisation manuelle immédiate
- Met à jour toutes les valeurs des commandes liées
- Utile pour vérifier que tout fonctionne correctement

---

## Exemples d'utilisation

### Exemple 1 : Exposer une température en lecture seule

**Besoin** : Exposer la température du salon à une GTB

1. Ajoutez un objet BACnet :
   - Type : `analog-input`
   - Instance : `3001`
   - Nom : "Température Salon"
2. Liez la commande **info** de votre capteur de température
3. Activez **"Sync auto"**
4. Cliquez sur **"Sauvegarder et Appliquer"**

➜ La GTB peut maintenant lire la température via BACnet (instance 3001)

### Exemple 2 : Contrôler un thermostat depuis BACnet

**Besoin** : Permettre à une GTB de modifier la consigne de chauffage

1. Ajoutez un objet BACnet :
   - Type : `analog-value`
   - Instance : `3002`
   - Nom : "Consigne Chauffage Salon"
2. Liez la commande **action** "Consigne" de votre thermostat
3. Cliquez sur **"Config"** et choisissez "Utiliser la valeur reçue en écriture"
4. Définissez une valeur initiale (ex: 20.0)
5. Cliquez sur **"Sauvegarder et Appliquer"**

➜ Quand la GTB écrit une valeur sur l'instance 3002, le thermostat Jeedom est commandé automatiquement

### Exemple 3 : Bouton ON/OFF simple

**Besoin** : Créer un bouton BACnet qui active un scénario

1. Ajoutez un objet BACnet :
   - Type : `binary-value`
   - Instance : `3003`
   - Nom : "Activation Scénario Nuit"
2. Liez la commande **action** "Lancer" de votre scénario
3. Cliquez sur **"Config"** et choisissez "Utiliser une valeur fixe" → `1`
4. Cliquez sur **"Sauvegarder et Appliquer"**

➜ Toute écriture sur l'instance 3003 lance le scénario, quelle que soit la valeur écrite

---

## Logs et Diagnostic

Le plugin génère des logs détaillés dans la page de logs Jeedom (catégorie `bacnetStackServer`) :

- **Niveau Info** : Écritures BACnet détectées, exécution de commandes
- **Niveau Debug** : Détails de synchronisation, mise à jour des valeurs
- **Niveau Warning** : Objets non trouvés, commandes manquantes
- **Niveau Error** : Erreurs de connexion, fichiers inaccessibles

**Exemple de log lors d'une écriture BACnet :**
```
[INFO] Écriture BACnet externe détectée - Source: 192.168.1.10, Type: 1, Instance: 3002, Valeur: 22.5
[INFO] Commande action #456 (Consigne Chauffage) exécutée avec la valeur 22.5 (valToExecute: usePresentValue (22.5), plugin: thermostat)
[DEBUG] Fichier de configuration mis à jour avec succès
```

---

## FAQ

**Q : Quelle est la différence entre analog-value et analog-input ?**
R : `analog-input` est en lecture seule par convention BACnet, `analog-value` est en lecture/écriture. Si vous souhaitez commander depuis BACnet, utilisez `analog-value`.

**Q : Pourquoi ma checkbox "Sync auto" est grisée ?**
R : La synchronisation automatique n'est disponible que pour les commandes **info**. Les commandes **action** n'ont pas besoin de sync auto car elles réagissent aux écritures BACnet en temps réel.

**Q : Que se passe-t-il si je ne lie pas de commande Jeedom ?**
R : L'objet BACnet sera créé avec une valeur statique que vous devez définir manuellement dans "Valeur initiale". Il ne sera pas mis à jour automatiquement.

**Q : Puis-je utiliser la même instance pour plusieurs objets ?**
R : Non, chaque couple Type + Instance doit être unique sur le serveur BACnet.

**Q : Les backups prennent-ils de la place ?**
R : Le plugin garde automatiquement les 10 derniers backups et supprime les plus anciens.

**Q : Que signifie "Appliquer à chaud" ?**
R : Le serveur BACnet met à jour sa configuration sans redémarrage, les connexions actives ne sont pas interrompues.

---

