# Changelog Lora Payload

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

# 16/02/2026 (Beta)

- Ajout du produit *Nexelec RACK+ X950 Air Quality Monitor*

- Changement de la commande digital du produit *Elsys EMS* de numérique en binaire

- **Nexelec Guard+ ---> Inversion de la commande info Smoke Status**

- Correction décodeur *Ewattch Squid Pro Rogowski*

- Ajout du produit *Milesight AM308L*

- Ajout du bouton "Ouvrir Chirpstack" depuis l'interface

- Ajout des commandes pour *Nexelec - Guard+ Smoke detector Temperature & Humidity*

- Correction downlink *Vanne Micropelt*

- Fix utilisation d'un LNS externe

# 24/01/2026 (bêta)

- Ajout du systeme d'intégration en masse d'équipement dans le panel lorapayload

- Ajout du systeme de vidage de la file d'attente des downlinks via la commande flushQueue

- Ajout du produit * Dragino LSN50 V2 - LoRaWAN Wireless Sensor Node*

- Fix génération de commande jmqtt après migration CSV3 vers CSV4

- Ajout de nouveau Topics mqtt (/event/up et /event/join)

- Ajout spécifique de /event/ack et /event/txack pour Chirpstack v4

- Fix décodeur *Milesight VS370 - Radar Human Presence Sensor*

- Ajout des commandes actions pour le produit *Milesight WS50x - Smart Wall Switch* 

- Fix choix Broker Local

- Mise à jour du décodeur *Nexelec Guard+*

- MAJ de la photo du *Mclimate 16A Dry Switch LoRaWAN*

# 09/12/2025

- Ajout de la régénération de la configuration LoRaWAN en masse dans le panel


# 08/12/2025

- Correction du décodeur *Mclimate Wireless Thermostat*

- Ajout du produit *Dragino PS-LB - Pressure Sensor*

- Ajout du produit * Mclimate - T- Valve *

- Ajout du produit * Dragino WQS-LB - Water Quality Sensor*

- Maj commande *Milesight WT101 - Smart Radiator Thermostat* 

- Maj decoder et encoder * RAK 10701 - FIELD TESTER for LoRaWAN *

- Maj decoder *dragino WSC2 L*

- Maj decoder *NodOn_TRV_8_1_00*

- Ajout de la commande message downlink 

- Correction format devEui CSV4

- MAJ de la commande setTemperatureRange du produit *MClimate Wireless Thermostat*

- Ajout de la commande *Nombre de motion* pour le produit *Elsys*

- AJout du produit *Dragino S31B-LB - Capteur de température et d'humidité LoRaWAN*

- Ajout commande message downlink pour produit Dragino SW3L et Watteco Torano

- Mise à jour commande du produit *NodOn_TRV_8_1_00*

- Mise à jour commande du produit *milesight_WT101* et *Mclimate Vicki*

- Fix unfinished process

- Ajout du produit *ZPMeter - Ultrasonic LoRawan Water Meter + Tuya Smart Life Valve DN20*

- Fix device profile *milesight_WS558*

- Ajouter la référence des produits Adeunis

- Fix décodeur *Adeunis - Dry Contact*


# 18/11/2025

- Correction de la configuration des décodeurs Dragino

- Ajout du produit *Thermokon 820646 - MCS Contact de fenêtre statut*

- Ajout de la commande Batterie Pourcentage pour les produits Thermokon

- Fixation du niveau de batterie des produits Thermokon dans le panel Lorapayload

- Ajout de la gestion des batteries sur CronDaily

- Correction bug application name

- Ajout du produit *Senlab M-PUL-LAB-13NS - Compteur d'impulsions*

- Ajout du produit *Senlab D-TOR-LAB-13NS - Détecteur de contact TOR*

- Ajout du produit *Senlab D-LEA-LAB-13NS - Détecteur LEA*

- Ajout du produit *Senlab T-Temp-LAB-14NS - Capteur de température*

- Ajout du champ battery_type pour la gestion automatique des batteries Senlab

- Correction bug nom d'équipement

- Correction de la fonction formatValue

- Ajout du produit *Milesight GS301 - Bathroom Odor Detector*

- Ajout du produit *Milesight VS350 - Passage People Counter*

- Ajout du produit *EM114039-01 - IoT Energy Meter*

- MAJ commande du produit *Milesight VS350 - Passage People Counter*

- Ajout du produit *BMeters IWM-LR5 - Water Meter Reader*

- Fix commande config du produit * EM114039-01 - IoT Energy Meter*

- MAJ commande du produit *Mclimate 16A Dry Switch LoRaWAN*

- MAJ commande du produit *WT101 - Smart Radiator Thermostat*

- MAJ decoder du produit * EM114039-01 - IoT Energy Meter*

- Correction taille image *WT101 - Smart Radiator Thermostat*

- Correction du décodeur *Dragino LDS02*

- Correction decoder du produit *BMeters IWM-LR5 - Water Meter Reader*

- Ajout du downlink du produit *Dragino CPL03-LB/LS*

- MAJ du downlink des produits *Milesight CT101 et AM103*


# 20/10/2025

- Ajout du downlink Set temperature ranges pour *Mclimate Vicki* 

- Correction du panel Chirpstack V4

# 14/10/2025

- Ajout du produit *Mclimate HT Sensor*

- Ajout de downlink pour le produit *Vega SI-11*

- Ajout du produit *Adeunis ARF818xxR - Capteur de température*

# 24/09/2025

- Correction du device profile *Milesight AM319_868M - INDOOR AMBIENCE MONITORING SENSOR*

- Correction du device profile *Dragino LC01 - Relay Controller*

# 19/09/2025

- Ajout de downlink pour le produit *EM500-PP - Pipe Pressure Sensor - PP* 

- Ajout de downlink pour le produit *EM500 - Ultrasonic Distance/Level Sensor - UDL* 

- Ajout du bouton Commande MQTT dans la configuration Lorapayload

- Ajout d'avertissement au changement du nom de l'équipement 

- Ajout du produit *Smart Fill Level Monitoring Sensor WS201*

- Correction bug régénération des commandes mqtt

- Ajout du produit *Dragino LDS03A - Outdoor LoRaWAN Door Sensor*

- Ajout du produit *Dragino LMS01 - Leaf Moisture & Temperature Sensor*

- Ajout du produit *Dragino SE02-LB - LoRaWAN Soil Moisture & Temperature Sensor (Dual Channel)*

- Ajout du produit *Dragino DS03A - Capteur d'ouverture de porte*

- Ajout du produit *Dragino LTC2 - LoRaWAN Temperature/Resistance Sensor*

- Ajout du produit *Dragino LWL04 - LoRaWAN Water Leak Sensor*

- Ajout du produit *Dragino MDS120-LB - LoRaWAN Microwave Radar Distance Sensor*

- Ajout du produit *Dragino SE01-LB - LoRaWAN Soil Moisture & EC Sensor*

- Ajout du produit *Dragino SPH01-LB-LS - LoRaWAN Soil pH Sensor*

- Ajout du produit *Dragino WL03A-LB-LS - LoRaWAN None-Position Rope Type Water Leak Controller*
 
- Correction bug bouton config Panel

- Ajout qualité du signal et Spreading factor dans panel 

- Correction bug récréation des commandes mqtt

- Ajout du bouton de recréation des commandes mqtt dans le panel lorpaylaod

- Ajout du bouton envoie de downlink en masse dans le panel lorapaylaod

- Correction bug filtrage date panel

- Ajout de la documentation de Lorapayload 


# 12/09/2025

- Ajout du downlink Set Keep Alive pour produit *Dragino LHT52*

- Pré remplir l'application du device

# 10/09/2025

- Correction  des downlinks pour produit *WT304-868M - SMART FAN COIL THERMOSTAT*

- Ajout du produit *LC01 - Relay Controller*

- Correction bug status panel lorapaylaod

- Ajout du produit NodOn TRV-8-1-00 *Radiator Valve*

- Ajout du produit Nexelec Guard+ *Smoke detector Temperature & Humidity* 

- Ajout de commande pour le produit NodeOn TRV-8-1-00

- Ajout de fonctionnalité de mise en forme des topics pour migration 

- Ajout du produit *Milesight Indoor Ambience Monitoring Sensor AM103*

- Ajout du produit *Milesight Ambience Monitoring Sensor AM107*

- Ajout du produit *Milesight Capacitive Liquid Level Sensor EM300-CL*

- Ajout du produit *Milesight Membrane Leak Detection Sensor EM300-MLD*

- Ajout du produit *Milesight Ultrasonic Distance/Level Sensor EM310-UDL*

- Ajout du produit *Milesight Tilt Sensor EM320-TILT*

- Ajout du produit *Milesight ToF Laser Distance Sensor EM400-TLD*

- Ajout du produit *Milesight Multifunctional Distance Sensor EM400-MUD*

- Ajout du produit *Milesight Outdoor CO₂ Sensor EM500-CO2*

- Ajout du produit *Milesight People Counting Sensor VS340*

- Ajout du produit *Milesight People Counting Sensor VS341*

- Ajout du produit *Milesight People Counting Sensor VS370*

- Ajout du produit *Milesight Smart Scene Panel WS136*

- Ajout du produit *Milesight Smart Portable Socket WS523*

- Ajout du produit *Milesight Smart Fan Coil Thermostat WT303*

- Ajout du produit *Milesight Soil Moisture, Temperature & Conductivity Sensor EM500-SMTC*

- Ajout du produit *Milesight Bathroom Occupancy Sensor VS330*



# 29/08/2025
- Ajout du downlink de la commande Heating Target Temperature Range et Cooling Target Temperature Range pour produit *WT304-868M - SMART FAN COIL THERMOSTAT*

- Ajout du produit *AM307L - Ambience Monitoring Sensors*


# 28/08/2025
- Correction d'envoie des downlinks dans une liste déroulante

- Correction de la fonction readAllMarques en PHP8

- Ajout du sous type select

- Mise a jour configuration équipement 

- Ajout de fonctionnalité de modification d'application du produit depuis Jeedom

- Ajout de commande downlink (System Type et Child Lock Settings) pour produit *WT304-868M - SMART FAN COIL THERMOSTAT*


# 22/08/2025
- Mise à jour du champs création automatique (séparation des fabricants et des modèles)

- Correction commande Thermokon

- Ajout du produit *Milesight EM500-PP - Pipe Pressure Sensor*

- Ajout du produit *Milesight EM500-UDL - Ultrasonic Distance/Level Sensor*

- Correction bug Lorapayload configuration *application name* 

- Mise à jour panel CS V4


# 13/08/2025
- Mise à jour des décodeurs Thermokon

- Ajout de Statut et des boutons d'accès à la page de configuration des devices 

- Fix bug création automatique

# 06/08/2025
- Ajout de la fonctionnalité file d'attente aux downlinks avec gestion de priorité

- Ajout du panneau Admin “Cache queueDownlink” (visualisation, purge, suppr. individuelle)

- Paramètres configurables : `Temporisation des envoies dans la file d'attente (secondes)`, `Taille actuelle de la file d'attente`, `Taille maximale de la file d'attente`

- Ajout des commandes de downlink pour *Dragino CPL03-LB/LS* 

- Correction image documentation 

- Correction bug panel

- Ajout des commandes de downlink pour *Dragino CPL03-LB/LS* 

- Correction décodeur *Dragino WSC2_L_PM2.5*

- Correction du lancement du deamon en double

- Ajout du produit * Mclimate 16ADS - 16A Dry Switch LoRaWAN*

- Correction du décodeur *Dragino SW3L - Compteur d'eau extérieur*

- Ajout du downlink reboot pour *Dragino LT22222*

- Ajout des downlinks pour *Mclimate - 16A Dry Switch LoRaWAN*

- Correction commandes *Milesight GS601 - Vape Detector*

- Correction commandes *Milesight WS302 - Sound Level Sensor*

- Correction décodeur *BMeters IWM-LR3 - Water Meter Reader*

- Ajout d'une commande de downlink *BMeters IWM-LR3 - Water Meter Reader*

- Correction bug queue doubledownlink

- Ajout du produit  *adeunis_ARF8230xRA - Pulse ATEX*

- Ajout du produit *atim_PT1xx_TMxP - ATIM*

- Ajout du produit *bmeters_rfmlr1 - Water Meter Reader*

- Ajout du produit *diehl_CMi4160 - CMi4160 LoRaWAN (Diehl Sharky)*

- Correction du décodeur *Watteco Torano*

- Ajout du produit *AM319_868M - INDOOR AMBIENCE MONITORING SENSOR*

- Correction du décodeur *diehl_CMi4160 - CMi4160 LoRaWAN (Diehl Sharky)*

- Ajout du produit *WT304-868M - SMART FAN COIL THERMOSTAT*

- Ajout de la logique des listes pour les commandes des équipements

- Ajout du produit *AQS01-L – Capteur de qualité d'air LoRaWAN *


# 18/06/2025

- Ajout du produit *Milesight VS373 - AI Bed & Presence Sensor*

- Ajout de l'info Data Rate LoRaWAN

- Ajout des commandes *Milesight VS373 - AI Bed & Presence Sensor*

- Ajout du produit *Browan - Tab Temperature & Humidity Sensor*

- Ajout du produit *RAK 10701 - FIELD TESTER for LoRaWAN*

- Ajout du produit *Dragion WSC2-L -- Station Météo*

- Ajout du produit *Thermokon 811217 - NOVOS 3 Module de commande d'ambiance température, humidité relative*

- Correction décodeur *TIC LoraWAN*

- Ajout du produit *Milesight GS601 - Vape Detector*

- Ajout du produit *Milesight WS302 - Sound Level Sensor*

- Ajout des commandes Index pour *TIC LoraWAN*

- Regénérer la configuration LoRaWAN après la génération des commandes

- Correction décodeur *TIC LoraWAN*

# 15/05/2025

- Ajout du produit *Dragino CPL03-LB/LS - Capteur de contact sec ouvert/fermé LoRaWAN pour extérieur*

- Ajout du produit *Dragino LHT52 - Capteur de température et humidité intérieur LoRaWAN*

- Correction décodeur *Vega*

- Ajout des commandes *Dragino CPL03-LB/LS - Capteur de contact sec ouvert/fermé LoRaWAN pour extérieur*

- Mise à jour décodeur et encodeur *Thermokon 835633 - NOVOS 3 Module de commande d'ambiance température, humidité relative, CO2*

- Ajout du produit *BMeters IWM-LR3 - Water Meter Reader*

- Correction downlink du *Vega SI-11*

- Ajout du produit *Milesight EM300MCS - Magnetic Contact Switch*

- Correction du choix du broker local lors de la génération automatique

- Ajout du produit *Milesight CT303 - Smart Current Transformer CT303*

- Ajout du produit *Nexelec ATMO / SENSE / AERO / PMT / AERO Lora*

- Ajout du produit *Nexelec LoRa Air Sensors (Sign, Rise, Feel, Move, Wav, View)*

- Ajout du produit *Thermokon 835657 - NOVOS 3 Module de commande d'ambiance température, humidité relative*

- Correction downlink *Thermokon 835657 - NOVOS 3 Module de commande d'ambiance température, humidité relative*

# 24/03/2025

- Correction du décodeur *WoMaster LR144*

- Correction du décodeur *Adeunis ARF8230ABA - Emetteur impulsion compteur pulse*

- Ajout du produit *Eastron Smart Energy Meter SDM-530*

- Ajout des generic types au produit *Milesight Smart Radiator Thermostat WT101*

- Ajout du produit *Eastron Smart Energy Meter SDM-230*

- Correction décodeur *NKE Batch*

# 17/03/2025

- Regénération de l'équipement dans Chirpstack avec le bouton "Regénérer la configuration LoRaWAN"

- Gestion du fPort dans le décodage

- *Dragino LHT65* ajout du Set Transmit Interval

- *Dragino RS485-LN + NILAN* correction du décodeur

- *NKE Fil Pilot* correction du Device Profile en classe C

- Suppression des équipements MQTT et Chirpstack suite à la suppression de l'équipement Lorapayload

- Vérification de la taille des DevEUI et AppKey avant la génération automatique

- Ajout de la configuration *Milesight WS203*

- Ajout des commandes de downlink pour *Dragino LT-22222*

- Ajout de la configuration *WoMaster LR144*

- Ajout des commandes de downlink pour *Dragino LHT-65* (Envoie des uplinks en confirmed)

- Ajout de la commande info "Downlink acknowledged"

- Ajout du bouton copier du Deveui et Appkey

- Ajout des commandes de downlink pour *Dragino LT-22222*

- Mise à jour du décodeur *Ewattch Squid Pro Rogowski*

- Ajout du produit *MClimate - 16A Switch & Power Meter LoRaWAN*

- Ajout de la possibilité d'envoyer deux downlinks dans la même commande Action

- Ajout du produit *Dragino T68DL - Temperature Sensor*

- Ajout du produit *Milesight TS201 - Temperature Sensor*

- Ajout du produit *Milesight TS30x - Temperature Sensor*

- Ajout du produit *Watteco In'O*

- Ajout du produit *Milesight UC100 - IoT Controller*

- Ajout du produit *Milesight UC300 - IoT Controller*

- Ajout du champ *Remarque* pour les modules

- Correction du Device Profile *Power-Adapt Power-Elec 6*

- Correction des commandes de downlink + uplink de *Quandify Cubic Meter*

- Correction du décodeur *Dragino RS485-LN + NILAN*

- Correction du décodeur *Quandify Cubic Meter*

# 31/12/2024

- Ajout de la configuration *NKE Torano*

- Modification de la configuration *Dragino LSN50 V2 - MOD4* (propriétés : Digital Interrupt)

- Ajout de la configuration *Thermokon 798808 - MCS Capteur d'ambiance température, humidité relative, luminosité*

- Ajout de la configuration *Thermokon 817318 - MCS Détecteur de mouvement, Capteur d'ambiance température, humidité relative, luminosité, mouvement, présence, statut*

- Ajout de la configuration *Thermokon 824248 - NOVOS 3 Module de commande d'ambiance température, humidité relative, CO2*

- Ajout de la configuration *Dragino RS485-LN + NILAN*

- Ajout du panel Chirpstack

- Ajout du bouton "Regeneration de la configuration LoRaWAN"

- Ajout de la configuration *Milesight Ambience Monitoring Sensors AM102*

- Ajout de la configuration *Carte Electronic - TIC LoRaWAN*

- Correction de la commande de downlink *Milesight Smart Radiator Thermostat WT101*

- Modification de la configuration *Ewattch Squid Pro Rogowski*

- Correction décodeur *Mclimate Wireless Thermostat*

- Ajout des commandes infos pour *Ewattch Squid Pro Rogowski*

- Ajout de la Batterie pour *NKE Torano*

- Ajout de la configuration *Thermokon 835633 - NOVOS 3 Module de commande d'ambiance température, humidité relative, CO2*

- Ajout de la configuration *Adeunis ARF8230ABA - Emetteur impulsion compteur pulse*

# 30/10/2024

- Modification de la configuration *MClimate Wireless Thermostat* (propriétés : Manual Target Temperature Update)

- Ajout de la configuration *Milesight WS303* (propriétés : Batterie, Leakage Status)

- Modification de la configuration *Vega SI-11 Rev2* (propriétés : Communication period, Input Mode)

- Ajout de la configuration *MClimate Fan Coil Thermostat*

- Ajout de la configuration *WATTECO Testeur de réseau NETW'O*

- Ajout de la configuration *Milesight EM300 DI*

- Ajout de la configuration *Mclimate Display CO2 lite*

- Ajout de la configuration *Mclimate Display CO2*

- Ajout de la configuration *Milesight Smart Fan Coil WT301*

- Ajout de la configuration *Thermokon 798228 - MCS Détecteur de mouvement, Capteur d'ambiance température, humidité relative, mouvement, présence*

- Modification de la configuration *SHE MIO LORA V2* (ajouter jusqu'à 20 sondes de températures)

- Ajout de la configuration *Enginko MCF - LW13 IO*

- Ajout des commandes de downlinks *Quandify Cubic Meter*

- Ajout de la configuration *Thermokon 798808 - MCS Capteur d’ambiance température, humidité relative, luminosité*

- Ajout de la configuration *Ewattch Squid Pro Rogowski*

- Ajout des commandes downlink de *Thermokon 811187 - NOVOS 3 Capteur d'ambiance température, humidité relative*

- Ajout de la configuration *Milesight - Smart Current Transformer CT101*

- Ajout de la configuration *Dragino - RS485-LN + CarloGavazzi EM540*

- Ajout de la configuration *Dragino - RS485-LN + OTMetric + Polier*

- Ajout des commandes downlink de *MClimate Wireless Thermostat*

- Ajout de la configuration *Milesight Smart Radiator Thermostat WT101*

# 29/04/2024

- Ajout de la configuration *Dragino D23LBLS* (propriétés : Batterie, Temp-White, Temp-Red, Temp-Black, Alarm, PA8 Level, Mode)

- Ajout de la configuration *Citylone SL32 et Citylone SL22* (propriétés : Voltage, Current, Power, Cos Phi, Temperature, LED Voltage, Lamps level, Lamps mode, Request Position, Latitude, Longitude, Request Time Change State, Enable Time Change, Disable Time Change, RSSI, Timestamp, Update via LNS, On Relai, Off Relai)

- Ajout de la configuration *Quandify Cubic Meter* (propriétés : Code Erreur, Volume Total, Etat de fuite, Etat de la batterie, Temp Minimum, Temp Maximum, Temp Ambiante)

- Ajout de la configuration *Eastron SDM630* (propriétés : Serial Number, Total Energy, Frequency, Total Power Factor, Maximum Total System Power Demand, Total Current)

- Ajout de la configuration *Dragino CS01 LB* (propriétés : Batterie, EXTI_Trigger, EXTI_Level, Current1, Current2, Current3, Current4, CurL_status, CurH_status)

- Ajout de la configuration *Enerbee e-VAV* (propriétés : Temperature, Humidite, Debit cible, Debit actuel, CO2, IAQ, Niveau de charge, Niveau d'ouverture registre, Statut système)

- Ajout de la configuration *Milesight EM300TH* (propriétés : Battery, Temperature, Humidity)

- Ajout de la configuration *NKE Triphas'O* (propriétés : Voltage Phase (A, B, C), Current Phase (A, B, C), Angle Voltage Current Phase (A, B, C), Positive Active Energy Phase (ABC, A, B, C), Negative Active Energy Phase (ABC, A, B, C), Positive Reactive Energy Phase (ABC, A, B, C), Positive Active Power Phase (ABC, A, B, C), Negative Active Power Phase (ABC, A, B, C), Positive Reactive Power Phase (ABC, A, B, C), Negative Reactive Power Phase (ABC, A, B, C), Binary Input State Phase (ABC, A, B, C))

- Ajout de la configuration *Thermokon Temp RH* (propriétés : Temperature, Humidity)

- Ajout de la configuration *Milesight EM300TH* (propriétés : Battery, Temperature, Humidity)

- Ajout de la configuration *Milesight EM500LGT* (propriétés : Battery, Illumination)


# 21/02/2024

- Changement du niveau de logs pour certaines informations générées par le plugin

- Changement du type du module *Milesight EM500 PT100*

- Ajout de la configuration *Dragino D20-LB* (propriétés : Batterie, Temperature Red, Alarm, PA8 Level, MOD)


# 19/01/2024

- Ajout de la configuration *RAK c15003* (propriétés : Température, Humidité, Pression, Température2)

- Modification de la configuration *Mclimate Vicki* (propriétés : GetKeepAlive, KeepAlive, GetDevicePrimaryOperationalMode, DevicePrimaryOperationalMode, GetOperationalMode, OperationalMode, Proportional control, Equal directional control, Proportional Integral control, GetControlAlgorithm, ControlAlgorithm, Open window detection parameters (1.0 accuracy), Open window detection parameters (0.1 accuracy))

- Ajout de la colonne *Etat* pour afficher la valeur des commandes infos

- Ajout de la configuration *Citylone SmartLighting-Box 2* (propriétés : stateS1, stateS2, stateS3, stateS4, statusS1, statusS2, statusS3, statusS4, entree1, entree2, Off Sortie 1 fixe, On Sortie 1 fixe, Auto Sortie 1 fixe, Off Sortie 2 fixe, On Sortie 2 fixe, Auto Sortie 2 fixe, Off Sortie 3 fixe, On Sortie 3 fixe, Auto Sortie 3 , Off Sortie 4 fixe, On Sortie 4 fixe, Auto Sortie 4 fixe, Off All fixe, On All fixe, Auto All fixe, DureeOnS1, DureeOnS2, DureeOnS3, DureeOnS4, DureeOffS1, DureeOffS2, DureeOffS3, DureeOffS4, RSSI, Timestamp GMT, Timestamp Local, Update via LNS, Longitude, Latitude, Index Base, Index HCHC, Index HCHP, TIC Meter ID, Tariff option, Courant Instantane Monophase, Courant Instantane Phase1, Courant Instantane Phase2, Courant Instantane Phase3, Max Courant Instantane Monophase, Max Courant Instantane Phase1, Max Courant Instantane Phase2, Max Courant Instantane Phase3, Max Puissance Active, Puissance Thresold Alarm, Puissance Instantane Apparente, Power Failure, Time Change State)

- Ajout de la configuration *RAK2171* (propriétés : Message ID, Application ID, Device ID, Battery, Timestamp, GPS Fix Status, Payload Type, Longitude, Latitude, Accuracy, GPS Start Number, SOS, Alarm Level)

- Ajout de la configuration *Milesight WS50x* (propriétés : Version, Voltage, Activer Power, Active Factor, Power Consumption, Current, Switch 1, Switch 2, Switch 3)

- Ajout de la configuration *Milesight WS51x* (propriétés : Version, Voltage, Activer Power, Active Factor, Power Consumption, Current, State)

- Modification de la configuration *SHE MIO LORA V2* (propriétés : ON 1-2, OFF 1-2, ON 1-3, OFF 1-3...)

# 27/03/2023

- Ajout d'un bouton "ChildLockDisable" - Pour que le Child Lock soit automatiquement désactivé lorsque l'appareil est hors ligne
- Ajout d'un bouton "ChildLockUnchange" - Pour que le Child Lock reste inchangé lorsque l'appareil est hors ligne

# 10/03/2023

- Suppression des doubles downlink quand "Avoir Confirmation" est coché
- Ajout d'un bouton "Version" afin d'avoir la version Hardware et Software
- Mettre le format du payload à "Base64" par défaut
- Ajout l'option de l'affichage des équipements Lora en liste

# 17/01/2023

- Ajout la possibilité d'envoyer des consignes aux modules Lorawan

# 06/10/2021

- Documentation du Plugin

