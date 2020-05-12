# Plugin Notification Manager

Ce plugin permet de gerer les notifications (reprise en case d'erreur, generation de texte...)

# Configuration du plugin

Après téléchargement du plugin, il vous faudra simplement activer le plugin.

# Configuration des équipements

## Equipement

La configuration des équipements Notification Manager est accessible à partir du menu Plugins puis Communication. Vous retrouverez ici la configuration de votre équipement :

- Nom de l'équipement notifier : nom de l'équipement
- Objet parent : son objet parent
- Activer
- Visible

## Commande

C'est ici que vous allez pouvoir ajouter des commandes de notifications. Une fois ajouter pour chaque commande vous allez pouvoir definir les commandes de type message a utiliser dans l'ordre des prioritées.

Vous avez comme options :

- Test d'éxécution : permet d'ajouter un test avant l'execution de la notification, si le test est faux le plugin ne fera rien, si il est vrai alors il executera les notification dans l'ordre de prioritées jusqu'a trouver une qui marche. Si le champs est vide alors le test est ignoré.

> **NOTE**
>
> Vous avez aussi un test par commande dans la notification.


**Exemple simple**

Exemple vous pouvez mettre en premier une commande de type Slack puis une commande de type SMS. Si l'envoi par Slack ne marche pas alors il envera le message sur SMS.

**Exemple plus complexe**

Exemple vous pouvez mettre en premier une commande de type Slack et une commande SMS (dans la meme case séparé par des &&), puis mail. Lors de l'utilisation le plugin va d'abord envoyé le message sur Slack et SMS, si les deux ne marchent pas alors il enverra par mail.

# Génération de texte

Le plugin offre aussi une possibilité de generation de texte pour que les messages ne soit pas toujours les meme. Le systeme est le meme que pour les interactions :

- [Coucou\|Salut] ca va ? => Donnera soit "Coucou ca va ?" ou  "Salut ca va ?"

# Texte conditionnel

Vous pouvez aussi mettre du texte conditionnel sous la forme {(test) ? vrai : faux}.

> **IMPORTANT**
>
> Il faut absolument mettre le test (la condition) entre parenthèse

Voici un exemple pour la méteo du matin avec texte conditionnel et génération de texte :

\[Bonjour\|Salut\|Coucou\] \[j'espères que tu as bien dormis ?\|bien dormis ?\|ça va ?\] . \[Aujourd'hui il fera\|Aujourd'hui le temps sera\|La météo annonce\] \#[Maison\]\[Météo\]\[Condition\]\# \[et la température sera de\|avec\] {(\#\[Maison\]\[Météo\]\[Température Max\]\# < 6) ? \[oula il va faire froid\|oula il caille\]: } \#\[Maison\]\[Météo\]\[Température Max\]\# degrés.

# FAQ

>**Le plugin gere t-il ask ?**
>
>Oui le plugin gere le ask.
