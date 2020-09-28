# Génerique Type

Les generique type sont une notion très importante dans Jeedom utilisé par de nombreux plugin. C'est cela qui permet en général a Jeedom de savoir ce que fait l'équipement et comment le faire.

## Principe 

Le principe est très simple c'est une proprieté d'une commande. Il en existe de nombreux et nous en rajoutons assez souvent. Vous avez par exemple "Lumière Bouton On", en mettant cette proprieté sur la commande "Allumer" de Jeedom il va comprendre que c'est une lumiere et que pour l'allumer il faut éxecuter cette commande.

C'est par exemple très utilisé dans les plugins Alexa Smarthome ou Google Smarthome, cela permet de savoir quelle type d'équipement envoyer a Alexa ou Google Home et lors d'une demande de savoir y répondre.

La pluspart du temps les générique type sont mis automatiquement lors la configuration de votre module (inclusion sous Z-wave par exemple). Mais il peut arrivait que vous deviez les reconfigurer.

## Configurer soit meme les generiques type 

C'est très simple il faut aller dans la configuration avancée de la commande puis onglet configuration et la vous avez un espace "Générique type"

Comment aller dans la configuration avancée d'une commande :

- Sur la page de configuration de votre équipement, onglet commande en double cliquant sur la ligne de la commande ou sur le bouton avec les 3 petites roues crantées
- Depuis la configuration avancé de l'équipement vous avez la liste des commandes et les 3 petites roues crantées en fin ligne 
- Depuis Analyse -> Résumé domotique, vous recherchez ou dépliez jusqu'a trouver votre commande puis vous cliquez dessus ou cliquez sur la roue cranté en bout de ligne

Voila vous savez tout, n'hesitez pas a essayer de mettre pour chaque commande le generique type qui correspond cela permettra au plugin de mieux comprendre ce que fait votre équipement
