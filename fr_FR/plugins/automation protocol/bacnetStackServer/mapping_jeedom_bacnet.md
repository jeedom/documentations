# Mapping Jeedom vers BACnet

## Description

Cette fonctionnalité permet d'exposer des commandes info Jeedom (de n'importe quel plugin) comme objets BACnet sur le serveur BACnet. Les valeurs sont automatiquement synchronisées selon une fréquence configurable.

## Accès

Depuis la page principale du plugin, cliquez sur le bouton **"Mapping Jeedom→BACnet"**.

## Configuration

### 1. Fréquence de synchronisation

Sélectionnez la fréquence à laquelle les valeurs doivent être synchronisées :
- **Chaque minute** : `* * * * *`
- **Toutes les 5 minutes** : `*/5 * * * *`
- **Toutes les 10 minutes** : `*/10 * * * *`
- **Toutes les 15 minutes** : `*/15 * * * *` (par défaut)
- **Toutes les 30 minutes** : `*/30 * * * *`
- **Chaque heure** : `0 * * * *`
- **Personnalisé** : Permet de définir un cron personnalisé

Vous pouvez activer ou désactiver la synchronisation automatique avec la case à cocher **"Activer la synchronisation automatique"**.

### 2. Ajouter un mapping

1. Cliquez sur le bouton **"Ajouter un mapping"**
2. Sélectionnez une **commande info Jeedom** dans la liste déroulante
   - Toutes les commandes de type info de tous les plugins actifs sont disponibles
   - Le format affiché est : `Nom de l'équipement [plugin] - Nom de la commande`
3. Choisissez le **type d'objet BACnet** :
   - **Analog Value** : Pour les valeurs numériques (température, pourcentage, etc.)
   - **Analog Input** : Pour les entrées analogiques
   - **Binary Value** : Pour les valeurs binaires (0/1, vrai/faux)
   - **Binary Input** : Pour les entrées binaires
   - **Multi-state Value** : Pour les valeurs à états multiples
4. Définissez une **instance BACnet** unique (numéro > 0)
   - Chaque objet BACnet doit avoir un numéro d'instance unique pour son type
5. Donnez un **nom à l'objet BACnet**
   - Ce nom sera visible sur le réseau BACnet

### 3. Gestion des mappings

- **Modifier** : Modifiez les paramètres d'un mapping existant
- **Supprimer** : Supprimez un mapping avec le bouton poubelle
- Les instances BACnet sont automatiquement incrémentées lors de l'ajout

### 4. Sauvegarder

- **Sauvegarder** : Enregistre la configuration sans l'appliquer au serveur
- **Sauvegarder et Appliquer** : Enregistre ET applique immédiatement au serveur BACnet
- **Synchroniser maintenant** : Force une synchronisation immédiate des valeurs

## Fonctionnement

### Conversion des valeurs

Les valeurs Jeedom sont automatiquement converties selon le type BACnet :

- **Binary** : `0` ou `1` (valeurs numériques)
- **Analog** : Nombres décimaux (float)
- **Multi-state** : Nombres entiers (int)

### Format JSON généré

La configuration est convertie au format attendu par le serveur BACnet :

```json
{
  "deviceId": 123,
  "deviceName": "bacnetStackServer",
  "objects": [
    {
      "type": "analog-value",
      "instance": 1,
      "name": "Temperature_Salon",
      "presentValue": 21.5,
      "units": "no-units",
      "cov_increment": 0.5
    },
    {
      "type": "binary-value",
      "instance": 1,
      "name": "Porte_Entree",
      "presentValue": 1,
      "active_text": "Active",
      "inactive_text": "Inactive"
    }
  ]
}
```

### Synchronisation automatique

Un cron Jeedom est créé automatiquement et se charge de :
1. Lire les valeurs actuelles des commandes Jeedom mappées
2. Convertir les valeurs selon le type BACnet
3. Envoyer les mises à jour au serveur BACnet

Le cron ne s'exécute que si :
- La synchronisation automatique est activée
- Le daemon BACnet est démarré
- Il y a au moins un mapping configuré

### Logs

Les logs de synchronisation sont disponibles dans les logs du plugin :
```
Synchronisation terminée : X mis à jour, Y erreurs
```

## Exemple d'utilisation

### Cas d'usage : Exposer la température d'un capteur

1. Vous avez un capteur de température connecté via le plugin Zigbee
2. Dans le mapping, sélectionnez la commande "Température" de ce capteur
3. Choisissez le type "Analog Value"
4. Instance : 1
5. Nom : "Temperature_Salon"
6. La température sera automatiquement mise à jour toutes les 15 minutes (ou selon votre configuration) sur le serveur BACnet

### Cas d'usage : Exposer l'état d'un détecteur

1. Vous avez un détecteur d'ouverture de porte
2. Dans le mapping, sélectionnez la commande "État" du détecteur
3. Choisissez le type "Binary Input"
4. Instance : 1
5. Nom : "Porte_Entree"
6. L'état (ouvert/fermé) sera synchronisé avec BACnet

## Fichiers générés

La configuration est sauvegardée dans :
- `/data/mapping_config.json` : Configuration BACnet générée
- Configuration Jeedom : `jeedom_bacnet_mapping`

## Dépannage

### Le cron ne se lance pas

Vérifiez dans **Analyse > Cron** que le cron `bacnetStackServer::cronJeedomBacnetSync` existe et est activé.

### Les valeurs ne se mettent pas à jour

1. Vérifiez que le daemon BACnet est démarré
2. Consultez les logs du plugin pour voir les erreurs
3. Vérifiez que les commandes Jeedom sont toujours valides
4. Testez une synchronisation manuelle avec le bouton "Synchroniser maintenant"

### Instance BACnet en double

Chaque objet BACnet doit avoir un numéro d'instance unique **pour son type**. Vous pouvez avoir :
- Analog Value instance 1
- Binary Value instance 1
Mais pas :
- Analog Value instance 1
- Analog Value instance 1

## Notes techniques

### Méthodes de la classe

- `applyMappingToBacnet($configData)` : Applique la configuration au serveur
- `syncJeedomToBacnet()` : Synchronise les valeurs
- `cronJeedomBacnetSync()` : Fonction cron de synchronisation
- `convertValueForBacnet($value, $bacnetType)` : Convertit les valeurs

### Actions AJAX

- `getJeedomCommands` : Récupère toutes les commandes info disponibles
- `getMappingConfig` : Charge la configuration sauvegardée
- `saveMappingConfig` : Sauvegarde la configuration
- `syncMappingNow` : Force une synchronisation immédiate
