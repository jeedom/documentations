# Plugin jeezigbee

>**IMPORTANT**
>
>Documentation en cours de rédaction, n'hésitez pas a revenir voir de temps en temps pour en apprendre plus sur ce plugin


**Le plugin Jeezigbee pour Jeedom** se base sur l'excellent travail effectué autour de **la librairie open-source Zigbee2MQTT** pour offrir une **compatibilité généralisée avec les différents matériels Zigbee**. Il permet de communiquer avec les contrôleurs Zigbee suivants :

-	**deCONZ (clef Conbee/Conbee 2/Raspbee/Raspbee 2)** : Testé et validé par l’équipe Jeedom. *(Il n’est pas nécessaire d'installer l'application deCONZ)*
-	**EZSP (Silicon Labs)** : Testé, validé
-	**XBee** : Non testé par l’équipe Jeedom.
-	**Zigate** : Non testé par l’équipe.
-	**ZNP (Texas Instruments)** : Testé, validé

>**IMPORTANT**
>
> Avant toute chose il faut mettre à jour le firmware de votre clef (surtout pour EZSP, clef popp en particulier) sinon le demon ne peut fonctionner il faut vous reporter à la documentation du fabricant. N'hésitez pas à consulter la page officielle Zigbee2MQTT pour retrouver les firmwares disponibles pour votre clé [ici](https://www.zigbee2mqtt.io/guide/adapters/)

De plus, le plugin est doté de nombreux outils permettant :

- la **mise à jour des modules** en OTA,
- la visualisation des nœuds et du **graphique du réseau**,
- la gestion des **groupes**,
- la prise en charge du **binding**,
- la prise en charge de **Touchlink**

>**TRES IMPORTANT**
>
> Du à la valse des firmware/hardware coté fabricant et des bugs possibles dans leur firmware (sans avoir forcement la possibilité de le mettre à jour depuis Jeedom car la plupart des fabricants ne les communiquent pas), il se peut qu'un module marqué compatible ne le soit que partiellement (un bouton qui ne marche pas, ou pas de difference entre le bouton haut et bas, pas de remontée de CO2 ou d'un capteur du module...). Nous ne pouvons malheureusement pas vous prévenir à l'avance dans la liste car :
>- nous n'avons pas forcement le module en question, beaucoup de modules sont ajoutés par les retours utilisateurs
>- d'une semaine à l'autre le module peut avoir changé (nouveau hardware, nouveau firmware ou même nouveau module qui n'a pas changé de nom)
>En aucun cas Jeedom ne pourra etre tenu responsable en cas de fonction(s) manquante(s) (ou même de module ne fonctionnant pas) alors qu'il est indiqué compatible, nous subissons comme vous les changements imposés par le(s) fabricant(s)

# Configuration

## Configuration du plugin

**Le plugin jeezigbee** utilise des dépendances qu'il faudra installer en premier lieu (en fonction de votre systeme cela peut prendre plusieurs heures).

Le plugin utilise le protocole MQTT pour discuter avec Jeedom; il est donc nécessaire d'avoir le plugin MQTT manager installé et correctement configuré (en pratique, si ce n'est pas le cas, Jeedom devrait tout faire de lui même).

Une fois les dépendances installées, vous pouvez configurer un contrôleur Zigbee en renseignant **le type de contrôleur, le port du contrôleur**, puis (re)démarrer le démon.

Vous pouvez dans la configuration du plugin :

- Choisir la version de Zigbee2MQTT en mettant tout simplement le numéro de version dans le champ prévu pour (le bouton vous a coté de ce champ vous permet de voir les versions disponibles). Ensuite il suffit de sauvegarder puis relancer les dépendances
- Le plugin vous indique aussi si vous avez (au moins) la version recommandée par jeedom, ce n'est pas obligatoire mais conseillé d'être dans cette version ou plus
- Vous pouvez changer le port de d'écoute de l'interface de Zigbee2MQTT (il n'est pas recommandé de toucher à ça a moins de bien savoir ce que vous faites)
- Il est possible pour les contrôleurs EZSP Elelabs de mettre à jour le firmware

>**IMPORTANT**
>
> Il existe 2 modes pour le plugin : local, tout est sur votre Jeedom, c'est le mode recommandé. Pour les utilisateurs avancés, il est possible d'utiliser le mode distant; dans ce cas Jeedom ne gère pas Zigbee2MQTT, celui doit etre installé par vos soins (en général sur un docker sur jeedom ou sur une autre machine). Attention en mode distant il faut que Mqtt manager et Zigbee2MQTT soient connectés au même broker mqtt (mosquitto)

>**IMPORTANT**
>
> Lors de la première utilisation si vous êtes en mode local il faut ABSOLUMENT lancer les dépendances (même si ok). A noter que pour mettre a jour Zigbee2MQTT il suffit de lancer les dépendances, vous pouvez voir les nouvelles versions de Zigbee2MQTT [ici](https://github.com/Koenkk/zigbee2mqtt/tags)

Pour aller sur Zigbee2MQTT à partir du plugin Jeezigbee (pour par exemple forcer la suppression d'un module) il faut aller dans la configuration du plugin Jeezgibee puis dans la partie "Configuration", cliquer sur Interface z2m "Ici" vous allez ouvrir l'interface web de Zigbee2MQTT, une fois dans le module on vous demandera l’identifiant qui se trouve sur la page de configuration de Jeezigbee.

Attention ce n'est possible que si vous êtes en installation local de Zigbee2MQTT.

## Compatibilité

Vous pouvez trouver [ici](https://www.zigbee2mqtt.io/supported-devices/) la liste des modules compatibles avec le plugin

>**IMPORTANT**
>
>Pour le moment le plugin fait de l'autoconfiguration, c'est a dire qu'il ne contient aucune configuration spécifique pour un module donné, il récupère les informations de Zigbee2MQTT pour générer automatiquement les commandes. Cela implique que tout module compatible Zigbee2MQTT devrait fonctionner immédiatement avec le plugin. Par contre cela a pour consequence de générer énormement de commandes qui ne sont pas toujours toutes utiles. Nous sommes en train d'ajouter un systeme de configuration spécifique pour certains modules et ainsi améliorer les commandes et la présentation de celles-ci

## Configuration des équipements

### Inclusion d'un module Zigbee

L’inclusion est la partie la plus complexe en Zigbee. Bien que simple, l’opération est souvent à répéter à plusieurs reprises pour aboutir. Coté plugin Jeedom c’est facile, il suffit de cliquer sur le bouton **Mode inclusion** après quoi vous avez 3 minutes pour inclure l'équipement.

La procédure d'inclusion est propre à chaque module. Veuillez vous référer à la documentation du fabricant pour la réaliser.

>**ASTUCE**
>
>Ne surtout pas oublier de faire une remise à zéro *(reset)* du module avant toute inclusion. Il faut aussi bien penser, le temps de l'inclusion, à maintenir le module éveillé (attention a ne pas trop le maintenir éveillé et de lancer un reset sans le faire exprès)

Comme à l'habitude, vous pouvez donner un nom à votre équipement, lui renseigner une catégorie ou un objet parent et l'activer ou le rendre visible.

D'autres paramètres plus spécifiques sont également accessibles :

- **Identification** : identifiant unique de l'équipement. Même lors d'une ré-inclusion ou si vous changez de type de contrôleur Zigbee.
- **Contrôleur Z2m** : permet de sélectionner le contrôleur Zigbee en communication avec l'équipement (pour le moment le plugin ne supporte pas de multiples contrôleurs)
- **Auto-actualisation (cron)** : permet dajouter un cron qui demande l'actualisation des valeurs de l'équipement (attention rien ne garanti que le module va vraiment les mettres à jour il faut qu'il le supporte)
- **Ne pas autoriser les messages si l'équipement n'a pas été vu depuis plus de (s)** : chaque équipement zigbee a une date de "dernière communication" (last seen) dans de rare cas il est possible que Zigbee2MQTT remonte des messages de l'équipement même si celui-ci n'est plus là (plus branché ou plus de pile). Dans ce cas pour éviter de "fausse" mise à jour des commandes il est possible de dire "si la dernière communication de l'équipement est plus veille que X secondes alors ignore les mises à jour des valeurs". Attention cette option est reservée aux utilisateurs avancés.

La partie **Informations** permet de voir le modèle de l'équipement. On y retrouve également le visuel de l'équipement (non modifiable car provenant de Zigbee2MQTT) et l'accès à la configuration du module

Dans l'onglet **Commandes**, nous retrouvons, comme à l'accoutumée, les commandes permettant d'interagir avec le module.

### Configuration du module

C'est une fenêtre importante que vous retrouverez ici :

- Informations : contient toutes les informations utiles sur votre module (modèle, fabricant, état, alimentation, OTA, description, endpoints....)
- Configuration : contient les paramètres de configuration de votre module, s'il y en a (souvent il n'y en a pas donc c'est vide)
- Binding : Vous retrouverez ici le binding (lien) existant (en général vous avez toujours une ligne pour lier votre module à votre coordinateur). Vous pouvez aussi ajouter un binding (lien) entre deux modules, attention à bien réveiller les modules sur batterie lors du binging. Important le binding dépend des fabricants (et non du plugin), certains fabricants ne supportent pas le binding direct et il faut absolument un groupe, il y a aussi des incompatibilités entre fabricants (nous ne pouvons malheureusement pas en faire la liste)
- Reporting : si le module le supporte, vous pouvez configurer ici la fréquence d'envoi des informations du module au coordinateur (Jeedom donc)
- Informations brutes : sert juste au support, il vous sera demandé en cas de souci avec un module

### Module non reconnu

Si le module n'est pas reconnu par le plugin (pas de commande) il faut regarder [ici](https://www.zigbee2mqtt.io/supported-devices/), si il est supporté alors il faut contacter le support Jeedom (ou écrire sur le community) pour qu'on regarde pourquoi. Si votre module n'est pas dans la liste des modules supportés par Zigbee2MQTT alors il faut attendre qu'il l'ajoute.

>**INFORMATION**
>
>L’équipe Jeedom se réserve le droit de refuser toute demande d’intégration. Il est toujours préférable d'opter pour un équipement dont la compatibilité est déjà confirmée.

## Mise à jour des modules OTA

Les mises à jour OTA *(Over-The-Air)* sont les mises à jour des firmwares des modules. Le processus peut prendre un certain temps (plusieurs heures selon le nombre de modules) mais permet une meilleure fiabilité du réseau Zigbee en général. Pour être en mesure de mettre à jour un module, il faut que le fabricant communique le firmware de celui-ci :

- Concernant **Ikea** et **Ledavance**, les firmwares sont directement mis à disposition en ligne où le plugin va les récupérer.
- Pour d'autres (voir [ici](https://github.com/Koenkk/zigbee-OTA/tree/master/images)), le fabricant fournit officieusement une mise à jour dans certains cas.
- Pour tous les autres, il n'est pas possible de mettre à jour le module depuis le plugin.

Vous pouvez depuis la configuration du module demander une vérification du firmware ainsi que lancer la mise à jour OTA.

# Greenpower

La technologie Greenpower est normalement supportée par le plugin; elle est en cours de qualification par Jeedom SAS

# Réseaux Zigbee

La constitution d'un réseau Zigbee de bonne qualité est grandement aidé par les outils mis à disposition dans le plugin. Dirigez-vous vers la page générale du plugin listant l'ensemble des équipements et cliquez sur le bouton **Réseaux Zigbee** pour accéder à différentes informations et actions autour du réseau Zigbee ainsi qu'au graphique représentatif de celui-ci.

## Configuration

C'est là que vous retrouvez toute les configurations avancées de Zigbee2MQTT, attention c'est une liste générée depuis Zigbee2MQTT (d'ou le fait que tout soit en anglais)

## Graphique du réseau

Le graphique du réseau permet d'avoir une vision d'ensemble du réseau Zigbee et de la qualité des communications avec les différents modules. Pensez bien a lancer une mise à jour de celui-ci de temps en temps (cela prend une dizaine de minutes et peut ralentir votre réseau zigbee), une fois la mise à jour faite il faut fermer la fenêtre **Réseaux Zigbee** et la réouvrir.

>**IMPORTANT**
>
>Le graphique réseau est là a titre indicatif et peut ne pas être exact (en particulier sur les modules sur batterie qui ne renvoient pas souvent ou même des fois pas du tout leur routage)

## Optimiser le réseau

Afin d'optimiser la fiabilité de votre réseau Zigbee, **il est plus que recommandé d’avoir au minimum 3 modules routeurs alimentés en permanence et d’éviter de les débrancher**. En effet, lors de nos tests nous avons remarqué une nette amélioration de la fiabilité et de la résilience du réseau Zigbee lors de l’ajout de modules routeurs. Il est d’ailleurs conseillé de les inclure en premier lieu, autrement il faudra attendre 24h à 48h pour que les "end-device" *(modules non routeurs)* les découvrent.

Autre point important, il se peut, lors de la suppression d’un module routeur, qu’une partie des "end-device" *(modules non routeurs)* soit perdu pendant un temps plus ou moins long *(en dizaine d’heures voire plus)* ou même définitivement et que vous ayez à les ré-inclure.
Malheureusement cela est dû à la manière dont le fabricant a prévu l'intégration de son matériel au sein d'un réseau Zigbee et ne peut donc pas être corrigé par le plugin qui ne gère pas la partie routage.

Pour finir et même si cela peut paraître évident pour certains, nous rappelons que les passerelles Zigbee en Wifi ou distantes sont par définition moins fiables que les passerelles USB. L'équipe Jeedom conseille donc l'utilisation d'une passerelle Zigbee en USB.

# Groupe

Il est possible dans jeedom de crée des groupes d'équipement zigbee. Les groupes pouvant contenir tout est n'importe quoi il n'est pas possible pour jeedom de gerer les commandes dans ceux-ci, c'est donc a vous de les ajouter. Pour cela rien de plus simple il suffit de cliquer sur le bouton pour ajouter une commande, lui donner un nom et reprendre le logical ID, type et sous type d'un des équipements du groupe qui contient la commande voulu. A noter que Jeedom gere aussi bien les commandes de type action que info dans les groupes.

# Convertisseur externe

Zigbee2MQTT vous autorise à ajouter des convertisseurs externe (pour supporter des modules pas officiellement supportés). Pour ajouter un convertisseur externe il suffit dans la configuration du plugin (Plugin -> Gestion de plugins -> Jeezigbee) de cliquer sur le bouton "Editer" au niveau de la ligne converter et de déposer/éditer votre converter dans le dossier que jeedom vous montre.

>**IMPORTANT**
>
>Le support ne couvre pas la partie création/utilisation des convertisseurs externes.

# Commande spécifiques

## Commande IR

Le cas des modules envoyant des codes IR est un peu spécifique car il n'y a pas de liste predefini des codes IR il faut donc trouver vous meme la commande IR puis dans jeedom ajouter une commande avec en logical ID : `ir_code_to_send::VOTRE CODE IR`

## Commande personalisée

Cette partie est plutot pour les utilisateurs avancée qui voudraient ajouter des commandes spécifique. Tout se passe dans le logical id de la commande :
- action : `json::{"temperature":25}` pour envoyer `{"température":25}` sur le topic `set` de l'équipement, pour envoyer une commande sur un sous topic il suffit par exemple de mettre `/arm_mode` dans sous topic et `json::{"mode":"arming_stay"}` dans logical id pour envoyer `{"mode":"arming_stay"}` sur `set/arm_mode`
- info : `temperature` pour récupere le champs `temperature` du json de l'équipement ou `temperature::min` pour recuperer le sous champs `min` du tableau `temperature` de l'équipement

>**NOTE**
>
> Pour les commandes de type action vous pouvez utiliser des les tags `#slider#`, `#message#`, `#title#` ou `#select#` en fonction du sous type de la commande pour passer un parametre

# FAQ

[Lien](https://www.zigbee2mqtt.io/guide/installation/20_zigbee2mqtt-fails-to-start.html) vers la FAQ de Zigbee2MQTT

>**J’ai plein de messages d'informations (bleu) en bas à droite et je n'y comprends rien**
>
>Nous sommes actuellement en train de trier les messages utiles ou non que renvoi Zigbee2MQTT; mais par défaut nous préferons tout afficher.

>**J’ai des erreurs bizarres sur des modules sur piles ou des soucis d’inclusion**
>
>Nous avons remarqué qu’une bonne partie des problèmes des modules sur batterie sont dûs aux piles ou éventuellement des problèmes de remise à zéro des modules avant inclusion. Même si celles-ci semblent neuves, il est conseillé de tester avec de nouvelles piles pour écarter cette hypothèse.

>**Mon module vide ses batteries très vite**
>
>Vérifiez que vous êtes bien sur un firmware à jour sur votre clef zigbee. Dans 90% des cas une consommation excessive des piles vient du firmware qui a un souci.

>**Je n'arrive pas à inclure de nouveaux modules**
>
>Plusieurs possibilités pour cela :
>- Vous avez deja beaucoup de modules et avez dépassé la limite du nombre de modules en direct (31 en général). Il faut essayer en ajoutant des noeuds routeurs (attention il n'y a pas de norme clair sur les noeuds routeurs il y a donc des incompatibilités entre fabricants...)
>- Vous êtes sous Conbee : essayez de debrancher la clef pendant 2 minutes, de la remettre et relancer le demon; c'est une maladie connue des clés Conbee (même sous deconz), il faut un "cold reboot" pour que l'inclusion refonctionne
>- Vous avez un SSD branché en USB3, essayez de le brancher sur un port USB2

>**Je n'ai pas autant de commande que de bouton sur ma télécommande**
>
>Sur ma télécommande j'ai par exemple 2 boutons mais dans la liste des commandes Jeedom je n'ai qu'une commande !!! C'est normal; la commande dans jeedom prend une valeur differente en fonction du bouton physique appuyé. Le plus simple pour le voir est d'aller dans "Configuration avancée" (en haut a droite) puis "Logs" (en haut a droite aussi) et d'appuyer sur les boutons de la télécommandes pour voir les differentes valeurs des commandes.

>**Je n'ai pas l'image de mon module**
>
>Rien de grave, celà ne veut pas dire qu'il n'est pas utilisable ou reconnu, l'image sert juste d'illustration. Si vraiment vous la voulez, il faut contacter le support pour qu'il regarde pourquoi vous ne l'avez pas (en général c'est dû à un caractère non standard dans le nom du modèle du module)

>**Changer le PAN_ID et Network Key**
>
>Une fois le changement fait dans l'interface de jeedom ou dans Zigbee2MQTT il faut arrêter le démon, supprimer le fichier coordinator_backup.json (il est dans `/var/www/html/plugins/z2m/data`), redémarrer le démon.

>**J'ai l'erreur `Error: Reset error: Error: {"sequence":-1} after 10000ms` et une clef ELELABS ou une box Atlas**
>
>Il faut mettre a jour le firmware de votre clef zigbee, pour cela dans la configuration du plugin jeezigbee cliquez sur mettre à jour le firmware et remplisez les differents champs de la fenêtre puis validez. Attention à ne surtout pas faire ça sur une box luna, cela casse la clef zigbee. Si la mise à jour ne marche pas il faut alors tester de faire une "Correction bootloader".

>**Mon équipement n'est pas reconnu**
>
>Si votre équipement n'est pas reconnu c'est qu'il n'est pas encore supporté par la librairie Zigbee2MQTT. Il est possible de créer un convertisseur pour votre équipement. Il faut vous référer au document [Prise en charge de nouveaux appareils](https://www.zigbee2mqtt.io/advanced/support-new-devices/01_support_new_devices.html) et égalemnent pour le matériel Tuya. [Prend en charge les nouveaux appareils TuYa](https://www.zigbee2mqtt.io/advanced/support-new-devices/02_support_new_tuya_devices.html).
>
>Quoiqu'il en soit, il faut ouvrir une issue sur [github ici](https://github.com/Koenkk/zigbee2mqtt/issues)
>
>Une fois le convertisseur créé, il va falloir le mettre dans le plugin pour le tester.
>1) Depuis l'éditeur de fichier Jeedom,
>- Créer un dossier au nom de la marque de votre équipement dans plugin/z2m/core/converters>
>- Entrér dans ce dossier
>- Créer un ficher nommé Marque_référence de l'équipement.js Pour l'exemple nous utiliserons Tuya_TZE204_81yrt3lo.js
>- Dans ce fichier, coller les éléments du convertisseur.
>- Sauvegarder et fermer le fichier.
>
>2) Redémarrer le demon du plugin

>**Clé SONOFF modèle P: Flashage et résolution du problème "unknown record type 3**
>
>Une explication du flashage de la clé a été proposé sur le forum. Si vous avez l'erreur "unkown record type3", il est nécéssaire de convertir votre fichier .hex en .bin comme expliqué dans le tutoriel. Merci à JeedGeek pour l'explication [ici](https://community.jeedom.com/t/flasher-sa-cle-usb-zigbee-sonoff-p-avec-lutilitaire-ti-sous-windows/109453)

>**J'ai une erreur lors de la mise à jour du firmware sur Luna**
>
>Il faut desactiver le démon du plugin (Plugin -> Gestion des plugins -> Jeezigbee puis Gestion automatique -> désactiver), redémarrer la luna (Réglage -> Systeme -> Redémarrer). Une fois la box redémarrée il faut relancer la mise à jour du firmware. Attention cela peut prendre jusqu'à 10min. N'oubliez pas une fois la mise à jour faite de réactiver la gestion automatique du démon.
