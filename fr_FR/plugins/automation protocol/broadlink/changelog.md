# Changelog Broadlink

>**IMPORTANT**
>
>S'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

# 28/02/2025

- Fix une fuite de mémoire sur le démon
- Fix un soucis d'installation de dépendances qui pouvait se produire sur certaines installations
- Suppression de **l'installation** de 2 dépendances (`pycrypto` & `asn1crypto`) qui ne sont plus utiles pour le plugin
- Modernisation de l'interface
- Debian 11 requis
- Compatibilité Debian 12
- Jeedom v4.4.8 requis

# 30/09/2022

- Correction de l'installation des dépendances sur Jeedom v4.2

# 05/03/2021

- Mise à jour du script de dépendances suite au changement cryptography

# 15/01/2021

- Correction d'un soucis sur les dépendances en buster

# 23/11/2020

- Gestion des les dépendances de certains installations corrompus par tierces de cryptography en python 3 *(relancez les dépendances si vous êtes confrontés a un souci)*

# 20/11/2020

- Optimisations générales
- Nouvelle présentation de la liste des objets
- Ajout du tag "Compatibilité V4"

# 31/07/2020

- Passage a python 3 *(il faut probablement relancer les dépendances)*
- Ajout de la gestion du RM4 *(lire la documentation pour la particularité)*
- Ajout d'un apprentissage avancé RF avec deux étapes, une pour faire varier les fréquences et la trouver et une autre pour apprendre. Cela augmentera la compatibilité d'apprentissage

# 11/09/2019

- Adaptation pour Jeedom v4

# 09/05/2018

- Rajout de l'image des SC1

# 10/03/2018

- Force yes sur les dépendances
