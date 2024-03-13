# Plugin Z-Wave JS

Le plugin Z-wave JS permet **le contrôle total du protocole domotique Z-Wave dans Jeedom** en se basant sur le travail effectué autour de la très réputée bibliothèque **Z-Wave JS UI**.

Le plugin Z-wave JS fiabilise et sécurise les transmissions par l'utilisation du **protocole MQTT**, offrant, par la même occasion, des possibilités de gestion avancée de leur réseau Z-Wave aux utilisateurs les plus experts.

>**IMPORTANT**
>
>Ce plugin est compatible Debian 11 "Bullseye" et est, par conséquent, le plugin officiel à privilégier pour gérer votre réseau Z-Wave dans Jeedom.

# Configuration

Après installation et activation du plugin, l'installation des dépendances devrait débuter sauf si la gestion automatique a été désactivée au préalable. Dans ce cas, il faudra cliquer sur le bouton **Relancer** pour initier cette phase d'installation. Le plugin officiel **MQTT Manager** faisant partie des dépendances nécessaires, il sera automatiquement installé et activé lors de l'opération si ce n'est pas déjà le cas.

Le reste des dépendances consiste au téléchargement, à la compilation et à la configuration de la librairie **Z-Wave JS UI**.

>**INFORMATION**
>
>La première installation des dépendances incluant une phase de compilation, elle est susceptible de durer plusieurs dizaines de minutes en fonction de votre configuration matérielle. Les mises à jour des dépendances sont bien plus rapides à installer par la suite.

## Configuration du plugin

Concernant la configuration du plugin, le point primordial est la bonne sélection du **port du contrôleur Z-Wave** correspondant à l'interface physique sur laquelle le contrôleur est connecté.

Les autres paramétrages possibles sont :

- **Appliquer la configuration recommandée** : applique directement le jeu de configuration recommandé par l’équipe Jeedom lors de l'inclusion d'un nouveau module *(conseillé)*.

- **Suppression des périphériques exclus** : permet de supprimer automatiquement les périphériques exclus du réseau Z-Wave si cochée. Sinon, les équipements sont conservés dans Jeedom même s’ils ont été exclus du réseau. L’équipement devra être alors supprimé manuellement ou réutilisé en lui assignant un nouvel identifiant Z-Wave.

- **Préfixe MQTT** : permet de spécifier le préfixe à utiliser dans MQTT *(`zwave` par défaut)*.

### Clés de sécurité

Les clés de sécurité sont à conserver précieusement. Si vous perdez ces clés, les périphériques inclus en mode sécurisé devront être réappairés. Les clés peuvent être spécifiées, si les champs sont vides ou invalides le plugin en générera et vous pourrez les visualiser par la suite.

>**IMPORTANT**
>
>Si votre contrôleur a été utilisé avec le plugin Openzwave et que vous aviez inclus des modules en mode sécurisé, la clé S0 est : `0102030405060708090A0B0C0D0E0F10`.

## MQTT Manager

Comme expliqué en préambule, le plugin Z-Wave JS nécessite la prise en charge du protocole MQTT pour communiquer, le plugin officiel **MQTT Manager** va donc servir de support à ces communications.

Plusieurs cas de figures sont envisageables :

- **Vous n'utilisez pas encore de broker MQTT** : Dans ce cas vous n'avez rien à faire. Les plugins **Z-Wave JS** et **MQTT Manager** vont échanger les informations et configurations nécessaires automatiquement *(un broker `Mosquitto` sera notamment installé localement sur la machine)*.

- **Vous utilisez déjà le plugin MQTT Manager** : Aucune intervention n'est nécessaire, le plugin Z-Wave JS va récupérer automatiquement les informations de connexion au broker MQTT.

- **Vous utilisez déjà un broker MQTT via un autre plugin que MQTT Manager** : Dans cette situation, il faut sélectionner le mode **broker distant** et indiquer les informations de connexion *(adresse et authentification)* dans la configuration du plugin MQTT Manager.

- **Vous souhaitez utiliser un broker MQTT sous Docker** : Il suffit alors de sélectionner le mode **broker local docker** dans la configuration du plugin MQTT Manager avant d'installer `Mosquitto`.

Dans tous les cas, le démon du plugin MQTT Manager doit être démarré avant de pouvoir passer à la suite. Autrement un message vous avertira, empêchant par la même le démarrage du démon Z-Wave JS.

## Plugin OpenZwave

Il est également important d'aborder le cas de la présence du plugin OpenZwave en parallèle du plugin Z-Wave JS, le temps de basculer de l'un à l'autre par exemple *(Voir paragraphe [**Migration depuis OpenZwave**](#Migration%20depuis%20OpenZwave))*.

Tout d'abord, il faut savoir qu'il n'existe strictement aucun risque au fait d'utiliser les plugins Z-Wave JS et OpenZwave en parallèle. Même en cas de difficulté avec le plugin Z-Wave JS, il suffira de stopper son démon et de redémarrer celui du plugin OpenZwave pour retrouver un réseau Z-Wave exactement identique et fonctionnel.

Il faut donc arrêter la gestion automatique puis stopper le démon du plugin OpenZwave pour être en mesure de démarrer le démon du plugin Z-Wave JS. A nouveau, dans le cas contraire, un message vous avertira, empêchant le démarrage du démon Z-Wave JS.

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

Si, à l'issue de cette phase *(qui peut être longue rappelons-le)*, vous constatez qu'un module qui était bien pris en charge par le plugin Openzwave ne le serait pas avec le plugin Z-Wave JS, nous vous invitons à vous référer au paragraphe [**Module non ou mal reconnu**](#Module%20non%20ou%20mal%20reconnu).

## Configuration des modules

Contrairement au plugin Openzwave, il n'y a pas de section dédiée à la configuration des modules. En effet la configuration d'un module est faite au travers de la commande classe Configuration. Celle-ci est donc visible parmis les autres commandes classes du module dans **Valeurs**.

### Nœud

Ce bouton présent sur la page d'un équipement permet de visualiser les informations du module à travers plusieurs onglets :

- **Résumé** : Affiche toutes les informations d'identification du module ainsi que les informations de statut.

- **Actions** : Permet d'exécuter des actions techniques sur un nœud. Chaque action y est décrite de manière succinte.
	>**INFORMATION**
	>
	>Vous ne devriez normalement jamais avoir à toucher ces fonctions, le plugin gèrant cela de lui-même.

- **Statistiques** : comme son nom l'indique, il permet de voir les statistiques de communication du module.

- **Arbre** : regroupe toutes les informations précédentes sous la forme d'un json technique.

### Valeurs

Ce bouton présent sur la page d'un équipement permet d'obtenir la liste de toutes les commandes classes Z-Wave gérées par le module.

Chacune peut être dépliée en cliquant dessus pour voir l'ensemble des commandes *(utiles ou non)* relatives à cette commande classe.

De nombreuses possibilités sont offfertes par cette fenêtre :

- Visualiser les valeurs des informations,
- Changer la valeur d'une action,
- Changer les paramètres du module,
- Créer automatiquement une commande info dans Jeedom *(si vous en avez besoin ou si celle-ci est manquante de la configuration Jeedom)*,
- Créer automatiquement une commande action dans Jeedom *(si vous en avez besoin ou si celle-ci est manquante de la configuration Jeedom)*,
- Configurer un polling *(communication forcée)*. A n'utiliser que dans le cas où le comportement par défaut du module ne permet pas de faire autrement, c'est à dire quasiment jamais.

### Groupe

Ce bouton présent sur la page d'un équipement permet de gérer les associations du module et permet de :

- Voir les associations actuellement actives,
- Les supprimer,
- En ajouter.

## Inclusions/Exclusions

Le bouton **Inclusions** présent sur la page regroupant tous les équipements Z-Wave JS permet de basculer le contrôleur en mode **Inclusion** *(défaut, S0, S2)* ou en mode **Exclusion**.

>**INFORMATION**
>
>Pour le moment les inclusions S2 ne sont pas possibles directement depuis le plugin. Cette fonctionnalité sera implémentée dans une prochaine mise à jour, le moteur du plugin étant déjà bien compatible S2.

## Synchroniser

Rappelons-le, en Z-Wave, tous les modules qui composent le réseau sont directement associés au contrôleur. Certains contrôleurs avec pile *(comme le Aeon-labs Z-Stick GEN5)* permettent même d'inclure des modules sans être branchés sur une box.

Le bouton **Synchroniser** va alors permettre de créer automatiquement dans Jeedom les équipements recensés par le contrôleur. Dans la même idée, les équipements correspondants à des périphériques exclus du contrôleur seront automatiquement supprimés si l’option **Suppression des périphériques exclus** est activée dans la configuration générale du plugin.

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

Si vous constatez qu'un module n'est pas ou est mal reconnu par le plugin Z-Wave JS **alors qu'il était bien pris en charge par le plugin OpenZwave**, il faut tout d'abord s'assurer que les données présentes dans la fenêtre **Valeurs** *(accessible depuis la page de l'équipement)* se mettent bien à jour lorsque le module est actionné physiquement.

Ensuite, une fois certain que le module en lui-même est bien reconnu et que ses valeurs se mettent à jour, si certaines commandes restent non fonctionnelles il sera nécessaire d'[ouvrir une demande au support Jeedom](https://doc.jeedom.com/fr_FR/premiers-pas/#Les%20demandes%20de%20support%20(ou%20tickets)){:target="\_blank"} en fournissant impérativement les éléments suivants :
- Fabricant et référence exacte du module concerné,
- Descriptif des commandes non fonctionnelles,
- Capture d'écran des **Informations du nœud** dans la fenêtre du même nom,
- Captures d'écran de **chaque bloc** de la fenêtre des **Valeurs du nœud**

Pour aller plus loin, vous pouvez actionner physiquement le module et effectuer des captures d'écran des changements de valeurs consécutifs, toujours dans la fenêtre des Valeurs du nœud.

>**IMPORTANT**
>
>Nous insistons sur le fait que l'équipe ne traitera, dans un premier temps, que les demandes de configurations de module incluant l'intégralité des éléments demandés ci-dessus et déjà fonctionnelles avec le plugin Openzwave. Il est possible que vous ne puissiez pas ajouter vos captures d'écran à la création du ticket, pas d'inquiétude vous serez en mesure de les transmettre dans un second temps en réponse à votre demande.

>**INFORMATION**
>
>En actionnant physiquement le module, vous serez en mesure d'identifier la ligne dont les valeurs changent en conséquence dans la fenêtre des Valeurs du nœud et dont la commande ne serait pas créée ou fonctionnelle. En bout de ligne se trouve un bouton avec une icône en forme de stylo permettant de créer automatiquement la commande correspondante vous octroyant par la même la possibilité de pouvoir utiliser votre module malgré une configuration absente ou erronée.

<!-- ## Remplacer un module défaillant -->

# FAQ

>**Est-il possible d'utiliser Z-Wave JS UI en mode déporté ?**
>
>Le cahier de route de l'équipe Jeedom concernant le plugin Z-wave JS prévoit effectivement l'ajout de cette possibilité dans les prochains mois sans notion d'urgence car il ne s'agit pas d'une fonctionnalité primordiale au bon fonctionnement du plugin.

>**Est-il possible d'activer le serveur websocket Z-Wave JS UI ?**
>
>Pour le bon fonctionnement du plugin et de Jeedom en général il n'est pas possible d'activer le serveur websocket Z-Wave JS UI toutefois le mode déporté à venir permettra les mêmes cas d'usage.
