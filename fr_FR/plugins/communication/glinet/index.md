# Plugin Glinet

# Description

Plugin permettant de gérer les SMS envoyés/reçus à/d'un router GL-iNet. 



# Configuration du plugin

Après téléchargement du plugin, il faut tout d’abord activer celui-ci, comme tout plugin Jeedom. Dans la section « Configuration », il faudra remplir les champs « IP GliNet » et « Mot de passe GliNet » spécifiques de votre router GL -iNet.


# Utilisation du plugin

Après la création de l'équipement, il faudra choisir le type d'équipement souhaité:
- « Envoie SMS » où il suffit d'ajouter un Numéro (renseigner le nom, type, numéro) pour pouvoir envoyer des SMS.

- « Dernier message reçu » où il y aura 2 commandes: (Rafraichissement toutes les minutes)
	- " Cmd Message " qui représente le dernier message reçu.
    - " Cmd Numero " qui représente le numéro de téléphone qui a envoyé ce message.
    
- « Etat de la connexion SIM » où il y aura 4 commandes: (Rafraichissement toutes les 15 minutes)
	- " Etat SIM " qui représente l'état de la SIM (SIM prête, Pas de SIM, Renseignez code PIN, Non enregistré sur le réseau).
    - " Force du signal " qui représente la force du signal sur 4.
	- " Mode de connexion " qui représente le mode de connexion du router (4G, ...).
