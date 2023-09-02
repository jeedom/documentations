# Plugin MQTT Manager

## Description

Le plugin **MQTT Manager** permet de connecter Jeedom à un broker MQTT existant ou d'en installer un en local ou sous Docker à l'aide du plugin **Docker Management**.

Ce plugin est en mesure de cumuler plusieurs fonctionnalités :

- Servir de socle aux autres plugins pour tout ce qui concerne MQTT.

- Servir en mode "standalone" par la création de commandes action/info pour l'envoi/réception de messages sur MQTT.

- Piloter Jeedom depuis un autre équipement MQTT *(Nodered par exemple)*. Le plugin peut aussi bien piloter des commandes que retransmettre tous les évènements Jeedom sur MQTT.

# Configuration

Après installation et activation du plugin, l’installation des dépendances devrait débuter sauf si la gestion automatique a été désactivée au préalable. Dans ce cas, il faudra cliquer sur le bouton **Relancer** pour initier cette phase d’installation.

## Configuration du plugin

Pour commencer la configuration du plugin, il est nécessaire de sélectionner le mode de connexion au broker parmis les 3 choix possibles :

- **Broker local** : Le broker Mosquitto est installé directement sur la machine qui héberge Jeedom *(mode par défaut)*.

- **Broker local Docker** : Le broker Mosquitto est installé et configuré automatiquement dans un conteneur Docker à l'aide du plugin officiel **Docker Management**.

  >**INFORMATION**
  >
  >Dans ce mode, l'installation peut durer plusieurs minutes.

- **Broker distant** : Dans le cas de l'utilisation d'un broker déjà existant, il suffit de renseigner son adresse *(exemple : `mqtt://192.168.1.10:1883`)*.

Une fois le broker Mosquitto installé *(si nécessaire)*, vous pouvez passer à la suite de la configuration :

- **Authentification**: Vous pouvez spécifier des utilisateurs/mot de passe pour la connexion :

  - en mode local vous pouvez renseigner un `nom d'utilisateur:mot de passe` par ligne, chaque couple d'identifiant aura un accès valide au broker. S'il n'existe aucun identifiant, Jeedom en crée un automatiquement.

  - en mode standalone il suffit de mettre sur la première ligne le couple `identifiant:mot de passe` pour Jeedom (exemple : si le nom d'utilisateur est `jeedom`et le mot de passe `mqtt`, il faut renseigner `jeedom:mqtt`).

  >**IMPORTANT**
  >
  >L'authentification est obligatoire en mode local. Il faut aussi suite a l'ajout redemarrer jeedom pour que ca soit pris en compte.

- **Topic racine Jeedom** : Sujet racine pour envoyer une commande à Jeedom ou sur lequel il renvoit les évènements. Attention il n'est possible de mettre que 1 ou 2 niveaux maximum.

- **Transmettre tous les évènements** : Cocher la case pour envoyer tous les évènements des commandes Jeedom sur MQTT.

- **Template de publication** : Mise en forme de la publication des évènements Jeedom *(tags possibles : `#value#`, `#humanName#`, `#unit#`, `#name#`, `#type#`, `#subtype#`)*.

- **Plugins abonnés** : Liste des plugins abonnés au plugin MQTT Manager sous la forme `plugin(topic)`.

## Configuration des équipements

Il est possible de créer des équipements MQTT directement dans le plugin.

Il faut indiquer le topic racine de l'équipement *(`test` par exemple)*, ensuite selon le type de commandes :

- **Commandes info** : il suffit d'indiquer le topic complet.
  >Pour exemple, si vous mettez `toto/1`, tous les messages sur le topic `test/toto/1` seront automatiquement écrits sur la commande en question. Le système est capable de gérer les champs de type json, dans ce cas il faut mettre `toto/1/key1` ou `toto/1/key1/key2` pour descendre d'un niveau.

- **Commandes action** : il suffit d'indiquer le topic et le message.
  >Pour exemple, si vous mettez `toto/2` avec comme message `plop` chaque clic sur la commande enverra le message `plop` sur le topic `test/toto/2`.

  >**INFORMATION**
  >
  >Dans les commandes de type action vous pouvez utiliser les tags `#slider#`, `#color#`, `#message#` ou `#select#` qui seront automatiquement remplacés par leur valeur lors de l'exécution de la commande *(selon son sous-type)*. D'autre part, si le message est de type `json` il faut lui ajouter le préfixe `json::`.

>**IMPORTANT**
>
>Le topic `jeedom` est reservé (cela peut se changer dans la configuration), il ne faut donc rien envoyer d'autre dessus que des commandes pour piloter jeedom


# Jeedom via MQTT

Il est possible de piloter Jeedom à travers MQTT. Ci-après les différents topics possibles en partant du principe que le topic racine est `jeedom` *(à adapter si vous avez modifié la configuration par défaut)* :

- `jeedom/cmd/set/#cmd_id#` : permet d'exécuter la commande portant l'id `#cmd_id#`. Vous pouvez passer les paramètres dans le message sous forme de champs `json` en fonction du sous-type de la commande, par exemple:
  - **défaut** : aucun paramètre.
  - **curseur** : `{slider : 50}`.
  - **message** : `{title : "coucou", message : "salut ca va ?"}`.
  - **couleur** : `{color : "#96c927"}`.
  - **liste** : `{select : 1}`.
  - **commandes info** : vous pouvez directement envoyer une valeur ou également spécifier une date de mise à jour *(facultatif)* `{value : "coucou", datetime : "2021-12-12 10:30:00" }`.

- `jeedom/cmd/get/#cmd_id#` : demande de la valeur de la commande portant l'id `#cmd_id#`. Jeedom renverra `jeedom/cmd/value/#cmd_id#` avec en message la valeur de la commande.

- `jeedom/cmd/event/#cmd_id#` : évènement sur la commande portant l'id `#cmd_id#` avec en message un `json` contenant différentes informations dont la valeur de la commande.

# Désinstaller le broker Mosquitto

2 options possibles pour désinstaller le broker Mosquitto présent localement sur la machine :

- **Broker sous Docker** : Il faut tout d'abord utiliser la commande **Supprimer** de l'équipement `mqtt2_mosquitto` issu du plugin **Docker Management** *(Plugins > Programmation > Docker Management)*. Vous pouvez ensuite supprimer cet équipement au complet.

- **Broker local** : Il faut alors utiliser le bouton rouge **Désinstaller Mosquitto** depuis la page de configuration générale du plugin.


# Découverte auto (discovery)

Le plugin peux faire de la decouverte auto de plusieurs type de module. Pour cela il vous suffit juste d'autoriser la decouverte auto sur la page principale du plugin et de relancer le demon.

>**IMPORTANT**
>
>Pour les modules de type tasmota il faut absolument que la configuration du full topic soit `%topic%/%prefix%/`