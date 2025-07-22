# Changelog Z-Wave JS

>**IMPORTANT**
>
>S'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

# 15/11/2024

- Correction de la méthode d'installation des dépendances

# 27/09/2024

- Changement des versions minimales: core 4.4 et OS Debian 11

# 26/09/2024

**Améliorations**

- Passage à la version *9.20.0* de ZwaveJsUI
- Préparation pour merge le mode distant dans la prochaine version
- Nettoyage de code

**Ajouts de Configurations**

- Ajout de la configuration *Neo Signal Repeater +* (propriétés : Temperature, Humidity)
- Ajout de la configuration *Fibaro FGR224* (propriétés : Switch, Power, Energy, Notification Over-Current, Notification Over-Voltage)

**Modifications de Configurations**

- Modification de la configuration *Fibaro Fgrgbwm442* pour utiliser les propriétés
- Modification de la configuration *Fibaro FGD212* amélioration des propriétés Notification

# 20/05/2024

**Améliorations**

- Passage à la version *9.12.0* de ZwaveJsUI
- Rajout et gestion des deux nouvelles clés de sécurités S2 Long Range

**Ajouts de Configurations**

- Ajout de la configuration *Neo Signal Repeater* (propriétés : Temperature, Humidity)
- Ajout de la configuration *Shelly Qubino Wave 1* (propriétés : Switch, Notification Mains, Notification Over-Current, Notification Heat-Sensor)
- Ajout de la configuration *Shelly Qubino Wave 1 PM* (propriétés : Switch, Power, Energy, Notification Mains, Notification Over-Current, Notification Heat-Sensor)
- Ajout de la configuration *Shelly Qubino Wave Pro 1* (propriétés : Switch, Notification Mains, Notification Heat-Sensor)
- Ajout de la configuration *Shelly Qubino Wave Pro 1 PM* (propriétés : Switch, Power, Energy, Notification Mains, Notification Over-Current, Notification Over-Voltage, Notification Heat-Sensor)
- Ajout de la configuration *Shelly Qubino Wave 2 PM* (propriétés : Switch, Power, Energy, Notification Mains, Notification Over-Current, Notification Heat-Sensor)
- Ajout de la configuration *Shelly Qubino Wave Pro 2* (propriétés : Switch)
- Ajout de la configuration *Shelly Qubino Wave Pro 2 PM* (propriétés : Switch, Power, Energy, Notification Over-Current, Notification Over-Voltage)
- Ajout de la configuration *Shelly Qubino Wave I4* (propriétés : Central Scene)
- Ajout de la configuration *Shelly Qubino Wave Shutter* (propriétés : Shutter, Power, Energy, Notification Mains, Notification Over-Current, Notification Heat-Sensor)
- Ajout d'une sous propriété *notification-overvoltage* pour la propriété *Notification*

**Modifications de Configurations**

- Modification de la configuration *Neo Plug* pour utiliser les propriétés (*attention certains modèles veulent s'inclure en S2 alors que le fabricant ne fournit aucun DSK, inclure en choisissant non sécurisé au lieu du mode automatique*)

# 27/02/2024

**Améliorations**

- Rajout d'une fonction additionalDependancyCheck pour le core


**Modifications de Configurations**

- Modification de la configuration *MCOhome Mh7h* pour utiliser les propriétés

# 26/12/2023

**Améliorations**

- Rajout d'une option permettant d'activer ou désactiver le *Soft Reset*
- Passage à la version *9.6.2* de ZwaveJsUI

**Ajouts de Configurations**

- Ajout de la configuration *HeatIt Z-TRM6* (propriétés : Temperature, ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Notification Heat-Sensor, Notification Over-Load)
- Ajout de la configuration *Sunricher Remote Control 12 Button* (propriétés : CentralScene x12, Battery)

# 11/12/2023

**Améliorations**

- Passage à la version *9.5.1* de ZwaveJsUI (pour pouvoir choisir un port au format path nécessaire sur certaines VMs il faut mettre le core à jour)

**Corrections**

- Correction du bug d'inclusion *S2* corrigé côté ZwaveJS UI suite a remonté (en effet les callbacks n'étaient pas fait à moins d'avoir une fenêtre ouverte sur l'interface ZwaveJS UI)

**Ajouts de Configurations**

- Ajout de la configuration *Shelly Qubino Wave 1PM* (propriétés : Switch, Power, Energy, Notification Mains, Notification Over-Current, Notification Heat-Sensor)
- Ajout de la configuration *Shelly Qubino Wave 1* (propriétés : Switch, Power, Energy, Notification Mains, Notification Over-Current, Notification Heat-Sensor)
- Ajout de la configuration *Shelly Qubino Wave Shutter* (propriétés : Shutter, Power, Energy, Notification Mains, Notification Over-Current, Notification Heat-Sensor)
- Ajout de la configuration *Shelly Qubino Wave 2PM* (propriétés : Switch, Power, Energy, Notification Mains, Notification Over-Current, Notification Heat-Sensor)
- Ajout de la configuration *Shelly Qubino Wave 1* (propriétés : Switch, Notification Mains, Notification Over-Current, Notification Heat-Sensor)  *doute s'il faut rajouter Power et Energy (faire un ticket si le device est censé remonter consommation mais je ne pense pas)*
- Ajout d'une propriété *WindowsCovering*

**Modifications de Configurations**

- Modification de la configuration *Benext Keypad* pour utiliser les propriétés (copie du Zipato mais en version benext)
- Modification de la configuration *MCOhome Mh8FC* pour utiliser les propriétés
- Modification de la configuration *MCOhome Mh8FC-4* pour utiliser les propriétés
- Modification de la configuration *Qubino ZMNKID - Flush OnOff Thermostat 2* pour utiliser les propriétés
- Modification de la configuration *Widom Meta Wired Motor* pour utiliser la propriété Windows Covering
- Modification de la configuration *Wenzhou TZ78* utilsiation du endpoint 0 en lieu et place du endpoint 1 (conformément à la remonté des utilisateurs)
- Modification de l'image *MCOhome Mh8FC* (détourage)
- Modification de l'image *MCOhome Mh8FC-4* (détourage)

# 27/10/2023

**Ajouts de Configurations**

- Ajout d'une sous propriété *notification-door* pour la propriété *Tilt*

**Modifications de Configurations**

- Modification de la configuration *Aeotec Zwa012*  pour utiliser les propriétés
- Modification d'une sous propriété *notification-simple* pour la propriété *Opening*

**Améliorations**

- Passage à la version *9.1.2* de ZwaveJsUI

# 11/10/2023

**Corrections**

- Passage à la version *8.26.0* de ZwaveJsUI temporairement

# 09/10/2023

**Corrections**

- Correction évitant certains messages dans la log *http.error* dans certains cas particulier

**Améliorations**

- Passage à la version *9.1.0* de ZwaveJsUI
- Rajout d'une option pour gérer les *notifications* dans le centre des messages *des noeuds morts et alives*
- Rajout d'une option pour gérer les *notifications* dans le centre des messages *des réveils manqués et retour*

**Ajouts de Configurations**

- Ajout de la configuration *Aeotec ZW187 Recessed Door* (propriétés : Opening Simple, Battery, Notification Software, Notification Power-Status)
- Ajout de la configuration *Thermofloor Heat It ZM Relay High Power* (propriétés : Switch, Power, Energy, Notification Heat Sensor, Notification Over Load, Centra Scene)
- Ajout d'une sous propriété *notification-simple* pour la propriété *Opening*


# 11/09/2023

**Corrections**

- Correction de la mise à jour *OTA* d'un firmware de module suite à un changement ZwaveJSUI

**Améliorations**

- Passage à la version *8.25.1* de ZwaveJsUI.
- Rajout de la possibilité de faire une mise à jour *OTW* d'un contrôleur (si compatible)
- Rajout d'une option pour gérer les *notifications* dans le centre des messages *des noeuds morts et alives*
- Rajout d'une option pour gérer les *notifications* dans le centre des messages *des réveils manqués et retour*

**Ajouts de Configurations**

- Ajout de la configuration *Shelly Qubino Wave 1PM* (propriétés : Switch, Power, Energy, Notification Mains, Notification Over-Current, Notification Heat-Sensor)
- Ajout de la configuration *Shelly Qubino Wave 1* (propriétés : Switch, Power, Energy, Notification Mains, Notification Over-Current, Notification Heat-Sensor)
- Ajout d'une sous propriété *binary-water* pour la propriété *Flood*
- Ajout d'une sous propriété *onlevel-barrier* pour la propriété *Multilevel*

**Modifications de Configurations**

- Modification de la configuration *MCOhome Mh8FC*  pour utiliser les propriétés
- Modification de la configuration *NeoCoolCam WS02Z*  pour utiliser les propriétés
- Modification de la configuration *Kaipule IM20*  pour utiliser les propriétés
- Modification de la configuration *HRT4_SRT321* pour mieux utiliser les propriétés
- Modification de la configuration *Benext Plug In Dimmer* pour mieux utiliser les propriétés
- Modification de la configuration *Dome On Off Plug In Switch Plug In Dimmer* pour mieux utiliser les propriétés
- Modification de la configuration *Domux Dx2skz* pour mieux utiliser les propriétés
- Modification de la configuration *Swiid Plug* pour mieux utiliser les propriétés
- Modification de la configuration *Everspring SM810* pour mieux utiliser les propriétés
- Modification de la configuration *Zipato PD01z* pour mieux utiliser les propriétés
- Modification de la configuration *Vision Security ZS5101* pour mieux utiliser les propriétés

# 02/08/2023

**Améliorations**

- Passage à la version *8.22.0* de ZwaveJsUI.
- Ajout de tous les *tty* dans la liste des ports (cela sera inutile avec le nouveau core qui permettra de choisir un port directement par l'id)
- Ajout de la dernière route sur la page statistiques d'un noeud (dépend du SDK du contrôleur)
- Ajout de la dernière vitesse-baud rate sur la page statistiques d'un noeud (dépend du SDK du contrôleur)
- Ajout de la dernière vitesse-baud rate sur la page statistiques globale (dépend du SDK du contrôleur)
- Ajout de la dernière route sur la page statistiques globale (dépend du SDK du contrôleur)
- Ajout du dernier rssi sur la page statistiques globale (dépend du SDK du contrôleur)
- Ajout du dernier rssi sur la page statistiques d'un noeud (dépend du SDK du contrôleur)
- Rajout d'un graph *Route réseau* représentant les dernières routes empruntées (évoluera et peut ne pas gérer tous les cas dépend du SDK du contrôleur)
- Rajout d'un message dans le centre de message lorsqu'un noeud passe Dead (en plus de la commande statut de l'équipement)
- Rajout d'un message dans le centre de message lorsqu'un noeud passe Alive après avoir été Dead (en plus de la commande statut de l'équipement)
- Rajout d'un message dans le centre de message lorsqu'un noeud ne s'est pas réveillé après 4 fois son interval de réveil


**Ajouts de Configurations**

- Ajout d'une propriété *ThermostatFanState*
- Ajout d'une sous commande *Label State* à la propriété Barrier Operator (pour avoir une commande label avec texte en plus de la commande numérique)
- Ajout de la configuration *MCOhome Mh8FC* (propriétés : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperature)
- Ajout de la configuration *Heltun HE-FT01* (propriétés : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperature, Illuminance, Humidity, Power, Energy)
- Ajout de la configuration *MCOhome MH3901* (propriétés : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatOperatingState, Temperature)
- Ajout d'une sous commande *Label State* à la propriété Thermostat Operating State (pour avoir une commande label avec texte en plus de la commande numérique)

**Modifications de Configurations**

- Modification de la configuration *HRT4_SRT321* pour utiliser les propriétés
- Modification de la configuration *SRT323* pour utiliser les propriétés
- Modification de l'image *HRT4_SRT321* (détourage)
- Modification de l'image *SRT323* (détourage)
- Modification de l'image *SSR303* (détourage)
- Modification de l'image *SIR321* (détourage)
- Modification de l'image *SES303* (détourage)
- Modification de l'image *SES302* (détourage)
- Modification de l'image *SCSC17* (détourage)

# 26/06/2023

**Améliorations**

- Passage à la version *8.19.0* de ZwaveJsUI.
- Les modules *FLIRS* ne sont plus considérés comme actif au maillage sur le graph réseau

**Modifications de Configurations**

- Modification de la configuration *Aeotec DSB04100 door window sensor* pour utiliser les propriétés
- Modification de la configuration *Aeotec DSC10 Heavy Duty Switch* pour utiliser les propriétés
- Modification de la configuration *Aeotec DSC06106 Smart Energy Switch* pour utiliser les propriétés
- Modification de la configuration *Aeotec DSC11 Smart Strip* pour utiliser les propriétés
- Modification de la configuration *Aeotec DSC08101 Smart Energy Illuminator* pour utiliser les propriétés
- Modification de la configuration *Aeotec DSC014104 Blind Control* pour utiliser les propriétés
- Modification de la configuration *Aeotec DSC17103 Micro Double Switch* pour utiliser les propriétés
- Modification de la configuration *Aeotec DSC18103 Micro Switch 2nd* pour utiliser les propriétés
- Modification de la configuration *Aeotec DSC26103 Micro Switch 2nd* pour utiliser les propriétés
- Modification de la configuration *Aeotec DSC27103 Micro Dimmer 2nd* pour utiliser les propriétés
- Modification de la configuration *Benext Panic Watch* pour utiliser les propriétés
- Modification de la configuration *Benext Panic Button* pour utiliser les propriétés
- Modification de la configuration *Benext Plug In Dimmer* pour utiliser les propriétés
- Modification de la configuration *Dome On Off Plug In Switch Plug In Dimmer* pour utiliser les propriétés
- Modification de la configuration *Domux Dx2skz* pour utiliser les propriétés
- Modification de la configuration *Everspring AD142* pour utiliser les propriétés
- Modification de la configuration *Everspring AN145* pour utiliser les propriétés
- Modification de la configuration *Everspring EH403 Led FloodLight* pour utiliser les propriétés
- Modification de la configuration *Heiman Dx2skz* pour utiliser les propriétés
- Modification de la configuration *Philio Smart Dimmer E27* pour utiliser les propriétés
- Modification de la configuration *Philio Pan03* pour utiliser les propriétés
- Modification de la configuration *Popp Smart Plug* pour utiliser les propriétés
- Modification de la configuration *Popp 009105* pour utiliser les propriétés
- Modification de la configuration *Schlage On Wall* pour utiliser les propriétés
- Modification de la configuration *Sigma Power Plug* pour utiliser les propriétés
- Modification de la configuration *Swiid Plug* pour utiliser les propriétés

**Ajouts de Configurations**

- Ajout de la configuration *Heat It ZM Dimmer* (propriétés : Multilevel, Power, Energy, CentralScene, Notification)
- Ajout de la configuration *Sigma PZ701U* (propriétés : Switch)
- Ajout de la configuration *Neo RC03Z* (propriétés : Central Scene, Battery)
- Ajout d'une sous-propriété *Heat-Sensor* dans la propriété *Notification*
- Ajout de la configuration *U-Fairy GR-201N* (propriétés : Switch)

# 10/04/2023

**Améliorations**

- Les *refresh* peuvent maintenant aller jusqu'à 100 secondes au lieu de 60
- Passage à la version *8.13.1* de ZwaveJsUI.
- Modification de la fonction *pollValue* pour les propriétés à *value* (merci @superbricolo)

**Modifications de Configurations**

- Modification de la configuration *Aeotec ZWA19 Water Sensor* pour utiliser les propriétés
- Modification de la configuration *Aeotec ZWA24 7in1* pour utiliser les propriétés
- Modification de la configuration *Everspring SM810* pour utiliser les propriétés
- Modification d'une propriété *Velocity*
- Modification de l'image *Dlink 510* (détourage)
- Modification de l'image *Fibaro Fgs-213* (détourage)

**Ajouts de Configurations**

- Ajout de la configuration *Sigma PZ701U* (propriétés : Switch)
- Ajout de la configuration *Neo RC03Z* (propriétés : Central Scene, Battery)
- Ajout d'une sous-propriété *Heat-Sensor* dans la propriété *Notification*
- Ajout de la configuration *U-Fairy GR-201N* (propriétés : Switch)

# 14/02/2023

**Modifications de Configurations**

- Modification de la configuration *Aeotec ZWA24 7in1* pour utiliser les propriétés
- Modification de la configuration *Everspring SM810* pour utiliser les propriétés
- Modification de la configuration *Aeotec ZW122* pour utiliser les propriétés
- Regroupement de configurations *Danfoss Living Connect*
- Modification de la configuration *Fibaro FGR-223* changement des endpoints power et energy
- Modification de la configuration *Fibaro FGR-223* rajout de notification hardware et over-current
- Modification de la configuration *Fibaro FGS213* passage à l'endpoint 1 (firmware >=3.3) et ajout de notification heat sensor et over-current
- Modification de l'image *Aeotec ZWA24 7in1* (détourage)
- Modification d'une propriété *Velocity*
- Modification de l'image *Dlink 510* (détourage)
- Modification de l'image *Fibaro Fgs-213* (détourage)
- Modification de l'image *Fibaro Fgs-221* (détourage)
- Modification de l'image *Fibaro Fgs-223* (détourage)
- Modification de l'image *Fibaro Wall Plug* (détourage)
- Modification de l'image *Fibaro Wall Plug GEN5* (détourage)

**Ajouts de Configurations**

- Ajout d'une sous-propriété *Heat-Sensor* dans la propriété *Notification*
- Ajout de la configuration *U-Fairy GR-201N* (propriétés : Switch)
- Ajout de la configuration *Danfoss Boiler Relay* (propriétés : Switch)
- Ajout de la configuration *Benext Alarm Sound* (propriétés : Switch)


# 24/12/2022

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
