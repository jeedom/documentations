Ce plugin permet de connecter les controleurs de piscine Swimo avec Jeedom.
Le plugin permet de récupérer les valeurs des différents capteurs ainsi que contrôler les actionneurs. (changement de modes, On/Off, changement des consignes)

Configuration du plugin
=======================

Après téléchargement du plugin, il vous suffit juste d’activer celui-ci,
puis de configurer quelques éléments :

- l'adresse IP du swimo
- le serial du swimo
- L'apikey du swimo

![swimo](../images/swimo1.png)

Configuration des équipements
=============================

La synchronisation des équipements permet de récupérer les sondes et les actionneurs configurés sur le Swimo.

![swimo2](../images/swimo2.png)

Une fois configuré dans un objet, vous obtiendrez vos éléments dans le dashboard :

![swimo3](../images/swimo3.png)

> **Note**
>
> - Les données sont actualisées toutes les 5 minutes ou lors d'une action.
> - Les valeurs de consigne ne sont pas affichées par défaut.
> Ils sont pleinement utilisables via les scénarios.
