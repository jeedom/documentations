# Ajax Système

## Configuration

>**IMPORTANT**
>
>Pour avoir une remontée en temps réel il faut ABSOLUMENT que votre Jeedom soit accessible de l'extérieure (URL d'accès externe utilisée)

La configuration du plugin est très simple et se deroule en 2 étapes : 

- mise en place du lien entre votre jeedom et votre alarme
- ajout d'un partage par mail pour la remontée des événements  

>**IMPORTANT**
>
>Un point important Ajax ne remonte pas d'alerte globale lors d'un déclenchement d'alarme mais remonte le statut sur le détecteur qui a déclenché l'alarme (commande événements)

>**IMPORTANT**
>
>Le démon sert uniquement pour la partie SIA. Si vous le désactivez vous aurez toujours les remontées d'information par le cloud. Vous pouvez donc le desactiver si vous ne vous servez pas de la partie SIA

## Compatibilité

Vous pouvez trouver [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=ajaxSystem) la liste des modules compatible avec le plugin

### Configuration du lien 

Pour la mise en place du lien entre votre Jeedom et votre alarme Ajax il faut aller dans "Plugin" -> "Gestion de plugin" -> "Ajax Systeme" puis cliquer sur "Se connecter", là vous rentrez vos identifiants Ajax et cliquez sur "Valider".

>**IMPORTANT**
>
>Si vous avez un compte pro il ne faut surtout pas l'utiliser la, il faut absolument utiliser un compte utilisateur simple

>**NOTE**
>
> Jeedom ne sauvegarde absolument pas vos identifiants Ajax : ils sont juste une utilisés pour la première requête à Ajax et avoir le token d'accès et le refresh token. Le refresh token permet de récupérer un nouveau token d'accès qui a une durée de vie de quelques heures seulement.

>**NOTE**
>
> Une fois le lien fait toute les requetes passent par notre cloud mais à aucun moment le cloud ne stock votre token d'accès, il n'est donc pas possible avec seulement le cloud jeedom d'agir sur votre alarme. Pour toute action sur celle-ci il faut absolument la combinaison du token d'accès de votre Jeedom et d'une clef connu uniquement de notre cloud 

### Configuration de la remontée d'événements

Il faut depuis l'application Ajax aller sur le hub puis dans parametres (petite roue crantée en haut à droite) aller sur utilisateur et la rajouter l'utilisateur : ajax@jeedom.com

>**NOTE**
>
>L'invitation reste et restera toujours en attente c'est normal

## Equipement 

Une fois la configuration sur "Plugin" -> "Gestion de plugin" -> "Ajax Système" il vous suffit de faire synchroniser, Jeedom va automatiquement créer tous les équipements Ajax reliés à votre compte Ajax. 

### Détecteur de mouvement

Petit specificité pour le detecteur de mouvement celui-ci ne remonte pas la detection de mouvement en permanance. En effet il ne le remonte que lorsque l'alarme est active et par la commande évenement

### Detecteur d'ouverture

Pour lui pas de soucis, vous avez l'état en temps réel de l'information de fenêtre/porte ouverte/fermée.

## SIA

>**IMPORTANT**
>
> Cette fonctionalitée n'est pour le moment pas compatible avec les RPI, et ne semble marcher correctement qu'avec Debian 11 (qui n'est pour le moment pas officiellement compatible avec jeedom car trop de plugins ne le supporte pas)

Il est possible aussi de relier l'alarme Ajax à Jeedom par le protocole SIA, qui a l'avantage d'etre local (pas de cloud) mais qui ne peut que recevoir des informations (pas de pilotage de l'alarme possible).

>**IMPORTANT**
>
> Si vous etes en python < 3.8 (Debian 10), ou si vous avez l'erreur `ImportError: cannot import name 'CommunicationsProtocol' from 'pysiaalarm'` il faut aller sur "Réglages" -> "Système" -> "Configuration" puis onglet "OS/DB" puis dans "Outils Système" cliquer sur "Ouvrir" en face d'"Administration Système". Et faire la commande `sudo pip3 install pysiaalarm==3.0.0b9`

## Configuration du SIA

La configuration du SIA est assez simple, dans "Plugin" -> "Gestion de plugin" -> "Ajax Systems", vous allez avoir : 
- le port du démon SIA
- le compte SIA
- la clé de cryptage SIA

Il faut ensuite aller sur l'application Ajax Systeme (depuis votre téléphone), aller dans "Appareils" puis cliquer sur le hub, aller dans la configuration de celui-ci (roue crantée en haut à droite), aller dans "Centre de surveillance" et remplir les informations : 

- port (celui dans Jeedom)
- compte SIA (idem dans Jeedom)
- clé de cryptage (idem)
- ip : mettre l'ip local de Jeedom

Vous pouvez changer aussi la fréquence de test du service de 1min à 24h (pour reduire la charge sur votre Jeedom).

Normalement si tout est bon vous devriez voir le "Centre de télésurveillance" passer à "Connecté"

>**IMPORTANT**
>
> Certaine information ne remontent que si le SIA est configuré

# FAQ

>**Configuration MQTT**
>
>Dans la configuration du plugin vous avez la possibilité de passer pour la partie SIA en mqtt, il y a volontairement aucune explication de comment car la mise en place est relativement complexe. L'option est la pour répondre à un besoin d'un client seulement.
