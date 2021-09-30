# Plugin Neato

# Description

Ce plugin permet d'obtenir les informations de statut de votre aspirateur NeatoBotvac Connected et de le contrôler.

# Configuration

# Installation/Création

Afin d’utiliser le plugin, vous devez le télécharger, l’installer et l’activer comme tout plugin Jeedom.

Suite à cela il vous faudra renseigner votre compte Neato *(email et mot de passe)*.

Une fois sauvegardé, votre Neato sera détecté automatiquement et ajouté à votre Jeedom.

Rendez-vous dans le menu Plugins → Confort pour y accéder.

# Tableau de Commandes

    -   **Alerte** : message si une erreur est en cours (brosse bloquée, bac à poussières plein, etc…​).
    -   **Arrêter** : Arrêter le robot.
    -   **Code état** : Code technique de l’état.
    -   **Démarrer eco maison** : lancer un nettoyage eco.
    -   **Démarrer turbo maison** : Lancer un nettoyage turbo.
    -   **En charge** : En charge ou non.
    -   **Etat** : Message d’état (prêt a nettoyer, en cours de nettoayge, en pause, etc…​).
    -   **Pause** : Mettre le robot en pause.
    -   **Programmation** : Permet de savoir si un programmation est en cours (programmation neato).
    -   **Rafraichir** : Permet de rafraîchir les informations.
    -   **Reprendre** : reprendre le nettoyage *(si en pause)*.
    -   **Retour base** : retourner au départ *(si en pause)*.
    -   **Sur dock** : Permet de savoir si le robot est sur le dock ou non.

Toutes ces commandes sont disponibles via scénarios et sur le dashboard.

## Comment sont rafraichis les infos

Les informationss sont mises à jour une fois toutes les 15 minutes et après chaque action exécutée depuis Jeedom. Vous pouvez les rafraîchir à la demande via scénario avec la commande rafraichir, ou par le dahsboard en cliquant sur les doubles flêches.

# FAQ

>**J'ai l'erreur "Could not find robot_serial for specified vendor_name"** :
>
> Il faut cliquer sur le bouton "Sauvegarder" dans la configuration du plugin (Plugins -> Gestion Plugins) pour qu'il relance la procédure de détection de votre aspirateur-robot.

>**La commande de nettoyage ne fonctionne pas, le robot sort et revient à sa base ou il ne respecte pas les limitations (carte)** :
>
>Sur certains modèles de robot il faut absolument définir une carte/plan de navigation, vous trouverez les informations [ici](https://support.neatorobotics.com/hc/fr/articles/360009513113-Comment-cr%C3%A9er-un-plan-d-%C3%A9tage-).
