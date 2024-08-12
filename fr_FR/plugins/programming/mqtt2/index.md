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

Pour commencer la configuration du plugin, il est nécessaire de sélectionner le mode de connexion au broker parmi les 3 choix possibles :

- **Broker local** : Le broker Mosquitto est installé directement sur la machine qui héberge Jeedom *(mode par défaut)*.

- **Broker local Docker** : Le broker Mosquitto est installé et configuré automatiquement dans un conteneur Docker à l'aide du plugin officiel **Docker Management**.

  >**INFORMATION**
  >
  >Dans ce mode, l'installation peut durer plusieurs minutes.

- **Broker distant** : Dans le cas de l'utilisation d'un broker déjà existant, il suffit de renseigner son adresse *(exemple : `mqtt://192.168.1.10:1883`)*.

Une fois le broker Mosquitto installé *(si nécessaire)*, vous pouvez passer à la suite de la configuration :

- **Authentification**: Vous pouvez spécifier des utilisateurs/mot de passe pour la connexion :

  - En mode local vous pouvez renseigner un `nom d'utilisateur:mot de passe` par ligne, chaque couple d'identifiant aura un accès valide au broker. S'il n'existe aucun identifiant, Jeedom en crée un automatiquement.

  - En mode standalone il suffit de mettre sur la première ligne le couple `identifiant:mot de passe` pour Jeedom (exemple : si le nom d'utilisateur est `jeedom` et le mot de passe `mqtt`, il faut renseigner `jeedom:mqtt`).

  >**IMPORTANT**
  >
  > L'authentification est obligatoire en mode local. Suite à l'ajout il faut redémarrer Jeedom pour que cela soit pris en compte.

- **Topic racine Jeedom** : Sujet racine pour envoyer une commande à Jeedom ou sur lequel il renvoi les évènements. Attention il n'est possible de mettre que 1 ou 2 niveaux maximum.

- **Transmettre tous les évènements** : Cocher la case pour envoyer tous les évènements des commandes Jeedom sur MQTT.

- **Template de publication** : Mise en forme de la publication des évènements Jeedom *(tags possibles : `#value#`, `#humanName#`, `#unit#`, `#name#`, `#type#`, `#subtype#`)*.

- **Plugins abonnés** : Liste des plugins abonnés au plugin MQTT Manager sous la forme `plugin(topic)`.

## Configuration des équipements

Il est possible de créer des équipements MQTT directement dans le plugin.

Il faut indiquer le topic racine de l'équipement *(`test` par exemple)*, attention le topic racine ne peux pas avoir plus de 2 niveaux (exe `niveau1/niveau2`) ensuite selon le type de commandes :

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

Le plugin peut faire de la découverte auto de plusieurs type de module. Pour cela il vous suffit juste d'autoriser la découverte auto sur la page principale du plugin et de relancer le démon.

>**IMPORTANT**
>
>Pour les modules de type tasmota il faut absolument que la configuration du full topic soit `%topic%/%prefix%/`


# Transmettre des informations entre deux jeedoms par MQTT

Il est possible grace au plugin de transmettre des commandes entre deux Jeedom (ce systeme est voué a remplacer jeelink), voila comment le configurer : 

- **Sur le jeedom source il faut** :
  - Dans la configuration du plugin mqtt manager, configurer le champs "Topic racine Jeedom", par défaut c'est jeedom, il est conseillé de mettre une valeur unique par Jeedom (ex : jeedom_salon)
  - Ensuite vous pouvez soit cocher la case "Transmettre tous les évènements" (toujours dans la configuration du plugin mqtt manager), c'est pas le plus recommander car cela va envoyer tous les équipements vers le jeedom cible. Le mieux étant d'aller sur les équipements que vous voulez transmettre, dans la configuration avancée de l'équipement (bouton en haut a droite sur la page de configuration de l'équipement) puis dans "Informations complémentaires" de cocher "Transmettre l'équipement en MQTT"
- **Sur le jeedom cible il faut** : 
  - Sans la configuration du plugin mqtt manager, configurer le champs "Topic des Jeedom liée" en mettant la valeur de "Topic racine Jeedom" du jeedom source. Vous pouvez mettre plusieurs Jeedom source en séparant ceux ci par des ,. Attention il faut faire très attention ici, il ne faut surtout pas avoir la meme chose pour "Topic racine Jeedom" sur les jeedoms. Ce champs est l'identifiant unique du jeedom il faut donc absolument avoir des valeurs différente.
  - Dans plugin -> programmation -> Mqtt manager bien activer l'auto-découverte (inactive par défaut)

Ensuite vous avez juste à retourner sur le jeedom toujours sur la configuration du plugin et faire "Envoyer la découverte"

>**IMPORTANT**
>
>Cette configuration part du principe que les jeedoms sont connecté sur le meme brocker mosquitto. Si vous ne pouvez pas le faire il faut alors configurer un des deux mosquitto pour qu'il envoi les valeurs des topic voulu vers un autre mosquitto (voir chapitre suivant)

>**IMPORTANT**
>
>Si vous changé la valeur du champs "Template de publication" (vide par défaut) alors l'auto découverte ne créera pas les bonnes commandes, c'est a vous d'adapter la configuration dans ce cas


# Liée deux mosquitto différent 

Il est possible de lier des topics entre plusieurs mosquitto, voilà la configuration a ajouter dans mosquitto. La configuration n'est a faire que sur un des brocker mosquitto :

````
connection #NOM_CONNEXION#
address #REMOTE_ADDRESS#:#REMOTE_PORT#
topic # both 0 #LOCAL_TOPIC#/ #REMOTE_TOPIC#/
cleansession true
notifications false
remote_clientid #REMOTE_CLIENT_ID#
remote_username #REMOTE_USERNAME#
remote_password #REMOTE_PASSWORD#
local_username #LOCAL_USERNAME#
local_password #LOCAL_PASSWORD#
start_type automatic
try_private true
bridge_insecure true
bridge_tls_version tlsv1.3
````

Exemple vous voulez envoyer depuis jeedom_2 des équipements dans jeedom_1 en ayant : 
- jeedom_1 : 
  - ip : 192.168.1.45
  - topic racine : jeedom_1
  - topic liée : jeedom_2
  - authentification : jeedom:password_1
- jeedom_2
  - topic racine : jeedom_1
  - authentification : jeedom:password_2

Voila la configuration qu'il faut ajouter dans le jeedom_2 (parametre mosquito) : 

````
connection jeedom_1
address 192.168.1.45:1883
topic # both 0 jeedom_2/ jeedom_2/
cleansession true
notifications false
remote_clientid jeedom_2
remote_username jeedom
remote_password password_1
local_username jeedom
local_password password_2
start_type automatic
try_private true
bridge_insecure true
bridge_tls_version tlsv1.3
````

>**NOTE**
>
> - `#NOM_CONNEXION#` : peut être ce que vous voulez et n'a aucune importance. Vous pouvez par exemple faire nom_jeedom_source-nom_jeedom_cible
> - `#REMOTE_CLIENT_ID#` : n'a pas non plus d'importance il faut juste mettre une chaine unique
> - `#LOCAL_TOPIC#` : nom du topic local souvent ça sera "Topic racine Jeedom" du jeedom local
> - `#REMOTE_TOPIC#` : nom du topic local souvent ça sera "Topic racine Jeedom" du jeedom distant

>**IMPORTANT**
>
> Dans jeedom les identifiants (`username` et `password`) sont disponibles sur la page de configuration du plugin dans "Authentification" sous la forme `username`:`password`

# FAQ

>**Suite a une mise à jour des packages système (apt) ou à un unattended upgrades plus rien de marche**
>
>La mise à jour du package mosquitto remet par défaut le fichier de service et donc mosquitto ne pointe plus vers le bon fichier de configuration. Pour corriger cela c'est très simple il suffit de relancer l'installation de mosquitto depuis la page de configuration du plugin.
