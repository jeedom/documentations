# Plugin MQTT

## Description

Le plugin permet de connecter Jeedom à un brocker MQTT existant ou d'en installer un (en docker à l'aide du plugin Docker). Ce plugin peut:

- servir de socle à d'autre plugin pour tous ce qui passage par MQTT
- servir en mode "standalone" : vous pouvez créer des commandes (info/action) pour envoyer/recevoir des messages sur MQTT
- servir pour piloter jeedom depuis un autre équipements MQTT (comme Nodered par exemple) : le plugin peut aussi bien piloter des commandes Jeedom que retransmettre tous les évènements de Jeedom sur MQTT

## Installation

Il y a 2 mode d'installations:

- mode local : Jeedom va installer Mosquitto à l'aide du plugin docker (en container donc), il s'occupe de la configuration (en particulier de l'authentification). Attention l'installation peut prendre plusieurs dizaines de minutes
- mode distant : vous avez juste a indiquer a Jeedom l'adresse du brocker MQTT (ex : mqtt://192.168.1.10:1883)

Vous pouvez spécifier des utilisateurs/mot de passe pour la connexion:

- en mode local vous pouvez mettre un nom d'utilisateur:mot de passe par ligne, chaque couple d'identifiant aura un accès valide au brocker. Par defaut si il n'y a aucun identifiant jeedom ajoute automatiquement un identifiant
- en mode standalone il suffit de mettre sur la premiere ligne le couple identifiant/mot de passe pour jeedom, séparé par : (ex si le nom d'utilisateur est `jeedom`et le mot de passe `mqtt` il faut mettre `jeedom:mqtt`)

>**IMPORTANT**
>
>En mode local il n'est pas possible de ne pas avoir d'authentification

- "Topic racine Jeedom" : topic racine pour envoyer une commande à Jeedom ou sur lequel il renvoi les évènements
- "Transmettre tous les évènements des commandes" : indique si Jeedom doit envoyer sur le bus MQTT tous les évènements des commandes

## Equipement

Il est possible de créer des équipements MQTT directement le plugin, attention dans ce cas aucune automatisation ou template de prévu vous devez tout faire à la main.

Il faut indiqué le topic racine (ex `test`) pour l'équipement ensuite dans les commandes il suffit pour:

- les commandes de type info : d'indiqué le topic complet, ex si vous mettez `toto/1`, tous les messages sur le topic `test/toto/1` seront automatiquement écrit sur la commande en question. Le systeme est capable de gerer les champs de type json dans ce cas il faut mettre `toto/1#key1` ou `toto/1#key1::key2` pour descendre d'un niveau. Attention il faut absolument que l'arrivé soit une valeur, exemple si vous avez `{"k1":"v1","k2":{"k2.2":"v2.2"},"k3":["v3.1"]}`, vous pouvez mettre `toto/1#k1` ou `toto/1#k2:k2.2` ou `toto/1#k3:0`. Mais `toto/1#k2` n'est pas possible.
- les commande de type action : d'indiqué le topic et le message, ex si vous mettez `toto/2` avec comme message `plop` chaque clique sur la commande enverront le message `plop` sur le topic `test/toto/2`

>**NOTE**
>
>Dans les commandes de type action vous pouvez utiliser les tag `#slider#`, `#color#`, `#message#` ou `#select#` qui seront automatiquement remplacé en fonction du type de la commande par leur valeur lors de l'exécution de la commande

## Utilisation de Jeedom à travers MQTT

Il est possible de piloter Jeedom à travers MQTT, voici les topics (les exemples partent du principe que le topic racine vaut `jeedom`, il faut donc adapter si vous l'avez changé):

- `jeedom/cmd/set/#cmd_id#` : permet d'exécuter la commande `#cmd_id#`, vous pouvez passer les paramètres dans le message sous forme de champs json en fonction du sous type de la commande, par exemple:

  - défaut : aucun paramètre
  - curseur : `{slider : 50 }`
  - message : `{title : "coucou", message : "salut ca va ?" }`
  - couleur : `{color : "#96c927" }`
  - liste : `{select : 1 }`
  - commande de type info : vous pouvez soit passer la valeur directement soit en json faire `{value : "coucou", datetime : "2021-12-12 10:30:00" }`, `datetime` est optionnel
- `jeedom/cmd/get/#cmd_id#` : demande de la valeur de la commande `#cmd_id#` à jeedom, celui-ci vous renverra `jeedom/cmd/value/#cmd_id#` avec en message la valeur de la commande
- `jeedom/cmd/event/#cmd_id#` : évènement sur la commande `#cmd_id#` avec en message un json contenant différente information dont la valeur de la commande
