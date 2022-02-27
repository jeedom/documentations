# Plugin Velux MQTT

Le plugin **Velux MQTT** va vous permettre de piloter vos velux dans Jeedom par l'intermédiaire de l'interface VELUX KLF 200 et d'en contrôler la position, la montée ou la descente, et l'arrêt.

Les velux doivent prélablement être appairés à l'interface VELUX KLF 200 et celle-ci doit être connectée en éthernet sur le même réseau local que Jeedom *([voir la documentation du KLF 200](https://www.domadoo.fr/fr/index.php?controller=attachment&id_attachment=2287){:target="\_blank"})*.

# Configuration

Comme tout plugin Jeedom, le plugin **Velux MQTT** doit être activé après l'installation.

## Gestion des dépendances

Le plugin **Velux MQTT** s'appuie sur les plugins officiels **Docker Management** et **MQTT Manager** pour fonctionner. Si ce n'était pas déjà le cas, ces 2 plugins seront installés lors de l'installation des dépendances.

>**INFORMATION**
>
>L'installation des dépendances est suceptible de durer plusieurs minutes en fonction des configurations.

## MQTT Manager

Un broker MQTT doit être configuré et actif dans le plugin **MQTT Manager** afin de transmettre et récupérer les positions des velux. Référez-vous à la documentation du plugin pour utiliser un broker existant ou pour en créer un en local dans Jeedom.

Dès que le démon du plugin **MQTT Manager** sera actif, le plugin **Velux MQTT** sera en mesure de récupérer automatiquement les informations de connexion au broker MQTT.

## Configuration du plugin

La configuration du plugin consiste à renseigner les informations de connexion à l'interface VELUX KLF 200 :

- **Adresse IP** : L'adresse ip du KLF200 sur le réseau local.
- **Mot de passe WiFi** : Le mot de passe WiFi du KLF200 *(inscrit à l'arrière)*.

## Installation du conteneur Velux MQTT

Une fois les informations de connexion à l'interface VELUX KLF 200 renseignées et sauvegardées, cliquez sur le bouton **Installer VELUX MQTT** pour vérifier que tout est en ordre et procéder à la création du conteneur **Velux MQTT** dans le plugin **Docker Management**.

A l'issue de la procédure, les statuts du docker **Velux MQTT** doivent être affichés en vert avec les mentions *"running"* et *"CONNECTED"*. Dans le cas contraire, vérifiez les logs de l'équipement **Velux MQTT** dans le plugin **Docker Management**.

# Equipements

Pour accéder aux différents équipements Velux, dirigez-vous vers le menu **Plugins → Protocole domotique → Velux MQTT**.

Le bouton **Synchroniser** permet de créer automatiquement les équipements correspondant aux velux recensés sur l'interface KLF 200 dans Jeedom.

# Commandes

Chaque équipement **Velux MQTT** dispose de ces commandes :

- **Etat** : position actuelle du velux.

>**ASTUCE**
>
>Par défaut, l'interface KLF 200 fournit un pourcentage de fermeture *(100% = fermé)* que le plugin transforme en pourcentage d'ouverture. Si vous voulez revenir au fonctionnement par défaut, il suffit de décocher la case **Inverser** de la commande **Etat**.

- **Position** : Commande de positionnement du velux.
- **Ouvrir** : Commande d'ouverture du velux.
- **Stop** : Commande d'arrêt du velux.
- **Fermer** : Commande de fermeture du velux.
