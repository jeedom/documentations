# Changelog Nuki

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

## 18/11/2024

- Optimisations mineurs afin d'éviter des warnings dans le cas où une serrure n'est pas joignable (panne de batterie par exemple)
- Version Jeedom 4.4 requise
- Mise à jour de la page de configuration des équipements pour Jeedom >= 4.3
- Ajout d'une commande *Etat porte binaire* sur la smart lock
- Ajout d'une config plugin pour le timeout des requêtes ainsi que le nombre de tentatives pour les commandes actions
- Définition des types génériques par défaut sur les commandes (seulement pour les commandes nouvellement créées)
- Fix: les commandes n'étaient pas créées après la première synchro, il fallait une deuxième synchro.

# 18/07/2020

- Support du Nuki Opener

# 23/10/2019

- Support de Jeedom V4

# 30/07/2018

- Correction du bug qui affichait la page d'équipement en bas lorsque le bandeau de gauche était déplié

# 03/07/2018

- Correction d'un bug qui multipliait les serrures lors d'une synchro
- Rajout de commande pour homekit
