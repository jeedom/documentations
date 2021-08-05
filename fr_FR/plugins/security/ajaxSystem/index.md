# Ajax System

## Configuration

>**IMPORTANT**
>
>Pour avoir une remontée en temps réel il faut ABSOLUMENT que votre Jeedom soit accessible de l'extérieure (URL d'accès externe utilisée)

La configuration du plugin est très simple et ce deroule en 2 étapes : 

- mise en place du lien entre votre jeedom et votre alarme
- ajout d'un partage par mail pour la remontée des évenements 

>**IMPORTANT**
>
>Un point important Ajax ne remonte pas d'alerte globale lors d'un déclenchement d'alarme mais remonte le status sur le detecteur qui a déclenché l'alarme (commande evenements)

### Configuration du lien 

Pour la mise en place du lien entre votre Jeedom et votre alarme Ajax il faut aller dans "Plugin" -> "Gestion de plugin" -> "Ajax Systeme" puis cliquer sur "Se connecter", la vous rentrez vos identifiants Ajax et cliquez sur "Valider".

>**IMPORTANT**
>
>Si vous avez un compte pro il ne faut surtout pas l'utiliser la, il faut absolument utiliser un compte utilisateur simple

>**NOTE**
>
> Jeedom ne sauvegarde absolument pas vos identifiants Ajax c'est juste une utilisé pour la premiere requete à Ajax et avoir le token d'accès et le refresh token. Le refresh token permet de recuperer un nouveau token d'accès qui à une durée de vie de quelques heures seulement

>**NOTE**
>
> Une fois le lien fait toute les requetes passent par notre cloud mais à aucun moment le cloud ne stock votre token d'accès, il n'est donc pas possible avec seulement le cloud jeedom d'agir sur votre alarme. Pour toute action sur celle-ci il faut absolument la combinaison du token d'accès de votre Jeedom et d'une clef connu uniquement de notre cloud 

### Configuration de la remontée d'evenements

Il faut depuis l'application Ajax aller sur le hub puis dans parametres (petite roue crantée en haut à droite) aller sur utilisateur et la rajouter l'utilisateur : ajax@jeedom.com 

## Equipement 

Une fois la configuration sur "Plugin" -> "Gestion de plugin" -> "Ajax Systeme" il vous suffit de faire synchroniser, Jeeodm va automatiquement creer tous les équipements ajax reliée à votre compte Ajax. 

### Detecteur de mouvement

Petit specificité pour le detecteur de mouvement celui-ci ne remonte pas la detection de mouvement en permanance. En effet il ne le remonte que lorsque l'alarme est active et par la commande évenement

### Detecteur d'ouverture

Pour lui pas de soucis vous avez tout le temps et en temps réel l'information de fenetre ouverte ou non.
