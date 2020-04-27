# Description

Ce plugin permet d’avoir les infos de statut de votre aspirateur Neato
Botvac Connected et de le controler

# Configuration

# Installation/Création

Afin d’utiliser le plugin, vous devez le télécharger, l’installer et
l’activer comme tout plugin Jeedom.

Suite à cela il vous faudra renseigner votre compte Neato

Une fois sauvegardé votre Neato sera détecté automatiquement et rajouté
à votre Jeedom

Rendez vous dans le menu plugins/bien -être pour le retrouver.

# Tableau de Commandes

    -   Alerte : message si une erreur est en cours (brosse bloqué, bac
        à poussières plein etc…​)

    -   Arrêter : Arrêter le robot

    -   Code état : Code technique de l’état

    -   Démarrer eco maison : lancer un nettoyage eco

    -   Démarrer turbo maison : Lancer un nettoyage turbo

    -   En charge : En charge ou non

    -   Etat : Message d’état (prêt a nettoyer, en cours de nettoayge,
        en pause etc…​)

    -   Pause : Mettre en pause le robot

    -   Programmation : Permet de savoir si un programmation est en
        cours (programmation neato)

    -   Rafraichir : Permet de rafraichir les infos

    -   Reprendre : reprendre le nettoyage (si en pause)

    -   Retour base : retourner au départ (si en pause)

    -   Sur dock : Permet de savoir si le robot est sur le dock ou non

Toutes ces commandes sont disponibles via scénarios et via le dashboard


## Comment sont rafraichis les infos

Les infos sont rafraichis une fois toutes les 15 minutes et après chaque
action exécutée depuis Jeedom. Vous pouvez les rafraichir à la demande
via scénario avec la commande rafraichir, ou via le dash avec les
doubles flêches

# Faq

>**J'ai l'erreur "Could not find robot_serial for specified vendor_name"**
>
> Il faut dans la configuration du plugin (Plugins -> Gestion Plugins) faire sauvegarder pour qu'il refasse la detection de votre aspirateur robot

>**La commande de nttoyage ne marche pas, le robot sort et revient à sa base**
>
>Sur certain model de robot il faut absolument definir une carte/paln de navigation, vous trouverez [ici](https://support.neatorobotics.com/hc/fr/articles/360009513113-Comment-cr%C3%A9er-un-plan-d-%C3%A9tage-) pour le faire
