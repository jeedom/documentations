# ModBus changelog

>**IMPORTANT**
>
>As a reminder, if there is no information on the update, it means that it only concerns the update of documentation, translation or text.

>**IMPORTANT**
>
>Une refonte globale du plugin à été effectuée. Les méthodes d'écritures ou les parametrages des registres pourraient etre a refaire/re-adapter suivant les installations. Merci de bien faire un backup et de le télécharger en local avant de mettre à jour le plugin


# 06/02/2026
- Fix startRegister 0 : maintenant pris en compte
- Fix RTU lecture multiple eqlogics
- Fix commandes écrituresBit en type Action/Message

# 09/12/2025
- Fix remontées valeurs

# 04/11/2025
- OS Minimum : Debian 11
- Jeedom Minimum : 4.4.19
- Montée de version de pymodbus en 3.8.6
- Passage en asynchrone
- Suppression ByteOrder car non standard avec Modbus
- Suppression du parametre Nombre de registres : gérer maintenant via le choix du format de données choisi
- Refonte conversion registres
- Gestion programmée
- Optimisation et fix sur multiples clients TCP
- Ajout Configurer Fc16 via bootbox pour valeurs et format
- Ajout format short/ushort (int8,uint8)
- Ajout Mode Cyclique ou sur déclenchement

# 01/11/2025

- Fix selection des functions codes

# 31/10/2025

- Gestion formatType UInt8 et Int8


# 28/10/2025

- Optimisation et fix sur multiples clients TCP

# 18/07/2025

- Ajout Configurer Fc16 via bootbox pour valeurs et format

# 01/04/2025

- Ajout option MQTT : envoie des infos de registres sur broker MQTT (nécessite le plugin officiel MQTT)


# 19/03/2025

- OS Minimum : Debian 11
- Jeedom Minimum : 4.4.19
- Montée de version de pymodbus en 3.8.6
- Passage en asynchrone
- Suppression ByteOrder car non standard avec Modbus
- Suppression du parametre Nombre de registres : gérer maintenant via le choix du format de données choisi
- Refonte conversion registres


# 30/10/2025

- Fix Debian12

# 06/02/2025

- Fix error NameCmd


# 08/11/2024

- Fix Python3 Memory Leak

# 07/30/2024

- Adding Register in Message EcritureBit

# 07/26/2024

- Added new method for changing bits on a register (see doc)
- Added in Plugin Configuration : Choice of Modbus library log level


# 07/18/2024

- Adding String format
- Better precision of data formats in the selector


# 03/26/2024

- Fix Update for specific pymodbus version

# 05/29/2023

MAKE BACKUP OF JEEDOM BEFORE INSTALLING NEW BETA.
- Write 1 Bit
- Import/Export Orders via Xlsx
- New Syntax Operation on Command (see Doc)
- Fixs

# 05/15/2023

- New UI command settings
- Conversion optimizations Values
- Hex Return Parameter

# 04/03/2023

- New UI command settings
- ArrayRegistres parameter to write consecutively starting from a starting register

# 01/10/2023
- Fix import packages for python 3.9

# 10/13/2022
- Option Enable/Disable Write Message
- NbBytes option to determine the division of a register into x bytes

# 07/10/2022
- New Pre-Recorded Model System
- ReadMultiRegisters option on commands

# 09/26/2022
- New Timeout parameter between reading register

# 09/23/2022
- Change Logs pyModbus Library

# 08/16/2022
- Choice of port for Modbus TCP (by default 502)

# 08/01/2022
- BugFix on disconnection of a device on the same bus

# 02/05/2022
- Function Exporting a Json file and Importing orders by Equipment

# 03/20/2022
- Function Fc16 Register not followed

# 02/14/2022
- Fc16 function for PLCs without Fc6

# 02/03/2022
- Beta version, compatible with 4.2.7
