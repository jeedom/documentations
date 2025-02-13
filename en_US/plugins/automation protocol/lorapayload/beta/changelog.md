# Changelog Lora Payload

# Changelog LoraPayload

>**IMPORTANT**
>
>As a reminder, if there is no information on the update, it is because it concerns only the update of documentation, translation or text

# 12/02/2025 (Beta)

- Regenerating equipment in Chirpstack with the "Regenerate LoRaWAN configuration" button"

- Gestion du fPort dans le décodage

- *Dragino LHT65* ajout du Set Transmit Interval

- *Dragino RS485-LN + NILAN* correction du décodeur

- *NKE Fil Pilot* correction du Device Profile en classe C

- Suppression des équipements MQTT et Chirpstack suite à la suppression de l'équipement Lorapayload

- Vérification de la taille des DevEUI et AppKey avant la génération automatique

- Adding configuration *Milesight WS203*

- Ajout des commandes de downlink pour *Dragino LT-22222*

- Adding configuration *WoMaster LR144*

- Ajout des commandes de downlink pour *Dragino LHT-65* (Envoie des uplinks en confirmed)

- Ajout de la commande info "Downlink acknowledged"

- Ajout du bouton copier du Deveui et Appkey


# 12/31/2024

- Adding configuration *NKE Torano*

- Changing the configuration *Dragino LSN50 V2 - MOD4* (properties : Digital Interrupt)

- Adding configuration *Thermokon 798808 - MCS Ambient sensor temperature, relative humidity, brightness*

- Adding configuration *Thermokon 817318 - MCS Motion detector, Room sensor temperature, relative humidity, brightness, movement, presence, status*

- Adding configuration *Thermokon 824248 - NOVOS 3 Room control module temperature, relative humidity, CO2*

- Adding configuration *Dragino RS485-LN + NILAN*

- Added Chirpstack panel

- Added "Regenerate LoRaWAN configuration" button"

- Adding configuration *Milesight Ambience Monitoring Sensors AM102*

- Adding configuration *Electronic Card - TIC LoRaWAN*

- Fix downlink command *Milesight Smart Radiator Thermostat WT101*

- Changing the configuration *Ewattch Squid Pro Rogowski*

- Decoder correction *MClimate Wireless Thermostat*

- Added info commands for *Ewattch Squid Pro Rogowski*

- Added Battery for *NKE Torano*

- Adding configuration *Thermokon 835633 - NOVOS 3 Room control module temperature, relative humidity, CO2*

- Adding configuration *Adeunis ARF8230ABA - Pulse meter pulse transmitter*

# 10/30/2024

- Changing the configuration *MClimate Wireless Thermostat* (properties : Manual Target Temperature Update)

- Adding configuration *Milesight WS303* (properties : Battery, Leakage Status)

- Changing the configuration *Vega SI-11 Rev2* (properties : Communication period, Input Mode)

- Adding configuration *MClimate Fan Coil Thermostat*

- Adding configuration *WATTECO NETW'O network tester*

- Adding configuration *Milesight EM300 DI*

- Adding configuration *Mclimate Display CO2 lite*

- Adding configuration *Mclimate Display CO2*

- Adding configuration *Milesight Smart Fan Coil WT301*

- Adding configuration *Thermokon 798228 - MCS Motion detector, Room sensor temperature, relative humidity, movement, presence*

- Changing the configuration *SHE MIO LORA V2* (add up to 20 temperature probes)

- Adding configuration *Enginko MCF - LW13 IO*

- Added downlinks commands *Quantify Cubic Meter*

- Adding configuration *Thermokon 798808 - MCS Ambient sensor temperature, relative humidity, brightness*

- Adding configuration *Ewattch Squid Pro Rogowski*

- Added downlink commands from *Thermokon 811187 - NOVOS 3 Room sensor temperature, relative humidity*

- Adding configuration *Milesight - Smart Current Transformer CT101*

- Adding configuration *Dragino - RS485-LN + CarloGavazzi EM540*

- Adding configuration *Dragino - RS485-LN + OTMetric + Polier*

- Added downlink commands from *MClimate Wireless Thermostat*

- Adding configuration *Milesight Smart Radiator Thermostat WT101*

# 04/29/2024

- Adding configuration *Dragino D23LBLS* (properties : Battery, Temp-White, Temp-Red, Temp-Black, Alarm, PA8 Level, Mode)

- Adding configuration *Citylone SL32 and Citylone SL22* (properties : Voltage, Current, Power, Cos Phi, Temperature, LED Voltage, Lamps level, Lamps mode, Request Position, Latitude, Longitude, Request Time Change State, Enable Time Change, Disable Time Change, RSSI, Timestamp, Update via LNS, On Relay , Off Relay)

- Adding configuration *Quantify Cubic Meter* (properties : Error Code, Total Volume, Leak Status, Battery Status, Minimum Temp, Maximum Temp, Ambient Temp)

- Adding configuration *Eastron SDM630* (properties : Serial Number, Total Energy, Frequency, Total Power Factor, Maximum Total System Power Demand, Total Current)

- Adding configuration *Dragino CS01 LB* (properties : Battery, EXTI_Trigger, EXTI_Level, Current1, Current2, Current3, Current4, CurL_status, CurH_status)

- Adding configuration *Enerbee e-VAV* (properties : Temperature, Humidity, Target flow, Current flow, CO2, IAQ, Charge level, Damper opening level, System status)

- Adding configuration *Milesight EM300TH* (properties : Battery, Temperature, Humidity)

- Adding configuration *NKE Triphas'O* (properties : Voltage Phase (A, B, C), Current Phase (A, B, C), Angle Voltage Current Phase (A, B, C), Positive Active Energy Phase (ABC, A, B, C), Negative Active Energy Phase (ABC, A, B, C), Positive Reactive Energy Phase (ABC, A, B, C), Positive Active Power Phase (ABC, A, B, C), Negative Active Power Phase (ABC, A, B, C) ), Positive Reactive Power Phase (ABC, A, B, C), Negative Reactive Power Phase (ABC, A, B, C), Binary Input State Phase (ABC, A, B, C))

- Adding configuration *Thermokon Temp RH* (properties : Temperature, Humidity)

- Adding configuration *Milesight EM300TH* (properties : Battery, Temperature, Humidity)

- Adding configuration *Milesight EM500LGT* (properties : Battery, Illumination)


# 02/21/2024

- Changing the log level for certain information generated by the plugin

- Changing the module type *Milesight EM500 PT100*

- Adding configuration *Dragino D20-LB* (properties : Battery, Temperature Red, Alarm, PA8 Level, MOD)


# 01/19/2024

- Adding configuration *RAK c15003* (properties : Temperature, Humidity, Pressure, Temperature2)

- Changing the configuration *Mclimate Vicki* (properties : GetKeepAlive, KeepAlive, GetDevicePrimaryOperationalMode, DevicePrimaryOperationalMode, GetOperationalMode, OperationalMode, Proportional control, Equal directional control, Proportional Integral control, GetControlAlgorithm, ControlAlgorithm, Open window detection parameters (1.0 accuracy), Open window detection parameters (0.1 accuracy))

- Adding the column *State* to display the value of the info orders

- Adding configuration *Citylone SmartLighting-Box 2* (properties : stateS1, stateS2, stateS3, stateS4, statusS1, statusS2, statusS3, statusS4, input1, input2, Off Output 1 fixed, On Output 1 fixed, Auto Output 1 fixed, Off Output 2 fixed, On Output 2 fixed, Auto Output 2 fixed, Off Output 3 fixed, On Output 3 fixed, Auto Output 3, Off Output 4 fixed, On Output 4 fixed, Auto Output 4 fixed, Off All fixed, On All fixed, Auto All fixed, DureeOnS1, DureeOnS2, DureeOnS3, DureeOnS4, DureeOffS1 , DureeOffS2, DureeOffS3, DureeOffS4, RSSI, Timestamp GMT, Timestamp Local, Update via LNS, Longitude, Latitude, Index Base, HCHC Index, HCHP Index, TIC Meter ID, Tariff option, Single-phase Instantaneous Current, Phase1 Instantaneous Current, Phase2 Instantaneous Current , Instantaneous Current Phase3, Max Instantaneous Current Single Phase, Max Instantaneous Current Phase1, Max Instantaneous Current Phase2, Max Instantaneous Current Phase3, Max Active Power, Thresold Alarm Power, Apparent Instantaneous Power, Power Failure, Time Change State)

- Adding configuration *RAK2171* (properties : Message ID, Application ID, Device ID, Battery, Timestamp, GPS Fix Status, Payload Type, Longitude, Latitude, Accuracy, GPS Start Number, SOS, Alarm Level)

- Adding configuration *Milesight WS50x* (properties : Version, Voltage, Activate Power, Active Factor, Power Consumption, Current, Switch 1, Switch 2, Switch 3)

- Adding configuration *Milesight WS51x* (properties : Version, Voltage, Activate Power, Active Factor, Power Consumption, Current, State)

- Changing the configuration *SHE MIO LORA V2* (properties : ON 1-2, OFF 1-2, ON 1-3, OFF 1-3...)

# 03/27/2023

- Added "ChildLockDisable" button - To have the Child Lock automatically disabled when the device is offline
- Added a "ChildLockUnchange" button - To make the Child Lock remain unchanged when the device is offline

# 03/10/2023

- Removal of double downlinks when "Have Confirmation" is checked
- Addition of a "Version" button in order to have the Hardware and Software version
- Set the payload format to "Base64" by default
- Added the option to display Lora equipment in the list

# 01/17/2023

- Added the ability to send instructions to Lorawan modules

# 06/10/2021

- Plugin Documentation