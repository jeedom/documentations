# Changelog Z-Wave JS

>**IMPORTANT**
>
>S'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

# 24/12/2022

**Message du développeur**

Voici la très probable dernière mise à jour du plugin de 2022. En 1 mois à peine il y aura eu de belles évolutions. Au final très peu de bugs ce qui est positif. 
En évolutions notables depuis la sortie stable il y un mois :

- Gestion Du S2
- Gestion des NVMS (un travail est en cours avec l'équipe ZwaveJS pour rendre les compatibilités de restauration plus large)
- Gestion des mises à jour OTA
- Rajout d'un moteur personnalisable de refresh de rapport Solicited (à utiliser que si nécessaire ce qui devrait arriver sur 1 module sur 200)
- Rajout d'une gestion de paramètres en attente
- Gestion fine de la version des dépendances

Si vous lisez ce changelog vous pourrez constater un travail conséquent sur l'amélioration des confs (bien sûr il y a tellement de modules qu'il en reste).

Petites explications

Ce plugin est un nouveau plugin, il aurait pu sortir comme tout nouveau plugin avec 3 confs et un ajout au fur et à mesure. J'ai pris le parti d'essayer de migrer les confs OZW pour avoir un point de départ équivalent à l'arrivée de l'ancien plugin.
Mais et j'insiste dessus ce sont deux plugins *différents*. OZW faisait de nombreuses rustines et regroupait souvent des endpoints ou même des commandes en une seule. Donc on perdait de l'info et le script de migration à du faire un choix. Aujourd'hui on a accés à la cartographie complète Zwave
Il a été développé un onglet valeurs celui-ci représente au bas mot 15-20% du developpement du plugin, mais il permet de tout voir de tout contrôler voir même de générer des commandes.
Pourquoi avoir migré les confs et pas avoir fait de 0. Car simplement yaurait eu 50 fois moins de confs. Et une conf migré dans 75% des cas aura une partie ou la totalité de ses commandes fonctionnelles. C'est grâce à cela que nombreux d'entre vous ont tout qui marche.
En gros cela veut dire qu'il y a :
- des confs revalidés et optimisés ( car oui en plus grâce à ce plugin on peut aller plus loin sur certains types de modules) pour les reconnaitre c'est simple si au survol du nom du module au dessus de son image (page équipement) il ya une sections propriétés, alors c'est une conf mis au gout du jour (visible aussi en bas a droite de la modal NOEUDS)
- des confs migrés (elles auront pas de sections propriétés mais uniquement une section commande) ici la conf peut fonctionner parfaitement (mais généralement je les passes en propriétés pour les améliorer et pour un meilleur suivi), elles peuvent avoir quelques commandes pas bonnes, ou elles peuvent en pas être bonne.

C'est là où l'onglet valeurs peut vous aider a comprendre et être autonomme. Mais dans tous les cas il faut remonter le point, si vous avez possibilité de faire un ticket faites le et avec un accés c'est idéal. Cela permet avec mon expertise de voir si on peut aller plus loin (car beaucoup de modules remontent des choses inutiles ou pas au bon endroit) et généralement j'en profite pour regarder tous les modules (qui marchent) mais pour lesquels je vois des optimisations ou ajouts à faire

Si vous regardez le changelog vous verrez le nombre de confs qui peuvent être faites (effectivement ce nouveau plugin a été pensé pour pouvoir les faire plus rapidement).

Ensuite ce nouveau plugin permet contrairement à l'ancien de faire la distinction entre versions de firmware, je pense ici a Fibaro qui est le spécialiste des comportements différents selon les firmwares. Dites vous que si une conf est faites avec des propriétés (alors oui une erreur peut arriver) mais c'est qu'elle a 99% de chances d'être valide. Et si votre firmware nécessite autre chose mais que ce n'est pas remonté, la conf ne pourra pas être adapté pour gérer cette spécificité.
Et enfin il y a des modules comme le fgr223 qui est buggé (bug connu universel) qui ne remonte pas d'état sur déclenchement ZWAVE. C'est à ça que sert le moteur de refresh. Dans l'ancien plugin c'était aussi fait mais non visible et non paramétrable. Dans celui-ci c'est visible et paramétrable. Mais j'insiste ne jouez pas avec ça. Servez vous de la visibilité pour corriger si vous voyez un truc ou pour ajuster les nombres et attentes selon  votre utilsiation. En effet un volet selon ce que c'est peut facielement mettre 15 secondes chez l'un pour un cycle et 45 secondes chez un autre.
Toute demande de support avec des pollings ou des refreshs de partout sans sens sera refusé.

Et un dernier mot pour ce que je vais qualifier par "les apprentis sorciers". Se qualifier d'expert en pensant avoir trouvé une commande dans l'onglet valeurs (qui je le rappelle a été developpé par moi meme)... C'est dangereux pour vous et pour tout ceux à qui vous le dites et vous suivent sur les réseaux.
Idem ceux qui disent j'ai tout changé sur mes vieux modules ou la conf était pas bonne mais n'ont rien remontés. Ben la conf restera tel quel.... c'est dommage

Tout ceux qui ont fait un ticket je pense pourront le confirmer, l'analyse est poussée et bénéficie à tout le monde. Bien sûr nous essayons aussi de notre côté de trouver tous les modules possibles. Mais chacun d'entre vous à un module qu'on aura pas, un module avec un firmware que d'autres n'auront pas.

Aujourdhui 75% du chemin des confs est faite selon mon estimation, mais ne nous arrétons pas là continuons , rajoutons des confs, améliorons des confs, laissons les experts analyser, nous avons je pense un plugin à des milliers de kms de l'ancien, les confs vont le rattraper très rapidement et le dépasserons allégrement. 
Vous voulez que le changelog continue à ressembler à celui du mois dernier (en un seul mois à peine), alors allons y.

BONNES FETES A TOUS je vous laisse avec le changelog de ce 24 Décembre et je vous souhaite de très bonnes fêtes

**Modifications de Configurations**

- Modification de la configuration *Aeotec ZWA008 Door Sensor* pour utiliser les propriétés
- Modification de la configuration *Qubino ZMNHLAX PWM Thermostat* pour utiliser les propriétés
- Modification de la configuration *Qubino ZMNHDA2 Dimmer* pour utiliser les propriétés
- Modification de la configuration *Fibaro FGR-223* modification des endpoints des *refresh*
- Modification de la configuration *Fibaro Fgrgbwm442* pour utiliser les propriétés
- Modification de la configuration *Fibaro FGD212* ajout des propriétés Notification
- Modification de la configuration *Qubino ZMNHBA2 Flush 2 Relays* pour utiliser les propriétés
- Modification de la configuration *Fibaro Walli Switch* ajout des propriétés Notification
- Modification de la configuration *Dlink Dchz110* pour utiliser les propriétés
- Modification de la configuration *Domitech Smart Led Light* pour utiliser les propriétés
- Modification de la configuration *Duwii Switch* pour utiliser les propriétés
- Modification de la configuration *Everspring AN157* pour utiliser les propriétés
- Modification de la configuration *Popp Smoke Sensor* pour utiliser les propriétés
- Modification de la configuration *Duwii Edan 300* pour utiliser les propriétés
- Modification de l'image *Duwii Dimmer* (détourage)
- Modification de l'image *Aeotec ZWA008 Door Sensor* (détourage)
- Modification de l'image *Duwii Switch* (détourage)
- Modification de l'image *Duwii Edan 300* (détourage)
- Modification de l'image *Duwii Blind Control* (détourage)
- Modification de l'image *Duwii Remote* (détourage)
- Modification de l'image *Duwii Zs3500* (détourage)
- Modification de l'image *MCO Zipato p210 dimmer* (détourage)

**Ajouts de Configurations**

- Ajout d'une sous-propriété *Load-error* dans la propriété *Notification*
- Ajout d'une sous-propriété *Fibaro-effets2* dans la propriété *Color*

*Si vous êtes concernés par une modification ou un ajout de configuration, faites une synchronisation puis rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 22/12/2022

**Améliorations**

- Rajout d'un moteur complet de *Gestion de refresh*, utile pour certains modules qui ne reportent pas correctement certains changements après action. A ne pas utiliser sans raison valable. Les fichiers de configurations porteront les éléments si nécessaires
- Rajout d'un onglet *Options* sur la page d'un équipement. Pour afficher et configurer les Refresh et  d'éventuelles options futures
- Rajout du nombre de *Refresh* sur la page *Santé*

**Modifications de Configurations**

- Modification de la configuration *Qubino Luxy Smart Light* pour utiliser les propriétés
- Modification de la configuration *Popp RainMeter* pour utiliser les propriétés
- Modification de la configuration *Fibaro FGR-223* première configuration à utiliser le moteur de refresh (en effet ce module à un bug connu, il ne remonte pas les positions ou de manières erronées lorsqu'un mouvement est initié par le Z-Wave) pour récupérer les refresh (allez dans recharger commande en choissisant "sans recréer commandes") vous devriez voir les "refreshs" dans l'onglet options.
- Modification de la configuration *Fibaro FGR-223* changement des endpoints power et energy
- Modification de la configuration *Fibaro FGR-223* rajout de notification hardware et over-current
- Modification de la configuration *Fibaro FGR-223* remplacement de la propriété scene par centralscene

**Ajouts de Configurations**

- Ajout de la configuration *Qubino Luxy Smart Switch* (propriétés : Switch, Multilevel, Power, Energy, Color, Notification, NotificationEvent)
- Ajout de l'image *Qubino Luxy Smart Switch*
- Ajout de la configuration *Abus Security Center SHSG10000* (propriétés : Switch, Battery)
- Ajout de l'image *Abus Security Center SHSG10000*
- Ajout d'une sous-propriété *Global* dans la propriété *Rain*
- Ajout d'une sous-propriété *Basic* dans la propriété *Rain*
- Ajout d'une sous-propriété *Over-Load* dans la propriété *Notification*
- Ajout d'une propriété *Waterconsumption*
- Ajout d'une propriété *Notificationevent*

*Si vous êtes concernés par une modification ou un ajout de configuration, faites une synchronisation puis rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 21/12/2022

**Améliorations**

- Rajout de la gestion des Nodes Notifications

**Modifications de Configurations**

- Modification de la configuration *Aeotec Range Extender 6* pour utiliser les propriétés
- Modification de la configuration *Zipato PD01z* pour utiliser les propriétés
- Modification de la configuration *NeoCoolCam PD01zt* pour utiliser les propriétés
- Modification de la configuration *NeoCoolCam PD01z* pour utiliser les propriétés
- Modification de la configuration *Philio / Zipato Micromodule Energy Meter* pour utiliser les propriétés
- Modification de la configuration *Fibaro FGS214* pour utiliser les propriétés
- Modification de la configuration *Fibaro FGS213* passage à l'endpoint 0 (à confirmer)
- Retour arrière sur la configuration *Fibaro FGD212 firmware 3.5*
- Modification de la configuration *Zipato Keypad* rajout de la propriété *NodeNotification*
- Modification de la configuration *Schlage Keypad* rajout de la propriété *NodeNotification*
- Modification de la configuration *Eurotronic Valve Spirit* pour utiliser les propriétés
- Regroupement de configurations *Danfoss Living Connect*
- Modification de la configuration *Danfoss Devolo Living Connect* pour utiliser les propriétés
- Modification de la configuration *Danfoss Living Connect* pour utiliser les propriétés
- Modification de la configuration *Danfoss Pop Radiator Thermostat* pour utiliser les propriétés
- Modification de la configuration *Philio PSP05* pour utiliser les propriétés
- Modification de la configuration *Zipato ZP3102* pour utiliser les propriétés
- Modification de la configuration *Vision ZP3102* pour utiliser les propriétés
- Modification de la configuration *Remotec ZXT-120* pour utiliser les propriétés
- Modification de la configuration *Everspring Ad147* pour utiliser les propriétés
- Modification de la configuration *Heatit ThermoFloor Ztemp2* pour utiliser les propriétés
- Modification de l'image *Horstmann Secure SRT321* (détourage)
- Modification de l'image *Remotec ZXT-120* (détourage)
- Modification de l'image *Fibaro FGS 224* (détourage)
- Modification de l'image *Fibaro FGS 213* (détourage)
- Modification de l'image *Fibaro Button* (détourage)

**Ajouts de Configurations**

- Ajout de la configuration *Cherubini ORA ZRX* (propriétés : Shutter, Notification)
- Ajout de l'image *Cherubini ORA ZRX*
- Ajout de la configuration *Heiman HS2WD Siren* (propriétés : Switch, Battery)
- Ajout de l'image *Heiman HS2WD Siren*
- Ajout d'une sous-propriété *Power-status* dans la propriété *Notification*
- Ajout d'une propriété *NodeNotification*

*Si vous êtes concernés par une modification ou un ajout de configuration, faites une synchronisation puis rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 19/12/2022

**Corrections**

- Correction sur certains *attributs manquants* sur la page santé sur certains noeuds pour éviter les erreurs (sans conséquences) dans le *http.error*

**Améliorations**

- Passage de *ZwaveJS UI* à la version *8.6.1*
- Rajout de la *gestion S2* (ZwaveJS UI ayant fait les modifications attendues)
- Rajout du *type de sécurité* sur la page *informations d'un noeud*

**Modifications de Configurations**

- Modification de la configuration *Heiman CO sensor* pour utiliser les propriétés
- Modification de la configuration *Heiman Smoke detector* pour utiliser les propriétés
- Modification de la configuration *Domux CO sensor* pour utiliser les propriétés
- Modification de la configuration *Vision Security ZS5101* pour utiliser les propriétés
- Modification de la configuration *HomeSeer Ez Motion* pour utiliser les propriétés
- Modification de la configuration *Shenzen Smoke Detector* pour utiliser les propriétés
- Modification de la configuration *Vision Security ZD2102* pour utiliser les propriétés
- Modification de l'image *Vision Security ZD2102* (détourage)
- Modification de la configuration *Aeotec Range Extender 7* pour utiliser les propriétés
- Modification de la configuration *Zipato ZD2102* pour utiliser les propriétés
- Modification de la configuration *Qubino Weather Station* pour utiliser les propriétés
- Modification de la configuration *Everspring ST814* pour utiliser les propriétés
- Modification de la configuration *Hank HKZW-SO08* pour utiliser les propriétés
- Modification de la configuration *Hank HKZW-SO01* pour utiliser les propriétés
- Modification de la configuration *Hank HKZW-SCN01* pour utiliser les propriétés
- Modification de la configuration *Philio PAT02-B* pour utiliser les propriétés
- Modification de l'image *Philio PAT02-B* (détourage)
- Modification de l'image *Abus SHWM1000*

**Ajouts de Configurations**

- Ajout de la configuration *Zipato Energy Meter* (propriétés : Power, Energy , Voltage, Current)
- Ajout de l'image pour *Zipato Energy Meter*
- Ajout de la configuration *Airzone Aidoo Zwave* (propriétés : Temperature, Thermostatmode, Thermostatmodeaction, Thermostatfanmode, Thermostatfanmodeaction, Thermostatsetpoint, Notification)
- Ajout de l'image pour *Airzone Aidoo Zwave*
- Ajout d'une propriété *Thermostatfanmode*
- Ajout d'une propriété *Thermostatfanmodeaction*
- Ajout d'une propriété *Direction*
- Ajout d'une propriété *Velocity*
- Ajout d'une propriété *Rain*
- Ajout d'une propriété *Co*
- Ajout d'une sous-propriété *Basic-motion* dans la propriété *Motion*
- Ajout d'une sous-propriété *Dust-in-device* dans la propriété *Notification*

*Si vous êtes concernés par une modification ou un ajout de configuration, faites une synchronisation puis rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 15/12/2022

**Améliorations**

- Rajout de la possibilité d'afficher *des assistants explicatifs* sur la page de certains équipements (Keypad Zipato par exemple pour expliquer le fonctionnement des codes)

**Modifications de Configurations**

- Modification de la configuration *Aetoec Nanomote Quad* pour utiliser les propriétés
- Modification de la configuration *Fibaro Fgs211* pour utiliser les propriétés
- Modification de la configuration *Fibaro fgwreu111 Walli Shutter* passage à une propriété Shutter/level  et passage de power et energy sur le endpoint 1
- Modification de la configuration *Zipato Keypad* pour utiliser les propriétés
- Modification de la configuration *Schlage Keypad* pour utiliser les propriétés

**Ajouts de Configurations**

- Ajout de la configuration *Zooz ZEN17* (propriétés : Switch)
- Ajout de l'image pour *Zooz ZEN17*
- Ajout de la configuration *Abus Flood Sensor* (propriétés : Flood, Tamper, Battery)
- Ajout de l'image pour *Abus Flood Sensor*
- Ajout d'une propriété *UserCode*

*Si vous êtes concernés par une modification ou un ajout de configuration, faites une synchronisation puis rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 05/12/2022

**Améliorations**

- Rajout d'un onglet *Gestion NVM* sur la page réseau. Sauvegarde, téléchargement, envoie et restauration
- Rajout d'un onglet *Mise à jour* sur la page d'un node.
- Rajout de la version du *SDK* sur la page d'informations d'un contrôleur ou des modules le remontant

**Modifications de Configurations**

- Modification de la configuration *Cherubini Widom Smart Plug* pour utiliser les propriétés
- Modification de la configuration *Qubino 3 Phase Meter* pour utiliser les propriétés
- Modification de la propriété *Power Factor* pour l'option *production*

**Ajouts de Configurations**

- Ajout de la configuration *Cherubini Widom Meta double switch* (propriétés : Switch, Central Scene)
- Ajout de l'image pour *Cherubini Widom Meta double switch*
- Ajout de la configuration *Cherubini Widom Meta wired motor CONTR.7* (propriétés : Shutter)
- Ajout de l'image pour *Cherubini Widom Meta wired motor CONTR.7*

*Si vous êtes concernés par une modification ou un ajout de configuration, faites une synchronisation puis rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 01/12/2022

**Améliorations**

- Gestion des *commandes sans unités* alors qu'elle devrait (dans le retour zwaveJS) pour ne pas polluer la log 

**Modifications de Configurations**

- Modification de la configuration *Qubino ZMNHNDX Flush 1D* pour utiliser les propriétés
- Modification de la configuration *Fibaro FGSS101 Smoke* pour utiliser les propriétés
- Modification de la configuration *Smarthome Everspring AN-179* pour utiliser les propriétés
- Modification de la configuration *Aeotec ZWA009 AERQ* pour utiliser les propriétés
- Modification de la configuration *Popp Outdoor Siren* pour utiliser les propriétés (en partie)
- Modification de la configuration *Aetoec ZWA080* pour utiliser les propriétés (en partie) et ajout des commandes de sonorités (volume et son)
- Modification de la propriété *Heat* avec gestion du cas classe *ALARM SENSOR*
- Modification de la propriété *Smoke* avec gestion du cas classe *ALARM SENSOR*
- Modification de la propriété *Thermostat Setpoint* pour avoir les consignes avec le widget *button* par défaut
- Modification de l'image *Popp Outdoor Siren* détourage

**Ajouts de Configurations**

- Ajout de la configuration *Secure Hortsmann SRT321* (propriétés : ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Temperature, Battery)
- Ajout de l'image pour *Secure Hortsmann SRT321*
- Ajout de la configuration *Serrure Hoppe ConnectSense* (propriétés : Opening, Notification Sensor, Tilt, Battery)
- Ajout de l'image pour *Serrure Hoppe ConnectSense*
- Ajout des paramètres pour *Serrure Hoppe ConnectSense*

*Si vous êtes concernés par une modification ou un ajout de configuration, faites une synchronisation puis rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 28/11/2022

**Corrections**

- Correction sur les *paramètres de configurations* afin *d'éviter d'envoyer en premier lieu 0* lors d'un choix type liste (sur un paramètre le proposant)

**Améliorations**

- Rajout d'une *relance* nécessaire du moteur *en cas d'exclusion échouée*
- Affichage du message concernant le *0 commande* que dans le cas d'un *noeud initié*

**Modifications de Configurations**

- Modification de la configuration *Aeotec TriSensor* pour utiliser les propriétés
- Modification de la configuration *Hank HKZW-MS02* pour utiliser les propriétés
- Modification de la configuration *Philio PSM02* pour utiliser les propriétés
- Modification de la configuration *Everspring AN158* pour utiliser les propriétés
- Modification de la configuration *Danfoss Room Sensor* pour utiliser les propriétés
- Modification de la configuration *Vision ZS Shock and Vibration* pour utiliser les propriétés
- Modification de la configuration *Fibaro Walli Controller* pour utiliser les propriétés
- Modification de la configuration *Fibaro FGD211* pour utiliser les propriétés
- Modification de la configuration *Fibaro Wall Plug UK* pour utiliser les propriétés
- Modification de la configuration *Fibaro Walli Outlet F* pour utiliser les propriétés
- Modification de la configuration *Fibaro Walli Dimmer* pour utiliser les propriétés
- Modification de la configuration *Fibaro RGBW441* pour utiliser la propriété *fibaro-effects*
- Modification de la propriété *Luminance* avec ajout d'un mode en %
- Modification de la propriété *Thermostat Setpoint* pour avoir les consignes avec le widget *button* par défaut
- Modification de la propriété *Color* avec ajout d'un type *fibaro-effects* (pour ne plus décrire les commandes)
- Rajout d'un *paramètre recommandé* pour le *Philio PST02*

*Si vous êtes concernés par une modification ou un ajout de configuration, faites une synchronisation puis rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 25/11/2022

**Améliorations**

- Rajout d'une *gestion de version ZwaveJS UI*
- Rajout d'un message dans le *centre de message* et sur la page du plugin lorsque ZwaveJS UI *doit être mis à jour*
- Passage de la *version ZwaveJS UI* à la version *8.5.1* 

**Modifications de Configurations**

- Modification des paramètres pour *Hank Smart Plug (HKZW-SO08)* (problème d'affichage)

*Si vous êtes concernés par une modification ou un ajout de configuration, faites une synchronisation puis rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 23/11/2022

**Améliorations**

- Rajout d'un visuel pour un *paramètre ou wakeup* en attente
- Rajout d'une page permettant de voir tous les *paramètres* en attente
- Rajout d'une page webapp permettant de voir tous les *paramètres* en attente
- Rajout d'un bouton supprimer sur la page *En attente*. Permet de supprimer une ligne en attente. Celui-ci ne supprime pas l'ordre qui a été envoyé au contrôleur mais seulement l'information en attente dans Jeedom (utile pour les paramètres de calibration par exemple qui ne prennent jamais la valeur envoyée ou tout autre paramètre où ca serait inutile)


**Modifications de Configurations**

- Modification de la configuration *Popp Strike Lock* pour utiliser la propriété opening (pour le contact)
- Modification de la configuration *Fibaro FGD212* pour ajouter la gestion des différences à partir du firmware 3.5 (endpoint 1 sur firmware <= 3.4 endpoint 0 sur target seulement sinon)
- Modification de la propriété *Door Lock* pour ajouter le Déverrouillage (avec timeout) sur tous les dispositifs utilisant cette propriété

**Ajouts de Configurations**

- Ajout de la configuration *Hank Smart Plug (HKZW-SO08)* (propriétés : Switch, Power, Energy, Voltage, Current, Scene)
- Ajout de la configuration *Idinio foot dimmer* (propriétés : Multilevel, Power, Energy)
- Ajout des paramètres pour *Hank Smart Plug (HKZW-SO08)*

*Si vous êtes concernés par une modification ou un ajout de configuration, faites une synchronisation puis rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 21/11/2022

**Corrections**

- Changement sur le *graphique réseaux* : seulement les premières routes directes passeront rouge au survol d'un node pour éviter sur certaines installations et certains navigateurs l'erreur *Max Stack Size Exceeded* lié aux récursions

**Améliorations**

- Prise en compte de *refreshNodeCC* comme propriété d'une commande créée manuellement pour faire un refresh d'une CC
- Rajout d'un *scroll horizontal* sur la modal réseau / onglet *table de routage* (thx @Salvialf)
- Déplacement du *compteur de commandes* sur la partie droite de la page équipement

**Modifications de Configurations**

- Modification de la configuration *Fibaro FGR223* pour utiliser la puissance de la classe multilevel
- Modification de la configuration *Fibaro FGR222* pour utiliser la puissance de la classe multilevel
- Modification de la configuration *Fibaro FGRM222* pour utiliser la puissance de la classe multilevel
- Modification de la configuration *Devolo Mt02648* pour utiliser les propriétés et ajout des paramètres recommandés
- Modification de la configuration *Devolo Mt02647* pour utiliser les propriétés et ajout des paramètres recommandés
- Modification de la configuration *Popp Strike Lock* pour utiliser les propriétés
- Modification de la configuration *Aeotec ZWA011* pour utiliser les propriétés et ajout de son image

*Si vous êtes concernés par une modification ou un ajout de configuration, faites une synchronisation puis rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 18/11/2022

**Améliorations**

- Ajout d'un accés à l'interface ZwaveJS UI *(dans le menu Réseau Z-Wave, onglet Actions)*. Ne pas s'en servir pour modifier des réglages!
- Ajout d'un port pour le cas particulier de certains Raspberry Pi *(d'autres seront ajoutés si nécessaires)*
- Ajout d'un compteur de commandes pour chaque équipement *(ignorant les 4 commandes techniques)*
- Ajout d'une aide dynamique dans le cas de zéro commande.

# 15/11/2022

- Passage en version stable

# 04/05/2022

- Beta 1ère phase
