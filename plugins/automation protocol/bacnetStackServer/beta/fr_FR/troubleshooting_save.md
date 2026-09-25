# Dépannage : Erreur de sauvegarde du serveur BACnet

## Symptôme

Lors de la tentative de sauvegarde de la configuration du serveur BACnet, vous obtenez l'erreur :

```
Exception saveBacnetServerConfig : Impossible de se connecter au serveur BACnet : Connection refused (111)
```

ou

```
Le daemon BACnet n'est pas démarré. Veuillez le démarrer avant de sauvegarder la configuration.
```

## Cause

Le daemon BACnet n'est pas démarré, donc le serveur n'écoute pas sur le port CLI (47809) pour recevoir les commandes.

## Solution

### 1. Vérifier l'état du daemon

Allez dans **Plugins > Communication > BACnet Stack Server** :

1. Dans la section **Démon**, vérifiez l'état
2. L'état doit être **OK** (vert)

### 2. Démarrer le daemon

Si le daemon n'est pas démarré :

1. Cliquez sur le bouton **Relancer**
2. Attendez quelques secondes que le daemon démarre
3. Vérifiez que l'état passe à **OK**

### 3. Vérifier les logs

Si le daemon ne démarre pas, consultez les logs :

```
Plugins > Communication > BACnet Stack Server > Configuration > Logs
```

Recherchez les erreurs potentielles :
- **Port déjà utilisé** : Un autre processus utilise le port
- **Fichier de configuration manquant** : Le fichier `--config` n'existe pas
- **Erreur de permissions** : Le daemon ne peut pas créer le PID file

### 4. Vérifier les ports

Le serveur BACnet utilise deux ports :

| Port | Usage | Description |
|------|-------|-------------|
| **47809** | CLI | Port pour les commandes (SAVE_CONFIG, QUIT, etc.) |
| **55009** | Daemon | Port pour la communication avec Jeedom |

Vérifiez que ces ports ne sont pas utilisés par un autre processus :

```bash
sudo netstat -tulpn | grep -E '47809|55009'
```

### 5. Redémarrer le daemon manuellement

Si le problème persiste, redémarrez le daemon depuis la ligne de commande :

```bash
# Arrêter le daemon
sudo systemctl stop bacnetStackServer

# Vérifier qu'il est bien arrêté
ps aux | grep bacnetStackServer

# Redémarrer le daemon
sudo systemctl start bacnetStackServer

# Vérifier l'état
sudo systemctl status bacnetStackServer
```

### 6. Vérifier la configuration du daemon

Le daemon doit être démarré avec les bons paramètres :

```bash
# Exemple de commande de démarrage
/chemin/vers/bacnetStackServer --config /chemin/vers/config.json --cli-port 47809 --daemon-port 55009
```

Paramètres importants :
- `--config` : Fichier de configuration (requis pour SAVE_CONFIG sans paramètre)
- `--cli-port` : Port CLI (défaut: 47809)
- `--daemon-port` : Port daemon (défaut: 55009)

## Vérification de la connexion

Vous pouvez tester manuellement la connexion au serveur CLI :

```bash
# Test avec netcat
echo "PING" | nc 127.0.0.1 47809

# Test avec telnet
telnet 127.0.0.1 47809
```

Si la connexion fonctionne, vous devriez voir une réponse du serveur.

## Workaround : Sauvegarder sans le bouton

Si le daemon ne démarre pas, vous pouvez sauvegarder manuellement la configuration :

### Option 1 : Via le modal de gestion

1. Ouvrez le modal "Gestion du serveur BACnet"
2. Exportez la configuration JSON
3. Sauvegardez le fichier localement

### Option 2 : En ligne de commande

Si vous avez accès à la ligne de commande du serveur :

```bash
# Envoyer la commande SAVE_CONFIG directement
echo "SAVE_CONFIG /chemin/vers/backup.json" | nc 127.0.0.1 47809
```

## Prévention

### Configuration automatique

Pour éviter ce problème, configurez le daemon pour démarrer automatiquement :

1. Allez dans **Plugins > BACnet Stack Server > Configuration**
2. Section **Démon**
3. Activez **Gestion automatique**
4. Définissez **Démarrage automatique**

### Surveillance

Créez un scénario Jeedom pour surveiller l'état du daemon :

```javascript
// Vérifier toutes les heures si le daemon est actif
if (getPluginDaemonInfo('bacnetStackServer')['state'] !== 'ok') {
    // Alerter l'administrateur
    cmd::byString('#[Mail][Notification][Message]#')->execCmd([
        'title' => 'BACnet daemon arrêté',
        'message' => 'Le daemon BACnet Stack Server est arrêté'
    ]);
    
    // Optionnel : Redémarrer automatiquement
    // bacnetStackServer::deamon_start();
}
```

## Erreurs courantes

### "ERR no config file specified"

Le serveur n'a pas de fichier de configuration par défaut (pas de `--config` au démarrage).

**Solution** : Spécifiez un chemin dans la configuration du plugin :
```
Plugins > BACnet Stack Server > Configuration > Chemin sauvegarde serveur
```

### "ERR failed to save to /path/to/file.json"

Le serveur ne peut pas écrire dans le fichier (permissions, disque plein).

**Solution** : 
1. Vérifiez les permissions du dossier cible
2. Vérifiez l'espace disque disponible
3. Utilisez un chemin accessible en écriture

### Timeout de connexion

La connexion au port 47809 expire après 5 secondes.

**Solution** :
1. Vérifiez que le serveur n'est pas surchargé
2. Augmentez le timeout dans le code si nécessaire

## Logs utiles

Les logs contiennent des informations précieuses :

```
[2025-11-13 14:30:00] Configuration du serveur sauvegardée : /path/to/file.json
[2025-11-13 14:30:01] Exception saveBacnetServerConfig : Connection refused (111)
[2025-11-13 14:30:02] Le daemon BACnet n'est pas démarré
```

Emplacements des logs :
- **Plugin** : `/var/www/html/log/bacnetStackServer`
- **Daemon** : Spécifié dans la configuration du daemon

## Support

Si le problème persiste après avoir suivi ces étapes :

1. Collectez les logs du plugin et du daemon
2. Notez la version du plugin et de Jeedom
3. Créez un ticket sur GitHub avec ces informations
4. Joignez la sortie de `ps aux | grep bacnetStackServer`
5. Joignez la sortie de `netstat -tulpn | grep -E '47809|55009'`
