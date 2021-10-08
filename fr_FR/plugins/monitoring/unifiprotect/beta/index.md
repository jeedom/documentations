# Plugin Unifi Protect

# Description

Plugin permettant de connecter Jeedom à Unifi Protect

>**IMPORTANT**
>
>Il n'y a aucune API officiel pour Unifi protect le plugin peut donc cesser de fonctionner du jour au lendemain suite à une mise à jour d'Unifi protect. En aucun cas Jeedom ne pourra etre tenu responsable et/ou aura le devoir de corriger

# Configuration du plugin

Après installation du plugin, il vous suffit de l'activer. Quelques paramètres sont à renseigner dans la configuration du plugin :

-   **Controleur Unifi protect** : Il faut mettre le chemin vers votre controleur Unifi (juste l'ip dans la pluspart des cas)
-   **Utilisateur Unifi protect** : Indiquer ici un nom d'utilisateur local (admin) 
-   **Mot de passe Unifi protect** : Mettre ici le mot de passe de l'utilisateur
-   **Fréquence de rafraîchissement** : Fréquence des demandes d'information au controleur (plus c'est bas plus ca consommera des ressources sur celui-ci, attention pour ceux étant sur UDM-Pro)
-   **Ne pas récuperer les évenements** : Ne pas recuperer les évenements des cameras (permet de consommer moins de ressources mais vous perdez la remontée des detection de mouvement/personne/voiture/...)
-   **Rechercher les équipements Unifi protect** : Lance la synchronisation avec Unifi Protect

>**IMPORTANT**
>
>Si vous avez le plugin camera d'installé le plugin Unifi Protect va automatiquement créer les caméras dans le plugin caméra 

# Remontée d'information

## Controleur

- Etat
- Uptime
- Vu la derniere fois
- SSH Actif (connexion SSH possible sur le controleur)
- Erreur code
- Utilisation CPU
- Température CPU (Si possible)
- Utilisation mémoire
- Utilisation tmpfs
- Utilisation disque

## Camera 

- Connectée
- Etat
- Vu la derniere fois
- Enregistrement (la camera est elle en train d'enregistrer)
- Derniere évènement
- Derniere date évènement
- Derniere score évènement (si l'évènement est un smart event)