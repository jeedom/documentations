# Plugin Vesta

#Description

Plugin permettant de gerer votre centrale Vesta



# Configuration du plugin

Après téléchargement du plugin, il faut tout d’abord activer celui-ci, comme tout plugin Jeedom :

![config](./images/vestaActiv.png)

Ensuite, il faut lancer l’installation des dépendances (même si elles apparaissent OK) :

![dependances](./images/vestaDep.png)

Enfin, il faut démarrer le démon :

![demon](./images/vestaDemon.png)

Vous pouvez modifier le port du socket d'ecoute des Events provenant de la centrale

![socket](./images/vestaConfig.png)







# Utilisation du plugin


IMPORTANT :

Pour recevoir les Events de votre centrale, il faut parametre le panel de cette derniere. 
Sur ce dernier, accessible via l'ip locale de la centrale sur votre navigateur, il faut vous rendre dans Systeme Setting, puis Report


Et modifier l'url suivante :

![urlpanel](./images/vestapanel.png)

Remplacer l'ip par l'ip locale de votre jeedom, et le port par celui que vous avez configuré dans le plugin

Choisir un groupe differents des autres urls de reporting

Bien penser a regler sur Essentiel, et No Retry

Sauvegardez

![essential](./images/vestapanel2.png)






Dans votre plugin, une fois la configuration remplie, il vous faut simplement cliquer sur Synchroniser pour automatiquement créér les equipements correspondants aux Partitions et Zones crées dans la webInterface de votre centrale

Les equipements (sensor, detecteur IR etcc..) configurés et attribués aux zones dans la webinterface, auront des commandes automatiquement créées dans les zones correspondantes.