# Présentation

Le plugin dialogflow permet de connecter Jeedom à Google Home/Assitant par une application native et les interactions

> **NOTE**
>
> Il existe aussi le plugin Google Smarthome qui permet de connecter Jeedom à Google Home/Assitant mais cette fois par le bais de l'intégration Smarthome de Google, celui-ci n'utilise donc pas les intéractions.

> **Important**
>
> Le plugin necessite un abonnement aux services vocaux. Vous pouvez gérer votre abonnement [ici](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

# Configuration

Installez le plugin et activez-le. Ensuite toujours sur la page de configuration du plugin cliquez sur "Envoyer" pour envoyer votre configuration au market.

![dialogflow](../images/dialogflow1.png)

> **IMPORTANT**
>
> Vous n'avez pas à créer d'équipement pour ce plugin. Il vous suffit de suivre les instructions ci-dessous.

Sur le market il vous faut activer "Google Smarthome" dans l'onglet "Mes Services".

> **IMPORTANT**
>
> L'url d'accès de votre jeedom doit absolument être en https

> **NOTE**
>
> Vous ne pouvez connecter que un seul Jeedom à Google par compte market

Sur un téléphone avec Google Assistant, dites "Parler avec Jeedom", Google va vous indiquer qu'il faut lier votre compte Jeedom et Google cliquez sur oui : 

![dialogflow](../images/dialogflow2.png)

Indiquez vos identifiants market : 

![dialogflow](../images/dialogflow3.png)

Google va vous indiquer que la configuration est crée/mise à jour avec succès : 

![dialogflow](../images/dialogflow4.png)

Voilà, le lien entre votre Jeedom et Google Home/Assistant est fait.

Vous pouvez maintenant parler à votre Jeedom et utiliser toutes les interactions de votre Jeedom directement depuis votre Google Home/Assistant.
Depuis votre Google Home/Assistant, dites simplement "Parler à Jeedom", "Demande à Jeedom" ou encore "Dis à Jeedom" pour démarrer l'interaction avec Jeedom et "Merci" quand vous avez terminé pour clore la conversation.

# FAQ

>**J'ai l'erreur ESOCKETTIMEDOUT**
>
>C'est que votre URL ou la clef API configurée sur le market n'est pas bonne. Attention aussi au délai de réponse défini dans les interactions, Google impose un délai de réponse avant timeout de 4 secondes.

>**Erreur votre Jeedom n'a pas répondu correctement code ETIMEDOUT. Autre chose**
>
>Cela vient de votre Jeedom qui n'a pas répondu dans le temps impartie (imposé par Google). Cela peut venir de 2 choses, une connexion internet un peu lente, ou des actions qui demande trop de temps.
