# BacnetServer

#Description

Le plugin Bacnet permet de créer un equipement Bacnet de votre Jeedom pour etre vu sur le réseau



# Configuration du plugin

Après téléchargement du plugin, il faut tout d’abord activer celui-ci, comme tout plugin Jeedom :

![config](../images/BacnetServerConfig.png)

Ensuite, il faut lancer l’installation des dépendances (même si elles apparaissent OK) :

![dependances](../images/BacnetServerDep.png)

Enfin, il faut démarrer le démon :

![demon](../images/BacneServerDemon.png)


Rien n’est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/BacnetServerConfig.png)


Dans ce même onglet, il vous faut choisir la valeur du Cron pour l'actualisation de vos équipements.




# Comment fonctionne le plugin ?




>**IMPORTANT**
>
>Vos équipements BACNET doivent se trouver sur le même réseau que votre Jeedom pour être détectés par celle-ci.


Par défaut, un équipement jeeBacnetServer est créé; c'est cet équipement 'bacnet' qui sera vu par votre supervisuer Bacnet sur le réseau

Vous pouvez configurer son deviceId dans la configuration du plugin

![menu](../images/BacnetServerConfig.png)


Pour ajouter des commandes Jeedom à votre jeeBacnetServer, cliquez sur Ajouter Commandes au Serveur :

![accueil](../images/BacnetServerAccueil.png)


Une modale va s'ouvrir, où apparaitra tous les commandes de type Infos présentes dans les differents plugin de votre jeedom.




>**IMPORTANT**
>
>Vos équipements doivent etre Actifs pour que les commandes soient détectées sur cette modale.


>**IMPORTANT**
>
>Vous devez remplir l'unite bacnet obligatoirement avec la syntaxe des unites disponible en cliquant sur le bouton Unites en haut de cette page

Vous devez nommer la commande telle qu'elle apparaitra sur le jeeServer sur le reseau Bacnet

Il vous suffit de chercher celles que vous desirez, et de Valider.


![accueil](../images/BacnetServerModale.png)


Le device bacnet avec l'instanceId que vous avez choisi va étre créer, et apparaitre sur votre réseau.


Vous pouvez voir un recapitulatif des commandes injectées en cliquants sur Cmds JeeServer

![accueil](../images/BacnetServerAccueil.png)


Pour mettre à jour les valeurs, vous devez configurer le cron dans la configuration du plugin.

![accueil](../images/BacnetServerConfig.png)



Pour supprimer des commandes du Serveur, il faut se rendre dans les commandes de l'équipement, et simplement Supprimer celles que vous desirez puis sauvegarder.




Vous pouvez également supprimer le device du réseau, ainsi que ses points bacnet en cliquant sur Supprimer le jeeBacnetServer.


![accueil](../images/BacnetServerReinit.png)




# Configuration des Commandes :


Pour changer l'unité des points bacnet, et les voir apparaitre sur le réseau, il vous faut rentrer l'unité dans le champ prévu à cet effet sur les commandes.

Sur le réseau bacnet, les instances des points reprendront les noms des commandes que vous rentrerez sur la modale d'Ajout des commandes.


Une fonction de postCalcul est également prevue : 
si vous choissisez de remplir ce postCalcul, alors la valeur injecté dans le deviceBacnet aura pris la valeur initale à remonter avec le calcul 

Les differentes possibilité : 

/, - , *, +

Exemple :

![accueil](../images/BacnetServerPostCalcul.png)





>**IMPORTANT**
>
>Les unités doivent correspondre aux standards bacnet, faut de quoi une erreur appaitra sur le plugin. Voir les unites sur la modale d'Ajout de nouvelles commandes





# Importer/Exporter le jeeBacnetServer :


![accueil](../images/BacnetServerAccueil.png)

Pour prevenir les besoins, 2 options sont prévues : 


- Exporter le device :

En cliquant sur ce bouton, cela va télécharger un fichier Json reprenant la configuration du device ainsi que ses commandes.


- Importer le device :

En cliquant sur ce bouton, vous pouvez importer le ficher json de configuration du jeeBacnetServer que vous auriez télécharger, pour reprendre les commandes qui étaient configurées dans celui ci