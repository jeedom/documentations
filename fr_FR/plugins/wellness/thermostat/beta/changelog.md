# Changelog Thermostat

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

- Support des images d'équipement personnalisées (Jeedom 4.5)
- Correction d'un bug sur le support des consignes decimal

# 22/07/2024

- Correction d'un bug en debian 12

# 13/06/2024

- Meilleure gestion des thermostats désactivé

# 19/02/2024

- Correction d'un bug qui crée des crons invalide
- Correction de bug si il y avait 2 ordres en meme temps (merci @phpvarious)

# 03/01/2024

- Préparation pour jeedom 4.4

# 19/12/2023

- Possibilité de saisir des valeurs négatives pour les commandes Offsets relatives aux apports internes

# 27/04/2023

- Amélioration lors des changements de mode *(climatisation, chauffage ou les deux)*
- Suppression du code obsolète pour Imperihome

# 20/04/2023

- Amélioration de la gestion des ouvrants

# 03/10/2022

- Le smartstart ne peux plus outrepasser le lock du thermostat

# 29/07/2022

- Correction sur le remplissage de certains champs de configuration des équipements via la liste de sélection des commandes

# 21/10/2021

- Ajout de la présentation des équipements thermostats en mode tableau
- L'hystérésis positive est désormais également possible en mode climatisation

# 14/12/2020

- Modernisation de l'interface
- Ajout d'une option permettant de n'utiliser que l'hystérésis positive pour la chauffe
- Ajout de la possibilité d'afficher une commande de son choix sur le widget du thermostat
- Mise à jour de la documentation

# 11/11/2020

- Optimisations générales
- Suppression de la commande "Humidité"
- Nouvelle présentation de la liste des objets
- Ajout du tag "Compatibilité V4"

# 01/06/2020

- Ajout de paramètre de delta consigne - température extérieure pour le calcul de la direction chaud/froid

# 07/04/2020

- Correction de bugs

# 21/12/2019

- Ajout d'une option pour le seuil de cycle chaud afin de permettre la prise en compte de l'inertie

# 17/12/2019

- Correction d'un souci d'affichage
- Ajout d'une option "Seuil de cycle où le chauffage est considéré comme chaud"

# 16/12/2019

- Correction de bug sur le mode off du thermostat
- Ajout d'une option pour limiter la durée d'un second cycle à 100% du temps (permet de prendre en compte le fait que les radiateurs sont déjà chauds)

# 03/11/2019

- Correction d'un bug sur les commandes orphelines

# 23/10/2019

- Correction d'un bug sur le off

# 23/10/2019

- Correction de bugs

# 06/10/2019

- Mise à jour de la FAQ sur les soucis de non affichage des actions/modes

# 01/10/2019

- Correction de bugs

# 15/08/2019

- Mise à jour de la doc
- Prise en charge de php 7.3

# 02/07/2019

- Correction de bugs

# 30/04/2019

- Amélioration de l'interface

# 29/04/2019

- Ajout d'une option "Limite les cycles marche/arrêt (pellet, gaz, fioul) et PID". Merci @Pierrick

# 11/03/2019

- Possibilité d'ajouter un message d'alerte si le thermostat est suspendu depuis plus de XX minutes
- Ajout en mode temporel d'un delta de consigne
- Correction de bugs

# 04/01/2019

- Correction d'un bug sur le Smartstart si l'agenda est désactivé après la planification

# 28/12/2018

- Correction de bug sur le panel mobile

# 27/11/2018

- Correction de bug

# 20/11/2018

- Ajout d'un calcul de performance (kWh/DJU) si une commande de consommation est donnée au plugin
- Correction d'un bug sur la gestion des alertes de défaillance des sondes de température
- Ajout d'un champs pour une commande d'humidité (utile uniquement pour le plugin Google Smarthome)

# 01/07/2018

- Correction d'un bug sur la suspension du thermostat lors de l'ouverture d'une fenêtre

# 06/06/2018

- Correction de bug

# 23/02/2018

- Correction d'un warning dans le code

# 29/01/2018

- Correction de bug sur les ouvertures/fermetures de fenêtre
