# Changelog Harmony Hub

>**IMPORTANT**
>
>Pour rappel, s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement la mise à jour de documentation, de traduction ou de texte.

> Attention
> Refonte importante du plugin: le plugin a été entièrement réécrit y compris la communication avec le hub Harmony (via démon à présent)
>
> Nécessite Jeedom 4.4.8
>
> Compatible Debian 11 et 12! Le plugin n'est plus compatible Debian 10, si vous êtes encore sous Debian 10, n'installez pas cette version.
>
> Les anciens équipements seront marqués obsolètes et ne seront pas migrés. Utilisez l'outil "Remplacer" du core si vous souhaitez facilement adapter vos scénarios.
>
> Voir également [ce sujet sur community](https://community.jeedom.com/t/importante-mise-a-jour-pour-debian-11-et-debian-12/129908) pour plus de détails

# 28/08/2024

- Réécriture complète du plugin
- Utilisation de la méthode d'installation des dépendances du core
- Changement de la librairie pour communiquer avec le hub Harmony afin d'utiliser une librairie disposant d'un meilleur suivi
- Utilisation d'un démon afin:
  - d'améliorer la réactivité des actions
  - d'avoir un retour d'état en temps réel
- Simplification de la configuration: il ne reste que la configuration de l'IP du hub à renseigner dans la config du plugin et démarrer le démon et les équipements se synchronisent tous seuls avec Jeedom.
- Ajout d'une commande **Démarrage activité** qui indique l'activité qui est en cours de démarrage (vide si aucune)

# 17/09/2023

- Fix compatibilité Debian 11 & Python 3
- version du core minimum requise: v4.2

# 19/10/2022

- Mise à jours liste des commandes pour Jeedom v4.3
- Corrections & optimisations mineures dans l'écran de gestion des équipements

# 18/05/2021

- Correction d'un défaut de fonctionnement de certaines commandes
- Révision de l'interface
- Révision de la documentation

# 20/11/2020

- Optimisations générales
- Nouvelle présentation de la liste des objets
- Ajout du tag "Compatibilité V4"

# 20-09-2019

- Adaptation V4

# 07-06-2019

- Bugfix sur dépendances NOK alors que OK

# 23-05-2019

- Mise en place de la page équipement pour futur Jeedom

# 19-02-2019

Cette mise à jour est une maj en liée à la mise à jour de Logitech qui réactives le XMMP. Il vous faudra recréer le fichier de conf et surtout activer dans l\'application Harmony le mode développeur activant le XMMP
Pour information cette maj intervient le jour même du correctif de Logitech. Tout comme le moyen de contournement du 21-12-2018 qui  a permis à de nombreuses personnes d'être dépanné puisque ca marchait chez toutes les personnes qui etait sous Debian stretch (mieux que rien). Nous ne savions pas quand Logitech allait remettre le support du XMMP. Mais coup sur coup il y a eu une réaction.

# 21-12-2018

Correction en urgence lié à la maj de Logitech (provisoire pour dépanner, pensez à relancer les dépendances)
