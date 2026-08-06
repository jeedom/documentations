# Plugin LaMetric

Plugin permettant d’afficher des notifications / informations sur LaMetric.

# Configuration du plugin

Une fois le plugin installé, il est nécessaire de créer une "indicator App" sur le site LaMetric :

-   1\. Se rendre à l’adresse : <https://developer.lametric.com>
-   2\. Créer une "INDICATOR APP" :

![lametric1](../images/lametric1.png)

-   3\. Configurer une icône, un nom et sélectionner **Push** dans "Communication type" :

![lametric2](../images/lametric2.png)

-   4\. Donner un nom et une description à votre app et cocher "Private app" puis cliquer sur "Save" :

![lametric3](../images/lametric3.png)

-   5\. Publier l’application puis installer-la sur votre LaMetric grâce à l’application mobile.

Une fois l’application publiée, vous disposez des informations essentielles pour la configuration du plugin.

![lametric4](../images/lametric4.png)

Vous pouvez ensuite créer un nouvel équipement dans Jeedom et renseigner les champs demandés :

![lametric5](../images/lametric5.png)

# Utilisation du plugin

2 commandes sont automatiquement créées lors de l’ajout d’un équipement :

-   **Message** : Permet l’envoi de messages. La commande de type message contient 2 champs :
    - **ID Icone** : Correspond au numéro de l’icône souhaitée (Ne pas mettre le  dièse ``#``). La liste des icônes disponibles est consultable à cette adresse : <https://developer.lametric.com/icons>).
    - **Texte** : Correspond au texte que l’on souhaite afficher.
-   **Vider** : Permet de remettre à vide l’affichage ("JEEDOM" s’inscrit alors).

Il est possible d’envoyer plus de messages en un seul envoi en séparant les icônes et les textes par le caractère : ``|``.

Voici par exemple un scénario envoyant 4 informations différentes en une seule fois :

![lametric6](../images/lametric6.png)
