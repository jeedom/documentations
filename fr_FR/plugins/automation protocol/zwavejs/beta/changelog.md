# Changelog Z-Wave JS

>**IMPORTANT**
>
>S'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

# XX/12/2022

**Modifications de Configurations**

- Modification de la configuration *Aetoec Nanomote Quad* pour utiliser les propriétés
- Modification de la configuration *Fibaro Fgs211* pour utilsier les propriétés
- Modification de la configuration *Fibaro fgwreu111 Walli Shutter* passage à une propriété Shutter/level  et passage de power et energy sur le endpoint 1

**Ajouts de Configurations**

- Ajout de la configuration *Neo EU-1 switch* (propriétés : Switch)
- Ajout de l'image pour *Neo EU-1 switch*
- Ajout de la configuration *Abus Flood Sensor* (propriétés : Flood, Tamper, Battery)
- Ajout de l'image pour *Abus Flood Sensor*

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
