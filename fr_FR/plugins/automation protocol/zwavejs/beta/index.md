# Plugin Z-Wave JS

Le plugin Z-wave JS permet **le contrôle total du protocole domotique Z-Wave dans Jeedom** en se basant sur le travail effectué autour de la très réputée librairie **Z-Wave JS UI**.

Le plugin Z-wave JS fiabilise et sécurise les transmissions par l'utilisation du **protocole MQTT**, offrant, par la même occasion, des possibilités de gestion avancée de leur réseau Z-Wave aux utilisateurs les plus experts.

>**IMPORTANT**
>
>Ce plugin est compatible Debian 11 "Bullseye" et est, par conséquent, le plugin officiel à privilégier pour gérer votre réseau Z-Wave dans Jeedom.

# Configuration

Après installation et activation du plugin, l'installation des dépendances devrait débuter sauf si la gestion automatique a été désactivée au préalable. Dans ce cas, il faudra cliquer sur le bouton **Relancer** pour initier cette phase d'installation. Le plugin officiel **MQTT Manager** faisant partie des dépendances nécessaires, il sera automatiquement installé et activé lors de l'opération si ce n'est pas déjà le cas.

Le reste des dépendances consiste au téléchargement, à la compilation et à la configuration de la librairie **Z-Wave JS UI**.

>**IMPORTANT**
>
>La première installation des dépendances incluant une phase de compilation, elle est susceptible de durer plusieurs dizaines de minutes en fonction de votre configuration matérielle. Les mises à jour des dépendances seront bien plus rapides à installer par la suite.

## Configuration du plugin

Concernant la configuration du plugin, le point primordial est la bonne sélection du **port du contrôleur Z-Wave** correspondant à l'interface physique sur laquelle le contrôleur est connecté.

Les autres paramétrages possibles sont :

- **Appliquer le jeu de configuration recommandé lors de l’inclusion** : applique directement le jeu de configuration recommandé par l’équipe Jeedom lors de l'inclusion d'un nouveau module *(conseillé)*.

- **Suppression automatique des périphériques exclus** : permet de supprimer automatiquement les périphériques exclus du réseau Z-Wave si cochée. Sinon, les équipements sont conservés dans Jeedom même s’ils ont été exclus du réseau. L’équipement devra être alors supprimé manuellement ou réutilisé en lui assignant un nouvel identifiant Z-Wave.

- **Préfixe** : permet de spécifier le préfixe à utiliser dans MQTT *(`zwave` par défaut)*.

### Clés de sécurité

Les clés de sécurité sont à conserver précieusement. Si vous perdez ces clés, les périphériques inclus en mode sécurisé devront être réappairés. Les clés peuvent être spécifiées, si les champs sont vides ou invalides le plugin en générera et vous pourrez les visualiser par la suite.

>**INFORMATION**
>
>Si votre contrôleur a été utilisé avec le plugin Openzwave et que vous aviez inclus des modules en mode sécurisé, la clé S0 est : `0102030405060708090A0B0C0D0E0F10`.

## MQTT Manager

Comme expliqué en préambule, le plugin Z-Wave JS nécessite la prise en charge du protocole MQTT pour communiquer, le plugin officiel **MQTT Manager** va donc servir de support à ces communications.

Plusieurs cas de figures sont envisageables :

- **Vous n'utilisez pas encore de broker MQTT** : Dans ce cas vous n'avez rien à faire. Les plugins **Z-Wave JS** et **MQTT Manager** vont échanger les informations et configurations nécessaires automatiquement *(un broker `Mosquitto` sera notamment installé localement sur la machine)*.

- **Vous utilisez déjà le plugin Z-Wave JS** : Aucune intervention n'est nécessaire, le plugin Z-Wave JS va récupérer automatiquement les informations de connexion au broker MQTT.

- **Vous utilisez déjà un broker MQTT via un autre plugin que MQTT Manager** : Dans cette situation, il faut sélectionner le mode **broker distant** et indiquer les informations de connexion *(adresse et authentification)* dans la configuration du plugin MQTT Manager.

- **Vous souhaitez utiliser un broker MQTT sous Docker** : Il suffit alors de sélectionner le mode **broker local docker** dans la configuration du plugin MQTT Manager avant d'installer `Mosquitto`.

Dans tous les cas, le démon du plugin MQTT Manager doit être démarré avant de pouvoir passer à la suite. Autrement un message vous avertira, empêchant par la même le démarrage du démon Z-Wave JS.

## Plugin OpenZwave

Il est également important d'aborder le cas de la présence du plugin OpenZwave en parallèle du plugin Z-Wave JS, le temps de basculer de l'un à l'autre par exemple *(Voir paragraphe [**Migration depuis OpenZwave**](#migration-depuis-openzwave))*.

Tout d'abord, il faut savoir qu'il n'existe strictement aucun risque au fait d'utiliser les plugins Z-Wave JS et OpenZwave en parallèle. Même en cas de difficulté avec le plugin Z-Wave JS, il suffira de stopper son démon et de redémarrer celui du plugin OpenZwave pour retrouver un réseau Z-Wave exactement identique et fonctionnel.

Il faut donc arrêter la gestion automatique puis stopper le démon du plugin OpenZwave pour être en mesure de démarrer le démon du plugin Z-Wave JS. A nouveau, dans le cas contraire, un message vous avertira, empêchant par la même le démarrage du démon Z-Wave JS.

>**IMPORTANT**
>
>Ne supprimez aucun équipement du plugin OpenZwave de manière prématurée même s'il est désactivé le temps des tests!

## 1er démarrage du démon

Sauf message contraire, le démon Z-Wave JS peut maintenant être démarré. Sinon, un message doit s'afficher sur la page de configuration du plugin afin d'identifier la raison du blocage.

Si vous utilisez le plugin Z-Wave JS avec un contrôleur vierge, le réseau Z-Wave est immédiatement démarré et disponible, prêt pour les inclusions de modules.

Dans le cas d'une utilisation avec un contrôleur déjà inclus au sein d'un réseau Z-Wave, il faut laisser travailler le plugin qui va remonter automatiquement les équipements dans Jeedom au fur et mesure des interviews de modules. La première découverte totale d’un réseau Z-Wave est donc susceptible d’être longue en fonction de la typologie de modules utilisée et de leur fréquence de communication.

Les modules font leur apparition en deux étapes :
- Tout d'abord avec leur `node id` sans image et sans identification.
- Ils sont ensuite identifiés dans un second temps.

Une fois que tous les modules sur secteur sont initiés et donc identifiés, il est important de réveiller les modules sur piles ou d'attendre leur réveil. Ce n'est qu'à partir de ce moment que l'on peut considérer le réseau comme étant totalement démarré.

>**INFORMATION**
>
>Contrairement au plugin OpenZwave, après cette première phase d'interview, les redémarrages du réseau sont instantanés par la suite.

## Configuration des modules

### Noeud

### Valeurs

### Groupe

# Outils

## Inclusion

## Exclusion

## Synchroniser

## Réseau Z-Wave

### Résumé

### Actions

### Statistiques

### Graphique du réseau

### Table de routage

## Santé

## Statistiques

# Compatibilité

# Dépannage et diagnostic

## Migration depuis OpenZwave

Avant d'envisager de basculer définitivement du plugin OpenZwave au plugin Z-Wave JS, il faut impérativement s'assurer que l'ensemble des modules du réseau est totalement pris en charge. Cette étape peut facilement prendre plusieurs jours le temps de valider l'ensemble des possibilités et des cas de figure.

Ensuite, une fois certain que le plugin OpenZwave n'est plus indispensable, vous pouvez utiliser l'outil de [**remplacement d'équipements et de commandes**](https://doc.jeedom.com/fr_FR/core/4.3/replace){:target="\_blank"} du core pour migrer rapidement et facilement vos équipements existants sur le nouveau plugin.

## Module non ou mal reconnu

## Remplacer un module défaillant
