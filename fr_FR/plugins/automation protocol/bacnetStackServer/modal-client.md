# Client BACnet

L'interface client BACnet vous permet de découvrir, lire et interagir avec des équipements BACnet présents sur votre réseau. Contrairement au serveur qui *expose* vos commandes Jeedom, le client *interroge* les devices BACnet distants.

## Accès

Pour accéder à l'interface client :
1. Depuis la page principale du plugin BACnet Stack Server
2. Cliquez sur la tuile **Client BACnet**
3. Puis sur **Découverte réseau**

> **Note** : Le client BACnet fonctionne indépendamment du serveur BACnet. Il dispose de son propre démon.

---

## Contrôle du démon client

Le démon client doit être démarré pour utiliser les fonctionnalités de découverte et de communication.

| Bouton | Description |
|--------|-------------|
| **Démarrer le client** | Lance le démon client BACnet |
| **Arrêter le client** | Stoppe le démon client |
| **Rafraîchir le statut** | Met à jour l'indicateur d'état |

### Indicateur de statut

- **Démarré** (vert) : Le client est opérationnel
- **Arrêté** (rouge) : Le client n'est pas actif
- **Erreur** (orange) : Problème de communication

---

## Découverte des devices (Who-Is)

La découverte permet de scanner votre réseau pour trouver tous les équipements BACnet accessibles.

### Paramètres de découverte

| Champ | Description | Par défaut |
|-------|-------------|------------|
| **Device ID Min** | Borne inférieure de l'intervalle de scan | 0 |
| **Device ID Max** | Borne supérieure de l'intervalle de scan | 4194303 |

### Boutons d'action

| Bouton | Description |
|--------|-------------|
| **Envoyer Who-Is** | Envoie une requête Who-Is sur le réseau, puis actualise la liste après 2 secondes |
| **Lister les devices** | Affiche les devices déjà découverts (depuis le cache) |
| **Vider le cache** | Supprime le cache local des devices découverts |

### Tableau des devices découverts

Pour chaque device trouvé, le tableau affiche :

| Colonne | Description |
|---------|-------------|
| **Device ID** | Identifiant unique du device sur le réseau BACnet |
| **Nom** | Nom du device (si disponible) |
| **Adresse IP** | Adresse IP du device |
| **Port** | Port BACnet (généralement 47808) |
| **Actions** | Boutons pour utiliser ou explorer le device |

#### Actions par device

- **Utiliser ce device** (icône main) : Remplit automatiquement tous les champs Device ID et IP dans les sections Lecture, Écriture, COV et Object List
- **Lister les objets** (icône liste) : Lance directement la lecture de la liste d'objets du device et scrolle vers le tableau

### Système de cache

Les devices découverts sont mis en cache localement (24h) pour éviter de rescanner le réseau à chaque ouverture. Un bandeau d'information indique l'ancienneté du cache. Si le cache est expiré, un lien permet de relancer un scan.

---

## Lecture de propriété

Cette section permet de lire une propriété spécifique d'un objet BACnet distant.

### Champs requis

| Champ | Description | Exemple |
|-------|-------------|---------|
| **Device ID** | ID du device cible | 1234 |
| **Adresse IP** | IP du device cible | 192.168.1.100 |
| **Objet BACnet** | Type et instance au format `type:instance` | analog-input:0 |
| **Propriété** | Propriété à lire | present-value |

### Propriétés disponibles

| Propriété | Description |
|-----------|-------------|
| **present-value** | Valeur actuelle de l'objet |
| **object-name** | Nom de l'objet |
| **description** | Description de l'objet |
| **object-type** | Type d'objet BACnet |
| **units** | Unité de mesure |
| **status-flags** | Drapeaux d'état (alarme, défaut, hors service, remplacé) |
| **out-of-service** | Indique si l'objet est hors service |
| **priority-array** | Tableau des 16 niveaux de priorité |
| **relinquish-default** | Valeur par défaut quand aucune priorité n'est active |

Le résultat de la lecture s'affiche au format JSON dans la zone de résultat.

---

## Écriture de propriété

Cette section permet d'écrire une valeur sur un objet BACnet distant.

### Champs requis

| Champ | Description | Exemple |
|-------|-------------|---------|
| **Device ID** | ID du device cible | 1234 |
| **Adresse IP** | IP du device cible | 192.168.1.100 |
| **Objet BACnet** | Format `type:instance` | analog-output:0 |
| **Propriété** | Propriété à écrire | present-value |
| **Valeur** | Valeur à écrire | 23.5 |
| **Type de données** | Type BACnet de la valeur | real (float) |
| **Priorité** | Niveau de priorité BACnet (1-16) | 16 (Normal) |

### Types de données

| Type | Description | Exemple |
|------|-------------|---------|
| **real (float)** | Nombre à virgule flottante | 23.5 |
| **unsigned (int)** | Entier non signé | 100 |
| **boolean** | Vrai/Faux | true |
| **character-string** | Chaîne de caractères | "Mode confort" |
| **enumerated** | Valeur énumérée | 1 |

### Priorité BACnet

BACnet utilise 16 niveaux de priorité (1 = plus haute, 16 = plus basse). Les niveaux courants :

| Priorité | Usage typique |
|----------|---------------|
| 8 | Commandes manuelles |
| 10 | Systèmes de contrôle |
| 12 | Automatismes |
| 14 | Programmes horaires |
| 16 | Normal (défaut) |

---

## Souscription COV (Change of Value)

Le mécanisme COV permet de recevoir automatiquement une notification lorsque la valeur d'un objet BACnet change, sans avoir à interroger le device en permanence.

### Paramètres

| Champ | Description | Exemple |
|-------|-------------|---------|
| **Device ID** | ID du device | 1234 |
| **Adresse IP** | IP du device | 192.168.1.100 |
| **Objet BACnet** | Format `type:instance` | analog-input:0 |
| **Lifetime** | Durée de l'abonnement en secondes (0 = permanent) | 3600 |

### Boutons

| Bouton | Description |
|--------|-------------|
| **S'abonner** | Crée un abonnement COV pour l'objet spécifié |
| **Se désabonner** | Annule l'abonnement COV |

### Durées disponibles (via le popup de gestion)

- 5 minutes (300s)
- 10 minutes (600s)
- 30 minutes (1800s)
- 1 heure (3600s) — recommandé
- 2 heures, 4 heures, 8 heures, 24 heures
- Permanent (0)

### Mode confirmé

L'option **Notifications confirmées** (accessible via le popup de gestion COV) ajoute un accusé de réception à chaque notification. Cela augmente le trafic réseau mais garantit la réception. En général, laissez cette option décochée.

> **Info** : Tous les devices BACnet ne supportent pas le COV. Si le device ne le supporte pas, un message d'avertissement s'affichera.

---

## Liste des objets d'un device

Cette section permet d'explorer l'ensemble des objets BACnet exposés par un device distant.

### Utilisation

1. Renseignez le **Device ID** et l'**Adresse IP**
2. Choisissez l'une des deux méthodes :
   - **Lire la liste des objets** : Scan complet du device (peut prendre jusqu'à 3 minutes pour les devices avec 2000+ objets)
   - **Scan sélectif** : Ajoutez uniquement les objets spécifiques dont vous avez besoin (voir section ci-dessous)

> **Note** : Pour les devices avec beaucoup d'objets (2000+), le scan complet peut prendre jusqu'à 3 minutes. Le timeout est fixé à 180 secondes.

### Tableau des objets

Pour chaque objet découvert :

| Colonne | Description |
|---------|-------------|
| **Sélection** | Case à cocher pour sélectionner l'objet |
| **Type** | Type d'objet BACnet (analog-input, binary-value, etc.) |
| **Instance** | Numéro d'instance |
| **Nom** | Nom de l'objet (propriété object-name) |
| **Description** | Description de l'objet (si disponible) |
| **Valeur** | Valeur actuelle (present-value), formatée selon le type |
| **Actions** | Boutons d'action par objet |

### Badges d'état

- **Existant** (bleu) : L'objet est déjà importé dans l'équipement Jeedom (lignes surlignées en vert en haut du tableau)

### Actions par objet

| Bouton | Description |
|--------|-------------|
| **Infos** | Affiche toutes les propriétés de l'objet dans un popup détaillé |
| **COV** | Ouvre le popup de gestion de la souscription COV pour cet objet |
| **Relire** (icône sync) | Relit les propriétés de l'objet |
| **Ajouter** (icône +) | Ajoute cet objet individuellement à l'équipement |

### Actions groupées

| Bouton | Description |
|--------|-------------|
| **Tout sélectionner** | Coche/décoche toutes les cases |
| **Créer équipements** | Crée un équipement Jeedom avec les objets sélectionnés, ou les ajoute à un équipement existant |
| **Codes erreur BACnet** | Affiche un référentiel des codes d'erreur BACnet |

### Création d'équipements

Quand vous cliquez sur **Créer équipements** :

- Si vous êtes dans un contexte de scan depuis un équipement existant, les objets sélectionnés sont ajoutés comme nouvelles commandes à cet équipement
- Sinon, un nouvel équipement Jeedom est créé avec les commandes correspondant aux objets sélectionnés

Chaque objet BACnet génère :
- Une commande **info** pour lire la valeur
- Une commande **action** (pour les types output et value) pour écrire une valeur

---

## Scan sélectif d'objets

Le **scan sélectif** permet d'ajouter uniquement des objets spécifiques à un équipement existant, sans avoir à scanner l'intégralité du device. Idéal pour :
- Ajouter quelques nouveaux points à un équipement existant
- Éviter les timeouts sur les très gros devices (2000+ objets)
- Gagner du temps en ciblant précisément les objets nécessaires

### Accès au scan sélectif

1. Depuis la page de configuration d'un **équipement Client existant**
2. Cliquez sur le bouton **Scan sélectif** (orange)

> **Important** : L'équipement doit être sauvegardé avant d'utiliser le scan sélectif.

### Interface de scan sélectif

La modale propose deux modes :

#### Mode 1 : Ajouter manuellement (par défaut)

Interface intuitive avec sélecteurs pour construire votre liste :

| Champ | Description |
|-------|-------------|
| **Type d'objet** | Sélecteur avec tous les types BACnet courants (analog-value, binary-input, etc.) |
| **Instance** | Numéro d'instance de l'objet (0 à 4194303) |
| **Type de commande** | Choix entre "Info uniquement" ou "Info + Action" |

**Boutons** :
- **Ajouter** : Ajoute l'objet à la liste de sélection
- Touche **Entrée** dans le champ Instance : Raccourci pour ajouter rapidement

**Gestion intelligente des commandes action** :
- L'option "Info + Action" est **automatiquement désactivée** pour les types en lecture seule :
  - analog-input, binary-input, multi-state-input
  - accumulator, pulse-converter

**Liste des objets sélectionnés** :
- Affichage de tous les objets ajoutés avec badges colorés
  - Badge **bleu** "Info" : Commande info uniquement
  - Badge **vert** "Info+Action" : Commande info + commande action
- Bouton **X** pour retirer un objet de la liste
- Compteur du nombre d'objets sélectionnés

#### Mode 2 : Coller une liste

Pour les utilisateurs avancés ayant déjà une liste préparée :

- **Format** : Un objet par ligne, format `type:instance`
- **Exemples** :
  ```
  analog-value:100
  analog-input:200
  binary-value:0
  multi-state-output:42
  ```
- Les lignes vides et les commentaires (ligne commençant par `#`) sont ignorés
- Validation automatique du format

### Processus de scan sélectif

1. Ajoutez les objets souhaités (mode manuel ou liste)
2. Cliquez sur **Ajouter les objets**
3. Le plugin :
   - Scanne uniquement les objets spécifiés (très rapide, ~5-10 secondes)
   - Récupère leurs propriétés (nom, description, valeur, etc.)
   - Crée automatiquement les commandes dans l'équipement
   - Respecte votre choix Info/Action pour chaque objet
4. La page se recharge avec les nouvelles commandes

### Exemple d'utilisation

Vous avez un équipement avec 2000 objets BACnet, mais vous voulez juste ajouter 5 nouvelles températures :

1. Ouvrez la page de configuration de l'équipement
2. Cliquez sur **Scan sélectif**
3. Sélectionnez :
   - Type : `analog-input`
   - Instance : `150` → Ajouter
   - Instance : `151` → Ajouter
   - Instance : `152` → Ajouter
   - Instance : `153` → Ajouter
   - Instance : `154` → Ajouter
4. Cliquez sur **Ajouter les objets**
5. En 5-10 secondes, les 5 nouvelles températures sont ajoutées

Alternativement en mode liste :
```
analog-input:150
analog-input:151
analog-input:152
analog-input:153
analog-input:154
```

### Avantages vs scan complet

| Scan complet | Scan sélectif |
|--------------|---------------|
| Scanne TOUS les objets du device | Scanne uniquement les objets demandés |
| Peut prendre 2-3 minutes pour 2000+ objets | Prend 5-10 secondes quelque soit la taille du device |
| Affiche tous les objets pour sélection | Ajoute directement les objets choisis |
| Risque de timeout sur très gros devices | Pas de risque de timeout |
| Idéal pour la découverte initiale | Idéal pour ajouter des points spécifiques |

---

## Codes d'erreur BACnet

Le bouton **Codes erreur BACnet** dans la section liste des objets affiche un référentiel complet des erreurs.

### Classes d'erreur

| Code | Classe | Description |
|------|--------|-------------|
| 0 | DEVICE | Erreur liée au device |
| 1 | OBJECT | Erreur liée à un objet |
| 2 | PROPERTY | Erreur liée à une propriété |
| 3 | RESOURCES | Ressources insuffisantes |
| 4 | SECURITY | Erreur de sécurité |
| 5 | SERVICES | Erreur de service |
| 7 | COMMUNICATION | Erreur de communication |

### Erreurs les plus courantes

| Code | Signification |
|------|---------------|
| **2/32** | Propriété non disponible — Normal pour les propriétés optionnelles |
| **1/31** | Timeout — Le device ne répond pas |
| **2/9** | Accès en lecture refusé |
| **2/28** | Accès en écriture refusé (lecture seule) |
| **1/17** | Objet inconnu — N'existe pas sur le device |

Le format est toujours `Classe/Code` (ex : `2/32` = Property / Unknown Property).

---

## Dépannage

### Le client ne démarre pas

1. Vérifiez que le démon serveur est bien démarré (le client en dépend)
2. Consultez les logs du plugin
3. Vérifiez que le port n'est pas déjà utilisé

### Who-Is ne trouve aucun device

1. Vérifiez que l'interface réseau est correcte dans la configuration du plugin
2. Assurez-vous que les devices BACnet sont sur le même réseau/VLAN
3. Vérifiez les règles de pare-feu (port UDP 47808)
4. Essayez avec un intervalle Device ID plus restreint

### La lecture d'objets est lente

1. C'est normal pour les devices avec beaucoup d'objets — le plugin lit les propriétés par batch
2. Le timeout est de 3 minutes
3. Certains devices répondent lentement aux requêtes de propriétés multiples

### Erreur "COV not supported"

Le device cible ne supporte pas le mécanisme COV. Utilisez plutôt le mode cron pour mettre à jour les valeurs périodiquement (configurable dans l'équipement).
