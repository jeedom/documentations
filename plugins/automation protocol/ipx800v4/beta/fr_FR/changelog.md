# Changelog IPX 800 v4

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

# 20/02/2025

- Correction d'un soucis sur l'envoi de la commande stop pour les volets roulant
- Correction d'un bug lors du backup de l'ipx si le port n'est pas le 80

# 26/08/2024

- Support des volets roulants EnOcean
- Possibilité de configurer le port de communication avec l'ip (par défaut 80)
- Support des images d'équipement personnalisées (Jeedom 4.5)

# 08/01/2024

- ATTENTION !!!!!! Changement du comportement sur les volets, inversion du sens, le plugin n'indique plus le % de fermeture mais le % d'ouverture
- Controle du code retour de l'ipx lors d'une commande et si erreur Jeedom retentera la commande 150ms plus tard
- Préparation pour jeedom 4.4

# 07/02/2022

- Mise à jour pour Jeedom 4.2

# 25/10/2021

- Ajout de template
- Support du pulseUP et pulseDOWN pour la gestion des lames des BSO

# 06/07/2020

- Correction d'un bug sur la lecture de la valeur de l'extension 0-10v

# 09/05/2020

- Ajout du support de l'extension 0-10v
- Optimisation

# 30/12/2019

- Correction bug thermostat
- Correciton d'une erreur dans l'url d'event à donner à l'ipx800

# 18/09/2019

- Optimisations

# 14/08/2019

- Correction de bug sur les templates
- Compatible php 7.3

# 13/06/2019

- Ajout d'un systeme de sauvegarde automatique tout les jours des ipx800v4
- Support PWM en mono-couleur uniquement
- Suppression du redemarrage du démon a chaque changement sur les équipements (il faut maintenant lorsque vous modifiez un équipement relance le démon manuellement)

# 24/04/2018

-	Support des sondes THL 9 à 14

# 19/03/2018

-   Correction des numéros pour les capteurs enOcean Analogique

# 05/03/2018

- 	Ajout du X-dimmer (ne pas oublier sur la configuration du plugin de cocher G pour les demandes x-dimmer)

#  18/02/2018

-	Ajout d'option sur les demandes à l'ipx800 (possibilité de selectionne rle type de demande pour reduire la charge)

-   Amélioration du support enOcean

-   Correction de bugs sur la récuperération des informations des
    extensions

-   Ajout de l’extension VR

-   Optimisation de la synchronisation avec l’ipx800

-   Support des modules THL

-   Ajout d’un moteur de template pour la génération des commandes
