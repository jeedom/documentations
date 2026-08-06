# Écran de Monitoring BACnet

L'écran de monitoring offre une surveillance en temps réel de votre serveur BACnet et de l'ensemble de vos objets configurés.

## Accès

Pour accéder à l'écran de monitoring :
1. Depuis le plugin BACnet Stack Server
2. Cliquez sur le bouton **Monitoring** dans le menu principal
3. L'écran s'ouvre dans une fenêtre modale

> **Note** : Vous devez disposer des droits administrateur pour accéder à cette fonctionnalité.

---

## Vue d'ensemble

### En-tête

L'en-tête affiche :
- **Titre** : Monitoring BACnet
- **Statut du serveur** : Indicateur visuel avec animation
  - 🟢 **En ligne** : Le serveur BACnet est opérationnel
  - Indicateur pulsant pour confirmer l'activité
- **Description** : "Surveillance en temps réel de votre serveur BACnet"

### Contrôles de rafraîchissement

Les contrôles situés en haut de l'écran permettent de gérer la mise à jour des données :

| Contrôle | Description |
|----------|-------------|
| **Bouton Rafraîchir** | Actualise manuellement les données immédiatement |
| **Case Auto-refresh** | Active/désactive le rafraîchissement automatique (cochée par défaut) |
| **Intervalle de rafraîchissement** | Sélection de la fréquence : 5s, 10s (par défaut), 30s ou 60s |
| **Dernière mise à jour** | Affiche l'horodatage du dernier rafraîchissement (HH:MM:SS) |

---

## Statistiques globales

Quatre cartes statistiques résument l'état de votre installation :

### 1. Objets BACnet 🔵
- **Icône** : Base de données
- **Valeur** : Nombre total d'objets BACnet configurés
- **Couleur** : Bleu (dégradé violet)

### 2. Commandes liées 🟢
- **Icône** : Lien
- **Valeur** : Nombre de commandes Jeedom associées aux objets BACnet
- **Couleur** : Vert

### 3. Uptime serveur 🟠
- **Icône** : Horloge
- **Valeur** : Durée de fonctionnement du serveur depuis son dernier démarrage
- **Couleur** : Orange

### 4. Dernière synchronisation 🟣
- **Icône** : Échange
- **Valeur** : Date/heure de la dernière synchronisation
- **Couleur** : Violet

> **Effet visuel** : Les cartes s'élèvent légèrement au survol de la souris pour une meilleure expérience utilisateur.

---

## Onglets de surveillance

L'interface propose 5 onglets pour organiser l'affichage des objets BACnet :

### 📊 Vue d'ensemble
Affiche **tous les objets BACnet** configurés, quel que soit leur type.

**Utilisation** : Idéal pour avoir une vision globale de votre installation.

---

### 📈 Valeurs analogiques
Filtre et affiche uniquement les objets de type **analog** :
- Analog Input (AI)
- Analog Output (AO)
- Analog Value (AV)

**Affichage** : Les valeurs sont présentées avec leur unité de mesure.

**Exemple** : `23.5 °C`, `1013.25 hPa`, `220.5 V`

---

### 🔘 Valeurs binaires
Filtre et affiche uniquement les objets de type **binary** :
- Binary Input (BI)
- Binary Output (BO)
- Binary Value (BV)

**Affichage** : État visuel avec icône :
- ✅ **Actif** (vert) : valeur = 1 / true / active
- ❌ **Inactif** (gris) : valeur = 0 / false / inactive

---

### 🔢 Multi-states
Filtre et affiche uniquement les objets de type **multi-state** :
- Multi-State Input (MSI)
- Multi-State Output (MSO)
- Multi-State Value (MSV)

**Affichage** :
- Valeur numérique de l'état actuel
- Texte descriptif de l'état (si configuré)

**Exemple** :
```
État : 2
Texte : Mode Confort
```

---

### 📅 Schedules
Filtre et affiche uniquement les objets de type **schedule**.

**Affichage** :
- Statut actuel :
  - ▶️ **En cours** (vert) : le schedule est actif
  - ⏸️ **Arrêté** (gris) : le schedule est inactif
- **Prochain événement** : Date et heure du prochain changement planifié

---

## Cartes d'objets

Chaque objet BACnet est représenté par une carte détaillée contenant :

### En-tête de carte
- **Nom de l'objet** : Titre principal
- **Type d'objet** : Badge indiquant le type BACnet (ex: `analog-input`, `binary-output`)
- **Instance ID** : Numéro d'instance BACnet (#xxx)

### Zone de valeur
- **Label** : "Valeur actuelle"
- **Valeur** : Affichage adapté selon le type d'objet (voir ci-dessus)
- **Mise en forme** : Styling spécifique selon le type (couleurs, icônes)

### Pied de carte
- **Liaison Jeedom** :
  - 🔗 Si lié : Affiche le nom de la commande Jeedom associée
  - 🔓 Si non lié : Indique "Non lié" en gris
  
- **Indicateur Auto-sync** (si activé) :
  - 🔄 Badge "Auto-sync" avec icône de synchronisation

---

## États d'affichage

### État vide
Lorsqu'aucun objet n'est disponible dans un onglet, un message centré s'affiche :

- 📥 Icône de boîte vide
- Message contextuel selon l'onglet :
  - "Aucun objet BACnet configuré"
  - "Aucune valeur analogique"
  - "Aucune valeur binaire"
  - "Aucun objet multi-state"
  - "Aucun schedule configuré"

---

## Fonctionnement technique

### Récupération des données

Les données sont chargées via AJAX depuis le serveur :
- **Action** : `getMonitoringData`
- **Méthode** : POST
- **Endpoint** : `core/ajax/bacnetStackServer.ajax.php`

### Rafraîchissement automatique

Le système gère intelligemment le rafraîchissement :
1. **Vérification de l'état de la page** : Le rafraîchissement ne s'effectue que si l'écran de monitoring est actif
2. **Intervalles configurables** : 5, 10, 30 ou 60 secondes
3. **Arrêt automatique** : Le timer s'arrête lors de la fermeture de la fenêtre modale

### Nettoyage des ressources

Lors de la fermeture de l'écran de monitoring :
- Les intervalles de rafraîchissement sont arrêtés
- Les écouteurs d'événements sont supprimés
- La mémoire est libérée

---

## Bonnes pratiques

### ✅ Recommandations

1. **Intervalle de rafraîchissement** :
   - Utilisez **10 secondes** pour un équilibre optimal
   - Augmentez à **30-60 secondes** pour les installations avec de nombreux objets
   - Réduisez à **5 secondes** uniquement pour le débogage

2. **Organisation** :
   - Utilisez les onglets pour filtrer par type d'objet
   - Liez vos objets BACnet à des commandes Jeedom pour une meilleure traçabilité

3. **Surveillance** :
   - Surveillez l'uptime du serveur pour détecter les redémarrages
   - Vérifiez régulièrement les statistiques globales

### ⚠️ Points d'attention

1. **Performance** :
   - Un rafraîchissement trop rapide (5s) sur de grandes installations peut impacter les performances
   - Surveillez la charge du serveur si vous avez plus de 100 objets BACnet

2. **Navigation** :
   - Pensez à désactiver l'auto-refresh si vous consultez des données statiques
   - Les données ne sont pas enregistrées historiquement (utiliser les TrendLogs pour l'historique)

---

## Styles et design

L'interface utilise un design moderne avec :
- **Dégradés de couleur** pour les cartes statistiques
- **Animations** au survol
- **Indicateurs visuels** colorés selon l'état
- **Icônes Font Awesome** pour une meilleure lisibilité
- **Design responsive** adapté aux différentes tailles d'écran

### Code couleur

| Couleur | Usage |
|---------|-------|
| Bleu/Violet | Objets totaux |
| Vert | Commandes liées, états actifs |
| Orange | Uptime, alertes |
| Violet | Synchronisation |
| Gris | États inactifs, non liés |

---

## Dépannage

### Les données ne se chargent pas
1. Vérifiez que le serveur BACnet est démarré
2. Consultez les logs du plugin dans Jeedom
3. Vérifiez les droits d'accès (admin requis)

### Le rafraîchissement automatique ne fonctionne pas
1. Vérifiez que la case "Auto-refresh" est cochée
2. Rechargez la page et rouvrez le monitoring
3. Vérifiez la console du navigateur pour d'éventuelles erreurs JavaScript

### Les valeurs affichées semblent incorrectes
1. Utilisez le bouton "Rafraîchir" pour forcer une mise à jour
2. Vérifiez la configuration des objets BACnet
3. Comparez avec les valeurs directement dans BACnet

---

## Raccourcis clavier

Aucun raccourci clavier n'est actuellement implémenté pour cet écran.

---

## Changelog

- **v1.0** : Version initiale de l'écran de monitoring
  - Vue d'ensemble avec 4 statistiques principales
  - 5 onglets de filtrage
  - Rafraîchissement automatique configurable
  - Design moderne avec animations
