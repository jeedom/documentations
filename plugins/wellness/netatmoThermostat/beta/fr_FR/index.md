# Plugin Netatmo Thermostat

# Description

Plugin permettant de contrôler les thermostats Netatmo.

# Configuration du plugin

Une fois le plugin installé, il faut renseigner vos informations de connexion Netatmo :

-   **Client ID** : votre client ID *(voir partie configuration)*.
-   **Client secret** : votre client secret *(voir partie configuration)*.
-   **Nom d’utilisateur** : nom d’utilisateur de votre compte Netatmo.
-   **Mot de passe** : mot de passe de votre compte Netatmo.
-   **Utiliser le design alternatif** : permet d’utiliser un autre design *(voir partie widget)*.
-   **Synchroniser** : permet de synchroniser Jeedom avec votre compte Netamo pour découvrir automatiquement vos équipements Netamo. A faire après avoir sauvegardé les paramètres précedents.

# Recupération des informations de connexion

Pour intégrer votre station, vous devez posséder un client\_id et un client\_secret généré sur le site <http://dev.netatmo.com>.

Pour créer un compte > https://auth.netatmo.com/fr-fr/access/signup?next_url=https%3A%2F%2Fdev.netatmo.com%2Fbusiness-showcase

Une fois dessus cliquez sur "START" :

![netatmoWeather10](../images/netatmoWeather10.png)

Puis sur "create an app" :

![netatmoWeather11](../images/netatmoWeather11.png)

Identifiez-vous avec votre mail et mot de passe :

![netatmoWeather12](../images/netatmoWeather12.png)

Remplissez les champs "Name" et "Description" (peu importe ce que vous mettez ça n’a aucune importance) :

![netatmoWeather13](../images/netatmoWeather13.png)

Puis tout en bas de la page cochez la case "I accept the terms of use" puis cliquez sur "Create" :

![netatmoWeather14](../images/netatmoWeather14.png)

Récupérer les informations "CLient id" et "Client secret" et copier les dans la partie configuration du plugin dans Jeedom *(voir chapitre précedent)*.

![netatmoWeather15](../images/netatmoWeather15.png)

# Configuration des équipements

La configuration des équipements Netatmo est accessible à partir du menu plugin.

Vous retrouvez ici toute la configuration de votre équipement :

-   **Nom de l’équipement Netatmo** : nom de votre équipement Netatmo.
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement.
-   **Activer** : permet de rendre votre équipement actif.
-   **Visible** : le rend visible sur le dashboard.
-   **Identifiant** : identifiant unique de l’équipement.
-   **Type** : type de votre équipement (station, sonde intérieure, sonde extérieure…​).

En dessous vous retrouvez la liste des commandes :

-   le nom affiché sur le dashboard
-   historiser : permet d’historiser la donnée
-   configuration avancée (petites roues crantées) : permet d’afficher la configuration avancée de la commande (méthode d’historisation, widget…)
-   Tester : permet de tester la commande

> **ASTUCE**
>
> Lors du changement de mode de widget il est conseillé de cliquer sur synchroniser pour voir le résultat immédiatement.

# FAQ

>**Quelle est la fréquence de rafraichissement ?**
>
>Le systeme recupère les informations toutes les 15 minutes.
