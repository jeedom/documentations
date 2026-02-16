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
2. Cliquez sur **Lire la liste des objets**
3. Le plugin interroge le device et récupère la liste complète avec les propriétés de chaque objet
4. L'opération peut prendre quelques minutes pour les devices avec beaucoup d'objets (timeout de 3 minutes)

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
