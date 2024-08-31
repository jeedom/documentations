# Changelog SMS

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

## 31/08/2024

- Compatibilité Debian 12
- Version minimum jeedom requise: 4.4.8

# 10/01/2024

- Ajout d'une nouvelle commande **Envoyer message à** permettant d'envoyer un sms à un numéro personnalisé sans devoir créer la commande du contact. Cela permet d'envoyer un sms à un numéro obtenu via une commande info d'un autre équipement sous Jeedom par exemple. Attention, aucune vérification du numéro n'est effectuée, il faut fournir les numéros au format international.
- Désactivation du flow control lors de la connexion au modem pour éviter des problèmes avec certains modem (par exemple modem lixee)
- Ajout de deux nouvelles options: **Autoriser les messages de numéros inconnus** & **Ajouter automatiquement les numéros inconnus**; voir documentation.
- Fix un problème avec certaines clés gsm renvoyant des caractères incorrectes lors du démarrage du démon.

# 18/10/2022

- Mise à jour liste des commandes pour Jeedom v4.3

# 20/07/2022

- Migration démon en python3

# 17/11/2020

- Optimisations générales
- Nouvelle présentation de la liste des objets
- Ajout du tag "Compatibilité V4"

# 25/09/2019

- Passage à l'interface jeedom v4

# 11/08/2019

- Prise en charge de PHP 7.3

# 18/10/2018

- Amélioration de la vérification du numéro d'expéditeur
- Correction d'un bug si le niveau de log est sur aucun

# 26/04/2018

- Mise à jour de la documentation

# 25/04/2018

- Correction du lien de la documentation
