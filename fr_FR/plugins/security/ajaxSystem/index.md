# Ajax Système

## Configuration

>**IMPORTANT**
>
>Pour avoir une remontée en temps réel il faut ABSOLUMENT que votre Jeedom soit accessible de l'extérieure (URL d'accès externe utilisée)

La configuration du plugin est très simple et se déroule en 2 étapes : 

- mise en place du lien entre votre jeedom et votre alarme
- ajout d'un partage par mail pour la remontée des événements 

>**IMPORTANT**
>
>Un point important, Ajax ne remonte pas d'alerte globale lors d'un déclenchement d'alarme mais remonte le statut sur le détecteur qui a déclenché l'alarme (commande événements).

### Configuration du lien 

Pour la mise en place du lien entre votre Jeedom et votre alarme Ajax il faut aller dans "Plugin" -> "Gestion de plugin" -> "Ajax Système" puis cliquer sur "Se connecter", là vous rentrez vos identifiants Ajax et cliquez sur "Valider".

>**NOTE**
>
> Jeedom ne sauvegarde absolument pas vos identifiants Ajax : ils sont juste une utilisés pour la première requête à Ajax et avoir le token d'accès et le refresh token. Le refresh token permet de récupérer un nouveau token d'accès qui a une durée de vie de quelques heures seulement.

>**NOTE**
>
> Une fois le lien fait, toutes les requêtes passent par notre cloud, mais à aucun moment le cloud ne stock votre token d'accès, il n'est donc pas possible avec seulement le cloud Jeedom d'agir sur votre alarme. Pour toute action sur celle-ci il faut absolument la combinaison du token d'accès de votre Jeedom et d'une clé connue uniquement de notre cloud.

### Configuration de la remontée d'événements

Il faut, depuis l'application Ajax, aller sur le hub puis dans paramètres (petite roue crantée en haut à droite) aller sur utilisateur et depuis cet emplacement, rajouter l'utilisateur : ajax@jeedom.com 

## Equipement 

Une fois la configuration sur "Plugin" -> "Gestion de plugin" -> "Ajax Système" il vous suffit de faire synchroniser, Jeedom va automatiquement créer tous les équipements Ajax reliés à votre compte Ajax. 

### Détecteur de mouvement

Petit spécificité pour le détecteur de mouvement, celui-ci ne remonte pas la détection de mouvement en permanence. En effet il ne le remonte que lorsque l'alarme est active et par la commande événement.

### Détecteur d'ouverture

Pour lui pas de soucis, vous avez l'état en temps réel de l'information de fenêtre/porte ouverte/fermée.
