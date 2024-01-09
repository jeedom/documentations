# Plugin Philips Hue

# Description

Ce plugin va vous permettre d'intégrer votre écosystème Philips Hue dans Jeedom. La plugin offre la possibilité de piloter jusqu'à 2 ponts Philips Hue simultanément.

# Configuration

## Configuration du plugin

Comme tout plugin Jeedom, le plugin **Philips Hue** doit être activé après l'installation.

Une fois le plugin activé, il faudra renseigner l’adresse IP à laquelle votre pont Philips Hue est joignable. Normalement le plugin devrait vous demander d'appuyer sur le bouton du pont lors de la premiere synchronisation.

>**ASTUCE**
>
>Vous pouvez renseigner jusqu'à 2 ponts Philips Hue qui seront en mesure de communiquer avec Jeedom simultanément.

Le plugin **Philips Hue** utilise son propre démon afin de rester en contact constant avec le(s) pont(s) Philips Hue. Vous pouvez en contrôler le statut sur la page de configuration du plugin.


## Compatibilité

Vous pouvez trouver [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=philipsHue) la liste des modules compatible avec le plugin

## Configuration des équipements

Pour accéder aux différents équipements **Philips Hue**, dirigez-vous vers le menu **Plugins → Communication → Philips Hue**.

# Transition

Commande un peu particulière qui est conçue pour être utilisée dans un scénario. Elle permet de définir la durée en secondes de la transition entre l’état actuel et la prochaine commande.

Par exemple le matin vous pouvez vouloir simuler le lever du soleil en 3 minutes. Dans votre scénario vous avez donc juste à appeler la commande transition avec ``180`` en paramètre puis appeler la commande couleur vers la couleur désirée.

# FAQ

> **Mon équipement (lampe, interrupteur, etc...) n'est pas reconnu par le plugin, comment faire ?**
>
> Il faut :
> - nous décrire l'équipement que vous voulez qu'on ajoute avec photos et les possibilités de celui-ci et nous envoyer le log en debug de la synchronisation avec le pont, le tout en nous contactant par une demande de support