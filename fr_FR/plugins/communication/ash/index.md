# Alexa Smarthome

Ce plugin permet de faire le lien entre votre Jeedom et Alexa

Il peut fonctionner en passant par un service cloud mis à disposition par Jeedom.

> **Important**
>
> Le plugin necessite un abonnement aux services vocaux. Vous pouvez gérer votre abonnement [ici](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

> **Important**
>
> Le plugin ne supporte pas les équipement avec des double fonction (2 sortie comme certain module zwave Fibaro). Il faut absolument passer par 2 virtuels pour le décomposer.

# Mise en place de la connexion vers Alexa

> **IMPORTANT**
>
> Il est important de faire les étapes suivantes dans l'ordre indiqué !!!

## Configuration Market

Après l'installation du plugin, il vous suffit d'aller dans la partie configuration du plugin puis de cliquer sur envoyer la configuration au market.

## Configuration Alexa

Une fois le service bien actif il faut sur l'application Alexa ou sur le [site web](https://alexa.amazon.fr/spa/index.html) aller dans la partie skill et chercher le skill Jeedom puis l'activer, la il vous demandera des identifants il faut mettre ceux du market (attention bien mettre vos identifiants market et non ceux de votre Jeedom)

> **IMPORTANT**
>
> Si vous avez un message d'erreur vous indiquants que votre mot de passe ou non d'utilisateur n'est pas bon il faut :
> - vérifier qu'Amazon Alexa est bien en actif sur le market
> - si c'est bien le cas, etês vous sur de vos identifiants (attention il faut respecter majuscule/minuscule) ?
> - si c'est le cas changer votre mot de passe sur le market et sur la configuration du service d'assistant vocal (page profils du market onglet mes services) faire sauvegarder

> **IMPORTANT**
>
>Toute modification de configuration des équipements transmis à Alexa (ajout d'un équipement, suppression d'un équipement, changement d'un générique type d'une commande) nécessite forcement d'aller dans Plugin -> Communication -> Alexa puis de faire sauvegarder et dans l'application Alexa de refaire une découverte

## Configuration du plugin

Sur votre Jeedom, allez sur Plugin -> Communication -> Alexa et dans la partie équipement sélectionnez les équipements à transmettre à Alexa ainsi que le type de l'équipement.

> **IMPORTANT**
>
> Le plugin se base sur les types génériques de Jeedom des commandes pour piloter votre domotique. Il est donc très important de configurer ceux-ci correctement. Vous pouvez voir [ici](https://jeedom.github.io/plugin-mobile/fr_FR/#tocAnchor-1-6) des explications sur les generiques type

Vous pouvez aussi créer des scènes dans l'onglet scène, avec des actions d'entrée et de sortie.

> **IMPORTANT**
>
> Si vous n'envoyez aucun équipement (aucun OK dans la liste des équipements sur le plugin Alexa), Amazon considere que c'est une erreur et reprend la derniere configuration connue. Donc si vous faite oublier tout et n'envoyez aucun équipement amazon reprendra la derniere configuration connu et donc fera tout réapparaitre.

# FAQ

>**J'ai lu que le plugin necessiterait un abonnement, pourquoi ?**
>
> C'est assez simple, Jeedom est une solution non-cloud (entendre tout est chez vous il n'y a pas de serveur de notre coté pour votre Jeedom) mais Alexa ne peut envoyer des demandes que vers un serveur unique pour un skill. On a donc été obligé de faire un serveur qui recoit toute les demandes d'Alexa et les retransmets vers votre Jeedom. Malheureusement se serveur (en plus du coût de développement et de maintenance) à un coût de location de notre coté. Voila pourquoi il y aura un abonnement pour le service "Assistant Vocal" qui couvrira et Amazon et Google (vous inquietez pas pour le prix il sera minime, le but est juste d'amortir le coût du serveur)

>**Pour ouvrir/fermer les volets je dois dire allume/eteint ?**
>
> C'est normal Alexa ne supporte pas les équipements de type ouvrant (pour des questions de securité) il faut donc lui faire croire que c'est une lumiere. Par contre grace aux routines vous pouvez dire ouvre/ferme

>**Alexa me dis "l'appareil ne répond pas" alors que l'action est bien faite**
>
> Regardez vos types génériques, Alexa nécessite ABSOLUMENT un retour d'état sinon il vous dira que l'appareil ne répond pas. Attention aussi au délai pour faire l'action si c'est trop long vous aurez le message l'appareil ne répond pas.

>**Lors de l'association j'ai une erreur (mais pas sur un soucis de mot de passe/nom d'utilisateur)**
>
>Si vous avez une erreur lors de l'association avec Jeedom cela vient surement du faite que vous n'avez pas ajouté/transmis d'équipement avant de faire l'association. Pour corriger aller sur Plugins -> Communication -> Alexa puis coché au moins un équipement à transmettre et faite sauvegarder (vérifié que l'équipement est bien en OK, si il est en NOK cliquer sur le NOK pour voir pourquoi ou renseignez vous sur les générique type dans jeedom). Puis refaite l'association

>**Lors de l'ajout des équipement j'ai des NOK**
>
>Cliquez simplement sur le NOK une fenetre vous dira les generique type a avoir sur les commandes de l'équipement pour que cela marche

>**L'ajout d'équipement/scene n'apparait pas dans l'application alexa**
>
> Il faut :
> - supprimé tous mes équipements transmis (vert OK) depuis le plugin Alexa
> - bien sauvegarder
> - “oublié” tous mes équipement jeedom visibles dans la rubrique Maison connectée de Alexa.amazon.com (ou l’app)
> - faire une detection depuis Alexa
> - remettre les équipements
> - refaire une detection depuis Alexa
