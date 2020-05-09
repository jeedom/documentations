Ce plugin permet d’établir une connexion entre Slack et Jeedom pour
envoyer des alertes à partir de Jeedom ou discuter avec Jeedom (en
utilisant les interactions).

Configuration du plugin 
=======================

Après téléchargement du plugin, il vous faut l’activer, celui-ci ne
nécessite aucune autre configuration.

![slack1](../images/slack1.PNG)

Configuration des équipements 
=============================

La configuration des équipements Slack est accessible à partir du menu
Plugins :

![slack2](../images/slack2.PNG)

Voilà à quoi ressemble la page du plugin Slack (ici avec déjà 1
équipement) :

![slack3](../images/slack3.PNG)

> **Tip**
>
> Comme à beaucoup d’endroits sur Jeedom, mettre la souris tout à gauche
> permet de faire apparaître un menu d’accès rapide (vous pouvez à
> partir de votre profil le laisser toujours visible).

Une fois que vous cliquez sur l’un d’eux, vous obtenez :

![slack4](../images/slack4.PNG)

Vous retrouvez ici toute la configuration de votre équipement :

-   **Nom de l’équipement** : nom de votre équipement Slack

-   **Activer** : permet de rendre votre équipement actif

-   **Visible** : le rend visible sur le dashboard

-   **Domaine** : nom de domaine de votre Slack (permet notamment si
    vous avez plusieurs Slack de les différencier)

-   **Authentification token** : token de l’api Slack, utile uniquement
    pour l’envoi de fichiers (capture d’une camera par exemple), voir
    plus bas la méthode pour le récupérer

-   **URL de retour** : c’est l’URL qui faudra donner dans le webhook de
    Slack (attention il faut que votre Jeedom soit accessible
    de l’extérieur)

En dessous vous retrouvez la configuration des commandes :

-   **Nom** : nom de la commande

-   **Webhook** : URL à appeler pour envoyer un message sur Slack

-   **Destination** : non obligatoire, permet de forcer l’envoi d’un
    message vers un channel (canal) ou un utilisateur

-   Configuration avancée (petites roues crantées) : permet d’afficher
    la configuration avancée de la commande (méthode
    d’historisation, widget…​)

-   Tester : permet de tester la commande

-   Supprimer (signe -) : permet de supprimer la commande

> **Tip**
>
> Il existe par défaut 2 commandes : Expéditeur qui vous donne le nom du
> dernier expéditeur du message et Message qui vous donne le message,
> cela peut servir, si vous voulez faire quelque chose qui n’est pas
> possible avec les interactions de déclencher un scénario sur l’arrivée
> d’un nouveau message par exemple et de récupérer la valeur de celui-ci
> (on peut par exemple imaginer faire lire le message sur des Sonos ou
> un Karotz)

Création d’un compte Slack 
==========================

Rien de plus il suffit d’aller [ici](:https://slack.com/), et de
renseigner une adresse mail et un nom de domaine/companie, par exemple :

![slack5](../images/slack5.PNG)

Il ne vous reste plus qu’à valider, vous allez recevoir un mail, il faut
cliquer sur le lien pour activer votre compte et c’est bon

Ensuite vous arriverez sur votre Slack :

![slack6](../images/slack6.PNG)

À partir de la vous trouvez sur la gauche les canaux (channels) et les
utilisateurs, au centre vous pouvez télécharger l’application Slack pour
iOS, Android, Mac ou Windows

Ajout du webhook sortant 
========================

Les wekhook permettent à Slack d’informer Jeedom de l’arrivée d’un
message et d’attendre la réponse de Jeedom pour vous la retransmettre,
pour ce faire il faut aller dans les paramètres :

![slack7](../images/slack7.PNG)

Il faut ensuite cliquer sur intégration :

![slack8](../images/slack8.PNG)

Tout en bas vous trouverez "Outgoing WebHooks" :

![slack9](../images/slack9.PNG)

Cliquez sur "Add" :

![slack10](../images/slack10.PNG)

Puis "Add Outgoing WebHooks Integration" :

![slack11](../images/slack11.PNG)

Vous retrouvez vers le bas de la page les différents paramètres :

-   **Channel** : non obligatoire, permet de dire à Slack d’envoyer tout
    ce qui se trouve dans ce Channel à Jeedom. On peut par exemple créer
    un channel juste pour Jeedom (plus pratique que de mettre un
    mot déclencheur)

-   **Trigger Word(s)** : non obligatoire si vous avez mis un channel
    sinon il en faut absolument un. Ce champ permet de définir un mot
    déclencheur de l’envoi à Jeedom, par exemple si vous mettez Jeedom
    toutes vos demandes devront commencer par Jeedom (ex : Jeedom
    combien fait-il dans le chambre)

-   **URL(s)** : URL à appeler, vous la trouvez sur la page de votre
    équipement sous Jeedom sous le nom de "URL de retour"

Les autres champs ne sont pas utiles, hormis peut être le "Customize
Name" qui permet de définir le nom du bot Jeedom (nom avec lequel répond
Jeedom), vous pouvez aussi avec "Customize Icon" changer l’icone de
Jeedom.

Il faut ensuite cliquer sur "Save Settings" et c’est bon

![slack12](../images/slack12.PNG)

Voilà, vous pouvez parler à Jeedom au travers de Slack

> **Important**
>
> N’oubliez pas dans Jeedom de renseigner votre nom de domaine (nom de
> compagnie), sinon Jeedom refusera de vous répondre (attention ce champ
> est sensible à la case).

> **Tip**
>
> Étant donné que Jeedom sépare les équipements par domaine, il est
> possible si vous avez plusieurs domaines de séparer les équipements et
> donc les scénarios derrière.

Ajout due webhook entrant 
=========================

Les webhooks entrants permettent à Jeedom de communiquer un message sur
un channel (canal) ou directement à une personne. Sans ces webhook
Jeedom ne pourra pas prendre l’initiative de vous envoyer un message.
Pour ce faire il faut aller dans les paramètres :

![slack7](../images/slack7.PNG)

Il faut ensuite cliquer sur intégration :

![slack8](../images/slack8.PNG)

Tout en bas vous trouverez "Incoming WebHooks" :

![slack13](../images/slack13.PNG)

Ensuite, il vous faut choisir un channel (canal) ou un utilisateur de
destination par défaut (on peut après en spécifier un par commande dans
Jeedom) :

![slack14](../images/slack14.PNG)

Cliquez ensuite sur "Add Incoming WebHooks Integration".

![slack15](../images/slack15.PNG)

En bas de la page vous retrouvez les informations du webhook, il vous
suffit de récupérer la valeur du champ "Webhook URL" et la copier dans
le champ Webhook de votre commande.

> **Tip**
>
> Dans le champ destination de la commande dans Jeedom vous pouvez
> spécifier un channel (ex \#monchannel) ou un utilisateur (ex @toto).

Voilà, sous Jeedom vous avez juste à sauvegarder et là vous pourrez à
partir de Jeedom envoyer des messages sur Slack

Récupération du token 
=====================

Voila comment récupérer votre token pour que Jeedom puisse envoyer des
fichiers sur Slack, et en particulier des captures des caméras par
exemple. Tout d’abord il faut aller
[ici](https://api.slack.com/custom-integrations/legacy-tokens), puis tout en bas aller sur :

![slack17](../images/slack17.PNG)

Ici en face de votre équipe, demander à Slack de générer le token, il va
vous demander votre mot de passe puis vous renvoyer sur la même page,
tout en bas demander à nouveau le token. Au bout de quelques secondes
celui-ci va apparaître, il suffit de le copier dans le champ token sur
Jeedom

> **Tip**
>
> Cette étape est optionnelle, elle est juste utile pour envoyer des
> captures de votre camera par Slack par exemple.

C’est quoi le résultat ? 
========================

Voilà un exemple de ce qu’il est possible de faire une fois le plugin
correctement configuré et les interactions créées :

![slack16](../images/slack16.PNG)

> **Important**
>
> Si vous utilisez la fonction "ask" des scénarios, il faut bien envoyer
> la demande sur un channel sur lequel Jeedom écoute les réponses sinon
> votre demande "ask" tombera en "timeout"
