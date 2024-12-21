# Monitoring cloud

## Description

Le monitoring cloud est un service Jeedom SAS payant qui surveille en permanence votre ou vos Jeedoms et vous prévient en cas de soucis.

En fonction du nombre de mois pris vous aurez le droit à des mois offerts : 

- 12 mois : 1 mois offert
- 24 mois : 4 mois offerts
- 36 mois : 8 mois offerts

## Qu'est ce qui est surveillé

Jeedom envoie regulièrement les informations de la page santé à notre service de monitoring qui en fait l'analyse et vous prévient en cas de soucis. De plus si votre box n'envoie pas d'information pendant plus de 15 minutes notre service monitoring vous prévient qu'il y a un soucis.

## Comment suis-je prévenu ?

Par default vous êtes prévenu par un mail sur votre mail configuré dans votre profil mais dans la configuration du monitoring cloud (sur votre page profil du market) vous pouvez : 

- Mettre une autre adresse mail (une seule possible)
- Ajouter une alerte sur Télégram
- Ajouter une alerte sur Slack (il faut juste donner l'adresse de Webhook)
- Ajouter une alerte par SMS (attention cela necessite que vous ayez du crédit SMS sur le market)
- Ajouter une alerte par Notification (nécessite l'app mobile) 

> **Telegram**
>
> Vous pouvez trouver votre chatid à partir de jeedom en allant dans l'équipement telegram puis configuration avancée de la commande du destinataire voulu puis le bouton information et là dans le champs configuration vous avez le chatid.

> **IMPORTANT**
>
> Attention on voit beaucoup d'utilisateurs avec des boites mail "mailinblack" qui lors du 1er échange demandent à l'expéditeur de valider un lien pour prouver que c'est bien un humain. Ce système n'est pas compatible avec le système d'envoi de mail du service monitoring. Merci donc de mettre une addresse mail n'utilisant pas ce système sur votre page profil du market sans quoi vous ne recevrez jamais d'alerte du système.

## Comment l'activer

La procedure est assez simple, il faut : 

- avoir du crédit monitoring cloud (il s'achète par lot de 1 mois, vous pouvez donc en prendre 2 mois puis arrêter 6 mois puis en reprendre après)
- avoir jeedom 3.3.44 minimum

Après avoir ajouté du crédit monitoring cloud, il faut soit attendre quelques heures (24h environ), soit dans Jeedom, aller sur la partie configuration puis mise à jour cliquer sur le bouton "test" pour la connexion au market (cela force le Jeedom à récupérer les informations du market et donc le fait que le service monitoring cloud est actif).

>**IMPORTANT**
>
> Une fois le service activé celui-ci surveille tous les Jeedom reliés à votre compte. Cependant, à partir de Jeedom 4.2, il est possible de désactiver le monitoring depuis la configuration de celui-ci (onglet Market/mise à jour)

>**IMPORTANT**
>
> Pour les notifications il suffit de récupérer l'arn de votre mobile, il se situe dans le plugin mobile, sur votre equipement mobile puis d'accéder à l'onglet "notification" puis de copier la ligne "ARN". Attention il faut prendre uniquement ce qu'il y a apres "arn:aws:sns:eu-west-1:507915066327:endpoint/"
