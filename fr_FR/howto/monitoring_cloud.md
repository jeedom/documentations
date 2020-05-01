# Monitoring cloud

## Description

Le monitoring cloud est un service Jeedom SAS payant qui surveille en permanance votre ou vos Jeedoms et vous prévient en cas de soucis.

En fonction du nombre de mois pris vous aurez le droits à des mois offerts : 

- 12 mois : 1 mois offerts
- 24 mois : 4 mois offerts
- 36 mois : 8 mois offerts

## Qu'est ce qui est surveillé

Jeedom envoi regulierement les informations de la page santé à notre service de monitoring, qui en fait l'analyse et vous prévient en cas de soucis. De plus si votre box n'envoi pas d'information pendant plus de 15min notre service monitoring vous prévient qu'il y a un soucis.

## Comment suis-je prévenu

Par default vous êtes prévenu par un mail sur votre mail configuré dans votre profils mais vous pouvez dans la configuration du monitoring cloud (sur votre page profils du market) : 

- Mettre une autre adresse mail (une seule possible)
- Ajouter une alerte sur Télégram
- Ajouter une alerte sur Slack (il faut juste donner l'adresse de Webhook)
- Ajouter une alerte par SMS (attention cela necessite que vous ayez du crédit SMS sur le market)
- Ajouter une alerte par Notification (nécessite l'app mobile) 

> **Telegram**
>
> Vous pouvez trouver votre chatid a partir de jeedom en allant dans l'équipement telegram puis configuration avancé de la commande du destinataire voulu puis le bouton information et la dans le champs configuration vous avez le chatid

## Comment l'activer

La procedure est assez simple, il faut : 

- avoir du crédit monitoring cloud (il s'achete par lot de 1 mois, vous pouvez donc en prendre 2 mois puis arreter 6 mois puis en reprendre après)
- avoir jeedom 3.3.44 minium

Après avoir ajouté du crédit monitoring cloud, il faut soit attendre quelques heures (24h environ), soit dans Jeedom, sur la partie configuration puis mise à jour cliquer sur le bouton "test" pour la connexion au market (cela force le Jeedom a récupérer les informations du market et donc le fait que le service monitoring cloud est actif).

>**IMPORTANT**
>
> Une fois le service activé celui-ci surveille tous les Jeedom relié à votre compte

>**IMPORTANT**
>
> Pour les notifications il suffit de récupérer l'arn de votre mobile, il se situe dans le plugin mobile, sur votre equipement mobile puis d'accéder à l'onglet "notification" puis copie la ligne "ARN" attention il faut prendre uniquement ce qu'il y a apres "arn:aws:sns:eu-west-1:507915066327:endpoint/"

## C'est compatible avec tout ?

- Smart (testé)
- Debian x64 Stretch (testé)
- Debian x64 Jessie
- RPI
