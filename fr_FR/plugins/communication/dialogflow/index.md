# Présentation

Le plugin dialogflow permet de connecter Jeedom à Google Home/Assitant par une application native et les interactions

> **NOTE**
>
> Il existe aussi le plugin Google Smarthome qui permet de connecter Jeedom à Google Home/Assitant mais cette fois par le bais de l'intégration Smarthome de Google, celui-ci n'utilise donc pas les intéractions.

> **Important**
>
> Le plugin necessite un abonnement aux services vocaux. Vous pouvez gérer votre abonnement [ici](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

## Synchronisation et délai

En mode cloud (et uniquement en mode cloud), il y a des délai de synchronisation lors des actions suivantes :

- Activation du compte
- Achat d'année sur le service Assistant Vocaux
- Changement de clef api du plugin Google smarthome
- Changement de l'url du jeedom
- Changement de mot de passe market

# Configuration

Installez le plugin et activez-le. Ensuite toujours sur la page de configuration du plugin cliquez sur "Envoyer" pour envoyer votre configuration au market.

![dialogflow](../images/dialogflow1.png)

> **IMPORTANT**
>
> Vous n'avez pas à créer d'équipement pour ce plugin. Il vous suffit de suivre les instructions ci-dessous.

Sur le market il vous faut activer "Google Smarthome" dans l'onglet "Mes Services" puis "Configurer" sur la ligne "Assistant vocaux" à partir de votre profils et attendre que le status passe à actif (ca prend environ 6h).

> **IMPORTANT**
>
> L'url d'accès de votre jeedom doit absolument être en https

> **NOTE**
>
> Vous ne pouvez connecter que un seul Jeedom à Google par compte market

> **IMPORTANT**
>
> Suite à l'activation et/ou modification des informations pour Google Smarthome il faut **attendre 24h** pour que cela soit prise en compte

Sur un téléphone avec Google Assistant, dites "Parler avec Jeedom", Google va vous indiquer qu'il faut lier votre compte Jeedom et Google cliquez sur oui : 

![dialogflow](../images/dialogflow2.png)

Indiquez vos identifiants market : 

![dialogflow](../images/dialogflow3.png)

Google va vous indiquer que la configuration est crée/mise à jour avec succès : 

![dialogflow](../images/dialogflow4.png)

Voilà, le lien entre votre Jeedom et Google Home/Assistant est fait.

Vous pouvez maintenant parler à votre Jeedom et utiliser toutes les interactions de votre Jeedom directement depuis votre Google Home/Assistant.
Depuis votre Google Home/Assistant, dites simplement "Parler à Jeedom", "Demande à Jeedom" ou encore "Dis à Jeedom" pour démarrer l'interaction avec Jeedom et "Merci" quand vous avez terminé pour clore la conversation.

# Mode sécurisé

Le mode sécurisé rajoute une couche d'autorisation au niveau de Jeedom. Par defaut seul la clef API est nécessaire en mode securisé il y a une 2eme chaine de caractère unique par utilisateur (non stocker completement en base) qui doit etre valide.

Pour s'en servir rien de plus simple il faut aller sur la page de configuration du plugin et activer le mode sécurisé, ensuite vous faite une demande à Google pour Jeedom. Enfin aller sur la page Plugin -> Communication -> Dialogflow vous allez voir une demande d'acceptation d'identifiant il suffit de la valider.

> **NOTE**
>
> Le mode sécurisé n'est pas actif par défaut pour pouvoir passer la validation Google mais il est grandement conseillé de l'activer

# Remise à zéro de la configuration

Si vous avez mis une mauvais URL ou clef API ou un changement d'url ou de clef API il faut faire un reset de la configuration puis refaire la procedure de connexion voila comment faire.

Ensuite sur l'application Google Assistante, dites "Parler à Jeedom" puis "Supprimer configuration". L'application devrait vous dire que la configuration est supprimée avec succès. Ensuite refaite la procedure de connexion.

# FAQ

>**J'ai l'erreur ESOCKETTIMEDOUT**
>
>C'est que votre URL ou la clef API configurée sur le market n'est pas bonne. Attention aussi au délai de réponse défini dans les interactions, Google impose un délai de réponse avant timeout de 4 secondes.

>**Lors d'un "parler a jeedom" vous recevez IMMÉDIATEMENT un "Erreur votre le serveur de configuration n'a pas répondu correctement. Merci d'aller voir la documentation code 500"**
>
>Aller sur cette [url](https://gala-demo.appspot.com), sur cette page selectionnez votre compte Google (celui utilisé par Google Home/Assistant) dans "Service ID" mettez jeedom-183212 et cliquez sur "Unlink my account" (bouton à droite). Ensuite dans Google Assistant refaite la configuration (sauf partie market)

>**Erreur votre Jeedom n'a pas répondu correctement code ETIMEDOUT. Autre chose**
>
>Cela vient de votre Jeedom qui n'a pas répondu dans le temps impartie (imposé par Google). Cela peut venir de 2 choses, une connexion internet un peu lente, ou des actions qui demande trop de temps.

>**A chaque demande Google vous indique que votre configuration a bien été mise à jour**
>
>C'est que Google ne reconnait pas votre voix il vous considere donc comme un nouvelle utilisateur. Pour corriger vous pouvez essayer de reconfigurer voice match.
