# Plugin Phone Market

Plugin permettant d’envoyer des SMS et de passer des appels avec messages automatiques à partir de Jeedom.

> **Important**
>
> Ce plugin passe par le market c’est donc un service cloud qui nécessite une connexion internet pour fonctionner.

> **Tip**
>
> Le plugin marche sur un système de crédit, 1 SMS  = 1 crédit pour la France sinon 2 crédits, 1 appel = 2 crédits pour la France sinon 4 crédits. Vous pouvez consulter votre crédit [ici](https://market.jeedom.com/index.php?v=d&p=profils#services). En cas de crédits faibles (moins de 5), un mail vous sera envoyé.

> **Important**
>
> Les SMS sont limités à 140 caractères et les appels à 450 caractères.

# Configuration du plugin

Après téléchargement du plugin, il vous suffit juste d’activer celui-ci, il n’y a aucune configuration à ce niveau.

# Configuration des équipements

La configuration des équipements Phone market est accessible à partir du menu Plugins → Communication.

Une fois un équipement ajouté vous vous retrouvez avec :

- **Nom de l’équipement** : nom de votre équipement Phone market,
- **Objet parent** : indique l’objet parent auquel appartient l’équipement,
- **Catégorie** : la catégorie de l’équipement,
- **Activer** : permet de rendre votre équipement actif,
- **Visible** : rend votre équipement visible sur le dashboard.

En cliquant sur l’onglet Commandes, vous retrouvez la liste des commandes:

- **Nom** : le nom affiché sur le dashboard,
- **Type** : type de commande (appels ou sms),
- **Numéro** : numéro de téléphone qui doit être appelé ou à qui un SMS doit être envoyé (en fonction du type),
- **Afficher** : permet d’afficher la commande sur le dashboard,
- **Tester** : permet de tester la commande,
- **Supprimer** (signe -) : permet de supprimer la commande.
