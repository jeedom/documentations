# Changelog Zigbee

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

>**IMPORTANT**
>
>Pour connaitre les nouveaux module compatible il faut aller [la](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) (c'est trié par date d'ajout/modification)

# 26/01/2023

- Correction d'un empechant certain d'ouvrir la fenetre du réseaux zigbee

# 25/01/2023

- Suppression de la partie backup/restore des puces zigbee (le protocole ne le prennant pas en charge c'est trop instable)

# 23/01/2023

- ajout de nouvelles configuration
- correction de bugs

# 19/10/2022

- Suppression du dossier rustc après l'installation des dépendances pour liberer de la place
- Amélioration du support de certains module
- Correction de bugs

# 03/10/2022

- Les versions de zigpy sont maintenant fixée pour eviter des soucis sur l'installation des dépendances


# 13/09/2022

- Correction d'un bug sur l'installation des dépendances sur RPI
- Support de nouveaux modules

# 02/09/2022

- Correction de bug
- Possibilité de corriger l'erreur de bootloader (base.TimeoutError) depuis l'écran de mise à jour du firmware (en beta pour le moment)
- Correction d'un bug sur le bouton pour forcer les mises à jour OTA des modules
- Correction d'un bug sur la lib YARL en forcant la version 1.4.2

# 12/08/2022

- Correction de bugs sur l'execution de certaine commande si l'équipement est en "Ignorer la confirmation d'exécution"

# 12/08/2022

- Correction de bugs

# 27/07/2022

- Correction de soucis d'inclusion pour les équipements GreenPower (compatible uniquement avec les clefs EZSP)
- Correction d'un soucis sur la remonter de la couleur de certaines télécommande zigbee

# 27/06/2022

- Tentative de correction des soucis avec le démon

# 23/06/2022

- Tentative de correction des soucis avec le démon

# 20/06/2022

- Ajout d'une option pour exclure automatiquement les péripherique supprimés
- Correction d'un bug lors de l'envoi forcé d'une mise à jour OTA
- Support de nouveaux modules
- correction d'un soucis avec zigpy 0.47.0 (retour a la version 0.46.0)

# 20/05/2022

- Correction de l'erreur :  AttributeError: module 'specifics' has no attribute 'init'

# 05/05/2022

- Correction de bug
- Support de nouveau module 
- Correction d'un bug sur l'ajout d'un module à un groupe
- Ajout de l'envoi de la timezone lors de l'envoi de l'heure aux modules
- Corrections de bug sur l'installation des dépendances

# 31/03/2022

- Correction d'un soucis empechant le démon de démarrer du à la nouvelle version de zigpy

# 22/03/2022

- Support de nouveau module
- Mise à jour de la documentation
- Correction de bug

# 16/02/2022

- Support de nouveau module
- Mise à jour de la doc pour l'erreur "base timeout"

# 03/02/2022

- Tentative de correction de l'erreur "cannot import name 'collections_abc' from 'six.moves'", necessite jeedom 4.2 et la relance de l'installation des dépendances

# 01/02/2022

- Correction d'un soucis sur la gestions des versions des firmware ezsp
- Mise en place d'un systeme de generation automatique de commandes si aucune configuration n'existe (dans la mesure du possible)
- Mise en place d'un systeme de decouverte automatique des commandes de type informations
- Possibilité d'avoir la configuration json actuel du module (permettra d'integrer plus vite les modules)

# 21/01/2022

- Correction de bugs
- Support de nouveau module

# 10/01/2022

- Correction d'un bug sur le binding direct entre 2 modules

# 06/01/2022

- Correction d'un bugs sur la liste des module pouvant etre bindé
- Amélioration de la recuperation des batteries

# 20/12/2021

- Correction d'un bug lors de la relance du démon lorsque les sous démons sont configurés mais désactivé
- Correction d'un soucis lors de la demande de rafraichissement de plus de 7 valeurs d'attributs, merci @kaktusatomik
- Ajout de nouveaux équipements (merci @cstan77)

# 02/12/2021

- Ajout de nouveaux équipements
- Correction d'un soucis sur la "Configuration des rapports" des modules

# 22/11/2021

- Optimisation de la vitesse de chargement des pages du plugin
- Ajout de nouveaux équipements
- Mise à jour des dépencances automatiquement lors de la mise à jour du plugin


# 07/11/2021

- Ajout de nouveaux équipements
- Correction d'un bug sur les modules volet roulant Tuya

# 25/10/2021

- Ajout de nouvelle configuration
- Possibilité de definir un cron pour forcer la mise à jour des attribut (attention a ne pas mettre n'importe quoi ca peut casser tout votre réseaux zigbee)
- Correction de bug
- Ajout du nombre de voisin sur la page du graphique zigbee lors du survol

# 19/09/2021

- Correction de bugs

# 15/09/2021

- Correction d'un bug sur l'inclusion
- Amélioration des niveaux de log
- Ajout de nouveaux module

>**IMPORTANT**
>
>Il faut ABSOLUMENT lancer une installation des dépendances meme si celle-ci sont OK (nous travaillons en jeedom 4.2 a ce que cela soit automatiquement mais pour le moment il faut que vous les lanciez à la main)

# 03/09/2021

- Correction d'un soucis sur la creation de groupe dans certain cas
- Correction de l'affichage de la liste des groupes

# 27/08/2021

- Correction du soucis avec les firmwares Nodon
- Correction de l'erreur "\_ext_pan_id" du à une mise à jour du code Zigpy avec les clefs Deconz

>**IMPORTANT**
>
>Suite à cette mise à jour il faut ABSOLUMENT mettre à jour les dépendances du plugin meme si il vous dit que tout est OK

# 23/08/2021

- Suppression du fichier de mise à jour OTA des modules Nodon à leur demande
- Ajout de nouveaux modules 
- Correction d'un soucis sur la configuration des parametres des ampoules Hue

# 17/08/2021

- Correction d'un soucis de repporting sur les cluster AnalogInput et AnalogInput
- Support complet du Xiaomi Aqara TVOC Air Quality Monitor
- Ajout de nombreux modules

# 06/08/2021

- Correction d'un bug sur la gestion des groupes

# 02/08/2021

- Ajout de nouveau module compatible
- Ajout d'un bouton pour supprimer toute les données d'un demon (voir documentation)
- Correction d'un bug sur la gestion des groupes lors de multiple clef zigbee


# 01/07/2021

- Ajout de nouveau module compatible
- Optimisation des configurations existante sur la gestion des repetitions

# 09/06/2021

- Changement de la source de mise à jour OTA pour Ikea (passage sur la branche stable)
- Ajout de nouveau module compatible
- Correction de bug

# 18/05/2021

- Support du GreenPower en beta pour les clefs de type EZSP (Elelabs,Popp...), necessite une relance de l'installation des dépendances
- Ajout de nouveau module compatible
- Correction de bug

# 03/05/2021

- Mise à jour de la documentation
- Correction de bugs
- Intégration de nouveaux modules
- Optimisation des images de modules

# 29/04/2021

- Intégration de nouveaux modules
- Optimisation des images de modules

# 21/04/2021

- Intégration de nouveaux modules
- Prise en charge du binding *(entre groupes ou modules)*
- Refonte de la documentation
- Correction de bugs

# 07/04/2021

- Correction d'un souci sur le bouton pour forcer la mise à jour OTA de certains modules

# 06/04/2021

- Passage en stable

# 25/09/2020

- 1ère mise à disposition en beta
