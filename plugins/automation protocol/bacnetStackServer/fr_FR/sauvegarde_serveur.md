# Sauvegarde de la configuration du serveur BACnet

## Principe

Depuis la mise à jour du serveur BACnet, **la sauvegarde automatique a été désactivée** pour éviter la surcharge.

La sauvegarde se fait maintenant **sur demande** via la commande `SAVE_CONFIG`.

## Utilisation dans le plugin

### 1. Bouton de sauvegarde manuelle

Un bouton "Sauvegarder config serveur" est disponible sur la page principale du plugin.

Il permet de déclencher une sauvegarde à tout moment.

### 2. Configuration du chemin de sauvegarde

Dans la configuration du plugin (`Configuration > Plugins > BACnet Stack Server`) :

- **Chemin sauvegarde serveur** : `data/saveServer.json` (par défaut)

Ce chemin est utilisé si vous appelez la sauvegarde avec un chemin spécifique.

### 3. Sauvegarde automatique après modification

#### Méthode recommandée : `applyJsonAndSave()`

```php
// Créer ou modifier des objets BACnet
$eqLogic = bacnetStackServer::byId($id);
$config = json_encode($myConfig);

// Appliquer ET sauvegarder automatiquement
$eqLogic->applyJsonAndSave($config);
```

Cette méthode :
1. Applique la configuration au serveur BACnet
2. Sauvegarde automatiquement si l'application a réussi
3. Log les résultats

#### Méthode classique (contrôle manuel)

```php
// Appliquer sans sauvegarder
$eqLogic->applyJsonForEq($config);

// Puis sauvegarder manuellement
bacnetStackServer::saveBacnetServerConfig();
```

### 4. Sauvegarder dans un fichier spécifique

```php
// Créer un backup avec timestamp
$backupFile = 'data/backups/config-' . date('YmdHis') . '.json';
bacnetStackServer::saveBacnetServerConfig($backupFile);
```

### 5. Sauvegarde dans le fichier par défaut du serveur

```php
// Sans paramètre = sauvegarde dans le fichier spécifié avec --config au démarrage
$result = bacnetStackServer::saveBacnetServerConfig();

if ($result['success']) {
    echo "Sauvegardé dans : " . $result['file'];
} else {
    echo "Erreur : " . $result['message'];
}
```

## Réponses possibles

| Réponse | Signification |
|---------|---------------|
| `OK saved to /path/to/file.json` | Sauvegarde réussie |
| `ERR failed to save to /path/to/file.json` | Échec de sauvegarde (permissions, disque plein) |
| `ERR no config file specified` | Aucun fichier par défaut et aucun chemin fourni |

## Format de retour

```php
array(
    'success' => true,              // bool
    'message' => 'Configuration saved successfully',  // string
    'file' => '/absolute/path/to/file.json'  // string|null
)
```

## Bonnes pratiques

### ✅ À faire

1. **Sauvegarder après chaque modification importante** :
   ```php
   // Après ajout/modification d'objets
   $this->modifyBacnetObjects();
   bacnetStackServer::saveBacnetServerConfig();
   ```

2. **Utiliser la méthode `applyJsonAndSave()`** pour les opérations courantes

3. **Créer des backups avant modifications critiques** :
   ```php
   // Backup avant modification
   bacnetStackServer::saveBacnetServerConfig('data/backups/pre-update.json');
   
   // Faire les modifications
   $eqLogic->applyJsonAndSave($newConfig);
   ```

4. **Vérifier le retour de la sauvegarde** :
   ```php
   $result = bacnetStackServer::saveBacnetServerConfig();
   if (!$result['success']) {
       log::add('bacnetStackServer', 'error', 'Sauvegarde échouée : ' . $result['message']);
   }
   ```

### ❌ À éviter

1. **Ne pas sauvegarder en boucle** (surcharge inutile)
2. **Ne pas oublier de sauvegarder après modifications** (risque de perte en cas de redémarrage)

## Exemple complet

```php
class MonController {
    
    public function createAndSaveBacnetObject() {
        // 1. Préparer la configuration
        $config = [
            'deviceId' => 123,
            'deviceName' => 'MyDevice',
            'objects' => [
                [
                    'type' => 'analog-value',
                    'instance' => 1,
                    'name' => 'Temperature',
                    'presentValue' => 21.5
                ]
            ]
        ];
        
        // 2. Créer un backup de sécurité
        $backupFile = 'data/backups/before-' . date('YmdHis') . '.json';
        $backupResult = bacnetStackServer::saveBacnetServerConfig($backupFile);
        
        if (!$backupResult['success']) {
            throw new Exception('Impossible de créer le backup');
        }
        
        log::add('bacnetStackServer', 'info', 'Backup créé : ' . $backupResult['file']);
        
        // 3. Appliquer la nouvelle configuration avec sauvegarde auto
        $eqLogic = bacnetStackServer::byId($this->eqLogicId);
        $result = $eqLogic->applyJsonAndSave(json_encode($config));
        
        if ($result) {
            log::add('bacnetStackServer', 'info', 'Objet BACnet créé et sauvegardé');
            return true;
        } else {
            log::add('bacnetStackServer', 'error', 'Échec de la création');
            
            // Optionnel : restaurer le backup en cas d'erreur
            // $this->restoreBackup($backupResult['file']);
            
            return false;
        }
    }
}
```

## Logs

Les opérations de sauvegarde sont loggées dans le log `bacnetStackServer` :

```
[2025-11-13 14:30:00] Configuration du serveur sauvegardée : /path/to/file.json
[2025-11-13 14:30:01] Configuration appliquée et sauvegardée : /path/to/file.json
```

## Dépannage

### Erreur : "no config file specified"

Le serveur n'a pas de fichier par défaut (pas de `--config` au démarrage).

**Solution** : Spécifier un chemin :
```php
bacnetStackServer::saveBacnetServerConfig('data/config.json');
```

### Erreur : "failed to save"

Problème d'écriture (permissions, disque plein).

**Solution** : Vérifier les permissions du dossier cible.

### La sauvegarde ne se fait pas

Vérifier que le daemon est démarré :
```php
$info = bacnetStackServer::deamon_info();
if ($info['state'] !== 'ok') {
    throw new Exception('Le daemon n\'est pas démarré');
}
```
