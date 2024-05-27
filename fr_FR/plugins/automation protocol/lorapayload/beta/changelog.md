# Changelog Lora Payload

# Changelog LoraPayload

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

# xx/04/2024

- Modification de la configuration *MClimate Wireless Thermostat* (propriétés : Manual Target Temperature Update)

- Ajout de la configuration *Milesight WS303* (propriétés : Batterie, Leakage Status)

- Modification de la configuration *Vega SI-11 Rev2* (propriétés : Communication period, Input Mode)


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