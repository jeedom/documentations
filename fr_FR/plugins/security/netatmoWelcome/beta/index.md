# Plugin Neatmo Security

Plugin permettant de récupérer les informations des équipements Netatmo Security

# Configuration du plugin

Une fois le plugin installé, il vous faut renseigner vos informations deconnexion Netatmo :

-   **Client ID** : votre client ID (voir partie configuration)
-   **Client secret** : votre client secret (voir partie configuration)
-   **Nom d’utilisateur** : nom d’utilisateur de votre compte netatmo
-   **Mot de passe** : mot de passe de votre compte Netatmo
-   **Synchroniser** : permet de synchroniser Jeedom avec votre compte Netamo pour découvrir automatiquement vos équipements Netamo. A
    faire après avoir sauvegardé les paramètres précedent.

# Recupération des informations de connexion

Pour intégrer votre Welcome, vous devez posséder un client\_id et unclient\_secret généré sur le site <http://dev.netatmo.com>.

Une fois dessus cliquez sur start :

![netatmoWelcome10](../images/netatmoWelcome10.png)

Puis sur "create an app"

![netatmoWelcome11](../images/netatmoWelcome11.png)

Identifiez vous, avec votre mail et mot de passe

![netatmoWelcome12](../images/netatmoWelcome12.png)

Remplissez les champs "Name" et "Description" (peux importe ce que vousmettez ca n’a aucune importance) :

![netatmoWelcome13](../images/netatmoWelcome13.png)

Puis tout en bas de la page cochez la case "I accept the terms of use"puis cliquez sur "Create"

![netatmoWelcome14](../images/netatmoWelcome14.png)

Recuperer les informations "CLient id" et "Client secret" et copier les dans la partie configuration du plugin dans Jeedom (voir chapitre précedent)

![netatmoWelcome15](../images/netatmoWelcome15.png)

# Configuration des équipements

La configuration des équipements Netatmo est accessible à partir du menu plugin -> Securité -> Netatmo Security

Une fois que vous cliquez sur un équipement vous retrouvez ici toute la configuration de votre équipement :

-   **Nom de l’équipement Netatmo** : nom de votre équipement Netatmo
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement
-   **Activer** : permet de rendre votre équipement actif
-   **Visible** : le rend visible sur le dashboard

En dessous vous retrouvez la liste des commandes :

-   le nom de la commande
-   historiser : permet d’historiser la donnée
-   configuration avancée (petites roues crantées) : permet d’afficher
    la configuration avancée de la commande (méthode d’historisation, widget…​)
-   Tester : permet de tester la commande

# FAQ

>**Je n'ai pas les évenements en temps réel mais au bout de 15min**
>
>Pour avoir un retour en temps réel des évenements (déclenchement alarme incendie, personne qui passe devant la camera..) il faut ABSOLUMENT que votre jeedom ait une URL externe en https avec un certificat valide sur le port 443 (et uniquement ce port la). C'est une obligation imposé par netatmo

>**Je n'arrive pas a desactiver/activer la surveillance**
>
>Attention si vous avez mis un code cette fonction n'est pas possible par le plugin jeedom

>**J'ai une erreur de type "Incorrect string value: '\xF0\x9F\x98\x98" lors de la synchronisation**
>
>Vérifiez que vous n'avez pas un caractere non standard (type smiley) sur le nom d'une camera ou d'une personne
