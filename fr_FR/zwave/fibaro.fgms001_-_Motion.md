# Fibaro Motion Sensor - FGMS-001

**Le module**

![module](images/fibaro.fgms001/module.jpg)

**Le visuel Jeedom**

![vuedefaut1](images/fibaro.fgms001/vuedefaut1.jpg)

## Résumé

Le détecteur de mouvement Fibaro est un détecteur multifonctions Z-Wave. En plus de la détection de mouvement, ce dispositif mesure la température et l’intensité lumineuse. Ce détecteur comporte aussi un accéléromètre intégré afin de détecter toute tentative d’altération du dispositif.

Le détecteur de mouvement Fibaro est alimenté par batterie et est conçu pour être installé rapidement et facilement sur n’importe quelle surface. Le voyant LED signale le mouvement, le niveau de température, le mode de fonctionnement et peut être utilisé pour voir si l’appareil est dans le réseau Z-Wave.

Le détecteur de mouvement peut être utilisé pour les scènes d’éclairage et les systèmes de surveillance et/ou de sécurité.

## Fonctions

-   Détecteur de mouvement sans fil
-   Détecte les mouvements à l’aide d’un capteur infrarouge passif
-   Mesure de la température
-   Mesure de l’intensité lumineuse
-   Protection contre l’effraction et le vol
-   Alertes de mouvement et de température signalées par le clignotement de la diode LED
-   Mode de détection de tremblement de terre
-   Bouton pour inclure/exclure le détecteur
-   Détection pile faible
-   Très petit, dimensions réduites
-   Facilité d’installation sur un mur ou toute autre surface

## Caractéristiques techniques

-   Type de module : Emetteur Z-Wave
-   Alimentation : Pile CR123A 3,6VDC
-   Hauteur recommandée pour l’installation : 2,4m
-   Plage de température mesurée : -20°C à 100°C
-   Précision de la mesure : 0,5°C
-   Plage de mesure de la luminosité : 0-32000 LUX
-   Fréquence : 868,42 Mhz
-   Distance de transmission : 50m champ libre, 30m en intérieur
-   Dimensions: 4,4 cm de diamètre
-   Température de fonctionnement : 0-40°C
-   Certifications : LVD 2006/95/WE EMC 2004/108/WE R&TTE 1999/5/WE RoHS II

## Données du module

-   Marque : Fibar Group
-   Nom : Fibaro FGMS-001 \[Motion Sensor\]
-   Fabricant ID : 271
-   Type Produit : 2048
-   Produit ID : 4097

## Configuration

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en inclusion référez-vous à cette [documentation](../plugins/automation%20protocol/openzwave/).

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer 3 fois sur le bouton d’inclusion, conformément à sa documentation papier.

![inclusion](images/fibaro.fgms001/inclusion.jpg)

Une fois inclus vous devriez obtenir ceci :

![Plugin Zwave](images/fibaro.fgms001/information.jpg)

### Commandes

Une fois le module reconnu, les commandes associées au module seront disponibles.

![Commandes](images/fibaro.fgms001/commandes.jpg)

Voici la liste des commandes :

-   Présence : c’est la commande qui remontera une détection de présence
-   Température : c’est la commande qui permet de remonter la température
-   Luminosité : c’est la commande qui permet de remonter la luminosité
-   Sabotage : c’est la commande sabotage (elle est déclenchée en cas de vibration)
-   Batterie : c’est la commande batterie

### Configuration du module

> **Important**
>
> Lors d’une première inclusion réveillez toujours le module juste après l’inclusion.

Ensuite si vous voulez effectuer la configuration du module en fonction de votre installation, il faut pour cela passer par la bouton "Configuration" du plugin OpenZwave de Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

Vous arriverez sur cette page (après avoir cliqué sur l’onglet Paramètres)

![Config1](images/fibaro.fgms001/config1.jpg)

![Config2](images/fibaro.fgms001/config2.jpg)

![Config3](images/fibaro.fgms001/config3.jpg)

![Config3](images/fibaro.fgms001/config4.jpg)

Détails des paramètres :

-   Wakeup : c’est l’interval de réveil du module (valeur recommandée 7200)
-   1: permet de régler la sensibilité du capteur de présence
-   2: permet de régler l’inertie du capteur de présence
-   3: déconseillé de changer ce paramètre
-   4: déconseillé de changer ce paramètre
-   6: temps après lequel le capteur enverra le signal "plus de mouvement" (valeur conseillée 30)
-   8: permet d’activer le mode nuit / jour ou les deux (valeur conseillée : toujours actif)
-   9: permet de régler le seuil de passage en mode nuit (utile si vous avez changé le paramètre 8)
-   12: à modifier seulement si vous savez pourquoi vous le faites (association avec un module par exemple)
-   14: idem
-   16: idem
-   20: sensibilité du capteur gyroscopique (valeur conseillée 15)
-   22: temps après lequel le capteur enverra le signal "plus de sabotage" (valeur conseillée 30)
-   24: permet de dire comment le sabotage est notifié (IMPORTANT : valeur conseillée : Capteur anti-sabotage notifié à SensorAlarm command class/ Annulation est notifié après le temps défini en  paramètre 22 )
-   26: à modifier seulement si vous savez pourquoi vous le faites
-   40: permet de dire de combien doit être modifiée la valeur de luminosité pour être envoyée (valeur conseillée 50)
-   42: permet de donner une durée minimum entre deux envois successifs même si la luminosité n’a pas changée (valeur conseillée 3600)
-   60: permet de dire de combien doit être modifiée la valeur de température pour être envoyée (valeur conseillée 2 soit 0.2 degrés)
-   62: permet de donner la fréquence des mesures de température (valeur conseillée 900)
-   64: permet de donner une durée minimum entre deux envois successifs même si la température n’a pas changée (valeur conseillée 2700)
-   66: permet d’ajuster la température
-   80: permet de choisir la couleur de la led lorsqu’il ya détection de   mouvement (voir de la désactiver)
-   81: permet de régler la luminosité de la led
-   82: permet de régler le seuil minimal de luminosité pour mettre la led à 1% (lié au paramètre 81)
-   83: permet de régler le seuil maximal de luminosité pour mettre la led à 100% (lié au paramètre 81)
-   86: température en dessous de laquelle la led s’allumera en bleu (lié au paramètre 81)
-   87: température au dessus de laquelle la led s’allumera en rouge (lié au paramètre 81)
-   89: permet de faire clignoter la led en bleu/blanc/rouge en cas de sabotage

### Groupes

Ce module possède trois groupes d’association, seul le troisième est indispensable.

![Groupe](images/fibaro.fgms001/groupe.jpg)

## Bon à savoir

### Spécificités

> **Tip**
>
> Ce module est très capricieux sur les wakeup et très mal configuré d’usine. Il est primordial de bien le réveiller après l’inclusion (plusieurs fois valent mieux qu’une), de bien le configurer selon vos souhaits, et de bien le réveiller pour que la config soit prise en compte.

### Visuel alternatif

![vuewidget](images/fibaro.fgms001/vuewidget.jpg)

## Wakeup

Pour réveiller ce module il y a une seule et unique façon de procéder :

-   appuyer 3 fois sur le bouton d’inclusion (la lumière s’allume en bleue). Même si la lumière s’allume, il peut être nécessaire de le faire plusieurs fois de suite (2 ou 3)

## F.A.Q.

Ce module se réveille en appuyant 3 fois sur son bouton d’inclusion.

Ce module est très capricieux. Il est conseillé de faire l’inclusion au plus proche de votre box et de s’y reprendre plusieurs fois.

Ce module est un module sur batterie, la nouvelle configuration sera prise en compte au prochain wakeup.

## Note importante

> **Important**
>
> Il faut réveiller le module : après son inclusion, après un changement de la configuration , après un changement de wakeup, après un changement des groupes d’association
