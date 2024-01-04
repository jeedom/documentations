# Changelog Deconz

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

# 03/01/2024

- Préparation pour jeedom 4.4

# 19/12/2023

- Amélioration de la prise en charge de la configuration du réseaux interne de jeedom
- Correction de bugs

# 15/02/2023

- Amélioration de la page des commandes (ajout de l'état)

# 11/10/2022

- Correction de bug
- Ajout de nouveau type

# 03/02/2022

- Tentative de correction de l'erreur "cannot import name 'collections_abc' from 'six.moves'", necessite jeedom 4.2 et la relance de l'installation des dépendances

# 16/12/2021

- Correction de bugs

# 04/12/2021

- Support de nouveaux types

# 29/11/2021

- Possibilité de desinstaller Deconz, merci @Benjamin 
- Ajout ZHAAirQualit, meric @sagitaz
- Correction d'un bug avec les dernieres version de deconz sur le renvoi des mises à jour des attributs
- Ajout de la gestion des groupes et du binding

# 08/02/2021

- Suppression de l'envoi de luminosité lors d'un changement de couleur pour les ampoule RGB
- Ajout de ZHACarbonMonoxide, merci @sagitaz

# 28/10/2020

- Ajout d'un message indiquant de ne surtout pas faire la mise à jour du firmware de clef si vous etes sur VM ou Freebox Delta au risque de casser la clef.

# 23/09/2020

- Support de la vanne Danfoss ally (necessite deconz 2.05.79)
- Changemement de la méthode d'installation pour RPI et x86_64 (passage par les depots deconz)

# 01/07/2020

- Amélioration du lancement de deCONZ

# 08/06/2020

- Ajout du type ZGPSwitch (button friend of hue)

# 25/05/2020

- Correction d'un soucis sur les generiques type des lumieres couleur (il est conseillé de corriger le type generique pour la commande de type action couleur sinon cela peut causer des soucis dans Alexa ou Google home, lumiere qui s'eteint lors de la demande ON)

# 12/05/2020

- Ajout d'une relance automatique de la connexion à deconz en cas de perte

# 27/02/2019

- Possibilité de désactiver les alertes de noeud injoignable par équipement
- Mise à jour de la documentation et des traductions

# 27/12/2019

- Inversion du widget pour les store ikea pour coller à l'état réel

# 26/12/2019

- Correction d'un bug sur la mise à jour du firmware

# 24/12/2019

- Ajout des types Warning device et ZHAAlarm
- Support des store ikea (beta)
- Correction du soucis sur la recherche des firmwares pour la clef

# 15/11/2019

- Retour arriere sur deconz 2.0.69 car la 70 à trop de bug il faut relancer l'installation deconz local

# 14/11/2019

- Correction d'un soucis sur l'installation de deconz

# 08/11/2019

- Mise à jour de la doc (ajout de la desactivation du serial sur RPI sinon le démon est instable)
- Amélioration support vanne

# 03/11/2019

- Support de l'installation sur RPI1

# 27/10/2019

- Correction de bugs
- Support des vannes thermostatique

# 14/10/2019

- Possibilité de mettre à jour le firmware d'une clef Conbee 2 depuis jeedom
- Lancement d'une synchronisation forcé au démarrage du démon
- Correction d'un bug sur l'installation des dépendances

# 23/09/2019

- Mise à jour de la doc

# 23/09/2019

- Correction de bugs
- Mise à jour de la doc

# 09/09/2019

- Correction d'un bug sur le niveau de log de deconz en installation local
- Mise à jour de la version local de deconz en 2.5.69 (attention pour l'avoir il faut dans la configuration du plugin relancer l'installation de Deconz et relancer le demon ensuite)

# 28/08/2019

- Mise à jour de la version local de deconz en 2.5.67 (attention pour l'avoir il faut dans la configuration du plugin relancer l'installation de Deconz)

# 13/08/2019

- Amélioration du support du cube Xiaomi (merc @kaktusatomik)
- Ajout de l'état du noeud dans le réseaux Zigbee
- Analyse quotidien du réseaux avec signalement si il y a un soucis sur un module

# 24/07/2019

- Correction d'un bug sur la désactivation des équipements

# 22/07/2019

- Possibilité de supprimer un noeud
- Ajout d'un bouton de lien directement vers l'interface de deconz
- Ajout du nom de l'équipement Jeedom dans le tableau listant les noeuds
- Ajout de la température sur quelques modules xiaomi
- Support des modules double relais
- Amélioration du support des modules capteur et actionneurs

Attention nous avons detecté des cas ou il y avait des duplication des commandes (si vous le rencontrez n'hesitez pas a contacter le support)

# 08/07/2019

- Support du module de detection de vibration Xiaomi

# 04/07/2019

- Correction de bugs

# 30/06/2019

- Correction d'un bug sur l'installation des dépendances empechant le lancement du démon
