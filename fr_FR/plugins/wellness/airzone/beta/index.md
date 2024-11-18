# Plugin Airzone


# Description

Plugin pour gérer et piloter vos systèmes Airzone


# Prérequis

 - Jeedom v4.4.2
 - Connaître les adresses IP de vos passerelles


# Installation

Après téléchargement du plugin, il faut tout d’abord activer celui-ci, comme tout plugin Jeedom.


# Configuration

Rendez vous dans le menu Plugins/Gestion des plugins


Choisir le Cron souhaité pour le refresh des valeurs :  5, 10, 15, 30, Hourly ou Daily.

Choisir le Temps d'attente entre les requetes de chaque zone; par defaut 10s si champ vide.

Sauvegardez


# Ajout d'équipements

Rendez vous dans le menu Plugins/Confort/AirzoneJeedom


Cliquez sur Ajouter une passerelle.

![config](../images/airzoneEquipement.png)

Vous pourrez y configurer une adresse IP.

Apres avoir sauvegardé, vous pourrez cliquer sur Lancer le scan

IMPORTANT : Si vous avez une zone qui comporte des caractères spéciaux, cela peut provoquer une erreur de type SystemOut of Range.



# Page Plugin :

![pluginView](../images/airzoneEqlogics.png)

Vous pouvez retrouvez sur la page du plugin, les passerelles coté gauche, ainsi que leur zones scannées et associées sur leur coté droit

A noter que les zones Masters ont une icone jaune, pour bien les diffencier


# Dashboard


Après la création de vos équipements, vous les retrouverez sur le dashboard.

Les icônes de mode changent suivant le mode sélectionné: Froid, Chaud, Ventilation, Dry, et Stop.

Pour bénéficier des icônes en couleur, pensez à vous rendre dans les réglages de votre Jeedom (Réglages/Système/Configuration/Interface), et de cocher "Icones Widgets colorées"

Seule les zones Master ont le menu déroulant pour changer le mode dans les zones associées parametrées dans votre système

Les icones d'infos Consigne et Temperature changent suivant des fenetres de valeurs : -20°c, entre 20 et 25°C, plus de 25°C ( et l'équivalent si la zone est reglée en Fahrenheit)

Les choix disponibles dans les modes, ou les vitesses de ventilateurs sont détectées suivant les possibilités de votre système.



Un équipement type :

![config](../images/airzoneWidgets.png)


Un équipement d'une master zone; on voit une commande supplémentaire pour activer un même mode sur tous les zones associées du système


