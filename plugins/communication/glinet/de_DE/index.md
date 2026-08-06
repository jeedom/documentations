# Glinet-Plugin

# Description

Plugin zum Verwalten von SMS, die an/von einem GL-iNet-Router gesendet/empfangen werden. 



# Plugin-Setup

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es wie jedes Jeedom-Plugin zuerst aktivieren. Dans la section « Configuration », il faudra remplir les champs « IP GliNet » et « Mot de passe GliNet » spécifiques de votre router GL -iNet.


# Nutzung des Plugins

Nach der Erstellung der Ausrüstung muss der gewünschte Ausrüstungstyp ausgewählt werden:
- « Envoie SMS » où il suffit d'ajouter un Numéro (renseigner le nom, type, numéro) pour pouvoir envoyer des SMS.

- « Dernier message reçu » où il y aura 2 commandes: (Aktualisieren Sie jede Minute)
	- " Cmd Message", die die zuletzt empfangene Nachricht darstellt.
    - " Cmd Numero", das die Telefonnummer darstellt, die diese Nachricht gesendet hat.
    
- « Etat de la connexion SIM » où il y aura 4 commandes: (Alle 15 Minuten aktualisieren)
	- " SIM-Status", der den Status der SIM darstellt (SIM bereit, Keine SIM, PIN-Code eingeben, Nicht im Netzwerk registriert)).
    - " Signalstärke", die die Signalstärke von 4 darstellt.
	- " Verbindungsmodus", der den Verbindungsmodus des Routers darstellt (4G, ...).
