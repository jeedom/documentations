# Changelog Modbus

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

# 04/11/2025

>**IMPORTANT**
>
>Une refonte globale du plugin à été effectuée. Les méthodes d'écritures ou les parametrages des registres pourraient etre a refaire/re-adapter suivant les installations. Merci de bien faire un backup et de le télécharger en local avant de mettre à jour le plugin

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

- Fix Fuite memoire Python3

# 30/07/2024

- Ajout Registre dans Message EcritureBit

# 26/07/2024

- Ajout nouvelle méthode pour changement de bit sur un registre (cf doc)
- Ajout dans Configuration du plugin : Choix niveau de log de la librairie Modbus


# 18/07/2024

- Ajout String format
- Meilleure precision des formats de données dans le selecteur


# 26/03/2024

- Fix Update for specific pymodbus version

# 29/05/2023

FAIRE BACKUP DE JEEDOM AVANT INSTALLE NOUVELLE BETA.
- Ecriture 1 Bit
- Import/Exports Commandes via Xlsx
- Nouvelle syntaxe Operation sur Commande (voir Doc)
- Fixs

# 15/05/2023

- Nouvelle UI paramètrage des commandes
- Optimisations conversions Valeurs
- Parametre Retour Hexa

# 03/04/2023

- Nouvelle UI paramètrage des commandes
- Paramètre TableauRegistres pour écrire a la suite en partant d'un registre de depart

# 10/01/2023
- Fix import packages pour python 3.9

# 13/10/2022
- Option Activer/Désactiver Message d'écriture
- Option nbOctets pour determiner la découpe d'un registre en x octet

# 07/10/2022
- Nouveau Système de Modele pré-enregistrés
- Option LectureMultiRegistres sur les commandes

# 26/09/2022
- Nouveau paremètre Timeout entre lecture registre

# 23/09/2022
- Changement Logs Librairie pyModbus

# 16/08/2022
- Choix du port pour Modbus TCP (par défaut 502)

# 01/08/2022
- BugFix sur déconnexion d'un équipement sur le même bus

# 02/05/2022
- Fonction Exportation d'un fichier Json et Importation de commandes par Equipement

# 20/03/2022
- Fonction Fc16 Registre non suivis

# 14/02/2022
- Fonction Fc16 pour automates sans Fc6

# 03/02/2022
- Version Beta, compatible 4.2.7
