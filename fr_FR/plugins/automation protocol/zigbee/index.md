# Plugin Zigbee

Le plugin Zigbee permet de communiquer avec la pluspart des équipements Zigbee existants. Il se base sur le (super) projet Zigpy qui est compatible avec les clef zigbee suivantes :

- Deconz. Testé et validé par l'équipe Jeedom. Il n'y a pas besoin d'avoir Deconz d'installé
- EZSP (clef basé sur un chupset Silicon Labs). En cours de test par l'équipe Jeedom
- X-bee. Non testé par l'équipe Jeedom
- Zigate. Non testé par l'équipe, marqué en experimental chez Zigpy
- ZNP (Texas Instrument, Z-stack 3.X.X). Non testé par l'équipe, marqué en experimental chez Zigpy
- CC (Texas Instrument, Z-stack 1.2.X). Non testé par l'équipe, marqué en experimental chez Zigpy

# Configuration du plugin

Après installation du plugin, il vous suffit de bien installer les dépendances, de selectionner votre type de clef, le port (attention seul le type de clef deconz support le port en auto) et de lancer le demon. Vous pouvez aussi choisir le canal pour le zigbee.

>**IMPORTANT**
>
>Tout changement de canal nécessite forcement un redemarrage du démon. Un changement de canal peut aussi nécessiter une reinclusion de certain module

## Backup/restore 

Il est possible sur les clef de type EZSP (Elelabs par exemple) et ZNP de faire un backup de celle-ci pour le restaurer sur une autre clef.

>**IMPORTANT**
>
> Sur les clef de type EZXP (Elelabs) il n'est possible de faire que une seule restauration de backup en tout et pour dans la vie de la clef !!!!

Le backup ne contient pas la liste des modules mais seulement les informations de bases du réseaux zigbee, il n'est donc pas necessaire d'en faire souvent, un seul suffit car il ne bouge pas au cours de la vie de la clef.

>**IMPORTANT**
>
> Lors d'un backup ou d'une restauration le(s) démon(s) zigbee sont arretés

## Mise à jour du firmware 

Il est possible depuis Jeedom de mettre à jour le firmware de la clef Zigbee (que pour Elelabs pour le moment). Le firmware étant vraiment très important en zigbee (c'est lui qui gere le routage par exemple) il est important de le mettre à jour.

>**IMPORTANT**
>
> Lors d'une mise à jour du firmware le(s) démon(s) zigbee sont arretés

## Paramètres spécifique zigpy (reservé aux experts !!!!)

Il est possible de mettre en place des parametres specifique pour le sous systeme zigbee (zigpy). Cette partie est vraiment réservé aux experts et Jeedom ne fournis pas de liste de parametres possible (il y a des centaines qui dépendent du type de clef). Le champs prend en entrée du json exemple : 

````
{
    "ezsp": {
        "CONFIG_ADDRESS_TABLE_SIZE": "16"
    }
}
````

>**IMPORTANT**
>
>Lors de TOUTE demande de support si il y a une configuration la dessus la demande de support sera automatiquement refusée


# Inclusion de module

L'inclusion est la partie la plus compliqué en Zigbee. Bien que simple l'opération est à faire souvent plusieurs fois. Coté plugin c'est facile il suffit de cliquer sur le bouton "Mode inclusion", une fois fait vous avez 3minutes pour inclure votre équipement.

Coté équipement ca change en fonction du module, il faut se referer à la documentation de celui-ci à chaque fois.

>**IMPORTANT**
>
>Ne surtout pas oublier de faire une remise à zero (reset) du module avant tout inclusion

# Equipement

Une fois inclus Jeedom doit reconnaitre automatiquement votre module (si ce n'est pas le cas voir chapitre suivant) et donc créer les commandes qui vont bien. A noter qu'a cause de bug dans certain firmware (Ikea, Sonoff...) il est parfois necessaire de choisir le type de module directement dans la liste "Equipement" puis de sauvegarder pour avoir les bonnes commandes.

Vous avez dans l'onglet équipement les parametres suivants :

- **Nom de l'équipement Zigbee** : nom de votre équipement Zigbee
- **ID** : identifiants unique de l'équipements, meme lors d'une reinclusion (ou meme si vous changez de type de clef zigbee)
- **Activer**
- **Visible**
- **Objet parent**
- **Bureau**
- **Catégorie**
- **Ne pas attendre le retour d'éxécution des commandes (plus rapide mais moins fiable)** : n'attends pas la validation de clef pour dire que la commande s'est executé. Ca rend la main plus vite mais ne garantie pas que tout c'est bien passé

Dans l'onglet commande vous retrouvez les commandes de votre module (si celui-ci a bien été reconnu)

## Commande pour les experts

Pour les experts voici comment marche les commandes :

- ``attributes::ENDPOINT::CLUSTER_TYPE::CLUSTER::ATTRIBUT::VALUE``, permet d'écrire la valeur d'un attribut (attention tout les attributs ne peuvent etre changé) avec :
  - ``ENDPOINT`` : numéro du endpoint
  - ``CLUSTER_TYPE`` : type de cluster (IN ou OUT)
  - ``CLUSTER`` : numéro du cluster
  - ``ATTRIBUT`` : numéro de l'attribut
  - ``VALUE`` : valeur à écrire
Exemple : ``attributes::1::in::513::18::#slider#*100``, ici on va ecrire l'attribut dans l'endpoint 1, cluster entrant (``in``) 513, attribut 18 avec pour valeur celle du ``slider*10``
- ``ENDPOINT::CLUSTER:COMMAND::PARAMS``, permet d'éxecuter une commande server, avec :
  - ``ENDPOINT`` : numéro du endpoint
  - ``CLUSTER`` : nom du cluster
  - ``COMMAND`` : nom de la commande
  - ``PARAMS`` parametre dans le bonne ordre séparé par des ::
Exemple : ``1::on_off::on``, ici on execute la commande ``on`` sur l'endpoint 1 du cluster ``on_off`` sans parametres
Exemple : ``1::level::move_to_level::#slider#::0``, ici on execute la commande ``move_to_level`` sur l'endpoint 1 du cluster ``level`` avec les parametres ``#slider#`` et ``0``

# Mon module n'est pas reconnu

Si votre module n'est pas reconnu par jeedom (pas de commande) mais bien inclus alors il faut demander à l'équipe Jeedom de l'ajouter.

>**IMPORTANT**
>
>L'équipe Jeedom se reserve le droit de refuser toute demande d'intégration il vaut toujours mieux prendre un module deja compatible

Pour cela il faut fournir les éléments suivant (toute demande incomplete sera refusé sans réponse de la part de l'équipe Jeedom) :

- Donner le modele exacte de votre module (avec un lien vers la page de vente)
- Sur la page de l'équipement cliquer sur configuration puis onglet "Informations brutes" et envoyer le contenu à l'équipe Jeedom
- Mettre le démon en debug (et le redemarrer), faire des actions sur l'équipement (si c'est un capteur de température faire varier la température par exemple, si c'est une vanne faire varier la consigne...) et envoyer le log en debug zigbee (attention a bien prendre le zigbee et pas le zigbeed)

# Touchlink

Touchlink ou Lightlink est une partie particuliere du Zigbee qui permet d'envoyer des ordres de gestion à un module si on est très pres de celui-ci (50cm). Ca sert par exemple a faire un reset sur les ampoules qui n'ont pas de bouton.

Cela concerne donc tous ce qui est ampoules Zigbee type Philips Hue, Ikea, Osram, Icasa... et j'en passe. Le principe est très simple pour pouvoir associer ce type de module à un réseaux zigbee il faut d'abord faire un reset. Ensuite lors du redemarrage le module va automatiquement essayer de s'associer au premier réseaux Zigbee ouvert qu'il trouve.

## Faire un reset en Touchlink

C'est la partie compliqué (comme toujours en Zigbee le plus dur c'est le reset/association). Plusieurs methodes :

- Faire 5 ou 6 fois du on/off rapidement, l'ampoule clignote normalement rapidement à la fin pour signaler que c'est bon (marche rarement)
- Utiliser une télécommande zigbee et
  - appuyer sur en meme temps le bouton ON et OFF pendant 5 à 10 secondes près de l'ampoule alimentée (attention sur certaine ampoule il faut parfois éteindre/allumer l'ampoule juste avant) pour les télécommandes Philips hue
  - appuyer sur le bouton reset (a coté de la batterie) pendant 5 à 10 secondes près de l'ampoule alimentée (attention sur certaine ampoule il faut parfois éteindre/allumer l'ampoule juste avant) pour les télécommandes Ikea
- Pour les ampoules hue vous pouvez aussi les inclures sur le pont hue puis les supprimer de celui-ci

# Mise à jour OTA 

Les mises à jour OTA sont les mise à jour des firmware des modules, cela prends très très très longtemps (plusieurs heures) mais permets d'avoir moins de soucis en général. Pour pouvoir mettre à jour un module il faut que le fabricant communique le firmware : 

- Pour Ikea et Ledavance pas de soucis c'est fournis en ligne directemnt par Ikea, le plugin va directement le chercher chez eux 
- Pour d'autre (voir [ici](https://github.com/Koenkk/zigbee-OTA/tree/master/images)) le fabricant fournis desfois officieusement une mise à jour 
- Pour tous les autres il n'y a pas possibilité de mettre à jour le module par le plugin 

Pour activer les mises jour OTA il suffit de cocher la case dans la configuration du plugin puis, de sauvegarder puis de cliquer sur le bouton pour mettre à jour les fichiers OTA. Ensuite plus qu'a redemarrer le(s) démon(s) zigbee.

Les mises à jour se lance si il y en a une et après que le module demande si yen a une (vous pouver forcer cela dans l'onglet action sur la configuration du module/noeud). Il n'y a malheureusement pas d'indicateur simple pour voir l'avancement de la mise à jour, la seul solution est d'aller dans les log zigbee_X (si le log est en debug) et de chercher ota et la vous pouvez voir si un module se met à jour des logs du type : 

````
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA query_next_image handler for 'IKEA of Sweden TRADFRI control outlet': field_control=1, manufacture_id=4476, image_type=4353, current_file_version=536974883, hardware_version=60
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA image version: 537011747, size: 204222. Update needed: True
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA image_block handler for 'IKEA of Sweden TRADFRI control outlet': field_control=0, manufacturer_id=4476, image_type=4353, file_version=537011747, file_offset=0, max_data_size=63, request_node_addr=Noneblock_request_delay=None
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA upgrade progress: 0.0

 ````

# Conseil pour fiabiliser le réseaux zigbee 

Pour avoir un réseaux zigbee fiable il est plus que recommandé d'avoir au minimum 3 modules routeur alimentés en permanance et d'éviter de les débrancher. En effet lors de nos tests nous avons remarquer une grosse amélioration de la fiabilité et la resiliance du réseaux zigbee lors de l'ajout de module routeur. Il est d'ailleurs conseillé de les inclures en premiers (sinon il faudra entre 24h à 48h pour les end device [module non routeur] le decouvre).

Autre point important il se peut lors de la suppression d'un module routeur qu'une partie des end device [module non routeur] soit perdu pendant un temps plus ou moins loin (en dizaine d'heure voir plus), ou meme definitivement et que vous soyez obligé de les reinclures. Malheureusement l'équipe Jeedom ne peux rien la dessus c'est propre au end device [module non routeur] en fonction de comment le fabricant la configuré (et non au plugin Jeedom qui ne s'occupe absolument pas de la partie routage)

>**NOTE**
>
> Le graphique du réseaux Zigbee est la a titre indicatif et se base sur les voisins que les modules déclare avoir ce n'est donc pas forcement le routage réel mais les routages possibles.

Autre point important les gateway zigbee sur wifi sont moins fiable que les gateaway zigbee sur USB, c'est evident mais nous preferons le rappeler ici il est donc fortement conseillé d'utiliser des gateway USB.
 

# FAQ

>**Le LQI ou le RSSI est à N/A
>
>C'est normalement suite à un redemarrage du réseaux Zigbee les valeurs sont vidées, il faut attendre que le module recomunique pour que les valeurs reviennent

>**J'ai des soucis d'inclusion ou  des erreurs dans les logs de type ``TXStatus.MAC_CHANNEL_ACCESS_FAILURE``**
>
>Essayer de supprimer la rallonge USB si vous en avez une ou de changer celle-ci ou d'en mettre une si vous n'en avez pas

>**J'ai des erreurs "can not send to device" ou "send error" ou "Message send failure"**
>
>Malheureusement c'est tres compliqué à corriger, c'est en général du à un soucis de routage (le routage est plus ou moins fixe en zigbee et non symetrique : le module peut utiliser une route differente pour vous repondre que celle utilisée pour lui parler). Souvent l'arret electrique (retrait des piles par exemple) et remise du courant (ou remise des piles) suffit a regler le probleme.

>**J'ai des erreurs bizarre sur des modules sur pile ou des soucis d'inclusion**
>
>Nous avons remarqué qu'une bonne partie des problemes en zigbee sur des modules sur batterie sont du aux piles (ou des problemes de reset des modules avant inclusion). Meme si celle-ci semble neuves il est conseillé de tester avec d'autre pour etre sur.

>**J'ai des soucis de mise à jour des valeurs de l'équipement**
>
> Il y a 2 cas possibles :
> - c'est un "vieux module" en ZLL (voir configuration de l'équipement Jeedom indique si c'est du ZHA ou ZLL), dans ce cas il faut absolument une commande "Rafraichir" pour que vous ou Jeedom force une mise à jour des valeurs. Si vous ne l'avez pas alors il faut contacter le support pour qu'on l'ajoute dans la prochaine version stable. Une fois sortie il vous faudra cliquer sur "recreer les commandes" sans suppression
> - le module est en ZHA, alors c'est un soucis d'inclusion  : dans l'onglet action de la configuration de l'équipement vous avez un bouton reinitialiser pour forcer les actions post inclusion, bien penser à garder le module eveillé si il est sur batterie.
