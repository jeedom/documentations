# Équipement Client BACnet

Chaque device BACnet découvert sur le réseau peut être représenté comme un équipement dans Jeedom. Cet équipement contient des commandes info et action correspondant aux objets BACnet du device distant.

## Création d'un équipement

### Méthode automatique (recommandée)

1. Ouvrez l'interface **Client BACnet** (Découverte réseau)
2. Lancez un **Who-Is** pour découvrir les devices
3. Cliquez sur **Lister les objets** d'un device
4. Sélectionnez les objets souhaités
5. Cliquez sur **Créer équipements**
6. L'équipement est créé automatiquement avec les commandes correspondantes

### Méthode manuelle

1. Depuis la section **Client BACnet**, cliquez sur **Ajouter un client**
2. Configurez manuellement les paramètres (Device ID, IP, etc.)
3. Utilisez **Scanner les objets** pour découvrir et ajouter des commandes

---

## Configuration de l'équipement

### Paramètres généraux

| Paramètre | Description |
|-----------|-------------|
| **Nom de l'équipement** | Nom affiché dans Jeedom |
| **Objet parent** | Objet Jeedom de rattachement |
| **Catégorie** | Catégorie de l'équipement (Chauffage, Sécurité, etc.) |
| **Activer** | Active ou désactive l'équipement |
| **Visible** | Rend l'équipement visible sur le dashboard |

### Configuration Client BACnet

Ces paramètres sont spécifiques au device BACnet distant :

| Paramètre | Description | Exemple |
|-----------|-------------|---------|
| **Device ID** | Identifiant BACnet du device distant | 64 |
| **Adresse IP** | Adresse IP et port du device | 192.168.1.100:47808 |
| **Priorité d'écriture par défaut** | Priorité BACnet (1-16) utilisée lors de la génération des commandes (scan) | 8 |

> **Format IP** : Toujours au format `IP:port` (ex : `192.168.1.100:47808`).

> **Priorité d'écriture par défaut** : S'applique uniquement aux **nouvelles commandes créées** lors d'un scan. Les commandes déjà existantes conservent leur priorité individuelle. Pour modifier une commande existante, utilisez le sélecteur dans l'onglet **Commandes**.

### Scanner les objets

Deux méthodes pour ajouter des objets à l'équipement :

#### 1. Scan complet (bouton bleu "Scanner les objets")

Ouvre l'interface client en mode scan complet :
- Seule la section "Liste des objets" est affichée
- Le Device ID et l'IP sont pré-remplis
- Le plugin récupère TOUS les objets du device
- Les objets déjà présents sont marqués comme "Existant" (ligne verte)
- Vous sélectionnez les nouveaux objets à ajouter
- **Durée** : Peut prendre jusqu'à 3 minutes pour les gros devices (2000+ objets)
- **Idéal pour** : Découverte initiale du device, vue d'ensemble complète

#### 2. Scan sélectif (bouton orange "Scan sélectif")

Interface dédiée pour ajouter uniquement des objets spécifiques :
- Deux modes : ajout manuel avec sélecteurs ou import par liste
- Scan uniquement des objets demandés (très rapide : 5-10 secondes)
- Gestion intelligente Info/Action selon le type d'objet
- Pas de risque de timeout
- **Idéal pour** : Ajouter quelques nouveaux points, éviter les timeouts, ciblage précis

Pour plus de détails sur le scan sélectif, consultez la page [Client BACnet](modal-client.md#scan-sélectif-dobjets).

---

## Mode de mise à jour

Le mode de mise à jour détermine comment les valeurs des commandes sont actualisées.

### Cron (mise à jour périodique)

Le mode par défaut. Jeedom interroge le device BACnet à intervalles réguliers pour lire les valeurs de tous les objets.

| Paramètre | Description |
|-----------|-------------|
| **Inclure dans le cron** | Case à cocher pour activer les mises à jour périodiques |

La fréquence est configurable globalement dans la **Configuration du plugin** (1 min, 5 min, 10 min ou 1 heure).

### COV (mise à jour sur événement)

En mode COV (Change of Value), le device BACnet envoie une notification uniquement quand une valeur change. Plus efficace en termes de trafic réseau.

| Avantage | Inconvénient |
|----------|--------------|
| Mise à jour instantanée | Tous les devices ne supportent pas COV |
| Moins de trafic réseau | L'abonnement doit être renouvelé périodiquement |
| Pas de polling inutile | Configuration plus complexe |

> **Important** : Si vous sélectionnez le mode COV, l'équipement ne sera mis à jour que via les notifications COV. Désactivez alors "Inclure dans le cron" pour éviter un double polling.

---

## Abonnements COV

### Consulter les abonnements

Le bouton **Charger abonnements** affiche la liste des objets BACnet pour lesquels un abonnement COV est actif sur ce device.

### Gérer les abonnements

Les abonnements COV se gèrent depuis l'interface Client BACnet :
1. Listez les objets du device
2. Cliquez sur le bouton **COV** d'un objet
3. Configurez la durée et le mode (confirmé ou non)
4. Cliquez sur **S'abonner**

### Durée de vie

Un abonnement COV a une durée de vie limitée. Options :
- 5 min à 24h (valeurs prédéfinies)
- Permanent (lifetime = 0)

Le plugin renouvelle automatiquement les abonnements avant leur expiration.

---

## Commandes de l'équipement

### Onglet Commandes

L'onglet **Commandes** liste toutes les commandes créées pour cet équipement.

### Types de commandes

Chaque objet BACnet importé peut générer :

| Type | Sous-type | Description | LogicalId |
|------|-----------|-------------|-----------|
| **info** | numeric / binary / string | Lecture de la valeur | `bacnet_info_TYPE_INSTANCE` |
| **action** | slider / other | Écriture d'une valeur | `bacnet_action_TYPE_INSTANCE` |

### Priorité d'écriture par commande

Pour les commandes action (écriture BACnet), un sélecteur **Priorité BACnet** (1-16) est disponible directement dans la colonne Options du tableau des commandes. Il permet d'ajuster la priorité indépendamment pour chaque commande, sans toucher à la valeur par défaut de l'équipement.

> Modifier la priorité d'une commande existante prend effet immédiatement après sauvegarde de l'équipement.

### Conventions de nommage

Le `logicalId` des commandes suit le format :
- `bacnet_info_analog-input_0` → commande info pour analog-input instance 0
- `bacnet_action_analog-output_1` → commande action pour analog-output instance 1

Les tirets dans le type BACnet sont remplacés par des underscores dans le logicalId (ex : `analog-input` → `analog_input`).

---

## Bonnes pratiques

### Choix du mode de mise à jour

- Utilisez **Cron** pour les devices simples ou qui ne supportent pas COV
- Utilisez **COV** pour les valeurs critiques nécessitant une réactivité immédiate (alarmes, détecteurs)
- Vous pouvez combiner les deux : COV pour certains objets et Cron en fallback

### Organisation

- Créez un équipement par device BACnet distant
- Utilisez des noms explicites pour les commandes
- Rattachez les équipements aux bons objets Jeedom (pièces)

### Performance

- Ne scannez pas trop fréquemment en mode Cron (5 min est un bon compromis)
- Pour les installations avec beaucoup de devices, préférez le mode COV
- Limitez le nombre d'objets importés à ceux réellement utiles

---

## Dépannage

### Les valeurs ne se mettent pas à jour

1. Vérifiez que l'équipement est activé
2. Vérifiez que "Inclure dans le cron" est coché (mode Cron)
3. Vérifiez que le démon est démarré
4. Testez une lecture manuelle depuis l'interface Client BACnet
5. Consultez les logs du plugin

### Le scan d'objets ne trouve rien

1. Vérifiez le Device ID et l'adresse IP
2. Assurez-vous que le démon client est démarré
3. Testez d'abord un Who-Is pour confirmer la visibilité du device
4. Certains devices nécessitent une authentification BACnet

### Erreur à l'ajout de commandes

1. Vérifiez que l'équipement est sauvegardé avant de scanner
2. Les doublons sont gérés automatiquement (objets déjà existants marqués en vert)
3. En cas de problème, supprimez l'équipement et recréez-le
