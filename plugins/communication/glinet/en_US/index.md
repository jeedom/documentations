# Glinet plugin

# Description

Plugin to manage SMS sent/received to/from a GL-iNet router. 



# Plugin Setup

After downloading the plugin, you must first activate it, like any Jeedom plugin. Dans la section « Configuration », il faudra remplir les champs « IP GliNet » et « Mot de passe GliNet » spécifiques de votre router GL -iNet.


# Use of the plug-in

After the creation of the equipment, it will be necessary to choose the type of equipment desired:
- « Envoie SMS » où il suffit d'ajouter un Numéro (renseigner le nom, type, numéro) pour pouvoir envoyer des SMS.

- « Dernier message reçu » où il y aura 2 commandes: (Refresh every minute)
	- " Cmd Message" which represents the last message received.
    - " Cmd Numero" which represents the phone number that sent this message.
    
- « Etat de la connexion SIM » où il y aura 4 commandes: (Refresh every 15 minutes)
	- " SIM status" which represents the status of the SIM (SIM ready, No SIM, Enter PIN code, Not registered on the network).
    - " Signal Strength" which represents the signal strength out of 4.
	- " Connection mode" which represents the connection mode of the router (4G, ...).
